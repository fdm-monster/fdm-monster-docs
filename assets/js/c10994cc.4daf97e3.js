"use strict";(self.webpackChunkfdm_monster_docs=self.webpackChunkfdm_monster_docs||[]).push([[696],{2887:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>a,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var s=r(5893),t=r(1151);const i={title:"Server setup",description:"Setup the FDM Monster Server for Development",image:"../images/server-running.png",keywords:["fdm-monster","OctoPrint","3d-printing","monsterpi"],sidebar_position:1,id:"setup_server",permalink:":baseUrl/:docsUrl/:langPart/:versionPart/:id"},o=void 0,l={id:"developer_setup/setup_server",title:"Server setup",description:"Setup the FDM Monster Server for Development",source:"@site/docs/1_developer_setup/setup_server.md",sourceDirName:"1_developer_setup",slug:"/developer_setup/setup_server",permalink:"/docs/developer_setup/setup_server",draft:!1,unlisted:!1,editUrl:"https://github.com/fdm-monster/fdm-monster-docs/docs/1_developer_setup/setup_server.md",tags:[],version:"current",lastUpdatedBy:"Maurice Kevenaar",lastUpdatedAt:1706473608,formattedLastUpdatedAt:"Jan 28, 2024",sidebarPosition:1,frontMatter:{title:"Server setup",description:"Setup the FDM Monster Server for Development",image:"../images/server-running.png",keywords:["fdm-monster","OctoPrint","3d-printing","monsterpi"],sidebar_position:1,id:"setup_server",permalink:":baseUrl/:docsUrl/:langPart/:versionPart/:id"},sidebar:"tutorialSidebar",previous:{title:"Dev environment setup",permalink:"/docs/developer_setup/"},next:{title:"Client setup",permalink:"/docs/developer_setup/setup_client"}},d={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Clone the Repository",id:"clone-the-repository",level:2},{value:"Setting Up the Development Environment",id:"setting-up-the-development-environment",level:2},{value:"VS Code Run Configuration",id:"vs-code-run-configuration",level:2},{value:"WebStorm Run Configuration",id:"webstorm-run-configuration",level:2},{value:"Next Steps",id:"next-steps",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsx)(n.p,{children:"This chapter focuses solely on installing the server component!"}),(0,s.jsxs)(n.p,{children:["If you want to run the FDM Monster Vue project (client) as well, please refer to the ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"/docs/developer_setup/setup_client",children:"Client Setup"})})," guide."]})]}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(n.p,{children:"Before you begin, ensure that you have the following tools installed on your system:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Node.js 18 LTS"}),"\n",(0,s.jsx)(n.li,{children:"Yarn 1.22.0 or higher"}),"\n",(0,s.jsx)(n.li,{children:"MongoDB 5 or higher"}),"\n",(0,s.jsx)(n.li,{children:"MongoDB Compass"}),"\n",(0,s.jsx)(n.li,{children:"VS Code or WebStorm (your choice of IDE)"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"clone-the-repository",children:"Clone the Repository"}),"\n",(0,s.jsxs)(n.p,{children:["To get started, clone the FDM Monster repository from GitHub. Make sure to clone the ",(0,s.jsx)(n.code,{children:"develop"})," branch"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git clone -b develop https://github.com/fdm-monster/fdm-monster.git\n"})}),"\n",(0,s.jsx)(n.h2,{id:"setting-up-the-development-environment",children:"Setting Up the Development Environment"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Navigate to the ",(0,s.jsx)(n.code,{children:"server"})," folder inside the freshly cloned repository"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd fdm-monster/server\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["If you haven't installed ",(0,s.jsx)(n.code,{children:"yarn"})," yet, install ",(0,s.jsx)(n.code,{children:"yarn"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm install -g yarn\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Install the dependencies using ",(0,s.jsx)(n.code,{children:"yarn"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"yarn install\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Configure the environment variables by creating a .env file in the project root directory. You can use the provided ",(0,s.jsx)(n.code,{children:".env.template"})," file as a template."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Start the MongoDB server and make sure it is running."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Launch the FDM Monster server:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["VS Code: Create a run configuration that executes ",(0,s.jsx)(n.code,{children:"yarn run dev"})," as the command. (See ",(0,s.jsx)(n.a,{href:"#vs-code-run-configuration",children:"VS Code Run Configuration"})," for detailed steps.)"]}),"\n",(0,s.jsxs)(n.li,{children:["WebStorm: Create a run configuration that executes ",(0,s.jsx)(n.code,{children:"yarn run dev"})," as the command. (See ",(0,s.jsx)(n.a,{href:"#webstorm-run-configuration",children:"WebStorm Run Configuration"})," for detailed steps.)"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Access the running server at ",(0,s.jsx)(n.a,{href:"http://localhost:4000",children:"http://localhost:4000"})," in your preferred web browser."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"vs-code-run-configuration",children:"VS Code Run Configuration"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:'If the file ".vscode/launch.json" exists and looks correct, you can skip steps 2 to 4.'})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Open VS Code and navigate to the ",(0,s.jsx)(n.strong,{children:'"Run and Debug"'})," panel."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click on the link ",(0,s.jsx)(n.code,{children:"create a launch.json file"})," to open the ",(0,s.jsx)(n.code,{children:"launch.json"})," file. You should select Node.js as the type. If this does not work, you can manually create the file in the ",(0,s.jsx)(n.code,{children:".vscode"})," folder in the project root directory."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Paste the JSON content provided below into the ",(0,s.jsx)(n.code,{children:"launch.json"})," file:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "version": "0.2.0",\n  "configurations": [\n    {\n      "name": "FDM Monster Server (dev)",\n      "type": "node",\n      "request": "launch",\n      "runtimeExecutable": "yarn",\n      "runtimeArgs": [\n        "run",\n        "dev"\n      ],\n      "cwd": "${workspaceFolder}/server",\n      "protocol": "inspector",\n      "restart": true,\n      "console": "integratedTerminal"\n    }\n  ]\n}\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Save the configuration and close the ",(0,s.jsx)(n.code,{children:"launch.json"})," file."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.strong,{children:'"Run and Debug"'})," panel, select ",(0,s.jsx)(n.strong,{children:'"FDM Monster Server (dev)"'})," from the dropdown."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click on the ",(0,s.jsx)(n.strong,{children:'"Start Debugging"'})," button or press ",(0,s.jsx)("kbd",{children:"F5"})," to launch the server. Alternatively, you can click on the green\nplay button or press Ctrl + F5 to launch the server without debugging."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{alt:"Screenshot that shows the VS Code setup in action",src:r(6361).Z+"",width:"1461",height:"1027"}),"\n",(0,s.jsx)(n.em,{children:"Screenshot that shows the VS Code setup in action."})]}),"\n",(0,s.jsx)(n.h2,{id:"webstorm-run-configuration",children:"WebStorm Run Configuration"}),"\n",(0,s.jsx)(n.p,{children:"To create a run configuration in WebStorm for running the FDM Monster server, follow these steps:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Open WebStorm and go to the ",(0,s.jsx)(n.strong,{children:'"Run"'})," menu."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click on ",(0,s.jsx)(n.strong,{children:'"Edit Configurations..."'})," to open the ",(0,s.jsx)(n.strong,{children:'"Run/Debug Configurations"'})," dialog."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click on the ",(0,s.jsx)(n.strong,{children:'"+"'})," icon to add a new configuration and select ",(0,s.jsx)(n.strong,{children:'"NPM"'})," from the dropdown."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Provide a name for the configuration (e.g., ",(0,s.jsx)(n.code,{children:"FDM Monster Server (dev)"}),")."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Set the ",(0,s.jsx)(n.code,{children:"package.json"})," file in the cloned repository: ",(0,s.jsx)(n.code,{children:"server/package.json"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Set the Command to ",(0,s.jsx)(n.code,{children:"run"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Set the Scripts to ",(0,s.jsx)(n.code,{children:"dev"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Set the ",(0,s.jsx)(n.strong,{children:'"Node interpreter"'})," to the appropriate Node.js executable (e.g. v18.14.2)."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Under the ",(0,s.jsx)(n.strong,{children:'"Environment variables"'})," section, click on the ",(0,s.jsx)(n.strong,{children:'"+"'})," icon and add a variable with the name ",(0,s.jsx)(n.code,{children:"NODE_ENV"})," and value development."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click ",(0,s.jsx)(n.strong,{children:'"OK"'})," to save the configuration."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"In the top-right corner of WebStorm, select the created configuration from the dropdown."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click on the green play button or press ",(0,s.jsx)("kbd",{children:"shift"}),"+",(0,s.jsx)("kbd",{children:"F10"})," to launch the server without debugging. Alternatively, you can click on the green-red bug button or press ",(0,s.jsx)("kbd",{children:"shift"}),"+",(0,s.jsx)("kbd",{children:"F9"})," to launch the server with debugging."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{alt:"Screenshot that shows the WebStorm setup in action",src:r(5957).Z+"",width:"1511",height:"1387"}),"\n",(0,s.jsx)(n.em,{children:"Screenshot that shows the WebStorm setup in action."})]}),"\n",(0,s.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,s.jsx)(n.p,{children:"Congratulations! You have successfully set up the FDM Monster server."}),"\n",(0,s.jsxs)(n.p,{children:["The next step is to set up the FDM Monster client. Please refer to the ",(0,s.jsx)(n.a,{href:"/docs/developer_setup/setup_client",children:"Client Setup"})," guide."]})]})}function a(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},6361:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/vscode-server-running-a2c3d227bcff23ed1e52ef603afd0cb1.png"},5957:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/webstorm-server-running-c0d8e3e77f05b9d7f39c4381e505ae2e.png"},1151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>o});var s=r(7294);const t={},i=s.createContext(t);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);