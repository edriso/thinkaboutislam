import{a as e,g as t,n,r,y as i}from"./usePageTitle-CMqnEsDC.js";import{S as a,_ as o,g as s,h as c,m as l,o as u,u as d,v as f}from"./index-BCa78KLH.js";var p=e(`rotate-ccw`,[[`path`,{d:`M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8`,key:`1357e3`}],[`path`,{d:`M3 3v5h5`,key:`1xhq8a`}]]),m=i(t(),1),h=n(),g=Symbol.for(`yaml.alias`),_=Symbol.for(`yaml.document`),v=Symbol.for(`yaml.map`),y=Symbol.for(`yaml.pair`),b=Symbol.for(`yaml.scalar`),x=Symbol.for(`yaml.seq`),S=Symbol.for(`yaml.node.type`),C=e=>!!e&&typeof e==`object`&&e[S]===g,ee=e=>!!e&&typeof e==`object`&&e[S]===_,te=e=>!!e&&typeof e==`object`&&e[S]===v,w=e=>!!e&&typeof e==`object`&&e[S]===y,T=e=>!!e&&typeof e==`object`&&e[S]===b,ne=e=>!!e&&typeof e==`object`&&e[S]===x;function E(e){if(e&&typeof e==`object`)switch(e[S]){case v:case x:return!0}return!1}function D(e){if(e&&typeof e==`object`)switch(e[S]){case g:case v:case b:case x:return!0}return!1}var re=e=>(T(e)||E(e))&&!!e.anchor,O=Symbol(`break visit`),ie=Symbol(`skip children`),ae=Symbol(`remove node`);function k(e,t){let n=oe(t);ee(e)?A(null,e.contents,n,Object.freeze([e]))===ae&&(e.contents=null):A(null,e,n,Object.freeze([]))}k.BREAK=O,k.SKIP=ie,k.REMOVE=ae;function A(e,t,n,r){let i=se(e,t,n,r);if(D(i)||w(i))return ce(e,r,i),A(e,i,n,r);if(typeof i!=`symbol`){if(E(t)){r=Object.freeze(r.concat(t));for(let e=0;e<t.items.length;++e){let i=A(e,t.items[e],n,r);if(typeof i==`number`)e=i-1;else if(i===O)return O;else i===ae&&(t.items.splice(e,1),--e)}}else if(w(t)){r=Object.freeze(r.concat(t));let e=A(`key`,t.key,n,r);if(e===O)return O;e===ae&&(t.key=null);let i=A(`value`,t.value,n,r);if(i===O)return O;i===ae&&(t.value=null)}}return i}function oe(e){return typeof e==`object`&&(e.Collection||e.Node||e.Value)?Object.assign({Alias:e.Node,Map:e.Node,Scalar:e.Node,Seq:e.Node},e.Value&&{Map:e.Value,Scalar:e.Value,Seq:e.Value},e.Collection&&{Map:e.Collection,Seq:e.Collection},e):e}function se(e,t,n,r){if(typeof n==`function`)return n(e,t,r);if(te(t))return n.Map?.(e,t,r);if(ne(t))return n.Seq?.(e,t,r);if(w(t))return n.Pair?.(e,t,r);if(T(t))return n.Scalar?.(e,t,r);if(C(t))return n.Alias?.(e,t,r)}function ce(e,t,n){let r=t[t.length-1];if(E(r))r.items[e]=n;else if(w(r))e===`key`?r.key=n:r.value=n;else if(ee(r))r.contents=n;else{let e=C(r)?`alias`:`scalar`;throw Error(`Cannot replace node with ${e} parent`)}}var le={"!":`%21`,",":`%2C`,"[":`%5B`,"]":`%5D`,"{":`%7B`,"}":`%7D`},ue=e=>e.replace(/[!,[\]{}]/g,e=>le[e]),j=class e{constructor(t,n){this.docStart=null,this.docEnd=!1,this.yaml=Object.assign({},e.defaultYaml,t),this.tags=Object.assign({},e.defaultTags,n)}clone(){let t=new e(this.yaml,this.tags);return t.docStart=this.docStart,t}atDocument(){let t=new e(this.yaml,this.tags);switch(this.yaml.version){case`1.1`:this.atNextDocument=!0;break;case`1.2`:this.atNextDocument=!1,this.yaml={explicit:e.defaultYaml.explicit,version:`1.2`},this.tags=Object.assign({},e.defaultTags)}return t}add(t,n){this.atNextDocument&&=(this.yaml={explicit:e.defaultYaml.explicit,version:`1.1`},this.tags=Object.assign({},e.defaultTags),!1);let r=t.trim().split(/[ \t]+/),i=r.shift();switch(i){case`%TAG`:{if(r.length!==2&&(n(0,`%TAG directive should contain exactly two parts`),r.length<2))return!1;let[e,t]=r;return this.tags[e]=t,!0}case`%YAML`:{if(this.yaml.explicit=!0,r.length!==1)return n(0,`%YAML directive should contain exactly one part`),!1;let[e]=r;if(e===`1.1`||e===`1.2`)return this.yaml.version=e,!0;{let t=/^\d+\.\d+$/.test(e);return n(6,`Unsupported YAML version ${e}`,t),!1}}default:return n(0,`Unknown directive ${i}`,!0),!1}}tagName(e,t){if(e===`!`)return`!`;if(e[0]!==`!`)return t(`Not a valid tag: ${e}`),null;if(e[1]===`<`){let n=e.slice(2,-1);return n===`!`||n===`!!`?(t(`Verbatim tags aren't resolved, so ${e} is invalid.`),null):(e[e.length-1]!==`>`&&t(`Verbatim tags must end with a >`),n)}let[,n,r]=e.match(/^(.*!)([^!]*)$/s);r||t(`The ${e} tag has no suffix`);let i=this.tags[n];if(i)try{return i+decodeURIComponent(r)}catch(e){return t(String(e)),null}return n===`!`?e:(t(`Could not resolve tag: ${e}`),null)}tagString(e){for(let[t,n]of Object.entries(this.tags))if(e.startsWith(n))return t+ue(e.substring(n.length));return e[0]===`!`?e:`!<${e}>`}toString(e){let t=this.yaml.explicit?[`%YAML ${this.yaml.version||`1.2`}`]:[],n=Object.entries(this.tags),r;if(e&&n.length>0&&D(e.contents)){let t={};k(e.contents,(e,n)=>{D(n)&&n.tag&&(t[n.tag]=!0)}),r=Object.keys(t)}else r=[];for(let[i,a]of n)(i!==`!!`||a!==`tag:yaml.org,2002:`)&&(!e||r.some(e=>e.startsWith(a)))&&t.push(`%TAG ${i} ${a}`);return t.join(`
`)}};j.defaultYaml={explicit:!1,version:`1.2`},j.defaultTags={"!!":`tag:yaml.org,2002:`};function de(e){if(/[\x00-\x19\s,[\]{}]/.test(e)){let t=`Anchor must not contain whitespace or control characters: ${JSON.stringify(e)}`;throw Error(t)}return!0}function fe(e){let t=new Set;return k(e,{Value(e,n){n.anchor&&t.add(n.anchor)}}),t}function pe(e,t){for(let n=1;;++n){let r=`${e}${n}`;if(!t.has(r))return r}}function me(e,t){let n=[],r=new Map,i=null;return{onAnchor:r=>{n.push(r),i??=fe(e);let a=pe(t,i);return i.add(a),a},setAnchors:()=>{for(let e of n){let t=r.get(e);if(typeof t==`object`&&t.anchor&&(T(t.node)||E(t.node)))t.node.anchor=t.anchor;else{let t=Error(`Failed to resolve repeated object (this should not happen)`);throw t.source=e,t}}},sourceObjects:r}}function M(e,t,n,r){if(r&&typeof r==`object`){if(Array.isArray(r))for(let t=0,n=r.length;t<n;++t){let n=r[t],i=M(e,r,String(t),n);i===void 0?delete r[t]:i!==n&&(r[t]=i)}else if(r instanceof Map)for(let t of Array.from(r.keys())){let n=r.get(t),i=M(e,r,t,n);i===void 0?r.delete(t):i!==n&&r.set(t,i)}else if(r instanceof Set)for(let t of Array.from(r)){let n=M(e,r,t,t);n===void 0?r.delete(t):n!==t&&(r.delete(t),r.add(n))}else for(let[t,n]of Object.entries(r)){let i=M(e,r,t,n);i===void 0?delete r[t]:i!==n&&(r[t]=i)}}return e.call(t,n,r)}function N(e,t,n){if(Array.isArray(e))return e.map((e,t)=>N(e,String(t),n));if(e&&typeof e.toJSON==`function`){if(!n||!re(e))return e.toJSON(t,n);let r={aliasCount:0,count:1,res:void 0};n.anchors.set(e,r),n.onCreate=e=>{r.res=e,delete n.onCreate};let i=e.toJSON(t,n);return n.onCreate&&n.onCreate(i),i}return typeof e==`bigint`&&!n?.keep?Number(e):e}var he=class{constructor(e){Object.defineProperty(this,S,{value:e})}clone(){let e=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return this.range&&(e.range=this.range.slice()),e}toJS(e,{mapAsMap:t,maxAliasCount:n,onAnchor:r,reviver:i}={}){if(!ee(e))throw TypeError(`A document argument is required`);let a={anchors:new Map,doc:e,keep:!0,mapAsMap:t===!0,mapKeyWarned:!1,maxAliasCount:typeof n==`number`?n:100},o=N(this,``,a);if(typeof r==`function`)for(let{count:e,res:t}of a.anchors.values())r(t,e);return typeof i==`function`?M(i,{"":o},``,o):o}},ge=class extends he{constructor(e){super(g),this.source=e,Object.defineProperty(this,"tag",{set(){throw Error(`Alias nodes cannot have tags`)}})}resolve(e,t){if(t?.maxAliasCount===0)throw ReferenceError(`Alias resolution is disabled`);let n;t?.aliasResolveCache?n=t.aliasResolveCache:(n=[],k(e,{Node:(e,t)=>{(C(t)||re(t))&&n.push(t)}}),t&&(t.aliasResolveCache=n));let r;for(let e of n){if(e===this)break;e.anchor===this.source&&(r=e)}return r}toJSON(e,t){if(!t)return{source:this.source};let{anchors:n,doc:r,maxAliasCount:i}=t,a=this.resolve(r,t);if(!a){let e=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw ReferenceError(e)}let o=n.get(a);if(o||=(N(a,null,t),n.get(a)),o?.res===void 0)throw ReferenceError(`This should not happen: Alias anchor was not resolved?`);if(i>=0&&(o.count+=1,o.aliasCount===0&&(o.aliasCount=_e(r,a,n)),o.count*o.aliasCount>i))throw ReferenceError(`Excessive alias count indicates a resource exhaustion attack`);return o.res}toString(e,t,n){let r=`*${this.source}`;if(e){if(de(this.source),e.options.verifyAliasOrder&&!e.anchors.has(this.source)){let e=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw Error(e)}if(e.implicitKey)return`${r} `}return r}};function _e(e,t,n){if(C(t)){let r=t.resolve(e),i=n&&r&&n.get(r);return i?i.count*i.aliasCount:0}if(E(t)){let r=0;for(let i of t.items){let t=_e(e,i,n);t>r&&(r=t)}return r}if(w(t)){let r=_e(e,t.key,n),i=_e(e,t.value,n);return Math.max(r,i)}return 1}var ve=e=>!e||typeof e!=`function`&&typeof e!=`object`,P=class extends he{constructor(e){super(b),this.value=e}toJSON(e,t){return t?.keep?this.value:N(this.value,e,t)}toString(){return String(this.value)}};P.BLOCK_FOLDED=`BLOCK_FOLDED`,P.BLOCK_LITERAL=`BLOCK_LITERAL`,P.PLAIN=`PLAIN`,P.QUOTE_DOUBLE=`QUOTE_DOUBLE`,P.QUOTE_SINGLE=`QUOTE_SINGLE`;var ye=`tag:yaml.org,2002:`;function be(e,t,n){if(t){let e=n.filter(e=>e.tag===t),r=e.find(e=>!e.format)??e[0];if(!r)throw Error(`Tag ${t} not found`);return r}return n.find(t=>t.identify?.(e)&&!t.format)}function xe(e,t,n){if(ee(e)&&(e=e.contents),D(e))return e;if(w(e)){let t=n.schema[v].createNode?.(n.schema,null,n);return t.items.push(e),t}(e instanceof String||e instanceof Number||e instanceof Boolean||typeof BigInt<`u`&&e instanceof BigInt)&&(e=e.valueOf());let{aliasDuplicateObjects:r,onAnchor:i,onTagObj:a,schema:o,sourceObjects:s}=n,c;if(r&&e&&typeof e==`object`){if(c=s.get(e),c)return c.anchor??(c.anchor=i(e)),new ge(c.anchor);c={anchor:null,node:null},s.set(e,c)}t?.startsWith(`!!`)&&(t=ye+t.slice(2));let l=be(e,t,o.tags);if(!l){if(e&&typeof e.toJSON==`function`&&(e=e.toJSON()),!e||typeof e!=`object`){let t=new P(e);return c&&(c.node=t),t}l=e instanceof Map?o[v]:Symbol.iterator in Object(e)?o[x]:o[v]}a&&(a(l),delete n.onTagObj);let u=l?.createNode?l.createNode(n.schema,e,n):typeof l?.nodeClass?.from==`function`?l.nodeClass.from(n.schema,e,n):new P(e);return t?u.tag=t:l.default||(u.tag=l.tag),c&&(c.node=u),u}function Se(e,t,n){let r=n;for(let e=t.length-1;e>=0;--e){let n=t[e];if(typeof n==`number`&&Number.isInteger(n)&&n>=0){let e=[];e[n]=r,r=e}else r=new Map([[n,r]])}return xe(r,void 0,{aliasDuplicateObjects:!1,keepUndefined:!1,onAnchor:()=>{throw Error(`This should not happen, please report a bug.`)},schema:e,sourceObjects:new Map})}var Ce=e=>e==null||typeof e==`object`&&!!e[Symbol.iterator]().next().done,we=class extends he{constructor(e,t){super(e),Object.defineProperty(this,"schema",{value:t,configurable:!0,enumerable:!1,writable:!0})}clone(e){let t=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return e&&(t.schema=e),t.items=t.items.map(t=>D(t)||w(t)?t.clone(e):t),this.range&&(t.range=this.range.slice()),t}addIn(e,t){if(Ce(e))this.add(t);else{let[n,...r]=e,i=this.get(n,!0);if(E(i))i.addIn(r,t);else if(i===void 0&&this.schema)this.set(n,Se(this.schema,r,t));else throw Error(`Expected YAML collection at ${n}. Remaining path: ${r}`)}}deleteIn(e){let[t,...n]=e;if(n.length===0)return this.delete(t);let r=this.get(t,!0);if(E(r))return r.deleteIn(n);throw Error(`Expected YAML collection at ${t}. Remaining path: ${n}`)}getIn(e,t){let[n,...r]=e,i=this.get(n,!0);return r.length===0?!t&&T(i)?i.value:i:E(i)?i.getIn(r,t):void 0}hasAllNullValues(e){return this.items.every(t=>{if(!w(t))return!1;let n=t.value;return n==null||e&&T(n)&&n.value==null&&!n.commentBefore&&!n.comment&&!n.tag})}hasIn(e){let[t,...n]=e;if(n.length===0)return this.has(t);let r=this.get(t,!0);return E(r)?r.hasIn(n):!1}setIn(e,t){let[n,...r]=e;if(r.length===0)this.set(n,t);else{let e=this.get(n,!0);if(E(e))e.setIn(r,t);else if(e===void 0&&this.schema)this.set(n,Se(this.schema,r,t));else throw Error(`Expected YAML collection at ${n}. Remaining path: ${r}`)}}},Te=e=>e.replace(/^(?!$)(?: $)?/gm,`#`);function F(e,t){return/^\n+$/.test(e)?e.substring(1):t?e.replace(/^(?! *$)/gm,t):e}var I=(e,t,n)=>e.endsWith(`
`)?F(n,t):n.includes(`
`)?`
`+F(n,t):(e.endsWith(` `)?``:` `)+n,Ee=`flow`,De=`block`,Oe=`quoted`;function ke(e,t,n=`flow`,{indentAtStart:r,lineWidth:i=80,minContentWidth:a=20,onFold:o,onOverflow:s}={}){if(!i||i<0)return e;i<a&&(a=0);let c=Math.max(1+a,1+i-t.length);if(e.length<=c)return e;let l=[],u={},d=i-t.length;typeof r==`number`&&(r>i-Math.max(2,a)?l.push(0):d=i-r);let f,p,m=!1,h=-1,g=-1,_=-1;n===`block`&&(h=Ae(e,h,t.length),h!==-1&&(d=h+c));for(let r;r=e[h+=1];){if(n===`quoted`&&r===`\\`){switch(g=h,e[h+1]){case`x`:h+=3;break;case`u`:h+=5;break;case`U`:h+=9;break;default:h+=1}_=h}if(r===`
`)n===`block`&&(h=Ae(e,h,t.length)),d=h+t.length+c,f=void 0;else{if(r===` `&&p&&p!==` `&&p!==`
`&&p!==`	`){let t=e[h+1];t&&t!==` `&&t!==`
`&&t!==`	`&&(f=h)}if(h>=d){if(f)l.push(f),d=f+c,f=void 0;else if(n===`quoted`){for(;p===` `||p===`	`;)p=r,r=e[h+=1],m=!0;let t=h>_+1?h-2:g-1;if(u[t])return e;l.push(t),u[t]=!0,d=t+c,f=void 0}else m=!0}}p=r}if(m&&s&&s(),l.length===0)return e;o&&o();let v=e.slice(0,l[0]);for(let r=0;r<l.length;++r){let i=l[r],a=l[r+1]||e.length;i===0?v=`\n${t}${e.slice(0,a)}`:(n===`quoted`&&u[i]&&(v+=`${e[i]}\\`),v+=`\n${t}${e.slice(i+1,a)}`)}return v}function Ae(e,t,n){let r=t,i=t+1,a=e[i];for(;a===` `||a===`	`;)if(t<i+n)a=e[++t];else{do a=e[++t];while(a&&a!==`
`);r=t,i=t+1,a=e[i]}return r}var je=(e,t)=>({indentAtStart:t?e.indent.length:e.indentAtStart,lineWidth:e.options.lineWidth,minContentWidth:e.options.minContentWidth}),Me=e=>/^(%|---|\.\.\.)/m.test(e);function Ne(e,t,n){if(!t||t<0)return!1;let r=t-n,i=e.length;if(i<=r)return!1;for(let t=0,n=0;t<i;++t)if(e[t]===`
`){if(t-n>r)return!0;if(n=t+1,i-n<=r)return!1}return!0}function Pe(e,t){let n=JSON.stringify(e);if(t.options.doubleQuotedAsJSON)return n;let{implicitKey:r}=t,i=t.options.doubleQuotedMinMultiLineLength,a=t.indent||(Me(e)?`  `:``),o=``,s=0;for(let e=0,t=n[e];t;t=n[++e])if(t===` `&&n[e+1]===`\\`&&n[e+2]===`n`&&(o+=n.slice(s,e)+`\\ `,e+=1,s=e,t=`\\`),t===`\\`)switch(n[e+1]){case`u`:{o+=n.slice(s,e);let t=n.substr(e+2,4);switch(t){case`0000`:o+=`\\0`;break;case`0007`:o+=`\\a`;break;case`000b`:o+=`\\v`;break;case`001b`:o+=`\\e`;break;case`0085`:o+=`\\N`;break;case`00a0`:o+=`\\_`;break;case`2028`:o+=`\\L`;break;case`2029`:o+=`\\P`;break;default:t.substr(0,2)===`00`?o+=`\\x`+t.substr(2):o+=n.substr(e,6)}e+=5,s=e+1}break;case`n`:if(r||n[e+2]===`"`||n.length<i)e+=1;else{for(o+=n.slice(s,e)+`

`;n[e+2]===`\\`&&n[e+3]===`n`&&n[e+4]!==`"`;)o+=`
`,e+=2;o+=a,n[e+2]===` `&&(o+=`\\`),e+=1,s=e+1}break;default:e+=1}return o=s?o+n.slice(s):n,r?o:ke(o,a,Oe,je(t,!1))}function Fe(e,t){if(t.options.singleQuote===!1||t.implicitKey&&e.includes(`
`)||/[ \t]\n|\n[ \t]/.test(e))return Pe(e,t);let n=t.indent||(Me(e)?`  `:``),r=`'`+e.replace(/'/g,`''`).replace(/\n+/g,`$&\n${n}`)+`'`;return t.implicitKey?r:ke(r,n,Ee,je(t,!1))}function L(e,t){let{singleQuote:n}=t.options,r;if(n===!1)r=Pe;else{let t=e.includes(`"`),i=e.includes(`'`);r=t&&!i?Fe:i&&!t?Pe:n?Fe:Pe}return r(e,t)}var Ie;try{Ie=RegExp(`(^|(?<!
))
+(?!
|$)`,`g`)}catch{Ie=/\n+(?!\n|$)/g}function Le({comment:e,type:t,value:n},r,i,a){let{blockQuote:o,commentString:s,lineWidth:c}=r.options;if(!o||/\n[\t ]+$/.test(n))return L(n,r);let l=r.indent||(r.forceBlockIndent||Me(n)?`  `:``),u=o===`literal`?!0:o===`folded`||t===P.BLOCK_FOLDED?!1:t===P.BLOCK_LITERAL||!Ne(n,c,l.length);if(!n)return u?`|
`:`>
`;let d,f;for(f=n.length;f>0;--f){let e=n[f-1];if(e!==`
`&&e!==`	`&&e!==` `)break}let p=n.substring(f),m=p.indexOf(`
`);m===-1?d=`-`:n===p||m!==p.length-1?(d=`+`,a&&a()):d=``,p&&=(n=n.slice(0,-p.length),p[p.length-1]===`
`&&(p=p.slice(0,-1)),p.replace(Ie,`$&${l}`));let h=!1,g,_=-1;for(g=0;g<n.length;++g){let e=n[g];if(e===` `)h=!0;else if(e===`
`)_=g;else break}let v=n.substring(0,_<g?_+1:g);v&&=(n=n.substring(v.length),v.replace(/\n+/g,`$&${l}`));let y=(h?l?`2`:`1`:``)+d;if(e&&(y+=` `+s(e.replace(/ ?[\r\n]+/g,` `)),i&&i()),!u){let e=n.replace(/\n+/g,`
$&`).replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g,`$1$2`).replace(/\n+/g,`$&${l}`),i=!1,a=je(r,!0);o!==`folded`&&t!==P.BLOCK_FOLDED&&(a.onOverflow=()=>{i=!0});let s=ke(`${v}${e}${p}`,l,De,a);if(!i)return`>${y}\n${l}${s}`}return n=n.replace(/\n+/g,`$&${l}`),`|${y}\n${l}${v}${n}${p}`}function Re(e,t,n,r){let{type:i,value:a}=e,{actualString:o,implicitKey:s,indent:c,indentStep:l,inFlow:u}=t;if(s&&a.includes(`
`)||u&&/[[\]{},]/.test(a))return L(a,t);if(/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(a))return s||u||!a.includes(`
`)?L(a,t):Le(e,t,n,r);if(!s&&!u&&i!==P.PLAIN&&a.includes(`
`))return Le(e,t,n,r);if(Me(a)){if(c===``)return t.forceBlockIndent=!0,Le(e,t,n,r);if(s&&c===l)return L(a,t)}let d=a.replace(/\n+/g,`$&\n${c}`);if(o){let e=e=>e.default&&e.tag!==`tag:yaml.org,2002:str`&&e.test?.test(d),{compat:n,tags:r}=t.doc.schema;if(r.some(e)||n?.some(e))return L(a,t)}return s?d:ke(d,c,Ee,je(t,!1))}function ze(e,t,n,r){let{implicitKey:i,inFlow:a}=t,o=typeof e.value==`string`?e:Object.assign({},e,{value:String(e.value)}),{type:s}=e;s!==P.QUOTE_DOUBLE&&/[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(o.value)&&(s=P.QUOTE_DOUBLE);let c=e=>{switch(e){case P.BLOCK_FOLDED:case P.BLOCK_LITERAL:return i||a?L(o.value,t):Le(o,t,n,r);case P.QUOTE_DOUBLE:return Pe(o.value,t);case P.QUOTE_SINGLE:return Fe(o.value,t);case P.PLAIN:return Re(o,t,n,r);default:return null}},l=c(s);if(l===null){let{defaultKeyType:e,defaultStringType:n}=t.options,r=i&&e||n;if(l=c(r),l===null)throw Error(`Unsupported default string type ${r}`)}return l}function Be(e,t){let n=Object.assign({blockQuote:!0,commentString:Te,defaultKeyType:null,defaultStringType:`PLAIN`,directives:null,doubleQuotedAsJSON:!1,doubleQuotedMinMultiLineLength:40,falseStr:`false`,flowCollectionPadding:!0,indentSeq:!0,lineWidth:80,minContentWidth:20,nullStr:`null`,simpleKeys:!1,singleQuote:null,trailingComma:!1,trueStr:`true`,verifyAliasOrder:!0},e.schema.toStringOptions,t),r;switch(n.collectionStyle){case`block`:r=!1;break;case`flow`:r=!0;break;default:r=null}return{anchors:new Set,doc:e,flowCollectionPadding:n.flowCollectionPadding?` `:``,indent:``,indentStep:typeof n.indent==`number`?` `.repeat(n.indent):`  `,inFlow:r,options:n}}function Ve(e,t){if(t.tag){let n=e.filter(e=>e.tag===t.tag);if(n.length>0)return n.find(e=>e.format===t.format)??n[0]}let n,r;if(T(t)){r=t.value;let i=e.filter(e=>e.identify?.(r));if(i.length>1){let e=i.filter(e=>e.test);e.length>0&&(i=e)}n=i.find(e=>e.format===t.format)??i.find(e=>!e.format)}else r=t,n=e.find(e=>e.nodeClass&&r instanceof e.nodeClass);if(!n){let e=r?.constructor?.name??(r===null?`null`:typeof r);throw Error(`Tag not resolved for ${e} value`)}return n}function He(e,t,{anchors:n,doc:r}){if(!r.directives)return``;let i=[],a=(T(e)||E(e))&&e.anchor;a&&de(a)&&(n.add(a),i.push(`&${a}`));let o=e.tag??(t.default?null:t.tag);return o&&i.push(r.directives.tagString(o)),i.join(` `)}function R(e,t,n,r){if(w(e))return e.toString(t,n,r);if(C(e)){if(t.doc.directives)return e.toString(t);if(t.resolvedAliases?.has(e))throw TypeError(`Cannot stringify circular structure without alias nodes`);t.resolvedAliases?t.resolvedAliases.add(e):t.resolvedAliases=new Set([e]),e=e.resolve(t.doc)}let i,a=D(e)?e:t.doc.createNode(e,{onTagObj:e=>i=e});i??=Ve(t.doc.schema.tags,a);let o=He(a,i,t);o.length>0&&(t.indentAtStart=(t.indentAtStart??0)+o.length+1);let s=typeof i.stringify==`function`?i.stringify(a,t,n,r):T(a)?ze(a,t,n,r):a.toString(t,n,r);return o?T(a)||s[0]===`{`||s[0]===`[`?`${o} ${s}`:`${o}\n${t.indent}${s}`:s}function Ue({key:e,value:t},n,r,i){let{allNullValues:a,doc:o,indent:s,indentStep:c,options:{commentString:l,indentSeq:u,simpleKeys:d}}=n,f=D(e)&&e.comment||null;if(d){if(f)throw Error(`With simple keys, key nodes cannot have comments`);if(E(e)||!D(e)&&typeof e==`object`)throw Error(`With simple keys, collection cannot be used as a key value`)}let p=!d&&(!e||f&&t==null&&!n.inFlow||E(e)||(T(e)?e.type===P.BLOCK_FOLDED||e.type===P.BLOCK_LITERAL:typeof e==`object`));n=Object.assign({},n,{allNullValues:!1,implicitKey:!p&&(d||!a),indent:s+c});let m=!1,h=!1,g=R(e,n,()=>m=!0,()=>h=!0);if(!p&&!n.inFlow&&g.length>1024){if(d)throw Error(`With simple keys, single line scalar must not span more than 1024 characters`);p=!0}if(n.inFlow){if(a||t==null)return m&&r&&r(),g===``?`?`:p?`? ${g}`:g}else if(a&&!d||t==null&&p)return g=`? ${g}`,f&&!m?g+=I(g,n.indent,l(f)):h&&i&&i(),g;m&&(f=null),p?(f&&(g+=I(g,n.indent,l(f))),g=`? ${g}\n${s}:`):(g=`${g}:`,f&&(g+=I(g,n.indent,l(f))));let _,v,y;D(t)?(_=!!t.spaceBefore,v=t.commentBefore,y=t.comment):(_=!1,v=null,y=null,t&&typeof t==`object`&&(t=o.createNode(t))),n.implicitKey=!1,!p&&!f&&T(t)&&(n.indentAtStart=g.length+1),h=!1,!u&&c.length>=2&&!n.inFlow&&!p&&ne(t)&&!t.flow&&!t.tag&&!t.anchor&&(n.indent=n.indent.substring(2));let b=!1,x=R(t,n,()=>b=!0,()=>h=!0),S=` `;if(f||_||v){if(S=_?`
`:``,v){let e=l(v);S+=`\n${F(e,n.indent)}`}x===``&&!n.inFlow?S===`
`&&y&&(S=`

`):S+=`\n${n.indent}`}else if(!p&&E(t)){let e=x[0],r=x.indexOf(`
`),i=r!==-1,a=n.inFlow??t.flow??t.items.length===0;if(i||!a){let t=!1;if(i&&(e===`&`||e===`!`)){let n=x.indexOf(` `);e===`&`&&n!==-1&&n<r&&x[n+1]===`!`&&(n=x.indexOf(` `,n+1)),(n===-1||r<n)&&(t=!0)}t||(S=`\n${n.indent}`)}}else(x===``||x[0]===`
`)&&(S=``);return g+=S+x,n.inFlow?b&&r&&r():y&&!b?g+=I(g,n.indent,l(y)):h&&i&&i(),g}function We(e,t){(e===`debug`||e===`warn`)&&console.warn(t)}var Ge=`<<`,z={identify:e=>e===Ge||typeof e==`symbol`&&e.description===Ge,default:`key`,tag:`tag:yaml.org,2002:merge`,test:/^<<$/,resolve:()=>Object.assign(new P(Symbol(Ge)),{addToJSMap:qe}),stringify:()=>Ge},Ke=(e,t)=>(z.identify(t)||T(t)&&(!t.type||t.type===P.PLAIN)&&z.identify(t.value))&&e?.doc.schema.tags.some(e=>e.tag===z.tag&&e.default);function qe(e,t,n){let r=Ye(e,n);if(ne(r))for(let n of r.items)Je(e,t,n);else if(Array.isArray(r))for(let n of r)Je(e,t,n);else Je(e,t,r)}function Je(e,t,n){let r=Ye(e,n);if(!te(r))throw Error(`Merge sources must be maps or map aliases`);let i=r.toJSON(null,e,Map);for(let[e,n]of i)t instanceof Map?t.has(e)||t.set(e,n):t instanceof Set?t.add(e):Object.prototype.hasOwnProperty.call(t,e)||Object.defineProperty(t,e,{value:n,writable:!0,enumerable:!0,configurable:!0});return t}function Ye(e,t){return e&&C(t)?t.resolve(e.doc,e):t}function Xe(e,t,{key:n,value:r}){if(D(n)&&n.addToJSMap)n.addToJSMap(e,t,r);else if(Ke(e,n))qe(e,t,r);else{let i=N(n,``,e);if(t instanceof Map)t.set(i,N(r,i,e));else if(t instanceof Set)t.add(i);else{let a=Ze(n,i,e),o=N(r,a,e);a in t?Object.defineProperty(t,a,{value:o,writable:!0,enumerable:!0,configurable:!0}):t[a]=o}}return t}function Ze(e,t,n){if(t===null)return``;if(typeof t!=`object`)return String(t);if(D(e)&&n?.doc){let t=Be(n.doc,{});t.anchors=new Set;for(let e of n.anchors.keys())t.anchors.add(e.anchor);t.inFlow=!0,t.inStringifyKey=!0;let r=e.toString(t);if(!n.mapKeyWarned){let e=JSON.stringify(r);e.length>40&&(e=e.substring(0,36)+`..."`),We(n.doc.options.logLevel,`Keys with collection values will be stringified due to JS Object restrictions: ${e}. Set mapAsMap: true to use object keys.`),n.mapKeyWarned=!0}return r}return JSON.stringify(t)}function Qe(e,t,n){return new B(xe(e,void 0,n),xe(t,void 0,n))}var B=class e{constructor(e,t=null){Object.defineProperty(this,S,{value:y}),this.key=e,this.value=t}clone(t){let{key:n,value:r}=this;return D(n)&&(n=n.clone(t)),D(r)&&(r=r.clone(t)),new e(n,r)}toJSON(e,t){return Xe(t,t?.mapAsMap?new Map:{},this)}toString(e,t,n){return e?.doc?Ue(this,e,t,n):JSON.stringify(this)}};function $e(e,t,n){return(t.inFlow??e.flow?tt:et)(e,t,n)}function et({comment:e,items:t},n,{blockItemPrefix:r,flowChars:i,itemIndent:a,onChompKeep:o,onComment:s}){let{indent:c,options:{commentString:l}}=n,u=Object.assign({},n,{indent:a,type:null}),d=!1,f=[];for(let e=0;e<t.length;++e){let i=t[e],o=null;if(D(i))!d&&i.spaceBefore&&f.push(``),nt(n,f,i.commentBefore,d),i.comment&&(o=i.comment);else if(w(i)){let e=D(i.key)?i.key:null;e&&(!d&&e.spaceBefore&&f.push(``),nt(n,f,e.commentBefore,d))}d=!1;let s=R(i,u,()=>o=null,()=>d=!0);o&&(s+=I(s,a,l(o))),d&&o&&(d=!1),f.push(r+s)}let p;if(f.length===0)p=i.start+i.end;else{p=f[0];for(let e=1;e<f.length;++e){let t=f[e];p+=t?`\n${c}${t}`:`
`}}return e?(p+=`
`+F(l(e),c),s&&s()):d&&o&&o(),p}function tt({items:e},t,{flowChars:n,itemIndent:r}){let{indent:i,indentStep:a,flowCollectionPadding:o,options:{commentString:s}}=t;r+=a;let c=Object.assign({},t,{indent:r,inFlow:!0,type:null}),l=!1,u=0,d=[];for(let n=0;n<e.length;++n){let i=e[n],a=null;if(D(i))i.spaceBefore&&d.push(``),nt(t,d,i.commentBefore,!1),i.comment&&(a=i.comment);else if(w(i)){let e=D(i.key)?i.key:null;e&&(e.spaceBefore&&d.push(``),nt(t,d,e.commentBefore,!1),e.comment&&(l=!0));let n=D(i.value)?i.value:null;n?(n.comment&&(a=n.comment),n.commentBefore&&(l=!0)):i.value==null&&e?.comment&&(a=e.comment)}a&&(l=!0);let o=R(i,c,()=>a=null);l||=d.length>u||o.includes(`
`),n<e.length-1?o+=`,`:t.options.trailingComma&&(t.options.lineWidth>0&&(l||=d.reduce((e,t)=>e+t.length+2,2)+(o.length+2)>t.options.lineWidth),l&&(o+=`,`)),a&&(o+=I(o,r,s(a))),d.push(o),u=d.length}let{start:f,end:p}=n;if(d.length===0)return f+p;if(!l){let e=d.reduce((e,t)=>e+t.length+2,2);l=t.options.lineWidth>0&&e>t.options.lineWidth}if(l){let e=f;for(let t of d)e+=t?`\n${a}${i}${t}`:`
`;return`${e}\n${i}${p}`}return`${f}${o}${d.join(` `)}${o}${p}`}function nt({indent:e,options:{commentString:t}},n,r,i){if(r&&i&&(r=r.replace(/^\n+/,``)),r){let i=F(t(r),e);n.push(i.trimStart())}}function V(e,t){let n=T(t)?t.value:t;for(let r of e)if(w(r)&&(r.key===t||r.key===n||T(r.key)&&r.key.value===n))return r}var H=class extends we{static get tagName(){return`tag:yaml.org,2002:map`}constructor(e){super(v,e),this.items=[]}static from(e,t,n){let{keepUndefined:r,replacer:i}=n,a=new this(e),o=(e,o)=>{if(typeof i==`function`)o=i.call(t,e,o);else if(Array.isArray(i)&&!i.includes(e))return;(o!==void 0||r)&&a.items.push(Qe(e,o,n))};if(t instanceof Map)for(let[e,n]of t)o(e,n);else if(t&&typeof t==`object`)for(let e of Object.keys(t))o(e,t[e]);return typeof e.sortMapEntries==`function`&&a.items.sort(e.sortMapEntries),a}add(e,t){let n;n=w(e)?e:!e||typeof e!=`object`||!(`key`in e)?new B(e,e?.value):new B(e.key,e.value);let r=V(this.items,n.key),i=this.schema?.sortMapEntries;if(r){if(!t)throw Error(`Key ${n.key} already set`);T(r.value)&&ve(n.value)?r.value.value=n.value:r.value=n.value}else if(i){let e=this.items.findIndex(e=>i(n,e)<0);e===-1?this.items.push(n):this.items.splice(e,0,n)}else this.items.push(n)}delete(e){let t=V(this.items,e);return t?this.items.splice(this.items.indexOf(t),1).length>0:!1}get(e,t){let n=V(this.items,e)?.value;return(!t&&T(n)?n.value:n)??void 0}has(e){return!!V(this.items,e)}set(e,t){this.add(new B(e,t),!0)}toJSON(e,t,n){let r=n?new n:t?.mapAsMap?new Map:{};t?.onCreate&&t.onCreate(r);for(let e of this.items)Xe(t,r,e);return r}toString(e,t,n){if(!e)return JSON.stringify(this);for(let e of this.items)if(!w(e))throw Error(`Map items must all be pairs; found ${JSON.stringify(e)} instead`);return!e.allNullValues&&this.hasAllNullValues(!1)&&(e=Object.assign({},e,{allNullValues:!0})),$e(this,e,{blockItemPrefix:``,flowChars:{start:`{`,end:`}`},itemIndent:e.indent||``,onChompKeep:n,onComment:t})}},U={collection:`map`,default:!0,nodeClass:H,tag:`tag:yaml.org,2002:map`,resolve(e,t){return te(e)||t(`Expected a mapping for this tag`),e},createNode:(e,t,n)=>H.from(e,t,n)},W=class extends we{static get tagName(){return`tag:yaml.org,2002:seq`}constructor(e){super(x,e),this.items=[]}add(e){this.items.push(e)}delete(e){let t=rt(e);return typeof t==`number`&&this.items.splice(t,1).length>0}get(e,t){let n=rt(e);if(typeof n!=`number`)return;let r=this.items[n];return!t&&T(r)?r.value:r}has(e){let t=rt(e);return typeof t==`number`&&t<this.items.length}set(e,t){let n=rt(e);if(typeof n!=`number`)throw Error(`Expected a valid index, not ${e}.`);let r=this.items[n];T(r)&&ve(t)?r.value=t:this.items[n]=t}toJSON(e,t){let n=[];t?.onCreate&&t.onCreate(n);let r=0;for(let e of this.items)n.push(N(e,String(r++),t));return n}toString(e,t,n){return e?$e(this,e,{blockItemPrefix:`- `,flowChars:{start:`[`,end:`]`},itemIndent:(e.indent||``)+`  `,onChompKeep:n,onComment:t}):JSON.stringify(this)}static from(e,t,n){let{replacer:r}=n,i=new this(e);if(t&&Symbol.iterator in Object(t)){let e=0;for(let a of t){if(typeof r==`function`){let n=t instanceof Set?a:String(e++);a=r.call(t,n,a)}i.items.push(xe(a,void 0,n))}}return i}};function rt(e){let t=T(e)?e.value:e;return t&&typeof t==`string`&&(t=Number(t)),typeof t==`number`&&Number.isInteger(t)&&t>=0?t:null}var G={collection:`seq`,default:!0,nodeClass:W,tag:`tag:yaml.org,2002:seq`,resolve(e,t){return ne(e)||t(`Expected a sequence for this tag`),e},createNode:(e,t,n)=>W.from(e,t,n)},it={identify:e=>typeof e==`string`,default:!0,tag:`tag:yaml.org,2002:str`,resolve:e=>e,stringify(e,t,n,r){return t=Object.assign({actualString:!0},t),ze(e,t,n,r)}},at={identify:e=>e==null,createNode:()=>new P(null),default:!0,tag:`tag:yaml.org,2002:null`,test:/^(?:~|[Nn]ull|NULL)?$/,resolve:()=>new P(null),stringify:({source:e},t)=>typeof e==`string`&&at.test.test(e)?e:t.options.nullStr},ot={identify:e=>typeof e==`boolean`,default:!0,tag:`tag:yaml.org,2002:bool`,test:/^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,resolve:e=>new P(e[0]===`t`||e[0]===`T`),stringify({source:e,value:t},n){return e&&ot.test.test(e)&&t===(e[0]===`t`||e[0]===`T`)?e:t?n.options.trueStr:n.options.falseStr}};function K({format:e,minFractionDigits:t,tag:n,value:r}){if(typeof r==`bigint`)return String(r);let i=typeof r==`number`?r:Number(r);if(!isFinite(i))return isNaN(i)?`.nan`:i<0?`-.inf`:`.inf`;let a=Object.is(r,-0)?`-0`:JSON.stringify(r);if(!e&&t&&(!n||n===`tag:yaml.org,2002:float`)&&/^-?\d/.test(a)&&!a.includes(`e`)){let e=a.indexOf(`.`);e<0&&(e=a.length,a+=`.`);let n=t-(a.length-e-1);for(;n-->0;)a+=`0`}return a}var st={identify:e=>typeof e==`number`,default:!0,tag:`tag:yaml.org,2002:float`,test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:e=>e.slice(-3).toLowerCase()===`nan`?NaN:e[0]===`-`?-1/0:1/0,stringify:K},ct={identify:e=>typeof e==`number`,default:!0,tag:`tag:yaml.org,2002:float`,format:`EXP`,test:/^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,resolve:e=>parseFloat(e),stringify(e){let t=Number(e.value);return isFinite(t)?t.toExponential():K(e)}},lt={identify:e=>typeof e==`number`,default:!0,tag:`tag:yaml.org,2002:float`,test:/^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,resolve(e){let t=new P(parseFloat(e)),n=e.indexOf(`.`);return n!==-1&&e[e.length-1]===`0`&&(t.minFractionDigits=e.length-n-1),t},stringify:K},ut=e=>typeof e==`bigint`||Number.isInteger(e),dt=(e,t,n,{intAsBigInt:r})=>r?BigInt(e):parseInt(e.substring(t),n);function ft(e,t,n){let{value:r}=e;return ut(r)&&r>=0?n+r.toString(t):K(e)}var pt={identify:e=>ut(e)&&e>=0,default:!0,tag:`tag:yaml.org,2002:int`,format:`OCT`,test:/^0o[0-7]+$/,resolve:(e,t,n)=>dt(e,2,8,n),stringify:e=>ft(e,8,`0o`)},mt={identify:ut,default:!0,tag:`tag:yaml.org,2002:int`,test:/^[-+]?[0-9]+$/,resolve:(e,t,n)=>dt(e,0,10,n),stringify:K},ht={identify:e=>ut(e)&&e>=0,default:!0,tag:`tag:yaml.org,2002:int`,format:`HEX`,test:/^0x[0-9a-fA-F]+$/,resolve:(e,t,n)=>dt(e,2,16,n),stringify:e=>ft(e,16,`0x`)},gt=[U,G,it,at,ot,pt,mt,ht,st,ct,lt];function _t(e){return typeof e==`bigint`||Number.isInteger(e)}var vt=({value:e})=>JSON.stringify(e),yt=[{identify:e=>typeof e==`string`,default:!0,tag:`tag:yaml.org,2002:str`,resolve:e=>e,stringify:vt},{identify:e=>e==null,createNode:()=>new P(null),default:!0,tag:`tag:yaml.org,2002:null`,test:/^null$/,resolve:()=>null,stringify:vt},{identify:e=>typeof e==`boolean`,default:!0,tag:`tag:yaml.org,2002:bool`,test:/^true$|^false$/,resolve:e=>e===`true`,stringify:vt},{identify:_t,default:!0,tag:`tag:yaml.org,2002:int`,test:/^-?(?:0|[1-9][0-9]*)$/,resolve:(e,t,{intAsBigInt:n})=>n?BigInt(e):parseInt(e,10),stringify:({value:e})=>_t(e)?e.toString():JSON.stringify(e)},{identify:e=>typeof e==`number`,default:!0,tag:`tag:yaml.org,2002:float`,test:/^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,resolve:e=>parseFloat(e),stringify:vt}],bt=[U,G].concat(yt,{default:!0,tag:``,test:/^/,resolve(e,t){return t(`Unresolved plain scalar ${JSON.stringify(e)}`),e}}),xt={identify:e=>e instanceof Uint8Array,default:!1,tag:`tag:yaml.org,2002:binary`,resolve(e,t){if(typeof atob==`function`){let t=atob(e.replace(/[\n\r]/g,``)),n=new Uint8Array(t.length);for(let e=0;e<t.length;++e)n[e]=t.charCodeAt(e);return n}return t(`This environment does not support reading binary tags; either Buffer or atob is required`),e},stringify({comment:e,type:t,value:n},r,i,a){if(!n)return``;let o=n,s;if(typeof btoa==`function`){let e=``;for(let t=0;t<o.length;++t)e+=String.fromCharCode(o[t]);s=btoa(e)}else throw Error(`This environment does not support writing binary tags; either Buffer or btoa is required`);if(t??=P.BLOCK_LITERAL,t!==P.QUOTE_DOUBLE){let e=Math.max(r.options.lineWidth-r.indent.length,r.options.minContentWidth),n=Math.ceil(s.length/e),i=Array(n);for(let t=0,r=0;t<n;++t,r+=e)i[t]=s.substr(r,e);s=i.join(t===P.BLOCK_LITERAL?`
`:` `)}return ze({comment:e,type:t,value:s},r,i,a)}};function St(e,t){if(ne(e))for(let n=0;n<e.items.length;++n){let r=e.items[n];if(!w(r)){if(te(r)){r.items.length>1&&t(`Each pair must have its own sequence indicator`);let e=r.items[0]||new B(new P(null));if(r.commentBefore&&(e.key.commentBefore=e.key.commentBefore?`${r.commentBefore}\n${e.key.commentBefore}`:r.commentBefore),r.comment){let t=e.value??e.key;t.comment=t.comment?`${r.comment}\n${t.comment}`:r.comment}r=e}e.items[n]=w(r)?r:new B(r)}}else t(`Expected a sequence for this tag`);return e}function Ct(e,t,n){let{replacer:r}=n,i=new W(e);i.tag=`tag:yaml.org,2002:pairs`;let a=0;if(t&&Symbol.iterator in Object(t))for(let e of t){typeof r==`function`&&(e=r.call(t,String(a++),e));let o,s;if(Array.isArray(e)){if(e.length===2)o=e[0],s=e[1];else throw TypeError(`Expected [key, value] tuple: ${e}`)}else if(e&&e instanceof Object){let t=Object.keys(e);if(t.length===1)o=t[0],s=e[o];else throw TypeError(`Expected tuple with one key, not ${t.length} keys`)}else o=e;i.items.push(Qe(o,s,n))}return i}var wt={collection:`seq`,default:!1,tag:`tag:yaml.org,2002:pairs`,resolve:St,createNode:Ct},Tt=class e extends W{constructor(){super(),this.add=H.prototype.add.bind(this),this.delete=H.prototype.delete.bind(this),this.get=H.prototype.get.bind(this),this.has=H.prototype.has.bind(this),this.set=H.prototype.set.bind(this),this.tag=e.tag}toJSON(e,t){if(!t)return super.toJSON(e);let n=new Map;t?.onCreate&&t.onCreate(n);for(let e of this.items){let r,i;if(w(e)?(r=N(e.key,``,t),i=N(e.value,r,t)):r=N(e,``,t),n.has(r))throw Error(`Ordered maps must not include duplicate keys`);n.set(r,i)}return n}static from(e,t,n){let r=Ct(e,t,n),i=new this;return i.items=r.items,i}};Tt.tag=`tag:yaml.org,2002:omap`;var Et={collection:`seq`,identify:e=>e instanceof Map,nodeClass:Tt,default:!1,tag:`tag:yaml.org,2002:omap`,resolve(e,t){let n=St(e,t),r=[];for(let{key:e}of n.items)T(e)&&(r.includes(e.value)?t(`Ordered maps must not include duplicate keys: ${e.value}`):r.push(e.value));return Object.assign(new Tt,n)},createNode:(e,t,n)=>Tt.from(e,t,n)};function Dt({value:e,source:t},n){return t&&(e?Ot:kt).test.test(t)?t:e?n.options.trueStr:n.options.falseStr}var Ot={identify:e=>e===!0,default:!0,tag:`tag:yaml.org,2002:bool`,test:/^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,resolve:()=>new P(!0),stringify:Dt},kt={identify:e=>e===!1,default:!0,tag:`tag:yaml.org,2002:bool`,test:/^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/,resolve:()=>new P(!1),stringify:Dt},At={identify:e=>typeof e==`number`,default:!0,tag:`tag:yaml.org,2002:float`,test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:e=>e.slice(-3).toLowerCase()===`nan`?NaN:e[0]===`-`?-1/0:1/0,stringify:K},jt={identify:e=>typeof e==`number`,default:!0,tag:`tag:yaml.org,2002:float`,format:`EXP`,test:/^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,resolve:e=>parseFloat(e.replace(/_/g,``)),stringify(e){let t=Number(e.value);return isFinite(t)?t.toExponential():K(e)}},Mt={identify:e=>typeof e==`number`,default:!0,tag:`tag:yaml.org,2002:float`,test:/^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,resolve(e){let t=new P(parseFloat(e.replace(/_/g,``))),n=e.indexOf(`.`);if(n!==-1){let r=e.substring(n+1).replace(/_/g,``);r[r.length-1]===`0`&&(t.minFractionDigits=r.length)}return t},stringify:K},Nt=e=>typeof e==`bigint`||Number.isInteger(e);function Pt(e,t,n,{intAsBigInt:r}){let i=e[0];if((i===`-`||i===`+`)&&(t+=1),e=e.substring(t).replace(/_/g,``),r){switch(n){case 2:e=`0b${e}`;break;case 8:e=`0o${e}`;break;case 16:e=`0x${e}`}let t=BigInt(e);return i===`-`?BigInt(-1)*t:t}let a=parseInt(e,n);return i===`-`?-1*a:a}function Ft(e,t,n){let{value:r}=e;if(Nt(r)){let e=r.toString(t);return r<0?`-`+n+e.substr(1):n+e}return K(e)}var It={identify:Nt,default:!0,tag:`tag:yaml.org,2002:int`,format:`BIN`,test:/^[-+]?0b[0-1_]+$/,resolve:(e,t,n)=>Pt(e,2,2,n),stringify:e=>Ft(e,2,`0b`)},Lt={identify:Nt,default:!0,tag:`tag:yaml.org,2002:int`,format:`OCT`,test:/^[-+]?0[0-7_]+$/,resolve:(e,t,n)=>Pt(e,1,8,n),stringify:e=>Ft(e,8,`0`)},Rt={identify:Nt,default:!0,tag:`tag:yaml.org,2002:int`,test:/^[-+]?[0-9][0-9_]*$/,resolve:(e,t,n)=>Pt(e,0,10,n),stringify:K},zt={identify:Nt,default:!0,tag:`tag:yaml.org,2002:int`,format:`HEX`,test:/^[-+]?0x[0-9a-fA-F_]+$/,resolve:(e,t,n)=>Pt(e,2,16,n),stringify:e=>Ft(e,16,`0x`)},Bt=class e extends H{constructor(t){super(t),this.tag=e.tag}add(e){let t;t=w(e)?e:e&&typeof e==`object`&&`key`in e&&`value`in e&&e.value===null?new B(e.key,null):new B(e,null),V(this.items,t.key)||this.items.push(t)}get(e,t){let n=V(this.items,e);return!t&&w(n)?T(n.key)?n.key.value:n.key:n}set(e,t){if(typeof t!=`boolean`)throw Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof t}`);let n=V(this.items,e);n&&!t?this.items.splice(this.items.indexOf(n),1):!n&&t&&this.items.push(new B(e))}toJSON(e,t){return super.toJSON(e,t,Set)}toString(e,t,n){if(!e)return JSON.stringify(this);if(this.hasAllNullValues(!0))return super.toString(Object.assign({},e,{allNullValues:!0}),t,n);throw Error(`Set items must all have null values`)}static from(e,t,n){let{replacer:r}=n,i=new this(e);if(t&&Symbol.iterator in Object(t))for(let e of t)typeof r==`function`&&(e=r.call(t,e,e)),i.items.push(Qe(e,null,n));return i}};Bt.tag=`tag:yaml.org,2002:set`;var Vt={collection:`map`,identify:e=>e instanceof Set,nodeClass:Bt,default:!1,tag:`tag:yaml.org,2002:set`,createNode:(e,t,n)=>Bt.from(e,t,n),resolve(e,t){if(te(e)){if(e.hasAllNullValues(!0))return Object.assign(new Bt,e);t(`Set items must all have null values`)}else t(`Expected a mapping for this tag`);return e}};function Ht(e,t){let n=e[0],r=n===`-`||n===`+`?e.substring(1):e,i=e=>t?BigInt(e):Number(e),a=r.replace(/_/g,``).split(`:`).reduce((e,t)=>e*i(60)+i(t),i(0));return n===`-`?i(-1)*a:a}function Ut(e){let{value:t}=e,n=e=>e;if(typeof t==`bigint`)n=e=>BigInt(e);else if(isNaN(t)||!isFinite(t))return K(e);let r=``;t<0&&(r=`-`,t*=n(-1));let i=n(60),a=[t%i];return t<60?a.unshift(0):(t=(t-a[0])/i,a.unshift(t%i),t>=60&&(t=(t-a[0])/i,a.unshift(t))),r+a.map(e=>String(e).padStart(2,`0`)).join(`:`).replace(/000000\d*$/,``)}var Wt={identify:e=>typeof e==`bigint`||Number.isInteger(e),default:!0,tag:`tag:yaml.org,2002:int`,format:`TIME`,test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,resolve:(e,t,{intAsBigInt:n})=>Ht(e,n),stringify:Ut},Gt={identify:e=>typeof e==`number`,default:!0,tag:`tag:yaml.org,2002:float`,format:`TIME`,test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,resolve:e=>Ht(e,!1),stringify:Ut},Kt={identify:e=>e instanceof Date,default:!0,tag:`tag:yaml.org,2002:timestamp`,test:RegExp(`^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$`),resolve(e){let t=e.match(Kt.test);if(!t)throw Error(`!!timestamp expects a date, starting with yyyy-mm-dd`);let[,n,r,i,a,o,s]=t.map(Number),c=t[7]?Number((t[7]+`00`).substr(1,3)):0,l=Date.UTC(n,r-1,i,a||0,o||0,s||0,c),u=t[8];if(u&&u!==`Z`){let e=Ht(u,!1);Math.abs(e)<30&&(e*=60),l-=6e4*e}return new Date(l)},stringify:({value:e})=>e?.toISOString().replace(/(T00:00:00)?\.000Z$/,``)??``},qt=[U,G,it,at,Ot,kt,It,Lt,Rt,zt,At,jt,Mt,xt,z,Et,wt,Vt,Wt,Gt,Kt],Jt=new Map([[`core`,gt],[`failsafe`,[U,G,it]],[`json`,bt],[`yaml11`,qt],[`yaml-1.1`,qt]]),Yt={binary:xt,bool:ot,float:lt,floatExp:ct,floatNaN:st,floatTime:Gt,int:mt,intHex:ht,intOct:pt,intTime:Wt,map:U,merge:z,null:at,omap:Et,pairs:wt,seq:G,set:Vt,timestamp:Kt},Xt={"tag:yaml.org,2002:binary":xt,"tag:yaml.org,2002:merge":z,"tag:yaml.org,2002:omap":Et,"tag:yaml.org,2002:pairs":wt,"tag:yaml.org,2002:set":Vt,"tag:yaml.org,2002:timestamp":Kt};function Zt(e,t,n){let r=Jt.get(t);if(r&&!e)return n&&!r.includes(z)?r.concat(z):r.slice();let i=r;if(!i){if(Array.isArray(e))i=[];else{let e=Array.from(Jt.keys()).filter(e=>e!==`yaml11`).map(e=>JSON.stringify(e)).join(`, `);throw Error(`Unknown schema "${t}"; use one of ${e} or define customTags array`)}}if(Array.isArray(e))for(let t of e)i=i.concat(t);else typeof e==`function`&&(i=e(i.slice()));return n&&(i=i.concat(z)),i.reduce((e,t)=>{let n=typeof t==`string`?Yt[t]:t;if(!n){let e=JSON.stringify(t),n=Object.keys(Yt).map(e=>JSON.stringify(e)).join(`, `);throw Error(`Unknown custom tag ${e}; use one of ${n}`)}return e.includes(n)||e.push(n),e},[])}var Qt=(e,t)=>e.key<t.key?-1:+(e.key>t.key),$t=class e{constructor({compat:e,customTags:t,merge:n,resolveKnownTags:r,schema:i,sortMapEntries:a,toStringDefaults:o}){this.compat=Array.isArray(e)?Zt(e,`compat`):e?Zt(null,e):null,this.name=typeof i==`string`&&i||`core`,this.knownTags=r?Xt:{},this.tags=Zt(t,this.name,n),this.toStringOptions=o??null,Object.defineProperty(this,v,{value:U}),Object.defineProperty(this,b,{value:it}),Object.defineProperty(this,x,{value:G}),this.sortMapEntries=typeof a==`function`?a:a===!0?Qt:null}clone(){let t=Object.create(e.prototype,Object.getOwnPropertyDescriptors(this));return t.tags=this.tags.slice(),t}};function en(e,t){let n=[],r=t.directives===!0;if(t.directives!==!1&&e.directives){let t=e.directives.toString(e);t?(n.push(t),r=!0):e.directives.docStart&&(r=!0)}r&&n.push(`---`);let i=Be(e,t),{commentString:a}=i.options;if(e.commentBefore){n.length!==1&&n.unshift(``);let t=a(e.commentBefore);n.unshift(F(t,``))}let o=!1,s=null;if(e.contents){if(D(e.contents)){if(e.contents.spaceBefore&&r&&n.push(``),e.contents.commentBefore){let t=a(e.contents.commentBefore);n.push(F(t,``))}i.forceBlockIndent=!!e.comment,s=e.contents.comment}let t=s?void 0:()=>o=!0,c=R(e.contents,i,()=>s=null,t);s&&(c+=I(c,``,a(s))),(c[0]===`|`||c[0]===`>`)&&n[n.length-1]===`---`?n[n.length-1]=`--- ${c}`:n.push(c)}else n.push(R(e.contents,i));if(e.directives?.docEnd){if(e.comment){let t=a(e.comment);t.includes(`
`)?(n.push(`...`),n.push(F(t,``))):n.push(`... ${t}`)}else n.push(`...`)}else{let t=e.comment;t&&o&&(t=t.replace(/^\n+/,``)),t&&((!o||s)&&n[n.length-1]!==``&&n.push(``),n.push(F(a(t),``)))}return n.join(`
`)+`
`}var tn=class e{constructor(e,t,n){this.commentBefore=null,this.comment=null,this.errors=[],this.warnings=[],Object.defineProperty(this,S,{value:_});let r=null;typeof t==`function`||Array.isArray(t)?r=t:n===void 0&&t&&(n=t,t=void 0);let i=Object.assign({intAsBigInt:!1,keepSourceTokens:!1,logLevel:`warn`,prettyErrors:!0,strict:!0,stringKeys:!1,uniqueKeys:!0,version:`1.2`},n);this.options=i;let{version:a}=i;n?._directives?(this.directives=n._directives.atDocument(),this.directives.yaml.explicit&&(a=this.directives.yaml.version)):this.directives=new j({version:a}),this.setSchema(a,n),this.contents=e===void 0?null:this.createNode(e,r,n)}clone(){let t=Object.create(e.prototype,{[S]:{value:_}});return t.commentBefore=this.commentBefore,t.comment=this.comment,t.errors=this.errors.slice(),t.warnings=this.warnings.slice(),t.options=Object.assign({},this.options),this.directives&&(t.directives=this.directives.clone()),t.schema=this.schema.clone(),t.contents=D(this.contents)?this.contents.clone(t.schema):this.contents,this.range&&(t.range=this.range.slice()),t}add(e){q(this.contents)&&this.contents.add(e)}addIn(e,t){q(this.contents)&&this.contents.addIn(e,t)}createAlias(e,t){if(!e.anchor){let n=fe(this);e.anchor=!t||n.has(t)?pe(t||`a`,n):t}return new ge(e.anchor)}createNode(e,t,n){let r;if(typeof t==`function`)e=t.call({"":e},``,e),r=t;else if(Array.isArray(t)){let e=t.filter(e=>typeof e==`number`||e instanceof String||e instanceof Number).map(String);e.length>0&&(t=t.concat(e)),r=t}else n===void 0&&t&&(n=t,t=void 0);let{aliasDuplicateObjects:i,anchorPrefix:a,flow:o,keepUndefined:s,onTagObj:c,tag:l}=n??{},{onAnchor:u,setAnchors:d,sourceObjects:f}=me(this,a||`a`),p={aliasDuplicateObjects:i??!0,keepUndefined:s??!1,onAnchor:u,onTagObj:c,replacer:r,schema:this.schema,sourceObjects:f},m=xe(e,l,p);return o&&E(m)&&(m.flow=!0),d(),m}createPair(e,t,n={}){return new B(this.createNode(e,null,n),this.createNode(t,null,n))}delete(e){return q(this.contents)?this.contents.delete(e):!1}deleteIn(e){return Ce(e)?this.contents!=null&&(this.contents=null,!0):q(this.contents)?this.contents.deleteIn(e):!1}get(e,t){return E(this.contents)?this.contents.get(e,t):void 0}getIn(e,t){return Ce(e)?!t&&T(this.contents)?this.contents.value:this.contents:E(this.contents)?this.contents.getIn(e,t):void 0}has(e){return E(this.contents)?this.contents.has(e):!1}hasIn(e){return Ce(e)?this.contents!==void 0:E(this.contents)?this.contents.hasIn(e):!1}set(e,t){this.contents==null?this.contents=Se(this.schema,[e],t):q(this.contents)&&this.contents.set(e,t)}setIn(e,t){Ce(e)?this.contents=t:this.contents==null?this.contents=Se(this.schema,Array.from(e),t):q(this.contents)&&this.contents.setIn(e,t)}setSchema(e,t={}){typeof e==`number`&&(e=String(e));let n;switch(e){case`1.1`:this.directives?this.directives.yaml.version=`1.1`:this.directives=new j({version:`1.1`}),n={resolveKnownTags:!1,schema:`yaml-1.1`};break;case`1.2`:case`next`:this.directives?this.directives.yaml.version=e:this.directives=new j({version:e}),n={resolveKnownTags:!0,schema:`core`};break;case null:this.directives&&delete this.directives,n=null;break;default:{let t=JSON.stringify(e);throw Error(`Expected '1.1', '1.2' or null as first argument, but found: ${t}`)}}if(t.schema instanceof Object)this.schema=t.schema;else if(n)this.schema=new $t(Object.assign(n,t));else throw Error(`With a null YAML version, the { schema: Schema } option is required`)}toJS({json:e,jsonArg:t,mapAsMap:n,maxAliasCount:r,onAnchor:i,reviver:a}={}){let o={anchors:new Map,doc:this,keep:!e,mapAsMap:n===!0,mapKeyWarned:!1,maxAliasCount:typeof r==`number`?r:100},s=N(this.contents,t??``,o);if(typeof i==`function`)for(let{count:e,res:t}of o.anchors.values())i(t,e);return typeof a==`function`?M(a,{"":s},``,s):s}toJSON(e,t){return this.toJS({json:!0,jsonArg:e,mapAsMap:!1,onAnchor:t})}toString(e={}){if(this.errors.length>0)throw Error(`Document with errors cannot be stringified`);if(`indent`in e&&(!Number.isInteger(e.indent)||Number(e.indent)<=0)){let t=JSON.stringify(e.indent);throw Error(`"indent" option must be a positive integer, not ${t}`)}return en(this,e)}};function q(e){if(E(e))return!0;throw Error(`Expected a YAML collection as document contents`)}var nn=class extends Error{constructor(e,t,n,r){super(),this.name=e,this.code=n,this.message=r,this.pos=t}},rn=class extends nn{constructor(e,t,n){super(`YAMLParseError`,e,t,n)}},an=class extends nn{constructor(e,t,n){super(`YAMLWarning`,e,t,n)}},on=(e,t)=>n=>{if(n.pos[0]===-1)return;n.linePos=n.pos.map(e=>t.linePos(e));let{line:r,col:i}=n.linePos[0];n.message+=` at line ${r}, column ${i}`;let a=i-1,o=e.substring(t.lineStarts[r-1],t.lineStarts[r]).replace(/[\n\r]+$/,``);if(a>=60&&o.length>80){let e=Math.min(a-39,o.length-79);o=`…`+o.substring(e),a-=e-1}if(o.length>80&&(o=o.substring(0,79)+`…`),r>1&&/^ *$/.test(o.substring(0,a))){let n=e.substring(t.lineStarts[r-2],t.lineStarts[r-1]);n.length>80&&(n=n.substring(0,79)+`…
`),o=n+o}if(/[^ ]/.test(o)){let e=1,t=n.linePos[1];t?.line===r&&t.col>i&&(e=Math.max(1,Math.min(t.col-i,80-a)));let s=` `.repeat(a)+`^`.repeat(e);n.message+=`:\n\n${o}\n${s}\n`}};function J(e,{flow:t,indicator:n,next:r,offset:i,onError:a,parentIndent:o,startOnNewline:s}){let c=!1,l=s,u=s,d=``,f=``,p=!1,m=!1,h=null,g=null,_=null,v=null,y=null,b=null,x=null;for(let i of e)switch(m&&=(i.type!==`space`&&i.type!==`newline`&&i.type!==`comma`&&a(i.offset,`MISSING_CHAR`,`Tags and anchors must be separated from the next token by white space`),!1),h&&=(l&&i.type!==`comment`&&i.type!==`newline`&&a(h,`TAB_AS_INDENT`,`Tabs are not allowed as indentation`),null),i.type){case`space`:!t&&(n!==`doc-start`||r?.type!==`flow-collection`)&&i.source.includes(`	`)&&(h=i),u=!0;break;case`comment`:{u||a(i,`MISSING_CHAR`,`Comments must be separated from other tokens by white space characters`);let e=i.source.substring(1)||` `;d?d+=f+e:d=e,f=``,l=!1;break}case`newline`:l?d?d+=i.source:(!b||n!==`seq-item-ind`)&&(c=!0):f+=i.source,l=!0,p=!0,(g||_)&&(v=i),u=!0;break;case`anchor`:g&&a(i,`MULTIPLE_ANCHORS`,`A node can have at most one anchor`),i.source.endsWith(`:`)&&a(i.offset+i.source.length-1,`BAD_ALIAS`,`Anchor ending in : is ambiguous`,!0),g=i,x??=i.offset,l=!1,u=!1,m=!0;break;case`tag`:_&&a(i,`MULTIPLE_TAGS`,`A node can have at most one tag`),_=i,x??=i.offset,l=!1,u=!1,m=!0;break;case n:(g||_)&&a(i,`BAD_PROP_ORDER`,`Anchors and tags must be after the ${i.source} indicator`),b&&a(i,`UNEXPECTED_TOKEN`,`Unexpected ${i.source} in ${t??`collection`}`),b=i,l=n===`seq-item-ind`||n===`explicit-key-ind`,u=!1;break;case`comma`:if(t){y&&a(i,`UNEXPECTED_TOKEN`,`Unexpected , in ${t}`),y=i,l=!1,u=!1;break}default:a(i,`UNEXPECTED_TOKEN`,`Unexpected ${i.type} token`),l=!1,u=!1}let S=e[e.length-1],C=S?S.offset+S.source.length:i;return m&&r&&r.type!==`space`&&r.type!==`newline`&&r.type!==`comma`&&(r.type!==`scalar`||r.source!==``)&&a(r.offset,`MISSING_CHAR`,`Tags and anchors must be separated from the next token by white space`),h&&(l&&h.indent<=o||r?.type===`block-map`||r?.type===`block-seq`)&&a(h,`TAB_AS_INDENT`,`Tabs are not allowed as indentation`),{comma:y,found:b,spaceBefore:c,comment:d,hasNewline:p,anchor:g,tag:_,newlineAfterProp:v,end:C,start:x??C}}function Y(e){if(!e)return null;switch(e.type){case`alias`:case`scalar`:case`double-quoted-scalar`:case`single-quoted-scalar`:if(e.source.includes(`
`))return!0;if(e.end){for(let t of e.end)if(t.type===`newline`)return!0}return!1;case`flow-collection`:for(let t of e.items){for(let e of t.start)if(e.type===`newline`)return!0;if(t.sep){for(let e of t.sep)if(e.type===`newline`)return!0}if(Y(t.key)||Y(t.value))return!0}return!1;default:return!0}}function sn(e,t,n){if(t?.type===`flow-collection`){let r=t.end[0];r.indent===e&&(r.source===`]`||r.source===`}`)&&Y(t)&&n(r,`BAD_INDENT`,`Flow end indicator should be more indented than parent`,!0)}}function cn(e,t,n){let{uniqueKeys:r}=e.options;if(r===!1)return!1;let i=typeof r==`function`?r:(e,t)=>e===t||T(e)&&T(t)&&e.value===t.value;return t.some(e=>i(e.key,n))}var ln=`All mapping items must start at the same column`;function un({composeNode:e,composeEmptyNode:t},n,r,i,a){let o=new((a?.nodeClass)??H)(n.schema);n.atRoot&&=!1;let s=r.offset,c=null;for(let a of r.items){let{start:l,key:u,sep:d,value:f}=a,p=J(l,{indicator:`explicit-key-ind`,next:u??d?.[0],offset:s,onError:i,parentIndent:r.indent,startOnNewline:!0}),m=!p.found;if(m){if(u&&(u.type===`block-seq`?i(s,`BLOCK_AS_IMPLICIT_KEY`,`A block sequence may not be used as an implicit map key`):`indent`in u&&u.indent!==r.indent&&i(s,`BAD_INDENT`,ln)),!p.anchor&&!p.tag&&!d){c=p.end,p.comment&&(o.comment?o.comment+=`
`+p.comment:o.comment=p.comment);continue}(p.newlineAfterProp||Y(u))&&i(u??l[l.length-1],`MULTILINE_IMPLICIT_KEY`,`Implicit keys need to be on a single line`)}else p.found?.indent!==r.indent&&i(s,`BAD_INDENT`,ln);n.atKey=!0;let h=p.end,g=u?e(n,u,p,i):t(n,h,l,null,p,i);n.schema.compat&&sn(r.indent,u,i),n.atKey=!1,cn(n,o.items,g)&&i(h,`DUPLICATE_KEY`,`Map keys must be unique`);let _=J(d??[],{indicator:`map-value-ind`,next:f,offset:g.range[2],onError:i,parentIndent:r.indent,startOnNewline:!u||u.type===`block-scalar`});if(s=_.end,_.found){m&&(f?.type===`block-map`&&!_.hasNewline&&i(s,`BLOCK_AS_IMPLICIT_KEY`,`Nested mappings are not allowed in compact mappings`),n.options.strict&&p.start<_.found.offset-1024&&i(g.range,`KEY_OVER_1024_CHARS`,`The : indicator must be at most 1024 chars after the start of an implicit block mapping key`));let c=f?e(n,f,_,i):t(n,s,d,null,_,i);n.schema.compat&&sn(r.indent,f,i),s=c.range[2];let l=new B(g,c);n.options.keepSourceTokens&&(l.srcToken=a),o.items.push(l)}else{m&&i(g.range,`MISSING_CHAR`,`Implicit map keys need to be followed by map values`),_.comment&&(g.comment?g.comment+=`
`+_.comment:g.comment=_.comment);let e=new B(g);n.options.keepSourceTokens&&(e.srcToken=a),o.items.push(e)}}return c&&c<s&&i(c,`IMPOSSIBLE`,`Map comment with trailing content`),o.range=[r.offset,s,c??s],o}function dn({composeNode:e,composeEmptyNode:t},n,r,i,a){let o=new((a?.nodeClass)??W)(n.schema);n.atRoot&&=!1,n.atKey&&=!1;let s=r.offset,c=null;for(let{start:a,value:l}of r.items){let u=J(a,{indicator:`seq-item-ind`,next:l,offset:s,onError:i,parentIndent:r.indent,startOnNewline:!0});if(!u.found){if(u.anchor||u.tag||l)l?.type===`block-seq`?i(u.end,`BAD_INDENT`,`All sequence items must start at the same column`):i(s,`MISSING_CHAR`,`Sequence item without - indicator`);else{c=u.end,u.comment&&(o.comment=u.comment);continue}}let d=l?e(n,l,u,i):t(n,u.end,a,null,u,i);n.schema.compat&&sn(r.indent,l,i),s=d.range[2],o.items.push(d)}return o.range=[r.offset,s,c??s],o}function fn(e,t,n,r){let i=``;if(e){let a=!1,o=``;for(let s of e){let{source:e,type:c}=s;switch(c){case`space`:a=!0;break;case`comment`:{n&&!a&&r(s,`MISSING_CHAR`,`Comments must be separated from other tokens by white space characters`);let t=e.substring(1)||` `;i?i+=o+t:i=t,o=``;break}case`newline`:i&&(o+=e),a=!0;break;default:r(s,`UNEXPECTED_TOKEN`,`Unexpected ${c} at node end`)}t+=e.length}}return{comment:i,offset:t}}var pn=`Block collections are not allowed within flow collections`,mn=e=>e&&(e.type===`block-map`||e.type===`block-seq`);function hn({composeNode:e,composeEmptyNode:t},n,r,i,a){let o=r.start.source===`{`,s=o?`flow map`:`flow sequence`,c=new((a?.nodeClass)??(o?H:W))(n.schema);c.flow=!0;let l=n.atRoot;l&&(n.atRoot=!1),n.atKey&&=!1;let u=r.offset+r.start.source.length;for(let a=0;a<r.items.length;++a){let l=r.items[a],{start:d,key:f,sep:p,value:m}=l,h=J(d,{flow:s,indicator:`explicit-key-ind`,next:f??p?.[0],offset:u,onError:i,parentIndent:r.indent,startOnNewline:!1});if(!h.found){if(!h.anchor&&!h.tag&&!p&&!m){a===0&&h.comma?i(h.comma,`UNEXPECTED_TOKEN`,`Unexpected , in ${s}`):a<r.items.length-1&&i(h.start,`UNEXPECTED_TOKEN`,`Unexpected empty item in ${s}`),h.comment&&(c.comment?c.comment+=`
`+h.comment:c.comment=h.comment),u=h.end;continue}!o&&n.options.strict&&Y(f)&&i(f,`MULTILINE_IMPLICIT_KEY`,`Implicit keys of flow sequence pairs need to be on a single line`)}if(a===0)h.comma&&i(h.comma,`UNEXPECTED_TOKEN`,`Unexpected , in ${s}`);else if(h.comma||i(h.start,`MISSING_CHAR`,`Missing , between ${s} items`),h.comment){let e=``;loop:for(let t of d)switch(t.type){case`comma`:case`space`:break;case`comment`:e=t.source.substring(1);break loop;default:break loop}if(e){let t=c.items[c.items.length-1];w(t)&&(t=t.value??t.key),t.comment?t.comment+=`
`+e:t.comment=e,h.comment=h.comment.substring(e.length+1)}}if(!o&&!p&&!h.found){let r=m?e(n,m,h,i):t(n,h.end,p,null,h,i);c.items.push(r),u=r.range[2],mn(m)&&i(r.range,`BLOCK_IN_FLOW`,pn)}else{n.atKey=!0;let a=h.end,g=f?e(n,f,h,i):t(n,a,d,null,h,i);mn(f)&&i(g.range,`BLOCK_IN_FLOW`,pn),n.atKey=!1;let _=J(p??[],{flow:s,indicator:`map-value-ind`,next:m,offset:g.range[2],onError:i,parentIndent:r.indent,startOnNewline:!1});if(_.found){if(!o&&!h.found&&n.options.strict){if(p)for(let e of p){if(e===_.found)break;if(e.type===`newline`){i(e,`MULTILINE_IMPLICIT_KEY`,`Implicit keys of flow sequence pairs need to be on a single line`);break}}h.start<_.found.offset-1024&&i(_.found,`KEY_OVER_1024_CHARS`,`The : indicator must be at most 1024 chars after the start of an implicit flow sequence key`)}}else m&&(`source`in m&&m.source?.[0]===`:`?i(m,`MISSING_CHAR`,`Missing space after : in ${s}`):i(_.start,`MISSING_CHAR`,`Missing , or : between ${s} items`));let v=m?e(n,m,_,i):_.found?t(n,_.end,p,null,_,i):null;v?mn(m)&&i(v.range,`BLOCK_IN_FLOW`,pn):_.comment&&(g.comment?g.comment+=`
`+_.comment:g.comment=_.comment);let y=new B(g,v);if(n.options.keepSourceTokens&&(y.srcToken=l),o){let e=c;cn(n,e.items,g)&&i(a,`DUPLICATE_KEY`,`Map keys must be unique`),e.items.push(y)}else{let e=new H(n.schema);e.flow=!0,e.items.push(y);let t=(v??g).range;e.range=[g.range[0],t[1],t[2]],c.items.push(e)}u=v?v.range[2]:_.end}}let d=o?`}`:`]`,[f,...p]=r.end,m=u;if(f?.source===d)m=f.offset+f.source.length;else{let e=s[0].toUpperCase()+s.substring(1),t=l?`${e} must end with a ${d}`:`${e} in block collection must be sufficiently indented and end with a ${d}`;i(u,l?`MISSING_CHAR`:`BAD_INDENT`,t),f&&f.source.length!==1&&p.unshift(f)}if(p.length>0){let e=fn(p,m,n.options.strict,i);e.comment&&(c.comment?c.comment+=`
`+e.comment:c.comment=e.comment),c.range=[r.offset,m,e.offset]}else c.range=[r.offset,m,m];return c}function gn(e,t,n,r,i,a){let o=n.type===`block-map`?un(e,t,n,r,a):n.type===`block-seq`?dn(e,t,n,r,a):hn(e,t,n,r,a),s=o.constructor;return i===`!`||i===s.tagName?(o.tag=s.tagName,o):(i&&(o.tag=i),o)}function _n(e,t,n,r,i){let a=r.tag,o=a?t.directives.tagName(a.source,e=>i(a,`TAG_RESOLVE_FAILED`,e)):null;if(n.type===`block-seq`){let{anchor:e,newlineAfterProp:t}=r,n=e&&a?e.offset>a.offset?e:a:e??a;n&&(!t||t.offset<n.offset)&&i(n,`MISSING_CHAR`,`Missing newline after block sequence props`)}let s=n.type===`block-map`?`map`:n.type===`block-seq`?`seq`:n.start.source===`{`?`map`:`seq`;if(!a||!o||o===`!`||o===H.tagName&&s===`map`||o===W.tagName&&s===`seq`)return gn(e,t,n,i,o);let c=t.schema.tags.find(e=>e.tag===o&&e.collection===s);if(!c){let r=t.schema.knownTags[o];if(r?.collection===s)t.schema.tags.push(Object.assign({},r,{default:!1})),c=r;else return r?i(a,`BAD_COLLECTION_TYPE`,`${r.tag} used for ${s} collection, but expects ${r.collection??`scalar`}`,!0):i(a,`TAG_RESOLVE_FAILED`,`Unresolved tag: ${o}`,!0),gn(e,t,n,i,o)}let l=gn(e,t,n,i,o,c),u=c.resolve?.(l,e=>i(a,`TAG_RESOLVE_FAILED`,e),t.options)??l,d=D(u)?u:new P(u);return d.range=l.range,d.tag=o,c?.format&&(d.format=c.format),d}function vn(e,t,n){let r=t.offset,i=yn(t,e.options.strict,n);if(!i)return{value:``,type:null,comment:``,range:[r,r,r]};let a=i.mode===`>`?P.BLOCK_FOLDED:P.BLOCK_LITERAL,o=t.source?bn(t.source):[],s=o.length;for(let e=o.length-1;e>=0;--e){let t=o[e][1];if(t===``||t===`\r`)s=e;else break}if(s===0){let e=i.chomp===`+`&&o.length>0?`
`.repeat(Math.max(1,o.length-1)):``,n=r+i.length;return t.source&&(n+=t.source.length),{value:e,type:a,comment:i.comment,range:[r,n,n]}}let c=t.indent+i.indent,l=t.offset+i.length,u=0;for(let t=0;t<s;++t){let[r,a]=o[t];if(a===``||a===`\r`)i.indent===0&&r.length>c&&(c=r.length);else{r.length<c&&n(l+r.length,`MISSING_CHAR`,`Block scalars with more-indented leading empty lines must use an explicit indentation indicator`),i.indent===0&&(c=r.length),u=t,c===0&&!e.atRoot&&n(l,`BAD_INDENT`,`Block scalar values in collections must be indented`);break}l+=r.length+a.length+1}for(let e=o.length-1;e>=s;--e)o[e][0].length>c&&(s=e+1);let d=``,f=``,p=!1;for(let e=0;e<u;++e)d+=o[e][0].slice(c)+`
`;for(let e=u;e<s;++e){let[t,r]=o[e];l+=t.length+r.length+1;let s=r[r.length-1]===`\r`;if(s&&(r=r.slice(0,-1)),r&&t.length<c){let e=`Block scalar lines must not be less indented than their ${i.indent?`explicit indentation indicator`:`first line`}`;n(l-r.length-(s?2:1),`BAD_INDENT`,e),t=``}a===P.BLOCK_LITERAL?(d+=f+t.slice(c)+r,f=`
`):t.length>c||r[0]===`	`?(f===` `?f=`
`:!p&&f===`
`&&(f=`

`),d+=f+t.slice(c)+r,f=`
`,p=!0):r===``?f===`
`?d+=`
`:f=`
`:(d+=f+r,f=` `,p=!1)}switch(i.chomp){case`-`:break;case`+`:for(let e=s;e<o.length;++e)d+=`
`+o[e][0].slice(c);d[d.length-1]!==`
`&&(d+=`
`);break;default:d+=`
`}let m=r+i.length+t.source.length;return{value:d,type:a,comment:i.comment,range:[r,m,m]}}function yn({offset:e,props:t},n,r){if(t[0].type!==`block-scalar-header`)return r(t[0],`IMPOSSIBLE`,`Block scalar header not found`),null;let{source:i}=t[0],a=i[0],o=0,s=``,c=-1;for(let t=1;t<i.length;++t){let n=i[t];if(!s&&(n===`-`||n===`+`))s=n;else{let r=Number(n);!o&&r?o=r:c===-1&&(c=e+t)}}c!==-1&&r(c,`UNEXPECTED_TOKEN`,`Block scalar header includes extra characters: ${i}`);let l=!1,u=``,d=i.length;for(let e=1;e<t.length;++e){let i=t[e];switch(i.type){case`space`:l=!0;case`newline`:d+=i.source.length;break;case`comment`:n&&!l&&r(i,`MISSING_CHAR`,`Comments must be separated from other tokens by white space characters`),d+=i.source.length,u=i.source.substring(1);break;case`error`:r(i,`UNEXPECTED_TOKEN`,i.message),d+=i.source.length;break;default:{r(i,`UNEXPECTED_TOKEN`,`Unexpected token in block scalar header: ${i.type}`);let e=i.source;e&&typeof e==`string`&&(d+=e.length)}}}return{mode:a,indent:o,chomp:s,comment:u,length:d}}function bn(e){let t=e.split(/\n( *)/),n=t[0],r=n.match(/^( *)/),i=[r?.[1]?[r[1],n.slice(r[1].length)]:[``,n]];for(let e=1;e<t.length;e+=2)i.push([t[e],t[e+1]]);return i}function xn(e,t,n){let{offset:r,type:i,source:a,end:o}=e,s,c,l=(e,t,i)=>n(r+e,t,i);switch(i){case`scalar`:s=P.PLAIN,c=Sn(a,l);break;case`single-quoted-scalar`:s=P.QUOTE_SINGLE,c=Cn(a,l);break;case`double-quoted-scalar`:s=P.QUOTE_DOUBLE,c=Tn(a,l);break;default:return n(e,`UNEXPECTED_TOKEN`,`Expected a flow scalar value, but found: ${i}`),{value:``,type:null,comment:``,range:[r,r+a.length,r+a.length]}}let u=r+a.length,d=fn(o,u,t,n);return{value:c,type:s,comment:d.comment,range:[r,u,d.offset]}}function Sn(e,t){let n=``;switch(e[0]){case`	`:n=`a tab character`;break;case`,`:n=`flow indicator character ,`;break;case`%`:n=`directive indicator character %`;break;case`|`:case`>`:n=`block scalar indicator ${e[0]}`;break;case`@`:case"`":n=`reserved character ${e[0]}`}return n&&t(0,`BAD_SCALAR_START`,`Plain value cannot start with ${n}`),wn(e)}function Cn(e,t){return(e[e.length-1]!==`'`||e.length===1)&&t(e.length,`MISSING_CHAR`,`Missing closing 'quote`),wn(e.slice(1,-1)).replace(/''/g,`'`)}function wn(e){let t,n;try{t=RegExp(`(.*?)(?<![ 	])[ 	]*\r?
`,`sy`),n=RegExp(`[ 	]*(.*?)(?:(?<![ 	])[ 	]*)?\r?
`,`sy`)}catch{t=/(.*?)[ \t]*\r?\n/sy,n=/[ \t]*(.*?)[ \t]*\r?\n/sy}let r=t.exec(e);if(!r)return e;let i=r[1],a=` `,o=t.lastIndex;for(n.lastIndex=o;r=n.exec(e);)r[1]===``?a===`
`?i+=a:a=`
`:(i+=a+r[1],a=` `),o=n.lastIndex;let s=/[ \t]*(.*)/sy;return s.lastIndex=o,r=s.exec(e),i+a+(r?.[1]??``)}function Tn(e,t){let n=``;for(let r=1;r<e.length-1;++r){let i=e[r];if(i!==`\r`||e[r+1]!==`
`){if(i===`
`){let{fold:t,offset:i}=En(e,r);n+=t,r=i}else if(i===`\\`){let i=e[++r],a=Dn[i];if(a)n+=a;else if(i===`
`)for(i=e[r+1];i===` `||i===`	`;)i=e[++r+1];else if(i===`\r`&&e[r+1]===`
`)for(i=e[++r+1];i===` `||i===`	`;)i=e[++r+1];else if(i===`x`||i===`u`||i===`U`){let a=i===`x`?2:i===`u`?4:8;n+=On(e,r+1,a,t),r+=a}else{let i=e.substr(r-1,2);t(r-1,`BAD_DQ_ESCAPE`,`Invalid escape sequence ${i}`),n+=i}}else if(i===` `||i===`	`){let t=r,a=e[r+1];for(;a===` `||a===`	`;)a=e[++r+1];a!==`
`&&(a!==`\r`||e[r+2]!==`
`)&&(n+=r>t?e.slice(t,r+1):i)}else n+=i}}return(e[e.length-1]!==`"`||e.length===1)&&t(e.length,`MISSING_CHAR`,`Missing closing "quote`),n}function En(e,t){let n=``,r=e[t+1];for(;(r===` `||r===`	`||r===`
`||r===`\r`)&&(r!==`\r`||e[t+2]===`
`);)r===`
`&&(n+=`
`),t+=1,r=e[t+1];return n||=` `,{fold:n,offset:t}}var Dn={0:`\0`,a:`\x07`,b:`\b`,e:`\x1B`,f:`\f`,n:`
`,r:`\r`,t:`	`,v:`\v`,N:``,_:`\xA0`,L:`\u2028`,P:`\u2029`," ":` `,'"':`"`,"/":`/`,"\\":`\\`,"	":`	`};function On(e,t,n,r){let i=e.substr(t,n),a=i.length===n&&/^[0-9a-fA-F]+$/.test(i)?parseInt(i,16):NaN;try{return String.fromCodePoint(a)}catch{let i=e.substr(t-2,n+2);return r(t-2,`BAD_DQ_ESCAPE`,`Invalid escape sequence ${i}`),i}}function kn(e,t,n,r){let{value:i,type:a,comment:o,range:s}=t.type===`block-scalar`?vn(e,t,r):xn(t,e.options.strict,r),c=n?e.directives.tagName(n.source,e=>r(n,`TAG_RESOLVE_FAILED`,e)):null,l;l=e.options.stringKeys&&e.atKey?e.schema[b]:c?An(e.schema,i,c,n,r):t.type===`scalar`?jn(e,i,t,r):e.schema[b];let u;try{let a=l.resolve(i,e=>r(n??t,`TAG_RESOLVE_FAILED`,e),e.options);u=T(a)?a:new P(a)}catch(e){let a=e instanceof Error?e.message:String(e);r(n??t,`TAG_RESOLVE_FAILED`,a),u=new P(i)}return u.range=s,u.source=i,a&&(u.type=a),c&&(u.tag=c),l.format&&(u.format=l.format),o&&(u.comment=o),u}function An(e,t,n,r,i){if(n===`!`)return e[b];let a=[];for(let t of e.tags)if(!t.collection&&t.tag===n){if(t.default&&t.test)a.push(t);else return t}for(let e of a)if(e.test?.test(t))return e;let o=e.knownTags[n];return o&&!o.collection?(e.tags.push(Object.assign({},o,{default:!1,test:void 0})),o):(i(r,`TAG_RESOLVE_FAILED`,`Unresolved tag: ${n}`,n!==`tag:yaml.org,2002:str`),e[b])}function jn({atKey:e,directives:t,schema:n},r,i,a){let o=n.tags.find(t=>(t.default===!0||e&&t.default===`key`)&&t.test?.test(r))||n[b];if(n.compat){let e=n.compat.find(e=>e.default&&e.test?.test(r))??n[b];o.tag!==e.tag&&a(i,`TAG_RESOLVE_FAILED`,`Value may be parsed as either ${t.tagString(o.tag)} or ${t.tagString(e.tag)}`,!0)}return o}function Mn(e,t,n){if(t){n??=t.length;for(let r=n-1;r>=0;--r){let n=t[r];switch(n.type){case`space`:case`comment`:case`newline`:e-=n.source.length;continue}for(n=t[++r];n?.type===`space`;)e+=n.source.length,n=t[++r];break}}return e}var Nn={composeNode:Pn,composeEmptyNode:Fn};function Pn(e,t,n,r){let i=e.atKey,{spaceBefore:a,comment:o,anchor:s,tag:c}=n,l,u=!0;switch(t.type){case`alias`:l=In(e,t,r),(s||c)&&r(t,`ALIAS_PROPS`,`An alias node must not specify any properties`);break;case`scalar`:case`single-quoted-scalar`:case`double-quoted-scalar`:case`block-scalar`:l=kn(e,t,c,r),s&&(l.anchor=s.source.substring(1));break;case`block-map`:case`block-seq`:case`flow-collection`:try{l=_n(Nn,e,t,n,r),s&&(l.anchor=s.source.substring(1))}catch(e){r(t,`RESOURCE_EXHAUSTION`,e instanceof Error?e.message:String(e))}break;default:r(t,`UNEXPECTED_TOKEN`,t.type===`error`?t.message:`Unsupported token (type: ${t.type})`),u=!1}return l??=Fn(e,t.offset,void 0,null,n,r),s&&l.anchor===``&&r(s,`BAD_ALIAS`,`Anchor cannot be an empty string`),i&&e.options.stringKeys&&(!T(l)||typeof l.value!=`string`||l.tag&&l.tag!==`tag:yaml.org,2002:str`)&&r(c??t,`NON_STRING_KEY`,`With stringKeys, all keys must be strings`),a&&(l.spaceBefore=!0),o&&(t.type===`scalar`&&t.source===``?l.comment=o:l.commentBefore=o),e.options.keepSourceTokens&&u&&(l.srcToken=t),l}function Fn(e,t,n,r,{spaceBefore:i,comment:a,anchor:o,tag:s,end:c},l){let u=kn(e,{type:`scalar`,offset:Mn(t,n,r),indent:-1,source:``},s,l);return o&&(u.anchor=o.source.substring(1),u.anchor===``&&l(o,`BAD_ALIAS`,`Anchor cannot be an empty string`)),i&&(u.spaceBefore=!0),a&&(u.comment=a,u.range[2]=c),u}function In({options:e},{offset:t,source:n,end:r},i){let a=new ge(n.substring(1));a.source===``&&i(t,`BAD_ALIAS`,`Alias cannot be an empty string`),a.source.endsWith(`:`)&&i(t+n.length-1,`BAD_ALIAS`,`Alias ending in : is ambiguous`,!0);let o=t+n.length,s=fn(r,o,e.strict,i);return a.range=[t,o,s.offset],s.comment&&(a.comment=s.comment),a}function Ln(e,t,{offset:n,start:r,value:i,end:a},o){let s=new tn(void 0,Object.assign({_directives:t},e)),c={atKey:!1,atRoot:!0,directives:s.directives,options:s.options,schema:s.schema},l=J(r,{indicator:`doc-start`,next:i??a?.[0],offset:n,onError:o,parentIndent:0,startOnNewline:!0});l.found&&(s.directives.docStart=!0,i&&(i.type===`block-map`||i.type===`block-seq`)&&!l.hasNewline&&o(l.end,`MISSING_CHAR`,`Block collection cannot start on same line with directives-end marker`)),s.contents=i?Pn(c,i,l,o):Fn(c,l.end,r,null,l,o);let u=s.contents.range[2],d=fn(a,u,!1,o);return d.comment&&(s.comment=d.comment),s.range=[n,u,d.offset],s}function Rn(e){if(typeof e==`number`)return[e,e+1];if(Array.isArray(e))return e.length===2?e:[e[0],e[1]];let{offset:t,source:n}=e;return[t,t+(typeof n==`string`?n.length:1)]}function zn(e){let t=``,n=!1,r=!1;for(let i=0;i<e.length;++i){let a=e[i];switch(a[0]){case`#`:t+=(t===``?``:r?`

`:`
`)+(a.substring(1)||` `),n=!0,r=!1;break;case`%`:e[i+1]?.[0]!==`#`&&(i+=1),n=!1;break;default:n||(r=!0),n=!1}}return{comment:t,afterEmptyLine:r}}var Bn=class{constructor(e={}){this.doc=null,this.atDirectives=!1,this.prelude=[],this.errors=[],this.warnings=[],this.onError=(e,t,n,r)=>{let i=Rn(e);r?this.warnings.push(new an(i,t,n)):this.errors.push(new rn(i,t,n))},this.directives=new j({version:e.version||`1.2`}),this.options=e}decorate(e,t){let{comment:n,afterEmptyLine:r}=zn(this.prelude);if(n){let i=e.contents;if(t)e.comment=e.comment?`${e.comment}\n${n}`:n;else if(r||e.directives.docStart||!i)e.commentBefore=n;else if(E(i)&&!i.flow&&i.items.length>0){let e=i.items[0];w(e)&&(e=e.key);let t=e.commentBefore;e.commentBefore=t?`${n}\n${t}`:n}else{let e=i.commentBefore;i.commentBefore=e?`${n}\n${e}`:n}}if(t){for(let t=0;t<this.errors.length;++t)e.errors.push(this.errors[t]);for(let t=0;t<this.warnings.length;++t)e.warnings.push(this.warnings[t])}else e.errors=this.errors,e.warnings=this.warnings;this.prelude=[],this.errors=[],this.warnings=[]}streamInfo(){return{comment:zn(this.prelude).comment,directives:this.directives,errors:this.errors,warnings:this.warnings}}*compose(e,t=!1,n=-1){for(let t of e)yield*this.next(t);yield*this.end(t,n)}*next(e){switch(e.type){case`directive`:this.directives.add(e.source,(t,n,r)=>{let i=Rn(e);i[0]+=t,this.onError(i,`BAD_DIRECTIVE`,n,r)}),this.prelude.push(e.source),this.atDirectives=!0;break;case`document`:{let t=Ln(this.options,this.directives,e,this.onError);this.atDirectives&&!t.directives.docStart&&this.onError(e,`MISSING_CHAR`,`Missing directives-end/doc-start indicator line`),this.decorate(t,!1),this.doc&&(yield this.doc),this.doc=t,this.atDirectives=!1;break}case`byte-order-mark`:case`space`:break;case`comment`:case`newline`:this.prelude.push(e.source);break;case`error`:{let t=e.source?`${e.message}: ${JSON.stringify(e.source)}`:e.message,n=new rn(Rn(e),`UNEXPECTED_TOKEN`,t);this.atDirectives||!this.doc?this.errors.push(n):this.doc.errors.push(n);break}case`doc-end`:{if(!this.doc){this.errors.push(new rn(Rn(e),`UNEXPECTED_TOKEN`,`Unexpected doc-end without preceding document`));break}this.doc.directives.docEnd=!0;let t=fn(e.end,e.offset+e.source.length,this.doc.options.strict,this.onError);if(this.decorate(this.doc,!0),t.comment){let e=this.doc.comment;this.doc.comment=e?`${e}\n${t.comment}`:t.comment}this.doc.range[2]=t.offset;break}default:this.errors.push(new rn(Rn(e),`UNEXPECTED_TOKEN`,`Unsupported token ${e.type}`))}}*end(e=!1,t=-1){if(this.doc)this.decorate(this.doc,!0),yield this.doc,this.doc=null;else if(e){let e=new tn(void 0,Object.assign({_directives:this.directives},this.options));this.atDirectives&&this.onError(t,`MISSING_CHAR`,`Missing directives-end indicator line`),e.range=[0,t,t],this.decorate(e,!1),yield e}}},Vn=Symbol(`break visit`),Hn=Symbol(`skip children`),Un=Symbol(`remove item`);function X(e,t){`type`in e&&e.type===`document`&&(e={start:e.start,value:e.value}),Wn(Object.freeze([]),e,t)}X.BREAK=Vn,X.SKIP=Hn,X.REMOVE=Un,X.itemAtPath=(e,t)=>{let n=e;for(let[e,r]of t){let t=n?.[e];if(t&&`items`in t)n=t.items[r];else return}return n},X.parentCollection=(e,t)=>{let n=X.itemAtPath(e,t.slice(0,-1)),r=t[t.length-1][0],i=n?.[r];if(i&&`items`in i)return i;throw Error(`Parent collection not found`)};function Wn(e,t,n){let r=n(t,e);if(typeof r==`symbol`)return r;for(let i of[`key`,`value`]){let a=t[i];if(a&&`items`in a){for(let t=0;t<a.items.length;++t){let r=Wn(Object.freeze(e.concat([[i,t]])),a.items[t],n);if(typeof r==`number`)t=r-1;else if(r===Vn)return Vn;else r===Un&&(a.items.splice(t,1),--t)}typeof r==`function`&&i===`key`&&(r=r(t,e))}}return typeof r==`function`?r(t,e):r}function Gn(e){switch(e){case`﻿`:return`byte-order-mark`;case``:return`doc-mode`;case``:return`flow-error-end`;case``:return`scalar`;case`---`:return`doc-start`;case`...`:return`doc-end`;case``:case`
`:case`\r
`:return`newline`;case`-`:return`seq-item-ind`;case`?`:return`explicit-key-ind`;case`:`:return`map-value-ind`;case`{`:return`flow-map-start`;case`}`:return`flow-map-end`;case`[`:return`flow-seq-start`;case`]`:return`flow-seq-end`;case`,`:return`comma`}switch(e[0]){case` `:case`	`:return`space`;case`#`:return`comment`;case`%`:return`directive-line`;case`*`:return`alias`;case`&`:return`anchor`;case`!`:return`tag`;case`'`:return`single-quoted-scalar`;case`"`:return`double-quoted-scalar`;case`|`:case`>`:return`block-scalar-header`}return null}function Z(e){switch(e){case void 0:case` `:case`
`:case`\r`:case`	`:return!0;default:return!1}}var Kn=new Set(`0123456789ABCDEFabcdef`),qn=new Set(`0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()`),Jn=new Set(`,[]{}`),Yn=new Set(` ,[]{}
\r	`),Xn=e=>!e||Yn.has(e),Zn=class{constructor(){this.atEnd=!1,this.blockScalarIndent=-1,this.blockScalarKeep=!1,this.buffer=``,this.flowKey=!1,this.flowLevel=0,this.indentNext=0,this.indentValue=0,this.lineEndPos=null,this.next=null,this.pos=0}*lex(e,t=!1){if(e){if(typeof e!=`string`)throw TypeError(`source is not a string`);this.buffer=this.buffer?this.buffer+e:e,this.lineEndPos=null}this.atEnd=!t;let n=this.next??`stream`;for(;n&&(t||this.hasChars(1));)n=yield*this.parseNext(n)}atLineEnd(){let e=this.pos,t=this.buffer[e];for(;t===` `||t===`	`;)t=this.buffer[++e];return!t||t===`#`||t===`
`||t===`\r`&&this.buffer[e+1]===`
`}charAt(e){return this.buffer[this.pos+e]}continueScalar(e){let t=this.buffer[e];if(this.indentNext>0){let n=0;for(;t===` `;)t=this.buffer[++n+e];if(t===`\r`){let t=this.buffer[n+e+1];if(t===`
`||!t&&!this.atEnd)return e+n+1}return t===`
`||n>=this.indentNext||!t&&!this.atEnd?e+n:-1}if(t===`-`||t===`.`){let t=this.buffer.substr(e,3);if((t===`---`||t===`...`)&&Z(this.buffer[e+3]))return-1}return e}getLine(){let e=this.lineEndPos;return(typeof e!=`number`||e!==-1&&e<this.pos)&&(e=this.buffer.indexOf(`
`,this.pos),this.lineEndPos=e),e===-1?this.atEnd?this.buffer.substring(this.pos):null:(this.buffer[e-1]===`\r`&&--e,this.buffer.substring(this.pos,e))}hasChars(e){return this.pos+e<=this.buffer.length}setNext(e){return this.buffer=this.buffer.substring(this.pos),this.pos=0,this.lineEndPos=null,this.next=e,null}peek(e){return this.buffer.substr(this.pos,e)}*parseNext(e){switch(e){case`stream`:return yield*this.parseStream();case`line-start`:return yield*this.parseLineStart();case`block-start`:return yield*this.parseBlockStart();case`doc`:return yield*this.parseDocument();case`flow`:return yield*this.parseFlowCollection();case`quoted-scalar`:return yield*this.parseQuotedScalar();case`block-scalar`:return yield*this.parseBlockScalar();case`plain-scalar`:return yield*this.parsePlainScalar()}}*parseStream(){let e=this.getLine();if(e===null)return this.setNext(`stream`);if(e[0]===`﻿`&&(yield*this.pushCount(1),e=e.substring(1)),e[0]===`%`){let t=e.length,n=e.indexOf(`#`);for(;n!==-1;){let r=e[n-1];if(r===` `||r===`	`){t=n-1;break}n=e.indexOf(`#`,n+1)}for(;;){let n=e[t-1];if(n===` `||n===`	`)--t;else break}let r=(yield*this.pushCount(t))+(yield*this.pushSpaces(!0));return yield*this.pushCount(e.length-r),this.pushNewline(),`stream`}if(this.atLineEnd()){let t=yield*this.pushSpaces(!0);return yield*this.pushCount(e.length-t),yield*this.pushNewline(),`stream`}return yield``,yield*this.parseLineStart()}*parseLineStart(){let e=this.charAt(0);if(!e&&!this.atEnd)return this.setNext(`line-start`);if(e===`-`||e===`.`){if(!this.atEnd&&!this.hasChars(4))return this.setNext(`line-start`);let e=this.peek(3);if((e===`---`||e===`...`)&&Z(this.charAt(3)))return yield*this.pushCount(3),this.indentValue=0,this.indentNext=0,e===`---`?`doc`:`stream`}return this.indentValue=yield*this.pushSpaces(!1),this.indentNext>this.indentValue&&!Z(this.charAt(1))&&(this.indentNext=this.indentValue),yield*this.parseBlockStart()}*parseBlockStart(){let[e,t]=this.peek(2);if(!t&&!this.atEnd)return this.setNext(`block-start`);if((e===`-`||e===`?`||e===`:`)&&Z(t)){let e=(yield*this.pushCount(1))+(yield*this.pushSpaces(!0));return this.indentNext=this.indentValue+1,this.indentValue+=e,`block-start`}return`doc`}*parseDocument(){yield*this.pushSpaces(!0);let e=this.getLine();if(e===null)return this.setNext(`doc`);let t=yield*this.pushIndicators();switch(e[t]){case`#`:yield*this.pushCount(e.length-t);case void 0:return yield*this.pushNewline(),yield*this.parseLineStart();case`{`:case`[`:return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel=1,`flow`;case`}`:case`]`:return yield*this.pushCount(1),`doc`;case`*`:return yield*this.pushUntil(Xn),`doc`;case`"`:case`'`:return yield*this.parseQuotedScalar();case`|`:case`>`:return t+=yield*this.parseBlockScalarHeader(),t+=yield*this.pushSpaces(!0),yield*this.pushCount(e.length-t),yield*this.pushNewline(),yield*this.parseBlockScalar();default:return yield*this.parsePlainScalar()}}*parseFlowCollection(){let e,t,n=-1;do e=yield*this.pushNewline(),e>0?(t=yield*this.pushSpaces(!1),this.indentValue=n=t):t=0,t+=yield*this.pushSpaces(!0);while(e+t>0);let r=this.getLine();if(r===null)return this.setNext(`flow`);if((n!==-1&&n<this.indentNext&&r[0]!==`#`||n===0&&(r.startsWith(`---`)||r.startsWith(`...`))&&Z(r[3]))&&(n!==this.indentNext-1||this.flowLevel!==1||r[0]!==`]`&&r[0]!==`}`))return this.flowLevel=0,yield``,yield*this.parseLineStart();let i=0;for(;r[i]===`,`;)i+=yield*this.pushCount(1),i+=yield*this.pushSpaces(!0),this.flowKey=!1;switch(i+=yield*this.pushIndicators(),r[i]){case void 0:return`flow`;case`#`:return yield*this.pushCount(r.length-i),`flow`;case`{`:case`[`:return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel+=1,`flow`;case`}`:case`]`:return yield*this.pushCount(1),this.flowKey=!0,--this.flowLevel,this.flowLevel?`flow`:`doc`;case`*`:return yield*this.pushUntil(Xn),`flow`;case`"`:case`'`:return this.flowKey=!0,yield*this.parseQuotedScalar();case`:`:{let e=this.charAt(1);if(this.flowKey||Z(e)||e===`,`)return this.flowKey=!1,yield*this.pushCount(1),yield*this.pushSpaces(!0),`flow`}default:return this.flowKey=!1,yield*this.parsePlainScalar()}}*parseQuotedScalar(){let e=this.charAt(0),t=this.buffer.indexOf(e,this.pos+1);if(e===`'`)for(;t!==-1&&this.buffer[t+1]===`'`;)t=this.buffer.indexOf(`'`,t+2);else for(;t!==-1;){let e=0;for(;this.buffer[t-1-e]===`\\`;)e+=1;if(e%2==0)break;t=this.buffer.indexOf(`"`,t+1)}let n=this.buffer.substring(0,t),r=n.indexOf(`
`,this.pos);if(r!==-1){for(;r!==-1;){let e=this.continueScalar(r+1);if(e===-1)break;r=n.indexOf(`
`,e)}r!==-1&&(t=r-(n[r-1]===`\r`?2:1))}if(t===-1){if(!this.atEnd)return this.setNext(`quoted-scalar`);t=this.buffer.length}return yield*this.pushToIndex(t+1,!1),this.flowLevel?`flow`:`doc`}*parseBlockScalarHeader(){this.blockScalarIndent=-1,this.blockScalarKeep=!1;let e=this.pos;for(;;){let t=this.buffer[++e];if(t===`+`)this.blockScalarKeep=!0;else if(t>`0`&&t<=`9`)this.blockScalarIndent=Number(t)-1;else if(t!==`-`)break}return yield*this.pushUntil(e=>Z(e)||e===`#`)}*parseBlockScalar(){let e=this.pos-1,t=0,n;loop:for(let r=this.pos;n=this.buffer[r];++r)switch(n){case` `:t+=1;break;case`
`:e=r,t=0;break;case`\r`:{let e=this.buffer[r+1];if(!e&&!this.atEnd)return this.setNext(`block-scalar`);if(e===`
`)break}default:break loop}if(!n&&!this.atEnd)return this.setNext(`block-scalar`);if(t>=this.indentNext){this.indentNext=this.blockScalarIndent===-1?t:this.blockScalarIndent+(this.indentNext===0?1:this.indentNext);do{let t=this.continueScalar(e+1);if(t===-1)break;e=this.buffer.indexOf(`
`,t)}while(e!==-1);if(e===-1){if(!this.atEnd)return this.setNext(`block-scalar`);e=this.buffer.length}}let r=e+1;for(n=this.buffer[r];n===` `;)n=this.buffer[++r];if(n===`	`){for(;n===`	`||n===` `||n===`\r`||n===`
`;)n=this.buffer[++r];e=r-1}else if(!this.blockScalarKeep)do{let n=e-1,r=this.buffer[n];r===`\r`&&(r=this.buffer[--n]);let i=n;for(;r===` `;)r=this.buffer[--n];if(r===`
`&&n>=this.pos&&n+1+t>i)e=n;else break}while(!0);return yield``,yield*this.pushToIndex(e+1,!0),yield*this.parseLineStart()}*parsePlainScalar(){let e=this.flowLevel>0,t=this.pos-1,n=this.pos-1,r;for(;r=this.buffer[++n];)if(r===`:`){let r=this.buffer[n+1];if(Z(r)||e&&Jn.has(r))break;t=n}else if(Z(r)){let i=this.buffer[n+1];if(r===`\r`&&(i===`
`?(n+=1,r=`
`,i=this.buffer[n+1]):t=n),i===`#`||e&&Jn.has(i))break;if(r===`
`){let e=this.continueScalar(n+1);if(e===-1)break;n=Math.max(n,e-2)}}else{if(e&&Jn.has(r))break;t=n}return!r&&!this.atEnd?this.setNext(`plain-scalar`):(yield``,yield*this.pushToIndex(t+1,!0),e?`flow`:`doc`)}*pushCount(e){return e>0?(yield this.buffer.substr(this.pos,e),this.pos+=e,e):0}*pushToIndex(e,t){let n=this.buffer.slice(this.pos,e);return n?(yield n,this.pos+=n.length,n.length):(t&&(yield``),0)}*pushIndicators(){let e=0;loop:for(;;){switch(this.charAt(0)){case`!`:e+=yield*this.pushTag(),e+=yield*this.pushSpaces(!0);continue loop;case`&`:e+=yield*this.pushUntil(Xn),e+=yield*this.pushSpaces(!0);continue loop;case`-`:case`?`:case`:`:{let t=this.flowLevel>0,n=this.charAt(1);if(Z(n)||t&&Jn.has(n)){t?this.flowKey&&=!1:this.indentNext=this.indentValue+1,e+=yield*this.pushCount(1),e+=yield*this.pushSpaces(!0);continue loop}}}break loop}return e}*pushTag(){if(this.charAt(1)===`<`){let e=this.pos+2,t=this.buffer[e];for(;!Z(t)&&t!==`>`;)t=this.buffer[++e];return yield*this.pushToIndex(t===`>`?e+1:e,!1)}{let e=this.pos+1,t=this.buffer[e];for(;t;)if(qn.has(t))t=this.buffer[++e];else if(t===`%`&&Kn.has(this.buffer[e+1])&&Kn.has(this.buffer[e+2]))t=this.buffer[e+=3];else break;return yield*this.pushToIndex(e,!1)}}*pushNewline(){let e=this.buffer[this.pos];return e===`
`?yield*this.pushCount(1):e===`\r`&&this.charAt(1)===`
`?yield*this.pushCount(2):0}*pushSpaces(e){let t=this.pos-1,n;do n=this.buffer[++t];while(n===` `||e&&n===`	`);let r=t-this.pos;return r>0&&(yield this.buffer.substr(this.pos,r),this.pos=t),r}*pushUntil(e){let t=this.pos,n=this.buffer[t];for(;!e(n);)n=this.buffer[++t];return yield*this.pushToIndex(t,!1)}},Qn=class{constructor(){this.lineStarts=[],this.addNewLine=e=>this.lineStarts.push(e),this.linePos=e=>{let t=0,n=this.lineStarts.length;for(;t<n;){let r=t+n>>1;this.lineStarts[r]<e?t=r+1:n=r}if(this.lineStarts[t]===e)return{line:t+1,col:1};if(t===0)return{line:0,col:e};let r=this.lineStarts[t-1];return{line:t,col:e-r+1}}}};function Q(e,t){for(let n=0;n<e.length;++n)if(e[n].type===t)return!0;return!1}function $n(e){for(let t=0;t<e.length;++t)switch(e[t].type){case`space`:case`comment`:case`newline`:break;default:return t}return-1}function er(e){switch(e?.type){case`alias`:case`scalar`:case`single-quoted-scalar`:case`double-quoted-scalar`:case`flow-collection`:return!0;default:return!1}}function tr(e){switch(e.type){case`document`:return e.start;case`block-map`:{let t=e.items[e.items.length-1];return t.sep??t.start}case`block-seq`:return e.items[e.items.length-1].start;default:return[]}}function $(e){if(e.length===0)return[];let t=e.length;loop:for(;--t>=0;)switch(e[t].type){case`doc-start`:case`explicit-key-ind`:case`map-value-ind`:case`seq-item-ind`:case`newline`:break loop}for(;e[++t]?.type===`space`;);return e.splice(t,e.length)}function nr(e,t){if(t.length<1e5)Array.prototype.push.apply(e,t);else for(let n=0;n<t.length;++n)e.push(t[n])}function rr(e){if(e.start.type===`flow-seq-start`)for(let t of e.items)t.sep&&!t.value&&!Q(t.start,`explicit-key-ind`)&&!Q(t.sep,`map-value-ind`)&&(t.key&&(t.value=t.key),delete t.key,er(t.value)?t.value.end?nr(t.value.end,t.sep):t.value.end=t.sep:nr(t.start,t.sep),delete t.sep)}var ir=class{constructor(e){this.atNewLine=!0,this.atScalar=!1,this.indent=0,this.offset=0,this.onKeyLine=!1,this.stack=[],this.source=``,this.type=``,this.lexer=new Zn,this.onNewLine=e}*parse(e,t=!1){this.onNewLine&&this.offset===0&&this.onNewLine(0);for(let n of this.lexer.lex(e,t))yield*this.next(n);t||(yield*this.end())}*next(e){if(this.source=e,this.atScalar){this.atScalar=!1,yield*this.step(),this.offset+=e.length;return}let t=Gn(e);if(!t){let t=`Not a YAML token: ${e}`;yield*this.pop({type:`error`,offset:this.offset,message:t,source:e}),this.offset+=e.length}else if(t===`scalar`)this.atNewLine=!1,this.atScalar=!0,this.type=`scalar`;else{switch(this.type=t,yield*this.step(),t){case`newline`:this.atNewLine=!0,this.indent=0,this.onNewLine&&this.onNewLine(this.offset+e.length);break;case`space`:this.atNewLine&&e[0]===` `&&(this.indent+=e.length);break;case`explicit-key-ind`:case`map-value-ind`:case`seq-item-ind`:this.atNewLine&&(this.indent+=e.length);break;case`doc-mode`:case`flow-error-end`:return;default:this.atNewLine=!1}this.offset+=e.length}}*end(){for(;this.stack.length>0;)yield*this.pop()}get sourceToken(){return{type:this.type,offset:this.offset,indent:this.indent,source:this.source}}*step(){let e=this.peek(1);if(this.type===`doc-end`&&e?.type!==`doc-end`){for(;this.stack.length>0;)yield*this.pop();this.stack.push({type:`doc-end`,offset:this.offset,source:this.source});return}if(!e)return yield*this.stream();switch(e.type){case`document`:return yield*this.document(e);case`alias`:case`scalar`:case`single-quoted-scalar`:case`double-quoted-scalar`:return yield*this.scalar(e);case`block-scalar`:return yield*this.blockScalar(e);case`block-map`:return yield*this.blockMap(e);case`block-seq`:return yield*this.blockSequence(e);case`flow-collection`:return yield*this.flowCollection(e);case`doc-end`:return yield*this.documentEnd(e)}yield*this.pop()}peek(e){return this.stack[this.stack.length-e]}*pop(e){let t=e??this.stack.pop();if(!t)yield{type:`error`,offset:this.offset,source:``,message:`Tried to pop an empty stack`};else if(this.stack.length===0)yield t;else{let e=this.peek(1);switch(t.type===`block-scalar`?t.indent=`indent`in e?e.indent:0:t.type===`flow-collection`&&e.type===`document`&&(t.indent=0),t.type===`flow-collection`&&rr(t),e.type){case`document`:e.value=t;break;case`block-scalar`:e.props.push(t);break;case`block-map`:{let n=e.items[e.items.length-1];if(n.value){e.items.push({start:[],key:t,sep:[]}),this.onKeyLine=!0;return}if(n.sep)n.value=t;else{Object.assign(n,{key:t,sep:[]}),this.onKeyLine=!n.explicitKey;return}break}case`block-seq`:{let n=e.items[e.items.length-1];n.value?e.items.push({start:[],value:t}):n.value=t;break}case`flow-collection`:{let n=e.items[e.items.length-1];!n||n.value?e.items.push({start:[],key:t,sep:[]}):n.sep?n.value=t:Object.assign(n,{key:t,sep:[]});return}default:yield*this.pop(),yield*this.pop(t)}if((e.type===`document`||e.type===`block-map`||e.type===`block-seq`)&&(t.type===`block-map`||t.type===`block-seq`)){let n=t.items[t.items.length-1];n&&!n.sep&&!n.value&&n.start.length>0&&$n(n.start)===-1&&(t.indent===0||n.start.every(e=>e.type!==`comment`||e.indent<t.indent))&&(e.type===`document`?e.end=n.start:e.items.push({start:n.start}),t.items.splice(-1,1))}}}*stream(){switch(this.type){case`directive-line`:yield{type:`directive`,offset:this.offset,source:this.source};return;case`byte-order-mark`:case`space`:case`comment`:case`newline`:yield this.sourceToken;return;case`doc-mode`:case`doc-start`:{let e={type:`document`,offset:this.offset,start:[]};this.type===`doc-start`&&e.start.push(this.sourceToken),this.stack.push(e);return}}yield{type:`error`,offset:this.offset,message:`Unexpected ${this.type} token in YAML stream`,source:this.source}}*document(e){if(e.value)return yield*this.lineEnd(e);switch(this.type){case`doc-start`:$n(e.start)===-1?e.start.push(this.sourceToken):(yield*this.pop(),yield*this.step());return;case`anchor`:case`tag`:case`space`:case`comment`:case`newline`:e.start.push(this.sourceToken);return}let t=this.startBlockValue(e);t?this.stack.push(t):yield{type:`error`,offset:this.offset,message:`Unexpected ${this.type} token in YAML document`,source:this.source}}*scalar(e){if(this.type===`map-value-ind`){let t=$(tr(this.peek(2))),n;e.end?(n=e.end,n.push(this.sourceToken),delete e.end):n=[this.sourceToken];let r={type:`block-map`,offset:e.offset,indent:e.indent,items:[{start:t,key:e,sep:n}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=r}else yield*this.lineEnd(e)}*blockScalar(e){switch(this.type){case`space`:case`comment`:case`newline`:e.props.push(this.sourceToken);return;case`scalar`:if(e.source=this.source,this.atNewLine=!0,this.indent=0,this.onNewLine){let e=this.source.indexOf(`
`)+1;for(;e!==0;)this.onNewLine(this.offset+e),e=this.source.indexOf(`
`,e)+1}yield*this.pop();break;default:yield*this.pop(),yield*this.step()}}*blockMap(e){let t=e.items[e.items.length-1];switch(this.type){case`newline`:if(this.onKeyLine=!1,t.value){let n=`end`in t.value?t.value.end:void 0;(Array.isArray(n)?n[n.length-1]:void 0)?.type===`comment`?n?.push(this.sourceToken):e.items.push({start:[this.sourceToken]})}else t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case`space`:case`comment`:if(t.value)e.items.push({start:[this.sourceToken]});else if(t.sep)t.sep.push(this.sourceToken);else{if(this.atIndentedComment(t.start,e.indent)){let n=e.items[e.items.length-2]?.value?.end;if(Array.isArray(n)){nr(n,t.start),n.push(this.sourceToken),e.items.pop();return}}t.start.push(this.sourceToken)}return}if(this.indent>=e.indent){let n=!this.onKeyLine&&this.indent===e.indent,r=n&&(t.sep||t.explicitKey)&&this.type!==`seq-item-ind`,i=[];if(r&&t.sep&&!t.value){let n=[];for(let r=0;r<t.sep.length;++r){let i=t.sep[r];switch(i.type){case`newline`:n.push(r);break;case`space`:break;case`comment`:i.indent>e.indent&&(n.length=0);break;default:n.length=0}}n.length>=2&&(i=t.sep.splice(n[1]))}switch(this.type){case`anchor`:case`tag`:r||t.value?(i.push(this.sourceToken),e.items.push({start:i}),this.onKeyLine=!0):t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case`explicit-key-ind`:!t.sep&&!t.explicitKey?(t.start.push(this.sourceToken),t.explicitKey=!0):r||t.value?(i.push(this.sourceToken),e.items.push({start:i,explicitKey:!0})):this.stack.push({type:`block-map`,offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken],explicitKey:!0}]}),this.onKeyLine=!0;return;case`map-value-ind`:if(t.explicitKey){if(!t.sep){if(Q(t.start,`newline`))Object.assign(t,{key:null,sep:[this.sourceToken]});else{let e=$(t.start);this.stack.push({type:`block-map`,offset:this.offset,indent:this.indent,items:[{start:e,key:null,sep:[this.sourceToken]}]})}}else if(t.value)e.items.push({start:[],key:null,sep:[this.sourceToken]});else if(Q(t.sep,`map-value-ind`))this.stack.push({type:`block-map`,offset:this.offset,indent:this.indent,items:[{start:i,key:null,sep:[this.sourceToken]}]});else if(er(t.key)&&!Q(t.sep,`newline`)){let e=$(t.start),n=t.key,r=t.sep;r.push(this.sourceToken),delete t.key,delete t.sep,this.stack.push({type:`block-map`,offset:this.offset,indent:this.indent,items:[{start:e,key:n,sep:r}]})}else i.length>0?t.sep=t.sep.concat(i,this.sourceToken):t.sep.push(this.sourceToken)}else t.sep?t.value||r?e.items.push({start:i,key:null,sep:[this.sourceToken]}):Q(t.sep,`map-value-ind`)?this.stack.push({type:`block-map`,offset:this.offset,indent:this.indent,items:[{start:[],key:null,sep:[this.sourceToken]}]}):t.sep.push(this.sourceToken):Object.assign(t,{key:null,sep:[this.sourceToken]});this.onKeyLine=!0;return;case`alias`:case`scalar`:case`single-quoted-scalar`:case`double-quoted-scalar`:{let n=this.flowScalar(this.type);r||t.value?(e.items.push({start:i,key:n,sep:[]}),this.onKeyLine=!0):t.sep?this.stack.push(n):(Object.assign(t,{key:n,sep:[]}),this.onKeyLine=!0);return}default:{let r=this.startBlockValue(e);if(r){if(r.type===`block-seq`){if(!t.explicitKey&&t.sep&&!Q(t.sep,`newline`)){yield*this.pop({type:`error`,offset:this.offset,message:`Unexpected block-seq-ind on same line with key`,source:this.source});return}}else n&&e.items.push({start:i});this.stack.push(r);return}}}}yield*this.pop(),yield*this.step()}*blockSequence(e){let t=e.items[e.items.length-1];switch(this.type){case`newline`:if(t.value){let n=`end`in t.value?t.value.end:void 0;(Array.isArray(n)?n[n.length-1]:void 0)?.type===`comment`?n?.push(this.sourceToken):e.items.push({start:[this.sourceToken]})}else t.start.push(this.sourceToken);return;case`space`:case`comment`:if(t.value)e.items.push({start:[this.sourceToken]});else{if(this.atIndentedComment(t.start,e.indent)){let n=e.items[e.items.length-2]?.value?.end;if(Array.isArray(n)){nr(n,t.start),n.push(this.sourceToken),e.items.pop();return}}t.start.push(this.sourceToken)}return;case`anchor`:case`tag`:if(t.value||this.indent<=e.indent)break;t.start.push(this.sourceToken);return;case`seq-item-ind`:if(this.indent!==e.indent)break;t.value||Q(t.start,`seq-item-ind`)?e.items.push({start:[this.sourceToken]}):t.start.push(this.sourceToken);return}if(this.indent>e.indent){let t=this.startBlockValue(e);if(t){this.stack.push(t);return}}yield*this.pop(),yield*this.step()}*flowCollection(e){let t=e.items[e.items.length-1];if(this.type===`flow-error-end`){let e;do yield*this.pop(),e=this.peek(1);while(e?.type===`flow-collection`)}else if(e.end.length===0){switch(this.type){case`comma`:case`explicit-key-ind`:!t||t.sep?e.items.push({start:[this.sourceToken]}):t.start.push(this.sourceToken);return;case`map-value-ind`:!t||t.value?e.items.push({start:[],key:null,sep:[this.sourceToken]}):t.sep?t.sep.push(this.sourceToken):Object.assign(t,{key:null,sep:[this.sourceToken]});return;case`space`:case`comment`:case`newline`:case`anchor`:case`tag`:!t||t.value?e.items.push({start:[this.sourceToken]}):t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case`alias`:case`scalar`:case`single-quoted-scalar`:case`double-quoted-scalar`:{let n=this.flowScalar(this.type);!t||t.value?e.items.push({start:[],key:n,sep:[]}):t.sep?this.stack.push(n):Object.assign(t,{key:n,sep:[]});return}case`flow-map-end`:case`flow-seq-end`:e.end.push(this.sourceToken);return}let n=this.startBlockValue(e);n?this.stack.push(n):(yield*this.pop(),yield*this.step())}else{let t=this.peek(2);if(t.type===`block-map`&&(this.type===`map-value-ind`&&t.indent===e.indent||this.type===`newline`&&!t.items[t.items.length-1].sep))yield*this.pop(),yield*this.step();else if(this.type===`map-value-ind`&&t.type!==`flow-collection`){let n=$(tr(t));rr(e);let r=e.end.splice(1,e.end.length);r.push(this.sourceToken);let i={type:`block-map`,offset:e.offset,indent:e.indent,items:[{start:n,key:e,sep:r}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=i}else yield*this.lineEnd(e)}}flowScalar(e){if(this.onNewLine){let e=this.source.indexOf(`
`)+1;for(;e!==0;)this.onNewLine(this.offset+e),e=this.source.indexOf(`
`,e)+1}return{type:e,offset:this.offset,indent:this.indent,source:this.source}}startBlockValue(e){switch(this.type){case`alias`:case`scalar`:case`single-quoted-scalar`:case`double-quoted-scalar`:return this.flowScalar(this.type);case`block-scalar-header`:return{type:`block-scalar`,offset:this.offset,indent:this.indent,props:[this.sourceToken],source:``};case`flow-map-start`:case`flow-seq-start`:return{type:`flow-collection`,offset:this.offset,indent:this.indent,start:this.sourceToken,items:[],end:[]};case`seq-item-ind`:return{type:`block-seq`,offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken]}]};case`explicit-key-ind`:{this.onKeyLine=!0;let t=$(tr(e));return t.push(this.sourceToken),{type:`block-map`,offset:this.offset,indent:this.indent,items:[{start:t,explicitKey:!0}]}}case`map-value-ind`:{this.onKeyLine=!0;let t=$(tr(e));return{type:`block-map`,offset:this.offset,indent:this.indent,items:[{start:t,key:null,sep:[this.sourceToken]}]}}}return null}atIndentedComment(e,t){return this.type!==`comment`||this.indent<=t?!1:e.every(e=>e.type===`newline`||e.type===`space`)}*documentEnd(e){this.type!==`doc-mode`&&(e.end?e.end.push(this.sourceToken):e.end=[this.sourceToken],this.type===`newline`&&(yield*this.pop()))}*lineEnd(e){switch(this.type){case`comma`:case`doc-start`:case`doc-end`:case`flow-seq-end`:case`flow-map-end`:case`map-value-ind`:yield*this.pop(),yield*this.step();break;case`newline`:this.onKeyLine=!1;default:e.end?e.end.push(this.sourceToken):e.end=[this.sourceToken],this.type===`newline`&&(yield*this.pop())}}};function ar(e){let t=e.prettyErrors!==!1;return{lineCounter:e.lineCounter||t&&new Qn||null,prettyErrors:t}}function or(e,t={}){let{lineCounter:n,prettyErrors:r}=ar(t),i=new ir(n?.addNewLine),a=new Bn(t),o=null;for(let t of a.compose(i.parse(e),!0,e.length))if(!o)o=t;else if(o.options.logLevel!==`silent`){o.errors.push(new rn(t.range.slice(0,2),`MULTIPLE_DOCS`,`Source contains multiple documents; please use YAML.parseAllDocuments()`));break}return r&&n&&(o.errors.forEach(on(e,n)),o.warnings.forEach(on(e,n))),o}function sr(e,t,n){let r;typeof t==`function`?r=t:n===void 0&&t&&typeof t==`object`&&(n=t);let i=or(e,n);if(!i)return null;if(i.warnings.forEach(e=>We(i.options.logLevel,e)),i.errors.length>0){if(i.options.logLevel!==`silent`)throw i.errors[0];i.errors=[]}return i.toJS(Object.assign({reviver:r},n))}function cr({question:e}){let{lang:t,s:n}=r();if(!e.ref||!e.word)return null;let i=l(e.ref),a=c(e.ref,e.word);return!i||!a?null:(0,h.jsxs)(`p`,{className:`mb-3 rounded-xl bg-ink-100/70 px-4 py-3 text-center dark:bg-ink-800/50`,children:[(0,h.jsxs)(`span`,{lang:`ar`,dir:`rtl`,className:`quran block`,children:[a[0]>0&&(0,h.jsxs)(`span`,{className:`text-ink-400`,"aria-hidden":`true`,children:[`…`,` `]}),i.text.slice(a[0],a[1]),a[1]<i.text.length&&(0,h.jsxs)(`span`,{className:`text-ink-400`,"aria-hidden":`true`,children:[` `,`…`]})]}),(0,h.jsxs)(`a`,{href:s(i),target:`_blank`,rel:`noreferrer`,className:`mt-1 block text-sm text-ink-600 no-underline transition hover:text-accent-700 hover:underline dark:text-ink-400 dark:hover:text-accent-400`,children:[o(i,t),` `,n.digits(i.ayah),(0,h.jsx)(`span`,{className:`sr-only`,children:n.a11y.opensNewTab})]})]})}function lr({question:e,index:t,onAnswer:n}){let{s:i}=r(),[o,s]=(0,m.useState)(null),c=o!==null,l=(0,m.useId)();function d(t){c||(s(t),n(t===e.answer))}return(0,h.jsxs)(`li`,{className:`border-t border-ink-200 p-4 first:border-t-0 sm:p-5 dark:border-ink-800`,children:[(0,h.jsxs)(`p`,{id:l,className:`mb-3 font-semibold text-ink-900 dark:text-ink-50`,children:[(0,h.jsxs)(`span`,{className:`text-accent-700 dark:text-accent-400`,children:[i.digits(t+1),`.`,` `]}),e.q]}),(0,h.jsx)(cr,{question:e}),(0,h.jsx)(`ul`,{role:`group`,"aria-labelledby":l,className:`grid list-none grid-cols-1 gap-2 ps-0 sm:grid-cols-2`,children:e.options.map((t,n)=>{let r=n===e.answer,s=n===o;return(0,h.jsx)(`li`,{children:(0,h.jsxs)(`button`,{type:`button`,onClick:()=>d(n),"aria-disabled":c||void 0,className:u(`flex w-full items-center justify-between gap-2 rounded-xl border px-4 py-2.5 text-start font-medium transition`,!c&&`border-ink-500 bg-white hover:border-accent-500 hover:bg-accent-50 dark:border-ink-500 dark:bg-ink-900 dark:hover:border-accent-600 dark:hover:bg-accent-950`,c&&r&&`border-accent-500 bg-accent-50 text-accent-900 dark:border-accent-600 dark:bg-accent-950 dark:text-accent-200`,c&&s&&!r&&`border-danger bg-danger/5 text-danger dark:border-danger-dark dark:text-danger-dark`,c&&!r&&!s&&`border-ink-200 opacity-80 dark:border-ink-800`),children:[(0,h.jsxs)(`span`,{children:[t,c&&r&&(0,h.jsx)(`span`,{className:`sr-only`,children:i.quiz.srCorrectAnswer}),c&&s&&!r&&(0,h.jsx)(`span`,{className:`sr-only`,children:i.quiz.srPickedWrong})]}),c&&r&&(0,h.jsx)(a,{size:18,strokeWidth:3,"aria-hidden":`true`}),c&&s&&!r&&(0,h.jsx)(f,{size:18,strokeWidth:3,"aria-hidden":`true`})]})},t)})}),(0,h.jsx)(`div`,{role:`status`,children:c&&(0,h.jsxs)(`p`,{className:`mt-3 rounded-xl bg-ink-100/70 px-4 py-3 text-sm text-ink-700 dark:bg-ink-800/50 dark:text-ink-300`,children:[(0,h.jsx)(`span`,{className:`font-bold`,children:o===e.answer?i.quiz.correct:i.quiz.correctIs(e.options[e.answer])}),e.why]})})]})}function ur({questions:e,title:t,headingLevel:n=`h3`}){let{s:i}=r(),[a,o]=(0,m.useState)(0),[s,c]=(0,m.useState)({right:0,done:0}),l=(0,m.useRef)(null),u=s.done===e.length&&e.length>0,d=(0,m.useMemo)(()=>`attempt-${a}`,[a]),f=s.right===e.length?i.quiz.verdictPerfect:i.quiz.verdictRetry;function g(e){c(t=>({right:t.right+ +!!e,done:t.done+1}))}function _(){c({right:0,done:0}),o(e=>e+1),l.current?.focus()}return e.length===0?null:(0,h.jsxs)(`section`,{className:`my-8 overflow-hidden rounded-card border border-ink-200 bg-white shadow-soft dark:border-ink-800 dark:bg-ink-900`,children:[(0,h.jsxs)(`div`,{className:`flex items-center justify-between gap-3 border-b border-ink-200 bg-ink-100/60 px-4 py-3 dark:border-ink-800 dark:bg-ink-800/40`,children:[(0,h.jsx)(n,{ref:l,tabIndex:-1,className:`font-bold text-ink-900 dark:text-ink-50`,children:t??i.quiz.defaultTitle}),(0,h.jsxs)(`span`,{className:`inline-block min-w-[4.5ch] text-end text-sm font-semibold text-ink-600 dark:text-ink-400`,children:[i.digits(s.right),` / `,i.digits(e.length)]})]}),(0,h.jsx)(`ul`,{role:`list`,className:`list-none ps-0`,children:e.map((e,t)=>(0,h.jsx)(lr,{question:e,index:t,onAnswer:g},e.id))},d),(0,h.jsx)(`div`,{role:`status`,className:`sr-only`,children:u?f:``}),u&&(0,h.jsxs)(`div`,{className:`flex flex-wrap items-center justify-between gap-3 border-t border-ink-200 bg-ink-100/60 px-4 py-3 dark:border-ink-800 dark:bg-ink-800/40`,children:[(0,h.jsx)(`p`,{className:`font-semibold text-ink-800 dark:text-ink-200`,children:f}),(0,h.jsxs)(`button`,{type:`button`,onClick:_,className:`inline-flex items-center gap-1.5 rounded-full border border-ink-500 px-4 py-2 text-sm font-semibold text-ink-700 transition hover:border-accent-400 hover:text-accent-700 dark:border-ink-500 dark:text-ink-300 dark:hover:border-accent-700 dark:hover:text-accent-400`,children:[(0,h.jsx)(p,{size:15}),i.quiz.retry]})]})]})}var dr={ar:Object.assign({"../content/lessons/ar/becoming-muslim.md":`---
title: ماذا يعني أن تكون مسلمًا؟
description: 'جملةٌ واحدة تُدخِل الإنسانَ في الإسلام: ما الذي تقوله الشهادتان، وما الذي تُلزمك به، ولماذا ليس على الباب مراسمُ ولا وسيطٌ ولا بوّاب.'
unit: road
order: 28
minutes: 9
emoji: 🗝️
tags: [الشهادتان, أركان الإسلام, أركان الإيمان]
---

> **فكرة الدرس:** الدخول في الإسلام جملةٌ واحدة تقولها عن اقتناع: لا معموديّةَ ولا مراسمَ ولا وسيطَ ولا بوّاب. فالعلاقة التي تدخل إليها مباشرة، فكان بابها مباشرًا مثلها. وكلُّ ما بعد الباب يأتي على مهل.

## جملةٌ واحدة

من مشى مع هذا الدليل من أوّله فقد وصل إلى نتيجتين: أنّ لهذا الكون خالقًا واحدًا لا شريك له، وأنّ محمدًا ﷺ رسولٌ صادقٌ من عنده. والجملة التي تُدخِل الإنسانَ في الإسلام ليست شيئًا آخر غير هاتين النتيجتين، منطوقتين:

**أشهد أن لا إله إلا الله، وأشهد أنّ محمدًا رسول الله.**

- الشطر الأول يقول: لا معبود بحقٍّ إلا الله وحده، وهو خلاصة ما بنته وحدتا «هل لهذا الكون خالق؟» و«من هو الله؟».
- والشطر الثاني يقول: الرجل الذي رأيتَ الأدلة على صدقه رسولٌ من عند الله، وهو خلاصة وحدتي محمدٍ ﷺ والقرآن.

ولاحظ اسمها: **شهادة**. أنت لا تردّد تعويذةً، بل تشهد كما يشهد من رأى بعينه: تُعلن نتيجةً اقتنعتَ بها. ولهذا لا تنفع بلا اقتناع؛ فالجملة نفسها على لسانٍ لا يصدّقها قلبُه لا تساوي شيئًا.

فإن قلتَها صادقًا، فما الذي التزمتَه؟ التزمتَ لوازمَها: أن تعبد الله وحده، وأن تأخذ ما صحّ عن رسوله ﷺ مأخذ الجدّ: تتعلّمه ثم تعمل به بقدر ما علمت. لم تلتزم أن تعرف كلَّ شيءٍ اليوم، ولا أن تُتقن كلَّ شيءٍ غدًا.

## بساطةٌ تستوقف الناظر

قارن هذا الباب بأبواب الديانات الكبرى: لا معموديّةَ يقيمها رجل دين، ولا طقسَ انضمام، ولا كاهنَ يقبل توبتك أو يملك ردَّها، ولا جهةَ تنظر في «طلب العضويّة». من قال الشهادتين عن اقتناعٍ فهو مسلمٌ من تلك اللحظة، بينه وبين الله. والإشهاد على الإسلام عادةٌ حسنة لأغراضٍ عمليّة (كالتوثيق والزواج وأوراق الحج)، لا شرطٌ لصحّته.

وهذه البساطة ليست تساهلًا، بل لازمةٌ منطقيّة لما ستقرؤه في الدرس التالي: علاقةٌ لا وسيط فيها لا يستقيم أن يقف على بابها حاجب. ثم إنّ أحدًا لا يملك أن يدفعك من هذا الباب دفعًا: فالمطلوب اقتناع، والاقتناع لا يُنتزَع انتزاعًا؛ والقرآن نفسه يقرّر أنّ الدخول في هذا الدين لا يكون بالإكراه (البقرة 256).

\`\`\`note
والاغتسال بعد الدخول في الإسلام سنّةٌ ثابتة: أمر بها النبيُّ ﷺ قيسَ بن عاصم حين أسلم (أبو داود ٣٥٥، وصحّحه الألباني)، ومثلُه في قصّة ثمامة بن أثال في الصحيحين. واختلف الفقهاء في حكمه: أوجبه المالكية والحنابلة في المشهور عندهم، واستحبّه الحنفية والشافعية إلا أن يكون على المسلم الجديد جنابة فيجب. ولم يقل أحدٌ منهم إنّ الاغتسال شرطٌ لصحّة الإسلام؛ فالإسلام يقع بالشهادتين، والغسل بعده.
\`\`\`

## خمسة أعمدةٍ للعمل

فإذا دخلتَ، فما شكلُ الحياة داخل البيت؟ لخّصها النبيّ ﷺ في خمس:

\`\`\`hadith
text: 'بُني الإسلام على خمسٍ: شهادةِ أن لا إله إلا الله وأنّ محمدًا رسول الله، وإقامِ الصلاة، وإيتاءِ الزكاة، والحجِّ، وصومِ رمضان.'
source: 'صحيح البخاري (٨)'
url: 'https://sunnah.com/bukhari:8'
\`\`\`

- **الشهادتان:** الباب الذي وصفناه.
- **الصلاة:** خمس وقفاتٍ في اليوم بين يدي ربّك، وهي موضوع الدرس التالي كلِّه.
- **الزكاة:** جزءٌ يسير (رُبع العُشر، أي ٢٫٥٪) من المال الفاضل عن حاجتك، إذا بلغ حدًّا أدنى يُسمّى النِّصاب وحال عليه الحولُ القمريّ، يذهب إلى الفقراء. والنصاب يُقدَّر بقيمة ٨٥ جرامًا من الذهب أو ٥٩٥ جرامًا من الفضة، وجمهورُ المفتين على اعتبار الأحظّ للفقراء منهما، وهو اليوم الفضة. فمن كان مالُه دون النصاب فلا زكاة عليه. (وزكاةُ الفطر بابٌ آخر، لا نصاب فيها.)
- **صوم رمضان:** شهرٌ واحد في السنة، يُرخَّص فيه للمريض والمسافر.
- **الحج:** مرّةٌ واحدة في العمر، لمن استطاع إليه سبيلًا.

لاحظ الرحمة المبنيّة في التصميم نفسه: كلُّ ركنٍ مشروطٌ بالقدرة؛ فالحجّ على المستطيع، والزكاة على ذي الفائض، والصومُ يُرخَّص فيه لذي العذر.

## وستّة أركانٍ للاعتقاد

وسُئل النبيّ ﷺ عن الإيمان (في الحديث المشهور الذي جاء فيه جبريلُ بصورة رجلٍ يسأله أمام أصحابه) فأجاب:

\`\`\`hadith
text: '… قال: فأخبِرني عن الإيمان. قال: أن تؤمنَ بالله وملائكته وكتبه ورسله واليوم الآخر، وتؤمنَ بالقدر خيرِه وشرِّه. قال: صدقتَ. …'
source: 'صحيح مسلم (٨)'
url: 'https://sunnah.com/muslim:8a'
note: 'وفي آخر الحديث قال ﷺ لعمر: فإنه جبريل أتاكم يعلّمكم دينكم.'
\`\`\`

ستّةٌ مشيتَ مع أدلّة أكثرها في هذا الدليل: الله (الوحدات الأولى)، ورسلُه وكتبُه (وحدتا الرسل ولماذا الإسلام)، واليومُ الآخر (درسا «لماذا خلقنا؟» و«لماذا الشرّ والألم؟»). أمّا الملائكة والقدرُ فيأتيانك عن المصدر نفسه الذي قام البرهان على صدقه؛ وهذا هو الفرق بين تصديقٍ أعمى وتصديقٍ بنى أساسَه أولًا، ثم وثق بالمصدر فيما غاب عنه.

## لكنّي لستُ جاهزًا بعد

\`\`\`doubt
claim: 'لا أستطيع أن أصير مسلمًا الآن: سأضطرّ إلى تغيير حياتي كلِّها دفعةً واحدة، وإلى تعلُّم العربية، ولا بدّ أن أكون إنسانًا صالحًا كاملًا أولًا، وأنا لست كذلك.'
answer: |-
  هذا الخوف مفهوم، لكنه مبنيٌّ على تصوُّرٍ مقلوب. الإسلام يلقى الإنسان حيث يقف، ثم تأتي التكاليف بالتدرّج كلّما نما العلم؛ وهكذا نزل الوحي نفسُه: ثلاثًا وعشرين سنةً يتدرّج بأصحابه، ولم يُطالَب أحدٌ يومَ أسلم بما يُطالَب به من تعلّم عشرين سنة. والصحابة أنفسهم دخلوا مبتدئين لا يعرفون الأحكام، فتعلّموها بعد الدخول لا قبله.
  والعربيةُ ليست شرطًا: الدعاء يصحّ بكل لغة، وقصار السور تُتعلَّم على مهل، ومئات الملايين من المسلمين اليوم لا يتكلمون العربية. وأمّا الكمال فلم يكن قطُّ شرطَ الدخول؛ فالشرط هو الصدق. بل إنّ الباب مصمَّمٌ للمذنبين تحديدًا: فما بينك وبين الله يُغفر كلُّه يوم تدخل، وتبدأ صحيفتُك بيضاء من اللحظة الأولى. وأمّا حقوق العباد ففيها تفصيلٌ عند أهل العلم: فالحربيّ إذا أسلم لم يُؤخذ بشيءٍ ممّا كان منه، لا في دمٍ ولا مال؛ وأمّا سائر الناس، وهي الحال الغالبة، فما كان لعبادٍ عندك من حقٍّ فردُّه إليهم من الإسلام نفسِه، لا عبءٌ باقٍ من الماضي.
\`\`\`

\`\`\`ayah
ref: 2:286
show: لا يكلف الله نفسا إلا وسعها
note: 'قاعدةُ التكليف كلِّه في هذا الدين: لا يُطلَب من أحدٍ فوق طاقته؛ فالعاجز عن شيءٍ يسقط عنه أو يُرخَّص له فيه.'
\`\`\`

وأمّا الماضي الذي تخاف أن يلاحقك عبر الباب، فاسمع قصّة عمرو بن العاص، وقد قضى سنواتٍ في حرب النبيّ ﷺ، يومَ جاء يبايعه على الإسلام ثم سحب يده:

\`\`\`hadith
text: '… فقلت: ابسُط يمينك فلأبايعك. فبسط يمينه - قال - فقبضتُ يدي. قال: ما لك يا عمرو؟ قال: قلتُ: أردتُ أن أشترط. قال: تشترط بماذا؟ قلت: أن يُغفَر لي. قال: أما علمتَ أنّ الإسلام يهدِم ما كان قبله؟ …'
source: 'صحيح مسلم (١٢١)'
url: 'https://sunnah.com/muslim:121'
note: 'خاف عمرٌو ألّا يُغفَر له ما مضى، فإذا الشرطُ الذي جاء يشترطه مبذولٌ أصلًا لكلّ داخل.'
\`\`\`

\`\`\`rule
الدخول في الإسلام شهادتان تقولهما عن صدقٍ واقتناع، بلا مراسمَ ولا وسيطٍ ولا شرطِ كمال، والإشهادُ عليهما عادةٌ لا شرط. ثم يأتي الدين على مهل: خمسة أعمدةٍ للعمل وستّة أركانٍ للاعتقاد، تدخل إليها بقدر وسعك، وصحيفتُك تبدأ بيضاء.
\`\`\`

\`\`\`quiz
questions:
  - q: ما الذي يجعل الإنسان مسلمًا؟
    options:
      - أن يقول الشهادتين عن اقتناعٍ وصدق، بلا مراسمَ ولا وسيطٍ ولا موافقةِ أحد
      - أن يُقيم له رجلُ دينٍ طقسَ انضمامٍ رسميًّا
      - أن يُتقن العربية ويحفظ القرآن أولًا
      - أن يُثبت لجهةٍ دينية أنه صار إنسانًا كاملًا
    answer: 0
    why: الشهادة إعلانُ اقتناعٍ بين العبد وربّه، والإشهادُ عليها عادةٌ حسنة لأغراضٍ عملية لا شرطٌ لصحّة الإسلام.
  - q: ماذا أجاب النبيّ ﷺ عمرَو بن العاص حين اشترط للبيعة أن يُغفَر له؟
    options:
      - أما علمتَ أنّ الإسلام يهدم ما كان قبله؛ فصحيفةُ الداخل تبدأ بيضاء
      - أنّ المغفرة تحتاج سنواتٍ من العمل أولًا
      - أنّ الماضي يبقى في الحساب حتى يُكفَّر بالحج
      - رفض بيعته حتى يتطهّر من ذنوبه
    answer: 0
    why: الشرطُ الذي جاء عمرٌو يشترطه كان مبذولًا أصلًا لكلّ من يدخل في الإسلام؛ فماضي الإنسان لا يلاحقه عبر الباب.
  - q: كيف يجيب هذا الدرس من يخاف أنّ عليه تغيير حياته كلِّها يومَ يُسلم؟
    options:
      - التكاليف تأتي بالتدرّج مع نموّ العلم، ولا يُكلَّف أحدٌ فوق وسعه؛ فشرط الدخول الصدقُ لا الكمال
      - عليه أن يُتقن الأركان كلَّها قبل النطق بالشهادتين
      - يُمهَل سنةً واحدة ثم يُحاسَب على كلّ شيء
      - لا يصحّ إسلامه حتى يتعلّم العربية
    answer: 0
    why: الوحي نفسه نزل متدرّجًا ثلاثًا وعشرين سنة، والصحابة دخلوا مبتدئين، والقاعدة القرآنية أن لا تُكلَّف نفسٌ إلا وسعها.
\`\`\`
`,"../content/lessons/ar/before-prophethood.md":`---
title: الصادق الأمين
description: 'أربعون سنةً بين قومه لم يحفظ عليه قومُه فيها كذبةً واحدة، حتى لقّبوه الأمين وأودعوه أموالهم، ثم شهد له ألدُّ أعدائه في مجلس قيصر الروم.'
unit: muhammad
order: 20
minutes: 8
emoji: 🤝
tags: [الصادق الأمين, شهادة هرقل, السيرة]
---

> **فكرة الدرس:** قبل أن تفحص الدعوى، افحص المدَّعي. رجلٌ جرّبه قومه أربعين سنةً فما وجدوا عليه كذبةً واحدةً على بشر؛ فأيُّ ميزانٍ يرجّح أنه بدأ الكذب فجأةً، وعلى الله؟

## اختباراتٌ تصلح لكلّ مدّعٍ

هذه الوحدة لا تطلب منك أن تحسن الظنّ بمحمّدٍ ﷺ. تطلب العكس تمامًا: أن تعامله كما تعامل أيَّ صاحب دعوى كبيرة: تفحص سجلَّه قبل الدعوى، ودافعَه، وسلوكَه حين يُصحَّح، وعلمَه بما لا سبيل له إليه، وخلُقَه حين يملك ولا يُسأل. خمسة اختبارات، لكلٍّ منها درس. وهذا أوّلها: السجلّ.

## أربعون سنةً قبل الدعوى

لم يدَّعِ محمّدٌ ﷺ النبوّة شابًّا مغمورًا، بل في الأربعين، بعد عمرٍ كاملٍ عاشه بين قومه بيتًا ببيت وسوقًا بسوق. وخلاصة تجربتهم معه كانت لقبًا تعارفوا عليه قبل الوحي: **الأمين**. واللقبُ نفسُه من أخبار السيرة، لكنّ ما وراءه ثابتٌ في الصحيح: يوم صعد الصفا يدعو قومَه سألهم: أرأيتكم لو أخبرتكم أنّ خيلًا بالوادي تريد أن تُغير عليكم، أكنتم مصدّقيّ؟ فأجابوه بلسانهم: “ما جرّبنا عليك إلا صدقًا” (البخاري ٤٧٧٠). هذه شهادتُهم هم، في أصحّ كتابٍ بعد المصحف، قالوها قبل أن يسمعوا نذارته بلحظة.

ولم يكن اللقبُ مجاملة، بل سلوكًا مستمرًّا حتى ممّن حاربه: فقد ظلّ أهل مكّة يودعون عنده ودائعهم وهم يكذّبون رسالته ويؤذون أصحابه. وتذكر كتب السيرة (كسيرة ابن هشام) أنه ليلة هجرته، وقومُه يأتمرون بقتله، خلّف عليَّ بن أبي طالب وراءه ليردَّ الودائع إلى أصحابها. تأمّل هذا المشهد: قومٌ يقولون بألسنتهم «كاذب»، وتقول أفعالهم «لا نأمن على أموالنا أحدًا سواه».

والقرآن نفسه يحتجّ عليهم بهذا السجلّ، ويحيلهم على تجربتهم لا على تزكيةٍ من عنده:

\`\`\`ayah
ref: 10:16
highlight: فقد لبثت فيكم عمرا من قبله
note: 'حجّة الآية عند المفسّرين: قد عشتُ بينكم عمرًا كاملًا قبل هذا القرآن، تعرفون فيه صدقي وأمانتي، أفلا تُعمِلون عقولكم في هذا وحده؟'
\`\`\`

\`\`\`ayah
ref: 6:33
highlight: فإنهم لا يكذبونك
note: 'قال المفسّرون: ليسوا في قرارة أنفسهم يتّهمونك بالكذب، فصدقُك مجرَّبٌ عندهم، وإنما يجحدون ما جئتَ به. وقد قال أبو جهلٍ نفسُه: إنّا لا نكذّبك، ولكن نكذّب ما جئتَ به. فالخصومة مع الرسالة، لا مع سجلّ الرجل.'
\`\`\`

## شهادةُ عدوٍّ في مجلس ملك

أقوى وثيقةٍ في هذا الباب حوارٌ محفوظٌ بإسناده في أوائل صحيح البخاري. جمع هرقلُ عظيمُ الروم تجّارًا من قريش قدموا الشام، وسأل عن أقربهم نسبًا بالنبيّ ﷺ ليستجوبه، فكان أبو سفيان، وهو يومئذ قائد قريش في حربها على الإسلام، لم يُسلم بعد. واحتاط هرقل للصدق بحيلةٍ ذكية: أوقف أصحابَ أبي سفيان خلفه، وأمرهم أن يكذّبوه إن كذب.

\`\`\`hadith
text: 'ثم قال لترجمانه: قل لهم إني سائلٌ هذا عن هذا الرجل، فإن كذَبني فكذِّبوه. فوالله لولا الحياءُ من أن يأثِروا عليَّ كذبًا لكذبتُ عنه… قال: فهل كنتم تتّهمونه بالكذب قبل أن يقول ما قال؟ قلتُ: لا… وسألتُك هل كنتم تتّهمونه بالكذب قبل أن يقول ما قال فذكرتَ أنْ لا، فقد أعرفُ أنه لم يكن لِيَذَرَ الكذبَ على الناس ويكذِبَ على الله.'
source: 'صحيح البخاري (٧)'
url: 'https://sunnah.com/bukhari:7'
note: 'الحديث طويل، وهذا موضع الشاهد منه. أبو سفيان يقرّ أنه ودّ لو كذب، فمنعه أن يُنقَل عنه الكذب؛ فجاءت شهادته للنبيّ ﷺ رغم أنفه.'
\`\`\`

قف عند ما جرى هنا، فهو نادرٌ في التاريخ:

- **الشاهد عدوٌّ محارب**، له كلُّ مصلحةٍ في هدم الدعوى، ويصرّح أنه تمنّى الكذب.
- **والمجلس لا يسمح بالكذب**: خلفه قومه ينقلون عنه كلَّ كلمة.
- **والفاحص ملكٌ أجنبيّ محايد**، لا ناقةَ له في دعوى نبيٍّ من العرب.

ثم انظر إلى استدلال هرقل، فهو حجّة هذا الدرس بحروفها، قالها ملكٌ روميّ في القرن السابع: من عاش أربعين سنةً لا يكذب على الناس (والكذب على الناس أهون وأربح) لا يُعقَل أن يفتتح كذبه بأعظم كذبةٍ ممكنة، على الله.

## «صادقٌ مع الناس، واهمٌ فيما ظنّه وحيًا»

\`\`\`doubt
claim: صدقُه في التجارة والودائع لا يُثبت صدق دعوى النبوّة. قد يكون الرجل صادقًا كلَّ الصدق مع الناس، ثم يخطئ في تفسير تجربةٍ داخليّة فيحسبها وحيًا، مخلصًا لكن مخطئًا.
answer: |-
  اعتراضٌ وجيه، وهذا الدرس لا يدّعي أكثر من طاقته. المطلوب إثباته هنا شيءٌ واحد: أنّ فرضيّة «الكاذب المتعمّد» ساقطةٌ بشهادة أعدائه أنفسهم. وقد سقطت. ولاحظ أنّ قريشًا نفسها لم تستطع الثبات على تهمة: قالوا ساحر، وشاعر، وكاهن، ومجنون: تُهمٌ يهدم بعضُها بعضًا، وما استطاعوا أن يقولوا التهمة الوحيدة النافعة: «جرّبنا عليه الكذب».
  أما فرضيّة «المخلص الواهم» فدعوى أخرى، ولها اختباراتها الخاصّة في الدروس الآتية: هل يُنتج الوهمُ نصًّا واحدًا متماسكًا ثلاثةً وعشرين عامًا؟ وهل يصحّح الوهمُ صاحبَه علنًا ويحرجه؟ وهل يُخبر الوهمُ عن مستقبلٍ فيصيب؟ احتفظ بالفرضيّة، وامتحنها معنا درسًا درسًا؛ هذا كلّ ما نطلب.
\`\`\`

\`\`\`rule
رجلٌ جرّبه قومه أربعين سنةً فلقّبوه الأمين، وأودعوه أموالهم وهم يحاربونه، وشهد له عدوُّه في مجلسٍ لا يُمكن فيه الكذب؛ هذا الرجل لا تُفسَّر دعواه بفرضيّة «الكاذب» إلا بمصادرة الدليل كلِّه. الاختبار الأوّل: اجتازه.
\`\`\`

\`\`\`tip
لاحظ أنّ حجّة هذا الدرس ليست من صياغة المسلمين: هرقل بناها بنفسه، خطوةً خطوة، من أجوبة عدوٍّ للنبيّ ﷺ. حين يصل خصمان إلى النتيجة نفسها من طريقين، فذلك أمارة أنّ النتيجة من جنس الحقائق لا الدعايات.
\`\`\`

\`\`\`quiz
questions:
  - q: ما الذي يجعل شهادة أبي سفيان أمام هرقل قويّةً بمقاييس النقد التاريخي؟
    options:
      - أنها شهادة عدوٍّ محاربٍ أُخذت في مجلسٍ لا يستطيع فيه الكذب، وقد صرّح أنه تمنّاه
      - أن أبا سفيان كان قد أسلم يومها فشهد شهادة مؤمن
      - أن هرقل أسلم بعد الحوار فتحوّلت شهادته إلى تزكية
      - أنها رويت بأسانيد متأخّرة جمعها المؤرّخون بعد قرون
    answer: 0
    why: شهادة الخصم لصالح خصمه أقوى الشهادات، وقد أقرّ أبو سفيان أنه لولا خوف أن يُنقل عنه الكذب لكذب؛ فجاء إقراره بصدق النبيّ ﷺ مضطرًّا لا مجاملًا.
  - q: ما الاستدلال الذي بناه هرقل على جواب أبي سفيان بأنّ قومه ما اتّهموه بالكذب قط؟
    options:
      - من لم يجرَّب عليه الكذب على الناس عمرًا كاملًا، لا يُعقل أن يفتتح الكذب بالكذب على الله
      - من صدَق في التجارة وجب أن يكون نبيًّا
      - الملوك أقدر الناس على كشف الكذب بالفراسة
      - كثرة الأتباع دليل صدق الدعوى دائمًا
    answer: 0
    why: هذه حجّة السجلّ بعينها، وقد صاغها فاحصٌ غير مسلم من جواب عدوٍّ غير مسلم؛ فليست دعايةً من أتباع الدعوى.
  - q: كيف يجيب هذا الدرس عن فرضيّة «صادقٌ مع الناس لكنه واهمٌ فيما ظنّه وحيًا»؟
    options:
      - يقرّ أنها دعوى مستقلّة، ويحيلها على اختبارات الدروس الآتية بعد أن أسقط هذا الدرسُ فرضيّةَ الكذب المتعمّد
      - يعدّها سبًّا لا يستحقّ الجواب
      - يرى أن حسن الخلق يكفي وحده لإثبات النبوّة
      - ينكر أن يكون للوهم وجود عند البشر
    answer: 0
    why: الدرس محدود الدعوى عمدًا؛ فقد أسقط فرضيّة الكاذب بشهادة الأعداء، وترك فرضيّة الواهم لاختباراتها المناسبة في بقيّة الوحدة، فالحجّة تراكميّة.
\`\`\`
`,"../content/lessons/ar/big-questions.md":`---
title: أسئلةٌ لا تسقط بالتقادم
description: 'من أين جئنا؟ ولماذا نحن هنا؟ وإلى أين نمضي؟ لماذا لا يملك أحدٌ ترفَ تجاهل هذه الأسئلة، وكيف تقرؤها بإنصاف.'
unit: start
order: 1
minutes: 7
emoji: ❓
tags: [الأسئلة الكبرى, الإنصاف, المنهج]
---

> **فكرة الدرس:** أسئلة الوجود الكبرى يجيب عنها كلُّ إنسانٍ بحياته لا بلسانه. فالذي يقول «لا أنشغل بها» قد أجاب فعلًا، لكنّه أجاب من غير أن ينظر.

## ثلاثة أسئلةٍ تعرفها جيّدًا

في لحظةٍ صادقةٍ ما، في ليلٍ طويل أو عند فقد قريبٍ أو أمام سماءٍ صافية، طرحتَ على نفسك هذه الأسئلة:

- **من أين جئت؟** هل أنا نتيجة مصادفةٍ عمياء، أم وراء وجودي قصد؟
- **لماذا أنا هنا؟** هل لحياتي غاية، أم أملأ الوقت حتى ينتهي؟
- **وإلى أين؟** هل الموت آخر السطر، أم بعده شيء؟

هذه ليست أسئلة الفلاسفة وحدهم. كلُّ إنسانٍ سأل نفسه هذه الأسئلة يومًا، بأيّ لغةٍ وفي أيّ عصر. والقرآن لا يستنكر أن تُطرح، بل هو نفسه يطرحها:

\`\`\`ayah
ref: 23:115
highlight: أفحسبتم أنما خلقناكم عبثا
note: 'سؤالٌ موجَّهٌ إلى كلّ من ظنّ أنّ وجوده بلا غاية: أحقًّا تحسبون ذلك؟'
\`\`\`

\`\`\`ayah
ref: 75:36
note: سُدًى أي مُهمَلًا، لا يُؤمَر ولا يُنهى ولا يُسأل عن شيء. والاستفهام هنا للإنكار.
\`\`\`

لاحظ الأسلوب: القرآن يحاجّ بالسؤال، لا بالشتيمة. وهذا هو أسلوب هذا الدليل كلّه.

## «لا أدري» ليست موقفًا محايدًا

\`\`\`doubt
claim: هذه أسئلةٌ كبيرةٌ لا سبيل إلى الجزم فيها، والأسلم أن يعيش الإنسان حياته ولا ينشغل بها.
answer: |-
  تأجيل الجواب جوابٌ. فالذي يقول «لن أبحث» يعيش فعليًّا كما يعيش من قرّر أن الوجود بلا غاية: يأكل ويعمل وينام وينتظر. لقد اختار جوابًا والتزم لوازمَه، لكنّه اختاره من غير نظرٍ ولا دليل.
  ثم إنّ قيمة السؤال بقدر ما يترتّب عليه. لو أُخبرت أنّ في طعامك سُمًّا محتمَلًا لما قلت «الأسلم ألا أنشغل بالسؤال». وهذه الأسئلة يترتّب عليها كلُّ شيء: معنى حياتك، وميزان أفعالك، ومصيرك. فإن كان في الدنيا سؤالٌ واحد يستحقّ الجهد، فهو هذا.
\`\`\`

والعجيب أنّ الإنسان قد يقضي في اختيار هاتفٍ أو سيّارةٍ أسابيعَ من الموازنة والقراءة، ثم يمضي عمرَه كلَّه بلا ساعةٍ واحدةٍ من النظر الجادّ في السؤال الذي يتوقّف عليه العمرُ نفسُه.

## كيف تقرأ هذا الدليل

هذا الدليل ثلاثون درسًا، مرتَّبةً ترتيبَ حجّة: كلُّ وحدةٍ تبني على ما أثبتته التي قبلها، ولا يُطلب منك في أوّل الطريق تسليمٌ بشيءٍ لم يقُم عليه دليلٌ بعد. فالوحدات الأولى تحاجّ بالعقل والمشاهدة وحدهما، والقرآن يدخل أوّلَ الأمر نصًّا يعرض حجّةً، لا مرجعًا مسلَّمًا به، إلى أن يقوم الدليل على أنّه وحي.

ولا نطلب منك إلّا ما تطلبه أنت ممّن يناقشك:

- **إنصافُ النظر:** أن تزن الحجّة بقوّتها لا بمألوفيّتها.
- **وصدقُ القصد:** أن تكون مستعدًّا لقبول النتيجة إن قام دليلها، وإلّا فالقراءة عبث.
- **والصبر:** أن تقرأ الحجّة كاملةً قبل الحكم عليها، فبعض الأجوبة يكتمل في درسٍ لاحق.

\`\`\`rule
لا يملك أحدٌ ترفَ الحياد أمام أسئلة الوجود الكبرى: من لم يُجِب بعقله أجاب بعاداته. والموقف العاقل الوحيد هو النظر الجادّ المنصف، وهو ما تفعله الآن.
\`\`\`

\`\`\`tip
اقرأ وأنت تسأل «ما الدليل؟» عند كلّ دعوى. هذا الدليل يريد منك هذا السؤال ولا يخافه: كلُّ درسٍ يذكر مصادره، وكلُّ آيةٍ تُنسخ من المصحف نسخًا لا كتابةً باليد.
\`\`\`

\`\`\`quiz
questions:
  - q: لماذا لا يُعدّ «لن أنشغل بهذه الأسئلة» موقفًا محايدًا؟
    options:
      - لأنّ صاحبه يعيش عمليًّا بلوازم جوابٍ معيّن، لكنّه اختاره بلا نظر
      - لأنّ الانشغال بالأسئلة فرضٌ قانونيّ
      - لأنّ الفلاسفة وحدهم يحقّ لهم تأجيل الجواب
      - لأنّ الأسئلة الكبرى لا تخطر إلا للمتديّنين
    answer: 0
    why: من أجّل النظر لم يُعلّق العيش؛ فهو يعيش فعلًا كأنّ الوجود بلا غاية، أي أنه التزم جوابًا من غير دليل.
  - q: كيف يتعامل القرآن مع أسئلة الوجود الكبرى؟
    options:
      - يطرحها بنفسه ويحاجّ بها
      - ينهى عن التفكير فيها
      - يعدّها من خصوصيّات العلماء
      - يتجاهلها لأنها معلومة بالبداهة
    answer: 0
    why: سؤال الآية (أفحسبتم أنما خلقناكم عبثًا) سؤالٌ قرآنيٌّ مباشر، فالقرآن يخاطب العقل ويستدعي النظر لا التسليم الأعمى.
  - q: ما الترتيب الذي يسير عليه هذا الدليل؟
    options:
      - يبدأ بالعقل والمشاهدة، ولا يستدلّ بالقرآن وحيًا إلا بعد أن يقيم الدليل على ذلك
      - يبدأ بالتسليم بالقرآن ثم يثبت به كلّ شيء
      - يعرض الآراء كلّها ويترك القارئ بلا ترجيح
      - يبدأ بالفقه والعبادات ثم ينتقل إلى العقيدة
    answer: 0
    why: كلّ وحدةٍ تبني على ما قبلها، فلا يُطلب من القارئ تسليمٌ بشيءٍ لم يقم دليله بعد.
\`\`\`
`,"../content/lessons/ar/chance.md":`---
title: الصدفة لا تكتب كتابًا
description: 'ماذا تعني «حدث من غير قصد» حين تُقال بجدّ؟ حسابٌ أمين لدعوى الصدفة، وبيانُ أين يقف التطوّر من الحجّة، وما المتّفق عليه بين المسلمين وما المختلف فيه، مسمًّى باسمه.'
unit: doubts
order: 9
minutes: 9
emoji: 🎲
tags: [الصدفة, أصل الحياة, التطور, خلق آدم]
resources:
  - title: 'Human Origins: Theological Conclusions and Empirical Limitations (مؤسسة يقين)'
    url: https://yaqeeninstitute.org/read/paper/human-origins-part-1-theological-conclusions-and-empirical-limitations
    note: 'ورقةٌ بحثيّةٌ مطوّلة بالإنجليزية تعرض ما تُلزم به النصوص في خلق آدم وحدودَ ما يسع الخلاف فيه، من غير حسمٍ للمسألة التجريبية.'
---

> **فكرة الدرس:** «الصدفة» ليست قوّةً تفعل شيئًا؛ هي اسمٌ نطلقه على غياب القصد. وكلّما عظم النظامُ المطلوب تفسيره صار «حدث بلا قصد» أبعدَ عن التفسير وأقربَ إلى الهرب منه. وحجّةُ هذا الدليل لا تقف على إنكار التطوّر ولا تسقط بقبوله؛ لأنها تسكن حيث لا يملك التطوّر كلمة.

## ما الذي تقوله «الصدفة» حين تُقال بجدّ؟

حين يقال «الكون والحياة حدثا صدفة» فليست الصدفةُ فاعلًا حلّ محلّ الخالق؛ الصدفة وصفٌ لغياب الفاعل القاصد. فالجملة تعني بالضبط: حدث هذا كلُّه من غير أن يقصده شيء. هذا ادّعاءٌ يمكن وزنه، فلنزنه بلا أرقامٍ مزعومة؛ يكفي التقدير الكيفيّ الأمين:

لو وجدتَ خزنةً مفتوحة، ورقمُها السرّي طويل، فأمامك تفسيران: عبثت الأقراصُ عشوائيًّا فوافقت الرقم، أو فتحتها يدٌ تعرفه. الأول «ممكن» بمعنًى رياضيّ بارد، لكنك لا تعيش به: كلّما طال الرقم صار ترجيحُ العشوائية تهرّبًا لا تفسيرًا. والآن انظر ما المطلوب تفسيره في أصل الحياة: أصغرُ خليّةٍ حيّة معروفة نظامٌ يتغذّى ويصلح نفسه وينسخ نفسه، تديره شفرةٌ وراثية تُقرأ وتُترجم بآلاتٍ هي نفسُها مبنيّةٌ بتعليمات الشفرة. والبروتين الوظيفيّ الواحد سلسلةٌ دقيقة التركيب، والترتيباتُ الممكنة لحروفه أكثر من أن تُحصى، والوظيفيُّ منها قليلٌ في فضاءٍ واسع؛ وأمّا مقدارُ هذه القِلّة فسؤالٌ مفتوح في الكيمياء الحيوية إلى اليوم: لم يُنتزَع من العشوائية المحضة إلا بروتينٌ وظيفيٌّ واحد، وتقول مراجعةٌ سنة ٢٠٢١ إنّ التعميم من مثالٍ واحد سابقٌ لأوانه.

فإن قيل: «الزمن الطويل يصنع المعجزات»، فالجواب أنّ الزمن وحده لا يرجّح شيئًا؛ إنما يعمل الزمنُ إذا وُجد ما يحفظ المحاولاتِ الناجحة ويبني عليها. وقد اقترح الباحثون في أصل الحياة آلياتٍ لهذا الحفظ قبل الخليّة: دوراتٌ ذاتية التحفيز، وحفزٌ على أسطح المعادن، وجزيئاتُ رنا تنسخ نفسها. وقد صنع الكيميائيون فعلًا جزيئاتٍ تنسخ نفسها، لكن بعد أن صمّموها هم، وبمناولتها قطعًا جاهزةً تحمل أكثر الجواب سلفًا. أمّا أن يتركّب الناسخُ نفسُه من موادَّ بسيطة ثم ينسخ نفسه، كما كان لا بدّ أن يقع أوّل مرّة، فلم يبلغه أحدٌ بعد. فالمسألة مفتوحة، وهذا ما نقوله ولا نزيد. وهذا هو مربط الحجّة الآتي.

## إعصارٌ في ساحة خردة

في تشبيهٍ مشهورٍ للفلكيّ فريد هويل: احتمالُ أن تنشأ الحياةُ الأولى بمحض العشوائية كاحتمال أن يمرّ إعصارٌ بساحة خردة فيجمعَ من ركامها طائرةً جاهزةً للإقلاع. والأمانة تقتضي أن نذكر معه أمرين: أنّ هويل لم يكن يحتجّ به لإلهٍ في دينٍ من الأديان، وكان شديدًا على الدين المنظَّم، وإنما ساقه إلى القول بأنّ الحياة جاءت من خارج الأرض بتوجيهِ «عقلٍ فائق» لم يُسمِّه خالقًا؛ وأنّ علماء الأحياء ردّوا عليه بأنه يفترض تركيبًا عشوائيًّا دفعةً واحدة، وليس ذلك ما تقوله بحوث أصل الحياة. فخذ منه قدرَه: صورةٌ تقرّب حجم الفجوة، لا برهانٌ عليها. والذي يبقى بعد ذلك دقيقًا: أنّ الانتخاب لا يبدأ في تحسين النسخ قبل أن يوجد ما ينسخ نفسه أصلًا.

## أين يقف التطوّر من هذه الحجّة؟

هنا نقطةٌ يخطئ فيها المتحمّسون من الطرفين، فخذها بدقّة: حجّةُ هذا الدليل لا تحتاج إلى إسقاط نظرية التطوّر.

فالتطوّر، لو سلّمناه كلَّه كما يعرضه أصحابُه، يبدأ عملَه وفي يده كائنٌ ينسخ نفسه ويورّث صفاته. آليتُه المعلنة (التغيّرُ والانتخاب عبر الأجيال) لا تدور أصلًا إلا بين كائناتٍ تتوالد؛ فقبل أول متكاثرٍ لا انتخابَ ولا أجيال، بل كيمياءُ لا تفضّل شيئًا على شيء. فالنظرية، بأقصى دعاواها، كلامٌ في تنوّع الحياة بعد وجودها، ولا تقول حرفًا في السؤالين اللذين قامت عليهما الوحدة السابقة: من أين جاءت أولُ خليّة؟ ولماذا كانت قوانينُ الكون وثوابتُه بحيث تسمح بالكيمياء والنجوم والحياة أصلًا؟

\`\`\`doubt
claim: 'التطوّر فسّر تعقيد الكائنات الحيّة بآليةٍ عمياء (الطفرة والانتخاب الطبيعي)، فلم يعد التصميم تفسيرًا ضروريًّا، وسقطت حجّة الإتقان.'
answer: |-
  حتى لو سلّمنا بالآلية كلِّها، فالذي فسّرته، على أقصى تقدير، هو تحوّلُ الحيّ من صورةٍ إلى صورة، بدءًا من كائنٍ يتكاثر ويورّث. لكنها اقترضت أعظمَ ما في المسألة اقتراضًا: خليّةً أولى تحمل شفرةً وتنسخ نفسها؛ والانتخابُ لا يعمل قبل وجودها، لأنه لا ينتخب إلا بين متكاثرين. فتفسيرُ تنوّع الكتب لا يفسّر وجود الحرف.
  ثم إنّ الآلية نفسها تجري داخل ملعبٍ مضبوط: ذرّاتٌ قابلة للكيمياء، ونجومٌ تطبخ العناصر، وكوكبٌ في النطاق الصالح، وثوابتُ لو زاغت قليلًا لما كان شيءٌ من ذلك كلِّه. ومن فسّر مجرياتِ اللعبة بقوانين اللعبة لم يفسّر وجودَ الملعب.
  فحجّة الإتقان في هذا الدليل معلّقةٌ بأصل الحياة وضبط الكون، وكلاهما خارج حدود النظرية بإقرار أهلها، فالحجّة لم تُمَسّ.
\`\`\`

## ما المتّفق عليه بين المسلمين، وما المختلف فيه

مقامُ الصدق يوجب التفصيل، فليس كلُّ ما في هذا الملفّ درجةً واحدة.

**المتّفق عليه:** أنّ آدم عليه السلام خُلق خلقًا خاصًّا مباشرًا، لم يولد من أبوين، وأنّ البشر كلَّهم ذرّيتُه. هذا صريحُ نصوصٍ لا يتأوّلها مسلم:

\`\`\`ayah
ref: 3:59
highlight: كمثل آدم خلقه من تراب
note: 'الآية تحتجّ على من استعظم ولادة عيسى من غير أب بمن خُلق من غير أبوين أصلًا؛ فخلقُ آدم من تراب هو نفسُه موضعُ الاحتجاج، لا تفصيلًا عابرًا يقبل التأويل.'
\`\`\`

\`\`\`ayah
ref: 38:71
highlight: خالق بشرا من طين
note: 'إعلانُ الخلق الخاصّ قبل وقوعه، خطابًا للملائكة.'
\`\`\`

\`\`\`ayah
ref: 38:72
highlight: ونفخت فيه من روحي
note: 'تسويةٌ ونفخٌ وتكريمٌ بالسجود: قصّةُ إنشاءٍ خاصّ من أولها إلى آخرها، لا حلقةٌ في سلسلة.'
\`\`\`

**والمختلف فيه:** موقفُ الوحي من التطوّر بوصفه آليةً في غير آدم: سائرِ الأحياء، أو كائناتٍ شبيهةٍ بالبشر قبل آدم. ذهب باحثون معاصرون مؤهّلون، منهم الدكتور ناظر خان والدكتور ياسر قاضي في الورقة الموصى بها أعلاه، والدكتور شعيب أحمد ملك في كتابه «الإسلام والتطوّر»، إلى أنّ النصوص لا تنفي ذلك ولا تثبته، فالجمعُ ممكن مع بقاء خلق آدم الخاصّ على ظاهره؛ ورفض علماء آخرون النظريةَ جملةً ومنهم الشيخ ابن باز في [الردّ على نظرية داروين](https://binbaz.org.sa/fatwas/7143/%D8%A7%D9%84%D8%B1%D8%AF-%D8%B9%D9%84%D9%89-%D9%86%D8%B8%D8%B1%D9%8A%D8%A9-%D8%AF%D8%A7%D8%B1%D9%88%D9%8A%D9%86)، وفيه أنّ القول بأنّ أصل الإنسان قردٌ قولٌ منكرٌ مخالفٌ للكتاب والسنة وإجماع سلف الأمة، وأنّ كلّ أمّةٍ لها خِلقتها. هذا خلافٌ قائم بين مؤهّلين ننقله كما هو.

\`\`\`note
لا يرجّح هذا الدرسُ بين الفريقين، ولا يحتاج إلى الترجيح: فحجّتُه، كما رأيت، قائمةٌ على أصل الحياة وضبط الكون، وهما سواءٌ عند من قبل النظرية في غير آدم وعند من ردّها. من أراد التوسّع في بحث المسألة وجد في مصادر الدرس ورقةً محكّمة تعرض حدودَ الجمع وشروطَه.
\`\`\`

\`\`\`rule
«الصدفة» اسمٌ لغياب التفسير لا تفسيرٌ منافس، وكلّما عظم النظامُ صارت أبعدَ. والتطوّر، على أقصى دعاواه، يبدأ والخليّةُ في يده، داخل كونٍ مضبوطِ الثوابت، فلا يمسّ حجّةَ الخالق في شيء. وخلقُ آدم الخاصّ متّفَقٌ عليه بين المسلمين، وما وراءه في غير آدم خلافٌ معتبر يُسمّى باسمه ولا يُحسم هنا.
\`\`\`

\`\`\`quiz
questions:
  - q: لماذا لا تصلح «الصدفة» تفسيرًا لأصل الحياة؟
    options:
      - لأنها ليست فاعلًا بل اسمًا لغياب القصد، وكلّما عظم النظامُ المطلوب تفسيره صار ترجيحُها تهرّبًا من التفسير
      - لأن العلماء أثبتوا استحالتها بأرقامٍ نهائية محسومة
      - لأن كلّ ما يقع في الكون مقصودٌ لذاته بالضرورة العقلية
      - لأن الاحتمالات الرياضية لا وجود لها أصلًا
    answer: 0
    why: الدرس تعمّد الاستغناء عن الأرقام المزعومة؛ يكفي التقديرُ الكيفيّ الأمين، كخزنةٍ مفتوحة رقمُها طويل، ليتبيّن أنّ «حدث بلا قصد» يزداد بعدًا كلّما عظم النظام.
  - q: أين تقف نظرية التطوّر من حجّة هذا الدليل على الخالق؟
    options:
      - لا تمسّها ولو سُلّمت كلُّها، لأنها تبدأ بخليّةٍ متكاثرة موجودة ولا تقول شيئًا عن أصل الحياة ولا عن ضبط قوانين الكون
      - تهدمها من أساسها لأنها فسّرت كلّ شيء
      - تثبتها إثباتًا مباشرًا لا يحتاج إلى غيره
      - لا علاقة للسؤالين ببعضهما من أيّ وجه
    answer: 0
    why: الانتخاب الطبيعي لا يعمل إلا بين كائناتٍ تتوالد، فأولُ خليّةٍ والثوابتُ الكونية خارج حدود النظرية بإقرار أهلها، وهناك تسكن الحجّة.
  - q: ما المتّفق عليه بين المسلمين في مسألة التطوّر، وما المختلف فيه؟
    ref: 3:59
    word: كمثل آدم خلقه من تراب
    options:
      - المتّفق عليه خلقُ آدم خلقًا خاصًّا من غير أبوين، والمختلف فيه إمكانُ الجمع بين الوحي والتطوّر في غير آدم
      - المسلمون متّفقون على قبول النظرية بكاملها في كلّ الكائنات
      - المسلمون متّفقون على أنّ الخلاف في خلق آدم نفسه سائغ
      - لا يوجد في المسألة متّفَقٌ عليه أصلًا
    answer: 0
    why: خلقُ آدم الخاصّ صريحُ النصوص وموضعُ احتجاج الآية نفسها، أمّا التطوّر في سائر الأحياء فمسألةٌ اختلف فيها باحثون مؤهّلون، والدرس ينقل الخلاف ولا يحسمه.
\`\`\`
`,"../content/lessons/ar/criteria.md":`---
title: بأيّ ميزانٍ نزن؟
description: 'قبل أن نسأل أيَّ دينٍ نتّبع، يجب أن نثبّت الميزان: خمسة معايير يقبلها كلُّ باحثٍ منصف، تُطبَّق على الأديان كلّها، والإسلام أوّلها، بالصرامة نفسها.'
unit: why-islam
order: 17
minutes: 8
emoji: ⚖️
tags: [معايير الحقّ, الدين الموروث, الإنصاف]
---

> **فكرة الدرس:** من بدأ الموازنة قبل أن يثبّت الميزان، فاز عنده دينُ بيئته دائمًا. فالسؤال الأوّل ليس «أيّ دين؟» بل «بأيّ معيار؟»، ثم يُطبَّق المعيار على الجميع بلا محاباة، والإسلامُ أوّل من يوضَع في الكفّة.

## الميزان قبل الموازنة

أكثر أهل الأرض على دين آبائهم. وهذه ملاحظةٌ لا تُهين أحدًا، لكنها تكشف شيئًا مهمًّا: لو تركنا السؤال بلا معيار، لكان الجواب الحقيقيّ عند كلّ واحدٍ منّا هو «الدين الذي وُلدت فيه». ومكانُ الولادة مصادفةٌ جغرافيّة، والمصادفة لا تصلح دليلًا على شيء.

والقرآن نفسه يسمّي هذا الموقف ويذمّه:

\`\`\`ayah
ref: 2:170
highlight: بل نتبع ما ألفينا عليه آباءنا
note: 'الآية لا تذمّ محبّة الآباء، بل تذمّ جعل الوراثة وحدها حجّة. ولاحظ تمام الآية: أوَلو كان الآباء لا يعقلون شيئًا؟ فالموروث يحتاج هو نفسه إلى فحص.'
\`\`\`

وهنا موضع الأمانة: هذه الحجّة تلزم من ورث الإسلام كما تلزم غيره. من كان مسلمًا لمجرّد أنّ أباه مسلم، فهو واقفٌ على الأرض نفسها التي يقف عليها من ورث دينًا آخر. وهذا الدليل كلُّه مكتوبٌ ليخرج القارئ، أيًّا كان موروثه، من وراثة الجواب إلى النظر فيه.

## القرآن يطلب البرهان

حين واجه القرآن دعاوى دينيّةً متعارضة، لم يقل «كلٌّ على دينه»، ولم يقل «صدِّقوا بلا سؤال». قال شيئًا ثالثًا:

\`\`\`ayah
ref: 2:111
highlight: قل هاتوا برهانكم
note: 'سياق الآية دعوى نجاةٍ حصريّة بلا دليل. والجواب قاعدةُ منهجٍ كاملة في ثلاث كلمات: الدعوى لا تُقبل ولا تُرفض بذاتها، بل يُطلب برهانها.'
\`\`\`

ومن طلب البرهان من غيره فقد أذن لغيره أن يطلبه منه. فهذه القاعدة تفتح باب هذه الوحدة كلّها: سنطلب البرهان من الإسلام نفسه.

## خمسة معايير منصفة

ما الذي يصلح ميزانًا يقبله باحثٌ عن الحقّ في أيّ باب، في التاريخ والطبّ كما في الدين؟

\`\`\`compare
columns:
  - title: ما لا يصلح ميزانًا
    points:
      - أين وُلدتَ ومَن ربّاك
      - ألفة الشعائر ودفء الذكريات
      - كثرة الأتباع أو قوّتهم
      - ما يريحنا أن يكون صحيحًا
  - title: ما يصلح ميزانًا
    points:
      - تصوّرٌ عن الله يثبت أمام العقل
      - وحيٌ محفوظ النصّ
      - اتّساقٌ داخليّ بلا تناقض
      - رسالةٌ للناس كلّهم لا لقبيلة
      - شريعةٌ في وُسع البشر
\`\`\`

ولكلّ معيارٍ وجهُه:

1. **تصوّرٌ عن الله يثبت أمام العقل.** الوحدات السابقة أقامت الدليل على خالقٍ واحدٍ لا شريك له، أوّلٍ بلا بداية، غنيٍّ عن خلقه. فأيّ دينٍ يعرض إلهًا يتعدّد، أو يحتاج، أو يوصف بما ينقض كماله، فقد سقط عند المعيار الذي قام عليه البرهان العقليّ، قبل أن نفتح كتابه.
2. **وحيٌ محفوظ النصّ.** رسالةٌ ضاع أصلها أو اختلط بكلام الناس لا يمكن أن تُلزم أحدًا بحرفها؛ إذ كيف يُحاسَب الإنسان على نصٍّ لا سبيل له إلى التثبّت منه؟ الحفظ ليس كمالًا زائدًا، بل شرطُ الحجّيّة نفسها.
3. **اتّساقٌ داخليّ.** الحقّ لا يناقض نفسه. كتابٌ يقرّر الشيء ونقيضه في أصول الاعتقاد لا يصلح مرجعًا في أعظم الأسئلة.
4. **رسالةٌ للناس كلّهم.** ربُّ الخلق جميعًا لا يكون إلهَ قبيلة. ودينٌ يجعل النجاة نسبًا أو عِرقًا يشهد على نفسه أنّه أضيق من ربوبيّة خالق الكلّ. وهذا معيارٌ لا اتّهامٌ لأحدٍ بعينه؛ فأكثرُ الملل إذا سُئلت نفت ذلك عن نفسها، وجوابُها داخلٌ في الميزان.
5. **شريعةٌ في وُسع البشر.** تكليفٌ لا يطيقه البشر إمّا أن يُهجَر وإمّا أن يحوّل أتباعه إلى مدّعين. والإسلام يقرّر هذا المبدأ عن نفسه، ودعواه هذه ستوزَن كغيرها:

\`\`\`ayah
ref: 2:286
show: لا يكلف الله نفسا إلا وسعها
note: قاعدةٌ يعلنها القرآن عن شريعته كلّها. وهي هنا دعوى تُسجَّل على صاحبها ليُطالَب بها، لا فضيلة نسلّم بها مقدّمًا.
\`\`\`

## الميزان يزننا أيضًا

هذه المعايير لم تُفصَّل على مقاس الإسلام ليفوز بها؛ إنها المعايير التي يطبّقها كلُّ عاقلٍ حين يفحص دعوى كبيرة: هل يثبت أصلُها أمام العقل؟ هل وصلنا نصُّها سليمًا؟ هل تتّسق مع نفسها؟ لمن هي؟ وهل يمكن العيش بها؟

وبقيّة هذه الوحدة تفعل ما وعدَت به: الدرس التالي يضع دعوى الحفظ تحت الفحص التاريخيّ، والذي بعده يفحص دعوى الاكتمال والعالميّة. ثم تعرض الوحدتان التاليتان أدلّة صدق الرسول ﷺ ومعجزة القرآن. فإن سقط الإسلام أمام معيارٍ منها فقد سقط؛ هذا معنى أن يكون الميزانُ ميزانًا.

\`\`\`doubt
claim: كلُّ دينٍ يدّعي أنه الحقّ، ودعاواهم تتعارض، فتتساقط جميعًا، ولا يبقى للعاقل إلا أن يتركها كلَّها.
answer: |-
  التعارض يمنع أن تصحّ الدعاوى كلُّها معًا؛ لكنه لا يمنع أن تُفحص واحدةً واحدة. الناس يختلفون في الطبّ والتاريخ والاقتصاد اختلافًا واسعًا، ولا يقول عاقل: «إذن لا حقيقة في الطبّ، فلنترك العلاج». الاختلاف على الجواب لا يلغي السؤال، بل يوجب الفحص.
  ثم إنّ ترك الأديان كلِّها ليس موقفًا خارج المنافسة، بل دعوى ككلّ الدعاوى، عليها من البرهان ما على غيرها. والطريق المنصف ليس «كلّهم سواء» ولا «كلّهم باطل» بجرّة قلم، بل ميزانٌ واحد يُطبَّق على الجميع، وهو ما بين يديك الآن.
\`\`\`

\`\`\`rule
سؤال «أيّ دين؟» يسبقه سؤال «بأيّ ميزان؟». والميزان المنصف: تصوّرٌ عن الله يثبت أمام العقل، ووحيٌ محفوظ، واتّساقٌ داخليّ، ورسالةٌ للناس كلّهم، وشريعةٌ تُطاق. ومن قَبِل هذا الميزان لزمه أن يضع فيه دينَ آبائه قبل دين غيره، وهذا ما تفعله بقيّة هذه الوحدة بالإسلام نفسه.
\`\`\`

\`\`\`note
هذه المعايير شروطُ استبعاد لا أدلّةُ إثبات: اجتيازها يبقي الدعوى في الميدان ولا يثبتها وحده. أدلّة الإثبات الإيجابيّة (صدق الرسول ﷺ ومعجزة القرآن) موعدها الوحدتان السابعة والثامنة، فلا يُطلب منك هنا إلا قبول الميزان.
\`\`\`

\`\`\`quiz
questions:
  - q: لماذا نثبّت المعايير قبل الموازنة بين الأديان؟
    options:
      - لأنّ الموازنة بلا معيارٍ ثابت تنتهي غالبًا إلى فوز دين البيئة والألفة، لا إلى الحقّ
      - لأنّ المعايير تُغني عن النظر في الأدلّة بعدها
      - لأنّ الأديان كلّها متساوية فلا فائدة من الموازنة
      - لأنّ وضع المعايير يضمن فوز الإسلام مقدّمًا
    answer: 0
    why: بلا ميزانٍ ثابت يحكم فينا الموروثُ والألفة من حيث لا نشعر؛ والميزان المنصف يُطبَّق على دين الباحث نفسه قبل غيره.
  - q: ما موقف القرآن من التديّن بالوراثة وحدها؟
    ref: 2:170
    word: بل نتبع ما ألفينا عليه آباءنا
    options:
      - يذمّه ويطالب بالنظر؛ وهي حجّةٌ تلزم من ورث الإسلام كما تلزم غيره
      - يقبله ما دام الموروث هو الإسلام
      - يذمّ محبّة الآباء وتوقيرهم
      - يرى أنّ الأديان كلّها موروثات متكافئة
    answer: 0
    why: الآية تذمّ جعل الوراثة وحدها حجّة، والقرآن نفسه يطلب البرهان؛ فالمسلم بالوراثة مطالَبٌ بالنظر كغيره.
  - q: كيف يجيب الدرس عن شبهة «الدعاوى المتعارضة تتساقط جميعًا»؟
    options:
      - التعارض يمنع صحّتها كلِّها معًا، لكنه لا يمنع فحصها واحدةً واحدة، كما نفعل في كلّ علمٍ يُختلف فيه
      - الشبهة صحيحة، والأسلم ترك الأديان كلّها
      - الأديان لا تتعارض في الحقيقة
      - نرجّح بينها بعدد الأتباع
    answer: 0
    why: الاختلاف على الجواب لا يلغي السؤال؛ الناس يختلفون في الطبّ والتاريخ ثم يفحصون ولا ينصرفون؛ وترك الجميع دعوى تحتاج هي أيضًا إلى برهان.
\`\`\`
`,"../content/lessons/ar/design.md":`---
title: الإتقان ليس صدفة
description: 'القرآن لا يدّعي الإتقان دعوى مرسلة، بل يعرض شواهدَه ويأمر بالنظر فيها مرةً بعد مرة. وكلّما دقّق الإنسان النظر ازداد الإتقانُ عمقًا.'
unit: creator
order: 5
minutes: 10
emoji: 🔭
tags: [الآيات الكونية, الضبط الدقيق, دليل الإتقان]
resources:
  - title: تفسير السعدي لآيات الغاشية
    url: 'https://quran.com/88:17/tafsirs/ar-tafseer-al-saddi'
    note: عرض السعدي الميسّر لمعرض الغاشية الذي يمشي فيه هذا الدرس.
---

> **فكرة الدرس:** حجّة هذا الدرس طبقتان. كتابٌ يأمر بالنظر ويعرض معروضاتٍ كونية، وعلمٌ حديث كلّما دقّق النظر وجد ضبطًا أدقّ. والطبقتان حجّةٌ واحدة: قيل انظروا، فنظرنا، فوجدنا.

## كتابٌ يقول: انظروا

كثيرٌ من المذاهب يطلب منك أن تغمض عينيك وتصدّق. هذا الكتاب يفعل العكس بإلحاح: يفتح عينيك بيده، ويدير وجهك نحو معروضاتٍ بعينها، ويسأل: كيف؟

خذ معرض سورة الغاشية: أربعة معروضات أمام مسافر الصحراء الذي سمع الآيات أولَ مرة، هي مركوبُه، وما فوقه، وما حوله، وما تحته:

\`\`\`ayah
ref: 88:17
highlight: أفلا ينظرون
note: 'بدأ المعرض بما يعرفه السامع الأول أدقَّ معرفة: الإبل لم تكن عنده منظرًا عابرًا، بل عدّةَ البقاء في أرضٍ تقتل. والذي يعرف الشيء عن قربٍ يرى فيه ما لا يراه السائح.'
\`\`\`

انظر معه: خزّانُ دهنٍ في السنام يتحوّل غذاءً أيامَ الجدب؛ وشُربٌ يستوعب في دقائقَ معدودةٍ عشراتِ اللترات ثم صبرٌ أيامًا طوالًا عن الماء تُهلك غيرَه؛ ومنخران ينغلقان دون الرمل؛ وأهدابٌ مزدوجة تحرس العين في العاصفة؛ وخفٌّ عريض لا يغوص في رملٍ تغوص فيه سنابك الخيل؛ وجسدٌ يدَع حرارته تتأرجح في مدًى يُهلك غيرَه من الثدييات، توفيرًا لمائه. آلةُ صحراءَ مكتملة المواصفات، سلّمها اللهُ لسكّان الصحراء بالذات.

\`\`\`ayah
ref: 88:18
note: 'سقفٌ مرفوع فوقك لا يحتاج عمدًا ولا صيانة، تمسكه قوانينُ لا تفتر؛ والمسافر يهتدي بنجومه في ظلمة لا عَلَم فيها.'
\`\`\`

\`\`\`ayah
ref: 88:19
note: 'جبالٌ منصوبة يراها المسافر ثوابتَ في الأفق يهتدي بها، وتستقرّ بها الأرض من حوله كما قال المفسّرون، من غير دعوى علمية مُقحَمة.'
\`\`\`

\`\`\`ayah
ref: 88:20
note: 'أي مُهِّدت وبُسطت لمن يعيش عليها: سطحٌ صالح للمشي والزرع والبناء. وصفٌ لسطحها المعيش، لا كلامَ في الآية عن هندسة الكوكب.'
\`\`\`

ثم يرفع القرآن النظر من معرض الصحراء إلى المشهد كلّه:

\`\`\`ayah
ref: 3:190
highlight:
  - إن في خلق السماوات والأرض
  - لأولي الألباب
note: 'الآياتُ معروضة، لكنها تُقرأ بشرطٍ واحد: لُبٌّ يعمل. النظر في هذا الكتاب عبادةٌ لا تُهمةٌ.'
\`\`\`

## تحدّي النظرة المتكرّرة

ثم يذهب القرآن أبعد من الدعوة إلى النظر: يتحدّى الناظر أن يجد خللًا.

\`\`\`ayah
ref: 67:3
highlight: فارجع البصر هل ترى من فطور
note: 'التفاوت: الخلل وعدم التناسب. والفطور: الشقوق. والآية لا تقول صدِّق، بل تقول افحص: أرجِع البصر بنفسك وفتِّش عن الخلل.'
\`\`\`

\`\`\`ayah
ref: 67:4
note: 'كرّتين أي مرةً بعد مرة. خاسئًا: يرجع البصر صاغرًا خائبًا، وهو حسير: كليلٌ أعياه التفتيش ولم يجد الخلل. دعوةٌ مفتوحة للفحص المتكرّر، وهي عكس «لا تسأل» تمامًا.'
\`\`\`

وقفة إنصاف: أيّ نصٍّ هذا الذي يراهن على أن النظرة الثانية والعاشرة والألف ستزيد الناظر انبهارًا لا اكتشافًا للخلل؟ صاحبُ البضاعة المغشوشة يستعجل البيع ويكره التقليب. وهذا النص يقول: قلِّب ما شئت.

## ثم جاءت المجاهر والمقاريب

مضت القرون، وصار عندنا من أدوات إرجاع البصر ما لم يخطر لأحد. فماذا وجدنا؟

- **في الفيزياء:** يقوم بناء الكون على ثوابتَ أساسية (شدّة الجاذبية، وشدّة القوة النووية، ومقادير أخرى) لو انحرف بعضها انحرافًا يسيرًا لما تماسكت نجوم، ولا اصطنعت النجومُ عناصرَ الكيمياء، ولا قامت حياة. هذه الظاهرة تُعرف باسم «الضبط الدقيق»، وهي محلّ بحثٍ جادّ عند الفيزيائيين، مؤمنِهم وملحدِهم: سمّى ستيفن واينبرغ، وهو ملحد، مسألةَ الثابت الكونيّ أزمةً حقيقيّة في الفيزياء. ومقدارُ كلّ مثالٍ منها يُراجَع ويُضيَّق، ولا يصحّ أن نخفي ذلك: فرنينُ الكربون الذي تنبّأ به هويل كان لعقودٍ أظهرَ الأمثلة، ثم وسّع البحثُ اللاحق هامشَه، وبيّن أنّ كونًا آخر قد يصنع الكربون بطرقٍ أخرى. ومن الفيزيائيين من ينازع في الصياغة نفسِها. ودائرتُها أضيقُ ممّا يُظنّ أيضًا: وجدت دراسة فْرِد آدَمْز سنة ٢٠٠٨ أنّ ربع فضاء بعض الثوابت يسمح بقيام النجوم. فنحن نبني على أقواها لا على أكثرها عددًا.
- **وفي الأحياء:** الخلية التي وُصفت يومًا بأنها «بسيطة» ظهرت مصنعًا مؤتمتًا: شيفرةٌ وراثية تُنسَخ وتُراجَع وتُصحَّح أخطاؤها، وخطوطُ إنتاجٍ للبروتين، وبوّاباتُ نقلٍ ومحطّاتُ طاقة. والعينُ التي تقرأ بها هذا السطر: عدسةٌ ذاتية الضبط، ومستشعرٌ يميّز الألوان في طبقاتٍ من الخلايا المتخصّصة، وأعصابٌ تنقل الصورة مقلوبةً فيقوّمها الدماغ.

الطبقتان حجّةٌ واحدة: الكتاب قال انظروا قبل أربعة عشر قرنًا وتحدّى أن يُرى تفاوت، وكلُّ قرنٍ نظر أعمقَ وجد إتقانًا أدقّ.

\`\`\`ayah
ref: 27:88
show: صنع الله الذي أتقن كل شيء
note: 'صدرُ الآية عند عامّة المفسّرين في مشاهد يوم القيامة، والشاهد هنا عمومُ هذا الوصف: صنعُه سبحانه صنعُ إتقان، تشهد له كلُّ طبقات النظر، من عين المسافر إلى المجهر.'
\`\`\`

## «الأكوان المتعدّدة تفسّر ذلك»

\`\`\`doubt
claim: 'الضبط الدقيق لا يستلزم مصمِّمًا. والأكوان المتعدّدة ليست فرضيةً اختُرعت لهذا الغرض، بل لازمٌ يخرج من التضخّم الأبديّ ومن مشهد الأوتار، ولهما دوافعُ مستقلّة عن مسألة الإله: أكوانٌ لا تُحصى بثوابتَ متفاوتة، ونحن بحكم الضرورة في الكون الذي سمحت ثوابته بوجود من يتساءل. فالضبط الذي يُدهشك أثرُ انتقاءٍ لا أثرُ قصد.'
answer: |-
  ثلاث ملاحظات، بلا تهويل. الأولى: أنّ معظم صيغها لا يبلغها رصد؛ وقد اقتُرحت آثارٌ ممكنة في إشعاع الخلفية من تصادم الفقاعات، ولم يُرصَد منها شيء إلى اليوم. فهي إلى الآن مسألةٌ نظريّة، ويقرّ بهذا فيزيائيون من داخل الحقل نفسه.
  الثانية: هي تكثيرٌ هائل للكائنات بلا شاهدٍ رصديّ. ولا نتّهم أحدًا بنيّة، فدوافعُ الفرضية فيزيائيّة؛ إنما نقول إنّ ميزان الاقتصاد في التفسير، الذي يُشهَر عادةً في وجه الإيمان، لا يمكن أن يُعفى منه هذا الفرض.
  الثالثة وهي الأدقّ: مولِّد الأكوان المزعوم يحتاج هو نفسُه إلى آليةٍ منضبطة: قوانينَ تُنتج أكوانًا وتنوّع ثوابتها بانتظام؛ فالضبط الذي أردنا تفسيره صعد طابقًا ولم يُفسَّر. والدرس لا يدّعي هنا برهانًا رياضيًّا قاطعًا؛ يقول فقط إن كفّة القصد أرجح بما لا يُقارَن من كفّة «هكذا اتّفق»؛ والعاقل يزن ولا يهرب من الوزن.
\`\`\`

\`\`\`rule
القرآن لا يطلب إيمانًا مغمضَ العينين: يعرض شواهدَ كونية، ويأمر بالنظر، ويتحدّى الناظر أن يجد خللًا مهما كرّر النظر. والنظر الحديث، من ثوابت الفيزياء إلى مصنع الخلية، وجد الإتقان يزداد عمقًا كلّما دقّ المقياس. إتقانٌ مطّردٌ على كل المستويات شاهدُ قصدٍ، لا حاصلُ مصادفة.
\`\`\`

\`\`\`tip
جرّب التحدّي بنفسك الليلة: انظر إلى السماء، ثم أرجِع البصر كرّةً بعد كرّة. الآية لا تطلب منك أكثر من هذا، وهي واثقة من نتيجة التجربة.
\`\`\`

\`\`\`quiz
questions:
  - q: ما منهج القرآن في عرض قضية الخالق كما يظهر في آيات الغاشية والملك؟
    ref: 88:17
    word: أفلا ينظرون إلى الإبل كيف خلقت
    options:
      - يعرض شواهدَ مشهودة ويأمر بالنظر فيها مرةً بعد مرة، ويتحدّى الناظر أن يجد خللًا
      - يطلب التسليم أولًا وينهى عن كثرة الأسئلة
      - يكتفي بالوعد والوعيد دون شواهد
      - يحيل القارئ إلى كتب الفلاسفة السابقين
    answer: 0
    why: 'المعروضات مسمّاة بأعيانها (الإبل والسماء والجبال والأرض)، والأمر صريح: انظر، ثم أرجِع البصر كرّتين.'
  - q: ما المقصود بظاهرة «الضبط الدقيق» في الفيزياء؟
    options:
      - أن ثوابت الكون الأساسية لو انحرفت انحرافًا يسيرًا لما وُجدت نجوم ولا كيمياء ولا حياة
      - أن قوانين الفيزياء معقّدة يصعب على غير المختصّ فهمها
      - أن الكون جميل المنظر في الصور الفلكية
      - أن الأرض تقع في مركز الكون تمامًا
    answer: 0
    why: الضبط الدقيق مقولةٌ عن حساسية بناء الكون لقيم ثوابته، وثبوتُها مقرَّر عند الفيزيائيين على اختلاف مواقفهم من تفسيرها.
  - q: بمَ يجيب الدرس عن فرضية الأكوان المتعدّدة؟
    options:
      - غير قابلة للرصد مبدئيًّا، وتكثّر الكائنات هربًا من فاعل، ومولِّد الأكوان يحتاج ضبطًا بدوره
      - ثبت رصديًّا أنها خاطئة
      - يقبلها لأنها لا تتعارض مع وجود الخالق
      - يرفضها لأن أصحابها غير مختصّين
    answer: 0
    why: الجواب الأدقّ أن الفرضية تنقل مشكلة الضبط إلى مستوى أعلى ولا تحلّها، وهي فوق ذلك خارج متناول الرصد بحكم بنائها.
\`\`\`
`,"../content/lessons/ar/direct-connection.md":`---
title: صلةٌ مباشرة
description: 'لا كاهنَ ولا وسيطَ ولا موعدَ مسبق: كيف تبدو العلاقة مع الله من الداخل: دعاءٌ بلا حاجب، وقربٌ في السجود، وحلاوةٌ يجدها القلب طعمًا.'
unit: road
order: 29
minutes: 8
emoji: 🤲
tags: [الدعاء, الصلاة, القرب من الله]
---

> **فكرة الدرس:** أثبتت الوحداتُ الماضية أنّ الله موجودٌ وأنّ رسوله صادق. وهذا الدرس يجيب عن سؤالٍ آخر: كيف تبدو العلاقة به من الداخل؟ جوابُ الإسلام: خطٌّ مفتوح بلا وسيطٍ ولا حاجز: أنت والله، مباشرةً، في كل لحظةٍ شئت.

## آيةٌ بلا واسطة حتى في نظمها

في سورة البقرة آياتُ أحكامٍ متتابعة، يتكرّر فيها نسقٌ واحد: يسألونك عن كذا؟ **قل**... فلمّا جاء السؤال عن الله نفسه، سقطت كلمة «قل»:

\`\`\`ayah
ref: 2:186
highlight: فإني قريب
note: 'تأمّل النظم: لم يقل «فقل لهم إني قريب»، بل جاء الجواب مباشرًا بلا أمرِ تبليغ، فكأنّ القرب تجسّد في بناء الآية نفسه. ولاحظ الجواب: قريبٌ، يجيب دعوة من دعاه؛ فشرطُه الوحيد أن تدعوَه أنت.'
\`\`\`

هذا ليس تفصيلًا بلاغيًّا عابرًا، بل هو عقيدةُ هذا الدين في العلاقة كلِّها: **لا وسيط.** لا كاهن يملك مفاتيح الغفران، ولا قدّيس يُتوسَّل به لتصل الرسالة، ولا لغة معتمدة، ولا ساعة عمل. قال تعالى في آيةٍ أخرى إنه أقرب إلى الإنسان من حبل وريده (ق 50:16)، وقال:

\`\`\`ayah
ref: 40:60
highlight: ادعوني أستجب لكم
note: 'أمرٌ بالدعاء ووعدٌ بالإجابة، من غير شرط وسيطٍ ولا مكان. والدعاء يصحّ بكل لغة وعلى كل حال: ماشيًا وراكبًا ومضطجعًا.'
\`\`\`

فمن وجد في قلبه يومًا حاجةً إلى من يشكو إليه ما لا يقال لأحد، فهذا هو الباب، وهو مفتوح الآن.

## أقرب ما تكون

وأخبر النبيّ ﷺ عن أقرب مواضع هذه الصلة:

\`\`\`hadith
text: 'أقربُ ما يكون العبدُ من ربّه وهو ساجد، فأكثِروا الدعاء.'
source: 'صحيح مسلم (٤٨٢)'
url: 'https://sunnah.com/muslim:482'
note: 'أدنى هيئات الجسد (الجبهة على الأرض) هي أعلى مقامات القرب. معادلةٌ تقلب موازين الكبرياء: تنخفض فترتفع.'
\`\`\`

وهنا يتّضح معنى الصلاة الذي يخطئه من يراها من خارج: ليست الصلواتُ الخمس ضريبةً يوميّة، بل خمسة مواعيد قربٍ مضمونة: وقفةٌ بين يدي ربّ العالمين بلا حجز مسبق ولا حاجب، يقطع بها المسلمُ يومَه فلا يبتعد عن ربّه أكثر من ساعات. وقد ذُكر أنّ في اسم الصلاة معنى الصِّلة، على اختلاف المادّتين، وأشهرُ الأقوال وأصحُّها عند جمهور أهل اللغة أنها من الدعاء؛ والمعنيان كلاهما حاضرٌ فيها: نداءٌ وصِلة.

## حلاوةٌ تُذاق

وقد يستغرب من لم يجرّب أن يوصف الإيمان بالطعم. لكنه وصفُ من لا ينطق عن الهوى:

\`\`\`hadith
text: 'ثلاثٌ من كنّ فيه وجد حلاوةَ الإيمان: أن يكون اللهُ ورسولُه أحبَّ إليه مما سواهما، وأن يحبّ المرءَ لا يحبّه إلا لله، وأن يكره أن يعود في الكفر كما يكره أن يُقذَف في النار.'
source: 'صحيح البخاري (١٦)'
url: 'https://sunnah.com/bukhari:16'
note: 'حلاوة: كلمةُ ذوقٍ لا كلمةُ فكر. فالإيمان في هذا الدين ليس اقتناعًا باردًا يقف عند العقل، بل علاقةُ حبٍّ لها طعمٌ يجده القلب، يعرفه من ذاقه كما يُعرَف طعم العسل.'
\`\`\`

وصدّق هذا الوصفَ ملايينُ البشر عبر القرون: من العابد في محرابه إلى الداخل في الإسلام حديثًا الذي يحكي أولَ سجدةٍ له. لسنا نقدّم هذا دليلًا برهانيًّا (فالأذواق لا تُبرهَن) بل خبرًا عمّا وراء الباب، من مصدرٍ قام البرهان على صدقه، تشهد له تجربةُ من دخل.

\`\`\`doubt
claim: هذا وصفٌ جميل، لكنه دعائيّ. فالمشاعر الروحية يحكيها أتباع كل دين، والارتياح النفسي بعد الطقوس ظاهرة نفسية معروفة لا تدل على صدق العقيدة.
answer: |-
  صحيح؛ ولهذا لم يقدّم هذا الدليلُ التجربةَ الروحية برهانًا قط، ولا بُنيت عليه وحدةٌ من وحداته. البرهان مضى في أبوابه: حدوث الكون وضبطه، وصدق الرسول بالاختبارات الخمسة، وإعجاز الكتاب وحفظه. أمّا هذا الدرس فيصف ما يجده الداخل بعد أن يدخل؛ والفرق منهجيٌّ صريح: نحن لا نقول «صدِّق لأن المؤمنين سعداء»، بل نقول «قام الدليل على الصدق، وهذا ما ستجده وراء الباب».
  على أنّ في التجربة الإسلامية خصوصيةً تستحق النظر المنصف: الارتياح الطقسيّ العام يبقى حيث الطقس، أمّا هنا فعلاقةٌ تملأ اليوم كلَّه (خمسُ صلوات، ودعاءٌ بلا موعد، وذكرٌ في الطريق)، ومضمونُها ليس تفريغًا نفسيًّا بل خطابًا لمخاطَبٍ قام الدليلُ على وجوده وقربه. فإن كان الله موجودًا حقًّا، وقد مضى برهانه، فليس عجيبًا أن يجد القلبُ في الصلة به ما لا يجده في شيءٍ سواه؛ العجيب لو لم يجد.
\`\`\`

\`\`\`rule
العلاقة في الإسلام خطٌّ مباشر: دعاءٌ بلا وسيطٍ ولا لغةٍ معتمدة، تُجاب به وقد أُمرت به؛ وسجودٌ هو أقرب مواضع العبد من ربه؛ وخمسةُ مواعيد يوميّة تصل اليومَ كلَّه به. وللإيمان فوق ذلك حلاوةٌ أخبر عنها الصادقُ المصدوق؛ لا نقدّمها برهانًا، بل خبرًا صادقًا عمّا وراء الباب.
\`\`\`

\`\`\`tip
جرّب الليلة أبسطَ صور هذا الباب: ارفع يديك وقل بلغتك (أيّ لغة): «اللهم إن كنتَ تراني فاهدني إلى الحق». دعاءُ الصادق الحائر عبادةٌ يحبها الله، ولن تخسر به شيئًا، وقد يفتح لك ما لم تفتحه السنون.
\`\`\`

\`\`\`quiz
questions:
  - q: ما اللطيفة التي وقف عندها الدرس في آية القرب (البقرة 186)؟
    ref: 2:186
    word: فإني قريب
    options:
      - جاء الجواب بلا كلمة «قل» على خلاف نسق آيات الأسئلة حولها؛ فكأنّ المباشرة تجسّدت في نظم الآية نفسها
      - أنها أطول آية في سورة البقرة
      - أنها نزلت في مكة قبل الهجرة
      - أن السؤال فيها كان من أهل الكتاب
    answer: 0
    why: آيات الأحكام حولها تجري على نسق «يسألونك... قل»، وهنا سقطت الواسطة اللفظية نفسها في آية القرب، وهو نظمٌ يطابق معناه.
  - q: ما الذي يقلبه حديث «أقرب ما يكون العبد من ربه وهو ساجد» من موازين؟
    options:
      - أدنى هيئات الجسد جُعلت أعلى مقامات القرب؛ فالانخفاض لله رفعة، والصلاة مواعيدُ قربٍ لا ضريبة
      - أن القرب من الله لا يكون إلا في المسجد
      - أن السجود أصعب أركان الصلاة بدنيًّا
      - أن الدعاء لا يصح خارج السجود
    answer: 0
    why: الجبهة على الأرض أبعد ما تكون في مقاييس الكبرياء، وهي في ميزان هذا الدين أقرب مواضع العبد من ربه؛ ولهذا أُمر بإكثار الدعاء فيها.
  - q: لماذا لا يقدّم هذا الدليل «حلاوة الإيمان» برهانًا على صدق الإسلام؟
    options:
      - لأن الأذواق والتجارب لا تصلح برهانًا، فالبرهان مضى في أدلته العقلية والتاريخية، وهذا خبرٌ عمّا يجده الداخل بعد الدخول
      - لأن الحلاوة لا يجدها إلا العلماء
      - لأن الحديث الوارد فيها ضعيف
      - لأن المشاعر محرّمة في باب الاعتقاد
    answer: 0
    why: المنهج صريح؛ فلا يقال «صدِّق لأن المؤمنين سعداء»، بل «قام الدليل، وهذا ما وراء الباب»؛ والتجارب الروحية عند سائر الأديان هي نفسها سببُ هذا الاحتياط المنهجي.
\`\`\`
`,"../content/lessons/ar/final-message.md":`---
title: خاتمُ الرسالات
description: 'دينٌ أُعلن كمالُه في حياة صاحبه، ورسالةٌ للناس كلّهم لا لقبيلة، ونبيٌّ يختم إخوته من الأنبياء ولا يهدمهم. وماذا يلزم من الختم؟'
unit: why-islam
order: 19
minutes: 8
emoji: 🌍
tags: [خاتم النبيين, إكمال الدين, عالمية الرسالة]
---

> **فكرة الدرس:** الإسلام لا يقدّم نفسه دينًا جديدًا لإلهٍ جديد، بل خاتمةً للرسالة الواحدة التي حملها الأنبياء جميعًا: مكتملةً، محفوظةً، موجَّهةً إلى الناس كلّهم. ومن اكتمل هذا كلُّه في رسالته، لم يبقَ سببٌ لرسولٍ بعده.

## آخر السلسلة، لا هادمها

في وحدة الرسل رأيتَ أنّ دعوة الأنبياء من نوحٍ إلى عيسى كانت دعوةً واحدة: اعبدوا الله وحده. فحين يصف القرآن محمدًا ﷺ بأنه خاتم النبيّين، فهو يضعه في آخر تلك السلسلة نفسِها، لا خارجَها:

\`\`\`ayah
ref: 33:40
highlight: وخاتم النبين
note: 'الخاتم آخرُ الشيء الذي به يُختَم. والآية تجمع له الوصفين معًا: رسول الله (فهو من السلسلة، مصدِّقٌ لمن قبله) وخاتم النبيّين، فلا نبيّ بعده.'
\`\`\`

ولهذا لوازم عمليّة يقلّ من ينتبه لها. من صحّت عنده هذه الآية لم يعد بحاجةٍ إلى فحص دعوى كلّ من ادّعى النبوّة بعد ذلك، واحدًا واحدًا عبر القرون: كلُّ مدّعٍ جاء بعده مُجابٌ سلفًا بالختم نفسِه. الباب لم يوصَد في وجه أحدٍ بعينه؛ أُعلن إغلاقُه قبل أن يولد الطارقون جميعًا.

## دينٌ أُعلن كمالُه في حياة صاحبه

الأديان تتشكّل عادةً بالتراكم: يمضي المؤسِّس، ثم تبني الأجيالُ فوق تركته طبقةً فوق طبقة. هنا شيءٌ مختلف: المؤسِّس نفسه تلا على الملأ أنّ الدين قد كمُل:

\`\`\`ayah
ref: 5:3
show: اليوم أكملت لكم دينكم وأتممت عليكم نعمتي ورضيت لكم الإسلام دينا
highlight: أكملت لكم دينكم
note: نزل هذا المقطع يوم عرفة في حجّة الوداع، قبل وفاته ﷺ بنحو ثلاثة أشهر. فإعلان الكمال جاء من الوحي نفسه، في أعظم مشهدٍ جماهيريّ عرفته الدعوة، والنبيُّ ﷺ حيٌّ يتلوه.
\`\`\`

ووزنُ هذه الآية لم يخفَ حتى على رجلٍ من أهل كتابٍ آخر:

\`\`\`hadith
text: 'يَا أَمِيرَ الْمُؤْمِنِينَ، آيَةٌ فِي كِتَابِكُمْ تَقْرَءُونَهَا لَوْ عَلَيْنَا مَعْشَرَ الْيَهُودِ نَزَلَتْ لاَتَّخَذْنَا ذَلِكَ الْيَوْمَ عِيدًا… قَالَ عُمَرُ قَدْ عَرَفْنَا ذَلِكَ الْيَوْمَ وَالْمَكَانَ الَّذِي نَزَلَتْ فِيهِ عَلَى النَّبِيِّ صلى الله عليه وسلم وَهُوَ قَائِمٌ بِعَرَفَةَ يَوْمَ جُمُعَةٍ'
source: 'صحيح البخاري (٤٥)'
url: 'https://sunnah.com/bukhari:45'
note: 'رجلٌ من اليهود ذكر آية إكمال الدين فأدرك من فوره وزنَها: يومٌ يكتمل فيه دينٌ يستحقّ أن يكون عيدًا. وجواب عمر: قد حفظنا اليومَ والمكان، فقد نزلت يومَ الجمعة الذي يجتمع فيه المسلمون كلَّ أسبوع، بعرفةَ التي هي ذروة الحجّ.'
\`\`\`

تأمّل المشهد بلا شماتة؛ فليس في الحديث غالبٌ ومغلوب، بل قارئان يعرفان طعم الوحي: أحدهما يقول «لو نزلت فينا لعيّدنا»، والآخر يجيب أنّ اللحظة كانت محفوظةً عندنا بيومها ومكانها. أمّةٌ تحفظ عن آيةٍ واحدة يومَ نزولها ومكانَه، هذه هي الأمّة التي رأيتَ في الدرس السابق كيف حفظت النصّ كلَّه.

## للناس كافّة

الرسالات قبله كانت تُبعث في قومٍ بأعيانهم، لعصرها وأهلها. وهنا يعترض القارئ المسيحيّ اعتراضًا وجيهًا: فخاتمةُ إنجيل متّى وصيّةٌ بالذهاب إلى الأمم جميعًا. والدعوى القرآنيّة ليست أنّ أحدًا من الأمم السابقة لم يفهم رسالته خارجةً عنه، بل هي في المبعوث إليه ابتداءً؛ والقرآن يقول عن عيسى عليه السلام إنه أُرسل إلى بني إسرائيل (آل عمران ٤٩، والصفّ ٦). وإنجيلُ متّى نفسُه ينقل هذا القصر على لسان المسيح: “إنما أُرسلتُ إلى خراف بيت إسرائيل الضالّة” (متّى ١٥: ٢٤)، ومثلُه وصيّتُه للاثني عشر (متّى ١٠: ٥ و٦)؛ وأمّا الوصيّةُ بالذهاب إلى الأمم فهي في خاتمة السِّفر. وموضعُ اختلاف الروايتين موضعُ وزنٍ لا موضعُ تجاوز. وهذه الرسالة تعلن عن نفسها شيئًا آخر:

\`\`\`ayah
ref: 34:28
highlight: كافة للناس
note: خطابٌ لا يعرف حدودَ قبيلةٍ ولا عِرق. ولذلك كان الدخول في هذا الدين شهادةَ اقتناع يقولها أيُّ إنسانٍ بأيّ لسان، لا شهادةَ ميلادٍ تُورَث.
\`\`\`

وهنا يكتمل معيار الدرس الأوّل من هذه الوحدة: ربُّ الخلق جميعًا لا يكون إلهَ قبيلة، ورسالته الخاتمة تخاطب الخلق جميعًا.

## الختم والحفظ متلازمان

لماذا كانت الرسالات تُجدَّد أصلًا؟ لسببين: نصٌّ يضيع أو يختلط بكلام الناس، ورسالةٌ محصورة في قومٍ دون قوم. والإسلام يدّعي رفعَ السببين معًا: نصٌّ محفوظ (وهو ما فحصتَه في الدرس السابق) وخطابٌ للناس كافّة. فإذا بقي النصُّ وعمَّ الخطاب، لم يبقَ لإرسال رسولٍ جديد موجِب.

فالختم ليس قرارًا تحكّميًّا أُلحق بالدين، بل نتيجةٌ يشدّها ما قبلها: لا معنى لرسالةٍ خاتمة يضيع نصُّها كما ضاع غيرُه. ولاحظ أنّ هذا هو معيار الاتّساق الداخليّ يعمل أمامك: دعاوى الإسلام الثلاث (الحفظ، والعالميّة، والختم) لا يستقيم بعضُها بلا بعض، وقد جاءت متعاضدةً كلُّها.

\`\`\`doubt
claim: دعوى «الختم» حيلةُ تحصينٍ ذاتيّ لا دليلٌ على شيء. أيُّ مؤسِّسٍ يستطيع أن يكتب في كتابه «لا نبيّ بعدي» ليغلق الباب في وجه المنافسين.
answer: |-
  صحيح: الدعوى وحدها لا تثبت شيئًا، وهذا الدرس لا يستدلّ بها على صدق الإسلام أصلًا. أدلّة الصدق موعدها الوحدتان القادمتان: سيرة الرسول ﷺ ومعجزة القرآن. موضع الختم من الحجّة موضع الاتّساق لا الإثبات: إن ثبت أنّ الرسالة من الله، كان الختم لازمًا معقولًا لا تحكُّمًا، إذ لم يبقَ للتجديد سبب.
  ثم إنّ الختم أبعد ما يكون عن التحصين؛ إنه أثقل رهانٍ يمكن أن تراهنه رسالة على نفسها: أن تكفي الناسَ كلَّهم، في الأزمنة كلِّها، بلا نبيٍّ يصحّح بعدها أبدًا. الدعاوى المحصَّنة تصاغ بحيث لا يمكن اختبارها؛ وهذه صيغت بحيث يختبرها كلُّ قرنٍ من جديد.
\`\`\`

\`\`\`rule
الإسلام يقدّم نفسه إتمامًا للرسالة الواحدة لا نقضًا لها: نبيٌّ يختم إخوته من الأنبياء مصدِّقًا لهم، ودينٌ أُعلن كمالُه في حياة صاحبه، ورسالةٌ للناس كافّةً نصُّها محفوظ. والختم لازمُ هذا كلِّه المتّسق، لا دليلُه؛ والدليل نفسُه موعده الوحدتان التاليتان.
\`\`\`

\`\`\`quiz
questions:
  - q: ماذا يعني وصف النبيّ ﷺ بأنه خاتم النبيّين؟
    ref: 33:40
    word: وخاتم النبين
    options:
      - أنه آخر سلسلة الأنبياء، مصدِّقًا لمن قبله لا هادمًا لهم، فلا نبيّ بعده
      - أنه أوّل الأنبياء زمانًا
      - أنه نبيٌّ للعرب خاصّة
      - أنه نسخ ذكرَ الأنبياء السابقين من الدين
    answer: 0
    why: الآية تجمع له الوصفين (رسول الله وخاتم النبيّين)؛ فهو من السلسلة الواحدة وبه خُتمت، وكلُّ مدّعٍ بعده مُجابٌ سلفًا.
  - q: ما وجه الاستدلال بنزول آية إكمال الدين في حجّة الوداع؟
    options:
      - أنّ إعلان كمال الدين جاء من الوحي في حياة النبيّ ﷺ نفسِه، لا من تراكم الأجيال بعده
      - أنّ الآية آخر ما نزل من القرآن كلِّه باتّفاق
      - أنّ الحجّ أهمّ أركان الإسلام
      - أنّ الصحابة هم الذين أعلنوا اكتمال الدين بعد وفاته
    answer: 0
    why: الأديان تتشكّل عادةً بالتراكم بعد مؤسّسها؛ وهنا تلا المؤسِّسُ نفسُه على الملأ أنّ الدين كمُل، قبل وفاته بنحو ثلاثة أشهر.
  - q: كيف يجيب الدرس عن شبهة أنّ الختم مجرّد حيلة تحصين؟
    options:
      - الدرس لا يستدلّ بالختم على الصدق أصلًا؛ فالختم لازمٌ متّسق إن ثبت الصدق، والدليل موعده الوحدتان التاليتان
      - بأنّ الختم دليلُ الصدق الكافي وحده
      - بإنكار أنّ في الأديان مدّعين كاذبين
      - بأنّ كثرة أتباع الإسلام تكفي جوابًا
    answer: 0
    why: الدعوى وحدها لا تثبت شيئًا، وموضع الختم من الحجّة موضع الاتّساق؛ بل هو رهانٌ ثقيل قابل للاختبار في كلّ قرن، لا تحصينٌ من الاختبار.
\`\`\`
`,"../content/lessons/ar/fitrah.md":`---
title: 'الفطرة: شاهدٌ من داخلك'
description: 'قبل أيّ كتابٍ أو معلّم، في داخلك معرفةٌ أولى بالخالق وميلٌ إليه. ما الفطرة، وما دليلها، ولماذا تظهر أوضحَ ما تكون عند الشدّة؟'
unit: start
order: 2
minutes: 8
emoji: 🌱
tags: [الفطرة, دليل الفطرة, لحظة الشدة]
---

> **فكرة الدرس:** معرفة الخالق ليست فكرةً مستورَدة تحتاج إلى من يزرعها فيك، بل بذرةٌ مغروسة تحتاج فقط إلى ألّا تُدفَن. ولذلك تنبت من جديدٍ كلّما زُلزلت القشور التي فوقها.

## ما الفطرة؟

الفطرة هي الهيئة الأصليّة التي خُلق الإنسان عليها: استعدادٌ مغروسٌ فيه لمعرفة خالقه، والميل إليه، والالتجاء إليه عند الكرب. لا يحتاج الطفل إلى من يعلّمه أن يسأل «من صنع هذا؟»، بل يحتاج إلى من يعلّمه أن يكفّ عن السؤال.

\`\`\`ayah
ref: 30:30
highlight: فطرت الله التي فطر الناس عليها
note: 'أي: الزم الدين الذي يوافق الخلقة الأصليّة، فالله فطر الناس على معرفته والتوجّه إليه. هذا معنى الآية عند عامّة المفسّرين، كالطبريّ وابن كثير والسعديّ.'
\`\`\`

وأخبر النبيّ ﷺ أنّ هذه الخلقة الأولى سابقةٌ لكلّ تربية:

\`\`\`hadith
text: 'ما مِن مولودٍ إلّا يُولَد على الفطرة، فأبواه يُهوِّدانه أو يُنصِّرانه أو يُمجِّسانه، كما تُنتَج البهيمةُ بهيمةً جَمْعاء، هل تُحِسّون فيها من جَدْعاء؟'
source: 'صحيح البخاري (١٣٥٩)، ومسلم (٢٦٥٨)'
url: 'https://sunnah.com/bukhari:1359'
note: 'جَمْعاء: سليمة الأعضاء. جَدْعاء: مقطوعة الأذن. أي أنّ البهيمة تولد كاملةً، والقطع يأتيها من الناس بعد ذلك، وكذلك الفطرة.'
\`\`\`

تأمّل التشبيه: التديُّن المنحرف يحتاج إلى فاعلٍ خارجيّ («فأبواه…»)، أمّا معرفة الله فلا تحتاج؛ لأنّها الأصل الذي يولد به الإنسان.

## دليلها الذي تراه بعينك

لو كانت فكرة الخالق مجرّد موروثٍ ثقافيّ، لاختفت حيث يختفي الموروث. لكنّ الواقع خلاف ذلك:

- **عمومها:** ما من حضارةٍ عرفها التاريخ إلا وفيها عبادة وتديّن، حتى المعزولة في الجزر والأدغال. يضلّ الناس في *من* يعبدون، لكنّ *أصل التوجّه إلى معبودٍ* لا يغيب. والضلال في تطبيق شيءٍ دليلُ وجوده لا عدمِه.
- **ولحظة الشدّة:** حين يقع الإنسان في خطرٍ حقيقيّ لا حيلة له فيه، يجد نفسه يتوجّه بقلبه إلى «فوق» قبل أن يقرّر، وبلا تفكير. هذه اللحظة يسمّيها القرآن باسمها:

\`\`\`ayah
ref: 17:67
highlight: ضل من تدعون إلا إياه
note: 'في البحر، حين ينقطع كلّ سببٍ أرضيّ، «يضلّ» عن القلب كلُّ معبودٍ مزعوم ولا يبقى فيه إلا الله. ثم إذا جاء الأمان عاد الإعراض، والآية تسجّل الحالتين معًا.'
\`\`\`

\`\`\`ayah
ref: 29:65
highlight: دعوا الله مخلصين له الدين
note: 'الآية تصف المشركين: يعبدون الأصنام، فإذا ركبوا البحر أخلصوا الدعاء لله وحده. الشدّة لم تعلّمهم شيئًا جديدًا؛ بل كشفت ما تحت الركام.'
\`\`\`

وليس هذا خبرًا عن العرب وحدهم. فكثيرٌ ممّن لا يؤمن يروي عن نفسه، عند مصعدٍ يهوي أو طائرةٍ تضطرب، نداءً في صدره لا يعرف من أين جاء؛ ومنهم من ينكر ذلك عن نفسه إنكارًا، ولسنا نحاكم أحدًا إلى ما في صدره. وإنما السؤال عمّن وجده: لماذا يتوجّه القلب عند الشدّة إلى جهةٍ أنكرها اللسان طول العمر؟ إن لم يكن هناك أحد، فمِمَّ هذا النداء؟

## فطرةٌ تُدفَن ولا تموت

\`\`\`doubt
claim: التديّن مجرّد موروثٍ اجتماعيّ. لو وُلدتَ في بيئةٍ أخرى لاعتقدتَ اعتقادها، فاعتقادك انعكاسٌ لبيئتك لا أكثر.
answer: |-
  الحديث نفسه يقرّر نصف هذا الكلام: «فأبواه يهوّدانه أو ينصّرانه». فنعم، البيئة تصوغ صورة التديّن وتحرفها. لكن لاحظ ما الذي لا تصنعه البيئة: أصل التوجّه إلى خالق. فهو يظهر في كلّ البيئات بلا استثناء، ويعود عند الشدّة حتى عند من ربّته بيئةٌ ملحدة. البيئة تشكّل البذرة أو تدفنها، لكنها ليست هي التي وضعتها.
  ثم إنّ هذه الحجّة سيفٌ ذو حدّين: الإلحاد أيضًا يكثر في بيئاتٍ ويندر في أخرى، فهو بهذا المنطق «انعكاس بيئة» كذلك. مصدرُ الفكرة لا يحكم على صحّتها؛ الدليل وحده يحكم. وهذا الدليل هو ما تقرؤه في الوحدة الآتية.
\`\`\`

\`\`\`rule
في كلّ إنسانٍ معرفةٌ أولى بالخالق مغروسةٌ قبل التعلّم، تشهد لها عالميّةُ التديّن ولحظةُ الشدّة. البيئة قد تدفنها أو تحرف صورتها، لكنها لا تخلقها ولا تقتلعها.
\`\`\`

\`\`\`note
دليل الفطرة وحده لا يقيم عقيدةً كاملة، ولا يدّعي هذا الدرسُ ذلك. هو شاهدٌ من داخلك يهيّئك للنظر، أمّا البرهان العقليّ فموعده الوحدة التالية: هل لهذا الكون خالق؟
\`\`\`

\`\`\`quiz
questions:
  - q: ماذا تعني «الفطرة» في هذا الباب؟
    options:
      - استعدادٌ مغروس في الإنسان لمعرفة خالقه والالتجاء إليه، سابقٌ لكلّ تعليم
      - العادات التي يكتسبها الطفل من أبويه
      - قدرة الإنسان على تعلّم اللغات
      - الشعائر التي يمارسها المجتمع
    answer: 0
    why: 'الفطرة خِلقةٌ أصليّة لا اكتساب: «ما من مولود إلا يولد على الفطرة»، والتغيير هو الذي يحتاج إلى فاعل («فأبواه…»).'
  - q: ما وجه الدلالة في آية الضرّ في البحر (الإسراء 67)؟
    options:
      - عند انقطاع الأسباب تسقط الأقنعة، فيتوجّه القلب إلى الله وحده بلا قرارٍ ولا تفكير
      - أنّ ركوب البحر كان خطرًا في الزمن القديم
      - أنّ الدعاء لا يكون إلا في البحر
      - أنّ الخوف يفسد التفكير السليم
    answer: 0
    why: التوجّه الاضطراريّ إلى الله عند الشدّة يكشف معرفةً كانت مدفونةً تحت الغفلة، وهذا هو ظهور الفطرة.
  - q: كيف يجيب هذا الدرس عن شبهة «دينك مجرّد انعكاسٍ لبيئتك»؟
    options:
      - البيئة تصوغ صورة التديّن، لكنّ أصل التوجّه إلى خالقٍ يظهر في كلّ البيئات، والحجّة نفسها تنطبق على الإلحاد أيضًا
      - البيئة لا أثر لها في الإنسان إطلاقًا
      - الشبهة صحيحة ولا جواب عنها
      - الأديان كلّها صواب بحسب بيئتها
    answer: 0
    why: مصدر الفكرة لا يحكم على صحّتها، والدليل وحده يحكم. ثم إنّ عموم التديّن في كلّ البيئات هو نفسه الظاهرة المحتاجة إلى تفسير.
\`\`\`
`,"../content/lessons/ar/from-nothing.md":`---
title: أم خُلقوا من غير شيء؟
description: 'ثلاثة احتمالاتٍ لوجودك لا رابع لها، حصرها القرآن في آيتين، وسمعهما رجلٌ من خصومه فكاد قلبُه أن يطير.'
unit: creator
order: 3
minutes: 9
emoji: 🌌
tags: [سورة الطور, الاحتمالات الثلاثة, وجود الخالق]
resources:
  - title: تفسير ابن كثير لآية الطور
    url: 'https://quran.com/52:35/tafsirs/ar-tafsir-ibn-kathir'
    note: التفسير الكامل للآية التي يدور عليها هذا الدرس، بعرض ابن كثير الموجز.
---

> **فكرة الدرس:** لوجودك ثلاثة تفسيراتٍ لا رابعَ لها: وُجدتَ من غير شيء، أو أوجدتَ نفسَك، أو أوجدك غيرُك. اثنان منها مستحيلان، فيبقى الثالث بالضرورة.

## أوثق معلومةٍ عندك

يمكنك أن تشكّ في أشياء كثيرة، إلا في شيءٍ واحد: أنك موجود. أشدُّ المتشكّكين في التاريخ لم يجد سبيلًا إلى إنكار هذه. فالسؤال الذي لا مهرب منه: من أين جاء هذا الوجود؟

ليست الإجابات المحتملة كثيرةً كما قد تظن. فالعقل، أيَّ عقلٍ وفي أيّ عصر، لا يتصوّر إلا ثلاثة احتمالات: أن يكون الشيء وُجد من لا شيء، أو أوجد نفسَه، أو أوجده غيرُه. هذه قسمةٌ حاصرة: ليست آراءَ مدارس تُضاف إليها آراء، بل حدود الممكن المنطقيّ نفسها.

والقرآن حصر هذه القسمة في آيتين، بصيغة أسئلةٍ لا تقرير:

\`\`\`ayah
ref: 52:35
highlight:
  - من غير شيء
  - أم هم الخالقون
note: 'سؤالان يهدمان احتمالين: أوُجدوا من غير مُوجِد؟ أم هم الذين أوجدوا أنفسهم؟ قال ابن كثير: أوُجدوا من غير خالق، أم هم خلقوا أنفسهم؟ أي لا هذا ولا هذا، بل الله هو الذي خلقهم.'
\`\`\`

\`\`\`ayah
ref: 52:36
note: 'الآية تغلق آخرَ المنافذ: إن لم يخلقوا أنفسهم، فهل خلقوا الكونَ الذي هم جزءٌ منه؟ لا أحد يدّعي هذا. ثم تضع الإصبع على الموضع الحقيقيّ للمشكلة: بل لا يوقنون. فهي ليست أزمةَ دليل، بل أزمةَ يقينٍ وجدّية.'
\`\`\`

لاحظ ما الذي يفعله هذا النص: لا يشتم، ولا يهدّد، ولا يطلب تسليمًا؛ بل يعرض القسمة العقلية كاملةً ويترك السامع أمامها. فلنقف نحن أيضًا أمامها، احتمالًا احتمالًا.

## الاحتمال الأول: من غير شيء

«العدم» ليس مادّةً خامًا رقيقة، ولا فضاءً فارغًا ينتظر. العدم هو اللاشيء المطلق: لا مادّة ولا طاقة ولا قوانين ولا زمن ولا حتى «إمكانٌ» تخرج منه الأشياء. ومن اللاشيء لا يخرج شيء، ليس لأن التجربة لم تسجّل ذلك فحسب، بل لأنه ليس هناك «شيء» يُخرِج ولا قانونٌ يُجيز الخروج.

وهذه ليست عقيدةً دينية، بل المقدّمة الصامتة لكلّ علمٍ تجريبيّ: حين يجد الباحث ظاهرةً جديدة لا يقول «حدثت من غير شيء» ويغلق المختبر، بل يفتّش عن سببها. لو كان اللاشيء يُنتج أشياء، لانهارت فكرة التفسير نفسها.

## الاحتمال الثاني: خلقوا أنفسهم

هذا الاحتمال أسوأ حالًا من الأول: لكي يخلق الشيءُ نفسَه يلزم أن يكون موجودًا قبل وجوده، أي موجودًا وهو بعدُ غيرُ موجود. هذا ليس أمرًا بعيد الاحتمال يحتاج إلى إحصاء، بل تناقضٌ صريح كالمربّع الدائريّ: لا يصير ممكنًا ولو أُعطي زمنًا لا نهائيًّا.

قلّ أن يتبنّى أحدٌ هذا الاحتمال بلفظه، لكنك تسمع صداه في عباراتٍ تمرّ بلا فحص، مثل «الكون أوجد نفسه بقوانينه». والقوانين وصفٌ لسلوك الموجود، فلا تسبق وجودَه ولا تملك أن تُنشئه.

## فلم يبقَ إلا الثالث

إذا كانت القسمة حاصرةً وسقط قسمان، ثبت الثالث ضرورةً، لا تفضيلًا ولا ترجيحًا: لوجودك مُوجِدٌ غيرُك، ليس أنت ولا العدم.

وقد وقعت هذه الحجّة يومًا على أذنٍ تعرف قيمة الكلام. جُبير بن مُطعِم، وهو من سادة قريش، جاء المدينةَ في شأن أسرى بدر وهو يومئذٍ على دين قومه، فسمع النبيّ ﷺ يصلّي المغرب:

\`\`\`hadith
text: 'سمعتُ النبيَّ ﷺ يقرأ في المغرب بالطور، فلمّا بلغ هذه الآية … كاد قلبي أن يطير.'
source: 'صحيح البخاري (٤٨٥٤)'
url: 'https://sunnah.com/bukhari:4854'
note: 'والآية هي التي قرأتَها فوق. وفي روايةٍ أخرى قال: وذلك أوّلَ ما وقر الإيمانُ في قلبي، في صحيح البخاري (٤٠٢٣). وأنه كان جاء في أسارى بدر، في صحيح البخاري (٣٠٥٠).'
\`\`\`

تأمّل الواقعة: رجلٌ لغتُه العربية وميزانُه البلاغة، وليس بينه وبين هذا الدين يومها إلا الخصومة. سمع السورة كلَّها وفيها الوعد والوعيد، لكنّ الموضع الذي وقف عنده ووصفه بأنّ قلبه كاد يطير هو موضعُ القسمة العقليّة بعينه. ثم أسلم بعد ذلك بسنوات. الحجّة التي تقرؤها الآن هي نفسُها التي سمعها.

## «لكنّ الفيزياء تقول غير ذلك»

\`\`\`doubt
claim: ميكانيكا الكمّ أثبتت أن جسيماتٍ تظهر من العدم وتختفي طوالَ الوقت في الفراغ الكمّي. فإذا كانت الجسيمات تظهر من العدم، فلماذا لا يكون الكون كلُّه ظهر من العدم بلا خالق؟
answer: |-
  الذي تصفه الفيزياء هنا ليس عدمًا. «الفراغ الكمّي» نظامٌ فيزيائيّ قائم بذاته: له طاقةٌ وحقولٌ كمّيّة وقوانينُ صارمة تحكمه، والجسيمات «تظهر» منه كما تظهر الموجة من البحر: من شيءٍ موجودٍ مفعمٍ بالإمكانات. فالسؤال يبقى بكامل قوّته: من أين جاء البحر نفسُه، أي الحقول والطاقة والقوانين؟
  تسميةُ شيءٍ موجودٍ «عدمًا» لا تجعله عدمًا. وهذا النقد لم يأتِ من المتديّنين وحدهم؛ فقد وجّهه فلاسفةُ فيزياء إلى أشهر كتابٍ قال بهذه الدعوى، لأن إعادة تعريف الكلمة ليست إجابةً عن السؤال. العدم الذي تتكلّم عنه القسمة العقلية هو اللاشيء المطلق، ومنه لا يخرج شيء.
\`\`\`

\`\`\`rule
لكلّ موجودٍ حادثٍ ثلاثةُ احتمالاتٍ لا رابعَ لها: وُجد من غير شيء، أو أوجد نفسَه، أو أوجده غيرُه. الأول يناقض بديهيةَ أن اللاشيء لا يعطي شيئًا، والثاني يلزم منه وجود الشيء قبل وجوده، فيبقى الثالث ضرورةً: لك مُوجِدٌ غيرُك. ويبقى سؤالٌ واحد: هل الكون نفسُه حادثٌ تجري عليه هذه القسمة، أم هو أزليّ لا تمسّه؟ ذلك موضوع الدرس التالي.
\`\`\`

\`\`\`tip
لاحظ أن أعظم قضيةٍ في الوجود سيقت في القرآن بصيغة أسئلة، لا أوامرَ بالتصديق. جرّب أن تجيب عنها بنفسك، سؤالًا سؤالًا، كأنك تسمعها أولَ مرة؛ فهذا بالضبط ما فعله جبير.
\`\`\`

\`\`\`quiz
questions:
  - q: ما القسمة العقلية التي تعرضها آية الطور؟
    ref: 52:35
    word: أم هم الخالقون
    options:
      - وُجدنا من غير شيء، أو خلقنا أنفسَنا، أو خلقنا خالقٌ غيرُنا، ولا رابع
      - الكون إمّا قديمٌ وإمّا حادث وإمّا دوريّ يتكرّر
      - الإنسان إمّا مؤمن وإمّا ملحد وإمّا متردّد
      - المعرفة إمّا بالحسّ وإمّا بالعقل وإمّا بالخبر
    answer: 0
    why: الآية تحصر منشأ الوجود في ثلاثة احتمالات هي كلُّ الممكن المنطقيّ، ثم يسقط اثنان فيثبت الثالث ضرورة.
  - q: لماذا يستحيل أن يخلق الشيءُ نفسَه؟
    options:
      - لأنه يلزم أن يكون موجودًا قبل وجوده، وهذا تناقضٌ صريح لا يصير ممكنًا بمرور الزمن
      - لأن التجارب لم تسجّل حدوثه حتى الآن فقط
      - لأن الطاقة اللازمة لذلك أكبر من طاقة الكون
      - لأن الفلاسفة القدماء أجمعوا على استبعاده
    answer: 0
    why: خلقُ الشيء نفسَه يعني أنه موجودٌ وغيرُ موجودٍ في آنٍ واحد، وهذا تناقضٌ منطقيّ كالمربّع الدائريّ، لا مجرّد أمرٍ بعيد الوقوع.
  - q: بمَ يجيب هذا الدرس عن دعوى أن الجسيمات الكمّية تظهر من العدم؟
    options:
      - الفراغ الكمّي نظامٌ فيزيائيّ له طاقة وحقول وقوانين، وتسميتُه عدمًا لا تجعله عدمًا
      - بإنكار ميكانيكا الكمّ جملةً وتفصيلًا
      - بأن الجسيمات الكمّية وهمٌ رياضيّ لا وجود له
      - بأن العلم لا يحقّ له الكلام في هذه المسائل
    answer: 0
    why: الدرس لا ينازع الفيزياء في وصفها، بل في التسمية؛ فما يخرج منه شيءٌ ليس لاشيئًا، ويبقى السؤال عن مصدره هو قائمًا.
\`\`\`
`,"../content/lessons/ar/his-character.md":`---
title: أخلاقه شاهدة
description: 'المنتحلون يفضحهم موضعان: البيت الذي لا تنفع فيه المسرحيات، ولحظة القدرة التي لا رادع فيها. فانظر شهادة خادمه عشر سنين، وقرارَه يوم دانت له مكة، ودعاءَه يوم أدمَته الطائف.'
unit: muhammad
order: 24
minutes: 9
emoji: 🌿
tags: [خلقه ﷺ, الطائف, فتح مكة]
---

> **فكرة الدرس:** يستطيع المدّعي أن يمثّل الفضيلةَ على المنبر سنةً أو سنتين. لكنّ قناعين لا يصمدان: قناعَ البيت أمام من يخدمه كلَّ يوم، وقناعَ القوة يوم لا يبقى رادع. فانظروا إليه ﷺ في الموضعين بالذات.

## الاختبار الخامس: الشخصية تحت المجهر

ختامُ اختبارات هذه الوحدة أقربُها إلى الفطرة: النبوّة دعوى أخلاقية قبل كل شيء: رجلٌ يقول إن الله ائتمنه على وحيه. فإن وجدنا في سيرته الموثّقة غدرًا أو قسوةً عند المقدرة أو تكبّرًا على الضعفاء، سقطت الدعوى من أساسها. وقد وصفه القرآن، وهو الكتاب الذي رأيناه يعاتبه بلا مواربة، بأعظم وصفٍ وُصف به بشر:

\`\`\`ayah
ref: 68:4
note: 'شهادةٌ من الكتاب نفسه الذي سجّل عتابه في عبس والأحزاب؛ فليست مدائحية النصوص المتأخرة، بل وصفٌ من مصدرٍ أثبت أنه لا يجامل صاحبه.'
\`\`\`

فلننزل من الوصف إلى الوقائع المصحَّحة.

## شهادة من عاش معه عشر سنين

أصدقُ شاهدٍ على المرء خادمُه: يراه غاضبًا وجائعًا ومتعَبًا، في الحالات التي تسقط فيها الأقنعة كلُّها. خدمه أنسُ بن مالك من العاشرة من عمره إلى وفاته ﷺ، عشر سنين كاملة في البيت والسفر، ثم لخّص التجربة:

\`\`\`hadith
text: 'خدمتُ النبيَّ ﷺ عشرَ سنين، فما قال لي: أُفٍّ، ولا: لِمَ صنعتَ؟ ولا: ألّا صنعتَ؟'
source: 'صحيح البخاري (٦٠٣٨)'
url: 'https://sunnah.com/bukhari:6038'
note: 'عشر سنين، وخادمُه صبيّ يخطئ كما يخطئ الصبيان، ولا كلمةُ ضجرٍ واحدة. من يستطيع تمثيلَ هذا في بيته عقدًا كاملًا؟'
\`\`\`

وسُئلت عائشةُ رضي الله عنها، وهي أقربُ الناس إليه في خلوته، عن خُلقه، فأجابت بجوابٍ يختصر الوحدةَ كلَّها:

\`\`\`hadith
text: 'ألستَ تقرأ القرآن؟ قلتُ: بلى. قالت: فإنّ خُلُق نبيِّ الله ﷺ كان القرآن.'
source: 'صحيح مسلم (٧٤٦)'
url: 'https://sunnah.com/muslim:746'
note: 'أي كان تطبيقًا حيًّا لما يتلوه على الناس: لا ازدواجية بين النص والسلوك. وهذه شهادة الزوجة، والبيوت أعرفُ بحقائق الرجال.'
\`\`\`

## يوم الطائف: الرحمة والقدرةُ معروضة

في أشدّ أيام حياته حكى ﷺ بنفسه ما جرى، حين سألته عائشة: هل أتى عليك يومٌ أشدّ من أُحد؟ فذكر أنه عرض دعوته على سيّد ثقيفٍ فردّه، وأنه انصرف مهمومًا على وجهه. (وأمّا تفصيلُ ما لقيه في الطائف من رمي الحجارة حتى أدميت قدماه فليس في الصحيح، وإنما هو في مغازي موسى بن عقبة وطبقات ابن سعد، نقلهما ابنُ كثير في البداية والنهاية.) ثم عُرضت عليه في طريق عودته القدرةُ المطلقة على من ردّوه:

\`\`\`hadith
text: 'فناداني مَلَكُ الجبال، فسلّم عليّ ثم قال: يا محمد، فقال: ذلك فيما شئتَ، إن شئتَ أن أُطبِق عليهم الأخشبَين. فقال النبيّ ﷺ: بل أرجو أن يُخرج الله من أصلابهم من يعبد الله وحده لا يشرك به شيئًا.'
source: 'صحيح البخاري (٣٢٣١)'
url: 'https://sunnah.com/bukhari:3231'
note: 'الأخشبان: جبلا مكة. عرضٌ بإبادة من آذوه، معروضٌ عليه وهو مردودٌ مهموم، فاختار مستقبلَ أبنائهم على الانتقام منهم. وقد أسلمت ثقيفُ بعد سنين، كما رجا.'
\`\`\`

قف عند اللحظة النفسية: ليس عفوًا بارد الأعصاب في مجلس شورى، بل قرارٌ في ذروة الجرح، والقدرةُ المطلقة معروضة. الغضبُ هنا فطرة، والانتقام مبرَّر بمقاييس الدنيا كلها؛ فجاء جوابه من مقياسٍ آخر.

## يوم الفتح: القدرة بلا رادع

ثم دارت الأيام دورتها الكاملة. سنةَ ثمانٍ للهجرة دخل مكةَ فاتحًا على رأس عشرة آلاف: البلدةُ التي عذّبت أصحابه وقتلت أحبّته وأخرجته وحاربته عشرين سنة، واقفةٌ بين يديه بلا حائل. هذه هي اللحظة التي ينتظرها التاريخ من كل منتصر: لحظة تصفية الحسابات، وما أكثرَ ما رأت البشرية فيها من مجازر.

والثابت في الصحيح أنّ أهلها صاروا يُعرَفون بلقبٍ لا يُطلَق إلا على من عُفي عنه: الطُّلَقاء. فبعد الفتح بأسابيع، يوم حنين، يصف أنسٌ رضي الله عنه جيشَ النبيّ ﷺ فيقول: “ومع النبيّ ﷺ عشرةُ آلافٍ والطُّلَقاء” (البخاري ٤٣٣٣). فاللقبُ نفسُه شهادةٌ على العفو: بلدةٌ حاربته عشرين سنة، دخلها فأطلق أهلها، ثم ساروا في جيشه بعد أسابيع. (أمّا الخبر المشهور: ما ترون أني فاعلٌ بكم؟ اذهبوا فأنتم الطلقاء، فهو بهذا اللفظ ضعيف، إسنادُ ابن إسحاق له منقطع، [وقد ضعّفه الألباني](https://islamqa.info/ar/answers/290672)؛ فلا نبني عليه، واللقبُ الثابت يغني عنه.) ولم يكن العفو غفلةً عن العدالة: استُثني نفرٌ معدودون بأعيانهم كان عليهم دمٌ أو تحريض، وأمرُه ﷺ في ابن خَطَلٍ ثابتٌ في الصحيح (البخاري ١٨٤٦). والمقصود أنّ القاعدة كانت العفو والاستثناء أفرادًا معدودين، وهذا وحده يقلب ما اعتادته الفتوح. أعداءُ عشرين سنةً خرجوا من بين يديه أحرارًا، وقادةُ حربه بالأمس صاروا قادةً في صفّه.

\`\`\`doubt
claim: 'كل زعيمٍ ناجح تُروى عنه مكارم؛ فأتباعُه يجمّلون سيرته بعد موته. فما يدرينا أن هذه القصص ليست من تجميل الأتباع؟'
answer: |-
  اعتراضٌ منهجيّ سليم يستحق جوابًا منهجيًّا. أولًا: مصادر هذه الوقائع ليست مدائحَ متأخرة بل الصحيحان بأسانيدَ مفحوصةٍ راويًا راويًا؛ وقد رأيتَ في درس «القرآن يعاتبه» أن هذه المنظومة نفسها حفظت ما يُحرج ولم تجمّله: سجّلت عبوسَه وعتابَه وخطأه في الإذن لمتخلّفي تبوك. منظومةُ نقلٍ تحفظ على صاحبها هفواتِه ليست منظومةَ تجميل؛ ولو كانت تُجمّل لبدأت بحذف تلك المواضع.
  ثانيًا: أقوى شواهد الباب لا تحتاج راويًا محبًّا أصلًا: فتحُ مكة بلا مجزرةٍ واقعةٌ تاريخية كبرى يشهد لها ما بعدها: مدينةٌ كاملة انضمت إلى جيشه في أسابيع، وهذا لا يقع بعد مذبحة. وشهادةُ هرقل التي مرّت في أول الوحدة جاءت من استجواب عدوّه.
  ثالثًا: التجميل يتضخّم مع الزمن؛ قارن بين صورة أيّ زعيمٍ في وثائق عصره وصورته في أساطير أتباعه بعد قرون. وهنا العكس: أقدمُ الطبقات وأصحُّها إسنادًا هي الحاملة لهذه الأخلاق، والحكاياتُ الضعيفة المتأخرة هي التي ينبّه عليها أهلُ الحديث ويستبعدونها، وهذا الدليل نفسه لا يستشهد بها.
\`\`\`

\`\`\`rule
وصفه القرآنُ، وهو الذي يعاتبه بلا مجاملة، بأنه على خلق عظيم، وشهد له بيتُه: خادمُه عشرَ سنين ما سمع منه ضجرة، وزوجُه لخّصت خلقه بأنه القرآن. وامتُحن بالضعف يوم الطائف فدعا لمن أدموه، وبالقدرة يوم الفتح فأطلق من حاربوه. والمنتحلون يسقطون في البيت أو عند القدرة، وهو في الموضعين ازداد نورًا.
\`\`\`

\`\`\`tip
اجمع الآن خيوط الوحدة الخمسة: أمينٌ قبل الدعوى بشهادة عدوّه، لا مكسبَ له منها، يعاتبه كتابُه علنًا، يُخبر بالغيب فيقع، وخلقُه في السرّ والقدرة كخلقه على المنبر. كلُّ خيطٍ وحده قرينة؛ فما اسم اجتماعها كلِّها في رجلٍ واحد؟
\`\`\`

\`\`\`quiz
questions:
  - q: لماذا تُعدّ شهادة أنس بن مالك من أقوى الشواهد على خلقه ﷺ؟
    options:
      - لأنها شهادة خادمٍ لازمه عشر سنين في البيت حيث تسقط الأقنعة، فما سمع منه كلمة ضجر واحدة
      - لأن أنسًا كان أكبر الصحابة سنًّا وأقدمهم صحبة
      - لأنها الشهادة الوحيدة المروية في خلقه
      - لأن أنسًا لم يكن يعرفه قبل الخدمة
    answer: 0
    why: يستطيع المرء تمثيل الفضيلة في المحافل، أمّا عشر سنين في البيت أمام خادمٍ صبيّ فلا تحتمل تمثيلًا؛ وهذه شهادة في الصحيح.
  - q: ما وجه الدلالة في جوابه ﷺ لملَك الجبال يوم الطائف؟
    options:
      - عُرضت عليه إبادةُ من أدمَوه وهو في ذروة الجرح، فاختار رجاء إيمان ذريتهم، وهي رحمةٌ في اللحظة التي يعذر فيها الناسُ المنتقم
      - أنه لم يملك القدرة على الانتقام أصلًا
      - أنه أجّل الانتقام إلى فتح مكة
      - أن القصة من الحكايات المتأخرة الضعيفة
    answer: 0
    why: القصة في صحيح البخاري بسؤال عائشة عن أشد أيامه؛ والقرار وقع في أشدّ أيامه والقدرةُ معروضة، وقد أسلمت ثقيف بعدها كما رجا.
  - q: كيف يجيب الدرس عن شبهة «الأتباع يجمّلون سيرة زعيمهم»؟
    options:
      - المنظومة نفسها التي نقلت مكارمه حفظت عتابه وهفواته ولم تحذفها، وأكبر الوقائع (كفتحٍ بلا مجزرة) يشهد لها التاريخ لا الرواة وحدهم
      - بأن الأتباع لا يجمّلون سِيَر الزعماء في أي أمة
      - بأن التجميل وقع لكنه يسير مقبول
      - بأن كتب السيرة كلها بمنزلة الصحيحين
    answer: 0
    why: ناقلٌ يريد التجميل يبدأ بحذف عبس وعتاب تبوك؛ وبقاؤها في أصح الكتب دليل أمانة المنظومة؛ والوقائع الكبرى كالفتح تثبت بآثارها التاريخية.
\`\`\`
`,"../content/lessons/ar/keep-asking.md":`---
title: أسئلتك مرحَّبٌ بها
description: 'آخر دروس الدليل لا يقول «انتهت الأسئلة» بل يعلّمك ماذا تفعل بالباقي منها: من تسأل، وكيف تسأل، ودعاءُ نبيٍّ يستهدي ربَّه فيما اختُلف فيه.'
unit: road
order: 30
minutes: 8
emoji: 🌄
tags: [سؤال أهل العلم, أدب طلب الحق, دعاء الاستهداء]
---

> **فكرة الدرس:** قرأتَ الحجّة كاملة، وبقيت في صدرك أسئلة، وهذا طبيعيٌّ وصحّي، فما من علمٍ نضب سؤاله إلا مات. آخر ما يقوله لك هذا الدليل: لا تدفن أسئلتك ولا تتعبّد لها، بل احملها إلى بابين: أهل العلم، وربِّ العلم.

## الباب الأول: أهل الذكر

هذا الموقع مدخلٌ مرتَّب، وليس نهاية الطريق. ثلاثون درسًا تبني أساسًا، ولا تجيب عن كل سؤالٍ يخطر، ولا ادّعت. والقرآن نفسه يوجّه من لا يعلم إلى من يعلم:

\`\`\`ayah
ref: 16:43
highlight: أهل الذكر إن كنتم لا تعلمون
note: 'قاعدةٌ قرآنية عامة: الجهل بالجواب لا يعالَج بالتخمين ولا بالإعراض، بل بسؤال أهل الاختصاص. والدينُ في هذا كسائر العلوم: لا يُستفتى فيه إلا أهله.'
\`\`\`

وحقُّ هذه الآية عليك أمران: أن تسأل فعلًا ولا تكتفي بتدوير السؤال في صدرك حتى يتخمّر شبهةً؛ وأن تتخيّر من تسأل، فتقصد أهلَ علمٍ راسخين يجمعون بين معرفة النصوص وفهم إشكالات العصر، لا كلَّ متصدّرٍ في مقطعٍ قصير. وإن أعياك الوصول فابدأ بما بين يديك: مصادرُ الدروس التي مشيتَ بها، وكتبُ من جمعوا بين العلمين.

## أدب الطالب الصادق

وللسؤال أدبٌ يفرّق بين طالب الحق وطالب الغلبة، وقد لزمك في نفسك قبل أن يلزمك مع غيرك:

- **اسأل لتفهم لا لتُفحم:** السؤال الذي يبحث عن جوابٍ يجده غالبًا، والذي يبحث عن معركةٍ يجدها دائمًا.
- **أنزل السؤال منزلته:** فرقٌ بين سؤالٍ في أصل الدين وسؤالٍ في فرعٍ دقيق، فلا تجعل غموضَ فرعٍ عندك ناقضًا لأصلٍ قام برهانُه. فلا تجعل غموضَ فرعٍ عندك ناقضًا لأصلٍ قام برهانُه؛ فمن ركب الطائرة موقنًا بالطيران لم يضرّه أنه لم يُنهِ كتاب الديناميكا الهوائية.
- **ولا تقل بغير علم:** كما أمرت الآية أن تسأل العالِم، نهتك أختُها أن تجزم بما لا تعلم (الإسراء 17:36). فالتوقّف عن الجزم فيما جهلتَ عبادةٌ أيضًا.

## الباب الثاني: ربُّ العلم

وأعظم من سؤال العالِم سؤالُ من علَّم العالِمين. وقد كان النبيّ ﷺ نفسُه، وهو من هو، يفتتح قيام الليل بدعاءٍ يطلب فيه الهداية فيما اختلف الناس فيه:

\`\`\`hadith
text: 'اللهمّ ربَّ جبرائيلَ وميكائيلَ وإسرافيل، فاطرَ السماوات والأرض، عالمَ الغيب والشهادة، أنت تحكم بين عبادك فيما كانوا فيه يختلفون، اهدني لما اختُلف فيه من الحق بإذنك، إنك تهدي من تشاء إلى صراطٍ مستقيم.'
source: 'صحيح مسلم (٧٧٠)'
url: 'https://sunnah.com/muslim:770'
note: 'إن كان نبيُّ الوحي يستهدي ربَّه فيما اختُلف فيه، فطالبُ الحقّ الحائر أولى بهذا الدعاء وأحرى. احفظه، أو قل معناه بلغتك.'
\`\`\`

تأمّل من يُدعى في هذا الدعاء: فاطرُ السماوات والأرض الذي عرفتَه في أول الوحدات، عالمُ الغيب الذي رأيتَ إخباره بالغيب في وحدة النبوّة. الدعاء يجمع الدليلَ كلَّه في نداءٍ واحد، ثم يطلب أعظمَ المطالب: الهداية.

وهنا سرٌّ يغيب عن كثيرين: الهداية ليست إنجازًا ذهنيًّا تبلغه بذكائك وحدك، بل عطاءٌ يُطلب من معطيه. فقد يقرأ رجلان الحجّةَ نفسَها فيهتدي أحدهما ويُعرض الآخر، والفرق بينهما في القلب لا في الحجّة: أحدُهما جاء صادقًا يريد الحقَّ إن ظهر، والآخر جاء محصَّنًا يريد ألّا يظهر. فإن كنتَ من الصنف الأول فقلها بأي لغة: يا ربّ، اهدني. فما خاب، والله، من سأل الهدايةَ صادقًا.

\`\`\`doubt
claim: 'تقولون «ادعُ الله أن يهديك»، لكن هذا مصادرةٌ على المطلوب: تطلبون مني أن أخاطب من لم أومن به بعد لأصل إلى الإيمان به.'
answer: |-
  لو كان الدعاء هو الدليلَ الوحيد المعروض لكان الاعتراض قاطعًا. لكن ترتيب هذا الدليل كان عكس ذلك تمامًا: ثلاثون درسًا من البرهان أولًا (الحدوث والضبط والفطرة وصدق الرسول وإعجاز الكتاب)، ثم جاء الدعاء آخرَ خطوةٍ لا أولَها. فالمطلوب ليس «صدِّق بلا دليل ثم ادع»، بل: قد قام الدليل على وجود من تدعوه، فكلِّمه.
  ثم إنّ دعاء الحائر الصادق لا يفترض الإيمان الجازم أصلًا؛ فصيغتُه التي يقولها الحائر الصادق: «اللهم إن كنتَ موجودًا فاهدني». هذا خطابٌ مشروط يجريه العقلاء في كل بابٍ غلب على ظنهم فيه شيء ولم يستيقنوه، وهو أشبه بمراهنةٍ لا خسارة على صاحبها فيها: إن لم يكن ثمّ سميع لم تخسر شيئًا، وإن كان، وقد شهد البرهان أنه كائن، فقد طرقتَ أعظم بابٍ يمكن أن يُطرق. والذي يرفض حتى هذه التجربة المشروطة فليسأل نفسه بصدقِ درسنا الأول: أيريد أن يظهر الحق، أم يطمئن إلى ألّا يظهر؟
\`\`\`

## آخر الكلام

وصلتَ إلى آخر الدليل. مشيتَ من سؤال «لماذا نحن هنا؟» إلى برهان الخالق، وعبر الشبهات إلى معرفة الله، ومن حاجة البشر إلى الوحي إلى أدلة صدق محمدٍ ﷺ وكتابِه المحفوظ، حتى وقفتَ على الباب وعرفتَ كيف يُفتح. لم يبقَ عند هذا الدليل ما يقوله، وبقي عندك أنت ما تفعله.

لن ندفعك من ظهرك؛ فما دفعنا أحدًا في ثلاثين درسًا، والقرآن نفسه جعل الطريق بيّنًا بلا إكراه. لكنّا نذكّرك بما قلتَه أنتَ لنفسك في الدرس الأول: تأجيلُ الجواب جوابٌ، والعمرُ الذي ظننتَه طويلًا يمضي. فقف الليلةَ وقفةً صادقة بينك وبين فاطر السماوات والأرض، وقل: اهدني. ثم امضِ حيث يهديك؛ فوالله ما خُلقتَ عبثًا، وما تُترك سُدًى.

\`\`\`ayah
ref: 20:114
show: وقل رب زدني علما
note: 'آخر آيةٍ في هذا الدليل هي دعاؤه لك: علمًا يزيد، لا بابًا يُغلق. وهي نفسها الآية التي تستقبل من أتمّ الدروس كلَّها؛ فالنهاية هنا بداية.'
\`\`\`

\`\`\`rule
ما بقي من أسئلتك يُحمل إلى بابين لا يُدفن: أهلِ الذكر تسألهم بأدب طالب الحق، وربِّ العلم تستهديه بدعاء النبيّ ﷺ نفسِه. والهداية تُطلب ممن يملكها؛ فمن صدق في طلبها لم يخب. هذا آخر الدليل، وأولُ الطريق.
\`\`\`

\`\`\`quiz
questions:
  - q: ماذا يفعل طالب الحق بالأسئلة التي بقيت بعد قراءة الحجّة؟
    ref: 16:43
    word: فسـٔلوا أهل الذكر إن كنتم لا تعلمون
    options:
      - يحملها إلى أهل العلم الراسخين بأدب طالب الفهم، ويستهدي الله فيها، لا يدفنها ولا يجعلها ناقضةً لأصلٍ قام برهانه
      - يعدّها دليلًا على بطلان ما قام برهانه
      - يكتمها لأن السؤال في الدين عيب
      - يجيب عنها بنفسه اجتهادًا ولو بغير علم
    answer: 0
    why: 'القرآن يأمر الجاهل بسؤال العالم وينهاه عن القول بغير علم؛ وبقاء أسئلةٍ في الفروع لا ينقض أصلًا قام دليله، كراكب الطائرة الموقن بالطيران قبل إتمام كتب الديناميكا.'
  - q: ما وجه الاستشهاد بدعاء النبيّ ﷺ «اهدني لما اختُلف فيه من الحق بإذنك»؟
    options:
      - إن كان نبيُّ الوحي نفسه يستهدي ربَّه فيما اختُلف فيه، فالحائر الصادق أولى بهذا الدعاء؛ فالهداية عطاءٌ يُطلب من معطيه
      - أن الدعاء يغني عن النظر في الأدلة كلّها
      - أن الاختلاف في الحق ممتنع أصلًا
      - أن الدعاء خاص بالأنبياء دون غيرهم
    answer: 0
    why: الدعاء في صحيح مسلم من قيام الليل النبويّ، وهو يجمع معاني الدليل كلّه (الفاطر عالم الغيب)، ثم يطلب أعظم المطالب، فكان خيرَ زادٍ لطالب الحق.
  - q: كيف يجيب الدرس عن اعتراض «تطلبون مني دعاء من لم أومن به بعد»؟
    options:
      - الدعاء جاء آخر خطوةٍ بعد ثلاثين درسًا من البرهان لا أولَها، ودعاء الحائر مشروطٌ («اللهم إن كنت موجودًا فاهدني»)، وهو رهانٌ بلا خسارة
      - بأن الإيمان يجب أن يسبق كل نظرٍ ودليل
      - بأن الاعتراض صحيح ولا جواب عنه
      - بأن الدعاء غير مطلوب من الحائر أصلًا
    answer: 0
    why: المصادرة تكون لو كان الدعاء هو الدليل؛ أمّا وقد قام البرهان أولًا فالدعاء تكليمُ من ثبت وجوده؛ ودعاء الحائر المشروط تجربةٌ عقلانية لا يخسر صاحبها شيئًا.
\`\`\`
`,"../content/lessons/ar/most-merciful.md":`---
title: الرحمن الرحيم
description: 'الخالق الذي دلّت عليه البراهين ليس قوّةً باردةً بعيدة. أوّل ما يعرّفك به نفسَه، في فاتحة كلّ سورةٍ تقريبًا، أنه الرحمن الرحيم: رحمةٌ تسبق الغضب، وقربٌ بلا وسيط، وبابٌ لا يُغلَق ما دمتَ حيًّا.'
unit: allah
order: 12
minutes: 8
emoji: 🤲
tags: [أسماء الله, الرحمة, القرب من الله]
---

> **فكرة الدرس:** قد يوصلك العقل إلى خالقٍ عظيم القدرة فتهابه من بعيد. لكنّ الله لم يقدّم نفسه لعباده بالقدرة أولًا ولا بالجبروت، بل باسمين من الرحمة يتصدّران كلَّ سورةٍ من كتابه إلا واحدة. هذا الدرس عن الإله الذي يريدك أن تقترب، لا أن تهرب.

## أوّل ما يعرّفك به نفسَه

افتح المصحف من أيّ سورةٍ شئت، إلا واحدة، تجد قبل أوّل كلمةٍ منها: بسم الله الرحمن الرحيم. لله أسماءٌ كثيرةٌ ذُكرت في القرآن: القدير، العليم، الملِك، الجبّار. لكنّه حين وضع لكتابه عنوانًا يتكرّر على رأس كلّ سورة، اختار من بينها اسمَي الرحمة، مثنّيَين لا مفردَين:

\`\`\`ayah
ref: 1:3
note: 'اسمان مشتقّان من الرحمة، جاءا في الفاتحة بعد ربّ العالمين مباشرةً؛ فالربوبية هنا مقرونةٌ بالرحمة لا بالقهر. وذكر المفسّرون أنّ الرحمن أبلغ في أصل الوصف، والرحيم دالٌّ على وصول الرحمة إلى الخلق فعلًا. والمسلم يكرّر هذين الاسمين في كلّ ركعةٍ من صلاته.'
\`\`\`

\`\`\`ayah
ref: 7:156
show: ورحمتي وسعت كل شيء
note: 'جاء قبلها في الآية نفسها أنّ العذاب يصيب الله به من يشاء، أمّا الرحمة فذكر سعتها مطلقةً: لا شيء يخرج عن مداها. فالعذاب له أهله وأسبابه، والرحمة هي التي وسعت كلَّ شيء. وتتمّةُ الآية تفرّق بين رحمتين، كما قال السعديّ: رحمةٌ عامّة نالت كلَّ مخلوق، برًّا كان أو فاجرًا، ورحمةٌ خاصّة هي سعادة الدارين، لها بابٌ يُدخل منه. وهذا الدرس كلُّه في الدلالة على الباب.'
\`\`\`

هذه دعوى كبيرة. فهل لها مقياسٌ نفهم به مقدار هذه الرحمة؟

## أرحمُ بك من أمّك

أقصى رحمةٍ يعرفها البشر رحمةُ الأمّ بولدها. والنبيّ ﷺ لم يشرح رحمة الله بتعريفٍ نظريّ، بل بمشهدٍ رآه الصحابة بأعينهم:

\`\`\`hadith
text: 'قدِم على النبيّ ﷺ سبيٌ، فإذا امرأةٌ من السبي قد تحلُب ثديَها تسقي، إذا وجدت صبيًّا في السبي أخذته فألصقته ببطنها وأرضعته، فقال لنا النبيّ ﷺ: أترَون هذه طارحةً ولدَها في النار؟ قلنا: لا، وهي تقدر على أن لا تطرحه. فقال: اللهُ أرحمُ بعباده من هذه بولدها.'
source: 'صحيح البخاري (٥٩٩٩)، ومسلم (٢٧٥٤)'
url: 'https://sunnah.com/bukhari:5999'
note: 'امرأةٌ من الأسرى امتلأ ثديُها باللبن، فكانت كلّما وجدت رضيعًا بين السبي ضمّته إلى بطنها وأرضعته. عن هذه، وهي في أشدّ حالها، قال ﷺ إنّ الله أرحم بعباده منها بولدها.'
\`\`\`

تأمّل اختيار المقياس: لم يقُل أرحم من ملِكٍ بضيفه ولا من صديقٍ بصديقه، بل جعل الحدَّ الأدنى رحمةَ أمٍّ فقدت ولدَها في السبي، تضمّ كلَّ رضيعٍ تجده. رحمةُ الله بعبده فوق هذا، لا مثله.

## قاعدةٌ كتبها على نفسه

وليست هذه الرحمة مزاجًا متقلّبًا يُرجى تارةً ويُخشى انقلابه تارة، بل قاعدةً أعلنها الله عن نفسه من قبل أن يوجد لك ذنبٌ أصلًا:

\`\`\`hadith
text: 'لمّا خلق اللهُ الخلقَ كتب في كتابه - هو يكتب على نفسه، وهو وضعٌ عنده على العرش -: إنّ رحمتي تغلِبُ غضبي.'
source: 'صحيح البخاري (٧٤٠٤)'
url: 'https://sunnah.com/bukhari:7404'
note: 'وفي رواية مسلم (٢٧٥١): سبقت رحمتي غضبي. فالرحمة عنده هي الأصل السابق الغالب، والغضب لا يكون إلا عن سبب، عكس ما يتصوّره من ظنّ الدين تهديدًا دائمًا معلَّقًا فوق الرؤوس.'
\`\`\`

## بابٌ لا يُغلَق ما دمتَ حيًّا

فماذا عمّن أفسد وأذنب حتى ظنّ أنه لا يستحقّ إلا الطرد؟ وقد سمّى كثيرٌ من أهل العلم هذه أرجى آيةٍ في كتاب الله، واقرأ لمن وُجّهت:

\`\`\`ayah
ref: 39:53
highlight: لا تقنطوا من رحمة الله
note: 'الخطاب لمن أسرفوا على أنفسهم، أصحاب الذنوب الكبار أنفسهم، ومع ذلك يناديهم يا عبادي، ينسبهم إلى نفسه، وأوّلُ ما يأمرهم به ليس عقوبةً ولا تقريعًا بل النهي عن اليأس، ثم يعِد بمغفرة الذنوب جميعًا لمن أقبل.'
\`\`\`

## قريبٌ بلا وسيط

بقيت مسافةٌ أخيرة يظنّها كثيرون: حتى لو كان رحيمًا، فكيف أصل إليه أنا؟

\`\`\`ayah
ref: 2:186
highlight: فإني قريب
note: 'أسئلةُ السائلين في القرآن يجيء جوابها عادةً بأمر النبيّ ﷺ أن يقول لهم. وهنا حُذفت الواسطة وجاء الجواب مباشرًا؛ فكأنّ قربَ صيغة الجواب صورةٌ من قرب المجيب. لا كاهنَ بينك وبينه، ولا موعدَ ولا بوّابة: تتكلّم فيسمعك.'
\`\`\`

\`\`\`tip
هذه الآية ليست نظريةً تُقرأ بل بابٌ يُجرَّب. الليلةَ، بلا صيغةٍ محفوظة ولا لغةٍ خاصّة، جرّب أن تقول: يا ربّ، إن كنتَ الحقّ فاهدني إليك. ليست شرطًا لقراءة بقيّة هذا الدليل، لكنّ صاحب الفطرة التي قرأتَ عنها في أوّل الطريق يعرف أنّ في صدره من يريد أن يقولها.
\`\`\`

\`\`\`doubt
claim: ليست المشكلة في التحذير بل في العقوبة نفسها. عذابٌ لا ينتهي أبدًا، جزاءً على كفرٍ استغرق سبعين سنة، عقوبةٌ لا تناسب جرمَها بأيّ ميزانٍ يعرفه البشر. وأشدُّ من ذلك أن يقع على من بحث بصدقٍ فلم يقتنع. فأيُّ رحمةٍ هذه؟
answer: |-
  أوّلُ الجواب أنّ الإنذار الصادق من خطرٍ حقيقيّ هو فعلُ الرحيم لا القاسي. الطبيب الذي يخبرك بمرضك بأوضح عبارةٍ ويدلّك على الدواء أرحمُ من الذي يجاملك حتى تهلك، ولا يقول أحدٌ إنّ لافتة التحذير من حقل الألغام عدوانٌ على المارّة. فإن كان هناك حسابٌ حقًّا (وقد سبق درسُ الشرّ والألم أنّ العدالة الكاملة تقتضيه) فأشدُّ الرحمة أن تُحذَّر منه سلفًا بأبلغ صورة، وأقسى القسوة أن تُترَك تمشي إليه مطمئنًّا.
  وثاني الجواب في النسبة بين الأمرين، وقد قرأتَها في هذا الدرس بنصوصها: الرحمة قاعدةٌ مكتوبةٌ سابقةٌ غالبة، والغضب لا يكون إلا عن سبب، والباب مفتوحٌ ما دام العبد حيًّا حتى لمن أسرف عمرَه كلَّه. فالعذاب في تصوير القرآن ليس مزاجَ إلهٍ حادِّ الطبع، بل عاقبةَ من رأى الباب مفتوحًا طولَ عمره وأصرّ على ألّا يدخله. ومن خاف النار حقًّا فبابه هو الآية التي قرأ: لا تقنطوا.
  وثالثُ الجواب في المقدار، وهو ألزمُ ما في الاعتراض. الخلود عند أهل العلم ليس جزاءً على سنواتٍ معدودة، بل على ما استقرّ عليه القلب حتى الموت؛ فمن مات مصرًّا على الرفض مات على نيّةٍ لو بقي لبقيت معه. ثم إنّ الباب لم يُغلق لحظةً واحدة في عمره كلِّه، وهذا وحده يخرج الصورةَ من باب المحكمة التي لا فكاك منها. وأمّا من بحث بصدقٍ فلم يبلغه البيان، فالقرآن يوقف المسؤولية على بلوغ الرسالة، وسيأتيك نصُّه في درس «هل يكفي العقل وحده؟» (الإسراء ١٥): لا عذاب حتى تُبعث رسالة تُقام بها الحجّة.
\`\`\`

\`\`\`rule
البراهين أثبتت خالقًا؛ وكتابُه يعرّفك من هو: افتتح كلَّ سورةٍ تقريبًا باسمَي الرحمة، وجعل نبيُّه ﷺ رحمةَ الأمّ بولدها حدًّا أدنى لرحمته، وكتب على نفسه أنّ رحمته تغلب غضبه، ونهى المسرفين أنفسَهم عن اليأس، وقال لمن سأل عنه إنه قريبٌ يجيب. فالإسلام لا يدعوك إلى قوّةٍ تخشاها من بعيد، بل إلى ربٍّ تحبّه من قريب.
\`\`\`

\`\`\`quiz
questions:
  - q: ما الذي أراد النبيّ ﷺ تعليمَه أصحابَه في مشهد المرأة التي ترضع أطفال السبي؟
    options:
      - أنّ الله أرحم بعباده من أرحم رحمةٍ يعرفها البشر، رحمةِ الأمّ بولدها
      - أنّ رحمة الله مساوية لرحمة الأمّهات تمامًا
      - أنّ الرحمة خاصّة بالأطفال دون الكبار
      - أنّ إرضاع الأطفال من أعظم القربات
    answer: 0
    why: جعل ﷺ من أقصى رحمةٍ مشهودة عند البشر مقياسًا، ثم قال إنّ الله أرحم بعباده منها بولدها؛ فالمقياس حدٌّ أدنى لا مساواة.
  - q: ماذا كتب الله على نفسه كما صحّ في الحديث؟
    options:
      - أنّ رحمته تغلب غضبه، وفي روايةٍ أنها سبقته
      - أنّ الغضب هو الأصل والرحمة استثناءٌ نادر
      - أنّ رحمته خاصّة بمن لم يذنب قطّ
      - أنّ الرحمة لا تُنال إلا بوساطة الكهّان
    answer: 0
    why: في البخاري أنّ الله كتب كتابًا عنده فوق العرش أنّ رحمته تغلب غضبه، وفي رواية مسلم أنها سبقته؛ فالرحمة عنده هي الأصل السابق الغالب.
  - q: بماذا يجيب هذا الدرس عن شبهة أنّ التخويف من النار ينافي الرحمة؟
    options:
      - الإنذار الصادق من خطرٍ حقيقيّ فعلُ الرحيم، والرحمة عنده هي القاعدة الغالبة والباب مفتوحٌ للتائب ما دام حيًّا
      - بأنّ النار رمزٌ أدبيّ لا حقيقة له
      - بأنّ الوعيد كان خاصًّا بالأمم السابقة وانتهى
      - بأنّ الرحمة تعني ألّا يُحاسَب أحدٌ على شيء
    answer: 0
    why: التحذير من خطرٍ حقيقيّ رحمةٌ كتحذير الطبيب، وميزانُ النصوص أنّ الرحمة سابقةٌ غالبة والعذاب عاقبةُ من أبى الدخول من بابٍ ظلّ مفتوحًا له عمرَه كلَّه.
\`\`\`
`,"../content/lessons/ar/musa-and-isa.md":`---
title: موسى وعيسى في الإسلام
description: 'أكثر إنسانٍ ذُكر باسمه في القرآن نبيُّ بني إسرائيل، والمرأة الوحيدة المسمّاة فيه أمُّ المسيح. ما الذي يثبته الإسلام لعيسى عليه السلام، وما الذي ينفيه، ولماذا؟'
unit: messengers
order: 16
minutes: 9
emoji: 🕊️
tags: [موسى, عيسى, مريم, الإيمان بالرسل]
resources:
  - title: سورة مريم كاملةً على quran.com
    url: https://quran.com/maryam
    note: اقرأ قصة مريم وميلاد عيسى كما يرويها القرآن نفسه، مع ترجماتٍ إن شئت.
---

> **فكرة الدرس:** لا يصح إيمان مسلمٍ حتى يؤمن بموسى وعيسى ويعظّمهما. والخلاف مع المسيحية ليس في تعظيم عيسى، بل في صورة التعظيم: يدّعي الإسلام أنّ تأليهه غلوٌّ طرأ على التعظيم، وأنه يعيده إلى ما قاله هو عن نفسه.

## أرقامٌ تفاجئ من يسمعها أول مرة

من يظن أن الإسلام دينٌ قام على خصومة من سبقه، تفاجئه هذه الحقائق، وكلها من نص القرآن نفسه، تستطيع عدّها بيدك:

- **أكثر إنسانٍ ذُكر باسمه في القرآن ليس محمدًا ﷺ**، بل موسى عليه السلام: أكثر من مئةٍ وثلاثين مرة، وقصته أطول قصص القرآن وأكثرها تكرارًا. أما محمد ﷺ فذُكر باسمه أربع مرات، وباسم أحمد مرّةً واحدة (الصفّ ٦).
- **المرأة الوحيدة المسمّاة باسمها في القرآن هي مريم** أم عيسى: يرد اسمها أربعًا وثلاثين مرة (أكثر مما سُمّيت به أمُّ المسيح في العهد الجديد كله)، وباسمها سورة كاملة هي السورة التاسعة عشرة.
- **عيسى عليه السلام يُذكر باسمه خمسًا وعشرين مرة**، ويسمّيه القرآن المسيح إحدى عشرة مرّة.
- **والإيمان بهما ليس فضيلةً اختيارية بل ركن:** من أنكر نبوة موسى أو عيسى فليس بمسلمٍ أصلًا.

\`\`\`ayah
ref: 2:285
show: كل آمن بالله وملائكته وكتبه ورسله لا نفرق بين أحد من رسله
highlight: لا نفرق بين أحد من رسله
note: 'عدمُ التفريق هنا في أصل الإيمان بهم: فمن آمن ببعض الرسل وجحد بعضًا فليس مؤمنًا في ميزان القرآن. فالمسلم مطالَبٌ عقديًا بالإيمان بموسى وعيسى ومحبتهما وتوقيرهما.'
\`\`\`

ومرّ بك في الدرس السابق قول النبي ﷺ في الصحيحين إنه أولى الناس بعيسى ابن مريم، وإن الأنبياء إخوةٌ دينُهم واحد.

## ما الذي يثبته الإسلام لعيسى عليه السلام؟

أكثر مما يتوقعه القارئ المسيحي من دينٍ يحسبه خصمًا:

- **ولادته من عذراء:** يقرّر القرآن أن مريم حملت به من غير أبٍ البتة، معجزةً محضة تُروى بتفصيلها في سورة مريم (19:16–22).
- **أنه كلمةٌ من الله:**

\`\`\`ayah
ref: 3:45
show: إن الله يبشرك بكلمة منه اسمه المسيح عيسى ابن مريم
highlight: بكلمة منه
note: 'معنى الكلمة عند المفسرين (كالطبري وابن كثير) أنه خُلق بكلمة «كن» من غير أب، تشريفًا لمعجزة خلقه؛ لا أنه صفة الله الأزلية المتجسدة. فالوصف عندهم تكريم، لا تأليه.'
\`\`\`

- **معجزاته:** إحياء الموتى، وإبراء الأكمه والأبرص: يثبتها القرآن كلها، ويقيّدها في آياتها بقيدٍ واحد يتكرر: أنها بإذن الله لا من ذات المسيح (آل عمران 3:49، والمائدة 5:110).
- **وأنه المسيح**، الوجيه في الدنيا والآخرة، من أكابر الرسل أصحاب العزم.

فليس على الأرض مسلمٌ لا يحب عيسى ويعظّمه؛ بل من انتقصه أو سبّه لم يبق مسلمًا. هذا موقع عيسى عليه السلام في الدين الذي يظنه كثيرون خصمه.

## ما الذي ينفيه، وبأي حجة؟

ينفي الإسلام أمرًا واحدًا في جوهره: أن يكون عيسى إلهًا أو ابنَ الله يُعبَد. وينفي معه الصلبَ نفسَه: يقرّر القرآن أنّ عيسى لم يُقتل ولم يُصلب، وأنّ الله رفعه إليه (النساء ١٥٧ و١٥٨)، وينفي التثليث نصًّا (النساء ١٧١، والمائدة ٧٣). ونحن نعلم أنّ الصلب عند القارئ المسيحيّ ليس تفصيلًا تاريخيًّا بل قلبَ الإيمان، ولذلك نذكره صريحًا ولا نمرّ به مرورًا؛ والموازنةُ بين الروايتين مسألةُ نصوصٍ وتاريخ، موعدُها وحدةُ «لماذا الإسلام؟» لا هذا الدرس. ولا يجادل في ذلك بالسخرية ممن يقوله، بل بالحجة الهادئة؛ والآيتان الآتيتان مثالان لطريقته:

\`\`\`ayah
ref: 3:59
highlight: كمثل آدم
note: 'نزلت في محاجّة نصارى نجران كما يذكر المفسرون: إن كانت الولادة من غير أبٍ تقتضي البنوة، فآدم خُلق من غير أبٍ ولا أم، ولا يقول أحدٌ بألوهيته. فالمعجزة تدل على قدرة الخالق، لا على ألوهية المخلوق.'
\`\`\`

\`\`\`ayah
ref: 5:75
show: ما المسيح ابن مريم إلا رسول قد خلت من قبله الرسل وأمه صديقة كانا يأكلان الطعام
highlight:
  - قد خلت من قبله الرسل
  - كانا يأكلان الطعام
note: 'حجةٌ من الحياة اليومية: كان المسيح وأمه يأكلان الطعام، ومن يحتاج إلى الطعام ليقوم بدنُه فليس بإله. ولاحظ الأدب في موضع الخلاف: الآية نفسها تثني على أمه (صدّيقة) وهي تنفي ألوهيتهما.'
\`\`\`

وأول ما نطق به عيسى في رواية القرآن (رضيعًا في المهد، حين أشارت أمه إليه ليدفع عنها التهمة) هو تعريفه بنفسه:

\`\`\`ayah
ref: 19:30
highlight: إني عبد الله
note: 'أنطق الله المسيحَ في مهده لتبرئة أمه، فكان أولَ ما عرّف به نفسَه العبوديةُ لله والنبوة. فهذا، في دعوى الإسلام، هو عيسى كما قال هو عن نفسه، قبل أن يقول فيه الناس ما قالوا.'
\`\`\`

ولئلا يُظن أن هذا الوصف تنزيلٌ خاصّ بعيسى: القرآن يصف محمدًا ﷺ نفسَه بالوصف نفسه تقريبًا في آل عمران (3:144): رسولٌ سبقته الرسل. فالإسلام لا يرفع نبيَّه فوق المقام الذي يضع فيه عيسى؛ كلاهما عنده بشرٌ رسول، وأشرفُ وصفٍ ينالانه: عبد الله ورسوله.

\`\`\`doubt
claim: 'خلافُكم معنا ليس في المعجزات أصلًا. عمدتُنا شهادةُ المسيح عن نفسه: في الأناجيل يغفر الخطايا، ويقول “قبل أن يكون إبراهيم أنا كائن”، و“أنا والآب واحد”، ويُسجَد له فلا يردّ. ثم قام من الموت، وعلى ذلك بنى تلاميذُه كلَّ شيء، لا على ولادته. فحصرُه في النبوّة لا يجيب أقوى ما عندنا، بل يعرض عنه.'
answer: |-
  لنزن بالميزان نفسه في كل الحالات. الولادة من غير أب؟ آدم خُلق من غير أبٍ ولا أم، ولم يعبده أحد. إحياء الموتى؟ الكتاب المقدس نفسه يذكر أنبياءَ أُحيي الموتى على أيديهم (إيليا وأليشع)، ولم يقل أتباعُهما بألوهيتهما. فالمعجزة في كل هذه الحالات تدل على قدرة مُجريها، وهو الله، لا على ألوهية من جرت على يده؛ ولهذا قيّد القرآن معجزات عيسى كلَّها بأنها بإذن الله.
  وأما الانتقاص، فمبنيّ على أن النبوة مقامٌ وضيع، وليست كذلك في الإسلام: ليس فيه وصفٌ أشرف من العبودية لله مقرونةً بالرسالة، وهو أعلى ما يصف به المسلمون محمدًا ﷺ نفسَه. الانتقاص عند المسلم أن يُنسب إلى عيسى ما لم يقله عن نفسه؛ والتعظيم أن يوقَّر في المقام الذي أعلنه هو من مهده. فالخلاف ليس بين محبةٍ وجفاء (كلانا يحبه)، بل بين صورتين للتعظيم، والإسلام يحتكم بينهما إلى كلمة عيسى الأولى عن نفسه.
  وأمّا أقوالُه عن نفسه في الأناجيل، وهي عمدة الاحتجاج، فجوابها شقّان. أوّلهما أنّ في الأناجيل نفسِها ما يعارض هذا الفهم ظاهرًا، كقوله “لماذا تدعوني صالحًا؟ ليس أحدٌ صالحًا إلا واحدٌ وهو الله” (مرقس ١٠: ١٨)، وقوله في دعائه “أنت الإله الحقيقيّ وحدك” (يوحنا ١٧: ٣). وثانيهما أنّ الاحتجاج بنصٍّ يفترض أوّلًا ثبوتَه ونقلَه، وتلك مسألةُ نصوصٍ وتاريخ موعدُها وحدةُ «لماذا الإسلام؟». فنحن هنا نقرّر موقف الإسلام ودليلَه من داخله، ونؤجّل الموازنة إلى موضعها، ولا نبني على إعراض.
\`\`\`

\`\`\`rule
الإيمان بموسى وعيسى ركنٌ في إيمان كل مسلم، لا مجاملة. يثبت لهما الإسلام النبوةَ والمعجزات، ويثبت لعيسى ولادتَه العذرية ومقامَه مسيحًا وكلمةً من الله؛ وينفي عنه الألوهية والبنوة محتكمًا إلى قوله هو عن نفسه، إذ عرّف نفسه عبدًا لله ونبيًا. فالخلاف على صورة التعظيم، لا على أصله.
\`\`\`

\`\`\`note
هذا الدرس عرض موقفَ الإسلام، ولم يطلب منك بعدُ ترجيحَه على غيره. الموازنة بين الدعاوى (أيُّ النصوص حُفظ، وأيُّ التصورات عن الله أقوم) موضوع وحدة «لماذا الإسلام؟» بمعاييرَ معلنةٍ تُطبَّق على الجميع بإنصافٍ واحد. وحقُّ القارئ المسيحي علينا أن يجد هنا خلافًا بلا استهزاء؛ فهذا دينُنا في عيسى، قيل بمحبةٍ له ولمن يحبه.
\`\`\`

\`\`\`quiz
questions:
  - q: من أكثر إنسانٍ ذُكر باسمه في القرآن؟
    options:
      - موسى عليه السلام، أكثر من مئةٍ وثلاثين مرة
      - محمد ﷺ
      - إبراهيم عليه السلام
      - عيسى عليه السلام
    answer: 0
    why: ذُكر موسى باسمه أكثر من مئةٍ وثلاثين مرة، ومحمد ﷺ أربع مرات فقط؛ فالقرآن لا يقوم على إقصاء الأنبياء السابقين بل على تصديقهم.
  - q: ما لازم هذه الآية في إيمان المسلم؟
    ref: 2:285
    word: لا نفرق بين أحد من رسله
    options:
      - 'لا يصح إيمانه إن جحد نبوة رسولٍ واحد: فالإيمان بموسى وعيسى ركنٌ لا خيار'
      - يجوز له الإيمان بمحمد ﷺ وحده وترك الباقين
      - التفريق بين الرسل مسألة اجتهادية
      - الآية في الملائكة لا في الرسل
    answer: 0
    why: القرآن يجعل الإيمان بالرسل جميعًا حزمةً واحدة، فمن آمن ببعضٍ وجحد بعضًا فليس مؤمنًا في ميزانه.
  - q: ما الذي يثبته الإسلام لعيسى عليه السلام وما الذي ينفيه عنه؟
    options:
      - 'يثبت ولادته العذرية ومعجزاته بإذن الله ومقامه مسيحًا وكلمةً من الله، وينفي الألوهية والبنوة'
      - ينفي معجزاته ويثبت نبوته فقط
      - يثبت ألوهيته وينفي نبوته
      - لا يذكره القرآن إلا ذكرًا عابرًا
    answer: 0
    why: حجة القرآن أن المعجزة تدل على قدرة الله لا على ألوهية من جرت على يده، وأن عيسى عرّف نفسه من مهده عبدًا لله ونبيًا.
\`\`\`
`,"../content/lessons/ar/news-of-unseen.md":`---
title: أنباء الغيب
description: 'إمبراطوريةٌ مسحوقة يعلن القرآن، في ذروة انكسارها، أنها ستنتصر في بضع سنين، ورجلٌ حيّ تقطع سورةٌ بمصيره وتترك له عشر سنواتٍ لينقضها بكلمة. رهاناتٌ مكشوفة كسبها كلَّها.'
unit: muhammad
order: 23
minutes: 9
emoji: 🔮
tags: [غلبت الروم, الإخبار بالغيب, سورة المسد]
---

> **فكرة الدرس:** الكاذب يتجنّب الرهانات القابلة للتكذيب؛ يتنبّأ غامضًا مطّاطًا لا يُمسك عليه. وهذا الكتاب فعل العكس: أعلن نبوءاتٍ محدّدةً بمُدد، قابلةً للنقض أمام الجميع، ثم كسبها. والذي يراهن علنًا رهاناتٍ لا يملك نتيجتها إمّا مجنونٌ بالحساب البشريّ، وإمّا يعلم من علّام الغيوب.

## نبوءةٌ بموعد

في سنة ٦١٤م سحقت فارسُ الرومَ سحقًا: انتزعت الشام، ودخلت بيتَ المقدس وحملت منها صليبَ النصارى الأكبر، ثم زحفت على مصر بعد ذلك بأربع سنين حتى استقرّ لها مُلكُها. وبدت الإمبراطورية الرومية في حكم المنتهية، وحالُها في وصف المؤرّخين حالُ دولةٍ على شفير الزوال. وكان مشركو مكة يشمتون بالمسلمين: انتصر إخوانُنا عبّادُ النار على أهل الكتاب، وسنفعل بكم مثلها.

فنزلت آياتٌ تعاكس كلَّ حسابٍ استراتيجيّ ظاهر:

\`\`\`ayah
ref: 30:2
note: 'إقرارٌ بالواقعة أولًا: غُلبت الروم فعلًا. لا مكابرة في الهزيمة.'
\`\`\`

\`\`\`ayah
ref: 30:3
highlight: وهم من بعد غلبهم سيغلبون
note: 'ثم النبوءة الصريحة: المهزوم المسحوق سيغلب. لا «قد» ولا «لعل»، بل سينٌ وفعلٌ مؤكَّد.'
\`\`\`

\`\`\`ayah
ref: 30:4
highlight: في بضع سنين
note: 'وأخطر ما في النبوءة: سقفٌ زمنيّ. البضع عند أهل اللغة من الثلاث إلى التسع على أشهر الأقوال؛ فالآية تضع لنفسها موعدَ امتحانٍ علنيًّا لا تملك تأجيله.'
\`\`\`

تأمّل حجم المجازفة لو كان الكلام بشريًّا: نصرُ إمبراطوريةٍ منهارة قضيةٌ لا يملك محمدٌ ﷺ فيها جنديًّا واحدًا، والمدّة مضروبة، والخصوم يتربّصون بأيّ خُلفٍ. ثم وقع ما أخبرت به: نهض هرقل نهضتَه المشهورة سنة ٦٢٢م، ونقل الحرب إلى أرض فارس. ولم يكن الطريق ممهَّدًا: حوصرت القسطنطينية نفسُها سنة ٦٢٦م فنجت، ثم انقلب الميزان حين هُزمت فارس في عقر دارها عند نينوى في أواخر سنة ٦٢٧م، وردَّت ما أخذت في صلح السنة التالية.

ومتى «البضع» بالضبط؟ هنا يختلف الناس، ومن حقّك أن تعرف الخلاف لا أن تُعطى صورةً ملساء. المفسّرون يحسبون المدّة من وقت النزول لا من وقت الهزيمة، لأنّ الأجل الذي يعوّلون عليه هو الأجل الذي راهن عليه أبو بكر علنًا يوم تُليت الآيات. وإنما اختلفوا في موضع التحقّق: فابن عباس والثوريّ والسدّيّ عند بدرٍ سنة ٢هـ، بحديث أبي سعيد الخدريّ الذي حسّنه الترمذيّ؛ وعكرمةُ والزهريّ وقتادةُ عند الحديبية، ورجّحه ابن تيمية؛ وقيل قبل الهجرة بسنتين. وعلى هذه الأقوال كلِّها المدّة داخلةٌ في البضع. وإن حسبتَها من سقوط بيت المقدس سنة ٦١٤م، فنهضةُ هرقل سنة ٦٢٢م داخلةٌ في التسع، وحسمُ نينوى سنة ٦٢٧م خارجٌ عنها؛ والتأريخ القديم تقريبيّ في الحالين. أمّا الذي لا يختلف عليه أحد فجوهرُ الخبر: إمبراطوريةٌ حُكم عليها بالانتهاء عادت غالبةً في سنواتٍ معدودة، والخبرُ قيل حين كان عكسُه هو الحساب الظاهر.

والقرآن نفسه يسمّي هذا الجنس من الإخبار باسمه ويحتجّ به:

\`\`\`ayah
ref: 11:49
highlight: ما كنت تعلمها أنت ولا قومك من قبل هذا
note: 'عقب قصة نوح: هذه الأخبار من الغيب، لم تكن تعلمها أنت ولا قومُك. فالاحتجاج بالإخبار عمّا لا سبيل للبشر إليه احتجاجُ القرآن عن نفسه، لا استنباطُ متأخّرين.'
\`\`\`

## رهان السورة على رجلٍ حيّ

والنبوءة الثانية أجرأ، لأن نقضها كان بيد خصمٍ حيّ. أبو لهب، عمُّ النبيّ ﷺ وألدُّ أعدائه، نزلت فيه سورةٌ كاملة تقطع بمصيره:

\`\`\`ayah
ref: 111:3
note: 'حكمٌ مقطوعٌ به على رجلٍ حيّ: سيموت على الكفر ويدخل النار. لا استثناء ولا تعليق. ونزولُها في وجهه ثابتٌ في الصحيح: لمّا جمع النبيُّ ﷺ قريشًا على الصفا قال أبو لهب: تبًّا لك، ألهذا جمعتنا؟ فنزلت السورة (البخاري ٤٨٠١).'
\`\`\`

الآن ضع نفسك مكان أبي لهب. عدوُّك يتلو على الناس سورةً تقول إنك لن تؤمن أبدًا. أرخصُ سلاحٍ في يدك أن تقف في السوق وتقول: «أشهد أن لا إله إلا الله»، كلمةٌ واحدة بلسانك، ولو نفاقًا، تجعل كتابَ خصمك ينقض نفسَه أمام الملأ. وقد عاش أبو لهب بعد نزول السورة نحو عشر سنين، يسمعها تُتلى، ومات على كفره يوم لم يقلها. عشرُ سنواتٍ والبابُ مفتوح، وصاحبُ الكتاب، لو كان بشرًا يؤلّف، رهينةُ كلمةٍ يستطيع خصمُه قولَها في أيّ صباح. من يقامر هذه المقامرة بكتابٍ يزعم عصمتَه؟

## «نبوءةٌ بعد وقوعها؟ أم مصادفة؟»

\`\`\`doubt
claim: 'لعلّ آيات الروم أُلحقت بالقرآن بعد انتصار الروم فعلًا، أو قيلت رجمًا فصادفت؛ والنبوءات القليلة الصادفة تُحفَظ ويُنسى ما أخطأ، كما يفعل العرّافون.'
answer: |-
  أمّا الإلحاق بعد الحدث فيصطدم بطبيعة نقل القرآن التي فصّلتها وحدة «لماذا الإسلام؟»: نصٌّ يُتلى علنًا ويحفظه العشرات فالمئات من نزوله، في مكة قبل أن تكون للمسلمين دولةٌ أو سلطةُ تحرير. إدراجُ سورةٍ أو آياتٍ بأثرٍ رجعيّ في نصٍّ محفوظٍ في صدور خصومٍ وأتباعٍ معًا دعوى تحتاج آليةً لم يصفها أحد؛ والمصادر التي أرّخت للنزول قبل الحدث هي نفسها التي أرّخت للحدث.
  وأمّا «العرّافون يصيبون أحيانًا» فقاعدة صحيحة تُقاس بشرطها: العرّاف يكثر ويعمّم ويبهم، فتضيع أخطاؤه في زحام الرجم. وهذا عكسُ ما هنا من كل وجه: نبوءةٌ واحدةٌ محدّدة الأطراف (مَن سيغلب، ومَن سيُغلب، وفي كم) ضدَّ الحساب الظاهر، ثم رهانُ المسد المفتوح عشرَ سنين. ولو كان في القرآن رجمٌ مخطئ لتلقّفه خصومُه من يومه، وقد كانوا يحصون عليه أنفاسه، فلم يؤثَر عنهم في هذا حرفٌ فيما وصلنا من أخبارهم.
  ويبقى المنهج: هذا الدرس لم يبنِ على نبوءاتٍ فضفاضة تحتمل كلَّ شيء، بل على أخبارٍ مؤرَّخةٍ قابلةٍ للنقض نجت من النقض. وهذا هو الفرق بين الاستدلال والدعاية.
\`\`\`

\`\`\`rule
أخبر القرآن بغيبٍ محدّد الموعد (نصرِ الروم في بضع سنين وهم في حضيض الانكسار)، وقطع بمصير خصمٍ حيّ كان يملك نقضَه بكلمةٍ طوال عشر سنين، ووقع الأمران كما أخبر. والكاذب لا يراهن علنًا على ما لا يملك، فكيف بمن كسب كلَّ رهاناته؟
\`\`\`

\`\`\`quiz
questions:
  - q: ما وجه الإعجاز في آيات أول سورة الروم؟
    ref: 30:3
    word: وهم من بعد غلبهم سيغلبون
    options:
      - نبوءة محددة بسقف زمني بنصر إمبراطورية مسحوقة، ضد كل حساب ظاهر، وتحققت في مدتها
      - وصفٌ لمعركة كانت قد انتهت قبل النزول
      - دعاءٌ للروم بالنصر لا إخبار
      - إشارة إلى نصرٍ سيقع بعد قرون
    answer: 0
    why: 'الآيات أقرّت بالهزيمة الواقعة ثم قطعت بالنصر في بضع سنين (والبضع من ثلاث إلى تسع)، فوضعت لنفسها موعد امتحان علنيًا، ونجحت فيه.'
  - q: لماذا تُعدّ سورة المسد رهانًا مكشوفًا لا يجرؤ عليه مؤلِّف بشريّ؟
    options:
      - لأنها قطعت بموت أبي لهب كافرًا وهو حيّ، فكان يملك نقض الكتاب كلِّه بشهادةٍ يقولها ولو نفاقًا؛ وعاش بعدها نحو عشر سنين ولم يقلها
      - لأنها أطول سور القرآن وأصعبها حفظًا
      - لأن أبا لهب كان قد مات قبل نزولها
      - لأنها لم تذكر اسمه صريحًا
    answer: 0
    why: كلمة واحدة بلسانه، ولو كذبًا، كانت تكفي لينقض الكتاب نفسه أمام الملأ؛ وبقي الباب مفتوحًا عشر سنين ولم يدخله.
  - q: كيف يجيب الدرس عن احتمال «قيلت النبوءة رجمًا فصادفت»؟
    options:
      - العرّاف يكثر ويبهم فتضيع أخطاؤه، وهذه نبوءة واحدة محددة الأطراف ضد الحساب الظاهر، ولم يؤثر عن خصومه المتربصين إمساكُ خطأ واحد من هذا الجنس
      - بأن المصادفة مستحيلة عقلًا في كل شيء
      - بأن النبوءة أُلحقت بعد الحدث فلا إشكال
      - بأن العرب لم يعرفوا العرافة أصلًا
    answer: 0
    why: قاعدة «يصيب العرّافون أحيانًا» تعمل حيث الكثرة والإبهام؛ وهنا خبر مؤرَّخ محدد قابل للنقض نجا من النقض، وخصومٌ يحصون الأنفاس لم يجدوا ما يمسكون.
\`\`\`
`,"../content/lessons/ar/no-contradiction.md":`---
title: لا اختلاف فيه
description: 'كتابٌ نزل مفرَّقًا في ثلاثٍ وعشرين سنة، بين اضطهادٍ وهجرةٍ وحربٍ ودولة، ثم يدعو الشاكّين فيه إلى تفتيشه عن التناقض. أيّ مؤلِّفٍ يجرؤ على هذه الدعوة؟'
unit: quran
order: 26
minutes: 8
emoji: 🔍
tags: [التدبر, اتساق النص, مشكل القرآن]
---

> **فكرة الدرس:** القرآن لا يطلب قبوله قبل فحصه؛ بل يصوغ بنفسه قاعدةَ الاختبار: لو كان من تأليف بشرٍ لَظهر فيه الاختلاف الكثير. دعوةٌ مفتوحة إلى تدقيقٍ عدائيّ، قائمةٌ منذ أربعة عشر قرنًا؛ وظروفُ نزوله هي التي تجعل نجاحه فيها أعجوبة.

## كتابٌ يدعو إلى محاكمته

\`\`\`ayah
ref: 4:82
highlight: لوجدوا فيه اختلافا كثيرا
note: 'الآية تضع ما يسمّيه الباحثون اليوم فرضيّةً قابلة للاختبار: افترِض أنه بشريّ، ثم فتِّش. فإن كان بشريًّا وجدتَ الاختلاف الكثير.'
\`\`\`

لاحظ من المخاطَب: الذين يشكّون فيه هم المدعوّون إلى تدبّره. الكتبُ عادةً تطلب من قارئها حسنَ الظنّ؛ وهذا الكتاب يطلب من خصومه التفتيش، ويسمّي لهم ما يفتّشون عنه. مؤلِّفٌ بشريّ يعلم أنّ في كتابه ما في كتب البشر لا يكتب هذه الآية؛ لأنه يعلم أنها ستُستعمل ضدّه.

## لماذا يكون الاتّساق هنا أعجوبة؟

لكي تزن هذه الدعوة، تذكّر كيف جاء هذا الكتاب إلى الوجود:

- نزل **مفرَّقًا في ثلاثٍ وعشرين سنة**، لا في خلوة مؤلِّفٍ يرتّب أفكاره.
- عبَر في أثنائها اضطهادَ مكّة، والهجرةَ، وبدرًا وأُحدًا والأحزاب، وبناءَ دولةٍ ومعاهداتِها ووفودَها.
- كان **يجيب الأحداث ساعةَ وقوعها** وأسئلةً تُطرح عليه، وكم في القرآن من جوابٍ يبدأ بذكر سؤال الناس.
- وكان **يُتلى علنًا لحظةَ نزوله** ويحفظه أصحابه فورًا؛ فما خرج منه شيءٌ يمكن تعديله سرًّا بعد ذلك.

\`\`\`compare
columns:
  - title: كيف يؤلّف البشر
    points:
      - مسوّداتٌ تُنقَّح، وطبعاتٌ تُصحَّح، وآراءُ شبابٍ يتبرّأ منها المؤلف في كِبَره
      - المؤلف يختار موضوعَه ووقتَه، ويكتب في هدوءٍ بعيدًا عن الأحداث
      - إذا فاجأه حدثٌ لم يحسبه عدّل النصَّ قبل النشر
      - كلّما طال الزمن وتعدّدت الموضوعات كثُرت مواضعُ التصادم
  - title: كيف نزل القرآن
    points:
      - لا مسوّدة ولا طبعة ثانية ولا استرجاع؛ التلاوة العلنيّة هي النشر
      - الأحداث تفرض الموضوعَ والوقت، والنصّ يجيب ساعتَها
      - ثلاث وعشرون سنة بين اضطهادٍ وهجرةٍ وحربٍ ودولة، والصوتُ واحد
      - عقيدتُه في آخر ما نزل هي عقيدتُه في أوّل ما نزل
\`\`\`

قارِن هذا بأيّ مؤلِّفٍ تعرفه: كم كاتبًا كبيرًا لم يتناقض أوّلُ إنتاجه مع آخره، مع أنه يكتب في أمانِ مكتبه ويملك حذف ما شاء قبل النشر؟ فكيف بنصٍّ يُنشر منجَّمًا على وقع الأحداث، في أخطر الموضوعات (الغيب والتشريع والتاريخ والنفس) ولا يملك صاحبه استرجاعَ حرفٍ منه؟

## القوائم المنشورة على الإنترنت

\`\`\`doubt
claim: على الإنترنت قوائم طويلة بعنوان "تناقضات القرآن" فيها عشرات الأمثلة المرقّمة. فكيف يقال بعد ذلك إنه لا اختلاف فيه؟
answer: |-
  هذه القوائم موجودة فعلًا، والموقف العلميّ منها فحصُها بندًا بندًا، لا التلويحُ بها ولا الضحكُ منها. ومن فحصها وجد أصنافًا تتكرّر: آياتٌ تتحدّث عن موقفَين أو حالين مختلفَين فتُقرأ كأنها عن موقفٍ واحد، وأحكامٌ شرعيّة تدرّجت بنسخٍ معلَنٍ مسجَّلٍ في علم الفقه (وهذا تشريعٌ على مراحل لا عقيدةٌ تنقض نفسها)، وفروقُ أسلوبٍ في قصّ القصّة الواحدة بحسب مقام كلّ سورة، وأخطاءُ ترجمةٍ لا وجود لها في النصّ العربيّ.
  والأهمّ أنّ هذا الفحص ليس اكتشافًا حديثًا: العلماء أنفسهم جمعوا أشكلَ ما في الكتاب وأجابوا عنه قبل قرون في فنٍّ كاملٍ اسمه "مشكل القرآن" (كتب فيه ابن قتيبة في القرن الثالث الهجريّ)؛ فالبنود المشهورة مدروسةٌ من داخل البيت قبل أن يطرقها الخصوم بقرون.
  فالدعوة قائمة كما صاغتها الآية نفسها: خذ أيّ بندٍ واحد من أيّ قائمة، وارجع به إلى التفاسير، وانظر هل يصمد. منهجُ هذا الدليل الفحصُ لا التطمين. ولاحظ أخيرًا مقدارَ ما وعدت به الآية: اختلافًا كثيرًا لو كان بشريًّا؛ فقائمةُ بنودٍ لكلّ واحدٍ منها جوابٌ مدروس منذ قرون ليست هي الكثرة الموعودة، في كتابٍ بهذا الحجم خاض العقيدة والتشريع والتاريخ والطبيعة عبر ثلاثٍ وعشرين سنة.
\`\`\`

\`\`\`note
النسخ في الأحكام (أن يُشرَع حكمٌ ثم يحلَّ محلَّه حكمٌ لاحق، كتحريم الخمر على مراحل) تدرُّجٌ تشريعيّ معلَن يدرسه الفقه، لا تناقضُ عقيدة: ما اختلف قطّ خبرُ الكتاب عن الله ولا عن اليوم الآخر ولا عن أصل الأخلاق. ويختلف أهل العلم في عدد المواضع المنسوخة فعلًا بين مكثرٍ ومقلّ، وهو خلافٌ في عدّ أحكامٍ فقهيّة لا في شيءٍ من العقيدة؛ وننبّه عليه لأنّ منهج هذا الدليل تسميةُ الخلاف حيث وُجد.
\`\`\`

\`\`\`rule
كتابٌ نزل منجَّمًا ثلاثًا وعشرين سنة على وقع الأحداث، يُنشر بالتلاوة لحظةَ نزوله بلا مسوّدةٍ ولا تنقيحٍ ولا استرجاع، ثم بقي صوتًا واحدًا وعقيدةً واحدة من أوّله إلى آخره، ودعا خصومه بنفسه إلى تفتيشه. هذا المزيج لا نظير له في كتب البشر، والآية التي تتحدّى به ما زالت تنتظر من ينقضها.
\`\`\`

\`\`\`quiz
questions:
  - q: ما الذي تصنعه آية التدبّر في سورة النساء ولا تصنعه الكتب عادةً؟
    ref: 4:82
    word: ولو كان من عند غير الله لوجدوا فيه اختلافا كثيرا
    options:
      - تضع فرضيّةً قابلة للاختبار وتدعو الشاكّين أنفسهم إلى الفحص بها
      - تطلب الإيمان أولًا ثم الفهم بعده
      - تنهى عن مناقشة النصّ وتكتفي بالتقرير
      - تخاطب المؤمنين وحدهم بالثناء على الكتاب
    answer: 0
    why: الآية تصوغ قاعدة الاختبار بنفسها (لو كان بشريًّا لوُجد فيه الاختلاف الكثير)، وتوجّهها إلى من يشكّ لا إلى من صدّق.
  - q: لماذا يكون اتّساق القرآن لافتًا أكثر من اتّساق أيّ كتابٍ بشريّ متقن؟
    options:
      - لأنه نزل مفرّقًا ثلاثًا وعشرين سنة على وقع الأحداث، ويُنشر بالتلاوة فور نزوله، فلا مسوّدة ولا تنقيح ولا استرجاع
      - لأنه كتاب قصير قليل الموضوعات يسهل ضبطه
      - لأن مؤلفه كتبه في عزلة تامة عن الأحداث
      - لأن أتباعه امتنعوا عن فحصه فلم يظهر فيه شيء
    answer: 0
    why: ظروف النزول هي عكس شروط الاتساق البشري تمامًا؛ فالمؤلف البشري يحتاج المسودة والمراجعة، وهذا النص حُرم منهما وبقي صوتًا واحدًا.
  - q: كيف يتعامل هذا الدليل مع قوائم التناقضات المنشورة؟
    options:
      - يدعو إلى فحصها بندًا بندًا وردّ كلّ بندٍ إلى التفاسير، ويذكر أنّ العلماء درسوا أشكلَ البنود قبل قرون في فنّ مشكل القرآن
      - يعدّ مجرّد وجودها دليلًا على بطلانها
      - ينصح بتجاهلها لأن أصحابها خصوم
      - يقرّ بصحتها ويعدّها غير مهمة
    answer: 0
    why: منهج الموقع الفحص لا التطمين؛ والبنود المشهورة أجاب عنها فنٌّ كامل من داخل التراث (كابن قتيبة في القرن الثالث)؛ فالمطلوب من القارئ تجربة بندٍ واحد بنفسه.
\`\`\`
`,"../content/lessons/ar/one-god.md":`---
title: قل هو الله أحد
description: 'أقصرُ تعريفٍ بالله في القرآن: أربع آياتٍ تغلق كلَّ بابٍ دخل منه تصوّرٌ خاطئ عن الخالق. ولماذا يستحيل عقلًا أن يكون الإله أكثر من واحد؟'
unit: allah
order: 11
minutes: 8
emoji: ☝️
tags: [التوحيد, سورة الإخلاص, برهان التمانع]
resources:
  - title: سورة الإخلاص بتفاسيرها (quran.com)
    url: 'https://quran.com/ar/112'
    note: السورة كاملةً، مع تفاسيرَ يمكن فتحُها آيةً آية.
---

> **فكرة الدرس:** أثبتت الوحداتُ الماضية بالعقل أنّ لهذا الكون خالقًا. يبقى السؤال الأكبر: مَن هو؟ وأقصرُ جوابٍ عند الإسلام سورةٌ من أربع آيات، كلُّ آيةٍ منها تغلق بابًا دخل منه الناس إلى تصوّرٍ خاطئ عن الله.

\`\`\`note
إلى هنا كان هذا الدليل يحاجّ بالعقل والمشاهدة وحدهما، وهكذا سيبقى في مواضع الاحتجاج. لكنّ من حقّ الناظر في دينٍ أن يسأل أولًا: مَن الإله الذي تدعونني إليه؟ فمن هذه الوحدة يبدأ عرضُ ما يقوله الإسلام نفسُه عن الله، عرضًا وتعريفًا لا احتجاجًا بعدُ. أمّا البرهان على أنّ هذا الكلام وحيٌ حقًّا فله وحداتٌ كاملةٌ قادمة، فلا يُطلب منك هنا تصديقُ شيءٍ قبل دليله.
\`\`\`

## أربع آياتٍ تعرّفك به

سورة الإخلاص من أقصر سور القرآن، ومع ذلك سمّاها كثيرٌ من العلماء سورةَ التوحيد الخالص. اقرأها آيةً آية:

\`\`\`ayah
ref: 112:1
highlight: أحد
note: 'لم تقل السورة واحد بل أحد، وهي أبلغ: فالواحد قد يكون له نظيرٌ من جنسه، والأحد لا نظير له بوجهٍ من الوجوه. قال ابن كثير في تفسيرها إنه الذي لا نظير له ولا شبيه ولا عديل.'
\`\`\`

\`\`\`ayah
ref: 112:2
highlight: الصمد
note: 'الصمد هو الذي تقصده الخلائق كلُّها في حوائجها وهو الغنيّ عنها، والسيّد الذي كمُل سؤدده. ذكر المفسّرون، كالطبري وابن كثير، هذين المعنيين، وكلاهما يقول الشيء نفسه: كلُّ ما سواه محتاج، وهو وحده الغنيّ.'
\`\`\`

\`\`\`ayah
ref: 112:3
note: 'نفيٌ للطرفين معًا: لا ولدَ له ولا والد. فالذي وُلد له بداية، وما له بداية فمخلوق؛ وقد رأيتَ في وحدة الخالق أنّ سلسلة المخلوقات لا بدّ أن تنتهي إلى خالقٍ لم يبدأ.'
\`\`\`

\`\`\`ayah
ref: 112:4
highlight: كفوا أحد
note: 'الكفؤ: النظير والمكافئ. لا شبيه له ولا مثيل يُقاس عليه؛ فكلُّ صورةٍ تخطر ببالك فهي مخلوقة، والله بخلافها.'
\`\`\`

## أربعة أبوابٍ مُغلَقة

تأمّل الآن ماذا أغلقت هذه الآيات. كلُّ تصوّرٍ خاطئ عن الله عرفه تاريخُ البشر يصطدم بواحدةٍ منها:

- **آلهةٌ تولَد** ولها آباء وأمّهات، كآلهة الأساطير القديمة، تردّها الآية الثالثة: مَن وُلد فقد بدأ، ومَن بدأ فمخلوق.
- **آلهةٌ تلِد** أبناءً يرثون الألوهية أو يشاركون فيها، تردّها الآية نفسُها: الولد يكون لمن يفنى فيخلفه ولدُه، أو لمن يحتاج، والله ليس كذلك.
- **آلهةٌ تحتاج** إلى طعام عابديها وقرابينهم، تجوع وتنام وتخاف، يردّها اسمُ الصمد: الخلائق كلُّها تحتاجه، وهو لا يحتاج شيئًا.
- **آلهةٌ تُنحَت** على صورة إنسانٍ أو حيوانٍ أو كوكب، وتُقاس على المخلوقات، تردّها الآية الرابعة: لا كفؤ له ولا شبيه.

سورةٌ نزلت قبل أربعة عشر قرنًا، وما زالت تجيب سلفًا عن كلّ تصوّرٍ منحرف سيخطر للبشر بعدها.

## ولماذا واحدٌ لا اثنان؟

الإله، بالتعريف الذي لا معنى للكلمة بدونه، هو مَن له الخلقُ والأمر، إرادتُه نافذةٌ لا يحدّها شيء. فافترض الآن إلهين اثنين بهذا المعنى، واسأل: ماذا يحدث إذا اختلفت إرادتاهما، فأراد أحدُهما تحريكَ شيءٍ وأراد الآخر تسكينَه؟ إن نفذت إرادةُ الأوّل فالثاني مغلوبٌ محدود ليس بإله، وإن نفذت إرادة الثاني فالأمر بالعكس، وإن لم تنفُذا معًا فكلاهما عاجز. إرادتان مطلقتان لا تجتمعان في كونٍ واحد، كما لا يجتمع على مقودٍ واحدٍ سائقان لكلٍّ منهما وجهة.

والقرآن يقدّم هذا البرهان في آيةٍ واحدة:

\`\`\`ayah
ref: 21:22
highlight: لو كان فيهما آلهة إلا الله لفسدتا
note: 'يسمّي العلماء هذا برهانَ التمانع: لو تعدّدت الآلهة لتعارضت الإرادات المطلقة ولفسد نظامُ الكون. فإذا رأيتَ الكون ماضيًا على نظامٍ واحدٍ لا ينخرم، فذلك شاهدٌ أنّ المدبّر واحد.'
\`\`\`

\`\`\`ayah
ref: 23:91
highlight:
  - لذهب كل إله بما خلق
  - ولعلا بعضهم على بعض
note: 'لو تعدّدت الآلهة لانحاز كلُّ إلهٍ إلى ما خلق، ولظهرت في الكون حدودُ الممالك، ثم لتغالبت الإرادات فعلا بعضُها على بعض، وكلا الأمرين خلاف المشاهَد.'
\`\`\`

وما نراه بأعيننا يشهد للآيتين لا عليهما: قوانينُ الفيزياء في أبعد مجرّةٍ رصدها البشر هي نفسُها قوانينها في مطبخك، ونسيجُ الكون من طرفه إلى طرفه قطعةٌ واحدة لا أثر فيها لتخوم مملكتين. نظامٌ واحدٌ متّصل، وهو تمامًا ما تتوقّعه من مدبّرٍ واحد.

\`\`\`doubt
claim: البرهان يفترض أنّ الآلهة المتعدّدة ستتنازع. لكن لماذا لا يتّفق إلهان اتفاقًا أبديًّا، أو يقتسمان الكون اقتسامًا محكمًا لا يتداخل؟
answer: |-
  الاقتسام نفسُه هو النقض: إلهٌ ينتهي سلطانُه حيث يبدأ سلطانُ شريكه إلهٌ محدود، والمحدود مقهورٌ بحدّه ناقصُ الملك، وهذا خلاف معنى الإله الذي بدأنا به. والاتفاق الأبديّ أحدُ اثنين: إن كان عن تشاورٍ وتنسيق فقد احتاج كلٌّ منهما إلى موافقة الآخر، والمحتاج ليس بإله؛ وإن كانت إرادتاهما لا تفترقان في شيءٍ أبدًا ولا يظهر لأحدهما أثرٌ دون الآخر، فلم يبقَ من الثاني إلا الاسم: إرادةٌ واحدة وقدرةٌ واحدة سمّيتَها اسمين.
  ثم مسألةُ منهج: الإلهُ الثاني الذي لا يظهر له أثرٌ مستقلٌّ قطُّ دعوى بلا شاهدٍ واحد. الدليل أوصلنا إلى خالقٍ للكون؛ أمّا إثبات ثانٍ لا يفعل شيئًا يتميّز به، فزيادةٌ في الدعوى بلا زيادةٍ في الدليل.
\`\`\`

## سورةٌ تعدل ثلث القرآن

هذا الوزن الثقيل لأقصر السور لم يقُله أحدٌ اجتهادًا، بل قاله النبيّ ﷺ نفسُه حين استقلّ رجلٌ من الصحابة شأنَها:

\`\`\`hadith
text: 'أنّ رجلًا سمع رجلًا يقرأ {قُلْ هُوَ اللَّهُ أَحَدٌ} يُردّدها، فلمّا أصبح جاء إلى رسول الله ﷺ فذكر ذلك له، وكأنّ الرجل يتقالُّها، فقال رسول الله ﷺ: والذي نفسي بيده، إنها لتعدل ثلث القرآن.'
source: 'صحيح البخاري (٥٠١٣)'
url: 'https://sunnah.com/bukhari:5013'
note: 'يتقالُّها أي يستقلّها ويظنّها لا تكفي. ومن أشهر ما وجّه به العلماء هذا الفضلَ أنّ معاني القرآن ترجع إلى ثلاثة أبوابٍ كبرى (توحيدٌ وأحكامٌ وأخبار)، وهذه السورة أخلصت للتوحيد كلِّه فعدلت ثلثه. ذكره ابن تيمية وغيره، وهو أحد توجيهاتٍ عدّةٍ لا قطع بواحدٍ منها.'
\`\`\`

فإذا كان التوحيد ثلث القرآن، فقد فهمتَ لماذا بدأنا التعريف بالله من هذه السورة تحديدًا.

\`\`\`rule
دلّ العقل على أنّ الخالق لا يكون إلا واحدًا: إرادتان مطلقتان لا تجتمعان، والكون الجاري على نظامٍ واحدٍ متّصلٍ شاهدٌ للمدبّر الواحد. وجاءت سورة الإخلاص فوصفته بما يغلق كلَّ بابِ خطأ: **أحدٌ** لا نظير له، **صمدٌ** لا حاجة به، **لم يلد ولم يولد** فلا بداية له ولا شريك، **ولا كفؤ له** فلا يُقاس بخلقه.
\`\`\`

\`\`\`quiz
questions:
  - q: بماذا تردّ سورة الإخلاص على مَن تصوّر إلهًا يولَد أو يلِد؟
    options:
      - بنفي الطرفين معًا؛ لأنّ من وُلد فقد بدأ، ومن بدأ فمخلوقٌ لا خالق
      - بأنّ الولادة جائزة على الإله لكنها لم تقع
      - بأنّ هذا سؤالٌ لا يجوز طرحه أصلًا
      - بأنّ الله أقوى الآلهة المتناسلة وأقدمها
    answer: 0
    why: الآية الثالثة تنفي الولد والوالد معًا، وعلّة النفي عقلية لا تعبدية؛ فما له بداية فهو من جنس المخلوقات، وسلسلة المخلوقات تنتهي بالضرورة إلى خالقٍ لم يبدأ.
  - q: ما وجه الاستدلال في آية الأنبياء على استحالة تعدّد الآلهة؟
    options:
      - إرادتان مطلقتان لا تجتمعان، واطّرادُ نظامِ الكون على قانونٍ واحدٍ شاهدٌ بأنّ المدبّر واحد
      - أنّ الآلهة المتعدّدة كانت ستتصالح في النهاية
      - أنّ المقصود فسادُ أخلاق الناس إذا تعدّدت معبوداتهم
      - أنّ الآية تحكي حربًا وقعت فعلًا بين آلهةٍ قديمة
    answer: 0
    why: هذا برهان التمانع؛ فلو تعدّدت الإرادات المطلقة لتعارضت ولفسد النظام، والمشاهَد كونٌ واحدٌ متّسق القوانين من أقصاه إلى أقصاه.
  - q: ما معنى اسم الله الصمد كما ذكره المفسّرون؟
    options:
      - الذي تقصده الخلائق كلُّها في حوائجها وهو الغنيّ الذي لا يحتاج إلى شيء
      - الذي خلق الكون ثم تركه يسير وحده
      - الذي يعطي عبادَه بلا حكمةٍ ولا تدبير
      - الذي يحتاج إلى عبادة عباده ليكمُل
    answer: 0
    why: جمع المفسّرون كالطبري وابن كثير معنيين متكاملين للصمد؛ السيّد الكامل سؤدده، والمقصود في الحوائج كلّها؛ فكلُّ ما سواه فقيرٌ إليه وهو الغنيّ عنها.
\`\`\`
`,"../content/lessons/ar/one-message.md":`---
title: رسالةٌ واحدة
description: 'من نوح إلى محمد ﷺ لم يأت الأنبياء بأديانٍ متنافسة، بل برسالةٍ واحدة هي التوحيد. والاختلاف بين الأديان اليوم طارئٌ على الأصل، ليس هو الأصل.'
unit: messengers
order: 15
minutes: 8
emoji: 🔗
tags: [وحدة الرسالة, التوحيد, الأنبياء]
---

> **فكرة الدرس:** يُفاجأ كثيرون حين يعلمون أنّ الإسلام لا يقول إنّ الأنبياء السابقين كذبة، ولا إنّ أسلاف أتباعهم كانوا حمقى، بل يدّعي العكس تمامًا: رسالةٌ واحدة أُرسلت إلى كل أمة، وما تراه اليوم من اختلافٍ فهو انحرافٌ لاحقٌ عن أصلٍ واحد.

## ماذا تتوقع لو كان المرسِل واحدًا؟

ضع ما مضى أمامك: خالقٌ واحد، يرسل الهدى رحمةً وعدلًا كما رأيت في الدرس السابق. فما الذي تتوقعه من رسالاته عبر الأمم والأزمنة؟ تتوقع أن يكون جوهرها واحدًا لا يتبدل: تعريفٌ بالمرسِل، ودعوةٌ إلى عبادته وحده؛ لأن الحقيقة التي تخبر عنها الرسالة لا تتغير بتغيّر القرون.

وهذا بالضبط ما يدّعيه القرآن عن تاريخ النبوة كله، بصيغة قاعدةٍ لا استثناء فيها:

\`\`\`ayah
ref: 21:25
highlight: لا إله إلا أنا فاعبدون
note: 'قاعدة مطّردة: ما من رسولٍ سبق إلا وجوهر وحيه هذا: لا معبود بحقٍّ إلا الله فاعبدوه وحده. وهذه هي كلمة التوحيد التي يقوم عليها الإسلام كله.'
\`\`\`

\`\`\`ayah
ref: 16:36
highlight: في كل أمة رسولا
note: 'لم تُترك أمةٌ بلا نذير. والطاغوت: كلُّ ما عُبد من دون الله وهو راضٍ بذلك، أو اتُّخذ متبوعًا في معصيته؛ أمّا من عُبد وهو كارهٌ لذلك، كالمسيح والملائكة، فليس منهم (الأنبياء ١٠١). فدعوى الإسلام أنّ التوحيد ليس اختراعًا عربيًا من القرن السابع، بل الأصل الذي بُلّغته كل أمة.'
\`\`\`

## أسماءٌ تعرفها جيدًا

القرآن لا يتحدث عن رسلٍ مجهولين؛ إنه يسمّي مَن يعرفهم اليهوديُّ والنصرانيُّ قبل المسلم (نوحًا وإبراهيم وموسى وعيسى) ويجعلهم حلقاتِ سلسلةٍ واحدة أوصى اللهُ الجميعَ فيها بأمرٍ واحد:

\`\`\`ayah
ref: 42:13
highlight: أن أقيموا الدين ولا تتفرقوا فيه
note: 'الدين الموصى به هنا هو أصل الدين المشترك: التوحيد. قال ابن كثير: القدرُ المشترك بينهم هو عبادة الله وحده لا شريك له، وإن اختلفت شرائعُهم ومناهجُهم، واستشهد بقوله تعالى في المائدة (٤٨). أمّا تفاصيل الشرائع، كصفة الصلاة وما يحلّ ويحرم، فقد اختلفت من رسالةٍ إلى رسالة بحسب حال كلّ أمّة.'
\`\`\`

وقال النبي ﷺ عن هذه السلسلة كلمةً تلخّص الدرس كله:

\`\`\`hadith
text: 'أَنَا أَوْلَى النَّاسِ بِعِيسَى ابْنِ مَرْيَمَ فِي الدُّنْيَا وَالآخِرَةِ، وَالأَنْبِيَاءُ إِخْوَةٌ لِعَلاَّتٍ، أُمَّهَاتُهُمْ شَتَّى، وَدِينُهُمْ وَاحِدٌ'
source: 'صحيح البخاري (٣٤٤٣)، ومسلم (٢٣٦٥)'
url: 'https://sunnah.com/bukhari:3443'
note: 'الإخوة لِعَلّات: إخوةٌ أبوهم واحد وأمهاتهم شتى. ومعناه عند شرّاح الحديث كابن حجر: أصل دين الأنبياء واحد وهو التوحيد، وشرائعهم مختلفة.'
\`\`\`

تأمّل الصورة: أبٌ واحد (العقيدة) وأمهاتٌ شتى (الشرائع). فليس في الإسلام أنّ موسى جاء بدينٍ، وعيسى بدينٍ ينقضه، ومحمدٌ ﷺ بثالثٍ يلغيهما. بل دينٌ واحد نزل مرارًا، لكل أمةٍ بلسانها وشِرعتها، ثم خُتم مرةً واحدة.

## فمن أين جاء الاختلاف إذًا؟

سؤالٌ منطقيّ: إن كانت الرسالة واحدة، فلماذا نرى اليوم أديانًا متباينة إلى حدّ التناقض؟ جوابُ الإسلام: الاختلاف حدث بعد الأنبياء، لا منهم. فالرسالات السابقة لم تُحفظ نصوصُها الأصلية بألسنتها كما بُلّغت، وتراكم فوقها عبر القرون ما أضافه الأتباع وما ترجمه المترجمون؛ فالفروق التي تراها اليوم هي مسافة الابتعاد عن الأصل، لا تعدّدَ الأصول. وهذه دعوى تاريخية قابلة للفحص لا مجرد اتهام، وفحصُها موعده وحدة «لماذا الإسلام؟».

\`\`\`compare
columns:
  - title: أديانٌ متنافسة مخترَعة
    points:
      - كل دينٍ اختراع بشري مستقل عن غيره
      - الأنبياء مؤسسو مذاهب متزاحمة
      - أممٌ بأكملها تُركت بلا خبرٍ من السماء
      - اختلاف الأديان يُتخذ دليلًا على بطلانها جميعًا
  - title: رسالةٌ واحدة بتبليغاتٍ متعددة
    points:
      - 'المرسِل واحد فالجوهر واحد: لا إله إلا الله'
      - الأنبياء إخوة، يصدّق لاحقُهم سابقَهم
      - ما من أمةٍ إلا جاءها نذير
      - الاختلاف اليوم انحرافٌ لاحق عن أصلٍ مشترك، والرسالة خُتمت بنصٍّ محفوظ
\`\`\`

\`\`\`doubt
claim: كل دينٍ يدّعي أنه الأصل وأنّ غيره هو المنحرف عنه. فدعوى الإسلام هذه واحدة من دعاوى كثيرة متشابهة، فلماذا نصدّقها هي بالذات؟
answer: |-
  اعتراضٌ عادل، وجوابه الأول أن لا تصدّقها بعد. هذا الدرس يعرض الدعوى ولا يطالبك بالتسليم بها؛ فالدليل عليها موضوع الوحدات الآتية، حيث تُعلَن معايير الوزن (توحيدٌ لا مساومة فيه، ونصٌّ محفوظ، واتساقٌ داخلي) وتُطبَّق على الإسلام قبل غيره.
  لكن لاحظ من الآن أنها ليست دعوى من جنس صدّقني وكفى، بل تُلزم نفسها بلوازم قابلة للفحص. إن كانت الرسالة واحدة، فينبغي أن تجد التوحيد الصريح في أقدم طبقات التقاليد الكبرى، وهو موجود: أول الوصايا عند موسى إفرادُ الله بالعبادة، وحين سُئل عيسى عن أعظم الوصايا بدأ جوابه، كما يرويه إنجيل مرقس (١٢: ٢٩)، بأنّ الربّ إلهنا ربٌّ واحد. وإن كانت الرسالة قد خُتمت بنصٍّ محفوظ، فينبغي أن يوجد اليوم نصٌّ واحد لم يتبدل؛ وتلك مسألة تُفحص فحصًا تاريخيًا، لا تُتلقى تسليمًا.
\`\`\`

\`\`\`rule
جوهر دعوة الأنبياء جميعًا واحد (لا إله إلا الله)، واختلفت شرائعهم بحسب الأمم والأزمنة. فالإسلام في دعواه ليس دينًا جديدًا ينقض ما قبله، بل الرسالة نفسها أُعيد تبليغها ثم خُتمت. وأما إثبات هذه الدعوى فميزانه المعلَن في الوحدات الآتية.
\`\`\`

\`\`\`quiz
questions:
  - q: ما القاعدة التي تقرّرها هذه الآية عن الرسل قبل محمد ﷺ؟
    ref: 21:25
    word: لا إله إلا أنا فاعبدون
    options:
      - 'ما أُرسل رسولٌ قط إلا وجوهر وحيه واحد: التوحيد وإفراد الله بالعبادة'
      - أن كل رسول جاء قومَه بمعبودٍ مختلف
      - أن الرسل السابقين لم يوحَ إليهم شيء يُذكر
      - أن الرسالة كانت خاصة بالعرب وحدهم
    answer: 0
    why: الآية بصيغة القاعدة العامة (ما أرسلنا من قبلك من رسولٍ إلا بهذا)؛ فجوهر الوحي واحد في كل السلسلة.
  - q: ما معنى وصف النبي ﷺ الأنبياءَ بأنهم إخوة لعلّات؟
    options:
      - 'أبوهم واحد وأمهاتهم شتى: أصل دينهم واحد وهو التوحيد، وشرائعهم مختلفة'
      - أنهم أقارب في النسب جميعًا
      - أن بعضهم كان ينازع بعضًا
      - أنهم عاشوا كلهم في زمنٍ واحد
    answer: 0
    why: 'هكذا شرحه شرّاح الحديث كابن حجر: العقيدة المشتركة كالأب الواحد، والشرائع المختلفة كالأمهات الشتى؛ والحديث نفسه يصرّح بأن دينهم واحد.'
  - q: كيف يفسّر الإسلام اختلافَ الأديان الموجودة اليوم؟
    options:
      - انحرافٌ لاحق تراكم بعد الأنبياء فوق أصلٍ واحد مشترك
      - تعدّد أصليّ، فكل دينٍ نزل هكذا من مصدره
      - لا تفسير عنده لذلك أصلًا
      - الاختلاف وهمٌ ولا فرق حقيقيًا بين الأديان
    answer: 0
    why: دعوى الإسلام أن التوحيد بُلّغ لكل أمة، وأن الفروق الحالية مسافة الابتعاد عن ذلك الأصل؛ وفحص هذه الدعوى التاريخي موعده وحدة لاحقة.
\`\`\`
`,"../content/lessons/ar/preserved-in-hearts.md":`---
title: في الصدور والسطور
description: 'وعدٌ في الكتاب نفسه بحفظه، وتحقُّقه ظاهرةٌ تجري أمامك اليوم: ملايين يحفظونه عن ظهر قلب، وخطأٌ في حركةٍ واحدة يُصحَّح من الصفوف. كيف تبدو المعجزة وهي جارية؟'
unit: quran
order: 27
minutes: 8
emoji: 🌍
tags: [حفظ القرآن, الحفاظ, القراءات]
---

> **فكرة الدرس:** وعَد الكتابُ بحفظ نفسه، وتحقُّقُ الوعد ليس دعوى تاريخيّة تحتاج توثيقًا، بل ظاهرةٌ مشهودة: الكتابُ الوحيد على وجه الأرض الذي يحفظه ملايين البشر كاملًا عن ظهر قلب، في كلّ جيلٍ منذ أربعة عشر قرنًا، والأطفالُ والأعاجم في مقدّمتهم.

## وعدٌ يضع الكتابَ على المحكّ

\`\`\`ayah
ref: 15:9
highlight: إنا نحن نزلنا الذكر
note: 'الذكر هو القرآن. كتابٌ يتعهّد بحفظ نفسه رهانٌ مكشوف: لو ضاع منه شيءٌ أو تحرّف يومًا لكذّب نفسَه بنفسه؛ فالآية شرطُ نقضٍ مكتوبٌ في المتن، كآية التحدّي في الدرس قبل السابق.'
\`\`\`

هذا الوعد نزل في مكّة، والمسلمون قلّة مستضعفة تُعذَّب في الرمضاء، لا دولةَ لهم ولا مطابع ولا مكتبات. أن يَعِد كتابٌ في تلك اللحظة بأنه سيبقى محفوظًا أبدًا، فذلك رهانٌ لا يجرؤ عليه مؤلّف. فلننظر ماذا حدث للرهان.

## ظاهرةٌ تراها بعينك

القرآن هو الكتاب الوحيد على الأرض الذي يحفظه **ملايين** من البشر كاملًا عن ظهر قلب: نحو ستّمائة صفحة. بين الحفّاظ أطفالٌ لم يبلغوا العاشرة، وأكثرُ المسلمين أصلًا ليسوا عربًا: يحفظه الطفل في جاكرتا وإسطنبول وداكار وإسلام آباد بلغةٍ غير لغته الأمّ، حرفًا حرفًا. ولم ينقطع هذا في جيلٍ واحد منذ نزوله: سلسلةٌ حيّة من الصدور، كلُّ جيلٍ يسلّم الذي يليه.

وللظاهرة آليةُ تصحيحٍ تعمل أمامك كلَّ عام: في صلاة التراويح، إذا أخطأ الإمام في **حركةٍ واحدة** (فتحةٍ مكان ضمّة) ارتفع التصحيح من الصفوف فورًا، من حفّاظٍ لا يعرف بعضُهم بعضًا. نُسَخٌ حيّة كثيرة مستقلّة، موزّعة على القارّات، تراجع بعضها بعضًا حتى مستوى الحركة. لو صمّم مهندسُ معلوماتٍ نظامًا لصيانة نصٍّ عبر القرون، لَما بلغ هذا.

فمن أين جاءت كلُّ هذه الصدور؟ الكتاب نفسه أخبر أنّ حفظه مُيسَّر:

\`\`\`ayah
ref: 54:17
highlight: فهل من مدكر
note: 'تتكرّر هذه الآية في سورة القمر أربعَ مرّاتٍ بنصّها؛ والتكرارُ نفسُه يذوّقك المعنى: كلامٌ يعلَق بالقلب من مرّته الأولى. وتيسيرُه للحفظ دعوى قابلة للاختبار، وستّمائة صفحة في صدر طفلٍ أعجميّ هي نتيجة الاختبار.'
\`\`\`

والنبيّ ﷺ جعل تعلُّمَه وتعليمه شرفَ الأمّة، فتكفّل كلُّ جيلٍ بالذي بعده:

\`\`\`hadith
text: 'خيرُكم من تعلَّم القرآنَ وعلَّمه.'
source: 'صحيح البخاري (٥٠٢٧)'
url: 'https://sunnah.com/bukhari:5027'
note: 'هذه الجملة هي محرّك أربعة عشر قرنًا من الكتاتيب وحلقات التحفيظ في كلّ بلدٍ دخله الإسلام: جعلت نقلَ النصّ أشرفَ ما يفعله المرء بعمره.'
\`\`\`

## الصدور والسطور يشهد بعضها لبعض

حُفظ القرآن من أوّل يومٍ في قناتين معًا: صدورٌ تحفظ وسطورٌ تُكتب، وكلٌّ منهما تضبط الأخرى: الحافظ يكشف خطأ الناسخ، والمصحف يردّ وهم الذاكرة. وتفصيلُ تاريخ الجمع والتدوين مرّ بك في درس "الذكرُ محفوظ" من وحدة لماذا الإسلام؛ أمّا هذا الدرس فعن الثمرة التي تراها اليوم: افتح مصحفًا طُبع في المغرب وآخر في إندونيسيا وقارِن.

بل جرّب أقرب من ذلك: هذا الموقعُ نفسُه يفحص آليًّا كلَّ آيةٍ يعرضها، حرفًا وحركةً، على نصٍّ واحدٍ مثبَّتٍ بالبصمة الرقميّة، كما تشرح صفحة "عن الدليل". هذه الجملةُ ممكنةٌ لسببٍ واحد: أنّ نصًّا واحدًا موجودٌ أصلًا ليُفحص عليه. حاوِل أن تقول الجملةَ نفسَها عن أيّ كتابٍ قديمٍ آخر، فستتعثّر عند كلمة "واحد": أيّ طبعة؟ أيّ عائلة مخطوطات؟ إعادةُ بناءِ أيّ محقّق؟

\`\`\`doubt
claim: أقرأ أن للقرآن قراءاتٍ متعدّدة، وأن في المخطوطات القديمة فروقًا. فأين النصّ الواحد المحفوظ إذن؟
answer: |-
  القراءات حقيقةٌ، لكنها عكس ما توحي به الشبهة: ليست تحريفًا اكتُشف متأخّرًا، بل أوجهُ تلاوةٍ منقولةٌ بأسانيدها من تلقّي النبيّ ﷺ نفسِه، معدودةٌ مسمّاةٌ بأصحابها، تُطبع وتُدرَّس علنًا حتى حركاتها: رواية حفص التي يقرأ بها أكثر العالم، ورواية ورش المنتشرة في المغرب، وغيرُهما. الفروق بينها محصورة موثّقة إلى الحرف الواحد، ولا ينشأ عنها عقيدةٌ مختلفة ولا قصّةٌ مختلفة ولا شريعةٌ مختلفة. والتحريف يعمل في الظلام؛ فأمّا فروقٌ مفهرَسة تُتلى في المساجد ويُمتحن فيها الحفّاظ، فهي ضدّ التحريف بالتعريف.
  ثم إنّ آلية الضبط تعمل داخل كلّ روايةٍ بتمامها: حافظُ ورشٍ يصحّح إمامَ ورشٍ في الحركة الواحدة، كما يفعل حافظ حفص. فالظاهرة التي بنى عليها هذا الدرس قائمةٌ في كلّ رواية.
  وأمّا المخطوطات القديمة فقد صارت شاهدًا للنصّ لا عليه: تطابُقها مع المصحف الذي بين يديك هو نفسه من أدلّة الحفظ، وتفصيل ذلك في درس "الذكرُ محفوظ".
\`\`\`

\`\`\`rule
وعَد الكتابُ بحفظه في لحظةٍ كان الوعدُ فيها أبعدَ ما يكون عن التصديق، ثم تحقّق أمام كلّ جيل: ملايينُ يحفظونه كاملًا، أكثرُهم من غير أهل لغته، ونظامُ مراجعةٍ حيٌّ يكشف الخطأ في الحركة الواحدة، وصدورٌ وسطورٌ تضبط إحداهما الأخرى. لا يوجد كتابٌ ثانٍ على الأرض تصحّ فيه هذه الفقرة، وكان قد كتب الوعدَ بها في متنه قبل أربعة عشر قرنًا.
\`\`\`

\`\`\`tip
هذا دليلٌ تستطيع فحصه بنفسك هذا الأسبوع: احضر تراويحَ أو صلاةَ جماعةٍ يُقرأ فيها من الحفظ، وانتظر خطأً: سترى التصحيح يأتي من الصفوف قبل أن يُتمّ الإمامُ الآية. أو افتح مصحفَين طُبعا في قارّتين وقارِن سطرًا بسطر.
\`\`\`

\`\`\`quiz
questions:
  - q: ما الذي يجعل وعد الحفظ في سورة الحجر حجّةً لا مجرّد دعوى؟
    ref: 15:9
    word: إنا نحن نزلنا الذكر
    options:
      - أنه شرطُ نقضٍ مكتوب في المتن، قابلٌ للاختبار في كلّ جيل، وتحقُّقه اليوم ظاهرةٌ مشهودة لا رواية تاريخية
      - أن المسلمين يصدّقونه فكفى ذلك
      - أنه ورد في كتاب قديم والقديم موثوق
      - أنه وعدٌ لا سبيل إلى التحقق منه أصلًا
    answer: 0
    why: كتابٌ يتعهد بحفظ نفسه يكذّب نفسَه إن تحرّف؛ وبعد أربعة عشر قرنًا ما زال الوعدُ صادقًا وأمامك من يحفظه بالملايين.
  - q: ماذا تضيف حادثة تصحيح الإمام في التراويح إلى الحجّة؟
    options:
      - تُظهر نظامَ مراجعةٍ حيًّا موزَّعًا من نسخٍ مستقلّة كثيرة في الصدور تكشف الخطأ في حركةٍ واحدة فورًا
      - تدلّ على شدّة تديّن المصلّين لا أكثر
      - تثبت أن الأئمة لا يخطئون
      - عادةٌ اجتماعية لا دلالة لها على النصّ
    answer: 0
    why: التصحيح الفوري من حفّاظٍ لا يعرف بعضهم بعضًا يعني أن النص محفوظ في مصادر مستقلة كثيرة تتراجع حتى مستوى الحركة؛ وهذه هي آلية الحفظ نفسها وهي تعمل.
  - q: بمَ يجيب الدرس عن شبهة تعدُّد القراءات؟
    options:
      - القراءات أوجهُ تلاوةٍ منقولة بأسانيدها، معدودة موثّقة تُدرَّس علنًا حتى حركاتها، والضبط قائم داخل كلّ روايةٍ بتمامها؛ والتحريف لا يعمل في العلن
      - القراءات اخترعها النسّاخ في القرون المتأخرة
      - لا وجود لقراءاتٍ متعددة أصلًا
      - الفروق بين القراءات تُنشئ عقائدَ مختلفة
    answer: 0
    why: فروقٌ مفهرسة بأسمائها وأسانيدها، تُطبع وتُمتحن فيها الحفّاظ جهارًا، هي ضدّ التحريف بالتعريف؛ والخطأ في أيّ روايةٍ يُكشف بآلية الضبط نفسها.
\`\`\`
`,"../content/lessons/ar/preserved.md":`---
title: الذكرُ محفوظ
description: 'وعدٌ قُطع قبل أربعة عشر قرنًا وما زال قابلًا للاختبار: كيف نُقل القرآن في الصدور والسطور معًا، وبمَ يختلف طريقُ نقله عن طريق نقل غيره من الكتب؟'
unit: why-islam
order: 18
minutes: 10
emoji: 🛡️
tags: [حفظ القرآن, التواتر, جمع القرآن]
---

> **فكرة الدرس:** القرآن لا يدّعي الحفظ فحسب، بل يعدُ به وعدًا صريحًا يمكن لأيّ باحثٍ أن يختبره اليوم. وآليّة الحفظ ليست سرًّا: قناتان (صدورٌ تحفظ وسطورٌ تُكتب) تتفاحصان في كلّ جيل.

## وعدٌ قابلٌ للاختبار

الكتب لا تَعِد عادةً بحفظ نفسها. هذا الكتاب فعل:

\`\`\`ayah
ref: 15:9
highlight: وإنا له لحافظون
note: 'وعدٌ مؤكَّد بأدوات التوكيد كلّها، قُطع في مكّة والمسلمون قلّة مستضعفة لا دولة لهم ولا دواوين. لو تفرّق نصّ القرآن كما تتفرّق نصوص الكتب عبر النسخ، لكانت هذه الآية شاهدةً على نفسها بالبطلان.'
\`\`\`

تأمّل موضع هذه الدعوى من ميزان الدرس السابق: هي دعوى تاريخيّة قابلة للفحص، لا عقيدة تُطلب قبل الدليل. فإمّا كذّبها التاريخ وإمّا صدّقها، وهذا ما نفحصه الآن.

## القناة الأولى: الصدور

في حياة النبيّ ﷺ نفسِها كان القرآن محفوظًا في صدور جماعاتٍ من أصحابه: يتلونه في الصلوات الجهريّة على مسامع الجماعة كلَّ يوم، ويعلّمه بعضُهم بعضًا، ويُراجَع كلُّه مراجعةً سنويّة:

\`\`\`hadith
text: 'كَانَ يَعْرِضُ عَلَى النَّبِيِّ صلى الله عليه وسلم الْقُرْآنَ كُلَّ عَامٍ مَرَّةً، فَعَرَضَ عَلَيْهِ مَرَّتَيْنِ فِي الْعَامِ الَّذِي قُبِضَ'
source: 'صحيح البخاري (٤٩٩٨)'
url: 'https://sunnah.com/bukhari:4998'
note: 'العارِض هو جبريل عليه السلام كما تبيّنه روايات الباب: مدارسةٌ سنويّة كاملة للنصّ، وفي العام الأخير مرّتان.'
\`\`\`

ولم تنقطع هذه القناة يومًا: كلُّ جيلٍ تلقّى التلاوة مشافهةً عن الجيل الذي قبله، بأعدادٍ يستحيل تواطؤها على الخطأ، وهذا ما يسمّيه العلماء **التواتر**. واليوم يحمل النصَّ كاملًا في الصدور ملايين الحفّاظ، بينهم أطفال، من جاكرتا إلى داكار، على اختلاف ألسنتهم الأمّ. ولو أخطأ إمامٌ حرفًا في صلاة التراويح لردّه عليه المصلّون من خلفه في اللحظة نفسها؛ فآليّة التصحيح هذه تعمل أمامك في كلّ مسجد، كلَّ عام.

## القناة الثانية: السطور

ولم يكن الحفظ شفويًّا وحده. كان للنبيّ ﷺ كُتّابٌ يكتبون الوحي فور نزوله. ثم لمّا استُشهد عددٌ من القرّاء في حروب الردّة، أمر أبو بكر بجمع المكتوب كلِّه في مصحفٍ واحد، وكلّف بذلك زيدَ بن ثابت، كاتبَ الوحي. اسمع منهجه بكلماته:

\`\`\`hadith
text: 'فَتَتَبَّعْتُ الْقُرْآنَ أَجْمَعُهُ مِنَ الْعُسُبِ وَاللِّخَافِ وَصُدُورِ الرِّجَالِ'
source: 'صحيح البخاري (٤٩٨٦)'
url: 'https://sunnah.com/bukhari:4986'
note: 'العُسُب: جريد النخل. واللِّخاف: صفائح الحجارة الرقيقة. لاحظ المنهج: مقابلة المكتوب على المحفوظ في الصدور؛ فالقناتان تفحص إحداهما الأخرى منذ اللحظة الأولى.'
\`\`\`

ثم في خلافة عثمان، لمّا اتّسعت الفتوح وخشي الصحابة أن يختلف الناس في القراءة، نُسخت من تلك الصحف مصاحفُ أرسلت إلى الأمصار:

\`\`\`hadith
text: 'فَأَرْسَلَ عُثْمَانُ إِلَى حَفْصَةَ أَنْ أَرْسِلِي إِلَيْنَا بِالصُّحُفِ نَنْسَخُهَا فِي الْمَصَاحِفِ ثُمَّ نَرُدُّهَا إِلَيْكِ'
source: 'صحيح البخاري (٤٩٨٧)'
url: 'https://sunnah.com/bukhari:4987'
note: 'لاحظ الفعل: نَنسخها، لا نؤلّفها ولا نحرّرها. ومصدرُ النسخ هو الجمع الأوّل المحفوظ عند حفصة. وتمامُ الحديث يذكر ما صنعوه عند الاختلاف: أن يُكتب بلسان قريش، فإنما نزل بلسانهم؛ فالخلاف كان في وجه الكتابة لا في المتلوّ.'
\`\`\`

فصار للنصّ سندان يمشيان معًا: حفظٌ جماعيّ متواتر لا يملك أحدٌ تغييره، وكتابةٌ بدأت بين يدي النبيّ ﷺ نفسِه. الحفظ وحده، في غير هذا النموذج، يتفلّت مع الأجيال، والكتابة وحدها رهينةُ النسّاخ؛ أمّا معًا فكلٌّ منهما يصحّح الآخر في كلّ جيل.

## الكتب الأخرى: بإنصافٍ وتوقير

المسلم يؤمن أنّ أصل التوراة والإنجيل وحيٌ من الله، فليس هذا الباب بابَ شماتة. والفرق الذي نشير إليه فرقٌ في **نموذج النقل**، لا حكمٌ على أحد؛ وهو أمرٌ يقرّره محقّقو تلك الكتب أنفسهم في مقدّمات طبعاتهم العلميّة: النصّ يُستخرَج اليوم بالموازنة بين مخطوطاتٍ بينها فروق، وأقدمُ النسخ الكاملة متأخّرةٌ قرونًا عن زمن الأحداث. وليست هذه تهمةً لأحد؛ فالنقل بالنسخ الكتابيّ وحده هذا شأنه الطبيعيّ في كلّ كتب العالم القديم.

الجديد الذي جاء به القرآن هو النموذج الآخر: حفظٌ جماعيٌّ حيٌّ تسنده كتابةٌ معاصرة للنزول، منذ الجيل الأوّل. فالموازنة هنا ليست بين كتابٍ «أفضل» وكتاب «أسوأ»، بل بين طريقين للنقل: طريقٍ يعتمد النسخ وحده، وطريقٍ جعل الأمّةَ كلَّها ناسخةً ورقيبًا في آن.

\`\`\`note
قد تسمع أنّ للقرآن «روايات» كحفص وورش وتظنّها اختلاف نسّاخ. الصواب أنّها أوجه تلاوةٍ متلقّاة بالإسناد عن النبيّ ﷺ نفسه، مضبوطةٌ حرفًا حرفًا في كتب القراءات منذ قرون، يعرف أهل الفنّ عدَّها ومواضعها. والفرق جوهريّ: التعدّد الموروث المعلوم المصدر والمحصور العدد محفوظٌ بعينه؛ أمّا التحريف فتغيّرٌ مجهول لا يملك أحد حصره.
\`\`\`

\`\`\`doubt
claim: 'عثمان جمع الناسَ على مصحفٍ واحد وأمر بإحراق ما سواه، وهذا هو التلاعب بعينه: لجنةٌ رسميّة قرّرت ما هو «القرآن» وأعدمت البدائل.'
answer: |-
  أوّلًا، القصّة ليست سرًّا اكتشفه الباحثون؛ نحن نعرفها من رواية المسلمين أنفسهم في أصحّ كتبهم؛ وما كان فعلُه تلاعبًا لا يُروى على رؤوس الأشهاد. ثم انظر ما الذي جرى فعلًا: عثمان لم يؤلّف نصًّا، بل نسخ من الصحف المجموعة في عهد أبي بكر، بمقابلة الحفّاظ، علنًا، بمحضر جيل الصحابة الذين سمعوا القرآن من فمِ النبيّ ﷺ. التلاعب يحتاج ظلامًا، وهذا جرى في وضَح النهار.
  ثم القناة الشفويّة تجعل التلاعب الكتابيّ بلا أثر أصلًا: لو بدّلت اللجنة حرفًا واحدًا لصرخ آلاف الحفّاظ الذين يحملون النصّ في صدورهم ويتلونه في صلواتهم كلَّ يوم. وأمّا ما أُحرق فمصاحفُ أفرادٍ كُتبت للاستعانة الشخصيّة، فيها ما تلقّاه صاحبُها وما كتبه لنفسه من تفسير. وقد اختلف العلماء أنفسُهم فيما بقي من الأحرف السبعة في المصحف العثمانيّ: فذهب الطبريّ والطحاويّ وابن عبد البرّ إلى أنّ عثمان جمع الناس على حرفٍ واحدٍ منها، وذهب ابن الجزريّ وأكثرُ المحقّقين إلى أنّ الرسم المجرّد من النقط يحتمل ما بقي منها، وذهب السيوطيّ إلى أنها فيه كلُّها. وهذا خلافٌ نذكره ولا نطويه: التوحيد وقع في الرسم المكتوب، لا في المتلوّ المتواتر. والشاهد التاريخيّ الأبلغ: عثمان قامت عليه فتنةٌ وقُتل فيها؛ وخصومُه الذين خرجوا عليه لم يتّهموه يومًا بتغيير القرآن، بل قرؤوا مصحفه وصلّوا به.
\`\`\`

\`\`\`rule
وعدُ الحفظ في القرآن دعوى تاريخيّة قابلة للفحص، وآليّتها مشهودة: حفظٌ جماعيّ متواتر تسنده كتابةٌ بدأت بين يدي النبيّ ﷺ، يتفاحصان في كلّ جيل، حتى صار نصًّا واحدًا يُتلى من جاكرتا إلى داكار. هذا هو معيار «وحيٌ محفوظ النصّ» من الدرس السابق، وقد وُضع الإسلام أمامه فاجتازه.
\`\`\`

\`\`\`quiz
questions:
  - q: ما الذي يجعل آية الحفظ دعوى قابلة للاختبار لا مجرّد عقيدة؟
    ref: 15:9
    word: وإنا له لحافظون
    options:
      - لأنها وعدٌ صريح قُطع قبل قرون، ويستطيع أيّ باحثٍ اليوم مقارنة مصاحف الأرض وحفّاظها ليرى أتحقّق أم لا
      - لأنها نزلت بعد أن اكتمل جمع المصاحف
      - لأن المسلمين أجمعوا عليها فصارت حجّة
      - لأنها لا تحتمل إلا معنًى رمزيًّا
    answer: 0
    why: الوعد سبق النتيجة بقرون، والنتيجة مبسوطة أمام أيّ فاحص اليوم؛ فلو تفرّق النصّ لكانت الآية شاهدةً على نفسها بالبطلان.
  - q: ما القناتان اللتان نُقل بهما القرآن، وما سرّ قوّتهما معًا؟
    options:
      - حفظٌ جماعيّ متواتر في الصدور، وكتابةٌ بدأت في حضرة النبيّ ﷺ، وكلٌّ منهما يفحص الآخر في كلّ جيل
      - الكتابة وحدها، فالحفظ الشفويّ لا يوثق به
      - الحفظ وحده، فلم يُكتب القرآن إلا بعد قرن
      - ترجماتٌ قديمة تشهد للنصّ العربيّ
    answer: 0
    why: كما قال زيد بن ثابت في البخاري، جُمع القرآن من المكتوب ومن صدور الرجال معًا؛ فالتلاعب بأحد السندين يفضحه الآخر.
  - q: كيف يجيب الدرس عن شبهة أنّ توحيد عثمان للمصاحف تلاعبٌ بالنصّ؟
    options:
      - كان نسخًا علنيًّا من جمع أبي بكر بمقابلة الحفّاظ وبمحضر جيل السماع؛ ولا يمكن للجنةٍ أن تغيّر ما يحمله الآلاف في صدورهم
      - بإنكار وقوع الجمع العثمانيّ أصلًا
      - بأنّ التغيير وقع لكنه كان يسيرًا
      - بأنّ الأمر غيبٌ لا سبيل إلى فحصه
    answer: 0
    why: مصدر النسخ كان الجمعَ الأوّل المحفوظ، والمرجع حفظ الصدور، والعمل علنيّ، حتى إنّ خصوم عثمان الذين قتلوه لم يتّهموه بتغيير حرف.
\`\`\`
`,"../content/lessons/ar/quran-rebukes-him.md":`---
title: القرآن يعاتبه
description: 'المؤلّف يحذف ما يحرجه، وهذا الكتاب يسجّل عتاب صاحبه ويجعله قرآنًا يُتلى في الصلاة إلى قيام الساعة. من يفعل هذا بكتابٍ اخترعه؟'
unit: muhammad
order: 22
minutes: 10
emoji: 📝
tags: [عتاب القرآن, سورة عبس, دلائل النبوة]
---

> **فكرة الدرس:** ضع في يدك قاعدةً من سلوك البشر لا تتخلّف: من يؤلّف نصًّا يملك تحريره، ومن يملك التحرير يحذف ما يحرجه. ثم افتح المصحف على المواضع التي تعاتب محمدًا ﷺ نفسَه عتابًا مسجَّلًا خالدًا، وسل نفسك: أيّ مؤلّفٍ هذا؟

## اختبار السلوك تحت التصحيح

مضى في هذه الوحدة اختباران: سجلُّ الرجل قبل الدعوى، ومكسبُه منها. وهذا ثالثها، وهو أدقّها: **كيف يتصرّف النصُّ الذي جاء به تجاه أخطائه هو؟**

فالمخترع لدينٍ هو المحرّرُ الأوحد لكتابه: لا رقيب فوقه، ولا نسخة تصدر إلا بإذنه. ومثل هذا لا يكتب على نفسه توبيخًا، فإن فعلها لحكمةٍ دعائية أبقاها عامّةً مبهمة، وأخفى ما يمسّ هيبته عند أتباعه. هكذا تعمل السلطة على النصوص في كل عصر؛ انظر سيَر الملوك والزعماء المكتوبة في حياتهم.

والقرآن ينقض هذه القاعدة نقضًا صريحًا، في مواضعَ متفرّقةٍ نزلت عبر سنين، أشهرها سورةٌ كاملة سُمّيت باسم الحادثة.

## سورةٌ اسمها «هو عَبَس»

القصة كما يرويها الترمذيّ (٣٣٣١) عن عائشة رضي الله عنها وحسّنه، وهو خبرُ سبب نزولٍ لا حديثٌ في الصحيحين: جاء عبدُ الله بن أمّ مكتوم، وهو رجلٌ أعمى من فقراء المسلمين، يسأل النبيَّ ﷺ أن يعلّمه، والنبيُّ ﷺ مشغولٌ بدعوة رجلٍ من عظماء المشركين يرجو بإسلامه إسلامَ من وراءه. فقطع الأعمى عليه كلامه: أرشِدني يا رسول الله. فعبس النبيُّ ﷺ في وجهه وأعرض عنه، وأقبل على الرجل.

توقّف هنا لحظة. الأعمى **لم يرَ العبوس أصلًا**. ومن حضر من عظماء قريش لم يكن ليرى في تقديمه على فقيرٍ أعمى مأخذًا يُشنَّع به، فتقديمُ الكبراء على الضعفاء هو عين ما تعرفه الدنيا. أي أنه لم يكن في المجلس أحدٌ له مصلحةٌ في نقل هذه اللحظة. ولو كان الأمر بيد صاحب دعوةٍ يحرّر كتابه، لدُفنت حيث وقعت.

فنزل الوحي:

\`\`\`ayah
ref: 80:1
note: 'لاحظ الالتفات: «عبسَ» بضمير الغائب، كأنّ السماء تُشهِد الناسَ عليه قبل أن تلتفت إليه بالخطاب. عتابٌ يبدأ بإعلان الواقعة.'
\`\`\`

\`\`\`ayah
ref: 80:2
note: 'وتسجيلُ سببها: أن جاءه الأعمى. الرجلُ الذي ما رأى العبوسَ قرأه المسلمون بعد ذلك في صلاتهم إلى اليوم.'
\`\`\`

ثم يبيّن العتابُ وجهَ الخطأ بمقابلةٍ صريحة بين الرجلين:

\`\`\`ayah
ref: 80:6
highlight: فأنت له تصدى
note: 'المستغني الذي لا يطلبك هو الذي تتصدّى له، والآيةُ قبلها تسمّيه: من استغنى عن الهدى. وما عليك إن لم يتزكَّ؟ إنما عليك البلاغ.'
\`\`\`

\`\`\`ayah
ref: 80:10
highlight: فأنت عنه تلهى
note: 'والذي جاءك يسعى وهو يخشى (كما في الآيتين قبلها) تتشاغل عنه. ميزان السماء يقدّم الصادقَ الطالب على الوجيه المُعرِض.'
\`\`\`

فأيّ مصلحةٍ لمؤلّفٍ في هذا؟ السورة لم تكتفِ بتخطئته أمام أتباعه، بل خلّدت الخطأ باسم صاحبه الضمنيّ إلى آخر الدهر: مئات الملايين يتلونها في صلواتهم. وقد كان ﷺ هو من يتلوها عليهم أولَ مرة: يقرأ على الملأ عتابَ نفسه. وبقي ابنُ أمّ مكتوم في المدينة أحدَ مؤذّنَي رسول الله ﷺ كما في الصحيح (البخاري 617)؛ فالرجلُ الذي عاتبت السماءُ النبيَّ بسببه صار صوتُه يعلو من مسجده.

## وليس موضعًا واحدًا

لو كانت آيةً يتيمة لقيل: حيلةُ تواضعٍ محسوبة. لكنها سلسلةٌ ممتدّة عبر السنين، في قراراتٍ حقيقية غالية الثمن:

\`\`\`ayah
ref: 9:43
highlight: عفا الله عنك لم أذنت لهم
note: 'أذن لبعض المتخلّفين عن غزوة تبوك قبل أن يتبيّن صدقَهم، فجاء العتاب، وانظر أدبَه: يبدأ بالعفو قبل ذكر الذنب. عتابُ محبٍّ، لكنه مسجَّل.'
\`\`\`

\`\`\`ayah
ref: 66:1
highlight: لم تحرم ما أحل الله لك
note: 'حرّم على نفسه شيئًا أحلّه الله له إرضاءً لأزواجه، فعوتب: ليس لأحدٍ، ولا للنبيّ، أن يحرّم ما أحلّ الله. مبدأ التشريع فوق شخص المشرَّع إليه.'
\`\`\`

\`\`\`ayah
ref: 18:23
note: 'المشهور في كتب التفسير والسيرة أنّ قومًا سألوه عن أصحاب الكهف فقال: أخبركم غدًا، ولم يقل إن شاء الله، فاحتُبس عنه الوحي مدةً شقّ عليه فيها الأمر، ثم نزل هذا التوجيه. وهذه روايةُ سيرةٍ لا حديثٌ في الصحيحين: أصلُها عند ابن إسحاق بإسنادٍ فيه رجلٌ لم يُسمَّ، فلا تُحمَّل ما لا تحتمل. أمّا المحكَم فالآيتان نفسُهما: نهيٌ صريحٌ موجَّهٌ إلى حامل الكتاب، بقي في المصحف يُتلى.'
\`\`\`

\`\`\`ayah
ref: 33:37
highlight: وتخفي في نفسك ما الله مبديه
note: 'أحرجُ آيةٍ في الباب كله: تُثبت عليه أنه أخفى في نفسه شيئًا كان الله مُظهرَه، وتعلن خشيتَه الناسَ في موضعٍ اللهُ أحقُّ أن يُخشى. وما الذي أخفاه؟ ذهب ابن كثير إلى أنه إعلامُ الله إيّاه أنّ زينب ستصير زوجَه، وأنه كره ما سيقوله الناس في زواجه من زوجة من تبنّاه؛ وذهب السعديّ إلى أنه ميلٌ وقع في قلبه: أنه لو طلّقها زيدٌ لتزوّجها. والقولان لأهل التفسير، نذكرهما ولا نرجّح بينهما هنا. وأمّا سائر الآثار في هذا الموضع فقد أعرض عنها ابنُ كثير صراحةً لعدم صحّتها. وقالت عائشة رضي الله عنها كلمتها المشهورة: لو كتم النبيُّ ﷺ شيئًا من الوحي لكتم هذه الآية (البخاري ٧٤٢٠، ومسلم ١٧٧ب).'
\`\`\`

## «أدرجَ العتابَ ليبدو متواضعًا»

\`\`\`doubt
claim: 'العتاب مسرحيةٌ ذكية: أدرج مؤلّفُ القرآن توبيخاتٍ لنفسه عمدًا ليكتسب مصداقية، فيقول الناس ما قلتَه أنت الآن: من يوبّخ نفسه لا يكون كاذبًا.'
answer: |-
  فرضيةٌ تستحق الوزن، فلنزنها بثلاثة أثقال. الأول: المحتال الذي يبلغ من الدهاء هندسةَ تواضعٍ مسرحيّ يعرف قاعدة الاحتيال الأولى: التوبيخ الدعائيّ يكون عامًّا باهتًا لا يمسّ مقتلًا. وهذه المواضع عكس ذلك: قرارات قيادية غلط فيها (إذنُ تبوك)، وحرجٌ عائليّ صريح (التحريم)، وموضعٌ يُثبت عليه إخفاءَ شيءٍ في نفسه وخشيةَ الناس، في أدقّ ما يمسّ بيته (الأحزاب). لا يختار عاقلٌ هذه الملفات بالذات مادةً لدعايته.
  الثاني: انظر إلى آيتَي الكهف بمعزلٍ عن أيّ خبر. صيغتُهما نهيٌ مباشرٌ عن عادةٍ من عادات الكلام: لا تقل سأفعل غدًا إلا أن يشاء الله؛ والمنهيُّ عنه هو حاملُ الكتاب، والنهيُ باقٍ في المصحف يقرؤه عليه أتباعُه في كلّ ختمة. والمؤلّف الذي يهندس تواضعًا مسرحيًّا يكتب ثناءً باهتًا؛ لا يكتب على نفسه قاعدةَ أدبٍ خالدة. (وأمّا تفصيلُ سبب النزول المشهور فخبرُ سيرةٍ إسنادُه ضعيف، فلا نبني عليه هنا.)
  الثالث: قارن بسلوك من نعرف يقينًا أنهم حرّروا نصوصَهم (الملوك في أخبار بلاطاتهم، والزعماء في مذكّراتهم): التاريخ كلّه يجري في اتجاه التجميل. فرضيةُ «التوبيخ الدعائيّ» تطلب منك أن تصدّق سلوكًا لا شاهدَ له في تاريخ المؤلّفين، لتفرّ من تفسيرٍ بسيط: الكتاب ليس من تأليفه.
\`\`\`

\`\`\`rule
من يؤلّف كتابًا يملك تحريره، ومن يملك التحرير لا يخلّد فضائحه. والقرآن عاتب النبيَّ ﷺ في سورةٍ تُتلى إلى اليوم، وفي قراراتٍ قيادية وأسرية حقيقية، وحبس عنه الجوابَ حين علّق وعدَه بغير مشيئة الله. هذا سلوك نصٍّ له ربٌّ فوق رسوله، لا نصٍّ بيد صاحبه.
\`\`\`

\`\`\`tip
اقرأ سورة عبس كاملةً في جلسة (دقيقتان) وأنت تستحضر السؤال: لو كنتُ أنا المؤلّف، أأُبقي هذا؟ ثم تذكّر أنه ﷺ هو من كان يقرؤها على الناس.
\`\`\`

\`\`\`quiz
questions:
  - q: ما وجه الاستدلال بسورة عبس على أنّ القرآن ليس من تأليف النبيّ ﷺ؟
    ref: 80:2
    word: أن جاءه الأعمى
    options:
      - المؤلّف يملك حذف ما يحرجه، وهذه واقعةٌ لم يرها صاحبُها ولا شاهدَ عليها، فخلّدها القرآن عتابًا يُتلى في الصلاة
      - لأن السورة نزلت في مكة قبل الهجرة
      - لأن العبوس كان في وجه رجلٍ من قريش
      - لأن السورة قصيرة يسهل حفظها
    answer: 0
    why: الأعمى لم ير العبوس، ولم يستنكره أحدٌ في المجلس؛ فلو كان الأمر بيد مؤلّفٍ لدُفنت اللحظة؛ لكنها صارت سورةً يقرؤها هو على الملأ.
  - q: لماذا تهدم قصة «سأخبركم غدًا» (الكهف 23–24) فرضيةَ التأليف من داخلها؟
    options:
      - لأن النهي في الآيتين موجَّهٌ إلى حامل الكتاب نفسِه، وبقي يُتلى عليه من أتباعه؛ وصاحبُ القلم لا يكتب على نفسه قاعدةَ أدبٍ خالدة
      - لأن أهل الكهف لم يكونوا معروفين عند العرب
      - لأن كلمة غدًا لا تقال في الفصحى
      - لأن قريشًا لم تهتم بالقصة أصلًا
    answer: 0
    why: النهي باقٍ في المصحف يقرؤه أتباعُه عليه في كلّ ختمة؛ ومن يهندس تواضعًا مسرحيًّا يكتب ثناءً باهتًا لا قاعدةَ أدبٍ تلزمه أبدًا.
  - q: بمَ يجيب الدرس عن فرضية «أدرج التوبيخ عمدًا ليكسب المصداقية»؟
    options:
      - التوبيخ الدعائيّ يكون عامًّا لا يمسّ مقتلًا، وهذه عتاباتٌ في قراراتٍ وخصوصياتٍ محرجة، مع احتباس وحيٍ يعذّب صاحبه، ولا شاهد لمثل هذا في تاريخ المؤلفين
      - بأن التوبيخ لم يكن موجّهًا إليه أصلًا
      - بأن الصحابة هم من طلبوا إثبات العتاب
      - بأن العتاب أُضيف إلى المصحف بعد وفاته
    answer: 0
    why: الفرضية تفترض سلوكًا لا نظير له عند من حرّروا نصوصهم عبر التاريخ، وتتجاهل أن أحرج المواضع (كآية الأحزاب) أثبتت عليه ما أخفاه في نفسه.
\`\`\`
`,"../content/lessons/ar/science-and-religion.md":`---
title: العلم والدين
description: 'العلم يجيب عن «كيف» ولا يملك جوابَ «لماذا» ولا «ما القيمة». من أين جاءت أسطورة الصراع، ولماذا كان روّاد العلم مؤمنين، وما الجواب عن «الدين عكّاز نفسيّ»؟'
unit: doubts
order: 10
minutes: 9
emoji: 🔬
tags: [العلم والدين, العلموية, شبهة الأفيون]
---

> **فكرة الدرس:** العلم التجريبيّ أداةُ قياسٍ لا محكمةَ معنى: يصف كيف يعمل الكون، ولا يستطيع بمنهجه نفسِه أن يجيب: لماذا وُجد؟ وما قيمة الإنسان؟ وماذا ينبغي أن أفعل؟ فمن نصّبه حكمًا في غير قضيّته فقد أخطأ في فهم العلم قبل أن يخطئ في الدين.

## سؤالان مختلفان لا خصمان

خذ كوبَ شايٍ يغلي أمامك، واسأل: لماذا يغلي الماء؟

- جوابٌ أول: لأنّ الحرارة رفعت طاقةَ الجزيئات حتى غلب ضغطُ بخارها ضغطَ الجوّ.
- جوابٌ ثانٍ: لأني أريد شايًا.

الجوابان صحيحان معًا، ولا ينافس أحدُهما الآخر؛ لأنهما يجيبان عن سؤالين مختلفين: **الآلية** و**الغاية**. هذا هو موضع العلم والدين على الخريطة: العلم سيّدُ سؤال «كيف»، وأيّ تفسيرٍ دينيّ يزاحمه في قياس ما يُقاس فقد تجاوز؛ وسؤالا «لماذا الوجود؟» و«ماذا ينبغي؟» خارج مختبره بالبناء لا بالمصادفة، إذ لا مجهر يرى «الغاية» ولا ميزان يزن «الخير».

ولهذا كان إعلانُ «العلم أثبت أن لا إله» خطأً منهجيًّا مزدوجًا: نفيًا لما لا يقيسه، بأداةٍ لا تصلح له. بل القضية أعمق: نجاحُ العلم نفسِه ظاهرةٌ تحتاج تفسيرًا: لماذا كان الكون منتظمًا بقوانينَ ثابتةٍ قابلةٍ للاكتشاف، رياضيةِ الصياغة، يفهمها عقلٌ نشأ فيه؟ انتظامُ الكون هو رأسمال العلم الذي لا يستطيع العلم تفسيره، وهو عين ما يتوقّعه من يقول: للكون مقنِّنٌ حكيم؛ وأمّا على القول الآخر فحقيقةٌ تُقبَل بلا تفسير.

## دينٌ يأمر بالمنهج التجريبيّ الأول

ثم إنّ خصومة الإسلام للعلم دعوى يكذّبها نصُّه المؤسِّس قبل تاريخه:

\`\`\`ayah
ref: 10:101
highlight: قل انظروا ماذا في السماوات والأرض
note: 'أمرٌ بالنظر فيما في السماوات والأرض: في شمسها وقمرها واختلاف ليلها ونهارها وجبالها ونباتها، كما فصّل الطبريّ؛ ومرادُه نظرُ الفكر والاعتبار والتأمّل، كما قال السعديّ. فالنظر في الكون مأمورٌ به في هذا الدين لا ممنوعٌ منه، والدعوة موجَّهةٌ إلى العقل والعين معًا.'
\`\`\`

\`\`\`ayah
ref: 3:191
highlight: ويتفكرون في خلق السماوات والأرض
note: 'صفةُ أولي الألباب: ذكرٌ وتفكّرٌ في الخلق معًا؛ قلبٌ يعبد وعقلٌ يبحث، في آيةٍ واحدة. فالنظر في الكون عبادةٌ في هذا الدين لا تهمة.'
\`\`\`

وقد فهم المسلمون الأوائل الأمرَ على ظاهره، فكانت حواضرُهم قرونًا عاصمةَ العلم في الأرض: وضع ابنُ الهيثم في القاهرة منهجَ التجربة في البصريات قبل فرانسيس بيكون بستّة قرون، وفي بغداد ودمشق وقرطبة ازدهر الطبّ والفلك والجبر؛ وكلمةُ «algebra» من «الجبر»، و«algorithm» تحمل اسم الخوارزميّ نفسه. وروّادُ الثورة العلمية في أوروبا (كوبرنيكوس ونيوتن وكبلر وبويل) كانوا مؤمنين بالله يرون في اكتشاف القوانين قراءةً لكتاب الخالق. فأين أسطورة الحرب الأزلية بين العلم والإيمان؟ يقرّر مؤرّخو العلم المعاصرون أنّ «أطروحة الصراع» صياغةٌ متأخّرة من القرن التاسع عشر، لا وصفٌ أمين للتاريخ.

## «لا أصدّق إلا ما يثبته العلم»

\`\`\`doubt
claim: الموقف العقلانيّ الوحيد أن لا تقبل من الدعاوى إلا ما أثبته المنهج التجريبيّ. وكلُّ ما عداه، والدين في مقدّمته، ظنونٌ لا ترقى إلى المعرفة.
answer: |-
  طبّق القاعدة على نفسها: جملة «لا يُقبل إلا ما أثبته المنهج التجريبيّ» ليست نتيجةَ تجربةٍ ولا قياسَ مختبر؛ فهي بمعيارها نفسِه ظنٌّ لا يُقبل. هذا ليس تلاعبًا لفظيًّا، بل كشفٌ لطبيعة الموقف: إنه فلسفةٌ عن العلم لا نتيجةٌ من نتائجه، والعلموية مذهبٌ يتنكّر في ثياب المنهج.
  ثم إنّ صاحب هذه القاعدة نفسَه لا يعيش بها: يصدّق بقوانين المنطق والرياضيات (ولا تجربةَ تثبتها بل كلُّ تجربةٍ تفترضها)، وبوقائع التاريخ (ولا معمل يعيدها)، وبأنّ للظلم قبحًا حقيقيًّا (ولا مجهر يراه)، وبأنّ عقله موثوقٌ في الاستدلال (وهذه مصادرةٌ لا برهان تجريبيّ عليها). فالمعرفة أوسع من المختبر بإقرار الجميع عمليًّا؛ والسؤال الصحيح ليس «هل قِيس؟» بل «هل قام عليه دليلٌ يناسب بابَه؟». وأدلةُ هذا الدليل من هذا الجنس: مقدّماتها مشاهدةٌ تجريبية (كونٌ حادث، وضبطٌ دقيق)، ويأتي في الوحدات القادمة ما هو من جنسها في النصّ المحفوظ والسيرة الموثّقة، واستدلالُها عقليٌّ من جنس ما تقبله في كل قضايا حياتك الكبرى.
\`\`\`

## «الدين عكّازٌ نفسيّ للضعفاء»

\`\`\`doubt
claim: الدين اختراعٌ نفسيّ مريح، أفيونٌ يسكّن به الخائفون من الموت والمقهورون آلامَهم. فوجود الحاجة إليه يفسّر انتشاره بلا حاجةٍ إلى كونه صادقًا.
answer: |-
  أولًا: مصدرُ الفكرة لا يحكم على صحّتها، وهذه مغالطة المنشأ المعروفة. اشتهاؤك للماء لا يجعل الماء وهمًا؛ بل يصلح دليلًا على أنّ للعطش رِيًّا موجودًا. فحتى لو سلّمنا أنّ الإنسان «يحتاج» إلى الله نفسيًّا، فذلك يوافق تفسيرَين لا واحدًا: أن يكون اخترعه، أو أن يكون مفطورًا على معرفته، كما مرّ في درس الفطرة؛ ولا يحسم بين التفسيرين إلا الدليل، وقد مضى.
  ثانيًا: القاعدة نفسُها تقطع في الاتّجاه الآخر أشدَّ ممّا تقطع في هذا. أيُّ العقيدتين أشدُّ راحةً للنفس: أن عليك حسابًا ومسؤوليةً عن كل كلمة، تُبعث بعده فتُسأل، أم أن لا رقيب ولا بعث ولا سؤال، وأنك تفعل ما تشاء ثم تنام أبدًا؟ إن كان مبدأ «العقيدة المريحة متَّهمة» صحيحًا، فالإلحاد أَولى بالتهمة: إنه إعفاءٌ شاملٌ من المحكمة.
  ثالثًا: أفيونٌ عجيبٌ هذا الذي يوقظ متعاطيه قبل الفجر للصلاة، ويحرمه شهواتِه شهرًا كل عام، ويقتطع من ماله حقًّا للفقراء، ويحمّله مسؤوليةَ كل نملةٍ ظلمها. المخدّرات تخفّف التكاليف؛ وهذا الدين يزيدها، ثم يمنح مع التكليف طمأنينةً من جنسٍ آخر: طمأنينةَ من عرف لماذا هو هنا.
\`\`\`

\`\`\`rule
العلم أداةُ «كيف» ولا يملك جوابَ «لماذا» و«ما ينبغي»؛ ونجاحُه نفسُه (كونٌ منتظمٌ قابلٌ للفهم) شاهدٌ للمقنِّن لا عليه. والإسلام يأمر بالنظر نصًّا وقد قاد أهلُه العلم قرونًا. وأمّا «الدين أفيون» فمغالطةُ منشأ تنقلب على قائلها: العقيدة الأكثر راحةً هي التي لا حساب فيها.
\`\`\`

\`\`\`quiz
questions:
  - q: لماذا لا يستطيع العلم التجريبيّ، بمنهجه نفسه، أن ينفي وجود الخالق؟
    options:
      - لأن أدواته تقيس الآليات المادية، وسؤالا الغاية والقيمة خارج مجال القياس بالبناء لا بالمصادفة
      - لأن الأجهزة الحالية ضعيفة وستتطور مستقبلًا فتحسم المسألة
      - لأن العلماء يتواطؤون على إخفاء الأدلة
      - لأن العلم ينفيه فعلًا لكنّ الناس يرفضون النتيجة
    answer: 0
    why: لا مجهر يرى «الغاية» ولا ميزان يزن «الخير»؛ فنفيُ ما لا يُقاس بأداة القياس خطأ في فهم الأداة قبل كل شيء.
  - q: كيف تنقض قاعدةُ «لا أقبل إلا ما أثبته المنهج التجريبيّ» نفسَها؟
    options:
      - لأن القاعدة ذاتها ليست نتيجة تجربة، فهي بمعيارها ظنٌّ مرفوض، وهي فلسفة عن العلم لا نتيجة من نتائجه
      - لأن التجارب المخبرية كثيرة الأخطاء
      - لأن أغلب الناس لا يفهمون العلم
      - لأن المنهج التجريبيّ اختراع حديث
    answer: 0
    why: صاحبها نفسه يعيش بمعارفَ غير مخبرية (المنطق والرياضيات والتاريخ والأخلاق وموثوقية عقله)، فالمعرفة أوسع من المختبر باعتراف سلوكه هو.
  - q: بمَ يجيب الدرس عن شبهة «الدين أفيون يسكّن به الخائفون آلامهم»؟
    options:
      - مصدر الفكرة لا يحكم على صحتها، والعقيدة الأكثر راحةً هي التي لا حساب فيها، ودينٌ يكلّف الفجر والصيام والزكاة أفيونٌ عجيب
      - بأن الراحة النفسية دليل صدقٍ قاطع بذاتها
      - بأن المتدينين لا يشعرون براحة أصلًا
      - بأن الشبهة حديثة العهد فلا تستحق جوابًا
    answer: 0
    why: 'الحجّة مغالطةُ منشأ، ثم هي تنقلب: إعفاءُ النفس من الحساب أشدُّ إراحةً من تحميلها إياه؛ والدين يزيد التكاليف لا يخففها.'
\`\`\`
`,"../content/lessons/ar/the-challenge.md":`---
title: التحدّي القائم
description: 'كتابٌ يتحدّى خصومه أن يأتوا بمثله، ثم يخفّض المطلوب إلى سورةٍ واحدة، ويجزم أنهم لن يفعلوا أبدًا. فماذا فعل أفصحُ جيلٍ في أفصح لغة؟'
unit: quran
order: 25
minutes: 9
emoji: 🎯
tags: [التحدي, الإعجاز, بلاغة العرب]
---

> **فكرة الدرس:** ما من كتابٍ في التاريخ تحدّى خصومه أن يأتوا بمثله، ثم نزل بالمطلوب حتى سورةٍ واحدة، وجزم أنهم لن يفعلوا أبدًا. وقد وُجّه هذا التحدّي إلى أفصح أمّةٍ في أوج فصاحتها، فاختارت الحربَ على تأليف فقرة، وذلك الاختيار نفسه هو الجواب التاريخيّ.

## تحدٍّ ينزل درجةً درجة

القرآن لا يقول لمنكريه "صدّقوني" فحسب؛ بل يضع في أيديهم طريقةَ تكذيبه. ففي سورة الطور، السورةِ نفسِها التي قرأتَ آيتها في درس "أم خُلقوا من غير شيء؟"، طالَب من زعموا أنه مُفتعَلٌ أن يأتوا بكلامٍ مثله (الطور 34). والتحدّي في الكتاب سلَّمٌ من درجاتٍ متنازلة. أوسعُها صيغةً:

\`\`\`ayah
ref: 17:88
highlight: لا يأتون بمثله
note: 'أوسع صيغ التحدّي: الإنس والجنّ جميعًا، متعاونين، عاجزون. ولاحظ أنها دعوى قابلة للنقض من حيث المبدأ: يكفي أن ينجح واحد.'
\`\`\`

ثم نزل المطلوب إلى عشر سورٍ فقط، وسقط حتى شرطُ صدق المضمون:

\`\`\`ayah
ref: 11:13
highlight: بعشر سور
note: 'مفتريات أي مختلَقات المضمون: المطلوب مجاراةُ النظم والبيان وحدهما، ولو بأخبارٍ موضوعة، مع الإذن بالاستعانة بمن شاؤوا.'
\`\`\`

ثم استقرّ التحدّي عند أدنى حدٍّ يُتصوَّر، وهو سورةٌ واحدة (يونس 38، ثم في المدينة):

\`\`\`ayah
ref: 2:23
highlight: فأتوا بسورة من مثله
note: 'الخطاب هنا لكلّ مرتابٍ إلى يوم القيامة، لا لقريشٍ وحدها. وأقصر سور القرآن ثلاثُ آياتٍ في نحو عشر كلمات، وهذا هو الحدّ الأدنى المطلوب.'
\`\`\`

ثم جاءت الجملة التي لا يجرؤ عليها مؤلّفٌ بشريّ:

\`\`\`ayah
ref: 2:24
highlight: ولن تفعلوا
note: 'لم يقل "فإن عجزتم اليوم"؛ بل جزم بالمستقبل كلّه. جملةٌ تراهن على كلّ قرنٍ قادم، ولو أُجيب التحدّي مرّةً واحدةً لانهدم بها الكتابُ الذي تحملها.'
\`\`\`

الكاتب البشريّ يحوّط لنفسه ويترك بابًا للتراجع. وهذا النصّ يحرق سفنه عمدًا، ويكتب شرطَ نقضه في متنه.

## لمن وُجّه التحدّي؟

لم يوجَّه هذا إلى قومٍ لا شأن لهم بالكلام. كانت العرب أمّةَ اللسان: تتفاخر القبائل بشعرائها كما تتفاخر الأمم اليوم بجيوشها، وتُعقد للفصاحة أسواقٌ موسميّة (كسوق عُكاظ) يتحاكم إليها الشعراء، وبلغ من تعظيمهم عيونَ قصائدهم أن سمّوها "المعلَّقات"، وكانت القصيدةُ الواحدة ترفع قبيلةً وتضع أخرى. اللغة كانت عملتَهم وميدانَ شرفهم.

وكان عندهم كلُّ دافعٍ إلى الجواب: آلهتُهم تُسفَّه كلَّ يوم، ومكانةُ مكّة الدينيّة (وما يتبعها من موسمٍ وتجارة) على المحكّ، وكبرياءُ ساداتهم يُجرح جهارًا. وكان الردُّ في متناولهم لو كان ممكنًا: فقرةٌ واحدة تنهي الدعوة كلَّها، بلا دمٍ ولا مالٍ ولا حصار.

فماذا فعلوا؟ القرآن نفسه سجّل خطّتهم:

\`\`\`ayah
ref: 41:26
highlight: والغوا فيه
note: 'وصيّةُ قومٍ أعيتهم المعارضة: لا تستمعوا له، وأغرِقوه بالضجيج. من يقدر على الإتيان بمثل كلامٍ لا يوصي قومَه بالتشويش عليه.'
\`\`\`

ثم جرّبوا الاتّهام (شاعر، ساحر، مجنون؛ تُهَمٌ يهدم بعضُها بعضًا)، ثم حاصروا بني هاشم في الشِّعب ثلاثَ سنين، ثم كان التعذيبُ والسيفُ في بدرٍ وأُحد. وكلُّ واحدةٍ من هذه أغلى ألفَ مرّةٍ من تأليف سورةٍ قصيرة. أمّةُ الفصاحة، بأقصى دوافعها، اختارت أغلى الحلول كلِّها وتركت أرخصَها؛ ولا يفعل ذلك عاقلٌ يملك الأرخص. اختيارُ الحرب على التأليف هو جوابُهم، مسجَّلًا في التاريخ.

## معجزةٌ لا تنتهي صلاحيّتها

\`\`\`hadith
text: 'ما مِن الأنبياءِ نبيٌّ إلّا أُعطيَ ما مثلُه آمَن عليه البشرُ، وإنّما كان الذي أوتيتُ وحيًا أوحاه اللهُ إليَّ، فأرجو أن أكونَ أكثرَهم تابعًا يومَ القيامة.'
source: 'صحيح البخاري (٤٩٨١)'
url: 'https://sunnah.com/bukhari:4981'
note: 'معجزات الأنبياء السابقين شاهدها جيلُها ثم صارت خبرًا يُروى. ومعجزةُ هذا النبيّ ﷺ الباقيةُ هي الوحيُ نفسُه: نصٌّ باقٍ بين يديك تختبره الساعة. وله ﷺ آياتٌ أخرى ثابتة، لكنها انقضت بزمانها كما انقضت آياتُ من قبله، وبقيت هذه.'
\`\`\`

ولهذا فالتحدّي بلا تاريخِ انتهاء. العربيّةُ لغةٌ حيّة يتقنها مئاتُ الملايين، وفيهم أدباء ونقّاد غير مسلمين، وإسقاطُ الإسلام بفقرةٍ واحدة أكبرُ جائزةٍ في تاريخ الجدل الدينيّ كلّه. ومع ذلك، فالنتيجة واحدةٌ منذ أربعة عشر قرنًا. وليست الدعوى أنّ أحدًا لم يحاول: حاول مسيلمة في زمن النبوّة نفسِه، وأسجاعُه محفوظةٌ في كتب التاريخ. ونُقلت محاولاتٌ متأخّرة، والنقلُ نفسُه مختلَفٌ فيه: فما نُسب إلى ابن المقفّع شكّك فيه الباقلانيّ نفسُه وقال إنه لا يُعرف له كتابٌ في ذلك. وطُبع سنة ١٩٩٩ كتابٌ سُمّي «الفرقان الحقّ» أُعلن أنه جوابُ التحدّي. الدعوى أنّ هذه المحاولات عُرضت على أهل اللسان، مسلمِهم وغيرِ مسلمِهم، فلم يقم لواحدةٍ منها سوق. والحكم هنا ليس حكمَنا وحدنا: المحاولات مطبوعة، فاقرأها. هذه ليست حكايةً قديمة تُروى؛ إنها تجربةٌ ما زالت تجري أمامك.

\`\`\`doubt
claim: الجمال ذوقٌ شخصيّ. قرأتُ القرآن مترجمًا فلم أجد فيه ما يُبهر، وحجّةٌ مبنيّة على البلاغة لا تُلزم من لا يشعر بها.
answer: |-
  اعتراضٌ في محلّه لو كان الدليل هو ذوقَك أنت. لكنّ التحدّي وُجّه بالعربيّة إلى أساتذة العربيّة، والترجمة تنقل المعاني وتُسقط النظمَ نفسَه الذي وقع عليه التحدّي؛ كما أنّ قراءة ملخّصٍ نثريّ لسيمفونيّة ليست سماعَ السيمفونيّة، ولا يصحّ الحكم عليها به.
  ثم إنّ الحجّة التاريخيّة لا تمرّ على ذوقك أصلًا، لأنها واقعةُ سلوك: أعدى أعداء هذا الكتاب كانوا أقدرَ الناس على لغته وأحوجَهم إلى نقضه، فاختاروا الحصار والحرب على تأليف فقرة. قد لا تعرف قراءة تدوين الشطرنج، فإذا رأيت كبار الأساتذة كلَّهم يستسلمون أمام نقلةٍ واحدة، علمتَ عنها شيئًا موضوعيًّا لا يتوقّف على ذوقك.
  وإن أردت الفحص المباشر فبابه مفتوح، وهو تعلُّمُ العربيّة، وقد دخله قبلك كثيرون.
\`\`\`

\`\`\`rule
التحدّي القرآنيّ نزل درجةً درجة حتى سورةٍ واحدة، ووُجّه إلى أفصح جيلٍ في أفصح لغة، وكانت لهم كلُّ الدوافع، فكان جوابُهم الضجيجَ والحصارَ والسيف، وكلُّها أغلى من الفقرة التي لم يكتبوها. ولأنّ المعجزة نصٌّ باقٍ لا حدثٌ مضى، فالتحدّي قائمٌ إلى اليوم، وصمتُ أربعة عشر قرنًا جزءٌ من الدليل.
\`\`\`

\`\`\`quiz
questions:
  - q: لماذا يَعدّ هذا الدرس اختيارَ قريشٍ الحربَ جوابًا تاريخيًّا للتحدّي؟
    options:
      - لأنهم تركوا أرخص الحلول وأيسرَها (فقرة تنهي الدعوة) إلى أغلاها، ولا يفعل ذلك من يملك الأرخص
      - لأن الحرب كانت عادتهم في كل خلاف فلا دلالة لها
      - لأنهم لم يفهموا المطلوب من التحدي
      - لأنهم لم يهتمّوا بأمر القرآن أصلًا
    answer: 0
    why: أمةٌ تحترف الكلام، ومعها كل الدوافع، لا تختار الحصار والسيف وتترك تأليف سورةٍ قصيرة إلا إذا كان التأليف فوق طاقتها.
  - q: ما وجه الغرابة في جزم الآية بأنهم لن يفعلوا أبدًا، لو كان الكاتب بشرًا؟
    ref: 2:24
    word: ولن تفعلوا
    options:
      - أنه رهانٌ على المستقبل كلّه تنقضه فقرةٌ واحدة في أي قرن، والمؤلف البشري يحوّط لنفسه ولا يراهن هذا الرهان
      - أنه تهديدٌ شديد اللهجة للمخالفين
      - أنه ورد في أوائل المصحف قبل عرض الأدلة
      - أنه موجَّه إلى قريش وحدها دون غيرها
    answer: 0
    why: جملةٌ واحدة كتبت شرطَ نقض الكتاب في متنه، وبقيت صادقةً أربعة عشر قرنًا؛ وهذا عكس احتياط المؤلفين تمامًا.
  - q: بمَ يجيب الدرس من قال إنّ البلاغة ذوقيّة وإنه لم يجد الإعجاز في الترجمة؟
    options:
      - التحدّي بالعربية لأهلها والترجمة تُسقط موضعَ التحدّي نفسَه، وسلوكُ أقدر الخصوم واقعةٌ تاريخية لا تتوقف على ذوق أحد
      - الترجمة الجيدة تنقل الإعجاز كاملًا فالخلل في المترجمين
      - الذوق الشخصي حجةٌ كافية في الإثبات والنفي معًا
      - غير العربي غير مخاطبٍ بالقرآن أصلًا
    answer: 0
    why: ملخّصٌ نثري لسيمفونية ليس سماعَها، وعجزُ أعدى الخصوم وأقدرِهم على اللغة معطًى موضوعي يبقى قائمًا مهما كان ذوق القارئ.
\`\`\`
`,"../content/lessons/ar/universe-began.md":`---
title: كونٌ له بداية
description: 'التمدّد يشير إلى الوراء، والطاقة الصالحة تنفد، وعلم الكون يقول إن للكون عمرًا محدودًا. وما بدأ لا يفسّر نفسه.'
unit: creator
order: 4
minutes: 8
emoji: ⏳
tags: [بداية الكون, برهان الحدوث, التسلسل اللانهائي]
---

> **فكرة الدرس:** أثبت الدرس السابق أن الحادث لا بدّ له من مُحدِث. هذا الدرس يثبت المقدّمة الثانية: الكون نفسُه حادث، أي له بداية، والنتيجة تلزم من المقدّمتين لزومًا.

## هل كان الكون هنا دائمًا؟

كان جوابُ «الكون أزليٌّ لا بداية له» هو المهربَ التقليديّ من سؤال الخالق: ما لا بداية له لا يُسأل عمّن بدأه. لكنّ القرن الماضي أغلق هذا المهرب من جهةٍ غير متوقَّعة: المراصد.

- **التمدّد.** منذ عشرينيات القرن العشرين والقياسات تُظهر أن المجرّات تتباعد: الكون يتمدّد. أرجِع شريط التمدّد إلى الوراء تصل إلى حالةٍ أولى فائقة الكثافة والحرارة يبدأ عندها الزمان والمكان اللذان نعرفهما. هذا هو النموذج القياسيّ في علم الكون اليوم، لا رأي خصومه، وعمر الكون فيه محدود: نحو 13.8 مليار سنة.
- **ونفاد الطاقة الصالحة.** القانون الثاني في الديناميكا الحرارية: الطاقة القابلة للاستعمال تتناقص في الكون باطّراد، كساعةٍ ملفوفةٍ تنحلّ. فلو كان وراءنا ماضٍ لا نهائيّ، لانحلّت الساعة منذ أمدٍ لا نهائيّ: لانطفأت النجوم كلُّها وتساوت الحرارة في كل مكان. لكنّ الشمس ما زالت تشتعل. ساعةٌ ما زالت تدقّ شاهدةٌ بأنها مُلئت يومًا. وهذه حجّةٌ عقليّة مساندة لا رصدٌ مستقلّ، ولها منازعون من الفيزيائيين يقولون إنّ سقف الإنتروبيا يرتفع مع تمدّد الكون فلا يلزم بلوغُ التوازن؛ فنسوقها شاهدًا يشدّ الدليل لا ركنًا يقوم عليه.

والإنصاف يقتضي التنبيه: العلم هنا يصف الحدث ولا يسمّي مُحدِثه، وهذا ليس نقصًا في حجّتنا بل هو حدُّ أدواته. الذي يقدّمه الرصد هو المقدّمة، وهي أن للكون بداية؛ أما ما يلزم عن هذه المقدّمة فشأن العقل، وإليه ننتقل.

## وما بدأ لا يبدأ نفسه

طبّق الآن قسمة الدرس السابق على الكون كلّه، وقد ثبت أنه حادث: لم يخرج من العدم المطلق، لأن اللاشيء لا يعطي شيئًا. ولم يُوجِد نفسه، لأن الموجِد يسبق ما يوجِده والشيء لا يسبق نفسه. فلا بدّ له من مُوجِدٍ من ورائه: موجِدٍ ليس جزءًا من الكون ولا خاضعًا لزمانه، إذ الزمان نفسه ممّا بدأ.

\`\`\`ayah
ref: 2:117
highlight: بديع السماوات والأرض
note: 'البديع هو الذي أنشأ الشيء لا من أصلٍ سابق ولا على مثالٍ سبق. والآية تصف أمره بأنه لا يحتاج مادّةً خامًا ولا زمنَ معالجة: كن فيكون.'
\`\`\`

\`\`\`ayah
ref: 40:57
highlight: لخلق السماوات والأرض أكبر من خلق الناس
note: 'سيقت الآية في محاجّة منكري البعث: من خلق الكونَ الهائل ابتداءً لا يعجزه ما دونه. والشاهد هنا أنها تحيل العقل إلى خلق السماوات والأرض بوصفه أعظمَ واقعةٍ تطالبك بتفسير.'
\`\`\`

## وسلسلة الأسباب لا تمتدّ بلا أوّل

قد يقول قائل: ما المانع أن يكون سببُ الكون كونًا قبله، وسببُ ذاك كونًا قبله، وهكذا إلى غير نهاية، فلا نحتاج أولًا؟

تخيّل جنديًّا لا يُطلق النار حتى يستأذن الذي خلفه، والذي خلفه لا يأذن حتى يستأذن الذي خلفه، وهكذا في سلسلةٍ لا آخر لها. هل تنطلق رصاصةٌ واحدة؟ أبدًا؛ فكلُّ واحدٍ في السلسلة منتظِر، وسلسلة المنتظرين لا تُطلق شيئًا مهما طالت؛ بل كلّما طالت ازداد الإطلاق بُعدًا. فإن سمعتَ طلقةً، علمتَ يقينًا أن السلسلة انتهت إلى آمرٍ لا ينتظر إذنًا من أحد.

وجودُك هو الطلقة التي انطلقت فعلًا. فكلُّ حلقةٍ في سلسلة الأسباب تستعير الوجود ممّن قبلها، وسلسلة المستعيرين، طالت أم قصرت، لا تُنشئ ما تستعيره. لا بدّ من مصدرٍ أوّل يملِك الوجود ولا يستعيره.

\`\`\`doubt
claim: الانفجار العظيم ليس بالضرورة بدايةً مطلقة. ربما كوننا حلقةٌ في سلسلة أكوانٍ لا أوّل لها، أو نشأ من حالةٍ سابقة تصفها فيزياءُ لم تكتمل بعد، فمن المبكّر البناء على «بداية».
answer: |-
  هذا احتمالٌ تناقشه الفيزياء بجدّية، فلنأخذه بجدّية. أولًا: هو فرضيةٌ لا رصدَ يؤيّدها، بينما البداية هي القراءة المباشرة للأدلّة القائمة، فالمقارنة ليست بين قراءتين متكافئتين.
  ثانيًا: المبرهنات الحديثة نفسُها تضيق الخناق عليه. مبرهنة بورد وغوث وفيلينكين تُثبت أنّ أيّ زمكانٍ متمدّدٍ في المتوسّط غيرُ تامٍّ في اتّجاه الماضي، أي أنّ وصف حدّه الماضي يحتاج، بعبارة البحث نفسِه، فيزياءَ أخرى غير التضخّم. وبنى فيلينكين على ذلك أنّ السيناريوهات المطروحة لماضٍ أزليّ، ومنها الأكوان المتعاقبة، لا يقوم لها ماضٍ بلا بداية. وليست هذه قراءةً مجمَعًا عليها: من الفيزيائيين من يقرأ نتيجة المبرهنة قراءةً أضيق، ومنهم غوث نفسُه وهو أحد أصحابها. والمقصود أنّ الهروب إلى ماضٍ لا نهائيّ ليس مخرجًا سهلًا كما يُظنّ، لا أنّ المسألة أُغلقت. وثمّة محاولاتٌ نظرية منشورة للالتفاف على شروطها، أشار غوث نفسُه إلى إحداها، ولم يُرصَد لواحدةٍ منها أثر.
  وثالثًا وهو الأهمّ: تطويل السلسلة ليس تفسيرًا لها. أضِف قبل كوننا كونًا، وقبله ألفًا؛ فسلسلةُ الجنود التي رأيتَها لا تُطلق رصاصةً بإضافة جنود. السؤال لا يسقط بكثرة الوسائط، بل يزداد إلحاحًا.
\`\`\`

\`\`\`rule
كلُّ ما بدأ فله مُحدِث، والكون بدأ، بشهادة التمدّد والنموذج الكونيّ القياسيّ، ويشدّ ذلك ما تقتضيه حجّةُ نفاد الطاقة الصالحة، فللكون مُحدِث. وسلسلة المحدِثين لا تمتدّ بلا أوّل، فلا بدّ من أوّلٍ ليس مسبوقًا بشيء. مَن هذا الأوّل، ولماذا لا يُسأل «مَن أحدثه»؟ ذلك موضوع الدرس الأخير في هذه الوحدة.
\`\`\`

\`\`\`note
لا يبني هذا الدرس على قراءةٍ علميةٍ مخصوصة لآية، ولا يدّعي أن القرآن «سبق» إلى نظرية بعينها. الآيتان هنا تقرّران معنًى كليًّا (الإبداع على غير مثال، وعِظَم خلق السماوات والأرض)، والحجّة قائمةٌ بالعقل، والرصدُ شاهدٌ على مقدّمتها.
\`\`\`

\`\`\`quiz
questions:
  - q: لماذا يرجّح علم الكون الحديث أن للكون بداية؟
    options:
      - لأن التمدّد يشير رجوعًا إلى حالةٍ أولى، ولأن الطاقة الصالحة تتناقص ولو كان الماضي بلا بداية لنفدت منذ أمدٍ لا نهائيّ
      - لأن التلسكوبات صوّرت لحظة الخلق مباشرة
      - لأن الفلاسفة صوّتوا على ذلك في مؤتمر علميّ
      - لأن الكون صغيرٌ فلا يمكن أن يكون قديمًا
    answer: 0
    why: التمدّد شاهدُ علم الكون على ماضٍ محدود، وهو النموذج القياسيّ اليوم؛ وحجّةُ نفاد الطاقة الصالحة حجّةٌ عقليّة تشدّه ولا تقوم مقامه.
  - q: ما وجه الاستدلال بمثال الجنود المنتظرين للإذن؟
    options:
      - سلسلة الوسائط المفتقرة لا تُنتج شيئًا مهما طالت، فوقوع الفعل دليلٌ على أوّلٍ غير مفتقر
      - أن الجيوش تحتاج إلى قيادةٍ حكيمة
      - أن الأحداث الكبيرة تحتاج زمنًا طويلًا
      - أن الإذن المتأخّر يفسد التنفيذ
    answer: 0
    why: كلّ حلقةٍ منتظرةٌ مستعيرة، وكثرة المنتظرين لا تصنع إطلاقًا، فوجود الفعل (وجودك) يثبت أن السلسلة انتهت إلى أوّلٍ يملك ولا يستعير.
  - q: كيف يتعامل الدرس مع فرضية الأكوان المتعاقبة التي لا أوّل لها؟
    options:
      - فرضيةٌ بلا رصد، وتضيق عليها مبرهنات التمدّد، وتطويل السلسلة لا يفسّرها أصلًا
      - يرفضها لأنها تخالف ظاهر النصوص فقط
      - يقبلها لأنها تحلّ مشكلة البداية نهائيًّا
      - يعدّها مستحيلة رياضيًّا بإجماع الفيزيائيين
    answer: 0
    why: الدرس يجيب من داخل العلم (لا رصد، ومبرهنة بورد-غوث-فيلينكين) ومن العقل (نقل السؤال ليس جوابًا عنه)، لا بمجرّد الاستنكار.
\`\`\`
`,"../content/lessons/ar/what-did-he-gain.md":`---
title: ماذا كسب منها؟
description: 'الكاذب الكبير يطلب ثمنًا: مالًا أو مُلكًا أو جاهًا. عُرضت عليه الثلاثة فردَّها، ومات ودرعه مرهونةٌ عند يهوديٍّ في ثلاثين صاعًا من شعير.'
unit: muhammad
order: 21
minutes: 8
emoji: 🪙
tags: [اختبار الدافع, الزهد, سيرة]
---

> **فكرة الدرس:** من يخترع دينًا يقبض ثمنه في مكانٍ ما: مالًا أو عرشًا أو مجدًا. فتّش في حياة هذا الرجل عن الثمن، وواصل التفتيش حتى نهاية عمره: لن تجده.

## اختبار الدافع

الاختبار الثاني الذي نطبّقه على كلّ مدّعٍ: **لمصلحة من؟** الدجّالون في كلّ عصرٍ يتشابهون؛ تبدأ الدعوى ويبدأ معها التحصيل: ثرواتٌ تُجمع، وسلطةٌ تُبنى، وحاشيةٌ تنتفخ، وقصورٌ تعلو. فإن وجدنا رجلًا تزداد دعوتُه انتشارًا وتزداد حياتُه تقشّفًا، فنحن أمام لغزٍ يحتاج تفسيرًا.

والقرآن يضع هذا الاختبار بنفسه على لسان النبيّ ﷺ:

\`\`\`ayah
ref: 38:86
highlight: عليه من أجر
note: 'لا أطلب على تبليغ هذا القرآن أجرًا منكم، ولستُ ممّن يتصنّع ويدّعي ما ليس له. الآية مكيّة: قيلت في سنوات الاستضعاف، وبقيت صادقةً في سنوات التمكين.'
\`\`\`

\`\`\`ayah
ref: 34:47
highlight: ما سألتكم من أجر فهو لكم
note: 'أبلغُ من نفي الأجر: إن كنتُ سألتكم شيئًا يومًا فخذوه واسترجعوه. ذمّةٌ مفتوحة أمام قومٍ خصوم، ولم يتقدّم أحدٌ منهم بمطالبة.'
\`\`\`

## العرض الذي رفضه

لم يكن الثمن بعيد المنال حتى نقول إنه زهد فيما لا يقدر عليه. تذكر كتب السيرة (كسيرة ابن هشام) أنّ قريشًا أرسلت إليه عتبةَ بن ربيعة، من ساداتها، بعرضٍ صريح: إن كان يريد مالًا جمعوا له حتى يكون أكثرهم مالًا، وإن كان يريد شرفًا سوّدوه عليهم، وإن كان يريد مُلكًا ملّكوه، بشرطٍ واحد: أن يكفّ عمّا يقول. وهذا خبرُ سيرةٍ لا حديثٌ في الصحيحين: إسنادُ ابن إسحاق له مرسَل، وله طريقٌ آخر متّصل عن جابر بن عبد الله رضي الله عنه أخرجه ابن أبي شيبة في المصنَّف، و[صحّحه الألباني في صحيح السيرة النبويّة](https://islamqa.info/ar/answers/249967)، وفي إسناده راوٍ مختلَفٌ فيه.

هذه صفقة الكاذب المثاليّة: الثمن كاملًا، مقدَّمًا، بلا حرب ولا خطر. فمن كانت دعوته وسيلةً إلى المال أو الملك أخذ الصفقة وانتهى الأمر؛ فقد بلغ الغاية وسقطت الوسيلة. لكنه ردّ العرض وتلا على عتبة قرآنًا، وبقي على دعوته وبقيت عليه المقاطعة والحصار والهجرة والحرب.

## أين ذهب الثمن إذًا؟ انظر إلى آخر يومٍ في حياته

هَب المؤرّخين بالغوا في قصّة عتبة. عندنا ما هو أصلب: حالُه الماديّة الموثّقة في أصحّ كتب الحديث، **في ذروة تمكينه**: حاكمًا للجزيرة، تدين له القبائل، ويكاتب الملوك:

\`\`\`hadith
text: 'عن عائشة رضي الله عنها قالت: تُوفِّي رسولُ الله ﷺ ودِرعُه مرهونةٌ عند يهوديٍّ بثلاثين صاعًا من شعير.'
source: 'صحيح البخاري (٢٩١٦)'
url: 'https://sunnah.com/bukhari:2916'
note: 'الدرع أثمن عُدّة المحارب، والصاع مكيال حبوب. مات ﷺ ودرعه مرهونةٌ في طعامٍ لأهله؛ هذه تَرِكة «ملك الجزيرة».'
\`\`\`

\`\`\`hadith
text: 'عن عروة عن عائشة أنها قالت لعروة: ابنَ أختي، إنْ كنّا لَننظر إلى الهلال ثلاثةَ أهلّةٍ في شهرين وما أُوقِدت في أبيات رسول الله ﷺ نار. فقلت: ما كان يُعيشكم؟ قالت: الأسودان، التمرُ والماء، إلا أنه قد كان لرسول الله ﷺ جيرانٌ من الأنصار كان لهم منائح، وكانوا يمنحون رسولَ الله ﷺ من أبياتهم فيسقيناه.'
source: 'صحيح البخاري (٦٤٥٩)'
url: 'https://sunnah.com/bukhari:6459'
note: 'شهران متتابعان لا يُطبخ في بيوته شيء؛ عيشهم تمرٌ وماء، ولبنٌ يهديه الجيران. هذا بيت الرجل الذي بيده الجزيرة كلّها.'
\`\`\`

لو كان الدين تجارةً، فأين البضاعة؟ رفض الثمن حين عُرض، ولم يقبضه حين قدر عليه، ولم يورّثه حين مات. المعادلة لا تستقيم إلا بجوابٍ واحد: لم تكن تجارة.

## «ليس كلّ ثمنٍ مالًا»

\`\`\`doubt
claim: الدوافع لا تنحصر في المال. لعلّه أراد السلطةَ ذاتها، أو المجد، أو أن يُعبَد اسمُه، وهذه لذّاتٌ يشبع بها صاحبها ولو عاش على التمر والماء.
answer: |-
  هذا أقوى ما يقال هنا، فلنمتحنه بسلوك طلّاب المجد المعروف: يتلقّبون بالألقاب، ويطلبون التقديس، ويؤسّسون لعقبهم. وسجلّه المصحَّح عكس ذلك بندًا بندًا. طالبُ السلطة كانت أمامه طريقٌ مختصرة: عرضُ قريش نفسُه كان سيادةً ومُلكًا نقدًا؛ فرفضه واختار ثلاث عشرة سنةً من الاستضعاف والحصار والحجارة في الطائف، وهي سنواتٌ لم يكن فيها أيُّ أفقٍ دنيويّ للنصر. وطالبُ التقديس لا يقول ما صحّ عنه: «لا تُطروني كما أطرَت النصارى ابنَ مريم، فإنما أنا عبده، فقولوا: عبدُ الله ورسولُه» (البخاري ٣٤٤٥): رجلٌ يملك القلوب والسيوف، وينهى الناس عن الغلوّ في مدحه.
  ثم إنّ فرضيّة «أراد المجد» تفترض أنه كان يعلم أنّ الدعوة ستنجح. في مكّة نحو سنة ٦١٣م لم يكن في الحساب البشريّ إلا الوجه الآخر: عداوة قومه وضياع مكانته التي كانت محفوظةً له أصلًا؛ فقد كان وجيهًا أمينًا محبوبًا قبل الدعوة. لقد خسر بالدعوى عين ما يطلبه طالبُ الجاه.
\`\`\`

\`\`\`rule
كلّ فرضيّات الاختلاق تفترض عائدًا. المال؟ مات ودرعه مرهونة في شعير. المُلك؟ رُدَّ عليه معروضًا بلا قتال. الجاه؟ نهى عن إطرائه ولُقِّب عبدًا بأمره. من قال «اخترع دينًا» فعليه سؤالٌ لن يفلت منه: ماذا كسب منها؟
\`\`\`

\`\`\`tip
اجمع الدرسين الأوّلَين: لا سوابقَ كذبٍ في أربعين سنة، ولا عائدَ في ثلاثٍ وعشرين. فرضيّة «الكاذب» تحتاج كاذبًا بلا تاريخٍ في الكذب وبلا ثمرةٍ منه، فأيّ كاذبٍ هذا؟
\`\`\`

\`\`\`quiz
questions:
  - q: ما وجه الاستدلال بموته ﷺ ودرعُه مرهونةٌ عند يهوديٍّ في ثلاثين صاعًا من شعير؟
    options:
      - أنه في ذروة سلطانه لم يجمع من دعوته مالًا، فسقطت فرضيّة الدافع الماليّ
      - أن الرهن كان محرَّمًا فخالف شريعته
      - أنه كان يكره الدروع والسلاح
      - أن اليهود كانوا أغنى أهل المدينة بلا منازع
    answer: 0
    why: الحاكم الذي تدين له الجزيرة مات مدينًا في طعام أهله؛ وهذا نقيض سلوك من جعل الدعوة سُلَّمًا إلى الثروة.
  - q: لماذا يُعدّ عرض قريش عليه المالَ والمُلكَ حجّةً في اختبار الدافع؟
    options:
      - لأنه وضع الثمن الكامل بين يديه بلا حربٍ ولا خطر، فلو كانت الدعوة وسيلةً إليه لقبله وانتهى الأمر
      - لأن قريشًا كانت أفقر من أن تفي بوعدها
      - لأن العرض جاء بعد فتح مكة حين لم يعد يحتاجه
      - لأن العرض كان سرًّا لا يعلمه أحد
    answer: 0
    why: بلوغ الغاية يُسقط الوسيلة؛ فمن أخذ الثمن كفّ عن الدعوى. رفضُ الثمن واختيارُ سنوات الاستضعاف دليل أن الدعوى لم تكن وسيلة.
  - q: كيف يجيب الدرس عن شبهة «لعلّه طلب المجد والتقديس لا المال»؟
    options:
      - 'بسلوكه الموثَّق: نهى عن إطرائه وأمر أن يقال عبد الله ورسوله، ورفض السيادة معروضةً واختار سنوات الاستضعاف'
      - بأن المجد لا يخطر على بال العرب أصلًا
      - بأن التقديس لم يكن ممكنًا في ذلك العصر
      - بأن طلب المجد ليس عيبًا فلا يحتاج جوابًا
    answer: 0
    why: طالب المجد يتلقّب ويطلب الغلوّ ويؤسّس لعقبه، وسجلّه الصحيح عكس ذلك كلّه؛ وقد خسر بالدعوة وجاهته المضمونة أصلًا قبلها.
\`\`\`
`,"../content/lessons/ar/who-created-god.md":`---
title: فمن خلق الله؟
description: 'أشهر سؤالٍ يظنّه صاحبه مُفحِمًا، وجوابه في تحديد مجال القاعدة نفسها؛ ونبيٌّ أخبر قبل أربعة عشر قرنًا أنّ الناس سيبلغون هذا السؤال بعينه، وعلّم جوابه.'
unit: creator
order: 6
minutes: 8
emoji: 🔁
tags: [التسلسل, الأول, شبهة من خلق الخالق]
---

> **فكرة الدرس:** قاعدة «لكلّ شيءٍ سبب» ليست عن كل موجود، بل عن كل **حادثٍ وُجد بعد أن لم يكن**. والبرهان في الدروس الماضية انتهى إلى موجودٍ أوّلَ لا بداية له؛ فسؤال «من أوجد من لا بداية له؟» ليس عميقًا، بل هو خطأ في فهم القاعدة التي انطلق منها.

## سؤالٌ مشهور، فلنأخذه بجدّ

يقول السائل: «تقولون إن لكل شيء خالقًا، ثم تقفون عند الله. فمن خلق الله؟ وإن جاز أن يوجد شيءٌ بلا خالق، فلماذا لا يكون الكونَ نفسَه؟». وهو سؤالٌ وجيه الظاهر، ويستحق جوابًا يأخذه بجدّ لا تهرّبًا.

والجواب يبدأ من تصحيح المقدّمة: ما قلنا قطّ إن «لكل موجودٍ خالقًا». القاعدة التي قامت عليها دروس هذه الوحدة أدقّ من ذلك: **كلّ ما حدث بعد عدمٍ فلا بدّ له من مُحدِث**. الحادثُ هو الذي يفتقر إلى سببٍ يرجّح وجودَه على عدمه؛ أمّا موجودٌ لم يزل، لا بداية له أصلًا، فليس في حقّه لحظةُ «ترجيح» يُسأل عنها. فالسؤال «من أحدث من لم يَحدُث؟» كالسؤال «ما شمال القطب الشماليّ؟»: تركيبٌ لغويّ سليم لمعنًى متناقض.

وليس هذا استثناءً نمنحه لطرفنا مجاملةً، بل هو عين ما انتهى إليه البرهان. درسُ «كونٌ له بداية» بيّن أن سلسلة المحدَثات لا ترجع إلى غير نهاية، وأنها تفتقر إلى موجودٍ **ليس من جنسها**: قديمٍ أوّلَ يقف عنده التسلسل. فلمّا وصلنا إليه عاد السائل يطبّق عليه قاعدة المحدَثات، وهي بالضبط ما نفاه عنه البرهان.

\`\`\`doubt
claim: 'هذا تحكُّم: جعلتم لأنفسكم استثناءً مريحًا. فإن جاز إلهٌ أزليّ بلا سبب، جاز كونٌ أزليّ بلا سبب، ويكون افتراضُ إلهٍ زيادةً لا يحتاجها التفسير.'
answer: |-
  الفرق ليس تحكّمًا بل شهادةُ واقع: الكون الذي نعرفه ليس أزليًّا؛ هذا ما تقرّره فيزياؤه (بدايةٌ للزمان والمكان) وما يقتضيه استحالةُ التسلسل، كما مضى في درسه. فالذي يقترحه السائل، وهو كونٌ أزليّ، خيارٌ جرّبه الفكر البشريّ قرونًا وأسقطه العلمُ نفسُه قبل الدين.
  ثم إنّ الموصوف بالأزلية يجب أن يناسبها وصفُه: الكونُ متغيّرٌ، أجزاؤه حادثة، يجري عليه الزمان، ينحلّ نظامُه حراريًّا؛ وكلّ متغيّرٍ خاضعٍ للزمن ليس أوّلًا بحقّ. فالبرهان لا يقول «كلّ شيءٍ له سبب إلا استثناءً نحبّه»، بل يقول: الحادث يحتاج مُحدثًا، والمحدَثات كلُّها تنتهي بالضرورة إلى غير حادث. الخلاف إذن ليس في وجود «موجودٍ أوّل»، فلا بدّ منه على كل تقدير، بل في وصفه: أهو المادة العمياء المتغيّرة، أم الحيّ القيّوم؟ ودرسُ الإتقان أجاب: أثرُ القصد ظاهر في الكون، والقصد لا يكون لمادةٍ عمياء.
\`\`\`

## وهذا اسمه في الوحي: الأوّل

الوصف الذي فرضه البرهانُ فرضًا هو نفسُه ما سمّى اللهُ به نفسَه:

\`\`\`ayah
ref: 57:3
highlight: هو الأول والآخر
note: 'الأولُ الذي ليس قبله شيء، والآخرُ الذي ليس بعده شيء. الوحي يضع المصطلح في موضعه الذي بلغه العقل بالبرهان.'
\`\`\`

وفسّرها النبيّ ﷺ في دعائه بأدقّ عبارةٍ تُغني عن مجلّدات الفلسفة:

\`\`\`hadith
text: 'اللهمّ أنت الأولُ فليس قبلك شيء، وأنت الآخرُ فليس بعدك شيء، وأنت الظاهرُ فليس فوقك شيء، وأنت الباطنُ فليس دونك شيء.'
source: 'صحيح مسلم (٢٧١٣)'
url: 'https://sunnah.com/muslim:2713'
note: 'فليس قبلك شيء، أربعُ كلماتٍ تقطع السؤال من جذره: من لا قبلَ له لا يُسأل عمّن سبقه.'
\`\`\`

## النبوءة الصغيرة داخل المسألة

وهنا لطيفةٌ تستحق التأمل. أخبر النبيّ ﷺ قبل أربعة عشر قرنًا أنّ الناس سيتسلسل بهم السؤال حتى يبلغوا هذا الموضع بعينه:

\`\`\`hadith
text: 'لا يزال الناسُ يتساءلون حتى يقال: هذا خلق اللهُ الخلقَ، فمن خلق الله؟ فمن وجد من ذلك شيئًا فليقل: آمنتُ بالله.'
source: 'صحيح مسلم (١٣٤)'
url: 'https://sunnah.com/muslim:134a'
note: '“لا يزال” إخبارٌ عن مستقبلٍ متّصل: السؤال سيمضي بالناس إلى هذا الموضع بعينه، ثم يجيء التوجيه بكلمةٍ واحدة: آمنتُ بالله.'
\`\`\`

وفي حديثٍ آخر وصفُ طبيعةِ هذا التسلسل وعلاجِه:

\`\`\`hadith
text: 'يأتي الشيطانُ أحدَكم فيقول: من خلق كذا؟ من خلق كذا؟ حتى يقول: من خلق ربَّك؟ فإذا بلغَه فليستعذ بالله ولْيَنتهِ.'
source: 'صحيح البخاري (٣٢٧٦)'
url: 'https://sunnah.com/bukhari:3276'
note: 'والمقصود بالانتهاء قطعُ التسلسل الوسواسيّ الذي لا يقف، لا النهيُ عن التفكير؛ فالقرآن كما رأيتَ يأمر بالنظر أمرًا.'
\`\`\`

رجلٌ في القرن السابع، في بيئةٍ لا تقليدَ فيها للفلسفة اليونانيّة ومباحثِها، يتنبّأ بأن سؤال «من خلق ربك؟» سيطرق صدور الناس طرقًا منظّمًا، ثم يصف علاجه النفسيّ قبل المعرفيّ: هذا التسلسل وسوسةٌ تدور لا سؤالُ معرفةٍ يقف عند جواب. وها هو السؤال اليوم عنوانُ أشهر اعتراضات الإلحاد المعاصر، والجوابُ العقليّ هو هو: قِف عند الأول؛ فليس قبله شيء.

ولاحظ إنصاف الحديث لعِلم النفس قبل نشأته: من جرّب الوسواس يعرف أنّ سلسلة «ومن خلق؟ ومن خلق؟» لا يشبعها جواب، لأنها ليست طلبَ جواب. ووجهُ الشبه الذي يستوقف: العلاج المعروض ليس مزيدًا من الجدل مع الوسوسة، بل قطعُ الدوران والانصرافُ عنه. وهذا قريبٌ ممّا يقال اليوم لمن ابتُلي بالأفكار الاجترارية: أنّ استئناف الجدل الداخليّ يغذّي الدوّامة ولا يطفئها. ولا ندّعي أنّ الحديث كتابٌ في العلاج النفسيّ؛ إنما نلاحظ دقّة التشخيص.

ومع ذلك فلسنا نحتجّ بهذا هنا؛ فكونُ هذا الخبر وحيًا لم يقم عليه دليلٌ بعدُ. نسجّله ملاحظةً ونعود إلى وزنه في وحدة «محمّدٌ ﷺ رسول الله».

\`\`\`rule
قاعدة البرهان: كلُّ حادثٍ يحتاج مُحدِثًا، لا كلُّ موجود. والبرهان نفسه أوجب الانتهاء إلى أوّلَ غيرِ حادث، فسؤال «من خلقه؟» يعيد تطبيق القاعدة على من قام الدليل على خروجه منها. والوحي سمّاه الأول الذي ليس قبله شيء، وأخبر نبيُّه سلفًا أنّ الناس سيبلغون هذا السؤال، وعلّم جوابه.
\`\`\`

\`\`\`quiz
questions:
  - q: لماذا لا يصحّ سؤال «فمن خلق الله؟» اعتراضًا على برهان الخالق؟
    options:
      - لأن القاعدة أنّ الحادث يحتاج مُحدثًا، والبرهان انتهى إلى أوّلَ لا بداية له، فالسؤال يطبّق قاعدة المحدَثات على من قام الدليل على أنه ليس منها
      - لأن السؤال محرّم لا تجوز مناقشته
      - لأن القاعدة أنّ لكل موجودٍ خالقًا بلا استثناء
      - لأن الجواب مجهول ولا سبيل إليه
    answer: 0
    why: ما قال البرهان يومًا إن لكل موجودٍ خالقًا؛ قال إن لكل حادثٍ مُحدثًا، ومن لا بداية له ليس في حقّه لحظةُ إحداثٍ يُسأل عنها.
  - q: بمَ يُجاب من يقول «إن جاز إلهٌ أزليّ فليكن الكونُ نفسه أزليًّا»؟
    options:
      - الكون الذي نعرفه ليس أزليًّا بشهادة فيزيائه وتغيُّره وانحلاله، فالخلاف في وصف الأوّل الواجب لا في وجوده
      - لا فرق فعلًا بين القولين وكلاهما سائغ
      - الكون أزليّ لكنه مخلوق في الوقت نفسه
      - القول بأزلية أيّ شيءٍ ممتنع عقلًا
    answer: 0
    why: لا بدّ من موجودٍ أوّلَ على كل تقدير؛ والمتغيّر الحادثة أجزاؤه الخاضع للزمن لا يصلح أوّلًا، فبقي أن يكون الأول قديمًا قيّومًا مباينًا للكون.
  - q: ما وجه الدلالة في حديث «حتى يقول من خلق ربك»؟
    options:
      - إخبارٌ قبل أربعة عشر قرنًا بأن الناس سيبلغون هذا السؤال بعينه، مع وصف طبيعته الوسواسية وعلاجه
      - نهيٌ عام عن التفكير في الكون
      - دليلٌ على أن السؤال لا جواب له
      - أن الشيطان يخلق الأسئلة خلقًا
    answer: 0
    why: الحديث تنبّأ بمآل سلسلة السؤال ووصفها وسوسةً تدور لا طلبَ معرفة، وعلّم قطعها بذكر ما قام عليه الدليل؛ والقرآن نفسه يأمر بالنظر، فليس في الحديث نهيٌ عن التفكير.
\`\`\`
`,"../content/lessons/ar/why-cant-we-see-god.md":`---
title: لماذا لا نراه؟
description: 'نُثبت كلَّ يومٍ أشياءَ لا تُرى (العقول والجاذبية والتاريخ) بآثارها لا بأعيننا. فلماذا تُجعل الرؤية شرطًا في باب الخالق وحده؟ وماذا طلب موسى، وبمَ أُجيب؟'
unit: doubts
order: 7
minutes: 8
emoji: 🧲
tags: [رؤية الله, الغيب, حدود الحواس]
---

> **فكرة الدرس:** الرؤية ليست شرطَ الوجود ولا سقفَ المعرفة. فنحن نُثبت أعظم ما نعرفه بآثاره لا بأعيننا، والعينُ نفسها أداةٌ مخلوقةٌ ضيّقةُ المدى؛ فمن العجيب أن نجعل أضيقَ أدواتنا حَكَمًا على أكبر الحقائق.

## شرطٌ لا نعامل به شيئًا آخر

اسأل نفسك بهدوء: كم شيئًا تقطع بوجوده وأنت لم تره قطّ؟

- **عقول الآخرين:** لم يرَ أحدٌ فكرةً داخل رأس صاحبه، ومع ذلك لا تشكّ لحظةً في أنّ لمن يحادثك عقلًا يقصد ويفهم. تستدلّ عليه بكلامه وأفعاله، أي بالأثر.
- **الجاذبية والمجالات:** ما رأى أحدٌ الجاذبية؛ نرى التفاحة تسقط فنُثبت القوّة من أثرها. والمغناطيس في يدك تراه هو ولا ترى مجاله، ثم لا تشكّ في المجال وأنت ترى المسامير تقفز إليه.
- **التاريخ:** لم تشهد فتحَ مكّة ولا حروبَ نابليون، وأنت تقطع بوقوعها بالآثار والأخبار المتراكمة.
- **الرياضيات:** لم يرَ أحدٌ «العدد سبعة» بعينه، وهو أثبت في عقلك من كثيرٍ ممّا تراه.

فقاعدة «لن أصدّق إلا بما أرى» قاعدةٌ لا يعيش بها أحدٌ يومًا واحدًا. المعرفة طريقان: مشاهدةٌ مباشرة، أو استدلالٌ بالأثر على المؤثِّر؛ والطريق الثاني هو عمدة العلم نفسه: الإلكترون والثقب الأسود ونواة الأرض ما وقعت عليها عينُ مخلوق، وإنما رأينا آثارها فأثبتناها بلا تردّد.

ولهذا فالغيب في القرآن ليس ضدَّ الدليل، بل ضدَّ المشاهدة: شيءٌ لا تراه العين ويقوم عليه الأثر والخبر.

## والعين نفسها أداةٌ ضيّقة

عينك لا تلتقط إلا شريحةً ضئيلةً من الضوء: لا ترى الأشعّة تحت الحمراء ولا فوق البنفسجية ولا موجات الراديو التي تعبر غرفتك الآن. وهي تعجز عن التحديق في الشمس، وهي مخلوقة من المخلوقات. فمن جعل هذه الأداة شرطًا لإثبات خالق السماوات والأرض فهو كمن يزن الجبل بميزان الصائغ: ليس العيب في الجبل، بل في الميزان.

\`\`\`ayah
ref: 6:103
highlight:
  - لا تدركه الأبصار
  - وهو يدرك الأبصار
note: 'الإدراك هو الإحاطة. فالآية تقرّر تفاوتًا لا تكافؤًا: أبصارُنا المحدودة لا تحيط به، وهو محيطٌ بها وبكلّ شيء.'
\`\`\`

## موسى سأل، ولم يُوصَف سؤاله بالسخف

أعظمُ من كلّمه الله من البشر طلب الرؤية نفسها:

\`\`\`ayah
ref: 7:143
highlight:
  - أرني أنظر إليك
  - لن تراني
note: 'لم يُقَل لموسى «طلبتَ محالًا لا وجود له»، بل أُري لماذا لا يُرى في هذه الدار: تجلّى ربُّه للجبل فاندكّ الجبلُ وخرّ موسى مغشيًّا عليه. فالحدُّ في طاقة المستقبِل، لا في وجود المطلوب.'
\`\`\`

تأمّل ما في القصّة: نبيٌّ يسأل الرؤية فلا يُقال له إنّ المطلوب لا وجود له، والجواب ليس إنكارَ الوجود بل بيانَ القدرة: الجبلُ الصلب لم يحتمل التجلّي، فكيف ببصر الإنسان؟ المسألة مسألة طَورٍ وطاقة، لا مسألة شيءٍ غير موجود.

\`\`\`note
عدمُ الرؤية في الدنيا ليس استحالةً مطلقة: فمن عقيدة المسلمين أنّ المؤمنين يرون ربّهم في الآخرة، كما في سورة القيامة (75:22–23)، حين تُنشأ الخِلقةُ نشأةً أخرى تحتمل ما لا يحتمله بصرُ الدنيا. فالقصور قصورُ الدار والأداة، لا نقصٌ في المرئيّ سبحانه.
\`\`\`

## نعرفه بآثاره كما تعرف كلَّ ما سبق

الوحدة السابقة لم تقل لك «صدِّق بلا دليل»؛ عرضت آثارًا مشهودة: كونٌ له بداية، وثوابتُ مضبوطةٌ بدقّة، وحياةٌ منظّمةٌ تحمل شفرتها. ثم خطت الخطوةَ التي يخطوها العلم كلَّ يوم: من الأثر المشهود إلى المؤثِّر غير المشهود.

\`\`\`ayah
ref: 67:14
highlight: ألا يعلم من خلق
note: 'الصنعة تُخبر عن صانعها: إتقانُ الخلق يدلّ على علم الخالق، كما يدلّ الكتابُ المحكم على علم كاتبه وإن لم ترَ الكاتب.'
\`\`\`

\`\`\`doubt
claim: 'الدعاوى الاستثنائية تحتاج إلى أدلّة استثنائية، وأنا لا أثق إلا بما يمكن قياسه وإخضاعه للتجربة.'
answer: |-
  خذ القاعدة الثانية أولًا: «لا أثق إلا بما يُقاس». هذه الجملة نفسها لا يمكن قياسها ولا إخضاعها للتجربة؛ فأيّ مختبرٍ يزنها؟ فهي تسقط بمعيارها هي، ومن تمسّك بها فقد وثق بشيءٍ غير مقيس. والصواب أوسع منها: نقبل المقيس بالقياس، ونقبل ما لا يُقاس بالاستدلال الصحيح، كما نفعل في الرياضيات والتاريخ وعقول الآخرين.
  ثم أين «الاستثنائي» في المسألة؟ مقدّمات الدليل الذي بين يديك مشاهدةٌ تجريبية خالصة: أنّ للكون بداية، وأنّ ثوابته مضبوطة، وأنّ الحياة نظامٌ يحمل شفرة. الخطوة الأخيرة استدلالٌ من الأثر على المؤثِّر، وهي نفسُ نوع الخطوة التي أثبت بها العلم الإلكترون والثقب الأسود. بل اعكس السؤال: أيّ الدعوَيين أدعى إلى الدهشة: كونٌ رتّبته حكمةٌ عالمة، أم كونٌ مضبوطٌ بهذه الدقّة ولا ضابط له؟
\`\`\`

\`\`\`rule
الرؤية طريقٌ من طرق المعرفة، لا شرطُها الوحيد ولا أعلاها. من قَبِل العقولَ والجاذبيةَ والتاريخَ بآثارها، ثم رفض دلالةَ الكون على خالقه لأنّ عينه لم تقع عليه، فقد خصّ هذه المسألة وحدها بميزانٍ لا يزن به سواها. والقرآن لا يطلب منك إيمانًا بلا أثر، بل يريك الأثر ويسألك: ألا يدلّ؟
\`\`\`

\`\`\`quiz
questions:
  - q: لماذا لا تصلح قاعدة «لن أصدّق إلا بما أرى» ميزانًا للمعرفة؟
    options:
      - لأنّ أحدًا لا يلتزمها فعلًا؛ فنحن نُثبت العقول والجاذبية والتاريخ بآثارها لا برؤيتها
      - لأنّ الرؤية لا تفيد معرفةً أصلًا
      - لأنّ الحواسّ كلّها خادعة دائمًا فلا يوثق بشيء
      - لأنّ المعرفة وقفٌ على المختصّين وحدهم
    answer: 0
    why: الرؤية طريقٌ صحيح لكنها ليست الطريق الوحيد؛ والاستدلال بالأثر على المؤثِّر هو عمدة العلم نفسه في إثبات ما لا يُرى.
  - q: ما وجه الدلالة في قصّة سؤال موسى الرؤيةَ (الأعراف 143)؟
    options:
      - لم يُنكَر أصلُ السؤال، وبيّن الجوابُ أنّ الحدّ في طاقة المخلوق في هذه الدار لا في وجود المطلوب
      - أنّ طلب الدليل على الله خطأ يُلام عليه صاحبه
      - أنّ موسى شكّ في وجود ربّه
      - أنّ الجبال لا تتأثّر بشيء
    answer: 0
    why: اندكاكُ الجبل عند التجلّي بيّن أنّ المسألة مسألة قدرةِ المستقبِل وطورِ الدار، لا مسألة شيءٍ غير موجود؛ والمؤمنون يرونه في الآخرة حين تُنشأ الخلقة نشأةً تحتمل ذلك.
  - q: كيف يجيب الدرس عن قول القائل «لا أثق إلا بما يمكن قياسه»؟
    ref: 67:14
    word: ألا يعلم من خلق
    options:
      - القاعدة نفسها لا تُقاس فتسقط بمعيارها، والدليل المعروض أصلًا مقدّماته مشاهدةٌ تجريبية
      - القياس باطل لا قيمة له في المعرفة
      - الإيمان شعورٌ خاصّ لا شأن للدليل به
      - العلم التجريبي عاجز عن معرفة أيّ شيء
    answer: 0
    why: جملة «لا أثق إلا بما يُقاس» ليست نتيجةَ قياسٍ ولا تجربة، فمن قَبِلها ناقض نفسه؛ أمّا دليل الخالق فمقدّماته مشاهدة وخطوتُه الأخيرة استدلالٌ بالأثر كاستدلال العلم بما لا يُرى.
\`\`\`
`,"../content/lessons/ar/why-created.md":`---
title: لماذا خلقنا؟
description: 'سؤال الغاية الذي فتحنا به هذا الدليل يبلغ هنا جوابَه: خُلقنا للعبادة، والله غنيٌّ لا يريد منا رزقًا. ما معنى العبادة حقًّا، ولماذا هذا الجواب يجعل المعنى الذي تحسّه في حياتك حقيقةً لا قصّةً نرويها لأنفسنا؟'
unit: allah
order: 13
minutes: 9
emoji: 🧭
tags: [الغاية من الخلق, العبادة, معنى الحياة]
---

> **فكرة الدرس:** في أوّل درسٍ من هذا الدليل سألنا: لماذا نحن هنا؟ وهنا جوابُ الإسلام في آيةٍ واحدة، خُلقنا للعبادة، تليها بلا فاصلٍ آيةٌ تنفي أن يكون ذلك لحاجةٍ بالله إلى شيء. فالغاية لأجلك أنت، لا لأجله هو.

## الجواب في آيتين متجاورتين

\`\`\`ayah
ref: 51:56
highlight: إلا ليعبدون
note: 'أسلوبُ حصر: الخلق كلُّه لغايةٍ واحدة هي العبادة. والآية تذكر مع الإنس الجنَّ، وهم خلقٌ مكلَّفٌ آخر أخبر عنه القرآن. لكن قبل أن ترسم في ذهنك صورةً للعبادة، اقرأ الآية التالية مباشرةً.'
\`\`\`

\`\`\`ayah
ref: 51:57
highlight: ما أريد منهم من رزق
note: 'قبل أن يخطر ببالك أنّ الأمر حاجةٌ، نُفيت الحاجة نصًّا. المعبود الذي يجوع فيطعمه عابدوه هو آلهة الأساطير؛ أمّا الخالق فقد قدّمته لك سورة الإخلاص: الصمد الذي يقصده الجميع ولا يحتاج أحدًا. فالغاية إذن ليست سدَّ نقصٍ عنده، بل رفعَ شأنٍ عندك.'
\`\`\`

\`\`\`ayah
ref: 35:15
highlight: أنتم الفقراء إلى الله
note: 'اتجاه الحاجة في هذه العلاقة واحدٌ لا ينعكس: نحن المحتاجون إليه في كلّ نفَسٍ ونبضة، وهو الغنيّ الحميد. فإذا أمرنا بعبادته فليس ليأخذ منّا شيئًا، بل ليعطينا.'
\`\`\`

## ما العبادة أصلًا؟

عند كلمة العبادة يتصوّر كثيرون ذلًّا مطلوبًا لذاته: جبينًا في الأرض وظهرًا منحنيًا أمام سيّدٍ يشتهي الانحناء. وهذا غلطٌ في فهم الكلمة نفسها. عرّفها ابن تيمية في كتاب العبودية بأنها اسمٌ جامع لكلّ ما يحبّه الله ويرضاه من الأقوال والأعمال، الباطنة والظاهرة. فهي ليست بابًا ضيّقًا اسمه الشعائر، بل وجهةٌ تتّسع للحياة كلّها:

- الصلاة والدعاء عبادة، نعم، وهي ذروة الصلة التي قرأتَ عنها في الدرس الماضي.
- وعملُك المتقَن إذا احتسبتَه، وصدقُك في البيع، وبرُّك بوالديك، وكفُّك أذاك عن الناس، كلُّه عبادة.
- حتى لقمةُ الطعام ترفعها إلى فم أهلك تصير عبادةً تُؤجَر عليها، بنصّ الحديث:

\`\`\`hadith
text: 'إنك لن تنفق نفقةً تبتغي بها وجهَ الله إلا أُجرتَ عليها، حتى ما تجعل في فم امرأتك.'
source: 'صحيح البخاري (٥٦)'
url: 'https://sunnah.com/bukhari:56'
note: 'أقصى ما يبدو دنيويًّا، لقمةٌ بين زوجين، يدخل في ميزان العبادة إذا صحّت وجهته. فليست العبادة قطاعًا من الحياة، بل اتجاهًا تأخذه الحياة كلُّها.'
\`\`\`

فحقيقة العبادة اجتماعُ ثلاثة: **محبّةٌ** لمن أعطاك كلَّ شيء، و**شكرٌ** له على ذلك، و**خضوعٌ** لمن هذا شأنه؛ وهي القامة الطبيعية لمخلوقٍ عاقلٍ أمام خالقه: لا انسحاق عبدٍ أمام طاغيةٍ متسلّط، بل انتصابُ فقيرٍ شاكرٍ أمام الغنيّ الذي أحسن إليه.

## الحياة دار امتحان

وثمّة آيةٌ ثانية تكمل الجواب: لماذا كانت الدنيا بهذا الخليط من الجمال والشدّة؟

\`\`\`ayah
ref: 67:2
highlight: ليبلوكم أيكم أحسن عملا
note: 'خلقَ الموتَ أيضًا: فليس الموت خللًا في التصميم بل جزءًا منه: بابًا لا جدارًا. والمعيار أحسنُ عملًا لا أكثرُه: الجودة قبل الكمّ. وكون الدنيا دارَ ابتلاءٍ لا دارَ جزاءٍ هو ما يفسّر اجتماع الجمال والألم فيها، كما مرّ في درس لماذا الشرّ والألم.'
\`\`\`

فالحياة على هذا ليست قاعة انتظارٍ بلا معنى، ولا حفلةً بلا حساب: هي اختبارٌ قصيرٌ كريم، موضوعُه إحسانُ العمل، ومصحّحُه أرحم بك من أمّك.

## وما البديل المعروض؟

لكي تزن جوابَ الإسلام حقَّ وزنه، ضعه بجانب البديل الوحيد المطروح في السوق:

\`\`\`compare
columns:
  - title: كونٌ بلا خالقٍ ولا غاية
    points:
      - المعنى نصنعه نحن، وهو حقيقيٌّ عندنا وإن لم يكن مكتوبًا في الكون
      - قيمتُك أنّك كائنٌ واعٍ يألم ويحبّ، وهذا وحده يكفي لتقوم عليه أخلاقٌ حقيقية
      - الموت نهايةٌ لا استئناف بعدها، وقِصَرُ العمر هو ما يجعله ثمينًا
      - سؤال لماذا أنا هنا بلا جوابٍ لأنه في هذا التصوّر سؤالٌ بلا معنى أصلًا
  - title: كونٌ خلقه الرحمن لغاية
    points:
      - المعنى مكتشَفٌ لا مخترَع؛ حياتُك قُصدت قصدًا وسُئلت عنها غايتها
      - قيمتُك أنك مقصودٌ مخاطَبٌ مكلَّف، والغنيُّ الذي لا يحتاجك اختار أن يخلقك
      - لا يضيع عنده وزنُ ذرّةٍ من خير، والحسابُ يُكمل ما بترَه الموت
      - الشعور بأنّ لحياتك معنًى إدراكٌ للواقع لا حيلةٌ نفسية نافعة
\`\`\`

هذا هو الفرق الذي يريد هذا الدرس أن تراه: الإسلام لا يطلب منك أن تتوهّم معنًى لحياتك؛ فأنت تحسّه أصلًا، وتعيش به، ولا تستطيع العيش بدونه. الإسلام يقول لك إنّ هذا الإحساس **صادق**: لحياتك غايةٌ حقيقيةٌ قصدها قاصد، لا قصّةٌ جميلة فوق عدمٍ أصمّ.

\`\`\`doubt
claim: إلهٌ يخلق كائناتٍ لكي تعبده وتثني عليه إلهٌ مغرور محبٌّ لذاته. الكائن الكامل لا يحتاج مديح مخلوقاته، فطلبُه له نقصٌ يناقض كماله.
answer: |-
  الشبهة وجيهة الظاهر، وقد أجاب عنها النصُّ قبل أن تُطرح: الآية التي تلي آيةَ الغاية مباشرةً تنفي الحاجة نصًّا: لا رزقَ يريده ولا نفع. والغرور والتعطّش للثناء نقصٌ لا يقوم إلا بناقص: كائنٍ يستمدّ قيمته من إعجاب غيره ويجوع بدونه. فوصفُ الغنيّ المطلق بالحاجة إلى المديح قياسٌ للخالق على أمزجة البشر، وهو بالضبط ما نفته سورة الإخلاص حين قالت إنه الصمد ولا كفؤ له.
  ثم انظر أين تقع ثمرة العبادة فعلًا: هي لا تضيف إلى الله شيئًا، وإنما تغيّر العابد نفسه. شكرُك لمن أنقذ حياتك لا يزيده شيئًا، لكنّ تركه ينقصك أنت: يجعلك جاحدًا أعمى عن واقعٍ قائم. فالثناء على الكامل صوابٌ في نفسه لأنه قولُ الحقّ عمّن يستحقّه، وثمرته كلُّها ترجع إليك: طمأنينةً، وميزانَ قيم، وصلةً بمن بيده كلُّ شيء. ولهذا كان الأمرُ بالعبادة نفسُه عطيّة: دلّك على الغاية التي صُمّمتَ لها، كما يدلّك صانعُ الآلة على وظيفتها، لمصلحة الآلة لا لحاجة الصانع.
\`\`\`

\`\`\`rule
خلقك الله لعبادته وهو الغنيّ عنك، فالعبادة ليست ضريبةً يدفعها فقيرٌ لمحتاج، بل غايةٌ تشرّفك: محبّةٌ وشكرٌ وخضوعٌ لمن أعطاك كلَّ شيء، تتّسع حتى تشمل عملك وطعامك وإحسانك إذا صحّت النيّة. وبها يصير المعنى الذي تحسّ أنّ لحياتك إيّاه حقيقةً قائمةً في الواقع، لا قصّةً تُروى فوق عدم.
\`\`\`

\`\`\`quiz
questions:
  - q: كيف يُعلم أنّ الأمر بالعبادة ليس لحاجةٍ عند الله؟
    options:
      - لأنّ الآية التالية لآية الغاية مباشرةً تنفي أن يريد من الخلق رزقًا أو إطعامًا
      - لأنّ العبادة قليلة الكلفة فلا تُعدّ حاجة
      - لأنّ الله يحتاج العبادة لكنه يخفي ذلك
      - لأنّ العبادة مطلوبة من الملائكة وحدهم
    answer: 0
    why: نفيُ الحاجة جاء نصًّا وفي الموضع نفسه؛ فالغنيُّ الصمد لا يأخذ من العبادة شيئًا، وإنما تعود ثمرتها على العابد.
  - q: ما معنى العبادة في الإسلام؟
    options:
      - اسمٌ جامع لكلّ قولٍ وعملٍ يحبّه الله، ظاهرًا وباطنًا، فيدخل فيه العمل والإحسان إذا صحّت النيّة، لا الشعائر وحدها
      - الشعائر المخصوصة كالصلاة والصوم فقط
      - الانسحاق والذلّ المطلوب لذاته
      - الاعتزال التامّ للدنيا والانقطاع عن العمل
    answer: 0
    why: بتعريف ابن تيمية هي اسمٌ جامع لكلّ ما يحبّه الله من الأقوال والأعمال؛ وفي الحديث أنّ الرجل يُؤجَر حتى على اللقمة يرفعها إلى فم امرأته.
  - q: بماذا يردّ الدرس على شبهة أنّ إلهًا يُخلَق الناسُ لعبادته مغرورٌ محبٌّ للثناء؟
    options:
      - الغرور نقصُ محتاجٍ إلى إعجاب غيره والله نفى الحاجة نصًّا، والعبادة تغيّر العابدَ لا المعبود، كالشكر لا يزيد المنقِذ شيئًا لكنّ تركه ينقص الشاكر
      - بأنّ الغرور صفة كمالٍ إذا اتصف بها الخالق
      - بأنّ الله يحتاج الثناء فعلًا لكنه يستحقّه
      - بأنّ العبادة ليست مطلوبةً في الإسلام أصلًا
    answer: 0
    why: وصفُ الغنيّ المطلق بالتعطّش للمديح قياسٌ على نفوس البشر؛ والنصّ نفى الحاجة قبل أن يسأل أحد، وثمرة العبادة كلُّها تعود على العابد لا على المعبود.
\`\`\`
`,"../content/lessons/ar/why-revelation.md":`---
title: هل يكفي العقل وحده؟
description: 'العقل أوصلك إلى أنّ للكون خالقًا، ثم يقف عند الباب: ماذا يريد مني؟ وكيف أشكره؟ وماذا بعد الموت؟ لماذا كان إرسال الرسل مقتضى الرحمة والعدل معًا.'
unit: messengers
order: 14
minutes: 8
emoji: 🧭
tags: [الوحي, الرسل, حدود العقل]
---

> **فكرة الدرس:** العقل بوصلةٌ صادقة: تدلّك على أنّ ثمة جهةً تُقصَد، لكنها لا ترسم الطريق. والبوصلة بلا خريطة تكفي لتعرف أنك ضللت، ولا تكفي لتصل.

## إلى أين أوصلنا العقل؟

بعيدًا جدًّا. شهدت الفطرة من داخلك، وأقام العقل حجّته من خارجك: هذا الكون لم يأتِ من غير شيء ولم يخلق نفسه، فله خالقٌ واحد، متقنٌ لما صنع، رحيمٌ بخلقه، ما خلقك عبثًا بل لغاية. هذا كلّه مضى إثباته في الوحدات السابقة.

فقف الآن هنا، وحاول أن تُكمل بعقلك وحده. ثلاثة أسئلةٍ تنتظرك خلف الباب:

- **ماذا يريد مني؟** عرفتَ أن لحياتك غاية، فما تفاصيلها؟ ما الذي يرضيه من الأفعال وما الذي يسخطه؟
- **كيف أشكره؟** العقل يوجب شكر المنعم، لكنه لا يعرف الكيفية. أأصلّي؟ في أيّ صورة؟ ومتى؟ وبماذا؟
- **وماذا بعد الموت؟** رأيتَ أن اكتمال الحساب مقتضى العدل، فما صفته؟ وما الذي ينجّي فيه؟

جرّب أن تجيب عن واحدٍ منها بالبرهان المحض كما أجبتَ عن وجود الخالق. ستلمس الفرق بنفسك: هناك كان الدليل يحسم، وهنا لا تجد إلا الظنون. وليس ذلك لأن عقلك قاصر، بل لأن هذه الأسئلة من جنسٍ آخر: إنها أسئلة عن **مراد غيرك**، ومرادُ الغير لا يُنال بالاستدلال بل بالإخبار. تستطيع أن تثبت وجود جارك بالمشاهدة، ولا تستطيع أن تستنتج ما يرضيه استنتاجًا؛ لا بدّ أن يكلّمك.

\`\`\`ayah
ref: 20:50
highlight: أعطى كل شيء خلقه ثم هدى
note: 'جواب موسى حين سأله فرعون عن ربه: هو الذي أعطى كلَّ مخلوقٍ صورتَه ثم هداه لما خُلق له. فالهداية سنّة الخالق في خلقه كلّه (من النحلة إلى الرضيع)، أفيُترك الإنسان وحده بلا هدًى في أعظم أسئلته؟'
\`\`\`

## ماذا صنع العقل وحده عبر التاريخ؟

هذه ليست تجربةً ذهنية؛ لقد أجرتها البشرية فعلًا آلاف السنين. الفطرة تدفع الجميع إلى البحث عن معبود (مضى ذلك في الدرس الثاني)، فلما بحث الناس بلا خريطة عبدوا الشمس والنجوم والنهر والملوك وأصنامًا نحتوها بأيديهم. آلاف الديانات المتناقضة، وكلها تشهد لشيءٍ واحد: أنّ السؤال مغروسٌ في الإنسان، وأنّ تفاصيل الجواب ليست مغروسةً معه.

وليس هذا قصور العامّة وحدهم. فلاسفة اليونان الذين بلغوا في المنطق مبلغًا عظيمًا اختلفوا في الإله والنفس والموت والفضيلة اختلافَ الليل والنهار. لو كان العقل وحده يكفي في هذا الباب، لاتفقت أعظم العقول على الجواب كما تتفق على الحساب والهندسة.

وتأمّل: تنوّعُ العبادات الذي يحتجّ به الملحد على الدين هو نفسه دليلُ الحاجة إلى الرسالة. البوصلة تعمل في صدر كلّ أحد، والخريطة مفقودة؛ فهذا الضلال المتنوّع هو بالضبط ما تتوقعه من بوصلةٍ بلا خريطة.

## الرسالة رحمة… وعدل

فإذا كان الخالق رحيمًا، وكان قد خلقنا لغاية، فما مقتضى الرحمة والحكمة؟ ألّا يتركنا في الحيرة، بل يرسل من يبلّغنا عنه: هذا ما أريد، وهكذا تشكرونني، وهذا الذي بعد الموت.

ثم إنّ في الأمر أكثر من الرحمة: العدلُ نفسه يقتضي الرسالة. كيف يُحاسَب الناس على أمرٍ لم يبلغهم؟

\`\`\`ayah
ref: 17:15
highlight:
  - وما كنا معذبين
  - نبعث رسولا
note: 'من عدله سبحانه ألّا يعذّب أحدًا إلا بعد قيام الحجة عليه ببعث رسول، وهذا معنى الآية عند الطبري وابن كثير. فالحساب فرعُ البلاغ.'
\`\`\`

\`\`\`ayah
ref: 4:165
highlight: لئلا يكون للناس على الله حجة بعد الرسل
note: 'يبشّر الرسل وينذرون لتنقطع الأعذار، فلا يقول أحدٌ يوم الحساب إنه لم يبلغه شيء. فالرسالة إعذارٌ قبل الحساب.'
\`\`\`

فإرسال الرسل ليس ترفًا دينيًا زائدًا على الحاجة؛ إنه الحلقة التي بها تصير الغاية معلومةً، ويصير الحساب عدلًا.

\`\`\`doubt
claim: لماذا يرسل الله رسولًا واحدًا إلى الناس جميعًا بدل أن يكلّم كلَّ إنسانٍ مباشرة؟ لو أراد هدايتي أنا لخاطبني أنا.
answer: |-
  قد خاطبك فعلًا، بثلاث طرقٍ كلُّها عامّةٌ تقبل الفحص: فطرةٍ تشهد من داخلك، وآياتٍ في الكون تشهد من حولك، ورسالةٍ علنيةٍ محفوظة يستطيع كلُّ الناس، وأنت منهم، فحصَها ووزنَ أدلتها. الشيء الوحيد الغائب هو صوتٌ خاصّ بك وحدك. فتأمّل ما يلزم منه.
  الصوت الخاص لا سبيل إلى التحقق منه بطبيعته: لو سمعتَه، فما الذي يميّزه عندك عن الوهم أو الحلم؟ وكيف تحتجّ به على غيرك، أو يحتجّ به غيرك عليك؟ إنه عينُ التجربة الذاتية التي لا تُفحَص؛ وهي التي يرفضها المعترض نفسُه دليلًا في كل بابٍ آخر، وهو محقّ في رفضها. أما الرسالة العامة الموثّقة فنصٌّ واحد معلَن، يفحصه الصديق والخصم، ويُختبر عبر القرون. فطلبُ الوحي الشخصي ليس ترقيةً لطريقة الخطاب، بل تنزيلٌ لها من دليلٍ عامٍّ مفحوص إلى شعورٍ فرديٍّ لا يُراجَع.
\`\`\`

\`\`\`rule
العقل يوصلك إلى أنّ للكون خالقًا وأنّ شكره واجب، ولا يستقلّ بمعرفة ماذا يريد، ولا كيف يُشكَر، ولا ماذا بعد الموت؛ لأنها أخبار عن مراد الغير، ومراد الغير لا يُعرف إلا بإخباره. فكان إرسال الرسل مقتضى الرحمة هدايةً، ومقتضى العدل إعذارًا قبل الحساب.
\`\`\`

\`\`\`note
لم يثبت هذا الدرس أنّ رسالةً بعينها صادقة، بل أثبت الحاجةَ إليها فقط، وأنّ العقل نفسه يطلبها. فأيُّ الرسالات صدق؟ ذلك سؤال الوحدات الآتية، وستُوزن فيه الدعاوى بميزانٍ معلَن يُطبَّق على الإسلام نفسه قبل غيره.
\`\`\`

\`\`\`quiz
questions:
  - q: ما الذي يستطيعه العقل وما الذي يعجز عنه في باب الدين؟
    options:
      - 'يثبت وجود الخالق ووجوب شكره، ولا يستقلّ بمعرفة مراده وكيفية عبادته وتفاصيل ما بعد الموت'
      - لا يستطيع شيئًا، فالدين كله تسليم بلا نظر
      - يستطيع كل شيء، فلا حاجة إلى وحي أصلًا
      - يثبت تفاصيل العبادات ويعجز عن إثبات وجود الخالق
    answer: 0
    why: مراد الغير لا يُعرف بالاستدلال بل بالإخبار؛ فالعقل يوجب الشكر ولا يعرف كيفيته إلا ممن يُشكَر.
  - q: بماذا علّقت آية الإسراء العذابَ والمؤاخذة؟
    ref: 17:15
    word: وما كنا معذبين حتى نبعث رسولا
    options:
      - 'ببعث الرسول أولًا: فلا حساب قبل بلاغٍ تقوم به الحجة'
      - بكثرة الذنوب وحدها ولو لم يبلغ الإنسانَ شيء
      - بذكاء الإنسان وقدرته على الاستنتاج وحده
      - بمرور زمنٍ كافٍ على وجود الأمة
    answer: 0
    why: 'الآية تجعل بعث الرسول شرطًا سابقًا للمؤاخذة، كما فسّرها الطبري وابن كثير: فالرسالة إعذار، والحساب فرع البلاغ.'
  - q: كيف يجيب هذا الدرس من يقول لو أراد الله هدايتي لكلّمني مباشرة؟
    options:
      - 'قد خاطبه فعلًا بفطرةٍ وآياتٍ ورسالةٍ عامة قابلة للفحص؛ أما الصوت الخاص فذاتيٌّ لا يمكن التحقق منه ولا الاحتجاج به'
      - الله لا يريد هداية الناس جميعًا
      - الطلب وجيه ولا جواب عنه
      - كل إنسان يأتيه وحي خاص لكنه ينساه
    answer: 0
    why: الرسالة العلنية المحفوظة يفحصها الصديق والخصم عبر القرون، والصوت الفردي هو عين الذاتية غير القابلة للفحص التي يرفضها المعترض في كل بابٍ سواه.
\`\`\`
`,"../content/lessons/ar/why-suffering.md":`---
title: لماذا الشرّ والألم؟
description: 'أثقل الأسئلة وأصدقها. لا يستخفّ هذا الدرس بجرح السائل، بل يعرض أجزاء الجواب كاملة: دارُ اختبار، وحرّيةٌ حقيقية، وحكمةٌ قد لا تُرى من داخل القصّة، وآخرةٌ يكتمل فيها العدل.'
unit: doubts
order: 8
minutes: 10
emoji: 🩹
tags: [مشكلة الشر, الابتلاء, الحكمة الخفية, الآخرة]
---

> **فكرة الدرس:** الألم حقيقيّ، والسؤال عنه شريف. وجوابه ليس كلمةً واحدة بل أجزاءٌ تكتمل معًا: هذه الدار امتحانٌ لا دارُ الجزاء، والحرّية الحقيقية تعني إمكانَ شرٍّ حقيقيّ، والحكمة قد لا تُرى من داخل القصّة، والآخرة تُتمّ الحساب. أمّا الصورةُ الأخرى، كونٌ بلا خالق، فتُبقي الألمَ كلَّه وتُفقده حتى معناه.

## قبل كلّ جدل: وجعُك محترم

سؤال الألم يأتي على صورتين: برهانٌ في كتاب فلسفة، وأنينٌ بجوار سرير مستشفى. وهذا الدرس يجيب عن الأول وهو يرى الثاني. فإن كنتَ تقرأ وفي قلبك فقدٌ أو مرض، فاعلم أنّ أحدًا هنا لن يقول لك «لا تحزن، فالمسألة بسيطة»؛ فالمسألة ليست بسيطة، والقرآن نفسه لا يستنكر الوجع: حكى عن يعقوب عليه السلام، وهو نبيّ، أنه شكا بثَّه وحزنه إلى الله (يوسف 12:86)، فما عاتبه على الدمع. الشكوى إلى الله ليست اعتراضًا عليه.

الذي يستنكره هذا الدرس شيءٌ واحد: أن يُحسم أعظم سؤالٍ في الوجود بنصف قصّة.

## الجزء الأول: هذه الدار امتحان، لا دارُ الجزاء

لم يَعِد القرآنُ أحدًا بأنّ الدنيا جنّة. بل قدّم نفسه بعكس ذلك تمامًا، فعرّف الحياةَ من أول صفحاتها بأنها دارُ اختبار:

\`\`\`ayah
ref: 67:2
highlight: ليبلوكم أيكم أحسن عملا
note: 'الموت والحياة خُلقا معًا لغاية الابتلاء. فوجودُ الشدائد في هذه الدار ليس خللًا في الخطّة، بل هو نصُّ الخطّة المعلَن من أولها.'
\`\`\`

\`\`\`ayah
ref: 2:155
highlight:
  - ولنبلونكم بشيء من الخوف
  - وبشر الصابرين
note: 'إخبارٌ صريح مقدَّم قبل وقوعه: ستُبتلَون في الأمن والرزق والأحبّة. والآيتان بعدها تَعِدان الصابرين بصلواتٍ من ربّهم ورحمة (2:156–157).'
\`\`\`

فالاعتراض القائل «لو كان الله موجودًا لما تألّمنا» يعترض على دينٍ غير هذا الدين: دينٍ ادّعى أن الدنيا دارُ نعيمٍ خالص. أمّا الإسلام فقال من البداية: هذه دار الامتحان، والجزاء في دارٍ أخرى. وفي ميزان المؤمن لا يضيع من الامتحان شيء:

\`\`\`hadith
text: 'عجبًا لأمر المؤمن، إنّ أمره كلَّه خير، وليس ذاك لأحدٍ إلا للمؤمن: إن أصابته سرّاءُ شكر فكان خيرًا له، وإن أصابته ضرّاءُ صبر فكان خيرًا له.'
source: 'صحيح مسلم (٢٩٩٩)'
url: 'https://sunnah.com/muslim:2999'
note: 'ليس هذا إنكارًا للألم، بل تحويلُه: في هذه العقيدة لا توجد مصيبةٌ بلا معنى ولا صبرٌ بلا ثمرة.'
\`\`\`

## الجزء الثاني: حرّية حقيقية تعني إمكانَ شرٍّ حقيقيّ

انظر في شرور العالم تجد أعظمَها من أيدي البشر: الظلم والحروب والخيانة والجشع. وهذه ثمنُ شيءٍ ثمين: أنّ الإنسان خُلق مختارًا لا مسيَّرًا. فالمخلوق القادر على الإحسان الحقيقيّ، إحسانٍ يختاره، لا بدّ أن يكون قادرًا على ضدّه، وإلا لم يكن اختيارٌ أصلًا. من طلب عالمًا يستحيل فيه الظلم فقد طلب عالمًا لا اختيار فيه، أي عالمًا ليس فيه إنسان، بل آلات تدور. فإن قيل: كان يمكن أن يُخلقوا أحرارًا لا يختارون إلا الخير، فهذا نقلٌ للسؤال لا جوابٌ عنه؛ فضمانُ وقوع الاختيار على وجهٍ واحدٍ سلفًا هو إلغاءٌ للوجه الآخر، وما وقع بتقدير غيرك ضرورةً ليس اختيارَك.

وإمهالُ الله للظالم ليس إقرارًا له؛ فالإمهال من جنس الامتحان، والموعدُ الذي لا يفلت منه أحدٌ يأتي في الجزء الرابع.

## الجزء الثالث: حكمةٌ قد لا تُرى من داخل القصّة

في سورة الكهف (18:60–82) قصّةٌ نزلت كأنها لهذا السؤال. رافق موسى عليه السلام عبدًا صالحًا آتاه الله علمًا من عنده، فرأى منه ثلاثة مشاهد ظاهرُها منكرٌ صريح: سفينةُ مساكينَ خرقها، وغلامٌ قتله، وقومٌ بخلوا عليهما بالطعام فأقام لهم جدارًا بلا أجر. واعترض موسى، وهو نبيّ، في كلّ مرّة، لأنّ ما يراه أمامه لا يُفسَّر. ثم انكشف الباطن: السفينة خُرقت لتسلمَ لأهلها من ملكٍ يغصب كلَّ سفينةٍ سليمة، والغلامُ أُخبر أنه لو بلغ لأرهق أبويه المؤمنَين طغيانًا وكفرًا، فكان في قتله حفظُ دينهما، وعوّضهما الله خيرًا منه، والجدارُ كان تحته كنزٌ ليتيمين حُفظ لهما حتى يكبرا.

\`\`\`ayah
ref: 18:82
show: وما فعلته عن أمري
note: 'خاتمة التفسير كلّه: ما كان شيءٌ من ذلك اجتهادًا بشريًّا، بل عن أمر الله وعلمه. المشهدُ الذي بدا ظلمًا صريحًا كان، بتمام القصّة، رحمةً وحفظًا.'
\`\`\`

المغزى دقيق فلا تأخذ منه أكثر منه: ليس المطلوب أن تصدّق أنك ستفهم حكمة كلّ ألمٍ في الدنيا؛ فموسى نفسُه ما فهم حتى أُخبر. المطلوب أقلّ من ذلك وأصلب: أن تقرّ بأنّ «لا أرى الحكمة» لا تساوي «لا حكمة». فمن داخل المشهد الأول كان أصدقُ الناس نظرًا يرى ظلمًا محضًا، وكان الواقعُ رحمةً محضة.

## الجزء الرابع: آخرةٌ يكتمل فيها الحساب

لو كانت الدنيا كلَّ القصّة لبقي في السؤال حرجٌ ظاهر. لكنّ الإسلام لم يقل ذلك قطّ، بل أخبر أنّ لكلّ مظلمةٍ موقفًا لا يُغادر صغيرةً ولا كبيرة:

\`\`\`ayah
ref: 18:49
highlight: ولا يظلم ربك أحدا
note: 'يومَ يُنشر السجلّ الذي لم يُهمل شيئًا، تُختَم الآية بالقاعدة التي يقوم عليها هذا الجزء كلّه: الظلم لا يقع من ربّك على أحد، أبدًا.'
\`\`\`

\`\`\`ayah
ref: 21:47
highlight: ونضع الموازين القسط
note: 'حتى مثقالُ حبّة الخردل يُحضَر ويوزَن. لا دمعةَ مظلومٍ تسقط من الحساب، ولا نجاةَ لظالمٍ مات في فراشه مطمئنًّا.'
\`\`\`

\`\`\`hadith
text: 'ما يصيب المسلمَ من نَصَبٍ ولا وَصَبٍ ولا همٍّ ولا حُزنٍ ولا أذًى ولا غمٍّ، حتى الشوكةِ يُشاكُها، إلا كفّر الله بها من خطاياه.'
source: 'صحيح البخاري (٥٦٤١)'
url: 'https://sunnah.com/bukhari:5641'
note: 'النَّصَب: التعب. والوَصَب: المرض. في هذا الميزان لا يوجد وجعٌ مُهدَر؛ حتى وخزةُ الشوكة تعمل عملها في الحساب.'
\`\`\`

## والمنعطف: ماذا يبقى من السؤال في كونٍ بلا خالق؟

جرّب الحلّ المعروض بديلًا. وافترِضْ كونًا بلا خالق، تنزّلًا في الجدل لا تسليمًا بإمكانه؛ فالوحدة السابقة انتهت إلى أنّ ما له بدايةٌ لا يُوجِد نفسَه، وأنّ الإتقان لا تكتبه الصدفة. وإنما نفترضه لنسأل سؤالًا واحدًا: هل يحلّ هذا الفرضُ المشكلةَ التي عُرض لحلّها؟ الطفل ما زال يمرض، والزلازل ما زالت تضرب، والظالم ما زال يفلت. الألم كلُّه باقٍ كما هو، لكنه صار بلا معنًى ولا عدلٍ ولا جبر: لا محكمةَ أخيرةً تنتظر الجلّاد، ولا لقاءَ يجبر قلب الثكلى، ولا ميزانَ يُحضِر مثقال الخردل. لم يُحَلّ شيءٌ من المشكلة؛ ضاع فقط كلُّ ما كان يمكن أن يُحتمَل به.

بل أدقّ من ذلك: كلمة «شرّ» نفسُها تفترض ميزانًا فوق الأمزجة والأذواق. فإن لم يكن فوق المادّة معيار، فبأيّ حقٍّ تُوصَف الطبيعةُ العمياء بأنها «أخطأت»؟ يصبح الألم حدثًا يقع، كما يقع سقوط حجر، لا «مشكلةً» يصحّ الاحتجاج بها. فالاحتجاج بالشرّ على الله يستعير من خصمه الميزانَ الذي لا يقوم الاحتجاجُ إلا به. وقد يقول المعترض: أنا أستعير ميزانكم عمدًا، فالحجّة عندي إلزامٌ لكم بلوازم قولكم أنتم. وهذا وجهٌ منصف، وهو نفسُه الوجه الذي أجاب به هذا الدرس؛ فالإلزامُ يأخذ اللوازم كلَّها، ومنها الآخرةُ والحكمةُ الغائبة، لا ما يوافق منها فقط. وليس هذا طعنًا في أخلاق أحد، فمن الملاحدة رحماءُ شرفاء؛ وإنما الكلامُ عن أساس الحكم، لا عن سلوك الأشخاص.

\`\`\`doubt
claim: 'إلهٌ كامل القدرة كامل الرحمة، وطفلٌ يموت بالسرطان، هذان لا يجتمعان: فإمّا أنه لا يقدر أن يمنع، وإمّا أنه لا يريد، وإمّا أنه غير موجود. فإن قلتَ لعلّ ثمّة حكمةً خفيّة، فانظر إلى المقدار: هذا الكمُّ من الآلام التي لا يظهر لها وجه، وأكثرُها لا يراه أحد، أشبهُ بكونٍ لا يبالي منه بكونٍ يرحم.'
answer: |-
  هذه أقوى صيغ الاعتراض، فلنأخذها بكامل جدّيتها. دعوى «لا يجتمعان» دعوى تناقضٍ منطقيّ، وهي لا تقوم إلا بمقدّمةٍ خفية: «يستحيل أن تكون لله حكمةٌ بالغة في ألمٍ لا أراها أنا». وهذه دعوى إحاطةٍ بكلّ الحِكم الممكنة لا يملكها مخلوق؛ وقصّةُ الخضر عرضت النموذج: ناظرٌ صادق يرى ظلمًا محضًا، والواقع رحمة محضة. ولهذا تخلّى كثيرٌ من فلاسفة هذه المسألة أنفسِهم، وفيهم ملاحدة، عن دعوى التناقض الصريح إلى صيغةٍ أضعف تقول «الأرجح» لا «يستحيل» (ولا يزال قليلٌ منهم، كجيمس ستيربا، يتمسّك بالصيغة الصريحة، والنقاش حولها قائم)؛ والأرجحيةُ تُوزَن بالأدلة، وقد رأيتَ في الوحدة السابقة كفّتها.
  ثم إنّ الاعتراض يزن القصّة وقد حذف آخرها: يفترض أنّ حياة الطفل تنتهي عند آخر نبضة، فلا تعويضَ ولا لقاءَ ولا حساب. وهذه هي المقدّمةُ التي ينكرها الإسلام بالذات: الدنيا أولُ صفحةٍ لا الكتابُ كلُّه، والطفل في رحمة من خلقه لا يَظلم أحدًا، وكلُّ ألمٍ يوزَن، وأمُّه إن صبرت واحتسبت موعودةٌ بما يجبر قلبها. لا يدّعي هذا الجوابُ كشفَ كلِّ «لماذا»، لكنّ المطلوب في مقام البرهان إبطالُ دعوى الاستحالة، وقد بطلت.
  وأخيرًا انظر إلى أين يمضي من يحسم السؤال بالإنكار: يبقى السرطان، ويذهب المعنى والعدل والرجاء كلُّه. الإسلام لم يَعِد بدنيا بلا دموع؛ وعد بألا تضيع دمعةٌ واحدة.
\`\`\`

\`\`\`rule
جواب الإسلام عن الألم أجزاءٌ تكتمل معًا: دارُ امتحانٍ أُعلنت غايتُها من أولها، وحرّيةٌ لا تكون حقيقيةً إلا بإمكان ضدّها، وحكمةٌ قد تغيب عن ناظرٍ صادق كما غابت عن موسى، وآخرةٌ لا يُغادر ميزانُها مثقالَ خردل. ودعوى «لا يجتمع اللهُ والألم» لا تقوم إلا على مقدّمةٍ لا يملكها أحد؛ أمّا فرضُ كونٍ بلا خالق فلا يرفع الألم، بل يرفع معناه.
\`\`\`

\`\`\`quiz
questions:
  - q: ما الذي تقرّره آية الملك في قوله تعالى إنه خلق الموت والحياة ليبلوَنا؟
    ref: 67:2
    word: ليبلوكم أيكم أحسن عملا
    options:
      - أنّ الدنيا دارُ اختبارٍ بنصّ معلَن من أولها، فوجود الشدائد ليس خللًا في الخطّة
      - أنّ الدنيا دار نعيمٍ خالصٍ لمن أحسن
      - أنّ الموت عقوبةٌ لا غاية لها
      - أنّ الابتلاء لا يصيب إلا العصاة
    answer: 0
    why: الاعتراض بالألم يفترض دينًا وعد بدنيا بلا وجع؛ والإسلام أعلن العكس من أول صفحاته، فهذه دار الامتحان، والجزاء في دارٍ أخرى.
  - q: ما المغزى الدقيق من قصّة موسى والخضر في هذا الباب؟
    options:
      - أنّ عدم رؤيتك للحكمة لا يساوي عدمَها، فقد رأى موسى نفسُه ظلمًا ظاهرًا كان في باطنه رحمة
      - أنّ كلّ إنسانٍ سيفهم حكمة كلّ ألمٍ في الدنيا
      - أنّ الاعتراض على ما نراه منكرًا خطأ دائمًا
      - أنّ الأنبياء لا يخفى عليهم شيء
    answer: 0
    why: موسى ما فهم حتى أُخبر، والمطلوب أقلّ من فهم كلّ حكمة وأصلب، وهو الإقرارُ بأنّ «لا أرى الحكمة» ليست دليلًا على «لا حكمة».
  - q: ماذا يبقى من مشكلة الألم لو فُرض كونٌ بلا خالق؟
    options:
      - يبقى الألم كلُّه كما هو، ويفقد المعنى والعدلَ والجبر، بل تفقد كلمةُ «شرّ» ميزانَها
      - تُحَلّ المشكلة نهائيًّا لأن السؤال يسقط
      - يقلّ الألم في العالم تلقائيًّا
      - يصبح الألم دليلًا على العبث فقط لا غير
    answer: 0
    why: الإنكار لا يرفع سرطانَ الطفل ولا زلزالَ المدينة؛ يرفع فقط المحكمةَ الأخيرة والتعويضَ والمعنى، والاحتجاجُ بالشرّ نفسُه يفترض معيارًا فوق الأمزجة.
\`\`\`
`}),en:Object.assign({"../content/lessons/en/becoming-muslim.md":`---
title: What being Muslim means
description: 'One sentence brings a person into Islam: what the two testimonies say, what they commit you to, and why there is no ceremony, no intermediary, and no gatekeeper at the door.'
tags: [the shahadah, pillars of Islam, articles of faith]
---

> **The one idea:** entering Islam is one sentence said with conviction: no baptism, no ceremony, no intermediary, no gatekeeper. The relationship you are entering is direct, so its door is direct too. Everything past the door comes gradually.

## One sentence

If you have walked with this guide from its beginning, you have arrived at two conclusions: that this universe has one Creator with no partner, and that Muhammad ﷺ is a truthful messenger from Him. The sentence that brings a person into Islam is nothing other than those two conclusions, spoken aloud:

**I bear witness that there is no god but Allah, and I bear witness that Muhammad is the Messenger of Allah.**

- The first half says: nothing deserves worship but Allah alone. That is the summary of the units "Does the universe have a Creator?" and "Who is Allah?".
- The second half says: the man whose evidence you have examined is a messenger from Allah. That is the summary of the Muhammad ﷺ and Qur'an units.

Notice what it is called: a **testimony**. You are not reciting an incantation; you are testifying the way an eyewitness testifies, declaring a conclusion you are convinced of. That is why it is worthless without conviction: the same sentence on a tongue whose heart does not believe it counts for nothing.

If you say it truthfully, what have you committed to? Its entailments: to worship Allah alone, and to take what is authentically from His Messenger ﷺ seriously: learning it, then acting on it as far as you have learned. You have not committed to knowing everything today, nor to mastering everything tomorrow.

## A simplicity that stops the observer

Compare this door with the doors of the major religions: no baptism performed by a cleric, no admission rite, no priest who accepts your repentance or holds the power to refuse it, no committee reviewing your "membership application." Whoever says the two testimonies with conviction is a Muslim from that moment, between him and Allah. Having witnesses present is a good custom for practical purposes (documentation, marriage, pilgrimage papers), not a condition of validity.

This simplicity is not laxness; it follows logically from what the next lesson describes: a relationship with no intermediary cannot coherently have a doorman posted at its entrance. Nor can anyone push you through this door by force: what is required is conviction, and conviction cannot be extracted under duress; the Qur'an itself rules that entry into this religion cannot be by compulsion (2:256).

\`\`\`note
Bathing (ghusl) on entering Islam is an established practice: the Prophet ﷺ told Qays ibn ʿAsim to do it when he accepted Islam (Abu Dawud 355, graded sahih by al-Albani), and Thumamah ibn Uthal was sent to do the same in a report both Sahih collections carry. The jurists differ on its weight: the Maliki and Hanbali schools, in their well-known position, hold it obligatory; the Hanafi and Shafiʿi schools hold it recommended, unless the person already needed a ghusl, in which case it is due. None of them makes it a condition of entering Islam. Islam takes effect with the two testimonies, and the bathing follows.
\`\`\`

## Five pillars of practice

Once inside, what does life in the house look like? The Prophet ﷺ summarized it in five:

\`\`\`hadith
text: 'بُني الإسلام على خمسٍ: شهادةِ أن لا إله إلا الله وأنّ محمدًا رسول الله، وإقامِ الصلاة، وإيتاءِ الزكاة، والحجِّ، وصومِ رمضان.'
source: 'Sahih al-Bukhari 8'
url: 'https://sunnah.com/bukhari:8'
translation: '“Islam is built on five: the testimony that there is no god but Allah and that Muhammad is the Messenger of Allah; establishing the prayer; giving the zakah; the pilgrimage; and fasting Ramadan.”'
\`\`\`

- **The two testimonies:** the door just described.
- **The prayer:** five pauses a day standing before your Lord, the next lesson's entire subject.
- **Zakah:** a small share (2.5%, a quarter of a tenth) of the wealth left over to you, once it reaches a floor called the *nisab* and has sat for a lunar year, going to the poor. The floor is the price of 85 grams of gold or of 595 grams of silver; most scholars say to use whichever is lower so that more of the poor benefit, and in our time that is silver. Below the floor nothing is owed. (Zakat al-fitr is a separate obligation, with no nisab.)
- **Fasting Ramadan:** one month a year, with exemptions for the sick and the traveler.
- **The pilgrimage:** once in a lifetime, for whoever can find a way.

Notice the mercy built into the design itself: every pillar is conditioned on capacity: pilgrimage on the able, zakah on the one with surplus, fasting excused for the one with a valid excuse.

## And six articles of belief

The Prophet ﷺ was asked about iman, in the famous account where Jibril came in the form of a man and questioned him in front of his companions, and he answered:

\`\`\`hadith
text: '… قال: فأخبِرني عن الإيمان. قال: أن تؤمنَ بالله وملائكته وكتبه ورسله واليوم الآخر، وتؤمنَ بالقدر خيرِه وشرِّه. قال: صدقتَ. …'
source: 'Sahih Muslim 8'
url: 'https://sunnah.com/muslim:8a'
translation: '“…He said: Tell me about iman. He replied: That you believe in Allah, His angels, His books, His messengers, and the Last Day; and that you believe in the decree, its good and its hard. He said: You have spoken truly…”'
note: 'At the hadith’s end the Prophet ﷺ told ʿUmar: “That was Jibril, who came to teach you your religion.”'
\`\`\`

Six articles, and you have walked past the evidence for most of them in this guide: Allah (the opening units), His messengers and books (the messengers and why-Islam units), the Last Day (the "why did He create us?" and "why suffering?" lessons). The angels and the decree come to you from the same source whose truthfulness the argument established. That is the difference between blind assent and a trust that built its foundation first, then relied on the proven source for what lies beyond sight.

## “But I'm not ready yet”

\`\`\`doubt
claim: 'I can’t become Muslim now: I’d have to change my whole life at once, learn Arabic, and I’d surely have to be a genuinely good person first, and I’m not.'
answer: |-
  The fear is understandable, but it rests on an inverted picture. Islam meets a person where they stand, and the obligations arrive gradually as knowledge grows, which is exactly how revelation itself came: twenty-three years of step-by-step teaching, and nobody was asked, on the day they entered, for what a twenty-year student is asked. The Companions themselves entered as beginners who did not know the rulings; they learned them after entering, not before.
  Arabic is not a condition: du'a is valid in every language, the short surahs are learned unhurriedly, and hundreds of millions of Muslims today speak no Arabic. And perfection was never the entry requirement; truthfulness is. In fact the door is designed precisely for the imperfect: Everything between you and Allah is forgiven the day you enter, and your page starts white. Rights belonging to other people the scholars treat separately: someone who had been at war with the Muslims and then entered Islam is not pursued for any of it, blood or property. For everyone else, and that is the ordinary case, what you owe a person you still return, as part of Islam itself and not as a leftover debt from the past.
\`\`\`

\`\`\`ayah
ref: 2:286
show: لا يكلف الله نفسا إلا وسعها
translation: '“Allah does not burden any soul beyond its capacity…”'
note: 'The master rule of all obligation in this religion: nobody is asked for more than they can bear; whatever a person genuinely cannot do is lifted from them or eased for them.'
\`\`\`

As for the past you fear will chase you through the door, hear the story of ʿAmr ibn al-ʿAs, who had spent years fighting the Prophet ﷺ, on the day he came to pledge Islam, then pulled back his hand:

\`\`\`hadith
text: '… فقلت: ابسُط يمينك فلأبايعك. فبسط يمينه - قال - فقبضتُ يدي. قال: ما لك يا عمرو؟ قال: قلتُ: أردتُ أن أشترط. قال: تشترط بماذا؟ قلت: أن يُغفَر لي. قال: أما علمتَ أنّ الإسلام يهدِم ما كان قبله؟ …'
source: 'Sahih Muslim 121'
url: 'https://sunnah.com/muslim:121'
translation: '“I said: Stretch out your right hand so I may pledge to you. He stretched it out, and I withdrew mine. He said: What is it, ʿAmr? I said: I want to set a condition. He said: What condition? I said: That I be forgiven. He said: Did you not know that Islam demolishes all that came before it?”'
note: 'ʿAmr feared his past could not be forgiven, yet the condition he came to bargain for was already granted to everyone who enters.'
\`\`\`

\`\`\`rule
Entering Islam is two testimonies said with truthfulness and conviction: no ceremony, no intermediary, no perfection requirement, and witnesses are a custom, not a condition. Then the religion comes unhurriedly: five pillars of practice and six articles of belief, entered according to your capacity, and your page starts white.
\`\`\`

\`\`\`quiz
questions:
  - q: What makes a person a Muslim?
    options:
      - Saying the two testimonies with conviction and truthfulness; no ceremony, no intermediary, no one’s approval
      - A formal admission rite performed by a cleric
      - Mastering Arabic and memorizing the Qur’an first
      - Proving to a religious body that one has become a perfect person
    answer: 0
    why: The testimony is a declaration of conviction between the servant and his Lord; witnesses are a useful custom for practical purposes, not a condition of validity.
  - q: What did the Prophet ﷺ answer ʿAmr ibn al-ʿAs when he set forgiveness as his condition for pledging?
    options:
      - “Did you not know that Islam demolishes all that came before it?” The newcomer’s page starts white
      - That forgiveness requires years of works first
      - That the past stays on the account until expiated by pilgrimage
      - He refused the pledge until ʿAmr had purified himself
    answer: 0
    why: The condition ʿAmr came to bargain for was already granted to everyone who enters; a person’s past does not follow them through the door.
  - q: How does this lesson answer someone afraid they must change their whole life the day they become Muslim?
    options:
      - Obligations arrive gradually as knowledge grows, and no soul is burdened beyond capacity; the entry requirement is truthfulness, not perfection
      - They must master all the pillars before pronouncing the testimonies
      - They get one year’s grace and are then audited on everything
      - Their Islam is invalid until they learn Arabic
    answer: 0
    why: Revelation itself came gradually over twenty-three years, the Companions entered as beginners, and the Qur’anic rule is that no soul is burdened beyond what it can bear.
\`\`\`
`,"../content/lessons/en/before-prophethood.md":`---
title: The truthful, the trustworthy
description: 'Forty years among his people without a single recorded lie. They nicknamed him al-Amin and stored their valuables with him. Then his fiercest enemy testified for him in the court of the Roman emperor.'
tags: [al-Amin, Heraclius, track record]
---

> **The one idea:** before you examine a claim, examine the claimant. A man whose own people tested him for forty years and never caught one lie about human beings. What scale of probability says he suddenly took up lying, and started with God?

## Tests you would apply to anyone

This unit does not ask you to think well of Muhammad ﷺ. It asks the opposite: treat him exactly as you would treat anyone making an enormous claim: check his record before the claim, his motive, his behavior under correction, his access to the knowledge he produced, and his character once he held power and answered to no one. Five tests, one lesson each. This is the first: the record.

## Forty years before the claim

Muhammad ﷺ did not claim prophethood as an unknown young man. He was forty: a whole adult life lived among his people, house by house and market by market. And their verdict on that life was a nickname they gave him before any revelation existed: **al-Amin**, the trustworthy. The nickname itself comes from the sirah, but what stands behind it is in the Sahih. The day he climbed as-Safa to call his people, he asked: if I told you a cavalry force in the valley meant to raid you, would you believe me? They answered in their own words: "We have never found you anything but truthful" (al-Bukhari 4770). That is their testimony, recorded in the soundest book after the mushaf, spoken a moment before they heard the warning he had climbed up to give.

It was not flattery; it was behavior, and it continued even from those fighting him. The Makkans kept depositing their valuables with him while rejecting his message and torturing his followers. The sirah literature (Ibn Hisham’s biography) records that on the very night of his escape from Makkah, with his people plotting to kill him, he left ʿAli ibn Abi Talib behind for one task: to return the deposits to their owners. Hold that scene still for a moment: a people saying “liar” with their tongues, while their own hands said “there is no one else we trust with our money.”

The Qur’an itself argues from this record; it points them to their own experience, not to any testimonial of its own:

\`\`\`ayah
ref: 10:16
highlight: فقد لبثت فيكم عمرا من قبله
translation: '“Say: had Allah willed, I would not have recited it to you, nor would He have made it known to you. I lived among you a whole lifetime before it; will you not use your reason?”'
note: 'The argument, as the commentators read it: you have forty years of data on this man’s honesty. Weigh the claim against the record you yourselves compiled.'
\`\`\`

\`\`\`ayah
ref: 6:33
highlight: فإنهم لا يكذبونك
translation: '“We know well that what they say grieves you. Yet it is not you they disbelieve; it is the signs of Allah the wrongdoers reject.”'
note: 'As the commentators explain: in their own hearts they were not accusing the man of lying, since his truthfulness was tested and known; their quarrel was with what he brought. Abu Jahl said it in as many words: we do not call you a liar, we reject what you have brought.'
\`\`\`

## An enemy’s testimony in an emperor’s court

The strongest document in this file is a conversation preserved with its chain of transmission near the beginning of Sahih al-Bukhari. Heraclius, emperor of the Romans, summoned a party of Qurayshi merchants trading in Syria and asked for the claimed prophet’s closest relative present, to interrogate him. That man was Abu Sufyan, then the leader of Quraysh in its war against Islam and still years away from becoming Muslim. And Heraclius engineered honesty with a clever setup: he stood Abu Sufyan’s companions behind him, instructed to flag every lie.

\`\`\`hadith
text: 'ثم قال لترجمانه: قل لهم إني سائلٌ هذا عن هذا الرجل، فإن كذَبني فكذِّبوه. فوالله لولا الحياءُ من أن يأثِروا عليَّ كذبًا لكذبتُ عنه… قال: فهل كنتم تتّهمونه بالكذب قبل أن يقول ما قال؟ قلتُ: لا… وسألتُك هل كنتم تتّهمونه بالكذب قبل أن يقول ما قال فذكرتَ أنْ لا، فقد أعرفُ أنه لم يكن لِيَذَرَ الكذبَ على الناس ويكذِبَ على الله.'
source: 'Sahih al-Bukhari 7'
url: 'https://sunnah.com/bukhari:7'
translation: '“Heraclius told his interpreter: tell them I am asking this man about that man; if he lies to me, expose him. Abu Sufyan said: by God, had I not been ashamed that they would report a lie against me, I would have lied about him… He asked: did you ever accuse him of lying before he said what he said? I said: no… (Then Heraclius said:) I asked whether you ever accused him of lying before he said what he said, and you said no, so I know he was not a man to leave off lying to people and then go and lie about God.”'
note: 'The full hadith is long; this is its decisive stretch. Abu Sufyan admits he wanted to lie and could not, so his testimony for the Prophet ﷺ came out of him against his will.'
\`\`\`

Pause on what just happened, because history rarely supplies it:

- **The witness is an enemy at war** with the claimant, with every motive to demolish the claim, and he says openly that he wished he could lie.
- **The setting forbids lying**: his own people stand behind him, ready to repeat every word back home.
- **The examiner is a foreign king with no stake** in an Arabian prophet’s claim.

Now look at Heraclius’s inference. It is this lesson’s entire argument, stated by a Roman emperor in the seventh century: a man who spent forty years refusing to lie about people (where lying is easy and profitable) does not open his career of lying with the most enormous lie available, a lie about God.

## “Honest with people, but sincerely mistaken about revelation”

\`\`\`doubt
claim: Honesty in trade and deposits does not prove a claim of prophethood. A man can be perfectly truthful with people and still misread some inner experience as revelation; sincere, but wrong.
answer: |-
  A fair objection, and this lesson deliberately claims no more than it can carry. One thing needed proving here: that the “deliberate liar” hypothesis is dead, killed by the testimony of his own enemies. It is. Notice that Quraysh themselves could never settle on an accusation: sorcerer, poet, soothsayer, madman, charges that contradict one another, while the only useful charge was unavailable to them: “we have caught him lying.”
  The “sincere but deluded” hypothesis is a different claim with its own tests, and the coming lessons run them: does delusion produce one coherent text across twenty-three years? Does a delusion publicly correct and embarrass the man it serves? Does it announce the near future and turn out right? Keep the hypothesis on the table and test it with us, lesson by lesson; that is all this unit asks.
\`\`\`

\`\`\`rule
A man tested by his own people for forty years and nicknamed the Trustworthy; entrusted with their valuables even while they fought him; vouched for by his enemy in a setting where lying was impossible: the “liar” hypothesis cannot survive contact with this record. Test one of five: passed.
\`\`\`

\`\`\`tip
Notice that this lesson’s argument was not composed by Muslims. Heraclius built it himself, step by step, out of the answers of the Prophet’s ﷺ own enemy. When two opposing sides converge on the same conclusion by different routes, that is the signature of a fact, not of propaganda.
\`\`\`

\`\`\`quiz
questions:
  - q: What makes Abu Sufyan’s testimony before Heraclius strong by the standards of historical criticism?
    options:
      - It is a wartime enemy’s testimony, given in a setting where lying was impossible, and he admitted he wished he could lie
      - Abu Sufyan had already become Muslim, so he testified as a believer
      - Heraclius converted afterwards, which retroactively validated the exchange
      - It was compiled centuries later by court historians
    answer: 0
    why: A hostile witness conceding a point against his own side is the strongest kind of testimony, and Abu Sufyan states outright that only the fear of being exposed kept him honest.
  - q: What inference did Heraclius draw from the answer that Muhammad ﷺ had never been accused of lying?
    options:
      - A man never caught lying about people across a whole lifetime would not begin his lying with a lie about God
      - Anyone honest in trade must be a prophet
      - Kings can detect lies by intuition
      - A growing number of followers always proves a claim true
    answer: 0
    why: That is the track-record argument itself, formulated by a non-Muslim examiner from the answers of a non-Muslim enemy, not by the claim’s own followers.
  - q: How does this lesson handle the hypothesis “honest with people, but sincerely deluded about revelation”?
    options:
      - It grants that this is a separate claim and defers it to the coming lessons’ tests, having eliminated only the deliberate-liar hypothesis here
      - It dismisses it as an insult unworthy of reply
      - It argues that good character alone proves prophethood
      - It denies that humans can be sincerely mistaken
    answer: 0
    why: The lesson’s claim is deliberately narrow. Enemy testimony kills the liar hypothesis; the delusion hypothesis gets its own tests (coherence, self-correction, verified predictions) in the rest of the unit.
\`\`\`
`,"../content/lessons/en/big-questions.md":`---
title: Questions that never expire
description: 'Where did I come from? Why am I here? Where am I going? Why nobody gets to ignore these questions, and how to read them fairly.'
tags: [the big questions, fairness, method]
---

> **The one idea:** everyone answers the big questions of existence, with their life if not with their words. The person who says “I don’t think about that” has already answered; they just answered without looking.

## Three questions you already know

At some honest moment (a long night, a funeral, a clear sky) you have asked yourself:

- **Where did I come from?** Am I the output of a blind accident, or is there intent behind my existence?
- **Why am I here?** Does my life have a purpose, or am I filling time until it runs out?
- **And where to?** Is death the last line, or is there something after it?

These are not philosophers’ questions. Every human being, in every language and every century, has asked them. And the Qur’an does not scold anyone for asking; it asks them itself:

\`\`\`ayah
ref: 23:115
highlight: أفحسبتم أنما خلقناكم عبثا
translation: '“Did you think We created you in vain, and that you would not be returned to Us?”'
note: 'A question aimed at anyone who assumes existence has no purpose: do you really think that?'
\`\`\`

\`\`\`ayah
ref: 75:36
translation: '“Does man think he will be left neglected?”'
note: '“Neglected” (sudā) means left without command, prohibition, or accountability. The question is rhetorical, expecting the answer “surely not.”'
\`\`\`

Notice the method: the Qur’an argues with a question, not an insult. That is the register of this entire guide.

## “I don’t know” is not a neutral position

\`\`\`doubt
claim: These are big questions nobody can settle. The sensible thing is to live your life and not busy yourself with them.
answer: |-
  Postponing the answer is an answer. The person who says “I won’t look into it” lives, in practice, exactly like someone who decided existence has no purpose: eat, work, sleep, wait. They have picked an answer and accepted its consequences; they just picked it without looking.
  And a question deserves effort in proportion to what rides on it. If you were told your food might be poisoned, you would not say “the sensible thing is not to dwell on it.” Everything rides on these questions: what your life means, how your actions are weighed, and where you are going. If any question on earth deserves serious hours, it is this one.
\`\`\`

Strange, isn’t it? A person will spend weeks comparing phones or cars, reading reviews, weighing trade-offs, and then spend an entire lifetime without one serious hour on the question the lifetime itself depends on.

## How to read this guide

This guide is thirty lessons arranged as an argument: each unit builds on what the ones before it established, and nothing asks for your agreement before earning it. The early units argue from reason and observation alone. The Qur’an enters, at first, as a text making an argument, not yet as an authority, until the case that it is revelation has actually been made.

We only ask of you what you would ask of anyone arguing with you:

- **A fair mind:** weigh an argument by its strength, not by how familiar its conclusion feels.
- **An honest intent:** be willing to accept a conclusion if its case stands; otherwise reading is theater.
- **Patience:** hear the whole argument before judging it; some answers complete in a later lesson.

\`\`\`rule
Nobody gets the luxury of neutrality on the big questions: whoever doesn’t answer with their reason answers with their habits. The only rational position is serious, fair inquiry, which is what you are doing right now.
\`\`\`

\`\`\`tip
Read with “what’s the evidence?” on your lips at every claim. This guide wants that question and does not fear it: every lesson cites its sources, and every verse is copied from the mushaf by machine, never typed by hand.
\`\`\`

\`\`\`quiz
questions:
  - q: Why isn’t “I just won’t think about these questions” a neutral position?
    options:
      - Because the person lives by the consequences of one particular answer, chosen without examination
      - Because thinking about the questions is legally required
      - Because only philosophers are allowed to postpone answering
      - Because the big questions only occur to religious people
    answer: 0
    why: Postponing the inquiry doesn’t postpone the living. In practice they live as if existence has no purpose, an answer adopted without evidence.
  - q: How does the Qur’an deal with the big questions of existence?
    options:
      - It raises them itself and argues through them
      - It forbids thinking about them
      - It treats them as a specialists-only topic
      - It ignores them as too obvious to discuss
    answer: 0
    why: '“Did you think We created you in vain?” is the Qur’an’s own question. It addresses the mind and invites examination, not blind assent.'
  - q: What order does this guide follow?
    options:
      - Reason and observation first; the Qur’an is treated as revelation only after that case is made
      - It assumes the Qur’an’s authority from page one and derives everything from it
      - It lists all views and refuses to weigh them
      - It starts with law and ritual, then gets to belief
    answer: 0
    why: Each unit builds only on what the previous ones established, so the reader is never asked to grant something that has not yet been argued.
\`\`\`
`,"../content/lessons/en/chance.md":`---
title: Chance writes no books
description: 'What does “it just happened” mean when said seriously? An honest pricing of the chance hypothesis, where evolution actually stands relative to the argument, and what Muslims agree and genuinely differ on, named as such.'
tags: [chance, origin of life, evolution, the creation of Adam]
resources:
  - title: 'Human Origins: Theological Conclusions and Empirical Limitations (Yaqeen Institute)'
    url: https://yaqeeninstitute.org/read/paper/human-origins-part-1-theological-conclusions-and-empirical-limitations
    note: 'A long research paper setting out what the texts require about Adam’s creation and where legitimate difference remains, without settling the empirical question.'
---

> **The one idea:** “chance” is not a force that does anything; it is the name we give to the absence of intent. The greater the system to be explained, the further “it happened with no intent” drifts from being an explanation and the closer it comes to being an escape from one. And this guide's argument neither stands on refuting evolution nor falls by accepting it, because it lives where evolution has no say.

## What does “chance” claim, said seriously?

When someone says "the universe and life arose by chance," chance is not an agent that replaced the Creator; chance is a *description of the absence* of an intending agent. The sentence means, precisely: all of this happened without anything intending it. That is a claim that can be weighed, and we will weigh it with no invented numbers; honest qualitative pricing is enough.

If you found a safe standing open, its combination long, two explanations offer themselves: the dials spun at random and happened to hit the code, or a hand that knew the code opened it. The first is "possible" in a cold mathematical sense, but you do not live by it, and the longer the code, the more preferring randomness becomes evasion rather than explanation. Now look at what needs explaining at life's origin: the smallest known living cell is a system that feeds itself, repairs itself, and copies itself, run by a genetic code that is read and translated by machines which are themselves built from the code's instructions. A single functional protein is a precisely ordered chain; the possible arrangements of its letters are beyond counting, and the working ones are a small fraction of that space. Exactly how small is still an open question in biochemistry: only one functional protein has ever been isolated from raw random sequence, and a 2021 review calls it premature to generalize from a single example.

If it is said that "long ages work miracles", the answer is that time alone favors nothing. Time only works when something exists to *keep* the successful attempts and build on them. Origin-of-life researchers have proposed mechanisms for exactly that keeping, before any cell: autocatalytic cycles, mineral-surface catalysis, self-copying RNA. Chemists have in fact built molecules that copy themselves, but only after designing them, and only when handed ready-made pieces that already spell out most of the answer. Getting a copier to assemble itself out of simple ingredients and then copy itself, the way the first one had to, is what nobody has reached. The question is open, and that is all we claim. And that is exactly where the next point lands.

## A tornado in a junkyard

There is a famous analogy from the astronomer Fred Hoyle: the probability of the first life arising by sheer randomness is like a tornado sweeping through a junkyard and assembling, from the scrap, a jetliner ready for takeoff. Honesty requires two things be said alongside it. Hoyle was not arguing for the God of Islam or of any religion; he was hard on organized religion, and the book carrying the analogy runs it toward life arriving from outside the earth, directed by a cosmic "superintellect" he never identified with a Creator. And biologists answered that it prices a single one-shot random assembly, which is not what origin-of-life research proposes. So take it for what it is worth: a picture of the size of the gap, not a proof about it. What survives the objection is narrower and sound: selection cannot start improving the copying until there is something that copies itself at all.

## Where does evolution stand relative to this argument?

Here is a point enthusiasts on both sides get wrong, so take it precisely: **this guide's argument does not need evolution to be false.**

Evolution (grant it whole, as its proponents present it) begins its work with something that copies itself and passes on its traits already in hand. Its declared mechanism, variation and selection across generations, only operates among organisms that reproduce; before the first replicator there is no selection and no generations, only chemistry that prefers nothing over anything. So the theory, at the very maximum of its claims, speaks about the *diversification* of life after it exists, and says not one word about the two questions the previous unit was built on: where did the first cell come from, and why were the universe's laws and constants such that chemistry, stars, and life were possible at all?

\`\`\`doubt
claim: 'Evolution explained the complexity of living things through a blind mechanism (mutation and natural selection), so design is no longer a necessary explanation, and the argument from precision collapses.'
answer: |-
  Grant the whole mechanism, and what it explained, at most, is the transformation of living things from form to form, starting from an organism that reproduces and passes traits on. But it borrowed the biggest item in the whole problem: a first cell carrying a code and copying itself. Selection cannot operate before that exists, because it only selects among reproducers. Explaining the diversity of books does not explain the existence of the alphabet.
  Moreover, the mechanism itself runs inside a calibrated stadium: atoms capable of chemistry, stars that cook the elements, a planet in the habitable zone, and constants which, slightly shifted, would have allowed none of it. Explaining the plays of the game by the rules of the game does not explain why there is a stadium.
  This guide's precision argument hangs on the origin of life and the calibration of the cosmos, both outside the theory's borders by its own practitioners' admission. The argument is untouched.
\`\`\`

## What Muslims agree on, and what they differ on

Honesty requires sorting this file by grade; not everything in it stands at one level.

**Agreed upon:** that Adam, peace be upon him, was created directly and specially, not born of parents, and that all humans are his descendants. This is the explicit sense of texts no Muslim reads away:

\`\`\`ayah
ref: 3:59
highlight: كمثل آدم خلقه من تراب
translation: '“Indeed, the example of ʿIsa with Allah is like that of Adam: He created him from dust, then said to him ‘Be,’ and he was.”'
note: 'The verse argues against those who found Jesus’s fatherless birth too much by citing one created with no parents at all. Adam’s creation from dust is the very hinge of the argument, not a passing detail open to reinterpretation.'
\`\`\`

\`\`\`ayah
ref: 38:71
highlight: خالق بشرا من طين
translation: '“When your Lord said to the angels: I am creating a human being from clay.”'
note: 'The special creation announced before the act, in address to the angels.'
\`\`\`

\`\`\`ayah
ref: 38:72
highlight: ونفخت فيه من روحي
translation: '“So when I have fashioned him and breathed into him of My spirit, fall down to him in prostration.”'
note: 'Fashioning, breathing of the spirit, and the honoring prostration: a narrative of special origination from start to finish, not one link in a chain.'
\`\`\`

**Genuinely differed on:** revelation's verdict on evolution as a mechanism *outside* Adam: the rest of living things, or human-like creatures before Adam. Qualified contemporary researchers, among them Dr. Nazir Khan and Dr. Yasir Qadhi in the paper recommended above, and Dr. Shoaib Ahmed Malik in his *Islam and Evolution*, have held that the texts neither affirm nor deny this, so reconciliation is possible while Adam's special creation stands as stated; other scholars reject the theory outright, Shaykh Ibn Baz among them in [his answer on Darwin's theory](https://binbaz.org.sa/fatwas/7143/%D8%A7%D9%84%D8%B1%D8%AF-%D8%B9%D9%84%D9%89-%D9%86%D8%B8%D8%B1%D9%8A%D8%A9-%D8%AF%D8%A7%D8%B1%D9%88%D9%8A%D9%86), where he holds that the descent of man from apes contradicts the Book, the Sunnah and the consensus of the early generations, and that each kind is its own creation. That is a live disagreement among qualified people, and we transmit it as it is.

\`\`\`note
This lesson does not arbitrate between the two camps, and it does not need to: its argument, as you saw, rests on the origin of life and the calibration of the cosmos, which stand identically for those who accept the theory outside Adam and those who reject it. Whoever wants the question in depth will find, in this lesson's resources, a peer-reviewed paper laying out the limits and conditions of reconciliation.
\`\`\`

\`\`\`rule
“Chance” is a name for a missing explanation, not a rival one, and it recedes as the system grows. Evolution, at the maximum of its claims, starts with the cell already in hand, inside a constant-calibrated universe, so it touches the case for the Creator nowhere. Adam’s special creation is agreed upon among Muslims; what lies beyond it, outside Adam, is a genuine scholarly difference, named as such here, and not settled here.
\`\`\`

\`\`\`quiz
questions:
  - q: Why does “chance” fail as an explanation for the origin of life?
    options:
      - Because it is not an agent but a name for the absence of intent, and the greater the system, the more preferring it becomes an escape from explanation
      - Because scientists have proven its impossibility with final, settled numbers
      - Because everything in the universe is necessarily intended by rational necessity
      - Because mathematical probabilities do not really exist
    answer: 0
    why: The lesson deliberately used no invented numbers; honest qualitative pricing (like the open safe with the long code) is enough to show “it happened with no intent” recede as the system grows.
  - q: Where does the theory of evolution stand relative to this guide’s argument for the Creator?
    options:
      - It leaves the argument untouched even if granted whole, since it begins with a reproducing cell in hand and says nothing about life’s origin or the calibration of the cosmos
      - It demolishes the argument at its root, having explained everything
      - It directly proves the argument with nothing further needed
      - The two questions are entirely unrelated in every respect
    answer: 0
    why: Natural selection only operates among reproducers; the first cell and the cosmic constants sit outside the theory’s borders by its own practitioners’ admission, and that is where the argument lives.
  - q: What do Muslims agree on regarding evolution, and what do they differ on?
    ref: 3:59
    word: كمثل آدم خلقه من تراب
    options:
      - Agreed that Adam was specially created with no parents; differed on whether revelation can be reconciled with evolution outside Adam
      - Muslims agree on accepting the whole theory for all organisms
      - Muslims agree that disagreement about Adam’s own creation is acceptable
      - There is no agreed-upon point in the question at all
    answer: 0
    why: Adam’s special creation is the explicit sense of the texts and the very hinge of 3:59’s argument; evolution outside the human case is a question qualified researchers genuinely differ on; the lesson transmits the difference and does not settle it.
\`\`\`
`,"../content/lessons/en/criteria.md":`---
title: By what scale do we weigh?
description: 'Before asking which religion is true, fix the criteria; otherwise the winner is whoever raised us. Five tests a fair truth-seeker would accept in any field, applied to every religion with the same severity, Islam first.'
tags: [criteria of truth, inherited religion, fairness]
---

> **The one idea:** whoever starts comparing before fixing the scale will always crown the religion of their upbringing. So the first question is not “which religion?” but “by what standard?” Then the standard gets applied to everyone without favoritism, with Islam first onto the scale.

## The scale before the weighing

Most people on earth follow the religion of their parents. That observation insults no one, but it exposes something important: if we leave the question without a standard, the real answer each of us is working with is “the religion I happened to be born into.” And place of birth is a geographic accident. Accidents prove nothing.

The Qur’an itself names this posture and condemns it:

\`\`\`ayah
ref: 2:170
highlight: بل نتبع ما ألفينا عليه آباءنا
translation: '“When it is said to them, ‘Follow what Allah has sent down,’ they say, ‘No, we follow what we found our fathers upon.’ Even if their fathers understood nothing, and were not guided?”'
note: 'The verse does not condemn loving one’s parents. It condemns treating inheritance alone as an argument, and its closing question makes the point: what was inherited must itself be examined.'
\`\`\`

And here is where honesty bites: this argument binds the person who inherited Islam exactly as it binds everyone else. Someone who is Muslim merely because his father was Muslim stands on the same ground as someone who inherited any other religion. This entire guide exists to move the reader, whatever they inherited, from inheriting an answer to examining it.

## The Qur’an demands proof

When the Qur’an confronted competing religious claims, it did not say “to each their own,” and it did not say “believe without asking.” It said a third thing:

\`\`\`ayah
ref: 2:111
highlight: قل هاتوا برهانكم
translation: '“They say, ‘None will enter Paradise unless he is a Jew or a Christian.’ Such are their wishes. Say: bring your proof, if you are truthful.”'
note: 'The context is an exclusive salvation claim offered without evidence. The reply is a complete methodology in three words: a claim is neither accepted nor dismissed on its own; its proof is demanded.'
\`\`\`

And whoever demands proof from others has licensed others to demand it from him. That rule opens this whole unit: we will demand the proof from Islam itself.

## Five fair criteria

What would count as a scale that an honest truth-seeker accepts in any field, in history and medicine as much as in religion?

\`\`\`compare
columns:
  - title: What is not a scale
    points:
      - Where you were born and who raised you
      - The familiarity of rituals and the warmth of memories
      - How many followers a religion has, or how powerful they are
      - What we would find comforting if it were true
  - title: What is a scale
    points:
      - A concept of God that survives reason
      - A revelation whose text is preserved
      - Internal coherence, no contradiction
      - A message addressed to all people, not a tribe
      - A law human beings can actually live
\`\`\`

Each criterion has its reason:

1. **A concept of God that survives reason.** The earlier units established a Creator who is one without partner, first without beginning, and in need of nothing. Any religion offering a God who multiplies, or needs, or is described in ways that unmake His perfection has already failed the standard that reason itself established, before we open its book.
2. **A revelation whose text is preserved.** A message whose original is lost, or mixed with human words, cannot bind anyone to its letter. How could a person be held to a text he has no way to verify? Preservation is not a bonus feature; it is the precondition of a message having authority at all.
3. **Internal coherence.** Truth does not contradict itself. A book that asserts a thing and its opposite on the fundamentals of belief cannot be the reference for the greatest questions.
4. **A message for all people.** The Lord of all creation is not the god of one tribe. A religion that made salvation a matter of bloodline would testify against itself that it is narrower than the Lordship of the Creator of everyone. This is a test, not an accusation aimed at anybody: most traditions, asked directly, deny that they do this, and their answer is part of what gets weighed.
5. **A law humans can live.** A law nobody can keep is either abandoned or turns its followers into pretenders. Islam states this principle about itself, and that claim will be weighed like every other:

\`\`\`ayah
ref: 2:286
show: لا يكلف الله نفسا إلا وسعها
translation: '“Allah does not burden any soul beyond its capacity.”'
note: A rule the Qur’an announces over its entire law. Here it stands as a claim on record (something Islam can be held to), not a virtue we grant in advance.
\`\`\`

## The scale weighs us too

These criteria were not tailored so Islam would win. They are what any rational person applies to any large claim: does its foundation survive reason? Did its text reach us intact? Is it consistent with itself? Whom is it for? Can it be lived?

And the rest of this unit does what it promises. The next lesson puts the preservation claim under historical examination; the one after it examines the claims of completion and universality. Then the following two units present the positive evidence: the truthfulness of the Messenger ﷺ and the miracle of the Qur’an. If Islam fails one of these tests, it fails. That is what it means for a scale to be a scale.

\`\`\`doubt
claim: Every religion claims to be the truth, and the claims contradict each other, so they cancel out, and the only rational move is to walk away from all of them.
answer: |-
  Contradiction rules out all of them being true together; it does not rule out examining them one by one. People disagree widely about medicine, history, and economics, and no rational person concludes “therefore there is no truth in medicine; stop treating patients.” Disagreement about an answer does not abolish the question. It obligates investigation.
  And walking away from every religion is not a position outside the competition; it is a claim like any other, owing exactly as much proof as the rest. The fair path is neither “they are all the same” nor “they are all false” by a stroke of the pen, but one scale applied to all of them, which is what you are holding right now.
\`\`\`

\`\`\`rule
The question “which religion?” is preceded by “on what scale?” The fair scale: a concept of God that survives reason, a preserved revelation, internal coherence, a message to all people, and a livable law. Whoever accepts this scale is bound to place the religion of his own parents on it before anyone else’s, which is exactly what the rest of this unit does with Islam.
\`\`\`

\`\`\`note
These criteria are conditions of elimination, not proofs of truth: passing them keeps a claim in the field; it does not establish it by itself. The positive case (the truthfulness of the Messenger ﷺ and the miracle of the Qur’an) has its own appointment in units seven and eight. All this lesson asks of you is the scale.
\`\`\`

\`\`\`quiz
questions:
  - q: Why fix the criteria before comparing religions?
    options:
      - Because comparison without a fixed standard usually ends with the religion of one’s upbringing winning through familiarity, not truth
      - Because having criteria removes the need to examine evidence afterwards
      - Because all religions are equal, so comparison is pointless
      - Because setting criteria guarantees Islam wins in advance
    answer: 0
    why: Without a fixed scale, inheritance and familiarity judge for us unnoticed. A fair scale is applied to the seeker’s own religion before anyone else’s.
  - q: What is the Qur’an’s position on religion held by inheritance alone?
    ref: 2:170
    word: بل نتبع ما ألفينا عليه آباءنا
    options:
      - It condemns it and demands examination, an argument that binds those who inherited Islam just as it binds everyone else
      - It accepts it as long as what was inherited is Islam
      - It condemns loving and honoring one’s parents
      - It treats all religions as equally valid inheritances
    answer: 0
    why: The verse condemns treating inheritance alone as an argument, and the Qur’an itself demands proof, so a Muslim by birth is required to examine, like anyone else.
  - q: How does this lesson answer “contradictory religious claims cancel each other out”?
    options:
      - Contradiction rules out all being true together, but not examining them one by one, as we do in every disputed field
      - The objection is correct, and abandoning all religions is safest
      - Religions do not actually contradict each other
      - We should decide between them by counting followers
    answer: 0
    why: Disagreement about an answer does not abolish the question; people disagree about medicine and history, then investigate rather than shrug. And rejecting all claims is itself a claim that owes proof.
\`\`\`
`,"../content/lessons/en/design.md":`---
title: Precision is not an accident
description: 'The Qur’an doesn’t assert design and move on; it names its exhibits and commands you to look, again and again. And the closer humanity has looked, the deeper the precision has gone.'
tags: [cosmic signs, fine-tuning, the design argument]
resources:
  - title: Al-Saʿdi’s tafsir of the al-Ghashiyah verses
    url: 'https://quran.com/88:17/tafsirs/ar-tafseer-al-saddi'
    note: The classical walkthrough (in Arabic) of the same four exhibits this lesson tours.
---

> **The one idea:** this argument has two layers. A book that commands looking and points at specific exhibits; and a modern science that, every time it looked closer, found finer calibration. The two layers are one argument: *look*, it said; we looked, and there it was.

## A book that says: look

Many creeds ask you to close your eyes and believe. This book insists on the opposite: it pries your eyes open, turns your face toward named exhibits, and asks: *how?*

Take the gallery of Surat al-Ghashiyah: four exhibits, arranged around the desert traveler who first heard these verses: his mount, what is above him, what is around him, what is under his feet:

\`\`\`ayah
ref: 88:17
highlight: أفلا ينظرون
translation: '“Do they not look at the camel, how it was created?”'
note: 'The gallery opens with the thing its first audience knew best. To them the camel was no passing sight; it was survival equipment in land that kills. And someone who knows a thing intimately sees in it what a tourist never will.'
\`\`\`

Look with him. A reservoir of fat in the hump that becomes food in famine; a drinking capacity of dozens of liters in minutes, then long days without water that would kill another animal; nostrils that seal against sand; double rows of lashes guarding the eye in a storm; a foot broad enough not to sink where hooves sink; a body that lets its own temperature swing across a range that would kill other mammals, all to save its water. A complete, spec-sheet desert machine, delivered precisely to the people of the desert.

\`\`\`ayah
ref: 88:18
translation: '“And at the sky, how it was raised?”'
note: 'A raised roof over your head that needs no pillars and no maintenance, held by laws that never tire, and the traveler navigates by its stars through darkness with no landmarks.'
\`\`\`

\`\`\`ayah
ref: 88:19
translation: '“And at the mountains, how they were set up?”'
note: 'Mountains stationed on the horizon: the fixed points a traveler steers by, the ground steadied around him, as the commentators put it. The sense every observer witnesses directly, with no strained scientific claim smuggled into the verse.'
\`\`\`

\`\`\`ayah
ref: 88:20
translation: '“And at the earth, how it was spread out?”'
note: 'Spread out: made walkable, farmable, buildable for those living on it. A description of its lived surface; the verse says nothing about planetary geometry.'
\`\`\`

Then the Qur'an lifts the gaze from the desert gallery to the whole scene:

\`\`\`ayah
ref: 3:190
highlight:
  - إن في خلق السماوات والأرض
  - لأولي الألباب
translation: '“Indeed, in the creation of the heavens and the earth and the alternation of night and day are signs for those of understanding.”'
note: 'The signs are on display, but they are read on one condition: a mind actually in use. In this book, looking is an act of worship, not a temptation.'
\`\`\`

## The repeated-glance challenge

Then the Qur'an goes further than inviting a look. It dares the looker to find a flaw.

\`\`\`ayah
ref: 67:3
highlight: فارجع البصر هل ترى من فطور
translation: '“…You do not see in the creation of the Most Merciful any inconsistency. So return your gaze: do you see any rifts?”'
note: 'The verse does not say believe; it says inspect: send your own gaze back out and hunt for the defect.'
\`\`\`

\`\`\`ayah
ref: 67:4
translation: '“Then return your gaze twice again: your gaze will come back to you humbled, and worn out.”'
note: '“Twice again”: time after time. The gaze returns empty-handed and exhausted; the standing invitation to repeat the inspection. The exact opposite of “don’t ask.”'
\`\`\`

Pause on the fairness of that. What kind of text bets that the second, tenth, and thousandth look will deepen the looker's awe rather than expose a defect? A seller of counterfeit goods hurries the sale and hates scrutiny. This text says: turn it over as long as you like.

## Then came the microscopes and telescopes

Centuries passed, and we acquired instruments for "returning the gaze" that no one could have imagined. What did we find?

- **In physics:** the universe's structure rests on fundamental constants (the strength of gravity, of the nuclear force, and others) where slight deviations would mean no stable stars, no stellar forging of chemistry's elements, no life. The phenomenon is called **fine-tuning**, it is taken seriously by physicists on both sides of the God question: Steven Weinberg, an atheist, called the cosmological constant "one veritable crisis" in physics, and Sean Carroll, also an atheist and arguing against the design argument, still calls its value "a fine-tuning by anyone's estimation". How sharp any one case is keeps being revised, and it would be dishonest to hide that. The carbon resonance Hoyle predicted was for decades the showpiece example; later work by the physicists who computed it has loosened it, and a universe built differently could make carbon by other routes entirely. Others question the framing rather than the numbers. The scope is limited too: Fred Adams (2008) found that roughly a quarter of one region of parameter space still permits stars. So the argument here leans on the strongest cases, not on a count of them.
- **In biology:** the cell once described as "simple" turned out to be an automated factory: a genetic code that is copied, proofread, and error-corrected; protein production lines; transport gates; power stations. And the eye reading this line: a self-adjusting lens, a color-discriminating sensor built of layered specialist cells, and nerves delivering the image upside-down for the brain to right.

The two layers make one argument: the book said *look* fourteen centuries ago and dared you to find a rift, and every century that looked deeper found finer workmanship.

\`\`\`ayah
ref: 27:88
show: صنع الله الذي أتقن كل شيء
translation: '“…the work of Allah, who has perfected everything…”'
note: 'The verse’s opening, in the mainstream tafsir, concerns scenes of the Last Day; what this lesson cites is the general description it states: His making is a making of perfection, witnessed at every scale of looking, from the traveler’s eye to the microscope.'
\`\`\`

## “The multiverse explains it”

\`\`\`doubt
claim: 'Fine-tuning doesn’t require a designer. The multiverse is not a hypothesis invented for the purpose: it falls out of eternal inflation and the string landscape, both of which have motivations independent of the God question. Countless universes with varying constants, and we necessarily find ourselves in one whose constants permit observers. The tuning that astonishes you is a selection effect, not a sign of intent.'
answer: |-
  Three observations, calmly. First: most versions of it are beyond the reach of observation. Possible signatures in the background radiation from colliding bubbles have been proposed and looked for, and nothing has been found to date. So it remains a theoretical proposal, a point physicists inside the field themselves acknowledge.
  Second: it is an enormous multiplication of entities with no observational witness. We impute no motive to anyone; the hypothesis has physical reasons behind it. The point is only that the economy-of-explanation razor, usually brandished at faith, cannot exempt this proposal either.
  Third, and sharpest: the supposed universe-generator would itself need calibrated machinery (laws that produce universes and vary their constants systematically), so the tuning we set out to explain has moved up one floor, not gone away. This lesson claims no knock-down mathematical proof; it says only that intent outweighs "it just fell out that way" beyond serious comparison, and a fair mind weighs rather than fleeing the scales.
\`\`\`

\`\`\`rule
The Qur’an never asks for eyes-shut belief: it displays cosmic exhibits, commands looking, and dares the looker to find a flaw however many times they look. Modern looking, from the constants of physics to the cell’s factory floor, found the precision deepening at every scale. Consistent precision at every level of magnification is the signature of intent, not the residue of accident.
\`\`\`

\`\`\`tip
Run the challenge yourself tonight: look at the sky, then return your gaze, time after time. The verse asks nothing more of you than that, and it is confident about how the experiment ends.
\`\`\`

\`\`\`quiz
questions:
  - q: What is the Qur’an’s method in presenting the case for a Creator, as seen in al-Ghashiyah and al-Mulk?
    ref: 88:17
    word: أفلا ينظرون إلى الإبل كيف خلقت
    options:
      - It names observable exhibits, commands looking at them repeatedly, and dares the looker to find a flaw
      - It demands submission first and discourages questions
      - It relies on promises and threats without exhibits
      - It refers the reader to the earlier philosophers
    answer: 0
    why: 'The exhibits are named one by one (the camel, the sky, the mountains, the earth), and the command is explicit: look, then return your gaze twice again.'
  - q: What does “fine-tuning” mean in physics?
    options:
      - That slight deviations in the universe’s fundamental constants would mean no stars, no chemistry, no life
      - That the laws of physics are too complicated for non-specialists
      - That the universe photographs beautifully
      - That the earth sits at the exact center of the universe
    answer: 0
    why: Fine-tuning is a claim about how sensitive the universe’s structure is to its constants’ values, accepted as real by physicists regardless of how they explain it.
  - q: How does this lesson answer the multiverse hypothesis?
    options:
      - Unobservable in principle, multiplies entities to avoid an agent, and the universe-generator would itself need tuning
      - It has been observationally disproven
      - It accepts it, since it doesn’t conflict with a Creator
      - It rejects it because its proponents lack credentials
    answer: 0
    why: The sharpest point is that the hypothesis relocates the tuning problem one level up instead of solving it, while standing beyond observation by its own construction.
\`\`\`
`,"../content/lessons/en/direct-connection.md":`---
title: A direct line
description: 'No priest, no intermediary, no appointment needed: what the relationship with Allah feels like from inside: supplication with no doorman, nearness in prostration, and a sweetness the heart actually tastes.'
tags: [dua, prayer, nearness to Allah]
---

> **The one idea:** the previous units established that Allah exists and that His Messenger told the truth. This lesson answers a different question: what does the relationship look like from the inside? Islam's answer: an open line with no intermediary and no barrier: you and Allah, directly, at any moment you choose.

## A verse with no intermediary even in its grammar

Surat al-Baqarah carries a run of legislation verses on one recurring pattern: *they ask you about such-and-such: **say**…* But when the question was about Allah Himself, the word "say" fell away:

\`\`\`ayah
ref: 2:186
highlight: فإني قريب
translation: '“And when My servants ask you about Me, indeed I am near. I answer the call of the caller when he calls on Me…”'
note: 'Watch the grammar: it does not read “say to them: I am near.” The answer arrives with no relay instruction, as if the nearness took shape in the verse’s own structure. And note the answer itself: near; answering the caller who calls. Its one condition is that you do the calling.'
\`\`\`

This is no passing rhetorical flourish; it is this religion's creed about the entire relationship: **no intermediary.** No priest holding the keys of absolution, no saint needed to pass the message up, no approved language, no office hours. Another verse says He is nearer to a person than his own jugular vein (50:16), and He says:

\`\`\`ayah
ref: 40:60
highlight: ادعوني أستجب لكم
translation: '“And your Lord says: call on Me and I will answer you…”'
note: 'A command to supplicate and a promise to answer, with no intermediary clause and no venue requirement. Du’a is valid in every language and every posture: walking, riding, lying down.'
\`\`\`

If you have ever felt the need for someone to whom you could pour out what can be said to no one, this is the door, and it is open right now.

## The nearest you ever are

And the Prophet ﷺ named the nearest point on this line:

\`\`\`hadith
text: 'أقربُ ما يكون العبدُ من ربّه وهو ساجد، فأكثِروا الدعاء.'
source: 'Sahih Muslim 482'
url: 'https://sunnah.com/muslim:482'
translation: '“The nearest a servant is to his Lord is while prostrating, so supplicate abundantly then.”'
note: 'The body’s lowest posture, forehead on the ground, is the station of greatest nearness. An equation that inverts pride’s arithmetic: you go down, and you rise.'
\`\`\`

Here the meaning of the prayer comes clear, the meaning outsiders miss. The five daily prayers are not a daily tax; they are five guaranteed appointments of nearness: standing before the Lord of the worlds with no booking and no doorman, stitching the Muslim's day so that he is never more than a few hours from his Lord. The meaning of *silah*, connection, has been noted inside the word, though the two come from different roots, and the better-known derivation, the one most lexicographers give, is from *duʿa*, calling out. Either way both meanings live inside it: a call, and a connection.

## A sweetness that is tasted

Someone who has not tried it may find it odd that faith is described by taste. But the description comes from one who does not speak from whim:

\`\`\`hadith
text: 'ثلاثٌ من كنّ فيه وجد حلاوةَ الإيمان: أن يكون اللهُ ورسولُه أحبَّ إليه مما سواهما، وأن يحبّ المرءَ لا يحبّه إلا لله، وأن يكره أن يعود في الكفر كما يكره أن يُقذَف في النار.'
source: 'Sahih al-Bukhari 16'
url: 'https://sunnah.com/bukhari:16'
translation: '“Whoever has three things finds the sweetness of faith: that Allah and His Messenger are dearer to him than all else; that he loves a person for Allah’s sake alone; and that he would hate returning to disbelief as he would hate being thrown into fire.”'
note: '“Sweetness” is a word of tasting, not of theorizing. In this religion faith is not a cold conclusion parked in the intellect; it is a love-relationship with a taste the heart finds, known to those who taste it the way honey is known.'
\`\`\`

Millions of human beings across the centuries have confirmed the description, from the worshipper in his night prayer to the new Muslim recounting their first prostration. We do not offer this as demonstrative proof (tastes cannot be demonstrated) but as a report of what lies behind the door, from a source whose truthfulness the argument established, corroborated by the experience of everyone who entered.

\`\`\`doubt
claim: A beautiful description, but it’s marketing. Followers of every religion report spiritual feelings, and post-ritual well-being is a known psychological phenomenon that says nothing about a creed’s truth.
answer: |-
  Correct, which is why this guide never once offered spiritual experience as proof, and not one of its units was built on it. The proof came in its proper places: the universe’s beginning and calibration, the Messenger’s truthfulness under five tests, the Book’s inimitability and preservation. This lesson describes what the one who enters finds after entering. That is a methodological line drawn in the open: we do not say “believe because believers are happy”; we say “the evidence has been given, and this is what is behind the door.”
  Still, one feature of the Islamic experience deserves a fair look: generic ritual well-being stays where the ritual is, while this is a relationship filling the entire day (five prayers, supplication with no appointment, remembrance on the road), and its content is not emotional venting but address to an Addressee whose existence and nearness the argument established. If Allah truly exists, and the case has been made, it is no surprise that the heart finds in connecting with Him what it finds nowhere else. The surprise would be if it didn’t.
\`\`\`

\`\`\`rule
The relationship in Islam is a direct line: supplication with no intermediary and no approved language, commanded and promised an answer; a prostration that is the servant’s nearest point to his Lord; and five daily appointments binding the whole day to Him. Above all that, faith has a sweetness reported by the truthful one ﷺ, offered here not as proof, but as an honest report of what lies behind the door.
\`\`\`

\`\`\`tip
Try the simplest form of this door tonight: raise your hands and say, in your own language (any language), “O God, if You see me, guide me to the truth.” The honest seeker’s prayer is worship Allah loves; you lose nothing by it, and it may open what years could not.
\`\`\`

\`\`\`quiz
questions:
  - q: What detail does the lesson pause on in the verse “and when My servants ask you about Me, indeed I am near”?
    ref: 2:186
    word: فإني قريب
    options:
      - The answer arrives without the word “say,” unlike the question-verses around it, directness embodied in the verse’s own structure
      - It is the longest verse in Surat al-Baqarah
      - It was revealed in Makkah before the hijrah
      - The questioners were People of the Book
    answer: 0
    why: The surrounding legislation verses run on the pattern “they ask you… say,” and here the verbal relay itself drops away, in precisely the verse about nearness.
  - q: What arithmetic does “the nearest a servant is to his Lord is while prostrating” invert?
    options:
      - The body’s lowest posture is made the station of highest nearness; lowering yourself before Allah is elevation, and prayer is appointments of nearness, not a tax
      - Nearness to Allah exists only inside a mosque
      - Prostration is physically the hardest pillar of prayer
      - Supplication is invalid outside prostration
    answer: 0
    why: A forehead on the ground is as low as pride’s scales go, and in this religion’s scale it is the nearest a servant ever is, which is why abundant du’a is commanded exactly there.
  - q: Why does this guide not offer “the sweetness of faith” as proof of Islam’s truth?
    options:
      - Tastes and experiences cannot serve as demonstration; the proof was given in the rational and historical units, and this is a report of what the enterer finds after entering
      - Because only scholars find the sweetness
      - Because the hadith about it is weak
      - Because feelings are forbidden in matters of creed
    answer: 0
    why: The method is explicit. Never “believe because believers are happy,” but “the evidence has been given; this is what is behind the door.” Other religions’ spiritual reports are precisely why this restraint is kept.
\`\`\`
`,"../content/lessons/en/final-message.md":`---
title: The final message
description: 'A religion whose completion was announced in its founder’s own lifetime, addressed to all of humanity rather than a tribe, sealing the line of prophets it confirms, and what that seal logically implies.'
tags: [seal of the prophets, completion of religion, universality]
---

> **The one idea:** Islam does not present itself as a new religion of a new god, but as the completion of the one message every prophet carried: complete, preserved, and addressed to all people. And once all of that holds, no reason remains for another messenger.

## Last in the chain, not its demolisher

In the unit on the messengers you saw that the call of every prophet, from Nuh to ʿIsa, was one call: worship God alone. So when the Qur’an names Muhammad ﷺ the Seal of the Prophets, it places him at the end of that same chain, not outside it:

\`\`\`ayah
ref: 33:40
highlight: وخاتم النبين
translation: '“Muhammad is not the father of any of your men; rather, he is the Messenger of Allah and the Seal of the Prophets. And Allah has full knowledge of all things.”'
note: 'A seal is what closes a thing at its end. The verse gives him both titles at once: Messenger of Allah (one of the chain, confirming those before him) and Seal of the Prophets: none after him.'
\`\`\`

This has practical consequences few people notice. Whoever accepts this verse never again needs to audit every prophecy-claimant history produces, one century at a time: every claimant who came after him is answered in advance by the seal itself. The door was not slammed in any particular face; its closing was announced before any of the later knockers were born.

## A religion completed in its founder’s lifetime

Religions normally take shape by accretion: the founder departs, and generations build on the estate, layer upon layer. Here something different happened: the founder himself recited, before the largest gathering his mission ever saw, that the religion was complete:

\`\`\`ayah
ref: 5:3
show: اليوم أكملت لكم دينكم وأتممت عليكم نعمتي ورضيت لكم الإسلام دينا
highlight: أكملت لكم دينكم
translation: '“This day I have perfected your religion for you, completed My favor upon you, and approved Islam as your religion.”'
note: This passage came down on the day of ʿArafah during the Farewell Pilgrimage, about three months before the Prophet’s ﷺ death. The declaration of completion came from the revelation itself, while he was alive and reciting it.
\`\`\`

And the weight of this verse was not lost even on a man of another scripture:

\`\`\`hadith
text: 'يَا أَمِيرَ الْمُؤْمِنِينَ، آيَةٌ فِي كِتَابِكُمْ تَقْرَءُونَهَا لَوْ عَلَيْنَا مَعْشَرَ الْيَهُودِ نَزَلَتْ لاَتَّخَذْنَا ذَلِكَ الْيَوْمَ عِيدًا… قَالَ عُمَرُ قَدْ عَرَفْنَا ذَلِكَ الْيَوْمَ وَالْمَكَانَ الَّذِي نَزَلَتْ فِيهِ عَلَى النَّبِيِّ صلى الله عليه وسلم وَهُوَ قَائِمٌ بِعَرَفَةَ يَوْمَ جُمُعَةٍ'
source: 'Sahih al-Bukhari 45'
url: 'https://sunnah.com/bukhari:45'
translation: '“O Commander of the Faithful, there is a verse in your Book which you recite; had it been revealed to us, the community of the Jews, we would have taken that day as a festival.” … ʿUmar said, “We know that day, and the place where it was revealed to the Prophet ﷺ: he was standing at ʿArafah, on a Friday.”'
note: 'A man of the Jews brought up the completion verse and instantly grasped its weight: a day on which a religion is completed deserves to be a festival. ʿUmar’s reply: we have kept that day and that place. It fell on a Friday, the day Muslims gather every week, at ʿArafah, the summit of the pilgrimage.'
\`\`\`

Read the scene without any triumphalism: there is no winner and loser in it, only two readers who know what revelation weighs. One says: had it come to us, we would have made it a feast. The other answers: the moment is kept with us, down to its day and its place. A community that remembers, for a single verse, the day and the spot where it came down is the same community you watched, in the previous lesson, preserve the entire text.

## To all of mankind

The messages before him were sent to particular peoples, for their time and their place. A Christian reader will object at once, and fairly: Matthew’s Gospel closes with a commission to all nations. The Qur’an’s claim is not that no earlier community understood itself as sent outward; it is about whom each messenger was sent to in the first place, and the Qur’an says of ʿIsa that he was sent to the Children of Israel (3:49, 61:6). Matthew reports the same restriction in Jesus’s own voice, “I was sent only to the lost sheep of the house of Israel” (Matthew 15:24), and sends the twelve out with the same limit (Matthew 10:5-6); the commission to all nations comes at the very end of the book. Where the two accounts differ, that difference is something to weigh, not something to slip past. This message announces something else about itself:

\`\`\`ayah
ref: 34:28
highlight: كافة للناس
translation: '“We have not sent you except to all of mankind, as a bringer of good news and a warner; but most people do not know.”'
note: An address that recognizes no boundary of tribe or bloodline. Which is why entry into this religion is a testimony of conviction any human can pronounce in any language, not a birth certificate to inherit.
\`\`\`

And here the first lesson of this unit closes one of its criteria: the Lord of all creation is not the god of one tribe, and His final message addresses all creation.

## The seal and the preservation need each other

Why were messages renewed at all? For two reasons: a text that gets lost or mixed with human words, and a message confined to one people. Islam claims to remove both causes at once: a preserved text (which you examined in the previous lesson) and an address to all people. If the text remains and the address is universal, no ground is left for sending anyone new.

So the seal is not an arbitrary decree bolted onto the religion; it is a conclusion held up by what precedes it. A final message that loses its text like the ones before it would be a contradiction in terms. And notice that this is the internal-coherence criterion working right in front of you: Islam’s three claims (preservation, universality, finality) cannot stand without each other, and they arrived holding each other up.

\`\`\`doubt
claim: The “seal” claim is a self-immunization device, not evidence of anything. Any founder can write “no prophet after me” into his book to lock the door against competitors.
answer: |-
  Correct: the claim alone proves nothing, and this lesson does not offer it as proof of Islam at all. The evidence has its own appointment in the next two units: the life of the Messenger ﷺ and the miracle of the Qur’an. The seal’s place in the argument is coherence, not demonstration: if the message is established as being from God, then finality follows sensibly rather than arbitrarily, because no reason for renewal remains.
  And far from being immunization, the seal is the heaviest bet a message can place on itself: to suffice all people, in all eras, with no prophet ever to correct it afterwards. Immunized claims are worded so they can never be tested; this one is worded so that every century tests it again.
\`\`\`

\`\`\`rule
Islam presents itself as the completion of the one message, not its repudiation: a prophet who seals his brother-prophets while confirming them, a religion declared complete in its founder’s lifetime, and a message to all mankind whose text is preserved. The seal is the coherent consequence of all this, not its proof. The proof itself is the business of the next two units.
\`\`\`

\`\`\`quiz
questions:
  - q: What does calling the Prophet ﷺ the Seal of the Prophets mean?
    ref: 33:40
    word: وخاتم النبين
    options:
      - That he is the last of the chain of prophets, confirming those before him rather than demolishing them, so there is no prophet after him
      - That he was the first prophet in time
      - That he was a prophet for the Arabs specifically
      - That he erased the earlier prophets from the religion
    answer: 0
    why: The verse gives him both titles, Messenger of Allah and Seal of the Prophets. One chain, closed by him, so every later claimant is answered in advance.
  - q: What is the significance of the completion verse coming down during the Farewell Pilgrimage?
    options:
      - The declaration of completion came from the revelation in the founder’s own lifetime, not from generations accreting after him
      - It is unanimously agreed to be the last verse of the entire Qur’an
      - It shows pilgrimage is the most important pillar of Islam
      - The companions declared the religion complete after his death
    answer: 0
    why: Religions normally take final shape by accretion after the founder; here the founder himself recited, in public, that the religion was complete, about three months before his death.
  - q: How does this lesson answer the objection that the seal is just a self-immunization device?
    options:
      - It never offers the seal as proof; the seal is the coherent consequence if the message is true, and the actual evidence comes in the next two units
      - The seal alone is sufficient proof of Islam
      - By denying that false prophecy-claimants exist
      - By pointing to how many followers Islam has
    answer: 0
    why: The claim alone proves nothing; its role is coherence. And it is a heavy, testable commitment (that the message suffice every era with no corrector after it), not a shelter from testing.
\`\`\`
`,"../content/lessons/en/fitrah.md":`---
title: 'The fitrah: a witness within'
description: 'Before any book or teacher, there is a first recognition of the Creator inside you, and a pull toward Him. What the fitrah is, what evidences it, and why it surfaces most clearly in a crisis.'
tags: [fitrah, innate knowledge, the moment of crisis]
---

> **The one idea:** knowing the Creator is not an imported idea that someone must plant in you. It is a seed already planted, which only needs not to be buried. That is why it sprouts again whenever the layers above it are shaken.

## What is the fitrah?

The *fitrah* is the original constitution a human being is created upon: a built-in readiness to recognize the Creator, incline toward Him, and turn to Him in distress. A child does not need to be taught to ask “who made this?”; a child needs to be taught to *stop* asking.

\`\`\`ayah
ref: 30:30
highlight: فطرت الله التي فطر الناس عليها
translation: '“So set your face toward the religion, inclining to truth: the fitrah of Allah upon which He created all people. There is no changing Allah’s creation.”'
note: 'That is: hold to the religion that matches the original design, for Allah created people upon recognizing Him and turning to Him. This is the mainstream reading of the classical commentators: al-Tabari, Ibn Kathir, al-Saʿdi.'
\`\`\`

And the Prophet ﷺ taught that this first constitution precedes all upbringing:

\`\`\`hadith
text: 'ما مِن مولودٍ إلّا يُولَد على الفطرة، فأبواه يُهوِّدانه أو يُنصِّرانه أو يُمجِّسانه، كما تُنتَج البهيمةُ بهيمةً جَمْعاء، هل تُحِسّون فيها من جَدْعاء؟'
source: 'Sahih al-Bukhari 1359; Sahih Muslim 2658'
url: 'https://sunnah.com/bukhari:1359'
translation: '“No child is born except upon the fitrah; then its parents make it a Jew, a Christian, or a Magian, just as an animal is born whole. Do you find it born mutilated?”'
note: 'The animal is born intact; any cutting is done to it afterwards, by people. So too the fitrah.'
\`\`\`

Look closely at the comparison: distorted religion needs an outside agent (“then its parents…”), but recognizing God needs none, because it is the original state a person is born with.

## The evidence you can see for yourself

If the idea of a Creator were merely cultural inheritance, it would vanish wherever the culture doesn’t transmit it. Reality says otherwise:

- **Its universality.** History knows no civilization without worship, including peoples isolated on islands and in forests, cut off from any tradition the rest of the world passed around. People go wrong about *whom* to worship; the *turning toward something worshipped* never goes missing. And getting a thing wrong is evidence the thing exists, not that it doesn’t.
- **The moment of crisis.** When a person faces real danger with no way out, the heart turns *upward*, before any decision, without any reasoning. The Qur’an names this moment precisely:

\`\`\`ayah
ref: 17:67
highlight: ضل من تدعون إلا إياه
translation: '“And when hardship touches you at sea, all that you call upon deserts you, except Him. Then when He delivers you to land, you turn away. Man is ever ungrateful.”'
note: 'At sea, when every earthly means is cut off, every claimed deity “strays” from the heart and only Allah remains in it. Then safety comes and the turning-away returns; the verse records both states.'
\`\`\`

\`\`\`ayah
ref: 29:65
highlight: دعوا الله مخلصين له الدين
translation: '“When they board the ship, they call on Allah, making their faith pure for Him alone; but when He brings them safely to land, at once they associate others with Him.”'
note: 'The verse describes the idol-worshippers: on the water, their prayer went to Allah alone. The crisis taught them nothing new; it uncovered what was under the rubble.'
\`\`\`

This is not a report about seventh-century Arabs. Plenty of people who do not believe describe it themselves: a plunging elevator, a shaking aircraft, and a call in the chest they cannot account for. Others say honestly that they have never felt it, and nobody is being told what is in their own heart. The question is only about those who did find it there. Why does the heart turn, under pressure, to the very address the tongue spent a lifetime denying? If no one is there, where is the call going?

## Buried, not dead

\`\`\`doubt
claim: Religion is just social inheritance. Born somewhere else, you’d believe something else, so your belief is a reflection of your environment, nothing more.
answer: |-
  The hadith itself grants half of this: “then its parents make it a Jew or a Christian…” Yes, environment shapes and distorts the form religion takes. But notice what environment does not produce: the turning-toward-a-Creator itself. That appears in every environment without exception, and it resurfaces in crisis even in people raised by atheist ones. Environment shapes the seed, or buries it; it is not what put it there.
  And the argument cuts both ways: atheism, too, is common in some environments and rare in others; by this logic it is “a reflection of environment” as well. Where an idea comes from does not settle whether it is true; only evidence does. That evidence is exactly what the next unit examines.
\`\`\`

\`\`\`rule
In every human being there is a first recognition of the Creator that precedes teaching, witnessed by the universality of worship and by the moment of crisis. Environment can bury it or distort its form; it does not create it and cannot uproot it.
\`\`\`

\`\`\`note
The fitrah argument alone does not establish a complete creed, and this lesson does not claim it does. It is a witness from within you, preparing you to look. The rational case has its own appointment in the next unit: does the universe have a Creator?
\`\`\`

\`\`\`quiz
questions:
  - q: What does “fitrah” mean in this discussion?
    options:
      - A built-in readiness to recognize the Creator and turn to Him, prior to all teaching
      - The habits a child picks up from its parents
      - The human capacity for learning languages
      - The rituals a society practices
    answer: 0
    why: 'The fitrah is an original constitution, not an acquisition: “no child is born except upon the fitrah.” It is the change that needs an agent (“then its parents…”), not the original state.'
  - q: What is the point of the verse about hardship at sea?
    options:
      - When all means are cut off, the masks drop and the heart turns to Allah alone, before any decision or reasoning
      - That sea travel was dangerous in antiquity
      - That prayer is only valid at sea
      - That fear corrupts sound thinking
    answer: 0
    why: The involuntary turn to Allah under pressure exposes a recognition that was buried under heedlessness, the fitrah surfacing.
  - q: How does this lesson answer “your religion is just a reflection of your environment”?
    options:
      - Environment shapes the form religion takes, but the turning-toward-a-Creator appears in every environment, and the same argument would apply to atheism too
      - Environment has no effect on people at all
      - The objection is correct and has no answer
      - All religions are equally true within their own environments
    answer: 0
    why: An idea’s origin does not settle its truth; evidence does. And the universality of worship across all environments is itself the phenomenon that demands explaining.
\`\`\`
`,"../content/lessons/en/from-nothing.md":`---
title: Created from nothing?
description: 'Three possible explanations for your existence, with no fourth, packed by the Qur’an into two verses that nearly made an opponent’s heart fly.'
tags: [Surat at-Tur, the three options, existence of a Creator]
resources:
  - title: Ibn Kathir’s commentary on the verse of at-Tur
    url: 'https://quran.com/52:35/tafsirs/en-tafisr-ibn-kathir'
    note: The full classical commentary on the verse this lesson turns on.
---

> **The one idea:** there are exactly three possible explanations for your existence: you came from nothing, you made yourself, or something else made you. Two of the three are impossible. What remains is not a preference; it is the conclusion.

## The most certain thing you know

You can doubt a great deal, but not this: you exist. The most radical skeptics in history found no way around that one. Which leaves the question no one escapes: where did this existence come from?

The possible answers are fewer than you might expect. Reason (anyone’s reason, in any century) can only conceive of three: a thing came from nothing, a thing made itself, or something else made it. This is an exhaustive division. It is not a menu of schools of thought that might grow a fourth option; it is the boundary of logical possibility itself.

The Qur’an compresses that division into two verses, and notice that it argues by questions, not decrees:

\`\`\`ayah
ref: 52:35
highlight:
  - من غير شيء
  - أم هم الخالقون
translation: '“Or were they created from nothing? Or are they themselves the creators?”'
note: 'Two questions that demolish two options: did they come into being with no originator at all? Or did they originate themselves? Ibn Kathir: neither this nor that; it is Allah who created them.'
\`\`\`

\`\`\`ayah
ref: 52:36
translation: '“Or did they create the heavens and the earth? Rather, they are not certain.”'
note: 'The verse closes the last exit: if you did not create yourselves, did you create the cosmos you are part of? Nobody claims that. Then it names the real problem: not a shortage of evidence, but a shortage of certainty and seriousness.'
\`\`\`

Look at what this text is doing. No insult, no threat, no demand for blind assent; it lays out the complete logical division and leaves the listener standing in front of it. So let us stand in front of it, one option at a time.

## Option one: from nothing

“Nothing” is not a thin raw material, and not empty space waiting to be filled. Nothing is the absolute absence of anything: no matter, no energy, no laws, no time, not even a *potential* for things to emerge from. And from nothing, nothing comes. Not merely because no experiment has ever recorded it, but because there is no thing there to do the producing and no law there to permit it.

This is not a religious dogma. It is the silent premise of all empirical science: when a researcher meets a new phenomenon, she does not say “it came from nothing” and close the lab; she hunts for its cause. If nothing could produce things, the very idea of explanation would collapse.

## Option two: they created themselves

This option is in worse shape than the first. For a thing to create itself, it would have to exist before it existed: to be there, doing the creating, while not yet being there at all. That is not a long-shot needing probability theory; it is a flat contradiction, like a square circle. Give it infinite time and it does not become one degree more possible.

Almost no one asserts this in so many words, but you hear its echo in sentences that pass unexamined: “the universe brought itself into being through its laws.” Laws are descriptions of how existing things behave. They do not precede a thing’s existence, and they cannot summon it.

## Which leaves the third

When a division is exhaustive and two branches fall, the third stands by necessity, not as a preference, not as the best guess on offer: your existence has an originator that is not you and not nothingness.

This argument once landed on an ear trained to weigh words. Jubayr ibn Mutʿim (one of the nobles of Quraysh, in Madinah over the ransom of the Badr captives, still on his people’s religion at the time) heard the Prophet ﷺ leading the sunset prayer:

\`\`\`hadith
text: 'سمعتُ النبيَّ ﷺ يقرأ في المغرب بالطور، فلمّا بلغ هذه الآية … كاد قلبي أن يطير.'
source: 'Sahih al-Bukhari 4854'
url: 'https://sunnah.com/bukhari:4854'
translation: '“I heard the Prophet ﷺ reciting Surat at-Tur in the sunset prayer, and when he reached this verse … my heart nearly flew.”'
note: 'The verse is the one you just read. In another narration he said, “and that was the first time faith settled in my heart” (Bukhari 4023); a third records that he had come regarding the captives of Badr (Bukhari 3050).'
\`\`\`

Consider the scene. A man whose native craft was Arabic eloquence, with nothing between him and this religion but enmity. He heard the whole surah, its warnings included, yet the place he singled out, the place where his heart nearly flew, was the logical division itself. Years later, he embraced Islam. The argument you are reading now is the same one he heard.

## “But physics says otherwise”

\`\`\`doubt
claim: Quantum mechanics has shown that particles pop in and out of nothing all the time in the quantum vacuum. If particles can come from nothing, why couldn’t the whole universe come from nothing, with no creator required?
answer: |-
  What physics describes there is not nothing. The quantum vacuum is a physical system in full standing: it has energy, quantum fields, and strict laws governing it, and particles “appear” from it the way a wave appears from the sea, out of something real and brimming with potential. So the question stands at full strength: where did the sea itself come from: the fields, the energy, the laws?
  Naming an existing thing “nothing” does not make it nothing. And this criticism did not come only from believers: philosophers of physics leveled exactly it at the most famous book making this claim, because redefining a word is not answering a question. The “nothing” in the logical division is the absolute absence of anything, and from that, nothing comes.
\`\`\`

\`\`\`rule
For anything that comes into being there are exactly three possibilities: it came from nothing, it made itself, or something else made it. The first contradicts the axiom that nothing yields nothing; the second requires a thing to exist before it exists. The third stands by necessity: you have a Maker who is neither you nor nothing. One question is left standing: is the universe itself something that began, so that this division applies to it too, or is it eternal and untouched by it? That is the next lesson.
\`\`\`

\`\`\`tip
Notice that the greatest question in existence is argued in the Qur’an through questions, not commands to believe. Try answering them yourself, one by one, as if hearing them for the first time; that is exactly what Jubayr was doing.
\`\`\`

\`\`\`quiz
questions:
  - q: What logical division does the verse of at-Tur present?
    ref: 52:35
    word: أم هم الخالقون
    options:
      - We came from nothing, we made ourselves, or a Creator made us, and there is no fourth
      - The universe is either eternal, created, or cyclical
      - A person is either a believer, an atheist, or undecided
      - Knowledge comes either from the senses, from reason, or from testimony
    answer: 0
    why: The verse confines the origin of existence to three options that exhaust logical possibility; two collapse, so the third stands by necessity.
  - q: Why is it impossible for a thing to create itself?
    options:
      - It would have to exist before it existed, a flat contradiction that no amount of time makes possible
      - Experiments simply haven’t recorded it happening yet
      - The energy required would exceed the energy of the universe
      - Ancient philosophers agreed it was unlikely
    answer: 0
    why: Self-creation means being there and not being there at once, a logical contradiction like a square circle, not a low-probability event.
  - q: How does this lesson answer the claim that quantum particles appear from nothing?
    options:
      - The quantum vacuum is a physical system with energy, fields, and laws; calling it “nothing” doesn’t make it nothing
      - By rejecting quantum mechanics wholesale
      - By saying quantum particles are a mathematical fiction
      - By saying science has no right to speak on these matters
    answer: 0
    why: The lesson doesn’t dispute the physics; it disputes the label. Whatever things emerge from is not nothing, so the question of its own origin stands untouched.
\`\`\`
`,"../content/lessons/en/his-character.md":`---
title: His character testifies
description: 'Impostors are unmasked in two places: at home, where theater is impossible, and at the moment of power, when no restraint remains. So look at the testimony of his servant of ten years, his decision the day Makkah lay at his feet, and his prayer the day Taif left him bleeding.'
tags: [his character ﷺ, Taif, the conquest of Makkah]
---

> **The one idea:** a pretender can perform virtue at the pulpit for a year or two. But two masks never survive: the mask worn at home before someone who serves you daily, and the mask of power on the day no one can stop you. So look at him ﷺ in precisely those two places.

## The fifth test: character under the microscope

The last of this unit's tests is the one closest to instinct: prophethood is before all else a moral claim: a man saying God entrusted him with His revelation. Find in his documented life treachery, cruelty in victory, or contempt for the weak, and the claim collapses at the root. And the Qur'an, the book you watched rebuke him without ceremony, described him with the greatest description a human being has received:

\`\`\`ayah
ref: 68:4
translation: '“And indeed, you are of a tremendous character.”'
note: 'Testimony from the very book that recorded his rebukes in ʿAbasa and al-Ahzab, not the flattery of later panegyrics, but a description from a source proven not to court its bearer.'
\`\`\`

Now down from the description to the authenticated facts.

## The witness who lived with him ten years

The truest witness to a man is his servant: he sees him angry, hungry, exhausted: the states in which every mask falls. Anas ibn Malik served him from the age of ten until the Prophet's ﷺ death (ten full years, at home and on journeys), then summarized the experience:

\`\`\`hadith
text: 'خدمتُ النبيَّ ﷺ عشرَ سنين، فما قال لي: أُفٍّ، ولا: لِمَ صنعتَ؟ ولا: ألّا صنعتَ؟'
source: 'Sahih al-Bukhari 6038'
url: 'https://sunnah.com/bukhari:6038'
translation: '“I served the Prophet ﷺ ten years, and he never once said to me ‘uff’ (a word of annoyance), nor ‘why did you do that?’ nor ‘why didn’t you do that?’”'
note: 'Ten years, with a boy servant erring as boys err, and not one syllable of irritation. Who can perform that, at home, for a decade?'
\`\`\`

And Aisha, who knew him in his privacy better than anyone, was asked about his character. Her answer compresses this entire unit:

\`\`\`hadith
text: 'ألستَ تقرأ القرآن؟ قلتُ: بلى. قالت: فإنّ خُلُق نبيِّ الله ﷺ كان القرآن.'
source: 'Sahih Muslim 746'
url: 'https://sunnah.com/muslim:746'
translation: 'Aisha said to the questioner: “Do you not recite the Qur’an?” He said: “Of course.” She said: “The character of the Prophet of Allah ﷺ was the Qur’an.”'
note: 'Meaning: he was the living practice of what he recited to people: no gap between text and conduct. And this is the testimony of a wife; homes know the truth about men.'
\`\`\`

## The day of Taif: mercy with power on offer

On the hardest day of his life he told the story himself, when Aisha asked him whether any day had been harder on him than Uhud. He said he had offered his message to the chief of Thaqif and been refused, and had walked away with his mind gone from him. (The detail everyone knows, that he was stoned at Taif until his feet bled, is not in the Sahih narration; it comes from the maghazi of Musa ibn ʿUqbah and the Tabaqat of Ibn Saʿd, both quoted by Ibn Kathir in al-Bidaya wa’l-Nihaya.) Then, on the road back, absolute power over the people who had refused him was placed in his hands:

\`\`\`hadith
text: 'فناداني مَلَكُ الجبال، فسلّم عليّ ثم قال: يا محمد، فقال: ذلك فيما شئتَ، إن شئتَ أن أُطبِق عليهم الأخشبَين. فقال النبيّ ﷺ: بل أرجو أن يُخرج الله من أصلابهم من يعبد الله وحده لا يشرك به شيئًا.'
source: 'Sahih al-Bukhari 3231'
url: 'https://sunnah.com/bukhari:3231'
translation: '“…Then the Angel of the Mountains called me, greeted me, and said: O Muhammad, it is as you wish: if you wish, I will bring the two mountains down upon them. The Prophet ﷺ said: Rather, I hope Allah will bring out of their descendants people who worship Allah alone, associating nothing with Him.”'
note: 'An offer to annihilate those who had just refused him, made while he was walking away grieved. He chose their children’s future over revenge on them. Thaqif accepted Islam years later, exactly as he hoped.'
\`\`\`

Hold the psychological moment: this is not cool-headed clemency in a council chamber; it is a decision at the peak of the wound, with absolute power on the table. Anger there is human nature, and revenge justifiable by every worldly measure. His answer came from a different measure.

## The day of the conquest: power with no restraint

Then the wheel turned full circle. In the eighth year of the hijrah he entered Makkah as conqueror at the head of ten thousand: the city that had tortured his companions, killed those he loved, expelled him, and fought him for twenty years, now standing before him with nothing in between. This is the moment history waits for from every victor: settlement day; and how many massacres humanity has watched at exactly this juncture.

What is established in the Sahih is the name its people carried afterwards, a name given only to men who have been let go: **al-ṭulaqāʾ**, the freed ones. Weeks later, at Hunayn, Anas describes the Prophet’s ﷺ army: "with the Prophet ﷺ were ten thousand, and the freed ones" (al-Bukhari 4333). The word is itself the testimony: a town that had fought him for twenty years, entered, released, and marching in his ranks within weeks. (The famous exchange, "What do you suppose I will do with you? … Go, for you are free," is [graded weak in that wording](https://islamqa.info/ar/answers/290672); Ibn Ishaq’s chain for it is broken. This guide does not build on it, and the established title makes it unnecessary.) The amnesty was not a suspension of justice: a short, named list of men with blood or incitement against them was excepted, and his order regarding Ibn Khatal is in the Sahih (al-Bukhari 1846). The point is the ratio: pardon was the rule and the exceptions were countable individuals, which is the reverse of what conquest normally looks like. Enemies of twenty years walked out of his hands free, and yesterday's war commanders became commanders in his ranks.

\`\`\`doubt
claim: 'Every successful leader gets virtue stories; followers gild their founder’s biography after his death. How do we know these accounts aren’t follower embellishment?'
answer: |-
  A methodologically sound objection deserving a methodological answer. First: the sources here are not late panegyrics but the two Sahih collections, with chains examined narrator by narrator, and you saw in “The Qur’an corrects him” that this same transmission system preserved what embarrasses and never airbrushed it: it recorded his frown, his rebukes, his mistaken permissions before Tabuk. A transmission culture that keeps its subject’s faults on the record is not an embellishment machine; had it gilded, it would have started by deleting those passages.
  Second: the strongest exhibits need no loving narrator at all. A conquest without a massacre is a large-scale historical fact attested by its aftermath: an entire city joining his army within weeks, which does not happen after a bloodbath. And Heraclius’s testimony, at this unit’s start, came from interrogating his enemy.
  Third: embellishment inflates with time; compare any leader’s image in his own era’s documents with his image in follower legend centuries later. Here the direction runs backwards: the oldest, best-attested layers carry these morals, while it is the weak late tales that hadith specialists flag and exclude, and this guide itself cites none of them.
\`\`\`

\`\`\`rule
The Qur’an, which rebukes him without flattery, declared him of tremendous character, and his home confirmed it: a servant of ten years never heard one word of irritation, and his wife defined his character as the Qur’an itself. Tested by weakness at Taif, he prayed for those who bled him; tested by power at the conquest, he freed those who fought him. Impostors fall at home or at power; in both places, he only shone brighter.
\`\`\`

\`\`\`tip
Now gather the unit’s five threads: trustworthy before the claim by his enemy’s testimony, no profit from it, publicly corrected by his own book, telling of the unseen and it happening, and a character identical in private and in power. Each thread alone is an indication; what is the name for all of them meeting in one man?
\`\`\`

\`\`\`quiz
questions:
  - q: Why is Anas ibn Malik’s testimony among the strongest evidence about his character ﷺ?
    options:
      - It is the testimony of a servant who lived beside him ten years at home (where masks fall) and never heard one word of irritation
      - Because Anas was the oldest Companion with the longest companionship
      - Because it is the only narration about his character
      - Because Anas did not know him before serving him
    answer: 0
    why: Virtue can be performed at gatherings; ten years at home before a boy servant cannot be a performance, and the testimony is in the Sahih.
  - q: What is the significance of his answer to the Angel of the Mountains on the day of Taif?
    options:
      - Offered the annihilation of those who had just refused him, at the lowest point of his mission, he chose hope for their descendants’ faith, mercy at the exact moment the world excuses revenge
      - He simply lacked the power to take revenge
      - He postponed the revenge until the conquest of Makkah
      - The story is one of the weak late tales
    answer: 0
    why: The account is in Sahih al-Bukhari, prompted by Aisha’s question about his hardest day; the decision came on his hardest day with power on offer, and Thaqif later embraced Islam as he hoped.
  - q: How does the lesson answer “followers always gild their founder’s story”?
    options:
      - The same system that transmitted his virtues preserved his rebukes and faults undeleted, and the biggest facts (a conquest with no massacre) are attested by history’s aftermath, not narrators alone
      - Followers never embellish leaders’ biographies in any nation
      - Embellishment did occur but is acceptably minor
      - All sirah books carry the same authority as the Sahih collections
    answer: 0
    why: An embellishing transmitter would start by deleting ʿAbasa and the Tabuk rebuke; their survival in the soundest books proves the system’s honesty, and the great events prove themselves by their consequences.
\`\`\`
`,"../content/lessons/en/keep-asking.md":`---
title: Your questions are welcome
description: 'The guide’s final lesson doesn’t say “the questions are over”; it teaches you what to do with the ones that remain: whom to ask, how to ask, and the prayer of a prophet asking his Lord for guidance in what people dispute.'
tags: [asking the people of knowledge, the seeker’s etiquette, the guidance prayer]
---

> **The one idea:** you have read the whole argument, and questions remain in your chest, which is natural and healthy; a field whose questions run dry is a dead field. The last thing this guide says to you: do not bury your questions, and do not worship them either. Carry them to two doors: the people of knowledge, and the Lord of knowledge.

## The first door: the people of knowledge

This site is an ordered doorway, not the end of the road. Thirty lessons build a foundation; they do not answer every question that can occur, and never claimed to. The Qur'an itself directs the one who does not know to the one who does:

\`\`\`ayah
ref: 16:43
highlight: أهل الذكر إن كنتم لا تعلمون
translation: '“…so ask the people of knowledge, if you do not know.”'
note: 'A general Qur’anic rule: not knowing an answer is treated neither by guessing nor by walking away, but by asking the qualified. Religion here is like every serious field: you consult its people.'
\`\`\`

This verse asks two things of you: actually ask (rather than letting a question spin in your chest until it ferments into a grievance) and choose whom you ask: seek grounded scholars who join knowledge of the texts with understanding of this era's objections, not whoever trends in a sixty-second clip. And if reaching such people is hard where you are, start with what is already in your hands: the sources cited across these lessons, and the books of those who bridged both worlds.

## The honest seeker's etiquette

Asking has an etiquette that separates the seeker of truth from the seeker of victory, binding on you within yourself before anyone else:

- **Ask to understand, not to corner:** the question hunting for an answer usually finds one; the question hunting for a fight always does.
- **Size the question correctly:** there is a difference between a question about the religion's foundation and one about a fine branch; never let fog around a branch overturn a root whose proof already stood. Never let fog around a branch overturn a root whose proof already stood: the passenger certain of flight loses nothing by not having finished the aerodynamics textbook.
- **And do not assert without knowledge:** as one verse commands asking the knowledgeable, its sister forbids asserting what you do not know (17:36). Suspending judgment where you are ignorant is also an act of worship.

## The second door: the Lord of knowledge

Greater than asking the scholar is asking the One who taught all scholars. The Prophet ﷺ himself, he of all people, used to open his night prayer with a du'a seeking guidance in what people dispute:

\`\`\`hadith
text: 'اللهمّ ربَّ جبرائيلَ وميكائيلَ وإسرافيل، فاطرَ السماوات والأرض، عالمَ الغيب والشهادة، أنت تحكم بين عبادك فيما كانوا فيه يختلفون، اهدني لما اختُلف فيه من الحق بإذنك، إنك تهدي من تشاء إلى صراطٍ مستقيم.'
source: 'Sahih Muslim 770'
url: 'https://sunnah.com/muslim:770'
translation: '“O Allah, Lord of Jibril, Mikail and Israfil, Originator of the heavens and the earth, Knower of the unseen and the seen, You judge between Your servants in what they dispute: guide me, by Your leave, to the truth in what is disputed. Surely You guide whom You will to a straight path.”'
note: 'If the prophet of revelation himself asked his Lord for guidance in disputed matters, the perplexed seeker of truth has more right to this prayer, not less. Memorize it, or say its meaning in your own language.'
\`\`\`

Look at who is addressed in this du'a: the Originator of the heavens and the earth you met in the opening units; the Knower of the unseen whose foretelling you examined in the prophethood unit. The prayer gathers the whole argument into a single call, then asks for the greatest thing that can be asked: guidance.

And here is something many miss: guidance is not a cognitive achievement you reach by intelligence alone; it is a gift, requested from its Giver. Two people can read the same argument and one is guided while the other turns away, and the difference is in the heart, not the argument: one came honest, wanting the truth if it showed; the other came armored, wanting it not to. If you are the first kind, say it in any language: *My Lord, guide me.* By Allah, no one who asked for guidance honestly was ever turned away.

\`\`\`doubt
claim: 'You say “ask God to guide you”, but that begs the question: you’re asking me to address a being I don’t yet believe in, in order to arrive at believing in him.'
answer: |-
  If the prayer were the only evidence on offer, the objection would be decisive. But this guide’s order was the exact reverse: thirty lessons of argument first (the universe’s beginning, its calibration, the fitrah, the Messenger’s truthfulness, the Book’s inimitability), and the du’a came as the last step, not the first. The request is not “believe without evidence, then pray”; it is: the case for the One you would address has been made, so speak to Him.
  Besides, the perplexed seeker’s prayer never presumed settled belief in the first place. Its honest form is conditional: “O God, if You exist, guide me to the truth.” Rational people run conditional address in every domain where the evidence leans but certainty hasn’t landed, and this one is a no-loss wager: if no one hears, you have lost nothing; if He does (and the argument has testified that He is) you have knocked on the greatest door that can be knocked. And whoever refuses even this conditional experiment should ask themselves, with our first lesson’s honesty: do they want the truth to appear, or feel safer if it doesn’t?
\`\`\`

## The last word

You have reached the end of the guide. You walked from "why are we here?" to the proof of the Creator, through the objections to knowing Allah, from humanity's need for revelation to the evidence for Muhammad ﷺ and his preserved Book, until you stood at the door and learned how it opens. This guide has nothing left to say. What remains is yours to do.

We will not push you from behind; we pushed no one across thirty lessons, and the Qur'an itself declares the way clear, without compulsion. But we remind you of what you told yourself in the first lesson: postponing the answer is an answer, and the lifetime that feels long is passing. So stand tonight, one honest moment between you and the Originator of the heavens and the earth, and say: *guide me.* Then walk wherever He guides you. By Allah, you were not created in vain, and you will not be left neglected.

\`\`\`ayah
ref: 20:114
show: وقل رب زدني علما
translation: '“And say: My Lord, increase me in knowledge.”'
note: 'The guide’s final verse is its prayer for you: knowledge that keeps growing, not a door that closes. It is the same verse that greets whoever completes all the lessons: the end here is a beginning.'
\`\`\`

\`\`\`rule
Whatever questions remain are carried to two doors, never buried: the people of knowledge, asked with a truth-seeker’s manners; and the Lord of knowledge, asked with the Prophet’s ﷺ own prayer. Guidance is requested from the One who owns it, and no honest asker of it is ever refused. This is the end of the guide, and the beginning of the road.
\`\`\`

\`\`\`quiz
questions:
  - q: What does a seeker of truth do with the questions that remain after reading the argument?
    ref: 16:43
    word: فسـٔلوا أهل الذكر إن كنتم لا تعلمون
    options:
      - Carry them to grounded scholars with a learner’s manners, and ask Allah for guidance, neither burying them nor letting them overturn a proven foundation
      - Treat them as proof that the established argument is false
      - Suppress them, since questioning is shameful in religion
      - Answer them personally by guesswork, even without knowledge
    answer: 0
    why: 'The Qur’an commands the one who doesn’t know to ask those who do, and forbids asserting without knowledge; remaining branch-questions cannot overturn a root whose proof stood, like the certain passenger who hasn’t finished the aerodynamics book.'
  - q: Why does the lesson cite the Prophet’s ﷺ prayer “guide me, by Your leave, to the truth in what is disputed”?
    options:
      - If the prophet of revelation himself asked his Lord for guidance in disputed matters, the perplexed honest seeker deserves this prayer even more; guidance is a gift requested from its Giver
      - Because the prayer replaces examining evidence altogether
      - Because disagreement about truth is actually impossible
      - Because the prayer is reserved for prophets alone
    answer: 0
    why: The du’a (in Sahih Muslim, from his night prayer) gathers the whole argument’s meanings (the Originator, Knower of the unseen) and then asks for the greatest request; no better provision exists for a seeker.
  - q: How does the lesson answer “you’re asking me to pray to a being I don’t yet believe in”?
    options:
      - The prayer came as the last step after thirty lessons of argument, not the first; and the perplexed seeker’s form is conditional (“if You exist, guide me”), a no-loss wager
      - Belief must precede all examination of evidence
      - The objection is correct and unanswerable
      - The perplexed are not asked to pray at all
    answer: 0
    why: Question-begging would apply if the prayer were the evidence; since the case was made first, the du’a is addressing One whose existence the argument established, and the conditional form costs the honest doubter nothing.
\`\`\`
`,"../content/lessons/en/most-merciful.md":`---
title: The Most Merciful
description: 'The Creator the evidence points to is not a cold, distant force. The first thing He tells you about Himself (at the head of nearly every surah) is mercy, twice over: a mercy that outruns anger, a nearness with no intermediary, and a door that never closes while you live.'
tags: [names of Allah, divine mercy, nearness to God]
---

> **The one idea:** reason can bring you to a Creator of overwhelming power, and leave you dreading Him from a distance. But Allah did not introduce Himself to His servants by power or majesty first. He chose two names of mercy and set them at the head of every surah of His book but one. This lesson is about the God who wants you to come closer, not to run.

## The first thing He tells you about Himself

Open the Qur’an at any surah (all but one) and before its first sentence you will read: *In the name of Allah, the Most Merciful, the Bestower of Mercy.* The Qur’an gives Allah many names: the All-Powerful, the All-Knowing, the King, the Compeller. Yet when He set a heading to recur at the top of every surah, He chose the two names of mercy, and not one of them, but both:

\`\`\`ayah
ref: 1:3
translation: '“The Most Merciful, the Bestower of Mercy.”'
note: 'Two names, both from the root of rahmah (mercy), placed in the Fatiha immediately after “Lord of all worlds”: lordship paired with mercy, not with tyranny. The commentators explain al-Rahman as the more intense in the attribute itself, and al-Rahim as its actual reaching of creatures. A Muslim repeats these two names in every unit of every prayer.'
\`\`\`

\`\`\`ayah
ref: 7:156
show: ورحمتي وسعت كل شيء
translation: '“…and My mercy embraces all things.”'
note: 'Earlier in this same verse, punishment is something He directs at whom He wills. Mercy alone is described as unbounded: nothing falls outside its reach. Punishment has its causes and its targets; it is mercy that embraces everything. And the verse goes on, “so I will decree it for those who are mindful of Me”, which al-Saʿdi reads as two mercies: a general one that has already reached every creature, righteous or wicked, believer or unbeliever, and a particular one, the happiness of both worlds, which has a door you walk through. This whole lesson is about where that door is.'
\`\`\`

That is an enormous claim. Is there a measure by which a human being can grasp how much mercy is meant?

## More merciful to you than your mother

The greatest mercy humans know is a mother’s for her child. And the Prophet ﷺ did not explain Allah’s mercy with a definition; he used a scene his companions watched with their own eyes:

\`\`\`hadith
text: 'قدِم على النبيّ ﷺ سبيٌ، فإذا امرأةٌ من السبي قد تحلُب ثديَها تسقي، إذا وجدت صبيًّا في السبي أخذته فألصقته ببطنها وأرضعته، فقال لنا النبيّ ﷺ: أترَون هذه طارحةً ولدَها في النار؟ قلنا: لا، وهي تقدر على أن لا تطرحه. فقال: اللهُ أرحمُ بعباده من هذه بولدها.'
source: 'Sahih al-Bukhari 5999; Sahih Muslim 2754'
url: 'https://sunnah.com/bukhari:5999'
translation: '“Some captives were brought to the Prophet ﷺ, and among them was a woman whose breast was full of milk, searching; whenever she found an infant among the captives she would clasp it to her belly and nurse it. The Prophet ﷺ said to us: Do you think this woman would throw her child into a fire? We said: No, not while she is able not to. He said: Allah is more merciful to His servants than this woman is to her child.”'
note: 'A captive mother, at the lowest point of her life, nursing any infant she could find. Of her, at her most desperate and most tender, the Prophet ﷺ said that Allah is more merciful to His servants than she to her child.'
\`\`\`

Notice the choice of measure. He did not say “more merciful than a king to his guest” or “than a friend to a friend.” He set the floor at a mother who had lost her own child among the captives, clasping every infant she found. Allah’s mercy toward His servant is *above* that, not equal to it.

## A rule He wrote upon Himself

Nor is this mercy a mood, something hoped for one day and feared to flip the next. It is a rule Allah declared about Himself before you existed to sin at all:

\`\`\`hadith
text: 'لمّا خلق اللهُ الخلقَ كتب في كتابه - هو يكتب على نفسه، وهو وضعٌ عنده على العرش -: إنّ رحمتي تغلِبُ غضبي.'
source: 'Sahih al-Bukhari 7404'
url: 'https://sunnah.com/bukhari:7404'
translation: '“When Allah created creation, He wrote in His book (He wrote it upon Himself, and it is laid up with Him above the Throne): My mercy prevails over My wrath.”'
note: 'In Muslim’s narration (2751): “My mercy has outrun My wrath.” Mercy, then, is the prior, prevailing default; wrath is the exception with its causes, the reverse of the picture in which religion is a standing threat suspended over everyone’s head.'
\`\`\`

## A door that never closes while you live

But what about someone who has wrecked things, sinned so long he assumes he is disqualified? Muslims have long called this the most hope-filled verse in the Qur’an. Read who it is addressed to:

\`\`\`ayah
ref: 39:53
highlight: لا تقنطوا من رحمة الله
translation: '“Say: O My servants who have gone to excess against their own souls, do not despair of Allah’s mercy. Allah forgives all sins: He is the Forgiving, the Merciful.”'
note: 'The address is to those who have wronged themselves to excess: the serious sinners themselves. Yet He still calls them “My servants,” still claims them as His own; and the first thing He commands them is not a punishment or a rebuke but a prohibition of despair, followed by a promise: all sins forgiven, for whoever turns back.'
\`\`\`

## Near, with no intermediary

One last distance remains in many minds: even if He is merciful, how would someone like *me* reach Him?

\`\`\`ayah
ref: 2:186
highlight: فإني قريب
translation: '“And when My servants ask you about Me, I am near. I answer the call of the caller when he calls on Me…”'
note: 'Elsewhere in the Qur’an, when people ask, the answer usually comes as an instruction to the Prophet ﷺ: “Say to them…”. Here the intermediary drops out and the answer comes direct, as if the very grammar of the reply enacted the nearness it announces. No priest between you and Him, no appointment, no gate: you speak, and He hears.'
\`\`\`

\`\`\`tip
This verse is not a theory to read; it is a door to try. Tonight, in no special formula and no special language, try saying: God, if You are real and this is true, guide me to You. It is not a condition for reading the rest of this guide, but the fitrah you read about at the start of the road knows there is something in your chest that wants to say it.
\`\`\`

\`\`\`doubt
claim: 'The problem isn’t the warning; it’s the sentence. Punishment without end, for a disbelief that lasted seventy years, is a penalty no human scale of justice would call proportionate. And worse: it falls on people who looked honestly and were not convinced. What kind of mercy is that?'
answer: |-
  The first answer: an honest warning about a real danger is precisely what a merciful being does. A doctor who names your disease bluntly and hands you the cure is kinder than one who flatters you into the grave, and nobody calls a minefield warning sign an assault on hikers. If there really is an accounting (and the lesson on evil and suffering argued that complete justice requires one), then the height of mercy is to be warned of it in advance, in the starkest terms available; the height of cruelty would be to let you stroll toward it reassured.
  The second answer is in the proportions, which this lesson has just shown you in the texts themselves: mercy is the written, prior, prevailing rule; wrath is the exception with its causes; and the door stays open for as long as a person lives: open, explicitly, to the very people who spent a lifetime going to excess. Punishment, in the Qur’an’s own picture, is not the temper of an irritable deity; it is the end of someone who saw the door standing open all his life and insisted on never walking through it. And anyone genuinely afraid of the fire has his exit named in the verse he just read: do not despair.
  The third answer goes to proportion, which is the binding part of the objection. Eternity, as the scholars frame it, is not payment for a fixed number of years but for what the heart settled on by the end; whoever dies still refusing dies on an intention that would have stayed with him had he stayed. And the door was not shut for one moment of that life, which already takes the picture out of the category of a court with no way out. As for someone who searched honestly and never had the case put to him, the Qur’an makes liability wait on the message arriving, and you will read its text in “Is reason alone enough?” (17:15): no punishment until a messenger has been sent.
\`\`\`

\`\`\`rule
The proofs established a Creator; His book tells you who He is. He opened nearly every surah with two names of mercy, His Prophet ﷺ set a mother’s mercy as the floor, not the measure, of His, He wrote upon Himself that His mercy prevails over His wrath, He forbade the worst sinners to despair, and to those who ask about Him He answered directly: I am near. Islam does not summon you to a force to dread from far away, but to a Lord to love from up close.
\`\`\`

\`\`\`quiz
questions:
  - q: What was the Prophet ﷺ teaching with the scene of the captive woman nursing the infants?
    options:
      - That Allah is more merciful to His servants than the most intense mercy humans know, a mother’s for her child
      - That Allah’s mercy is exactly equal to a mother’s mercy
      - That mercy applies to children but not to adults
      - That nursing infants is among the greatest good deeds
    answer: 0
    why: He took the strongest mercy his companions could witness and set it as a floor, saying Allah is more merciful to His servants than she to her child, a lower bound, not an equivalence.
  - q: What did Allah write upon Himself, in the authentic hadith?
    options:
      - That His mercy prevails over His wrath; in another narration, that it has outrun it
      - That wrath is the default and mercy the rare exception
      - That His mercy is reserved for people who never sinned
      - That mercy can only be obtained through priests
    answer: 0
    why: Bukhari records that Allah wrote a decree kept above the Throne that His mercy prevails over His wrath; Muslim’s narration says it has outrun it; mercy is the prior, prevailing rule.
  - q: How does this lesson answer the objection that warning people about hell contradicts mercy?
    options:
      - A truthful warning of a real danger is itself merciful, and the texts make mercy the prevailing rule with the door open to the repentant for life
      - By saying the fire is only a literary symbol
      - By saying the threats applied only to past nations and have expired
      - By saying mercy means nobody is accountable for anything
    answer: 0
    why: Warning of a real danger is the doctor’s kindness, not cruelty; and the proportions in the texts put mercy first and prevailing, with punishment as the end of refusing a door that stood open for a lifetime.
\`\`\`
`,"../content/lessons/en/musa-and-isa.md":`---
title: Musa and ʿIsa in Islam
description: 'The most-named person in the Qur’an is the prophet of the Children of Israel, and the only woman it names is the mother of the Messiah. What Islam affirms about Jesus, what it denies, and on what argument.'
tags: [Moses, Jesus, Maryam, belief in the messengers]
resources:
  - title: Surah Maryam in full on quran.com
    url: https://quran.com/maryam
    note: Read the story of Mary and the birth of Jesus as the Qur’an itself tells it, with translations.
---

> **The one idea:** no Muslim's faith is valid without believing in Moses and Jesus and honoring them. The disagreement with Christianity is not over honoring Jesus; it is over the *form* of the honor: Islam's claim is that deifying him was a drift that crept into the veneration, and that Islam restores him to what he said about himself.

## Numbers that surprise people hearing them for the first time

Anyone who assumes Islam was built on hostility to what came before it is startled by these facts, all countable in the Qur'an's own text:

- **The most-named person in the Qur'an is not Muhammad ﷺ**; it is Musa (Moses), peace be upon him: over a hundred and thirty times by name, and his story is the Qur'an's longest and most retold. Muhammad ﷺ is named four times, and once by the name Ahmad (61:6).
- **The only woman named in the Qur'an is Maryam (Mary)**, the mother of Jesus: thirty-four times (more than the New Testament names her), and the nineteenth surah bears her name.
- **ʿIsa (Jesus), peace be upon him, is named twenty-five times**, and the Qur'an calls him *the Messiah* eleven times.
- **And belief in them both is not an optional courtesy but a pillar:** whoever denies the prophethood of Moses or Jesus is simply not a Muslim.

\`\`\`ayah
ref: 2:285
show: كل آمن بالله وملائكته وكتبه ورسله لا نفرق بين أحد من رسله
highlight: لا نفرق بين أحد من رسله
translation: '“…All believe in Allah, His angels, His books, and His messengers: We make no distinction between any of His messengers…”'
note: 'The “no distinction” is in the root of believing in them: whoever accepts some messengers and rejects others is not a believer on the Qur’an’s scale. A Muslim is doctrinally required to believe in Moses and Jesus, love them, and revere them.'
\`\`\`

The previous lesson already gave you the Prophet's ﷺ words in the Sahih collections: that he is the nearest of all people to Jesus son of Mary, and that the prophets are brothers with one religion.

## What Islam affirms about Jesus, peace be upon him

More than a Christian reader expects from a religion assumed to be an adversary:

- **His virgin birth:** the Qur'an states that Mary conceived him with no father at all, a pure miracle, told in detail in Surah Maryam (19:16–22).
- **That he is a word from Allah:**

\`\`\`ayah
ref: 3:45
show: إن الله يبشرك بكلمة منه اسمه المسيح عيسى ابن مريم
highlight: بكلمة منه
translation: '“O Maryam, Allah gives you glad tidings of a word from Him: his name is the Messiah, ʿIsa son of Maryam, honored in this world and the Hereafter…”'
note: 'In the classical tafsir (al-Tabari, Ibn Kathir), “a word from Him” means he was created by the word “Be,” with no father, in honor of the miracle of his creation; not that he is God’s eternal attribute made flesh. On their reading the title is an honorific, not a deification.'
\`\`\`

- **His miracles:** raising the dead, healing the blind and the leper: the Qur'an affirms them all, and in the very verses that list them repeats one qualifier: *by Allah's permission*, not from the Messiah's own essence (3:49, 5:110).
- **And that he is the Messiah**, eminent in this world and the next, among the greatest resolve-bearing messengers.

There is no Muslim on earth who does not love and revere Jesus; whoever demeans or curses him has left Islam. That is his station in the religion so many assume is his enemy.

## What Islam denies, and on what argument

Islam denies one thing at root: that Jesus is God, or the Son of God to be worshipped. It denies the crucifixion with it: the Qur’an states that ʿIsa was neither killed nor crucified, and that Allah raised him to Himself (4:157 and 4:158), and it denies the Trinity in as many words (4:171, 5:73). We know that for a Christian reader the crucifixion is not a historical detail but the heart of the faith, which is exactly why it is named here rather than passed over; which account the evidence supports is a question of texts and history, and it belongs to the “Why Islam?” unit, not to this lesson. And it argues the point not by mocking those who hold it, but with calm argument; these two verses are examples of its method:

\`\`\`ayah
ref: 3:59
highlight: كمثل آدم
translation: '“Indeed, the example of ʿIsa with Allah is like that of Adam: He created him from dust, then said to him “Be,” and he was.”'
note: 'Revealed, the commentators record, during the disputation with the Christians of Najran: if a fatherless birth entails divine sonship, Adam was created with neither father nor mother, and no one calls Adam divine. The miracle proves the Creator’s power, not the creature’s divinity.'
\`\`\`

\`\`\`ayah
ref: 5:75
show: ما المسيح ابن مريم إلا رسول قد خلت من قبله الرسل وأمه صديقة كانا يأكلان الطعام
highlight:
  - قد خلت من قبله الرسل
  - كانا يأكلان الطعام
translation: '“The Messiah, son of Maryam, was no more than a messenger; messengers passed away before him. His mother was a woman of perfect truth. They both used to eat food…”'
note: 'An argument from daily life: the Messiah and his mother ate food, and one whose body depends on food is not a god. Notice the manners in the very verse of disagreement: it praises his mother, a woman of perfect truth, while denying their divinity.'
\`\`\`

And the first words Jesus speaks in the Qur'an's telling (an infant in the cradle, when his mother pointed to him to answer her accusers) are his own self-introduction:

\`\`\`ayah
ref: 19:30
highlight: إني عبد الله
translation: '“He said: I am the servant of Allah. He has given me the Book and made me a prophet.”'
note: 'Allah made the infant Messiah speak to clear his mother, and the first thing he declared about himself was servanthood to Allah, and prophethood. This, in Islam’s claim, is Jesus as he described himself, before people said of him what they later said.'
\`\`\`

And lest this description seem reserved for Jesus: the Qur'an describes Muhammad ﷺ himself in nearly the same words in 3:144: a messenger, preceded by messengers. Islam does not raise its own prophet above the station in which it places Jesus; both, in its creed, are human messengers, and the noblest title either receives is *Allah's servant and messenger*.

\`\`\`doubt
claim: 'Our case has never rested on the miracles. It rests on what Jesus said about himself: he forgives sins, he says “before Abraham was, I am” and “I and the Father are one,” and he accepts worship without refusing it. Then he rose from the dead, and it is on that, not on his birth, that his disciples built everything. Reducing him to a prophet does not answer our strongest evidence; it declines to look at it.'
answer: |-
  Apply one scale to all cases. Born without a father? Adam was created with neither father nor mother, and no one worships Adam. Raising the dead? The Bible itself records prophets at whose hands the dead were raised (Elijah, Elisha), and their followers never called them divine. In every such case the miracle points to the power of the One who worked it, Allah, not to the divinity of the man through whose hands it ran; which is exactly why the Qur’an stamps every one of Jesus’s miracles with “by Allah’s permission.”
  As for “demotion,” it assumes prophethood is a lowly station. In Islam it is not: there is no title more honored than servanthood to Allah joined to messengership, and it is the highest thing Muslims say of Muhammad ﷺ himself. To a Muslim, the demotion is attributing to Jesus what he never said of himself; the honoring is revering him in the station he announced from the cradle. So the disagreement is not between love and coldness (both sides love him) but between two forms of honoring, and Islam refers the dispute to Jesus’s own first words about himself.
  As for his sayings about himself in the Gospels, which is where the real case lies, the answer has two parts. First, those same Gospels carry sayings that pull the other way on their face: “Why do you call me good? No one is good but God alone” (Mark 10:18), and, in his own prayer, “you, the only true God” (John 17:3). Second, an argument from a text assumes first that the text is established and transmitted intact, and that is a question of manuscripts and history whose place is the “Why Islam?” unit. So this lesson states Islam’s position and its reasons from the inside, and defers the comparison to where it belongs rather than declining to look at it.
\`\`\`

\`\`\`rule
Belief in Moses and Jesus is a pillar of every Muslim’s faith, not a courtesy. Islam affirms their prophethood and miracles, and affirms of Jesus his virgin birth and his titles (the Messiah, a word from Allah) while denying his divinity and sonship, resting the case on his own words about himself: the servant of Allah, and His prophet. The dispute is over the form of the honoring, never its existence.
\`\`\`

\`\`\`note
This lesson presented Islam’s position; it has not yet asked you to prefer it. Weighing the rival claims (whose text was preserved, whose conception of God stands scrutiny) is the work of the “Why Islam?” unit, with declared criteria applied evenhandedly to everyone. And the Christian reader has a right upon us here: to find disagreement without a trace of ridicule. This is our creed concerning Jesus, said with love for him and for those who love him.
\`\`\`

\`\`\`quiz
questions:
  - q: Who is the most-named person in the Qur’an?
    options:
      - Musa (Moses), peace be upon him, over a hundred and thirty times
      - Muhammad ﷺ
      - Ibrahim (Abraham), peace be upon him
      - ʿIsa (Jesus), peace be upon him
    answer: 0
    why: Moses is named over a hundred and thirty times; Muhammad ﷺ four. The Qur’an is built on confirming the earlier prophets, not erasing them.
  - q: What does this verse entail for a Muslim’s faith?
    ref: 2:285
    word: لا نفرق بين أحد من رسله
    options:
      - 'Faith is invalid if a single messenger’s prophethood is denied: believing in Moses and Jesus is a pillar, not an option'
      - A Muslim may believe in Muhammad ﷺ alone and drop the rest
      - Distinguishing between messengers is a matter of personal judgment
      - The verse concerns angels, not messengers
    answer: 0
    why: The Qur’an makes belief in all the messengers one bundle; accepting some and rejecting others fails its own definition of belief.
  - q: What does Islam affirm about Jesus, and what does it deny?
    options:
      - 'It affirms his virgin birth, his miracles by Allah’s permission, and his titles (the Messiah, a word from Allah), and denies his divinity and sonship'
      - It denies his miracles and affirms only his prophethood
      - It affirms his divinity and denies his prophethood
      - The Qur’an mentions him only in passing
    answer: 0
    why: The Qur’an’s argument is that a miracle shows the power of Allah, not the divinity of the man it ran through. And Jesus introduced himself from the cradle as Allah’s servant and prophet.
\`\`\`
`,"../content/lessons/en/news-of-unseen.md":`---
title: News of the unseen
description: 'A crushed empire, declared (at the depth of its collapse) victorious within a few years; and a living enemy whose fate an entire surah stakes itself on, leaving him a decade to refute it with one sentence. Open bets, all of them won.'
tags: [the Rome prophecy, foretelling, Surah al-Masad]
---

> **The one idea:** a liar avoids falsifiable bets; he prophesies in vague elastic phrases nothing can pin down. This book did the opposite: it announced specific, dated, publicly refutable predictions, and won them. Whoever bets in the open on outcomes he cannot control is either mad by every human calculation, or informed by the Knower of the unseen.

## A prophecy with a deadline

In 614 Persia crushed Rome: it tore away Syria, entered Jerusalem and carried off the Christians’ greatest relic, then moved on Egypt four years later and had it secured within a few more. The Roman empire looked finished, and in the historians’ description it was a state on the edge of disappearing. The pagans of Makkah gloated over the Muslims: our fellow fire-worshippers have beaten the people of scripture, and we will do the same to you.

Then came verses that contradicted every visible strategic calculation:

\`\`\`ayah
ref: 30:2
translation: '“The Romans have been defeated…”'
note: 'First, the fact conceded: Rome really was beaten. No denial of the defeat.'
\`\`\`

\`\`\`ayah
ref: 30:3
highlight: وهم من بعد غلبهم سيغلبون
translation: '“in the nearest land; and they, after their defeat, will be victorious…”'
note: 'Then the explicit prophecy: the crushed loser will win. No “perhaps,” no hedging: an emphatic future.'
\`\`\`

\`\`\`ayah
ref: 30:4
highlight: في بضع سنين
translation: '“Within a few (biḍʿ) years. To Allah belongs the command, before and after; and on that day the believers will rejoice.”'
note: 'The most dangerous element: a deadline. In Arabic, biḍʿ means three to nine on the best-known account; the verse schedules its own public examination and holds no power to postpone it.'
\`\`\`

Weigh the gamble if these were human words: the resurrection of a collapsing empire was a matter in which Muhammad ﷺ commanded not one soldier; the term was fixed; and his enemies were watching for any slip. Then it happened as stated: Heraclius launched his famous counter-campaign in 622 and carried the war onto Persian soil. The road was not smooth: his own capital was besieged in 626 and survived it, and the balance finally turned when Persia was beaten in its own heartland at Nineveh in late 627, giving back what it had taken in the peace that followed.

Which years exactly are the "few"? Here people differ, and you are owed the disagreement rather than a smooth surface. The commentators count the term from the revelation rather than from the defeat, because the term they reckon by is the one Abu Bakr publicly wagered on the day the verses were recited. Where they differ is the fulfillment: Ibn ʿAbbas, al-Thawri and al-Suddi put it at Badr in 2 AH, on a report of Abu Saʿid al-Khudri that al-Tirmidhi graded hasan gharib; ʿIkrimah, al-Zuhri and Qatadah put it at al-Hudaybiyah, and Ibn Taymiyyah judged that the sounder view; a third view puts it two years before the hijrah. On all of them the term falls inside bidʿ. Count instead from the fall of Jerusalem in 614, and Heraclius's turn in 622 falls inside nine years while the decisive blow at Nineveh in 627 falls outside them. Ancient chronology is approximate either way. What nobody disputes is the substance: an empire written off as finished came back as victor within a handful of years, and the announcement was made while every visible calculation said the opposite.

And the Qur'an itself names this category of knowledge and argues from it:

\`\`\`ayah
ref: 11:49
highlight: ما كنت تعلمها أنت ولا قومك من قبل هذا
translation: '“These are accounts of the unseen that We reveal to you; neither you nor your people knew them before this…”'
note: 'Following the story of Nuh: this argument, telling of what no human channel could deliver, is the Qur’an’s own argument for itself, not a later invention of apologists.'
\`\`\`

## A surah's bet on a living man

The second prophecy is bolder, because refuting it lay in the hands of a living enemy. Abu Lahab, the Prophet's ﷺ uncle and one of his fiercest enemies, had an entire surah revealed about him, sealing his fate:

\`\`\`ayah
ref: 111:3
translation: '“He will burn in a fire of blazing flame.”'
note: 'A categorical verdict on a living man: he will die a disbeliever and enter the Fire. No exception clause, no condition. That it came down in his presence is established in the Sahih: when the Prophet ﷺ gathered Quraysh at as-Safa, Abu Lahab said “Perish you, is this why you gathered us?”, and the surah came down (al-Bukhari 4801).'
\`\`\`

Now stand in Abu Lahab's place. Your enemy is reciting to the public a surah declaring you will never believe. The cheapest weapon imaginable lies in your hand: stand in the marketplace and say *"I bear witness there is no god but Allah"* (one sentence, even hypocritically), and your enemy's book refutes itself in front of everyone. Abu Lahab lived roughly ten years after the surah came down, hearing it recited, and died on his disbelief without ever saying the sentence. Ten years with the door open, while the book's supposed human author would have been hostage, every morning, to a single sentence his enemy could choose to say. Who gambles like that with a book he claims is infallible?

## “A prophecy after the fact? Or a lucky guess?”

\`\`\`doubt
claim: 'Perhaps the Rome verses were inserted into the Qur’an after Rome actually won; or they were a guess that happened to land: soothsayers’ lucky hits are remembered and their misses forgotten.'
answer: |-
  Insertion after the event collides with how the Qur’an was transmitted, as the “Why Islam?” unit details: a text recited publicly and memorized by dozens, then hundreds, from the moment of revelation, in Makkah, before Muslims had any state or editorial power. Retro-inserting verses into a text carried in the memories of followers and enemies alike is a claim that needs a mechanism nobody has described; and the sources that date the revelation before the event are the same sources that record the event.
  As for “soothsayers sometimes hit”: a true rule, with a condition. The soothsayer hits by volume and vagueness, so his misses drown the record. This case is its opposite in every respect: one prophecy with specified parties (who will win, who will lose, and within how long) against the visible odds; plus al-Masad’s bet left open for a decade. Had the Qur’an ever missed such a throw, its enemies, who counted its every breath, would have seized it that very day; not a word of the kind is recorded from them in anything of theirs that reached us.
  And note the method: this lesson built nothing on elastic predictions that fit any outcome. It used dated, falsifiable announcements that survived falsification. That is the difference between evidence and marketing.
\`\`\`

\`\`\`rule
The Qur’an announced dated unseen news (Rome’s victory within a few years, spoken at the depth of Rome’s collapse) and sealed the fate of a living enemy who held its refutation on his tongue for ten years. Both landed exactly as stated. A liar does not bet in the open on what he cannot control; what, then, of one who won every bet he made?
\`\`\`

\`\`\`quiz
questions:
  - q: What makes the opening verses of Surat ar-Rum evidentially remarkable?
    ref: 30:3
    word: وهم من بعد غلبهم سيغلبون
    options:
      - A specific, deadline-bound prophecy of a crushed empire’s victory, against all visible odds, fulfilled within its term
      - A description of a battle already finished before the revelation
      - A prayer for Rome’s victory, not a prediction
      - A hint at a victory to come centuries later
    answer: 0
    why: 'The verses conceded the defeat, then categorically promised victory within biḍʿ (three to nine) years: a self-scheduled public examination, which it passed.'
  - q: Why is Surah al-Masad an open bet no human author would dare?
    options:
      - It sealed a living man’s fate as dying in disbelief; he could have refuted the whole book with one testimony, even insincere, and in his remaining decade he never said it
      - It is the Qur’an’s longest and hardest surah to memorize
      - Abu Lahab had already died before it came down
      - It never names him explicitly
    answer: 0
    why: One sentence on his tongue, even a lie, would have made the book refute itself publicly; the door stood open ten years and he never walked through it.
  - q: How does the lesson answer “it was a guess that happened to land”?
    options:
      - Soothsayers work by volume and vagueness so misses drown; this is one dated, specific, against-the-odds announcement, and enemies counting every slip never caught a single miss of this kind
      - Coincidence is rationally impossible in all things
      - The prophecy was inserted after the event, so there is no issue
      - The Arabs had no tradition of soothsaying anyway
    answer: 0
    why: The “lucky hit” rule operates where volume and vagueness reign; here stands a falsifiable dated claim that survived falsification, under hostile watch that recorded no counterexample.
\`\`\`
`,"../content/lessons/en/no-contradiction.md":`---
title: No contradiction in it
description: 'A book revealed piecemeal across twenty-three years, through persecution, migration, war, and statehood, then invites its doubters to audit it for contradiction. What author dares to write that invitation?'
tags: [coherence, contradiction lists, tadabbur]
---

> **The one idea:** the Qur’an does not ask to be accepted before it is examined; it writes the test itself: were it from anyone other than Allah, you would find much contradiction in it. An open invitation to a hostile audit, standing for fourteen centuries. And the circumstances of its revelation are what make passing that audit astonishing.

## A book that demands its own trial

\`\`\`ayah
ref: 4:82
highlight: لوجدوا فيه اختلافا كثيرا
translation: '“Will they not ponder the Qur’an? Had it been from other than Allah, they would have found within it much contradiction.”'
note: 'The verse states what a researcher today would call a testable hypothesis: assume it is human, then go looking. If it is human, you will find much contradiction.'
\`\`\`

Notice who is being addressed: the people who doubt it are the ones invited to ponder it. Books normally ask their readers for goodwill; this book asks its opponents for an inspection, and names for them what to inspect for. A human author who knows his book contains what all human books contain does not write this verse, because he knows exactly how it will be used against him.

## Why coherence here is astonishing

To weigh that invitation, remember how this book came into existence:

- It came down **piecemeal across twenty-three years**, not in the seclusion of an author arranging his thoughts.
- Along the way it crossed the persecution of Makkah, the migration, Badr, Uhud, the Confederates, and the building of a state with its treaties and delegations.
- It **answered events as they happened**, and questions put to it; the Qur’an is full of passages that open by quoting the people’s own question.
- And it was **recited publicly the moment it came down**, memorized by the companions on the spot. Nothing that left it could ever be quietly amended afterwards.

\`\`\`compare
columns:
  - title: How humans write
    points:
      - Drafts get revised, editions get corrected, and authors disown the opinions of their youth
      - The author picks his subject and his timing, writing in the calm of a study
      - A surprise event means editing the text before it ships
      - The longer the span and the wider the subjects, the more the collisions multiply
  - title: How the Qur’an came down
    points:
      - No draft, no second edition, no recall; public recitation was the publication
      - Events dictated the subject and the timing, and the text answered on the hour
      - Twenty-three years through persecution, migration, war, and statehood; one voice throughout
      - Its creed in the last passage revealed is its creed in the first
\`\`\`

Compare this with any author you know: how many great writers have a first book that does not clash with their last, even though they write in safety and can delete anything before publishing? Now consider a text published serially, on the rhythm of events, in the highest-stakes subjects there are (the unseen, law, history, the human soul), whose speaker could never take back a single letter.

## The lists published online

\`\`\`doubt
claim: There are long pages online titled “contradictions in the Qur’an,” with dozens of numbered examples. How can anyone still say there is no contradiction in it?
answer: |-
  Those lists exist, and the scholarly response to them is to examine them item by item, not to wave at them, and not to laugh at them. Those who do the examining find recurring categories: verses describing two different situations read as if they described one; legal rulings that were phased in through openly recorded abrogation (legislation staged over time, which is jurisprudence, not a creed contradicting itself); stylistic differences in how one story is told to fit each surah’s purpose; and translation artifacts that do not exist in the Arabic text.
  More importantly, this examination is not a modern discovery. Muslim scholars themselves collected the hardest passages and answered them centuries ago, in an entire genre called mushkil al-Qur’an; Ibn Qutaybah wrote his in the third Islamic century. The famous items were studied from inside the house long before any opponent knocked.
  So the invitation stands exactly as the verse worded it: take any single item from any list, carry it to the tafsir literature, and see whether it survives. This site’s method is examination, not reassurance. And notice, finally, the size of what the verse promised: much contradiction, if the book were human. A list of items each of which has had a studied answer for centuries is not “much contradiction,” not in a book this large, spanning creed, law, history, and nature across twenty-three years.
\`\`\`

\`\`\`note
Abrogation in rulings (a command legislated and later superseded, like the staged prohibition of wine) is announced, documented, phased legislation studied by jurisprudence, not a creed contradicting itself: the book’s account of God, of the Last Day, and of the foundations of morality never once shifted. Scholars do differ on how many passages are genuinely abrogated (some counting many, later specialists far fewer), but that is a dispute about tallying legal rulings, not about any point of belief. We flag it because naming disagreement where it exists is this guide’s method.
\`\`\`

\`\`\`rule
A book revealed serially across twenty-three years on the rhythm of events, published by recitation the moment it came down (no draft, no revision, no recall), that remained one voice and one creed from its first passage to its last, and that itself invited its enemies to audit it. No human book combines these, and the verse that issues the audit is still waiting to be refuted.
\`\`\`

\`\`\`quiz
questions:
  - q: What does the tadabbur verse in Surat an-Nisa do that books normally never do?
    ref: 4:82
    word: ولو كان من عند غير الله لوجدوا فيه اختلافا كثيرا
    options:
      - It states a testable hypothesis and invites the doubters themselves to run the test
      - It asks for belief first and understanding later
      - It forbids debating the text and settles for assertion
      - It addresses only believers with praise for the book
    answer: 0
    why: The verse writes the test itself (were it human, much contradiction would be found) and aims it at the skeptic, not at the convinced.
  - q: Why is the Qur’an’s coherence more striking than the coherence of a well-edited human book?
    options:
      - It came down piecemeal over twenty-three years on the rhythm of events, published by immediate public recitation, with no draft, no revision, no recall
      - It is a short book on few subjects, easy to keep consistent
      - Its author wrote it in total isolation from events
      - Its followers refused to examine it, so nothing surfaced
    answer: 0
    why: 'The circumstances of revelation are the exact opposite of the conditions human consistency requires: an author needs the draft and the revision pass, and this text had neither, yet stayed one voice.'
  - q: How does this guide deal with the published contradiction lists?
    options:
      - It calls for examining them item by item against the tafsir literature, noting that scholars answered the hardest items centuries ago in the mushkil al-Qur’an genre
      - It treats their mere existence as proof they are false
      - It advises ignoring them because their authors are opponents
      - It concedes them but calls them unimportant
    answer: 0
    why: The site’s method is examination, not reassurance; and the famous items were studied from within the tradition, as early as Ibn Qutaybah in the third Islamic century, so the reader is invited to test one item personally.
\`\`\`
`,"../content/lessons/en/one-god.md":`---
title: 'Say: He is Allah, One'
description: 'The shortest introduction to God in the Qur’an: four verses that close every door a wrong idea of the Creator has ever come through. And why, as a matter of plain logic, there cannot be more than one God.'
tags: [tawhid, Surat al-Ikhlas, why only one God]
resources:
  - title: Surat al-Ikhlas with commentaries (quran.com)
    url: 'https://quran.com/112'
    note: The full surah, with classical commentaries you can open verse by verse.
---

> **The one idea:** the earlier units established, by reason, that this universe has a Creator. The larger question remains: who is He? Islam’s shortest answer is a surah of four verses, and each verse closes a door through which people have walked into a wrong idea of God.

\`\`\`note
Up to this point, this guide has argued from reason and observation alone, and where it argues, it still will. But anyone examining a religion has the right to ask first: who is this God you are inviting me to? So from this unit on, the guide presents what Islam itself says about Allah, as an introduction, not yet as proof. The case that these words are actually revelation has entire units of its own ahead; nothing here asks for your assent before its evidence.
\`\`\`

## Four verses of introduction

Surat al-Ikhlas is one of the shortest surahs in the Qur’an, yet scholars have long called it the surah of pure tawhid, pure monotheism. Read it verse by verse:

\`\`\`ayah
ref: 112:1
highlight: أحد
translation: '“Say: He is Allah, Ahad, uniquely One.”'
note: 'The surah does not say wāḥid, “one,” but aḥad, a stronger word. A wāḥid can have a peer of its own kind; an aḥad has no peer in any respect. Ibn Kathir glosses it: the One who has no counterpart, no rival, no likeness, no equal.'
\`\`\`

\`\`\`ayah
ref: 112:2
highlight: الصمد
translation: '“Allah, al-Samad: the One all creation turns to in need, while He needs nothing.”'
note: 'The commentators (al-Tabari, Ibn Kathir) give two complementary senses of al-Samad: the Master whose perfection is complete, and the One every creature turns to for its needs. Both say the same thing: everything besides Him is needy; He alone is not.'
\`\`\`

\`\`\`ayah
ref: 112:3
translation: '“He does not beget, and He was not begotten.”'
note: 'Both directions denied at once: no child, no parent. Whatever is born has a beginning, and whatever has a beginning is a creature. And you have already seen, in the Creator unit, that the chain of creatures must end at a Creator who never began.'
\`\`\`

\`\`\`ayah
ref: 112:4
highlight: كفوا أحد
translation: '“And there is nothing comparable to Him.”'
note: 'A kufuw is a peer, an equivalent. Nothing resembles Him and nothing measures Him; every image your mind can form is a created thing, and He is unlike it.'
\`\`\`

## Four doors, closed

Now notice what these four verses have shut. Every wrong idea of God that human history has produced collides with one of them:

- **Gods who are born**, with fathers and mothers, like the gods of the old mythologies, refused by the third verse: whatever is born began, and whatever began is a creature.
- **Gods who beget**, with sons inheriting or sharing divinity, refused by the same verse: offspring belong to beings that die and need succession, or that need at all; He is neither.
- **Gods who need** (who eat the offerings, sleep, and fear), refused by the name al-Samad: all creation needs Him; He needs nothing.
- **Gods carved into a likeness** (of a man, an animal, a planet) and measured against created things, refused by the fourth verse: He has no equal and no likeness.

A surah revealed fourteen centuries ago, still answering, in advance, every distorted picture of God that would occur to anyone after it.

## Why one, and not two?

A god, by the only definition that gives the word meaning, is the one to whom creation and command belong: a will that nothing can block. Now suppose two gods in that sense, and ask what happens when their wills differ: one wills a thing to move, the other wills it to stop? If the first will prevails, the second god is overruled, limited, and no god at all. If the second prevails, reverse the labels. If neither prevails, both are powerless. Two absolute wills cannot share one universe, any more than two drivers with different destinations can share one steering wheel.

The Qur’an states this argument in a single verse:

\`\`\`ayah
ref: 21:22
highlight: لو كان فيهما آلهة إلا الله لفسدتا
translation: '“Had there been gods in the heavens and the earth besides Allah, both would have fallen into ruin. Exalted is Allah, Lord of the Throne, above what they describe.”'
note: 'Scholars call this the argument from mutual exclusion (burhan al-tamanu‘). If there were many gods, absolute wills would collide and the order of the cosmos would break. So a universe running on one unbroken order testifies to one governor.'
\`\`\`

\`\`\`ayah
ref: 23:91
highlight:
  - لذهب كل إله بما خلق
  - ولعلا بعضهم على بعض
translation: '“Allah has taken no son, nor is there any god besides Him, for then each god would have taken off what it created, and some would have overpowered others…”'
note: 'Many gods would mean each god withdrawing into its own domain (borders between kingdoms showing up in the fabric of things), and then wills contending until some prevailed over others. Both are the opposite of what we observe.'
\`\`\`

And what we observe testifies for these verses, not against them: the physics of the farthest galaxy ever measured is the physics of your kitchen. From edge to edge, the universe is one seamless fabric with no border posts between rival kingdoms. One continuous order: exactly what one governor predicts.

\`\`\`doubt
claim: The argument assumes multiple gods would fight. Why couldn’t two gods agree eternally, or divide the cosmos between them so cleanly that they never overlap?
answer: |-
  The division is itself the refutation: a god whose authority stops where his partner’s begins is a limited god, bounded and therefore lacking, the opposite of what “god” meant when we started. And eternal agreement is one of two things. If it comes from consultation and coordination, then each needed the other’s consent, and a being with needs is no god. If instead their wills never diverge in anything, and neither ever produces an effect the other doesn’t, then nothing remains of the second god but a name: one will, one power, which you have merely called by two names.
  There is also a question of method. A second god who never once leaves an independent trace is a claim with no witness. The evidence brought us to a Creator of the universe; positing a second one who does nothing distinguishable is more claim with no more evidence.
\`\`\`

## A surah worth a third of the Qur’an

That staggering weight for the shortest of surahs is nobody’s pious exaggeration; the Prophet ﷺ said it himself, when a companion thought the surah too small:

\`\`\`hadith
text: 'أنّ رجلًا سمع رجلًا يقرأ {قُلْ هُوَ اللَّهُ أَحَدٌ} يُردّدها، فلمّا أصبح جاء إلى رسول الله ﷺ فذكر ذلك له، وكأنّ الرجل يتقالُّها، فقال رسول الله ﷺ: والذي نفسي بيده، إنها لتعدل ثلث القرآن.'
source: 'Sahih al-Bukhari 5013'
url: 'https://sunnah.com/bukhari:5013'
translation: '“A man heard another man reciting ‘Say: He is Allah, One,’ repeating it again and again. In the morning he went to the Messenger of Allah ﷺ and mentioned it, as though he thought little of it. The Messenger of Allah ﷺ said: By Him in whose hand is my soul, it is equal to a third of the Qur’an.”'
note: 'The best-known explanation among scholars: the Qur’an’s meanings fall into three great themes (tawhid, law, and narratives), and this surah is pure tawhid, so it weighs a third. Ibn Taymiyyah and others gave this account; it is one of several, none held as certain.'
\`\`\`

If tawhid is a third of the Qur’an, you can see why the introduction to Allah begins with precisely this surah.

\`\`\`rule
Reason shows the Creator can only be one: two absolute wills cannot coexist, and a universe running on one seamless order testifies to one governor. And Surat al-Ikhlas describes Him in terms that close every door of error: **Ahad**, no peer; **al-Samad**, no need; **He neither begets nor was begotten**, no beginning and no partner; **and nothing is comparable to Him**, no likeness to measure Him by.
\`\`\`

\`\`\`quiz
questions:
  - q: How does Surat al-Ikhlas answer the idea of a god who is born or who begets?
    options:
      - It denies both at once, because whatever is born has begun, and whatever began is a creature, not the Creator
      - It says divine birth is possible but simply never happened
      - It forbids asking the question in the first place
      - It presents Allah as the strongest and oldest of a family of gods
    answer: 0
    why: The third verse denies both child and parent, and the reasoning is rational, not merely ritual; anything with a beginning belongs to the chain of creatures, and that chain must end at a Creator who never began.
  - q: What is the logic of the verse “had there been gods besides Allah in them, both would have fallen into ruin”?
    options:
      - Two absolute wills cannot coexist, so the universe’s single unbroken order testifies to a single governor
      - Multiple gods would eventually have negotiated a peace treaty
      - The “ruin” means human morals decay when people worship many idols
      - The verse records an actual ancient war between gods
    answer: 0
    why: This is the argument from mutual exclusion. Colliding absolute wills would break the cosmic order, and what we observe instead is one consistent physics from edge to edge.
  - q: What does the name al-Samad mean, according to the commentators?
    options:
      - The One all creatures turn to for their needs, while He needs nothing at all
      - The one who created the world and then left it to run alone
      - The one who gives without wisdom or measure
      - The one who needs his creatures’ worship to be complete
    answer: 0
    why: Al-Tabari and Ibn Kathir give two complementary senses (the Master of complete perfection, and the One sought in every need), and both amount to this, that everything besides Him is needy and He is not.
\`\`\`
`,"../content/lessons/en/one-message.md":`---
title: One message
description: 'From Nuh to Muhammad ﷺ, the prophets did not bring rival religions but one message: worship God alone. The differences between religions today are the drift, not the origin.'
tags: [one message, tawhid, the prophets]
---

> **The one idea:** newcomers are surprised to learn that Islam does not claim the earlier prophets were frauds, or that their followers’ ancestors were fools. It claims the opposite: one message was sent to every nation, and the differences you see between religions today are a later drift from a single origin, not the origin itself.

## What would you expect if the Sender is one?

Put what has already been established in front of you: one Creator, who sends guidance as a matter of mercy and justice (the previous lesson). What would you expect His messages to look like across nations and centuries? You would expect their core to be identical: an introduction to the Sender, and a call to worship Him alone. The core cannot change, because the reality it reports does not change with the calendar.

That is exactly what the Qur’an claims about the entire history of prophethood, phrased as a rule with no exceptions:

\`\`\`ayah
ref: 21:25
highlight: لا إله إلا أنا فاعبدون
translation: '“We never sent a messenger before you without revealing to him: there is no god but Me, so worship Me.”'
note: 'A standing rule: every messenger who ever came carried this same core: no one deserves worship but God, so worship Him alone. This is the statement of tawhid on which all of Islam rests.'
\`\`\`

\`\`\`ayah
ref: 16:36
highlight: في كل أمة رسولا
translation: '“And We sent into every nation a messenger: worship Allah and shun false gods.”'
note: 'No nation was left without a warner. A ṭaghut is anything worshipped besides Allah that consents to it, or anything followed into disobeying Him; those worshipped against their will, ʿIsa and the angels among them, are not included (21:101). So Islam’s claim is that pure monotheism is not a seventh-century Arabian invention; it is the original message delivered everywhere.'
\`\`\`

## Names you already know

The Qur’an does not speak of unknown messengers. It names the very men a Jewish or Christian reader knows before a Muslim does: Nuh (Noah), Ibrahim (Abraham), Musa (Moses), ʿIsa (Jesus). It presents them as links in one chain, all given the same commission:

\`\`\`ayah
ref: 42:13
highlight: أن أقيموا الدين ولا تتفرقوا فيه
translation: '“He has laid down for you the same religion He enjoined on Nuh, and what We revealed to you, and what We enjoined on Ibrahim, Musa, and ʿIsa: establish the religion and do not divide in it…”'
note: 'The “religion” enjoined on all of them is the shared core: tawhid. Ibn Kathir puts it directly: what they hold in common is the worship of Allah alone with no partner, however much their codes and paths differed, and he cites al-Ma’idah (5:48) for the difference. The practical laws, the forms of prayer and what is permitted, did differ from one dispensation to the next.'
\`\`\`

And the Prophet ﷺ described that chain in one sentence that could serve as this lesson’s summary:

\`\`\`hadith
text: 'أَنَا أَوْلَى النَّاسِ بِعِيسَى ابْنِ مَرْيَمَ فِي الدُّنْيَا وَالآخِرَةِ، وَالأَنْبِيَاءُ إِخْوَةٌ لِعَلاَّتٍ، أُمَّهَاتُهُمْ شَتَّى، وَدِينُهُمْ وَاحِدٌ'
source: 'Sahih al-Bukhari 3443; Sahih Muslim 2365'
url: 'https://sunnah.com/bukhari:3443'
translation: '“I am the nearest of all people to ʿIsa the son of Maryam, in this world and the next. The prophets are brothers of one father with different mothers, and their religion is one.”'
note: 'Brothers of one father: the commentators, Ibn Hajar among them, explain that the one father is the shared creed, tawhid, and the different mothers are the differing codes of law.'
\`\`\`

Hold that image: one father, the creed; different mothers, the laws. Islam does not say Musa brought one religion, ʿIsa a second that overturned it, and Muhammad ﷺ a third that abolished both. It says one religion came down repeatedly, to each nation in its own tongue and with its own code, and was then completed once.

## Then where did the differences come from?

A fair question: if the message was one, why do today’s religions disagree to the point of contradiction? Islam’s answer: the divergence happened after the prophets, not through them. The earlier revelations were not preserved in their original wording as delivered; centuries of transmission layered on additions, edits, and translations. The differences you see today measure the distance drifted from the origin; they are not evidence of multiple origins. And note that this is a historical claim open to examination, not a mere accusation; the examining happens in the unit called “Why Islam?”.

\`\`\`compare
columns:
  - title: Rival human inventions
    points:
      - Each religion is an independent human invention
      - The prophets are founders of competing schools
      - Whole nations were left with no word from heaven
      - The disagreement of religions is taken as proof they are all false
  - title: One message, many deliveries, one completion
    points:
      - 'One Sender, so one core: no god but God'
      - The prophets are brothers, each confirming the one before
      - No nation was left without a warner
      - Today’s differences are a later drift from a shared origin, and the message was completed in a preserved text
\`\`\`

\`\`\`doubt
claim: Every religion claims to be the original and calls the others the deviation. Islam’s claim is one of many identical claims. Why believe this one in particular?
answer: |-
  A fair objection, and the first answer is: don’t believe it yet. This lesson presents the claim; it does not ask you to grant it. The case for it belongs to the units ahead, where the weighing criteria are declared openly (uncompromised monotheism, a preserved text, internal coherence) and applied to Islam before anyone else.
  But notice already that this is not a “trust me” claim: it commits itself to consequences that can be checked. If the message was one, you should find explicit monotheism in the oldest layers of the great traditions, and you do: the first of Musa’s commandments is the worship of God alone, and when ʿIsa was asked for the greatest commandment, his answer as Mark’s Gospel reports it (Mark 12:29) begins: the Lord our God is one Lord. And if the message was completed in a preserved text, then exactly one unchanged text ought to exist today, a matter you settle by historical examination, not by taking anyone’s word.
\`\`\`

\`\`\`rule
The core of every prophet’s call was one, no god but God, while their codes of law differed by nation and era. So Islam, on its own claim, is not a new religion demolishing its predecessors: it is the same message delivered again and completed. Whether that claim is true is weighed, by declared criteria, in the units ahead.
\`\`\`

\`\`\`quiz
questions:
  - q: What rule does this verse lay down about the messengers before Muhammad ﷺ?
    ref: 21:25
    word: لا إله إلا أنا فاعبدون
    options:
      - 'No messenger was ever sent without this same core revelation: God alone is to be worshipped'
      - Each messenger brought his own nation a different deity
      - The earlier messengers received no real revelation
      - The message was meant for the Arabs alone
    answer: 0
    why: The verse is phrased as a universal rule (no messenger before you except with this), so the core of revelation is identical along the whole chain.
  - q: What does the Prophet’s ﷺ description of the prophets as “brothers of one father” mean?
    options:
      - 'One father, different mothers: their creed is one, tawhid, while their codes of law differ'
      - They were all blood relatives
      - Some of them worked against the others
      - They all lived in the same era
    answer: 0
    why: 'That is how the hadith commentators, Ibn Hajar among them, unpack the image: the shared creed is the one father, the differing laws the different mothers; and the hadith itself concludes that their religion is one.'
  - q: How does Islam account for the differences between today’s religions?
    options:
      - As a later drift accumulated after the prophets, on top of one shared origin
      - 'As an original plurality: each religion came down as it now is'
      - It offers no account of the differences
      - The differences are illusory; all religions are effectively identical
    answer: 0
    why: Islam’s claim is that tawhid was delivered to every nation and that today’s differences measure the distance drifted from that origin, a historical claim examined in a later unit.
\`\`\`
`,"../content/lessons/en/preserved-in-hearts.md":`---
title: In hearts and on pages
description: 'The book promises its own preservation, and the fulfillment is a phenomenon running in front of you: millions who know it by heart, and a single wrong vowel corrected aloud from the rows. What does a miracle look like while it is happening?'
tags: [preservation, memorization, living transmission]
---

> **The one idea:** the book promised to be preserved, and the fulfillment is not a historical claim needing documentation; it is an observable phenomenon: the only book on earth memorized cover to cover by millions of people, in every generation for fourteen centuries, with children and non-Arabs at the front of the line.

## A promise that puts the book on the line

\`\`\`ayah
ref: 15:9
highlight: إنا نحن نزلنا الذكر
translation: '“Indeed, it is We who sent down the Reminder, and We will surely be its Guardian.”'
note: 'The Reminder is the Qur’an. A book that vows its own preservation is making an exposed bet: were anything in it ever lost or corrupted, it would falsify itself, a refutation condition written into the text, like the challenge verse two lessons ago.'
\`\`\`

This promise came down in Makkah, while the Muslims were a persecuted handful being tortured in the sun: no state, no printing, no libraries. For a book to promise, at that moment, that it would remain guarded forever is a bet no author would place. So let us see how the bet turned out.

## A phenomenon you can watch

The Qur’an is the only book on earth that **millions** of human beings know by heart, cover to cover, roughly six hundred pages. Among its memorizers are children not yet ten years old, and most Muslims are not Arabs to begin with: a child in Jakarta, Istanbul, Dakar, or Islamabad memorizes it letter by letter in a language that is not their mother tongue. And this has not skipped a single generation since it came down: a living chain of hearts, each generation handing it to the next.

The phenomenon comes with an error-correction mechanism you can watch every year. In tarawih prayers, if the imam slips on **a single vowel** (a fatha where a damma belongs), the correction rises from the rows at once, from memorizers who do not know one another. Many live, independent copies, distributed across continents, auditing each other down to the diacritic. If an information engineer set out to design a system for maintaining a text across centuries, they could not match it.

Where did all these hearts come from? The book itself declared that memorizing it has been made easy:

\`\`\`ayah
ref: 54:17
highlight: فهل من مدكر
translation: '“And We have certainly made the Qur’an easy for remembrance; so is there anyone who will be mindful?”'
note: 'This verse recurs four times in Surat al-Qamar, word for word, and the recurrence itself gives you a taste of the point: speech that sticks to the heart on first hearing. “Made easy to memorize” is a testable claim, and six hundred pages in the heart of a non-Arab child is the test result.'
\`\`\`

And the Prophet ﷺ made learning and teaching it the community’s highest honor, so each generation underwrote the next:

\`\`\`hadith
text: 'خيرُكم من تعلَّم القرآنَ وعلَّمه.'
source: 'Sahih al-Bukhari 5027'
url: 'https://sunnah.com/bukhari:5027'
translation: '“The best of you are those who learn the Qur’an and teach it.”'
note: 'This one sentence is the engine behind fourteen centuries of Qur’an schools and memorization circles in every land Islam reached: it made transmitting the text the noblest use of a life.'
\`\`\`

## Hearts and pages vouch for each other

From the first day, the Qur’an was preserved through two channels at once: hearts that memorize and pages that record, each auditing the other: the memorizer catches the copyist’s slip, and the written mushaf corrects the tricks of memory. The history of its collection and writing was covered in “The preserved reminder,” back in the Why Islam unit; this lesson is about the fruit you can see today. Open a mushaf printed in Morocco and one printed in Indonesia, and compare.

Or try something closer: this very website machine-verifies every verse it displays (every letter, every diacritic) against a single fixed text pinned by checksum, as the About page explains. That sentence is possible for exactly one reason: a single text exists to verify against. Now try to write the same sentence about any other ancient book. You will stall at the word “single”: which edition? which manuscript family? whose critical reconstruction?

\`\`\`doubt
claim: I read that the Qur’an has multiple readings (qira’at), and that old manuscripts show differences. So where is this one preserved text?
answer: |-
  The readings are real, and they are the opposite of what the objection implies. They are not corruption discovered late; they are modes of recitation transmitted with named chains from the Prophet’s ﷺ own teaching, finite in number, attributed to their transmitters, printed and studied openly down to the vowel: the reading of Hafs that most of the world recites, Warsh widespread in North Africa, and the rest. The differences between them are catalogued to the letter, and none of them yields a different creed, a different narrative, or a different law. Corruption works in the dark; differences that are indexed, recited in mosques, and examined in memorization certificates are the definition of the opposite.
  And the audit mechanism runs inside each reading in full: a Warsh memorizer corrects a Warsh imam on a single vowel, exactly as a Hafs memorizer does. The phenomenon this lesson is built on holds within every transmitted reading.
  As for the early manuscripts, they have become witnesses for the text, not against it: their agreement with the mushaf in your hands is itself part of the evidence of preservation; the details are in “The preserved reminder.”
\`\`\`

\`\`\`rule
The book promised its own preservation at the moment the promise was least believable, and the fulfillment has been on display in every generation since: millions who carry it whole, most of them not native to its language; a live, distributed review system that catches a single wrong vowel; and hearts and pages each auditing the other. There is no second book on earth about which this paragraph is true, and this one wrote the promise of it into its own text fourteen centuries ago.
\`\`\`

\`\`\`tip
This is evidence you can inspect yourself this week. Attend a congregation where the imam recites from memory and wait for a slip; you will see the correction arrive from the rows before the verse is finished. Or open two mushafs printed on different continents and compare them line by line.
\`\`\`

\`\`\`quiz
questions:
  - q: What makes the preservation promise in Surat al-Hijr an argument rather than a mere claim?
    ref: 15:9
    word: إنا نحن نزلنا الذكر
    options:
      - It is a refutation condition written into the text, testable in every generation, and its fulfillment today is an observable phenomenon, not a historical report
      - Muslims believe it, and that settles it
      - It appears in an ancient book, and ancient books are trustworthy
      - It is a promise that cannot be checked at all
    answer: 0
    why: A book that vows its own preservation falsifies itself if it is ever corrupted; fourteen centuries later the vow still holds, with millions of living memorizers in front of you.
  - q: What does the tarawih correction scene add to the argument?
    options:
      - 'It reveals a live, distributed review system: many independent copies in human memory that expose a single-vowel error instantly'
      - It shows how devout the worshippers are, nothing more
      - It proves that imams never make mistakes
      - It is a social custom with no bearing on the text
    answer: 0
    why: 'Instant correction from memorizers who do not know each other means the text lives in many independent sources that audit one another down to the diacritic: the preservation mechanism itself, caught in the act.'
  - q: How does the lesson answer the objection from multiple readings (qira’at)?
    options:
      - The readings are transmitted modes of recitation with named chains, finite, catalogued, and studied openly down to the vowel; and the audit mechanism runs fully inside each reading, while corruption by definition cannot work in the open
      - The readings were invented by copyists in later centuries
      - There are no multiple readings at all
      - The differences between readings produce different creeds
    answer: 0
    why: Differences that are indexed by name and chain, printed, and publicly examined are the opposite of corruption, and any slip within any reading is caught by the same living audit.
\`\`\`
`,"../content/lessons/en/preserved.md":`---
title: The preserved reminder
description: 'A promise made fourteen centuries ago that can still be tested: how the Qur’an was carried in hearts and on pages at once, and how its transmission model differs from every other book’s.'
tags: [preservation of the Qur’an, mass transmission, compilation]
resources:
  - title: 'The Origins of the Variant Readings of the Qur’an (Yaqeen Institute)'
    url: 'https://yaqeeninstitute.org/read/paper/the-origins-of-the-variant-readings-of-the-quran'
    note: 'A careful, sourced treatment of what the canonical readings are, and why they are the opposite of textual corruption.'
---

> **The one idea:** the Qur’an does not merely claim to be preserved; it promises it, explicitly, and the promise is one any researcher can test today. And the mechanism is no secret: two channels, hearts that memorize and pages that record, checking each other in every generation.

## A testable promise

Books do not normally promise their own preservation. This one did:

\`\`\`ayah
ref: 15:9
highlight: وإنا له لحافظون
translation: '“It is We who have sent down the Reminder, and We will surely be its Guardian.”'
note: 'A promise stacked with every particle of emphasis Arabic has, made in Makkah, when the Muslims were a persecuted handful with no state and no scriptoria. If the Qur’an’s text had splintered the way texts splinter under copying, this verse would be its own refutation.'
\`\`\`

Notice where this claim sits on the previous lesson’s scale: it is a historical claim open to examination, not a doctrine you are asked to grant in advance. Either history falsified it, or history confirmed it, and that is what we now check.

## The first channel: hearts

Within the Prophet’s ﷺ own lifetime the Qur’an lived in the memories of large numbers of his companions. They recited it aloud in the daily congregational prayers, taught it to one another, and the whole text was reviewed on an annual cycle:

\`\`\`hadith
text: 'كَانَ يَعْرِضُ عَلَى النَّبِيِّ صلى الله عليه وسلم الْقُرْآنَ كُلَّ عَامٍ مَرَّةً، فَعَرَضَ عَلَيْهِ مَرَّتَيْنِ فِي الْعَامِ الَّذِي قُبِضَ'
source: 'Sahih al-Bukhari 4998'
url: 'https://sunnah.com/bukhari:4998'
translation: '“He would review the Qur’an with the Prophet ﷺ once every year, and he reviewed it with him twice in the year in which he passed away.”'
note: 'The reviewer is Jibril (Gabriel), as the chapter’s other narrations make explicit: a complete annual audit of the text, twice in the final year.'
\`\`\`

And that channel has never gone quiet. Every generation received the recitation live from the generation before it, in numbers too large to conspire on an error: what Muslim scholars call *tawātur*, mass transmission. Today, millions of people carry the complete text by heart, children among them, from Jakarta to Dakar, whatever their mother tongue. If an imam slips on a single letter in the night prayers of Ramadan, worshippers behind him correct him mid-verse. That error-correction mechanism is not a museum piece; it runs in every mosque, every year, in front of anyone who cares to watch.

## The second channel: pages

The preservation was never oral alone. The Prophet ﷺ had scribes who wrote revelation down as it came. Then, when a number of the memorizers fell in the wars after his death, Abu Bakr ordered everything written to be gathered into one collection, and assigned the task to Zayd ibn Thabit, a scribe of the revelation himself. Hear his method in his own words:

\`\`\`hadith
text: 'فَتَتَبَّعْتُ الْقُرْآنَ أَجْمَعُهُ مِنَ الْعُسُبِ وَاللِّخَافِ وَصُدُورِ الرِّجَالِ'
source: 'Sahih al-Bukhari 4986'
url: 'https://sunnah.com/bukhari:4986'
translation: '“So I set about tracking the Qur’an down, gathering it from palm stalks, thin white stones, and the hearts of men.”'
note: 'Notice the method: the written record collated against the living memory, the two channels auditing each other from the very first collection.'
\`\`\`

Then in the caliphate of ʿUthman, as the conquests spread and the companions feared people would diverge in their recitation, master copies were transcribed from that first collection and sent out to the provinces:

\`\`\`hadith
text: 'فَأَرْسَلَ عُثْمَانُ إِلَى حَفْصَةَ أَنْ أَرْسِلِي إِلَيْنَا بِالصُّحُفِ نَنْسَخُهَا فِي الْمَصَاحِفِ ثُمَّ نَرُدُّهَا إِلَيْكِ'
source: 'Sahih al-Bukhari 4987'
url: 'https://sunnah.com/bukhari:4987'
translation: '“So ʿUthman sent word to Hafsah: send us the sheets, that we may copy them into volumes; then we shall return them to you.”'
note: 'Notice the verb: copy, not compose and not edit. The source was the first collection kept with Hafsah. The same hadith records what they did where they differed: write it in the dialect of Quraysh, since it came down in their tongue. The question at issue was how to spell it, not what was recited.'
\`\`\`

So the text stands on two legs that walk together: a mass-memorized recitation no individual has the power to alter, and a written record that began in the Prophet’s ﷺ own presence. Memory alone, anywhere else, drifts with the generations; writing alone is hostage to its copyists. Together, each corrects the other, every generation.

## Other scriptures, with precision and respect

A Muslim believes the Torah and the Gospel were originally revelation from God, so this is no occasion for gloating. The difference we are pointing at is a difference in **transmission model**, not a verdict on anyone, and it is a plain fact acknowledged in the prefaces of the scholarly editions of those texts themselves: the text is reconstructed today by weighing manuscripts that differ among themselves, and the oldest complete manuscripts date centuries after the events they describe. That is no accusation; it is simply what transmission by manuscript copying alone does to every book of the ancient world.

What the Qur’an introduced is the other model: a living, collective memorization backed by writing contemporary with the revelation, from the first generation onward. So the comparison is not between a “better” book and a “worse” one; it is between two ways of carrying a text: copying alone, versus making an entire community the copyist and the auditor at once.

\`\`\`note
You may hear that the Qur’an has “readings” (Hafs, Warsh) and take them for copyists’ variants. In fact they are modes of recitation received by unbroken chains from the Prophet ﷺ himself, catalogued letter by letter in the specialist literature for over a millennium, their number and locations known exactly. The difference is fundamental: an inherited, source-known, enumerated multiplicity is itself preserved, whereas corruption is untracked change no one can even enumerate.
\`\`\`

\`\`\`doubt
claim: ʿUthman standardized everyone on one codex and ordered the alternatives burned; that is tampering by definition. A state committee decided what “the Qur’an” is and destroyed the evidence.
answer: |-
  First, this story is not a secret unearthed by researchers. We know it from the Muslims’ own narration, in their most rigorously authenticated collection, and tampering is not the sort of act one broadcasts. Then look at what actually happened: ʿUthman did not compose a text. He had copies made from the collection assembled under Abu Bakr, collated against the memorizers, in public, in the presence of the very generation that had heard the Qur’an from the Prophet’s ﷺ own mouth. Tampering needs darkness; this happened in broad daylight.
  Second, the oral channel makes written tampering pointless anyway: had a committee altered one letter, thousands of memorizers reciting the text in their prayers every single day would have cried out. What was burned were individuals’ own copies, written as personal aids, carrying what their owner had received alongside notes he had written for himself. And Muslim scholars themselves differ on how much of the seven ahruf the ʿUthmanic codex retains: al-Tabari, al-Tahawi and Ibn ʿAbd al-Barr held that ʿUthman gathered people on one of them; Ibn al-Jazari and most later verifiers held that the undotted script still carries what remained; al-Suyuti held that it carries all seven. We name that disagreement rather than fold it away. What was standardized was the written exemplar, not the recitation carried by mass transmission. And history offers the sharpest witness of all: ʿUthman faced a rebellion and was killed in it, yet his enemies, the men who took his life, never once accused him of changing the Qur’an. They recited his codex and prayed with it.
\`\`\`

\`\`\`rule
The Qur’an’s preservation promise is a historical claim open to inspection, and its mechanism is on the record: mass-transmitted memorization backed by writing that began in the Prophet’s ﷺ presence, the two auditing each other in every generation, until one identical text is recited from Jakarta to Dakar. This is the previous lesson’s criterion of “a revelation whose text is preserved,” applied to Islam with full severity, and passed.
\`\`\`

\`\`\`quiz
questions:
  - q: What makes the preservation verse a testable claim rather than a mere doctrine?
    ref: 15:9
    word: وإنا له لحافظون
    options:
      - It is an explicit promise made centuries in advance, and anyone today can compare the world’s copies and memorizers to see whether it held
      - It was revealed after the compilation of the codices was complete
      - Muslims reached consensus on it, which settles the matter
      - It can only be read symbolically
    answer: 0
    why: The promise predates the outcome by centuries, and the outcome is open to any examiner; had the text splintered, the verse would be its own refutation.
  - q: What are the two channels by which the Qur’an was transmitted, and why are they strong together?
    options:
      - Mass-transmitted memorization in hearts, and writing that began in the Prophet’s ﷺ presence, each auditing the other in every generation
      - Writing alone, since oral memory cannot be trusted
      - Memory alone, since the Qur’an was not written for a century
      - Ancient translations that testify to the Arabic text
    answer: 0
    why: As Zayd ibn Thabit put it in Bukhari, the Qur’an was gathered from the written materials and from the hearts of men together; tamper with one channel and the other exposes it.
  - q: How does this lesson answer the claim that ʿUthman’s standardization proves tampering?
    options:
      - It was a public copying of Abu Bakr’s collection, collated against the memorizers, before the generation that had heard the Prophet ﷺ, and no committee can alter what thousands carry by heart
      - By denying that the ʿUthmanic copying ever happened
      - By conceding the text was changed, but only slightly
      - By declaring the matter unknowable and closed to examination
    answer: 0
    why: The source was the preserved first collection, the standard was the living memorization, and the work was done in daylight. Even ʿUthman’s killers never accused him of altering a letter.
\`\`\`
`,"../content/lessons/en/quran-rebukes-him.md":`---
title: The Qur'an corrects him
description: 'An author deletes what embarrasses him. This book records its bearer’s rebuke and makes it scripture, recited in prayer until the end of time. Who does that with a book he invented?'
tags: [the rebukes, Surah Abasa, proofs of prophethood]
---

> **The one idea:** hold one unfailing rule of human behavior: whoever authors a text controls its editing, and whoever controls the editing deletes what embarrasses him. Then open the mushaf to the passages that rebuke Muhammad ﷺ himself (permanently, on the record) and ask: what kind of author is this?

## The behavior-under-correction test

This unit has run two tests so far: the man's record before the claim, and his profit from it. Here is the third, and the sharpest: **how does the text he brought behave toward his own mistakes?**

An inventor of a religion is his book's sole editor: no supervisor above him, no edition released without his sign-off. Such a man does not write rebukes of himself into the canon. And if he ever did, for calculated effect, he would keep them vague and general, and bury anything touching his standing among his followers. That is how power treats texts in every age; read the court chronicles of kings, or the memoirs of leaders, written while they lived.

The Qur'an breaks this rule explicitly, in separate passages spread across years, most famously in an entire surah named after the incident.

## A surah called “He frowned”

The story, as al-Tirmidhi reports it from Aisha and graded hasan gharib (3331), an occasion-of-revelation report rather than a Sahih-collection hadith: ʿAbdullah ibn Umm Maktum, a blind man among the poor Muslims, came asking the Prophet ﷺ to teach him, while the Prophet ﷺ was occupied inviting one of the great men of the idolaters, hoping his Islam would open the way for those behind him. The blind man interrupted: *guide me, Messenger of Allah.* The Prophet ﷺ frowned at him, turned away, and went on with the other man.

Stop here a moment. The blind man **never saw the frown**. And the Qurayshi notable who did see it had no reason to publicize it: being preferred over a poor blind man was not a grievance in his world, it was how the world worked. Which is to say nobody in that gathering had any motive to carry the moment out of the room. If the matter had rested with a preacher editing his own book, it would have been buried where it fell.

Then revelation came down:

\`\`\`ayah
ref: 80:1
translation: '“He frowned and turned away,”'
note: 'Notice the grammar of “HE frowned”: third person, as if heaven first announces the incident to everyone before turning to address him. A rebuke that opens by publishing the facts.'
\`\`\`

\`\`\`ayah
ref: 80:2
translation: '“because the blind man came to him.”'
note: 'And the cause, on the record. The man never saw the frown; Muslims have recited it in their prayers ever since.'
\`\`\`

Then the rebuke names the error through a blunt contrast between the two men:

\`\`\`ayah
ref: 80:6
highlight: فأنت له تصدى
translation: '“As for the self-sufficient one, you attend to him,”'
note: 'The one who feels no need of you gets your full attention. And what is it to you if he never purifies himself? Your duty was only to deliver.'
\`\`\`

\`\`\`ayah
ref: 80:10
highlight: فأنت عنه تلهى
translation: '“but the one who came to you striving, in awe of Allah, from him you are distracted.”'
note: 'Heaven’s scale puts the sincere seeker above the important man who could not care less.'
\`\`\`

What interest could an author have in this? The surah did not merely fault him before his followers; it immortalized the fault to the end of time: hundreds of millions recite it in their prayers. And he ﷺ was the one who first recited it to them, reading out his own rebuke in public. Ibn Umm Maktum, for his part, remained in Madinah as one of the Prophet's ﷺ two muezzins, as the Sahih records (al-Bukhari 617). The man heaven rebuked the Prophet over became a voice rising from his mosque.

## And it is not one passage

Were it a single verse, one could say: a calculated humility device. But it is a chain running across the years, touching real decisions with real costs:

\`\`\`ayah
ref: 9:43
highlight: عفا الله عنك لم أذنت لهم
translation: '“May Allah pardon you. Why did you excuse them before it became clear to you who was truthful and you knew the liars?”'
note: 'He excused some who stayed behind from the Tabuk campaign before their honesty was tested, and the rebuke came. Notice its manners: pardon granted before the fault is named. A loving rebuke, but a recorded one.'
\`\`\`

\`\`\`ayah
ref: 66:1
highlight: لم تحرم ما أحل الله لك
translation: '“O Prophet, why do you forbid what Allah has made lawful to you, seeking the pleasure of your wives?”'
note: 'He swore off something lawful to please his wives, and was corrected: no one, not even the Prophet, may forbid what Allah allowed. The principle of legislation stands above the very person it descends upon.'
\`\`\`

\`\`\`ayah
ref: 18:23
translation: '“And never say of anything: I will do that tomorrow…”'
note: 'The commentaries and sirah works report that people asked him about the People of the Cave, that he said “I will tell you tomorrow” without adding “if Allah wills,” and that revelation then withheld itself for a period that weighed on him. Treat that as sirah, not Sahih: its source is Ibn Ishaq, through a chain containing an unnamed man, so it cannot carry weight of its own. What is beyond dispute is the two verses themselves: a direct prohibition addressed to the man carrying the book, left standing in the mushaf to be recited.'
\`\`\`

\`\`\`ayah
ref: 33:37
highlight: وتخفي في نفسك ما الله مبديه
translation: '“…and you concealed within yourself what Allah was going to reveal, and you feared the people, while Allah has more right to be feared…”'
note: 'The most uncomfortable verse in this whole file: it puts on record that he kept something inside that Allah would expose, and names his fear of people where Allah deserved the fearing. What did he keep inside? Ibn Kathir holds that Allah had already told him Zaynab would become his wife, and that he shrank from what people would say about a man marrying the former wife of the boy he had adopted. Al-Saʿdi holds instead that it was an inclination in his own heart: that if Zayd divorced her, he would marry her. Both are readings of qualified commentators, and this lesson names them rather than choosing between them. The remaining reports on this verse Ibn Kathir sets aside explicitly, for want of authenticity. And Aisha’s famous remark is in both Sahih collections (al-Bukhari 7420, Muslim 177b): had the Prophet ﷺ ever concealed any revelation, he would have concealed this verse.'
\`\`\`

## “He planted the rebukes to look humble”

\`\`\`doubt
claim: 'The rebukes are clever theater: the Qur’an’s author inserted reprimands of himself deliberately to buy credibility, so that people would say exactly what you are saying now: a man who rebukes himself can’t be lying.'
answer: |-
  A hypothesis worth weighing, so weigh it against three loads. First: a schemer cunning enough to engineer theatrical humility knows the con artist’s first rule: promotional self-criticism stays vague and never touches a vital organ. These passages are the opposite: command decisions he got wrong (the Tabuk permissions), explicit domestic embarrassment (the oath), and a passage putting on record something he kept inside and a fear of what people would say, in the most delicate matter touching his household (al-Ahzab). No rational schemer picks those files as marketing material.
  Second: look at the two verses of al-Kahf with no story attached. Their form is a plain prohibition of an ordinary habit of speech: never say “I will do that tomorrow” without “if Allah wills.” The man being corrected is the man carrying the book, and the correction is still recited back to him by his followers at every completion of the text. An author engineering theatrical humility writes bland praise; he does not write a permanent rule of manners against himself. (The well-known occasion-of-revelation narrative behind it rests on a weak chain, so nothing here is built on it.)
  Third: compare the people we know for certain edited their own texts: kings in their court chronicles, leaders in their memoirs. All of recorded history flows one way: toward flattery. The “promotional rebuke” hypothesis asks you to believe in a behavior with no precedent in the history of authors, all to escape a simple explanation: the book was not his.
\`\`\`

\`\`\`rule
Whoever authors a book controls its editing, and whoever controls the editing does not immortalize his own embarrassments. The Qur’an rebuked the Prophet ﷺ in a surah recited to this day, over real command and family decisions, and withheld itself from him when he promised an answer without saying “if Allah wills.” That is the behavior of a text whose Lord stands above His messenger, not of a text in its owner’s hand.
\`\`\`

\`\`\`tip
Read Surah ʿAbasa in one sitting (two minutes), holding one question in mind: if I were the author, would I keep this in? Then remember that he ﷺ is the one who recited it to the people.
\`\`\`

\`\`\`quiz
questions:
  - q: What is the argument from Surah ʿAbasa that the Qur’an is not the Prophet’s ﷺ own composition?
    ref: 80:2
    word: أن جاءه الأعمى
    options:
      - An author can delete what embarrasses him; this incident had no witness (the man was blind), yet the Qur’an immortalized it as a rebuke recited in prayer
      - Because the surah was revealed in Makkah before the hijrah
      - Because the frown was directed at a man of Quraysh
      - Because the surah is short and easy to memorize
    answer: 0
    why: The blind man never saw the frown and nobody present objected; had an author controlled the text, the moment would have been buried. Instead it became a surah he himself recited in public.
  - q: Why does the “I will tell you tomorrow” episode (18:23–24) demolish the authorship hypothesis from within?
    options:
      - The prohibition in those verses is aimed at the man carrying the book and is still recited back to him by his followers, and a man holding the pen does not write a permanent rule of manners against himself
      - Because the People of the Cave were unknown to the Arabs
      - Because “tomorrow” is not proper classical Arabic
      - Because Quraysh never cared about the story
    answer: 0
    why: The prohibition still stands in the mushaf, read back to him by his own followers at every completion; a man engineering theatrical humility writes bland praise, not a rule of manners that binds him forever.
  - q: How does the lesson answer “he inserted the rebukes deliberately to buy credibility”?
    options:
      - Promotional self-criticism stays vague and safe; these rebukes touch costly decisions and private affairs, with a withholding of revelation that tormented him, behavior without precedent among authors
      - The rebukes were never actually directed at him
      - The Companions demanded the rebukes be recorded
      - The rebukes were added to the mushaf after his death
    answer: 0
    why: The hypothesis requires conduct unknown in the entire history of self-edited texts, and ignores that the most awkward passage (the al-Ahzab verse) puts on record the very thing he had kept inside.
\`\`\`
`,"../content/lessons/en/science-and-religion.md":`---
title: Science and religion
description: 'Science answers “how” and cannot, by its own method, answer “why” or “what is it worth.” Where the conflict myth came from, why the pioneers of science were believers, and the answer to “religion is a psychological crutch.”'
tags: [science and religion, scientism, the opium objection]
---

> **The one idea:** empirical science is a measuring instrument, not a court of meaning: it describes how the universe works, and cannot, by its own method, answer why the universe exists, what a human is worth, or what anyone ought to do. Appointing it judge outside its jurisdiction misunderstands science before it misunderstands religion.

## Two different questions, not two rivals

Watch a kettle boil, and ask: why is the water boiling?

- One answer: because heat raised the molecules' energy until their vapor pressure beat the air's.
- Another answer: because I want tea.

Both answers are true at once, and neither competes with the other, because they answer different questions: **mechanism** and **purpose**. That is where science and religion sit on the map. Science owns the "how" question, and any religious claim that muscles into measuring the measurable has overstepped. But "why is there anything?" and "what ought I do?" stand outside the laboratory *by construction*, not by accident: no microscope images "purpose," and no scale weighs "good."

That is why "science has disproven God" is a double methodological error: denying what an instrument cannot measure, using the instrument unfit for it. And the matter runs deeper: science's own success is a phenomenon crying out for explanation: why is the universe lawful, stable, discoverable, mathematically expressible, and intelligible to a mind that grew up inside it? The universe's orderliness is science's working capital, and science cannot account for it. It is exactly what you would expect if a wise Lawgiver stands behind the cosmos, and on the other account it is a brute fact you can only accept and not explain.

## A religion that commands the first empirical step

As for Islam being science's enemy, its founding text refutes the charge before its history does:

\`\`\`ayah
ref: 10:101
highlight: قل انظروا ماذا في السماوات والأرض
translation: '“Say: look at what is in the heavens and the earth…”'
note: 'A command to look at what is in the heavens and the earth: at the sun and moon, the alternation of night and day, the mountains and the plants, as al-Tabari spells it out; and what is meant is the looking of thought, reflection and consideration, as al-Saʿdi puts it. Looking into the universe is commanded in this religion, not forbidden, and the invitation is addressed to the eye and the mind together.'
\`\`\`

\`\`\`ayah
ref: 3:191
highlight: ويتفكرون في خلق السماوات والأرض
translation: '“…who remember Allah standing, sitting and on their sides, and reflect upon the creation of the heavens and the earth…”'
note: 'The mark of people of understanding: remembrance and reflection on the creation together, a worshipping heart and an investigating mind in one verse. In this religion, studying the cosmos is worship, not a charge to answer.'
\`\`\`

The early Muslims took the command literally, and their cities were the world's scientific capitals for centuries: Ibn al-Haytham, working in Cairo, built the experimental method in optics six hundred years before Francis Bacon; medicine, astronomy and mathematics flourished from Baghdad to Córdoba; the word *algebra* is al-jabr, and *algorithm* carries al-Khwarizmi’s own name. And the pioneers of Europe's scientific revolution (Copernicus, Kepler, Newton, Boyle) were believers in God who saw discovering laws as reading the Creator's book. So where is the eternal war between science and faith? Modern historians of science themselves classify the "conflict thesis" as a late nineteenth-century construction, not an honest description of the record.

## “I only believe what science proves”

\`\`\`doubt
claim: The only rational stance is to accept nothing except what the empirical method has established. Everything else, religion first among them, is conjecture that never rises to knowledge.
answer: |-
  Apply the rule to itself: the sentence “accept nothing except what the empirical method establishes” is not the result of any experiment or measurement, so by its own standard it is inadmissible conjecture. This is not a word game; it exposes what the stance actually is: a philosophy about science, not a finding of science. Scientism is a doctrine wearing a lab coat.
  Its holder doesn’t live by it either. He trusts logic and mathematics (no experiment proves them; every experiment presupposes them), historical facts (no lab can rerun them), the real wrongness of injustice (no microscope images it), and the reliability of his own reasoning (an assumption with no empirical proof behind it). Knowledge is wider than the laboratory; everyone’s practice concedes it. The right question is never “was it measured?” but “does it have evidence fitting its domain?” And this guide’s evidence is of exactly that kind: its premises are observational (a universe that began, precise calibration), with two more of the same kind, a preserved text and a documented life, still ahead of you in this guide, and its inferences are the same reasoning you accept in every serious question of your life.
\`\`\`

## “Religion is a crutch for the weak”

\`\`\`doubt
claim: Religion is a comforting psychological invention, an opium by which those afraid of death and the downtrodden numb their pain. The need for it explains its spread, with no requirement that it be true.
answer: |-
  First: where an idea comes from does not settle whether it is true: the genetic fallacy, by name. Your craving for water does not make water an illusion; if anything, thirst is evidence that drink exists. So even granting that humans “need” God psychologically, that fits two explanations, not one: that they invented Him, or that they were constituted to know Him, as the fitrah lesson showed. Only evidence can arbitrate between the two, and the evidence has already been presented.
  Second: the principle cuts the other way harder than it cuts this one. Which creed is actually more comfortable: that you are accountable for every word, will be raised, and will be asked? Or that there is no watcher, no resurrection, no questioning: do as you please, then sleep forever? If “the comfortable belief is the suspect belief” were a sound principle, atheism would be the prime suspect: it is a blanket amnesty from the court.
  Third: strange opium, this. It wakes its users before dawn to pray, denies them their appetites a month a year, deducts a share of their wealth for the poor, and holds them answerable for an ant wrongly harmed. Narcotics lower the demands on you; this religion raises them, and then grants, alongside the duty, a serenity of another species altogether: the calm of someone who knows why they are here.
\`\`\`

\`\`\`rule
Science is the instrument of “how,” and holds no answer to “why” or “what ought,” while its own success (an ordered, intelligible universe) testifies for a Lawgiver, not against one. Islam commands observation in its founding text and its civilization led the sciences for centuries. As for “religion is opium,” it is a genetic fallacy that recoils on its maker: the truly comfortable creed is the one with no reckoning in it.
\`\`\`

\`\`\`quiz
questions:
  - q: Why can’t empirical science, by its own method, rule out the Creator?
    options:
      - Its instruments measure physical mechanisms, and the questions of purpose and value stand outside measurement by construction, not by accident
      - Because today’s instruments are weak; future ones will settle the matter
      - Because scientists conspire to hide the evidence
      - Because science does disprove Him, but people reject the result
    answer: 0
    why: No microscope images “purpose” and no scale weighs “good”; denying the unmeasurable with a measuring tool misunderstands the tool itself.
  - q: How does the rule “I accept only what the empirical method proves” refute itself?
    options:
      - The rule itself is not the result of any experiment, so by its own standard it is inadmissible, a philosophy about science, not a finding of it
      - Because laboratory experiments are error-prone
      - Because most people don’t understand science
      - Because the empirical method is a recent invention
    answer: 0
    why: Its own holder lives by unmeasured knowledge (logic, mathematics, history, morality, and the reliability of his own mind), so his practice concedes knowledge is wider than the lab.
  - q: How does the lesson answer “religion is opium that numbs the fearful”?
    options:
      - The origin of an idea doesn’t settle its truth; the creed with no reckoning is the more comfortable one; and a religion that requires dawn prayer, fasting and almsgiving is a strange narcotic
      - Psychological comfort is itself conclusive proof of truth
      - Religious people feel no comfort in the first place
      - The objection is too recent to deserve an answer
    answer: 0
    why: 'It is a genetic fallacy, and it recoils: exempting oneself from all accountability is more soothing than accepting it, and this religion raises life’s demands rather than lowering them.'
\`\`\`
`,"../content/lessons/en/the-challenge.md":`---
title: The standing challenge
description: 'A book dares its deniers to produce its like, lowers the bar to a single surah, and tells them to their faces that they never will. What did the masters of Arabic actually do?'
tags: [the challenge, inimitability, Arabic eloquence]
---

> **The one idea:** no other book in history has dared its enemies to produce its like, dropped the required amount to a single surah, and then flatly declared that they never would. The dare went to the most eloquent generation of the most eloquent language, and they chose war over writing a paragraph. That choice *is* the historical answer.

## A dare that keeps descending

The Qur’an does not merely say “believe me” to its deniers; it hands them the method of refuting it. The dare was first issued in Surat at-Tur (the very surah whose verse you read in “Created from nothing?”), challenging them to bring a discourse like it (52:34). Then it was announced in its widest form:

\`\`\`ayah
ref: 17:88
highlight: لا يأتون بمثله
translation: '“Say: if all mankind and jinn gathered to produce the like of this Qur’an, they could not produce its like, even if they backed one another.”'
note: 'The maximum version: every human and jinn, cooperating, and still failing. Notice that this is falsifiable in principle: one success anywhere would do it.'
\`\`\`

Then the demand dropped to just ten surahs, and even the requirement of true content was waived:

\`\`\`ayah
ref: 11:13
highlight: بعشر سور
translation: '“Or do they say, ‘He invented it’? Say: then bring ten surahs like it, invented, and call on whomever you can besides Allah, if you are truthful.”'
note: '“Invented” means the content may be made up. Only the form, the composition itself, has to be matched, and they may recruit anyone they like.'
\`\`\`

Then the challenge settled at the lowest bar imaginable, one single surah (10:38, and then in Madinah):

\`\`\`ayah
ref: 2:23
highlight: فأتوا بسورة من مثله
translation: '“And if you are in doubt about what We have sent down upon Our servant, then produce a single surah of its like, and call your witnesses besides Allah, if you are truthful.”'
note: 'Addressed to every doubter until the end of time, not to seventh-century Makkah alone. The shortest surah in the Qur’an is three verses, about ten words. That is the floor of the challenge.'
\`\`\`

And then comes the sentence no human author would dare to write:

\`\`\`ayah
ref: 2:24
highlight: ولن تفعلوا
translation: '“But if you do not, and you never will, then fear the Fire whose fuel is people and stones, prepared for the deniers.”'
note: 'Not “if you fail today,” but a flat verdict on all of the future. One answered challenge, in any century, would demolish the book that carries this sentence.'
\`\`\`

A human author hedges; he leaves himself a way back. This text burns its ships on purpose, and writes the condition of its own refutation into its own lines.

## Who was dared?

This was not aimed at a people indifferent to words. The Arabs were a nation of the tongue: tribes boasted of their poets the way nations today boast of their armies; seasonal fairs like ʿUkaz were held where the eloquent came to be judged; they so revered their greatest odes that they named them *al-Muʿallaqat*, “the hung ones,” and a single poem could raise one tribe’s standing and sink another’s. Language was their currency and their field of honor.

And they had every motive to answer. Their gods were being dismissed daily; Makkah’s religious standing (and the pilgrimage season and trade that hung on it) was at stake; the pride of their chiefs was being wounded in public. And the rebuttal, if it were possible, was cheap: one paragraph would have ended the whole movement, without blood, money, or siege.

So what did they do? The Qur’an itself records their strategy:

\`\`\`ayah
ref: 41:26
highlight: والغوا فيه
translation: '“And the deniers say: do not listen to this Qur’an; drown it in noise, so that you may prevail.”'
note: 'The counsel of people who had run out of arguments: don’t listen, and make noise over it. Nobody who could match a discourse tells his people to jam it instead.'
\`\`\`

Then they tried accusations. Poet, sorcerer, madman: charges that demolish one another. Then they besieged the Prophet’s clan in a ravine for three years. Then came torture, and finally swords at Badr and Uhud. Every one of these cost a thousand times more than composing one short surah. The nation of eloquence, with maximal motives, chose the most expensive options on the table and left the cheapest; and no rational actor does that while the cheap option is available. Choosing war over composition is their answer, and history recorded it.

## A miracle with no expiry date

\`\`\`hadith
text: 'ما مِن الأنبياءِ نبيٌّ إلّا أُعطيَ ما مثلُه آمَن عليه البشرُ، وإنّما كان الذي أوتيتُ وحيًا أوحاه اللهُ إليَّ، فأرجو أن أكونَ أكثرَهم تابعًا يومَ القيامة.'
source: 'Sahih al-Bukhari 4981'
url: 'https://sunnah.com/bukhari:4981'
translation: '“Every prophet was given signs of a kind that made people believe in him. What I was given is a revelation that Allah revealed to me, so I hope to have the most followers on the Day of Resurrection.”'
note: 'The signs of earlier prophets were witnessed by their generation and then became reports. This Prophet’s ﷺ enduring sign is the revelation itself: a standing text, in your hands, testable right now. He had other signs, soundly reported, but those ended with the generation that saw them, exactly as earlier prophets’ did. This one did not.'
\`\`\`

That is why the challenge has no expiry date. Arabic is a living language mastered by hundreds of millions, non-Muslim writers and critics among them, and dismantling Islam with a single paragraph would be the biggest prize in the history of religious debate. Yet the result has been the same for fourteen centuries. The claim is not that nobody has tried. Musaylima tried in the Prophet’s own lifetime, and the classical sources preserve what he produced. Later attempts are reported, though the reports themselves are disputed: the one attributed to Ibn al-Muqaffaʿ was doubted by al-Baqillani, who said no such book of his was known. And in 1999 a book called al-Furqan al-Haqq was published and announced as the answer to the challenge. The claim is that every attempt has been laid before people who know the language, Muslim and not, and none has held its ground. That is a judgment you do not have to take from us: the attempts are in print, and you can read them. This is not an old anecdote; it is an experiment still running in front of you.

\`\`\`doubt
claim: Beauty is subjective. I have read the Qur’an in translation and it did not strike me as miraculous; an argument from eloquence cannot bind someone who does not feel it.
answer: |-
  A fair objection, if the evidence were your taste. But the challenge was issued in Arabic, to the masters of Arabic, and translation carries the meanings while dropping the very thing the challenge is about: the composition itself. Reading a prose summary of a symphony is not hearing the symphony, and no one should judge the symphony by it.
  More importantly, the historical argument never passes through your taste at all, because it is a fact about behavior: this book’s fiercest enemies were the best-qualified judges of its language and the people who most needed to refute it, and they chose boycott and war over writing a paragraph. You may not read chess notation, but when you see every grandmaster resign before a single move, you have learned something objective about that move, independent of your own eye for the game.
  And if you want to inspect the evidence directly, the door is open: learn Arabic. Many before you walked through it.
\`\`\`

\`\`\`rule
The Qur’anic challenge descended step by step to a single surah, aimed at the most eloquent generation of the most eloquent language, people with every motive to answer. Their answer was noise, boycott, and the sword, each costlier than the paragraph they never wrote. And because this miracle is a standing text, not a past event, the challenge is still open, and fourteen centuries of silence are part of the evidence.
\`\`\`

\`\`\`quiz
questions:
  - q: Why does this lesson treat Quraysh’s choice of war as the historical answer to the challenge?
    options:
      - They abandoned the cheapest option (a paragraph that would end the movement) for the costliest ones, and nobody does that while the cheap option is real
      - War was simply their custom in every dispute, so the choice means nothing
      - They never understood what the challenge was asking for
      - They did not consider the Qur’an important enough to answer
    answer: 0
    why: A nation that professionalized language, with every motive in play, does not choose siege and swords over composing one short surah, unless the composing is beyond it.
  - q: If the author were human, what is so strange about the verse’s flat “and you never will”?
    ref: 2:24
    word: ولن تفعلوا
    options:
      - It bets on all of the future at once (one paragraph in any century refutes it), and human authors hedge rather than take that bet
      - It threatens the audience too harshly
      - It appears too early in the book, before any evidence
      - It addresses only Quraysh and nobody afterwards
    answer: 0
    why: A single sentence wrote the book’s own refutation condition into its text, and has stayed true for fourteen centuries, the exact opposite of an author’s instinct to hedge.
  - q: How does the lesson answer “eloquence is subjective, and I wasn’t impressed by the translation”?
    options:
      - The challenge is in Arabic to Arabic’s masters, translation drops the very thing being challenged, and the conduct of the best-qualified enemies is objective evidence independent of anyone’s taste
      - A good translation carries the miracle fully, so the fault lies with translators
      - Personal taste settles the question in both directions
      - Non-Arabs are simply not addressed by the Qur’an
    answer: 0
    why: A prose summary of a symphony is not the symphony, and the failure of native masters with maximal motives remains a historical datum whatever the reader’s taste.
\`\`\`
`,"../content/lessons/en/universe-began.md":`---
title: A universe with a beginning
description: 'The expansion points backwards, usable energy is running down, and cosmology gives the universe a finite age. And what begins cannot explain itself.'
tags: [beginning of the universe, cosmological argument, infinite regress]
---

> **The one idea:** the previous lesson established that whatever comes into being needs something to bring it into being. This lesson establishes the second premise (the universe itself came into being), and the conclusion follows from the two premises by necessity.

## Was the universe always here?

“The universe is eternal; it has no beginning” was the classic escape from the question of a Creator: what never began needs no one to begin it. The last century closed that escape from an unexpected direction: the observatories.

- **The expansion.** Since the 1920s, measurements have shown the galaxies receding from one another: the universe is expanding. Run the film backwards and you arrive at an initial state of extreme density and heat, at which the space and time we know begin. That is today’s standard model of cosmology, not its critics’ view, and in it the universe’s age is finite: about 13.8 billion years.
- **The running-down of usable energy.** The second law of thermodynamics: the energy available to do work steadily decreases, like a wound clock unwinding. If an infinite past lay behind us, the clock would have unwound an infinity ago: every star burnt out, temperature evened out everywhere. Yet the sun is still burning. A clock still ticking is evidence that it was once wound. This is a supporting argument from reason rather than an independent observation, and physicists dispute it: in an expanding universe the ceiling of entropy rises too, so equilibrium is not forced. We offer it as something that strengthens the case, not as a pillar the case stands on.

Honesty requires a caveat: science here describes the event and does not name its cause, which is not a weakness in the argument but the boundary of science’s tools. What observation supplies is the premise: the universe began. What follows from that premise is reason’s business, and we turn to it now.

## What begins cannot begin itself

Now apply the previous lesson’s division to the universe as a whole, given that it came into being. It did not emerge from absolute nothing, because nothing yields nothing. It did not bring itself into being, because a cause precedes its effect and nothing precedes itself. So it must have an originator beyond it: one that is not a part of the universe and not subject to its time, since time itself is among the things that began.

\`\`\`ayah
ref: 2:117
highlight: بديع السماوات والأرض
translation: '“Originator of the heavens and the earth: when He decrees a matter, He only says to it, Be, and it is.”'
note: 'The word rendered “Originator” (badīʿ) means the one who brings a thing into being from no prior material and after no prior model. And His command needs no raw material and no processing time: Be, and it is.'
\`\`\`

\`\`\`ayah
ref: 40:57
highlight: لخلق السماوات والأرض أكبر من خلق الناس
translation: '“The creation of the heavens and the earth is greater than the creation of mankind, but most people do not know.”'
note: 'The verse argues against deniers of resurrection: the One who created the immense cosmos in the first place is not defeated by anything less. Its force here is where it points the mind: at the creation of the heavens and the earth as the largest fact demanding an explanation.'
\`\`\`

## And the chain of causes cannot run back forever

Someone may say: why not let the universe’s cause be a prior universe, and that one’s cause a universe before it, and so on without end; then no First is needed?

Picture a soldier who will not fire until the one behind him gives permission, and that one will not give it until the one behind *him* does, and so on in a chain with no end. Does a single shot ever ring out? Never: everyone in the chain is waiting, and a chain of waiters fires nothing however long it grows; the longer it grows, the further the shot recedes. So if you hear a shot, you know with certainty the chain terminated in a commander who waits on no one.

Your existence is the shot that actually rang out. Every link in the chain of causes borrows its existence from the link before it, and a chain of borrowers, long or short, cannot generate the thing it borrows. There must be a first source that owns existence rather than borrowing it.

\`\`\`doubt
claim: The Big Bang is not necessarily an absolute beginning. Perhaps our universe is one link in a beginningless series of universes, or arose from a prior state described by physics we don’t yet have, so it’s premature to build anything on “a beginning.”
answer: |-
  Physics discusses this possibility seriously, so let us take it seriously. First: it is a hypothesis with no observation behind it, while a beginning is the straightforward reading of the evidence we actually have; these are not two equally supported readings.
  Second: the modern theorems themselves squeeze it. The Borde-Guth-Vilenkin theorem proves that any spacetime which is, on average, expanding is incomplete toward the past, meaning that describing its past boundary takes, in the paper’s own words, physics other than inflation. Vilenkin built on that to argue that the scenarios offered for an eternal past, chains of successive universes among them, cannot deliver a past without a beginning. That reading is not a consensus: some physicists read the result more narrowly, Guth among them, and he is one of the theorem’s authors. The point is that escaping into an infinite past is not the easy exit it is taken to be, not that the matter is closed. Published models that evade its assumptions do exist, and Guth himself points to one; none of them has an observation to its name.
  Third, and most important: lengthening a chain is not explaining it. Put a universe before ours, and a thousand before that: the chain of soldiers you just met fires no shot by adding soldiers. The question does not dissolve with more intermediaries; it grows more insistent.
\`\`\`

\`\`\`rule
Whatever begins needs something to begin it. The universe began (witnessed by the expansion and by the standard model of cosmology, and supported by the argument from the running-down of usable energy), so the universe has an originator. And a chain of originators cannot run back without a First; there must be a First preceded by nothing. Who that First is, and why “what caused Him?” is not a gap in this argument, is the final lesson of this unit.
\`\`\`

\`\`\`note
This lesson does not rest on any special scientific reading of a verse, and it does not claim the Qur’an “anticipated” a particular theory. The two verses here state general truths (origination after no model, and the immensity of the heavens’ and earth’s creation), while the argument stands on reason, with observation as witness to its premise.
\`\`\`

\`\`\`quiz
questions:
  - q: Why does modern cosmology hold that the universe had a beginning?
    options:
      - The expansion points back to an initial state, and usable energy is running down; an infinite past would have exhausted it infinitely long ago
      - Telescopes have directly photographed the moment of creation
      - Philosophers voted on it at a scientific congress
      - The universe is too small to be old
    answer: 0
    why: Expansion is cosmology’s own witness to a finite past and is the standard model today; the running-down of usable energy is an argument from reason that supports it rather than standing in its place.
  - q: What is the point of the analogy of soldiers waiting for permission to fire?
    options:
      - A chain of dependent intermediaries produces nothing however long it is, so the fact that anything happened proves a first, independent member
      - Armies need wise leadership
      - Great events take a long time
      - Delayed permission ruins execution
    answer: 0
    why: Every link is a waiting borrower, and multiplying waiters never produces a shot, so the fact of your existence proves the chain ends in a First that owns rather than borrows.
  - q: How does the lesson handle the hypothesis of a beginningless series of universes?
    options:
      - It is unobserved, the expansion theorems squeeze it, and lengthening a chain never explains the chain
      - It rejects it only because it contradicts scripture
      - It accepts it as a final solution to the beginning problem
      - It calls it mathematically impossible by unanimous consensus
    answer: 0
    why: The answer comes from inside science (no observations; the Borde–Guth–Vilenkin theorem) and from reason (relocating a question is not answering it), not from mere indignation.
\`\`\`
`,"../content/lessons/en/what-did-he-gain.md":`---
title: What did he gain from it?
description: 'A grand liar names his price: money, a throne, or glory. He was offered all three and refused, and he died with his armor pawned to a Jewish neighbor for thirty measures of barley.'
tags: [the motive test, his asceticism, sirah]
---

> **The one idea:** whoever invents a religion collects its price somewhere, in wealth, a throne, or fame. Search this man's life for the payout, and keep searching to his last day: you will not find it.

## The motive test

The second test we apply to any claimant: **who profits?** Impostors resemble each other in every age; the claim begins and the collecting begins with it: fortunes gathered, power consolidated, an entourage swelling, palaces rising. If instead we find a man whose message keeps spreading while his living keeps shrinking, we are looking at a puzzle that demands an explanation.

The Qur'an itself puts this test on the Prophet's ﷺ tongue:

\`\`\`ayah
ref: 38:86
highlight: عليه من أجر
translation: '“Say: I ask you no reward for it, and I am not one of the pretenders.”'
note: 'A Makkan verse, said in the years of persecution, and still true in the years of power.'
\`\`\`

\`\`\`ayah
ref: 34:47
highlight: ما سألتكم من أجر فهو لكم
translation: '“Say: whatever reward I might have asked of you, keep it. My reward is from Allah alone.”'
note: 'Stronger than denying a fee: if I ever asked you for anything, take it back. An open ledger held out to a hostile audience, and no one ever came forward with a claim.'
\`\`\`

## The offer he turned down

The price was not out of reach, such that refusing it cost him nothing. The sirah books (Ibn Hisham's among them) record that Quraysh sent him ʿUtbah ibn Rabiʿah, one of their chiefs, with an explicit offer: if he wanted wealth, they would gather riches for him until he was the wealthiest of them; if he wanted honor, they would make him their master; if he wanted kingship, they would crown him, on one condition: that he stop saying what he was saying. This is a sirah report, not a Sahih hadith: Ibn Ishaq's chain for it is mursal (it stops short of an eyewitness), though a second, connected chain from Jabir ibn ʿAbdullah is recorded by Ibn Abi Shaybah and was [graded authentic by al-Albani in Sahih al-Sirah](https://islamqa.info/en/answers/249967), with one narrator in it whose reliability is disputed.

This is the impostor's dream deal: the full price, paid up front, with no war and no risk. A man whose preaching was a means to money or a throne takes the deal and the story ends: the goal is reached, the means can be dropped. He refused it, recited Qur'an to ʿUtbah instead, and kept the message, and with it the boycott, the siege, the exile, and the wars.

## So where did the price go? Look at his last day

Suppose the chroniclers embellished the ʿUtbah story. We have something harder: his documented material condition in the soundest books of hadith, **at the height of his power** (ruler of the peninsula, tribes pledging allegiance, kings receiving his letters):

\`\`\`hadith
text: 'عن عائشة رضي الله عنها قالت: تُوفِّي رسولُ الله ﷺ ودِرعُه مرهونةٌ عند يهوديٍّ بثلاثين صاعًا من شعير.'
source: 'Sahih al-Bukhari 2916'
url: 'https://sunnah.com/bukhari:2916'
translation: 'Aisha said: “The Messenger of Allah ﷺ died while his armor was pawned to a Jew for thirty saʿ of barley.”'
note: 'Armor was a warrior’s most valuable equipment; a saʿ is a grain measure. He died with it pledged for his family’s food: the estate of the “king of Arabia.”'
\`\`\`

\`\`\`hadith
text: 'عن عروة عن عائشة أنها قالت لعروة: ابنَ أختي، إنْ كنّا لَننظر إلى الهلال ثلاثةَ أهلّةٍ في شهرين وما أُوقِدت في أبيات رسول الله ﷺ نار. فقلت: ما كان يُعيشكم؟ قالت: الأسودان، التمرُ والماء، إلا أنه قد كان لرسول الله ﷺ جيرانٌ من الأنصار كان لهم منائح، وكانوا يمنحون رسولَ الله ﷺ من أبياتهم فيسقيناه.'
source: 'Sahih al-Bukhari 6459'
url: 'https://sunnah.com/bukhari:6459'
translation: 'Aisha told her nephew: “We would sight three new moons in two months without a fire being lit in the households of the Messenger of Allah ﷺ.” He asked: “What kept you alive?” She said: “The two black things: dates and water,” with milk the Ansar neighbors would gift.'
note: 'Two consecutive months with nothing cooked in his houses, in the home of the man who held the whole peninsula.'
\`\`\`

If the religion had been a business, where is the merchandise? He refused the price when it was offered, never collected it when he had the power to, and left none of it behind when he died. The equation balances only one way: it was never a business.

## “Not every price is money”

\`\`\`doubt
claim: Motives aren’t only financial. Maybe he wanted power itself, or glory, or to have his name venerated, pleasures a man can feast on while living on dates and water.
answer: |-
  This is the strongest version of the objection, so test it against how glory-seekers actually behave: they collect titles, demand veneration, and build dynasties for their heirs. His authenticated record is the opposite, item by item. A power-seeker had a shortcut on the table: Quraysh’s own offer was mastery and kingship in cash; he refused it and chose thirteen years of persecution, siege, and the stones of Taif, years in which no worldly horizon of victory existed. And a veneration-seeker does not say what is authentically his: “Do not extol me as the Christians extolled the son of Maryam; I am only His servant; so say: the servant of Allah and His Messenger” (al-Bukhari 3445). A man who commanded hearts and swords, forbidding people to overpraise him.
  And the “he wanted glory” hypothesis assumes he knew the mission would succeed. In Makkah around 613 CE, every human calculation pointed the other way: the enmity of his people and the loss of the standing he already securely had: he was respected, trusted, and beloved before the call. By claiming prophethood he lost precisely what a status-seeker seeks.
\`\`\`

\`\`\`rule
Every fabrication hypothesis assumes a payoff. Money? He died with his armor pawned for barley. A throne? It was offered without a fight and refused. Glory? He forbade his own extolling and titled himself a servant. Whoever says “he invented a religion” owes an answer to a question that will not go away: what did he gain from it?
\`\`\`

\`\`\`tip
Add the unit's first two lessons together: no history of lying in forty years, and no payoff in twenty-three. The “liar” hypothesis needs a liar with no record of lying and no profit from the lie. What kind of liar is that?
\`\`\`

\`\`\`quiz
questions:
  - q: What is the argument from his dying with his armor pawned to a Jewish neighbor for thirty saʿ of barley?
    options:
      - At the peak of his power he had accumulated nothing from his mission, which eliminates the financial motive
      - Pawning was forbidden, so he violated his own law
      - He disliked armor and weaponry
      - The Jews were indisputably the richest people of Madinah
    answer: 0
    why: The ruler to whom the peninsula answered died in debt for his family’s food, the exact opposite of a man who made preaching a ladder to wealth.
  - q: Why is Quraysh’s offer of wealth and kingship strong evidence in the motive test?
    options:
      - It laid the full price in his hands without war or risk; if the mission were a means to it, he would have taken it and stopped
      - Quraysh was too poor to honor the offer
      - The offer came after the conquest of Makkah when he no longer needed it
      - The offer was a secret nobody knew about
    answer: 0
    why: Reaching the goal retires the means; whoever takes the price stops the claim. Refusing the price and choosing years of persecution shows the claim was not a means.
  - q: How does the lesson answer “maybe he sought glory and veneration rather than money”?
    options:
      - 'From his documented conduct: he forbade his own extolling, ordered that he be called Allah’s servant and messenger, and refused offered mastery for years of persecution'
      - Glory never occurred to the Arabs in the first place
      - Veneration was impossible in that era
      - Seeking glory is no flaw, so no answer is needed
    answer: 0
    why: Glory-seekers collect titles, demand reverence, and build dynasties; his authenticated record is the reverse, and the call cost him the secure standing he already had.
\`\`\`
`,"../content/lessons/en/who-created-god.md":`---
title: Then who created God?
description: 'The most famous “gotcha” question, and its answer lies in the scope of the rule itself, plus a prophet who foretold, fourteen centuries ago, that people would reach exactly this question, and taught its answer.'
tags: [infinite regress, the First, who created the creator]
---

> **The one idea:** the rule “everything needs a cause” is not about everything that exists; it is about everything that *began to exist*. The argument of the previous lessons concluded in a First existent with no beginning; so “who brought into being that which never began?” is not deep: it misapplies the very rule it borrows.

## A famous question: let's take it seriously

The questioner says: "You claim everything has a creator, then you stop at God. So who created God? And if something can exist uncreated, why not the universe itself?" It sounds forceful, and it deserves an answer that takes it seriously rather than dodging.

The answer starts by correcting the premise: we never said "everything that exists has a creator." The rule these lessons were built on is more precise: **whatever comes into being after not existing must have something that brought it into being.** It is the *originated* thing that needs a cause, something to tip it from non-existence into existence. But an existent that never was absent, with no beginning at all, has no "tipping moment" to ask about. Asking "who originated the unoriginated?" is like asking "what is north of the North Pole?": grammatically fine, semantically self-canceling.

Nor is this an exemption we grant our side as a courtesy; it is precisely what the argument concluded. The "universe with a beginning" lesson showed that the chain of originated things cannot run back forever, and that it needs an existent *not of its kind*: an eternal First at which the chain stops. Having arrived there, the questioner turns around and applies the rule for originated things to the very being the argument proved is not one of them.

\`\`\`doubt
claim: 'That’s special pleading: you carved out a convenient exception. If an eternal uncaused God is allowed, an eternal uncaused universe is allowed, and positing a God is one assumption more than the job needs.'
answer: |-
  The difference is not stipulation but the testimony of reality: the universe we actually have is not eternal: its own physics says it began (a beginning of time and space), and the impossibility of infinite regress says the same, as that lesson laid out. What the objector proposes, an eternal universe, is an option human thought ran with for centuries, and science itself retired it before religion had to.
  Moreover, whatever is described as eternal must have a description fit for eternity. The universe changes; its parts are originated; time runs over it; its order dissipates thermally; and whatever changes and submits to time is no true First. So the argument never said "everything has a cause except our favorite exception." It said: the originated needs an originator, and the totality of originated things necessarily terminates in something unoriginated. The dispute, then, is not over whether a First exists (that is unavoidable on any accounting) but over its description: blind, changing matter, or the Living, the Sustainer? The precision lesson answered that: the cosmos bears the signature of intent, and blind matter does not intend.
\`\`\`

## And revelation's name for this is: the First

The description the argument forces is the very name Allah gave Himself:

\`\`\`ayah
ref: 57:3
highlight: هو الأول والآخر
translation: '“He is the First and the Last, the Manifest and the Hidden, and He knows all things.”'
note: 'The First with nothing before Him, the Last with nothing after Him. Revelation places the term exactly where reason arrived by proof.'
\`\`\`

And the Prophet ﷺ unpacked it in a du'a whose four clauses outweigh volumes of philosophy:

\`\`\`hadith
text: 'اللهمّ أنت الأولُ فليس قبلك شيء، وأنت الآخرُ فليس بعدك شيء، وأنت الظاهرُ فليس فوقك شيء، وأنت الباطنُ فليس دونك شيء.'
source: 'Sahih Muslim 2713'
url: 'https://sunnah.com/muslim:2713'
translation: '“O Allah, You are the First, with nothing before You; and You are the Last, with nothing after You; and You are the Manifest, with nothing above You; and You are the Hidden, with nothing beyond You.”'
note: '“Nothing before You.” Four words that sever the question at its root: of Him who has no “before,” there is no asking what preceded Him.'
\`\`\`

## The small prophecy inside the question

And here is a detail worth pausing on. The Prophet ﷺ foretold, fourteen centuries ago, that people's questioning would chain onward until it reached exactly this point:

\`\`\`hadith
text: 'لا يزال الناسُ يتساءلون حتى يقال: هذا خلق اللهُ الخلقَ، فمن خلق الله؟ فمن وجد من ذلك شيئًا فليقل: آمنتُ بالله.'
source: 'Sahih Muslim 134'
url: 'https://sunnah.com/muslim:134a'
translation: '“People will not stop asking until it is said: this much Allah created, so who created Allah? Whoever finds anything of that, let him say: I believe in Allah.”'
note: '“Will not stop” is a statement about a continuing future: the asking would carry people to this exact point, and the instruction follows it in a single sentence.'
\`\`\`

A second hadith describes the nature of that chain, and its remedy:

\`\`\`hadith
text: 'يأتي الشيطانُ أحدَكم فيقول: من خلق كذا؟ من خلق كذا؟ حتى يقول: من خلق ربَّك؟ فإذا بلغَه فليستعذ بالله ولْيَنتهِ.'
source: 'Sahih al-Bukhari 3276'
url: 'https://sunnah.com/bukhari:3276'
translation: '“Shaytan comes to one of you and says: who created this? who created that? until he says: who created your Lord? When it reaches that, let him seek refuge in Allah and desist.”'
note: 'The “desist” targets the spiraling whisper that never stops, not thinking itself; as you have seen, the Qur’an commands looking, emphatically.'
\`\`\`

A seventh-century man, in a culture with no tradition of Greek philosophy and its disputes, predicts that "who created your Lord?" will knock on human chests in an orderly sequence, and prescribes the psychological remedy before the epistemic one: this particular chain is a compulsive loop, not a knowledge-seeking question that rests when answered. Today that very question headlines popular atheism, and the rational answer remains what it was: stop at the First; nothing is before Him.

Notice, too, the hadith's fairness to a psychology that did not yet exist: anyone who has experienced intrusive thoughts knows the "and who created… and who created…" spiral is not satisfied by answers, because it was never a request for one. And the resemblance that stops you is this: the remedy on offer is not more argument with the whisper but stepping out of the loop. That is close to what is said today to someone caught in ruminative thought, that re-entering the internal debate feeds the spiral rather than ending it. No claim that the hadith is a clinical manual; the point is the accuracy of the diagnosis.

Even so, we are not arguing from this here: that these words are revelation is something the guide has not established yet. Record it as a note, and we will come back to weigh it in the unit on Muhammad ﷺ.

\`\`\`rule
The argument’s rule: every originated thing needs an originator, not every existent. The argument itself forces a terminus at an unoriginated First, so “who created Him?” re-applies the originated-things rule to the very being proven outside it. Revelation names Him the First with nothing before Him. And His Prophet announced in advance that people would arrive at this exact question, and taught its answer.
\`\`\`

\`\`\`quiz
questions:
  - q: Why does “then who created God?” fail as an objection to the argument for a Creator?
    options:
      - Because the rule is that originated things need an originator, and the argument concluded in a First with no beginning; the question re-applies the rule to what the proof placed outside it
      - Because the question is forbidden to discuss
      - Because the rule really is that every existent has a creator without exception
      - Because the answer is unknown and unknowable
    answer: 0
    why: The argument never said every existent has a creator; it said every originated thing does, and what has no beginning has no origination moment to ask about.
  - q: How is “if an eternal God is allowed, let the universe itself be eternal” answered?
    options:
      - The universe we have is not eternal (by its own physics, its change, and its dissipation), so the dispute is over the necessary First’s description, not its existence
      - There is really no difference between the two claims
      - The universe is eternal and created at the same time
      - Eternity is rationally impossible for anything
    answer: 0
    why: A First existent is unavoidable on any accounting; but a changing, time-bound thing with originated parts cannot be it, leaving an eternal, self-subsisting First distinct from the universe.
  - q: 'What does the hadith “…until he says: who created your Lord?” demonstrate?'
    options:
      - A prediction, fourteen centuries early, that people would reach exactly this question (with its compulsive nature described and its remedy taught)
      - A general prohibition on thinking about the universe
      - Proof that the question has no answer
      - That Shaytan literally creates questions
    answer: 0
    why: The hadith foretold where the chain of asking would arrive, described it as a loop rather than a genuine inquiry, and taught how to cut it, while the Qur’an itself commands reflection, so it is no ban on thinking.
\`\`\`
`,"../content/lessons/en/why-cant-we-see-god.md":`---
title: Why can't we see Him?
description: 'Every day we accept things nobody has ever seen (minds, gravity, history) on the strength of their effects. So why is sight made a condition for the Creator alone? And what did Musa ask, and what was he answered?'
tags: [seeing God, the unseen, limits of the senses]
---

> **The one idea:** sight is neither the condition of existence nor the ceiling of knowledge. We establish the greatest part of what we know by effects, not by eyesight. And the eye itself is a created instrument with a narrow range. It is a strange move to appoint our narrowest instrument as judge over the largest question.

## A condition we apply to nothing else

Ask yourself, calmly: how many things are you certain exist that you have never once seen?

- **Other minds.** Nobody has ever seen a thought inside another person’s head, yet you do not doubt for a second that the person talking to you has a mind that intends and understands. You infer it from words and actions, from effects.
- **Gravity and fields.** Nobody has seen gravity; we watch the apple fall and establish the force from its effect. You can hold a magnet and never see its field, and never doubt the field, watching the nails jump.
- **History.** You witnessed neither the conquest of Makkah nor Napoleon’s wars, and you are certain both happened, on accumulated traces and reports.
- **Mathematics.** Nobody has laid eyes on the number seven, and it is more secure in your mind than most things you can see.

So “I will only believe what I can see” is a rule nobody lives by for a single day. Knowledge travels two roads: direct observation, or inference from an effect to what produced it; and the second road is the backbone of science itself. No creature’s eye has ever landed on an electron, a black hole, or the earth’s core; we saw their effects and accepted them without hesitation.

That is also what “the unseen” means in the Qur’an. It is not the opposite of *evidenced*; it is the opposite of *observed*: something the eye does not reach, which effects and reports establish.

## And the eye is a narrow instrument anyway

Your eye picks up only a thin slice of light: no infrared, no ultraviolet, none of the radio waves crossing your room right now. It cannot even stare at the sun, a created thing. To make this instrument the condition for establishing the Creator of the heavens and the earth is to weigh a mountain on a jeweler’s scale: the fault is not in the mountain.

\`\`\`ayah
ref: 6:103
highlight:
  - لا تدركه الأبصار
  - وهو يدرك الأبصار
translation: '“Vision does not encompass Him, but He encompasses all vision; and He is the Subtle, the All-Aware.”'
note: 'The verse states an asymmetry, not a symmetry: our limited sight cannot encompass Him, while He encompasses it and everything else.'
\`\`\`

## Musa asked, and the request was not called absurd

The human being to whom Allah spoke most directly asked for exactly this:

\`\`\`ayah
ref: 7:143
highlight:
  - أرني أنظر إليك
  - لن تراني
translation: '“When Musa came to Our appointed meeting and his Lord spoke to him, he said: my Lord, show me Yourself, that I may look at You. He said: you will not see Me. But look at the mountain; if it holds its place, then you will see Me. And when his Lord revealed His glory to the mountain, He crushed it flat, and Musa fell down senseless. When he recovered he said: glory be to You! I turn to You in repentance, and I am the first of the believers.”'
note: 'Musa was not told “you have asked for something that does not exist.” He was shown why it cannot be seen in this world: the mountain could not withstand the disclosure. The limit is in the receiver’s capacity, not in the existence of the one asked about.'
\`\`\`

Sit with what the story contains. A prophet asks to see God, and he is not told that the thing he asked for does not exist. And the answer is not a denial of existence but a demonstration of capacity: solid rock could not bear the disclosure, so what then of a human eye? The question is one of capacity and of which world you are standing in, not of whether anything is there.

\`\`\`note
Not seeing Him in this life is not an absolute impossibility. It is Muslim belief that the believers will see their Lord in the Hereafter (Surat al-Qiyamah, 75:22–23), when creation is remade in a form that can bear what this world’s eyesight cannot. The shortfall belongs to the world and the instrument, not to the One seen.
\`\`\`

## Known by His effects, like everything above

The previous unit never said “believe without evidence.” It laid out observed effects: a universe with a beginning, constants tuned with precision, life that runs on a code. Then it took the very step science takes daily: from the observed effect to the unobserved cause.

\`\`\`ayah
ref: 67:14
highlight: ألا يعلم من خلق
translation: '“Would He who created not know? And He is the Subtle, the All-Aware.”'
note: 'The making informs you about the maker: precision in the creation points to knowledge in the Creator, the way a masterful book points to a knowing author you have never seen.'
\`\`\`

\`\`\`doubt
claim: Extraordinary claims require extraordinary evidence, and I only trust what can be measured and tested.
answer: |-
  Take the second rule first: “I only trust what can be measured.” That sentence itself cannot be measured or tested. Which laboratory weighs it? It fails its own standard, and whoever holds it is already trusting something unmeasured. The truth is wider: we accept the measurable by measurement, and the unmeasurable by sound inference, as we already do in mathematics, history, and other minds.
  Then where exactly is the “extraordinary” part? The premises of the case in front of you are plain empirical observations: the universe began; its constants are finely set; life is a system running on a code. The final step is an inference from effect to cause, the same species of step by which science established the electron and the black hole. In fact, turn the question around: which claim should astonish you more? A universe ordered by a knowing wisdom, or a universe this precisely set with nothing setting it?
\`\`\`

\`\`\`rule
Sight is one road to knowledge, not its only condition and not its summit. Whoever accepts minds, gravity, and history on their effects, then rejects the universe’s testimony to its Maker because his eye never landed on Him, is applying to one question a standard he applies to nothing else. And the Qur’an never asks for belief without effects: it points at the effects and asks: do they not indicate?
\`\`\`

\`\`\`quiz
questions:
  - q: Why does “I will only believe what I can see” fail as a standard of knowledge?
    options:
      - Because nobody actually lives by it; we accept minds, gravity, and history on their effects, not by sight
      - Because sight never yields knowledge at all
      - Because the senses always deceive, so nothing can be trusted
      - Because knowledge is reserved for specialists
    answer: 0
    why: Sight is a valid road but not the only one; inference from effect to cause is the backbone of how science itself establishes what cannot be seen.
  - q: What does the story of Musa asking to see Allah (7:143) establish?
    options:
      - The request itself was not rebuked, and the answer showed the limit lies in a creature’s capacity in this world, not in whether the One asked about exists
      - That asking for evidence about God is a fault deserving blame
      - That Musa doubted his Lord’s existence
      - That mountains are unaffected by anything
    answer: 0
    why: The mountain crumbling at the disclosure showed this is a question of the receiver’s capacity and of which world you stand in, and believers will see Him in the Hereafter, when creation is remade to bear it.
  - q: How does the lesson answer “I only trust what can be measured”?
    ref: 67:14
    word: ألا يعلم من خلق
    options:
      - The rule itself cannot be measured, so it fails its own test; and the case offered rests on empirical premises anyway
      - Measurement is worthless and plays no role in knowledge
      - Faith is a private feeling that evidence cannot touch
      - Empirical science is incapable of knowing anything
    answer: 0
    why: '“Only trust the measurable” is not itself the result of any measurement, so holding it is self-contradictory; the case for the Creator starts from observed premises and ends with the same effect-to-cause inference science uses for the unseen.'
\`\`\`
`,"../content/lessons/en/why-created.md":`---
title: Why did He create us?
description: 'The purpose question this guide opened with reaches its answer here: we were created for worship, and Allah, in the very next verse, disclaims any need. What worship really means, and why this answer makes the meaning you already feel in your life real rather than a story we tell ourselves.'
tags: [the purpose of creation, worship, the meaning of life]
---

> **The one idea:** in this guide's first lesson we asked: why am I here? Here is Islam's answer in a single verse: we were created for worship, followed, with no gap, by a verse denying that Allah needs anything from it. The purpose is for your sake, not His.

## The answer, in two adjacent verses

\`\`\`ayah
ref: 51:56
highlight: إلا ليعبدون
translation: '“I did not create the jinn and mankind except to worship Me.”'
note: 'An exclusive construction: the whole creation has one purpose, worship. (The verse names the jinn beside mankind: another accountable creation the Qur’an tells of.) But before you paint a picture of what “worship” means, read the very next verse.'
\`\`\`

\`\`\`ayah
ref: 51:57
highlight: ما أريد منهم من رزق
translation: '“I want no provision from them, and I do not want them to feed Me.”'
note: 'Before the thought of need can even form, need is denied in writing. A deity who hungers and is fed by his worshippers belongs to mythology; the Creator was introduced by Surat al-Ikhlas: the Self-Sufficient whom all need and who needs none. The purpose, then, is not to fill a lack in Him but to raise a rank in you.'
\`\`\`

\`\`\`ayah
ref: 35:15
highlight: أنتم الفقراء إلى الله
translation: '“O mankind, you are the ones in need of Allah, and Allah, He is the Free of need, the Praiseworthy.”'
note: 'The direction of need in this relationship runs one way and never reverses: we need Him for every breath and heartbeat; He is rich beyond need. If He commands our worship, it is not to take something from us; it is to give.'
\`\`\`

## What is worship, actually?

At the word "worship," many picture humiliation demanded for its own sake: a forehead on the ground before a master who craves the bowing. That misreads the word itself. Ibn Taymiyyah, in his treatise on servitude, defined worship as *a name that gathers everything Allah loves and approves of, words and deeds, inward and outward*. It is not a narrow corridor called "ritual"; it is an orientation wide enough for a whole life:

- Prayer and du'a are worship, yes: the summit of the direct line you read about in the previous lesson.
- And your work done excellently for His sake, your honesty in trade, your kindness to your parents, your restraining of your own harm: all of it is worship.
- Even the morsel of food you lift to your family's mouth becomes worship that is rewarded, by the hadith's own wording:

\`\`\`hadith
text: 'إنك لن تنفق نفقةً تبتغي بها وجهَ الله إلا أُجرتَ عليها، حتى ما تجعل في فم امرأتك.'
source: 'Sahih al-Bukhari 56'
url: 'https://sunnah.com/bukhari:56'
translation: '“You never spend anything seeking Allah’s face except that you are rewarded for it, even the morsel you place in your wife’s mouth.”'
note: 'The most mundane-seeming thing imaginable, a bite shared between spouses, enters the ledger of worship when its direction is right. Worship is not a sector of life; it is a direction the whole of life takes.'
\`\`\`

So the reality of worship is three things joined: **love** for the One who gave you everything, **gratitude** to Him for it, and **submission** to the One whose rank that is. It is the natural posture of a rational creature before its Maker: not the crushing of a slave before a tyrant, but the upright standing of a grateful dependent before the Rich One who has been good to him.

## Life as an examination hall

A second verse completes the answer: why is this world such a mixture of beauty and hardship?

\`\`\`ayah
ref: 67:2
highlight: ليبلوكم أيكم أحسن عملا
translation: '“He who created death and life to test you: which of you is best in deed…”'
note: 'He created death too: death is not a flaw in the design but part of it, a door, not a wall. And the standard is best in deed, not most: quality before quantity. This world being a test-hall rather than the settlement is what explains beauty and pain coexisting in it, as the suffering lesson laid out.'
\`\`\`

On this account, life is neither a meaningless waiting room nor a party with no reckoning: it is a short, honorable examination whose subject is excellence of deed, graded by One more merciful to you than your own mother.

## And what is the alternative on offer?

To weigh Islam's answer fairly, set it beside the only other product on the shelf:

\`\`\`compare
columns:
  - title: A universe with no Creator and no purpose
    points:
      - Meaning is something we make, and it is real to us even if it is not written into the universe
      - Your worth is that you are a conscious being who suffers and loves, and that alone is enough to ground real ethics
      - Death is the end with no appeal, and the shortness of a life is what makes it precious
      - The question “why am I here” has no answer because, on this picture, it was never a meaningful question
  - title: A universe created by the Most Merciful, for a purpose
    points:
      - Meaning is discovered, not invented; your life was intended, and has an intended point
      - Your worth is that you are meant, addressed, and entrusted; the One who needs nothing chose to create you
      - Not an atom’s weight of good is lost with Him, and the reckoning completes what death cut short
      - The feeling that your life means something is perception of reality, not a useful psychological trick
\`\`\`

This is the difference the lesson wants you to see. Islam does not ask you to imagine your life has meaning; you already feel it, live by it, and cannot live without it. Islam tells you the feeling is **true**: your life has a real purpose, purposed by a Purposer, not a beautiful story stretched over a deaf void.

\`\`\`doubt
claim: A God who creates beings in order to be worshipped and praised is an egotist in love with himself. A perfect being doesn’t need its creatures’ compliments; demanding them is a deficiency that contradicts the claimed perfection.
answer: |-
  The objection sounds strong, and the text answered it before it was raised: the verse immediately after the purpose-verse denies need in writing: no provision wanted, no feeding, no benefit. Vanity and thirst for praise are deficiencies that can only exist in a deficient being: one that derives its worth from others’ admiration and starves without it. Attributing hunger-for-praise to the One free of all need measures the Creator by human temperaments, precisely what Surat al-Ikhlas ruled out in calling Him al-Samad, with none comparable to Him.
  Then look where worship’s fruit actually lands: it adds nothing to Allah; it transforms the worshipper. Thanking someone who saved your life adds nothing to them, but omitting the thanks diminishes you, making you ungrateful and blind to a standing fact. Praising the Perfect is right in itself, because it is saying what is true about One who deserves it, and its entire yield returns to you: steadiness, a scale of values, and connection to the One in whose hand everything lies. That is why the very command to worship is itself a gift: it points you to the purpose you were designed for, the way a machine’s maker points out its function, for the machine’s sake, not the maker’s need.
\`\`\`

\`\`\`rule
Allah created you for His worship while being entirely free of need for you. So worship is not a tax the poor pay to the needy, but a purpose that honors you: love, gratitude and submission to the One who gave you everything, wide enough to include your work, your food and your kindness when the intention is right. And by it, the meaning you feel your life has becomes a standing fact of reality, not a story told over a void.
\`\`\`

\`\`\`quiz
questions:
  - q: How do we know the command to worship is not driven by any need on Allah’s part?
    options:
      - Because the verse immediately following the purpose-verse denies that He wants provision or feeding from creation
      - Because worship is cheap, so it doesn’t count as a need
      - Because Allah needs worship but conceals it
      - Because worship is required of angels only
    answer: 0
    why: The denial of need is explicit and placed right where the thought would arise; the Self-Sufficient takes nothing from worship, and its fruit returns to the worshipper.
  - q: What does worship mean in Islam?
    options:
      - A name gathering every word and deed Allah loves, outward and inward, including work and kindness done with the right intention, not rituals alone
      - Only the prescribed rituals such as prayer and fasting
      - Abasement demanded for its own sake
      - Total withdrawal from the world and from work
    answer: 0
    why: By Ibn Taymiyyah’s definition it gathers everything Allah loves of words and deeds; and the hadith counts even the morsel a man lifts to his wife’s mouth.
  - q: How does the lesson answer the claim that a God who creates people to worship Him is vain?
    options:
      - Vanity is the deficiency of a being that needs admiration, and Allah denied need in writing; worship changes the worshipper, not the Worshipped, like gratitude, which adds nothing to the rescuer but diminishes the one who withholds it
      - Vanity becomes a perfection when attributed to the Creator
      - Allah does need the praise but deserves it anyway
      - Worship isn’t actually required in Islam
    answer: 0
    why: Attributing thirst-for-praise to the One free of need measures Him by human temperament; the text denied need before anyone asked, and worship’s entire yield returns to the worshipper.
\`\`\`
`,"../content/lessons/en/why-revelation.md":`---
title: Is reason alone enough?
description: 'Reason brought you to a Creator; then it stops at the door: what does He want from me? How do I thank Him? What comes after death? Why sending messengers is what mercy and justice both require.'
tags: [revelation, messengers, limits of reason]
---

> **The one idea:** reason is an honest compass: it tells you there is somewhere to go, but it cannot draw the route. A compass without a map is enough to know you are lost, not enough to arrive.

## How far did reason take us?

Very far. The fitrah testified from inside you, and reason built its case from outside: this universe did not come from nothing and did not create itself, so it has one Creator: precise in His work, merciful to His creation, who did not make you in vain but for a purpose. All of that was argued in the earlier units.

Now stand here and try to finish the journey with bare reason. Three questions wait behind the door:

- **What does He want from me?** You know your life has a purpose. But what, concretely, pleases Him, and what angers Him?
- **How do I thank Him?** Reason obliges gratitude to a benefactor; it cannot supply the *how*. Should I pray? In what form? How often?
- **What comes after death?** You saw that a completed accounting is what justice demands, but what is it like, and what counts there?

Try to answer even one of these with the kind of proof that established the Creator. You will feel the difference yourself: there, the evidence compelled; here, you find only guesses. And not because your mind is weak, but because these questions are of another kind entirely. They are questions about **someone else’s will**, and another’s will is not derived; it is disclosed. You can prove your neighbor exists by observation; you cannot deduce what would please him. He has to tell you.

\`\`\`ayah
ref: 20:50
highlight: أعطى كل شيء خلقه ثم هدى
translation: '“He said: our Lord is He who gave everything its form, then guided it.”'
note: 'Musa’s answer when Pharaoh demanded to know who his Lord was. Guidance is the Creator’s habit across creation: the bee, the newborn, the migrating bird, each guided to what it was made for. Would He guide everything else and leave man alone, unguided, on his greatest question?'
\`\`\`

## What did reason alone actually produce?

This is not a thought experiment; humanity ran it, for millennia. The fitrah pushes everyone to seek something to worship (lesson two established that), and seeking without a map, people worshipped the sun, the stars, rivers, kings, and idols their own hands had carved. Thousands of contradictory religions, all testifying to one thing: the question is built into us; the answer’s details are not.

Nor was this only the crowd. The Greek philosophers, giants of logic, disagreed about God, the soul, death, and the good life, and disagreed completely. If bare reason sufficed here, the greatest minds would have converged on the answer the way they converge on arithmetic.

And notice: the diversity of religions, atheism’s favorite exhibit against religion, is precisely the evidence that revelation is needed. The compass works in every chest; the map is missing. Scattered wandering in every direction is exactly what a compass without a map produces.

## A message is mercy, and justice

If the Creator is merciful, and created us for a purpose, what do mercy and wisdom entail? Not leaving us to guess, but sending someone to tell us on His behalf: this is what I want, this is how you thank Me, this is what follows death.

And there is more here than mercy. Justice itself requires the message: how could people be held to account for instructions that never reached them?

\`\`\`ayah
ref: 17:15
highlight:
  - وما كنا معذبين
  - نبعث رسولا
translation: '“Whoever is guided is guided for his own good, and whoever strays, strays to his own loss. No bearer of burdens bears another’s burden. And We never punish until We have sent a messenger.”'
note: 'It is of His justice that no one is punished before the case has been made to them through a messenger (the reading of al-Tabari and Ibn Kathir). Accountability is downstream of delivery.'
\`\`\`

\`\`\`ayah
ref: 4:165
highlight: لئلا يكون للناس على الله حجة بعد الرسل
translation: '“Messengers bearing good news and warning, so that people would have no argument against Allah after the messengers. And Allah is ever Mighty, Wise.”'
note: 'The messengers cut off every excuse: no one can stand at the accounting and say “nothing ever reached me.” Revelation clears the ground before the reckoning.'
\`\`\`

So sending messengers is not a religious luxury bolted onto the system. It is the link that makes the purpose knowable and the accounting just.

\`\`\`doubt
claim: Why would God send one messenger to everyone instead of speaking to each person directly? If He wanted me guided, He would address me.
answer: |-
  He has addressed you, in three ways, all of them public and all of them checkable: a fitrah testifying inside you, signs in the universe around you, and an open, preserved message whose evidence anyone, you included, can examine and weigh. The only thing missing is a private voice for you alone. Look closely at what that would actually be.
  A private voice is unverifiable by construction. If you heard one, what would distinguish it, for you, from imagination or a dream? How would you argue from it to anyone else, or they to you? It is exactly the “subjective experience nobody can check” that the skeptic rightly refuses as evidence everywhere else. A public, documented message is the fairer instrument: one announced text, examined by friend and foe alike, tested across centuries. Asking for personal revelation is not an upgrade to the communication; it is a downgrade, from public, examinable evidence to a private feeling with no way to audit it.
\`\`\`

\`\`\`rule
Reason establishes that the universe has a Creator and that He is owed gratitude. It cannot, on its own, learn what He wants, how He is to be thanked, or what follows death, because those are facts about another’s will, and another’s will is known only by his telling. So messengers are what mercy entails (guidance) and what justice entails (no accounting before the message).
\`\`\`

\`\`\`note
This lesson has not argued that any particular message is genuine, only that one is needed, and that reason itself calls for it. Which claimed revelation is real? That is the work of the units ahead, with declared criteria applied evenly, to Islam first of all.
\`\`\`

\`\`\`quiz
questions:
  - q: In matters of religion, what can reason do, and what can’t it?
    options:
      - 'It can establish the Creator and the duty of gratitude; it cannot, alone, learn what He wants, how to worship Him, or the details of the afterlife'
      - It can do nothing; religion is pure submission without thinking
      - It can do everything, so revelation is unnecessary
      - It can settle the details of worship but cannot establish a Creator
    answer: 0
    why: Another’s will is not derived by logic; it is disclosed by the one who wills. Reason obliges gratitude but cannot supply its form except from the One being thanked.
  - q: On what does this verse make punishment conditional?
    ref: 17:15
    word: وما كنا معذبين حتى نبعث رسولا
    options:
      - 'On sending a messenger first: no accounting before the case has actually reached people'
      - On the sheer quantity of sins, whether or not any message arrived
      - On each person’s intelligence and power of deduction
      - On enough time having passed for a nation to work things out
    answer: 0
    why: 'The verse makes the sending of a messenger a precondition of liability (the reading of al-Tabari and Ibn Kathir): revelation clears the ground, and accountability is downstream of delivery.'
  - q: How does this lesson answer “if God wanted me guided, He would speak to me directly”?
    options:
      - 'He has addressed everyone through fitrah, signs, and a public preserved message anyone can examine; a private voice would be unverifiable and impossible to argue from'
      - God does not actually want everyone guided
      - The demand is reasonable and has no answer
      - Everyone does receive private revelation but forgets it
    answer: 0
    why: A public, documented message can be tested by friend and foe across centuries; a private voice per person is precisely the unverifiable subjectivity the objector rejects as evidence everywhere else.
\`\`\`
`,"../content/lessons/en/why-suffering.md":`---
title: Why evil and suffering?
description: 'The heaviest question, and the most honest. This lesson does not talk past the questioner’s pain; it lays out the whole answer: a world built as a test, real freedom, wisdom invisible from inside the story, and a Hereafter where the account completes.'
tags: [problem of evil, suffering, free will, the Hereafter]
---

> **The one idea:** the pain is real, and the question is honorable. Its answer is not one word but parts that complete each other: this world is a test, not the settlement; real freedom entails the possibility of real evil; wisdom can be invisible from inside the story; and the Hereafter completes the account. A universe with no Creator removes none of the suffering; it removes only its meaning.

## Before any argument: your pain is respected

The question of suffering arrives in two forms: as a proof in a philosophy book, and as a cry beside a hospital bed. This lesson answers the first while never losing sight of the second. If you are reading this with a loss or an illness in your chest, nobody here will tell you “cheer up, it’s simple”; it is not simple, and the Qur’an itself never scolds grief. It records that Yaʿqub, a prophet, complained of his anguish and sorrow *to Allah* (Yusuf 12:86), and he was not reproached for the tears. Complaining to God is not the same as complaining against Him.

Only one thing is refused here: settling the largest question in existence on half the story.

## Part one: this world is a test, not the settlement

The Qur’an never promised anyone that this world is paradise. It introduced life, from its opening pages, as the opposite, a built examination:

\`\`\`ayah
ref: 67:2
highlight: ليبلوكم أيكم أحسن عملا
translation: '“He who created death and life to test you: which of you is best in deed. And He is the Mighty, the Forgiving.”'
note: 'Death and life were created together, for the stated purpose of testing. Hardship in this world is not a flaw in the plan; it is the plan’s published text.'
\`\`\`

\`\`\`ayah
ref: 2:155
highlight:
  - ولنبلونكم بشيء من الخوف
  - وبشر الصابرين
translation: '“We will certainly test you with something of fear and hunger, and loss of wealth, lives, and fruits. And give glad tidings to the patient.”'
note: 'A plain advance notice: you will be tested in safety, in provision, in the people you love. The two verses that follow promise the patient blessings and mercy from their Lord (2:156–157).'
\`\`\`

So the objection “if God existed, we would not suffer” is aimed at some other religion, one that claimed this world is pure bliss. Islam said from the start: this is the examination hall, and the settlement is elsewhere. And in the believer’s ledger, nothing in the examination is wasted:

\`\`\`hadith
text: 'عجبًا لأمر المؤمن، إنّ أمره كلَّه خير، وليس ذاك لأحدٍ إلا للمؤمن: إن أصابته سرّاءُ شكر فكان خيرًا له، وإن أصابته ضرّاءُ صبر فكان خيرًا له.'
source: 'Sahih Muslim 2999'
url: 'https://sunnah.com/muslim:2999'
translation: '“Amazing is the affair of the believer: all of it is good for him, and that belongs to no one but the believer. If ease comes to him he gives thanks, and that is good for him; and if harm comes to him he bears it with patience, and that is good for him.”'
note: 'This is not a denial of pain but its transformation: in this creed there is no meaningless calamity and no fruitless patience.'
\`\`\`

## Part two: real freedom entails the possibility of real evil

Survey the world’s evils and the greatest of them are human-made: oppression, war, betrayal, greed. That is the price of something precious: human beings were created choosing, not programmed. A creature capable of genuine goodness, goodness it *chooses*, must be capable of its opposite, or there was never a choice at all. To demand a world where injustice is impossible is to demand a world without choice, a world with no humans in it, only machinery turning. And the obvious reply, that God could have made creatures who are free and yet always choose well, moves the problem rather than solving it: to guarantee in advance which way a choice falls is to make the other way unavailable, and an outcome fixed by someone else is not that creature’s choice at all.

And God’s giving the oppressor time is not God’s approval. The reprieve belongs to the test; the appointment no one escapes comes in part four.

## Part three: wisdom can be invisible from inside the story

Surat al-Kahf (18:60–82) carries a story that reads as if revealed for this very question. Musa accompanied a righteous servant whom Allah had given knowledge from Himself, and watched him do three things whose surface was plain wrong: he damaged a boat belonging to poor people; he killed a boy; and for a town that refused them food, he rebuilt a wall for no wage. Musa objected every time; he was a prophet, and what he could see in front of him admitted no excuse. Then the inside was disclosed: the boat was breached so a king who was seizing every sound vessel would pass it over, and the poor family would keep it; the boy, he was told, would have grown to drag his believing parents into rebellion and disbelief, so his death guarded their faith, and they would be given better in his place; and beneath the wall lay a treasure belonging to two orphans, kept safe until they came of age.

\`\`\`ayah
ref: 18:82
show: وما فعلته عن أمري
translation: '“I did not do it of my own accord.”'
note: 'The closing line of the whole explanation: none of it was human improvisation; it was by Allah’s command and knowledge. The scene that looked like naked injustice was, with the story complete, mercy and protection.'
\`\`\`

The moral is precise, so take from it no more than it gives. You are not being asked to believe you will understand the wisdom of every pain in this life. Musa himself did not understand until he was told. You are being asked something smaller and harder: to grant that “I cannot see the wisdom” does not equal “there is no wisdom.” From inside the first scene, the most truthful observer alive saw pure injustice, and the reality was pure mercy.

## Part four: a Hereafter where the account completes

If this world were the whole story, the question would keep an obvious sting. But Islam never said that. It teaches that every wrong has an appointment before a record that misses nothing:

\`\`\`ayah
ref: 18:49
highlight: ولا يظلم ربك أحدا
translation: '“The record is laid open, and you see the guilty fearful of what is in it, saying: woe to us! What record is this that leaves out nothing small or great, but counts it? They find all they did present, and your Lord wrongs no one.”'
note: 'On the day the ledger that neglected nothing is spread out, the verse closes with the axiom this whole part rests on: your Lord wrongs no one, ever.'
\`\`\`

\`\`\`ayah
ref: 21:47
highlight: ونضع الموازين القسط
translation: '“We set up the scales of justice for the Day of Resurrection, and no soul is wronged in anything. Were it even the weight of a mustard seed, We bring it forth. And We suffice as reckoners.”'
note: 'Even a mustard seed’s weight is produced and weighed. No victim’s tear falls out of the account, and no oppressor escapes it by dying comfortably in his bed.'
\`\`\`

\`\`\`hadith
text: 'ما يصيب المسلمَ من نَصَبٍ ولا وَصَبٍ ولا همٍّ ولا حُزنٍ ولا أذًى ولا غمٍّ، حتى الشوكةِ يُشاكُها، إلا كفّر الله بها من خطاياه.'
source: 'Sahih al-Bukhari 5641'
url: 'https://sunnah.com/bukhari:5641'
translation: '“No fatigue, nor illness, nor worry, nor grief, nor harm, nor distress befalls a Muslim, not even the prick of a thorn, except that Allah expiates some of his sins by it.”'
note: 'In this ledger there is no such thing as wasted pain: even a thorn’s prick does its work in the account.'
\`\`\`

## The turn: what remains of the question in a universe with no Creator?

Now audition the proposed alternative. Suppose a universe with no Creator, granted for the sake of argument and not conceded as possible: the previous unit argued that whatever has a beginning does not bring itself into being, and that precision is not written by accident. The supposition is here for one purpose, to ask whether it solves the problem it was offered to solve. The child still gets cancer, the earthquake still strikes, the tyrant still dies unpunished in his bed. Every gram of the suffering remains, but now without meaning, without justice, without repair: no final court awaiting the executioner, no reunion to mend the bereaved mother, no scale that produces the mustard seed. Nothing of the problem was solved; all that was lost is everything that made it bearable.

And something sharper: the very word “evil” presupposes a standard above tastes and preferences. If there is no measure beyond matter, by what right is blind nature accused of getting anything *wrong*? Suffering becomes an event that occurs, the way a rock falls, not a “problem” one can protest. The argument from evil borrows from its opponent the very scale without which it cannot stand. An objector can reply that he is borrowing it on purpose: the argument is meant as a reductio, run entirely on the theist’s own commitments. Taken that way it is a fair move, and it is also the way this lesson has answered it, because a reductio inherits all of those commitments, the Hereafter and the unseen wisdom included, not only the convenient ones. None of this impugns anyone’s character. There are compassionate, honorable atheists; this is about what grounds the judgment, not about how people behave.

\`\`\`doubt
claim: 'An all-powerful, all-good God and a child dying of cancer cannot coexist: either He cannot prevent it, or He will not, or He is not there. And if you answer that some hidden reason might justify it, look at the scale: the sheer quantity of apparently pointless suffering, most of it never witnessed by anyone, is far more what you would expect of an indifferent universe than of a loving one.'
answer: |-
  This is the strongest form of the objection, so take it at full strength. “Cannot coexist” is a claim of logical contradiction, and it only goes through with a hidden premise: “it is impossible that God has a sufficient wisdom in a pain I cannot see.” That is a claim to have surveyed every possible reason, knowledge no finite observer holds. The story of al-Khidr displayed the counterexample: a truthful observer sees naked injustice, and the reality is pure mercy. This is why many philosophers of this very problem (atheists among them) moved off the strict-contradiction version to a weaker one that says “unlikely” rather than “impossible” (a few, such as James Sterba, still press the strict version, and the debate over it is live). And likelihood is weighed against evidence; you saw in the previous unit what sits in that pan.
  Notice, too, that the objection weighs the story with its ending torn off: it assumes the child’s life ends at the last heartbeat: no restoration, no reunion, no account. That is precisely the premise Islam denies. This world is the first page, not the book; the child is in the mercy of the One who wrongs no one; every pain is weighed; and the mother who endures is promised what will mend her heart. This answer does not claim to unveil every “why,” but what the objection asserted was impossibility, and the impossibility has collapsed.
  Finally, watch where settling the question by denial actually leads: the cancer stays, and the meaning, the justice, and the hope all go. Islam never promised a world without tears; it promised that not one tear is lost.
\`\`\`

\`\`\`rule
Islam’s answer to suffering is parts that complete each other: a test whose purpose was published from the first page; freedom that is only real if its opposite is possible; wisdom that can hide from a truthful observer, as it hid from Musa; and a Hereafter whose scale does not miss a mustard seed. The claim “God and suffering cannot coexist” rests on a premise no creature possesses, while supposing a universe with no Creator removes no suffering at all, only its meaning.
\`\`\`

\`\`\`quiz
questions:
  - q: What does the verse “He created death and life to test you” establish for this question?
    ref: 67:2
    word: ليبلوكم أيكم أحسن عملا
    options:
      - That this world is an examination by published design, so hardship is not a flaw in the plan
      - That this world is pure bliss for whoever does good
      - That death is a purposeless punishment
      - That trials strike only wrongdoers
    answer: 0
    why: The objection from suffering targets a religion that promised a painless world; Islam announced the opposite from its opening pages. This is the examination hall, and the settlement is elsewhere.
  - q: What exactly does the story of Musa and al-Khidr contribute?
    options:
      - That not seeing the wisdom does not equal there being none; Musa himself saw apparent wrong that was, inside, mercy
      - That everyone will eventually understand the wisdom behind every pain in this life
      - That objecting to apparent wrong is always a mistake
      - That nothing is ever hidden from prophets
    answer: 0
    why: Musa did not understand until he was told. The lesson asks for something smaller and harder than understanding every wisdom, granting that “I can’t see it” is not evidence of “it isn’t there.”
  - q: What happens to the problem of suffering in a universe with no Creator?
    options:
      - All the suffering remains, but loses meaning, justice, and repair; and the word “evil” loses its measuring standard
      - The problem is fully solved because the question dissolves
      - The world automatically contains less pain
      - Suffering becomes proof of absurdity and nothing else
    answer: 0
    why: Denial cures no child and stops no earthquake; it only cancels the final court, the restoration, and the meaning. And the protest itself presupposes a standard above preferences.
\`\`\`
`})},fr=/^---\r?\n[\s\S]*?\r?\n---\r?\n?([\s\S]*)$/,pr={ar:new Map,en:new Map};for(let e of[`ar`,`en`])for(let[t,n]of Object.entries(dr[e])){let r=t.split(`/`).pop().replace(/\.md$/,``),i=n.match(fr);if(!i)throw Error(`Lesson "${e}/${r}.md" is missing its frontmatter block.`);pr[e].set(r,i[1].trim())}function mr(e,t){return pr[e].get(t)}function hr(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function gr(e){let t=2166136261;for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return t>>>0}function _r(e){let t=hr(gr(e.id)),n=e.options.map((e,t)=>t);for(let e=n.length-1;e>0;e--){let r=Math.floor(t()*(e+1));[n[e],n[r]]=[n[r],n[e]]}return{...e,options:n.map(t=>e.options[t]),answer:n.indexOf(e.answer)}}function vr(e,t,n){let r=sr(e),i=(r.questions??[]).map((e,r)=>_r({...e,lesson:t,id:`${t}-${n}-${r}`}));return{title:r.title,questions:i}}var yr=/```quiz\r?\n([\s\S]*?)```/g;function br(e){return d.flatMap(t=>{let n=mr(e,t.slug);return n?[...n.matchAll(yr)].flatMap((e,n)=>vr(e[1],t.slug,n).questions):[]})}function xr(e,t,n){let r=hr(n),i=e.slice();for(let e=i.length-1;e>0;e--){let t=Math.floor(r()*(e+1));[i[e],i[t]]=[i[t],i[e]]}return i.slice(0,t)}export{ur as a,mr as i,vr as n,sr as o,xr as r,br as t};