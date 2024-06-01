"use strict";(self.webpackChunkfdm_monster_docs=self.webpackChunkfdm_monster_docs||[]).push([[254],{6250:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=n(4848),s=n(8453),o=n(3514);const i={title:"Dev environment setup",description:"How to set up your development environment",image:"../images/server-running.png",keywords:["fdm-monster","OctoPrint","3d-printing","monsterpi"],sidebar_position:3,id:"developer_setup",permalink:":baseUrl/:docsUrl/:langPart/:versionPart/:id"},l=void 0,c={id:"developer_setup/developer_setup",title:"Dev environment setup",description:"How to set up your development environment",source:"@site/docs/1_developer_setup/index.md",sourceDirName:"1_developer_setup",slug:"/developer_setup/",permalink:"/docs/developer_setup/",draft:!1,unlisted:!1,editUrl:"https://github.com/fdm-monster/fdm-monster-docs/docs/1_developer_setup/index.md",tags:[],version:"current",lastUpdatedBy:"David Zwart",lastUpdatedAt:171287216e4,sidebarPosition:3,frontMatter:{title:"Dev environment setup",description:"How to set up your development environment",image:"../images/server-running.png",keywords:["fdm-monster","OctoPrint","3d-printing","monsterpi"],sidebar_position:3,id:"developer_setup",permalink:":baseUrl/:docsUrl/:langPart/:versionPart/:id"},sidebar:"tutorialSidebar",previous:{title:"Linux Service",permalink:"/docs/installing/linux_service"},next:{title:"Server setup",permalink:"/docs/developer_setup/setup_server"}},a={},d=[{value:"Making Changes to FDM Monster",id:"making-changes-to-fdm-monster",level:2}];function u(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"For Developing we advise using a Windows or Linux machine with at least 8GB of memory and a modern CPU."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"The Node.js server and Vue client can be run on any platform that supports Node.js."}),"\n",(0,r.jsx)(t.li,{children:"The server can be run on a Raspberry Pi, Windows, Linux, or Mac."}),"\n",(0,r.jsx)(t.li,{children:"The client can be run on any platform that supports a modern web browser."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"making-changes-to-fdm-monster",children:"Making Changes to FDM Monster"}),"\n",(0,r.jsxs)(t.p,{children:["If you wish to contribute to the FDM Monster project and make changes to the codebase, please follow the guidelines outlined in the ",(0,r.jsx)(t.a,{href:"https://github.com/fdm-monster/fdm-monster/blob/develop/CONTRIBUTING.md",children:"CONTRIBUTING.MD"})," file."]}),"\n",(0,r.jsx)(t.p,{children:"In summary:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"create an issue"}),"\n",(0,r.jsx)(t.li,{children:"fork the repository"}),"\n",(0,r.jsx)(t.li,{children:"make your changes in a descriptive branch"}),"\n",(0,r.jsxs)(t.li,{children:["submit a pull request targeting the ",(0,r.jsx)(t.code,{children:"develop"})," branch."]}),"\n"]}),"\n","\n",(0,r.jsx)(o.A,{})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},3514:(e,t,n)=>{n.d(t,{A:()=>x});n(6540);var r=n(4164),s=n(1754),o=n(8774),i=n(5846),l=n(6654),c=n(1312),a=n(1107);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=n(4848);function m(e){let{href:t,children:n}=e;return(0,u.jsx)(o.A,{href:t,className:(0,r.A)("card padding--lg",d.cardContainer),children:n})}function p(e){let{href:t,icon:n,title:s,description:o}=e;return(0,u.jsxs)(m,{href:t,children:[(0,u.jsxs)(a.A,{as:"h2",className:(0,r.A)("text--truncate",d.cardTitle),title:s,children:[n," ",s]}),o&&(0,u.jsx)("p",{className:(0,r.A)("text--truncate",d.cardDescription),title:o,children:o})]})}function h(e){let{item:t}=e;const n=(0,s.Nr)(t),r=function(){const{selectMessage:e}=(0,i.W)();return t=>e(t,(0,c.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,u.jsx)(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function f(e){let{item:t}=e;const n=(0,l.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,s.cC)(t.docId??void 0);return(0,u.jsx)(p,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(f,{item:t});case"category":return(0,u.jsx)(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function v(e){let{className:t}=e;const n=(0,s.$S)();return(0,u.jsx)(x,{items:n.items,className:t})}function x(e){const{items:t,className:n}=e;if(!t)return(0,u.jsx)(v,{...e});const o=(0,s.d1)(t);return(0,u.jsx)("section",{className:(0,r.A)("row",n),children:o.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(g,{item:e})},t)))})}},5846:(e,t,n)=>{n.d(t,{W:()=>a});var r=n(6540),s=n(4586);const o=["zero","one","two","few","many","other"];function i(e){return o.filter((t=>e.includes(t)))}const l={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),l}}),[e])}function a(){const e=c();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const s=n.select(t),o=n.pluralForms.indexOf(s);return r[Math.min(o,r.length-1)]}(n,t,e)}}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var r=n(6540);const s={},o=r.createContext(s);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);