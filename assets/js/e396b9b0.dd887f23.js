"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[34915],{1445:(e,a,n)=>{n.r(a),n.d(a,{default:()=>r});n(79474);var l=n(13526);const t={tabItem:"tabItem_JtVc"};var i=n(13274);function r(e){let{children:a,hidden:n,className:r}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,l.A)(t.tabItem,r),hidden:n,children:a})}},4597:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>d,toc:()=>h});var l=n(13274),t=n(17014),i=n(48521),r=n(1445);const s={title:"Manage metalake using Apache Gravitino",slug:"/manage-metalake-using-gravitino",date:new Date("2023-12-10T00:00:00.000Z"),keyword:"Gravitino metalake manage",license:"This software is licensed under the Apache License version 2."},o=void 0,d={id:"manage-metalake-using-gravitino",title:"Manage metalake using Apache Gravitino",description:"This page introduces how to create, modify, view, and delete metalakes by using Gravitino.",source:"@site/docs/manage-metalake-using-gravitino.md",sourceDirName:".",slug:"/manage-metalake-using-gravitino",permalink:"/docs/next/manage-metalake-using-gravitino",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/manage-metalake-using-gravitino.md",tags:[],version:"current",lastUpdatedBy:"Justin Mclean",lastUpdatedAt:1740469354e3,frontMatter:{title:"Manage metalake using Apache Gravitino",slug:"/manage-metalake-using-gravitino",date:"2023-12-10T00:00:00.000Z",keyword:"Gravitino metalake manage",license:"This software is licensed under the Apache License version 2."},sidebar:"docs",previous:{title:"Use Gravitino playground",permalink:"/docs/next/how-to-use-the-playground"},next:{title:"Manage relational metadata",permalink:"/docs/next/manage-relational-metadata-using-gravitino"}},c={},h=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create a metalake",id:"create-a-metalake",level:2},{value:"Load a metalake",id:"load-a-metalake",level:2},{value:"Alter a metalake",id:"alter-a-metalake",level:2},{value:"Enable a metalake",id:"enable-a-metalake",level:2},{value:"Disable a metalake",id:"disable-a-metalake",level:2},{value:"Drop a metalake",id:"drop-a-metalake",level:2},{value:"List all metalakes",id:"list-all-metalakes",level:2}];function u(e){const a={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(a.p,{children:["This page introduces how to create, modify, view, and delete ",(0,l.jsx)(a.a,{href:"/docs/next/glossary#metalake",children:"metalakes"})," by using Gravitino."]}),"\n",(0,l.jsx)(a.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,l.jsxs)(a.p,{children:["You have installed and launched Gravitino. For more details, see ",(0,l.jsx)(a.a,{href:"/docs/next/getting-started",children:"Get started"}),"."]}),"\n",(0,l.jsxs)(a.p,{children:["Let's say, the access is ",(0,l.jsx)(a.a,{href:"http://localhost:8090",children:"http://localhost:8090"}),"."]}),"\n",(0,l.jsx)(a.h2,{id:"create-a-metalake",children:"Create a metalake"}),"\n",(0,l.jsxs)(a.p,{children:["To create a metalake, you can send a ",(0,l.jsx)(a.code,{children:"POST"})," request to the ",(0,l.jsx)(a.code,{children:"/api/metalakes"})," endpoint or use the Gravitino Admin client."]}),"\n",(0,l.jsx)(a.p,{children:"The following is an example of creating a metalake:"}),"\n",(0,l.jsxs)(i.A,{groupId:"language",queryString:!0,children:[(0,l.jsx)(r.default,{value:"shell",label:"Shell",children:(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-shell",children:'curl -X POST -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json" -d \'{"name":"metalake","comment":"This is a new metalake","properties":{}}\' \\\nhttp://localhost:8090/api/metalakes\n'})})}),(0,l.jsx)(r.default,{value:"java",label:"Java",children:(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-java",children:'GravitinoAdminClient gravitinoAdminClient = GravitinoAdminClient\n    .builder("http://localhost:8090")\n    .build();\n\nGravitinoMetalake newMetalake = gravitinoAdminClient.createMetalake(\n    NameIdentifier.of("metalake"),\n    "This is a new metalake",\n    new HashMap<>());\n  // ...\n'})})}),(0,l.jsx)(r.default,{value:"python",label:"Python",children:(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-python",children:'gravitino_admin_client: GravitinoAdminClient = GravitinoAdminClient(uri="http://localhost:8090")\ngravitino_admin_client.create_metalake(name="metalake", \n                                       comment="This is a new metalake", \n                                       properties={})\n'})})})]}),"\n",(0,l.jsx)(a.h2,{id:"load-a-metalake",children:"Load a metalake"}),"\n",(0,l.jsxs)(a.p,{children:["To load a metalake, you can send a ",(0,l.jsx)(a.code,{children:"GET"})," request to the ",(0,l.jsx)(a.code,{children:"/api/metalakes/{metalake_name}"})," endpoint or use the Gravitino Admin client."]}),"\n",(0,l.jsx)(a.p,{children:"The following is an example of loading a metalake:"}),"\n",(0,l.jsxs)(i.A,{groupId:"language",queryString:!0,children:[(0,l.jsx)(r.default,{value:"shell",label:"Shell",children:(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-shell",children:'curl -X GET -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json"  http://localhost:8090/api/metalakes/metalake\n'})})}),(0,l.jsx)(r.default,{value:"java",label:"Java",children:(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-java",children:'// ...\nGravitinoMetalake loaded = gravitinoAdminClient.loadMetalake(\n    NameIdentifier.of("metalake"));\n// ...\n'})})}),(0,l.jsx)(r.default,{value:"python",label:"Python",children:(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-python",children:'gravitino_admin_client.load_metalake("metalake")\n'})})})]}),"\n",(0,l.jsx)(a.h2,{id:"alter-a-metalake",children:"Alter a metalake"}),"\n",(0,l.jsxs)(a.p,{children:["To alter a metalake, you can send a ",(0,l.jsx)(a.code,{children:"PUT"})," request to the ",(0,l.jsx)(a.code,{children:"/api/metalakes/{metalake_name}"})," endpoint or use the Gravitino Admin client."]}),"\n",(0,l.jsx)(a.p,{children:"The following is an example of renaming a metalake:"}),"\n",(0,l.jsxs)(i.A,{groupId:"language",queryString:!0,children:[(0,l.jsx)(r.default,{value:"shell",label:"Shell",children:(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-shell",children:'curl -X PUT -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json" -d \'{\n  "updates": [\n    {\n      "@type": "rename",\n      "newName": "metalake_renamed"\n    }\n  ]\n}\' http://localhost:8090/api/metalakes/metalake\n'})})}),(0,l.jsx)(r.default,{value:"java",label:"Java",children:(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-java",children:'// ...\nGravitinoMetalake renamed = gravitinoAdminClient.alterMetalake(\n    NameIdentifier.of("metalake"),\n    MetalakeChange.rename("metalake_renamed")\n);\n// ...\n'})})}),(0,l.jsx)(r.default,{value:"python",label:"Python",children:(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-python",children:'changes = (\n    MetalakeChange.rename("metalake_renamed"),\n)\n\nmetalake = gravitino_admin_client.alter_metalake("metalake", *changes)\n'})})})]}),"\n",(0,l.jsx)(a.p,{children:"The following table outlines the supported modifications that you can make to a metalake:"}),"\n",(0,l.jsxs)(a.table,{children:[(0,l.jsx)(a.thead,{children:(0,l.jsxs)(a.tr,{children:[(0,l.jsx)(a.th,{children:"Supported modification"}),(0,l.jsx)(a.th,{children:"JSON"}),(0,l.jsx)(a.th,{children:"Java"}),(0,l.jsx)(a.th,{children:"Python"})]})}),(0,l.jsxs)(a.tbody,{children:[(0,l.jsxs)(a.tr,{children:[(0,l.jsx)(a.td,{children:"Rename metalake"}),(0,l.jsx)(a.td,{children:(0,l.jsx)(a.code,{children:'{"@type":"rename","newName":"metalake_renamed"}'})}),(0,l.jsx)(a.td,{children:(0,l.jsx)(a.code,{children:'MetalakeChange.rename("metalake_renamed")'})}),(0,l.jsx)(a.td,{children:(0,l.jsx)(a.code,{children:'MetalakeChange.rename("metalake_renamed")'})})]}),(0,l.jsxs)(a.tr,{children:[(0,l.jsx)(a.td,{children:"Update comment"}),(0,l.jsx)(a.td,{children:(0,l.jsx)(a.code,{children:'{"@type":"updateComment","newComment":"new_comment"}'})}),(0,l.jsx)(a.td,{children:(0,l.jsx)(a.code,{children:'MetalakeChange.updateComment("new_comment")'})}),(0,l.jsx)(a.td,{children:(0,l.jsx)(a.code,{children:'MetalakeChange.update_comment("new_comment")'})})]}),(0,l.jsxs)(a.tr,{children:[(0,l.jsx)(a.td,{children:"Set property"}),(0,l.jsx)(a.td,{children:(0,l.jsx)(a.code,{children:'{"@type":"setProperty","property":"key1","value":"value1"}'})}),(0,l.jsx)(a.td,{children:(0,l.jsx)(a.code,{children:'MetalakeChange.setProperty("key1", "value1")'})}),(0,l.jsx)(a.td,{children:(0,l.jsx)(a.code,{children:'MetalakeChange.set_property("key1", "value1")'})})]}),(0,l.jsxs)(a.tr,{children:[(0,l.jsx)(a.td,{children:"Remove property"}),(0,l.jsx)(a.td,{children:(0,l.jsx)(a.code,{children:'{"@type":"removeProperty","property":"key1"}'})}),(0,l.jsx)(a.td,{children:(0,l.jsx)(a.code,{children:'MetalakeChange.removeProperty("key1")'})}),(0,l.jsx)(a.td,{children:(0,l.jsx)(a.code,{children:'MetalakeChange.remove_property("key1")'})})]})]})]}),"\n",(0,l.jsx)(a.h2,{id:"enable-a-metalake",children:"Enable a metalake"}),"\n",(0,l.jsxs)(a.p,{children:["Metalake has a reserved property - ",(0,l.jsx)(a.code,{children:"in-use"}),", which indicates whether the metalake is available for use. By default, the ",(0,l.jsx)(a.code,{children:"in-use"})," property is set to ",(0,l.jsx)(a.code,{children:"true"}),".\nTo enable a disabled metalake, you can send a ",(0,l.jsx)(a.code,{children:"PATCH"})," request to the ",(0,l.jsx)(a.code,{children:"/api/metalakes/{metalake_name}"})," endpoint or use the Gravitino Admin client."]}),"\n",(0,l.jsx)(a.p,{children:"The following is an example of enabling a metalake:"}),"\n",(0,l.jsxs)(i.A,{groupId:"language",queryString:!0,children:[(0,l.jsx)(r.default,{value:"shell",label:"Shell",children:(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-shell",children:'curl -X PATCH -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json" -d \'{"inUse": true}\' \\\nhttp://localhost:8090/api/metalakes/metalake\n'})})}),(0,l.jsx)(r.default,{value:"java",label:"Java",children:(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-java",children:'GravitinoAdminClient gravitinoAdminClient = GravitinoAdminClient\n    .builder("http://localhost:8090")\n    .build();\n\ngravitinoAdminClient.enableMetalake("metalake");\n  // ...\n'})})}),(0,l.jsx)(r.default,{value:"python",label:"Python",children:(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-python",children:'gravitino_admin_client: GravitinoAdminClient = GravitinoAdminClient(uri="http://localhost:8090")\ngravitino_admin_client.enable_metalake("metalake")\n'})})})]}),"\n",(0,l.jsx)(a.admonition,{type:"info",children:(0,l.jsx)(a.p,{children:"This operation does nothing if the metalake is already enabled."})}),"\n",(0,l.jsx)(a.h2,{id:"disable-a-metalake",children:"Disable a metalake"}),"\n",(0,l.jsx)(a.p,{children:"Once a metalake is disabled:"}),"\n",(0,l.jsxs)(a.ul,{children:["\n",(0,l.jsxs)(a.li,{children:["Users can only ",(0,l.jsx)(a.a,{href:"#list-all-metalakes",children:"list"}),", ",(0,l.jsx)(a.a,{href:"#load-a-metalake",children:"load"}),", ",(0,l.jsx)(a.a,{href:"#drop-a-metalake",children:"drop"}),", or ",(0,l.jsx)(a.a,{href:"#enable-a-metalake",children:"enable"})," it."]}),"\n",(0,l.jsx)(a.li,{children:"Any other operation on the metalake or its sub-entities will result in an error."}),"\n"]}),"\n",(0,l.jsxs)(a.p,{children:["To disable a metalake, you can send a ",(0,l.jsx)(a.code,{children:"PATCH"})," request to the ",(0,l.jsx)(a.code,{children:"/api/metalakes/{metalake_name}"})," endpoint or use the Gravitino Admin client."]}),"\n",(0,l.jsx)(a.p,{children:"The following is an example of disabling a metalake:"}),"\n",(0,l.jsxs)(i.A,{groupId:"language",queryString:!0,children:[(0,l.jsx)(r.default,{value:"shell",label:"Shell",children:(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-shell",children:'curl -X PATCH -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json" -d \'{"inUse": false}\' \\\nhttp://localhost:8090/api/metalakes/metalake\n'})})}),(0,l.jsx)(r.default,{value:"java",label:"Java",children:(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-java",children:'GravitinoAdminClient gravitinoAdminClient = GravitinoAdminClient\n    .builder("http://localhost:8090")\n    .build();\n\ngravitinoAdminClient.disableMetalake("metalake");\n  // ...\n'})})}),(0,l.jsx)(r.default,{value:"python",label:"Python",children:(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-python",children:'gravitino_admin_client: GravitinoAdminClient = GravitinoAdminClient(uri="http://localhost:8090")\ngravitino_admin_client.disable_metalake("metalake")\n'})})})]}),"\n",(0,l.jsx)(a.admonition,{type:"info",children:(0,l.jsx)(a.p,{children:"This operation does nothing if the metalake is already disabled."})}),"\n",(0,l.jsx)(a.h2,{id:"drop-a-metalake",children:"Drop a metalake"}),"\n",(0,l.jsx)(a.p,{children:'Deleting a metalake by "force" is not a default behavior, so please make sure:'}),"\n",(0,l.jsxs)(a.ul,{children:["\n",(0,l.jsx)(a.li,{children:"There are no catalogs under the metalake. Otherwise, you will get an error."}),"\n",(0,l.jsxs)(a.li,{children:["The metalake is ",(0,l.jsx)(a.a,{href:"#disable-a-metalake",children:"disabled"}),". Otherwise, you will get an error."]}),"\n"]}),"\n",(0,l.jsx)(a.p,{children:'Deleting a metalake by "force" will:'}),"\n",(0,l.jsxs)(a.ul,{children:["\n",(0,l.jsx)(a.li,{children:"Delete all sub-entities (tags, catalogs, schemas, etc.) under the metalake."}),"\n",(0,l.jsx)(a.li,{children:"Delete the metalake itself even if it is enabled."}),"\n",(0,l.jsx)(a.li,{children:"Not delete the external resources (such as database, table, etc.) associated with sub-entities unless they are managed (such as managed fileset)."}),"\n"]}),"\n",(0,l.jsxs)(a.p,{children:["To drop a metalake, you can send a ",(0,l.jsx)(a.code,{children:"DELETE"})," request to the ",(0,l.jsx)(a.code,{children:"/api/metalakes/{metalake_name}"})," endpoint or use the Gravitino Admin client."]}),"\n",(0,l.jsx)(a.p,{children:"The following is an example of dropping a metalake:"}),"\n",(0,l.jsxs)(i.A,{groupId:"language",queryString:!0,children:[(0,l.jsx)(r.default,{value:"shell",label:"Shell",children:(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-shell",children:'curl -X DELETE -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json" http://localhost:8090/api/metalakes/metalake?force=false\n'})})}),(0,l.jsx)(r.default,{value:"java",label:"Java",children:(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-java",children:'// ...\n// force can be true or false\nboolean success = gravitinoAdminClient.dropMetalake("metalake", false);\n// ...\n'})})}),(0,l.jsx)(r.default,{value:"python",label:"Python",children:(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-python",children:'gravitino_admin_client.drop_metalake("metalake", force=True)\n'})})})]}),"\n",(0,l.jsx)(a.h2,{id:"list-all-metalakes",children:"List all metalakes"}),"\n",(0,l.jsxs)(a.p,{children:["To view all your metalakes, you can send a ",(0,l.jsx)(a.code,{children:"GET"})," request to the ",(0,l.jsx)(a.code,{children:"/api/metalakes"})," endpoint or use the Gravitino Admin client."]}),"\n",(0,l.jsx)(a.p,{children:"The following is an example of listing all metalakes:"}),"\n",(0,l.jsxs)(i.A,{groupId:"language",queryString:!0,children:[(0,l.jsx)(r.default,{value:"shell",label:"Shell",children:(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-shell",children:'curl -X GET -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json"  http://localhost:8090/api/metalakes\n'})})}),(0,l.jsx)(r.default,{value:"java",label:"Java",children:(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-java",children:"// ...\nGravitinoMetalake[] allMetalakes = gravitinoAdminClient.listMetalakes();\n// ...\n"})})}),(0,l.jsx)(r.default,{value:"python",label:"Python",children:(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-python",children:"metalake_list: List[GravitinoMetalake] = gravitino_admin_client.list_metalakes()\n"})})})]})]})}function m(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,l.jsx)(a,{...e,children:(0,l.jsx)(u,{...e})}):u(e)}},17014:(e,a,n)=>{n.d(a,{R:()=>r,x:()=>s});var l=n(79474);const t={},i=l.createContext(t);function r(e){const a=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),l.createElement(i.Provider,{value:a},e.children)}},48521:(e,a,n)=>{n.d(a,{A:()=>m});var l=n(79474),t=n(13526),i=n(34560),r=n(69671),s=n(49573);const o={tabList:"tabList_B_Yg",tabItem:"tabItem_UqCM"};var d=n(13274);function c(e){let{className:a,block:n,selectedValue:l,selectValue:r,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:h}=(0,i.a_)(),u=e=>{const a=e.currentTarget,n=c.indexOf(a),t=s[n].value;t!==l&&(h(a),r(t))},m=e=>{let a=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;a=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;a=c[n]??c[c.length-1];break}}a?.focus()};return(0,d.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":n},a),children:s.map((e=>{let{value:a,label:n,attributes:i}=e;return(0,d.jsx)("li",{role:"tab",tabIndex:l===a?0:-1,"aria-selected":l===a,ref:e=>c.push(e),onKeyDown:m,onClick:u,...i,className:(0,t.A)("tabs__item",o.tabItem,i?.className,{"tabs__item--active":l===a}),children:n??a},a)}))})}function h(e){let{lazy:a,children:n,selectedValue:t}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){const e=i.find((e=>e.props.value===t));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return(0,d.jsx)("div",{className:"margin-top--md",children:i.map(((e,a)=>(0,l.cloneElement)(e,{key:a,hidden:e.props.value!==t})))})}function u(e){const a=(0,r.u)(e);return(0,d.jsxs)("div",{className:(0,t.A)("tabs-container",o.tabList),children:[(0,d.jsx)(c,{...a,...e}),(0,d.jsx)(h,{...a,...e})]})}function m(e){const a=(0,s.default)();return(0,d.jsx)(u,{...e,children:(0,r.v)(e.children)},String(a))}},69671:(e,a,n)=>{n.d(a,{u:()=>m,v:()=>d});var l=n(79474),t=n(20241),i=n(33255),r=n(25869),s=n(55522),o=n(38118);function d(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function c(e){const{values:a,children:n}=e;return(0,l.useMemo)((()=>{const e=a??function(e){return d(e).map((e=>{let{props:{value:a,label:n,attributes:l,default:t}}=e;return{value:a,label:n,attributes:l,default:t}}))}(n);return function(e){const a=(0,s.X)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,n])}function h(e){let{value:a,tabValues:n}=e;return n.some((e=>e.value===a))}function u(e){let{queryString:a=!1,groupId:n}=e;const i=(0,t.W6)(),s=function(e){let{queryString:a=!1,groupId:n}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:a,groupId:n});return[(0,r.aZ)(s),(0,l.useCallback)((e=>{if(!s)return;const a=new URLSearchParams(i.location.search);a.set(s,e),i.replace({...i.location,search:a.toString()})}),[s,i])]}function m(e){const{defaultValue:a,queryString:n=!1,groupId:t}=e,r=c(e),[s,d]=(0,l.useState)((()=>function(e){let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!h({value:a,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const l=n.find((e=>e.default))??n[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:a,tabValues:r}))),[m,p]=u({queryString:n,groupId:t}),[j,g]=function(e){let{groupId:a}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(a),[t,i]=(0,o.Dv)(n);return[t,(0,l.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:t}),x=(()=>{const e=m??j;return h({value:e,tabValues:r})?e:null})();(0,i.A)((()=>{x&&d(x)}),[x]);return{selectedValue:s,selectValue:(0,l.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);d(e),p(e),g(e)}),[p,g,r]),tabValues:r}}}}]);