"use strict";(self.webpackChunkAdventOfCode=self.webpackChunkAdventOfCode||[]).push([[816],{8816:(E,y,h)=>{h.r(y),h.d(y,{Day11Module:()=>g});var Z=h(6895),A=h(5846);const b=JSON.parse('{"i":"5483143223\\n2745854711\\n5264556173\\n6141336146\\n6357385478\\n4167524645\\n2176841721\\n6882881134\\n4846848554\\n5283751526","x":"3265255276\\n1537412665\\n7335746422\\n6426325658\\n3854434364\\n8717377486\\n4522286326\\n6337772845\\n8824387665\\n6351586484"}');var d=h(1135),T=h(7825),S=h(2529),_=h(8505),t=h(8274);const C=["canvas"];function F(m,c){if(1&m){const s=t.EpF();t.TgZ(0,"div")(1,"h3",12),t._uU(2,"Run flash simulation"),t.qZA(),t.TgZ(3,"p"),t._uU(4,"All places are increased each tick and flash at 9"),t.qZA(),t.TgZ(5,"div",13)(6,"button",14),t.NdJ("click",function(){t.CHM(s);const l=t.oxw(2);return t.KtG(l.startSimulation())}),t._uU(7," Start Simulation "),t.qZA()()()}}function U(m,c){if(1&m){const s=t.EpF();t.TgZ(0,"div")(1,"div")(2,"h3",12),t._uU(3,"Load positions"),t.qZA(),t.TgZ(4,"p"),t._uU(5,"We set up our riddle"),t.qZA(),t.TgZ(6,"div",13)(7,"button",14),t.NdJ("click",function(){t.CHM(s);const l=t.oxw();return t.KtG(l.loadExample())}),t._uU(8," Load example "),t.qZA(),t.TgZ(9,"button",14),t.NdJ("click",function(){t.CHM(s);const l=t.oxw();return t.KtG(l.loadRiddle())}),t._uU(10," Load full input "),t.qZA()(),t.YNc(11,F,8,0,"div",4),t.qZA()()}if(2&m){const s=c.ngIf;t.xp6(11),t.Q6J("ngIf",s>=2)}}class ${constructor(){this.currentStep=new d.X(1),this.simProgress$=new d.X(0),this.simStep$=new d.X(0),this.flashes$=new d.X(0),this.fullFlash$=new d.X(0),this.ctx=null,this.grid=[]}ngOnInit(){this.canvas&&(this.ctx=this.canvas.nativeElement.getContext("2d"))}loadInput(c){this.simProgress$.next(0),this.simStep$.next(0),this.flashes$.next(0),this.fullFlash$.next(0),this.grid=[];const s=c.split("\n").map(u=>u.split("").map(Number));console.log(s);const n=this.ctx;n&&(n.clearRect(0,0,300,300),n.font="20px Arial",n.fillStyle="white",s.forEach((u,f)=>{u.forEach((a,x)=>{n.fillText(String(a),30*x,30*f)})})),this.currentStep.next(2),this.grid=s}loadExample(){this.loadInput(b.i)}loadRiddle(){this.loadInput(b.x)}startSimulation(){const c=this.ctx;if(!c)return;const s=new Map;for(let n=0;n<10;n++)for(let l=0;l<10;l++)s.set(`${l},${n}`,this.grid[n][l]);(0,T.F)(300).pipe((0,S.o)(()=>0===this.fullFlash$.value),(0,_.b)(n=>{this.simStep$.next(n+1)})).subscribe(n=>{const l=this.simProgress$.getValue();l<100&&this.simProgress$.next(l+1),c.clearRect(0,0,300,300),c.font="20px Arial";const f=[],a=new Set;s.forEach((v,r)=>{9===v&&(f.push(r),n<100&&this.flashes$.next(this.flashes$.value+1),a.add(r)),s.set(r,(v+1)%10)}),this.drawGrid(s);const x=v=>{const r=[];v.forEach(w=>{const[e,i]=w.split(",").map(Number);if(e>0){const o=(s.get(`${e-1},${i}`)+1)%10;0===o&&!a.has(`${e-1},${i}`)&&(r.push(`${e-1},${i}`),a.add(`${e-1},${i}`)),s.set(`${e-1},${i}`,o)}if(e<9){const o=(s.get(`${e+1},${i}`)+1)%10;0===o&&!a.has(`${e+1},${i}`)&&(r.push(`${e+1},${i}`),a.add(`${e+1},${i}`)),s.set(`${e+1},${i}`,o)}if(i>0){const o=(s.get(`${e},${i-1}`)+1)%10;0===o&&!a.has(`${e},${i-1}`)&&(r.push(`${e},${i-1}`),a.add(`${e},${i-1}`)),s.set(`${e},${i-1}`,o)}if(i<9){const o=(s.get(`${e},${i+1}`)+1)%10;0===o&&!a.has(`${e},${i+1}`)&&(r.push(`${e},${i+1}`),a.add(`${e},${i+1}`)),s.set(`${e},${i+1}`,o)}if(e>0&&i>0){const o=(s.get(`${e-1},${i-1}`)+1)%10;0===o&&!a.has(`${e-1},${i-1}`)&&(r.push(`${e-1},${i-1}`),a.add(`${e-1},${i-1}`)),s.set(`${e-1},${i-1}`,o)}if(e>0&&i<9){const o=(s.get(`${e-1},${i+1}`)+1)%10;0===o&&!a.has(`${e-1},${i+1}`)&&(r.push(`${e-1},${i+1}`),a.add(`${e-1},${i+1}`)),s.set(`${e-1},${i+1}`,o)}if(e<9&&i>0){const o=(s.get(`${e+1},${i-1}`)+1)%10;0===o&&!a.has(`${e+1},${i-1}`)&&(r.push(`${e+1},${i-1}`),a.add(`${e+1},${i-1}`)),s.set(`${e+1},${i-1}`,o)}if(e<9&&i<9){const o=(s.get(`${e+1},${i+1}`)+1)%10;0===o&&!a.has(`${e+1},${i+1}`)&&(r.push(`${e+1},${i+1}`),a.add(`${e+1},${i+1}`)),s.set(`${e+1},${i+1}`,o)}}),this.drawGrid(s),r.length>0?(n<100&&this.flashes$.next(this.flashes$.value+r.length),requestAnimationFrame(()=>{x(r)})):(100===a.size&&0===this.fullFlash$.value&&this.fullFlash$.next(n+1),a.forEach(w=>{s.set(w,0)}))};requestAnimationFrame(()=>{x(f)})})}drawGrid(c){const s=this.ctx;s&&(s.clearRect(0,0,300,300),s.font="20px Arial",c.forEach((l,u)=>{const[f,a]=u.split(",").map(Number);s.fillStyle=0===l?"white":"gray",s.fillText(String(l),30*f,30*a)}))}static#t=this.\u0275fac=function(s){return new(s||$)};static#s=this.\u0275cmp=t.Xpm({type:$,selectors:[["app-day11"]],viewQuery:function(s,n){if(1&s&&t.Gf(C,7),2&s){let l;t.iGM(l=t.CRH())&&(n.canvas=l.first)}},decls:27,vars:16,consts:[[1,"p-4","dark:text-white","min-h-full"],[1,"text-2xl","font-mono","font-black","mb-4"],[1,"max-w-xl"],[1,"flex","lg:row","lg:max-w-6xl","lg:h-full"],[4,"ngIf"],[1,"p-4"],[1,"font-bold","mb-4"],["width","300px","height","300px",1,"rounded-lg","bg-gray-300","dark:bg-gray-800","dark:border-gray-300","p-2","border","border-gray-800"],["canvas",""],[1,"relative","pt-1"],[1,"overflow-hidden","h-2","text-xs","flex","rounded","bg-purple-200","w-full"],[1,"transition-all","shadow-none","flex","flex-col","text-center","whitespace-nowrap","text-white","justify-center","bg-purple-500"],[1,"font-bold","mt-6","mb-2"],[1,"flex","lg:row","space-x-4"],["type","button",1,"button",3,"click"]],template:function(s,n){1&s&&(t.TgZ(0,"main",0)(1,"h1",1),t._uU(2," --- Day 11: Dumbo Octopus --- "),t.qZA(),t.TgZ(3,"p",2),t._uU(4," Our task today is to simulate a field of flashing fish. "),t.qZA(),t.TgZ(5,"div",3),t.YNc(6,U,12,1,"div",4),t.ALo(7,"async"),t.TgZ(8,"div",5)(9,"h3",6),t._uU(10,"Visualisation of our steps"),t.qZA(),t.TgZ(11,"div"),t._UZ(12,"canvas",7,8),t.TgZ(14,"div",9)(15,"div",10),t._UZ(16,"div",11),t.ALo(17,"async"),t.qZA()()(),t.TgZ(18,"p"),t._uU(19),t.ALo(20,"async"),t.qZA(),t.TgZ(21,"p"),t._uU(22),t.ALo(23,"async"),t.qZA(),t.TgZ(24,"p"),t._uU(25),t.ALo(26,"async"),t.qZA()()()()),2&s&&(t.xp6(6),t.Q6J("ngIf",t.lcZ(7,6,n.currentStep)),t.xp6(10),t.Udp("width",t.lcZ(17,8,n.simProgress$)+"%"),t.xp6(3),t.hij("Simulating step ",t.lcZ(20,10,n.simStep$),""),t.xp6(3),t.hij("Registered ",t.lcZ(23,12,n.flashes$)," flashes before step 100"),t.xp6(3),t.hij("Full flash at ",t.lcZ(26,14,n.fullFlash$),""))},dependencies:[Z.O5,Z.Ov],changeDetection:0})}const D=[{path:"",component:$}];class p{static#t=this.\u0275fac=function(s){return new(s||p)};static#s=this.\u0275mod=t.oAB({type:p});static#e=this.\u0275inj=t.cJS({imports:[A.Bz.forChild(D),A.Bz]})}class g{static#t=this.\u0275fac=function(s){return new(s||g)};static#s=this.\u0275mod=t.oAB({type:g});static#e=this.\u0275inj=t.cJS({imports:[Z.ez,p]})}}}]);