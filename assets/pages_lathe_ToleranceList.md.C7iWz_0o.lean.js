var j=Object.defineProperty;var x=e=>{throw TypeError(e)};var M=(e,t,a)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var d=(e,t,a)=>M(e,typeof t!="symbol"?t+"":t,a),D=(e,t,a)=>t.has(e)||x("Cannot "+a);var _=(e,t,a)=>(D(e,t,"read from private field"),a?a.call(e):t.get(e)),V=(e,t,a)=>t.has(e)?x("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),T=(e,t,a,r)=>(D(e,t,"write to private field"),r?r.call(e,a):t.set(e,a),a),U=(e,t,a)=>(D(e,t,"access private method"),a);import{d as defineComponent,U as reactive,p as ref,h as computed,q as watch,o as openBlock,c as createElementBlock,k as unref,t as toDisplayString,e as createCommentVNode,j as createBaseVNode,a as createTextVNode,Y as withDirectives,ad as vModelSelect,F as Fragment,C as renderList,n as normalizeClass,af as vModelDynamic,_ as _export_sfc,v as onMounted,G as createVNode}from"./chunks/framework.Cs8hIhTA.js";import{U as Utils,P as Point}from"./chunks/Utils.-nxGnYAP.js";const _hoisted_1$1=["id"],_hoisted_2$1={key:0},_hoisted_3=["value"],_hoisted_4=["onUpdate:modelValue"],_hoisted_5=["value"],_hoisted_6={class:"point"},_hoisted_7=["type","onUpdate:modelValue","readonly"],_hoisted_8={key:1},_hoisted_9=["type","onUpdate:modelValue","readonly"],_hoisted_10={colspan:"2",class:"danger"},_sfc_main$2=defineComponent({__name:"CalculatorWidget",props:{data:{type:Object,required:!0},displayHader:{type:Boolean,default:!1}},setup(e){const t=e,{name:a,keyOption:r,input:h,output:g,className:u}=t.data,n=reactive({...h,...g}),i=ref((r==null?void 0:r.value)||void 0),m=computed(()=>{var s;return((s=i.value)==null?void 0:s.split("+").map(o=>o.trim()))||[]}),B=computed(()=>m.value.length?m.value:Object.keys(h)),N=computed(()=>Utils.difference(Object.keys(n),B.value)),O=computed(()=>B.value.reduce((s,o)=>(s[o]=n[o],s),{})),b=ref(""),E=ref(""),S=s=>{if(Utils.isObject(s)&&Object.keys(s).join("")==="xy"){const{x:o,y:c}=s;return Utils.processNumbeer(Point.fromObject({x:o,y:c}).toObjectXZ())}return Utils.isNumber(s)?Utils.roundNumber(s,5):s},$=()=>{B.value.forEach(o=>{var l;const c=(l=h[o])==null?void 0:l.constructor;try{c&&new c(n[o])}catch(k){throw E.value=o,new Error(k instanceof Error?k.message:String(k))}E.value=""})};return watch(O,()=>{try{$();const s=new u(O.value);Object.keys(n).forEach(o=>{o!=="keyOption"&&(n[o]=S(s[o]))}),b.value=""}catch(s){b.value=s instanceof Error?s.message:"Unknown error",console.error(s)}},{immediate:!0,deep:!0}),(s,o)=>(openBlock(),createElementBlock(Fragment,null,[e.displayHader?(openBlock(),createElementBlock("h2",{key:0,id:unref(a).toLowerCase().replaceAll(" ","-")},toDisplayString(unref(a)),9,_hoisted_1$1)):createCommentVNode("",!0),createBaseVNode("table",null,[m.value.length?(openBlock(),createElementBlock("tr",_hoisted_2$1,[o[1]||(o[1]=createBaseVNode("td",null,[createBaseVNode("input",{type:"radio",disabled:""}),createTextVNode("keyOption")],-1)),createBaseVNode("td",null,[withDirectives(createBaseVNode("select",{"onUpdate:modelValue":o[0]||(o[0]=c=>i.value=c)},[(openBlock(!0),createElementBlock(Fragment,null,renderList(unref(r).options,c=>(openBlock(),createElementBlock("option",{value:c},toDisplayString(c),9,_hoisted_3))),256))],512),[[vModelSelect,i.value]])])])):createCommentVNode("",!0),(openBlock(!0),createElementBlock(Fragment,null,renderList(n,(c,l)=>{var k;return openBlock(),createElementBlock("tr",{key:l},[createBaseVNode("td",null,[o[2]||(o[2]=createBaseVNode("input",{type:"radio",disabled:""},null,-1)),createTextVNode(toDisplayString(l),1)]),createBaseVNode("td",{class:normalizeClass({danger:E.value===l})},[(k=unref(h)[l])!=null&&k.options?withDirectives((openBlock(),createElementBlock("select",{key:0,"onUpdate:modelValue":p=>n[l]=p},[(openBlock(!0),createElementBlock(Fragment,null,renderList(unref(h)[l].options,p=>(openBlock(),createElementBlock("option",{value:p},toDisplayString(p),9,_hoisted_5))),256))],8,_hoisted_4)),[[vModelSelect,n[l]]]):(openBlock(),createElementBlock(Fragment,{key:1},[c instanceof Object?(openBlock(!0),createElementBlock(Fragment,{key:0},renderList(c,(p,L)=>(openBlock(),createElementBlock("span",_hoisted_6,[createBaseVNode("label",null,toDisplayString(L),1),withDirectives(createBaseVNode("input",{type:typeof p=="string"?"text":"number","onUpdate:modelValue":F=>n[l][L]=F,readonly:N.value.includes(l)},null,8,_hoisted_7),[[vModelDynamic,n[l][L]]])]))),256)):(openBlock(),createElementBlock("span",_hoisted_8,[withDirectives(createBaseVNode("input",{type:typeof c=="string"?"text":"number","onUpdate:modelValue":p=>n[l]=p,readonly:N.value.includes(l)},null,8,_hoisted_9),[[vModelDynamic,n[l]]])]))],64))],2)])}),128)),createBaseVNode("tr",null,[createBaseVNode("td",_hoisted_10,toDisplayString(b.value),1)])])],64))}}),CalculatorWidget=_export_sfc(_sfc_main$2,[["__scopeId","data-v-86edcd8a"]]);var f,v,y,w,C;class Tolerance{constructor(e={}){V(this,w);d(this,"tolerance");V(this,f);V(this,v);V(this,y);d(this,"maximum");d(this,"nominal");d(this,"minimum");const{tolerance:t="62 0.05 -0.05"}=e;this.tolerance=t,U(this,w,C).call(this)}}f=new WeakMap,v=new WeakMap,y=new WeakMap,w=new WeakSet,C=function(){const value=this.tolerance.split(" ");T(this,f,eval(value.at(0))||0),T(this,v,eval(value.at(1))||0),T(this,y,eval(value.at(2))||0),this.maximum=_(this,f)+_(this,v),this.nominal=_(this,f)+(_(this,v)+_(this,y))/2,this.minimum=_(this,f)+_(this,y)};class LTolerance{constructor(t="60"){d(this,"value");if(this.value=t,!(this.value.split(" ").filter(r=>r).map(r=>parseFloat(r)).length>=1))throw new Error(`${this.constructor.name}，当前值：${this.value}，值格式为：62 0.05 -0.05`)}}function LtoValue(e){const t={};for(let a in e)t[a]=Utils.isObject(e[a])&&"value"in e[a]?e[a].value:e[a];return t}const _hoisted_1={class:"hader"},_hoisted_2=["id"],_sfc_main$1=defineComponent({__name:"ToleranceList",setup(e){class t{constructor(n){d(this,"name");d(this,"keyOption");d(this,"input");d(this,"output");d(this,"className");const{name:i,keyOption:m={value:"",options:[]},input:B,className:N}=n;this.name=i,this.keyOption=m,this.input=B,this.className=N,this.output=new N(LtoValue(B))}}const a=ref([new t({name:"Tolerance",input:{tolerance:new LTolerance},className:Tolerance}),new t({name:"Tolerance",input:{tolerance:new LTolerance},className:Tolerance})]);function r(){const u=new t({name:"Tolerance",input:{tolerance:new LTolerance},className:Tolerance});a.value.push(u),h(a.value.length-1)}function h(u){const n=document.querySelector(".VPDocOutlineItem.root"),i=g(u);n==null||n.insertAdjacentHTML("beforeend",`
    <li data-v-102d11df="">
      <a data-v-102d11df="" class="outline-link" href="#${i}" title="${i}">${i}</a>
    </li>
    `)}const g=u=>`#${u}`;return onMounted(()=>{}),(u,n)=>(openBlock(),createElementBlock(Fragment,null,[(openBlock(!0),createElementBlock(Fragment,null,renderList(a.value,(i,m)=>(openBlock(),createElementBlock(Fragment,{key:m},[createBaseVNode("span",_hoisted_1,[createBaseVNode("h2",{id:g(m)},toDisplayString(g(m)),9,_hoisted_2),n[0]||(n[0]=createBaseVNode("input",{type:"text"},null,-1))]),createVNode(CalculatorWidget,{data:i},null,8,["data"])],64))),128)),createBaseVNode("input",{type:"button",onClick:r,value:"Add Item"})],64))}}),ToleranceList=_export_sfc(_sfc_main$1,[["__scopeId","data-v-f2538def"]]),__pageData=JSON.parse('{"title":"ToleranceList","description":"","frontmatter":{},"headers":[],"relativePath":"pages/lathe/ToleranceList.md","filePath":"pages/lathe/ToleranceList.md"}'),__default__={name:"pages/lathe/ToleranceList.md"},_sfc_main=Object.assign(__default__,{setup(e){return(t,a)=>(openBlock(),createElementBlock("div",{"data-pagefind-body":!0},[a[0]||(a[0]=createBaseVNode("h1",{id:"tolerancelist",tabindex:"-1"},[createTextVNode("ToleranceList "),createBaseVNode("a",{class:"header-anchor",href:"#tolerancelist","aria-label":'Permalink to "ToleranceList"'},"​")],-1)),a[1]||(a[1]=createBaseVNode("p",null,"This is a ToleranceList component.",-1)),createVNode(ToleranceList)]))}});export{__pageData,_sfc_main as default};
