import{r as I,d as w,u as E,a as s,b as V,c as n,w as g,o as k,e as x,D as B,f as R,g as S,h as y,n as D}from"./index-Cy9i9ygC.js";window._VIY_MENU_VERSION_="2.1.1";const M=["element-loading-text"],N=["src"],P=w({name:"FrameView",__name:"frameView",props:{frameInfo:{}},setup(_){var u,m,c;const r=_,{t:h}=E(),o=s(!0),t=V(),l=s(""),i=s(null);(u=n(t.meta))!=null&&u.frameSrc&&(l.value=(m=n(t.meta))==null?void 0:m.frameSrc),((c=n(t.meta))==null?void 0:c.frameLoading)===!1&&f();function f(){o.value=!1}function p(){D(()=>{const e=n(i);if(!e)return;const a=e;a.attachEvent?a.attachEvent("onload",()=>{f()}):e.onload=()=>{f()}})}return g(()=>t.fullPath,e=>{var a,d,v;t.name==="Redirect"&&e.includes((a=r.frameInfo)==null?void 0:a.fullPath)&&(l.value=e,o.value=!0),((d=r.frameInfo)==null?void 0:d.fullPath)===e&&(l.value=(v=r.frameInfo)==null?void 0:v.frameSrc)}),k(()=>{p()}),(e,a)=>x((R(),S("div",{class:"frame","element-loading-text":n(h)("viy.menu.load")},[y("iframe",{ref_key:"frameRef",ref:i,src:l.value,class:"frame-iframe"},null,8,N)],8,M)),[[n(B),o.value]])}}),j=I(P,[["__scopeId","data-v-be0a88da"]]);export{j as default};
