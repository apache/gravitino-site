"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[14097],{53500:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var n=t(13274),i=t(38112);const s={title:"Hive catalog with s3",slug:"/hive-catalog",date:"2024-9-24",keyword:"Hive catalog cloud storage S3",license:"This software is licensed under the Apache License version 2."},o=void 0,r={id:"hive-catalog-with-s3",title:"Hive catalog with s3",description:"Introduction",source:"@site/versioned_docs/version-0.7.0-incubating/hive-catalog-with-s3.md",sourceDirName:".",slug:"/hive-catalog",permalink:"/docs/0.7.0-incubating/hive-catalog",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/hive-catalog-with-s3.md",tags:[],version:"0.7.0-incubating",lastUpdatedBy:"Justin Mclean",lastUpdatedAt:1736293697e3,frontMatter:{title:"Hive catalog with s3",slug:"/hive-catalog",date:"2024-9-24",keyword:"Hive catalog cloud storage S3",license:"This software is licensed under the Apache License version 2."}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Hive metastore configuration",id:"hive-metastore-configuration",level:2},{value:"Example Configuration Changes",id:"example-configuration-changes",level:3},{value:"Adding Required JARs",id:"adding-required-jars",level:3},{value:"Restart Hive metastore",id:"restart-hive-metastore",level:3},{value:"Creating Tables or Databases with S3 Storage using Gravitino",id:"creating-tables-or-databases-with-s3-storage-using-gravitino",level:2},{value:"Example: Creating a Database with S3 Storage",id:"example-creating-a-database-with-s3-storage",level:3},{value:"Access tables with S3 storage by Hive CLI",id:"access-tables-with-s3-storage-by-hive-cli",level:2},{value:"Accessing Tables with S3 Storage via Spark",id:"accessing-tables-with-s3-storage-via-spark",level:2}];function h(e){const a={a:"a",code:"code",div:"div",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components},{TabItem:t,Tabs:s}=a;return t||g("TabItem",!0),s||g("Tabs",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h2,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsx)(a.p,{children:"Since Hive 2.x, Hive has supported S3 as a storage backend, enabling users to store and manage data in Amazon S3 directly through Hive. Gravitino enhances this capability by supporting the Hive catalog with S3, allowing users to efficiently manage the storage locations of files located in S3. This integration simplifies data operations and enables seamless access to S3 data from Hive queries."}),"\n",(0,n.jsx)(a.p,{children:"The following sections will guide you through the necessary steps to configure the Hive catalog to utilize S3 as a storage backend, including configuration details and examples for creating databases and tables."}),"\n",(0,n.jsx)(a.h2,{id:"hive-metastore-configuration",children:"Hive metastore configuration"}),"\n",(0,n.jsxs)(a.p,{children:["To use the Hive catalog with S3, you must configure your Hive metastore to recognize S3 as a storage backend. The following example illustrates the required changes in the ",(0,n.jsx)(a.code,{children:"hive-site.xml"})," configuration file:"]}),"\n",(0,n.jsx)(a.h3,{id:"example-configuration-changes",children:"Example Configuration Changes"}),"\n",(0,n.jsxs)(a.p,{children:["Below are the essential properties to add or modify in the ",(0,n.jsx)(a.code,{children:"hive-site.xml"})," file to support S3:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-xml",children:"\n<property>\n  <name>fs.s3a.access.key</name>\n  <value>S3_ACCESS_KEY_ID</value>\n</property>\n\n<property>\n  <name>fs.s3a.secret.key</name>\n  <value>S3_SECRET_KEY_ID</value>\n</property>\n\n<property>\n  <name>fs.s3a.endpoint</name>\n  <value>S3_ENDPOINT_ID</value>\n</property>\n\n\x3c!-- The following property is optional and can be replaced with the location property in the schema\ndefinition and table definition, as shown in the examples below. After explicitly setting this\nproperty, you can omit the location property in the schema and table definitions.\n--\x3e\n<property>\n   <name>hive.metastore.warehouse.dir</name>\n   <value>S3_BUCKET_PATH</value>\n</property>\n"})}),"\n",(0,n.jsx)(a.h3,{id:"adding-required-jars",children:"Adding Required JARs"}),"\n",(0,n.jsxs)(a.p,{children:["After updating the ",(0,n.jsx)(a.code,{children:"hive-site.xml"}),", you need to ensure that the necessary S3-related JARs are included in the Hive classpath. You can do this by executing the following command:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-shell",children:"cp ${HADOOP_HOME}/share/hadoop/tools/lib/*aws* ${HIVE_HOME}/lib\n"})}),"\n",(0,n.jsx)(a.p,{children:"Alternatively, you can download the required JARs from the Maven repository and place them in the Hive classpath. It is crucial to verify that the JARs are compatible with the version of Hadoop you are using to avoid any compatibility issue."}),"\n",(0,n.jsx)(a.h3,{id:"restart-hive-metastore",children:"Restart Hive metastore"}),"\n",(0,n.jsx)(a.p,{children:"Once all configurations have been correctly set, restart the Hive cluster to apply the changes. This step is essential to ensure that the new configurations take effect and that the Hive services can communicate with S3."}),"\n",(0,n.jsx)(a.h2,{id:"creating-tables-or-databases-with-s3-storage-using-gravitino",children:"Creating Tables or Databases with S3 Storage using Gravitino"}),"\n",(0,n.jsxs)(a.p,{children:["Assuming you have already set up a Hive catalog with Gravitino, you can proceed to create tables or databases using S3 storage. For more information on catalog operations, refer to ",(0,n.jsx)(a.a,{href:"/docs/0.7.0-incubating/manage-fileset-metadata-using-gravitino#catalog-operations",children:"Catalog operations"})]}),"\n",(0,n.jsx)(a.h3,{id:"example-creating-a-database-with-s3-storage",children:"Example: Creating a Database with S3 Storage"}),"\n",(0,n.jsx)(a.p,{children:"The following is an example of how to create a database in S3 using Gravitino:"}),"\n",(0,n.jsxs)(s,{groupId:"language",queryString:!0,children:[(0,n.jsx)(t,{value:"shell",label:"Shell",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-shell",children:'curl -X POST -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json" -d \'{\n  "name": "hive_schema",\n  "comment": "comment",\n  "properties": {\n    "location": "s3a://bucket-name/path"\n  }\n}\' http://localhost:8090/api/metalakes/metalake/catalogs/catalog/schemas\n'})})}),(0,n.jsx)(t,{value:"java",label:"Java",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:'GravitinoClient gravitinoClient = GravitinoClient\n    .builder("http://localhost:8090")\n    .withMetalake("metalake")\n    .build();\n\n// Assuming you have just created a Hadoop catalog named `catalog`\nCatalog catalog = gravitinoClient.loadCatalog("catalog");\n\nSupportsSchemas supportsSchemas = catalog.asSchemas();\n\nMap<String, String> schemaProperties = ImmutableMap.<String, String>builder()\n    .put("location", "s3a://bucket-name/path")\n    .build();\nSchema schema = supportsSchemas.createSchema("hive_schema",\n    "This is a schema",\n    schemaProperties\n);\n// ...\n'})})})]}),"\n",(0,n.jsxs)(a.p,{children:["After creating the database, you can proceed to create tables under this schema using S3 storage. For further details on table operations, please refer to ",(0,n.jsx)(a.a,{href:"/docs/0.7.0-incubating/manage-relational-metadata-using-gravitino#table-operations",children:"Table operations"}),"."]}),"\n",(0,n.jsx)(a.h2,{id:"access-tables-with-s3-storage-by-hive-cli",children:"Access tables with S3 storage by Hive CLI"}),"\n",(0,n.jsxs)(a.p,{children:["Assuming you have already created a table in the section ",(0,n.jsx)(a.a,{href:"#creating-tables-or-databases-with-s3-storage-using-gravitino",children:"Creating Tables or Databases with S3 Storage using Gravitino"}),", let\u2019s say the table is named ",(0,n.jsx)(a.code,{children:"hive_table"}),". You can access the database/table and view its details using the Hive CLI as follows:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-shell",children:"hive> show create database hive_schema;\nOK\nCREATE DATABASE `hive_schema`\nCOMMENT\n  'comment'\nLOCATION\n  's3a://my-test-bucket/test-1727168792125'\nWITH DBPROPERTIES (\n  'gravitino.identifier'='gravitino.v1.uid2173913050348296645',\n  'key1'='val1',\n  'key2'='val2')\nTime taken: 0.019 seconds, Fetched: 9 row(s)\nhive> use hive_schema;\nOK\nTime taken: 0.019 seconds\nhive> show create table cataloghiveit_table_fc7c7d16;\nOK\nCREATE TABLE `hive_table`(\n  `hive_col_name1` tinyint COMMENT 'col_1_comment',\n  `hive_col_name2` date COMMENT 'col_2_comment',\n  `hive_col_name3` string COMMENT 'col_3_comment')\nCOMMENT 'table_comment'\nROW FORMAT SERDE\n  'org.apache.hadoop.hive.serde2.lazy.LazySimpleSerDe'\nSTORED AS INPUTFORMAT\n  'org.apache.hadoop.mapred.TextInputFormat'\nOUTPUTFORMAT\n  'org.apache.hadoop.hive.ql.io.HiveIgnoreKeyTextOutputFormat'\nLOCATION\n  's3a://my-test-bucket/test-1727168821335/hive_table'\nTBLPROPERTIES (\n  'EXTERNAL'='FALSE',\n  'gravitino.identifier'='gravitino.v1.uid292928775813252841',\n  'key1'='val1',\n  'key2'='val2',\n  'transient_lastDdlTime'='1727168821')\nTime taken: 0.071 seconds, Fetched: 19 row(s)\n> insert into hive_table values(1, '2022-11-12', 'hello');\nQuery ID = root_20240924091305_58ab83c7-7091-4cc7-a0d9-fa44945f45c6\nTotal jobs = 3\nLaunching Job 1 out of 3\nNumber of reduce tasks is set to 0 since there's no reduce operator\nJob running in-process (local Hadoop)\n2024-09-24 09:13:08,381 Stage-1 map = 100%,  reduce = 0%\nEnded Job = job_local1096072998_0001\nStage-4 is selected by condition resolver.\nStage-3 is filtered out by condition resolver.\nStage-5 is filtered out by condition resolver.\nLoading data to table hive_schema.hive_table\nMapReduce Jobs Launched:\nStage-Stage-1:  HDFS Read: 0 HDFS Write: 0 SUCCESS\nTotal MapReduce CPU Time Spent: 0 msec\nOK\nTime taken: 2.843 seconds\nhive> select * from hive_table;\nOK\n1\t2022-11-12\thello\nTime taken: 0.116 seconds, Fetched: 1 row(s)\n"})}),"\n",(0,n.jsx)(a.p,{children:"This command shows the creation details of the database hive_schema, including its location in S3 and any associated properties."}),"\n",(0,n.jsx)(a.h2,{id:"accessing-tables-with-s3-storage-via-spark",children:"Accessing Tables with S3 Storage via Spark"}),"\n",(0,n.jsx)(a.p,{children:"To access S3-stored tables using Spark, you need to configure the SparkSession appropriately. Below is an example of how to set up the SparkSession with the necessary S3 configurations:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:'  SparkSession sparkSession =\n        SparkSession.builder()\n            .config("spark.plugins", "org.apache.gravitino.spark.connector.plugin.GravitinoSparkPlugin")\n            .config("spark.sql.gravitino.uri", "http://localhost:8090")\n            .config("spark.sql.gravitino.metalake", "xx")\n            .config("spark.sql.catalog.{hive_catalog_name}.fs.s3a.access.key", accessKey)\n            .config("spark.sql.catalog.{hive_catalog_name}.fs.s3a.secret.key", secretKey)\n            .config("spark.sql.catalog.{hive_catalog_name}.fs.s3a.endpoint", getS3Endpoint)\n            .config("spark.sql.catalog.{hive_catalog_name}.fs.s3a.impl", "org.apache.hadoop.fs.s3a.S3AFileSystem")\n            .config("spark.sql.catalog.{hive_catalog_name}.fs.s3a.path.style.access", "true")\n            .config("spark.sql.catalog.{hive_catalog_name}.fs.s3a.connection.ssl.enabled", "false")\n            .config(\n                "spark.sql.catalog.{hive_catalog_name}.fs.s3a.aws.credentials.provider",\n                "org.apache.hadoop.fs.s3a.SimpleAWSCredentialsProvider")\n            .config("spark.sql.storeAssignmentPolicy", "LEGACY")\n            .config("mapreduce.input.fileinputformat.input.dir.recursive", "true")\n            .enableHiveSupport()\n            .getOrCreate();\n\n    sparkSession.sql("...");\n'})}),"\n",(0,n.jsx)(a.div,{children:(0,n.jsxs)(a.p,{children:["Please download ",(0,n.jsx)(a.a,{href:"https://mvnrepository.com/artifact/org.apache.hadoop/hadoop-aws",children:"hadoop aws jar"}),", ",(0,n.jsx)(a.a,{href:"https://mvnrepository.com/artifact/com.amazonaws/aws-java-sdk-bundle",children:"aws java sdk jar"})," and place them in the classpath of the Spark. If the JARs are missing, Spark will not be able to access the S3 storage."]})}),"\n",(0,n.jsx)(a.p,{children:"By following these instructions, you can effectively manage and access your S3-stored data through both Hive CLI and Spark, leveraging the capabilities of Gravitino for optimal data management."})]})}function d(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}function g(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);