"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[76897],{1445:(e,n,t)=>{t.r(n),t.d(n,{default:()=>a});t(79474);var i=t(13526);const r={tabItem:"tabItem_JtVc"};var s=t(13274);function a(e){let{children:n,hidden:t,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,i.A)(r.tabItem,a),hidden:t,children:n})}},17014:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var i=t(79474);const r={},s=i.createContext(r);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:n},e.children)}},48521:(e,n,t)=>{t.d(n,{A:()=>p});var i=t(79474),r=t(13526),s=t(34560),a=t(69671),l=t(49573);const o={tabList:"tabList_B_Yg",tabItem:"tabItem_UqCM"};var d=t(13274);function c(e){let{className:n,block:t,selectedValue:i,selectValue:a,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:h}=(0,s.a_)(),u=e=>{const n=e.currentTarget,t=c.indexOf(n),r=l[t].value;r!==i&&(h(n),a(r))},p=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,d.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,d.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>c.push(e),onKeyDown:p,onClick:u,...s,className:(0,r.A)("tabs__item",o.tabItem,s?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function h(e){let{lazy:n,children:t,selectedValue:r}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,d.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function u(e){const n=(0,a.u)(e);return(0,d.jsxs)("div",{className:(0,r.A)("tabs-container",o.tabList),children:[(0,d.jsx)(c,{...n,...e}),(0,d.jsx)(h,{...n,...e})]})}function p(e){const n=(0,l.default)();return(0,d.jsx)(u,{...e,children:(0,a.v)(e.children)},String(n))}},69671:(e,n,t)=>{t.d(n,{u:()=>p,v:()=>d});var i=t(79474),r=t(20241),s=t(33255),a=t(25869),l=t(55522),o=t(38118);function d(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function c(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:r}}=e;return{value:n,label:t,attributes:i,default:r}}))}(t);return function(e){const n=(0,l.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function u(e){let{queryString:n=!1,groupId:t}=e;const s=(0,r.W6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,a.aZ)(l),(0,i.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(s.location.search);n.set(l,e),s.replace({...s.location,search:n.toString()})}),[l,s])]}function p(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,a=c(e),[l,d]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:a}))),[p,x]=u({queryString:t,groupId:r}),[j,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,o.Dv)(t);return[r,(0,i.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),b=(()=>{const e=p??j;return h({value:e,tabValues:a})?e:null})();(0,s.A)((()=>{b&&d(b)}),[b]);return{selectedValue:l,selectValue:(0,i.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);d(e),x(e),m(e)}),[x,m,a]),tabValues:a}}},75048:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var i=t(13274),r=t(17014),s=t(48521),a=t(1445);const l={title:"Apache Doris catalog",slug:"/jdbc-doris-catalog",keywords:["jdbc","Apache Doris","metadata"],license:"This software is licensed under the Apache License version 2."},o=void 0,d={id:"jdbc-doris-catalog",title:"Apache Doris catalog",description:"Introduction",source:"@site/versioned_docs/version-0.6.1-incubating/jdbc-doris-catalog.md",sourceDirName:".",slug:"/jdbc-doris-catalog",permalink:"/docs/0.6.1-incubating/jdbc-doris-catalog",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/jdbc-doris-catalog.md",tags:[],version:"0.6.1-incubating",lastUpdatedBy:"Justin Mclean",lastUpdatedAt:1740469354e3,frontMatter:{title:"Apache Doris catalog",slug:"/jdbc-doris-catalog",keywords:["jdbc","Apache Doris","metadata"],license:"This software is licensed under the Apache License version 2."},sidebar:"docs",previous:{title:"PostgreSQL catalog",permalink:"/docs/0.6.1-incubating/jdbc-postgresql-catalog"},next:{title:"Paimon catalog",permalink:"/docs/0.6.1-incubating/lakehouse-paimon-catalog"}},c={},h=[{value:"Introduction",id:"introduction",level:2},{value:"Catalog",id:"catalog",level:2},{value:"Catalog capabilities",id:"catalog-capabilities",level:3},{value:"Catalog properties",id:"catalog-properties",level:3},{value:"Catalog operations",id:"catalog-operations",level:3},{value:"Schema",id:"schema",level:2},{value:"Schema capabilities",id:"schema-capabilities",level:3},{value:"Schema properties",id:"schema-properties",level:3},{value:"Schema operations",id:"schema-operations",level:3},{value:"Table",id:"table",level:2},{value:"Table capabilities",id:"table-capabilities",level:3},{value:"Table column types",id:"table-column-types",level:4},{value:"Table column auto-increment",id:"table-column-auto-increment",level:4},{value:"Table properties",id:"table-properties",level:3},{value:"Table indexes",id:"table-indexes",level:3},{value:"Table partitions",id:"table-partitions",level:3},{value:"Table distribution",id:"table-distribution",level:3},{value:"Table operations",id:"table-operations",level:3},{value:"Alter table operations",id:"alter-table-operations",level:4}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsxs)(n.p,{children:["Apache Gravitino provides the ability to manage ",(0,i.jsx)(n.a,{href:"https://doris.apache.org/",children:"Apache Doris"})," metadata through JDBC connection."]}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsxs)(n.p,{children:["Gravitino saves some system information in schema and table comments, like\n",(0,i.jsx)(n.code,{children:"(From Gravitino, DO NOT EDIT: gravitino.v1.uid1078334182909406185)"}),", please don't change or remove this message."]})}),"\n",(0,i.jsx)(n.h2,{id:"catalog",children:"Catalog"}),"\n",(0,i.jsx)(n.h3,{id:"catalog-capabilities",children:"Catalog capabilities"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Gravitino catalog corresponds to the Doris instance."}),"\n",(0,i.jsx)(n.li,{children:"Supports metadata management of Doris (1.2.x)."}),"\n",(0,i.jsx)(n.li,{children:"Supports table index."}),"\n",(0,i.jsxs)(n.li,{children:["Supports ",(0,i.jsx)(n.a,{href:"/docs/0.6.1-incubating/manage-relational-metadata-using-gravitino#table-column-default-value",children:"column default value"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"catalog-properties",children:"Catalog properties"}),"\n",(0,i.jsxs)(n.p,{children:["You can pass to a Doris data source any property that isn't defined by Gravitino by adding\n",(0,i.jsx)(n.code,{children:"gravitino.bypass."})," prefix as a catalog property. For example, catalog property\n",(0,i.jsx)(n.code,{children:"gravitino.bypass.maxWaitMillis"})," will pass ",(0,i.jsx)(n.code,{children:"maxWaitMillis"})," to the data source property."]}),"\n",(0,i.jsxs)(n.p,{children:["You can check the relevant data source configuration in\n",(0,i.jsx)(n.a,{href:"https://commons.apache.org/proper/commons-dbcp/configuration.html",children:"data source properties"})," for\nmore details."]}),"\n",(0,i.jsxs)(n.p,{children:["Besides the ",(0,i.jsx)(n.a,{href:"/docs/0.6.1-incubating/gravitino-server-config#gravitino-catalog-properties-configuration",children:"common catalog properties"}),", the Doris catalog has the following properties:"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Configuration item"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Default value"}),(0,i.jsx)(n.th,{children:"Required"}),(0,i.jsx)(n.th,{children:"Since Version"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"jdbc-url"})}),(0,i.jsxs)(n.td,{children:["JDBC URL for connecting to the database. For example, ",(0,i.jsx)(n.code,{children:"jdbc:mysql://localhost:9030"})]}),(0,i.jsx)(n.td,{children:"(none)"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"0.5.0"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"jdbc-driver"})}),(0,i.jsxs)(n.td,{children:["The driver of the JDBC connection. For example, ",(0,i.jsx)(n.code,{children:"com.mysql.jdbc.Driver"}),"."]}),(0,i.jsx)(n.td,{children:"(none)"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"0.5.0"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"jdbc-user"})}),(0,i.jsx)(n.td,{children:"The JDBC user name."}),(0,i.jsx)(n.td,{children:"(none)"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"0.5.0"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"jdbc-password"})}),(0,i.jsx)(n.td,{children:"The JDBC password."}),(0,i.jsx)(n.td,{children:"(none)"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"0.5.0"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"jdbc.pool.min-size"})}),(0,i.jsxs)(n.td,{children:["The minimum number of connections in the pool. ",(0,i.jsx)(n.code,{children:"2"})," by default."]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"2"})}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"0.5.0"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"jdbc.pool.max-size"})}),(0,i.jsxs)(n.td,{children:["The maximum number of connections in the pool. ",(0,i.jsx)(n.code,{children:"10"})," by default."]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"10"})}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"0.5.0"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"jdbc.pool.max-size"})}),(0,i.jsxs)(n.td,{children:["The maximum number of connections in the pool. ",(0,i.jsx)(n.code,{children:"10"})," by default."]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"10"})}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"0.5.0"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"replication_num"})}),(0,i.jsxs)(n.td,{children:["The number of replications for the table. If not specified and the number of backend servers less than 3, then the default value is 1; If not specified and the number of backend servers greater or equals to 3, the default value (3) in Doris server will be used. For more, please see the ",(0,i.jsx)(n.a,{href:"https://doris.apache.org/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE/",children:"doc"})]}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"1"})," or ",(0,i.jsx)(n.code,{children:"3"})]}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"0.6.0-incubating"})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["Before using the Doris Catalog, you must download the corresponding JDBC driver to the ",(0,i.jsx)(n.code,{children:"catalogs/jdbc-doris/libs"})," directory.\nGravitino doesn't package the JDBC driver for Doris due to licensing issues."]}),"\n",(0,i.jsx)(n.h3,{id:"catalog-operations",children:"Catalog operations"}),"\n",(0,i.jsxs)(n.p,{children:["Refer to ",(0,i.jsx)(n.a,{href:"/docs/0.6.1-incubating/manage-relational-metadata-using-gravitino#catalog-operations",children:"Manage Relational Metadata Using Gravitino"})," for more details."]}),"\n",(0,i.jsx)(n.h2,{id:"schema",children:"Schema"}),"\n",(0,i.jsx)(n.h3,{id:"schema-capabilities",children:"Schema capabilities"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Gravitino's schema concept corresponds to the Doris database."}),"\n",(0,i.jsx)(n.li,{children:"Supports creating schema."}),"\n",(0,i.jsx)(n.li,{children:"Supports dropping schema."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"schema-properties",children:"Schema properties"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Support schema properties, including Doris database properties and user-defined properties."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"schema-operations",children:"Schema operations"}),"\n",(0,i.jsxs)(n.p,{children:["Please refer to\n",(0,i.jsx)(n.a,{href:"/docs/0.6.1-incubating/manage-relational-metadata-using-gravitino#schema-operations",children:"Manage Relational Metadata Using Gravitino"})," for more details."]}),"\n",(0,i.jsx)(n.h2,{id:"table",children:"Table"}),"\n",(0,i.jsx)(n.h3,{id:"table-capabilities",children:"Table capabilities"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Gravitino's table concept corresponds to the Doris table."}),"\n",(0,i.jsx)(n.li,{children:"Supports index."}),"\n",(0,i.jsxs)(n.li,{children:["Supports ",(0,i.jsx)(n.a,{href:"/docs/0.6.1-incubating/manage-relational-metadata-using-gravitino#table-column-default-value",children:"column default value"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"table-column-types",children:"Table column types"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Gravitino Type"}),(0,i.jsx)(n.th,{children:"Doris Type"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Boolean"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Boolean"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Byte"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"TinyInt"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Short"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"SmallInt"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Integer"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Int"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Long"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"BigInt"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Float"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Float"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Double"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Double"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Decimal"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Decimal"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Date"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Date"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Timestamp"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Datetime"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"VarChar"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"VarChar"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"FixedChar"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Char"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"String"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"String"})})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["Doris doesn't support Gravitino ",(0,i.jsx)(n.code,{children:"Fixed"})," ",(0,i.jsx)(n.code,{children:"Struct"})," ",(0,i.jsx)(n.code,{children:"List"})," ",(0,i.jsx)(n.code,{children:"Map"})," ",(0,i.jsx)(n.code,{children:"Timestamp_tz"})," ",(0,i.jsx)(n.code,{children:"IntervalDay"})," ",(0,i.jsx)(n.code,{children:"IntervalYear"})," ",(0,i.jsx)(n.code,{children:"Union"})," ",(0,i.jsx)(n.code,{children:"UUID"})," type.\nThe data types other than those listed above are mapped to Gravitino's\n",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"/docs/0.6.1-incubating/manage-relational-metadata-using-gravitino#unparsed-type",children:"Unparsed Type"})})," that\nrepresents an unresolvable data type since 0.5.0."]}),"\n",(0,i.jsx)(n.h4,{id:"table-column-auto-increment",children:"Table column auto-increment"}),"\n",(0,i.jsx)(n.p,{children:"Unsupported for now."}),"\n",(0,i.jsx)(n.h3,{id:"table-properties",children:"Table properties"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Doris supports table properties, and you can set them in the table properties."}),"\n",(0,i.jsx)(n.li,{children:"Only supports Doris table properties and doesn't support user-defined properties."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"table-indexes",children:"Table indexes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Supports PRIMARY_KEY"}),"\n",(0,i.jsx)(n.p,{children:"Please be aware that the index can only apply to a single column."}),"\n",(0,i.jsxs)(s.A,{groupId:"language",queryString:!0,children:[(0,i.jsx)(a.default,{value:"json",label:"Json",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "indexes": [\n    {\n      "indexType": "primary_key",\n      "name": "PRIMARY",\n      "fieldNames": [["id"]]\n    }\n  ]\n}\n'})})}),(0,i.jsx)(a.default,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'Index[] indexes = new Index[] {\n    Indexes.of(IndexType.PRIMARY_KEY, "PRIMARY", new String[][]{{"id"}})\n}\n'})})})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"table-partitions",children:"Table partitions"}),"\n",(0,i.jsx)(n.p,{children:"The Doris catalog supports partitioned tables.\nUsers can create partitioned tables in the Doris catalog with specific partitioning attributes. It is also supported to pre-assign partitions when creating Doris tables.\nNote that although Gravitino supports several partitioning strategies, Apache Doris inherently only supports these two partitioning strategies:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"RANGE"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"LIST"})}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"fieldName"})," specified in the partitioning attributes must be the name of columns defined in the table."]})}),"\n",(0,i.jsx)(n.h3,{id:"table-distribution",children:"Table distribution"}),"\n",(0,i.jsx)(n.p,{children:"Users can also specify the distribution strategy when creating tables in the Doris catalog. Currently, the Doris catalog supports the following distribution strategies:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"HASH"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"RANDOM"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["For the ",(0,i.jsx)(n.code,{children:"RANDOM"})," distribution strategy, Gravitino uses the ",(0,i.jsx)(n.code,{children:"EVEN"})," to represent it. More information about the distribution strategy defined in Gravitino can be found ",(0,i.jsx)(n.a,{href:"/docs/0.6.1-incubating/table-partitioning-distribution-sort-order-indexes#table-distribution",children:"here"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"table-operations",children:"Table operations"}),"\n",(0,i.jsxs)(n.p,{children:["Please refer to ",(0,i.jsx)(n.a,{href:"/docs/0.6.1-incubating/manage-relational-metadata-using-gravitino#table-operations",children:"Manage Relational Metadata Using Gravitino"})," for more details."]}),"\n",(0,i.jsx)(n.h4,{id:"alter-table-operations",children:"Alter table operations"}),"\n",(0,i.jsx)(n.p,{children:"Gravitino supports these table alteration operations:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"RenameTable"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"UpdateComment"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"AddColumn"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"DeleteColumn"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"UpdateColumnType"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"UpdateColumnPosition"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"UpdateColumnComment"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"SetProperty"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Please be aware that:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Not all table alteration operations can be processed in batches."}),"\n",(0,i.jsx)(n.li,{children:"Schema changes, such as adding/modifying/dropping columns can be processed in batches."}),"\n",(0,i.jsx)(n.li,{children:"Supports modifying multiple column comments at the same time."}),"\n",(0,i.jsx)(n.li,{children:"Doesn't support modifying the column type and column comment at the same time."}),"\n",(0,i.jsx)(n.li,{children:"The schema alteration in Doris is asynchronous. You might get an outdated schema if you\nexecute a schema query immediately after the alteration. It is recommended to pause briefly\nafter the schema alteration. Gravitino will add the schema alteration status into\nthe schema information in the upcoming version to solve this problem."}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}}}]);