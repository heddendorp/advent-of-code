"use strict";(self.webpackChunkAdventOfCode=self.webpackChunkAdventOfCode||[]).push([[412],{412:(m,c,s)=>{s.r(c),s.d(c,{Day1Module:()=>p});var l=s(6895),d=s(6071);const f=JSON.parse('{"i":"1721\\n979\\n366\\n299\\n675\\n1456"}');var t=s(8256);function u(a,n){if(1&a&&(t.TgZ(0,"span",10),t._uU(1),t.qZA()),2&a){const e=n.$implicit;t.xp6(1),t.Oqu(e)}}function h(a,n){if(1&a&&(t.ynx(0),t.TgZ(1,"div",9)(2,"span",10),t._uU(3),t.qZA()(),t.TgZ(4,"div",11),t.YNc(5,u,2,1,"span",12),t.qZA(),t.BQk()),2&a){const e=n.$implicit;t.xp6(3),t.hij(" ",e.operation," "),t.xp6(2),t.Q6J("ngForOf",e.data)}}class i{constructor(){this.steps1=[],this.steps2=[],this.exampleInput=f.i,this.steps1.push({data:[this.exampleInput],operation:"input = "}),this.steps1.push({data:this.exampleInput.split("\n").map(n=>parseInt(n,10)),operation:".split('\\n')"}),this.steps1.push({data:this.steps1[1].data.filter((n,e)=>this.steps1[1].data.filter((r,g)=>e!==g).find(r=>n+r===2020)),operation:".filter(v => input.find(i => i + v === 2020))"}),this.steps1.push({data:[this.steps1[2].data.reduce((n,e)=>n*e,1)],operation:".reduce((a, v) => a * v, 1)"})}static#t=this.\u0275fac=function(e){return new(e||i)};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-day1"]],decls:13,vars:1,consts:[[1,"text-6xl","font-black","font-mono","text-center","my-6","text-transparent","bg-clip-text","bg-gradient-to-tr","from-pink-400","to-pink-600"],[1,"rounded-2xl","p-4","space-y-2","bg-gradient-to-tr","from-blue-700","to-blue-900"],[1,"mb-8"],[1,"font-bold","text-5xl","text-blue-200","mb-4"],[1,"text-gray-100","font-bold","text-5xl"],[1,"flex","flex-row","font-mono","space-x-4","items-stretch"],[4,"ngFor","ngForOf"],[1,"rounded-2xl","p-4","bg-gradient-to-t","from-green-700","to-green-900","flex","flex-col","mt-8"],[1,"font-bold","text-5xl","text-green-300","mb-8"],[1,"flex","flex-col","space-y-2","justify-center"],[1,"bg-gray-300","bg-opacity-70","px-2","rounded","text-2xl","whitespace-pre-wrap"],[1,"flex","flex-col","space-y-2","justify-between"],["class","bg-gray-300 bg-opacity-70 px-2 rounded text-2xl whitespace-pre-wrap",4,"ngFor","ngForOf"]],template:function(e,r){1&e&&(t.TgZ(0,"h1",0),t._uU(1," --- Day 1: Report Repair ---\n"),t.qZA(),t.TgZ(2,"div",1)(3,"div",2)(4,"h2",3),t._uU(5,"Part 1"),t.qZA(),t.TgZ(6,"h3",4),t._uU(7,"Build 2020 with 2 entries"),t.qZA()(),t.TgZ(8,"div",5),t.YNc(9,h,6,2,"ng-container",6),t.qZA()(),t.TgZ(10,"div",7)(11,"h2",8),t._uU(12,"Part 2"),t.qZA()()),2&e&&(t.xp6(9),t.Q6J("ngForOf",r.steps1))},dependencies:[l.sg],styles:["[_nghost-%COMP%]{display:block;padding:1rem}"],changeDetection:0})}const x=[{path:"",component:i}];class o{static#t=this.\u0275fac=function(e){return new(e||o)};static#e=this.\u0275mod=t.oAB({type:o});static#n=this.\u0275inj=t.cJS({imports:[d.Bz.forChild(x),d.Bz]})}class p{static#t=this.\u0275fac=function(e){return new(e||p)};static#e=this.\u0275mod=t.oAB({type:p});static#n=this.\u0275inj=t.cJS({imports:[l.ez,o]})}}}]);