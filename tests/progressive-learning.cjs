const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const root=path.resolve(__dirname,'..');
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
const sw=fs.readFileSync(path.join(root,'sw.js'),'utf8');
const context={window:{}};
for(const f of ['faculdade.js','faculdade-deep.js','software-course.js','satc-core.js','satc-1-3.js','satc-4-6.js','satc-7-8.js','satc-upgrade.js','academic-capstones.js','learning-progressive.js']){
 vm.runInNewContext(fs.readFileSync(path.join(root,f),'utf8'),context,{filename:f});
}
const learning=context.window.cy27Learning;
assert(learning,'Motor de progressão não foi carregado');
assert.equal(context.window.cy27Capstones.length,8);
assert.equal(learning.level({satcPhase:1},0),1);
assert.equal(learning.level({satcPhase:1},1),2);
assert.equal(learning.level({satcPhase:1},2),3);
assert.equal(learning.level({satcPhase:3},0),2);
assert.equal(learning.level({satcPhase:5},0),3);
assert.equal(learning.level({satcPhase:8},0),4);
assert.equal(learning.level({satcPhase:1},3),4);
assert(learning.validateDraft('Minha explicação e seus testes',learning.profile({satcPhase:1},1)).ok);
assert(!learning.validateDraft('curto',learning.profile({satcPhase:1},1)).ok);
assert(!learning.validateDraft('      ',learning.profile({satcPhase:8},0)).ok);
assert(learning.mission({task:'Monte protótipo',example:'Tela simples',question:'O que testar?',pitfall:'Ignorar público'},learning.profile({satcPhase:8},0)).checkpoints.length>=5);
assert(html.includes('<script src="./learning-progressive.js"></script>'));
assert(sw.includes("'./learning-progressive.js'"));

// Smoke-test da experiência de estudo, sem depender de navegador ou rede.
const elements=new Map();
function node(id){if(!elements.has(id))elements.set(id,{id,innerHTML:'',textContent:'',value:'',style:{},classList:{add(){},remove(){}},setAttribute(){},appendChild(){},prepend(){}});return elements.get(id)}
const local=new Map(),alerts=[];
context.document={getElementById:node,createElement:()=>node('overlay'),body:{style:{},appendChild(){}}};
context.localStorage={getItem:k=>local.get(k)??null,setItem:(k,v)=>local.set(k,v)};
context.alert=msg=>alerts.push(msg);
context.window.cy25Math={attach(){}};
context.window.cy16Mark=()=>{};
const inline=html.match(/<script id="cy12-expansion">([\s\S]*?)<\/script>/);
assert(inline,'Motor principal não localizado');
vm.runInNewContext(inline[1],context,{filename:'index-expanded.js'});
const w=context.window;
function quizAndAdvance(){
 w.cy12Next();w.cy12Next();
 let right=false;
 for(let i=0;i<3;i++){
  w.cy12Choose(i);w.cy12Check();
  if(node('cy12Body').innerHTML.includes('✓ Isso mesmo!')){w.cy12Check();right=true;break}
  w.cy12Check();
 }
 assert(right,'Questão deveria permitir conclusão ao acertar');
}

w.cy12Select('algebra');
w.cy12Stage(1);
w.cy12Open(0);
quizAndAdvance();
assert(node('cy12Body').innerHTML.includes('DESAFIO PROGRESSIVO'),'Nível 2 precisa de desafio escrito');
node('cy27Draft').value='';w.cy27Reveal();
assert(node('cy27DraftStatus').textContent.includes('22 caracteres'),'Rascunho curto deve ser recusado');
node('cy27Draft').value='Resolvo identificando as operações e conferindo o resultado com outro exemplo.';
w.cy27Reveal();
assert(node('cy12Body').innerHTML.includes('Checklist para comparar'),'A autocorreção deve aparecer após responder');
w.cy27Assess('pronto');w.cy12Next();
node('cy12Note').value='Expliquei o problema, confrontei critérios e identifiquei um teste aplicável.';
w.cy12Finish();
const state=JSON.parse(local.get('cyberlab_expansion_v1'));
assert.equal(state['algebra:1:0'].difficulty,2);
assert.equal(state['algebra:1:0'].needsReview,false);
assert(state['algebra:1:0'].notes.aprendiz.length>22);

w.cy12Close();w.cy12Stage(3);w.cy12Open(0);
quizAndAdvance();
node('cy27Draft').value='Minha proposta usa um pequeno projeto com hipóteses, justificativas, medição, teste comparativo e análise do que poderia dar errado no uso real.';
w.cy27Reveal();w.cy27Assess('revisar');w.cy12Next();
node('cy12Note').value='Preciso rever o assunto. Minha estratégia será estudar a regra, montar um caso novo, testar o resultado e comparar as soluções para achar a falha.';
w.cy12Finish();
const state2=JSON.parse(local.get('cyberlab_expansion_v1'));
assert.equal(state2['algebra:3:0'].difficulty,4);
assert.equal(state2['algebra:3:0'].needsReview,true);
assert(node('cy12Body').innerHTML.includes('revisar'),'Resumo deve sinalizar dificuldade');

// Interromper no Samsung deve preservar rascunho mesmo sem concluir a aula.
w.cy12Close();w.cy12Stage(1);w.cy12Open(1);
quizAndAdvance();
node('cy27Draft').value='Preciso verificar o exemplo de outra maneira antes de concluir meu exercício.';
w.cy12Close();
const paused=JSON.parse(local.get('cyberlab_expansion_v1'));
assert.equal(paused['algebra:1:1'].completed,false);
assert(paused['algebra:1:1'].draft.includes('outra maneira'),'Rascunho interrompido não foi salvo');
w.cy12Open(1);quizAndAdvance();
assert(node('cy12Body').innerHTML.includes('Preciso verificar'),'Rascunho não voltou ao reabrir');
assert(html.includes('onclick="cy27Back()"'),'Aula precisa de botão para voltar');
assert.equal(alerts.length,0,'Fluxo válido não deve produzir alertas');
console.log('APROVADO: níveis 1–4, desafio escrito, autocorreção, notas, revisão e retomada de rascunho.');
