import{a as pr,A as vr,L as lr,P as Ur}from"./Geometry.Cml7QXvO.js";var S=Uint8Array,W=Uint16Array,Cr=Int32Array,ur=new S([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),cr=new S([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Ar=new S([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),kr=function(a,r){for(var e=new W(31),n=0;n<31;++n)e[n]=r+=1<<a[n-1];for(var t=new Cr(e[30]),n=1;n<30;++n)for(var i=e[n];i<e[n+1];++i)t[i]=i-e[n]<<5|n;return{b:e,r:t}},Fr=kr(ur,2),Or=Fr.b,Mr=Fr.r;Or[28]=258,Mr[258]=28;var zr=kr(cr,0),qr=zr.b,xr=zr.r,Tr=new W(32768);for(var y=0;y<32768;++y){var X=(y&43690)>>1|(y&21845)<<1;X=(X&52428)>>2|(X&13107)<<2,X=(X&61680)>>4|(X&3855)<<4,Tr[y]=((X&65280)>>8|(X&255)<<8)>>1}var H=function(a,r,e){for(var n=a.length,t=0,i=new W(r);t<n;++t)a[t]&&++i[a[t]-1];var o=new W(r);for(t=1;t<r;++t)o[t]=o[t-1]+i[t-1]<<1;var l;if(e){l=new W(1<<r);var c=15-r;for(t=0;t<n;++t)if(a[t])for(var s=t<<4|a[t],f=r-a[t],v=o[a[t]-1]++<<f,h=v|(1<<f)-1;v<=h;++v)l[Tr[v]>>c]=s}else for(l=new W(n),t=0;t<n;++t)a[t]&&(l[t]=Tr[o[a[t]-1]++]>>15-a[t]);return l},Y=new S(288);for(var y=0;y<144;++y)Y[y]=8;for(var y=144;y<256;++y)Y[y]=9;for(var y=256;y<280;++y)Y[y]=7;for(var y=280;y<288;++y)Y[y]=8;var fr=new S(32);for(var y=0;y<32;++y)fr[y]=5;var Zr=H(Y,9,0),$r=H(Y,9,1),Gr=H(fr,5,0),Hr=H(fr,5,1),wr=function(a){for(var r=a[0],e=1;e<a.length;++e)a[e]>r&&(r=a[e]);return r},$=function(a,r,e){var n=r/8|0;return(a[n]|a[n+1]<<8)>>(r&7)&e},yr=function(a,r){var e=r/8|0;return(a[e]|a[e+1]<<8|a[e+2]<<16)>>(r&7)},br=function(a){return(a+7)/8|0},hr=function(a,r,e){return(r==null||r<0)&&(r=0),(e==null||e>a.length)&&(e=a.length),new S(a.subarray(r,e))},Jr=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],q=function(a,r,e){var n=new Error(r||Jr[a]);if(n.code=a,Error.captureStackTrace&&Error.captureStackTrace(n,q),!e)throw n;return n},Kr=function(a,r,e,n){var t=a.length,i=0;if(!t||r.f&&!r.l)return e||new S(0);var o=!e,l=o||r.i!=2,c=r.i;o&&(e=new S(t*3));var s=function(nr){var ar=e.length;if(nr>ar){var rr=new S(Math.max(ar*2,nr));rr.set(e),e=rr}},f=r.f||0,v=r.p||0,h=r.b||0,w=r.l,R=r.d,m=r.m,k=r.n,Z=t*8;do{if(!w){f=$(a,v,1);var z=$(a,v+1,3);if(v+=3,z)if(z==1)w=$r,R=Hr,m=9,k=5;else if(z==2){var E=$(a,v,31)+257,b=$(a,v+10,15)+4,g=E+$(a,v+5,31)+1;v+=14;for(var u=new S(g),p=new S(19),T=0;T<b;++T)p[Ar[T]]=$(a,v+T*3,7);v+=b*3;for(var d=wr(p),Q=(1<<d)-1,D=H(p,d,1),T=0;T<g;){var F=D[$(a,v,Q)];v+=F&15;var C=F>>4;if(C<16)u[T++]=C;else{var x=0,A=0;for(C==16?(A=3+$(a,v,3),v+=2,x=u[T-1]):C==17?(A=3+$(a,v,7),v+=3):C==18&&(A=11+$(a,v,127),v+=7);A--;)u[T++]=x}}var O=u.subarray(0,E),P=u.subarray(E);m=wr(O),k=wr(P),w=H(O,m,1),R=H(P,k,1)}else q(1);else{var C=br(v)+4,N=a[C-4]|a[C-3]<<8,I=C+N;if(I>t){c&&q(0);break}l&&s(h+N),e.set(a.subarray(C,I),h),r.b=h+=N,r.p=v=I*8,r.f=f;continue}if(v>Z){c&&q(0);break}}l&&s(h+131072);for(var er=(1<<m)-1,U=(1<<k)-1,J=v;;J=v){var x=w[yr(a,v)&er],B=x>>4;if(v+=x&15,v>Z){c&&q(0);break}if(x||q(2),B<256)e[h++]=B;else if(B==256){J=v,w=null;break}else{var V=B-254;if(B>264){var T=B-257,M=ur[T];V=$(a,v,(1<<M)-1)+Or[T],v+=M}var G=R[yr(a,v)&U],_=G>>4;G||q(3),v+=G&15;var P=qr[_];if(_>3){var M=cr[_];P+=yr(a,v)&(1<<M)-1,v+=M}if(v>Z){c&&q(0);break}l&&s(h+131072);var j=h+V;if(h<P){var or=i-P,sr=Math.min(P,j);for(or+h<0&&q(3);h<sr;++h)e[h]=n[or+h]}for(;h<j;++h)e[h]=e[h-P]}}r.l=w,r.p=J,r.b=h,r.f=f,w&&(f=1,r.m=m,r.d=R,r.n=k)}while(!f);return h!=e.length&&o?hr(e,0,h):e.subarray(0,h)},K=function(a,r,e){e<<=r&7;var n=r/8|0;a[n]|=e,a[n+1]|=e>>8},tr=function(a,r,e){e<<=r&7;var n=r/8|0;a[n]|=e,a[n+1]|=e>>8,a[n+2]|=e>>16},mr=function(a,r){for(var e=[],n=0;n<a.length;++n)a[n]&&e.push({s:n,f:a[n]});var t=e.length,i=e.slice();if(!t)return{t:Br,l:0};if(t==1){var o=new S(e[0].s+1);return o[e[0].s]=1,{t:o,l:1}}e.sort(function(I,E){return I.f-E.f}),e.push({s:-1,f:25001});var l=e[0],c=e[1],s=0,f=1,v=2;for(e[0]={s:-1,f:l.f+c.f,l,r:c};f!=t-1;)l=e[e[s].f<e[v].f?s++:v++],c=e[s!=f&&e[s].f<e[v].f?s++:v++],e[f++]={s:-1,f:l.f+c.f,l,r:c};for(var h=i[0].s,n=1;n<t;++n)i[n].s>h&&(h=i[n].s);var w=new W(h+1),R=Sr(e[f-1],w,0);if(R>r){var n=0,m=0,k=R-r,Z=1<<k;for(i.sort(function(E,b){return w[b.s]-w[E.s]||E.f-b.f});n<t;++n){var z=i[n].s;if(w[z]>r)m+=Z-(1<<R-w[z]),w[z]=r;else break}for(m>>=k;m>0;){var C=i[n].s;w[C]<r?m-=1<<r-w[C]++-1:++n}for(;n>=0&&m;--n){var N=i[n].s;w[N]==r&&(--w[N],++m)}R=r}return{t:new S(w),l:R}},Sr=function(a,r,e){return a.s==-1?Math.max(Sr(a.l,r,e+1),Sr(a.r,r,e+1)):r[a.s]=e},Pr=function(a){for(var r=a.length;r&&!a[--r];);for(var e=new W(++r),n=0,t=a[0],i=1,o=function(c){e[n++]=c},l=1;l<=r;++l)if(a[l]==t&&l!=r)++i;else{if(!t&&i>2){for(;i>138;i-=138)o(32754);i>2&&(o(i>10?i-11<<5|28690:i-3<<5|12305),i=0)}else if(i>3){for(o(t),--i;i>6;i-=6)o(8304);i>2&&(o(i-3<<5|8208),i=0)}for(;i--;)o(t);i=1,t=a[l]}return{c:e.subarray(0,n),n:r}},ir=function(a,r){for(var e=0,n=0;n<r.length;++n)e+=a[n]*r[n];return e},Dr=function(a,r,e){var n=e.length,t=br(r+2);a[t]=n&255,a[t+1]=n>>8,a[t+2]=a[t]^255,a[t+3]=a[t+1]^255;for(var i=0;i<n;++i)a[t+i+4]=e[i];return(t+4+n)*8},Ir=function(a,r,e,n,t,i,o,l,c,s,f){K(r,f++,e),++t[256];for(var v=mr(t,15),h=v.t,w=v.l,R=mr(i,15),m=R.t,k=R.l,Z=Pr(h),z=Z.c,C=Z.n,N=Pr(m),I=N.c,E=N.n,b=new W(19),g=0;g<z.length;++g)++b[z[g]&31];for(var g=0;g<I.length;++g)++b[I[g]&31];for(var u=mr(b,7),p=u.t,T=u.l,d=19;d>4&&!p[Ar[d-1]];--d);var Q=s+5<<3,D=ir(t,Y)+ir(i,fr)+o,F=ir(t,h)+ir(i,m)+o+14+3*d+ir(b,p)+2*b[16]+3*b[17]+7*b[18];if(c>=0&&Q<=D&&Q<=F)return Dr(r,f,a.subarray(c,c+s));var x,A,O,P;if(K(r,f,1+(F<D)),f+=2,F<D){x=H(h,w,0),A=h,O=H(m,k,0),P=m;var er=H(p,T,0);K(r,f,C-257),K(r,f+5,E-1),K(r,f+10,d-4),f+=14;for(var g=0;g<d;++g)K(r,f+3*g,p[Ar[g]]);f+=3*d;for(var U=[z,I],J=0;J<2;++J)for(var B=U[J],g=0;g<B.length;++g){var V=B[g]&31;K(r,f,er[V]),f+=p[V],V>15&&(K(r,f,B[g]>>5&127),f+=B[g]>>12)}}else x=Zr,A=Y,O=Gr,P=fr;for(var g=0;g<l;++g){var M=n[g];if(M>255){var V=M>>18&31;tr(r,f,x[V+257]),f+=A[V+257],V>7&&(K(r,f,M>>23&31),f+=ur[V]);var G=M&31;tr(r,f,O[G]),f+=P[G],G>3&&(tr(r,f,M>>5&8191),f+=cr[G])}else tr(r,f,x[M]),f+=A[M]}return tr(r,f,x[256]),f+A[256]},Lr=new Cr([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Br=new S(0),Qr=function(a,r,e,n,t,i){var o=i.z||a.length,l=new S(n+o+5*(1+Math.ceil(o/7e3))+t),c=l.subarray(n,l.length-t),s=i.l,f=(i.r||0)&7;if(r){f&&(c[0]=i.r>>3);for(var v=Lr[r-1],h=v>>13,w=v&8191,R=(1<<e)-1,m=i.p||new W(32768),k=i.h||new W(R+1),Z=Math.ceil(e/3),z=2*Z,C=function(gr){return(a[gr]^a[gr+1]<<Z^a[gr+2]<<z)&R},N=new Cr(25e3),I=new W(288),E=new W(32),b=0,g=0,u=i.i||0,p=0,T=i.w||0,d=0;u+2<o;++u){var Q=C(u),D=u&32767,F=k[Q];if(m[D]=F,k[Q]=D,T<=u){var x=o-u;if((b>7e3||p>24576)&&(x>423||!s)){f=Ir(a,c,0,N,I,E,g,p,d,u-d,f),p=b=g=0,d=u;for(var A=0;A<286;++A)I[A]=0;for(var A=0;A<30;++A)E[A]=0}var O=2,P=0,er=w,U=D-F&32767;if(x>2&&Q==C(u-U))for(var J=Math.min(h,x)-1,B=Math.min(32767,u),V=Math.min(258,x);U<=B&&--er&&D!=F;){if(a[u+O]==a[u+O-U]){for(var M=0;M<V&&a[u+M]==a[u+M-U];++M);if(M>O){if(O=M,P=U,M>J)break;for(var G=Math.min(U,M-2),_=0,A=0;A<G;++A){var j=u-U+A&32767,or=m[j],sr=j-or&32767;sr>_&&(_=sr,F=j)}}}D=F,F=m[D],U+=D-F&32767}if(P){N[p++]=268435456|Mr[O]<<18|xr[P];var nr=Mr[O]&31,ar=xr[P]&31;g+=ur[nr]+cr[ar],++I[257+nr],++E[ar],T=u+O,++b}else N[p++]=a[u],++I[a[u]]}}for(u=Math.max(u,T);u<o;++u)N[p++]=a[u],++I[a[u]];f=Ir(a,c,s,N,I,E,g,p,d,u-d,f),s||(i.r=f&7|c[f/8|0]<<3,f-=7,i.h=k,i.p=m,i.i=u,i.w=T)}else{for(var u=i.w||0;u<o+s;u+=65535){var rr=u+65535;rr>=o&&(c[f/8|0]=s,rr=o),f=Dr(c,f+1,a.subarray(u,rr))}i.i=o}return hr(l,0,n+br(f)+t)},Vr=function(){var a=1,r=0;return{p:function(e){for(var n=a,t=r,i=e.length|0,o=0;o!=i;){for(var l=Math.min(o+2655,i);o<l;++o)t+=n+=e[o];n=(n&65535)+15*(n>>16),t=(t&65535)+15*(t>>16)}a=n,r=t},d:function(){return a%=65521,r%=65521,(a&255)<<24|(a&65280)<<8|(r&255)<<8|r>>8}}},Xr=function(a,r,e,n,t){if(!t&&(t={l:1},r.dictionary)){var i=r.dictionary.subarray(-32768),o=new S(i.length+a.length);o.set(i),o.set(a,i.length),a=o,t.w=i.length}return Qr(a,r.level==null?6:r.level,r.mem==null?t.l?Math.ceil(Math.max(8,Math.min(13,Math.log(a.length)))*1.5):20:12+r.mem,e,n,t)},Wr=function(a,r,e){for(;e;++r)a[r]=e,e>>>=8},Yr=function(a,r){var e=r.level,n=e==0?0:e<6?1:e==9?3:2;if(a[0]=120,a[1]=n<<6|(r.dictionary&&32),a[1]|=31-(a[0]<<8|a[1])%31,r.dictionary){var t=Vr();t.p(r.dictionary),Wr(a,2,t.d())}},_r=function(a,r){return((a[0]&15)!=8||a[0]>>4>7||(a[0]<<8|a[1])%31)&&q(6,"invalid zlib data"),(a[1]>>5&1)==+!r&&q(6,"invalid zlib data: "+(a[1]&32?"need":"unexpected")+" dictionary"),(a[1]>>3&4)+2};function jr(a,r){r||(r={});var e=Vr();e.p(a);var n=Xr(a,r,r.dictionary?6:2,4);return Yr(n,r),Wr(n,n.length-4,e.d()),n}function re(a,r){return Kr(a.subarray(_r(a,r),-4),{i:2},r,r)}var dr=typeof TextEncoder<"u"&&new TextEncoder,Rr=typeof TextDecoder<"u"&&new TextDecoder,ee=0;try{Rr.decode(Br,{stream:!0}),ee=1}catch{}var ne=function(a){for(var r="",e=0;;){var n=a[e++],t=(n>127)+(n>223)+(n>239);if(e+t>a.length)return{s:r,r:hr(a,e-1)};t?t==3?(n=((n&15)<<18|(a[e++]&63)<<12|(a[e++]&63)<<6|a[e++]&63)-65536,r+=String.fromCharCode(55296|n>>10,56320|n&1023)):t&1?r+=String.fromCharCode((n&31)<<6|a[e++]&63):r+=String.fromCharCode((n&15)<<12|(a[e++]&63)<<6|a[e++]&63):r+=String.fromCharCode(n)}};function Nr(a,r){if(r){for(var e=new S(a.length),n=0;n<a.length;++n)e[n]=a.charCodeAt(n);return e}if(dr)return dr.encode(a);for(var t=a.length,i=new S(a.length+(a.length>>1)),o=0,l=function(f){i[o++]=f},n=0;n<t;++n){if(o+5>i.length){var c=new S(o+8+(t-n<<1));c.set(i),i=c}var s=a.charCodeAt(n);s<128||r?l(s):s<2048?(l(192|s>>6),l(128|s&63)):s>55295&&s<57344?(s=65536+(s&1047552)|a.charCodeAt(++n)&1023,l(240|s>>18),l(128|s>>12&63),l(128|s>>6&63),l(128|s&63)):(l(224|s>>12),l(128|s>>6&63),l(128|s&63))}return hr(i,0,o)}function Er(a,r){if(r){for(var e="",n=0;n<a.length;n+=16384)e+=String.fromCharCode.apply(null,a.subarray(n,n+16384));return e}else{if(Rr)return Rr.decode(a);var t=ne(a),i=t.s,e=t.r;return e.length&&q(8),i}}class L{static isType(r,e){return Object.prototype.toString.call(r)===`[object ${e}]`}static isNumber(r){return this.isType(r,"Number")&&!Number.isNaN(r)}static isString(r){return this.isType(r,"String")}static isBoolean(r){return this.isType(r,"Boolean")}static isArray(r){return this.isType(r,"Array")}static isObject(r){return this.isType(r,"Object")}static isRegExp(r){return this.isType(r,"RegExp")}static isUndefined(r){return this.isType(r,"Undefined")}static isNull(r){return this.isType(r,"Null")}static degreesToRadians(r){return r*Math.PI/180}static radiansToDegrees(r){return r*(180/Math.PI)}static parseBinary(r){return parseInt(r,2)}static toBinaryString(r){return r.toString(2)}static roundNumber(r,e=5){if(this.isNumber(r)){const n=Math.pow(10,e);return Math.round(r*n)/n}return r}static formatStringOrBoolean(r){return typeof r=="string"||typeof r=="boolean"?r.toString().toUpperCase():r}static deepCopy(r,e=new WeakMap){if(r===null||typeof r!="object")return r;if(e.has(r))return e.get(r);if(Array.isArray(r)){const n=[];e.set(r,n);for(let t=0;t<r.length;t++)n[t]=this.deepCopy(r[t],e);return n}if(this.isObject(r)||r instanceof Date||r instanceof RegExp){const n={};e.set(r,n);for(const t in r)r.hasOwnProperty(t)&&(n[t]=this.deepCopy(r[t],e));return n}throw new Error("Unable to copy object! Its type isn't supported.")}static transposeMatrix(r){if(r.length!==0)return r[0].map((e,n)=>r.map(t=>t[n]))}static shiftFirst(r,e){const n=r.slice();e=e%r.length;for(let t=0;t<e;t++){const i=n.pop();n.unshift(i)}return n}static processNumbeer(r,e=!1,n=t=>t){if(this.isNumber(r))return n(r);if(this.isString(r)&&r.trim()!==""&&this.isNumber(Number(r)))return n(Number(r)).toString();if(this.isArray(r))return r.map(t=>this.processNumbeer(t,e,n));if(this.isObject(r)&&r!==null){const t={};for(const i in r)r.hasOwnProperty(i)&&(t[i]=this.processNumbeer(r[i],e,n));return t}return r}static intersection(...r){return r.reduce((e,n)=>e.filter(t=>n.includes(t)))}static union(...r){return[...new Set(r.flat())]}static difference(...r){const[e,...n]=r;return e.filter(t=>!n.some(i=>i.includes(t)))}static utoa(r){const e=Nr(r),n=jr(e,{level:9}),t=Er(n,!0);return btoa(t)}static atou(r){const e=atob(r);if(e.startsWith("xÚ")){const n=Nr(e,!0),t=re(n);return Er(t)}return decodeURIComponent(escape(e))}static arcMirror(r,e){const n=r.center.mirror(e),t=r.start.mirror(e),i=r.end.mirror(e),o=r.radius,l=r.direction===pr.CounterClockwise?1:0;let c=n.toVector(t).angleRad()+Math.PI*2*l,s=n.toVector(i).angleRad();return Math.abs(s-c)>=Math.PI&&r.direction===pr.Clockwise&&(c+=Math.PI*2,s+=Math.PI*2),new vr(t,i,n,o,c,s)}static complementary(r){const e=r.startAngleRad,n=r.endAngleRad,t=L.complementary__(e,n).map(i=>L.degreesToRadians(i));return new vr(r.start,r.end,r.center,r.radius,t[0],t[1])}static complementary__(r,e){const n=Math.PI*2,t=e-r,i=Math.sign(t),o=(n-Math.abs(t))*i,l=e==0?n:e,c=l+o;let s=[l,c];return s.every(f=>f<0)&&(s=s.map(f=>f+n)),s.every(f=>f>=n)&&(s=s.map(f=>f%n)),s.map(f=>L.radiansToDegrees(f))}static reverseDirection(r){const e=r.startAngleRad,n=r.endAngleRad,t=L.reverseDirection__(e,n).map(i=>L.degreesToRadians(i));return new vr(r.start,r.end,r.center,r.radius,t[0],t[1])}static reverseDirection__(r,e){const n=Math.PI*2,t=e-r,o=Math.sign(t)*-1;let s=[e,r];return s.some(f=>f<0||f>n)&&(s=s.map(f=>f+n*o)),s.some(f=>f>=2*n)&&(s=s.map(f=>f%n).map(f=>f===0?n:f)),s.map(f=>L.radiansToDegrees(f))}static getArcAngle(r,e,n){console.log("起始圆弧方向：",e.start.toVector().angleDirection(e.end.toVector())==1?"逆时针":"顺时针");const t=(f,v,h)=>{const w=f.x+v*Math.cos(h),R=f.y+v*Math.sin(h);return new Ur(w,R)};let i=new lr(r,e.start).angleRad,o=new lr(r,e.end).angleRad;const l=t(r,n,i),c=t(r,n,o);return new lr(r,e.start).toVector().angleTo(new lr(r,e.end).toVector())<0&&(i+=Math.PI),new vr(l,c,r,n,i,o)}static isApproximatelyZero(r){return Math.abs(r)<Number.EPSILON}static normalizeArcAngle(r,e,n){const t=Math.PI*2;let i=[r,e].map(o=>L.degreesToRadians(o));return i=i.map(o=>o<0?o+t:o),i.map(o=>L.radiansToDegrees(o))}}export{L as U};
