"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[28350],{17014:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>s});var t=i(79474);const o={},a=t.createContext(o);function c(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),t.createElement(a.Provider,{value:n},e.children)}},61051:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>r});var t=i(13274),o=i(17014);const a={title:"Flink connector paimon catalog",slug:"/flink-connector/flink-catalog-paimon",keyword:"flink connector paimon catalog",license:"This software is licensed under the Apache License version 2."},c=void 0,s={id:"flink-connector/flink-catalog-paimon",title:"Flink connector paimon catalog",description:"This document provides a comprehensive guide on configuring and using Apache Gravitino Flink connector to access the Paimon catalog managed by the Gravitino server.",source:"@site/versioned_docs/version-0.8.0-incubating/flink-connector/flink-catalog-paimon.md",sourceDirName:"flink-connector",slug:"/flink-connector/flink-catalog-paimon",permalink:"/docs/0.8.0-incubating/flink-connector/flink-catalog-paimon",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/flink-connector/flink-catalog-paimon.md",tags:[],version:"0.8.0-incubating",frontMatter:{title:"Flink connector paimon catalog",slug:"/flink-connector/flink-catalog-paimon",keyword:"flink connector paimon catalog",license:"This software is licensed under the Apache License version 2."},sidebar:"docs",previous:{title:"Iceberg",permalink:"/docs/0.8.0-incubating/flink-connector/flink-catalog-iceberg"},next:{title:"Configurations",permalink:"/docs/0.8.0-incubating/gravitino-server-config"}},l={},r=[{value:"Capabilities",id:"capabilities",level:2},{value:"Supported Paimon Table Types",id:"supported-paimon-table-types",level:3},{value:"Supported Operation Types",id:"supported-operation-types",level:3},{value:"Requirement",id:"requirement",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"SQL Example",id:"sql-example",level:3},{value:"Catalog properties",id:"catalog-properties",level:2}];function d(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"This document provides a comprehensive guide on configuring and using Apache Gravitino Flink connector to access the Paimon catalog managed by the Gravitino server."}),"\n",(0,t.jsx)(n.h2,{id:"capabilities",children:"Capabilities"}),"\n",(0,t.jsx)(n.h3,{id:"supported-paimon-table-types",children:"Supported Paimon Table Types"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"AppendOnly Table"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"supported-operation-types",children:"Supported Operation Types"}),"\n",(0,t.jsx)(n.p,{children:"Supports most DDL and DML operations in Flink SQL, except such operations:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Function operations"}),"\n",(0,t.jsx)(n.li,{children:"Partition operations"}),"\n",(0,t.jsx)(n.li,{children:"View operations"}),"\n",(0,t.jsx)(n.li,{children:"Querying UDF"}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"LOAD"})," clause"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"UNLOAD"})," clause"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"CREATE TABLE LIKE"})," clause"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"TRUCATE TABLE"})," clause"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"UPDATE"})," clause"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"DELETE"})," clause"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"CALL"})," clause"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"requirement",children:"Requirement"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Paimon 0.8"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Higher version like 0.9 or above may also support but have not been tested fully."}),"\n",(0,t.jsx)(n.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,t.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(n.p,{children:"Place the following JAR files in the lib directory of your Flink installation:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"paimon-flink-1.18-${paimon-version}.jar"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"gravitino-flink-connector-runtime-1.18_2.12-${gravitino-version}.jar"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"sql-example",children:"SQL Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"\n-- Suppose paimon_catalog is the Paimon catalog name managed by Gravitino\nUSE CATALOG paimon_catalog;\n-- Execute statement succeed.\n\nSHOW DATABASES;\n-- +---------------------+\n-- |       database name |\n-- +---------------------+\n-- |             default |\n-- | gravitino_paimon_db |\n-- +---------------------+\n\nSET 'execution.runtime-mode' = 'batch';\n-- [INFO] Execute statement succeed.\n\nSET 'sql-client.execution.result-mode' = 'tableau';\n-- [INFO] Execute statement succeed.\n\nCREATE TABLE paimon_tabla_a (\n    aa BIGINT,\n    bb BIGINT\n);\n\nSHOW TABLES;\n-- +----------------+\n-- |     table name |\n-- +----------------+\n-- | paimon_table_a |\n-- +----------------+\n\n\nSELECT * FROM paimon_table_a;\n-- Empty set\n\nINSERT INTO paimon_table_a(aa,bb) VALUES(1,2);\n-- [INFO] Submitting SQL update statement to the cluster...\n-- [INFO] SQL update statement has been successfully submitted to the cluster:\n-- Job ID: 74c0c678124f7b452daf08c399d0fee2\n\nSELECT * FROM paimon_table_a;\n-- +----+----+\n-- | aa | bb |\n-- +----+----+\n-- |  1 |  2 |\n-- +----+----+\n-- 1 row in set\n"})}),"\n",(0,t.jsx)(n.h2,{id:"catalog-properties",children:"Catalog properties"}),"\n",(0,t.jsx)(n.p,{children:"Gravitino Flink connector will transform below property names which are defined in catalog properties to Flink Paimon connector configuration."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Gravitino catalog property name"}),(0,t.jsx)(n.th,{children:"Flink Paimon connector configuration"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Since Version"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"catalog-backend"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"metastore"})}),(0,t.jsxs)(n.td,{children:["Catalog backend of Gravitino Paimon catalog. Supports ",(0,t.jsx)(n.code,{children:"filesystem"}),"."]}),(0,t.jsx)(n.td,{children:"0.8.0-incubating"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"warehouse"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"warehouse"})}),(0,t.jsxs)(n.td,{children:["Warehouse directory of catalog. ",(0,t.jsx)(n.code,{children:"file:///user/hive/warehouse-paimon/"})," for local fs, ",(0,t.jsx)(n.code,{children:"hdfs://namespace/hdfs/path"})," for HDFS , ",(0,t.jsx)(n.code,{children:"s3://{bucket-name}/path/"})," for S3 or ",(0,t.jsx)(n.code,{children:"oss://{bucket-name}/path"})," for Aliyun OSS"]}),(0,t.jsx)(n.td,{children:"0.8.0-incubating"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["Gravitino catalog property names with the prefix ",(0,t.jsx)(n.code,{children:"flink.bypass."})," are passed to Flink Paimon connector. For example, using ",(0,t.jsx)(n.code,{children:"flink.bypass.clients"})," to pass the ",(0,t.jsx)(n.code,{children:"clients"})," to the Flink Paimon connector."]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}}}]);