"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[95421],{93347:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>a});var c=i(13274),s=i(38389);const t={title:"Flink connector Iceberg catalog",slug:"/flink-connector/flink-catalog-iceberg",keyword:"flink connector iceberg catalog",license:"This software is licensed under the Apache License version 2."},l=void 0,d={id:"flink-connector/flink-catalog-iceberg",title:"Flink connector Iceberg catalog",description:"The Apache Gravitino Flink connector can be used to read and write Iceberg tables, with the metadata managed by the Gravitino server.",source:"@site/docs/flink-connector/flink-catalog-iceberg.md",sourceDirName:"flink-connector",slug:"/flink-connector/flink-catalog-iceberg",permalink:"/docs/next/flink-connector/flink-catalog-iceberg",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/flink-connector/flink-catalog-iceberg.md",tags:[],version:"current",lastUpdatedBy:"FANNG",lastUpdatedAt:173770816e4,frontMatter:{title:"Flink connector Iceberg catalog",slug:"/flink-connector/flink-catalog-iceberg",keyword:"flink connector iceberg catalog",license:"This software is licensed under the Apache License version 2."},sidebar:"docs",previous:{title:"Hive",permalink:"/docs/next/flink-connector/flink-catalog-hive"},next:{title:"Paimon",permalink:"/docs/next/flink-connector/flink-catalog-paimon"}},r={},a=[{value:"Capabilities",id:"capabilities",level:2},{value:"Supported DML and DDL operations:",id:"supported-dml-and-ddl-operations",level:4},{value:"Operations not supported:",id:"operations-not-supported",level:4},{value:"SQL example",id:"sql-example",level:2},{value:"Catalog properties",id:"catalog-properties",level:2},{value:"Storage",id:"storage",level:2},{value:"OSS",id:"oss",level:3}];function o(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.p,{children:"The Apache Gravitino Flink connector can be used to read and write Iceberg tables, with the metadata managed by the Gravitino server.\nTo enable the Flink connector, you must download the Iceberg Flink runtime JAR and place it in the Flink classpath."}),"\n",(0,c.jsx)(n.h2,{id:"capabilities",children:"Capabilities"}),"\n",(0,c.jsx)(n.h4,{id:"supported-dml-and-ddl-operations",children:"Supported DML and DDL operations:"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"CREATE CATALOG"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"CREATE DATABASE"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"CREATE TABLE"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"DROP TABLE"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"ALTER TABLE"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"INSERT INTO & OVERWRITE"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"SELECT"})}),"\n"]}),"\n",(0,c.jsx)(n.h4,{id:"operations-not-supported",children:"Operations not supported:"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"Partition operations"}),"\n",(0,c.jsx)(n.li,{children:"View operations"}),"\n",(0,c.jsxs)(n.li,{children:["Metadata tables, like:","\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"{iceberg_catalog}.{iceberg_database}.{iceberg_table}&snapshots"})}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.li,{children:"Query UDF"}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"UPDATE"})," clause"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"DELETE"})," clause"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"CREATE TABLE LIKE"})," clause"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"sql-example",children:"SQL example"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"\n-- Suppose iceberg_a is the Iceberg catalog name managed by Gravitino\n\nUSE CATALOG iceberg_a;\n\nCREATE DATABASE IF NOT EXISTS mydatabase;\nUSE mydatabase;\n\nCREATE TABLE sample (\n    id BIGINT COMMENT 'unique id',\n    data STRING NOT NULL\n) PARTITIONED BY (data) \nWITH ('format-version'='2');\n\nINSERT INTO sample\nVALUES (1, 'A'), (2, 'B');\n\nSELECT * FROM sample WHERE data = 'B';\n\n"})}),"\n",(0,c.jsx)(n.h2,{id:"catalog-properties",children:"Catalog properties"}),"\n",(0,c.jsx)(n.p,{children:"The Gravitino Flink connector transforms the following properties in a catalog to Flink connector configuration."}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Gravitino catalog property name"}),(0,c.jsx)(n.th,{children:"Flink Iceberg connector configuration"}),(0,c.jsx)(n.th,{children:"Description"}),(0,c.jsx)(n.th,{children:"Since Version"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"catalog-backend"})}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"catalog-type"})}),(0,c.jsxs)(n.td,{children:["Catalog backend type, currently, only ",(0,c.jsx)(n.code,{children:"Hive"})," Catalog is supported, ",(0,c.jsx)(n.code,{children:"JDBC"})," and ",(0,c.jsx)(n.code,{children:"Rest"})," in Continuous Validation"]}),(0,c.jsx)(n.td,{children:"0.8.0-incubating"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"uri"})}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"uri"})}),(0,c.jsx)(n.td,{children:"Catalog backend URI"}),(0,c.jsx)(n.td,{children:"0.8.0-incubating"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"warehouse"})}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"warehouse"})}),(0,c.jsx)(n.td,{children:"Catalog backend warehouse"}),(0,c.jsx)(n.td,{children:"0.8.0-incubating"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"io-impl"})}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"io-impl"})}),(0,c.jsxs)(n.td,{children:["The IO implementation for ",(0,c.jsx)(n.code,{children:"FileIO"})," in Iceberg."]}),(0,c.jsx)(n.td,{children:"0.8.0-incubating"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"oss-endpoint"})}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"oss.endpoint"})}),(0,c.jsx)(n.td,{children:"The endpoint of Aliyun OSS service."}),(0,c.jsx)(n.td,{children:"0.8.0-incubating"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"oss-access-key-id"})}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"client.access-key-id"})}),(0,c.jsx)(n.td,{children:"The static access key ID used to access OSS data."}),(0,c.jsx)(n.td,{children:"0.8.0-incubating"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"oss-secret-access-key"})}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"client.access-key-secret"})}),(0,c.jsx)(n.td,{children:"The static secret access key used to access OSS data."}),(0,c.jsx)(n.td,{children:"0.8.0-incubating"})]})]})]}),"\n",(0,c.jsxs)(n.p,{children:["Gravitino catalog property names with the prefix ",(0,c.jsx)(n.code,{children:"flink.bypass."})," are passed to Flink iceberg connector. For example, using ",(0,c.jsx)(n.code,{children:"flink.bypass.clients"})," to pass the ",(0,c.jsx)(n.code,{children:"clients"})," to the Flink iceberg connector."]}),"\n",(0,c.jsx)(n.h2,{id:"storage",children:"Storage"}),"\n",(0,c.jsx)(n.h3,{id:"oss",children:"OSS"}),"\n",(0,c.jsxs)(n.p,{children:["Additionally, you need download the ",(0,c.jsx)(n.a,{href:"https://gosspublic.alicdn.com/sdks/java/aliyun_java_sdk_3.10.2.zip",children:"Aliyun OSS SDK"}),", and copy ",(0,c.jsx)(n.code,{children:"aliyun-sdk-oss-3.10.2.jar"}),", ",(0,c.jsx)(n.code,{children:"hamcrest-core-1.1.jar"}),", ",(0,c.jsx)(n.code,{children:"jdom2-2.0.6.jar"})," to the Flink classpath."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}}}]);