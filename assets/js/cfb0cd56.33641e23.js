"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[38002],{1445:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});n(79474);var a=n(13526);const i={tabItem:"tabItem_JtVc"};var r=n(13274);function l(e){let{children:t,hidden:n,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(i.tabItem,l),hidden:n,children:t})}},17014:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>s});var a=n(79474);const i={},r=a.createContext(i);function l(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),a.createElement(r.Provider,{value:t},e.children)}},48521:(e,t,n)=>{n.d(t,{A:()=>p});var a=n(79474),i=n(13526),r=n(34560),l=n(69671),s=n(49573);const d={tabList:"tabList_B_Yg",tabItem:"tabItem_UqCM"};var o=n(13274);function c(e){let{className:t,block:n,selectedValue:a,selectValue:l,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:h}=(0,r.a_)(),u=e=>{const t=e.currentTarget,n=c.indexOf(t),i=s[n].value;i!==a&&(h(t),l(i))},p=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,o.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,o.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>c.push(e),onKeyDown:p,onClick:u,...r,className:(0,i.A)("tabs__item",d.tabItem,r?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function h(e){let{lazy:t,children:n,selectedValue:i}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,o.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function u(e){const t=(0,l.u)(e);return(0,o.jsxs)("div",{className:(0,i.A)("tabs-container",d.tabList),children:[(0,o.jsx)(c,{...t,...e}),(0,o.jsx)(h,{...t,...e})]})}function p(e){const t=(0,s.default)();return(0,o.jsx)(u,{...e,children:(0,l.v)(e.children)},String(t))}},66712:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>o});var a=n(13274),i=n(17014);n(48521),n(1445);const r={title:"Hudi catalog",slug:"/lakehouse-hudi-catalog",keywords:["lakehouse","hudi","metadata"],license:"This software is licensed under the Apache License version 2."},l=void 0,s={id:"lakehouse-hudi-catalog",title:"Hudi catalog",description:"Introduction",source:"@site/docs/lakehouse-hudi-catalog.md",sourceDirName:".",slug:"/lakehouse-hudi-catalog",permalink:"/docs/next/lakehouse-hudi-catalog",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/lakehouse-hudi-catalog.md",tags:[],version:"current",lastUpdatedBy:"Justin Mclean",lastUpdatedAt:1740469354e3,frontMatter:{title:"Hudi catalog",slug:"/lakehouse-hudi-catalog",keywords:["lakehouse","hudi","metadata"],license:"This software is licensed under the Apache License version 2."},sidebar:"docs",previous:{title:"Paimon catalog",permalink:"/docs/next/lakehouse-paimon-catalog"},next:{title:"OceanBase catalog",permalink:"/docs/next/jdbc-oceanbase-catalog"}},d={},o=[{value:"Introduction",id:"introduction",level:2},{value:"Requirements and limitations",id:"requirements-and-limitations",level:3},{value:"Catalog",id:"catalog",level:2},{value:"Catalog capabilities",id:"catalog-capabilities",level:3},{value:"Catalog properties",id:"catalog-properties",level:3},{value:"Catalog operations",id:"catalog-operations",level:3},{value:"Schema",id:"schema",level:2},{value:"Schema capabilities",id:"schema-capabilities",level:3},{value:"Schema properties",id:"schema-properties",level:3},{value:"Schema operations",id:"schema-operations",level:3},{value:"Table",id:"table",level:2},{value:"Table capabilities",id:"table-capabilities",level:3},{value:"Table partitions",id:"table-partitions",level:3},{value:"Table sort orders",id:"table-sort-orders",level:3},{value:"Table distributions",id:"table-distributions",level:3},{value:"Table indexes",id:"table-indexes",level:3},{value:"Table properties",id:"table-properties",level:3},{value:"Table column types",id:"table-column-types",level:3},{value:"Table operations",id:"table-operations",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,a.jsx)(t.p,{children:"Apache Gravitino provides the ability to manage Apache Hudi metadata."}),"\n",(0,a.jsx)(t.h3,{id:"requirements-and-limitations",children:"Requirements and limitations"}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsxs)(t.p,{children:["Tested and verified with Apache Hudi ",(0,a.jsx)(t.code,{children:"0.15.0"}),"."]})}),"\n",(0,a.jsx)(t.h2,{id:"catalog",children:"Catalog"}),"\n",(0,a.jsx)(t.h3,{id:"catalog-capabilities",children:"Catalog capabilities"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Works as a catalog proxy, supporting ",(0,a.jsx)(t.code,{children:"HMS"})," as catalog backend."]}),"\n",(0,a.jsx)(t.li,{children:"Only support read operations (list and load) for Hudi schemas and tables."}),"\n",(0,a.jsx)(t.li,{children:"Doesn't support timeline management operations now."}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"catalog-properties",children:"Catalog properties"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Property name"}),(0,a.jsx)(t.th,{children:"Description"}),(0,a.jsx)(t.th,{children:"Default value"}),(0,a.jsx)(t.th,{children:"Required"}),(0,a.jsx)(t.th,{children:"Since Version"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"catalog-backend"})}),(0,a.jsxs)(t.td,{children:["Catalog backend of Gravitino Hudi catalog. Only supports ",(0,a.jsx)(t.code,{children:"hms"})," now."]}),(0,a.jsx)(t.td,{children:"(none)"}),(0,a.jsx)(t.td,{children:"Yes"}),(0,a.jsx)(t.td,{children:"0.7.0-incubating"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"uri"})}),(0,a.jsxs)(t.td,{children:["The URI associated with the backend. Such as ",(0,a.jsx)(t.code,{children:"thrift://127.0.0.1:9083"})," for HMS backend."]}),(0,a.jsx)(t.td,{children:"(none)"}),(0,a.jsx)(t.td,{children:"Yes"}),(0,a.jsx)(t.td,{children:"0.7.0-incubating"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"client.pool-size"})}),(0,a.jsx)(t.td,{children:"For HMS backend. The maximum number of Hive metastore clients in the pool for Gravitino."}),(0,a.jsx)(t.td,{children:"1"}),(0,a.jsx)(t.td,{children:"No"}),(0,a.jsx)(t.td,{children:"0.7.0-incubating"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"client.pool-cache.eviction-interval-ms"})}),(0,a.jsx)(t.td,{children:"For HMS backend. The cache pool eviction interval."}),(0,a.jsx)(t.td,{children:"300000"}),(0,a.jsx)(t.td,{children:"No"}),(0,a.jsx)(t.td,{children:"0.7.0-incubating"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"gravitino.bypass."})}),(0,a.jsxs)(t.td,{children:["Property name with this prefix passed down to the underlying backend client for use. Such as ",(0,a.jsx)(t.code,{children:"gravitino.bypass.hive.metastore.failure.retries = 3"})," indicate 3 times of retries upon failure of Thrift metastore calls for HMS backend."]}),(0,a.jsx)(t.td,{children:"(none)"}),(0,a.jsx)(t.td,{children:"No"}),(0,a.jsx)(t.td,{children:"0.7.0-incubating"})]})]})]}),"\n",(0,a.jsx)(t.h3,{id:"catalog-operations",children:"Catalog operations"}),"\n",(0,a.jsxs)(t.p,{children:["Please refer to ",(0,a.jsx)(t.a,{href:"/docs/next/manage-relational-metadata-using-gravitino#catalog-operations",children:"Manage Relational Metadata Using Gravitino"})," for more details."]}),"\n",(0,a.jsx)(t.h2,{id:"schema",children:"Schema"}),"\n",(0,a.jsx)(t.h3,{id:"schema-capabilities",children:"Schema capabilities"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Only support read operations: listSchema, loadSchema, and schemaExists."}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"schema-properties",children:"Schema properties"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["The ",(0,a.jsx)(t.code,{children:"Location"})," is an optional property that shows the storage path to the Hudi database"]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"schema-operations",children:"Schema operations"}),"\n",(0,a.jsxs)(t.p,{children:["Only support read operations: listSchema, loadSchema, and schemaExists.\nPlease refer to ",(0,a.jsx)(t.a,{href:"/docs/next/manage-relational-metadata-using-gravitino#schema-operations",children:"Manage Relational Metadata Using Gravitino"})," for more details."]}),"\n",(0,a.jsx)(t.h2,{id:"table",children:"Table"}),"\n",(0,a.jsx)(t.h3,{id:"table-capabilities",children:"Table capabilities"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Only support read operations: listTable, loadTable, and tableExists."}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"table-partitions",children:"Table partitions"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Support loading Hudi partitioned tables (Hudi only supports identity partitioning)."}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"table-sort-orders",children:"Table sort orders"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Doesn't support table sort orders."}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"table-distributions",children:"Table distributions"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Doesn't support table distributions."}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"table-indexes",children:"Table indexes"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Doesn't support table indexes."}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"table-properties",children:"Table properties"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"For HMS backend, it will bring out all the table parameters from the HMS."}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"table-column-types",children:"Table column types"}),"\n",(0,a.jsxs)(t.p,{children:["The following table shows the mapping between Gravitino and ",(0,a.jsx)(t.a,{href:"https://hudi.apache.org/docs/sql_ddl#supported-types",children:"Apache Hudi column types"}),":"]}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Gravitino Type"}),(0,a.jsx)(t.th,{children:"Apache Hudi Type"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"boolean"})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"boolean"})})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"integer"})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"int"})})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"long"})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"long"})})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"date"})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"date"})})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"timestamp"})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"timestamp"})})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"float"})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"float"})})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"double"})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"double"})})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"string"})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"string"})})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"decimal"})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"decimal"})})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"binary"})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"bytes"})})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"array"})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"array"})})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"map"})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"map"})})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"struct"})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"struct"})})]})]})]}),"\n",(0,a.jsx)(t.h3,{id:"table-operations",children:"Table operations"}),"\n",(0,a.jsxs)(t.p,{children:["Only support read operations: listTable, loadTable, and tableExists.\nPlease refer to ",(0,a.jsx)(t.a,{href:"/docs/next/manage-relational-metadata-using-gravitino#table-operations",children:"Manage Relational Metadata Using Gravitino"})," for more details."]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},69671:(e,t,n)=>{n.d(t,{u:()=>p,v:()=>o});var a=n(79474),i=n(20241),r=n(33255),l=n(25869),s=n(55522),d=n(38118);function o(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function c(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return o(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:i}}=e;return{value:t,label:n,attributes:a,default:i}}))}(n);return function(e){const t=(0,s.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function u(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,l=c(e),[s,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[p,x]=u({queryString:n,groupId:i}),[j,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,r]=(0,d.Dv)(n);return[i,(0,a.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:i}),m=(()=>{const e=p??j;return h({value:e,tabValues:l})?e:null})();(0,r.A)((()=>{m&&o(m)}),[m]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),x(e),b(e)}),[x,b,l]),tabValues:l}}}}]);