(function(R){
const G=250,DC_T=3,DC_WIN=.12,DC_DMG=50,DC_KV=1500,DC_RB=2.4,CL_T=3,CL_MUL=2.3,CL_R=44,DN_T=6,DN_N=8,DN_NERF=.1,ZP=1.5,ZA=1.3,ZR=.07,W=672,CR=100,XD=.25,D={jab:.3,heavy:.315,power:.7,throw:.55,ssj3:.8,dodge:.35,dcpunch:.5,hit:.3,rasen:.55,nika:1,raio:.9,tail:.6,fuse:.9,fstrike:.5,rball:.5,torn:.8,acerto:.6,bdpunch:.45,grab:.5,drag:4,beatdown:9.3,dempsey:1.5,gazela:.8,ibpunch:.55,ibeat:13.5,gbar:6.7,gsoul:.7,kcar:.6,knife:.5,stop:.95,btd:.6,gscor:.9,gheal:.55,gret:1},A={jab:.1,heavy:.105,power:.35,throw:.3,rasen:.3,raio:.6,tail:.3,fstrike:.2,rball:.2,torn:.5,acerto:.3,bdpunch:.2,ibpunch:.3,dcpunch:.2,gsoul:.35,kcar:.3,knife:.25,stop:.66,btd:.3,gscor:.35,gheal:.22},
BR=13,BR_HITS=10,BRB_M=1.25,BRB_SPD=250,GR_SPD=560,GR_DASH=.35,GR_R=62,DRAG_SPD=220,DRAG_GO=1.6,DRAG_RET=1.6,DRAG_DMG=4,DRAG_TICK=.3,DRAG_SLAM=0,DRAG_BACK=40,DRAG_FRONT=160,SOP_DMG=4,BD_T=9,FIN_T=2.2,BD_DMG=1.5,BD_GAP=.15,BD_REL=-.045,BD_COST=60,BD_R=360,BD_KV=1100,ORB=20,BEAM=20,SHU=20,RASEN=20,DRAIN=.5,BAZ=20,BAZR=240,NWAIT=10,NIKA_HP=.2,RAIO_COST=Math.round(70*.8),RAIO_DMG=20,TAIL_DMG=20,TAILR=135,DIN_HEAL=.4,MN_T=12,MN_DMG=.8,MN_CD=1,MN_SPD=130,SWAPCD=3,BEN_EN=4,JV=520,JG=1500,AIR=45,PETRI_T=2,PETRI_DMG=10,GAZE_SPD=420,RAIO_SPD=340,HAKI_T=10,HAKI_M=1.3,PARAL_T=3,PARAL_SPD=320,PARAL_DMG=0,ACE_DMG=20,BALLS=2,BALL_BUFF=.2,BALL_SPD=520,ACE_SPD=330,TORN_T=10,TG=1400,TORN_DPS=4,GI=11,IP=12,GN=30,KR=31,DIU=32,KN_T=10,KN_MAX=5,KN_DMG=5,KN_BLD=4,KN_BLD_T=10,KN_SPD=520,KN_COST=45,STOP_COST=35,STOP_DMG=50,STOP_KV=1700,STOP_VY=260,GS_T=4,GS_N=3,GS_DMG=15,GS_KV=1100,GS_VY=420,GS_R=100,GXS_COST=48,GXS_STONE_SPD=520,GXS_STONE_T=.22,GXS_BEAM_SPD=950,GXS_DMG=40,GXS_N=2,GXS_T=6,GXS_SPD=150,GXS_POIS=4,GXS_POIT=5,GXS_REACH=20,GXS_TIP=80,GXH_COST=60,GXR_COST=70,GXR_P2=3.32,GXR_P3=GXR_P2+6.82,GXR_CT=GXR_P3+.9,GXR_DMG=80,GXR_ST=1.2,GXH_HEAL=40,GB_T=6.7,GB_GAP=.1,GB_DMG=30/Math.round(GB_T/GB_GAP),GER_DMG=46/Math.round(GB_T/GB_GAP),DB_T=4,DB_DMG=30/Math.round(DB_T/GB_GAP),RR_COST=100,RR_DMG=120,RR_P1=1.2,RR_P2=3,RR_P3=4,RR_P4=8,RR_T=9,GB_EN=.1,KQ_DMG=.15,KQ_BTD_SPD=1100,KQ_BTD_COST=50,KQ_CAR_DMG=10,KQ_CAR_SPD=200,KQ_CAR_STUN=1,KQ_BOOM_N=4,KQ_BOOM=30,KQ_FUSE=1.8,KQ_T=6.9,KQ_N=200,KQ_GAP=KQ_T/KQ_N,GB_REGEN=8,GB_R=90,IB_T=12.94,IB_DMG=90/38,IB_RATE=3,IB_R=90,IB_COST=70,STUN_T=3,CH=[{n:'Goko',skill:'Kamehamehu',cost:50,sp:60,spName:'SSJ',pass:'Zenkai: +50% socos · +30% habilidades · -7% dano recebido'},{n:'Narutu',skill:'Esfera Azul',cost:40,sp:80,spName:'Shuriken',sp2:70,sp2Name:'Rasen Shuriken'},{n:'Luffo',skill:'Bazuuka',cost:40,pass:'Haki do Armamento · Nika · Raio do Céu'},{n:'Diogo',skill:'Petrificar',cost:25,sp:100,spName:'Dinossauro',sp2:50,sp2Name:'Digos Sauros',pass:'Era Jurássica: 8 socos transformam o alvo em dinossauro (6s, -10% de dano)'},{n:'Vegetal',skill:'Galcku Roo',cost:50,sp:60,pass:'Zenkai: +50% socos · +30% habilidades · -7% dano recebido'},{n:'Girino',skill:'Paralisação',cost:30,sp:80,spName:'Tornadua',sp2:40,sp2Name:'Acerto',sp3:60,sp3Name:'Beatdown'},{n:'Ippu',skill:'Dempsey Pro',cost:50,sp2:30,sp2Name:'Soco da Gazela',sp3:IB_COST,sp3Name:'Beatdown'},{n:'Brócolis',skill:'Sopro Gigantesco',cost:50,sp2:40,sp2Name:'Agarrão Rasante',pass:'Zenkai Lendário: socos e habilidades ganham dano igual à % de vida perdida · -10% dano recebido · LSSJ Berserk: ao receber 10 golpes, o cabelo muda'},{n:'Giurnu',skill:'Barragem',cost:30,sp:48,spName:'Escorpiões Dourados (só no Requiem)',sp2:15,sp2Name:'Alma Fora do Corpo',sp3:60,sp3Name:'Cura',sp4:70,sp4Name:'Retorno a Zero (só no Requiem)',pass:'Experiência de Ouru: o stand fica em suas costas e é ele quem ataca'},{n:'Yoshikagu Kiro',skill:'Barragem',cost:30,sp:KQ_BTD_COST,spName:'Bolha de Gato',sp2:30,sp2Name:'Carrinho',pass:'Rainha do Assassinato: o stand fica em suas costas e é ele quem ataca · no 4º soco seguido, o alvo explode · Bites the Dust (só na forma Bite the Dustu): depois de usar a passiva, ao chegar a 40% de vida ou menos volta 1 minuto no tempo com 70% de vida (1 vez)'}];
const FU_T=40,FU_COST=0,FU_HP=2,FU_BASE=1.25,SP3C=25,RB_NORMAL=20,RB_EVIL=30,FZ=c=>c>3&&c<11||c>=14&&c<30,FI=c=>c<11?c-4:c>=14&&c<30?c-7:-1,EVL=new Set(),pk=f=>f.v?4:f.ch===DIU?10:f.ch===GN?8:f.ch===KR?9:f.ch===GI?5:f.ch===IP?6:f.ch===BR?7:f.ch,hs=(f,p)=>f.pc?f.pc.includes(p):pk(f)===p,zk=f=>hs(f,0)||hs(f,4),zp=(f,b)=>{const l=hs(f,7)?1+Math.max(0,1-f.hp/f.mhp):1;return zk(f)?Math.max(b,l):l},gb=f=>f.ch===GI||!!(f.pc&&f.pc.includes(5)),zr=o=>hs(o,7)?1-ZR-.03:zk(o)?1-ZR:1,hitOk=(o,f)=>!(o.hp<=0||o.s==='dodge'&&o.t<.25||o.s==='nika'||o.s==='fuse'||o.inv>0)&&!(o.g&&(f.x-o.x)*o.dir>0),frz=f=>f.bm>0||f.pt>0||f.pz>0||f.tw>0||f.st>0||f.sl>0||f.bd>0||f.gr>0||f.fin>0,crossing=f=>f.s==='dodge'&&f.t<XD&&!!f.cv,evil=o=>o.ch===3||o.ch===6||o.ch===8||o.ch===9||EVL.has(o.ch),
FCH=[{n:'Narugoko',skill:'Kameha-Rasengan',cost:40,sp:50,spName:'Modo Sábio Supremo',sp2:30,sp2Name:'Rajada Fundida'},
{n:'Gokuffo',skill:'Gomu Gomu Kamehameha',cost:40,sp:50,spName:'Nika Saiyajin',sp2:30,sp2Name:'Rajada Fundida'},
{n:'Diogoko',skill:'Kameha-Dino',cost:40,sp:50,spName:'Dino Super Saiyajin',sp2:30,sp2Name:'Rajada Fundida'},
{n:'Naruffo',skill:'Gomu Rasengan Gigante',cost:40,sp:50,spName:'Gear 5 Ninja',sp2:30,sp2Name:'Rajada Fundida'},
{n:'Narugo',skill:'Shuriken Jurássico',cost:40,sp:50,spName:'Rei Jurássico',sp2:30,sp2Name:'Rajada Fundida'},
{n:'Luffogo',skill:'Trovão Pré-Histórico',cost:40,sp:50,spName:'Gear 5 Dino',sp2:30,sp2Name:'Rajada Fundida'},
{n:'Godenot',skill:'Big Bang Kamehamehu',cost:40,sp:50,spName:'SSJB',sp2:30,sp2Name:'Rajada Fundida',sp3:25,sp3Name:'Bola Arco-Íris'}],
FV=[{buff:8,inv:0,heal:.1},{buff:5,inv:3,heal:0},{buff:6,inv:0,heal:.3},{buff:6,inv:2,heal:0},{buff:6,inv:0,heal:.25},{buff:5,inv:2,heal:.2},{buff:7,inv:2,heal:.2}],
FP=[{dmg:55,spd:270,w:34},{dmg:60,spd:420,w:30},{dmg:38,spd:300,w:32,pet:1.6},{dmg:68,spd:190,w:44},{dmg:42,spd:330,w:30,dr:45},{dmg:48,spd:480,w:28,pet:1.2},{dmg:75,spd:300,w:44}],
FIDX={'0,1':4,'0,2':5,'0,3':6,'1,2':7,'1,3':8,'2,3':9},
canF=(a,b)=>!FZ(a.ch)&&!FZ(b.ch)&&pk(a)!==pk(b)&&fuOf(pk(a),pk(b))!==undefined,
cof=f=>f.ch===DIU?CH[10]:f.ch===KR?CH[9]:f.ch===GN?CH[8]:FZ(f.ch)?(f.vg?(VGC||(VGC=Object.assign({},FCH[6],{n:'Vegitu'}))):FCH[FI(f.ch)]):f.ch===GI?CH[5]:f.ch===IP?CH[6]:f.ch===BR?CH[7]:f.v?CH[4]:CH[f.ch],fuOf=(a,b)=>FIDX[Math.min(a,b)+','+Math.max(a,b)],
sp2c=f=>f.ch===DIU?((f.kn||0)>0?KN_COST:STOP_COST):f.ch===KR?CH[9].sp2:f.ch===GN?CH[8].sp2:FZ(f.ch)?FCH[FI(f.ch)].sp2:f.ch===2?RAIO_COST:f.ch===GI?CH[5].sp2:f.ch===IP?CH[6].sp2:f.ch===BR?CH[7].sp2:CH[f.ch].sp2,hasSp2=f=>f.ch===DIU||f.ch===GN&&!f.ger||f.ch===KR||f.ch===BR||f.ch===1||f.ch===3||f.ch===GI||f.ch===IP||FZ(f.ch)||f.ch===2&&f.g5>0;
const PB=[
{sk:'Kamehamehu',skin:'#f2c7a3',hair:'#17131a',top:'#ff7a1a',pants:'#1f4fc8',shoe:'#14206b',aura:'#ffb000',dmg:60,spd:420,w:30,bv:[7,0,.1]},
{sk:'Esfera Azul',skin:'#f8cfae',hair:'#ffd21f',top:'#ff7a1a',pants:'#23306e',shoe:'#1b3f8a',aura:'#4fc3ff',dmg:55,spd:300,w:34,dr:25,bv:[5,2,0]},
{sk:'Bazuuka',skin:'#f8cfae',hair:'#17131a',top:'#b23a24',pants:'#e9cd8f',shoe:'#8a6a3c',aura:'#ff3b2f',dmg:65,spd:340,w:32,bv:[6,0,.25]},
{sk:'Petrificar',skin:'#f8cfae',hair:'#fbfdff',top:'#f3f6fc',pants:'#eef2fa',shoe:'#8a6a3c',aura:'#dfe8ff',dmg:45,spd:300,w:32,pet:1.4,bv:[6,1,.15]},
{sk:'Galcku Roo',skin:'#ffe27a',hair:'#ffd21f',top:'#2f7be8',pants:'#f3f8ff',shoe:'#14183a',aura:'#a24bff',dmg:62,spd:400,w:30,bv:[7,0,.1]},
{sk:'Paralisação',skin:'#f2c7a3',hair:'#2a2430',top:'#3fc04a',pants:'#6b4030',shoe:'#3a2314',aura:'#9dff6a',dmg:50,spd:360,w:30,par:1.5,bv:[5,2,.15]},
{sk:'Dempsey Pro',skin:'#f2c7a3',hair:'#17131a',top:'#1a2aa8',pants:'#1a2aa8',shoe:'#eceef2',aura:'#b44dff',dmg:66,spd:380,w:28,bv:[6,1,.2]},
{sk:'Sopro Gigantesco',skin:'#ffe27a',hair:'#8dff3a',top:'#3fc04a',pants:'#6b4030',shoe:'#3a2314',aura:'#8dff3a',dmg:70,spd:300,w:36,bv:[7,0,.1]}],
NM={'0,5':'Gorino','0,6':'Gokuppu','0,7':'Gocolis','1,4':'Narutal','1,5':'Narurino','1,6':'Narippu','1,7':'Narucolis','2,4':'Luffotal','2,5':'Luffino','2,6':'Luffippu','2,7':'Luffocolis','3,4':'Diogotal','3,5':'Diorino','3,6':'Diogippu','3,7':'Diocolis','4,5':'Vegerino','4,6':'Vegippu','4,7':'Vegecolis','5,6':'Girippu','5,7':'Girocolis','6,7':'Ippolis'},NEWF=[];
FIDX['0,4']=10;
for(let i=0;i<8;i++)for(let j=i+1;j<8;j++){const k=i+','+j;if(FIDX[k]!==undefined)continue;const id=14+NEWF.length,A=PB[i],B=PB[j];FIDX[k]=id;NEWF.push([i,j,id]);if(i===3||j===3)EVL.add(id);
 FCH.push({n:NM[k],skill:A.sk+'-'+B.sk,cost:40,sp:50,spName:'Poder Fundido',sp2:30,sp2Name:'Rajada Fundida'});
 FV.push({buff:Math.round((A.bv[0]+B.bv[0])/2)+1,inv:Math.max(A.bv[1],B.bv[1]),heal:(A.bv[2]+B.bv[2])/2});
 const p={dmg:Math.round((A.dmg+B.dmg)/2*1.1),spd:Math.round((A.spd+B.spd)/2),w:Math.round((A.w+B.w)/2)+2},pet=Math.max(A.pet||0,B.pet||0),dr=Math.max(A.dr||0,B.dr||0),par=Math.max(A.par||0,B.par||0);
 if(pet)p.pet=pet;if(dr)p.dr=dr;if(par)p.par=par;FP.push(p)}
CH[10]={n:'Diu',skill:'Muda Muda',cost:30,sp:99999,sp2:KN_COST,sp2Name:'Facas (45) / Stop Sign (35, sem facas)',pass:'Stand: The World (O Mundo) fica em suas costas e é ele quem ataca · Stop Sign: sem facas, pega a placa, dá 2 dashes, acerta (40 de dano) e lança o inimigo pra trás · Facas: a cada 10s surge uma faca no chão; pegue até 5 e arremesse todas (5 de dano cada + sangramento de 4 por faca por 10s, sem somar o tempo) · AWK: com 30% de vida ou menos aparece o botão AWK: Diu suga o sangue de um idoso caído, recupera 70% da vida e entra na ULT · Na ULT: O Mundo (3º ataque) para o tempo e deixa o inimigo stunado por 9s · Road Roller (2º ataque da ULT, 100 de energia): para o tempo, some, reaparece jogando um rolo compressor no inimigo, MUDA MUDA nele até explodir (120 de dano)'};
const DIO_F=FIDX['3,5'],DT_N=2,DT_DMG=1.5,DT_DPS=2,DT_BITES=10,DT_COST=80,isDio=f=>f.ch===DIO_F;
FCH[FI(DIO_F)]={n:'Diorino',skill:'Steel Ball Petrificada',cost:40,sp:DT_COST,spName:'Tornadua dos Dinossauros',sp2:30,sp2Name:'Rajada Fundida'};
const mk=(x,dir,ch,i)=>({x,dir,ch,i,hp:350,mhp:350,tr:0,hk:0,haki:0,dy:0,nk1:0,g5:0,en:0,s:'idle',t:0,done:false,g:false,ph:0,mv:0,orb:0,y:0,vy:0,ov:0,inv:0,dn:0,dc:0,hc:0,br:0,hf:0,kh:0});
const mkP=(x,dir,p,i)=>p===4?Object.assign(mk(x,dir,0,i),{v:1}):p===5?Object.assign(mk(x,dir,GI,i),{balls:BALLS,lost:[]}):p===6?mk(x,dir,IP,i):p===7?mk(x,dir,BR,i):p===8?mk(x,dir,GN,i):p===9?mk(x,dir,KR,i):p===10?mk(x,dir,DIU,i):mk(x,dir,p,i);
const bdTf=(f,o)=>Math.max(.09,Math.min(.45,Math.max(30,Math.abs(o.x-f.x)-10)/850));
function hitOk2(o){return !(o.s==='dodge'&&o.t<.25||o.s==='nika'||o.s==='fuse'||o.inv>0)}
function gretHit(o,src){o.gdone=1;o.inv=Math.max(o.inv||0,.5);o.gtr=1;o.gto=src.i;o.gzs=src.s&&D[src.s]&&src.s!=='idle'&&src.s!=='hit'&&src.s!=='dodge'?src.s:'jab';o.t=Math.max(o.t,D.gret-.5);src.pt=src.pz=src.tw=0;src.s='idle';src.t=0;src.done=false;src.g=false;src.orb=0}
function zrEnd(S){const z=S.zr,g=S.f[z.i],o=S.f[z.o];S.zr=null;if(!g||!o)return;o.hp=Math.max(0,o.hp-GXR_DMG);o.st=GXR_ST;o.s='idle';o.t=0;o.done=false;o.g=false;o.orb=0;o.x=Math.max(28,Math.min(W-28,o.x+g.dir*70));g.s='idle';g.t=0;g.done=false;g.gdone=0;(S.ex||(S.ex=[])).push({x:o.x,t:0,k:21})}
function rrEnd(S){const r=S.rr,g=S.f[r.i],o=S.f[1-r.i];S.rr=null;if(!g||!o)return;o.hp=Math.max(0,o.hp-RR_DMG);o.st=1.2;o.tsm=0;o.s='idle';o.t=0;o.done=false;o.g=false;o.orb=0;g.s='idle';g.t=0;g.done=false;g.g=false;g.x=r.gx;o.x=Math.max(28,Math.min(W-28,r.ox+g.dir*70));(S.ex||(S.ex=[])).push({x:o.x,t:0,k:5})}
function hurt(o,d,src,rng,ng){
 if(o.ch===GN&&o.s==='gret'&&!o.gdone&&src&&src.ch!==undefined&&src!==o&&!(src.rz>0)&&o.hp>0){gretHit(o,src);return}
 if(hs(o,6)&&o.hp<=o.mhp*.5)d*=.9;
 d*=zr(o);if(src.dn>0)d*=1-DN_NERF;
 if(o.s==='dodge'&&o.t<.25||o.s==='nika'||o.s==='fuse'||o.inv>0)return;
 if(src.ch===GN){src.ghit=1;src.inv=0}
 if(frz(o)){o.hp=Math.max(0,o.hp-d);if(!(src.tr>0)&&!ng)src.en=Math.min(100,src.en+d*.6);return}
 if(o.g&&(src.x-o.x)*o.dir>0){d*=rng?.5:.2;if(!(o.tr>0))o.en=Math.min(100,o.en+3)}
 else if(!(o.ch===GI&&(o.s==='power'||o.s==='torn'||o.s==='acerto'||o.s==='bdpunch'||o.s==='beatdown'))&&!(o.ch===IP&&o.s==='ibeat')&&!((o.ch===GN||o.ch===KR||o.ch===DIU)&&o.s==='gbar')&&o.s!=='drag'){o.s='hit';o.t=0;o.done=false;o.orb=0;o.x+=src.dir*(d>10?16:7)}
 o.hp=Math.max(0,o.hp-d);if(!(src.tr>0)&&!ng)src.en=Math.min(100,src.en+d*.6);
 if(hs(o,7)&&!o.br&&!(o.g&&(src.x-o.x)*o.dir>0)&&++o.hc>=BR_HITS){o.br=1;o.hf=.8}}
function dinoHit(f,o,S){if(o.dn>0)return;f.dc=(f.dc||0)+1;if(f.dc>=DN_N){f.dc=0;o.dn=DN_T;(S.ex||(S.ex=[])).push({x:o.x,t:0,k:12})}}
function petrify(t,src){
 if(t.s==='dodge'&&t.t<.25||t.s==='nika'||t.s==='fuse'||t.inv>0||frz(t))return;
 if(t.g&&(src.x-t.x)*t.dir>0)return;
 t.pt=PETRI_T;t.s='idle';t.t=0;t.g=false;t.orb=0;t.done=false;
 t.hp=Math.max(0,t.hp-PETRI_DMG*zr(t)*(src.dn>0?1-DN_NERF:1));if(!(src.tr>0))src.en=Math.min(100,src.en+PETRI_DMG*.6)}
function petriPara(t,src){
 if(t.s==='dodge'&&t.t<.25||t.s==='nika'||t.s==='fuse'||t.inv>0||frz(t))return false;
 if(t.g&&(src.x-t.x)*t.dir>0)return false;
 t.pt=PETRI_T;t.pz=PARAL_T;t.s='idle';t.t=0;t.g=false;t.orb=0;t.done=false;
 t.hp=Math.max(0,t.hp-PETRI_DMG*zr(t)*(src.dn>0?1-DN_NERF:1));if(!(src.tr>0))src.en=Math.min(100,src.en+PETRI_DMG*.6);return true}
const clOk=f=>(f.ch===0||f.ch===BR)&&!frz(f),clK=f=>f.ch===BR?2:f.v?1:0;
function clash(S,x,m){S.cl={t:CL_T,mt:CL_T,c:[0,0],x,m,k:[clK(S.f[0]),clK(S.f[1])]};S.cw=null;
 for(const f of S.f){f.s='power';f.t=.36;f.done=true;f.g=false;f.orb=0;f.inv=.05;f.y=0;f.vy=0;f.kv=0}}
function clTry(f,o,S,mul){
 const mf=mul*zp(f,ZA),m=[1,1];
 if(o.s==='power'&&!o.done&&clOk(o)){m[f.i]=mf;m[o.i]=mulOf(o)*zp(o,ZA);clash(S,(f.x+o.x)/2,m);return true}
 if(f.ch===BR){const q=S.pr.find(q=>!q.k&&q.ow===o.i);if(q){S.pr=S.pr.filter(z=>z!==q);m[f.i]=mf;m[o.i]=q.m||1;clash(S,q.x,m);return true}}
 return false}
function clUp(S,a,b,dt){const c=S.cl,p=S.f[0],e=S.f[1];
 c.c[0]+=Math.min(4,a.cl||0);c.c[1]+=Math.min(4,b.cl||0);c.t-=dt;
 for(const f of S.f){f.s='power';f.t=.36;f.done=true;f.inv=.05;f.g=false;f.y=0;f.vy=0;f.kv=0;f.dir=S.f[1-f.i].x>f.x?1:-1}
 const tot=c.c[0]+c.c[1],half=Math.max(0,Math.abs(e.x-p.x)/2-24);
 c.x=(p.x+e.x)/2+(e.x>p.x?1:-1)*(tot?(c.c[0]-c.c[1])/tot:0)*half*.85;
 if(c.t>0)return;
 const w=c.c[0]>c.c[1]?0:c.c[1]>c.c[0]?1:-1,ex=S.ex||(S.ex=[]);S.cl=null;
 for(const f of S.f){f.s='idle';f.t=0;f.done=false;f.inv=0}
 if(w<0){ex.push({x:c.x,t:0});ex.push({x:c.x,t:0,k:9,c:11});S.cw={w:-1,t:0};return}
 const f=S.f[w],t=S.f[1-w];
 hurt(t,BEAM*c.m[w]*CL_MUL,f,1);t.kv=f.dir*700;t.vy=300;t.y=.01;
 ex.push({x:t.x,t:0});ex.push({x:t.x,t:0,k:5});ex.push({x:t.x,t:0,k:9,c:11});S.cw={w,t:0}}
function dcTry(S){const p=S.f[0],e=S.f[1];
 if(S.over||S.cl||S.dc||S.rb)return;
 const ok=f=>f.s==='dodge'&&f.t<=DC_WIN+.02&&f.y<AIR&&f.hp>0&&f.dx===f.dir&&!frz(f)&&!(f.bd>0)&&!(f.gr>0);
 if(ok(p)&&ok(e)&&p.dir!==e.dir&&Math.abs(p.t-e.t)<=DC_WIN&&Math.abs(p.x-e.x)<=CR+60)dcStart(S)}
function dcStart(S){const p=S.f[0],e=S.f[1];
 const mid=Math.max(52,Math.min(W-52,(p.x+e.x)/2)),s=p.dir;p.x=mid-s*24;e.x=mid+s*24;
 for(const f of S.f){f.s='dclash';f.t=0;f.done=true;f.g=false;f.orb=0;f.inv=.05;f.y=0;f.vy=0;f.kv=0;f.cv=0;f.dx=0}
 S.dc={t:DC_T,mt:DC_T,c:[0,0],x:mid};S.cw=null;(S.ex||(S.ex=[])).push({x:mid,t:0,k:16,dir:0})}
function dcUp(S,a,b,dt){const c=S.dc,ex=S.ex||(S.ex=[]);
 c.c[0]+=Math.min(4,a.cl||0);c.c[1]+=Math.min(4,b.cl||0);c.t-=dt;
 for(const f of S.f){f.s='dclash';f.t+=dt;f.ph+=dt;f.mv=0;f.inv=.05;f.g=false;f.y=0;f.vy=0;f.kv=0;f.dir=S.f[1-f.i].x>f.x?1:-1}
 if(c.t>0)return;
 S.dc=null;for(const f of S.f)f.inv=0;
 const w=c.c[0]>c.c[1]?0:c.c[1]>c.c[0]?1:-1;
 if(w<0){for(const f of S.f){f.s='hit';f.t=0;f.done=false;f.kv=-f.dir*650;f.vy=220;f.y=.01;ex.push({x:f.x,t:0,k:9,c:11})}return}
 const f=S.f[w];f.s='dcpunch';f.t=0;f.done=false}
function dcHit(f,o,S,mul){
 o.inv=0;o.g=false;hurt(o,DC_DMG*mul*zp(f,ZA),f,1);
 o.s='hit';o.t=0;o.done=false;o.kv=f.dir*DC_KV;o.vy=420;o.y=.01;
 S.rb={t:0,x:o.x,w:f.i};const ex=S.ex||(S.ex=[]);ex.push({x:o.x,t:0,k:16,dir:f.dir});ex.push({x:o.x,t:0,k:9,c:11})}
function lostB(S,q){const o=S.f[q.ow];if(o&&gb(o))(o.lost||(o.lost=[])).push({x:Math.max(20,Math.min(W-20,q.x)),y:q.y||G-84})}
function paralyze(t,src){
 if(t.s==='dodge'&&t.t<.25||t.s==='nika'||t.s==='fuse'||t.inv>0||frz(t))return;
 if(t.g&&(src.x-t.x)*t.dir>0)return;
 t.pz=PARAL_T;t.s='idle';t.t=0;t.g=false;t.orb=0;t.done=false;
 if(PARAL_DMG>0){t.hp=Math.max(0,t.hp-PARAL_DMG);if(!(src.tr>0))src.en=Math.min(100,src.en+PARAL_DMG*.6)}}
function tornado(t,d){
 if(t.s==='dodge'&&t.t<.25||t.s==='nika'||t.s==='fuse'||t.inv>0||t.tw>0)return false;
 t.tw=TORN_T;t.twd=d?1:0;t.twk=d?1:0;t.twb=d?TORN_T/DT_BITES/2:0;t.twn=0;t.pz=0;t.pt=0;t.s='idle';t.t=0;t.g=false;t.orb=0;t.done=false;return true}
function swap(S,i){const a=S.f[i],b=S.bn[i];b.x=a.x;b.dir=a.dir;b.i=i;b.y=0;b.vy=0;b.s='idle';b.t=0;b.done=false;b.g=false;b.pt=0;b.pz=0;b.tw=0;a.pz=0;a.tw=0;a.i=i;a.s='idle';a.t=0;a.g=false;S.f[i]=b;S.bn[i]=a;(S.ex||(S.ex=[])).push({x:b.x,t:0,k:6})}
function mulOf(f){return(gb(f)?1+BALL_BUFF*(f.balls||0):1)*(f.tr>0?1.5:1)*(f.haki>0?HAKI_M:1)*(hs(f,6)&&f.hp<=f.mhp*.5?1.5:1)*(FZ(f.ch)?FU_BASE*(f.ov>0?1.4:1):1)}
function sting(t,d,src){const s=t.s,tt=t.t,dn=t.done,x=t.x,ob=t.orb;hurt(t,d,src,0,1);if(t.s==='hit'&&s!=='hit'){t.s=s;t.t=tt;t.done=dn;t.x=x;t.orb=ob}}
function gscSpawn(S,ow,ex){const a=S.gsc||(S.gsc=[]);for(let k=0;k<GXS_N;k++)a.push({x:Math.max(28,Math.min(W-28,ex+(k-(GXS_N-1)/2)*16)),ow,t:GXS_T,cd:0,dir:1,mv:0,bt:0,u:0,k,sd:0})}
function strike(f,o,S){
 const mul=mulOf(f);
 if(f.s==='dcpunch'){dcHit(f,o,S,mul);return}
 if(f.s==='stop'){if((o.x-f.x)*f.dir>0&&Math.abs(o.x-f.x)<75&&o.y<AIR){const blk=o.g&&(f.x-o.x)*o.dir>0,hp0=o.hp;hurt(o,STOP_DMG*mul,f,0,0);if(o.hp<hp0&&!blk&&o.hp>0){o.s='hit';o.t=0;o.done=false;o.orb=0;o.g=false;o.kv=f.dir*STOP_KV;o.vy=STOP_VY;o.y=.01}(S.ex||(S.ex=[])).push({x:o.x,t:0})}return}
 if(f.s==='knife'){const n=Math.min(KN_MAX,f.kn||0);f.kn=0;if(n>0)S.pr.push({x:f.x+f.dir*34,dir:f.dir,ow:f.i,k:29,n});return}
 if(f.s==='kcar'){S.pr.push({x:f.x+f.dir*34,dir:f.dir,ow:f.i,k:23});return}
 if(f.s==='btd'){S.pr.push({x:f.x+f.dir*30,dir:f.dir,ow:f.i,k:24});return}
 if(f.s==='gheal'){f.hp=Math.min(f.mhp,f.hp+GXH_HEAL);(S.ex||(S.ex=[])).push({x:f.x,t:0,k:27});return}
 if(f.s==='gscor'){S.pr.push({x:f.x+f.dir*30,x0:f.x+f.dir*30,dir:f.dir,ow:f.i,k:25,ph:0,t:0,ox:f.x+f.dir*GXS_TIP});return}
 if(f.s==='gsoul'){if((o.x-f.x)*f.dir>0&&Math.abs(o.x-f.x)<GS_R&&o.y<AIR&&!(o.sl>0)&&!(o.bd>0)&&!(o.gr>0)&&hitOk(o,f)){const n=f.scn||0,blk=o.g&&(f.x-o.x)*o.dir>0,ex=S.ex||(S.ex=[]);
  if(n>=GS_N){f.scn=0;hurt(o,GS_DMG*mul*zp(f,ZA),f,0,0);o.sl=GS_T;o.pt=o.pz=o.tw=0;o.s='idle';o.t=0;o.g=false;o.orb=0;o.done=false;ex.push({x:o.x,t:0,k:17})}
  else{f.scn=n+1;hurt(o,GS_DMG*mul*zp(f,ZA),f,0,0);if(!blk){o.s='hit';o.t=0;o.done=false;o.orb=0;o.kv=f.dir*GS_KV;o.vy=GS_VY;o.y=.01;ex.push({x:o.x,t:0,k:5});ex.push({x:o.x,t:0,k:9,c:11})}}}return}
 if(o.y>=AIR&&['tail','jab','heavy'].includes(f.s))return;
 if(o.tw>0&&(f.s==='heavy'||f.s==='jab'&&!(f.orb>0)))return;
 if(f.s==='bdpunch'){if((o.x-f.x)*f.dir>0&&Math.abs(o.x-f.x)<BD_R&&o.y<AIR&&!(o.bd>0)&&hitOk(o,f)){o.bd=BD_T;o.bdm=BD_T;o.pt=o.pz=o.tw=0;o.s='idle';o.t=0;o.g=false;o.orb=0;o.done=false;f.s='beatdown';f.t=0;f.done=false;f.bdn=0;(S.ex||(S.ex=[])).push({x:o.x,t:0,k:5})}return}
 if(f.s==='ibpunch'){if((o.x-f.x)*f.dir>0&&Math.abs(o.x-f.x)<IB_R&&o.y<AIR&&!(o.bd>0)&&hitOk(o,f)){o.bd=IB_T;o.bdm=IB_T;o.pt=o.pz=o.tw=0;o.s='idle';o.t=0;o.g=false;o.orb=0;o.done=false;f.x=Math.max(28,Math.min(W-28,o.x-f.dir*46));f.s='ibeat';f.t=0;f.done=false;f.ibn=0;(S.ex||(S.ex=[])).push({x:o.x,t:0,k:5});S.ex.push({x:f.x,t:0,k:15})}return}
 if(f.s==='rball'){S.pr.push({x:f.x+f.dir*34,dir:f.dir,ow:f.i,k:6});return}
 if(f.s==='acerto'){S.pr.push({x:f.x+f.dir*30,y:G-128,vx:f.dir*140,vy:-170,dir:f.dir,ow:f.i,k:8,life:5});return}
 if(f.s==='torn'){const x0=f.x+f.dir*30,T=.5;S.pr.push({x:x0,y:G-128,vx:(o.x-x0)/T,vy:(98-.5*TG*T*T)/T,dir:f.dir,ow:f.i,k:16,l:0,d:isDio(f)?1:0});return}
 if(f.s==='fstrike'){if((o.x-f.x)*f.dir>0&&Math.abs(o.x-f.x)<120&&o.y<AIR)hurt(o,20*mul,f);(S.ex||(S.ex=[])).push({x:f.x+f.dir*70,t:0,k:9,c:f.ch});return}
 if(f.s==='tail'){if((o.x-f.x)*f.dir>0&&Math.abs(o.x-f.x)<TAILR)hurt(o,TAIL_DMG*mul,f);return}
 if(f.s==='raio'){S.pr.push({x:f.x,y:20,dir:f.dir,ow:f.i,k:3,m:mul,life:5});return}
 if(f.s==='rasen'){S.pr.push({x:f.x+f.dir*40,dir:f.dir,ow:f.i,k:2,m:mul});return}
 if(f.s==='throw'){S.pr.push({x:f.x+f.dir*30,dir:f.dir,ow:f.i,k:1,m:mul});return}
 if(f.s==='power'){if(clOk(f)&&!S.cl&&o.y<AIR&&f.y<AIR&&clTry(f,o,S,mul))return;if(f.ch===BR){let L=f.dir>0?W-f.x:f.x;if((o.x-f.x)*f.dir>0&&o.y<AIR){L=Math.abs(o.x-f.x);hurt(o,20*mul*zp(f,ZA),f,1);(S.ex||(S.ex=[])).push({x:o.x,t:0})}f.lzl=L;return}if(f.ch===GI){S.pr.push({x:f.x+f.dir*30,dir:f.dir,ow:f.i,k:7});return}if(isDio(f)){S.pr.push({x:f.x+f.dir*30,dir:f.dir,ow:f.i,k:17});return}if(FZ(f.ch)){S.pr.push({x:f.x+f.dir*34,dir:f.dir,ow:f.i,k:5,fz:f.ch,m:mul*zp(f,ZA)});return}if(f.ch===3){S.pr.push({x:f.x+f.dir*30,dir:f.dir,ow:f.i,k:4});return}if(f.ch===2){if(o.y<AIR&&(o.x-f.x)*f.dir>0&&Math.abs(o.x-f.x)<BAZR)hurt(o,BAZ*mul,f,1);return}if(f.ch===1)f.orb=6;else S.pr.push({x:f.x+f.dir*34,dir:f.dir,ow:f.i,m:mul*zp(f,ZA),v:f.v?1:0});return}
 const orb=f.s==='jab'&&f.orb>0,r=orb?76:f.s==='jab'?66:80;
 if(orb)f.orb=0;
 if((o.x-f.x)*f.dir>0&&Math.abs(o.x-f.x)<r){if(orb)hurt(o,ORB*mul,f,1,1);else{const ok=hs(f,3)&&hitOk(o,f),hp0=o.hp;hurt(o,(f.s==='jab'?4:5)*mul*zp(f,ZP),f);if(ok)dinoHit(f,o,S);if(f.ch===KR&&!(o.bm>0)&&o.hp<hp0&&++f.kh>=KQ_BOOM_N&&o.hp>0){f.kh=0;f.kb=1;o.bm=KQ_FUSE;o.bmo=f.i;o.s='idle';o.t=0;o.done=false;o.orb=0;o.g=false}}if(hs(f,2)&&f.haki<=0&&++f.hk>=4){f.hk=0;f.haki=HAKI_T}}}
function step(f,o,i,dt,S){
 f.t+=dt;f.ph+=dt;f.mv=0;if(f.y>0||f.vy>0){f.vy-=JG*dt;f.y+=f.vy*dt;if(f.y<=0){f.y=0;f.vy=0}}
 if(f.kv){f.x=Math.max(28,Math.min(W-28,f.x+f.kv*dt));f.kv*=Math.max(0,1-3.5*dt);if(Math.abs(f.kv)<15)f.kv=0}
 if(f.hf>0)f.hf=Math.max(0,f.hf-dt);if(f.haki>0)f.haki=Math.max(0,f.haki-dt);if(f.inv>0)f.inv=Math.max(0,f.inv-dt);if(f.ch===IP&&(f.s==='dempsey'||f.s==='gazela'||f.s==='ibpunch'||f.s==='ibeat'))f.inv=Math.max(f.inv||0,.04);if(f.ch===GN){if(f.s==='jab'||f.s==='heavy'||f.s==='gbar'||f.s==='gsoul'){if(f.s!==f.gps||f.t<(f.glt||0))f.ghit=0;f.gps=f.s;f.glt=f.t;if(!f.ghit)f.inv=Math.max(f.inv||0,.04)}else{f.gps=null;f.ghit=0}}if(f.ov>0)f.ov=Math.max(0,f.ov-dt);if(f.tsm&&!(f.st>0))f.tsm=0;if(f.dn>0){f.dn=Math.max(0,f.dn-dt);if(f.dn<=0)(S.ex||(S.ex=[])).push({x:f.x,t:0,k:12})}
 if(f.tr>0){f.en=Math.max(0,f.en-DRAIN*dt);if(f.en<=0)f.tr=0}else if(!((f.ch===GN||f.ch===KR||f.ch===DIU)&&f.s==='gbar'))f.en=Math.min(100,f.en+(FZ(f.ch)?9:f.ch===GN?GB_REGEN:6)*dt);if(f.orb>0)f.orb-=dt;
 if(f.bm>0){f.bm=Math.max(0,f.bm-dt);if(f.bm<=0){const kq=S.f[f.bmo];f.hp=Math.max(0,f.hp-KQ_BOOM);f.s='hit';f.t=0;f.done=false;f.kv=(kq?kq.dir:-f.dir)*450;f.vy=320;f.y=.01;(S.ex||(S.ex=[])).push({x:f.x,t:0,k:22})}}
 if(frz(f)){if((f.ch===GI||isDio(f))&&!f.done&&(f.s==='power'||f.s==='torn'||f.s==='acerto'))(f.lost||(f.lost=[])).push({x:f.x,y:G-30});f.pt=Math.max(0,(f.pt||0)-dt);f.pz=Math.max(0,(f.pz||0)-dt);f.tw=Math.max(0,(f.tw||0)-dt);f.st=Math.max(0,(f.st||0)-dt);if(f.sl>0){f.sl=Math.max(0,f.sl-dt);if(f.sl<=0)(S.ex||(S.ex=[])).push({x:f.x,t:0,k:17})}if(f.fin>0){f.fin=Math.max(0,f.fin-dt);if(f.fin<=0)f.fk=0}f.g=false;f.s='idle';f.t=0;f.done=false;f.dir=o.x>f.x?1:-1;return}
 if(f.s!=='idle'&&f.t>=(f.ch===KR&&f.s==='gbar'?KQ_T:f.ch===DIU&&f.s==='gbar'?DB_T:D[f.s])){f.s='idle';f.t=0}
 f.g=false;
 if(f.s==='stop'){f.dir=o.x>f.x?1:-1;const T=f.t;if((T>=.285&&T<.475)||(T>=.50&&T<.64)){const gap=Math.abs(o.x-f.x);if(gap>46)f.x+=f.dir*Math.min(gap-46,700*dt);f.x=Math.max(28,Math.min(W-28,f.x))}}
 if(f.s==='gbar'&&(f.ch===GN||f.ch===KR||f.ch===DIU)){f.dir=o.x>f.x?1:-1;const m=(i.r?1:0)-(i.l?1:0);f.x+=m*105*dt;f.mv=m*f.dir}
 if(f.s==='idle'||f.s==='hit'){
  if(f.s==='idle'){f.dir=o.x>f.x?1:-1;
  if(i.g)f.g=true;else{const m=(i.r?1:0)-(i.l?1:0);f.x+=m*105*dt;f.mv=m*f.dir}}
  const c=cof(f).cost;
  if(i.ju&&f.s==='idle'&&!(f.y>0)){f.vy=JV;f.y=.01}
  if(i.d&&f.s==='idle'){const m=(i.r?1:0)-(i.l?1:0),toE=o.x>f.x?1:-1,near=Math.abs(o.x-f.x)<=CR,away=m!==0&&m!==toE;
   const tx=Math.max(28,Math.min(W-28,o.x+toE*48));
   if(near&&(f.y>0&&!away||m===toE)&&(tx-o.x)*toE>0){f.dx=toE;f.cv=(tx-f.x)/XD;f.s='dodge';f.t=0;f.done=false}
   else{f.dx=m||-f.dir;f.cv=0;f.s='dodge';f.t=0;f.done=false}}
  else if(i.pw&&f.en>=c&&!(f.ch===1&&f.orb>0)&&!((f.ch===GI||isDio(f))&&(f.balls<1||o.pz>0||o.tw>0||o.pt>0))){f.en-=c;if(f.ch===GI||isDio(f))f.balls--;f.s=f.ch===IP?'dempsey':f.ch===GN||f.ch===KR||f.ch===DIU?'gbar':'power';f.t=0;f.done=false;f.up=0;f.cb=0;f.pn=0;f.gn=0}
  else if(i.sp&&f.ch===0&&!f.v&&f.tr<=0&&f.en>=CH[0].sp){f.en-=CH[0].sp;f.tr=1;f.s='ssj3';f.t=0;f.done=false}
  else if(i.sp&&f.ch===1&&f.en>=CH[1].sp){f.en-=CH[1].sp;f.s='throw';f.t=0;f.done=false}
  else if(i.sp2&&f.ch===1&&f.en>=CH[1].sp2){f.en-=CH[1].sp2;f.s='rasen';f.t=0;f.done=false}
  else if(i.sp&&f.ch===3&&!f.din&&f.en>=CH[3].sp){f.en-=CH[3].sp;f.din=1;f.hp=Math.min(f.mhp,f.hp+f.mhp*DIN_HEAL);f.s='ssj3';f.t=0;f.done=false;const mn=S.mn||(S.mn=[]);for(const k of[-1,1])mn.push({x:f.x-f.dir*(k<0?50:90),dir:f.dir,ow:f.i,t:MN_T,cd:.6,bt:0,mv:0,sd:k<0?34:48})}
  else if(i.sp2&&f.ch===3&&f.en>=CH[3].sp2){f.en-=CH[3].sp2;f.s='tail';f.t=0;f.done=false}
  else if(i.sp2&&f.ch===2&&f.g5&&f.en>=RAIO_COST){f.en-=RAIO_COST;f.s='raio';f.t=0;f.done=false}
  else if(i.sp2&&f.ch===GI&&f.balls>0&&f.en>=CH[5].sp2){f.en-=CH[5].sp2;f.balls--;f.s='acerto';f.t=0;f.done=false}
  else if(i.sp&&f.ch===GI&&f.balls>0&&f.en>=CH[5].sp&&!(o.tw>0)){f.en-=CH[5].sp;f.balls--;f.s='torn';f.t=0;f.done=false}
  else if(i.sp&&isDio(f)&&f.balls>0&&f.en>=DT_COST&&!(o.tw>0)){f.en-=DT_COST;f.balls--;f.s='torn';f.t=0;f.done=false}
  else if(i.sp&&FZ(f.ch)&&!isDio(f)&&f.en>=cof(f).sp){const v=FV[FI(f.ch)];f.en-=cof(f).sp;f.s='ssj3';f.t=0;f.done=false;f.ov=v.buff;f.inv=v.inv;f.hp=Math.min(f.mhp,f.hp+f.mhp*v.heal)}
  else if(i.sp2&&FZ(f.ch)&&f.en>=cof(f).sp2){f.en-=cof(f).sp2;if(f.pc&&f.pc.includes(5)&&f.balls>0){f.balls--;(f.lost||(f.lost=[])).push({x:f.x,y:G-30})}f.s='fstrike';f.t=0;f.done=false}
  else if(i.sp2&&f.ch===DIU&&(f.kn||0)>0&&!(f.y>0)&&f.en>=KN_COST){f.en-=KN_COST;f.s='knife';f.t=0;f.done=false}
  else if(i.sp2&&f.ch===DIU&&!((f.kn||0)>0)&&!(f.y>0)&&f.en>=STOP_COST){f.en-=STOP_COST;f.s='stop';f.t=0;f.done=false}
  else if(i.sp2&&f.ch===KR&&!(f.y>0)&&f.en>=CH[9].sp2){f.en-=CH[9].sp2;f.s='kcar';f.t=0;f.done=false}
  else if(i.sp&&f.ch===KR&&f.rq>0&&!(f.y>0)&&f.en>=KQ_BTD_COST){f.en-=KQ_BTD_COST;f.s='btd';f.t=0;f.done=false}
  else if(i.sp3&&f.ch===GN&&!(f.y>0)&&f.en>=GXH_COST&&f.hp<f.mhp&&!(o.bd>0)&&!(o.gr>0)){f.en-=GXH_COST;f.s='gheal';f.t=0;f.done=false}
  else if(i.sp4&&f.ch===GN&&f.ger&&!(f.y>0)&&f.en>=GXR_COST&&!(o.bd>0)&&!(o.gr>0)){f.en-=GXR_COST;f.s='gret';f.t=0;f.done=false;f.gdone=0}
  else if(i.sp&&f.ch===GN&&f.ger&&!(f.y>0)&&f.en>=GXS_COST&&!(o.bd>0)&&!(o.gr>0)){f.en-=GXS_COST;f.s='gscor';f.t=0;f.done=false}
  else if(i.sp2&&f.ch===GN&&!f.ger&&!(f.y>0)&&f.en>=CH[8].sp2&&!(o.sl>0)&&!(o.bd>0)&&!(o.gr>0)){f.en-=CH[8].sp2;f.s='gsoul';f.t=0;f.done=false}
  else if(i.sp2&&f.ch===IP&&Math.abs(o.x-f.x)<=120&&f.en>=CH[6].sp2){f.en-=CH[6].sp2;f.s='gazela';f.t=0;f.done=false;f.up=0}
  else if(i.sp2&&f.ch===BR&&!(f.y>0)&&f.en>=CH[7].sp2&&!(o.gr>0)&&!(o.bd>0)){f.en-=CH[7].sp2;f.s='grab';f.t=0;f.done=false}
  else if(i.sp3&&f.ch===GI&&f.balls>=BALLS&&f.en>=BD_COST&&!(o.bd>0)&&!(f.y>0)){f.en-=BD_COST;f.s='bdpunch';f.t=0;f.done=false}
  else if(i.sp3&&f.ch===IP&&!(f.y>0)&&!(o.bd>0)&&f.en>=IB_COST){f.en-=IB_COST;f.s='ibpunch';f.t=0;f.done=false}
  else if(i.sp3&&f.ch===10&&f.en>=SP3C){f.en-=SP3C;f.s='rball';f.t=0;f.done=false}
  else if(i.hv){f.s='heavy';f.t=0;f.done=false;f.lh=!f.lh}
  else if(i.jb){f.s='jab';f.t=0;f.done=false;f.lh=!f.lh}}
 if(f.ch===IP&&(f.s==='dempsey'||f.s==='gazela'||f.s==='ibpunch'))ippu(f,o,dt,S);
 if(f.s==='grab'){if(f.t<GR_DASH)f.x+=f.dir*GR_SPD*dt;if(!f.done&&Math.abs(o.x-f.x)<GR_R&&(o.x-f.x)*f.dir>-20&&o.y<AIR&&!(o.bd>0)&&!(o.gr>0)&&!(o.s==='dodge'&&o.t<.25||o.s==='nika'||o.s==='fuse'||o.inv>0||o.hp<=0)){f.done=true;o.gr=1;o.pt=o.pz=o.tw=0;o.s='idle';o.t=0;o.g=false;o.orb=0;o.done=false;o.y=0;o.vy=0;o.kv=0;f.s='drag';f.t=0;f.done=false;f.gc=0;(S.ex||(S.ex=[])).push({x:o.x,t:0,k:5})}}
 if(f.s==='dodge'&&f.t<.25)f.x+=f.cv?f.cv*dt:(f.dx||-f.dir)*230*dt;
 if(A[f.s]!==undefined&&!f.done&&f.t>=A[f.s]){f.done=true;strike(f,o,S)}
 if(gb(f)&&f.g&&f.lost&&f.lost.length){for(const b of f.lost)S.pr.push({x:b.x,y:b.y,dir:f.dir,ow:f.i,k:9,life:3});f.lost=[]}
 f.x=Math.max(28,Math.min(W-28,f.x))}
function ippu(f,o,dt,S){
 const mul=mulOf(f),d=Math.abs(o.x-f.x),front=(o.x-f.x)*f.dir>0,
  safe=o.s==='dodge'&&o.t<.25||o.s==='nika'||o.s==='fuse'||o.inv>0||o.y>=AIR;
 if(f.s==='dempsey'){
  if((f.t<.2||f.t>=.28&&f.t<.48)&&d>44)f.x+=f.dir*420*dt;
  if(!f.up&&f.t>=.55){f.up=1;
   if(front&&d<95&&!safe){f.cb=1;o.g=false;o.st=STUN_T;o.s='idle';o.t=0;o.orb=0;o.done=false;o.pt=o.pt||0;
    hurt(o,4*mul,f,0,1);(S.ex||(S.ex=[])).push({x:o.x,t:0,k:5})}
   else{f.s='idle';f.t=0;f.up=0;f.cb=0;f.pn=0;return}}
  if(f.cb)while((f.pn||0)<5&&f.t>=.75+.1*(f.pn||0)){f.pn=(f.pn||0)+1;
   if(o.st>0&&d<120){hurt(o,3.2*mul,f,0,1);(S.ex||(S.ex=[])).push({x:o.x,t:0,k:5})}}}
 else if(f.s==='ibpunch'){if(f.t<.28&&d>46)f.x+=f.dir*420*dt}
 else if(f.s==='gazela'){
  if(f.t<.3){if(d>40)f.x+=f.dir*40*dt}
  else if(f.t<.42&&d>40)f.x+=f.dir*520*dt;
  if(!f.up&&f.t>=.38){f.up=1;
   if(front&&d<100&&!safe){hurt(o,20*mul,f,0,1);(S.ex||(S.ex=[])).push({x:o.x,t:0,k:5})}}}}
function aiI(f,o,dt){
 const i={},d=Math.abs(f.x-o.x),tw=o.x>f.x?'r':'l',aw=tw==='r'?'l':'r',C=CH[6];
 f.ct=(f.ct||0)-dt;
 if(f.ct<=0){f.ct=.25+Math.random()*.35;const r=Math.random();
  f.plan=d>85?(r<.7?'in':'g'):d<50?(r<.35?'out':'atk'):(r<.6?'atk':r<.8?'g':'in');
  if(f.en>=C.cost&&d<240&&d>50&&Math.random()<.45)f.plan='pw';
  if(f.en>=C.sp2&&d<=110&&Math.random()<.5)f.plan='q';
  if(f.en>=C.sp3&&d<=110&&!(o.bd>0)&&Math.random()<.45)f.plan='bd'}
 if(['jab','heavy','power','fstrike','dempsey','gazela'].includes(o.s)){if(!f.seen){f.seen=1;if(d<100&&Math.random()<.4)f.gt=.45}}else f.seen=0;
 if(f.gt>0){f.gt-=dt;i.g=1;return i}
 if(f.plan==='in')i[tw]=d>70;else if(f.plan==='out')i[aw]=1;else if(f.plan==='g')i.g=1;
 else if(f.plan==='atk'&&d<80){i[Math.random()<.5?'jb':'hv']=1;f.ct=.5}
 else if(f.plan==='pw'){i.pw=1;f.plan='in'}else if(f.plan==='q'){i.sp2=1;f.plan='in'}else if(f.plan==='bd'){i.sp3=1;f.plan='in'}
 return i}
function aiF(f,o,dt){
 const i={},d=Math.abs(f.x-o.x),tw=o.x>f.x?'r':'l',aw=tw==='r'?'l':'r',C=cof(f);
 if(f.dy>0){f.dw=(f.dw||0)+dt;if(f.dw>.8)i.nk=1;return i}f.dw=0;
 f.ct=(f.ct||0)-dt;
 if(f.ct<=0){f.ct=.25+Math.random()*.35;const r=Math.random();f.plan=d>85?(r<.7?'in':'pw'):d<50?(r<.35?'out':'atk'):(r<.6?'atk':r<.8?'g':'in');
  if(f.en>=C.cost&&d>60&&Math.random()<.45)f.plan='pw';if(f.en>=C.sp&&!(f.ov>0)&&Math.random()<.3)f.plan='sp';if(f.en>=C.sp2&&d<110&&Math.random()<.45)f.plan='q';if(f.ch===10&&f.en>=SP3C&&d>60&&Math.random()<.4)f.plan='r'}
 if(['jab','heavy','power','fstrike'].includes(o.s)){if(!f.seen){f.seen=1;if(d<100&&Math.random()<.4)f.gt=.45}}else f.seen=0;
 if(f.gt>0){f.gt-=dt;i.g=1;return i}
 if(f.plan==='in')i[tw]=d>70;else if(f.plan==='out')i[aw]=1;else if(f.plan==='g')i.g=1;
 else if(f.plan==='atk'&&d<80){i[Math.random()<.5?'jb':'hv']=1;f.ct=.5}
 else if(f.plan==='sp'){i.sp=1;f.plan='in'}else if(f.plan==='pw'){i.pw=1;f.plan='in'}else if(f.plan==='q'){i.sp2=1;f.plan='in'}else if(f.plan==='r'){i.sp3=1;f.plan='in'}
 return i}
function aiG(f,o,dt){
 const i={},d=Math.abs(f.x-o.x),tw=o.x>f.x?'r':'l',aw=tw==='r'?'l':'r',C=CH[5],hold=o.tw>0||o.pz>0;
 f.ct=(f.ct||0)-dt;
 if(f.ct<=0){f.ct=.25+Math.random()*.35;const r=Math.random();
  f.plan=hold?(d>70?'in':'atk'):d>85?(r<.7?'in':'pw'):d<50?(r<.35?'out':'atk'):(r<.6?'atk':r<.8?'g':'in');
  if(!hold&&f.balls>0){if(f.en>=C.sp2&&d>50&&Math.random()<.4)f.plan='q';if(f.en>=C.cost&&d>60&&Math.random()<.5)f.plan='pw';if(f.en>=C.sp&&Math.random()<.5)f.plan='sp';if(f.balls>=BALLS&&f.en>=C.sp3&&d<BD_R-60&&Math.random()<.6)f.plan='bd'}
  if(f.balls<1&&f.lost&&f.lost.length)f.plan='g'}
 if(!hold&&['jab','heavy','power','fstrike'].includes(o.s)){if(!f.seen){f.seen=1;if(d<100&&Math.random()<.4)f.gt=.45}}else f.seen=0;
 if(f.gt>0){f.gt-=dt;i.g=1;return i}
 if(f.plan==='in')i[tw]=d>70;else if(f.plan==='out')i[aw]=1;else if(f.plan==='g')i.g=1;
 else if(f.plan==='atk'){if(d<80){i[Math.random()<.5?'jb':'hv']=1;f.ct=.5}else i[tw]=1}
 else if(f.plan==='sp'){i.sp=1;f.plan='in'}else if(f.plan==='pw'){i.pw=1;f.plan='in'}else if(f.plan==='q'){i.sp2=1;f.plan='in'}else if(f.plan==='bd'){i.sp3=1;f.plan='in'}
 return i}
function aiB(f,o,dt){
 const i={},d=Math.abs(f.x-o.x),tw=o.x>f.x?'r':'l',aw=tw==='r'?'l':'r',C=CH[7];
 f.ct=(f.ct||0)-dt;
 if(f.ct<=0){f.ct=.25+Math.random()*.35;const r=Math.random();
  f.plan=d>85?(r<.7?'in':'g'):d<50?(r<.35?'out':'atk'):(r<.6?'atk':r<.8?'g':'in');
  if(f.en>=C.cost&&d>70&&Math.random()<.5)f.plan='pw';
  if(f.en>=C.sp2&&d<220&&Math.random()<.5)f.plan='q'}
 if(['jab','heavy','power'].includes(o.s)){if(!f.seen){f.seen=1;if(d<100&&Math.random()<.4)f.gt=.45}}else f.seen=0;
 if(f.gt>0){f.gt-=dt;i.g=1;return i}
 if(f.plan==='in')i[tw]=d>70;else if(f.plan==='out')i[aw]=1;else if(f.plan==='g')i.g=1;
 else if(f.plan==='atk'&&d<80){i[Math.random()<.5?'jb':'hv']=1;f.ct=.5}
 else if(f.plan==='pw'){i.pw=1;f.plan='in'}else if(f.plan==='q'){i.sp2=1;f.plan='in'}
 return i}
function aiN(f,o,dt){
 const i={},d=Math.abs(f.x-o.x),tw=o.x>f.x?'r':'l',aw=tw==='r'?'l':'r',C=CH[8];
 f.ct=(f.ct||0)-dt;
 if(f.ct<=0){f.ct=.25+Math.random()*.35;const r=Math.random();
  f.plan=d>85?(r<.7?'in':'g'):d<50?(r<.35?'out':'atk'):(r<.6?'atk':r<.8?'g':'in');
  if(f.en>=C.cost&&d<=GB_R-10&&Math.random()<.45)f.plan='pw';
  if(!f.ger&&f.en>=C.sp2&&d<=GS_R-15&&!(o.sl>0)&&Math.random()<.4)f.plan='q';
  if(f.ger&&f.en>=GXS_COST&&d>80&&d<440&&Math.random()<.4)f.plan='s';
  if(f.hp<=f.mhp-GXH_HEAL&&f.en>=GXH_COST&&d>90&&Math.random()<.5)f.plan='h'}
 if(['jab','heavy','power','gbar'].includes(o.s)){if(!f.seen){f.seen=1;if(d<100&&Math.random()<.4)f.gt=.45}}else f.seen=0;
 if(f.s==='gbar'){if(d>GB_R-25)i[tw]=1;return i}
 if(f.s==='idle'&&f.ger&&f.en>=GXR_COST&&!(o.rz>0)&&['jab','heavy','power','gbar','torn','acerto'].includes(o.s)&&d<130&&Math.random()<.04){i.sp4=1;return i}
 if(f.s==='gsoul'||f.s==='gscor'||f.s==='gheal'||f.s==='gret')return i;
 if(o.sl>0){if(d>60)i[tw]=1;else i[Math.random()<.4?'hv':'jb']=1;return i}
 if(f.gt>0){f.gt-=dt;i.g=1;return i}
 if(f.plan==='in')i[tw]=d>70;else if(f.plan==='out')i[aw]=1;else if(f.plan==='g')i.g=1;
 else if(f.plan==='atk'&&d<80){i[Math.random()<.5?'jb':'hv']=1;f.ct=.5}
 else if(f.plan==='pw'){i.pw=1;f.plan='in'}else if(f.plan==='q'){i.sp2=1;f.plan='in'}else if(f.plan==='s'){i.sp=1;f.plan='in'}else if(f.plan==='h'){i.sp3=1;f.plan='in'}
 return i}
function aiK(f,o,dt){
 const i={},d=Math.abs(f.x-o.x),tw=o.x>f.x?'r':'l',aw=tw==='r'?'l':'r';
 f.ct=(f.ct||0)-dt;
 if(f.ct<=0){f.ct=.25+Math.random()*.35;const r=Math.random();
  f.plan=d>85?(r<.7?'in':'g'):d<50?(r<.35?'out':'atk'):(r<.6?'atk':r<.8?'g':'in');
  if(f.en>=CH[9].cost&&d<=GB_R-10&&Math.random()<.45)f.plan='pw';
  if(f.en>=CH[9].sp2&&d>60&&Math.random()<.35)f.plan='q';
  if(f.rq>0&&f.en>=KQ_BTD_COST&&d>70&&Math.random()<.35)f.plan='b'}
 if(f.plan==='b'){f.plan='in';i.sp=1;return i}
 if(['jab','heavy','power','gbar'].includes(o.s)){if(!f.seen){f.seen=1;if(d<100&&Math.random()<.4)f.gt=.45}}else f.seen=0;
 if(f.s==='gbar'){if(d>GB_R-25)i[tw]=1;return i}
 if(o.sl>0){if(d>60)i[tw]=1;else i[Math.random()<.4?'hv':'jb']=1;return i}
 if(f.gt>0){f.gt-=dt;i.g=1;return i}
 if(f.plan==='in')i[tw]=d>70;else if(f.plan==='out')i[aw]=1;else if(f.plan==='g')i.g=1;
 else if(f.plan==='atk'&&d<80){i[Math.random()<.5?'jb':'hv']=1;f.ct=.5}
 else if(f.plan==='pw'){i.pw=1;f.plan='in'}else if(f.plan==='q'){i.sp2=1;f.plan='in'}
 return i}
function ai(f,o,dt){
 if(f.ch===DIU&&f.aw===1&&f.s==='idle'&&!(f.y>0)&&f.dy<=0)return{awk:1};
 if(f.ch===DIU&&f.ult>0&&f.s==='idle'&&f.en>=RR_COST&&!(f.y>0)&&o.hp>0&&Math.random()<.02)return{sp4:1};
 if(f.ch===DIU&&f.ult>0&&f.s==='idle'&&f.en>=TS_COST&&!(f.y>0)&&!(o.st>0)&&o.hp>0&&Math.random()<.02)return{sp3:1};
 if(f.ch===DIU&&f.s==='idle'&&f.dy<=0){const d0=Math.abs(f.x-o.x);if((f.kn||0)>=3&&d0>80&&Math.random()<.04)return{sp2:1};if(!((f.kn||0)>0)&&f.en>=STOP_COST&&d0>70&&d0<260&&Math.random()<.03)return{sp2:1};if(f.kx!=null&&Math.abs(f.kx-f.x)>14&&d0>70)return f.kx>f.x?{r:1}:{l:1}}
 if(f.ch===KR)return aiK(f,o,dt);
 if(f.ch===GN)return aiN(f,o,dt);
 if(f.ch===BR)return aiB(f,o,dt);
 if(f.ch===GI)return aiG(f,o,dt);
 if(f.ch===IP)return aiI(f,o,dt);
 if(FZ(f.ch))return aiF(f,o,dt);
 const i={},d=Math.abs(f.x-o.x),tw=o.x>f.x?'r':'l',aw=tw==='r'?'l':'r',c=cof(f).cost;
 if(f.dy>0){f.dw=(f.dw||0)+dt;if(f.dw>.8)i.nk=1;return i}f.dw=0;
 f.ct=(f.ct||0)-dt;
 if(f.ct<=0){f.ct=.25+Math.random()*.4;const r=Math.random();
  f.plan=d>85?(r<.75?'in':'pw'):d<50?(r<.4?'out':'atk'):(r<.6?'atk':r<.8?'g':'in');
  if(d>70&&Math.random()<.08)f.plan='j';if(f.en>=c&&f.orb<=0&&(f.ch===1||d>60&&(f.ch!==2||d<230))&&Math.random()<.35)f.plan='pw';if(f.ch===0&&!f.v&&f.tr<=0&&f.en>=CH[0].sp&&d<160&&Math.random()<.5)f.plan='sp';if(f.ch===1&&f.en>=CH[1].sp&&f.orb<=0&&d>60&&Math.random()<.5)f.plan='sp';if(f.ch===1&&f.en>=CH[1].sp2&&f.orb<=0&&d>50&&Math.random()<.4)f.plan='q';if(f.ch===2&&f.g5&&f.en>=RAIO_COST&&Math.random()<.4)f.plan='q';if(f.ch===3&&!f.din&&f.en>=CH[3].sp&&Math.random()<.8)f.plan='sp';if(f.ch===3&&f.en>=CH[3].sp2&&d<TAILR-15&&Math.random()<.6)f.plan='q'}
 if(['jab','heavy','power'].includes(o.s)){if(!f.seen){f.seen=1;if(d<100&&Math.random()<.45)f.gt=.45}}else f.seen=0;
 if(f.gt>0){f.gt-=dt;i.g=1;return i}
 if(f.ch===1&&f.orb>0){if(d<74)i.jb=1;else i[tw]=1;return i}
 if(f.plan==='in')i[tw]=d>70;
 else if(f.plan==='j'){i.ju=1;i[tw]=1;f.plan='in'}
 else if(f.plan==='out')i[aw]=1;
 else if(f.plan==='g')i.g=1;
 else if(f.plan==='atk'&&d<80){i[Math.random()<.5?'jb':'hv']=1;f.ct=.5}
 else if(f.plan==='sp'){if(f.en>=CH[f.ch].sp)i.sp=1;f.plan='in'}
 else if(f.plan==='pw'){if(f.en>=c&&f.orb<=0&&(f.ch!==2||d<235))i.pw=1;f.plan='in'}
 else if(f.plan==='q'){if(f.en>=sp2c(f)&&f.ch!==DIU)i.sp2=1;f.plan='in'}
 return i}
function nika(f){f.dy=0;f.hp=f.mhp*NIKA_HP;f.g5=1;f.s='nika';f.t=0;f.done=false;f.g=false}
function fuse(S,i){
 const a=S.f[i],b=S.bn[i],k=fuOf(pk(a),pk(b)),F=mk(a.x,a.dir,k,i);
 F.y=a.y||0;F.vy=a.vy||0;F.mhp=(a.mhp+b.mhp)*FU_HP;F.hp=Math.min(F.mhp,(a.hp+b.hp)*FU_HP);F.en=Math.min(100,Math.max(0,a.en-FU_COST)+30);F.s='fuse';F.t=0;F.done=false;F.dn=a.dn||0;F.pc=[pk(a),pk(b)];if(k===10&&S.pp&&S.pp[i])F.vg=1;if(F.pc.includes(5)){F.balls=BALLS;F.lost=[]}
 const ph=mk(F.x,F.dir,b.ch,i);ph.hp=0;
 S.fz[i]={a,b,t:FU_T};S.fu1[i]=1;S.f[i]=F;S.bn[i]=ph;(S.ex||(S.ex=[])).push({x:F.x,t:0,k:8,c:k})}
function unfuse(S,i){
 const z=S.fz[i],F=S.f[i],sum=Math.max(1,z.a.hp+z.b.hp),r=Math.max(.01,F.hp/(sum*FU_HP));
 for(const c of[z.a,z.b]){c.hp=Math.max(1,Math.min(c.mhp,c.hp*r));c.x=F.x;c.dir=F.dir;c.y=F.y||0;c.vy=F.vy||0;c.s='idle';c.t=0;c.done=false;c.g=false;c.pt=0;c.pz=0;c.tw=0;c.orb=0;c.i=i}
 z.a.dn=F.dn||0;z.a.en=Math.min(100,F.en);z.b.en=Math.min(100,F.en*.5);
 S.f[i]=z.a;S.bn[i]=z.b;S.fz[i]=null;(S.sc||(S.sc=[0,0]))[i]=SWAPCD;(S.ex||(S.ex=[])).push({x:F.x,t:0,k:8,c:0})}
const CS_T=9.5,CS_AT=20,KC_T=10,KC_AT=10,GX_I=7,GX_T=GX_I+12.5,GX_AT=30;
// AWK do Diu: <=30% de vida libera o botão; cutscene suga sangue (cura 70%) e entra na ULT
const AWK_TH=.3,AWK_HEAL=.7,DV_T=8.2,DV_AT=2.9,DV_END=5.6,TS_T=3.6,TS_EYE=2,TS_COST=80,TS_STUN=9;
const SNAP=new WeakMap(),BTD_BACK=60,BTD_HP=.7,BTD_TH=.4,BTD_FREEZE=1.5;
function snapSave(S){let L=SNAP.get(S);if(!L){L=[];SNAP.set(S,L)}const last=L[L.length-1];if(last&&S.mt-last.t<1)return;
 try{L.push({t:S.mt,d:structuredClone({f:S.f,bn:S.bn,fz:S.fz,fu1:S.fu1,sc:S.sc,mn:S.mn,gsc:S.gsc,csd:S.csd})})}catch(e){return}
 while(L.length&&S.mt-L[0].t>BTD_BACK+2)L.shift()}
function btdCheck(S){const i=S.f.findIndex(f=>f.ch===KR&&f.rq>0&&f.kb&&!f.btdU&&f.hp<=f.mhp*BTD_TH);if(i<0)return false;
 const L=SNAP.get(S);if(!L||!L.length)return false;
 const sn=L.find(e=>S.mt-e.t<=BTD_BACK&&e.d.f[i]&&e.d.f[i].ch===KR);if(!sn)return false;
 const d=structuredClone(sn.d);S.f=d.f;S.bn=d.bn;S.fz=d.fz;S.fu1=d.fu1;S.sc=d.sc;S.mn=d.mn;S.gsc=d.gsc;S.csd=d.csd;
 const k=S.f[i];k.hp=k.mhp*BTD_HP;k.rq=2;k.btdU=1;k.kb=1;k.bm=0;k.s='idle';k.t=0;k.done=false;k.g=false;k.st=0;k.y=0;k.vy=0;
 S.pr=[];S.ex=[];S.cl=null;S.cw=null;S.kc=null;S.kcd=1;S.bt={t:0,i};SNAP.set(S,[]);return true}
let VGC=null;
const PT_T=4.6,PO_R=36,PO_HEAL=.25,PO_DELAY=2,poOk=f=>!!f&&f.hp>0&&(pk(f)===0||pk(f)===4),
poSide=S=>{if(!S.bn)return -1;for(const i of[0,1]){const z=S.fz&&S.fz[i],a=z?z.a:S.f[i],b=z?z.b:S.bn[i];if(!a||!b)continue;const x=pk(a),y=pk(b);if(((x===0&&y===4)||(x===4&&y===0))&&(z?S.f[i].hp>0:(a.hp>0&&b.hp>0)))return i}return -1};
function potara(S,dt){
 if(S.over||S.pod)return;
 if(!S.po){if(poSide(S)<0){S.pot=0;return}S.pot=(S.pot||0)+dt;if(S.pot>=PO_DELAY){S.po={x:W/2,t:0,s:poSide(S)};(S.ex||(S.ex=[])).push({x:W/2,t:0,k:10})}return}
 S.po.t+=dt;
 const f=S.f[S.po.s];
 if(poOk(f)&&Math.abs(f.x-S.po.x)<PO_R&&(f.y||0)<70){
  f.hp=Math.min(f.mhp,f.hp+f.mhp*PO_HEAL);(S.ex||(S.ex=[])).push({x:S.po.x,t:0,k:10});S.pp=S.pp||[0,0];S.pp[S.po.s]=1;S.pt={t:0,s:S.po.s};S.po=null;S.pod=1}}
function tick(S,a,b,dt){
 if(S.bt){S.bt.t+=dt;if(S.bt.t>=BTD_FREEZE)S.bt=null;return}
 if(S.pt){S.pt.t+=dt;if(S.pt.t>=PT_T)S.pt=null;return}
 if(S.zr){S.zr.t+=dt;if(S.zr.t>=GXR_CT)zrEnd(S);return}
 if(S.rr){S.rr.t+=dt;if(S.rr.t>=RR_T)rrEnd(S);return}
 if(S.kc){S.kc.t+=dt;if(S.kc.t>=KC_T){const f=S.f[S.kc.i];f.rq=2;S.kc=null;S.kcd=1}return}
 if(S.gx){S.gx.t+=dt;if(S.gx.t>=GX_T){const gf=S.f[S.gx.i];if(gf)gf.ger=1;S.gx=null;S.gxd=1}return}
 if(S.dv){const d=S.dv,f=S.f[d.i],t0=d.t;d.t+=dt;if(f&&f.hp>0){const a=Math.max(t0,DV_AT),b=Math.min(d.t,DV_END);if(b>a)f.hp=Math.min(f.mhp,f.hp+f.mhp*AWK_HEAL*(b-a)/(DV_END-DV_AT))}if(d.t>=DV_T){if(f){f.ult=1;f.aw=2}S.dv=null}return}
 if(S.ts){const d=S.ts;d.t+=dt;if(d.t>=TS_T){const o=S.f[1-d.i];if(o&&o.hp>0){o.st=TS_STUN;o.tsm=1;o.s='idle';o.t=0;o.done=false;o.g=false;o.orb=0}S.ts=null}return}
 if(S.cs){S.cs.t+=dt;if(S.cs.t>=CS_T){const f=S.f[S.cs.i];f.br=1;f.hf=.8;f.hc=BR_HITS;S.cs=null;S.csd=1}return}
 if(!S.over){S.mt=(S.mt||0)+dt;snapSave(S);const ks=S.kks||(S.kks=[0,0]),gs=S.gks||(S.gks=[0,0]),cs=S.cks||(S.cks=[0,0]);if(S.mt>=KC_AT){const i=S.f.findIndex(f=>f.ch===KR&&f.hp>0&&!(f.rq>0)&&!ks[f.i]);if(i>=0){ks[i]=1;S.kc={t:0,i}}}
  if(S.mt>=GX_AT){const i=S.f.findIndex(f=>f.ch===GN&&f.hp>0&&!f.ger&&!gs[f.i]);if(i>=0){gs[i]=1;S.gx={t:0,i}}}
  if(S.mt>=CS_AT){const i=S.f.findIndex(f=>hs(f,7)&&!f.br&&f.hp>0&&!cs[f.i]);if(i>=0){cs[i]=1;S.cs={t:0,i}}}}
 let p=S.f[0],e=S.f[1];const dyf=S.f.find(f=>f.dy>0);
 if(dyf){if((dyf.i===0?a:b).nk)nika(dyf);else if((dyf.dy-=dt)<=0){dyf.dy=0;S.over=1;S.win=1-dyf.i}return}
 if(!S.over&&!dyf&&!S.cl&&!S.dc&&!S.zr){for(const f of S.f){if(f.ch!==DIU||f.hp<=0||f.aw===2)continue;if(f.hp<=f.mhp*AWK_TH)f.aw=1;const inp=f.i===0?a:b;if(f.aw===1&&inp&&inp.awk&&f.s==='idle'&&!frz(f)&&!(f.y>0)&&S.f[1-f.i].hp>0){f.aw=2;f.s='idle';f.t=0;f.done=false;f.g=false;S.dv={t:0,i:f.i};return}}}
 if(!S.over&&!dyf&&!S.cl&&!S.dc&&!S.zr){for(const f of S.f){if(f.ch!==DIU||!(f.ult>0)||f.hp<=0)continue;const o=S.f[1-f.i],inp=f.i===0?a:b;if(inp&&inp.sp4&&f.s==='idle'&&!frz(f)&&!(f.y>0)&&o.hp>0&&f.en>=RR_COST){f.en-=RR_COST;f.s='idle';f.t=0;f.done=false;f.g=false;S.rr={t:0,i:f.i,ox:o.x,gx:Math.max(28,Math.min(W-28,o.x-f.dir*84))};return}if(inp&&inp.sp3&&f.s==='idle'&&!frz(f)&&!(f.y>0)&&o.hp>0&&!(o.st>0)&&f.en>=TS_COST){f.en-=TS_COST;f.s='idle';f.t=0;f.done=false;f.g=false;S.ts={t:0,i:f.i};return}}}
 if(S.bn){S.fz=S.fz||[null,null];S.fu1=S.fu1||[0,0];
  for(const i of[0,1]){const z=S.fz[i],f0=S.f[i];
   if(z){if((z.t-=dt)<=0&&f0.s!=='fuse')unfuse(S,i)}
   else if((i?b:a).fu&&!S.fu1[i]&&canF(f0,S.bn[i])&&f0.s==='idle'&&!frz(f0)&&f0.en>=FU_COST&&S.bn[i].hp>0)fuse(S,i)}
  const sc=S.sc||(S.sc=[0,0]);for(const i of[0,1]){sc[i]=Math.max(0,sc[i]-dt);const f=S.f[i],bn=S.bn[i];bn.en=Math.min(100,bn.en+BEN_EN*dt);if(bn.dn>0)bn.dn=Math.max(0,bn.dn-dt);if((i?b:a).tg&&sc[i]<=0&&f.s==='idle'&&!frz(f)&&bn.hp>0){swap(S,i);sc[i]=SWAPCD}}p=S.f[0];e=S.f[1]}
 if(S.cw&&(S.cw.t+=dt)>1.4)S.cw=null;
 if(S.rb&&(S.rb.t+=dt)>DC_RB)S.rb=null;
 if(!S.cl&&!S.dc)dcTry(S);
 for(const f of S.f)if(f.s==='dclash'&&!S.dc&&S.f[1-f.i].s!=='dcpunch'){f.s='idle';f.t=0}
 if(S.cl)clUp(S,a,b,dt);else if(S.dc)dcUp(S,a,b,dt);else{step(p,e,a,dt,S);if(!S.cl)step(e,p,b,dt,S)}
 for(const f of S.f)if(f.s==='drag'){const t=S.f[1-f.i];
  if(f.hp<=0||t.hp<=0||!(t.gr>0)){t.gr=0;f.s='idle';f.t=0;f.dp=0;f.lzl=0;continue}
  f.x+=f.dir*DRAG_SPD*dt;const wall=f.dir>0?f.x>=W-28:f.x<=28;f.x=Math.max(28,Math.min(W-28,f.x));
  if(!f.dp){
   t.x=Math.max(28,Math.min(W-28,f.x-f.dir*DRAG_BACK));t.y=0;t.vy=0;
   f.gc=(f.gc||0)+dt;while(f.gc>=DRAG_TICK){f.gc-=DRAG_TICK;hurt(t,DRAG_DMG,f,1,1);(S.ex||(S.ex=[])).push({x:t.x,t:0,k:5})}
   if(wall||f.t>=DRAG_GO){f.dp=1;f.dir=-f.dir;f.t=0;f.gc=0;(S.ex||(S.ex=[])).push({x:t.x,t:0,k:9,c:11})}}
  else{
   {const off=DRAG_BACK+(DRAG_FRONT-DRAG_BACK)*Math.min(1,f.t/.25);t.x=Math.max(28,Math.min(W-28,f.x+f.dir*off));t.y=0;t.vy=0;t.dir=-f.dir;f.tof=Math.abs(t.x-f.x)}f.lzl=f.dir>0?W-f.x:f.x;
   f.gc=(f.gc||0)+dt;while(f.gc>=DRAG_TICK){f.gc-=DRAG_TICK;hurt(t,SOP_DMG*mulOf(f)*zp(f,ZA),f,1,1);(S.ex||(S.ex=[])).push({x:t.x+t.dir*45,t:0})}
   if(wall||f.t>=DRAG_RET){t.gr=0;t.s='hit';t.t=0;t.done=false;t.kv=f.dir*450;t.vy=320;t.y=.01;f.s='idle';f.t=0;f.dp=0;f.lzl=0;(S.ex||(S.ex=[])).push({x:t.x,t:0,k:9,c:11})}}}
 for(const f of S.f)if(f.gr>0&&S.f[1-f.i].s!=='drag')f.gr=0;
 for(const f of S.f)if(f.s==='beatdown'){const t=S.f[1-f.i];
  if(f.hp<=0||t.hp<=0||!(t.bd>0)){t.bd=0;f.s='idle';f.t=0;continue}
  t.bdr=Math.max(0,BD_T-f.t);{const tf=bdTf(f,t);for(let th=BD_REL+BD_GAP*f.bdn+tf;th<=BD_T&&f.t>=th;th=BD_REL+BD_GAP*f.bdn+tf){f.bdn++;hurt(t,BD_DMG,f,1,1)}}
  if(f.t>=BD_T){t.bd=0;t.s='hit';t.t=0;t.done=false;t.kv=f.dir*BD_KV;t.vy=380;t.y=.01;f.s='idle';f.t=0;t.fin=f.fin=FIN_T;t.fk=1;f.fk=2;(S.ex||(S.ex=[])).push({x:t.x,t:0,k:9,c:11})}}
 for(const f of S.f)if(f.s==='ibeat'){const t=S.f[1-f.i],tot=Math.floor(IB_T*IB_RATE);
  if(f.hp<=0||t.hp<=0||!(t.bd>0)){t.bd=0;f.s='idle';f.t=0;continue}
  t.bdr=Math.max(0,IB_T-f.t);t.bdm=IB_T;
  while(f.ibn<tot&&f.t>=(f.ibn+1)/IB_RATE){f.ibn++;hurt(t,IB_DMG,f,1,1);(S.ex||(S.ex=[])).push({x:t.x,t:0,k:14,sd:Math.random()*6})}
  if(f.t>=IB_T){t.bd=0;t.s='hit';t.t=0;t.done=false;t.kv=f.dir*BD_KV;t.vy=380;t.y=.01;f.s='idle';f.t=0;(S.ex||(S.ex=[])).push({x:t.x,t:0,k:9,c:11})}}
 for(const f of S.f)if((f.ch===GN||f.ch===KR||f.ch===DIU)&&f.s==='gbar'){const o=S.f[1-f.i],gp=f.ch===KR?KQ_GAP:GB_GAP,n=f.ch===KR?KQ_N:Math.round((f.ch===DIU?DB_T:GB_T)/gp);
  while(f.gn<n&&f.t>=(f.gn+.5)*gp){f.gn++;
   if(o.hp>0&&(o.x-f.x)*f.dir>0&&Math.abs(o.x-f.x)<=GB_R){const ox=o.x;hurt(o,f.ch===KR?KQ_DMG:f.ger?GER_DMG:f.ch===DIU?DB_DMG:GB_DMG,f,0,1);if(!frz(o))o.x=ox;(S.ex||(S.ex=[])).push({x:o.x,t:0,k:5})}}}
 for(const t of S.f)if(t.sl>0&&S.f[1-t.i].hp<=0)t.sl=0;
 for(const t of S.f)if(t.bd>0){const a=S.f[1-t.i];if(a.s!=='beatdown'&&a.s!=='ibeat')t.bd=0}
 for(const f of S.f)if(f.tw>0)f.hp=Math.max(0,f.hp-(f.twk?DT_DPS:TORN_DPS)*zr(f)*dt);
 for(const f of S.f){if(!(f.tw>0)){f.twd=0;continue}if(!f.twd)continue;const a=S.f[1-f.i];f.twb=(f.twb||0)+dt;
  while(f.twb>=TORN_T/DT_BITES&&(f.twn||0)<DT_BITES&&f.hp>0){f.twb-=TORN_T/DT_BITES;f.twn=(f.twn||0)+1;for(let k=0;k<DT_N;k++)hurt(f,DT_DMG,a,1,1);(S.ex||(S.ex=[])).push({x:f.x,t:0,k:5})}
  if(f.twn>=DT_BITES)f.twd=0}
 const d=e.x-p.x;if(Math.abs(d)<34&&!crossing(p)&&!crossing(e)){const s=Math.sign(d)||1,m=(34-Math.abs(d))/2;p.x-=s*m;e.x+=s*m}
 S.mn=(S.mn||[]).filter(m=>{const t=S.f[1-m.ow];if((m.t-=dt)<=0)return false;m.mv=0;if(m.bt>0)m.bt-=dt;if(m.cd>0)m.cd-=dt;if(t.hp<=0||S.f[m.ow].gr>0||S.f[m.ow].bd>0)return true;
  const dx=t.x-m.x;m.dir=dx>=0?1:-1;
  if(Math.abs(dx)>m.sd){m.x+=m.dir*MN_SPD*dt;m.mv=1}
  else if(m.cd<=0&&!(t.y>=AIR)){m.cd=MN_CD;m.bt=.3;hurt(t,MN_DMG,{x:m.x,dir:m.dir,en:0,tr:0},0,1);(S.ex||(S.ex=[])).push({x:t.x,t:0,k:5})}
  m.x=Math.max(28,Math.min(W-28,m.x));return true});
 S.gsc=(S.gsc||[]).filter(m=>{const t=S.f[1-m.ow];if((m.t-=dt)<=0)return false;m.mv=0;if(m.bt>0)m.bt-=dt;if(m.u<1)m.u=Math.min(1,m.u+dt*4);
  if(m.sd)return true;
  if(t.hp<=0||S.f[m.ow].gr>0||S.f[m.ow].bd>0)return true;
  const dx=t.x-m.x;m.dir=dx>=0?1:-1;
  if(Math.abs(dx)>GXS_REACH){m.x+=m.dir*GXS_SPD*dt;m.mv=1}
  else if(!(t.y>=AIR)&&!(t.s==='dodge'&&t.t<.25||t.s==='nika'||t.s==='fuse'||t.inv>0)){m.sd=1;m.bt=.25;m.t=Math.min(m.t,.4);(t.psn||(t.psn=[])).push(GXS_POIT);S.ex.push({x:t.x,t:0,k:5})}
  m.x=Math.max(28,Math.min(W-28,m.x));return true});
 {S.kn=(S.kn||[]).filter(k=>S.f[k.ow]&&S.f[k.ow].ch===DIU&&S.f[k.ow].hp>0);const kn=S.kn;
  for(const f of S.f){if(f.ch!==DIU||f.hp<=0){f.kx=null;continue}
   const own=kn.filter(k=>k.ow===f.i);
   if((f.kn||0)+own.length<KN_MAX){f.kt=(f.kt||0)+dt;if(f.kt>=KN_T){f.kt=0;let kx=W/2,best=-1;for(let r=0;r<12;r++){const c=70+Math.random()*(W-140),dd=Math.abs(c-f.x);if(dd>best){best=dd;kx=c;if(dd>=150)break}}kn.push({x:kx,ow:f.i,t:0})}}else f.kt=0;
   for(let r=kn.length-1;r>=0;r--){const k=kn[r];if(k.ow===f.i&&f.y<AIR&&Math.abs(k.x-f.x)<28&&(f.kn||0)<KN_MAX){f.kn=(f.kn||0)+1;kn.splice(r,1)}}
   const nx=kn.filter(k=>k.ow===f.i).sort((a,b)=>Math.abs(a.x-f.x)-Math.abs(b.x-f.x))[0];f.kx=nx?nx.x:null}
  for(const k of kn)k.t+=dt}
 for(const f of S.f)if(f.bld){f.bld.t-=dt;if(f.bld.t<=0)f.bld=null;else if(f.hp>0)f.hp=Math.max(0,f.hp-KN_BLD*f.bld.n*dt)}
 for(const f of S.f)if(f.psn&&f.psn.length){f.psn=f.psn.map(v=>v-dt).filter(v=>v>0);if(f.hp>0)f.hp=Math.max(0,f.hp-GXS_POIS*dt*f.psn.length)}
 S.ex=(S.ex||[]).filter(e=>(e.t+=dt)<(e.k===16?.8:e.k===8?1.2:e.k===11?.9:e.k===28||e.k===27?.9:e.k===12?.7:e.k===15||e.k===21||e.k===17||e.k===26?.7:e.k===22?.8:.4));
 if(!S.cl){const qa=S.pr.find(q=>!q.k&&q.ow===0),qb=S.pr.find(q=>!q.k&&q.ow===1);
  if(qa&&qb&&qa.dir!==qb.dir&&Math.abs(qb.x-qa.x)<CL_R&&clOk(S.f[0])&&clOk(S.f[1])&&['idle','power'].includes(S.f[0].s)&&['idle','power'].includes(S.f[1].s)){
   S.pr=S.pr.filter(q=>q!==qa&&q!==qb);clash(S,(qa.x+qb.x)/2,[qa.m||1,qb.m||1])}}
 S.pr=S.pr.filter(q=>{
  const t=S.f[1-q.ow],air=t.y>=AIR;
  if(S.f[q.ow].gr>0||S.f[q.ow].bd>0)return true;
  if(q.k===1){q.x+=q.dir*200*dt;
   if((Math.abs(q.x-t.x)<28&&!air)||q.x<20||q.x>W-20){S.ex.push({x:q.x,t:0});if(Math.abs(q.x-t.x)<50&&!air)hurt(t,SHU*(q.m||1),S.f[q.ow],1,1);return false}
   return true}
  if(q.k===2){q.x+=q.dir*280*dt;if(Math.abs(q.x-t.x)<34&&!air){S.ex.push({x:q.x,t:0});hurt(t,RASEN*(q.m||1),S.f[q.ow],1,1);return false}
   if(q.x<20||q.x>W-20){S.ex.push({x:q.x,t:0});return false}return true}
  if(q.k===25){
   q.t+=dt;q.x+=q.dir*(q.ph?GXS_BEAM_SPD:GXS_STONE_SPD)*dt;
   const hit=Math.abs(q.x-t.x)<30&&!air&&t.hp>0,wall=q.x<20||q.x>W-20;
   if(!q.ph&&!hit&&!wall&&q.t>=GXS_STONE_T){q.ph=1;q.x0=q.x;S.ex.push({x:q.x,t:0,k:25});return true}
   if(hit||wall){const ex=hit?t.x:Math.max(20,Math.min(W-20,q.x));
    if(hit)hurt(t,GXS_DMG,S.f[q.ow],1,1);
    if(!(t.hp<=0))gscSpawn(S,q.ow,ex);
    S.ex.push({x:ex,t:0,k:26});return false}
   return true}
  if(q.k===24){q.x+=q.dir*KQ_BTD_SPD*dt;
   if(Math.abs(q.x-t.x)<30&&!air){const f0=S.f[q.ow],hp0=t.hp;hurt(t,.01,f0,1,1);
    if(t.hp<hp0&&t.hp>0&&!(t.bm>0)){t.bm=KQ_FUSE;t.bmo=q.ow;t.s='idle';t.t=0;t.done=false;t.orb=0;t.g=false}
    S.ex.push({x:q.x,t:0,k:22});return false}
   return q.x>-30&&q.x<W+30}
  if(q.k===29){q.x+=q.dir*KN_SPD*dt;
   if(Math.abs(q.x-t.x)<30&&!air&&t.hp>0){const f0=S.f[q.ow],hp0=t.hp,blk=t.g&&(f0.x-t.x)*t.dir>0;hurt(t,KN_DMG*q.n,f0,1,1);
    if(t.hp<hp0&&!blk){const b0=t.bld;t.bld={t:KN_BLD_T,n:Math.min(KN_MAX,(b0?b0.n:0)+q.n)}}
    S.ex.push({x:q.x,t:0});return false}
   return q.x>-30&&q.x<W+30}
  if(q.k===23){q.x+=q.dir*KQ_CAR_SPD*dt;
   if(Math.abs(q.x-t.x)<28&&!air){const f0=S.f[q.ow],hp0=t.hp,blk=t.g&&(f0.x-t.x)*t.dir>0;hurt(t,KQ_CAR_DMG,f0,1,1);
    if(t.hp<hp0&&!blk&&!frz(t)&&t.hp>0){t.st=KQ_CAR_STUN;t.s='idle';t.t=0;t.g=false;t.orb=0;t.done=false}
    S.ex.push({x:q.x,t:0,k:22});return false}
   return q.x>-30&&q.x<W+30}
  if(q.k===13){q.x+=q.dir*BRB_SPD*dt;if(Math.abs(q.x-t.x)<30&&!air){S.ex.push({x:q.x,t:0});hurt(t,BEAM*(q.m||1),S.f[q.ow],1);return false}return q.x>-60&&q.x<W+60}
  if(q.k===9){const f0=S.f[q.ow],hx=f0.x+f0.dir*16,hy=G-86,dx=hx-q.x,dy=hy-q.y,L=Math.hypot(dx,dy)||1,st=BALL_SPD*dt;
   if(L<=Math.max(14,st)){if(gb(f0))f0.balls=Math.min(BALLS,(f0.balls||0)+1);return false}
   q.x+=dx/L*st;q.y+=dy/L*st;return(q.life-=dt)>0}
  if(q.k===8){const ty=G-84,dx=t.x-q.x,dy=ty-q.y,L=Math.hypot(dx,dy)||1,k=Math.min(1,5*dt);
   q.vx+=(dx/L*ACE_SPD-q.vx)*k;q.vy+=(dy/L*ACE_SPD-q.vy)*k;q.x+=q.vx*dt;q.y+=q.vy*dt;
   if(Math.hypot(t.x-q.x,ty-q.y)<26){S.ex.push({x:q.x,t:0,k:10});hurt(t,ACE_DMG,S.f[q.ow],1,1);lostB(S,q);return false}
   if((q.life-=dt)>0)return true;lostB(S,q);return false}
  if(q.k===16){
   if(q.l>0){q.l-=dt;if(q.l<=0){if(Math.abs(q.x-t.x)<50&&!air&&tornado(t,q.d))S.ex.push({x:t.x,t:0,k:11});lostB(S,q);return false}return true}
   q.vy+=TG*dt;q.x=Math.max(20,Math.min(W-20,q.x+q.vx*dt));q.y+=q.vy*dt;
   if(q.y>=G-30){q.y=G-30;q.vx=q.vy=0;q.l=.3;S.ex.push({x:q.x,t:0,k:10})}
   return true}
  if(q.k===17){q.x+=q.dir*PARAL_SPD*dt;
   if(Math.abs(q.x-t.x)<24&&!air){S.ex.push({x:q.x,t:0,k:10});if(petriPara(t,S.f[q.ow]))S.ex.push({x:t.x,t:0,k:4});lostB(S,q);return false}
   if(q.x>-30&&q.x<W+30)return true;lostB(S,q);return false}
  if(q.k===7){q.x+=q.dir*PARAL_SPD*dt;
   if(Math.abs(q.x-t.x)<24&&!air){S.ex.push({x:q.x,t:0,k:10});paralyze(t,S.f[q.ow]);lostB(S,q);return false}
   if(q.x>-30&&q.x<W+30)return true;lostB(S,q);return false}
  if(q.k===6){q.x+=q.dir*260*dt;
   if(Math.abs(q.x-t.x)<24&&!air){S.ex.push({x:q.x,t:0,k:9,c:10});hurt(t,evil(t)?RB_EVIL:RB_NORMAL,S.f[q.ow],1,1);return false}
   return q.x>-30&&q.x<W+30}
  if(q.k===5){const v=FP[FI(q.fz)];q.x+=q.dir*v.spd*dt;
   if(Math.abs(q.x-t.x)<v.w&&!air){S.ex.push({x:q.x,t:0,k:9,c:q.fz});hurt(t,20*(q.m||1),S.f[q.ow],1,1);
    if(v.pet){petrify(t,S.f[q.ow]);if(t.pt>0)t.pt=v.pet}if(v.dr)t.en=Math.max(0,t.en-v.dr);if(v.par){paralyze(t,S.f[q.ow]);if(t.pz>0)t.pz=v.par}return false}
   return q.x>-30&&q.x<W+30}
  if(q.k===4){q.x+=q.dir*GAZE_SPD*dt;
   if(Math.abs(q.x-t.x)<30&&!air){S.ex.push({x:q.x,t:0,k:4});petrify(t,S.f[q.ow]);return false}
   return q.x>-30&&q.x<W+30}
  if(q.k===3){const tx=t.x,ty=G-84,dx=tx-q.x,dy=ty-q.y,L=Math.hypot(dx,dy)||1,st=RAIO_SPD*dt;
   if(L<30){S.ex.push({x:q.x,t:0,k:3});hurt(t,RAIO_DMG,S.f[q.ow],1,1);return false}
   q.x+=dx/L*Math.min(st,L);q.y+=dy/L*Math.min(st,L);return(q.life-=dt)>0}
  q.x+=q.dir*230*dt;
  if(Math.abs(q.x-t.x)<28&&!air){hurt(t,BEAM*(q.m||1),S.f[q.ow],1);return false}
  return q.x>-30&&q.x<W+30});
 for(const f of S.f){if(f.rz>0)f.rz=Math.max(0,f.rz-dt);if(f.gtr){f.gtr=0;const o=S.f[f.gto];if(o&&!S.zr){S.zr={t:0,i:f.i,o:f.gto,s:f.gzs};o.y=0;o.vy=0;f.y=0;f.vy=0}}}
 potara(S,dt);
 if(btdCheck(S))return;
 for(const f of S.f)if(f.hp<=0&&hs(f,2)&&!f.nk1){f.nk1=1;f.dy=NWAIT;f.s='hit';f.t=0;f.g=false}
 if(!S.f.some(f=>f.dy>0)){if(S.bn)for(const i of[0,1])if(S.f[i].hp<=0&&S.bn[i].hp>0)swap(S,i);
  if(S.f[0].hp<=0||S.f[1].hp<=0){S.over=1;S.win=S.f[1].hp<=0?0:1}}}
const api={TS_T,TS_EYE,TS_COST,TS_STUN,AWK_HEAL,AWK_TH,DV_T,DV_AT,DV_END,DIU,STOP_COST,KN_MAX,KN_T,KN_DMG,KN_BLD,KN_BLD_T,PT_T,GXR_P2,GXR_P3,GXR_CT,GXR_COST,GXH_COST,GXS_COST,DC_RB,DC_T,GX_I,GX_T,KQ_BTD_COST,KC_T,CL_T,CL_MUL,CS_T,GN,KR,GS_T,GS_R,GS_N,GB_T,DB_T,RR_COST,RR_DMG,RR_P1,RR_P2,RR_P3,RR_P4,RR_T,GB_GAP,KQ_GAP,GB_R,DIO_F,DT_N,DT_BITES,BR,BD_T,FIN_T,BD_DMG,BD_GAP,BD_REL,bdTf,IB_T,IB_RATE,DRAG_BACK,DN_T,W,IP,STUN_T,FZ,PARAL_T,TORN_T,G,D,CH,mk,mkP,canF,SP3C,tick,ai,BAZR,RAIO_COST,sp2c,hasSp2,TAILR,FCH,FU_T,FU_COST,fuOf,chOf:cof,FI,PB,NEWF,pk,PS:['Zenkai','','Haki + Nika','Era Jurássica','Zenkai','Steel Ball','Ippu (<50% de vida)','Zenkai Lendário + LSSJ Berserk','Experiência de Ouru','Rainha do Assassinato']};
if(typeof module!=='undefined')module.exports=api;else R.Game=api;
})(this);
