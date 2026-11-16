const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const root=path.join(__dirname,'..'),sandbox={window:{}};
for(const file of ['faculdade.js','faculdade-deep.js'])vm.runInNewContext(fs.readFileSync(path.join(root,file),'utf8'),sandbox);
const tracks=sandbox.window.cy25Disciplines;
assert.equal(tracks.length,12);
assert.equal(new Set(tracks.map(t=>t.id)).size,12);
const lessons=tracks.flatMap(t=>t.stages.flatMap(s=>s.lessons));
assert.equal(lessons.length,64);
for(const t of tracks){
 assert.equal(t.stages.length,3);
 assert(t.reference.startsWith('https://'));
 assert(t.sources.length>=2,`${t.id} precisa de mais de uma fonte`);
 for(const [title,link] of t.sources){assert(title.length>6);assert(link.startsWith('https://'))}
 for(const stage of t.stages)for(const lesson of stage.lessons){
  assert(lesson.explain.length>=115,`${t.id}/${lesson.title}: teoria curta`);
  assert(lesson.example.length>=50,`${t.id}/${lesson.title}: exemplo curto`);
  assert(lesson.pitfall.length>=35,`${t.id}/${lesson.title}: erro comum curto`);
  assert(lesson.task.length>=30,`${t.id}/${lesson.title}: exercício insuficiente`);
  assert.equal(lesson.choices.length,3);
  assert.equal(new Set(lesson.choices).size,3);
  assert(lesson.answer>=0&&lesson.answer<3);
 }
}
let expanded=0;
for(const id of ['algebra','programming','requirements']){
 const t=tracks.find(t=>t.id===id);
 assert(t,`${id} ausente`);
 for(const l of t.stages.flatMap(s=>s.lessons)){
  assert(l.details.length>=250,`${l.title} sem teoria adicional`);
  assert(l.worked.length>=90,`${l.title} sem exemplo resolvido`);
  expanded++;
 }
}
assert.equal(expanded,18);
const html=fs.readFileSync(path.join(root,'index.html'),'utf8'),sw=fs.readFileSync(path.join(root,'sw.js'),'utf8');
for(const f of ['faculdade.js','faculdade-deep.js'])assert(sw.includes("'./"+f+"'"));
assert(html.includes('CATALOG.push(window.cy24SoftwareCourse,...window.cy25Disciplines,...window.cy26SatcCourses)'));
assert(html.includes('cy25-group'));
assert(html.includes('Biblioteca da matéria'));
console.log('OK: 12 matérias, 64 microaulas e 18 aulas com teoria adicional detalhada');
