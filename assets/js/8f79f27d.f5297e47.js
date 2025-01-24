"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[68720],{51720:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>x,frontMatter:()=>l,metadata:()=>o,toc:()=>h});var r=t(13274),i=t(38389),a=t(75863),s=t(64323);const l={title:"PostgreSQL catalog",slug:"/jdbc-postgresql-catalog",keywords:["jdbc","PostgreSQL","metadata"],license:"This software is licensed under the Apache License version 2."},d=void 0,o={id:"jdbc-postgresql-catalog",title:"PostgreSQL catalog",description:"Introduction",source:"@site/docs/jdbc-postgresql-catalog.md",sourceDirName:".",slug:"/jdbc-postgresql-catalog",permalink:"/docs/next/jdbc-postgresql-catalog",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/jdbc-postgresql-catalog.md",tags:[],version:"current",lastUpdatedBy:"FANNG",lastUpdatedAt:173771221e4,frontMatter:{title:"PostgreSQL catalog",slug:"/jdbc-postgresql-catalog",keywords:["jdbc","PostgreSQL","metadata"],license:"This software is licensed under the Apache License version 2."},sidebar:"docs",previous:{title:"MySQL catalog",permalink:"/docs/next/jdbc-mysql-catalog"},next:{title:"Doris catalog",permalink:"/docs/next/jdbc-doris-catalog"}},c={},h=[{value:"Introduction",id:"introduction",level:2},{value:"Catalog",id:"catalog",level:2},{value:"Catalog capabilities",id:"catalog-capabilities",level:3},{value:"Catalog properties",id:"catalog-properties",level:3},{value:"Catalog operations",id:"catalog-operations",level:3},{value:"Schema",id:"schema",level:2},{value:"Schema capabilities",id:"schema-capabilities",level:3},{value:"Schema properties",id:"schema-properties",level:3},{value:"Schema operations",id:"schema-operations",level:3},{value:"Table",id:"table",level:2},{value:"Table capabilities",id:"table-capabilities",level:3},{value:"Table column types",id:"table-column-types",level:3},{value:"Table column auto-increment",id:"table-column-auto-increment",level:3},{value:"Table properties",id:"table-properties",level:3},{value:"Table indexes",id:"table-indexes",level:3},{value:"Table operations",id:"table-operations",level:3},{value:"Alter table operations",id:"alter-table-operations",level:4}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsx)(n.p,{children:"Apache Gravitino provides the ability to manage PostgreSQL metadata."}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsxs)(n.p,{children:["Gravitino saves some system information in schema and table comment, like ",(0,r.jsx)(n.code,{children:"(From Gravitino, DO NOT EDIT: gravitino.v1.uid1078334182909406185)"}),", please don't change or remove this message."]})}),"\n",(0,r.jsx)(n.h2,{id:"catalog",children:"Catalog"}),"\n",(0,r.jsx)(n.h3,{id:"catalog-capabilities",children:"Catalog capabilities"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Gravitino catalog corresponds to the PostgreSQL database."}),"\n",(0,r.jsx)(n.li,{children:"Supports metadata management of PostgreSQL (12.x, 13.x, 14.x, 15.x, 16.x)."}),"\n",(0,r.jsx)(n.li,{children:"Supports DDL operation for PostgreSQL schemas and tables."}),"\n",(0,r.jsx)(n.li,{children:"Supports table index."}),"\n",(0,r.jsxs)(n.li,{children:["Supports ",(0,r.jsx)(n.a,{href:"/docs/next/manage-relational-metadata-using-gravitino#table-column-default-value",children:"column default value"}),". and ",(0,r.jsx)(n.a,{href:"/docs/next/manage-relational-metadata-using-gravitino#table-column-auto-increment",children:"auto-increment"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"catalog-properties",children:"Catalog properties"}),"\n",(0,r.jsxs)(n.p,{children:["Any property that isn't defined by Gravitino can pass to PostgreSQL data source by adding ",(0,r.jsx)(n.code,{children:"gravitino.bypass."})," prefix as a catalog property. For example, catalog property ",(0,r.jsx)(n.code,{children:"gravitino.bypass.maxWaitMillis"})," will pass ",(0,r.jsx)(n.code,{children:"maxWaitMillis"})," to the data source property.\nYou can check the relevant data source configuration in ",(0,r.jsx)(n.a,{href:"https://commons.apache.org/proper/commons-dbcp/configuration.html",children:"data source properties"})]}),"\n",(0,r.jsxs)(n.p,{children:["When you use the Gravitino with Trino. You can pass the Trino PostgreSQL connector configuration using prefix ",(0,r.jsx)(n.code,{children:"trino.bypass."}),". For example, using ",(0,r.jsx)(n.code,{children:"trino.bypass.join-pushdown.strategy"})," to pass the ",(0,r.jsx)(n.code,{children:"join-pushdown.strategy"})," to the Gravitino PostgreSQL catalog in Trino runtime."]}),"\n",(0,r.jsxs)(n.p,{children:["If you use JDBC catalog, you must provide ",(0,r.jsx)(n.code,{children:"jdbc-url"}),", ",(0,r.jsx)(n.code,{children:"jdbc-driver"}),", ",(0,r.jsx)(n.code,{children:"jdbc-database"}),", ",(0,r.jsx)(n.code,{children:"jdbc-user"})," and ",(0,r.jsx)(n.code,{children:"jdbc-password"})," to catalog properties.\nBesides the ",(0,r.jsx)(n.a,{href:"/docs/next/gravitino-server-config#gravitino-catalog-properties-configuration",children:"common catalog properties"}),", the PostgreSQL catalog has the following properties:"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Configuration item"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Default value"}),(0,r.jsx)(n.th,{children:"Required"}),(0,r.jsx)(n.th,{children:"Since Version"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"jdbc-url"})}),(0,r.jsxs)(n.td,{children:["JDBC URL for connecting to the database. You need to specify the database in the URL. For example ",(0,r.jsx)(n.code,{children:"jdbc:postgresql://localhost:3306/pg_database?sslmode=require"}),"."]}),(0,r.jsx)(n.td,{children:"(none)"}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:"0.3.0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"jdbc-driver"})}),(0,r.jsxs)(n.td,{children:["The driver of the JDBC connection. For example ",(0,r.jsx)(n.code,{children:"org.postgresql.Driver"}),"."]}),(0,r.jsx)(n.td,{children:"(none)"}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:"0.3.0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"jdbc-database"})}),(0,r.jsxs)(n.td,{children:["The database of the JDBC connection. Configure it with the same value as the database in the ",(0,r.jsx)(n.code,{children:"jdbc-url"}),". For example ",(0,r.jsx)(n.code,{children:"pg_database"}),"."]}),(0,r.jsx)(n.td,{children:"(none)"}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:"0.3.0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"jdbc-user"})}),(0,r.jsx)(n.td,{children:"The JDBC user name."}),(0,r.jsx)(n.td,{children:"(none)"}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:"0.3.0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"jdbc-password"})}),(0,r.jsx)(n.td,{children:"The JDBC password."}),(0,r.jsx)(n.td,{children:"(none)"}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:"0.3.0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"jdbc.pool.min-size"})}),(0,r.jsxs)(n.td,{children:["The minimum number of connections in the pool. ",(0,r.jsx)(n.code,{children:"2"})," by default."]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"2"})}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"0.3.0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"jdbc.pool.max-size"})}),(0,r.jsxs)(n.td,{children:["The maximum number of connections in the pool. ",(0,r.jsx)(n.code,{children:"10"})," by default."]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"10"})}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"0.3.0"})]})]})]}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsxs)(n.p,{children:["You must download the corresponding JDBC driver to the ",(0,r.jsx)(n.code,{children:"catalogs/jdbc-postgresql/libs"})," directory.\nYou must explicitly specify the database in both ",(0,r.jsx)(n.code,{children:"jdbc-url"})," and ",(0,r.jsx)(n.code,{children:"jdbc-database"}),". An error may occur if the values in both aren't consistent."]})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"In PostgreSQL, the database corresponds to the Gravitino catalog, and the schema corresponds to the Gravitino schema."})}),"\n",(0,r.jsx)(n.h3,{id:"catalog-operations",children:"Catalog operations"}),"\n",(0,r.jsxs)(n.p,{children:["Please refer to ",(0,r.jsx)(n.a,{href:"/docs/next/manage-relational-metadata-using-gravitino#catalog-operations",children:"Manage Relational Metadata Using Gravitino"})," for more details."]}),"\n",(0,r.jsx)(n.h2,{id:"schema",children:"Schema"}),"\n",(0,r.jsx)(n.h3,{id:"schema-capabilities",children:"Schema capabilities"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Gravitino schema corresponds to the PostgreSQL schema."}),"\n",(0,r.jsx)(n.li,{children:"Supports creating schema with comments."}),"\n",(0,r.jsx)(n.li,{children:"Supports dropping schema."}),"\n",(0,r.jsx)(n.li,{children:"Supports cascade dropping schema."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"schema-properties",children:"Schema properties"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Doesn't support any schema property settings."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"schema-operations",children:"Schema operations"}),"\n",(0,r.jsxs)(n.p,{children:["Please refer to ",(0,r.jsx)(n.a,{href:"/docs/next/manage-relational-metadata-using-gravitino#schema-operations",children:"Manage Relational Metadata Using Gravitino"})," for more details."]}),"\n",(0,r.jsx)(n.h2,{id:"table",children:"Table"}),"\n",(0,r.jsx)(n.h3,{id:"table-capabilities",children:"Table capabilities"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The Gravitino table corresponds to the PostgreSQL table."}),"\n",(0,r.jsx)(n.li,{children:"Supports DDL operation for PostgreSQL tables."}),"\n",(0,r.jsx)(n.li,{children:"Supports index."}),"\n",(0,r.jsxs)(n.li,{children:["Support ",(0,r.jsx)(n.a,{href:"/docs/next/manage-relational-metadata-using-gravitino#table-column-default-value",children:"column default value"})," and ",(0,r.jsx)(n.a,{href:"/docs/next/manage-relational-metadata-using-gravitino#table-column-auto-increment",children:"auto-increment"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"Doesn't support table property settings."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"table-column-types",children:"Table column types"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Gravitino Type"}),(0,r.jsx)(n.th,{children:"PostgreSQL Type"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Boolean"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Bool"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Short"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Int2"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Integer"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Int4"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Long"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Int8"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Float"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Float4"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Double"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Float8"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"String"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Text"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Date"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Date"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Time"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Time"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Timestamp"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Timestamp"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Timestamp_tz"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Timestamptz"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Decimal"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Numeric"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"VarChar"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Varchar"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"FixedChar"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Bpchar"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Binary"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Bytea"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"List"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Array"})})]})]})]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["PostgreSQL doesn't support Gravitino ",(0,r.jsx)(n.code,{children:"Fixed"})," ",(0,r.jsx)(n.code,{children:"Struct"})," ",(0,r.jsx)(n.code,{children:"Map"})," ",(0,r.jsx)(n.code,{children:"IntervalDay"})," ",(0,r.jsx)(n.code,{children:"IntervalYear"})," ",(0,r.jsx)(n.code,{children:"Union"})," ",(0,r.jsx)(n.code,{children:"UUID"})," type.\nMeanwhile, the data types other than listed above are mapped to Gravitino ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"/docs/next/manage-relational-metadata-using-gravitino#external-type",children:"External Type"})})," that represents an unresolvable data type since 0.6.0-incubating."]})}),"\n",(0,r.jsx)(n.h3,{id:"table-column-auto-increment",children:"Table column auto-increment"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Supports setting auto-increment."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"table-properties",children:"Table properties"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Doesn't support table properties."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"table-indexes",children:"Table indexes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Supports PRIMARY_KEY and UNIQUE_KEY."}),"\n"]}),"\n",(0,r.jsxs)(a.A,{groupId:"language",queryString:!0,children:[(0,r.jsx)(s.default,{value:"json",label:"Json",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "indexes": [\n    {\n      "indexType": "primary_key",\n      "name": "id_pk",\n      "fieldNames": [["id"]]\n    },\n    {\n      "indexType": "unique_key",\n      "name": "id_name_uk",\n      "fieldNames": [["id"] ,["name"]]\n    }\n  ]\n}\n'})})}),(0,r.jsx)(s.default,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'Index[] indexes = new Index[] {\n    Indexes.of(IndexType.PRIMARY_KEY, "PRIMARY", new String[][]{{"id"}}),\n    Indexes.of(IndexType.UNIQUE_KEY, "id_name_uk", new String[][]{{"id"} , {"name"}}),\n}\n'})})})]}),"\n",(0,r.jsx)(n.h3,{id:"table-operations",children:"Table operations"}),"\n",(0,r.jsxs)(n.p,{children:["Please refer to ",(0,r.jsx)(n.a,{href:"/docs/next/manage-relational-metadata-using-gravitino#table-operations",children:"Manage Relational Metadata Using Gravitino"})," for more details."]}),"\n",(0,r.jsx)(n.h4,{id:"alter-table-operations",children:"Alter table operations"}),"\n",(0,r.jsx)(n.p,{children:"Supports operations:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"RenameTable"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"UpdateComment"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"AddColumn"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"DeleteColumn"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"RenameColumn"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"UpdateColumnType"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"UpdateColumnNullability"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"UpdateColumnComment"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"UpdateColumnDefaultValue"})}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["You can't submit the ",(0,r.jsx)(n.code,{children:"RenameTable"})," operation at the same time as other operations."]})}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsxs)(n.p,{children:["PostgreSQL doesn't support the ",(0,r.jsx)(n.code,{children:"UpdateColumnPosition"})," operation, so you can only use ",(0,r.jsx)(n.code,{children:"ColumnPosition.defaultPosition()"})," when ",(0,r.jsx)(n.code,{children:"AddColumn"}),".\nIf you update a nullability column to non nullability, there may be compatibility issues."]})})]})}function x(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},64323:(e,n,t)=>{t.r(n),t.d(n,{default:()=>s});t(79474);var r=t(13526);const i={tabItem:"tabItem_VZtU"};var a=t(13274);function s(e){let{children:n,hidden:t,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,s),hidden:t,children:n})}},75863:(e,n,t)=>{t.d(n,{A:()=>x});var r=t(79474),i=t(13526),a=t(67697),s=t(24382),l=t(22972);const d={tabList:"tabList_rarn",tabItem:"tabItem_Gmas"};var o=t(13274);function c(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:h}=(0,a.a_)(),u=e=>{const n=e.currentTarget,t=c.indexOf(n),i=l[t].value;i!==r&&(h(n),s(i))},x=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,o.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,o.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:x,onClick:u,...a,className:(0,i.A)("tabs__item",d.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function h(e){let{lazy:n,children:t,selectedValue:i}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,o.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function u(e){const n=(0,s.u)(e);return(0,o.jsxs)("div",{className:(0,i.A)("tabs-container",d.tabList),children:[(0,o.jsx)(c,{...n,...e}),(0,o.jsx)(h,{...n,...e})]})}function x(e){const n=(0,l.default)();return(0,o.jsx)(u,{...e,children:(0,s.v)(e.children)},String(n))}},24382:(e,n,t)=>{t.d(n,{u:()=>x,v:()=>o});var r=t(79474),i=t(20241),a=t(86976),s=t(71738),l=t(17891),d=t(67946);function o(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function c(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return o(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:i}}=e;return{value:n,label:t,attributes:r,default:i}}))}(t);return function(e){const n=(0,l.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function u(e){let{queryString:n=!1,groupId:t}=e;const a=(0,i.W6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(a.location.search);n.set(l,e),a.replace({...a.location,search:n.toString()})}),[l,a])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,s=c(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[x,j]=u({queryString:t,groupId:i}),[p,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,a]=(0,d.Dv)(t);return[i,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:i}),b=(()=>{const e=x??p;return h({value:e,tabValues:s})?e:null})();(0,a.A)((()=>{b&&o(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),j(e),m(e)}),[j,m,s]),tabValues:s}}},38389:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>l});var r=t(79474);const i={},a=r.createContext(i);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);