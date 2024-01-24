"use strict";(self.webpackChunkfdm_monster_docs=self.webpackChunkfdm_monster_docs||[]).push([[947],{1935:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=n(5893),s=n(1151);const r={title:"Creating Printers",sidebar_position:1},o="Creating Printers",a={id:"software_usage/creating_printers",title:"Creating Printers",description:"This is a guide on how to create new OctoPrint printers in FDM Monster. The guide assumes you have already installed FDM Monster and have a running instance.",source:"@site/docs/3_software_usage/creating_printers.md",sourceDirName:"3_software_usage",slug:"/software_usage/creating_printers",permalink:"/docs/software_usage/creating_printers",draft:!1,unlisted:!1,editUrl:"https://github.com/fdm-monster/fdm-monster-docs/docs/3_software_usage/creating_printers.md",tags:[],version:"current",lastUpdatedBy:"Maurice Kevenaar",lastUpdatedAt:1706097552,formattedLastUpdatedAt:"Jan 24, 2024",sidebarPosition:1,frontMatter:{title:"Creating Printers",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Software Usage",permalink:"/docs/software_usage/"},next:{title:"Organizing Floors",permalink:"/docs/software_usage/organizing_floors"}},c={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Preparing the OctoPrint instance",id:"preparing-the-octoprint-instance",level:2},{value:"Completing the OctoPrint setup wizard",id:"completing-the-octoprint-setup-wizard",level:3},{value:"Setting up a Virtual printer (Optional)",id:"setting-up-a-virtual-printer-optional",level:3},{value:"Setting up a USB printer",id:"setting-up-a-usb-printer",level:3},{value:"Get the API Key",id:"get-the-api-key",level:3},{value:"Adding the printer to FDM Monster",id:"adding-the-printer-to-fdm-monster",level:2},{value:"Testing the connection",id:"testing-the-connection",level:3},{value:"Creating the printer",id:"creating-the-printer",level:3}];function h(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"creating-printers",children:"Creating Printers"}),"\n",(0,i.jsxs)(t.p,{children:["This is a guide on how to create new OctoPrint printers in FDM Monster. The guide assumes you have already installed FDM Monster and have a running instance.\nAlso, it is assumed you have MongoDB running on the same machine as FDM Monster (see ",(0,i.jsx)(t.a,{href:"../category/installing",children:"installations"}),")."]}),"\n",(0,i.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(t.p,{children:["It is assumed that you have a running OctoPrint instance with at least one printer attached via a USB cable.\nThere are multiple approaches to setting up OctoPrint instances themselves, but this is outside the scope of this guide.\nIt's recommended to deploy OctoPrint using the information on ",(0,i.jsx)(t.a,{href:"https://octoprint.org/download/",children:"OctoPrint downloads"}),".\nSpecifically it's common practice to run OctoPrint from a Raspberry Pi 3/4 using the ",(0,i.jsx)(t.a,{href:"https://octoprint.org/download/#octopi",children:"OctoPi"})," image."]}),"\n",(0,i.jsxs)(t.p,{children:["For more information about OctoPrint itself, please check ",(0,i.jsx)(t.a,{href:"https://docs.octoprint.org/en/master/",children:"OctoPrint documentation"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"Some things to note:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Think about how USB ports are named on your system. If you have multiple printers, you might want to look at ",(0,i.jsx)(t.code,{children:"udev"})," rules to make sure the same printer is always connected to the same USB port.","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Here are possible helping sites to refer to ",(0,i.jsx)(t.a,{href:"https://www.thegeekdiary.com/beginners-guide-to-udev-in-linux/",children:"TheGeekDiary"})," and ",(0,i.jsx)(t.a,{href:"https://wiki.debian.org/udev",children:"Debian udev"})]}),"\n",(0,i.jsxs)(t.li,{children:["This is a device remapping rule based on its physical port: ",(0,i.jsx)(t.code,{children:'SUBSYSTEM=="tty", OWNER="YOUR_USER", ATTRS{manufacturer}=="YOUR_MANUFACTURER", ATTRS{devpath}=="UDEV_PORT", SYMLINK+="op0"'})]}),"\n",(0,i.jsxs)(t.li,{children:["An example for a Prusa on USB port 1.1: ",(0,i.jsx)(t.code,{children:'SUBSYSTEM=="tty", OWNER="PI", ATTRS{manufacturer}=="Prusa Research (prusa3d.com)", ATTRS{devpath}=="1.1", SYMLINK+="op0'})]}),"\n",(0,i.jsxs)(t.li,{children:["You can find the manufacturer by using ",(0,i.jsx)(t.code,{children:"udevadm info ..."})," and looking for the ",(0,i.jsx)(t.code,{children:"ATTRS{manufacturer}"})," attribute."]}),"\n",(0,i.jsxs)(t.li,{children:["It's advised to blacklist the original ",(0,i.jsx)(t.code,{children:"/dev/ttyUSB*"})," devices in OctoPrint Serial settings to avoid confusion with the new devices that will appear in /dev (for example ",(0,i.jsx)(t.code,{children:"/dev/op0"})," should be used, not ",(0,i.jsx)(t.code,{children:"/dev/ttyACM0"})," or ",(0,i.jsx)(t.code,{children:"/dev/ttyUSB0"}),")."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["It is possible to run multiple OctoPrint's on one Raspberry Pi. It's advised to take a look at ",(0,i.jsx)(t.a,{href:"https://octoprint.org/download/#octoprint_install--octoprint_deploy-linux",children:"OctoPrint Deploy"}),"."]}),"\n",(0,i.jsx)(t.li,{children:"If you have more knowledge, you can also run OctoPrint in a Docker container. This is outside the scope of this guide."}),"\n",(0,i.jsxs)(t.li,{children:["If you have the OctoPrint instance running on a different machine, you can still use FDM Monster. You will need to make sure that the OctoPrint instance is reachable from the FDM Monster machine.","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["This can be done by using a reverse proxy (for example ",(0,i.jsx)(t.a,{href:"https://www.digitalocean.com/community/tutorials/an-introduction-to-haproxy-and-load-balancing-concepts",children:"HAProxy"}),", ",(0,i.jsx)(t.a,{href:"https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/",children:"NGINX"}),") or by using a VPN (for example ",(0,i.jsx)(t.a,{href:"https://www.wireguard.com/",children:"WireGuard"}),")."]}),"\n",(0,i.jsxs)(t.li,{children:["Alternatively, you can also use a ",(0,i.jsx)(t.a,{href:"https://www.ssh.com/academy/ssh/tunneling/example",children:"SSH tunnel"})," to forward the OctoPrint port to the FDM Monster machine."]}),"\n",(0,i.jsxs)(t.li,{children:["It is possible to use a specific/static IP address to reach the OctoPrint instance. You can look it up with ",(0,i.jsx)(t.code,{children:"ifconfig"})," or ",(0,i.jsx)(t.code,{children:"ip addr"})," on the OctoPrint host."]}),"\n",(0,i.jsxs)(t.li,{children:["Finally, you can use fully-qualified domain names (FQDN) to reach the OctoPrint instance. For example, if you have a ",(0,i.jsx)(t.code,{children:"octopi.local"})," pointing to the OctoPrint instance, you can use this domain in FDM Monster."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"preparing-the-octoprint-instance",children:"Preparing the OctoPrint instance"}),"\n",(0,i.jsx)(t.p,{children:"Before you can add a printer to FDM Monster, you need to make sure that the OctoPrint instance is ready to be used by FDM Monster.\nThis means you need to have completed the OctoPrint setup wizard and have at least one printer connected to the OctoPrint instance."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"OctoPrint dashboard with a printer connected.",src:n(3671).Z+"",width:"947",height:"656"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"OctoPrint dashboard with a printer connected."})}),"\n",(0,i.jsx)(t.h3,{id:"completing-the-octoprint-setup-wizard",children:"Completing the OctoPrint setup wizard"}),"\n",(0,i.jsx)(t.p,{children:"When you first start OctoPrint, you will be greeted by the setup wizard. This wizard will guide you through the initial setup of OctoPrint.\nIt is recommended to complete this wizard before continuing with this guide."}),"\n",(0,i.jsx)(t.h3,{id:"setting-up-a-virtual-printer-optional",children:"Setting up a Virtual printer (Optional)"}),"\n",(0,i.jsx)(t.p,{children:"If you don't have a physical printer, you can also use a virtual printer. This is a printer that is not connected to a physical printer, but can be used to test FDM Monster."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"img.png",src:n(8764).Z+"",width:"964",height:"822"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"To create a virtual printer, you can use toggle the Virtual Printer option in the OctoPrint settings."})}),"\n",(0,i.jsx)(t.h3,{id:"setting-up-a-usb-printer",children:"Setting up a USB printer"}),"\n",(0,i.jsx)(t.p,{children:"After completing the setup wizard, you will be greeted by the OctoPrint dashboard. This dashboard will show you the status of your printer."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"img.png",src:n(5490).Z+"",width:"323",height:"337"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"OctoPrint dashboard with possible available USB connections."})}),"\n",(0,i.jsx)(t.h3,{id:"get-the-api-key",children:"Get the API Key"}),"\n",(0,i.jsx)(t.p,{children:"To be able to connect to the OctoPrint instance, you will need to get the API key. This key can be found in the User settings."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"img.png",src:n(1653).Z+"",width:"235",height:"104"})}),"\n",(0,i.jsx)(t.p,{children:"Click the User Settings in the user menu."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"img.png",src:n(5112).Z+"",width:"545",height:"857"})}),"\n",(0,i.jsx)(t.p,{children:"Now prepare the following things"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Copy the API key to be used in FDM Monster."}),"\n",(0,i.jsx)(t.li,{children:"Copy the IP address or FQDN host name of the OctoPrint instance. This can be found in the browser URL bar."}),"\n",(0,i.jsxs)(t.li,{children:["Copy the port of the OctoPrint instance. This can be found in the browser URL bar. If no port is shown you can assume it is ",(0,i.jsx)(t.code,{children:"80"})," (http, default) or ",(0,i.jsx)(t.code,{children:"443"})," (https)."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"adding-the-printer-to-fdm-monster",children:"Adding the printer to FDM Monster"}),"\n",(0,i.jsx)(t.p,{children:"Now that you have a running OctoPrint instance, you can add it to FDM Monster. To do this, you need to go to the Printers page in FDM Monster."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"img.png",src:n(4892).Z+"",width:"977",height:"216"})}),"\n",(0,i.jsx)(t.p,{children:"Click the Create Printer button to open the printer creation dialog."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"img.png",src:n(1901).Z+"",width:"591",height:"445"})}),"\n",(0,i.jsx)(t.p,{children:"Fill in the printer details:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"The name is the name that will be shown in FDM Monster."}),"\n",(0,i.jsx)(t.li,{children:"The IP/Host is the IP address or FQDN host name of the OctoPrint instance."}),"\n",(0,i.jsx)(t.li,{children:"The Host Port is the port of the OctoPrint instance."}),"\n",(0,i.jsx)(t.li,{children:"The API Key is the API key you copied from the OctoPrint instance."}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"testing-the-connection",children:"Testing the connection"}),"\n",(0,i.jsx)(t.p,{children:"Test the connection by clicking the Test Connection button in the printer dialog. If the connection is successful, you will see a green messages appear on the right.\nIf the connection is unsuccessful, you will see a red alerts appear."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"img.png",src:n(4688).Z+"",width:"313",height:"375"})}),"\n",(0,i.jsxs)(t.p,{children:["In case of an unsuccessful connection, please check the details you entered.\nCan't resolve the issue? Please contact us on ",(0,i.jsx)(t.a,{href:"https://discord.gg/mwA8uP8CMc",children:"Discord"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"creating-the-printer",children:"Creating the printer"}),"\n",(0,i.jsx)(t.p,{children:"Press the Create button to create the printer. If the printer has been created successfully, the printer will be shown in the printer list."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"img.png",src:n(2903).Z+"",width:"1910",height:"490"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"The printer list with three newly created printers."})})]})}function l(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},4892:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/software-create-printer-button-1c30b4a33fb5c9740461ac779dc81000.png"},5490:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/software-octoprint-connection-aa13667202b95c3303e56f1b6128821b.png"},3671:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/software-octoprint-created-63e8cc6032e021d280ca806b69da43cd.png"},1653:(e,t,n)=>{n.d(t,{Z:()=>i});const i="data:image/png;base64,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"},5112:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/software-octoprint-user-settings-a18623cc9e9b9078dc0c67e4a2a6c145.png"},8764:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/software-octoprint-virtual-printer-28a8c20f9796a0f477b643f85b605cf0.png"},1901:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/software-printer-create-dialog-ed29f5fe6ad5ae4402e90837128eece1.png"},2903:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/software-resulting-list-2caa1ff22a4900f4124d5d606e115342.png"},4688:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/software-test-connection-green-e988b9b11004d5ad02b6eeae38773557.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>o});var i=n(7294);const s={},r=i.createContext(s);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);