/* CYBERLAB 27 — Dificuldade real por etapa e fase, com prática de recuperação.
 * Conteúdo autoral. Autocorreção escrita é guiada, nunca apresentada como correção por IA. */
(function(){'use strict';
const labels=[
 {name:'Fundamentos',badge:'🟢',goal:'Reconhecer conceitos e explicar o exemplo.',kind:'Identifique e explique',min:0},
 {name:'Aplicação',badge:'🔵',goal:'Resolver um caso simples com pistas limitadas.',kind:'Aplique sem copiar o exemplo',min:22},
 {name:'Análise',badge:'🟣',goal:'Justificar decisões, comparar alternativas e localizar erros.',kind:'Justifique e investigue o erro',min:42},
 {name:'Projeto',badge:'🔴',goal:'Produzir solução, testar hipóteses e avaliar riscos.',kind:'Projete, valide e documente',min:70}
];
const clamp=n=>Math.min(4,Math.max(1,n));
function level(track,stage){
 const phase=Number(track?.satcPhase||0);
 const phaseFloor=phase>=7?4:phase>=5?3:phase>=3?2:1;
 return clamp(Math.max(Number(stage||0)+1,phaseFloor));
}
function profile(track,stage){const tier=level(track,stage);return {tier,...labels[tier-1]};}
function mission(lesson,profile){
 const task=lesson?.task||'Explique a aplicação do conceito em um caso real ou fictício, com seus próprios passos.';
 const question=lesson?.question||'Que evidência demonstra que o procedimento funciona?';
 const pitfall=lesson?.pitfall||'Evite conclusões que não foram verificadas.';
 const phases=[
  'Leia o conceito, explique o exemplo e responda à questão.',
  'Resolva o exercício sem reler a explicação. Depois compare com o exemplo.',
  'Resolva, explique por que uma alternativa comum estaria errada e proponha um teste.',
  'Faça uma mini-entrega técnica: hipótese, solução, teste, limitação e próximo passo.'
 ];
 return {statement:phases[profile.tier-1]+'\n\n'+task,
  checkpoints:[
   'Conceito: sua explicação faz sentido para a pergunta “'+question+'”?',
   'Evidência: o resultado é coerente com este caso? '+(lesson?.example||''),
   'Limitação: você evitou esta armadilha? '+pitfall,
   ...(profile.tier>=3?['Teste: descreva uma entrada, um resultado esperado e como detectaria erro.']:[]),
   ...(profile.tier>=4?['Transferência: indique um caso diferente, custo, risco e justificativa técnica.']:[])
  ],
  hint:'Se travar: localize a definição no começo da aula, aplique-a ao exemplo e tente novamente antes de consultar a solução.'};
}
function validateDraft(value,profile){
 const text=String(value||'').trim();
 if(profile.tier===1)return {ok:true,message:'O exercício guiado é opcional nesta etapa.'};
 if(text.length<profile.min)return {ok:false,message:'Escreva pelo menos '+profile.min+' caracteres para registrar seu raciocínio. Você escreveu '+text.length+'.'};
 if(text.replace(/\s+/g,'').length<profile.min/2)return {ok:false,message:'Use palavras e passos explicativos, não só espaços ou símbolos.'};
 return {ok:true,message:'Rascunho registrado. Confira os critérios e avalie sua própria solução.'};
}
window.cy27Learning={labels,level,profile,mission,validateDraft};
})();
