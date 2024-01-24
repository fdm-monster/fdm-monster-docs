"use strict";(self.webpackChunkfdm_monster_docs=self.webpackChunkfdm_monster_docs||[]).push([[995],{1009:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var r=o(5893),i=o(1151);const s={},t="Pre-configuring the FDM Monster Server",c={id:"configuration/preconfiguration",title:"Pre-configuring the FDM Monster Server",description:"After each environment change the FDM Monster server must be restarted for the change to take effect!",source:"@site/docs/2_configuration/preconfiguration.md",sourceDirName:"2_configuration",slug:"/configuration/preconfiguration",permalink:"/docs/configuration/preconfiguration",draft:!1,unlisted:!1,editUrl:"https://github.com/fdm-monster/fdm-monster-docs/docs/2_configuration/preconfiguration.md",tags:[],version:"current",lastUpdatedBy:"David Zwart",lastUpdatedAt:1706097914,formattedLastUpdatedAt:"Jan 24, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/docs/configuration/"},next:{title:"Settings",permalink:"/docs/configuration/settings/"}},d={},l=[{value:"Required and optional variables",id:"required-and-optional-variables",level:2},{value:"The <code>.env</code> file",id:"the-env-file",level:2},{value:"Applying it to your setup",id:"applying-it-to-your-setup",level:2},{value:"NodeJS with node-linux, node-windows or pm2",id:"nodejs-with-node-linux-node-windows-or-pm2",level:3},{value:"Docker-compose",id:"docker-compose",level:3}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"pre-configuring-the-fdm-monster-server",children:"Pre-configuring the FDM Monster Server"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u26a0\ufe0f"," ",(0,r.jsx)(n.strong,{children:"After each environment change the FDM Monster server must be restarted for the change to take effect!"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"FDM Monster Server can be configured with environment variables. There are different ways to do this for each setup:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["specify a ",(0,r.jsx)(n.code,{children:".env"})," file. This works for these setups:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Windows service setup with ",(0,r.jsx)(n.code,{children:"node-windows"})]}),"\n",(0,r.jsxs)(n.li,{children:["Linux service setup with ",(0,r.jsx)(n.code,{children:"node-linux"})]}),"\n",(0,r.jsxs)(n.li,{children:["NodeJS with ",(0,r.jsx)(n.code,{children:"pm2"})]}),"\n",(0,r.jsxs)(n.li,{children:["NodeJS with ",(0,r.jsx)(n.code,{children:"nodemon"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["docker - specify each variable separately, this can become tedious:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["docker: using the ",(0,r.jsx)(n.code,{children:"-e VARIABLE=value"})," command repeatedly"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["docker - all at once","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["docker: using the ",(0,r.jsx)(n.code,{children:"--env-file ./.env"})," command ",(0,r.jsx)(n.a,{href:"https://docs.docker.com/engine/reference/commandline/run/#options",children:"(Read docker options)"})]}),"\n",(0,r.jsxs)(n.li,{children:["docker-compose: using the ",(0,r.jsx)(n.code,{children:"environment"})," section ",(0,r.jsx)(n.a,{href:"https://docs.docker.com/compose/environment-variables/",children:"(Read docker-compose environment)"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"required-and-optional-variables",children:"Required and optional variables"}),"\n",(0,r.jsx)(n.p,{children:"The following variables are read and used by FDM Monster at startup. Always restart your server after a change."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"MONGO"})," (Required) ",(0,r.jsx)(n.strong,{children:"the connection to mongodb"}),". For example:"]}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"MONGO=mongodb://127.0.0.1:27017/fdm-monster"})}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"SERVER_PORT"})," (Optional, default=4000) ",(0,r.jsx)(n.strong,{children:"the port of the local FDM Monster website"}),". For example:"]}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"SERVER_PORT=4000"})}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"SAFEMODE_ENABLED"})," ",(0,r.jsx)(n.strong,{children:"Safely start FDM Monster: without any task being run to avoid crashes."})]}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"SAFEMODE_ENABLED=true"})}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"the-env-file",children:["The ",(0,r.jsx)(n.code,{children:".env"})," file"]}),"\n",(0,r.jsxs)(n.p,{children:["A very simple text file with a variable per line. The following ",(0,r.jsx)(n.code,{children:".env"})," is often already enough to make sure FDM Monster works as you like:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dotenv",children:"MONGO=mongodb://127.0.0.1:27017/fdm-monster\nSERVER_PORT=4000\n"})}),"\n",(0,r.jsx)(n.h2,{id:"applying-it-to-your-setup",children:"Applying it to your setup"}),"\n",(0,r.jsx)(n.p,{children:"So, you understand the variables to configure FDM Monster now. How do I set this up for my environment? Read below for your specific scenario."}),"\n",(0,r.jsx)(n.h3,{id:"nodejs-with-node-linux-node-windows-or-pm2",children:"NodeJS with node-linux, node-windows or pm2"}),"\n",(0,r.jsxs)(n.p,{children:["Create a ",(0,r.jsx)(n.code,{children:".env"})," file in the ",(0,r.jsx)(n.code,{children:"fdm-monster/server"})," folder with the ",(0,r.jsx)(n.strong,{children:"required"})," and/or ",(0,r.jsx)(n.em,{children:"optional"})," variables by copying the ",(0,r.jsx)(n.code,{children:".env.template"})," file.\nCopy this and rename it to ",(0,r.jsx)(n.code,{children:".env"})," to get started quicker.\nThe server will automatically create the ",(0,r.jsx)(n.code,{children:".env"})," file for you, and the server logs will show what is going wrong if something is missing."]}),"\n",(0,r.jsxs)(n.p,{children:["Feel adventurous? Customize the file to your liking, but again ALWAYS make sure the ",(0,r.jsx)(n.strong,{children:"required"})," variables are correctly set."]}),"\n",(0,r.jsx)(n.h3,{id:"docker-compose",children:"Docker-compose"}),"\n",(0,r.jsxs)(n.p,{children:["With docker-compose you have a great tool to pass environment variables use the ",(0,r.jsx)(n.code,{children:"environment"})," section.\nHere is how the environment section in docker would look."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"services:\n  fdm-monster:\n    # ... other sections here\n    environment:\n      - MONGO: mongodb://127.0.0.1:27017/fdm-monster\n      - SERVER_PORT: 4000\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Please continue by reading the ",(0,r.jsx)(n.a,{href:"/docs/installing/docker_compose",children:"Docker Compose section"})," for more information on how to setup FDM Monster and MongoDB with docker-compose."]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},1151:(e,n,o)=>{o.d(n,{Z:()=>c,a:()=>t});var r=o(7294);const i={},s=r.createContext(i);function t(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);