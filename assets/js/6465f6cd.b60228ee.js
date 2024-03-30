"use strict";(self.webpackChunkfdm_monster_docs=self.webpackChunkfdm_monster_docs||[]).push([[759],{4464:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var r=n(5893),i=n(1151),s=n(2991);const o={title:"Installing",description:"How to install FDM-Monster in your environment",image:"../images/server-running.png",keywords:["fdm-monster","OctoPrint","3d-printing","monsterpi"],sidebar_position:2,id:"installing",permalink:":baseUrl/:docsUrl/:langPart/:versionPart/:id"},l=void 0,a={id:"installing/installing",title:"Installing",description:"How to install FDM-Monster in your environment",source:"@site/docs/0_installing/index.md",sourceDirName:"0_installing",slug:"/installing/",permalink:"/docs/installing/",draft:!1,unlisted:!1,editUrl:"https://github.com/fdm-monster/fdm-monster-docs/docs/0_installing/index.md",tags:[],version:"current",lastUpdatedBy:"David Zwart",lastUpdatedAt:1706641236e3,sidebarPosition:2,frontMatter:{title:"Installing",description:"How to install FDM-Monster in your environment",image:"../images/server-running.png",keywords:["fdm-monster","OctoPrint","3d-printing","monsterpi"],sidebar_position:2,id:"installing",permalink:":baseUrl/:docsUrl/:langPart/:versionPart/:id"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/"},next:{title:"MonsterPi for Raspberry Pi",permalink:"/docs/installing/monsterpi"}},c={},d=[];function u(e){const t={img:"img",p:"p",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Please select your favorite installation method."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"A running instance of FDM Monster 3D Printing Server with the Printing Grid opened.\nOnly one disabled printer is shown on the grid and it&#39;s disabled.\nThe rest of the grid is showing empty tiles.",src:n(6541).Z+"",width:"1754",height:"542"})}),"\n","\n",(0,r.jsx)(s.Z,{})]})}function m(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},2991:(e,t,n)=>{n.d(t,{Z:()=>w});n(7294);var r=n(512),i=n(2802),s=n(3692),o=n(8824),l=n(3919),a=n(5999),c=n(2503);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=n(5893);function m(e){let{href:t,children:n}=e;return(0,u.jsx)(s.Z,{href:t,className:(0,r.Z)("card padding--lg",d.cardContainer),children:n})}function p(e){let{href:t,icon:n,title:i,description:s}=e;return(0,u.jsxs)(m,{href:t,children:[(0,u.jsxs)(c.Z,{as:"h2",className:(0,r.Z)("text--truncate",d.cardTitle),title:i,children:[n," ",i]}),s&&(0,u.jsx)("p",{className:(0,r.Z)("text--truncate",d.cardDescription),title:s,children:s})]})}function g(e){let{item:t}=e;const n=(0,i.LM)(t),r=function(){const{selectMessage:e}=(0,o.c)();return t=>e(t,(0,a.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,u.jsx)(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function f(e){let{item:t}=e;const n=(0,l.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.xz)(t.docId??void 0);return(0,u.jsx)(p,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(f,{item:t});case"category":return(0,u.jsx)(g,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,i.jA)();return(0,u.jsx)(w,{items:n.items,className:t})}function w(e){const{items:t,className:n}=e;if(!t)return(0,u.jsx)(x,{...e});const s=(0,i.MN)(t);return(0,u.jsx)("section",{className:(0,r.Z)("row",n),children:s.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(h,{item:e})},t)))})}},8824:(e,t,n)=>{n.d(t,{c:()=>c});var r=n(7294),i=n(2263);const s=["zero","one","two","few","many","other"];function o(e){return s.filter((t=>e.includes(t)))}const l={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function a(){const{i18n:{currentLocale:e}}=(0,i.Z)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),l}}),[e])}function c(){const e=a();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const i=n.select(t),s=n.pluralForms.indexOf(i);return r[Math.min(s,r.length-1)]}(n,t,e)}}},6541:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/server-running-72c51238faf66b542f9d9aa210f0e5b3.png"},1151:(e,t,n)=>{n.d(t,{a:()=>o});var r=n(7294);const i={},s=r.createContext(i);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}}}]);