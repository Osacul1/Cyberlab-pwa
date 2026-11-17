const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const root=path.join(__dirname,'..');
const sandbox={window:{}};
vm.runInNewContext(fs.readFileSync(path.join(root,'deep-skills.js'),'utf8'),sandbox);
const entries=sandbox.window.cy21DeepSkills;
assert.equal(Object.keys(entries).length,50);
for(let i=19;i<=68;i++){
 const lesson=entries[i];assert(lesson,`Aula ausente: ${i}`);
 assert(lesson.concept.length>100,`Explicação curta: ${i}`);
 assert(lesson.example.length>75,`Exemplo curto: ${i}`);
 assert(lesson.pitfall.length>45,`Erro comum curto: ${i}`);
 assert.equal(lesson.quiz.o.length,3);
 assert(lesson.quiz.a>=0&&lesson.quiz.a<3);
 assert(lesson.quiz.e.length>30);
}
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
assert(html.includes('window.cy21DeepSkills?.[lessons.indexOf(x)]'));
assert(html.includes('./deep-skills.js'));
assert(fs.readFileSync(path.join(root,'sw.js'),'utf8').includes("'./deep-skills.js'"));
console.log('OK: 50 aulas técnicas individualizadas, exercícios e cache offline');
