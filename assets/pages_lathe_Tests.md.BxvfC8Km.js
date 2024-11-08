var R=Object.defineProperty;var T=(o,X,s)=>X in o?R(o,X,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[X]=s;var d=(o,X,s)=>T(o,typeof X!="symbol"?X+"":X,s);import{d as S,p as P,o as l,c as r,j as G,F as m,C as Q,t as u,Y as f,ae as w,_,a as U,G as W}from"./chunks/framework.5q7voRLl.js";const g=["id"],h={class:"testCode"},N=["onUpdate:modelValue","onInput"],x=S({__name:"Tests",setup(o){function X(e){return e.replace(/^\s*[\r|\n]/g,"")}function s(e){return e.replace(/[\r|\n]/gm,"")}function F(e){return e.replace(/ /gm,"")}function i(e){return e=X(e),e=F(e),e=C(e),e=e.toUpperCase(),e}function p(e){return e=s(e),e=F(e),e=e.toUpperCase(),e}function C(e){return e.replace(/([a-zA-Z])/gm," $1")}class t{constructor(a){d(this,"name");d(this,"testCode");d(this,"inputCode");const{name:n,testCode:Z}=a;this.name=n,this.testCode=i(Z||""),this.inputCode=""}}const c=P([new t({name:"程序头",testCode:`
刀尖方位号参考图：

前刀架
3--8--4
7-0/9-5
2--6--1

后刀架
2--6--1
7-0/9-5
3--8--4`}),new t({name:"程序头",testCode:`
G99 G97 G40 T0202 S450 M3 
M8`}),new t({name:"程序尾",testCode:`
M5
M9
M30 
`}),new t({name:"刀具开始",testCode:`
M1 
G40 T0505 G97 S400M4 
M8

M1
G50 S1200
G40 T0505 G96 S120 M4 
M8
`}),new t({name:"刀具结束",testCode:`
G0Z30.
G28W0. 
G28U0.`}),new t({name:"G0",testCode:""}),new t({name:"G1",testCode:""}),new t({name:"G1-C",testCode:`
G1Z0.02
X87.C0.4 
Z-4.45 `}),new t({name:"G1-R",testCode:`
(外/内径，顺逆时针)
(倒角去毛刺)
S1600
G0X48.4
G1Z-2.4F0.1
G1X46.90W-0.73R1.F0.08 
Z-36.97

S600
G0X42.5
G1Z-12.0F0.2 
G1X41.3R0.4F0.05 
G1X40.02A30.0R0.45 
G1Z-22.95`}),new t({name:"G1-A",testCode:`
G0X94.0 
G1Z0.02
A90.0R0.5
X98.1Z-2.8A-15.R0.5
Z-133.95U-0.06 
X100.975C0.4 
Z-141.94 
X108.1Z-155.R0.5 
W-0.9
U1.`}),new t({name:"G2",testCode:`
T202M3S2000
G1X22.2 Z-1.0F0.07 
G2X20.2Z0.0R1.0F0.04 `}),new t({name:"G3",testCode:`
T1010M3S600
G1X29.5Z-25.0 
G3X25.5Z-27.0R2.0F0.03 `}),new t({name:"G70",testCode:`
G0X112.Z30.
Z1.
G42
G70P11Q19F0.09 
G40
G0Z30. `}),new t({name:"G71",testCode:`
G0X84.Z30. 
Z3.
G41
G71U0.35R0.3 
G71P21Q29U-0.12W0.05F0.21
N21G0X89.
G1Z0.02
X87.C0.4 
Z-4.45 
X85.95A45. 
Z-26.
N29U-1.5 
G40G0Z30.`}),new t({name:"G72",testCode:`
G0X96.5Z20.0 
Z1.2M08
G72W1.3R0.5
G72P1Q2U0.1W0.05F0.2 
N1G0Z-17.5 
G1X89.0
Z-2.65 
X87.7Z-2.0 
X50.0
Z-0.65 
Z0.0X48.7
N2X30.0
G0Z10.0
G28U0.0W0.0

G0 X149.0 S160
Z-21.0
G1 Z-22.1 F0.3
G72 W0.3 R0.2
G72 P5 Q6 W0.1 F0.15
N5 G1 Z-22.2 U0.
G1 X148.8
U-6.2 Z-25.3
X125.1
N6 Z-22.2
G70 P5 Q6 F0.1 S220
G0 Z-21.7
`}),new t({name:"G73",testCode:`
G0X112.Z30.
Z3.
G42
G73U0.35W0.35R2. 
G73P11Q19U0.12W0.05F0.21 
N11G0X94.0 
G1Z0.02
A90.0R0.5
X98.1Z-2.8A-15.R0.5
Z-133.95U-0.06 
X100.975C0.4 
Z-141.94 
X108.1Z-155.R0.5 
W-0.9
N19U1. 
G40
G0Z30.`}),new t({name:"G74",testCode:`
(钻孔)
G0X19.5Z2.0
Z-5.0
G1Z-6.3F0.1
G74R0.2
G74Z-7.5Q12000F0.03
G0Z2.0

G0X35.0Z3.5
G74R0.2
G74Z0.1X16.0 P2650 Q9999F0.1 
G0Z20.0M05 

(端面槽-代码可以有误)
G0X113.5Z2.0 
G1Z0.5F0.5 
G74R0.05 
G74X136.5Z-3.5P2500Q300F0.06 
G1X113.6Z-3.0F0.5

(端面槽)
G1Z-5.3F0.2
G74R0.15 
G74X221.0Z-8.0P5000Q230F0.06 
G1Z-7.7F0.3
`}),new t({name:"G75",testCode:`
(平端面)
G0 X67.0
Z3.3
G75 R0.2
G75 X30.0 Z0.08 P99999 Q400 R0.3 F0.2
G0 Z120.0

(外圆槽)
G0X52.0Z2.0
G1Z-22.5F2.0 
X53.5F0.3
G75R0.05 
G75Z-30.5X57.05P200 Q2500F0.04
G1Z-21.45F0.3`}),new t({name:"G76",testCode:`
(M20xP1.5)
G0 X22. Z-2.
G76 P020060 Q50 R0.02
G76 X19.85 Z-32. P0974 Q50 F1.5

T0404 M03 S600
G0 X13.0
Z1.
G76 P010000 Q60 R0.01
G76 X10.25 Z-24.4 P875 Q60 F1.75
G0 Z120.0
M1
T0202 M03 S1200
G0 X13.0
Z0.0
G1 X-0.89 F0.1
G0 Z0.4
X9.0
G1 X11.9 Z-1.1 F0.06
Z-24.0
X14.0
X15.0 W-0.5
Z-30.0
X18.0
X19.4 W-0.7
G0 Z120.0
M1
T0404 M3 S600
G0 X13.0
Z1.0
G76 P010000 Q60 R0.01
(@精车螺纹 G76-2 Q可能大于P@)
(G76 X87.4 Z-28.0 P1300 Q1460 F2.0)
G76 X10.25 Z-24.4 P875 Q875 F1.75
G0 Z150.0
X100`}),new t({name:"G83",testCode:`
G0X0.0 
Z2.0M08
G83R0.3
G83Z-51.9Q500F0.15 
G0Z20.0M05 

G0X0.0 
Z3.0 
G1Z1.0F0.25
G83Z-5.4Q2000F0.1
G0Z80.0
`}),new t({name:"G90",testCode:`
G40G97T0202M03S600 
G0X116.0Z20.0M08 
Z2.0 
G90X118.1Z-6.5F0.12
X118.8 
X119.5 
G0Z20.0
G28U0.W0.`}),new t({name:"G92",testCode:`
T1212M3S500
G0X26.0
Z-12.0 
G92X23.9Z-23.7F1.5 
X23.75 
X23.6
X23.45 
X23.3
X23.15 
X23.05 
X22.9
X22.8
X22.7
X22.6
X22.5
X22.4
X22.3
X22.2
G0X150.0

T1111
M4S800 
G0X12.Z2.M8
G92X10.Z-7.5R-0.4F0.907
X9.5 
X9.3 
X9.2 
X9.1 
X9.
X8.95
X8.9 
X8.9 
G0X150.Z150.

T404 M3 S300
G0 X40
Z2
G92 X43.3 Z-22 F1.5
X43.6
X43.9
X44.1
X44.3
X44.5
X44.7
X44.9
X45.1
X45.2
X45.2
G0 Z230
M01
T303 M3 S450
G0 X41
Z2
G70 P3 Q4 F0.15
G0 Z180
M01
T404 M3 S300
G0 X40
Z2
G92 X45.2 Z-22 F1.5
X45.2
G0 Z330
X260
M3 S180`}),new t({name:"G94",testCode:`
T303G99M3S400
G0X100.0Z50.0
M8 
G0Z1.5 
G94X-1.0Z1.0F0.15
Z0.5 
Z0.05
G0X134.0 `}),new t({name:"G96",testCode:`
G50S2000
G96S198`})]),M=(e,a,n)=>{const Z=e.target;a=p(a),n=p(n),a===n?Z.classList.add("safety"):(console.log({testCode:a,inputCode:n}),Z.classList.add("danger"))};return(e,a)=>(l(),r(m,null,[a[2]||(a[2]=G("code",{lang:"js"},'const foo = "xp"',-1)),(l(!0),r(m,null,Q(c.value,n=>(l(),r(m,null,[G("h2",{id:n.name.toLowerCase().replaceAll(" ","-")},u(n.name),9,g),G("table",null,[G("tr",null,[a[0]||(a[0]=G("td",null,"Test:",-1)),G("td",null,[G("pre",null,[G("code",h,u(n.testCode),1)])])]),G("tr",null,[a[1]||(a[1]=G("td",null,"Input:",-1)),G("td",null,[f(G("textarea",{class:"inputCode","onUpdate:modelValue":Z=>n.inputCode=Z,onInput:Z=>M(Z,n.testCode,n.inputCode)},null,40,N),[[w,n.inputCode]])])])])],64))),256))],64))}}),v=_(x,[["__scopeId","data-v-9ef6a17c"]]),y=JSON.parse('{"title":"Tests","description":"","frontmatter":{},"headers":[],"relativePath":"pages/lathe/Tests.md","filePath":"pages/lathe/Tests.md"}'),A={name:"pages/lathe/Tests.md"},V=Object.assign(A,{setup(o){return(X,s)=>(l(),r("div",{"data-pagefind-body":!0},[s[0]||(s[0]=G("h1",{id:"tests",tabindex:"-1"},[U("Tests "),G("a",{class:"header-anchor",href:"#tests","aria-label":'Permalink to "Tests"'},"​")],-1)),s[1]||(s[1]=G("p",null,"This is a Tests component.",-1)),W(v)]))}});export{y as __pageData,V as default};
