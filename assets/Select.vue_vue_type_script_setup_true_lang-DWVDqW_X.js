import{C as c,d as w,_ as v,c as C,s as k,e as u,V as g,ap as V,b as $,M as b,G as A,f as x,o as y}from"./index-BUHJVZlL.js";import{c as B}from"./Button.vue_vue_type_script_setup_true_lang-BoY6YqWE.js";/**
 * @license lucide-vue-next v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
 * @license lucide-vue-next v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=e=>e==="";/**
 * @license lucide-vue-next v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=(...e)=>e.filter((t,r,o)=>!!t&&t.trim()!==""&&o.indexOf(t)===r).join(" ").trim();/**
 * @license lucide-vue-next v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-vue-next v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,r,o)=>o?o.toUpperCase():r.toLowerCase());/**
 * @license lucide-vue-next v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=e=>{const t=L(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-vue-next v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=({name:e,iconNode:t,absoluteStrokeWidth:r,"absolute-stroke-width":o,strokeWidth:s,"stroke-width":d,size:n=a.width,color:f=a.stroke,...l},{slots:i})=>c("svg",{...a,...l,width:n,height:n,stroke:f,"stroke-width":m(r)||m(o)||r===!0||o===!0?Number(s||d||a["stroke-width"])*24/Number(n):s||d||a["stroke-width"],class:_("lucide",l.class,...e?[`lucide-${p(P(e))}-icon`,`lucide-${p(e)}`]:["lucide-icon"]),...!i.default&&!M(l)&&{"aria-hidden":"true"}},[...t.map(h=>c(...h)),...i.default?[i.default()]:[]]);/**
 * @license lucide-vue-next v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=(e,t)=>(r,{slots:o,attrs:s})=>c(U,{...s,...r,iconNode:t,name:e},o);/**
 * @license lucide-vue-next v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=j("chevron-down",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]),N=w({inheritAttrs:!1,__name:"Select",props:{modelValue:{},modelModifiers:{}},emits:["update:modelValue"],setup(e){const t=v(e,"modelValue");return(r,o)=>(y(),C("div",{class:k(u(B)("relative",r.$attrs.class))},[g($("select",b({"onUpdate:modelValue":o[0]||(o[0]=s=>t.value=s),class:"h-9 w-full appearance-none rounded-rf border border-rf-line bg-white ps-3 pe-10 text-sm text-rf-ink outline-none focus:border-rf-cyan"},{...r.$attrs,class:void 0}),[A(r.$slots,"default")],16),[[V,t.value]]),x(u(D),{class:"pointer-events-none absolute end-3 top-1/2 size-4 -translate-y-1/2 text-rf-ink","aria-hidden":"true"})],2))}});export{D as C,N as _,j as c};
