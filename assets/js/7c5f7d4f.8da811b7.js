"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[24323],{1445:(e,n,t)=>{t.r(n),t.d(n,{default:()=>s});t(79474);var i=t(13526);const r={tabItem:"tabItem_JtVc"};var l=t(13274);function s(e){let{children:n,hidden:t,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,i.A)(r.tabItem,s),hidden:t,children:n})}},17014:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var i=t(79474);const r={},l=i.createContext(r);function s(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(l.Provider,{value:n},e.children)}},48521:(e,n,t)=>{t.d(n,{A:()=>x});var i=t(79474),r=t(13526),l=t(34560),s=t(69671),a=t(49573);const d={tabList:"tabList_B_Yg",tabItem:"tabItem_UqCM"};var c=t(13274);function o(e){let{className:n,block:t,selectedValue:i,selectValue:s,tabValues:a}=e;const o=[],{blockElementScrollPositionUntilNextRender:h}=(0,l.a_)(),u=e=>{const n=e.currentTarget,t=o.indexOf(n),r=a[t].value;r!==i&&(h(n),s(r))},x=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,c.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,c.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>o.push(e),onKeyDown:x,onClick:u,...l,className:(0,r.A)("tabs__item",d.tabItem,l?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function h(e){let{lazy:n,children:t,selectedValue:r}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,c.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function u(e){const n=(0,s.u)(e);return(0,c.jsxs)("div",{className:(0,r.A)("tabs-container",d.tabList),children:[(0,c.jsx)(o,{...n,...e}),(0,c.jsx)(h,{...n,...e})]})}function x(e){const n=(0,a.default)();return(0,c.jsx)(u,{...e,children:(0,s.v)(e.children)},String(n))}},69671:(e,n,t)=>{t.d(n,{u:()=>x,v:()=>c});var i=t(79474),r=t(20241),l=t(33255),s=t(25869),a=t(55522),d=t(38118);function c(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function o(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return c(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:r}}=e;return{value:n,label:t,attributes:i,default:r}}))}(t);return function(e){const n=(0,a.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function u(e){let{queryString:n=!1,groupId:t}=e;const l=(0,r.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s.aZ)(a),(0,i.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(l.location.search);n.set(a,e),l.replace({...l.location,search:n.toString()})}),[a,l])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=o(e),[a,c]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:s}))),[x,j]=u({queryString:t,groupId:r}),[p,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,l]=(0,d.Dv)(t);return[r,(0,i.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:r}),b=(()=>{const e=x??p;return h({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{b&&c(b)}),[b]);return{selectedValue:a,selectValue:(0,i.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),j(e),m(e)}),[j,m,s]),tabValues:s}}},97527:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>x,frontMatter:()=>a,metadata:()=>c,toc:()=>h});var i=t(13274),r=t(17014),l=t(48521),s=t(1445);const a={title:"MySQL catalog",slug:"/jdbc-mysql-catalog",keywords:["jdbc","MySQL","metadata"],license:"This software is licensed under the Apache License version 2."},d=void 0,c={id:"jdbc-mysql-catalog",title:"MySQL catalog",description:"Introduction",source:"@site/versioned_docs/version-0.6.0-incubating/jdbc-mysql-catalog.md",sourceDirName:".",slug:"/jdbc-mysql-catalog",permalink:"/docs/0.6.0-incubating/jdbc-mysql-catalog",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/jdbc-mysql-catalog.md",tags:[],version:"0.6.0-incubating",lastUpdatedBy:"Justin Mclean",lastUpdatedAt:1740469354e3,frontMatter:{title:"MySQL catalog",slug:"/jdbc-mysql-catalog",keywords:["jdbc","MySQL","metadata"],license:"This software is licensed under the Apache License version 2."},sidebar:"docs",previous:{title:"Hive catalog",permalink:"/docs/0.6.0-incubating/apache-hive-catalog"},next:{title:"PostgreSQL catalog",permalink:"/docs/0.6.0-incubating/jdbc-postgresql-catalog"}},o={},h=[{value:"Introduction",id:"introduction",level:2},{value:"Catalog",id:"catalog",level:2},{value:"Catalog capabilities",id:"catalog-capabilities",level:3},{value:"Catalog properties",id:"catalog-properties",level:3},{value:"Catalog operations",id:"catalog-operations",level:3},{value:"Schema",id:"schema",level:2},{value:"Schema capabilities",id:"schema-capabilities",level:3},{value:"Schema properties",id:"schema-properties",level:3},{value:"Schema operations",id:"schema-operations",level:3},{value:"Table",id:"table",level:2},{value:"Table capabilities",id:"table-capabilities",level:3},{value:"Table column types",id:"table-column-types",level:4},{value:"Table column auto-increment",id:"table-column-auto-increment",level:4},{value:"Table properties",id:"table-properties",level:3},{value:"Table indexes",id:"table-indexes",level:3},{value:"Table operations",id:"table-operations",level:3},{value:"Alter table operations",id:"alter-table-operations",level:4}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(n.p,{children:"Apache Gravitino provides the ability to manage MySQL metadata."}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsxs)(n.p,{children:["Gravitino saves some system information in schema and table comment, like ",(0,i.jsx)(n.code,{children:"(From Gravitino, DO NOT EDIT: gravitino.v1.uid1078334182909406185)"}),", please don't change or remove this message."]})}),"\n",(0,i.jsx)(n.h2,{id:"catalog",children:"Catalog"}),"\n",(0,i.jsx)(n.h3,{id:"catalog-capabilities",children:"Catalog capabilities"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Gravitino catalog corresponds to the MySQL instance."}),"\n",(0,i.jsx)(n.li,{children:"Supports metadata management of MySQL (5.7, 8.0)."}),"\n",(0,i.jsx)(n.li,{children:"Supports DDL operation for MySQL databases and tables."}),"\n",(0,i.jsx)(n.li,{children:"Supports table index."}),"\n",(0,i.jsxs)(n.li,{children:["Supports ",(0,i.jsx)(n.a,{href:"/docs/0.6.0-incubating/manage-relational-metadata-using-gravitino#table-column-default-value",children:"column default value"})," and ",(0,i.jsx)(n.a,{href:"/docs/0.6.0-incubating/manage-relational-metadata-using-gravitino#table-column-auto-increment",children:"auto-increment"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Supports managing MySQL table features though table properties, like using ",(0,i.jsx)(n.code,{children:"engine"})," to set MySQL storage engine."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"catalog-properties",children:"Catalog properties"}),"\n",(0,i.jsxs)(n.p,{children:["You can pass to a MySQL data source any property that isn't defined by Gravitino by adding ",(0,i.jsx)(n.code,{children:"gravitino.bypass."})," prefix as a catalog property. For example, catalog property ",(0,i.jsx)(n.code,{children:"gravitino.bypass.maxWaitMillis"})," will pass ",(0,i.jsx)(n.code,{children:"maxWaitMillis"})," to the data source property."]}),"\n",(0,i.jsxs)(n.p,{children:["Check the relevant data source configuration in ",(0,i.jsx)(n.a,{href:"https://commons.apache.org/proper/commons-dbcp/configuration.html",children:"data source properties"})]}),"\n",(0,i.jsxs)(n.p,{children:["When you use the Gravitino with Trino. You can pass the Trino MySQL connector configuration using prefix ",(0,i.jsx)(n.code,{children:"trino.bypass."}),". For example, using ",(0,i.jsx)(n.code,{children:"trino.bypass.join-pushdown.strategy"})," to pass the ",(0,i.jsx)(n.code,{children:"join-pushdown.strategy"})," to the Gravitino MySQL catalog in Trino runtime."]}),"\n",(0,i.jsxs)(n.p,{children:["If you use a JDBC catalog, you must provide ",(0,i.jsx)(n.code,{children:"jdbc-url"}),", ",(0,i.jsx)(n.code,{children:"jdbc-driver"}),", ",(0,i.jsx)(n.code,{children:"jdbc-user"})," and ",(0,i.jsx)(n.code,{children:"jdbc-password"})," to catalog properties.\nBesides the ",(0,i.jsx)(n.a,{href:"/docs/0.6.0-incubating/gravitino-server-config#gravitino-catalog-properties-configuration",children:"common catalog properties"}),", the MySQL catalog has the following properties:"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Configuration item"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Default value"}),(0,i.jsx)(n.th,{children:"Required"}),(0,i.jsx)(n.th,{children:"Since Version"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"jdbc-url"})}),(0,i.jsxs)(n.td,{children:["JDBC URL for connecting to the database. For example, ",(0,i.jsx)(n.code,{children:"jdbc:mysql://localhost:3306"})]}),(0,i.jsx)(n.td,{children:"(none)"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"0.3.0"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"jdbc-driver"})}),(0,i.jsxs)(n.td,{children:["The driver of the JDBC connection. For example, ",(0,i.jsx)(n.code,{children:"com.mysql.jdbc.Driver"})," or ",(0,i.jsx)(n.code,{children:"com.mysql.cj.jdbc.Driver"}),"."]}),(0,i.jsx)(n.td,{children:"(none)"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"0.3.0"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"jdbc-user"})}),(0,i.jsx)(n.td,{children:"The JDBC user name."}),(0,i.jsx)(n.td,{children:"(none)"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"0.3.0"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"jdbc-password"})}),(0,i.jsx)(n.td,{children:"The JDBC password."}),(0,i.jsx)(n.td,{children:"(none)"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"0.3.0"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"jdbc.pool.min-size"})}),(0,i.jsxs)(n.td,{children:["The minimum number of connections in the pool. ",(0,i.jsx)(n.code,{children:"2"})," by default."]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"2"})}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"0.3.0"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"jdbc.pool.max-size"})}),(0,i.jsxs)(n.td,{children:["The maximum number of connections in the pool. ",(0,i.jsx)(n.code,{children:"10"})," by default."]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"10"})}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"0.3.0"})]})]})]}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsxs)(n.p,{children:["You must download the corresponding JDBC driver to the ",(0,i.jsx)(n.code,{children:"catalogs/jdbc-mysql/libs"})," directory."]})}),"\n",(0,i.jsx)(n.h3,{id:"catalog-operations",children:"Catalog operations"}),"\n",(0,i.jsxs)(n.p,{children:["Refer to ",(0,i.jsx)(n.a,{href:"/docs/0.6.0-incubating/manage-relational-metadata-using-gravitino#catalog-operations",children:"Manage Relational Metadata Using Gravitino"})," for more details."]}),"\n",(0,i.jsx)(n.h2,{id:"schema",children:"Schema"}),"\n",(0,i.jsx)(n.h3,{id:"schema-capabilities",children:"Schema capabilities"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Gravitino's schema concept corresponds to the MySQL database."}),"\n",(0,i.jsx)(n.li,{children:"Supports creating schema, but does not support setting comment."}),"\n",(0,i.jsx)(n.li,{children:"Supports dropping schema."}),"\n",(0,i.jsx)(n.li,{children:"Supports cascade dropping schema."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"schema-properties",children:"Schema properties"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Doesn't support any schema property settings."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"schema-operations",children:"Schema operations"}),"\n",(0,i.jsxs)(n.p,{children:["Refer to ",(0,i.jsx)(n.a,{href:"/docs/0.6.0-incubating/manage-relational-metadata-using-gravitino#schema-operations",children:"Manage Relational Metadata Using Gravitino"})," for more details."]}),"\n",(0,i.jsx)(n.h2,{id:"table",children:"Table"}),"\n",(0,i.jsx)(n.h3,{id:"table-capabilities",children:"Table capabilities"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Gravitino's table concept corresponds to the MySQL table."}),"\n",(0,i.jsx)(n.li,{children:"Supports DDL operation for MySQL tables."}),"\n",(0,i.jsx)(n.li,{children:"Supports index."}),"\n",(0,i.jsxs)(n.li,{children:["Supports ",(0,i.jsx)(n.a,{href:"/docs/0.6.0-incubating/manage-relational-metadata-using-gravitino#table-column-default-value",children:"column default value"})," and ",(0,i.jsx)(n.a,{href:"/docs/0.6.0-incubating/manage-relational-metadata-using-gravitino#table-column-auto-increment",children:"auto-increment"}),".."]}),"\n",(0,i.jsxs)(n.li,{children:["Supports managing MySQL table features though table properties, like using ",(0,i.jsx)(n.code,{children:"engine"})," to set MySQL storage engine."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"table-column-types",children:"Table column types"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Gravitino Type"}),(0,i.jsx)(n.th,{children:"MySQL Type"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Byte"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Tinyint"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Byte(false)"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Tinyint Unsigned"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Short"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Smallint"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Short(false)"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Smallint Unsigned"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Integer"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Int"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Integer(false)"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Int Unsigned"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Long"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Bigint"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Long(false)"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Bigint Unsigned"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Float"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Float"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Double"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Double"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"String"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Text"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Date"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Date"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Time"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Time"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Timestamp"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Timestamp"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Decimal"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Decimal"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"VarChar"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"VarChar"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"FixedChar"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"FixedChar"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Binary"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Binary"})})]})]})]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["MySQL doesn't support Gravitino ",(0,i.jsx)(n.code,{children:"Boolean"})," ",(0,i.jsx)(n.code,{children:"Fixed"})," ",(0,i.jsx)(n.code,{children:"Struct"})," ",(0,i.jsx)(n.code,{children:"List"})," ",(0,i.jsx)(n.code,{children:"Map"})," ",(0,i.jsx)(n.code,{children:"Timestamp_tz"})," ",(0,i.jsx)(n.code,{children:"IntervalDay"})," ",(0,i.jsx)(n.code,{children:"IntervalYear"})," ",(0,i.jsx)(n.code,{children:"Union"})," ",(0,i.jsx)(n.code,{children:"UUID"})," type.\nMeanwhile, the data types other than listed above are mapped to Gravitino ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"/docs/0.6.0-incubating/manage-relational-metadata-using-gravitino#external-type",children:"External Type"})})," that represents an unresolvable data type since 0.6.0."]})}),"\n",(0,i.jsx)(n.h4,{id:"table-column-auto-increment",children:"Table column auto-increment"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"MySQL setting an auto-increment column requires simultaneously setting a unique index; otherwise, an error will occur."})}),"\n",(0,i.jsxs)(l.A,{groupId:"language",queryString:!0,children:[(0,i.jsx)(s.default,{value:"json",label:"Json",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "columns": [\n    {\n      "name": "id",\n      "type": "integer",\n      "comment": "id column comment",\n      "nullable": false,\n      "autoIncrement": true\n    },\n    {\n      "name": "name",\n      "type": "varchar(500)",\n      "comment": "name column comment",\n      "nullable": true,\n      "autoIncrement": false\n    }\n  ],\n  "indexes": [\n    {\n      "indexType": "primary_key",\n      "name": "PRIMARY",\n      "fieldNames": [["id"]]\n    }\n  ]\n}\n'})})}),(0,i.jsx)(s.default,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'Column[] cols = new Column[] {\n    Column.of("id", Types.IntegerType.get(), "id column comment", false, true, null),\n    Column.of("name", Types.VarCharType.of(500), "Name of the user", true, false, null)\n};\nIndex[] indexes = new Index[] {\n    Indexes.of(IndexType.PRIMARY_KEY, "PRIMARY", new String[][]{{"id"}})\n}\n'})})})]}),"\n",(0,i.jsx)(n.h3,{id:"table-properties",children:"Table properties"}),"\n",(0,i.jsxs)(n.p,{children:["Although MySQL itself does not support table properties, Gravitino offers table property management for MySQL tables through the ",(0,i.jsx)(n.code,{children:"jdbc-mysql"})," catalog, enabling control over table features. The supported properties are listed as follows:"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Property Name"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Required"}),(0,i.jsx)(n.th,{children:"Since version"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"engine"})}),(0,i.jsxs)(n.td,{children:["The engine used by the table. The default value is ",(0,i.jsx)(n.code,{children:"InnoDB"}),". For example ",(0,i.jsx)(n.code,{children:"MyISAM"}),", ",(0,i.jsx)(n.code,{children:"MEMORY"}),", ",(0,i.jsx)(n.code,{children:"CSV"}),", ",(0,i.jsx)(n.code,{children:"ARCHIVE"}),", ",(0,i.jsx)(n.code,{children:"BLACKHOLE"}),", ",(0,i.jsx)(n.code,{children:"FEDERATED"}),", ",(0,i.jsx)(n.code,{children:"ndbinfo"}),", ",(0,i.jsx)(n.code,{children:"MRG_MYISAM"}),", ",(0,i.jsx)(n.code,{children:"PERFORMANCE_SCHEMA"}),"."]}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"0.4.0"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"auto-increment-offset"})}),(0,i.jsx)(n.td,{children:"Used to specify the starting value of the auto-increment field."}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"0.4.0"})]})]})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Doesn't support remove table properties. You can only modify values, not delete properties."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"table-indexes",children:"Table indexes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Supports PRIMARY_KEY and UNIQUE_KEY."}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["The index name of the PRIMARY_KEY must be PRIMARY\n",(0,i.jsx)(n.a,{href:"https://dev.mysql.com/doc/refman/8.0/en/create-table.html",children:"Create table index"})]})}),"\n",(0,i.jsxs)(l.A,{groupId:"language",queryString:!0,children:[(0,i.jsx)(s.default,{value:"json",label:"Json",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "indexes": [\n    {\n      "indexType": "primary_key",\n      "name": "PRIMARY",\n      "fieldNames": [["id"]]\n    },\n    {\n      "indexType": "unique_key",\n      "name": "id_name_uk",\n      "fieldNames": [["id"] ,["name"]]\n    }\n  ]\n}\n'})})}),(0,i.jsx)(s.default,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'Index[] indexes = new Index[] {\n    Indexes.of(IndexType.PRIMARY_KEY, "PRIMARY", new String[][]{{"id"}}),\n    Indexes.of(IndexType.UNIQUE_KEY, "id_name_uk", new String[][]{{"id"} , {"name"}}),\n}\n'})})})]}),"\n",(0,i.jsx)(n.h3,{id:"table-operations",children:"Table operations"}),"\n",(0,i.jsxs)(n.p,{children:["Refer to ",(0,i.jsx)(n.a,{href:"/docs/0.6.0-incubating/manage-relational-metadata-using-gravitino#table-operations",children:"Manage Relational Metadata Using Gravitino"})," for more details."]}),"\n",(0,i.jsx)(n.h4,{id:"alter-table-operations",children:"Alter table operations"}),"\n",(0,i.jsx)(n.p,{children:"Gravitino supports these table alteration operations:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"RenameTable"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"UpdateComment"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"AddColumn"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"DeleteColumn"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"RenameColumn"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"UpdateColumnType"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"UpdateColumnPosition"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"UpdateColumnNullability"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"UpdateColumnComment"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"UpdateColumnDefaultValue"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"SetProperty"})}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["You cannot submit the ",(0,i.jsx)(n.code,{children:"RenameTable"})," operation at the same time as other operations."]}),"\n",(0,i.jsx)(n.li,{children:"If you update a nullability column to non-nullability, there may be compatibility issues."}),"\n"]})})]})}function x(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}}}]);