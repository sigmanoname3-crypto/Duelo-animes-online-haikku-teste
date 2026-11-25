const http=require('http'),fs=require('fs'),path=require('path'),{WebSocketServer}=require('ws'),Game=require('./game.js');
const FILES={'/':'index.html','/index.html':'index.html','/game.js':'game.js','/manifest.json':'manifest.json','/sw.js':'sw.js','/icon-192.png':'icon-192.png','/icon-512.png':'icon-512.png','/galick-ho.mp3':'galick-ho.mp3','/kamehameha_swf.mp3':'kamehameha_swf.mp3','/girino-spin.mp3':'girino-spin.mp3','/sound-of-the-spin.mp3':'sound-of-the-spin.mp3','/gyro-hahaha-nyoho.mp3':'gyro-hahaha-nyoho.mp3','/ippu-beatdown.mp3':'ippu-beatdown.mp3','/sopro-gigantesco.mp3':'sopro-gigantesco.mp3','/agarrao-rasante.mp3':'agarrao-rasante.mp3','/steel-ball-run.mp3':'steel-ball-run.mp3'};
const T={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json','.png':'image/png','.mp3':'audio/mpeg'};
const server=http.createServer((req,res)=>{
 const f=FILES[req.url.split('?')[0]];
 if(!f){res.writeHead(404);return res.end('404')}
 fs.readFile(path.join(__dirname,f),(e,d)=>{if(e){res.writeHead(404);return res.end('404')}
  res.writeHead(200,{'Content-Type':T[path.extname(f)]});res.end(d)})});
const wss=new WebSocketServer({server});
const waits={};const matches=new Set();
function leave(ws,notify){const m=ws.m;if(!m)return;ws.m=null;
 m.p.forEach(w=>{if(w!==ws&&w.m===m){w.m=null;if(notify&&w.readyState===1)w.send('{"t":"left"}')}});matches.delete(m)}
function pair(a,b,t2){
 const m={t2,p:[a,b],pick:t2?[[],[]]:[0,0],rdy:[false,false],S:null,end:0,o:{map:0,mus:1}};
 a.m=b.m=m;a.inp={};b.inp={};matches.add(m);
 [a,b].forEach((w,i)=>w.send(JSON.stringify({t:'match',me:i})))}
function begin(m){
 m.S=m.t2?{f:[Game.mkP(182,1,m.pick[0][0],0),Game.mkP(490,-1,m.pick[1][0],1)],bn:[Game.mkP(182,1,m.pick[0][1],0),Game.mkP(490,-1,m.pick[1][1],1)],pr:[],over:0}:{f:[Game.mkP(182,1,m.pick[0],0),Game.mkP(490,-1,m.pick[1],1)],pr:[],over:0};
 m.p.forEach((w,i)=>{w.inp={};w.send(JSON.stringify({t:'start',me:i,S:m.S,o:m.o}))})}
function tell(o,m,i){if(o&&o.readyState===1)o.send(JSON.stringify({t:'opp',ch:m.pick[i],ready:m.rdy[i]}))}
function unq(ws){if(ws.q&&waits[ws.q]===ws)waits[ws.q]=null;ws.q=null}
wss.on('connection',ws=>{
 ws.inp={};
 ws.on('message',raw=>{let d;try{d=JSON.parse(raw)}catch{return}
  const m=ws.m,i=m?m.p.indexOf(ws):-1,o=m&&m.p[1-i];
  if(d.t==='find'){leave(ws,false);unq(ws);const q=d.t2?'2':'1',w=waits[q];ws.q=q;
   if(w&&w.readyState===1){waits[q]=null;pair(w,ws,!!d.t2)}else{waits[q]=ws;ws.send('{"t":"queued"}')}}
  else if(d.t==='cancel'){unq(ws);leave(ws,true)}
  else if(d.t==='pick'&&m&&!m.S){m.pick[i]=m.t2?(Array.isArray(d.ch)?[...new Set(d.ch.filter(c=>Number.isInteger(c)&&c>=0&&c<=7))].slice(0,2):[]):(d.ch===1?1:d.ch===2?2:d.ch===3?3:d.ch===4?4:d.ch===5?5:d.ch===6?6:d.ch===7?7:0);m.rdy[i]=false;tell(o,m,i)}
  else if(d.t==='opts'&&m&&!m.S&&i===0){m.o={map:d.map===1?1:0,mus:d.mus?1:0};if(o&&o.readyState===1)o.send(JSON.stringify({t:'opts',map:m.o.map,mus:m.o.mus}))}
  else if(d.t==='ready'&&m&&!m.S&&(!m.t2||m.pick[i].length===2)){m.rdy[i]=true;tell(o,m,i);if(m.rdy[0]&&m.rdy[1])begin(m)}
  else if(d.t==='in'&&m&&m.S&&d.i){const x=d.i;ws.inp.l=!!x.l;ws.inp.r=!!x.r;ws.inp.g=!!x.g;
   for(const k of ['jb','hv','d','pw','sp','sp2','nk','ju','tg','fu','sp3'])if(x[k])ws.inp[k]=1;
   if(x.cl&&m.S.cl)ws.inp.cl=Math.min(4,(ws.inp.cl||0)+1)}});
 ws.on('close',()=>{unq(ws);leave(ws,true)})});
setInterval(()=>{for(const m of matches){
 if(!m.S)continue;
 const[a,b]=m.p;
 if(!m.S.over){Game.tick(m.S,a.inp,b.inp,1/60);for(const w of m.p)w.inp.jb=w.inp.hv=w.inp.d=w.inp.pw=w.inp.sp=w.inp.sp2=w.inp.nk=w.inp.ju=w.inp.tg=w.inp.fu=w.inp.sp3=w.inp.cl=0}
 const s=JSON.stringify({t:'st',S:m.S});m.p.forEach(w=>w.readyState===1&&w.send(s));
 if(m.S.over&&!m.end)m.end=Date.now();
 if(m.end&&Date.now()-m.end>1500){m.p.forEach(w=>{if(w.m===m)w.m=null});matches.delete(m)}}},1000/60);
server.listen(process.env.PORT||3000,()=>console.log('Duelo Dourado rodando'));
