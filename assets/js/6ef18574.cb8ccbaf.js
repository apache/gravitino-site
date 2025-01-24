"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[34911],{80870:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>j,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var t=i(13274),s=i(38389),r=i(75863),a=i(64323);const l={title:"PostgreSQL catalog",slug:"/jdbc-postgresql-catalog",keywords:["jdbc","PostgreSQL","metadata"],license:"This software is licensed under the Apache License version 2."},d=void 0,c={id:"jdbc-postgresql-catalog",title:"PostgreSQL catalog",description:"Introduction",source:"@site/versioned_docs/version-0.6.1-incubating/jdbc-postgresql-catalog.md",sourceDirName:".",slug:"/jdbc-postgresql-catalog",permalink:"/docs/0.6.1-incubating/jdbc-postgresql-catalog",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/jdbc-postgresql-catalog.md",tags:[],version:"0.6.1-incubating",lastUpdatedBy:"FANNG",lastUpdatedAt:1737701155e3,frontMatter:{title:"PostgreSQL catalog",slug:"/jdbc-postgresql-catalog",keywords:["jdbc","PostgreSQL","metadata"],license:"This software is licensed under the Apache License version 2."},sidebar:"docs",previous:{title:"MySQL catalog",permalink:"/docs/0.6.1-incubating/jdbc-mysql-catalog"},next:{title:"Doris catalog",permalink:"/docs/0.6.1-incubating/jdbc-doris-catalog"}},o={},h=[{value:"Introduction",id:"introduction",level:2},{value:"Catalog",id:"catalog",level:2},{value:"Catalog capabilities",id:"catalog-capabilities",level:3},{value:"Catalog properties",id:"catalog-properties",level:3},{value:"Catalog operations",id:"catalog-operations",level:3},{value:"Schema",id:"schema",level:2},{value:"Schema capabilities",id:"schema-capabilities",level:3},{value:"Schema properties",id:"schema-properties",level:3},{value:"Schema operations",id:"schema-operations",level:3},{value:"Table",id:"table",level:2},{value:"Table capabilities",id:"table-capabilities",level:3},{value:"Table column types",id:"table-column-types",level:4},{value:"Table column auto-increment",id:"table-column-auto-increment",level:4},{value:"Table properties",id:"table-properties",level:3},{value:"Table indexes",id:"table-indexes",level:3},{value:"Table operations",id:"table-operations",level:3},{value:"Alter table operations",id:"alter-table-operations",level:4}];function x(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsx)(n.p,{children:"Apache Gravitino provides the ability to manage PostgreSQL metadata."}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["Gravitino saves some system information in schema and table comment, like ",(0,t.jsx)(n.code,{children:"(From Gravitino, DO NOT EDIT: gravitino.v1.uid1078334182909406185)"}),", please don't change or remove this message."]})}),"\n",(0,t.jsx)(n.h2,{id:"catalog",children:"Catalog"}),"\n",(0,t.jsx)(n.h3,{id:"catalog-capabilities",children:"Catalog capabilities"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Gravitino catalog corresponds to the PostgreSQL database."}),"\n",(0,t.jsx)(n.li,{children:"Supports metadata management of PostgreSQL (12.x, 13.x, 14.x, 15.x, 16.x)."}),"\n",(0,t.jsx)(n.li,{children:"Supports DDL operation for PostgreSQL schemas and tables."}),"\n",(0,t.jsx)(n.li,{children:"Supports table index."}),"\n",(0,t.jsxs)(n.li,{children:["Supports ",(0,t.jsx)(n.a,{href:"/docs/0.6.1-incubating/manage-relational-metadata-using-gravitino#table-column-default-value",children:"column default value"}),". and ",(0,t.jsx)(n.a,{href:"/docs/0.6.1-incubating/manage-relational-metadata-using-gravitino#table-column-auto-increment",children:"auto-increment"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"catalog-properties",children:"Catalog properties"}),"\n",(0,t.jsxs)(n.p,{children:["Any property that isn't defined by Gravitino can pass to PostgreSQL data source by adding ",(0,t.jsx)(n.code,{children:"gravitino.bypass."})," prefix as a catalog property. For example, catalog property ",(0,t.jsx)(n.code,{children:"gravitino.bypass.maxWaitMillis"})," will pass ",(0,t.jsx)(n.code,{children:"maxWaitMillis"})," to the data source property.\nYou can check the relevant data source configuration in ",(0,t.jsx)(n.a,{href:"https://commons.apache.org/proper/commons-dbcp/configuration.html",children:"data source properties"})]}),"\n",(0,t.jsxs)(n.p,{children:["When you use the Gravitino with Trino. You can pass the Trino PostgreSQL connector configuration using prefix ",(0,t.jsx)(n.code,{children:"trino.bypass."}),". For example, using ",(0,t.jsx)(n.code,{children:"trino.bypass.join-pushdown.strategy"})," to pass the ",(0,t.jsx)(n.code,{children:"join-pushdown.strategy"})," to the Gravitino PostgreSQL catalog in Trino runtime."]}),"\n",(0,t.jsxs)(n.p,{children:["If you use JDBC catalog, you must provide ",(0,t.jsx)(n.code,{children:"jdbc-url"}),", ",(0,t.jsx)(n.code,{children:"jdbc-driver"}),", ",(0,t.jsx)(n.code,{children:"jdbc-database"}),", ",(0,t.jsx)(n.code,{children:"jdbc-user"})," and ",(0,t.jsx)(n.code,{children:"jdbc-password"})," to catalog properties.\nBesides the ",(0,t.jsx)(n.a,{href:"/docs/0.6.1-incubating/gravitino-server-config#gravitino-catalog-properties-configuration",children:"common catalog properties"}),", the PostgreSQL catalog has the following properties:"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Configuration item"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Default value"}),(0,t.jsx)(n.th,{children:"Required"}),(0,t.jsx)(n.th,{children:"Since Version"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"jdbc-url"})}),(0,t.jsxs)(n.td,{children:["JDBC URL for connecting to the database. You need to specify the database in the URL. For example ",(0,t.jsx)(n.code,{children:"jdbc:postgresql://localhost:3306/pg_database?sslmode=require"}),"."]}),(0,t.jsx)(n.td,{children:"(none)"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"0.3.0"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"jdbc-driver"})}),(0,t.jsxs)(n.td,{children:["The driver of the JDBC connection. For example ",(0,t.jsx)(n.code,{children:"org.postgresql.Driver"}),"."]}),(0,t.jsx)(n.td,{children:"(none)"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"0.3.0"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"jdbc-database"})}),(0,t.jsxs)(n.td,{children:["The database of the JDBC connection. Configure it with the same value as the database in the ",(0,t.jsx)(n.code,{children:"jdbc-url"}),". For example ",(0,t.jsx)(n.code,{children:"pg_database"}),"."]}),(0,t.jsx)(n.td,{children:"(none)"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"0.3.0"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"jdbc-user"})}),(0,t.jsx)(n.td,{children:"The JDBC user name."}),(0,t.jsx)(n.td,{children:"(none)"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"0.3.0"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"jdbc-password"})}),(0,t.jsx)(n.td,{children:"The JDBC password."}),(0,t.jsx)(n.td,{children:"(none)"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"0.3.0"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"jdbc.pool.min-size"})}),(0,t.jsxs)(n.td,{children:["The minimum number of connections in the pool. ",(0,t.jsx)(n.code,{children:"2"})," by default."]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"2"})}),(0,t.jsx)(n.td,{children:"No"}),(0,t.jsx)(n.td,{children:"0.3.0"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"jdbc.pool.max-size"})}),(0,t.jsxs)(n.td,{children:["The maximum number of connections in the pool. ",(0,t.jsx)(n.code,{children:"10"})," by default."]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"10"})}),(0,t.jsx)(n.td,{children:"No"}),(0,t.jsx)(n.td,{children:"0.3.0"})]})]})]}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["You must download the corresponding JDBC driver to the ",(0,t.jsx)(n.code,{children:"catalogs/jdbc-postgresql/libs"})," directory.\nYou must explicitly specify the database in both ",(0,t.jsx)(n.code,{children:"jdbc-url"})," and ",(0,t.jsx)(n.code,{children:"jdbc-database"}),". An error may occur if the values in both aren't consistent."]})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"In PostgreSQL, the database corresponds to the Gravitino catalog, and the schema corresponds to the Gravitino schema."})}),"\n",(0,t.jsx)(n.h3,{id:"catalog-operations",children:"Catalog operations"}),"\n",(0,t.jsxs)(n.p,{children:["Please refer to ",(0,t.jsx)(n.a,{href:"/docs/0.6.1-incubating/manage-relational-metadata-using-gravitino#catalog-operations",children:"Manage Relational Metadata Using Gravitino"})," for more details."]}),"\n",(0,t.jsx)(n.h2,{id:"schema",children:"Schema"}),"\n",(0,t.jsx)(n.h3,{id:"schema-capabilities",children:"Schema capabilities"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Gravitino schema corresponds to the PostgreSQL schema."}),"\n",(0,t.jsx)(n.li,{children:"Supports creating schema with comments."}),"\n",(0,t.jsx)(n.li,{children:"Supports dropping schema."}),"\n",(0,t.jsx)(n.li,{children:"Supports cascade dropping schema."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"schema-properties",children:"Schema properties"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Doesn't support any schema property settings."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"schema-operations",children:"Schema operations"}),"\n",(0,t.jsxs)(n.p,{children:["Please refer to ",(0,t.jsx)(n.a,{href:"/docs/0.6.1-incubating/manage-relational-metadata-using-gravitino#schema-operations",children:"Manage Relational Metadata Using Gravitino"})," for more details."]}),"\n",(0,t.jsx)(n.h2,{id:"table",children:"Table"}),"\n",(0,t.jsx)(n.h3,{id:"table-capabilities",children:"Table capabilities"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The Gravitino table corresponds to the PostgreSQL table."}),"\n",(0,t.jsx)(n.li,{children:"Supports DDL operation for PostgreSQL tables."}),"\n",(0,t.jsx)(n.li,{children:"Supports index."}),"\n",(0,t.jsxs)(n.li,{children:["Support ",(0,t.jsx)(n.a,{href:"/docs/0.6.1-incubating/manage-relational-metadata-using-gravitino#table-column-default-value",children:"column default value"})," and ",(0,t.jsx)(n.a,{href:"/docs/0.6.1-incubating/manage-relational-metadata-using-gravitino#table-column-auto-increment",children:"auto-increment"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Doesn't support table property settings."}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"table-column-types",children:"Table column types"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Gravitino Type"}),(0,t.jsx)(n.th,{children:"PostgreSQL Type"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Boolean"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Bool"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Short"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Int2"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Integer"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Int4"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Long"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Int8"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Float"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Float4"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Double"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Float8"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"String"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Text"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Date"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Date"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Time"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Time"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Timestamp"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Timestamp"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Timestamp_tz"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Timestamptz"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Decimal"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Numeric"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"VarChar"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Varchar"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"FixedChar"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Bpchar"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Binary"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Bytea"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"List"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Array"})})]})]})]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["PostgreSQL doesn't support Gravitino ",(0,t.jsx)(n.code,{children:"Fixed"})," ",(0,t.jsx)(n.code,{children:"Struct"})," ",(0,t.jsx)(n.code,{children:"Map"})," ",(0,t.jsx)(n.code,{children:"IntervalDay"})," ",(0,t.jsx)(n.code,{children:"IntervalYear"})," ",(0,t.jsx)(n.code,{children:"Union"})," ",(0,t.jsx)(n.code,{children:"UUID"})," type.\nMeanwhile, the data types other than listed above are mapped to Gravitino ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"/docs/0.6.1-incubating/manage-relational-metadata-using-gravitino#external-type",children:"External Type"})})," that represents an unresolvable data type since 0.6.0-incubating."]})}),"\n",(0,t.jsx)(n.h4,{id:"table-column-auto-increment",children:"Table column auto-increment"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Supports setting auto-increment."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"table-properties",children:"Table properties"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Doesn't support table properties."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"table-indexes",children:"Table indexes"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Supports PRIMARY_KEY and UNIQUE_KEY."}),"\n"]}),"\n",(0,t.jsxs)(r.A,{groupId:"language",queryString:!0,children:[(0,t.jsx)(a.default,{value:"json",label:"Json",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "indexes": [\n    {\n      "indexType": "primary_key",\n      "name": "id_pk",\n      "fieldNames": [["id"]]\n    },\n    {\n      "indexType": "unique_key",\n      "name": "id_name_uk",\n      "fieldNames": [["id"] ,["name"]]\n    }\n  ]\n}\n'})})}),(0,t.jsx)(a.default,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'Index[] indexes = new Index[] {\n    Indexes.of(IndexType.PRIMARY_KEY, "PRIMARY", new String[][]{{"id"}}),\n    Indexes.of(IndexType.UNIQUE_KEY, "id_name_uk", new String[][]{{"id"} , {"name"}}),\n}\n'})})})]}),"\n",(0,t.jsx)(n.h3,{id:"table-operations",children:"Table operations"}),"\n",(0,t.jsxs)(n.p,{children:["Please refer to ",(0,t.jsx)(n.a,{href:"/docs/0.6.1-incubating/manage-relational-metadata-using-gravitino#table-operations",children:"Manage Relational Metadata Using Gravitino"})," for more details."]}),"\n",(0,t.jsx)(n.h4,{id:"alter-table-operations",children:"Alter table operations"}),"\n",(0,t.jsx)(n.p,{children:"Supports operations:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"RenameTable"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"UpdateComment"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"AddColumn"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"DeleteColumn"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"RenameColumn"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"UpdateColumnType"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"UpdateColumnNullability"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"UpdateColumnComment"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"UpdateColumnDefaultValue"})}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["You can't submit the ",(0,t.jsx)(n.code,{children:"RenameTable"})," operation at the same time as other operations."]})}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["PostgreSQL doesn't support the ",(0,t.jsx)(n.code,{children:"UpdateColumnPosition"})," operation, so you can only use ",(0,t.jsx)(n.code,{children:"ColumnPosition.defaultPosition()"})," when ",(0,t.jsx)(n.code,{children:"AddColumn"}),".\nIf you update a nullability column to non nullability, there may be compatibility issues."]})})]})}function j(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},75863:(e,n,i)=>{i.d(n,{A:()=>j});var t=i(79474),s=i(13526),r=i(67697),a=i(24382),l=i(22972);const d={tabList:"tabList_rarn",tabItem:"tabItem_Gmas"};var c=i(13274);function o(e){let{className:n,block:i,selectedValue:t,selectValue:a,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:h}=(0,r.a_)(),x=e=>{const n=e.currentTarget,i=o.indexOf(n),s=l[i].value;s!==t&&(h(n),a(s))},j=e=>{let n=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const i=o.indexOf(e.currentTarget)+1;n=o[i]??o[0];break}case"ArrowLeft":{const i=o.indexOf(e.currentTarget)-1;n=o[i]??o[o.length-1];break}}n?.focus()};return(0,c.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":i},n),children:l.map((e=>{let{value:n,label:i,attributes:r}=e;return(0,c.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>o.push(e),onKeyDown:j,onClick:x,...r,className:(0,s.A)("tabs__item",d.tabItem,r?.className,{"tabs__item--active":t===n}),children:i??n},n)}))})}function h(e){let{lazy:n,children:i,selectedValue:s}=e;const r=(Array.isArray(i)?i:[i]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,c.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function x(e){const n=(0,a.u)(e);return(0,c.jsxs)("div",{className:(0,s.A)("tabs-container",d.tabList),children:[(0,c.jsx)(o,{...n,...e}),(0,c.jsx)(h,{...n,...e})]})}function j(e){const n=(0,l.default)();return(0,c.jsx)(x,{...e,children:(0,a.v)(e.children)},String(n))}}}]);