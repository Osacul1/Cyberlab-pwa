// Auditoria estrutural e de qualidade do conteúdo; não substitui revisão técnica humana.
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const path=require('node:path');
const root=path.resolve(__dirname,'..');
const context={window:{}};
const external=['faculdade.js','faculdade-deep.js','software-course.js','satc-core.js','satc-1-3.js','satc-4-6.js','satc-7-8.js','satc-upgrade.js','academic-capstones.js','learning-progressive.js'];
for(const file of external)vm.runInNewContext(fs.readFileSync(path.join(root,file),'utf8'),context,{filename:file});
const tracks=[...context.window.cy25Disciplines,...context.window.cy26SatcCourses];
const lessons=tracks.flatMap(t=>t.stages.flatMap(s=>s.lessons));
const capstones=lessons.filter(l=>l.capstone);
const metrics={tracks:tracks.length,lessons:lessons.length,capstones:capstones.length,examples:0,appliedTasks:0,worked:0,misconceptions:0,explanations:0,references:new Set(),issues:[]};
for(const course of tracks){
 const names=new Set();
 assert(course.stages.every(s=>s.lessons.length),'Etapa vazia em '+course.id);
 assert(course.sources.some(([,url])=>url.startsWith('https://')),'Bibliografia ausente: '+course.id);
 for(const [,url] of course.sources)metrics.references.add(url);
 let previous=0;
 for(const [stageIndex,unit] of course.stages.entries()){
  const difficulty=context.window.cy27Learning.level(course,stageIndex);
  assert(difficulty>=previous,'Progressão recuou em '+course.id);
  previous=difficulty;
  for(const l of unit.lessons){
   assert(!names.has(l.title),'Aula duplicada na disciplina '+course.id+': '+l.title);
   names.add(l.title);
   assert(typeof l.question==='string'&&l.question.length>10,'Sem desafio: '+l.title);
   assert(Array.isArray(l.choices)&&l.choices.length===3,'Alternativas incorretas: '+l.title);
   assert(new Set(l.choices).size===3,'Alternativas repetidas: '+l.title);
   assert(l.answer>=0&&l.answer<3,'Resposta fora das opções: '+l.title);
   assert(typeof l.explain==='string'&&l.explain.length>=75,'Teoria insuficiente: '+l.title);
   assert(typeof l.example==='string'&&l.example.length>=25,'Exemplo insuficiente: '+l.title);
   assert(typeof l.task==='string'&&l.task.length>=25,'Aplicação insuficiente: '+l.title);
   assert(typeof l.pitfall==='string'&&l.pitfall.length>=30,'Erro comum ausente: '+l.title);
   assert(typeof l.details==='string'&&l.details.length>=95,'Aprofundamento insuficiente: '+l.title);
   assert(typeof l.worked==='string'&&l.worked.length>=55,'Análise ausente: '+l.title);
   metrics.examples++;metrics.appliedTasks++;metrics.worked++;metrics.misconceptions++;metrics.explanations++;
  }
 }
}
assert.equal(metrics.lessons,297,'Conteúdo acadêmico mudou inesperadamente');
assert.equal(metrics.capstones,8,'Desafios por fase faltando');
assert(metrics.references.size>=8,'Pouca diversidade de bibliografia');
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
const sw=fs.readFileSync(path.join(root,'sw.js'),'utf8');
for(const file of external.slice(3)){
 assert(html.includes('<script src="./'+file+'"></script>'),'Script faltando no HTML: '+file);
 assert(sw.includes("'./"+file+"'"),'Script faltando no cache: '+file);
}
const shell=sw.match(/const SHELL=(\[[^\n]+\]);/);
assert(shell,'Lista offline não foi localizada');
const paths=vm.runInNewContext(shell[1]);
for(const file of paths)assert(fs.existsSync(path.resolve(root,file)),'PWA não contém recurso offline: '+file);
const mean=(lessons.reduce((a,l)=>a+l.explain.length+l.details.length,0)/lessons.length).toFixed(0);
console.log('AUDITORIA APROVADA:',metrics.tracks,'matérias,',metrics.lessons,'aulas,',metrics.capstones,'projetos integradores,',metrics.references.size,'URLs bibliográficas,',paths.length,'recursos offline. Média de',mean,'caracteres por teoria+aprofundamento.');
