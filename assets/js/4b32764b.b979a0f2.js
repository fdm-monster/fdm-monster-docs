"use strict";(self.webpackChunkfdm_monster_docs=self.webpackChunkfdm_monster_docs||[]).push([[26],{2336:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var s=i(5893),t=i(1151);const o={title:"Windows Service",description:"How to use a Windows service for your FDM-Monster environment (deprecated)",image:"../images/server-running.png",keywords:["fdm-monster","OctoPrint","3d-printing","monsterpi"],sidebar_position:3,id:"windows_service",permalink:":baseUrl/:docsUrl/:langPart/:versionPart/installing/:id"},r=void 0,l={id:"installing/windows_service",title:"Windows Service",description:"How to use a Windows service for your FDM-Monster environment (deprecated)",source:"@site/docs/0_installing/windows_service.md",sourceDirName:"0_installing",slug:"/installing/windows_service",permalink:"/docs/installing/windows_service",draft:!1,unlisted:!1,editUrl:"https://github.com/fdm-monster/fdm-monster-docs/docs/0_installing/windows_service.md",tags:[],version:"current",lastUpdatedBy:"David Zwart",lastUpdatedAt:1706642443,formattedLastUpdatedAt:"Jan 30, 2024",sidebarPosition:3,frontMatter:{title:"Windows Service",description:"How to use a Windows service for your FDM-Monster environment (deprecated)",image:"../images/server-running.png",keywords:["fdm-monster","OctoPrint","3d-printing","monsterpi"],sidebar_position:3,id:"windows_service",permalink:":baseUrl/:docsUrl/:langPart/:versionPart/installing/:id"},sidebar:"tutorialSidebar",previous:{title:"Docker and Docker Compose",permalink:"/docs/installing/docker_compose"},next:{title:"Linux Service",permalink:"/docs/installing/linux_service"}},d={},a=[{value:"Preparation for the Windows service installation",id:"preparation-for-the-windows-service-installation",level:2},{value:"Caveats",id:"caveats",level:3},{value:"Step 1: Installing NodeJS 18+",id:"step-1-installing-nodejs-18",level:3},{value:"Step 2: Installing MongoDB 5+",id:"step-2-installing-mongodb-5",level:3},{value:"Step 2b: (Optional)",id:"step-2b-optional",level:3},{value:"Step 3: Installing Git",id:"step-3-installing-git",level:3},{value:"Step 4: Downloading FDM Monster",id:"step-4-downloading-fdm-monster",level:3},{value:"Step 5: Checking the service",id:"step-5-checking-the-service",level:3},{value:"Updating the service",id:"updating-the-service",level:2},{value:"Uninstalling the service",id:"uninstalling-the-service",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.admonition,{type:"danger",children:[(0,s.jsx)(n.p,{children:"The Windows service installation is deprecated!"}),(0,s.jsx)(n.p,{children:"Documentation for the Windows service is provided as-is and will not be supported."})]}),"\n",(0,s.jsx)(n.p,{children:"If you're not an experienced user, you might find some of the steps below challenging. However, if you follow them\ncarefully, you'll be able to install FDM Monster as a Windows service on your machine."}),"\n",(0,s.jsxs)(n.p,{children:["The installation scripts are available\nin ",(0,s.jsx)(n.a,{href:"https://github.com/fdm-monster/fdm-monster/tree/main/installations/fdm-monster-node-windows",children:"installations/fdm-monster-node-windows"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{alt:"A running instance of FDM Monster 3D Printing Server with the Printing Grid opened.\nOnly one disabled printer is shown on the grid and it&#39;s disabled.\nThe rest of the grid is showing empty tiles.",src:i(6541).Z+"",width:"1754",height:"542"}),"\n",(0,s.jsxs)(n.em,{children:["This is the FDM Monster web app after installation (visit ",(0,s.jsx)(n.a,{href:"http://localhost:4000",children:"http://localhost:4000"}),")"]})]}),"\n",(0,s.jsx)(n.h2,{id:"preparation-for-the-windows-service-installation",children:"Preparation for the Windows service installation"}),"\n",(0,s.jsx)(n.p,{children:"The following steps will install:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"NodeJS 18 or higher"}),"\n",(0,s.jsx)(n.li,{children:"MongoDB 4.4 or higher"}),"\n",(0,s.jsx)(n.li,{children:"git"}),"\n",(0,s.jsx)(n.li,{children:"yarn (npm package)"}),"\n",(0,s.jsx)(n.li,{children:"FDM monster source files (GitHub cloned source code)"}),"\n",(0,s.jsx)(n.li,{children:"node-windows (npm package)"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"caveats",children:"Caveats"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Internet access is required"}),"\n",(0,s.jsx)(n.li,{children:"Windows only (if you use Linux, please use Docker)"}),"\n",(0,s.jsx)(n.li,{children:"Pay attention to versions (e.g., NodeJS 18)"}),"\n",(0,s.jsxs)(n.li,{children:["Understand PowerShell execution policy: ",(0,s.jsx)(n.code,{children:"Set-ExecutionPolicy -ExecutionPolicy Unrestricted"})," will allow anything to\nrun."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"step-1-installing-nodejs-18",children:"Step 1: Installing NodeJS 18+"}),"\n",(0,s.jsxs)(n.p,{children:["Install NodeJS LTS (long-term support) from ",(0,s.jsx)(n.a,{href:"https://nodejs.org/en/download",children:"https://nodejs.org/en/download"}),". At the\ntime of writing, this is Node 18. The FDM Monster server requires NodeJS 18 LTS or higher."]}),"\n",(0,s.jsx)(n.p,{children:"To check whether Node is installed properly, execute this in Command Prompt or PowerShell:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-powershell",children:"node -v\n"})}),"\n",(0,s.jsx)(n.p,{children:"The output should be:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-powershell",children:"PS C:\\Users\\SomeUser> node -v\nv18.14.2\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"step-2-installing-mongodb-5",children:"Step 2: Installing MongoDB 5+"}),"\n",(0,s.jsxs)(n.p,{children:["Install MongoDB Community Edition\nfrom ",(0,s.jsx)(n.a,{href:"https://www.mongodb.com/try/download/community",children:"https://www.mongodb.com/try/download/community"}),".\nYou can use ",(0,s.jsx)(n.a,{href:"https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-6.0.5-signed.msi",children:"this URL"})," to download the\nMongoDB installation setup\nif the previous link doesn't work."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"step-2b-optional",children:"Step 2b: (Optional)"}),"\n",(0,s.jsxs)(n.p,{children:["If you're an experienced user, you might want to install\nthe ",(0,s.jsx)(n.a,{href:"https://www.mongodb.com/developer-tools",children:"MongoDB Developer Tools"}),", which provide extra tools to get insight into\nyour database. The following tools might be of interest:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://www.mongodb.com/products/compass",children:"Compass"}),": Connects to your database and query/adjust collections or\ndocuments."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://www.mongodb.com/products/vs-code",children:"MongoDB VS Code Extension"}),": Connects to your database inside VS Code and\nallows you to see/adjust data in place."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://www.mongodb.com/products/shell",children:"MongoDB Shell"}),": Provides shell access to the database. For advanced users\nonly!"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"step-3-installing-git",children:"Step 3: Installing Git"}),"\n",(0,s.jsxs)(n.p,{children:["Prepare the installation by ensuring you have Git installed. This will help you in updating FDM Monster in the future.\nFind it here: ",(0,s.jsx)(n.a,{href:"https://git-scm.com/downloads",children:"Git Download"})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"step-4-downloading-fdm-monster",children:"Step 4: Downloading FDM Monster"}),"\n",(0,s.jsxs)(n.p,{children:["From now on we will be working inside the Powershell (preferred), or Command Prompt (CMD). You should ",(0,s.jsx)(n.strong,{children:"not"})," use\nAdministrator mode."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-powershell",children:"Invoke-WebRequest -Uri https://raw.githubusercontent.com/fdm-monster/fdm-monster/develop/installations/fdm-monster-node-windows/download-fdm-monster-server.ps1 -OutFile .\\download-fdm-monster-server.ps1\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Please download this script in the preferred location where you want to install FDM Monster. For\nexample, ",(0,s.jsx)(n.code,{children:"C:\\Users\\User1\\fdm-monster-service\\"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Followed by:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-powershell",children:"./download-fdm-monster-server.ps1\n"})}),"\n",(0,s.jsxs)(n.p,{children:["During these steps, the server will not be available for a short while. Please\ncheck ",(0,s.jsx)(n.a,{href:"#step-5-checking-the-service",children:"Step 5"})," to verify whether your service is running.\nIf no errors occurred, FDM Monster should be running!"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"step-5-checking-the-service",children:"Step 5: Checking the service"}),"\n",(0,s.jsxs)(n.p,{children:["You've installed ",(0,s.jsx)(n.code,{children:"fdmmonster.exe"})," using node-windows. Great! You should be able to check the service ",(0,s.jsx)(n.code,{children:"fdmmonster.exe"}),"\ncontaining the description ",(0,s.jsx)(n.code,{children:"FDM Monster"})," in Task Manager.\nThe service should have `Status: Running``. If this is not the case, something went wrong. Reach out to us\nvia ",(0,s.jsx)(n.a,{href:"https://discord.gg/mwA8uP8CMc",children:"Discord"})," for more help!"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Windows Task Manager showing the Services tab on which a service named fdmmonster.exe is showing status Running",src:i(4233).Z+"",width:"661",height:"132"})}),"\n",(0,s.jsxs)(n.p,{children:["If things are working, you can open FDM Monster with this URL: ",(0,s.jsx)(n.a,{href:"http://localhost:4000",children:"http://localhost:4000"}),"\nor ",(0,s.jsx)(n.a,{href:"http://127.0.0.1:4000",children:"http://127.0.0.1:4000"}),"."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"updating-the-service",children:"Updating the service"}),"\n",(0,s.jsxs)(n.p,{children:["Updating the service is possible through a PowerShell, similar to the installation. Please open a Powershell window *\n",(0,s.jsx)(n.em,{children:"without Administrator rights"}),"*."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-powershell",children:"Invoke-WebRequest -Uri https://raw.githubusercontent.com/fdm-monster/fdm-monster/develop/installations/fdm-monster-node-windows/update-fdm-monster.ps1 -OutFile .\\update-fdm-monster.ps1\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Please download this script in the preferred location where you have downloaded the installation script for installing\nFDM Monster previously.\nFor example, ",(0,s.jsx)(n.code,{children:"C:\\Users\\User1\\fdm-monster-service\\"}),", but not ",(0,s.jsx)(n.code,{children:"C:\\Users\\User1\\fdm-monster-service\\fdm-monster\\"}),"!"]}),"\n",(0,s.jsx)(n.p,{children:"Followed by:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-powershell",children:"./update-fdm-monster.ps1\n"})}),"\n",(0,s.jsx)(n.p,{children:"The script should succeed with your FDM Monster server running again. Please have patience, as the server will not be\navailable for a short while."}),"\n",(0,s.jsx)(n.h2,{id:"uninstalling-the-service",children:"Uninstalling the service"}),"\n",(0,s.jsx)(n.p,{children:"Uninstalling the service is possible through a Powershell script."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-powershell",children:"Invoke-WebRequest -Uri https://raw.githubusercontent.com/fdm-monster/fdm-monster/develop/installations/fdm-monster-node-windows/uninstall-fdm-monster.ps1 -OutFile .\\uninstall-fdm-monster.ps1\n"})}),"\n",(0,s.jsx)(n.p,{children:"Run the script as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-powershell",children:"./uninstall-fdm-monster.ps1\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Please continue to ",(0,s.jsx)(n.a,{href:"/docs/configuration/preconfiguration",children:"Environment configuration"})," to change the environment\nconfiguration of the FDM Monster server."]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},6541:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/server-running-72c51238faf66b542f9d9aa210f0e5b3.png"},4233:(e,n,i)=>{i.d(n,{Z:()=>s});const s="data:image/png;base64,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"},1151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>r});var s=i(7294);const t={},o=s.createContext(t);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);