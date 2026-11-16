const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const root=path.join(__dirname,'..');
const source=fs.readFileSync(path.join(root,'software-course.js'),'utf8');
const sandbox={window:{}};vm.runInNewContext(source,sandbox);
const track=sandbox.window.cy24SoftwareCourse;
assert.equal(track.id,'swe');
assert.equal(track.stages.length,4);
const lessons=track.stages.flatMap(s=>s.lessons);
assert.equal(lessons.length,16);
assert.equal(new Set(lessons.map(l=>l.title)).size,16);
for(const l of lessons){
 assert(l.explain.length>125,`Explicação insuficiente: ${l.title}`);
 assert(l.example.length>90,`Exemplo insuficiente: ${l.title}`);
 assert.equal(l.choices.length,3);
 assert(Number.isInteger(l.answer)&&l.answer>=0&&l.answer<3);
}
assert(new Set(lessons.map(l=>l.answer)).size===3,'As posições corretas devem variar');
const sw=fs.readFileSync(path.join(root,'sw.js'),'utf8');
assert(sw.includes("'./software-course.js'"));
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
assert(html.includes('CATALOG.push(window.cy24SoftwareCourse,...window.cy25Disciplines,...window.cy26SatcCourses)'));
assert(html.includes("swe:['Conecte o conceito"));
console.log('OK: 16 aulas de Engenharia de Software, 4 etapas e cache offline');
