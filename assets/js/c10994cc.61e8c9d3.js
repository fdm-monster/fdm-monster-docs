"use strict";(self.webpackChunkfdm_monster_docs=self.webpackChunkfdm_monster_docs||[]).push([[696],{2887:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>a,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=t(5893),s=t(1151);const o={title:"Setup Server",sidebar_position:1},i="Set up FDM Monster Server",l={id:"developer_setup/setup_server",title:"Setup Server",description:"This guide will walk you through the process of setting up the FDM Monster server.",source:"@site/docs/1_developer_setup/setup_server.md",sourceDirName:"1_developer_setup",slug:"/developer_setup/setup_server",permalink:"/docs/developer_setup/setup_server",draft:!1,unlisted:!1,editUrl:"https://github.com/fdm-monster/fdm-monster-docs/docs/1_developer_setup/setup_server.md",tags:[],version:"current",lastUpdatedBy:"David Zwart",lastUpdatedAt:1704712332,formattedLastUpdatedAt:"Jan 8, 2024",sidebarPosition:1,frontMatter:{title:"Setup Server",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Developer Setup",permalink:"/docs/developer_setup/"},next:{title:"Setup Client",permalink:"/docs/developer_setup/setup_client"}},c={},d=[{value:"Making Changes to FDM Monster",id:"making-changes-to-fdm-monster",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Clone the Repository",id:"clone-the-repository",level:2},{value:"Setting Up the Development Environment",id:"setting-up-the-development-environment",level:2},{value:"VS Code Run Configuration",id:"vs-code-run-configuration",level:2},{value:"WebStorm Run Configuration",id:"webstorm-run-configuration",level:2},{value:"Next Steps",id:"next-steps",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"set-up-fdm-monster-server",children:"Set up FDM Monster Server"}),"\n",(0,r.jsxs)(n.p,{children:["This guide will walk you through the process of setting up the FDM Monster server.\nPlease note that this chapter focuses on installing the server component only.\nIf you want to run the FDM Monster Vue project as well, please refer to\nthe ",(0,r.jsx)(n.a,{href:"/docs/developer_setup/setup_client",children:"Client Installation Guide"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"making-changes-to-fdm-monster",children:"Making Changes to FDM Monster"}),"\n",(0,r.jsxs)(n.p,{children:["If you wish to contribute to the FDM Monster project and make changes to the codebase,\nplease follow the guidelines outlined in\nthe ",(0,r.jsx)(n.a,{href:"https://github.com/fdm-monster/fdm-monster/blob/develop/CONTRIBUTING.md",children:"CONTRIBUTING.MD file"}),".\nIn summary, you should fork the repository, make your changes in a separate branch,\nand create an issue before submitting a pull request."]}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(n.p,{children:"Before you begin, ensure that you have the following tools installed on your system:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Node.js 18 LTS"}),"\n",(0,r.jsx)(n.li,{children:"Yarn 1.22.0 or higher"}),"\n",(0,r.jsx)(n.li,{children:"MongoDB 5 or higher"}),"\n",(0,r.jsx)(n.li,{children:"MongoDB Compass"}),"\n",(0,r.jsx)(n.li,{children:"VS Code or WebStorm (your choice of IDE)"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"clone-the-repository",children:"Clone the Repository"}),"\n",(0,r.jsxs)(n.p,{children:["To get started, clone the FDM Monster repository from GitHub. Make sure to clone from either the ",(0,r.jsx)(n.code,{children:"develop"})," or ",(0,r.jsx)(n.code,{children:"main"}),"\nbranch:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/fdm-monster/fdm-monster.git\n"})}),"\n",(0,r.jsx)(n.h2,{id:"setting-up-the-development-environment",children:"Setting Up the Development Environment"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Navigate to the cloned repository:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd fdm-monster/server\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"If yarn is not yet installed:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install -g yarn\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Install the dependencies using Yarn:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn install\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Configure the environment variables by creating a .env file in the project root directory.\nYou can use the provided .env.template file as a template."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Start the MongoDB server and make sure it is running."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Launch the FDM Monster server:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["VS Code: Create a run configuration that executes ",(0,r.jsx)(n.code,{children:"yarn run dev"})," as the command. (Refer to the VS Code Run\nConfiguration section below for detailed steps.)"]}),"\n",(0,r.jsxs)(n.li,{children:["WebStorm: Create a run configuration that executes ",(0,r.jsx)(n.code,{children:"yarn run dev"})," as the command. (Refer to the WebStorm\nRun Configuration section below for detailed steps.)"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Access the running server at ",(0,r.jsx)(n.a,{href:"http://localhost:4000",children:"http://localhost:4000"})," in your preferred web browser."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"vs-code-run-configuration",children:"VS Code Run Configuration"}),"\n",(0,r.jsx)(n.p,{children:"To create a run configuration in VS Code for running the FDM Monster server, follow these steps:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:'If the file ".vscode/launch.json" exists and looks alright, you can skip steps 2 to 4. Open VS Code and navigate to the "Run and Debug" panel.'}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click on the link ",(0,r.jsx)(n.code,{children:"create a launch.json file"})," to open the ",(0,r.jsx)(n.code,{children:"launch.json"})," file. You should select Node.js as the type.\nIf this does not work, you can manually create the file in the ",(0,r.jsx)(n.code,{children:".vscode"})," folder in the project root directory."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Paste the JSON script provided below into the launch.json file:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "version": "0.2.0",\n  "configurations": [\n    {\n      "name": "FDM Monster Server (dev)",\n      "type": "node",\n      "request": "launch",\n      "runtimeExecutable": "yarn",\n      "runtimeArgs": [\n        "run",\n        "dev"\n      ],\n      "cwd": "${workspaceFolder}/server",\n      "protocol": "inspector",\n      "restart": true,\n      "console": "integratedTerminal"\n    }\n  ]\n}\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:'Save the configuration and close the "launch.json" file.'}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:'In the "Run and Debug" panel, select "FDM Monster Server (dev)" from the dropdown.'}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:'Click on the "Start Debugging" button or press F5 to launch the server. Alternatively, you can click on the green\nplay button or press Ctrl + F5 to launch the server without debugging.'}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.img,{alt:"VS Code Run Configuration",src:t(6361).Z+"",width:"1461",height:"1027"}),"\n",(0,r.jsx)(n.em,{children:"Example screenshot showing the VS Code setup in action."})]}),"\n",(0,r.jsx)(n.h2,{id:"webstorm-run-configuration",children:"WebStorm Run Configuration"}),"\n",(0,r.jsx)(n.p,{children:"To create a run configuration in WebStorm for running the FDM Monster server, follow these steps:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:'Open WebStorm and go to the "Run" menu.'}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:'Click on "Edit Configurations..." to open the "Run/Debug Configurations" dialog.'}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:'Click on the "+" icon to add a new configuration and select "NPM" from the dropdown.'}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Provide a name for the configuration (e.g., ",(0,r.jsx)(n.code,{children:"FDM Monster Server (dev)"}),")."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:'Set the package.json to the one in the cloned repository server folder: "server/package.json".'}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Set the Command to ",(0,r.jsx)(n.code,{children:"run"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Set the Scripts to ",(0,r.jsx)(n.code,{children:"dev"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:'Set the "Node interpreter" to the appropriate Node.js executable (v18.14.2 at the moment of writing).'}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:'Under the "Environment variables" section, click on the "+" icon and add a variable with the name NODE_ENV and value\ndevelopment.'}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:'Click "OK" to save the configuration.'}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"In the top-right corner of WebStorm, select the created configuration from the dropdown."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Click on the green play button or press Shift + F10 to launch the server without debugging. Alternatively, you can click on the green\nred bug button or press Shift + F9 to launch the server with debugging."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.img,{alt:"WebStorm Run Configuration",src:t(5957).Z+"",width:"1511",height:"1387"}),"\n",(0,r.jsx)(n.em,{children:"Example screenshot showing the WebStorm setup in action."})]}),"\n",(0,r.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,r.jsx)(n.p,{children:"Congratulations! You have successfully set up the FDM Monster server."}),"\n",(0,r.jsxs)(n.p,{children:["The next step is to set up the FDM Monster client. Please refer to the ",(0,r.jsx)(n.a,{href:"/docs/developer_setup/setup_client",children:"Client Installation Guide."}),"."]}),"\n",(0,r.jsx)(n.p,{children:"In the future we will provide a chapter on how to set up OctoPrint instances with a virtual printer.\nSecondly, we will provide instructions on how to create printer instances in FDM Monster or import them from YAML files."})]})}function a(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},6361:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/vscode-server-running-a2c3d227bcff23ed1e52ef603afd0cb1.png"},5957:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/webstorm-server-running-c0d8e3e77f05b9d7f39c4381e505ae2e.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>i});var r=t(7294);const s={},o=r.createContext(s);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);