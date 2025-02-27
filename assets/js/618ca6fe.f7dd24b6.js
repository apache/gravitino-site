"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[1017],{17014:(e,n,a)=>{a.d(n,{R:()=>r,x:()=>s});var i=a(79474);const t={},o=i.createContext(t);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(o.Provider,{value:n},e.children)}},93128:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var i=a(13274),t=a(17014);const o={title:"Spark connector Paimon catalog",slug:"/spark-connector/spark-catalog-paimon",keyword:"spark connector paimon catalog",license:"This software is licensed under the Apache License version 2."},r=void 0,s={id:"spark-connector/spark-catalog-paimon",title:"Spark connector Paimon catalog",description:"The Apache Gravitino Spark connector offers the capability to read and write Paimon tables, with the metadata managed by the Gravitino server. To enable the use of the Paimon catalog within the Spark connector now, you must set download Paimon Spark runtime jar to Spark classpath.",source:"@site/docs/spark-connector/spark-catalog-paimon.md",sourceDirName:"spark-connector",slug:"/spark-connector/spark-catalog-paimon",permalink:"/docs/next/spark-connector/spark-catalog-paimon",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/spark-connector/spark-catalog-paimon.md",tags:[],version:"current",frontMatter:{title:"Spark connector Paimon catalog",slug:"/spark-connector/spark-catalog-paimon",keyword:"spark connector paimon catalog",license:"This software is licensed under the Apache License version 2."},sidebar:"docs",previous:{title:"Iceberg",permalink:"/docs/next/spark-connector/spark-catalog-iceberg"},next:{title:"Spark authentication",permalink:"/docs/next/spark-connector/spark-authentication"}},c={},l=[{value:"Capabilities",id:"capabilities",level:2},{value:"Support DDL and DML operations:",id:"support-ddl-and-dml-operations",level:3},{value:"Not supported operations:",id:"not-supported-operations",level:4},{value:"SQL example",id:"sql-example",level:2},{value:"Catalog properties",id:"catalog-properties",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["The Apache Gravitino Spark connector offers the capability to read and write Paimon tables, with the metadata managed by the Gravitino server. To enable the use of the Paimon catalog within the Spark connector now, you must set download ",(0,i.jsx)(n.a,{href:"https://paimon.apache.org/docs/0.8/spark/quick-start/#preparation",children:"Paimon Spark runtime jar"})," to Spark classpath."]}),"\n",(0,i.jsx)(n.h2,{id:"capabilities",children:"Capabilities"}),"\n",(0,i.jsx)(n.h3,{id:"support-ddl-and-dml-operations",children:"Support DDL and DML operations:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"CREATE NAMESPACE"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"DROP NAMESPACE"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"LIST NAMESPACE"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"LOAD NAMESPACE"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"It can not return any user-specified configs now, as we only support FilesystemCatalog in spark-connector now."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"CREATE TABLE"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Doesn't support distribution and sort orders."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"DROP TABLE"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"ALTER TABLE"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"LIST TABLE"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"DESRICE TABLE"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"SELECT"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"INSERT INTO & OVERWRITE"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"Schema Evolution"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"PARTITION MANAGEMENT"}),", such as ",(0,i.jsx)(n.code,{children:"LIST PARTITIONS"}),", ",(0,i.jsx)(n.code,{children:"ALTER TABLE ... DROP PARTITION ..."})]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"Only supports Paimon FilesystemCatalog on HDFS now."})}),"\n",(0,i.jsx)(n.h4,{id:"not-supported-operations",children:"Not supported operations:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ALTER NAMESPACE"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Paimon does not support alter namespace."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Row Level operations, such as ",(0,i.jsx)(n.code,{children:"MERGE INTO"}),", ",(0,i.jsx)(n.code,{children:"DELETE"}),", ",(0,i.jsx)(n.code,{children:"UPDATE"}),", ",(0,i.jsx)(n.code,{children:"TRUNCATE"})]}),"\n",(0,i.jsxs)(n.li,{children:["Metadata tables, such as ",(0,i.jsx)(n.code,{children:"{paimon_catalog}.{paimon_database}.{paimon_table}$snapshots"})]}),"\n",(0,i.jsxs)(n.li,{children:["Other Paimon extension SQLs, such as ",(0,i.jsx)(n.code,{children:"Tag"})]}),"\n",(0,i.jsx)(n.li,{children:"Call Statements"}),"\n",(0,i.jsx)(n.li,{children:"View"}),"\n",(0,i.jsx)(n.li,{children:"Time Travel"}),"\n",(0,i.jsx)(n.li,{children:"Hive and Jdbc backend, and Object Storage for FilesystemCatalog"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"sql-example",children:"SQL example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"-- Suppose paimon_catalog is the Paimon catalog name managed by Gravitino\nUSE paimon_catalog;\n\nCREATE DATABASE IF NOT EXISTS mydatabase;\nUSE mydatabase;\n\nCREATE TABLE IF NOT EXISTS employee (\n  id bigint,\n  name string,\n  department string,\n  hire_date timestamp\n) PARTITIONED BY (name);\n\nSHOW TABLES;\nDESC TABLE EXTENDED employee;\n\nINSERT INTO employee\nVALUES\n(1, 'Alice', 'Engineering', TIMESTAMP '2021-01-01 09:00:00'),\n(2, 'Bob', 'Marketing', TIMESTAMP '2021-02-01 10:30:00'),\n(3, 'Charlie', 'Sales', TIMESTAMP '2021-03-01 08:45:00');\n\nSELECT * FROM employee WHERE name = 'Alice';\n\nSHOW PARTITIONS employee;\nALTER TABLE employee DROP PARTITION (`name`='Alice');\n"})}),"\n",(0,i.jsx)(n.h2,{id:"catalog-properties",children:"Catalog properties"}),"\n",(0,i.jsx)(n.p,{children:"Gravitino spark connector will transform below property names which are defined in catalog properties to Spark Paimon connector configuration."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Gravitino catalog property name"}),(0,i.jsx)(n.th,{children:"Spark Paimon connector configuration"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Since Version"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"catalog-backend"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"metastore"})}),(0,i.jsx)(n.td,{children:"Catalog backend type"}),(0,i.jsx)(n.td,{children:"0.8.0-incubating"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"uri"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"uri"})}),(0,i.jsx)(n.td,{children:"Catalog backend uri"}),(0,i.jsx)(n.td,{children:"0.8.0-incubating"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"warehouse"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"warehouse"})}),(0,i.jsx)(n.td,{children:"Catalog backend warehouse"}),(0,i.jsx)(n.td,{children:"0.8.0-incubating"})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["Gravitino catalog property names with the prefix ",(0,i.jsx)(n.code,{children:"spark.bypass."})," are passed to Spark Paimon connector. For example, using ",(0,i.jsx)(n.code,{children:"spark.bypass.client-pool-size"})," to pass the ",(0,i.jsx)(n.code,{children:"client-pool-size"})," to the Spark Paimon connector."]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);