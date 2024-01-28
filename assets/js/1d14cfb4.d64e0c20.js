"use strict";(self.webpackChunkfdm_monster_docs=self.webpackChunkfdm_monster_docs||[]).push([[784],{3764:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(5893),i=n(1151),s=n(2991);const o={title:"Dev environment setup",description:"How to set up your development environment",image:"../images/server-running.png",keywords:["fdm-monster","OctoPrint","3d-printing","monsterpi"],sidebar_position:3,id:"developer_setup",permalink:":baseUrl/:docsUrl/:langPart/:versionPart/:id"},a=void 0,c={id:"developer_setup/developer_setup",title:"Dev environment setup",description:"How to set up your development environment",source:"@site/docs/1_developer_setup/index.md",sourceDirName:"1_developer_setup",slug:"/developer_setup/",permalink:"/docs/developer_setup/",draft:!1,unlisted:!1,editUrl:"https://github.com/fdm-monster/fdm-monster-docs/docs/1_developer_setup/index.md",tags:[],version:"current",lastUpdatedBy:"Maurice Kevenaar",lastUpdatedAt:1706473608,formattedLastUpdatedAt:"Jan 28, 2024",sidebarPosition:3,frontMatter:{title:"Dev environment setup",description:"How to set up your development environment",image:"../images/server-running.png",keywords:["fdm-monster","OctoPrint","3d-printing","monsterpi"],sidebar_position:3,id:"developer_setup",permalink:":baseUrl/:docsUrl/:langPart/:versionPart/:id"},sidebar:"tutorialSidebar",previous:{title:"Linux Service",permalink:"/docs/installing/linux_service"},next:{title:"Server setup",permalink:"/docs/developer_setup/setup_server"}},d={},l=[{value:"Making Changes to FDM Monster",id:"making-changes-to-fdm-monster",level:2}];function u(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"For Developing we advise using a Windows or Linux machine with at least 8GB of memory and a modern CPU."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"The NodeJS server and Vue client can be run on any platform that supports NodeJS."}),"\n",(0,r.jsx)(t.li,{children:"The server can be run on a Raspberry Pi, Windows, Linux, or Mac."}),"\n",(0,r.jsx)(t.li,{children:"The client can be run on any platform that supports a modern web browser."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"making-changes-to-fdm-monster",children:"Making Changes to FDM Monster"}),"\n",(0,r.jsxs)(t.p,{children:["If you wish to contribute to the FDM Monster project and make changes to the codebase, please follow the guidelines outlined in the ",(0,r.jsx)(t.a,{href:"https://github.com/fdm-monster/fdm-monster/blob/develop/CONTRIBUTING.md",children:"CONTRIBUTING.MD"})," file."]}),"\n",(0,r.jsx)(t.p,{children:"In summary:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"create an issue"}),"\n",(0,r.jsx)(t.li,{children:"fork the repository"}),"\n",(0,r.jsx)(t.li,{children:"make your changes in a descriptive branch"}),"\n",(0,r.jsxs)(t.li,{children:["submit a pull request targeting the ",(0,r.jsx)(t.code,{children:"develop"})," branch."]}),"\n"]}),"\n","\n","\n",(0,r.jsx)(s.Z,{})]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},2991:(e,t,n)=>{n.d(t,{Z:()=>x});n(7294);var r=n(512),i=n(2802),s=n(3692),o=n(3919),a=n(5999),c=n(2503);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var l=n(5893);function u(e){let{href:t,children:n}=e;return(0,l.jsx)(s.Z,{href:t,className:(0,r.Z)("card padding--lg",d.cardContainer),children:n})}function p(e){let{href:t,icon:n,title:i,description:s}=e;return(0,l.jsxs)(u,{href:t,children:[(0,l.jsxs)(c.Z,{as:"h2",className:(0,r.Z)("text--truncate",d.cardTitle),title:i,children:[n," ",i]}),s&&(0,l.jsx)("p",{className:(0,r.Z)("text--truncate",d.cardDescription),title:s,children:s})]})}function m(e){let{item:t}=e;const n=(0,i.LM)(t);return n?(0,l.jsx)(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,a.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const n=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.xz)(t.docId??void 0);return(0,l.jsx)(p,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return(0,l.jsx)(h,{item:t});case"category":return(0,l.jsx)(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function v(e){let{className:t}=e;const n=(0,i.jA)();return(0,l.jsx)(x,{items:n.items,className:t})}function x(e){const{items:t,className:n}=e;if(!t)return(0,l.jsx)(v,{...e});const s=(0,i.MN)(t);return(0,l.jsx)("section",{className:(0,r.Z)("row",n),children:s.map(((e,t)=>(0,l.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,l.jsx)(f,{item:e})},t)))})}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>o});var r=n(7294);const i={},s=r.createContext(i);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);