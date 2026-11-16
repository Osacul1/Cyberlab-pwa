/* CYBERLAB 26 — Conteúdo autoral estruturado pela matriz pública 2 do bacharelado UniSatc.
 * Não há afiliação com a instituição nem reprodução de apostilas ou aulas fechadas. */
(function(){'use strict';
const SATC='https://unisatc.com.br/graduacao/engenharia-de-software/';
const SWEBOK='https://www.computer.org/education/bodies-of-knowledge/software-engineering/topics';
const MDN='https://developer.mozilla.org/pt-BR/docs/Learn_web_development';
const PYTHON='https://docs.python.org/pt-br/3/tutorial/';
const POSTGRES='https://www.postgresql.org/docs/current/tutorial.html';
const OPENSTAX='https://openstax.org/subjects/math';
const CC='https://cs50.harvard.edu/x/';
const SCRUM='https://scrumguides.org/scrum-guide.html';
const GOOGLE='https://developers.google.com/';
const AWS='https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html';
const OWASP='https://owasp.org/www-project-top-ten/';
const GIT='https://git-scm.com/book/pt-br/v2';
const references={SATC,SWEBOK,MDN,PYTHON,POSTGRES,OPENSTAX,CC,SCRUM,GOOGLE,AWS,OWASP,GIT};
const records=[];
const phases=[
 '1ª fase · Padawan', '2ª fase · Stormtrooper', '3ª fase · Han Solo',
 '4ª fase · R2D2','5ª fase · Yoda','6ª fase · Luke Skywalker',
 '7ª fase · Darth Vader','8ª fase · Mestre Jedi'];
function add(phase,id,icon,name,summary,source,rows){
 if(!Number.isInteger(phase)||phase<1||phase>8||!rows.length)throw Error('Disciplina inválida: '+id);
 const reference=references[source]||source||SATC;
 const lessons=rows.map((r,i)=>{
  if(r.length!==9)throw Error('Aula incompleta: '+id+'/'+i);
  const shift=i%3,options=[r[4],r[5],r[6]];
  const rotated=options.map((_,j)=>options[(j-shift+3)%3]);
  return {title:r[0],explain:r[1],example:r[2],question:r[3],choices:rotated,answer:shift,
   task:r[7],pitfall:r[8],reference,academic:true,satc:true,guided:true,
   details:'Aprofundamento de '+r[0]+': '+r[1]+' Um limite ou confusão relevante: '+r[8]+' Depois de compreender a regra, a atividade de fixação é: '+r[7]+' Identifique premissas, unidades e resultados esperados antes de resolver.',
   worked:'Estudo guiado do caso: '+r[2]+' Critério que diferencia a alternativa correta: '+r[4]+'. Verificação crítica: '+r[8]+' Em seguida, resolva a tarefa por conta própria: '+r[7]};
 });
 const cut1=Math.ceil(lessons.length/3),cut2=Math.ceil(lessons.length*2/3);
 records.push({id,icon,name:'Faculdade · '+name,desc:summary,academic:true,satc:true,satcPhase:phase,reference,
  sources:[['UniSatc · matriz e ementa pública',SATC],['Material de aprofundamento',reference]],
  stages:[{name:'Unidade 1 · Conceitos',lessons:lessons.slice(0,cut1)},
          {name:'Unidade 2 · Aplicação',lessons:lessons.slice(cut1,cut2)},
          {name:'Unidade 3 · Consolidação',lessons:lessons.slice(cut2)}]});
}
window.cy26Add=add;
window.cy26SatcCourses=records;
window.cy26SatcPhases=phases;
})();
