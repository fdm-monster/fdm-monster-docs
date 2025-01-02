"use strict";(self.webpackChunkfdm_monster_docs=self.webpackChunkfdm_monster_docs||[]).push([[6108],{2794:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"installing/monsterpi","title":"MonsterPi for Raspberry Pi","description":"How to setup MonsterPi for your FDM-Monster environment","source":"@site/docs/installing/monsterpi.mdx","sourceDirName":"installing","slug":"/installing/monsterpi","permalink":"/docs/installing/monsterpi","draft":false,"unlisted":false,"editUrl":"https://github.com/fdm-monster/fdm-monster-docs/edit/main/docs/installing/monsterpi.mdx","tags":[],"version":"current","lastUpdatedBy":"Maurice Kevenaar","lastUpdatedAt":1735849890000,"frontMatter":{"title":"MonsterPi for Raspberry Pi","description":"How to setup MonsterPi for your FDM-Monster environment","slug":"/installing/monsterpi","pagination_prev":"installing/index","pagination_next":"software_usage/index"},"sidebar":"docs","previous":{"title":"Installing","permalink":"/docs/installing"},"next":{"title":"Software Usage","permalink":"/docs/software_usage"}}');var i=r(4848),t=r(8453);const o={title:"MonsterPi for Raspberry Pi",description:"How to setup MonsterPi for your FDM-Monster environment",slug:"/installing/monsterpi",pagination_prev:"installing/index",pagination_next:"software_usage/index"},a=void 0,d={},l=[{value:"What is Monster Pi?",id:"what-is-monster-pi",level:2},{value:"Hardware requirements",id:"hardware-requirements",level:2},{value:"Latest Version",id:"latest-version",level:2},{value:"Installing MonsterPi",id:"installing-monsterpi",level:3},{value:"Upgrading FDM Monster in MonsterPi",id:"upgrading-fdm-monster-in-monsterpi",level:2},{value:"MonsterPi Version 0.4+",id:"monsterpi-version-04",level:3},{value:"Upgrade to a specific version",id:"upgrade-to-a-specific-version",level:4},{value:"Older MonsterPi versions to 0.4+",id:"older-monsterpi-versions-to-04",level:3}];function c(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h2,{id:"what-is-monster-pi",children:"What is Monster Pi?"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"https://github.com/fdm-monster/MonsterPi",children:"MonsterPi"})," is a ",(0,i.jsx)(s.a,{href:"https://www.raspberrypi.org/",children:"Raspberry Pi"})," image based on ",(0,i.jsx)(s.a,{href:"https://ubuntu.com/download/raspberry-pi",children:"Ubuntu"})," built using ",(0,i.jsx)(s.a,{href:"https://github.com/guysoft/CustomPiOS",children:"CustomPiOS"})," running ",(0,i.jsx)(s.a,{href:"https://fdm-monster.net/",children:"FDM Monster"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["Depending on the image, either ",(0,i.jsx)(s.a,{href:"https://www.mongodb.com/",children:"MongoDB"})," or ",(0,i.jsx)(s.a,{href:"https://www.sqlite.org/",children:"SQLite"})," is included."]}),"\n",(0,i.jsx)(s.h2,{id:"hardware-requirements",children:"Hardware requirements"}),"\n",(0,i.jsx)(s.admonition,{type:"warning",children:(0,i.jsx)(s.p,{children:"An Orange Pi or any other Single Board Computer (SBC) has not been tested and will most likely not work."})}),"\n",(0,i.jsx)(s.p,{children:"We advise you to get these components for your setup. You might already have these or equivalents of them. All links point to the official Raspberry Pi website. From there links to (local) stores are provided."}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Component"}),(0,i.jsx)(s.th,{children:"Raspberry Pi 3"}),(0,i.jsx)(s.th,{children:"Raspberry Pi 4"}),(0,i.jsx)(s.th,{children:"Raspberry Pi 5"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Raspberry Pi"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://www.raspberrypi.com/products/raspberry-pi-3-model-b/",children:"Link"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://www.raspberrypi.com/products/raspberry-pi-4-model-b/",children:"Link"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://www.raspberrypi.com/products/raspberry-pi-5/",children:"Link"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Raspberry Pi Case"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://www.raspberrypi.com/products/raspberry-pi-3-case/",children:"Link"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://www.raspberrypi.com/products/raspberry-pi-4-case/",children:"Link"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://www.raspberrypi.com/products/raspberry-pi-5-case/",children:"Link"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Cooling"}),(0,i.jsx)(s.td,{children:"Not Required"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://www.raspberrypi.com/products/raspberry-pi-4-case-fan/",children:"Link"})}),(0,i.jsx)(s.td,{children:"Included with case"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Power Supply"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://www.raspberrypi.com/products/micro-usb-power-supply/",children:"Link"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://www.raspberrypi.com/products/type-c-power-supply/",children:"Link"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://www.raspberrypi.com/products/27w-power-supply/",children:"Link"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:["16GB or bigger Class 10 SD Card",(0,i.jsx)("br",{}),"Please get a decent brand",(0,i.jsx)("br",{}),(0,i.jsx)(s.strong,{children:"do not save money on this"})]}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://www.raspberrypi.com/products/sd-cards/",children:"Link"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://www.raspberrypi.com/products/sd-cards/",children:"Link"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://www.raspberrypi.com/products/sd-cards/",children:"Link"})})]})]})]}),"\n",(0,i.jsx)(s.p,{children:"Additionally, depending on your device, you might need a SD Card reader and (optionally) an micro SD Card to SD Card adapter."}),"\n",(0,i.jsx)(s.h2,{id:"latest-version",children:"Latest Version"}),"\n",(0,i.jsx)(s.p,{children:"The latest version of MonsterPi can be downloaded by clicking the button below."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/fdm-monster/monsterpi/releases/latest",children:(0,i.jsx)(s.img,{src:"https://img.shields.io/github/v/release/fdm-monster/monsterpi.svg?color=1eb6c3&label=stable",alt:"Latest Version"})})}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsxs)(s.p,{children:["Previous MonsterPi images can be downloaded from ",(0,i.jsx)(s.a,{href:"https://github.com/fdm-monster/MonsterPi/releases",children:"GitHub Releases"}),"."]})}),"\n",(0,i.jsx)(s.h3,{id:"installing-monsterpi",children:"Installing MonsterPi"}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsx)(s.p,{children:"Screenshots and texts may vary depending on your operating system, versions used, and your devices locale settings."})}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["Download and install ",(0,i.jsx)(s.a,{href:"https://www.raspberrypi.com/software/",children:"Raspberry Pi Imager"})]}),"\n",(0,i.jsxs)(s.li,{children:["Download the ",(0,i.jsx)(s.a,{href:"https://github.com/fdm-monster/monsterpi/releases/latest",children:"Latest"})," Monster Pi image. Extracting the file is not required."]}),"\n",(0,i.jsx)(s.li,{children:"Insert your SD Card into your SD Card Reader"}),"\n",(0,i.jsxs)(s.li,{children:["Start Raspberry Pi Imager on your computer",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(s.img,{alt:"Raspberry Pi Imager",src:r(924).A+"",width:"682",height:"482"})]}),"\n",(0,i.jsxs)(s.li,{children:["Click on ",(0,i.jsx)(s.strong,{children:"Choose Device"})," and select the device matching your RaspberryPi device:",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(s.img,{alt:"Raspberry Pi Imager Choose Device",src:r(6882).A+"",width:"682",height:"482"}),"`"]}),"\n",(0,i.jsxs)(s.li,{children:["Click on ",(0,i.jsx)(s.strong,{children:"Choose OS"}),", scroll to the bottom, select ",(0,i.jsx)(s.strong,{children:"Use Custom"}),", and select the downloaded Monster Pi image on your computer.",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(s.img,{alt:"Raspberry Pi Imager Choose OS",src:r(1625).A+"",width:"682",height:"482"})]}),"\n",(0,i.jsxs)(s.li,{children:["Click on ",(0,i.jsx)(s.strong,{children:"Choose Storage"}),", and select your SD Card.","\n",(0,i.jsx)(s.admonition,{title:"Triple check this!",type:"danger",children:(0,i.jsx)(s.p,{children:"Ensure you have selected the correct Storage!"})}),"\n",(0,i.jsx)(s.img,{alt:"Raspberry Pi Imager Choose OS",src:r(4057).A+"",width:"682",height:"482"})]}),"\n",(0,i.jsxs)(s.li,{children:["Click on ",(0,i.jsx)(s.strong,{children:"Next"})," to continue configuring the Raspberry Pi Image.",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(s.img,{alt:"Raspberry Pi Imager All configured",src:r(1382).A+"",width:"682",height:"482"})]}),"\n",(0,i.jsxs)(s.li,{children:["The Raspberry Pi Imager will now ask you if you want to customize your image. Click on ",(0,i.jsx)(s.strong,{children:"Edit Settings"})," to start your configuration.",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(s.img,{alt:"Raspberry Pi Imager Customize OS Dialog",src:r(5775).A+"",width:"682",height:"482"})]}),"\n",(0,i.jsxs)(s.li,{children:["In the ",(0,i.jsx)(s.strong,{children:"General"})," section, check the checkbox for ",(0,i.jsx)(s.strong,{children:"Set Hostname"})," and name it ",(0,i.jsx)(s.code,{children:"monsterpi"}),".","\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsx)(s.p,{children:"You can pick any name, but that will change steps later in the documentation"})}),"\n","Also check the ",(0,i.jsx)(s.strong,{children:"Set username and password"})," checkbox. Set the username to ",(0,i.jsx)(s.code,{children:"pi"})," and the password to any value. This is required for enabling SSH later on.","\n",(0,i.jsx)(s.admonition,{type:"warning",children:(0,i.jsxs)(s.p,{children:["Note: You cannot change the default username and password using the Raspberry Pi Imager. The default username and password will still be ",(0,i.jsx)(s.code,{children:"pi"})," and ",(0,i.jsx)(s.code,{children:"raspberry"}),". This is due to a limitation of using ",(0,i.jsx)(s.code,{children:"Ubuntu"})," instead of ",(0,i.jsx)(s.code,{children:"RaspberryPiOS"}),"."]})}),"\n","If required, change the WiFi and locale settings to your needs.",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(s.img,{alt:"Raspberry Pi Imager Customize settings",src:r(4358).A+"",width:"682",height:"482"})]}),"\n",(0,i.jsxs)(s.li,{children:["In the ",(0,i.jsx)(s.strong,{children:"Services"})," section, check the checkbox for ",(0,i.jsx)(s.strong,{children:"Enable SSH"}),". Depending on your preferences and setup, either select ",(0,i.jsx)(s.strong,{children:"Use password authentication"})," or ",(0,i.jsx)(s.strong,{children:"Allow public-key authentication only"}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsxs)(s.p,{children:["If you have an SSH Key, ",(0,i.jsx)(s.strong,{children:"Allow public-key authentication only"})," is advisable."]})}),"\n",(0,i.jsx)(s.img,{alt:"Raspberry Pi Imager Customize SSH settings",src:r(8871).A+"",width:"682",height:"482"})]}),"\n",(0,i.jsxs)(s.li,{children:["Click the ",(0,i.jsx)(s.strong,{children:"Save"})," Button at the bottom of the dialog. Once the dialog closes, click ",(0,i.jsx)(s.strong,{children:"Yes"})," to apply your customizations to the image.",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(s.img,{alt:"Raspberry Pi Imager apply customizations",src:r(840).A+"",width:"682",height:"482"})]}),"\n",(0,i.jsxs)(s.li,{children:["After pressing ",(0,i.jsx)(s.strong,{children:"Yes"})," Raspberry Pi Imager will ask you for a confirmation to overwrite all data of the SD Card. Triple check if you have the correct storage device. Click ",(0,i.jsx)(s.strong,{children:"Yes"})," to continue.",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(s.img,{alt:"Raspberry Pi Imager confirmation",src:r(5729).A+"",width:"682",height:"482"})]}),"\n",(0,i.jsxs)(s.li,{children:["Raspberry Pi Imager will now start writing and verifying the image to your SD Card. This steps takes some time and can vary depending on your USB Bus speed, SD Card and other factors, but will usually take about 5-10 minutes.",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(s.img,{alt:"Raspberry Pi Imager Writing",src:r(3553).A+"",width:"682",height:"482"}),(0,i.jsx)("br",{}),"\n",(0,i.jsx)(s.img,{alt:"Raspberry Pi Imager Verifying",src:r(916).A+"",width:"682",height:"482"})]}),"\n",(0,i.jsxs)(s.li,{children:['Once the verification is complete, by default, Raspberry Pi Imager will "eject" the device, play a sound and show a notification on the screen.',(0,i.jsx)("br",{}),"\n",(0,i.jsx)(s.img,{alt:"Raspberry Pi Imager Complete",src:r(5325).A+"",width:"682",height:"482"})]}),"\n",(0,i.jsxs)(s.li,{children:["Insert the SD card into your Raspberry Pi and power it up.","\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsx)(s.p,{children:"The first power up can take some time. Wait up to 10 minutes before attempting a power cycle."})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["Visit ",(0,i.jsx)(s.a,{href:"http://monsterpi.local:4000",children:"http://monsterpi.local:4000"})," to access FDM Monster. ",(0,i.jsx)("br",{}),"Alternatively, you can visit ",(0,i.jsx)(s.a,{href:"http://monsterpi.local",children:"http://monsterpi.local"})," or ",(0,i.jsx)(s.a,{href:"https://monsterpi.local",children:"https://monsterpi.local (Self-Signed SSL Certificate)"})," to access FDM Monster."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"upgrading-fdm-monster-in-monsterpi",children:"Upgrading FDM Monster in MonsterPi"}),"\n",(0,i.jsx)(s.admonition,{type:"warning",children:(0,i.jsx)(s.p,{children:"Upgrading MonsterPi requires you to have SSH knowledge. If you do not feel comfortable making those changes, please do\nnot continue and ask an expert to assist you!"})}),"\n",(0,i.jsx)(s.admonition,{type:"tip",children:(0,i.jsxs)(s.p,{children:["If you have not enabled SSH on your Raspberry Pi, shut it down, put the SD card in your card reader and create an empty file called ",(0,i.jsx)(s.code,{children:"ssh"})," on the drive. Ensure you remove the extension! Once you boot it up, SSH should be enabled."]})}),"\n",(0,i.jsx)(s.h3,{id:"monsterpi-version-04",children:"MonsterPi Version 0.4+"}),"\n",(0,i.jsxs)(s.p,{children:["Run the following commands as the ",(0,i.jsx)(s.code,{children:"pi"})," user and execute an update with root elevation."]}),"\n",(0,i.jsx)(s.p,{children:"If you would like to upgrade to the latest, you can run it like this, but beware that this mode is still experimental. It might not install the true latest or highest version sometimes, this happens mostly when a release candidate was released before (like 1.6.0-rc3)."}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"cd ~/scripts\nsudo bash ./update-fdm-monster.sh\n"})}),"\n",(0,i.jsx)(s.h4,{id:"upgrade-to-a-specific-version",children:"Upgrade to a specific version"}),"\n",(0,i.jsx)(s.p,{children:"You can also upgrade to a specific version of FDM Monster. This should be used in rare cases."}),"\n",(0,i.jsx)(s.admonition,{type:"tip",children:(0,i.jsxs)(s.p,{children:["You can find all tags on our ",(0,i.jsx)(s.a,{href:"https://github.com/fdm-monster/fdm-monster/tags",children:"FDM Monster"})," GitHub."]})}),"\n",(0,i.jsxs)(s.p,{children:["Replace ",(0,i.jsx)(s.code,{children:"VERSION_HERE"})," with the tag (version) of FDM Monster you like."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:'cd ~/scripts\n\n# Deploy the FDM Monster server update\nsudo bash ./update-fdm-monster.sh --tag "VERSION_HERE" --non-interactive\n'})}),"\n",(0,i.jsx)(s.p,{children:"For example, if you are running FDM Monster 1.6.2 and want to upgrade to 1.7.0, You would do the upgrade like this:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:'cd ~/scripts\nsudo bash ./update-fdm-monster.sh --tag "1.7.0" --non-interactive\n'})}),"\n",(0,i.jsx)(s.h3,{id:"older-monsterpi-versions-to-04",children:"Older MonsterPi versions to 0.4+"}),"\n",(0,i.jsx)(s.admonition,{type:"warning",children:(0,i.jsx)(s.p,{children:"There is no upgrade path to MonsterPi 0.4. Only by downloading the new image, users will be able to use FDM Monster 1.6 and up."})}),"\n",(0,i.jsxs)(s.p,{children:["It is advised to export a ",(0,i.jsx)(s.code,{children:".yaml"})," file to back up your printers, printer floor positions and floors.\nHere are the steps to take:"]}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["Go to the import/export dialog to get the ",(0,i.jsx)(s.code,{children:".yaml"})," file as a download."]}),"\n",(0,i.jsx)(s.li,{children:"Check the file for missing or incorrect properties. Correct the mistakes with a text editor and save."}),"\n",(0,i.jsxs)(s.li,{children:["Refer to ",(0,i.jsx)(s.a,{href:"/docs/configuration/yaml_import_export",children:"YAML Import and Export"})," for more details."]}),"\n",(0,i.jsx)(s.li,{children:"Ensure your .yaml is ready to be imported."}),"\n",(0,i.jsxs)(s.li,{children:["Flash a new SD card with the installation steps ",(0,i.jsx)(s.a,{href:"#installing-monsterpi",children:"above"})]}),"\n",(0,i.jsx)(s.li,{children:"Ensure your MonsterPi is working. Proceed through the setup and create an account."}),"\n",(0,i.jsxs)(s.li,{children:["Import the YAML file according to ",(0,i.jsx)(s.a,{href:"/docs/configuration/yaml_import_export#user-interface",children:"YAML Import and Export"})," for the import."]}),"\n",(0,i.jsx)(s.li,{children:"Your printers and floors will reappear."}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},5729:(e,s,r)=>{r.d(s,{A:()=>n});const n=r.p+"assets/images/rpi-imager-confirm-sd-card-830db4253a52bb642f331bbaf6060d70.png"},1625:(e,s,r)=>{r.d(s,{A:()=>n});const n=r.p+"assets/images/rpi-imager-custom-os-9bad2407ec662d0de3313f9ed1218ae5.png"},5325:(e,s,r)=>{r.d(s,{A:()=>n});const n=r.p+"assets/images/rpi-imager-done-2679265bcb7df14c39bdef7026083907.png"},5775:(e,s,r)=>{r.d(s,{A:()=>n});const n=r.p+"assets/images/rpi-imager-edit-settings-0cfaaa0656173c34ff840213f80414f7.png"},924:(e,s,r)=>{r.d(s,{A:()=>n});const n=r.p+"assets/images/rpi-imager-home-c9aff15fe1b3755b27c06bafcad5a545.png"},1382:(e,s,r)=>{r.d(s,{A:()=>n});const n=r.p+"assets/images/rpi-imager-next-7dbb805ca3ca1c270b75d90e8a6f4d59.png"},4057:(e,s,r)=>{r.d(s,{A:()=>n});const n=r.p+"assets/images/rpi-imager-sd-card-ba81fa2219339a04ae6750807058b78a.png"},6882:(e,s,r)=>{r.d(s,{A:()=>n});const n=r.p+"assets/images/rpi-imager-select-device-26aa1c423693a927ee1f83ac8e86b743.png"},4358:(e,s,r)=>{r.d(s,{A:()=>n});const n=r.p+"assets/images/rpi-imager-settings-hostname-password-3cced2915b1357cf6e72638b1bdf6979.png"},8871:(e,s,r)=>{r.d(s,{A:()=>n});const n=r.p+"assets/images/rpi-imager-settings-ssh-7c944bf6658ff19dcba1c9735a634aad.png"},840:(e,s,r)=>{r.d(s,{A:()=>n});const n=r.p+"assets/images/rpi-imager-settings-yes-02bc43f5c31271d1a905778b270e4008.png"},916:(e,s,r)=>{r.d(s,{A:()=>n});const n=r.p+"assets/images/rpi-imager-verifying-002d881bf336db63b7ab0e244f2e1e07.png"},3553:(e,s,r)=>{r.d(s,{A:()=>n});const n=r.p+"assets/images/rpi-imager-writing-5befc4463d111e16ce3f9cf8d1a49fe6.png"},8453:(e,s,r)=>{r.d(s,{R:()=>o,x:()=>a});var n=r(6540);const i={},t=n.createContext(i);function o(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);