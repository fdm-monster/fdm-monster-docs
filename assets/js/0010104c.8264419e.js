"use strict";(self.webpackChunkfdm_monster_docs=self.webpackChunkfdm_monster_docs||[]).push([[472],{1677:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>a});var r=i(5893),s=i(1151);const t={title:"Linux Service",description:"How to use a Linux service for your FDM-Monster environment (deprecated)",image:"../images/server-running.png",keywords:["fdm-monster","OctoPrint","3d-printing","monsterpi"],sidebar_position:4,id:"linux_service",permalink:":baseUrl/:docsUrl/:langPart/:versionPart/installing/:id"},o=void 0,l={id:"installing/linux_service",title:"Linux Service",description:"How to use a Linux service for your FDM-Monster environment (deprecated)",source:"@site/docs/0_installing/linux_service.md",sourceDirName:"0_installing",slug:"/installing/linux_service",permalink:"/docs/installing/linux_service",draft:!1,unlisted:!1,editUrl:"https://github.com/fdm-monster/fdm-monster-docs/docs/0_installing/linux_service.md",tags:[],version:"current",lastUpdatedBy:"David Zwart",lastUpdatedAt:1706642443e3,sidebarPosition:4,frontMatter:{title:"Linux Service",description:"How to use a Linux service for your FDM-Monster environment (deprecated)",image:"../images/server-running.png",keywords:["fdm-monster","OctoPrint","3d-printing","monsterpi"],sidebar_position:4,id:"linux_service",permalink:":baseUrl/:docsUrl/:langPart/:versionPart/installing/:id"},sidebar:"tutorialSidebar",previous:{title:"Windows Service",permalink:"/docs/installing/windows_service"},next:{title:"Dev environment setup",permalink:"/docs/developer_setup/"}},d={},a=[{value:"Preparation of the Linux Service installation",id:"preparation-of-the-linux-service-installation",level:2},{value:"Installation of the service",id:"installation-of-the-service",level:2},{value:"Configuring server environment",id:"configuring-server-environment",level:2},{value:"Updating the server",id:"updating-the-server",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.admonition,{type:"danger",children:[(0,r.jsx)(n.p,{children:"The Linux service installation is deprecated!"}),(0,r.jsx)(n.p,{children:"Documentation for the Linux Service is provided as-is and will not be supported."})]}),"\n",(0,r.jsxs)(n.p,{children:["The scripts on this page are available on GitHub in ",(0,r.jsx)(n.a,{href:"https://github.com/fdm-monster/fdm-monster/tree/main/installations/fdm-monster-node-linux",children:"installations/fdm-monster-node-linux"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.img,{alt:"A running instance of FDM Monster 3D Printing Server with the Printing Grid opened.\nOnly one disabled printer is shown on the grid and it&#39;s disabled.\nThe rest of the grid is showing empty tiles.",src:i(6541).Z+"",width:"1754",height:"542"}),"\n",(0,r.jsxs)(n.em,{children:["This is the FDM Monster web app after installation (visit ",(0,r.jsx)(n.a,{href:"http://127.0.0.1:4000",children:"http://127.0.0.1:4000"}),")"]})]}),"\n",(0,r.jsx)(n.h2,{id:"preparation-of-the-linux-service-installation",children:"Preparation of the Linux Service installation"}),"\n",(0,r.jsx)(n.p,{children:"Please ensure the following dependencies are installed and working:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"NodeJS 18 or higher"}),"\n",(0,r.jsx)(n.li,{children:"MongoDB 4.4 or higher"}),"\n",(0,r.jsx)(n.li,{children:"git"}),"\n",(0,r.jsx)(n.li,{children:"yarn (npm package)"}),"\n",(0,r.jsx)(n.li,{children:"FDM monster source files (GitHub cloned source code)"}),"\n",(0,r.jsx)(n.li,{children:"node-linux (npm package)"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"installation-of-the-service",children:"Installation of the service"}),"\n",(0,r.jsx)(n.p,{children:"Please ensure that:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"You've cloned the repository"}),"\n",(0,r.jsxs)(n.li,{children:["Changed directory to ",(0,r.jsx)(n.a,{href:"https://github.com/fdm-monster/fdm-monster/tree/main/installations/fdm-monster-node-linux",children:"installations/fdm-monster-node-linux"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"yarn"})," dependencies are installed in ",(0,r.jsx)(n.code,{children:"fdm-monster/server/"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"npm"})," dependencies are installed in ",(0,r.jsx)(n.code,{children:"fdm-monster-node-linux/"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Please ensure the service is installed (executed inside ",(0,r.jsx)(n.code,{children:"fdm-monster-node-linux"}),"):"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm i\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This will call ",(0,r.jsx)(n.code,{children:"node ./install-fdm-monster.js"})," indirectly."]}),"\n",(0,r.jsx)(n.h2,{id:"configuring-server-environment",children:"Configuring server environment"}),"\n",(0,r.jsx)(n.p,{children:"The server has configuration options that allow changing how it operates. Warning, wrong configuration might cause the\nserver unable to correctly startup."}),"\n",(0,r.jsx)(n.p,{children:"Each configuration change requires you to run the update script:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm i\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Please read the ",(0,r.jsx)(n.a,{href:"/docs/configuration/preconfiguration",children:"Environment configuration"})," section for adjusting the ",(0,r.jsx)(n.code,{children:".env"})," file."]}),"\n",(0,r.jsx)(n.h2,{id:"updating-the-server",children:"Updating the server"}),"\n",(0,r.jsxs)(n.p,{children:["The server is easily updated with the provided script ",(0,r.jsx)(n.code,{children:"update-fdm-monster.sh"}),".\nYou will need to run this with elevation:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo bash ./update-fdm-monster.sh\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},6541:(e,n,i)=>{i.d(n,{Z:()=>r});const r=i.p+"assets/images/server-running-72c51238faf66b542f9d9aa210f0e5b3.png"},1151:(e,n,i)=>{i.d(n,{a:()=>o});var r=i(7294);const s={},t=r.createContext(s);function o(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}}}]);