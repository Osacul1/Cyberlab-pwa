// Testes estáticos executáveis em Node.js: node tests/regression.cjs
const fs=require('node:fs');
const vm=require('node:vm');
const assert=require('node:assert/strict');
const path=require('node:path');
const root=path.resolve(__dirname,'..');
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
const manifest=JSON.parse(fs.readFileSync(path.join(root,'manifest.webmanifest'),'utf8'));
const sw=fs.readFileSync(path.join(root,'sw.js'),'utf8');

const scripts=[...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)];
for(const script of scripts)new vm.Script(script[1]);
const core=html.slice(html.indexOf('const L=(phase'),html.indexOf('const defaultState='));
const lessons=JSON.parse(vm.runInNewContext(core+'\nJSON.stringify(lessons)'));
assert.equal(lessons.length,139,'Catálogo existente de Cybersecurity deve manter 139 aulas');
assert.equal(new Set(lessons.map(l=>l.stableId)).size,lessons.length,'IDs de aulas precisam ser exclusivos');
for(const [i,l] of lessons.entries()){
 assert(Number.isInteger(l.phase)&&l.phase>=0&&l.phase<14,'Fase inválida: '+i);
 assert(Array.isArray(l.questions)&&l.questions.length>0,'Aula sem questões: '+i);
 for(const q of l.questions)assert(Array.isArray(q.o)&&q.o.length>1&&Number.isInteger(q.a)&&q.a>=0&&q.a<q.o.length,'Questão inválida: '+i);
}
const start=html.indexOf('const CATALOG='),end=html.indexOf(';\nconst KEY=',start);
const softwareSandbox={window:{}};
vm.runInNewContext(fs.readFileSync(path.join(root,'faculdade.js'),'utf8'),softwareSandbox);
vm.runInNewContext(fs.readFileSync(path.join(root,'faculdade-deep.js'),'utf8'),softwareSandbox);
vm.runInNewContext(fs.readFileSync(path.join(root,'software-course.js'),'utf8'),softwareSandbox);
for(const f of ['satc-core.js','satc-1-3.js','satc-4-6.js','satc-7-8.js','satc-upgrade.js','academic-capstones.js']){
 vm.runInNewContext(fs.readFileSync(path.join(root,f),'utf8'),softwareSandbox);
}
const tracks=JSON.parse(vm.runInNewContext(html.slice(start,end)+';JSON.stringify(CATALOG)',softwareSandbox));
let extraCount=0;
for(const track of tracks)for(const stage of track.stages)for(const lesson of stage.lessons){
 extraCount++;
 assert(Array.isArray(lesson.choices)&&lesson.choices.length===3,'Opções inválidas: '+lesson.title);
 assert(Number.isInteger(lesson.answer)&&lesson.answer>=0&&lesson.answer<lesson.choices.length,'Gabarito inválido: '+lesson.title);
}
assert.equal(extraCount,417);
const handlers=[...new Set([...html.matchAll(/\bonclick="([a-zA-Z_$][\w$]*)\s*\(/g)].map(x=>x[1]))];
for(const name of handlers){if(name==='alert')continue;assert(new RegExp('(?:function\\s+'+name+'\\s*\\(|(?:window\\.)?'+name+'\\s*=)').test(html),'Função de botão ausente: '+name)}
assert.equal(manifest.name.includes('27.0'),true);
for(const item of [manifest.start_url,'./index.html','./manifest.webmanifest',...manifest.icons.map(i=>i.src)]){
 assert(fs.existsSync(path.resolve(root,item)),'Arquivo PWA ausente: '+item);
}
assert(sw.includes('cyberlab-pwa-27-1-navfix'),'Cache deve corresponder à versão 27.1 com correção de navegação');
for(const asset of ['simlabs.js','simlabs.css'])assert(fs.existsSync(path.join(root,asset)),'Recurso de laboratório ausente: '+asset);
new vm.Script(fs.readFileSync(path.join(root,'simlabs.js'),'utf8'));
console.log('APROVADO:',scripts.length,'scripts;',handlers.length,'funções de botão;',lessons.length,'aulas Cybersecurity;',extraCount,'aulas adicionais; PWA completo.');
