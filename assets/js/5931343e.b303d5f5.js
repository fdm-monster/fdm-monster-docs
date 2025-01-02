"use strict";(self.webpackChunkfdm_monster_docs=self.webpackChunkfdm_monster_docs||[]).push([[5840],{904:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"configuration/yaml_import_export","title":"YAML Import and Export","description":"How to import and export configurations","source":"@site/docs/configuration/yaml_import_export.mdx","sourceDirName":"configuration","slug":"/configuration/yaml_import_export","permalink":"/docs/configuration/yaml_import_export","draft":false,"unlisted":false,"editUrl":"https://github.com/fdm-monster/fdm-monster-docs/edit/main/docs/configuration/yaml_import_export.mdx","tags":[],"version":"current","lastUpdatedBy":"Maurice Kevenaar","lastUpdatedAt":1730641007000,"frontMatter":{"title":"YAML Import and Export","description":"How to import and export configurations","slug":"/configuration/yaml_import_export"},"sidebar":"docs","previous":{"title":"Updating Client Bundle","permalink":"/docs/configuration/updating_client_bundle"},"next":{"title":"Software Usage","permalink":"/docs/software_usage"}}');var o=n(4848),i=n(8453);const s={title:"YAML Import and Export",description:"How to import and export configurations",slug:"/configuration/yaml_import_export"},a=void 0,c={},d=[{value:"YAML File Format",id:"yaml-file-format",level:2},{value:"User Interface",id:"user-interface",level:2},{value:"Conclusion",id:"conclusion",level:2}];function l(e){const t={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"The YAML import/export function allows users to export and import their printer and floor configurations in a YAML format."}),"\n",(0,o.jsx)(t.h2,{id:"yaml-file-format",children:"YAML File Format"}),"\n",(0,o.jsx)(t.p,{children:"Here is an example of a YAML file generated by the export function:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:"version: 1.5.1\nexportedAt: 2023-11-11T09:02:41.703Z\nconfig:\n  exportPrinters: true\n  exportFloorGrid: true\n  printerComparisonStrategiesByPriority:\n    - name\n    - url\n  exportFloors: true\n  floorComparisonStrategiesByPriority: floor\n  notes: 'Some notes, made this layout for the summer 23'' setup '\nprinters:\n  - id: 648f3e6d372112628bb8e404\n    disabledReason: null\n    enabled: true\n    dateAdded: 1687109229334\n    name: Dragon Eggggg\n    printerURL: http://demo.fdm-monster.net:5001\n    apiKey: asdasdasdasdasdasdasdasdasdasdas\nfloors:\n  - id: 64427f2d070a27047acd5e6e\n    floor: 2\n    name: Default Floor1_5_1\n    printers:\n      - floorId: 64427f2d070a27047acd5e6e\n        printerId: 648f3e6d372112628bb8e404\n        x: 0\n        'y': 0\n"})}),"\n",(0,o.jsx)(t.p,{children:"The YAML file contains the following sections:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"version"}),": The version of the YAML format used in the file."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"exportedAt"}),": The date and time when the file was exported."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"config"}),": The configuration settings used during the export process."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"printers"}),": The list of printers and their settings."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"floors"}),": The list of floors and their associated printers."]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"user-interface",children:"User Interface"}),"\n",(0,o.jsx)(t.p,{children:"Here are some screenshots of the user interface for the YAML import/export function:"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"UI screenshot 1",src:n(8144).A+"",width:"739",height:"549"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"UI screenshot 2",src:n(5271).A+"",width:"749",height:"303"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"UI screenshot 3",src:n(3273).A+"",width:"979",height:"237"})}),"\n",(0,o.jsx)(t.p,{children:"The first screenshot shows the main interface for the import/export function. The second screenshot shows the import dialog, where users can select a YAML file to import. The third screenshot shows the import button, which users can click to begin the import process."}),"\n",(0,o.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,o.jsx)(t.p,{children:"The YAML import/export function provides a convenient way for users to backup and transfer their printer and floor configurations. By following the format described in this documentation, users can ensure that their YAML files are correctly formatted for import."})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8144:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/export-ui-f2b0cf09c534bddb657f12c9eab03bcf.png"},5271:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/import-ui-0cd0454611cfc04745b5e72e60842cff.png"},3273:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/software-create-printer-button-a6fcdce85cca4e2b9017881903ab9325.png"},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var r=n(6540);const o={},i=r.createContext(o);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);