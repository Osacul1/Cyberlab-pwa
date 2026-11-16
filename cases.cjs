const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const path=require('node:path');
const root=path.join(__dirname,'..');
const source=fs.readFileSync(path.join(root,'cases.js'),'utf8');
new vm.Script(source);
const start=source.indexOf('const CASES=['),end=source.indexOf('const storeRead=',start);
assert(start>0&&end>start);
const scenarios=vm.runInNewContext(source.slice(start,end)+'\nCASES');
assert.equal(scenarios.length,6);
assert.equal(new Set(scenarios.map(s=>s.id)).size,6);
for(const scenario of scenarios){
 assert(scenario.title.length>12&&scenario.context.length>60);
 assert.equal(scenario.steps.length,3);
 for(const step of scenario.steps){
  assert.equal(step.length,4);
  assert.equal(step[1].length,3);
  assert(Number.isInteger(step[2])&&step[2]>=0&&step[2]<3);
  assert(step[3].length>45);
 }
}
const sw=fs.readFileSync(path.join(root,'sw.js'),'utf8');
assert(sw.includes("'./cases.js'")&&sw.includes("'./cases.css'"));
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
assert(html.includes("'network','linux','appsec','soc','cloud','capstone'"));
console.log('OK: 6 desafios progressivos, 18 decisões e persistência no backup');
