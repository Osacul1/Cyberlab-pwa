// Auditoria automatizada do curso de Engenharia de Software — CYBERLAB 26.0.
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const path=require('node:path');
const root=path.resolve(__dirname,'..');
const sandbox={window:{}};
const scripts=['faculdade.js','faculdade-deep.js','software-course.js','satc-core.js','satc-1-3.js','satc-4-6.js','satc-7-8.js','satc-upgrade.js','academic-capstones.js'];
for(const file of scripts)vm.runInNewContext(fs.readFileSync(path.join(root,file),'utf8'),sandbox,{filename:file});
const old=sandbox.window.cy25Disciplines, added=sandbox.window.cy26SatcCourses;
const courses=[...old,...added];
assert.equal(old.length,12,'Trilhas acadêmicas antigas foram removidas');
assert.equal(added.length,33,'A expansão não cobre as 33 disciplinas novas');
assert.equal(sandbox.window.cy26SatcPhases.length,8,'O bacharelado precisa de oito fases');
assert.equal(new Set(courses.map(t=>t.id)).size,courses.length,'IDs de trilhas duplicados');
assert.deepEqual(Array.from({length:8},(_,i)=>courses.filter(t=>t.satcPhase===i+1).length),[5,5,5,6,5,5,5,6]);
const oldLessons=old.flatMap(t=>t.stages.flatMap(s=>s.lessons));
const newLessons=added.flatMap(t=>t.stages.flatMap(s=>s.lessons));
assert.equal(oldLessons.length,126,'As 12 disciplinas precisam preservar as 124 aulas e receber dois desafios integradores');
assert.equal(newLessons.length,171,'As disciplinas da nova matriz precisam preservar 165 aulas e receber mais seis desafios');
assert.equal(sandbox.window.cy27Capstones.length,8,'Cada fase deve conter um desafio integrador');
for(const course of courses){
 assert(course.stages.length>=3,course.id+' sem progressão em unidades');
 const seen=new Set();
 for(const stage of course.stages){
  assert(stage.name.length>6,course.id+' com nome de unidade incompleto');
  assert(stage.lessons.length>=1,course.id+' com unidade vazia');
  for(const l of stage.lessons){
   assert(!seen.has(l.title),course.id+' repetiu aula '+l.title);
   seen.add(l.title);
   assert(typeof l.explain==='string'&&l.explain.length>75,course.id+'/'+l.title+' sem teoria');
   assert(typeof l.example==='string'&&l.example.length>25,course.id+'/'+l.title+' sem exemplo');
   assert(typeof l.question==='string'&&l.question.length>10,course.id+'/'+l.title+' sem questão');
   assert(Array.isArray(l.choices)&&l.choices.length===3,course.id+'/'+l.title+' sem alternativas');
   assert.equal(new Set(l.choices).size,3,course.id+'/'+l.title+' com alternativas duplicadas');
   assert(Number.isInteger(l.answer)&&l.answer>=0&&l.answer<3,course.id+'/'+l.title+' sem gabarito');
   assert(typeof l.task==='string'&&l.task.length>25,course.id+'/'+l.title+' sem exercício de aplicação');
   assert(typeof l.pitfall==='string'&&l.pitfall.length>30,course.id+'/'+l.title+' sem erro comum');
   assert(typeof l.details==='string'&&l.details.length>95,course.id+'/'+l.title+' sem aprofundamento');
   assert(typeof l.worked==='string'&&l.worked.length>55,course.id+'/'+l.title+' sem análise do exemplo');
  }
 }
 assert(course.sources.some(([,url])=>url.includes('unisatc.com.br'))||!course.satc,course.id+' sem fonte curricular SATC');
}
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
const sw=fs.readFileSync(path.join(root,'sw.js'),'utf8');
for(const file of scripts.slice(3)){
 assert(html.includes('<script src="./'+file+'"></script>'),file+' não integrado ao HTML');
 assert(sw.includes("'./"+file+"'"),file+' não pré-armazenado offline');
}
assert(html.includes('cy26-phase-list'),'Menu da faculdade não está organizado por semestre');
assert(html.includes('...window.cy26SatcCourses'),'Novas disciplinas não estão no catálogo');
const math=fs.readFileSync(path.join(root,'math-lab.js'),'utf8');
for(const id of ['satc_calculus2','satc_stats_applied','satc_economics'])assert(math.includes("'"+id+"'"),id+' sem calculadora');
console.log('APROVADO: 8 fases, 42 componentes SATC, 33 matérias novas, 297 aulas acadêmicas, 8 desafios integradores, calculadora e cache offline.');
