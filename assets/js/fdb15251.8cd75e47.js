"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[92625],{17014:(e,n,a)=>{a.d(n,{R:()=>l,x:()=>s});var t=a(79474);const i={},r=t.createContext(i);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(r.Provider,{value:n},e.children)}},48578:(e,n,a)=>{a.d(n,{A:()=>x});var t=a(79474),i=a(13526),r=a(5505),l=a(54638),s=a(49352);const c={tabList:"tabList_Bgbz",tabItem:"tabItem_O29R"};var d=a(13274);function o(e){let{className:n,block:a,selectedValue:t,selectValue:l,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:h}=(0,r.a_)(),u=e=>{const n=e.currentTarget,a=o.indexOf(n),i=s[a].value;i!==t&&(h(n),l(i))},x=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=o.indexOf(e.currentTarget)+1;n=o[a]??o[0];break}case"ArrowLeft":{const a=o.indexOf(e.currentTarget)-1;n=o[a]??o[o.length-1];break}}n?.focus()};return(0,d.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":a},n),children:s.map((e=>{let{value:n,label:a,attributes:r}=e;return(0,d.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>o.push(e),onKeyDown:x,onClick:u,...r,className:(0,i.A)("tabs__item",c.tabItem,r?.className,{"tabs__item--active":t===n}),children:a??n},n)}))})}function h(e){let{lazy:n,children:a,selectedValue:i}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===i));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,d.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function u(e){const n=(0,l.u)(e);return(0,d.jsxs)("div",{className:(0,i.A)("tabs-container",c.tabList),children:[(0,d.jsx)(o,{...n,...e}),(0,d.jsx)(h,{...n,...e})]})}function x(e){const n=(0,s.default)();return(0,d.jsx)(u,{...e,children:(0,l.v)(e.children)},String(n))}},54638:(e,n,a)=>{a.d(n,{u:()=>x,v:()=>d});var t=a(79474),i=a(20241),r=a(97052),l=a(5290),s=a(37651),c=a(88679);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function o(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:i}}=e;return{value:n,label:a,attributes:t,default:i}}))}(a);return function(e){const n=(0,s.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function h(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function u(e){let{queryString:n=!1,groupId:a}=e;const r=(0,i.W6)(),s=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,l.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function x(e){const{defaultValue:n,queryString:a=!1,groupId:i}=e,l=o(e),[s,d]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:l}))),[x,j]=u({queryString:a,groupId:i}),[p,m]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,r]=(0,c.Dv)(a);return[i,(0,t.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:i}),b=(()=>{const e=x??p;return h({value:e,tabValues:l})?e:null})();(0,r.A)((()=>{b&&d(b)}),[b]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);d(e),j(e),m(e)}),[j,m,l]),tabValues:l}}},58293:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>x,frontMatter:()=>s,metadata:()=>d,toc:()=>h});var t=a(13274),i=a(17014),r=a(48578),l=a(86572);const s={title:"OceanBase catalog",slug:"/jdbc-oceanbase-catalog",keywords:["jdbc","OceanBase","metadata"],license:"This software is licensed under the Apache License version 2."},c=void 0,d={id:"jdbc-oceanbase-catalog",title:"OceanBase catalog",description:"Introduction",source:"@site/versioned_docs/version-0.8.0-incubating/jdbc-oceanbase-catalog.md",sourceDirName:".",slug:"/jdbc-oceanbase-catalog",permalink:"/docs/0.8.0-incubating/jdbc-oceanbase-catalog",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/jdbc-oceanbase-catalog.md",tags:[],version:"0.8.0-incubating",frontMatter:{title:"OceanBase catalog",slug:"/jdbc-oceanbase-catalog",keywords:["jdbc","OceanBase","metadata"],license:"This software is licensed under the Apache License version 2."},sidebar:"docs",previous:{title:"Hudi catalog",permalink:"/docs/0.8.0-incubating/lakehouse-hudi-catalog"},next:{title:"Hadoop catalog index",permalink:"/docs/0.8.0-incubating/hadoop-catalog-index"}},o={},h=[{value:"Introduction",id:"introduction",level:2},{value:"Catalog",id:"catalog",level:2},{value:"Catalog capabilities",id:"catalog-capabilities",level:3},{value:"Catalog properties",id:"catalog-properties",level:3},{value:"Catalog operations",id:"catalog-operations",level:3},{value:"Schema",id:"schema",level:2},{value:"Schema capabilities",id:"schema-capabilities",level:3},{value:"Schema properties",id:"schema-properties",level:3},{value:"Schema operations",id:"schema-operations",level:3},{value:"Table",id:"table",level:2},{value:"Table capabilities",id:"table-capabilities",level:3},{value:"Table properties",id:"table-properties",level:3},{value:"Table column types",id:"table-column-types",level:3},{value:"Table column auto-increment",id:"table-column-auto-increment",level:3},{value:"Table indexes",id:"table-indexes",level:3},{value:"Table operations",id:"table-operations",level:3},{value:"Alter table operations",id:"alter-table-operations",level:4}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsx)(n.p,{children:"Apache Gravitino provides the ability to manage OceanBase metadata."}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["Gravitino saves some system information in schema and table comment, like ",(0,t.jsx)(n.code,{children:"(From Gravitino, DO NOT EDIT: gravitino.v1.uid1078334182909406185)"}),", please don't change or remove this message."]})}),"\n",(0,t.jsx)(n.h2,{id:"catalog",children:"Catalog"}),"\n",(0,t.jsx)(n.h3,{id:"catalog-capabilities",children:"Catalog capabilities"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Gravitino catalog corresponds to the OceanBase instance."}),"\n",(0,t.jsx)(n.li,{children:"Supports metadata management of OceanBase (4.x)."}),"\n",(0,t.jsx)(n.li,{children:"Supports DDL operation for OceanBase databases and tables."}),"\n",(0,t.jsx)(n.li,{children:"Supports table index."}),"\n",(0,t.jsxs)(n.li,{children:["Supports ",(0,t.jsx)(n.a,{href:"/docs/0.8.0-incubating/manage-relational-metadata-using-gravitino#table-column-default-value",children:"column default value"})," and ",(0,t.jsx)(n.a,{href:"/docs/0.8.0-incubating/manage-relational-metadata-using-gravitino#table-column-auto-increment",children:"auto-increment"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"catalog-properties",children:"Catalog properties"}),"\n",(0,t.jsxs)(n.p,{children:["You can pass to a OceanBase data source any property that isn't defined by Gravitino by adding ",(0,t.jsx)(n.code,{children:"gravitino.bypass."})," prefix as a catalog property. For example, catalog property ",(0,t.jsx)(n.code,{children:"gravitino.bypass.maxWaitMillis"})," will pass ",(0,t.jsx)(n.code,{children:"maxWaitMillis"})," to the data source property."]}),"\n",(0,t.jsxs)(n.p,{children:["Check the relevant data source configuration in ",(0,t.jsx)(n.a,{href:"https://commons.apache.org/proper/commons-dbcp/configuration.html",children:"data source properties"})]}),"\n",(0,t.jsxs)(n.p,{children:["If you use a JDBC catalog, you must provide ",(0,t.jsx)(n.code,{children:"jdbc-url"}),", ",(0,t.jsx)(n.code,{children:"jdbc-driver"}),", ",(0,t.jsx)(n.code,{children:"jdbc-user"})," and ",(0,t.jsx)(n.code,{children:"jdbc-password"})," to catalog properties.\nBesides the ",(0,t.jsx)(n.a,{href:"/docs/0.8.0-incubating/gravitino-server-config#gravitino-catalog-properties-configuration",children:"common catalog properties"}),", the OceanBase catalog has the following properties:"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Configuration item"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Default value"}),(0,t.jsx)(n.th,{children:"Required"}),(0,t.jsx)(n.th,{children:"Since Version"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"jdbc-url"})}),(0,t.jsxs)(n.td,{children:["JDBC URL for connecting to the database. For example, ",(0,t.jsx)(n.code,{children:"jdbc:mysql://localhost:2881"})," or ",(0,t.jsx)(n.code,{children:"jdbc:oceanbase://localhost:2881"})]}),(0,t.jsx)(n.td,{children:"(none)"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"0.7.0-incubating"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"jdbc-driver"})}),(0,t.jsxs)(n.td,{children:["The driver of the JDBC connection. For example, ",(0,t.jsx)(n.code,{children:"com.mysql.jdbc.Driver"})," or ",(0,t.jsx)(n.code,{children:"com.mysql.cj.jdbc.Driver"})," or ",(0,t.jsx)(n.code,{children:"com.oceanbase.jdbc.Driver"}),"."]}),(0,t.jsx)(n.td,{children:"(none)"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"0.7.0-incubating"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"jdbc-user"})}),(0,t.jsx)(n.td,{children:"The JDBC user name."}),(0,t.jsx)(n.td,{children:"(none)"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"0.7.0-incubating"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"jdbc-password"})}),(0,t.jsx)(n.td,{children:"The JDBC password."}),(0,t.jsx)(n.td,{children:"(none)"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"0.7.0-incubating"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"jdbc.pool.min-size"})}),(0,t.jsxs)(n.td,{children:["The minimum number of connections in the pool. ",(0,t.jsx)(n.code,{children:"2"})," by default."]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"2"})}),(0,t.jsx)(n.td,{children:"No"}),(0,t.jsx)(n.td,{children:"0.7.0-incubating"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"jdbc.pool.max-size"})}),(0,t.jsxs)(n.td,{children:["The maximum number of connections in the pool. ",(0,t.jsx)(n.code,{children:"10"})," by default."]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"10"})}),(0,t.jsx)(n.td,{children:"No"}),(0,t.jsx)(n.td,{children:"0.7.0-incubating"})]})]})]}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["Before using the OceanBase Catalog, you must download the corresponding JDBC driver to the ",(0,t.jsx)(n.code,{children:"catalogs/jdbc-oceanbase/libs"})," directory.\nGravitino doesn't package the JDBC driver for OceanBase due to licensing issues."]})}),"\n",(0,t.jsx)(n.h3,{id:"catalog-operations",children:"Catalog operations"}),"\n",(0,t.jsxs)(n.p,{children:["Refer to ",(0,t.jsx)(n.a,{href:"/docs/0.8.0-incubating/manage-relational-metadata-using-gravitino#catalog-operations",children:"Manage Relational Metadata Using Gravitino"})," for more details."]}),"\n",(0,t.jsx)(n.h2,{id:"schema",children:"Schema"}),"\n",(0,t.jsx)(n.h3,{id:"schema-capabilities",children:"Schema capabilities"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Gravitino's schema concept corresponds to the OceanBase database."}),"\n",(0,t.jsx)(n.li,{children:"Supports creating schema, but does not support setting comment."}),"\n",(0,t.jsx)(n.li,{children:"Supports dropping schema."}),"\n",(0,t.jsx)(n.li,{children:"Supports cascade dropping schema."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"schema-properties",children:"Schema properties"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Doesn't support any schema property settings."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"schema-operations",children:"Schema operations"}),"\n",(0,t.jsxs)(n.p,{children:["Refer to ",(0,t.jsx)(n.a,{href:"/docs/0.8.0-incubating/manage-relational-metadata-using-gravitino#schema-operations",children:"Manage Relational Metadata Using Gravitino"})," for more details."]}),"\n",(0,t.jsx)(n.h2,{id:"table",children:"Table"}),"\n",(0,t.jsx)(n.h3,{id:"table-capabilities",children:"Table capabilities"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Gravitino's table concept corresponds to the OceanBase table."}),"\n",(0,t.jsx)(n.li,{children:"Supports DDL operation for OceanBase tables."}),"\n",(0,t.jsx)(n.li,{children:"Supports index."}),"\n",(0,t.jsxs)(n.li,{children:["Supports ",(0,t.jsx)(n.a,{href:"/docs/0.8.0-incubating/manage-relational-metadata-using-gravitino#table-column-default-value",children:"column default value"})," and ",(0,t.jsx)(n.a,{href:"/docs/0.8.0-incubating/manage-relational-metadata-using-gravitino#table-column-auto-increment",children:"auto-increment"}),".."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"table-properties",children:"Table properties"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Doesn't support table properties."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"table-column-types",children:"Table column types"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Gravitino Type"}),(0,t.jsx)(n.th,{children:"OceanBase Type"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Byte"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Tinyint"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Byte(false)"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Tinyint Unsigned"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Short"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Smallint"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Short(false)"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Smallint Unsigned"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Integer"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Int"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Integer(false)"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Int Unsigned"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Long"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Bigint"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Long(false)"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Bigint Unsigned"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Float"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Float"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Double"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Double"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"String"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Text"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Date"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Date"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Time"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Time"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Timestamp"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Timestamp"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Decimal"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Decimal"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"VarChar"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"VarChar"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"FixedChar"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"FixedChar"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Binary"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Binary"})})]})]})]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["OceanBase doesn't support Gravitino ",(0,t.jsx)(n.code,{children:"Boolean"})," ",(0,t.jsx)(n.code,{children:"Fixed"})," ",(0,t.jsx)(n.code,{children:"Struct"})," ",(0,t.jsx)(n.code,{children:"List"})," ",(0,t.jsx)(n.code,{children:"Map"})," ",(0,t.jsx)(n.code,{children:"Timestamp_tz"})," ",(0,t.jsx)(n.code,{children:"IntervalDay"})," ",(0,t.jsx)(n.code,{children:"IntervalYear"})," ",(0,t.jsx)(n.code,{children:"Union"})," ",(0,t.jsx)(n.code,{children:"UUID"})," type.\nMeanwhile, the data types other than listed above are mapped to Gravitino ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"/docs/0.8.0-incubating/manage-relational-metadata-using-gravitino#external-type",children:"External Type"})})," that represents an unresolvable data type since 0.6.0-incubating."]})}),"\n",(0,t.jsx)(n.h3,{id:"table-column-auto-increment",children:"Table column auto-increment"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"OceanBase setting an auto-increment column requires simultaneously setting a unique index; otherwise, an error will occur."})}),"\n",(0,t.jsxs)(r.A,{groupId:"language",queryString:!0,children:[(0,t.jsx)(l.default,{value:"json",label:"Json",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "columns": [\n    {\n      "name": "id",\n      "type": "integer",\n      "comment": "id column comment",\n      "nullable": false,\n      "autoIncrement": true\n    },\n    {\n      "name": "name",\n      "type": "varchar(500)",\n      "comment": "name column comment",\n      "nullable": true,\n      "autoIncrement": false\n    }\n  ],\n  "indexes": [\n    {\n      "indexType": "primary_key",\n      "name": "PRIMARY",\n      "fieldNames": [["id"]]\n    }\n  ]\n}\n'})})}),(0,t.jsx)(l.default,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'Column[] cols = new Column[] {\n    Column.of("id", Types.IntegerType.get(), "id column comment", false, true, null),\n    Column.of("name", Types.VarCharType.of(500), "Name of the user", true, false, null)\n};\nIndex[] indexes = new Index[] {\n    Indexes.of(IndexType.PRIMARY_KEY, "PRIMARY", new String[][]{{"id"}})\n}\n'})})})]}),"\n",(0,t.jsx)(n.h3,{id:"table-indexes",children:"Table indexes"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Supports PRIMARY_KEY and UNIQUE_KEY."}),"\n"]}),"\n",(0,t.jsxs)(r.A,{groupId:"language",queryString:!0,children:[(0,t.jsx)(l.default,{value:"json",label:"Json",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "indexes": [\n    {\n      "indexType": "primary_key",\n      "name": "PRIMARY",\n      "fieldNames": [["id"]]\n    },\n    {\n      "indexType": "unique_key",\n      "name": "id_name_uk",\n      "fieldNames": [["id"] ,["name"]]\n    }\n  ]\n}\n'})})}),(0,t.jsx)(l.default,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'Index[] indexes = new Index[] {\n    Indexes.of(IndexType.PRIMARY_KEY, "PRIMARY", new String[][]{{"id"}}),\n    Indexes.of(IndexType.UNIQUE_KEY, "id_name_uk", new String[][]{{"id"} , {"name"}}),\n}\n'})})})]}),"\n",(0,t.jsx)(n.h3,{id:"table-operations",children:"Table operations"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"The OceanBase catalog does not support creating partitioned tables in the current version."})}),"\n",(0,t.jsxs)(n.p,{children:["Refer to ",(0,t.jsx)(n.a,{href:"/docs/0.8.0-incubating/manage-relational-metadata-using-gravitino#table-operations",children:"Manage Relational Metadata Using Gravitino"})," for more details."]}),"\n",(0,t.jsx)(n.h4,{id:"alter-table-operations",children:"Alter table operations"}),"\n",(0,t.jsx)(n.p,{children:"Gravitino supports these table alteration operations:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"RenameTable"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"UpdateComment"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"AddColumn"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"DeleteColumn"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"RenameColumn"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"UpdateColumnType"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"UpdateColumnPosition"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"UpdateColumnNullability"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"UpdateColumnComment"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"UpdateColumnDefaultValue"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"SetProperty"})}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["You cannot submit the ",(0,t.jsx)(n.code,{children:"RenameTable"})," operation at the same time as other operations."]}),"\n",(0,t.jsx)(n.li,{children:"If you update a nullability column to non-nullability, there may be compatibility issues."}),"\n"]})})]})}function x(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},86572:(e,n,a)=>{a.r(n),a.d(n,{default:()=>l});a(79474);var t=a(13526);const i={tabItem:"tabItem_VJ4w"};var r=a(13274);function l(e){let{children:n,hidden:a,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.A)(i.tabItem,l),hidden:a,children:n})}}}]);