/* CYBERLAB 25 — Laboratório matemático offline. Interpretador próprio, sem eval. */
(function(){
'use strict';
const mathTracks=new Set(['math','algebra','discrete','calculus','statistics','satc_calculus2','satc_stats_applied','satc_economics']);
const functions={
 sqrt:v=>v<0?NaN:Math.sqrt(v), abs:Math.abs,
 ln:v=>v<=0?NaN:Math.log(v), log:v=>v<=0?NaN:Math.log10(v),
 exp:Math.exp, sin:(v,d)=>Math.sin(d?v*Math.PI/180:v),
 cos:(v,d)=>Math.cos(d?v*Math.PI/180:v),
 tan:(v,d)=>{const angle=d?v*Math.PI/180:v;return Math.abs(Math.cos(angle))<1e-12?NaN:Math.tan(angle)}
};
const history=new Map();
const storageKey='cyberlab_mathlab_v1';
try{
 const raw=JSON.parse(typeof localStorage==='undefined'?'{}':localStorage.getItem(storageKey)||'{}');
 if(raw&&typeof raw==='object'&&!Array.isArray(raw))for(const [key,v] of Object.entries(raw).slice(-70)){
  if(typeof key==='string'&&key.length<100&&v&&typeof v==='object')history.set(key,{
   expression:String(v.expression||'').slice(0,120),notes:String(v.notes||'').slice(0,2500),result:String(v.result||'').slice(0,500),degrees:v.degrees!==false,open:!!v.open
  });
 }
}catch{}
function persist(){
 try{if(typeof localStorage==='undefined')return;const obj={};for(const [k,v] of [...history].slice(-70))obj[k]=v;localStorage.setItem(storageKey,JSON.stringify(obj))}catch{}
}
const format=v=>Number.isFinite(v)?String(Number(v.toPrecision(11))):'Resultado indefinido';
function tokenize(expression){
 const input=String(expression||'').replace(/−/g,'-').replace(/×/g,'*').replace(/÷/g,'/').replace(/√/g,'sqrt').replace(/,/g,'.').trim();
 if(!input||input.length>120)throw Error('Digite uma expressão de até 120 caracteres.');
 const tokens=[];let p=0;
 while(p<input.length){
  if(/\s/.test(input[p])){p++;continue}
  const part=input.slice(p),number=part.match(/^(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?/);
  if(number){tokens.push({type:'num',value:Number(number[0])});p+=number[0].length;continue}
  const word=part.match(/^[a-zA-Z]+/);
  if(word){tokens.push({type:'id',value:word[0].toLowerCase()});p+=word[0].length;continue}
  const char=input[p];
  if(char==='π'){tokens.push({type:'id',value:'pi'});p++;continue}
  if('+-*/^()%!='.includes(char)){tokens.push({type:char,value:char});p++;continue}
  throw Error('Símbolo “'+char+'” é para anotações, não para esta calculadora.');
 }
 const withMultiply=[];
 for(let i=0;i<tokens.length;i++){
  const current=tokens[i],previous=withMultiply[withMultiply.length-1];
  const ends=previous&&(previous.type==='num'||previous.type===')'||previous.type==='!'||previous.type==='%'||(previous.type==='id'&&['x','pi','e'].includes(previous.value)));
  const begins=current.type==='num'||current.type==='('||current.type==='id';
  if(ends&&begins)withMultiply.push({type:'*',value:'*'});
  withMultiply.push(current);
 }
 return withMultiply;
}
function evaluate(expression,x=0,degrees=true){
 const tokens=tokenize(expression),pos={i:0};
 const peek=()=>tokens[pos.i];const take=()=>tokens[pos.i++];
 const safe=v=>{if(!Number.isFinite(v))throw Error('Resultado indefinido. Confira divisões, raízes e funções.');return v};
 const factorial=n=>{if(!Number.isInteger(n)||n<0||n>170)throw Error('Fatorial: use um inteiro de 0 a 170.');let v=1;for(let i=2;i<=n;i++)v*=i;return v};
 function atom(){
  const t=take();if(!t)throw Error('Expressão incompleta.');
  if(t.type==='num')return safe(t.value);
  if(t.type==='+'||t.type==='-'){const v=parse(3);return t.type==='-'?-v:v}
  if(t.type==='('){const v=parse(0);if(!peek()||take().type!==')')throw Error('Faltou fechar um parêntese.');return v}
  if(t.type==='id'){
   if(t.value==='pi')return Math.PI;
   if(t.value==='e')return Math.E;
   if(t.value==='x')return x;
   if(!Object.prototype.hasOwnProperty.call(functions,t.value))throw Error('Função não reconhecida: '+t.value+'.');
   if(!peek()||take().type!=='(')throw Error('Use '+t.value+'(valor).');
   const v=parse(0);if(!peek()||take().type!==')')throw Error('Feche o parêntese da função.');
   return safe(functions[t.value](v,degrees));
  }
  throw Error('Verifique a posição de “'+t.value+'”.');
 }
 function parse(min){
  let left=atom();
  while(peek()){
   let t=peek();
   if(t.type==='!'||t.type==='%'){
    if(5<min)break;take();left=safe(t.type==='!'?factorial(left):left/100);continue;
   }
   const prec={'+':1,'-':1,'*':2,'/':2,'^':4}[t.type];
   if(!prec||prec<min)break;
   take();const right=parse(t.type==='^'?prec:prec+1);
   if(t.type==='+')left+=right;
   if(t.type==='-')left-=right;
   if(t.type==='*')left*=right;
   if(t.type==='/'){if(right===0)throw Error('Divisão por zero não é permitida.');left/=right}
   if(t.type==='^')left=Math.pow(left,right);
   left=safe(left);
  }
  return left;
 }
 const result=parse(0);
 if(pos.i!==tokens.length)throw Error('Há operadores ou parênteses fora de lugar.');
 return safe(result);
}
// Resolve apenas equações afins em x. Detecta não linearidade testando outros valores.
function solve(equation,degrees=true){
 const parts=String(equation).split('=');
 if(parts.length!==2||!parts[0].trim()||!parts[1].trim())throw Error('Use uma equação como 2x+6=14.');
 const f=x=>evaluate(parts[0],x,degrees)-evaluate(parts[1],x,degrees);
 const b=f(0),a=f(1)-b;
 const tolerance=Math.max(1,Math.abs(a),Math.abs(b))*1e-7;
 if(Math.abs(f(2)-(2*a+b))>tolerance||Math.abs(f(-1)-(-a+b))>tolerance)throw Error('Esta ferramenta resolve somente equações lineares em x.');
 if(Math.abs(a)<1e-12){return Math.abs(b)<tolerance?'Infinitas soluções: ambos os lados são equivalentes.':'Sem solução: os dois lados nunca ficam iguais.'}
 const x=-b/a;
 if(Math.abs(f(x))>Math.max(tolerance,1e-7))throw Error('Não foi possível validar esta solução.');
 return 'Reorganizando: '+format(a)+'x + ('+format(b)+') = 0.\n'+format(a)+'x = '+format(-b)+'.\nDividindo por '+format(a)+': x = '+format(x)+'.\nConferência: esquerdo = '+format(evaluate(parts[0],x,degrees))+'; direito = '+format(evaluate(parts[1],x,degrees))+'.';
}
const numeric=['7','8','9','÷','4','5','6','×','1','2','3','−','0','.','(',')'];
const scientific=['x','π','e','+','^','√(', 'sin(', 'cos(', 'tan(', 'ln(', 'log(', 'abs(', '!','%','='];
const symbols=['≤','≥','≠','≈','∞','∑','∫','∈','∉','⊂','∪','∩','∧','∨','¬','⇒','∀','∃','Δ','θ'];
const presets=[['Equação','2x+6=14'],['Função','x^2-4'],['Pitágoras','√(3^2+4^2)'],['Porcentagem','200*15%'],['Trigonometria','sin(30)']];
function attach(container,{trackId,lessonId}){
 if(!mathTracks.has(trackId)||!container)return;
 const key=String(lessonId||trackId),state=history.get(key)||{expression:'',notes:'',result:'',degrees:true,open:false};
 history.set(key,state);
 const box=document.createElement('details');box.className='cy25-mathlab';box.open=state.open;
 const makeButtons=(keys,kind)=>keys.map(v=>'<button type="button" data-kind="'+kind+'" data-value="'+v+'" aria-label="Inserir '+v+'">'+v+'</button>').join('');
 box.innerHTML='<summary>🧮 Laboratório de matemática · teclado próprio <small>offline</small></summary>'+
 '<div class="cy25-mathlab-body"><p>Calcule sem teclado físico. Use <b>x</b> para desenhar funções ou resolver equações de 1º grau. Exemplos: <code>2x+6=14</code>, <code>√(16)</code>, <code>sin(30)</code>.</p>'+
 '<label class="cy25-mathlabel">Escolha um exemplo ou monte sua própria expressão</label><div class="cy25-mathpresets">'+presets.map(([name,value])=>'<button type="button" data-kind="preset" data-value="'+value+'">'+name+'</button>').join('')+'</div><output class="cy25-mathdisplay" role="status" aria-live="polite"></output>'+
 '<div class="cy25-mathkeys">'+makeButtons(numeric,'insert')+'</div><div class="cy25-mathkeys cy25-scientific">'+makeButtons(scientific,'insert')+'</div>'+
 '<div class="cy25-mathactions"><button type="button" data-action="back">⌫ Apagar</button><button type="button" data-action="clear">Limpar</button><button type="button" data-action="calc">= Resolver</button><button type="button" data-action="graph">📈 Gráfico</button><button type="button" data-action="angle">'+(state.degrees?'Graus':'Radianos')+'</button></div>'+
 '<pre class="cy25-mathresult" aria-live="polite"></pre><canvas class="cy25-mathgraph" width="560" height="320" hidden aria-label="Gráfico cartesiano da função"></canvas>'+
 '<label class="cy25-mathlabel">Rascunho de símbolos (toque para inserir)</label><div class="cy25-mathsymbols">'+makeButtons(symbols,'symbol')+'</div>'+
 '<textarea class="cy25-mathnotes" aria-label="Rascunho matemático" placeholder="Anote a resolução, fórmulas e símbolos..."></textarea><div class="cy25-mathactions"><button type="button" data-action="send">↗ Inserir na reflexão da aula</button></div>'+
 '<p class="cy25-mathhint">⚠️ A calculadora é numérica: não deriva nem integra simbolicamente. Símbolos do rascunho não são calculados. O rascunho fica salvo neste navegador; copie para a reflexão da aula para incluí-lo no backup. Trigonometria usa graus por padrão.</p></div>';
 const output=box.querySelector('.cy25-mathdisplay'),result=box.querySelector('.cy25-mathresult'),notes=box.querySelector('.cy25-mathnotes'),canvas=box.querySelector('canvas');
 const refresh=()=>{output.textContent=state.expression||'Toque nas teclas para começar';result.textContent=state.result;notes.value=state.notes};
 box.addEventListener('toggle',()=>{state.open=box.open;persist()});
 box.addEventListener('click',event=>{
  const btn=event.target.closest('button');if(!btn)return;
  const kind=btn.dataset.kind,value=btn.dataset.value,action=btn.dataset.action;
  if(kind==='preset'){state.expression=value;state.result='';canvas.hidden=true}
  else if(kind==='insert'){
   const insert={'÷':'/','×':'*','−':'-','π':'π','√(':'√('}[value]||value;
   if(state.expression.length+insert.length<=120){state.expression+=insert;state.result='';canvas.hidden=true}
  }else if(kind==='symbol'){
   const at=notes.selectionStart,end=notes.selectionEnd;
   notes.value=notes.value.slice(0,at)+value+notes.value.slice(end);state.notes=notes.value;notes.setSelectionRange(at+value.length,at+value.length);
  }else if(action==='back'){state.expression=state.expression.slice(0,-1);state.result='';canvas.hidden=true}
  else if(action==='clear'){state.expression='';state.result='';canvas.hidden=true}
  else if(action==='angle'){state.degrees=!state.degrees;btn.textContent=state.degrees?'Graus':'Radianos';state.result='';canvas.hidden=true}
  else if(action==='calc'){
   try{state.result=state.expression.includes('=')?solve(state.expression,state.degrees):'Resultado: '+format(evaluate(state.expression,0,state.degrees));canvas.hidden=true}
   catch(error){state.result='⚠️ '+error.message;canvas.hidden=true}
  }else if(action==='graph'){
   try{if(state.expression.includes('='))throw Error('Para o gráfico use uma função sem =, por exemplo x^2.');
    drawGraph(canvas,state.expression,state.degrees);canvas.hidden=false;state.result='Gráfico numérico de f(x) em x de −10 a 10.';
   }catch(error){state.result='⚠️ '+error.message;canvas.hidden=true}
  }else if(action==='send'){
   const reflection=document.getElementById('cy12Note');
   if(reflection){const addition=[state.expression,state.result,state.notes].filter(Boolean).join('\n');reflection.value=(reflection.value+'\n'+addition).trim().slice(0,2500);state.result='Registro copiado para a reflexão.'}
   else state.result='Na última etapa da aula, toque novamente para copiar à reflexão.';
  }
  if(kind!=='symbol')refresh();persist();
 });
 notes.addEventListener('input',()=>{state.notes=notes.value.slice(0,2500);persist()});
 refresh();container.appendChild(box);
}
function drawGraph(canvas,expression,degrees){
 const ctx=canvas.getContext('2d');if(!ctx)throw Error('Seu navegador não disponibilizou o desenho.');
 const w=canvas.width,h=canvas.height;
 const toX=x=>(x+10)*w/20,toY=y=>h/2-y*h/20;
 ctx.clearRect(0,0,w,h);ctx.fillStyle='#071a25';ctx.fillRect(0,0,w,h);
 ctx.strokeStyle='#315969';ctx.lineWidth=1;
 for(let x=-10;x<=10;x+=2){ctx.beginPath();ctx.moveTo(toX(x),0);ctx.lineTo(toX(x),h);ctx.stroke()}
 for(let y=-10;y<=10;y+=2){ctx.beginPath();ctx.moveTo(0,toY(y));ctx.lineTo(w,toY(y));ctx.stroke()}
 ctx.strokeStyle='#bdede3';ctx.lineWidth=1.5;ctx.beginPath();ctx.moveTo(0,toY(0));ctx.lineTo(w,toY(0));ctx.moveTo(toX(0),0);ctx.lineTo(toX(0),h);ctx.stroke();
 ctx.strokeStyle='#4cf7c1';ctx.lineWidth=2.5;ctx.beginPath();let drawing=false,valid=0;
 for(let i=0;i<=420;i++){
  const x=-10+i/21;let y;
  try{y=evaluate(expression,x,degrees)}catch{drawing=false;continue}
  if(!Number.isFinite(y)||y<-10||y>10){drawing=false;continue}
  const px=toX(x),py=toY(y);
  if(drawing)ctx.lineTo(px,py);else ctx.moveTo(px,py);
  drawing=true;valid++;
 }
 if(!valid)throw Error('Nenhum ponto visível. Teste outra função ou valores menores.');
 ctx.stroke();ctx.fillStyle='#d9fdf6';ctx.font='20px sans-serif';ctx.fillText('0',toX(0)+6,toY(0)+21);ctx.fillText('x',w-20,toY(0)-10);
}
window.cy25Math={attach,evaluate,solve};
})();
