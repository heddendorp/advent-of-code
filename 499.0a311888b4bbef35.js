"use strict";(self.webpackChunkAdventOfCode=self.webpackChunkAdventOfCode||[]).push([[499],{7499:(j,d,e)=>{e.r(d),e.d(d,{Day2Component:()=>r});var s=e(6895),v=e(1135),i=e(4004),_=e(7579),h=e(6063);class f extends _.x{constructor(B=1/0,Y=1/0,X=h.l){super(),this._bufferSize=B,this._windowTime=Y,this._timestampProvider=X,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=Y===1/0,this._bufferSize=Math.max(1,B),this._windowTime=Math.max(1,Y)}next(B){const{isStopped:Y,_buffer:X,_infiniteTimeWindow:C,_timestampProvider:A,_windowTime:o}=this;Y||(X.push(B),!C&&X.push(A.now()+o)),this._trimBuffer(),super.next(B)}_subscribe(B){this._throwIfClosed(),this._trimBuffer();const Y=this._innerSubscribe(B),{_infiniteTimeWindow:X,_buffer:C}=this,A=C.slice();for(let o=0;o<A.length&&!B.closed;o+=X?1:2)B.next(A[o]);return this._checkFinalizedStatuses(B),Y}_trimBuffer(){const{_bufferSize:B,_timestampProvider:Y,_buffer:X,_infiniteTimeWindow:C}=this,A=(C?1:2)*B;if(B<1/0&&A<X.length&&X.splice(0,X.length-A),!C){const o=Y.now();let a=0;for(let c=1;c<X.length&&X[c]<=o;c+=2)a=c;a&&X.splice(0,a+1)}}}var y=e(3099);const p=JSON.parse('{"i":"A Y\\nB X\\nC Z","x":"B Z\\nA X\\nB Z\\nB Z\\nC Z\\nB Z\\nA Z\\nB X\\nC Y\\nC Y\\nA X\\nA X\\nA Z\\nB Z\\nA X\\nA Z\\nB X\\nC Y\\nA Y\\nA Y\\nC Y\\nB Y\\nC X\\nC Y\\nB Z\\nA X\\nA Y\\nB Y\\nA X\\nA Z\\nB X\\nB Y\\nB Z\\nB Z\\nB Z\\nC Y\\nB X\\nA X\\nC Y\\nB Z\\nB Z\\nC X\\nA Z\\nB Z\\nB Z\\nC X\\nC X\\nB X\\nB X\\nA X\\nB X\\nC Z\\nC Y\\nC Y\\nC Y\\nC X\\nB Z\\nB Y\\nC X\\nA X\\nC X\\nC Y\\nC Y\\nC Y\\nB X\\nB Y\\nA Z\\nB Z\\nA X\\nB Z\\nC Y\\nB Y\\nB Z\\nB X\\nC Y\\nB Y\\nA Y\\nA X\\nB Z\\nB Z\\nB Z\\nB Z\\nC X\\nA X\\nB Y\\nC Y\\nC Y\\nB Z\\nB Z\\nA Z\\nB Y\\nA X\\nA Z\\nB Z\\nA X\\nB X\\nB X\\nB X\\nB X\\nA X\\nA Z\\nB X\\nB Z\\nB X\\nB Z\\nB X\\nC Y\\nC Y\\nC X\\nB X\\nA Z\\nC Y\\nB Z\\nC Z\\nB X\\nB Z\\nB Z\\nC Z\\nC Y\\nB X\\nB X\\nC Y\\nA Y\\nA X\\nC Z\\nB X\\nB X\\nC X\\nC X\\nC Y\\nC X\\nC Y\\nC Y\\nC Y\\nB Z\\nB Z\\nA X\\nC Y\\nC Y\\nA Y\\nC Y\\nA Z\\nB Z\\nA Y\\nC Y\\nC Y\\nA X\\nB X\\nB Z\\nC Y\\nC Y\\nB Z\\nB X\\nC Y\\nB Y\\nA Z\\nA Z\\nC Y\\nB X\\nC Y\\nB Z\\nC Y\\nB Z\\nB Z\\nB X\\nC Y\\nC X\\nB Z\\nC Z\\nA Y\\nC Y\\nC Y\\nA Y\\nC X\\nA Y\\nB Z\\nB Y\\nC X\\nA Y\\nC Y\\nC X\\nC Y\\nC Y\\nB Z\\nA Y\\nB Z\\nA Y\\nB Z\\nB Z\\nB Z\\nC Y\\nA Y\\nA X\\nB Z\\nC Y\\nC Y\\nC Y\\nB X\\nB Z\\nC Y\\nC Y\\nC Y\\nB X\\nC X\\nB X\\nA X\\nB Z\\nB X\\nC Z\\nA X\\nA X\\nA X\\nC Y\\nC Y\\nB Z\\nA Z\\nC X\\nB X\\nC Y\\nA Y\\nA Z\\nA Z\\nA X\\nA X\\nC Y\\nB Z\\nA Z\\nB Z\\nB X\\nC Z\\nB X\\nB X\\nB Y\\nA Z\\nB Z\\nC Y\\nB X\\nC X\\nC X\\nA X\\nB Z\\nB X\\nA Y\\nB Z\\nA X\\nB X\\nB Z\\nA X\\nB Z\\nC Y\\nB Y\\nC Y\\nA Z\\nB X\\nB X\\nB X\\nB Z\\nB Z\\nB Z\\nA X\\nB X\\nB Z\\nB Z\\nA X\\nB X\\nC Z\\nB X\\nA Z\\nA Z\\nC Z\\nA Y\\nC Y\\nB X\\nB Z\\nA X\\nB Z\\nB X\\nC Y\\nC Y\\nB X\\nC Y\\nC X\\nC Y\\nB Z\\nA Z\\nC Y\\nA Z\\nB X\\nB Z\\nB Z\\nA X\\nA Y\\nA X\\nB Z\\nB Z\\nB Y\\nA Z\\nC Y\\nB Z\\nB X\\nB Z\\nA Y\\nC X\\nB Z\\nC Y\\nA Y\\nA X\\nA Z\\nC Y\\nC Z\\nA Y\\nB X\\nA X\\nB X\\nC Y\\nC Z\\nB Y\\nB Z\\nB Z\\nC Y\\nB Z\\nC Z\\nB Y\\nA Z\\nA Z\\nB Z\\nB X\\nB X\\nA Z\\nC Y\\nB X\\nB Z\\nA Y\\nC Y\\nB Z\\nC Y\\nB X\\nC Y\\nC Y\\nC Y\\nA Y\\nC Y\\nC X\\nA X\\nC Y\\nC Y\\nA X\\nC Y\\nC Z\\nB X\\nB X\\nC Y\\nA X\\nA Y\\nC Y\\nA X\\nC X\\nA Y\\nA Z\\nA X\\nB Z\\nB Z\\nC X\\nC Y\\nB X\\nA X\\nA Z\\nB X\\nB Z\\nA X\\nB Z\\nB Z\\nB Z\\nB X\\nB Z\\nB Z\\nA Y\\nC X\\nA X\\nB X\\nB Z\\nC Y\\nC Y\\nC Y\\nC Y\\nB Z\\nC Y\\nB Y\\nC Y\\nA Z\\nC Y\\nB Z\\nB X\\nB Z\\nB Z\\nB X\\nC Y\\nA Z\\nB X\\nB Z\\nB Z\\nB X\\nC Y\\nB X\\nC X\\nC X\\nA X\\nC Y\\nA X\\nB Y\\nC Y\\nB Z\\nB X\\nC Y\\nB Y\\nB X\\nB X\\nB Y\\nB X\\nA Z\\nB X\\nB X\\nB X\\nB Z\\nB Y\\nA X\\nB X\\nC Y\\nC Y\\nB Y\\nB X\\nA Y\\nC Z\\nB X\\nC Y\\nB X\\nC Y\\nA Z\\nB Y\\nA Z\\nB Z\\nA Y\\nA X\\nC Y\\nB X\\nB X\\nA X\\nB Y\\nA Z\\nB X\\nB Z\\nA X\\nC Z\\nB Y\\nA X\\nA X\\nA X\\nA X\\nB Y\\nC Z\\nC Y\\nB Y\\nC Y\\nB X\\nB Z\\nA X\\nC Y\\nA Y\\nA X\\nC Y\\nC Y\\nB X\\nB Y\\nA X\\nC Y\\nA Y\\nA Z\\nA X\\nA Y\\nC Y\\nA X\\nC Z\\nC Y\\nB Z\\nB Y\\nC Y\\nC Z\\nA X\\nA X\\nC X\\nB X\\nC X\\nB X\\nA Z\\nB Z\\nC Y\\nC Y\\nA Z\\nC Y\\nA X\\nC X\\nB Z\\nC X\\nC Z\\nB X\\nB X\\nC Y\\nB X\\nA Y\\nB X\\nB Z\\nC X\\nC Y\\nB X\\nB X\\nB Z\\nB X\\nC Y\\nB Z\\nC Y\\nC Y\\nA Z\\nC Y\\nC Y\\nC Y\\nB X\\nB X\\nA X\\nC Y\\nB X\\nB X\\nC Y\\nB Z\\nA X\\nB X\\nC Y\\nB Z\\nB Y\\nB Z\\nA X\\nB Y\\nB Z\\nC X\\nC Y\\nB Z\\nB Z\\nB Z\\nB Z\\nB Z\\nC X\\nB Z\\nC Y\\nC X\\nB Y\\nB X\\nB X\\nC Y\\nB X\\nB X\\nC Y\\nC Y\\nA X\\nC Y\\nC Z\\nA Z\\nC Y\\nC Y\\nC Z\\nA X\\nC Y\\nA Y\\nB X\\nC X\\nC Y\\nC Z\\nC Y\\nC Y\\nB X\\nA X\\nB Z\\nA Y\\nB Z\\nB Z\\nB X\\nB Z\\nA Z\\nB Y\\nB Y\\nC Y\\nA Y\\nC Y\\nB X\\nA X\\nC Z\\nB Z\\nB X\\nA Z\\nC Y\\nC Y\\nC X\\nA Z\\nC Y\\nC Y\\nA Y\\nB Y\\nB Y\\nB Z\\nB Z\\nB X\\nB X\\nB Z\\nB X\\nB X\\nB Z\\nA Y\\nA Y\\nC Y\\nC Y\\nB X\\nA Y\\nA X\\nC Y\\nA Z\\nC X\\nB Y\\nB Y\\nB Y\\nA Z\\nC Y\\nB Z\\nB Z\\nA Y\\nB Z\\nB Z\\nC Z\\nC X\\nC X\\nB X\\nC Y\\nB X\\nB X\\nC Y\\nA X\\nA Z\\nC X\\nB X\\nA X\\nB Z\\nA X\\nB X\\nA Y\\nB X\\nB Z\\nB X\\nB X\\nC Z\\nA Z\\nB Z\\nC Z\\nB X\\nB X\\nA X\\nB Z\\nB Z\\nB Z\\nB Z\\nB Z\\nB Z\\nB X\\nC Y\\nB Z\\nB X\\nB X\\nC Y\\nC Y\\nB Z\\nB Z\\nB X\\nA Y\\nA X\\nA Z\\nC Z\\nA X\\nB Z\\nB X\\nB Z\\nB X\\nC Y\\nA X\\nA Y\\nC Y\\nC Y\\nB X\\nB X\\nB X\\nB Z\\nB X\\nB Z\\nA Y\\nA X\\nC Y\\nA Z\\nC Y\\nA X\\nC Y\\nB Z\\nA Y\\nC Y\\nC Y\\nC Y\\nB Z\\nB Z\\nA Z\\nA X\\nB X\\nC Y\\nA X\\nB Y\\nC Y\\nB X\\nB Z\\nB Z\\nA Z\\nB Z\\nC Y\\nB Z\\nA X\\nC X\\nB Z\\nB X\\nA X\\nC Y\\nC Y\\nA Z\\nC Y\\nC Z\\nA Z\\nA Z\\nB X\\nB X\\nB Z\\nC Y\\nB Z\\nB Z\\nC Y\\nB X\\nB Y\\nB Z\\nC Y\\nA X\\nC Y\\nA Y\\nC Y\\nC Y\\nC Y\\nB X\\nB X\\nB Z\\nB Y\\nC Y\\nB Y\\nA Z\\nA Z\\nB X\\nA Z\\nC X\\nC Y\\nB Z\\nB X\\nB Z\\nB X\\nB Z\\nB Z\\nB X\\nB Z\\nB Z\\nC X\\nC Y\\nA Z\\nC Y\\nB Y\\nA X\\nB Z\\nB Y\\nA Z\\nA X\\nB X\\nC Y\\nB Z\\nC Y\\nB X\\nC Y\\nB Z\\nB Y\\nB X\\nA Z\\nB Y\\nC Y\\nB X\\nC Y\\nA X\\nB Y\\nB X\\nC Y\\nC X\\nB X\\nB X\\nC Y\\nC Y\\nB Z\\nA X\\nB X\\nB Z\\nA X\\nB X\\nA X\\nB X\\nB X\\nB Y\\nC Y\\nA X\\nC X\\nC Y\\nC X\\nB Y\\nA Z\\nA X\\nC Y\\nB X\\nB X\\nB Z\\nC Y\\nB Z\\nB X\\nB Z\\nB Y\\nB Y\\nB Z\\nB X\\nC Y\\nB Y\\nA X\\nC Y\\nB Z\\nB Z\\nC Y\\nA Z\\nC Y\\nB Y\\nC Y\\nB Y\\nB X\\nB Z\\nB X\\nC Y\\nB X\\nC Y\\nB Z\\nC Y\\nB Z\\nB X\\nB X\\nB Z\\nA X\\nC Y\\nA X\\nB X\\nC Y\\nB X\\nC Z\\nC Y\\nB Z\\nA Y\\nA Y\\nC Y\\nB Z\\nA Z\\nB Z\\nC Y\\nA Z\\nB X\\nA X\\nB X\\nC Y\\nB Z\\nA X\\nB X\\nA Y\\nB X\\nB Z\\nA Z\\nC Y\\nA Z\\nC X\\nA Z\\nB X\\nC Y\\nB Z\\nB Z\\nA X\\nB Y\\nC Z\\nB Z\\nA Z\\nC Y\\nB X\\nC Y\\nB X\\nC Y\\nB Y\\nB Z\\nC Y\\nB Z\\nC Y\\nC Y\\nB Y\\nB Y\\nC Y\\nC Y\\nA Y\\nB Y\\nB X\\nC Y\\nC Y\\nC X\\nC Y\\nC Y\\nB Z\\nB X\\nB X\\nC Y\\nC Y\\nA X\\nC Y\\nC Y\\nB X\\nA Y\\nB X\\nA X\\nB Y\\nB X\\nB Z\\nB X\\nC Y\\nB Z\\nA Z\\nB Z\\nC X\\nB Z\\nB Y\\nB Z\\nB Z\\nC Y\\nB X\\nB X\\nC Y\\nB Z\\nB Z\\nB Z\\nB Z\\nA X\\nC Y\\nA Z\\nA X\\nC X\\nB Z\\nB Y\\nA Y\\nB X\\nC Y\\nB X\\nC Y\\nC Z\\nA Z\\nC Y\\nC Y\\nC Y\\nB Z\\nB Y\\nA X\\nC Y\\nB X\\nB X\\nB Z\\nB X\\nC Y\\nC Y\\nA X\\nB Z\\nB Z\\nC Y\\nB Y\\nB Y\\nB Z\\nA X\\nB Z\\nA X\\nB Y\\nC X\\nA Z\\nB Z\\nB Z\\nB X\\nC Y\\nB Y\\nB Y\\nB X\\nC Y\\nB X\\nB Z\\nC Y\\nB Z\\nA X\\nA Z\\nB Y\\nC Y\\nB X\\nB Z\\nC Y\\nB X\\nB X\\nB Z\\nB Y\\nC X\\nB X\\nA X\\nB X\\nB Z\\nB Z\\nB Z\\nA Z\\nA Z\\nB X\\nC X\\nB X\\nB Y\\nC Z\\nC Y\\nB Y\\nA X\\nA Z\\nB Z\\nB X\\nB Z\\nB Z\\nA Y\\nA Z\\nC Y\\nC Y\\nC Y\\nA Y\\nB Z\\nC X\\nC Y\\nC Y\\nA Z\\nB Z\\nC Y\\nB Z\\nC Y\\nA X\\nC Y\\nC Y\\nB X\\nA X\\nB X\\nA X\\nA Z\\nA X\\nB Y\\nB X\\nA X\\nB Z\\nB Z\\nB X\\nA Z\\nB X\\nA X\\nB Z\\nB Z\\nB Z\\nA X\\nB X\\nC Y\\nC Y\\nB Z\\nA X\\nA X\\nB Z\\nC X\\nB Z\\nC Y\\nC Y\\nC Y\\nA Y\\nB X\\nC Z\\nC Y\\nB X\\nA Y\\nA Z\\nC X\\nB Y\\nB Z\\nC Y\\nB X\\nA Z\\nC Z\\nC Y\\nC Y\\nB Z\\nB X\\nB Z\\nA Z\\nC Y\\nB X\\nA X\\nC Y\\nC Y\\nB X\\nB Y\\nB X\\nB X\\nC Y\\nB Y\\nC Y\\nB Z\\nB X\\nA Y\\nA X\\nB Z\\nA Z\\nB Z\\nB Z\\nA Y\\nC Y\\nA X\\nB X\\nB X\\nA X\\nC Y\\nB Z\\nB Y\\nB Z\\nB Z\\nB X\\nC Y\\nC Y\\nC Z\\nB Y\\nB Y\\nB Z\\nB X\\nB Z\\nC Y\\nB X\\nA Z\\nC Y\\nB Z\\nB X\\nC Y\\nC Y\\nC Y\\nB Z\\nC Y\\nB Z\\nC Y\\nB Z\\nB Z\\nB Z\\nC Y\\nC Y\\nB Z\\nC Z\\nA Y\\nA Z\\nA Z\\nC Y\\nC Y\\nA Z\\nB X\\nB X\\nA X\\nB Z\\nB Z\\nA X\\nA Z\\nC Y\\nB X\\nA Z\\nB X\\nC Y\\nA Z\\nC Y\\nB Z\\nB X\\nB X\\nB Z\\nB X\\nC Y\\nC Z\\nC Z\\nB X\\nA X\\nA Y\\nB Y\\nB X\\nB X\\nA Y\\nA X\\nB X\\nC Y\\nC Y\\nB Z\\nB Z\\nA X\\nC Y\\nB Z\\nB X\\nB Z\\nC Y\\nB X\\nC Y\\nB Z\\nB Y\\nB Z\\nB X\\nB X\\nC Y\\nB Z\\nB Z\\nB Z\\nA X\\nB Z\\nB Z\\nB Z\\nA Y\\nA X\\nC Y\\nB Z\\nB X\\nA X\\nB Z\\nC Y\\nB X\\nB Z\\nC Z\\nC Y\\nC Y\\nB Y\\nB Y\\nC Y\\nA Y\\nB Y\\nA Y\\nC Y\\nA Z\\nB X\\nB Y\\nC Y\\nA X\\nB Z\\nC Y\\nA X\\nB X\\nC Y\\nB X\\nA Y\\nC Z\\nC X\\nC Z\\nB Z\\nC X\\nA Z\\nC X\\nB Z\\nB Z\\nB Z\\nA X\\nC Y\\nB X\\nA Y\\nC Y\\nB Z\\nA Y\\nA Z\\nB X\\nA Z\\nC Y\\nC Y\\nC Y\\nB Z\\nB Y\\nA X\\nC Y\\nC X\\nA Y\\nB Z\\nA X\\nA Z\\nC Y\\nA Z\\nB Z\\nB Z\\nC X\\nB X\\nC Y\\nA X\\nC Y\\nA Z\\nB Z\\nB Z\\nB X\\nC Y\\nC Y\\nC X\\nC Z\\nC Y\\nC X\\nC X\\nC Y\\nB X\\nC X\\nC Z\\nC Y\\nB Y\\nC X\\nA X\\nC Y\\nA X\\nC Z\\nC X\\nC Y\\nB X\\nA Z\\nB Z\\nB X\\nB Z\\nB X\\nC Y\\nB Y\\nB Z\\nB X\\nB Z\\nC Y\\nC Z\\nB X\\nB Y\\nC Y\\nC Y\\nC Y\\nC X\\nA Y\\nB X\\nC X\\nB X\\nB Y\\nB Z\\nC X\\nB Z\\nB Z\\nA X\\nA X\\nB Z\\nB Z\\nA Y\\nA Z\\nB Y\\nA X\\nB X\\nB X\\nC Y\\nA X\\nA Y\\nB X\\nB Z\\nC Z\\nB Z\\nB X\\nC Y\\nC Y\\nB Z\\nA Z\\nB X\\nA Y\\nA Y\\nC Y\\nB Z\\nB X\\nA X\\nB Y\\nA Y\\nB Z\\nB Z\\nB Z\\nB Y\\nC Z\\nA X\\nC X\\nB Y\\nA Y\\nB Z\\nC Y\\nA X\\nB Z\\nC Y\\nA X\\nB X\\nB Z\\nB X\\nB Z\\nB Z\\nC Y\\nA Z\\nB X\\nC Y\\nB Z\\nA Y\\nB X\\nC X\\nB X\\nB X\\nB Z\\nB X\\nB Z\\nB X\\nB Z\\nB Z\\nC Y\\nB Z\\nC Y\\nB X\\nB Z\\nB X\\nB Z\\nC Y\\nB X\\nC Y\\nA Z\\nA Z\\nB Z\\nB X\\nB Z\\nB X\\nC Y\\nA Y\\nA X\\nB Z\\nB X\\nB X\\nA Z\\nA X\\nC Z\\nA X\\nA X\\nC Z\\nC Y\\nB X\\nB X\\nB Z\\nA Z\\nB X\\nC Y\\nB X\\nB Z\\nC X\\nC Y\\nC Y\\nA Z\\nB X\\nB X\\nC Z\\nC Y\\nB X\\nA X\\nC X\\nB Z\\nB Z\\nB X\\nC Y\\nB Z\\nA X\\nB X\\nB Z\\nA Z\\nB X\\nA Y\\nB Z\\nB X\\nC Y\\nB Y\\nC Y\\nA Z\\nA X\\nC Y\\nA Z\\nA X\\nC Y\\nC Y\\nC Y\\nC Y\\nC Y\\nB X\\nC X\\nB Y\\nA Z\\nB Z\\nC Y\\nA X\\nB Z\\nC X\\nC Y\\nB X\\nA Y\\nB X\\nB Z\\nC Y\\nB X\\nA Y\\nB Z\\nC Y\\nB Z\\nA X\\nB X\\nC Y\\nA Y\\nB Z\\nB X\\nA Z\\nC Y\\nB Y\\nA Y\\nA Z\\nB Y\\nC Y\\nB Z\\nB Z\\nB Z\\nC X\\nC X\\nB Y\\nB Z\\nA X\\nC Y\\nC Y\\nA Y\\nA X\\nA X\\nC Y\\nA Y\\nB Z\\nB Z\\nB Z\\nB X\\nA X\\nB X\\nC Y\\nA Z\\nB X\\nA Y\\nA X\\nA X\\nB Z\\nB Z\\nC Y\\nB X\\nB Z\\nC Y\\nB Z\\nA Z\\nC Y\\nB X\\nB Z\\nC X\\nC Y\\nC Y\\nC Z\\nB Z\\nB X\\nA X\\nB Z\\nC Z\\nC Y\\nC Y\\nC Y\\nB Z\\nA Y\\nC Y\\nB X\\nC Y\\nC Y\\nB X\\nB X\\nC Y\\nC Y\\nB Z\\nB X\\nA Z\\nC Z\\nB Z\\nA X\\nB Y\\nB Z\\nA X\\nC Y\\nC Y\\nB Z\\nA Y\\nC Y\\nB Y\\nB Z\\nC Y\\nA X\\nC Y\\nC X\\nC Y\\nC Y\\nA Y\\nB Z\\nC Y\\nC Y\\nB X\\nC Y\\nB Z\\nB Z\\nC Z\\nB Z\\nC Y\\nB Z\\nB Z\\nC Y\\nA X\\nC Y\\nA Z\\nB X\\nC X\\nB X\\nC X\\nA Z\\nC Y\\nA X\\nA X\\nB Z\\nC Y\\nB Z\\nB X\\nA Y\\nB Z\\nC X\\nB Z\\nA Y\\nC Y\\nB X\\nA Z\\nB Z\\nB Z\\nB Z\\nB Z\\nB Z\\nC Y\\nC Y\\nC Y\\nB X\\nA Y\\nA Z\\nB Z\\nC Y\\nB Y\\nC X\\nB X\\nB Z\\nB X\\nC Y\\nA X\\nC Z\\nC Y\\nA X\\nB X\\nC Y\\nB X\\nA X\\nC Z\\nC Y\\nC Y\\nC Z\\nC Y\\nC Y\\nB X\\nC Y\\nA Y\\nB X\\nB Z\\nB Z\\nC Y\\nA X\\nB Z\\nB Z\\nC Y\\nB X\\nB Z\\nB Z\\nC Y\\nC X\\nB Z\\nB Z\\nA Z\\nB X\\nB Z\\nB Z\\nB X\\nB X\\nB X\\nA X\\nA Z\\nB Z\\nB Z\\nB X\\nB X\\nC Y\\nC Y\\nB X\\nA Y\\nC Y\\nB Z\\nC Z\\nB Y\\nB Z\\nC X\\nA X\\nB X\\nC Y\\nC Y\\nA Y\\nC X\\nB Z\\nB Z\\nB Z\\nB Z\\nA Z\\nA Y\\nA X\\nA Y\\nB Y\\nA Y\\nB Z\\nC Y\\nC X\\nC X\\nB Z\\nC Y\\nA X\\nB Y\\nB X\\nB X\\nB X\\nA Y\\nB Z\\nB X\\nB Z\\nB Z\\nB Z\\nA Z\\nC Y\\nC Y\\nC Y\\nB Z\\nC X\\nB Z\\nA X\\nA Y\\nB Z\\nC Z\\nB Z\\nA X\\nB Z\\nA X\\nB Z\\nA Z\\nA X\\nB Z\\nB Z\\nB Z\\nB X\\nA Z\\nB X\\nC Y\\nB Y\\nB X\\nA X\\nB Z\\nA Z\\nB Z\\nB Z\\nB Y\\nC X\\nB X\\nB Z\\nA X\\nB X\\nB Z\\nB X\\nC Y\\nC Z\\nA Y\\nB Y\\nA X\\nB Z\\nB Y\\nA Z\\nC X\\nC Y\\nB Z\\nA X\\nC Y\\nA Y\\nC Y\\nC X\\nA Y\\nB X\\nB X\\nB Z\\nC Y\\nB Y\\nA X\\nB Z\\nB X\\nA X\\nA X\\nB X\\nA X\\nB Z\\nB X\\nB Y\\nC Y\\nB Z\\nC Y\\nC X\\nB Z\\nB Z\\nB Z\\nC Y\\nA X\\nB Z\\nA Y\\nA X\\nC Y\\nB Z\\nC Y\\nC X\\nC Y\\nC Y\\nA X\\nB Z\\nA X\\nA X\\nB X\\nB Y\\nC Y\\nC Y\\nA X\\nB Z\\nC Y\\nC X\\nB Z\\nB Z\\nB Z\\nB X\\nA Y\\nB X\\nC Y\\nA X\\nC Y\\nB Z\\nC Y\\nC Y\\nA X\\nB Y\\nB Z\\nB Y\\nA Y\\nB Z\\nB Y\\nB Z\\nA Y\\nC Y\\nA Y\\nA X\\nA Z\\nA X\\nB X\\nC Y\\nC Y\\nB X\\nA Z\\nB X\\nB Z\\nB X\\nB X\\nB Z\\nC Y\\nB Z\\nB Z\\nB X\\nA Z\\nA Y\\nC Y\\nB Y\\nC Y\\nC Y\\nB Z\\nC Y\\nC Y\\nB Y\\nB Z\\nB X\\nC Y\\nB Z\\nB Z\\nA Y\\nA Y\\nB X\\nB X\\nC Y\\nB Z\\nB Z\\nB X\\nB X\\nC Y\\nA Z\\nB X\\nB X\\nA Z\\nB X\\nB Z\\nB X\\nB X\\nA X\\nC Y\\nC Y\\nC Y\\nB X\\nA Z\\nC Y\\nC Y\\nB Z\\nB X\\nB Z\\nB Z\\nB Z\\nB Y\\nA X\\nA Z\\nC Y\\nC Y\\nB X\\nB Y\\nC X\\nA Z\\nC X\\nC Y\\nC X\\nC Y\\nC Y\\nC X\\nA X\\nB Z\\nB X\\nB Z\\nC Y\\nA Y\\nB X\\nB Z\\nC X\\nB X\\nB Y\\nB Z\\nB Z\\nA Z\\nC X\\nB X\\nB X\\nB Y\\nB Z\\nC Y\\nC Y\\nC Y\\nA Z\\nB Z\\nA Z\\nB Z\\nB X\\nC Y\\nB X\\nB X\\nA Y\\nC Y\\nA X\\nB Z\\nC Y\\nB Z\\nB Z\\nB Z\\nB Y\\nC Y\\nA Z\\nB X\\nC Y\\nB Z\\nC X\\nB X\\nA X\\nB Z\\nB X\\nA Y\\nB Z\\nB Z\\nC X\\nB X\\nB X\\nB Z\\nB Z\\nB X\\nC Y\\nB Z\\nA Y\\nB X\\nC X\\nC Y\\nB Y\\nB Z\\nB X\\nC X\\nC Y\\nB X\\nB Z\\nB Z\\nB X\\nC Z\\nB Z\\nB X\\nC X\\nC X\\nB Z\\nB Z\\nC Y\\nB X\\nC Y\\nA Z\\nA Z\\nB Z\\nB X\\nA Z\\nB X\\nB Z\\nB Y\\nB Z\\nC Y\\nB Z\\nA Z\\nC X\\nB Z\\nB Z\\nC Y\\nA Z\\nC Y\\nC Y\\nC Y\\nA X\\nA Z\\nA Z\\nB Z\\nC X\\nA X\\nC Y\\nB X\\nB X\\nC Y\\nC X\\nA Z\\nB X\\nB Z\\nB X\\nB Y\\nC Y\\nA X\\nC Y\\nC Y\\nA X\\nC Y\\nB Z\\nB X\\nC Y\\nC Y\\nB X\\nC Y\\nC Y\\nC Y\\nA X\\nB Z\\nB X\\nB Z\\nB Y\\nA Z\\nB Z\\nC Y\\nB Z\\nA X\\nA Z\\nA Y\\nB Y\\nB Z\\nB Z\\nA X\\nB Y\\nA Z\\nB Z\\nB Z\\nA Y\\nC Y\\nB X\\nB Z\\nA X\\nB Z\\nB Z\\nA X\\nB Z\\nB Z\\nB X\\nA Z\\nB X\\nB Z\\nA Y\\nA Y\\nA X\\nC Y\\nB Z\\nA X\\nB Z\\nC Y\\nB Z\\nB X\\nC Y\\nC Y\\nC Y\\nB X\\nA Z\\nC Y\\nB Y\\nB Z\\nB Z\\nB Z\\nB X\\nC Y\\nC X\\nA X\\nB Z\\nA X\\nC Y\\nC Y\\nB X\\nB X\\nB Z\\nC Z\\nC Y\\nC Y\\nA Y\\nC Y\\nB Z\\nB X\\nB X\\nB Z\\nC Y\\nB Z\\nB X\\nB X\\nC Z\\nB X\\nC X\\nC Y\\nC Y\\nC X\\nC Y\\nC Y\\nB Z\\nB X\\nB X\\nC Y\\nC Y\\nC Y\\nB Y\\nA X\\nB Z\\nB Y\\nA Z\\nB Z\\nC X\\nB Y\\nB X\\nB Z\\nB X\\nA Z\\nA Z\\nC Y\\nC X\\nC Y\\nA Z\\nB Y\\nA Y\\nC Y\\nB Z\\nA Z\\nA Z\\nC Y\\nB Z\\nB X\\nB Z\\nC Z\\nC Y\\nC X\\nB Z\\nB X\\nA X\\nA Y\\nB Z\\nB X\\nA Y\\nB X\\nB X\\nC Y\\nB X\\nB Z\\nA Z\\nC Y\\nC Y\\nA Y\\nB Z\\nC Y\\nB Y\\nC Y\\nC Y\\nC Y\\nB Z\\nA Y\\nB Z\\nA X\\nB X\\nB Z\\nB Z\\nB Z\\nA X\\nC X\\nB X\\nC X\\nA Z\\nC Y\\nB X\\nB Z\\nB Y\\nC Y\\nC Y\\nB Y\\nB Y\\nC Y\\nC Y\\nA X\\nC Y\\nB Y\\nB X\\nB X\\nA Z\\nB X\\nC Y\\nB Z\\nA Z\\nC Y\\nC X\\nA Z\\nB Z\\nA Z\\nC Y\\nB Z\\nB X\\nC Y\\nB Z\\nB Z\\nB X\\nC Z\\nB X\\nB Z\\nB Y\\nB Y\\nB X\\nB Z\\nC Y\\nB Z\\nB Z\\nB X\\nB Z\\nB Z\\nB Z\\nC X\\nB X\\nC Y\\nB Z\\nC X\\nC Y\\nC X\\nC X\\nB Y\\nB Z\\nA X\\nC X\\nB Z\\nA Z\\nA X\\nB Z\\nB Z\\nB Z\\nC Y\\nB X\\nB X\\nC Y\\nB X\\nC Y\\nB Z\\nB Y\\nB X\\nB Y\\nA X\\nB Z\\nA X\\nC X\\nC X\\nB Z\\nC Y\\nA Y\\nB X\\nB X\\nC Y\\nC Y\\nC Y\\nC Y\\nB Z\\nB Z\\nC Y\\nB Z\\nB X\\nB X\\nB Z\\nB X\\nB X\\nB Z\\nB Y\\nC Z\\nC X\\nC Y\\nB X\\nB X\\nA X\\nB X\\nC Y\\nA Z\\nB Z\\nB X\\nC Y\\nB Z\\nB Z\\nB Z\\nB Z\\nB Z\\nB Z\\nA Y\\nC Y\\nC X\\nC Y\\nC Y\\nA X\\nB X\\nB Z\\nB Y\\nB Z\\nC Y\\nB Y\\nA Y\\nA Z\\nB Z\\nB Y\\nC Z\\nB Z\\nC Y\\nB Z\\nC Y\\nB Z\\nB Z\\nC Y\\nC Z\\nA X\\nC Y\\nC Y\\nA Z\\nA X\\nC Y\\nB Z\\nC X\\nC Y\\nB Z\\nB Z\\nB Z\\nC Z\\nB Y\\nB Z\\nB Z\\nC Y\\nC Y\\nA Y\\nB Y\\nB X\\nB X\\nB Z\\nB Y\\nA Z\\nA X\\nA Y\\nC Y\\nB Z\\nC Z\\nA Y\\nB X\\nB Y\\nC Y\\nC X\\nC Y\\nB X\\nB X\\nC X\\nC Y\\nB Z\\nC Y\\nC Y\\nC Z\\nB Z\\nB X\\nA X\\nC X\\nC Y\\nB Z\\nB X\\nB Z\\nB Z\\nB Z\\nC Y\\nA X\\nC X\\nB Y\\nB X\\nA X\\nA Y\\nB X\\nC Y\\nB X\\nC Z\\nC X\\nB X\\nA Z\\nB Z\\nB X\\nB Z\\nA Y\\nC X\\nA Z\\nB Y\\nB Z\\nC X\\nC Z\\nB X\\nB Z\\nB X\\nB Z\\nB Z\\nC X\\nB X\\nB X\\nA Z\\nC Y\\nB X\\nC Y\\nB Z\\nB Z\\nC X\\nC Y\\nB Z\\nA X\\nB Z\\nC Y\\nB X\\nA X\\nC Y\\nA X\\nA X\\nC Y"}');var l=e(577),n=e(8274);function x(Z,B){if(1&Z&&(n.TgZ(0,"p",19),n._uU(1),n.qZA()),2&Z){const Y=B.$implicit;n.xp6(1),n.hij(" ",Y," ")}}const t=function(){return{"width.px":24,"height.px":24}};function T(Z,B){1&Z&&n._UZ(0,"svg-icon",26),2&Z&&n.Q6J("svgStyle",n.DdM(1,t))}function S(Z,B){1&Z&&n._UZ(0,"svg-icon",27),2&Z&&n.Q6J("svgStyle",n.DdM(1,t))}function w(Z,B){1&Z&&n._UZ(0,"svg-icon",28),2&Z&&n.Q6J("svgStyle",n.DdM(1,t))}function U(Z,B){if(1&Z&&(n.ynx(0)(1,22),n.YNc(2,T,1,2,"svg-icon",23),n.YNc(3,S,1,2,"svg-icon",24),n.YNc(4,w,1,2,"svg-icon",25),n.BQk()()),2&Z){const Y=B.$implicit;n.xp6(1),n.Q6J("ngSwitch",Y),n.xp6(1),n.Q6J("ngSwitchCase","R"),n.xp6(1),n.Q6J("ngSwitchCase","P"),n.xp6(1),n.Q6J("ngSwitchCase","S")}}function $(Z,B){if(1&Z&&(n.TgZ(0,"div",20),n.YNc(1,U,5,4,"ng-container",21),n.qZA()),2&Z){const Y=B.$implicit;n.xp6(1),n.Q6J("ngForOf",Y)}}function q(Z,B){if(1&Z&&(n.TgZ(0,"p",19),n._uU(1),n.qZA()),2&Z){const Y=B.$implicit;n.xp6(1),n.hij(" ",Y," ")}}function D(Z,B){if(1&Z&&(n.TgZ(0,"p",19),n._uU(1),n.qZA()),2&Z){const Y=B.$implicit;n.xp6(1),n.hij(" ",Y," ")}}function J(Z,B){if(1&Z&&(n.TgZ(0,"p",19),n._uU(1),n.qZA()),2&Z){const Y=B.$implicit;n.xp6(1),n.hij(" ",Y," ")}}function Q(Z,B){1&Z&&n._UZ(0,"svg-icon",26),2&Z&&n.Q6J("svgStyle",n.DdM(1,t))}function F(Z,B){1&Z&&n._UZ(0,"svg-icon",27),2&Z&&n.Q6J("svgStyle",n.DdM(1,t))}function R(Z,B){1&Z&&n._UZ(0,"svg-icon",28),2&Z&&n.Q6J("svgStyle",n.DdM(1,t))}function N(Z,B){if(1&Z&&(n.ynx(0)(1,22),n.YNc(2,Q,1,2,"svg-icon",23),n.YNc(3,F,1,2,"svg-icon",24),n.YNc(4,R,1,2,"svg-icon",25),n.BQk()()),2&Z){const Y=B.$implicit;n.xp6(1),n.Q6J("ngSwitch",Y),n.xp6(1),n.Q6J("ngSwitchCase","R"),n.xp6(1),n.Q6J("ngSwitchCase","P"),n.xp6(1),n.Q6J("ngSwitchCase","S")}}function O(Z,B){if(1&Z&&(n.TgZ(0,"div",20),n.YNc(1,N,5,4,"ng-container",21),n.qZA()),2&Z){const Y=B.$implicit;n.xp6(1),n.Q6J("ngForOf",Y)}}function P(Z,B){if(1&Z&&(n.TgZ(0,"p",19),n._uU(1),n.qZA()),2&Z){const Y=B.$implicit;n.xp6(1),n.hij(" ",Y," ")}}const g={A:"R",B:"P",C:"S",X:"R",Y:"P",Z:"S"},M={"A X":"A C","A Y":"A A","A Z":"A B","B X":"B A","B Y":"B B","B Z":"B C","C X":"C B","C Y":"C C","C Z":"C A"},u={R:1,P:2,S:3},m=(Z,B)=>{switch(Z){case"R":switch(B){case"R":return 3;case"P":return 6;case"S":return 0}case"P":switch(B){case"R":return 0;case"P":return 3;case"S":return 6}case"S":switch(B){case"R":return 6;case"P":return 0;case"S":return 3}}};class r{constructor(){this.input$=new v.X(p.i),this.rounds$=this.input$.pipe((0,i.U)(B=>B.split("\n")),function b(Z,B,Y){var X,C;let A,o=!1;return Z&&"object"==typeof Z?(A=null!==(X=Z.bufferSize)&&void 0!==X?X:1/0,B=null!==(C=Z.windowTime)&&void 0!==C?C:1/0,o=!!Z.refCount,Y=Z.scheduler):A=Z??1/0,(0,y.B)({connector:()=>new f(A,B,Y),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:o})}(1)),this.recommendedRounds$=this.rounds$.pipe((0,i.U)(B=>B.map(Y=>M[Y]))),this.moves$=this.rounds$.pipe((0,i.U)(B=>B.map(Y=>Y.split(" ").map(X=>g[X])))),this.recommendedMoves$=this.recommendedRounds$.pipe((0,i.U)(B=>B.map(Y=>Y.split(" ").map(X=>g[X])))),this.scores$=this.moves$.pipe((0,i.U)(B=>B.map(Y=>{const[X,C]=Y;return m(X,C)+u[C]}))),this.recommendedScores$=this.recommendedMoves$.pipe((0,i.U)(B=>B.map(Y=>{const[X,C]=Y;return m(X,C)+u[C]}))),this.scoreSum$=this.scores$.pipe((0,i.U)(B=>B.reduce((Y,X)=>Y+X,0))),this.recommendedScoreSum$=this.recommendedScores$.pipe((0,i.U)(B=>B.reduce((Y,X)=>Y+X,0)))}loadFullRiddle(){this.input$.next(p.x)}static#n=this.\u0275fac=function(Y){return new(Y||r)};static#B=this.\u0275cmp=n.Xpm({type:r,selectors:[["app-day2"]],standalone:!0,features:[n.jDz],decls:101,vars:33,consts:[[1,"text-gray-50","font-bold","text-4xl","text-center","font-mono","mb-6"],[1,"bg-gray-50","bg-opacity-60","border-gray-100","border-opacity-50","rounded-2xl","border","backdrop-blur","p-4"],[1,"font-bold","text-2xl","mb-2"],[1,"mb-2"],[1,"inline-block","rounded-full","bg-gradient-to-r","from-pink-500","via-red-500","to-yellow-500","p-[2px]","hover:text-white","focus:outline-none","focus:ring","active:text-opacity-75",3,"click"],[1,"block","rounded-full","bg-gray-200","px-4","py-1","text-sm","font-medium","hover:bg-transparent"],[1,"flex","flex-row","gap-2","items-start"],[1,"bg-gray-50","bg-opacity-60","border-gray-100","border-opacity-50","rounded-xl","border","overflow-hidden"],[1,"p-2","border-b","border-gray-600","border-opacity-50"],[1,"max-h-[50vh]","overflow-y-auto","overflow-x-hidden-hidden","p-2"],[1,"whitespace-pre-line","font-mono"],[1,"border-gray-100","overflow-hidden","border-opacity-50","rounded-xl","border"],[1,"bg-gray-50","bg-opacity-60","p-2","border-b","border-gray-600","border-opacity-50"],[1,"max-h-[50vh]","overflow-y-auto","overflow-x-hidden","p-2","flex","flex-col","gap-2"],["class","whitespace-pre-line font-mono bg-gray-50 bg-opacity-60 border-gray-100 border-opacity-50 rounded-lg border p-2",4,"ngFor","ngForOf"],["class","flex flex-row gap-2 whitespace-pre-line font-mono bg-gray-50 bg-opacity-60 border-gray-100 border-opacity-50 rounded-lg border p-2",4,"ngFor","ngForOf"],[1,"bg-gray-50","bg-opacity-60","border-gray-100","border-opacity-50","rounded-xl","border"],[1,"overflow-y-auto","overflow-x-hidden","p-2"],[1,"max-h-[50vh]","overflow-y-auto","overflow-x-hidden","p-2"],[1,"whitespace-pre-line","font-mono","bg-gray-50","bg-opacity-60","border-gray-100","border-opacity-50","rounded-lg","border","p-2"],[1,"flex","flex-row","gap-2","whitespace-pre-line","font-mono","bg-gray-50","bg-opacity-60","border-gray-100","border-opacity-50","rounded-lg","border","p-2"],[4,"ngFor","ngForOf"],[3,"ngSwitch"],["src","/assets/icons/icons8-hand-rock.svg",3,"svgStyle",4,"ngSwitchCase"],["src","/assets/icons/icons8-hand.svg",3,"svgStyle",4,"ngSwitchCase"],["src","/assets/icons/icons8-hand-scissors.svg",3,"svgStyle",4,"ngSwitchCase"],["src","/assets/icons/icons8-hand-rock.svg",3,"svgStyle"],["src","/assets/icons/icons8-hand.svg",3,"svgStyle"],["src","/assets/icons/icons8-hand-scissors.svg",3,"svgStyle"]],template:function(Y,X){1&Y&&(n.TgZ(0,"h1",0),n._uU(1," --- Day 2: Rock Paper Scissors ---\n"),n.qZA(),n.TgZ(2,"div",1)(3,"h2",2),n._uU(4,"Problem 1"),n.qZA(),n.TgZ(5,"p",3),n._uU(6," We have received a strategy guide from the elves that should help us with a game of Rock Paper Scissors. As we are not sure if the guide is correct, we have to calculate our score. "),n.qZA(),n.TgZ(7,"button",4),n.NdJ("click",function(){return X.loadFullRiddle()}),n.TgZ(8,"span",5),n._uU(9," Load full riddle "),n.qZA()()(),n.TgZ(10,"div",6)(11,"div",7)(12,"div",8)(13,"p"),n._uU(14,"Our riddle input"),n.qZA()(),n.TgZ(15,"div",9)(16,"p",10),n._uU(17),n.ALo(18,"async"),n.qZA()()(),n.TgZ(19,"div",11)(20,"div",12)(21,"p"),n._uU(22,"Splitting into rounds"),n.qZA()(),n.TgZ(23,"div",13),n.YNc(24,x,2,1,"p",14),n.ALo(25,"async"),n.qZA()(),n.TgZ(26,"div",11)(27,"div",12)(28,"p"),n._uU(29,"Decoding"),n.qZA()(),n.TgZ(30,"div",13),n.YNc(31,$,2,1,"div",15),n.ALo(32,"async"),n.qZA()(),n.TgZ(33,"div",11)(34,"div",12)(35,"p"),n._uU(36,"Calculating score"),n.qZA()(),n.TgZ(37,"div",13),n.YNc(38,q,2,1,"p",14),n.ALo(39,"async"),n.qZA()(),n.TgZ(40,"div",16)(41,"div",8)(42,"p"),n._uU(43,"Score sum"),n.qZA()(),n.TgZ(44,"div",17)(45,"p",10),n._uU(46),n.ALo(47,"async"),n.qZA()()()(),n.TgZ(48,"div",1)(49,"h2",2),n._uU(50,"Problem 2"),n.qZA(),n.TgZ(51,"p",3),n._uU(52," Now we know the correct interpretation of the strategy guide and have to adjust our score. "),n.qZA(),n.TgZ(53,"button",4),n.NdJ("click",function(){return X.loadFullRiddle()}),n.TgZ(54,"span",5),n._uU(55," Load full riddle "),n.qZA()()(),n.TgZ(56,"div",6)(57,"div",7)(58,"div",8)(59,"p"),n._uU(60,"Our riddle input"),n.qZA()(),n.TgZ(61,"div",18)(62,"p",10),n._uU(63),n.ALo(64,"async"),n.qZA()()(),n.TgZ(65,"div",11)(66,"div",12)(67,"p"),n._uU(68,"Splitting into rounds"),n.qZA()(),n.TgZ(69,"div",13),n.YNc(70,D,2,1,"p",14),n.ALo(71,"async"),n.qZA()(),n.TgZ(72,"div",11)(73,"div",12)(74,"p"),n._uU(75,"Setting recommended move"),n.qZA()(),n.TgZ(76,"div",13),n.YNc(77,J,2,1,"p",14),n.ALo(78,"async"),n.qZA()(),n.TgZ(79,"div",11)(80,"div",12)(81,"p"),n._uU(82,"Decoding"),n.qZA()(),n.TgZ(83,"div",13),n.YNc(84,O,2,1,"div",15),n.ALo(85,"async"),n.qZA()(),n.TgZ(86,"div",11)(87,"div",12)(88,"p"),n._uU(89,"Calculating score"),n.qZA()(),n.TgZ(90,"div",13),n.YNc(91,P,2,1,"p",14),n.ALo(92,"async"),n.qZA()(),n.TgZ(93,"div",16)(94,"div",8)(95,"p"),n._uU(96,"Score sum"),n.qZA()(),n.TgZ(97,"div",17)(98,"p",10),n._uU(99),n.ALo(100,"async"),n.qZA()()()()),2&Y&&(n.xp6(17),n.Oqu(n.lcZ(18,11,X.input$)),n.xp6(7),n.Q6J("ngForOf",n.lcZ(25,13,X.rounds$)),n.xp6(7),n.Q6J("ngForOf",n.lcZ(32,15,X.moves$)),n.xp6(7),n.Q6J("ngForOf",n.lcZ(39,17,X.scores$)),n.xp6(8),n.Oqu(n.lcZ(47,19,X.scoreSum$)),n.xp6(17),n.Oqu(n.lcZ(64,21,X.input$)),n.xp6(7),n.Q6J("ngForOf",n.lcZ(71,23,X.rounds$)),n.xp6(7),n.Q6J("ngForOf",n.lcZ(78,25,X.recommendedRounds$)),n.xp6(7),n.Q6J("ngForOf",n.lcZ(85,27,X.recommendedMoves$)),n.xp6(7),n.Q6J("ngForOf",n.lcZ(92,29,X.recommendedScores$)),n.xp6(8),n.hij(" ",n.lcZ(100,31,X.recommendedScoreSum$)," "))},dependencies:[s.ez,s.sg,s.RF,s.n9,s.Ov,l._J,l.bk],styles:["[_nghost-%COMP%]{display:flex;padding:1rem;flex-direction:column;gap:.5rem}"],changeDetection:0})}}}]);