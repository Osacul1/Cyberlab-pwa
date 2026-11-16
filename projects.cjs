// Verifica a estrutura pedagógica dos projetos sem precisar de navegador.
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),path=require('node:path');
const html=fs.readFileSync(path.join(__dirname,'..','index.html'),'utf8');
const a=html.indexOf('const PROJECTS=['),b=html.indexOf('];\n const read=',a);
assert(a>=0&&b>a,'Catálogo de projetos não encontrado');
const projects=JSON.parse(vm.runInNewContext(html.slice(a,b+2)+';JSON.stringify(PROJECTS)'));
assert.equal(projects.length,14,'Um projeto deve corresponder a cada etapa principal');
for(const [i,p] of projects.entries()){
 for(const field of ['title','scenario','goal','evidence','hint'])assert(typeof p[field]==='string'&&p[field].length>20,'Campo insuficiente em '+i+': '+field);
 assert(Array.isArray(p.tasks)&&p.tasks.length===4,'Projeto '+i+' deve ter quatro tarefas');
 assert(p.tasks.every(t=>typeof t==='string'&&t.length>25),'Tarefa superficial em '+i);
}
console.log('APROVADO:',projects.length,'projetos completos, 56 tarefas e campos de orientação.');
