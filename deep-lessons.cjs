const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const root=path.join(__dirname,'..');
const code=fs.readFileSync(path.join(root,'deep-lessons.js'),'utf8');
const sandbox={window:{}};
vm.runInNewContext(code,sandbox);
const lessons=sandbox.window.cy19DeepLessons;
assert.equal(Object.keys(lessons).length,19,'Esperadas 19 aulas aprofundadas');
for(let i=0;i<19;i++){
 const item=lessons[i];
 assert(item,`Aula ${i} ausente`);
 for(const field of ['concept','example'])assert(item[field].length>80,`${field} insuficiente na aula ${i}`);
 assert(item.pitfall.length>45,`Erro comum insuficiente na aula ${i}`);
 assert.equal(item.quiz.o.length,3,`Alternativas na aula ${i}`);
 assert(Number.isInteger(item.quiz.a)&&item.quiz.a>=0&&item.quiz.a<3,`Gabarito inválido na aula ${i}`);
 assert(item.quiz.e.length>30,`Feedback insuficiente na aula ${i}`);
}
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
assert(html.includes('journeyQuestionCount()'),'Avaliação deve usar todas as questões');
assert(html.includes('./deep-lessons.js'),'Conteúdo extra deve ser carregado');
const sw=fs.readFileSync(path.join(root,'sw.js'),'utf8');
assert(sw.includes("'./deep-lessons.js'"),'Conteúdo extra deve funcionar offline');
console.log('OK: 19 aulas aprofundadas, quizzes e cache offline');
