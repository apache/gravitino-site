"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[16778],{17014:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>c});var d=i(79474);const s={},r=d.createContext(s);function t(e){const n=d.useContext(r);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),d.createElement(r.Provider,{value:n},e.children)}},26751:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var d=i(13274),s=i(17014);const r={title:"Paimon catalog",slug:"/lakehouse-paimon-catalog",keywords:["lakehouse","Paimon","metadata"],license:"This software is licensed under the Apache License version 2."},t=void 0,c={id:"lakehouse-paimon-catalog",title:"Paimon catalog",description:"Introduction",source:"@site/versioned_docs/version-0.8.0-incubating/lakehouse-paimon-catalog.md",sourceDirName:".",slug:"/lakehouse-paimon-catalog",permalink:"/docs/0.8.0-incubating/lakehouse-paimon-catalog",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/lakehouse-paimon-catalog.md",tags:[],version:"0.8.0-incubating",lastUpdatedBy:"Justin Mclean",lastUpdatedAt:1740469354e3,frontMatter:{title:"Paimon catalog",slug:"/lakehouse-paimon-catalog",keywords:["lakehouse","Paimon","metadata"],license:"This software is licensed under the Apache License version 2."},sidebar:"docs",previous:{title:"Doris catalog",permalink:"/docs/0.8.0-incubating/jdbc-doris-catalog"},next:{title:"Hudi catalog",permalink:"/docs/0.8.0-incubating/lakehouse-hudi-catalog"}},l={},o=[{value:"Introduction",id:"introduction",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Catalog",id:"catalog",level:2},{value:"Catalog capabilities",id:"catalog-capabilities",level:3},{value:"Catalog properties",id:"catalog-properties",level:3},{value:"JDBC backend",id:"jdbc-backend",level:4},{value:"Catalog operations",id:"catalog-operations",level:3},{value:"Schema",id:"schema",level:2},{value:"Schema capabilities",id:"schema-capabilities",level:3},{value:"Schema properties",id:"schema-properties",level:3},{value:"Schema operations",id:"schema-operations",level:3},{value:"Table",id:"table",level:2},{value:"Table capabilities",id:"table-capabilities",level:3},{value:"Table changes",id:"table-changes",level:3},{value:"Table partitions",id:"table-partitions",level:3},{value:"Table sort orders",id:"table-sort-orders",level:3},{value:"Table distributions",id:"table-distributions",level:3},{value:"Table indexes",id:"table-indexes",level:3},{value:"Table column types",id:"table-column-types",level:3},{value:"Table properties",id:"table-properties",level:3},{value:"Table operations",id:"table-operations",level:3},{value:"HDFS configuration",id:"hdfs-configuration",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,d.jsx)(n.p,{children:"Apache Gravitino provides the ability to manage Apache Paimon metadata."}),"\n",(0,d.jsx)(n.h3,{id:"requirements",children:"Requirements"}),"\n",(0,d.jsx)(n.admonition,{type:"info",children:(0,d.jsxs)(n.p,{children:["Builds with Apache Paimon ",(0,d.jsx)(n.code,{children:"0.8.0"}),"."]})}),"\n",(0,d.jsx)(n.h2,{id:"catalog",children:"Catalog"}),"\n",(0,d.jsx)(n.h3,{id:"catalog-capabilities",children:"Catalog capabilities"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["Works as a catalog proxy, supporting ",(0,d.jsx)(n.code,{children:"FilesystemCatalog"}),", ",(0,d.jsx)(n.code,{children:"JdbcCatalog"})," and ",(0,d.jsx)(n.code,{children:"HiveCatalog"}),"."]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"Supports DDL operations for Paimon schemas and tables."}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"Doesn't support alterSchema."}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"catalog-properties",children:"Catalog properties"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Property name"}),(0,d.jsx)(n.th,{children:"Description"}),(0,d.jsx)(n.th,{children:"Default value"}),(0,d.jsx)(n.th,{children:"Required"}),(0,d.jsx)(n.th,{children:"Since Version"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"catalog-backend"})}),(0,d.jsxs)(n.td,{children:["Catalog backend of Gravitino Paimon catalog. Supports ",(0,d.jsx)(n.code,{children:"filesystem"}),", ",(0,d.jsx)(n.code,{children:"jdbc"})," and ",(0,d.jsx)(n.code,{children:"hive"}),"."]}),(0,d.jsx)(n.td,{children:"(none)"}),(0,d.jsx)(n.td,{children:"Yes"}),(0,d.jsx)(n.td,{children:"0.6.0-incubating"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"uri"})}),(0,d.jsxs)(n.td,{children:["The URI configuration of the Paimon catalog. ",(0,d.jsx)(n.code,{children:"thrift://127.0.0.1:9083"})," or ",(0,d.jsx)(n.code,{children:"jdbc:postgresql://127.0.0.1:5432/db_name"})," or ",(0,d.jsx)(n.code,{children:"jdbc:mysql://127.0.0.1:3306/metastore_db"}),". It is optional for ",(0,d.jsx)(n.code,{children:"FilesystemCatalog"}),"."]}),(0,d.jsx)(n.td,{children:"(none)"}),(0,d.jsxs)(n.td,{children:["required if the value of ",(0,d.jsx)(n.code,{children:"catalog-backend"})," is not ",(0,d.jsx)(n.code,{children:"filesystem"}),"."]}),(0,d.jsx)(n.td,{children:"0.6.0-incubating"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"warehouse"})}),(0,d.jsxs)(n.td,{children:["Warehouse directory of catalog. ",(0,d.jsx)(n.code,{children:"file:///user/hive/warehouse-paimon/"})," for local fs, ",(0,d.jsx)(n.code,{children:"hdfs://namespace/hdfs/path"})," for HDFS , ",(0,d.jsx)(n.code,{children:"s3://{bucket-name}/path/"})," for S3 or ",(0,d.jsx)(n.code,{children:"oss://{bucket-name}/path"})," for Aliyun OSS"]}),(0,d.jsx)(n.td,{children:"(none)"}),(0,d.jsx)(n.td,{children:"Yes"}),(0,d.jsx)(n.td,{children:"0.6.0-incubating"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"catalog-backend-name"})}),(0,d.jsx)(n.td,{children:"The catalog name passed to underlying Paimon catalog backend."}),(0,d.jsxs)(n.td,{children:["The property value of ",(0,d.jsx)(n.code,{children:"catalog-backend"}),", like ",(0,d.jsx)(n.code,{children:"jdbc"})," for JDBC catalog backend."]}),(0,d.jsx)(n.td,{children:"No"}),(0,d.jsx)(n.td,{children:"0.8.0-incubating"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"authentication.type"})}),(0,d.jsxs)(n.td,{children:["The type of authentication for Paimon catalog backend, currently Gravitino only supports ",(0,d.jsx)(n.code,{children:"Kerberos"})," and ",(0,d.jsx)(n.code,{children:"simple"}),"."]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"simple"})}),(0,d.jsx)(n.td,{children:"No"}),(0,d.jsx)(n.td,{children:"0.6.0-incubating"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"hive.metastore.sasl.enabled"})}),(0,d.jsx)(n.td,{children:"Whether to enable SASL authentication protocol when connect to Kerberos Hive metastore. This is a raw Hive configuration"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"false"})}),(0,d.jsxs)(n.td,{children:["No, This value should be true in most case(Some will use SSL protocol, but it rather rare) if the value of ",(0,d.jsx)(n.code,{children:"gravitino.iceberg-rest.authentication.type"})," is Kerberos."]}),(0,d.jsx)(n.td,{children:"0.6.0-incubating"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"authentication.kerberos.principal"})}),(0,d.jsx)(n.td,{children:"The principal of the Kerberos authentication."}),(0,d.jsx)(n.td,{children:"(none)"}),(0,d.jsxs)(n.td,{children:["required if the value of ",(0,d.jsx)(n.code,{children:"authentication.type"})," is Kerberos."]}),(0,d.jsx)(n.td,{children:"0.6.0-incubating"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"authentication.kerberos.keytab-uri"})}),(0,d.jsx)(n.td,{children:"The URI of The keytab for the Kerberos authentication."}),(0,d.jsx)(n.td,{children:"(none)"}),(0,d.jsxs)(n.td,{children:["required if the value of ",(0,d.jsx)(n.code,{children:"authentication.type"})," is Kerberos."]}),(0,d.jsx)(n.td,{children:"0.6.0-incubating"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"authentication.kerberos.check-interval-sec"})}),(0,d.jsx)(n.td,{children:"The check interval of Kerberos credential for Paimon catalog."}),(0,d.jsx)(n.td,{children:"60"}),(0,d.jsx)(n.td,{children:"No"}),(0,d.jsx)(n.td,{children:"0.6.0-incubating"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"authentication.kerberos.keytab-fetch-timeout-sec"})}),(0,d.jsxs)(n.td,{children:["The fetch timeout of retrieving Kerberos keytab from ",(0,d.jsx)(n.code,{children:"authentication.kerberos.keytab-uri"}),"."]}),(0,d.jsx)(n.td,{children:"60"}),(0,d.jsx)(n.td,{children:"No"}),(0,d.jsx)(n.td,{children:"0.6.0-incubating"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"oss-endpoint"})}),(0,d.jsx)(n.td,{children:"The endpoint of the Aliyun OSS."}),(0,d.jsx)(n.td,{children:"(none)"}),(0,d.jsxs)(n.td,{children:["required if the value of ",(0,d.jsx)(n.code,{children:"warehouse"})," is a OSS path"]}),(0,d.jsx)(n.td,{children:"0.7.0-incubating"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"oss-access-key-id"})}),(0,d.jsx)(n.td,{children:"The access key of the Aliyun OSS."}),(0,d.jsx)(n.td,{children:"(none)"}),(0,d.jsxs)(n.td,{children:["required if the value of ",(0,d.jsx)(n.code,{children:"warehouse"})," is a OSS path"]}),(0,d.jsx)(n.td,{children:"0.7.0-incubating"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"oss-accesss-key-secret"})}),(0,d.jsx)(n.td,{children:"The secret key the Aliyun OSS."}),(0,d.jsx)(n.td,{children:"(none)"}),(0,d.jsxs)(n.td,{children:["required if the value of ",(0,d.jsx)(n.code,{children:"warehouse"})," is a OSS path"]}),(0,d.jsx)(n.td,{children:"0.7.0-incubating"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"s3-endpoint"})}),(0,d.jsx)(n.td,{children:"The endpoint of the AWS S3."}),(0,d.jsx)(n.td,{children:"(none)"}),(0,d.jsxs)(n.td,{children:["required if the value of ",(0,d.jsx)(n.code,{children:"warehouse"})," is a S3 path"]}),(0,d.jsx)(n.td,{children:"0.7.0-incubating"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"s3-access-key-id"})}),(0,d.jsx)(n.td,{children:"The access key of the AWS S3."}),(0,d.jsx)(n.td,{children:"(none)"}),(0,d.jsxs)(n.td,{children:["required if the value of ",(0,d.jsx)(n.code,{children:"warehouse"})," is a S3 path"]}),(0,d.jsx)(n.td,{children:"0.7.0-incubating"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"s3-secret-access-key"})}),(0,d.jsx)(n.td,{children:"The secret key of the AWS S3."}),(0,d.jsx)(n.td,{children:"(none)"}),(0,d.jsxs)(n.td,{children:["required if the value of ",(0,d.jsx)(n.code,{children:"warehouse"})," is a S3 path"]}),(0,d.jsx)(n.td,{children:"0.7.0-incubating"})]})]})]}),"\n",(0,d.jsx)(n.admonition,{type:"note",children:(0,d.jsxs)(n.p,{children:["If you want to use the ",(0,d.jsx)(n.code,{children:"oss"})," or ",(0,d.jsx)(n.code,{children:"s3"})," warehouse, you need to place related jars in the ",(0,d.jsx)(n.code,{children:"catalogs/lakehouse-paimon/lib"})," directory, more information can be found in the ",(0,d.jsx)(n.a,{href:"https://paimon.apache.org/docs/master/filesystems/s3/",children:"Paimon S3"}),"."]})}),"\n",(0,d.jsx)(n.admonition,{type:"note",children:(0,d.jsx)(n.p,{children:"The hive backend does not support the kerberos authentication now."})}),"\n",(0,d.jsxs)(n.p,{children:["Any properties not defined by Gravitino with ",(0,d.jsx)(n.code,{children:"gravitino.bypass."})," prefix will pass to Paimon catalog properties and HDFS configuration. For example, if specify ",(0,d.jsx)(n.code,{children:"gravitino.bypass.table.type"}),", ",(0,d.jsx)(n.code,{children:"table.type"})," will pass to Paimon catalog properties."]}),"\n",(0,d.jsx)(n.h4,{id:"jdbc-backend",children:"JDBC backend"}),"\n",(0,d.jsxs)(n.p,{children:["If you are using JDBC backend, you must specify the properties like ",(0,d.jsx)(n.code,{children:"jdbc-user"}),", ",(0,d.jsx)(n.code,{children:"jdbc-password"})," and ",(0,d.jsx)(n.code,{children:"jdbc-driver"}),"."]}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Property name"}),(0,d.jsx)(n.th,{children:"Description"}),(0,d.jsx)(n.th,{children:"Default value"}),(0,d.jsx)(n.th,{children:"Required"}),(0,d.jsx)(n.th,{children:"Since Version"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"jdbc-user"})}),(0,d.jsxs)(n.td,{children:["Jdbc user of Gravitino Paimon catalog for ",(0,d.jsx)(n.code,{children:"jdbc"})," backend."]}),(0,d.jsx)(n.td,{children:"(none)"}),(0,d.jsxs)(n.td,{children:["required if the value of ",(0,d.jsx)(n.code,{children:"catalog-backend"})," is ",(0,d.jsx)(n.code,{children:"jdbc"}),"."]}),(0,d.jsx)(n.td,{children:"0.7.0-incubating"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"jdbc-password"})}),(0,d.jsxs)(n.td,{children:["Jdbc password of Gravitino Paimon catalog for ",(0,d.jsx)(n.code,{children:"jdbc"})," backend."]}),(0,d.jsx)(n.td,{children:"(none)"}),(0,d.jsxs)(n.td,{children:["required if the value of ",(0,d.jsx)(n.code,{children:"catalog-backend"})," is ",(0,d.jsx)(n.code,{children:"jdbc"}),"."]}),(0,d.jsx)(n.td,{children:"0.7.0-incubating"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"jdbc-driver"})}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"com.mysql.jdbc.Driver"})," or ",(0,d.jsx)(n.code,{children:"com.mysql.cj.jdbc.Driver"})," for MySQL, ",(0,d.jsx)(n.code,{children:"org.postgresql.Driver"})," for PostgreSQL"]}),(0,d.jsx)(n.td,{children:"(none)"}),(0,d.jsxs)(n.td,{children:["required if the value of ",(0,d.jsx)(n.code,{children:"catalog-backend"})," is ",(0,d.jsx)(n.code,{children:"jdbc"}),"."]}),(0,d.jsx)(n.td,{children:"0.7.0-incubating"})]})]})]}),"\n",(0,d.jsx)(n.admonition,{type:"caution",children:(0,d.jsxs)(n.p,{children:["You must download the corresponding JDBC driver and place it to the ",(0,d.jsx)(n.code,{children:"catalogs/lakehouse-paimon/libs"})," directory If you are using JDBC backend."]})}),"\n",(0,d.jsx)(n.h3,{id:"catalog-operations",children:"Catalog operations"}),"\n",(0,d.jsxs)(n.p,{children:["Please refer to ",(0,d.jsx)(n.a,{href:"/docs/0.8.0-incubating/manage-relational-metadata-using-gravitino#catalog-operations",children:"Manage Relational Metadata Using Gravitino"})," for more details."]}),"\n",(0,d.jsx)(n.h2,{id:"schema",children:"Schema"}),"\n",(0,d.jsx)(n.h3,{id:"schema-capabilities",children:"Schema capabilities"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"Supporting createSchema, dropSchema, loadSchema and listSchema."}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"Supporting cascade drop schema."}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"Doesn't support alterSchema."}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"schema-properties",children:"Schema properties"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"Doesn't support specify location and store any schema properties when createSchema for FilesystemCatalog."}),"\n",(0,d.jsx)(n.li,{children:"Doesn't return any schema properties when loadSchema for FilesystemCatalog."}),"\n",(0,d.jsx)(n.li,{children:"Doesn't support store schema comment for FilesystemCatalog."}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"schema-operations",children:"Schema operations"}),"\n",(0,d.jsxs)(n.p,{children:["Please refer to ",(0,d.jsx)(n.a,{href:"/docs/0.8.0-incubating/manage-relational-metadata-using-gravitino#schema-operations",children:"Manage Relational Metadata Using Gravitino"})," for more details."]}),"\n",(0,d.jsx)(n.h2,{id:"table",children:"Table"}),"\n",(0,d.jsx)(n.h3,{id:"table-capabilities",children:"Table capabilities"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"Supporting createTable, purgeTable, alterTable, loadTable and listTable."}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["Supporting Column default value through table properties, such as ",(0,d.jsx)(n.code,{children:"fields.{columnName}.default-value"}),", not column expression."]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"Doesn't support dropTable."}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"Doesn't support table distribution and sort orders."}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.admonition,{type:"info",children:(0,d.jsx)(n.p,{children:"Gravitino Paimon Catalog does not support dropTable, because the dropTable in Paimon will both remove the table metadata and the table location from the file system and skip the trash, we should use purgeTable instead in Gravitino."})}),"\n",(0,d.jsx)(n.admonition,{type:"info",children:(0,d.jsx)(n.p,{children:"Paimon does not support auto increment column."})}),"\n",(0,d.jsx)(n.h3,{id:"table-changes",children:"Table changes"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"RenameTable"}),"\n",(0,d.jsx)(n.li,{children:"AddColumn"}),"\n",(0,d.jsx)(n.li,{children:"DeleteColumn"}),"\n",(0,d.jsx)(n.li,{children:"RenameColumn"}),"\n",(0,d.jsx)(n.li,{children:"UpdateColumnComment"}),"\n",(0,d.jsx)(n.li,{children:"UpdateColumnNullability"}),"\n",(0,d.jsx)(n.li,{children:"UpdateColumnPosition"}),"\n",(0,d.jsx)(n.li,{children:"UpdateColumnType"}),"\n",(0,d.jsx)(n.li,{children:"UpdateComment"}),"\n",(0,d.jsx)(n.li,{children:"SetProperty"}),"\n",(0,d.jsx)(n.li,{children:"RemoveProperty"}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"table-partitions",children:"Table partitions"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Only supports Identity partitions, such as ",(0,d.jsx)(n.code,{children:"day"}),", ",(0,d.jsx)(n.code,{children:"hour"}),", etc."]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Please refer to ",(0,d.jsx)(n.a,{href:"https://paimon.apache.org/docs/0.8/spark/sql-ddl/#create-table",children:"Paimon DDL Create Table"})," for more details."]}),"\n",(0,d.jsx)(n.h3,{id:"table-sort-orders",children:"Table sort orders"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"Doesn't support table sort orders."}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"table-distributions",children:"Table distributions"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"Doesn't support table distributions."}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"table-indexes",children:"Table indexes"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"Only supports primary key Index."}),"\n"]}),"\n",(0,d.jsx)(n.admonition,{type:"info",children:(0,d.jsx)(n.p,{children:"We cannot specify more than one primary key Index, and a primary key Index can contain multiple fields as a joint primary key."})}),"\n",(0,d.jsx)(n.admonition,{type:"info",children:(0,d.jsx)(n.p,{children:"Paimon Table primary key constraint should not be same with partition fields, this will result in only one record in a partition."})}),"\n",(0,d.jsx)(n.h3,{id:"table-column-types",children:"Table column types"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Gravitino Type"}),(0,d.jsx)(n.th,{children:"Apache Paimon Type"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Struct"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Row"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Map"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Map"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"List"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Array"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Boolean"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Boolean"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Byte"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"TinyInt"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Short"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"SmallInt"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Integer"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Int"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Long"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"BigInt"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Float"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Float"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Double"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Double"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Decimal"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Decimal"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"String"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"VarChar(Integer.MAX_VALUE)"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"VarChar"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"VarChar"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"FixedChar"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Char"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Date"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Date"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Time"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Time"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"TimestampType withZone"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"LocalZonedTimestamp"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"TimestampType withoutZone"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Timestamp"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Fixed"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Binary"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Binary"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"VarBinary"})})]})]})]}),"\n",(0,d.jsx)(n.admonition,{type:"info",children:(0,d.jsxs)(n.p,{children:["Gravitino doesn't support Paimon ",(0,d.jsx)(n.code,{children:"MultisetType"})," type."]})}),"\n",(0,d.jsx)(n.h3,{id:"table-properties",children:"Table properties"}),"\n",(0,d.jsxs)(n.p,{children:["You can pass ",(0,d.jsx)(n.a,{href:"https://paimon.apache.org/docs/0.8/maintenance/configurations/",children:"Paimon table properties"})," to Gravitino when creating a Paimon table."]}),"\n",(0,d.jsxs)(n.admonition,{type:"note",children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Reserved"}),": Fields that cannot be passed to the Gravitino server."]}),(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Immutable"}),": Fields that cannot be modified once set."]})]}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Configuration item"}),(0,d.jsx)(n.th,{children:"Description"}),(0,d.jsx)(n.th,{children:"Default Value"}),(0,d.jsx)(n.th,{children:"Required"}),(0,d.jsx)(n.th,{children:"Reserved"}),(0,d.jsx)(n.th,{children:"Immutable"}),(0,d.jsx)(n.th,{children:"Since version"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"merge-engine"})}),(0,d.jsx)(n.td,{children:"The table merge-engine."}),(0,d.jsx)(n.td,{children:"(none)"}),(0,d.jsx)(n.td,{children:"No"}),(0,d.jsx)(n.td,{children:"No"}),(0,d.jsx)(n.td,{children:"Yes"}),(0,d.jsx)(n.td,{children:"0.6.0-incubating"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"sequence.field"})}),(0,d.jsx)(n.td,{children:"The table sequence.field."}),(0,d.jsx)(n.td,{children:"(none)"}),(0,d.jsx)(n.td,{children:"No"}),(0,d.jsx)(n.td,{children:"No"}),(0,d.jsx)(n.td,{children:"Yes"}),(0,d.jsx)(n.td,{children:"0.6.0-incubating"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"rowkind.field"})}),(0,d.jsx)(n.td,{children:"The table rowkind.field."}),(0,d.jsx)(n.td,{children:"(none)"}),(0,d.jsx)(n.td,{children:"No"}),(0,d.jsx)(n.td,{children:"No"}),(0,d.jsx)(n.td,{children:"Yes"}),(0,d.jsx)(n.td,{children:"0.6.0-incubating"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"comment"})}),(0,d.jsx)(n.td,{children:"The table comment."}),(0,d.jsx)(n.td,{children:"(none)"}),(0,d.jsx)(n.td,{children:"No"}),(0,d.jsx)(n.td,{children:"Yes"}),(0,d.jsx)(n.td,{children:"No"}),(0,d.jsx)(n.td,{children:"0.6.0-incubating"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"owner"})}),(0,d.jsx)(n.td,{children:"The table owner."}),(0,d.jsx)(n.td,{children:"(none)"}),(0,d.jsx)(n.td,{children:"No"}),(0,d.jsx)(n.td,{children:"Yes"}),(0,d.jsx)(n.td,{children:"No"}),(0,d.jsx)(n.td,{children:"0.6.0-incubating"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"bucket-key"})}),(0,d.jsx)(n.td,{children:"The table bucket-key."}),(0,d.jsx)(n.td,{children:"(none)"}),(0,d.jsx)(n.td,{children:"No"}),(0,d.jsx)(n.td,{children:"Yes"}),(0,d.jsx)(n.td,{children:"No"}),(0,d.jsx)(n.td,{children:"0.6.0-incubating"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"primary-key"})}),(0,d.jsx)(n.td,{children:"The table primary-key."}),(0,d.jsx)(n.td,{children:"(none)"}),(0,d.jsx)(n.td,{children:"No"}),(0,d.jsx)(n.td,{children:"Yes"}),(0,d.jsx)(n.td,{children:"No"}),(0,d.jsx)(n.td,{children:"0.6.0-incubating"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"partition"})}),(0,d.jsx)(n.td,{children:"The table partition."}),(0,d.jsx)(n.td,{children:"(none)"}),(0,d.jsx)(n.td,{children:"No"}),(0,d.jsx)(n.td,{children:"Yes"}),(0,d.jsx)(n.td,{children:"No"}),(0,d.jsx)(n.td,{children:"0.6.0-incubating"})]})]})]}),"\n",(0,d.jsx)(n.h3,{id:"table-operations",children:"Table operations"}),"\n",(0,d.jsxs)(n.p,{children:["Please refer to ",(0,d.jsx)(n.a,{href:"/docs/0.8.0-incubating/manage-relational-metadata-using-gravitino#table-operations",children:"Manage Relational Metadata Using Gravitino"})," for more details."]}),"\n",(0,d.jsx)(n.h2,{id:"hdfs-configuration",children:"HDFS configuration"}),"\n",(0,d.jsxs)(n.p,{children:["You can place ",(0,d.jsx)(n.code,{children:"core-site.xml"})," and ",(0,d.jsx)(n.code,{children:"hdfs-site.xml"})," in the ",(0,d.jsx)(n.code,{children:"catalogs/lakehouse-paimon/conf"})," directory to automatically load as the default HDFS configuration."]}),"\n",(0,d.jsx)(n.admonition,{type:"caution",children:(0,d.jsx)(n.p,{children:"When reading and writing to HDFS, the Gravitino server can only operate as the specified Kerberos user and doesn't support proxying to other Kerberos users now."})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}}}]);