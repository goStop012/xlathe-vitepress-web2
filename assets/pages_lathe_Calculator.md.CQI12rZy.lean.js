var b=Object.defineProperty;var C=i=>{throw TypeError(i)};var k=(i,e,t)=>e in i?b(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var a=(i,e,t)=>k(i,typeof e!="symbol"?e+"":e,t),H=(i,e,t)=>e.has(i)||C("Cannot "+t);var c=(i,e,t)=>(H(i,e,"read from private field"),t?t.call(i):e.get(i)),D=(i,e,t)=>e.has(i)?C("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(i):e.set(i,t),f=(i,e,t,h)=>(H(i,e,"write to private field"),h?h.call(i,t):e.set(i,t),t);import{P as v,L as T,R}from"./chunks/Geometry.WDC_MvHR.js";import{d as j,p as N,o as y,c as _,C as S,F as L,j as m,t as O,e as P,a as B,G as A}from"./chunks/framework.5q7voRLl.js";var u,p,d;class F{constructor(e="62 0.05 -0.05"){a(this,"tolerance");D(this,u);D(this,p);D(this,d);a(this,"maximum");a(this,"nominal");a(this,"minimum");this.tolerance=e;const t=this.tolerance.split(" ").map(h=>Number(h));f(this,u,t[0]),f(this,p,t[1]),f(this,d,t[2]),this.maximum=c(this,u)+c(this,p),this.nominal=c(this,u)+(c(this,p)+c(this,d))/2,this.minimum=c(this,u)+c(this,d)}}u=new WeakMap,p=new WeakMap,d=new WeakMap;class V{constructor(e){a(this,"type");a(this,"nominalDiameter");a(this,"pitch");a(this,"toolRadius");a(this,"majorDiameter");a(this,"pitchDiameter");a(this,"minorDiameter");a(this,"realMinorDiameter");a(this,"toothHeight");a(this,"fullToothHeight");a(this,"lowDiameter");const{type:t="OD",nominalDiameter:h=12,pitch:n=1.75,toolRadius:r=.1}=e;this.type=t,this.nominalDiameter=h,this.pitch=n,this.toolRadius=r,this.fullToothHeight=.866*this.pitch,this.toothHeight=5/8*this.fullToothHeight,this.calculateDiameters()}calculateDiameters(){this.type==="ID"?(this.majorDiameter=this.nominalDiameter+.217*this.pitch-this.toolRadius,this.pitchDiameter=this.nominalDiameter-3/8*this.fullToothHeight*2,this.minorDiameter=this.nominalDiameter-this.pitch,this.lowDiameter=this.nominalDiameter-2*this.toothHeight):this.type==="OD"&&(this.majorDiameter=this.nominalDiameter,this.pitchDiameter=this.nominalDiameter-3/8*this.fullToothHeight*2,this.minorDiameter=this.nominalDiameter-2*this.toothHeight,this.realMinorDiameter=this.nominalDiameter-(this.fullToothHeight-this.fullToothHeight/8-this.toolRadius)*2)}}const X={open:""},Z={key:0,style:{color:"red"}},E=j({__name:"Calculator",setup(i){var h;const t=N([]);{const n="Line",s=[[10,10],[20,20]].map(g=>v.fromArrayXZ(g).multiply(1)),o=[0,1].map(g=>g*1),l=new T(s[0],s[1]).extendOrShrinkFromStart(o[0]).extendOrShrinkFromEnd(o[1]).toPointsXZ(),x=Object.assign(l,{extendOrShrink:o});t.value.push({title:n,result:x})}{const n="lineLineIntersection",s=[[10,10],[20,20],[0,15],[25,25]].map(w=>v.fromArrayXZ(w).multiply(1)),o=new T(s[0],s[1]),l=new T(s[2],s[3]),g=(h=o.lineLineIntersection(l))==null?void 0:h.toObjectXZ();t.value.push({title:n,result:g})}{const n="Tolerance",s=[62,.25,0].map(l=>l*1).join(" "),o=new F(s);t.value.push({title:n,result:o})}{const n={title:"RightTriangle"},r=[3,,5].map(l=>Number(l)*1),s=[,,90],o={sideA:r[0],sideB:r[1],sideC:r[2],angleA:s[0],angleB:s[1]};try{console.log(o),n.result=new R(o)}catch(l){n.error=l instanceof Error?l.message:"Unknown error"}finally{t.value.push(n)}}{const n="TriangularThread",r={type:"OD",nominalDiameter:12,pitch:1,toolRadius:.1},s=new V(r);t.value.push({title:n,result:s})}return(n,r)=>(y(!0),_(L,null,S(t.value,(s,o)=>(y(),_("div",null,[m("details",X,[m("summary",null,O(`[${o}]${s.title}`),1),m("pre",null,O(JSON.stringify(s.result,null,2)),1),s.error?(y(),_("p",Z,O(s.error),1)):P("",!0)]),r[0]||(r[0]=m("hr",null,null,-1))]))),256))}}),G=JSON.parse('{"title":"Calculator","description":"","frontmatter":{},"headers":[],"relativePath":"pages/lathe/Calculator.md","filePath":"pages/lathe/Calculator.md"}'),I={name:"pages/lathe/Calculator.md"},U=Object.assign(I,{setup(i){return(e,t)=>(y(),_("div",{"data-pagefind-body":!0},[t[0]||(t[0]=m("h1",{id:"calculator",tabindex:"-1"},[B("Calculator "),m("a",{class:"header-anchor",href:"#calculator","aria-label":'Permalink to "Calculator"'},"​")],-1)),t[1]||(t[1]=m("p",null,"This is a calculator component.",-1)),A(E)]))}});export{G as __pageData,U as default};