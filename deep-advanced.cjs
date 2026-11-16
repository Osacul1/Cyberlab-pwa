const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const root=path.join(__dirname,'..');
const sandbox={window:{}};
vm.runInNewContext(fs.readFileSync(path.join(root,'deep-advanced.js'),'utf8'),sandbox);
const entries=sandbox.window.cy22DeepAdvanced;
assert.equal(Object.keys(entries).length,62,'O catálogo avançado precisa ter 62 complementos');
for(let i=69;i<=130;i++){
 const l=entries[i];assert(l,`Aula ${i} ausente`);
 for(const key of ['concept','example','pitfall'])assert(l[key].length>65,`Aula ${i} precisa de ${key} específico`);
}
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
assert(html.includes('window.cy22DeepAdvanced?.[lessons.indexOf(x)]'));
assert(html.includes('if(deep?.quiz)'),'Aulas avançadas sem questão extra devem manter os exercícios originais');
const sw=fs.readFileSync(path.join(root,'sw.js'),'utf8');
assert(sw.includes("'./deep-advanced.js'"));
console.log('OK: 62 complementos avançados e cache offline');
