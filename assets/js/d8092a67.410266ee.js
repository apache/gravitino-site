"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[49068],{17014:(e,a,n)=>{n.d(a,{R:()=>i,x:()=>s});var t=n(79474);const l={},r=t.createContext(l);function i(e){const a=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),t.createElement(r.Provider,{value:a},e.children)}},35652:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var t=n(13274),l=n(17014),r=n(48578),i=n(86572);const s={title:"Manage metalake using Apache Gravitino",slug:"/manage-metalake-using-gravitino",date:new Date("2023-12-10T00:00:00.000Z"),keyword:"Gravitino metalake manage",license:"This software is licensed under the Apache License version 2."},o=void 0,c={id:"manage-metalake-using-gravitino",title:"Manage metalake using Apache Gravitino",description:"This page introduces how to manage metalake by Apache Gravitino. Metalake is a tenant-like concept in",source:"@site/versioned_docs/version-0.6.1-incubating/manage-metalake-using-gravitino.md",sourceDirName:".",slug:"/manage-metalake-using-gravitino",permalink:"/docs/0.6.1-incubating/manage-metalake-using-gravitino",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/manage-metalake-using-gravitino.md",tags:[],version:"0.6.1-incubating",frontMatter:{title:"Manage metalake using Apache Gravitino",slug:"/manage-metalake-using-gravitino",date:"2023-12-10T00:00:00.000Z",keyword:"Gravitino metalake manage",license:"This software is licensed under the Apache License version 2."},sidebar:"docs",previous:{title:"Use Gravitino playground",permalink:"/docs/0.6.1-incubating/how-to-use-the-playground"},next:{title:"Manage relational metadata",permalink:"/docs/0.6.1-incubating/manage-relational-metadata-using-gravitino"}},d={},u=[{value:"Metalake operations",id:"metalake-operations",level:2},{value:"Create a metalake",id:"create-a-metalake",level:3},{value:"Load a metalake",id:"load-a-metalake",level:3},{value:"Alter a metalake",id:"alter-a-metalake",level:3},{value:"Drop a metalake",id:"drop-a-metalake",level:3},{value:"List all metalakes",id:"list-all-metalakes",level:3}];function h(e){const a={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.p,{children:"This page introduces how to manage metalake by Apache Gravitino. Metalake is a tenant-like concept in\nGravitino, all the catalogs, users and roles are under a metalake. Typically, a metalake is\nmapping to a organization or a company."}),"\n",(0,t.jsx)(a.p,{children:"Through Gravitino, you can create, edit, and delete metalake. This page includes the following\ncontents:"}),"\n",(0,t.jsxs)(a.p,{children:["Assuming Gravitino has just started, and the host and port is ",(0,t.jsx)(a.a,{href:"http://localhost:8090",children:"http://localhost:8090"}),"."]}),"\n",(0,t.jsx)(a.h2,{id:"metalake-operations",children:"Metalake operations"}),"\n",(0,t.jsx)(a.h3,{id:"create-a-metalake",children:"Create a metalake"}),"\n",(0,t.jsxs)(a.p,{children:["You can create a metalake by sending a ",(0,t.jsx)(a.code,{children:"POST"})," request to the ",(0,t.jsx)(a.code,{children:"/api/metalakes"})," endpoint or just use the Gravitino Admin Java client.\nThe following is an example of creating a metalake:"]}),"\n",(0,t.jsxs)(r.A,{groupId:"language",queryString:!0,children:[(0,t.jsx)(i.default,{value:"shell",label:"Shell",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-shell",children:'curl -X POST -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json" -d \'{"name":"metalake","comment":"comment","properties":{}}\' \\\nhttp://localhost:8090/api/metalakes\n'})})}),(0,t.jsx)(i.default,{value:"java",label:"Java",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-java",children:'GravitinoAdminClient gravitinoAdminClient = GravitinoAdminClient\n    .builder("http://localhost:8090")\n    .build();\n\nGravitinoMetalake newMetalake = gravitinoAdminClient.createMetalake(\n    NameIdentifier.of("metalake"),\n    "This is a new metalake",\n    new HashMap<>());\n  // ...\n'})})}),(0,t.jsx)(i.default,{value:"python",label:"Python",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:'gravitino_admin_client: GravitinoAdminClient = GravitinoAdminClient(uri="http://localhost:8090")\ngravitino_admin_client.create_metalake(name="metalake", \n                                       comment="This is a new metalake", \n                                       properties={})\n'})})})]}),"\n",(0,t.jsx)(a.h3,{id:"load-a-metalake",children:"Load a metalake"}),"\n",(0,t.jsxs)(a.p,{children:["You can load a metalake by sending a ",(0,t.jsx)(a.code,{children:"GET"})," request to the ",(0,t.jsx)(a.code,{children:"/api/metalakes/{metalake_name}"})," endpoint or just use the Gravitino Java client. The following is an example of loading a metalake:"]}),"\n",(0,t.jsxs)(r.A,{groupId:"language",queryString:!0,children:[(0,t.jsx)(i.default,{value:"shell",label:"Shell",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-shell",children:'curl -X GET -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json"  http://localhost:8090/api/metalakes/metalake\n'})})}),(0,t.jsx)(i.default,{value:"java",label:"Java",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-java",children:'// ...\nGravitinoMetalake loaded = gravitinoAdminClient.loadMetalake(\n    NameIdentifier.of("metalake"));\n// ...\n'})})}),(0,t.jsx)(i.default,{value:"python",label:"Python",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:'gravitino_admin_client.load_metalake("metalake")\n'})})})]}),"\n",(0,t.jsx)(a.h3,{id:"alter-a-metalake",children:"Alter a metalake"}),"\n",(0,t.jsxs)(a.p,{children:["You can modify a metalake by sending a ",(0,t.jsx)(a.code,{children:"PUT"})," request to the ",(0,t.jsx)(a.code,{children:"/api/metalakes/{metalake_name}"})," endpoint or just use the Gravitino Java client. The following is an example of altering a metalake:"]}),"\n",(0,t.jsxs)(r.A,{groupId:"language",queryString:!0,children:[(0,t.jsx)(i.default,{value:"shell",label:"Shell",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-shell",children:'curl -X PUT -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json" -d \'{\n  "updates": [\n    {\n      "@type": "rename",\n      "newName": "metalake"\n    },\n    {\n      "@type": "setProperty",\n      "property": "key2",\n      "value": "value2"\n    }\n  ]\n}\' http://localhost:8090/api/metalakes/new_metalake\n'})})}),(0,t.jsx)(i.default,{value:"java",label:"Java",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-java",children:'// ...\nGravitinoMetalake renamed = gravitinoAdminClient.alterMetalake(\n    NameIdentifier.of("new_metalake"),\n    MetalakeChange.rename("new_metalake_renamed")\n);\n// ...\n'})})}),(0,t.jsx)(i.default,{value:"python",label:"Python",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:'changes = (\n    MetalakeChange.rename("metalake_new_name"),\n    MetalakeChange.update_comment("metalake_new_comment"),\n    MetalakeChange.remove_property("metalake_properties_key1"),\n    MetalakeChange.set_property("metalake_properties_key2", "metalake_properties_new_value"),\n)\n\nmetalake = gravitino_admin_client.alter_metalake("metalake_name", *changes)\n'})})})]}),"\n",(0,t.jsx)(a.p,{children:"Currently, Gravitino supports the following changes to a metalake:"}),"\n",(0,t.jsxs)(a.table,{children:[(0,t.jsx)(a.thead,{children:(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.th,{children:"Supported modification"}),(0,t.jsx)(a.th,{children:"JSON"}),(0,t.jsx)(a.th,{children:"Java"})]})}),(0,t.jsxs)(a.tbody,{children:[(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"Rename metalake"}),(0,t.jsx)(a.td,{children:(0,t.jsx)(a.code,{children:'{"@type":"rename","newName":"metalake_renamed"}'})}),(0,t.jsx)(a.td,{children:(0,t.jsx)(a.code,{children:'MetalakeChange.rename("metalake_renamed")'})})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"Update comment"}),(0,t.jsx)(a.td,{children:(0,t.jsx)(a.code,{children:'{"@type":"updateComment","newComment":"new_comment"}'})}),(0,t.jsx)(a.td,{children:(0,t.jsx)(a.code,{children:'MetalakeChange.updateComment("new_comment")'})})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"Set a property"}),(0,t.jsx)(a.td,{children:(0,t.jsx)(a.code,{children:'{"@type":"setProperty","property":"key1","value":"value1"}'})}),(0,t.jsx)(a.td,{children:(0,t.jsx)(a.code,{children:'MetalakeChange.setProperty("key1", "value1")'})})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"Remove a property"}),(0,t.jsx)(a.td,{children:(0,t.jsx)(a.code,{children:'{"@type":"removeProperty","property":"key1"}'})}),(0,t.jsx)(a.td,{children:(0,t.jsx)(a.code,{children:'MetalakeChange.removeProperty("key1")'})})]})]})]}),"\n",(0,t.jsx)(a.h3,{id:"drop-a-metalake",children:"Drop a metalake"}),"\n",(0,t.jsxs)(a.p,{children:["You can remove a metalake by sending a ",(0,t.jsx)(a.code,{children:"DELETE"})," request to the ",(0,t.jsx)(a.code,{children:"/api/metalakes/{metalake_name}"})," endpoint or just use the Gravitino Java client. The following is an example of dropping a metalake:"]}),"\n",(0,t.jsxs)(r.A,{groupId:"language",queryString:!0,children:[(0,t.jsx)(i.default,{value:"shell",label:"Shell",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-shell",children:'curl -X DELETE -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json" http://localhost:8090/api/metalakes/metalake\n'})})}),(0,t.jsx)(i.default,{value:"java",label:"Java",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-java",children:'// ...\nboolean success = gravitinoAdminClient.dropMetalake("metalake");\n// ...\n'})})}),(0,t.jsx)(i.default,{value:"python",label:"Python",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:'gravitino_admin_client.drop_metalake("metalake")\n'})})})]}),"\n",(0,t.jsx)(a.admonition,{type:"note",children:(0,t.jsx)(a.p,{children:"Current Gravitino doesn't support dropping a metalake in cascade mode, which means all the\ncatalogs, schemas and tables under the metalake need to be removed before dropping the metalake."})}),"\n",(0,t.jsx)(a.h3,{id:"list-all-metalakes",children:"List all metalakes"}),"\n",(0,t.jsxs)(a.p,{children:["You can list metalakes by sending a ",(0,t.jsx)(a.code,{children:"GET"})," request to the ",(0,t.jsx)(a.code,{children:"/api/metalakes"})," endpoint or just use the Gravitino Java client. The following is an example of listing all the metalake names:"]}),"\n",(0,t.jsxs)(r.A,{groupId:"language",queryString:!0,children:[(0,t.jsx)(i.default,{value:"shell",label:"Shell",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-shell",children:'curl -X GET -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json"  http://localhost:8090/api/metalakes\n'})})}),(0,t.jsx)(i.default,{value:"java",label:"Java",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-java",children:"// ...\nGravitinoMetalake[] allMetalakes = gravitinoAdminClient.listMetalakes();\n// ...\n"})})}),(0,t.jsx)(i.default,{value:"python",label:"Python",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:"metalake_list: List[GravitinoMetalake] = gravitino_admin_client.list_metalakes()\n"})})})]})]})}function m(e={}){const{wrapper:a}={...(0,l.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},48578:(e,a,n)=>{n.d(a,{A:()=>m});var t=n(79474),l=n(13526),r=n(5505),i=n(54638),s=n(49352);const o={tabList:"tabList_Bgbz",tabItem:"tabItem_O29R"};var c=n(13274);function d(e){let{className:a,block:n,selectedValue:t,selectValue:i,tabValues:s}=e;const d=[],{blockElementScrollPositionUntilNextRender:u}=(0,r.a_)(),h=e=>{const a=e.currentTarget,n=d.indexOf(a),l=s[n].value;l!==t&&(u(a),i(l))},m=e=>{let a=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;a=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;a=d[n]??d[d.length-1];break}}a?.focus()};return(0,c.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":n},a),children:s.map((e=>{let{value:a,label:n,attributes:r}=e;return(0,c.jsx)("li",{role:"tab",tabIndex:t===a?0:-1,"aria-selected":t===a,ref:e=>d.push(e),onKeyDown:m,onClick:h,...r,className:(0,l.A)("tabs__item",o.tabItem,r?.className,{"tabs__item--active":t===a}),children:n??a},a)}))})}function u(e){let{lazy:a,children:n,selectedValue:l}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){const e=r.find((e=>e.props.value===l));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,c.jsx)("div",{className:"margin-top--md",children:r.map(((e,a)=>(0,t.cloneElement)(e,{key:a,hidden:e.props.value!==l})))})}function h(e){const a=(0,i.u)(e);return(0,c.jsxs)("div",{className:(0,l.A)("tabs-container",o.tabList),children:[(0,c.jsx)(d,{...a,...e}),(0,c.jsx)(u,{...a,...e})]})}function m(e){const a=(0,s.default)();return(0,c.jsx)(h,{...e,children:(0,i.v)(e.children)},String(a))}},54638:(e,a,n)=>{n.d(a,{u:()=>m,v:()=>c});var t=n(79474),l=n(20241),r=n(97052),i=n(5290),s=n(37651),o=n(88679);function c(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:a,children:n}=e;return(0,t.useMemo)((()=>{const e=a??function(e){return c(e).map((e=>{let{props:{value:a,label:n,attributes:t,default:l}}=e;return{value:a,label:n,attributes:t,default:l}}))}(n);return function(e){const a=(0,s.X)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,n])}function u(e){let{value:a,tabValues:n}=e;return n.some((e=>e.value===a))}function h(e){let{queryString:a=!1,groupId:n}=e;const r=(0,l.W6)(),s=function(e){let{queryString:a=!1,groupId:n}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:a,groupId:n});return[(0,i.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const a=new URLSearchParams(r.location.search);a.set(s,e),r.replace({...r.location,search:a.toString()})}),[s,r])]}function m(e){const{defaultValue:a,queryString:n=!1,groupId:l}=e,i=d(e),[s,c]=(0,t.useState)((()=>function(e){let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!u({value:a,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:a,tabValues:i}))),[m,p]=h({queryString:n,groupId:l}),[g,v]=function(e){let{groupId:a}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(a),[l,r]=(0,o.Dv)(n);return[l,(0,t.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:l}),k=(()=>{const e=m??g;return u({value:e,tabValues:i})?e:null})();(0,r.A)((()=>{k&&c(k)}),[k]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!u({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),p(e),v(e)}),[p,v,i]),tabValues:i}}},86572:(e,a,n)=>{n.r(a),n.d(a,{default:()=>i});n(79474);var t=n(13526);const l={tabItem:"tabItem_VJ4w"};var r=n(13274);function i(e){let{children:a,hidden:n,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.A)(l.tabItem,i),hidden:n,children:a})}}}]);