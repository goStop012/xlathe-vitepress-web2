var F=Object.defineProperty;var $=(f,t,e)=>t in f?F(f,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):f[t]=e;var R=(f,t,e)=>$(f,typeof t!="symbol"?t+"":t,e);import{U as h,A as G,a as N,b as P,P as b,L as S,c as T}from"./chunks/Utils.-nxGnYAP.js";import{U as k,d as w,p as z,h as A,o as g,c as v,t as X,n as W,_ as y,v as I,q as J,a3 as B,j as u,k as p,F as C,C as Z,G as x,a as H}from"./chunks/framework.Cs8hIhTA.js";class Y{constructor(t,e){R(this,"cells");R(this,"columnIndexMap");R(this,"COLUMNS");R(this,"ROWS");this.COLUMNS=t,this.ROWS=e,this.cells=k(Array(this.ROWS).fill("").map(()=>Array(this.COLUMNS.length).fill(""))),this.columnIndexMap=Object.fromEntries(this.COLUMNS.map((s,n)=>[s,n]))}evalCell(t){if(!this.isFormula(t))return t;const e=this.parseCellReferences(t.slice(1));return this.evaluateExpression(e)}isFormula(t){return t.startsWith("=")}parseCellReferences(t){return t.replace(/\b([A-Z])(\d{1,2})\b/g,(e,s,n)=>{const o=Number(n);this.isValidColName(s),this.isValidRow(o);const r=this.columnIndexMap[s];return`get(${o}, ${r})`})}evaluateExpression(t){try{return new Function("get",`return ${t}`)(this.getCellValue.bind(this))}catch(e){throw new Error(`#ERROR: ${e.message}`)}}getCellValue(t,e){this.isValidCoordinate(t,e);const s=this.cells[t][e];if(s==="")return null;const n=this.evalCell(s),o=h.roundNumber(Number(n));return Number.isFinite(o)?o:n}getCellValueRaw(t,e){return this.isValidCoordinate(t,e),this.cells[t][e]}setCellValue(t,e,s){this.isValidCoordinate(t,e),this.cells[t][e]=String(s)}setRowValue(t,e){if(this.isValidRow(t),e.length!==this.COLUMNS.length)throw new Error("Invalid row or value length mismatch.");this.cells[t].forEach((s,n)=>{this.setCellValue(t,n,e[n])})}setCellsFromArray(t){const e=t.length-this.cells.length;this.pushOrPopRow(e),t.forEach((s,n)=>{this.clearRow(n),this.setRowValue(n,s)})}setCellsFromObject(t){const e=t.length-this.cells.length;this.pushOrPopRow(e),t.forEach((s,n)=>{this.clearRow(n),this.setRowFromObject(n,s)})}setCellsFromString(t){const e=t.split(`
`).filter(n=>n.trim()!==""),s=e.length-this.cells.length;this.pushOrPopRow(s),e.forEach((n,o)=>{const r={},i=n.match(/([A-Z])(-?\d*\.?\d*)/g);i&&i.forEach(a=>{const d=a[0],l=a.slice(1),c=parseFloat(l);isNaN(c)||(r[d]=c)}),Object.keys(r).length>0&&(this.clearRow(o),this.setRowFromObject(o,r))})}getCellAsObject(t,e){this.isValidCoordinate(t,e);const s=this.COLUMNS[e],n=this.getCellValue(t,e);return n===null?{}:{[s]:n}}getRowAsObject(t){this.isValidRow(t);const e={};return this.COLUMNS.forEach((s,n)=>{const o=this.getCellValue(t,n);o!==null&&(e[s]=o)}),e}setRowFromObject(t,e){this.isValidRow(t);for(const s in e){this.isValidColName(s);const n=this.columnIndexMap[s];this.setCellValue(t,n,e[s])}}getObject(){const t=[];for(let e=0;e<this.ROWS;e++){const s={};for(let n=0;n<this.COLUMNS.length;n++){const o=this.getCellValue(e,n);if(o!==null&&o!==""){const r=this.COLUMNS[n];s[r]=o}}Object.keys(s).length>0&&t.push(s)}return t}clearRow(t){const e=new Array(this.COLUMNS.length).fill("");this.setRowValue(t,e)}pushRow(t=1){for(let e=0;e<t;e++)this.cells.push(new Array(this.COLUMNS.length).fill("")),this.ROWS++}popRow(t=1){for(let e=0;e<t;e++)this.cells.pop(),this.ROWS--}pushOrPopRow(t=0){t>=0?this.pushRow(t):this.popRow(Math.abs(t))}clearAllRow(){for(let t=0;t<this.ROWS;t++)this.clearRow(t)}toMap(t=this.getObject(),e=this.COLUMNS){return t.map(s=>{const n=new Map;return e.forEach(o=>{n.set(o,s[o])}),n})}toString(){return this.toMap().map(e=>[...e].filter(s=>s[1]!==void 0).map(s=>[s[0],h.roundNumber(s[1])]).map(s=>s.join("")).flat().join(" ")).join(`
`)}toArray(){return this.cells}isValidCoordinate(t,e){this.isValidRow(t),this.isValidCol(e)}isValidRow(t){if(!(t>=0&&t<this.ROWS&&t<this.cells.length))throw new Error(`#ERROR: Invalid row index (${t})`)}isValidCol(t){if(!(t>=0&&t<this.COLUMNS.length&&t<this.cells[0].length))throw new Error(`#ERROR: Invalid col index (${t})`)}isValidColName(t){if(!(t in this.columnIndexMap))throw new Error(`#ERROR: Invalid col name (${t})`)}}let q=class extends Y{constructor(t=["G","X","Z","U","W","A","C","R"],e=10,s=`G00 X94. Z1.
      G1 Z0.02
      A90.
      X98.1 Z-2.8 A15. R0.5
      Z-45.`){super(t,e),this.setCellsFromString(s)}normalizeToObject(){const t=this.getObject(),e={G:void 0,X:void 0,Z:void 0,U:void 0,W:void 0},s=Object.assign({},e),n=Object.assign({},e);for(let o=0;o<t.length;o++){if(o==0){Object.assign(s,t[o]);continue}Object.assign(n,e,t[o]),"GXZ".split("").forEach(r=>{n[r]===void 0&&(t[o][r]=s[r])}),n.U!==void 0?(t[o].X=Number(s.X+n.U),delete t[o].U):n.W!==void 0&&(t[o].Z=Number(s.Z+n.W),delete t[o].W),Object.assign(s,t[o])}return t}normalize(){return this.normalizeToObject().forEach((t,e)=>{this.clearRow(e),this.setRowFromObject(e,t)}),this}unnormalizeToObject(t=this.getObject()){const e=["G","X","Z"],s=Object.fromEntries(e.map(o=>[o,-99999])),n=Object.fromEntries(e.map(o=>[o,void 0]));for(let o=0;o<t.length;o++)Object.assign(n,t[o]),Object.keys(s).forEach(r=>{e.includes(r)&&n[r]===s[r]&&delete t[o][r]}),Object.assign(s,n);return t}unnormalize(){return this.unnormalizeToObject().forEach((t,e)=>{this.clearRow(e),this.setRowFromObject(e,t)}),this}reverseG123Path(){let t=this.toG123().normalize().cells.toReversed();if(!t||t.length===0)return;t=h.transposeMatrix(t);const e=this.COLUMNS.findIndex(n=>n==="G"),s=this.COLUMNS.findIndex(n=>n==="R");return t[e]=t[e].map(n=>{switch(n){case"2":return"3";case"3":return"2";default:return n}}),t[e]=h.shiftFirst(t[e],1),t[s]=h.shiftFirst(t[s],1),t=h.transposeMatrix(t),this.setCellsFromArray(t),this.unnormalize(),this}offsetG123Path(t=0,e=0){let s=this.toG123().normalize().cells;if(!s||s.length===0)return;s=h.transposeMatrix(s);const n=this.COLUMNS.findIndex(i=>i==="X"),o=this.COLUMNS.findIndex(i=>i==="Z"),r=[n,o];for(let i=0;i<s.length;i++){if(!r.includes(i))continue;let a=0;i===n&&(a=t),i===o&&(a=e);const d=s[i];s[i]=d.map(l=>l.trim()!==""&&h.isNumber(Number(l))?(Number(l)+a).toString():l)}return s=h.transposeMatrix(s),this.setCellsFromArray(s),this.unnormalize(),this}scalerG123Path(t=1,e=!1){let s=this.toG123().normalize().cells;if(!s||s.length===0)return;s=h.transposeMatrix(s);const n=this.COLUMNS.findIndex(i=>i==="G"),o=this.COLUMNS.findIndex(i=>i==="A"),r=[n,o];for(let i=0;i<s.length;i++){if(r.includes(i))continue;const a=s[i];s[i]=a.map(d=>d.trim()!==""&&h.isNumber(Number(d))?(Number(d)*t).toString():d)}return s=h.transposeMatrix(s),this.setCellsFromArray(s),e||this.unnormalize(),this}crcG123Path(t=0,e=0){}toSvg(t=1){const e=this.toG123(!1).scalerG123Path(t,!0).getObject(),s={},n=["M 0 0"],o=(i,a)=>b.fromArrayXZ([i,a]).toArray().join(" "),r={0:i=>`L ${o(i.X,i.Z)}`,1:i=>`L ${o(i.X,i.Z)}`,2:i=>`A ${i.R} ${i.R} 0 0 0 ${o(i.X,i.Z)}`,3:i=>`A ${i.R} ${i.R} 0 0 1 ${o(i.X,i.Z)}`};return e.forEach(i=>{const a=i.G.toString();n.push(r[a](i)),Object.assign(s,i)}),n.push("Z"),n.join(" ")}toThree(t=1){const e=this.toG123(!1).scalerG123Path(t,!0).getObject(),s={},n={G:0,X:0,Z:0},o=[],r=a=>i(a).toArray(),i=a=>new T(a.X,a.Z).toPoint();for(let a=0;a<e.length;a++){Object.assign(s,e[a]),Object.assign(n,e[a-1]);const d=s.G;if(d==0||d==1){const[l,c,m,O]=[...r(n),...r(s)];o.push([d,[l,c,m,O]])}if(d==2||d==3){const l=G.createArcFromTwoPointAndRadius(i(n),i(s),s.R),c=d===2?N.Clockwise:N.CounterClockwise,m=P.Minor,O=G.find(l,m,c);a>65&&console.log(l);const[j,V]=O.center.toArray(),{radius:M,startAngleRad:E,endAngleRad:L}=O,U=O.direction===-1;o.push([d,[j,V,M],E,L,U])}}return o}applyCValueToXAdjustment(t=this.getObject(),e=this.normalizeToObject()){for(let s=0;s<e.length;s++){const n=e[s],o=e[s-1],r=e[s+1];if(n.G===1&&n.C!==void 0){const i={start:b.fromObjectXZ({x:o.X,z:o.Z}),intersection:b.fromObjectXZ({x:n.X,z:n.Z}),end:b.fromObjectXZ({x:r.X,z:r.Z}),length:n.C},a=S.createFillet(i.start,i.intersection,i.end,i.length),d=a[1].start.toObjectXZ(),l=a[1].end.toObjectXZ();e[s]={G:1,X:d.x,Z:d.z},e.splice(s+1,0,Object.assign({G:1,X:l.x,Z:l.z})),t.splice(s+1,0,Object.assign({G:1,X:l.x,Z:l.z})),s++}}return e}applyAValueToAdjustment(t=this.getObject(),e=this.normalizeToObject()){for(let s=0;s<e.length;s++){const n=e[s],o=e[s-1],r=t[s],i=t[s-1];if(e[s+1],r.X===void 0&&r.Z===void 0&&[0,90,180,360,-90,-180,-360].includes(r.A))(r.A==90||r.A==-90)&&(e[s]={G:1,Z:o.Z},t[s]={G:1,Z:o.Z}),(r.A==0||r.A==180||r.A==-180||r.A==360||r.A==-360)&&(e[s]={G:1,X:o.X},t[s]={G:1,X:o.X});else if(n.G===1&&n.A!==void 0){if(r.X===void 0||r.Z===void 0){const a={start:b.fromObjectXZ({x:o.X,z:o.Z}),end:b.fromObjectXZ({x:(r==null?void 0:r.X)||NaN,z:(r==null?void 0:r.Z)||NaN}),angle:n.A},d=S.createLineFromAngle(a.start,a.end,a.angle);d.start.toObjectXZ();const l=d.end.toObjectXZ();e[s]={G:1,X:l.x,Z:l.z}}else if(r.X!==void 0&&r.Z!==void 0){const a={start:b.fromObjectXZ({x:(i==null?void 0:i.X)||NaN,z:(i==null?void 0:i.Z)||NaN}),end:b.fromObjectXZ({x:n.X,z:n.Z}),angle:n.A},d=S.createLineFromAngle(a.start,a.end,a.angle),l=d.start.toObjectXZ();d.end.toObjectXZ(),delete e[s].A,e[s-1]={G:1,X:l.x,Z:l.z}}}}return e}applyRValueToAdjustment(t=this.getObject(),e=this.normalizeToObject()){for(let s=0;s<e.length;s++){const n=e[s],o=e[s-1],r=e[s+1];if(n.G===1&&n.R!==void 0){const i={start:b.fromObjectXZ({x:o.X,z:o.Z}),intersection:b.fromObjectXZ({x:n.X,z:n.Z}),end:b.fromObjectXZ({x:r.X,z:r.Z}),radius:n.R},a=G.createFillet(i.start,i.intersection,i.end,i.radius),d=a.start.toObjectXZ(),l=a.end.toObjectXZ(),c=a.radius,m=a.getGcodeDirection();e[s]={G:1,X:d.x,Z:d.z},e.splice(s+1,0,Object.assign({G:m,X:l.x,Z:l.z,R:c})),t.splice(s+1,0,Object.assign({G:m,X:l.x,Z:l.z,R:c})),s++}}return e}toG123(t=!0){const e=this.getObject(),s=this.normalizeToObject(),n=this.applyCValueToXAdjustment(e,s);return this.applyAValueToAdjustment(e,n),this.applyRValueToAdjustment(e,n),t||this.unnormalizeToObject(n),this.setCellsFromObject(n),this}};const _=["title"],Q=["value"],K={key:1},D=w({__name:"GcodeSpreadsheetWidet",props:{sheet:Object,rowIndex:Number,colIndex:Number},setup(f){const t=f,{sheet:e,rowIndex:s,colIndex:n}=t,o=z(!1),r=A(()=>e==null?void 0:e.getCellValue(s,n)),i=A(()=>e==null?void 0:e.getCellValueRaw(s,n));function a(d){o.value=!1,e==null||e.setCellValue(s,n,d.target.value.trim())}return(d,l)=>(g(),v("div",{class:W(["cell",{edit:o.value}]),title:i.value,onClick:l[1]||(l[1]=c=>o.value=!0)},[o.value?(g(),v("input",{key:0,value:i.value,onChange:a,onBlur:a,onVnodeMounted:l[0]||(l[0]=({el:c})=>c.focus())},null,40,Q)):(g(),v("span",K,X(r.value),1))],10,_))}}),tt=y(D,[["__scopeId","data-v-f748ea90"]]),et={class:"button-container"},st=w({__name:"GcodeSpreadsheet",setup(f){const t=new q,e=t.cells,s=A(()=>e.length),n=t.COLUMNS;I(()=>{window.sheet=t}),J(e,()=>console.log(e),{immediate:!0,deep:!0});const o=()=>{const d="#"+h.utoa(JSON.stringify(e));return history.replaceState({},"",d),d},r=(d=location.hash)=>{const l="eNqLjlYyUNJRsjQBEoZAjIJidaJhggZ6BkbYpNHELEGGIclZWuiBDNA10rOAqzE0hRlpimSErglUGK/59JaJBQBXJzAJ";d.startsWith("#")&&(d=d.slice(1));let c;try{c=JSON.parse(h.atou(d))}catch(m){console.error(m),alert("Failed to load code from URL."),c=JSON.parse(h.atou(l))}console.log(c),t.setCellsFromArray(c)},i=()=>{const d="#"+h.utoa(JSON.stringify(t.toThree()));window.open(location.origin+"/xlathe-vitepress-web2/pages/lathe/GcodeThree.html"+d,"_blank")},a=()=>{navigator.clipboard.readText().then(d=>{t.setCellsFromString(d)})};return(d,l)=>(g(),v(C,null,[l[16]||(l[16]=B("<details data-v-01905f85><summary data-v-01905f85>TODO LIST</summary><dl data-v-01905f85><dt data-v-01905f85>-</dt><dd data-v-01905f85>禁用某单元格</dd><dd data-v-01905f85>单元格状态：新增/修改/删除</dd><dd data-v-01905f85>设置某单元格值</dd><dd data-v-01905f85>某单元格值 &lt;-&gt; Gcode</dd><dd data-v-01905f85>-</dd><dd data-v-01905f85>设置某列值</dd><dd data-v-01905f85>某列值 &lt;-&gt; Gcode</dd><dd data-v-01905f85>-</dd><dd data-v-01905f85>[-]G1-ACR &lt;-&gt; G1/2/3</dd><dd data-v-01905f85>[-]紧凑型 G1/2/3</dd><dd data-v-01905f85>[+]G1/2/3 -&gt; GibbsCAM AptCL</dd><dd data-v-01905f85>[-]反转 G1/2/3</dd><dd data-v-01905f85>[-]toSVG</dd><dd data-v-01905f85>[-]偏移</dd><dd data-v-01905f85>[-]保持 HASH</dd><dd data-v-01905f85>[-]读取 HASH</dd><dd data-v-01905f85>[-]归一化</dd><dd data-v-01905f85>[-]去归一化</dd><dd data-v-01905f85>[+]操作列表</dd><dd data-v-01905f85>[+]尺寸输入框</dd><dd data-v-01905f85>[-]缩放，公制/英制</dd><dd data-v-01905f85>[-]平移</dd><dd data-v-01905f85>[-]显示路径</dd><dd data-v-01905f85>[-]粘贴</dd><dd data-v-01905f85>[+]机器锥度调整，根据机器 X/Z 锥度，自动添加 U/W</dd><dd data-v-01905f85>[+]刀尖半径补偿</dd><dd data-v-01905f85>-</dd><dd data-v-01905f85>表达式输入逻辑：两空格进行中差计算，$进行单元格数据引用，</dd></dl></details>",1)),u("div",et,[u("input",{type:"button",onClick:l[0]||(l[0]=c=>p(t).pushRow()),value:"增加行"}),u("input",{type:"button",onClick:l[1]||(l[1]=c=>p(t).popRow()),value:"删除行"}),u("input",{type:"button",onClick:l[2]||(l[2]=c=>p(t).clearAllRow()),value:"清除所有行内容"}),u("input",{type:"button",onClick:l[3]||(l[3]=c=>p(t).toG123()),value:"转为 G123 代码"}),u("input",{type:"button",onClick:l[4]||(l[4]=c=>p(t).reverseG123Path()),value:"逆转 G123 代码"}),u("input",{type:"button",onClick:l[5]||(l[5]=c=>p(t).scalerG123Path()),value:"缩放 G123 代码"}),u("input",{type:"button",onClick:l[6]||(l[6]=c=>p(t).offsetG123Path()),value:"偏移 G123 代码"}),u("input",{type:"button",onClick:l[7]||(l[7]=c=>p(t).crcG123Path()),value:"刀尖半径补偿 G123 代码"}),l[14]||(l[14]=u("input",{type:"button",click:"#",value:"机器锥度调整",disabled:""},null,-1)),u("input",{type:"button",onClick:l[8]||(l[8]=c=>p(t).normalize()),value:"归一化 代码"}),u("input",{type:"button",onClick:l[9]||(l[9]=c=>p(t).unnormalize()),value:"反归一化 代码"}),u("input",{type:"button",onClick:l[10]||(l[10]=c=>i()),value:"显示 G123 代码"}),u("input",{type:"button",onClick:l[11]||(l[11]=c=>a()),value:"从剪贴板粘贴"}),u("input",{type:"button",onClick:l[12]||(l[12]=c=>o()),value:"转为 HASH"}),u("input",{type:"button",onClick:l[13]||(l[13]=c=>r()),value:"从 HASH 读取"})]),u("table",null,[u("thead",null,[u("tr",null,[l[15]||(l[15]=u("th",null,null,-1)),(g(!0),v(C,null,Z(p(n),c=>(g(),v("th",null,X(c),1))),256))])]),u("tbody",null,[(g(!0),v(C,null,Z(Array(s.value),(c,m)=>(g(),v("tr",null,[u("th",null,X(m),1),(g(!0),v(C,null,Z(p(n),(O,j)=>(g(),v("td",null,[x(tt,{sheet:p(t),"row-index":m,"col-index":j},null,8,["sheet","row-index","col-index"])]))),256))]))),256))])])],64))}}),nt=y(st,[["__scopeId","data-v-01905f85"]]),dt=JSON.parse('{"title":"GcodeSpreadsheet","description":"","frontmatter":{},"headers":[],"relativePath":"pages/lathe/GcodeSpreadsheet.md","filePath":"pages/lathe/GcodeSpreadsheet.md"}'),ot={name:"pages/lathe/GcodeSpreadsheet.md"},ct=Object.assign(ot,{setup(f){return(t,e)=>(g(),v("div",{"data-pagefind-body":!0},[e[0]||(e[0]=u("h1",{id:"gcodespreadsheet",tabindex:"-1"},[H("GcodeSpreadsheet "),u("a",{class:"header-anchor",href:"#gcodespreadsheet","aria-label":'Permalink to "GcodeSpreadsheet"'},"​")],-1)),e[1]||(e[1]=u("p",null,"This is a GcodeSpreadsheet component.",-1)),x(nt)]))}});export{dt as __pageData,ct as default};