"use strict";(self.webpackChunkfdm_monster_docs=self.webpackChunkfdm_monster_docs||[]).push([[772],{137:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>o,toc:()=>u});const o=JSON.parse('{"id":"troubleshooting/index","title":"Troubleshooting","description":"Troubleshooting FDM Monster","source":"@site/docs/troubleshooting/index.mdx","sourceDirName":"troubleshooting","slug":"/troubleshooting","permalink":"/docs/troubleshooting","draft":false,"unlisted":false,"editUrl":"https://github.com/fdm-monster/fdm-monster-docs/edit/main/docs/troubleshooting/index.mdx","tags":[],"version":"current","lastUpdatedBy":"Maurice Kevenaar","lastUpdatedAt":1730641007000,"frontMatter":{"title":"Troubleshooting","description":"Troubleshooting FDM Monster","slug":"/troubleshooting"},"sidebar":"docs","previous":{"title":"Organizing Floors","permalink":"/docs/software_usage/organizing_floors"},"next":{"title":"Log Dump","permalink":"/docs/troubleshooting/log_dump"}}');var r=n(4848),s=n(8453),i=n(9563);const c={title:"Troubleshooting",description:"Troubleshooting FDM Monster",slug:"/troubleshooting"},l=void 0,a={},u=[{value:"Diagnostics",id:"diagnostics",level:2},{value:"Reporting Bugs",id:"reporting-bugs",level:2}];function d(e){const t={a:"a",h2:"h2",p:"p",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"diagnostics",children:"Diagnostics"}),"\n",(0,r.jsx)(t.p,{children:"Sometimes things go wrong. This section contains information about how to diagnose and report problems."}),"\n",(0,r.jsx)(t.h2,{id:"reporting-bugs",children:"Reporting Bugs"}),"\n",(0,r.jsxs)(t.p,{children:["This page can be found on our ",(0,r.jsx)(t.a,{href:"/docs/community/support",children:"Community"})," page."]}),"\n","\n",(0,r.jsx)(i.A,{})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},9563:(e,t,n)=>{n.d(t,{A:()=>b});n(6540);var o=n(4164),r=n(3751),s=n(6289),i=n(1430),c=n(2887),l=n(539),a=n(9303);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(4848);function m(e){let{href:t,children:n}=e;return(0,d.jsx)(s.A,{href:t,className:(0,o.A)("card padding--lg",u.cardContainer),children:n})}function h(e){let{href:t,icon:n,title:r,description:s}=e;return(0,d.jsxs)(m,{href:t,children:[(0,d.jsxs)(a.A,{as:"h2",className:(0,o.A)("text--truncate",u.cardTitle),title:r,children:[n," ",r]}),s&&(0,d.jsx)("p",{className:(0,o.A)("text--truncate",u.cardDescription),title:s,children:s})]})}function g(e){let{item:t}=e;const n=(0,r.Nr)(t),o=function(){const{selectMessage:e}=(0,i.W)();return t=>e(t,(0,l.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,d.jsx)(h,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??o(t.items.length)}):null}function p(e){let{item:t}=e;const n=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,r.cC)(t.docId??void 0);return(0,d.jsx)(h,{href:t.href,icon:n,title:t.label,description:t.description??o?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(p,{item:t});case"category":return(0,d.jsx)(g,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,r.$S)();return(0,d.jsx)(b,{items:n.items,className:t})}function b(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(x,{...e});const s=(0,r.d1)(t);return(0,d.jsx)("section",{className:(0,o.A)("row",n),children:s.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(f,{item:e})},t)))})}},1430:(e,t,n)=>{n.d(t,{W:()=>a});var o=n(6540),r=n(797);const s=["zero","one","two","few","many","other"];function i(e){return s.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,r.A)();return(0,o.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function a(){const e=l();return{selectMessage:(t,n)=>function(e,t,n){const o=e.split("|");if(1===o.length)return o[0];o.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${o.length}: ${e}`);const r=n.select(t),s=n.pluralForms.indexOf(r);return o[Math.min(s,o.length-1)]}(n,t,e)}}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var o=n(6540);const r={},s=o.createContext(r);function i(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);