import{_ as S,U as f,p as g,h as E,q as L,v as z,o as p,c as x,j as n,Y as M,ad as H,F as T,C as N,t as w,ae as O,ab as C,a as j,G as D}from"./chunks/framework.Cs8hIhTA.js";const P=["d"],A={class:"left-aside"},R={class:"right-aside"},U={__name:"Svg",setup(B){const c=f({Mm:{comment:"起点",exp:"M0 0 L100 100",args:`
            - x
            - y
            -
            - dx
            - dy
            `},Ll:{comment:"直线",exp:"M0 0 L100 100",args:`
            - x
            - y
            -
            - dx
            - dy
            `},Hh:{comment:"水平线",exp:"M0 0 H100",args:`
            - x
            -
            - dx
            `},Vv:{comment:"垂直线",exp:"M0 0 V100",args:`
            - y
            -
            - dy
            `},Cc:{comment:"三次贝塞尔曲线",exp:"M0 0  C200 50 250 250 200 200",args:`
            - x1 y1
            - x2 y2
            - x y
            -
            - dx1 dy1
            - dx2 dy2
            - dx dy
            `},Ss:{comment:"平滑三次贝塞尔曲线",exp:"M0 0 S200 50 250 250",args:`
            - x2 y2
            - x y
            -
            - dx2 dy2
            - dx dy
            `},Qq:{comment:"二次贝塞尔曲线",exp:"M0 0 Q200 50 250 250",args:`
            - x1 y1
            - x y
            -
            - dx1 dy1
            - dx dy
            `},Tt:{comment:"平滑二次贝塞尔曲线",exp:"M0 0 T50 50",args:`
            - x y
            -
            - dx dy
            `},Aa:{comment:"椭圆曲线",exp:"M0 0 V25  a25 25 0 0 1 -25 25 h-25",args:`
            - rx ry 椭圆半径，值相同时为圆
            - x-axis-rotation 延 X 轴旋转角度
            - large-arc-flag 大/小弧线
            - sweep-flag 顺/逆时针
            - x y
            -
            - dx dy
            `},Zz:{comment:"闭合曲线",exp:"M0 0 H100",args:`
            -
            `}}),i=g(null),h=E(()=>{var s;return c[(s=i.value)==null?void 0:s.slice(0,2)]}),m=g(null),V=()=>{var s;m.value=(s=h.value)==null?void 0:s.exp},u=g(null),k=g(null),r=f({value:100,base:1.1}),o=f({value:[0,0],base:[10,10]});L(()=>{console.log(800*1.1**((r.value-100)/10))});const y=s=>{switch(s){case"out":b("zoom",1),r.value+=10;break;case"in":b("zoom",-1),r.value-=10;break;case"reset":b("zoom",(r.value-100)/10*-1),r.value=100;break}console.log(s,C(r))},d=s=>{switch(s){case"top":v("move",[o.base[0],0]),o.value[0]+=o.base[0];break;case"bottom":v("move",[-o.base[0],0]),o.value[0]-=o.base[0];break;case"left":v("move",[0,o.base[1]]),o.value[1]+=o.base[1];break;case"right":v("move",[0,-o.base[1]]),o.value[1]-=o.base[1];break;case"reset":v("move",[o.value[0]*-1,o.value[1]*-1]),o.value=[0,0];break}console.log(s,C(o))},b=(s,e)=>{$(s,r.base**e)},v=(s,e)=>{$(s,e)},$=(s,e)=>{const l=u.value,t=l.viewBox.baseVal;let a={x:t.x,y:t.y,width:t.width,height:t.height};switch(s){case"zoom":a.width*=e,a.height*=e;break;case"move":a.x+=e[1],a.y+=e[0]*-1;break}l.setAttribute("viewBox",`${a.x} ${a.y} ${a.width} ${a.height}`),console.log(l,a)};return z(()=>{const s=()=>{const l=u.value.getBoundingClientRect(),t={x:0,y:0,width:l.width,height:l.height};u.value.setAttribute("viewBox",`${t.x} ${t.y} ${t.width} ${t.height}`)};window.addEventListener("DOMContentLoaded",s),window.addEventListener("resize",s),u.value.addEventListener("mousemove",e=>{const{width:l,height:t}=u.value.getBoundingClientRect(),a={y:Math.ceil(e.offsetX-l/2),x:Math.ceil(e.offsetY-t/2)};k.value.innerText=`x:${a.x}, y:${a.y}`})}),(s,e)=>{var l;return p(),x("section",null,[n("header",null,[M(n("select",{"onUpdate:modelValue":e[0]||(e[0]=t=>i.value=t),onChange:e[1]||(e[1]=t=>V())},[(p(!0),x(T,null,N(c,(t,a)=>(p(),x("option",null,w(a+t.comment),1))),256))],544),[[H,i.value]]),M(n("input",{type:"text","onUpdate:modelValue":e[2]||(e[2]=t=>m.value=t)},null,512),[[O,m.value]])]),n("main",null,[n("div",null,[n("input",{type:"button",value:"缩小",onClick:e[3]||(e[3]=t=>y("out"))}),n("input",{type:"button",value:"放大",onClick:e[4]||(e[4]=t=>y("in"))}),n("input",{type:"button",value:"复原",onClick:e[5]||(e[5]=t=>y("reset"))}),e[11]||(e[11]=n("span",null,"|",-1)),n("input",{type:"button",value:"上",onClick:e[6]||(e[6]=t=>d("top"))}),n("input",{type:"button",value:"下",onClick:e[7]||(e[7]=t=>d("bottom"))}),n("input",{type:"button",value:"左",onClick:e[8]||(e[8]=t=>d("left"))}),n("input",{type:"button",value:"右",onClick:e[9]||(e[9]=t=>d("right"))}),n("input",{type:"button",value:"复原",onClick:e[10]||(e[10]=t=>d("reset"))})]),(p(),x("svg",{ref_key:"svgEle",ref:u},[n("path",{d:m.value,stroke:"red","stroke-width":"1",fill:"blue"},null,8,P),e[12]||(e[12]=n("circle",{cx:"0",cy:"0",r:"2",fill:"red"},null,-1))],512))]),n("aside",A,[n("pre",null,w((l=h.value)==null?void 0:l.args.split(`
`).map(t=>t.trim()).join(`
`)),1)]),n("aside",R,[n("pre",null,w(`
`+JSON.stringify({scale:r,step:o},null,2))+`            
          `,1)]),n("footer",{ref_key:"footerEle",ref:k},"x:-, y:-",512)])}}},_=S(U,[["__scopeId","data-v-b0a17bdd"]]),J=JSON.parse('{"title":"Svg","description":"","frontmatter":{},"headers":[],"relativePath":"pages/lathe/svg.md","filePath":"pages/lathe/svg.md"}'),q={name:"pages/lathe/svg.md"},Q=Object.assign(q,{setup(B){return(c,i)=>(p(),x("div",{"data-pagefind-body":!0},[i[0]||(i[0]=n("h1",{id:"svg",tabindex:"-1"},[j("Svg "),n("a",{class:"header-anchor",href:"#svg","aria-label":'Permalink to "Svg"'},"​")],-1)),i[1]||(i[1]=n("p",null,"This is a svg component.",-1)),D(_)]))}});export{J as __pageData,Q as default};
