"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[31498],{17014:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>c});var t=a(79474);const r={},s=t.createContext(r);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(s.Provider,{value:n},e.children)}},19169:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var t=a(13274),r=a(17014);const s={title:"Apache Gravitino Trino connector - Iceberg catalog",slug:"/trino-connector/catalog-iceberg",keyword:"gravitino connector trino",license:"This software is licensed under the Apache License version 2."},i=void 0,c={id:"trino-connector/catalog-iceberg",title:"Apache Gravitino Trino connector - Iceberg catalog",description:"Apache Iceberg is an open table format for huge analytic datasets.",source:"@site/versioned_docs/version-0.8.0-incubating/trino-connector/catalog-iceberg.md",sourceDirName:"trino-connector",slug:"/trino-connector/catalog-iceberg",permalink:"/docs/0.8.0-incubating/trino-connector/catalog-iceberg",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/trino-connector/catalog-iceberg.md",tags:[],version:"0.8.0-incubating",frontMatter:{title:"Apache Gravitino Trino connector - Iceberg catalog",slug:"/trino-connector/catalog-iceberg",keyword:"gravitino connector trino",license:"This software is licensed under the Apache License version 2."},sidebar:"docs",previous:{title:"Hive",permalink:"/docs/0.8.0-incubating/trino-connector/catalog-hive"},next:{title:"MySQL",permalink:"/docs/0.8.0-incubating/trino-connector/catalog-mysql"}},l={},o=[{value:"Requirements",id:"requirements",level:2},{value:"Schema operations",id:"schema-operations",level:2},{value:"Create a schema",id:"create-a-schema",level:3},{value:"Table operations",id:"table-operations",level:2},{value:"Create table",id:"create-table",level:3},{value:"Alter table",id:"alter-table",level:3},{value:"Select",id:"select",level:2},{value:"Table and Schema properties",id:"table-and-schema-properties",level:2},{value:"Create a schema with properties",id:"create-a-schema-with-properties",level:3},{value:"Create a table with properties",id:"create-a-table-with-properties",level:3},{value:"Basic usage examples",id:"basic-usage-examples",level:2},{value:"Creating tables and schemas",id:"creating-tables-and-schemas",level:3},{value:"Writing data",id:"writing-data",level:3},{value:"Querying data",id:"querying-data",level:3},{value:"Modify a table",id:"modify-a-table",level:3},{value:"Drop",id:"drop",level:3},{value:"HDFS username and permissions",id:"hdfs-username-and-permissions",level:2},{value:"S3",id:"s3",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Apache Iceberg is an open table format for huge analytic datasets.\nThe Iceberg catalog allows Trino querying data stored in files written in Iceberg format,\nas defined in the Iceberg Table Spec. The catalog supports Apache Iceberg table spec versions 1 and 2."}),"\n",(0,t.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,t.jsx)(n.p,{children:"To use Iceberg, you need:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Network access from the Trino coordinator and workers to the distributed object storage."}),"\n",(0,t.jsx)(n.li,{children:"Access to a Hive metastore service (HMS), an AWS Glue catalog, a JDBC catalog, a REST catalog, or a Nessie server."}),"\n",(0,t.jsxs)(n.li,{children:["Data files stored in a supported file format. These can be configured using file format configuration properties per catalog:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"ORC"}),"\n",(0,t.jsx)(n.li,{children:"Parquet (default)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"schema-operations",children:"Schema operations"}),"\n",(0,t.jsx)(n.h3,{id:"create-a-schema",children:"Create a schema"}),"\n",(0,t.jsx)(n.p,{children:"Users can create a schema through Apache Gravitino Trino connector as follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"CREATE SCHEMA catalog.schema_name\n"})}),"\n",(0,t.jsx)(n.h2,{id:"table-operations",children:"Table operations"}),"\n",(0,t.jsx)(n.h3,{id:"create-table",children:"Create table"}),"\n",(0,t.jsxs)(n.p,{children:["The Apache Gravitino Trino connector currently supports basic Iceberg table creation statements, such as defining fields,\nallowing null values, and adding comments. The Apache Gravitino Trino connector does not support ",(0,t.jsx)(n.code,{children:"CREATE TABLE AS SELECT"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"The following example shows how to create a table in the Iceberg catalog:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"CREATE TABLE catalog.schema_name.table_name\n(\n  name varchar,\n  salary int\n)\n"})}),"\n",(0,t.jsx)(n.h3,{id:"alter-table",children:"Alter table"}),"\n",(0,t.jsx)(n.p,{children:"Support for the following alter table operations:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Rename table"}),"\n",(0,t.jsx)(n.li,{children:"Add a column"}),"\n",(0,t.jsx)(n.li,{children:"Drop a column"}),"\n",(0,t.jsx)(n.li,{children:"Rename a column"}),"\n",(0,t.jsx)(n.li,{children:"Change a column type"}),"\n",(0,t.jsx)(n.li,{children:"Set a table property"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"select",children:"Select"}),"\n",(0,t.jsx)(n.p,{children:"The Apache Gravitino Trino connector supports most SELECT statements, allowing the execution of queries successfully.\nCurrently, it doesn't support certain query optimizations, such as pushdown and pruning functionalities."}),"\n",(0,t.jsx)(n.h2,{id:"table-and-schema-properties",children:"Table and Schema properties"}),"\n",(0,t.jsx)(n.h3,{id:"create-a-schema-with-properties",children:"Create a schema with properties"}),"\n",(0,t.jsx)(n.p,{children:"Iceberg schema does not support properties."}),"\n",(0,t.jsx)(n.h3,{id:"create-a-table-with-properties",children:"Create a table with properties"}),"\n",(0,t.jsx)(n.p,{children:"Users can use the following example to create a table with properties:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE catalog.dbname.tablename\n(\n  name varchar,\n  salary int\n) WITH (\n  KEY = 'VALUE',\n  ...      \n);\n"})}),"\n",(0,t.jsx)(n.p,{children:"The following tables are the properties supported by the Iceberg table:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Default Value"}),(0,t.jsx)(n.th,{children:"Required"}),(0,t.jsx)(n.th,{children:"Reserved"}),(0,t.jsx)(n.th,{children:"Since Version"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"partitioning"}),(0,t.jsx)(n.td,{children:"Partition columns for the table"}),(0,t.jsx)(n.td,{children:"(none)"}),(0,t.jsx)(n.td,{children:"No"}),(0,t.jsx)(n.td,{children:"No"}),(0,t.jsx)(n.td,{children:"0.4.0"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"sorted_by"}),(0,t.jsx)(n.td,{children:"Sorted columns for the table"}),(0,t.jsx)(n.td,{children:"(none)"}),(0,t.jsx)(n.td,{children:"No"}),(0,t.jsx)(n.td,{children:"No"}),(0,t.jsx)(n.td,{children:"0.4.0"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"Reserved properties: A reserved property is one can't be set by users but can be read by users."}),"\n",(0,t.jsx)(n.h2,{id:"basic-usage-examples",children:"Basic usage examples"}),"\n",(0,t.jsx)(n.p,{children:"You need to do the following steps before you can use the Iceberg catalog in Trino through Apache Gravitino."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Create a metalake and catalog in Apache Gravitino. Assuming that the metalake name is ",(0,t.jsx)(n.code,{children:"test"})," and the catalog name is ",(0,t.jsx)(n.code,{children:"iceberg_test"}),",\nthen you can use the following code to create them in Apache Gravitino:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl -X POST -H "Content-Type: application/json" \\\n-d \'{\n  "name": "test",\n  "comment": "comment",\n  "properties": {}\n}\' http://gravitino-host:8090/api/metalakes\n\ncurl -X POST -H "Content-Type: application/json" \\\n-d \'{\n  "name": "iceberg_test",\n  "type": "RELATIONAL",\n  "comment": "comment",\n  "provider": "lakehouse-iceberg",\n  "properties": {\n    "uri": "thrift://hive-host:9083",\n    "catalog-backend": "hive",\n    "warehouse": "hdfs://hdfs-host:9000/user/iceberg/warehouse"\n  }\n}\' http://gravitino-host:8090/api/metalakes/test/catalogs\n'})}),"\n",(0,t.jsxs)(n.p,{children:["For More information about the Iceberg catalog, please refer to ",(0,t.jsx)(n.a,{href:"/docs/0.8.0-incubating/lakehouse-iceberg-catalog",children:"Iceberg catalog"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Set the value of configuration ",(0,t.jsx)(n.code,{children:"gravitino.metalake"})," to the metalake you have created, named 'test', and start the Trino container."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Use the Trino CLI to connect to the Trino container and run a query."}),"\n",(0,t.jsx)(n.p,{children:"Listing all Apache Gravitino managed catalogs:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SHOW CATALOGS;\n"})}),"\n",(0,t.jsx)(n.p,{children:"The results are similar to:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"    Catalog\n----------------\n gravitino\n jmx\n system\n iceberg_test\n(4 rows)\n\nQuery 20231017_082503_00018_6nt3n, FINISHED, 1 node\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"gravitino"})," catalog is a catalog defined By Trino catalog configuration.\nThe ",(0,t.jsx)(n.code,{children:"iceberg_test"})," catalog is the catalog created by you in Apache Gravitino.\nOther catalogs are regular user-configured Trino catalogs."]}),"\n",(0,t.jsx)(n.h3,{id:"creating-tables-and-schemas",children:"Creating tables and schemas"}),"\n",(0,t.jsxs)(n.p,{children:["Create a new schema named ",(0,t.jsx)(n.code,{children:"database_01"})," in ",(0,t.jsx)(n.code,{children:"test.iceberg_test"})," catalog."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"CREATE SCHEMA iceberg_test.database_01;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Create a new table named ",(0,t.jsx)(n.code,{children:"table_01"})," in schema ",(0,t.jsx)(n.code,{children:"iceberg_test.database_01"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE iceberg_test.database_01.table_01\n(\nname varchar,\nsalary int\n) with (\n  partitioning = ARRAY['salary'],\n  sorted_by = ARRAY['name']\n);\n"})}),"\n",(0,t.jsx)(n.h3,{id:"writing-data",children:"Writing data"}),"\n",(0,t.jsxs)(n.p,{children:["Insert data into the table ",(0,t.jsx)(n.code,{children:"table_01"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"INSERT INTO iceberg_test.database_01.table_01 (name, salary) VALUES ('ice', 12);\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Insert data into the table ",(0,t.jsx)(n.code,{children:"table_01"})," from select:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"INSERT INTO iceberg_test.database_01.table_01 (name, salary) SELECT * FROM iceberg_test.database_01.table_01;\n"})}),"\n",(0,t.jsx)(n.h3,{id:"querying-data",children:"Querying data"}),"\n",(0,t.jsxs)(n.p,{children:["Query the ",(0,t.jsx)(n.code,{children:"table_01"})," table:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM iceberg_test.database_01.table_01;\n"})}),"\n",(0,t.jsx)(n.h3,{id:"modify-a-table",children:"Modify a table"}),"\n",(0,t.jsxs)(n.p,{children:["Add a new column ",(0,t.jsx)(n.code,{children:"age"})," to the ",(0,t.jsx)(n.code,{children:"table_01"})," table:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE iceberg_test.database_01.table_01 ADD COLUMN age int;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Drop a column ",(0,t.jsx)(n.code,{children:"age"})," from the ",(0,t.jsx)(n.code,{children:"table_01"})," table:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE iceberg_test.database_01.table_01 DROP COLUMN age;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Rename the ",(0,t.jsx)(n.code,{children:"table_01"})," table to ",(0,t.jsx)(n.code,{children:"table_02"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE iceberg_test.database_01.table_01 RENAME TO iceberg_test.database_01.table_02;\n"})}),"\n",(0,t.jsx)(n.h3,{id:"drop",children:"Drop"}),"\n",(0,t.jsx)(n.p,{children:"Drop a schema:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"DROP SCHEMA iceberg_test.database_01;\n"})}),"\n",(0,t.jsx)(n.p,{children:"Drop a table:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"DROP TABLE iceberg_test.database_01.table_01;\n"})}),"\n",(0,t.jsx)(n.h2,{id:"hdfs-username-and-permissions",children:"HDFS username and permissions"}),"\n",(0,t.jsxs)(n.p,{children:["Before running any ",(0,t.jsx)(n.code,{children:"Insert"})," statements for Iceberg tables in Trino,\nyou must check that the user Trino is using to access HDFS has access to the warehouse directory.\nYou can override this username by setting the HADOOP_USER_NAME system property in the Trino JVM config,\nreplacing hdfs_user with the appropriate username:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"-DHADOOP_USER_NAME=hdfs_user\n"})}),"\n",(0,t.jsx)(n.h2,{id:"s3",children:"S3"}),"\n",(0,t.jsxs)(n.p,{children:["When using AWS S3 within the Iceberg catalog, users need to configure the Trino Iceberg connector's\nAWS S3-related properties in the catalog's properties. Please refer to the documentation\nof ",(0,t.jsx)(n.a,{href:"https://trino.io/docs/435/connector/hive-s3.html",children:"Hive connector with Amazon S3"}),".\nThese configurations must use the ",(0,t.jsx)(n.code,{children:"trino.bypass."})," prefix in the Iceberg catalog's attributes to be effective."]}),"\n",(0,t.jsx)(n.p,{children:"To create an Iceberg catalog with AWS S3 configuration in the Trino CLI, use the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"call gravitino.system.create_catalog(\n    'gt_iceberg',\n    'lakehouse-iceberg',\n    map(\n        array['uri', 'catalog-backend', 'warehouse',\n          'trino.bypass.hive.s3.aws-access-key', 'trino.bypass.hive.s3.aws-secret-key', 'trino.bypass.hive.s3.region',\n          's3-access-key-id', 's3-secret-access-key', 's3-region', 'io-impl'\n        ],\n        array['thrift://hive:9083', 'hive', 's3a://trino-test-ice/dw2',\n        '<aws-access-key>', '<aws-secret-key>', '<region>',\n        '<aws-access-key>', '<aws-secret-key>', '<region>', 'org.apache.iceberg.aws.s3.S3FileIO']\n    )\n);\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The configurations of ",(0,t.jsx)(n.code,{children:"trino.bypass.hive.s3.aws-access-key"}),", ",(0,t.jsx)(n.code,{children:"trino.bypass.hive.s3.aws-secret-key"}),", ",(0,t.jsx)(n.code,{children:"trino.bypass.hive.s3.region"}),"\nare the required the configurations for the Apache Gravitino Trino connector."]}),"\n",(0,t.jsxs)(n.li,{children:["The configurations of ",(0,t.jsx)(n.code,{children:"s3-access-key-id"}),", ",(0,t.jsx)(n.code,{children:"s3-secret-access-key"}),", ",(0,t.jsx)(n.code,{children:"io-impl"})," and ",(0,t.jsx)(n.code,{children:"s3-region"}),".\nare the required the configurations for the ",(0,t.jsx)(n.a,{href:"/docs/0.8.0-incubating/lakehouse-iceberg-catalog#S3",children:"Apache Gravitino Iceberg catalog"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"location"})," specifies the storage path on AWS S3. Ensure that the specified directory exists on AWS S3 before proceeding."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Once the Iceberg catalog is successfully created, users can create schemas and tables as follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"CREATE SCHEMA gt_iceberg.gt_db03;\n\nCREATE TABLE gt_iceberg.gt_db03.tb01 (\n    name varchar,\n    salary int\n);\n"})}),"\n",(0,t.jsx)(n.p,{children:"After running the command, the tables are ready for data reading and writing operations on AWS S3."}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["TThe Iceberg catalog module in the Apache Gravitino server should add AWS S3 support.\nPlease refer to ",(0,t.jsx)(n.a,{href:"/docs/0.8.0-incubating/lakehouse-iceberg-catalog#S3",children:"Apache Gravitino Iceberg catalog"}),"."]})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}}}]);