"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[5611],{7708:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>o});var i=r(13274),s=r(43183);const t={title:"Spark connector Iceberg catalog",slug:"/spark-connector/spark-catalog-iceberg",keyword:"spark connector iceberg catalog",license:"This software is licensed under the Apache License version 2."},a=void 0,c={id:"spark-connector/spark-catalog-iceberg",title:"Spark connector Iceberg catalog",description:"The Apache Gravitino Spark connector offers the capability to read and write Iceberg tables, with the metadata managed by the Gravitino server. To enable the use of the Iceberg catalog within the Spark connector, you must set the configuration spark.sql.gravitino.enableIcebergSupport to true and download Iceberg Spark runtime jar to Spark classpath.",source:"@site/docs/spark-connector/spark-catalog-iceberg.md",sourceDirName:"spark-connector",slug:"/spark-connector/spark-catalog-iceberg",permalink:"/docs/next/spark-connector/spark-catalog-iceberg",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/spark-connector/spark-catalog-iceberg.md",tags:[],version:"current",lastUpdatedBy:"mchades",lastUpdatedAt:1729484604e3,frontMatter:{title:"Spark connector Iceberg catalog",slug:"/spark-connector/spark-catalog-iceberg",keyword:"spark connector iceberg catalog",license:"This software is licensed under the Apache License version 2."},sidebar:"docs",previous:{title:"Hive",permalink:"/docs/next/spark-connector/spark-catalog-hive"},next:{title:"Overview",permalink:"/docs/next/flink-connector/flink-connector"}},d={},o=[{value:"Capabilities",id:"capabilities",level:2},{value:"Support DML and DDL operations:",id:"support-dml-and-ddl-operations",level:4},{value:"Not supported operations:",id:"not-supported-operations",level:4},{value:"SQL example",id:"sql-example",level:2},{value:"Catalog properties",id:"catalog-properties",level:2},{value:"Storage",id:"storage",level:2},{value:"S3",id:"s3",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["The Apache Gravitino Spark connector offers the capability to read and write Iceberg tables, with the metadata managed by the Gravitino server. To enable the use of the Iceberg catalog within the Spark connector, you must set the configuration ",(0,i.jsx)(n.code,{children:"spark.sql.gravitino.enableIcebergSupport"})," to ",(0,i.jsx)(n.code,{children:"true"})," and download Iceberg Spark runtime jar to Spark classpath."]}),"\n",(0,i.jsx)(n.h2,{id:"capabilities",children:"Capabilities"}),"\n",(0,i.jsx)(n.h4,{id:"support-dml-and-ddl-operations",children:"Support DML and DDL operations:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"CREATE TABLE"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Doesn't support distribution and sort orders."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"DROP TABLE"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"ALTER TABLE"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"INSERT INTO&OVERWRITE"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"SELECT"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"MERGE INTO"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"DELETE FROM"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"UPDATE"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"CALL"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"TIME TRAVEL QUERY"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"DESCRIBE TABLE"})}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"not-supported-operations",children:"Not supported operations:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"View operations."}),"\n",(0,i.jsxs)(n.li,{children:["Metadata tables, like:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"{iceberg_catalog}.{iceberg_database}.{iceberg_table}.snapshots"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Other Iceberg extension SQLs, like:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"ALTER TABLE prod.db.sample ADD PARTITION FIELD xx"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"ALTER TABLE ... WRITE ORDERED BY"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"ALTER TABLE prod.db.sample CREATE BRANCH branchName"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"ALTER TABLE prod.db.sample CREATE TAG tagName"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"AtomicCreateTableAsSelect&AtomicReplaceTableAsSelect"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"sql-example",children:"SQL example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"-- Suppose iceberg_a is the Iceberg catalog name managed by Gravitino\nUSE iceberg_a;\n\nCREATE DATABASE IF NOT EXISTS mydatabase;\nUSE mydatabase;\n\nCREATE TABLE IF NOT EXISTS employee (\n  id bigint,\n  name string,\n  department string,\n  hire_date timestamp\n) USING iceberg\nPARTITIONED BY (days(hire_date));\nDESC TABLE EXTENDED employee;\n\nINSERT INTO employee\nVALUES\n(1, 'Alice', 'Engineering', TIMESTAMP '2021-01-01 09:00:00'),\n(2, 'Bob', 'Marketing', TIMESTAMP '2021-02-01 10:30:00'),\n(3, 'Charlie', 'Sales', TIMESTAMP '2021-03-01 08:45:00');\n\nSELECT * FROM employee WHERE date(hire_date) = '2021-01-01';\n\nUPDATE employee SET department = 'Jenny' WHERE id = 1;\n\nDELETE FROM employee WHERE id < 2;\n\nMERGE INTO employee\nUSING (SELECT 4 as id, 'David' as name, 'Engineering' as department, TIMESTAMP '2021-04-01 09:00:00' as hire_date) as new_employee\nON employee.id = new_employee.id\nWHEN MATCHED THEN UPDATE SET *\nWHEN NOT MATCHED THEN INSERT *;\n\nMERGE INTO employee\nUSING (SELECT 4 as id, 'David' as name, 'Engineering' as department, TIMESTAMP '2021-04-01 09:00:00' as hire_date) as new_employee\nON employee.id = new_employee.id\nWHEN MATCHED THEN DELETE\nWHEN NOT MATCHED THEN INSERT *;\n\n-- Suppose that the first snapshotId of employee is 1L and the second snapshotId is 2L\n-- Rollback the snapshot for iceberg_a.mydatabase.employee to 1L\nCALL iceberg_a.system.rollback_to_snapshot('iceberg_a.mydatabase.employee', 1);\n-- Set the snapshot for iceberg_a.mydatabase.employee to 2L\nCALL iceberg_a.system.set_current_snapshot('iceberg_a.mydatabase.employee', 2);\n\n-- Suppose that the commit timestamp of the first snapshot is older than '2024-05-27 01:01:00'\n-- Time travel to '2024-05-27 01:01:00'\nSELECT * FROM employee TIMESTAMP AS OF '2024-05-27 01:01:00';\nSELECT * FROM employee FOR SYSTEM_TIME AS OF '2024-05-27 01:01:00';\n\n-- Show the details of employee, such as schema and reserved properties(like location, current-snapshot-id, provider, format, format-version, etc)\nDESC EXTENDED employee;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["For more details about ",(0,i.jsx)(n.code,{children:"CALL"}),", please refer to the ",(0,i.jsx)(n.a,{href:"https://iceberg.apache.org/docs/1.5.2/spark-procedures/#spark-procedures",children:"Spark Procedures description"})," in Iceberg official document."]}),"\n",(0,i.jsx)(n.h2,{id:"catalog-properties",children:"Catalog properties"}),"\n",(0,i.jsx)(n.p,{children:"Gravitino spark connector will transform below property names which are defined in catalog properties to Spark Iceberg connector configuration."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Gravitino catalog property name"}),(0,i.jsx)(n.th,{children:"Spark Iceberg connector configuration"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Since Version"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"catalog-backend"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"type"})}),(0,i.jsx)(n.td,{children:"Catalog backend type"}),(0,i.jsx)(n.td,{children:"0.5.0"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"uri"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"uri"})}),(0,i.jsx)(n.td,{children:"Catalog backend uri"}),(0,i.jsx)(n.td,{children:"0.5.0"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"warehouse"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"warehouse"})}),(0,i.jsx)(n.td,{children:"Catalog backend warehouse"}),(0,i.jsx)(n.td,{children:"0.5.0"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"jdbc-user"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"jdbc.user"})}),(0,i.jsx)(n.td,{children:"JDBC user name"}),(0,i.jsx)(n.td,{children:"0.5.0"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"jdbc-password"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"jdbc.password"})}),(0,i.jsx)(n.td,{children:"JDBC password"}),(0,i.jsx)(n.td,{children:"0.5.0"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"io-impl"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"io-impl"})}),(0,i.jsxs)(n.td,{children:["The io implementation for ",(0,i.jsx)(n.code,{children:"FileIO"})," in Iceberg."]}),(0,i.jsx)(n.td,{children:"0.6.0"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"s3-endpoint"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"s3.endpoint"})}),(0,i.jsx)(n.td,{children:"An alternative endpoint of the S3 service, This could be used for S3FileIO with any s3-compatible object storage service that has a different endpoint, or access a private S3 endpoint in a virtual private cloud."}),(0,i.jsx)(n.td,{children:"0.6.0"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"s3-region"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"client.region"})}),(0,i.jsxs)(n.td,{children:["The region of the S3 service, like ",(0,i.jsx)(n.code,{children:"us-west-2"}),"."]}),(0,i.jsx)(n.td,{children:"0.6.0"})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["Gravitino catalog property names with the prefix ",(0,i.jsx)(n.code,{children:"spark.bypass."})," are passed to Spark Iceberg connector. For example, using ",(0,i.jsx)(n.code,{children:"spark.bypass.clients"})," to pass the ",(0,i.jsx)(n.code,{children:"clients"})," to the Spark Iceberg connector."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Iceberg catalog property ",(0,i.jsx)(n.code,{children:"cache-enabled"})," is setting to ",(0,i.jsx)(n.code,{children:"false"})," internally and not allowed to change."]})}),"\n",(0,i.jsx)(n.h2,{id:"storage",children:"Storage"}),"\n",(0,i.jsx)(n.h3,{id:"s3",children:"S3"}),"\n",(0,i.jsxs)(n.p,{children:["You need to add s3 secret to the Spark configuration using ",(0,i.jsx)(n.code,{children:"spark.sql.catalog.${iceberg_catalog_name}.s3.access-key-id"})," and ",(0,i.jsx)(n.code,{children:"spark.sql.catalog.${iceberg_catalog_name}.s3.secret-access-key"}),". Additionally, download the ",(0,i.jsx)(n.a,{href:"https://mvnrepository.com/artifact/org.apache.iceberg/iceberg-aws-bundle",children:"Iceberg AWS bundle"})," and place it in the classpath of Spark."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}}}]);