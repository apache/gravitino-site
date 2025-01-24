"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[92625],{42320:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>j,frontMatter:()=>d,metadata:()=>c,toc:()=>h});var a=i(13274),t=i(38389),s=i(75863),l=i(64323);const d={title:"OceanBase catalog",slug:"/jdbc-oceanbase-catalog",keywords:["jdbc","OceanBase","metadata"],license:"This software is licensed under the Apache License version 2."},r=void 0,c={id:"jdbc-oceanbase-catalog",title:"OceanBase catalog",description:"Introduction",source:"@site/versioned_docs/version-0.8.0-incubating/jdbc-oceanbase-catalog.md",sourceDirName:".",slug:"/jdbc-oceanbase-catalog",permalink:"/docs/0.8.0-incubating/jdbc-oceanbase-catalog",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/jdbc-oceanbase-catalog.md",tags:[],version:"0.8.0-incubating",lastUpdatedBy:"FANNG",lastUpdatedAt:173770816e4,frontMatter:{title:"OceanBase catalog",slug:"/jdbc-oceanbase-catalog",keywords:["jdbc","OceanBase","metadata"],license:"This software is licensed under the Apache License version 2."},sidebar:"docs",previous:{title:"Hudi catalog",permalink:"/docs/0.8.0-incubating/lakehouse-hudi-catalog"},next:{title:"Hadoop catalog index",permalink:"/docs/0.8.0-incubating/hadoop-catalog-index"}},o={},h=[{value:"Introduction",id:"introduction",level:2},{value:"Catalog",id:"catalog",level:2},{value:"Catalog capabilities",id:"catalog-capabilities",level:3},{value:"Catalog properties",id:"catalog-properties",level:3},{value:"Catalog operations",id:"catalog-operations",level:3},{value:"Schema",id:"schema",level:2},{value:"Schema capabilities",id:"schema-capabilities",level:3},{value:"Schema properties",id:"schema-properties",level:3},{value:"Schema operations",id:"schema-operations",level:3},{value:"Table",id:"table",level:2},{value:"Table capabilities",id:"table-capabilities",level:3},{value:"Table properties",id:"table-properties",level:3},{value:"Table column types",id:"table-column-types",level:3},{value:"Table column auto-increment",id:"table-column-auto-increment",level:3},{value:"Table indexes",id:"table-indexes",level:3},{value:"Table operations",id:"table-operations",level:3},{value:"Alter table operations",id:"alter-table-operations",level:4}];function x(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,a.jsx)(n.p,{children:"Apache Gravitino provides the ability to manage OceanBase metadata."}),"\n",(0,a.jsx)(n.admonition,{type:"caution",children:(0,a.jsxs)(n.p,{children:["Gravitino saves some system information in schema and table comment, like ",(0,a.jsx)(n.code,{children:"(From Gravitino, DO NOT EDIT: gravitino.v1.uid1078334182909406185)"}),", please don't change or remove this message."]})}),"\n",(0,a.jsx)(n.h2,{id:"catalog",children:"Catalog"}),"\n",(0,a.jsx)(n.h3,{id:"catalog-capabilities",children:"Catalog capabilities"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Gravitino catalog corresponds to the OceanBase instance."}),"\n",(0,a.jsx)(n.li,{children:"Supports metadata management of OceanBase (4.x)."}),"\n",(0,a.jsx)(n.li,{children:"Supports DDL operation for OceanBase databases and tables."}),"\n",(0,a.jsx)(n.li,{children:"Supports table index."}),"\n",(0,a.jsxs)(n.li,{children:["Supports ",(0,a.jsx)(n.a,{href:"/docs/0.8.0-incubating/manage-relational-metadata-using-gravitino#table-column-default-value",children:"column default value"})," and ",(0,a.jsx)(n.a,{href:"/docs/0.8.0-incubating/manage-relational-metadata-using-gravitino#table-column-auto-increment",children:"auto-increment"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"catalog-properties",children:"Catalog properties"}),"\n",(0,a.jsxs)(n.p,{children:["You can pass to a OceanBase data source any property that isn't defined by Gravitino by adding ",(0,a.jsx)(n.code,{children:"gravitino.bypass."})," prefix as a catalog property. For example, catalog property ",(0,a.jsx)(n.code,{children:"gravitino.bypass.maxWaitMillis"})," will pass ",(0,a.jsx)(n.code,{children:"maxWaitMillis"})," to the data source property."]}),"\n",(0,a.jsxs)(n.p,{children:["Check the relevant data source configuration in ",(0,a.jsx)(n.a,{href:"https://commons.apache.org/proper/commons-dbcp/configuration.html",children:"data source properties"})]}),"\n",(0,a.jsxs)(n.p,{children:["If you use a JDBC catalog, you must provide ",(0,a.jsx)(n.code,{children:"jdbc-url"}),", ",(0,a.jsx)(n.code,{children:"jdbc-driver"}),", ",(0,a.jsx)(n.code,{children:"jdbc-user"})," and ",(0,a.jsx)(n.code,{children:"jdbc-password"})," to catalog properties.\nBesides the ",(0,a.jsx)(n.a,{href:"/docs/0.8.0-incubating/gravitino-server-config#gravitino-catalog-properties-configuration",children:"common catalog properties"}),", the OceanBase catalog has the following properties:"]}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Configuration item"}),(0,a.jsx)(n.th,{children:"Description"}),(0,a.jsx)(n.th,{children:"Default value"}),(0,a.jsx)(n.th,{children:"Required"}),(0,a.jsx)(n.th,{children:"Since Version"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"jdbc-url"})}),(0,a.jsxs)(n.td,{children:["JDBC URL for connecting to the database. For example, ",(0,a.jsx)(n.code,{children:"jdbc:mysql://localhost:2881"})," or ",(0,a.jsx)(n.code,{children:"jdbc:oceanbase://localhost:2881"})]}),(0,a.jsx)(n.td,{children:"(none)"}),(0,a.jsx)(n.td,{children:"Yes"}),(0,a.jsx)(n.td,{children:"0.7.0-incubating"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"jdbc-driver"})}),(0,a.jsxs)(n.td,{children:["The driver of the JDBC connection. For example, ",(0,a.jsx)(n.code,{children:"com.mysql.jdbc.Driver"})," or ",(0,a.jsx)(n.code,{children:"com.mysql.cj.jdbc.Driver"})," or ",(0,a.jsx)(n.code,{children:"com.oceanbase.jdbc.Driver"}),"."]}),(0,a.jsx)(n.td,{children:"(none)"}),(0,a.jsx)(n.td,{children:"Yes"}),(0,a.jsx)(n.td,{children:"0.7.0-incubating"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"jdbc-user"})}),(0,a.jsx)(n.td,{children:"The JDBC user name."}),(0,a.jsx)(n.td,{children:"(none)"}),(0,a.jsx)(n.td,{children:"Yes"}),(0,a.jsx)(n.td,{children:"0.7.0-incubating"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"jdbc-password"})}),(0,a.jsx)(n.td,{children:"The JDBC password."}),(0,a.jsx)(n.td,{children:"(none)"}),(0,a.jsx)(n.td,{children:"Yes"}),(0,a.jsx)(n.td,{children:"0.7.0-incubating"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"jdbc.pool.min-size"})}),(0,a.jsxs)(n.td,{children:["The minimum number of connections in the pool. ",(0,a.jsx)(n.code,{children:"2"})," by default."]}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"2"})}),(0,a.jsx)(n.td,{children:"No"}),(0,a.jsx)(n.td,{children:"0.7.0-incubating"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"jdbc.pool.max-size"})}),(0,a.jsxs)(n.td,{children:["The maximum number of connections in the pool. ",(0,a.jsx)(n.code,{children:"10"})," by default."]}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"10"})}),(0,a.jsx)(n.td,{children:"No"}),(0,a.jsx)(n.td,{children:"0.7.0-incubating"})]})]})]}),"\n",(0,a.jsx)(n.admonition,{type:"caution",children:(0,a.jsxs)(n.p,{children:["Before using the OceanBase Catalog, you must download the corresponding JDBC driver to the ",(0,a.jsx)(n.code,{children:"catalogs/jdbc-oceanbase/libs"})," directory.\nGravitino doesn't package the JDBC driver for OceanBase due to licensing issues."]})}),"\n",(0,a.jsx)(n.h3,{id:"catalog-operations",children:"Catalog operations"}),"\n",(0,a.jsxs)(n.p,{children:["Refer to ",(0,a.jsx)(n.a,{href:"/docs/0.8.0-incubating/manage-relational-metadata-using-gravitino#catalog-operations",children:"Manage Relational Metadata Using Gravitino"})," for more details."]}),"\n",(0,a.jsx)(n.h2,{id:"schema",children:"Schema"}),"\n",(0,a.jsx)(n.h3,{id:"schema-capabilities",children:"Schema capabilities"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Gravitino's schema concept corresponds to the OceanBase database."}),"\n",(0,a.jsx)(n.li,{children:"Supports creating schema, but does not support setting comment."}),"\n",(0,a.jsx)(n.li,{children:"Supports dropping schema."}),"\n",(0,a.jsx)(n.li,{children:"Supports cascade dropping schema."}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"schema-properties",children:"Schema properties"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Doesn't support any schema property settings."}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"schema-operations",children:"Schema operations"}),"\n",(0,a.jsxs)(n.p,{children:["Refer to ",(0,a.jsx)(n.a,{href:"/docs/0.8.0-incubating/manage-relational-metadata-using-gravitino#schema-operations",children:"Manage Relational Metadata Using Gravitino"})," for more details."]}),"\n",(0,a.jsx)(n.h2,{id:"table",children:"Table"}),"\n",(0,a.jsx)(n.h3,{id:"table-capabilities",children:"Table capabilities"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Gravitino's table concept corresponds to the OceanBase table."}),"\n",(0,a.jsx)(n.li,{children:"Supports DDL operation for OceanBase tables."}),"\n",(0,a.jsx)(n.li,{children:"Supports index."}),"\n",(0,a.jsxs)(n.li,{children:["Supports ",(0,a.jsx)(n.a,{href:"/docs/0.8.0-incubating/manage-relational-metadata-using-gravitino#table-column-default-value",children:"column default value"})," and ",(0,a.jsx)(n.a,{href:"/docs/0.8.0-incubating/manage-relational-metadata-using-gravitino#table-column-auto-increment",children:"auto-increment"}),".."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"table-properties",children:"Table properties"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Doesn't support table properties."}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"table-column-types",children:"Table column types"}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Gravitino Type"}),(0,a.jsx)(n.th,{children:"OceanBase Type"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"Byte"})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"Tinyint"})})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"Byte(false)"})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"Tinyint Unsigned"})})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"Short"})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"Smallint"})})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"Short(false)"})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"Smallint Unsigned"})})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"Integer"})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"Int"})})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"Integer(false)"})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"Int Unsigned"})})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"Long"})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"Bigint"})})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"Long(false)"})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"Bigint Unsigned"})})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"Float"})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"Float"})})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"Double"})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"Double"})})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"String"})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"Text"})})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"Date"})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"Date"})})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"Time"})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"Time"})})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"Timestamp"})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"Timestamp"})})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"Decimal"})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"Decimal"})})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"VarChar"})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"VarChar"})})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"FixedChar"})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"FixedChar"})})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"Binary"})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"Binary"})})]})]})]}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["OceanBase doesn't support Gravitino ",(0,a.jsx)(n.code,{children:"Boolean"})," ",(0,a.jsx)(n.code,{children:"Fixed"})," ",(0,a.jsx)(n.code,{children:"Struct"})," ",(0,a.jsx)(n.code,{children:"List"})," ",(0,a.jsx)(n.code,{children:"Map"})," ",(0,a.jsx)(n.code,{children:"Timestamp_tz"})," ",(0,a.jsx)(n.code,{children:"IntervalDay"})," ",(0,a.jsx)(n.code,{children:"IntervalYear"})," ",(0,a.jsx)(n.code,{children:"Union"})," ",(0,a.jsx)(n.code,{children:"UUID"})," type.\nMeanwhile, the data types other than listed above are mapped to Gravitino ",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.a,{href:"/docs/0.8.0-incubating/manage-relational-metadata-using-gravitino#external-type",children:"External Type"})})," that represents an unresolvable data type since 0.6.0-incubating."]})}),"\n",(0,a.jsx)(n.h3,{id:"table-column-auto-increment",children:"Table column auto-increment"}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsx)(n.p,{children:"OceanBase setting an auto-increment column requires simultaneously setting a unique index; otherwise, an error will occur."})}),"\n",(0,a.jsxs)(s.A,{groupId:"language",queryString:!0,children:[(0,a.jsx)(l.default,{value:"json",label:"Json",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "columns": [\n    {\n      "name": "id",\n      "type": "integer",\n      "comment": "id column comment",\n      "nullable": false,\n      "autoIncrement": true\n    },\n    {\n      "name": "name",\n      "type": "varchar(500)",\n      "comment": "name column comment",\n      "nullable": true,\n      "autoIncrement": false\n    }\n  ],\n  "indexes": [\n    {\n      "indexType": "primary_key",\n      "name": "PRIMARY",\n      "fieldNames": [["id"]]\n    }\n  ]\n}\n'})})}),(0,a.jsx)(l.default,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'Column[] cols = new Column[] {\n    Column.of("id", Types.IntegerType.get(), "id column comment", false, true, null),\n    Column.of("name", Types.VarCharType.of(500), "Name of the user", true, false, null)\n};\nIndex[] indexes = new Index[] {\n    Indexes.of(IndexType.PRIMARY_KEY, "PRIMARY", new String[][]{{"id"}})\n}\n'})})})]}),"\n",(0,a.jsx)(n.h3,{id:"table-indexes",children:"Table indexes"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Supports PRIMARY_KEY and UNIQUE_KEY."}),"\n"]}),"\n",(0,a.jsxs)(s.A,{groupId:"language",queryString:!0,children:[(0,a.jsx)(l.default,{value:"json",label:"Json",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "indexes": [\n    {\n      "indexType": "primary_key",\n      "name": "PRIMARY",\n      "fieldNames": [["id"]]\n    },\n    {\n      "indexType": "unique_key",\n      "name": "id_name_uk",\n      "fieldNames": [["id"] ,["name"]]\n    }\n  ]\n}\n'})})}),(0,a.jsx)(l.default,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'Index[] indexes = new Index[] {\n    Indexes.of(IndexType.PRIMARY_KEY, "PRIMARY", new String[][]{{"id"}}),\n    Indexes.of(IndexType.UNIQUE_KEY, "id_name_uk", new String[][]{{"id"} , {"name"}}),\n}\n'})})})]}),"\n",(0,a.jsx)(n.h3,{id:"table-operations",children:"Table operations"}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsx)(n.p,{children:"The OceanBase catalog does not support creating partitioned tables in the current version."})}),"\n",(0,a.jsxs)(n.p,{children:["Refer to ",(0,a.jsx)(n.a,{href:"/docs/0.8.0-incubating/manage-relational-metadata-using-gravitino#table-operations",children:"Manage Relational Metadata Using Gravitino"})," for more details."]}),"\n",(0,a.jsx)(n.h4,{id:"alter-table-operations",children:"Alter table operations"}),"\n",(0,a.jsx)(n.p,{children:"Gravitino supports these table alteration operations:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"RenameTable"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"UpdateComment"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"AddColumn"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"DeleteColumn"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"RenameColumn"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"UpdateColumnType"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"UpdateColumnPosition"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"UpdateColumnNullability"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"UpdateColumnComment"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"UpdateColumnDefaultValue"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"SetProperty"})}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["You cannot submit the ",(0,a.jsx)(n.code,{children:"RenameTable"})," operation at the same time as other operations."]}),"\n",(0,a.jsx)(n.li,{children:"If you update a nullability column to non-nullability, there may be compatibility issues."}),"\n"]})})]})}function j(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(x,{...e})}):x(e)}},75863:(e,n,i)=>{i.d(n,{A:()=>j});var a=i(79474),t=i(13526),s=i(67697),l=i(24382),d=i(22972);const r={tabList:"tabList_rarn",tabItem:"tabItem_Gmas"};var c=i(13274);function o(e){let{className:n,block:i,selectedValue:a,selectValue:l,tabValues:d}=e;const o=[],{blockElementScrollPositionUntilNextRender:h}=(0,s.a_)(),x=e=>{const n=e.currentTarget,i=o.indexOf(n),t=d[i].value;t!==a&&(h(n),l(t))},j=e=>{let n=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const i=o.indexOf(e.currentTarget)+1;n=o[i]??o[0];break}case"ArrowLeft":{const i=o.indexOf(e.currentTarget)-1;n=o[i]??o[o.length-1];break}}n?.focus()};return(0,c.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":i},n),children:d.map((e=>{let{value:n,label:i,attributes:s}=e;return(0,c.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>o.push(e),onKeyDown:j,onClick:x,...s,className:(0,t.A)("tabs__item",r.tabItem,s?.className,{"tabs__item--active":a===n}),children:i??n},n)}))})}function h(e){let{lazy:n,children:i,selectedValue:t}=e;const s=(Array.isArray(i)?i:[i]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===t));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,c.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function x(e){const n=(0,l.u)(e);return(0,c.jsxs)("div",{className:(0,t.A)("tabs-container",r.tabList),children:[(0,c.jsx)(o,{...n,...e}),(0,c.jsx)(h,{...n,...e})]})}function j(e){const n=(0,d.default)();return(0,c.jsx)(x,{...e,children:(0,l.v)(e.children)},String(n))}}}]);