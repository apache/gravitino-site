"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[73875],{93712:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>a});var t=n(13274),s=n(38389);const c={title:"Flink connector hive catalog",slug:"/flink-connector/flink-catalog-hive",keyword:"flink connector hive catalog",license:"This software is licensed under the Apache License version 2."},r=void 0,o={id:"flink-connector/flink-catalog-hive",title:"Flink connector hive catalog",description:"With the Apache Gravitino Flink connector, accessing data or managing metadata in Hive catalogs becomes straightforward, enabling seamless federation queries across different Hive catalogs.",source:"@site/versioned_docs/version-0.7.0-incubating/flink-connector/flink-catalog-hive.md",sourceDirName:"flink-connector",slug:"/flink-connector/flink-catalog-hive",permalink:"/docs/0.7.0-incubating/flink-connector/flink-catalog-hive",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/flink-connector/flink-catalog-hive.md",tags:[],version:"0.7.0-incubating",lastUpdatedBy:"FANNG",lastUpdatedAt:173770816e4,frontMatter:{title:"Flink connector hive catalog",slug:"/flink-connector/flink-catalog-hive",keyword:"flink connector hive catalog",license:"This software is licensed under the Apache License version 2."},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/0.7.0-incubating/flink-connector/flink-connector"},next:{title:"Configurations",permalink:"/docs/0.7.0-incubating/gravitino-server-config"}},l={},a=[{value:"Capabilities",id:"capabilities",level:2},{value:"Requirement",id:"requirement",level:2},{value:"SQL example",id:"sql-example",level:2},{value:"Catalog properties",id:"catalog-properties",level:2}];function d(e){const i={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.p,{children:"With the Apache Gravitino Flink connector, accessing data or managing metadata in Hive catalogs becomes straightforward, enabling seamless federation queries across different Hive catalogs."}),"\n",(0,t.jsx)(i.h2,{id:"capabilities",children:"Capabilities"}),"\n",(0,t.jsx)(i.p,{children:"Supports most DDL and DML operations in Flink SQL, except such operations:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Function operations"}),"\n",(0,t.jsx)(i.li,{children:"Partition operations"}),"\n",(0,t.jsx)(i.li,{children:"View operations"}),"\n",(0,t.jsx)(i.li,{children:"Querying UDF"}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"LOAD"})," clause"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"UNLOAD"})," clause"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"CREATE TABLE LIKE"})," clause"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"TRUCATE TABLE"})," clause"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"UPDATE"})," clause"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"DELETE"})," clause"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"CALL"})," clause"]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"requirement",children:"Requirement"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Hive metastore 2.x"}),"\n",(0,t.jsx)(i.li,{children:"HDFS 2.x or 3.x"}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"sql-example",children:"SQL example"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-sql",children:"\n// Suppose hive_a is the Hive catalog name managed by Gravitino\nUSE hive_a;\n\nCREATE DATABASE IF NOT EXISTS mydatabase;\nUSE mydatabase;\n\n// Create table\nCREATE TABLE IF NOT EXISTS employees (\n    id INT,\n    name STRING,\n    date INT\n)\nPARTITIONED BY (date);\n\nDESC TABLE EXTENDED employees;\n\nINSERT INTO TABLE employees VALUES (1, 'John Doe', 20240101), (2, 'Jane Smith', 20240101);\nSELECT * FROM employees WHERE date = '20240101';\n"})}),"\n",(0,t.jsx)(i.h2,{id:"catalog-properties",children:"Catalog properties"}),"\n",(0,t.jsxs)(i.p,{children:["The configuration of Flink Hive Connector is the same with the original Flink Hive connector.\nGravitino catalog property names with the prefix ",(0,t.jsx)(i.code,{children:"flink.bypass."})," are passed to Flink Hive connector. For example, using ",(0,t.jsx)(i.code,{children:"flink.bypass.hive-conf-dir"})," to pass the ",(0,t.jsx)(i.code,{children:"hive-conf-dir"})," to the Flink Hive connector.\nThe validated catalog properties are listed below. Any other properties with the prefix ",(0,t.jsx)(i.code,{children:"flink.bypass."})," in Gravitino Catalog will be ignored by Gravitino Flink Connector."]}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Property name in Gravitino catalog properties"}),(0,t.jsx)(i.th,{children:"Flink Hive connector configuration"}),(0,t.jsx)(i.th,{children:"Description"}),(0,t.jsx)(i.th,{children:"Since Version"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"flink.bypass.default-database"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"default-database"})}),(0,t.jsx)(i.td,{children:"Hive default database"}),(0,t.jsx)(i.td,{children:"0.6.0-incubating"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"flink.bypass.hive-conf-dir"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"hive-conf-dir"})}),(0,t.jsx)(i.td,{children:"Hive conf dir"}),(0,t.jsx)(i.td,{children:"0.6.0-incubating"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"flink.bypass.hive-version"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"hive-version"})}),(0,t.jsx)(i.td,{children:"Hive version"}),(0,t.jsx)(i.td,{children:"0.6.0-incubating"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"flink.bypass.hadoop-conf-dir"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"hadoop-conf-dir"})}),(0,t.jsx)(i.td,{children:"Hadoop conf dir"}),(0,t.jsx)(i.td,{children:"0.6.0-incubating"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"metastore.uris"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"hive.metastore.uris"})}),(0,t.jsx)(i.td,{children:"Hive metastore uri"}),(0,t.jsx)(i.td,{children:"0.6.0-incubating"})]})]})]}),"\n",(0,t.jsx)(i.admonition,{type:"caution",children:(0,t.jsxs)(i.p,{children:["You can set other hadoop properties (with the prefix ",(0,t.jsx)(i.code,{children:"hadoop."}),", ",(0,t.jsx)(i.code,{children:"dfs."}),", ",(0,t.jsx)(i.code,{children:"fs."}),", ",(0,t.jsx)(i.code,{children:"hive."}),") in Gravitino Catalog properties. If so, it will override\nthe configuration from the ",(0,t.jsx)(i.code,{children:"hive-conf-dir"})," and ",(0,t.jsx)(i.code,{children:"hadoop-conf-dir"}),"."]})})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}}}]);