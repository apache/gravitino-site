"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[7716],{44119:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>d,toc:()=>h});var t=n(13274),l=n(43183),i=n(84866),s=n(68188);const r={title:"Manage metalake using Apache Gravitino",slug:"/manage-metalake-using-gravitino",date:new Date("2023-12-10T00:00:00.000Z"),keyword:"Gravitino metalake manage",license:"This software is licensed under the Apache License version 2."},o=void 0,d={id:"manage-metalake-using-gravitino",title:"Manage metalake using Apache Gravitino",description:"This page introduces how to manage metalake by Apache Gravitino. Metalake is a tenant-like concept in",source:"@site/versioned_docs/version-0.6.0-incubating/manage-metalake-using-gravitino.md",sourceDirName:".",slug:"/manage-metalake-using-gravitino",permalink:"/docs/0.6.0-incubating/manage-metalake-using-gravitino",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/manage-metalake-using-gravitino.md",tags:[],version:"0.6.0-incubating",lastUpdatedBy:"mchades",lastUpdatedAt:1729484604e3,frontMatter:{title:"Manage metalake using Apache Gravitino",slug:"/manage-metalake-using-gravitino",date:"2023-12-10T00:00:00.000Z",keyword:"Gravitino metalake manage",license:"This software is licensed under the Apache License version 2."},sidebar:"docs",previous:{title:"Use Gravitino playground",permalink:"/docs/0.6.0-incubating/how-to-use-the-playground"},next:{title:"Manage relational metadata",permalink:"/docs/0.6.0-incubating/manage-relational-metadata-using-gravitino"}},c={},h=[{value:"Metalake operations",id:"metalake-operations",level:2},{value:"Create a metalake",id:"create-a-metalake",level:3},{value:"Load a metalake",id:"load-a-metalake",level:3},{value:"Alter a metalake",id:"alter-a-metalake",level:3},{value:"Drop a metalake",id:"drop-a-metalake",level:3},{value:"List all metalakes",id:"list-all-metalakes",level:3}];function m(e){const a={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.p,{children:"This page introduces how to manage metalake by Apache Gravitino. Metalake is a tenant-like concept in\nGravitino, all the catalogs, users and roles are under a metalake. Typically, a metalake is\nmapping to a organization or a company."}),"\n",(0,t.jsx)(a.p,{children:"Through Gravitino, you can create, edit, and delete metalake. This page includes the following\ncontents:"}),"\n",(0,t.jsxs)(a.p,{children:["Assuming Gravitino has just started, and the host and port is ",(0,t.jsx)(a.a,{href:"http://localhost:8090",children:"http://localhost:8090"}),"."]}),"\n",(0,t.jsx)(a.h2,{id:"metalake-operations",children:"Metalake operations"}),"\n",(0,t.jsx)(a.h3,{id:"create-a-metalake",children:"Create a metalake"}),"\n",(0,t.jsxs)(a.p,{children:["You can create a metalake by sending a ",(0,t.jsx)(a.code,{children:"POST"})," request to the ",(0,t.jsx)(a.code,{children:"/api/metalakes"})," endpoint or just use the Gravitino Admin Java client.\nThe following is an example of creating a metalake:"]}),"\n",(0,t.jsxs)(i.A,{groupId:"language",queryString:!0,children:[(0,t.jsx)(s.default,{value:"shell",label:"Shell",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-shell",children:'curl -X POST -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json" -d \'{"name":"metalake","comment":"comment","properties":{}}\' \\\nhttp://localhost:8090/api/metalakes\n'})})}),(0,t.jsx)(s.default,{value:"java",label:"Java",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-java",children:'GravitinoAdminClient gravitinoAdminClient = GravitinoAdminClient\n    .builder("http://localhost:8090")\n    .build();\n\nGravitinoMetalake newMetalake = gravitinoAdminClient.createMetalake(\n    NameIdentifier.of("metalake"),\n    "This is a new metalake",\n    new HashMap<>());\n  // ...\n'})})}),(0,t.jsx)(s.default,{value:"python",label:"Python",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:'gravitino_admin_client: GravitinoAdminClient = GravitinoAdminClient(uri="http://localhost:8090")\ngravitino_admin_client.create_metalake(name="metalake", \n                                       comment="This is a new metalake", \n                                       properties={})\n'})})})]}),"\n",(0,t.jsx)(a.h3,{id:"load-a-metalake",children:"Load a metalake"}),"\n",(0,t.jsxs)(a.p,{children:["You can create a metalake by sending a ",(0,t.jsx)(a.code,{children:"GET"})," request to the ",(0,t.jsx)(a.code,{children:"/api/metalakes/{metalake_name}"})," endpoint or just use the Gravitino Java client. The following is an example of loading a metalake:"]}),"\n",(0,t.jsxs)(i.A,{groupId:"language",queryString:!0,children:[(0,t.jsx)(s.default,{value:"shell",label:"Shell",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-shell",children:'curl -X GET -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json"  http://localhost:8090/api/metalakes/metalake\n'})})}),(0,t.jsx)(s.default,{value:"java",label:"Java",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-java",children:'// ...\nGravitinoMetalake loaded = gravitinoAdminClient.loadMetalake(\n    NameIdentifier.of("metalake"));\n// ...\n'})})}),(0,t.jsx)(s.default,{value:"python",label:"Python",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:'gravitino_admin_client.load_metalake("metalake")\n'})})})]}),"\n",(0,t.jsx)(a.h3,{id:"alter-a-metalake",children:"Alter a metalake"}),"\n",(0,t.jsxs)(a.p,{children:["You can modify a metalake by sending a ",(0,t.jsx)(a.code,{children:"PUT"})," request to the ",(0,t.jsx)(a.code,{children:"/api/metalakes/{metalake_name}"})," endpoint or just use the Gravitino Java client. The following is an example of altering a metalake:"]}),"\n",(0,t.jsxs)(i.A,{groupId:"language",queryString:!0,children:[(0,t.jsx)(s.default,{value:"shell",label:"Shell",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-shell",children:'curl -X PUT -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json" -d \'{\n  "updates": [\n    {\n      "@type": "rename",\n      "newName": "metalake"\n    },\n    {\n      "@type": "setProperty",\n      "property": "key2",\n      "value": "value2"\n    }\n  ]\n}\' http://localhost:8090/api/metalakes/new_metalake\n'})})}),(0,t.jsx)(s.default,{value:"java",label:"Java",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-java",children:'// ...\nGravitinoMetalake renamed = gravitinoAdminClient.alterMetalake(\n    NameIdentifier.of("new_metalake"),\n    MetalakeChange.rename("new_metalake_renamed")\n);\n// ...\n'})})}),(0,t.jsx)(s.default,{value:"python",label:"Python",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:'changes = (\n    MetalakeChange.rename("metalake_new_name"),\n    MetalakeChange.update_comment("metalake_new_comment"),\n    MetalakeChange.remove_property("metalake_properties_key1"),\n    MetalakeChange.set_property("metalake_properties_key2", "metalake_properties_new_value"),\n)\n\nmetalake = gravitino_admin_client.alter_metalake("metalake_name", *changes)\n'})})})]}),"\n",(0,t.jsx)(a.p,{children:"Currently, Gravitino supports the following changes to a metalake:"}),"\n",(0,t.jsxs)(a.table,{children:[(0,t.jsx)(a.thead,{children:(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.th,{children:"Supported modification"}),(0,t.jsx)(a.th,{children:"JSON"}),(0,t.jsx)(a.th,{children:"Java"})]})}),(0,t.jsxs)(a.tbody,{children:[(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"Rename metalake"}),(0,t.jsx)(a.td,{children:(0,t.jsx)(a.code,{children:'{"@type":"rename","newName":"metalake_renamed"}'})}),(0,t.jsx)(a.td,{children:(0,t.jsx)(a.code,{children:'MetalakeChange.rename("metalake_renamed")'})})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"Update comment"}),(0,t.jsx)(a.td,{children:(0,t.jsx)(a.code,{children:'{"@type":"updateComment","newComment":"new_comment"}'})}),(0,t.jsx)(a.td,{children:(0,t.jsx)(a.code,{children:'MetalakeChange.updateComment("new_comment")'})})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"Set a property"}),(0,t.jsx)(a.td,{children:(0,t.jsx)(a.code,{children:'{"@type":"setProperty","property":"key1","value":"value1"}'})}),(0,t.jsx)(a.td,{children:(0,t.jsx)(a.code,{children:'MetalakeChange.setProperty("key1", "value1")'})})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"Remove a property"}),(0,t.jsx)(a.td,{children:(0,t.jsx)(a.code,{children:'{"@type":"removeProperty","property":"key1"}'})}),(0,t.jsx)(a.td,{children:(0,t.jsx)(a.code,{children:'MetalakeChange.removeProperty("key1")'})})]})]})]}),"\n",(0,t.jsx)(a.h3,{id:"drop-a-metalake",children:"Drop a metalake"}),"\n",(0,t.jsxs)(a.p,{children:["You can remove a metalake by sending a ",(0,t.jsx)(a.code,{children:"DELETE"})," request to the ",(0,t.jsx)(a.code,{children:"/api/metalakes/{metalake_name}"})," endpoint or just use the Gravitino Java client. The following is an example of dropping a metalake:"]}),"\n",(0,t.jsxs)(i.A,{groupId:"language",queryString:!0,children:[(0,t.jsx)(s.default,{value:"shell",label:"Shell",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-shell",children:'curl -X DELETE -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json" http://localhost:8090/api/metalakes/metalake\n'})})}),(0,t.jsx)(s.default,{value:"java",label:"Java",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-java",children:'// ...\nboolean success = gravitinoAdminClient.dropMetalake("metalake");\n// ...\n'})})}),(0,t.jsx)(s.default,{value:"python",label:"Python",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:'gravitino_admin_client.drop_metalake("metalake")\n'})})})]}),"\n",(0,t.jsx)(a.admonition,{type:"note",children:(0,t.jsx)(a.p,{children:"Current Gravitino doesn't support dropping a metalake in cascade mode, which means all the\ncatalogs, schemas and tables under the metalake need to be removed before dropping the metalake."})}),"\n",(0,t.jsx)(a.h3,{id:"list-all-metalakes",children:"List all metalakes"}),"\n",(0,t.jsxs)(a.p,{children:["You can list metalakes by sending a ",(0,t.jsx)(a.code,{children:"GET"})," request to the ",(0,t.jsx)(a.code,{children:"/api/metalakes"})," endpoint or just use the Gravitino Java client. The following is an example of listing all the metalake names:"]}),"\n",(0,t.jsxs)(i.A,{groupId:"language",queryString:!0,children:[(0,t.jsx)(s.default,{value:"shell",label:"Shell",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-shell",children:'curl -X GET -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json"  http://localhost:8090/api/metalakes\n'})})}),(0,t.jsx)(s.default,{value:"java",label:"Java",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-java",children:"// ...\nGravitinoMetalake[] allMetalakes = gravitinoAdminClient.listMetalakes();\n// ...\n"})})}),(0,t.jsx)(s.default,{value:"python",label:"Python",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:"metalake_list: List[GravitinoMetalake] = gravitino_admin_client.list_metalakes()\n"})})})]})]})}function p(e={}){const{wrapper:a}={...(0,l.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},84866:(e,a,n)=>{n.d(a,{A:()=>p});var t=n(79474),l=n(13526),i=n(28180),s=n(83003),r=n(52109);const o={tabList:"tabList_WQIc",tabItem:"tabItem_hjcQ"};var d=n(13274);function c(e){let{className:a,block:n,selectedValue:t,selectValue:s,tabValues:r}=e;const c=[],{blockElementScrollPositionUntilNextRender:h}=(0,i.a_)(),m=e=>{const a=e.currentTarget,n=c.indexOf(a),l=r[n].value;l!==t&&(h(a),s(l))},p=e=>{let a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;a=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;a=c[n]??c[c.length-1];break}}a?.focus()};return(0,d.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":n},a),children:r.map((e=>{let{value:a,label:n,attributes:i}=e;return(0,d.jsx)("li",{role:"tab",tabIndex:t===a?0:-1,"aria-selected":t===a,ref:e=>c.push(e),onKeyDown:p,onClick:m,...i,className:(0,l.A)("tabs__item",o.tabItem,i?.className,{"tabs__item--active":t===a}),children:n??a},a)}))})}function h(e){let{lazy:a,children:n,selectedValue:l}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){const e=i.find((e=>e.props.value===l));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,d.jsx)("div",{className:"margin-top--md",children:i.map(((e,a)=>(0,t.cloneElement)(e,{key:a,hidden:e.props.value!==l})))})}function m(e){const a=(0,s.u)(e);return(0,d.jsxs)("div",{className:(0,l.A)("tabs-container",o.tabList),children:[(0,d.jsx)(c,{...a,...e}),(0,d.jsx)(h,{...a,...e})]})}function p(e){const a=(0,r.default)();return(0,d.jsx)(m,{...e,children:(0,s.v)(e.children)},String(a))}}}]);