"use strict";(self.webpackChunkfdm_monster_docs=self.webpackChunkfdm_monster_docs||[]).push([[4994],{7297:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"installing/index","title":"Installing","description":"How to install FDM-Monster in your environment","source":"@site/docs/installing/index.mdx","sourceDirName":"installing","slug":"/installing","permalink":"/docs/installing","draft":false,"unlisted":false,"editUrl":"https://github.com/fdm-monster/fdm-monster-docs/edit/main/docs/installing/index.mdx","tags":[],"version":"current","lastUpdatedBy":"Maurice Kevenaar","lastUpdatedAt":1730641007000,"frontMatter":{"title":"Installing","description":"How to install FDM-Monster in your environment","slug":"/installing"},"sidebar":"docs","previous":{"title":"Introduction","permalink":"/docs/"},"next":{"title":"MonsterPi for Raspberry Pi","permalink":"/docs/installing/monsterpi"}}');var s=n(4848),i=n(8453),o=n(9563);const l={title:"Installing",description:"How to install FDM-Monster in your environment",slug:"/installing"},c=void 0,a={},d=[];function u(e){const t={img:"img",p:"p",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Please select your favorite installation method."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"A running instance of FDM Monster 3D Printing Server with the Printing Grid opened.\nOnly one disabled printer is shown on the grid and it&#39;s disabled.\nThe rest of the grid is showing empty tiles.",src:n(7538).A+"",width:"1266",height:"482"})}),"\n","\n",(0,s.jsx)(o.A,{})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},9563:(e,t,n)=>{n.d(t,{A:()=>j});n(6540);var r=n(4164),s=n(3751),i=n(6289),o=n(1430),l=n(2887),c=n(539),a=n(9303);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=n(4848);function m(e){let{href:t,children:n}=e;return(0,u.jsx)(i.A,{href:t,className:(0,r.A)("card padding--lg",d.cardContainer),children:n})}function p(e){let{href:t,icon:n,title:s,description:i}=e;return(0,u.jsxs)(m,{href:t,children:[(0,u.jsxs)(a.A,{as:"h2",className:(0,r.A)("text--truncate",d.cardTitle),title:s,children:[n," ",s]}),i&&(0,u.jsx)("p",{className:(0,r.A)("text--truncate",d.cardDescription),title:i,children:i})]})}function f(e){let{item:t}=e;const n=(0,s.Nr)(t),r=function(){const{selectMessage:e}=(0,o.W)();return t=>e(t,(0,c.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,u.jsx)(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function h(e){let{item:t}=e;const n=(0,l.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,s.cC)(t.docId??void 0);return(0,u.jsx)(p,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(h,{item:t});case"category":return(0,u.jsx)(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,s.$S)();return(0,u.jsx)(j,{items:n.items,className:t})}function j(e){const{items:t,className:n}=e;if(!t)return(0,u.jsx)(x,{...e});const i=(0,s.d1)(t);return(0,u.jsx)("section",{className:(0,r.A)("row",n),children:i.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(g,{item:e})},t)))})}},1430:(e,t,n)=>{n.d(t,{W:()=>a});var r=n(6540),s=n(797);const i=["zero","one","two","few","many","other"];function o(e){return i.filter((t=>e.includes(t)))}const l={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),l}}),[e])}function a(){const e=c();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const s=n.select(t),i=n.pluralForms.indexOf(s);return r[Math.min(i,r.length-1)]}(n,t,e)}}},7538:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/server-running-cc0cf76fc0aadf0c531b42712b564e4b.png"},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var r=n(6540);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);