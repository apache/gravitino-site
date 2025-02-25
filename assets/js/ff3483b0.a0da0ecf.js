"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[60767],{17014:(e,i,t)=>{t.d(i,{R:()=>s,x:()=>l});var r=t(79474);const d={},n=r.createContext(d);function s(e){const i=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),r.createElement(n.Provider,{value:i},e.children)}},48768:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>s,default:()=>o,frontMatter:()=>n,metadata:()=>l,toc:()=>a});var r=t(13274),d=t(17014);const n={title:"Apache Hive catalog",slug:"/apache-hive-catalog",date:new Date("2023-12-10T00:00:00.000Z"),keyword:"hive catalog",license:"This software is licensed under the Apache License version 2."},s=void 0,l={id:"apache-hive-catalog",title:"Apache Hive catalog",description:"Introduction",source:"@site/versioned_docs/version-0.8.0-incubating/apache-hive-catalog.md",sourceDirName:".",slug:"/apache-hive-catalog",permalink:"/docs/0.8.0-incubating/apache-hive-catalog",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/apache-hive-catalog.md",tags:[],version:"0.8.0-incubating",lastUpdatedBy:"Justin Mclean",lastUpdatedAt:1740469354e3,frontMatter:{title:"Apache Hive catalog",slug:"/apache-hive-catalog",date:"2023-12-10T00:00:00.000Z",keyword:"hive catalog",license:"This software is licensed under the Apache License version 2."},sidebar:"docs",previous:{title:"Iceberg catalog",permalink:"/docs/0.8.0-incubating/lakehouse-iceberg-catalog"},next:{title:"Hive catalog with cloud storage",permalink:"/docs/0.8.0-incubating/hive-catalog"}},c={},a=[{value:"Introduction",id:"introduction",level:2},{value:"Requirements and limitations",id:"requirements-and-limitations",level:3},{value:"Catalog",id:"catalog",level:2},{value:"Catalog capabilities",id:"catalog-capabilities",level:3},{value:"Catalog properties",id:"catalog-properties",level:3},{value:"Catalog operations",id:"catalog-operations",level:3},{value:"Schema",id:"schema",level:2},{value:"Schema capabilities",id:"schema-capabilities",level:3},{value:"Schema properties",id:"schema-properties",level:3},{value:"Schema operations",id:"schema-operations",level:3},{value:"Table",id:"table",level:2},{value:"Table capabilities",id:"table-capabilities",level:3},{value:"Table partitioning",id:"table-partitioning",level:3},{value:"Table sort orders and distributions",id:"table-sort-orders-and-distributions",level:3},{value:"Table column types",id:"table-column-types",level:3},{value:"Table properties",id:"table-properties",level:3},{value:"Table indexes",id:"table-indexes",level:3},{value:"Table operations",id:"table-operations",level:3},{value:"Alter operations",id:"alter-operations",level:4},{value:"Alter table",id:"alter-table",level:5},{value:"Alter column",id:"alter-column",level:5},{value:"Alter partition",id:"alter-partition",level:5},{value:"Hive catalog with S3 storage",id:"hive-catalog-with-s3-storage",level:2}];function h(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsxs)(i.p,{children:["Apache Gravitino offers the capability to utilize ",(0,r.jsx)(i.a,{href:"https://hive.apache.org",children:"Apache Hive"})," as a catalog for metadata management."]}),"\n",(0,r.jsx)(i.h3,{id:"requirements-and-limitations",children:"Requirements and limitations"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"The Hive catalog requires a Hive Metastore Service (HMS), or a compatible implementation of the HMS, such as AWS Glue."}),"\n",(0,r.jsx)(i.li,{children:"Gravitino must have network access to the Hive metastore service using the Thrift protocol."}),"\n"]}),"\n",(0,r.jsx)(i.admonition,{type:"note",children:(0,r.jsxs)(i.p,{children:["Although the Hive catalog uses the Hive2 metastore client, it can be compatible with the Hive3 metastore service because the called HMS APIs are still available in Hive3.\nIf there is any compatibility issue, please create an ",(0,r.jsx)(i.a,{href:"https://github.com/apache/gravitino/issues",children:"issue"}),"."]})}),"\n",(0,r.jsx)(i.h2,{id:"catalog",children:"Catalog"}),"\n",(0,r.jsx)(i.h3,{id:"catalog-capabilities",children:"Catalog capabilities"}),"\n",(0,r.jsx)(i.p,{children:"The Hive catalog supports creating, updating, and deleting databases and tables in the HMS."}),"\n",(0,r.jsx)(i.h3,{id:"catalog-properties",children:"Catalog properties"}),"\n",(0,r.jsxs)(i.p,{children:["Besides the ",(0,r.jsx)(i.a,{href:"/docs/0.8.0-incubating/gravitino-server-config#gravitino-catalog-properties-configuration",children:"common catalog properties"}),", the Hive catalog has the following properties:"]}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Property Name"}),(0,r.jsx)(i.th,{children:"Description"}),(0,r.jsx)(i.th,{children:"Default Value"}),(0,r.jsx)(i.th,{children:"Required"}),(0,r.jsx)(i.th,{children:"Since Version"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"metastore.uris"})}),(0,r.jsxs)(i.td,{children:["The Hive metastore service URIs, separate multiple addresses with commas. Such as ",(0,r.jsx)(i.code,{children:"thrift://127.0.0.1:9083"})]}),(0,r.jsx)(i.td,{children:"(none)"}),(0,r.jsx)(i.td,{children:"Yes"}),(0,r.jsx)(i.td,{children:"0.2.0"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"client.pool-size"})}),(0,r.jsx)(i.td,{children:"The maximum number of Hive metastore clients in the pool for Gravitino."}),(0,r.jsx)(i.td,{children:"1"}),(0,r.jsx)(i.td,{children:"No"}),(0,r.jsx)(i.td,{children:"0.2.0"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"gravitino.bypass."})}),(0,r.jsxs)(i.td,{children:["Property name with this prefix passed down to the underlying HMS client for use. Such as ",(0,r.jsx)(i.code,{children:"gravitino.bypass.hive.metastore.failure.retries = 3"})," indicate 3 times of retries upon failure of Thrift metastore calls"]}),(0,r.jsx)(i.td,{children:"(none)"}),(0,r.jsx)(i.td,{children:"No"}),(0,r.jsx)(i.td,{children:"0.2.0"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"client.pool-cache.eviction-interval-ms"})}),(0,r.jsx)(i.td,{children:"The cache pool eviction interval."}),(0,r.jsx)(i.td,{children:"300000"}),(0,r.jsx)(i.td,{children:"No"}),(0,r.jsx)(i.td,{children:"0.4.0"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"impersonation-enable"})}),(0,r.jsx)(i.td,{children:"Enable user impersonation for Hive catalog."}),(0,r.jsx)(i.td,{children:"false"}),(0,r.jsx)(i.td,{children:"No"}),(0,r.jsx)(i.td,{children:"0.4.0"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"kerberos.principal"})}),(0,r.jsxs)(i.td,{children:["The Kerberos principal for the catalog. You should configure ",(0,r.jsx)(i.code,{children:"gravitino.bypass.hadoop.security.authentication"}),", ",(0,r.jsx)(i.code,{children:"gravitino.bypass.hive.metastore.kerberos.principal"})," and ",(0,r.jsx)(i.code,{children:"gravitino.bypass.hive.metastore.sasl.enabled"}),"if you want to use Kerberos."]}),(0,r.jsx)(i.td,{children:"(none)"}),(0,r.jsx)(i.td,{children:"required if you use kerberos"}),(0,r.jsx)(i.td,{children:"0.4.0"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"kerberos.keytab-uri"})}),(0,r.jsxs)(i.td,{children:["The uri of key tab for the catalog. Now supported protocols are ",(0,r.jsx)(i.code,{children:"https"}),", ",(0,r.jsx)(i.code,{children:"http"}),", ",(0,r.jsx)(i.code,{children:"ftp"}),", ",(0,r.jsx)(i.code,{children:"file"}),"."]}),(0,r.jsx)(i.td,{children:"(none)"}),(0,r.jsx)(i.td,{children:"required if you use kerberos"}),(0,r.jsx)(i.td,{children:"0.4.0"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"kerberos.check-interval-sec"})}),(0,r.jsx)(i.td,{children:"The interval to check validness of the principal"}),(0,r.jsx)(i.td,{children:"60"}),(0,r.jsx)(i.td,{children:"No"}),(0,r.jsx)(i.td,{children:"0.4.0"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"kerberos.keytab-fetch-timeout-sec"})}),(0,r.jsx)(i.td,{children:"The timeout to fetch key tab"}),(0,r.jsx)(i.td,{children:"60"}),(0,r.jsx)(i.td,{children:"No"}),(0,r.jsx)(i.td,{children:"0.4.0"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"list-all-tables"})}),(0,r.jsx)(i.td,{children:"Lists all tables in a database, including non-Hive tables, such as Iceberg, Hudi, etc."}),(0,r.jsx)(i.td,{children:"false"}),(0,r.jsx)(i.td,{children:"No"}),(0,r.jsx)(i.td,{children:"0.5.1"})]})]})]}),"\n",(0,r.jsxs)(i.admonition,{type:"note",children:[(0,r.jsxs)(i.p,{children:["For ",(0,r.jsx)(i.code,{children:"list-all-tables=false"}),", the Hive catalog will filter out:"]}),(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Iceberg tables by table property ",(0,r.jsx)(i.code,{children:"table_type=ICEBERG"})]}),"\n",(0,r.jsxs)(i.li,{children:["Paimon tables by table property ",(0,r.jsx)(i.code,{children:"table_type=PAINMON"})]}),"\n",(0,r.jsxs)(i.li,{children:["Hudi tables by table property ",(0,r.jsx)(i.code,{children:"provider=hudi"})]}),"\n"]})]}),"\n",(0,r.jsxs)(i.p,{children:["When you use the Gravitino with Trino. You can pass the Trino Hive connector configuration using prefix ",(0,r.jsx)(i.code,{children:"trino.bypass."}),". For example, using ",(0,r.jsx)(i.code,{children:"trino.bypass.hive.config.resources"})," to pass the ",(0,r.jsx)(i.code,{children:"hive.config.resources"})," to the Gravitino Hive catalog in Trino runtime."]}),"\n",(0,r.jsxs)(i.p,{children:["When you use the Gravitino with Spark. You can pass the Spark Hive connector configuration using prefix ",(0,r.jsx)(i.code,{children:"spark.bypass."}),". For example, using ",(0,r.jsx)(i.code,{children:"spark.bypass.hive.exec.dynamic.partition.mode"})," to pass the ",(0,r.jsx)(i.code,{children:"hive.exec.dynamic.partition.mode"})," to the Spark Hive connector in Spark runtime."]}),"\n",(0,r.jsxs)(i.p,{children:["When you use the Gravitino authorization Hive with Apache Ranger. You can see the ",(0,r.jsx)(i.a,{href:"/docs/0.8.0-incubating/security/authorization-push-down#authorization-hive-with-ranger-properties",children:"Authorization Hive with Ranger properties"})]}),"\n",(0,r.jsx)(i.h3,{id:"catalog-operations",children:"Catalog operations"}),"\n",(0,r.jsxs)(i.p,{children:["Refer to ",(0,r.jsx)(i.a,{href:"/docs/0.8.0-incubating/manage-relational-metadata-using-gravitino#catalog-operations",children:"Manage Relational Metadata Using Gravitino"})," for more details."]}),"\n",(0,r.jsx)(i.h2,{id:"schema",children:"Schema"}),"\n",(0,r.jsx)(i.h3,{id:"schema-capabilities",children:"Schema capabilities"}),"\n",(0,r.jsx)(i.p,{children:"The Hive catalog supports creating, updating, and deleting databases in the HMS."}),"\n",(0,r.jsx)(i.h3,{id:"schema-properties",children:"Schema properties"}),"\n",(0,r.jsx)(i.p,{children:"Schema properties supply or set metadata for the underlying Hive database.\nThe following table lists predefined schema properties for the Hive database. Additionally, you can define your own key-value pair properties and transmit them to the underlying Hive database."}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Property name"}),(0,r.jsx)(i.th,{children:"Description"}),(0,r.jsx)(i.th,{children:"Default value"}),(0,r.jsx)(i.th,{children:"Required"}),(0,r.jsx)(i.th,{children:"Since Version"})]})}),(0,r.jsx)(i.tbody,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"location"})}),(0,r.jsxs)(i.td,{children:["The directory for Hive database storage, such as ",(0,r.jsx)(i.code,{children:"/user/hive/warehouse"}),"."]}),(0,r.jsxs)(i.td,{children:["HMS uses the value of ",(0,r.jsx)(i.code,{children:"hive.metastore.warehouse.dir"})," in the ",(0,r.jsx)(i.code,{children:"hive-site.xml"})," by default."]}),(0,r.jsx)(i.td,{children:"No"}),(0,r.jsx)(i.td,{children:"0.1.0"})]})})]}),"\n",(0,r.jsx)(i.h3,{id:"schema-operations",children:"Schema operations"}),"\n",(0,r.jsxs)(i.p,{children:["see ",(0,r.jsx)(i.a,{href:"/docs/0.8.0-incubating/manage-relational-metadata-using-gravitino#schema-operations",children:"Manage Relational Metadata Using Gravitino"}),"."]}),"\n",(0,r.jsx)(i.h2,{id:"table",children:"Table"}),"\n",(0,r.jsx)(i.h3,{id:"table-capabilities",children:"Table capabilities"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"The Hive catalog supports creating, updating, and deleting tables in the HMS."}),"\n",(0,r.jsx)(i.li,{children:"Doesn't support column default value."}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"table-partitioning",children:"Table partitioning"}),"\n",(0,r.jsxs)(i.p,{children:["The Hive catalog supports ",(0,r.jsx)(i.a,{href:"https://cwiki.apache.org/confluence/display/Hive/LanguageManual+DDL#LanguageManualDDL-PartitionedTables",children:"partitioned tables"}),". Users can create partitioned tables in the Hive catalog with the specific partitioning attribute.\nAlthough Gravitino supports several partitioning strategies, Apache Hive inherently only supports a single partitioning strategy (partitioned by column). Therefore, the Hive catalog only supports ",(0,r.jsx)(i.code,{children:"Identity"})," partitioning."]}),"\n",(0,r.jsx)(i.admonition,{type:"caution",children:(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.code,{children:"fieldName"})," specified in the partitioning attribute must be the name of a column defined in the table."]})}),"\n",(0,r.jsx)(i.h3,{id:"table-sort-orders-and-distributions",children:"Table sort orders and distributions"}),"\n",(0,r.jsxs)(i.p,{children:["The Hive catalog supports ",(0,r.jsx)(i.a,{href:"https://cwiki.apache.org/confluence/display/Hive/LanguageManual+DDL#LanguageManualDDL-BucketedSortedTables",children:"bucketed sorted tables"}),". Users can create bucketed sorted tables in the Hive catalog with specific ",(0,r.jsx)(i.code,{children:"distribution"})," and ",(0,r.jsx)(i.code,{children:"sortOrders"})," attributes.\nAlthough Gravitino supports several distribution strategies, Apache Hive inherently only supports a single distribution strategy (clustered by column). Therefore the Hive catalog only supports ",(0,r.jsx)(i.code,{children:"Hash"})," distribution."]}),"\n",(0,r.jsx)(i.admonition,{type:"caution",children:(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.code,{children:"fieldName"})," specified in the ",(0,r.jsx)(i.code,{children:"distribution"})," and ",(0,r.jsx)(i.code,{children:"sortOrders"})," attribute must be the name of a column defined in the table."]})}),"\n",(0,r.jsx)(i.h3,{id:"table-column-types",children:"Table column types"}),"\n",(0,r.jsxs)(i.p,{children:["The Hive catalog supports all data types defined in the ",(0,r.jsx)(i.a,{href:"https://cwiki.apache.org/confluence/display/Hive/LanguageManual+Types",children:"Hive Language Manual"}),".\nThe following table lists the data types mapped from the Hive catalog to Gravitino."]}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Hive Data Type"}),(0,r.jsx)(i.th,{children:"Gravitino Data Type"}),(0,r.jsx)(i.th,{children:"Since Version"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"boolean"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"boolean"})}),(0,r.jsx)(i.td,{children:"0.2.0"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"tinyint"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"byte"})}),(0,r.jsx)(i.td,{children:"0.2.0"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"smallint"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"short"})}),(0,r.jsx)(i.td,{children:"0.2.0"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsxs)(i.td,{children:[(0,r.jsx)(i.code,{children:"int"}),"/",(0,r.jsx)(i.code,{children:"integer"})]}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"integer"})}),(0,r.jsx)(i.td,{children:"0.2.0"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"bigint"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"long"})}),(0,r.jsx)(i.td,{children:"0.2.0"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"float"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"float"})}),(0,r.jsx)(i.td,{children:"0.2.0"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsxs)(i.td,{children:[(0,r.jsx)(i.code,{children:"double"}),"/",(0,r.jsx)(i.code,{children:"double precision"})]}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"double"})}),(0,r.jsx)(i.td,{children:"0.2.0"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"decimal"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"decimal"})}),(0,r.jsx)(i.td,{children:"0.2.0"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"string"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"string"})}),(0,r.jsx)(i.td,{children:"0.2.0"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"char"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"char"})}),(0,r.jsx)(i.td,{children:"0.2.0"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"varchar"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"varchar"})}),(0,r.jsx)(i.td,{children:"0.2.0"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"timestamp"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"timestamp"})}),(0,r.jsx)(i.td,{children:"0.2.0"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"date"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"date"})}),(0,r.jsx)(i.td,{children:"0.2.0"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"interval_year_month"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"interval_year"})}),(0,r.jsx)(i.td,{children:"0.2.0"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"interval_day_time"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"interval_day"})}),(0,r.jsx)(i.td,{children:"0.2.0"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"binary"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"binary"})}),(0,r.jsx)(i.td,{children:"0.2.0"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"array"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"list"})}),(0,r.jsx)(i.td,{children:"0.2.0"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"map"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"map"})}),(0,r.jsx)(i.td,{children:"0.2.0"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"struct"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"struct"})}),(0,r.jsx)(i.td,{children:"0.2.0"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"uniontype"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"union"})}),(0,r.jsx)(i.td,{children:"0.2.0"})]})]})]}),"\n",(0,r.jsx)(i.admonition,{type:"info",children:(0,r.jsxs)(i.p,{children:["Since 0.6.0-incubating, the data types other than listed above are mapped to Gravitino ",(0,r.jsx)(i.strong,{children:(0,r.jsx)(i.a,{href:"/docs/0.8.0-incubating/manage-relational-metadata-using-gravitino#external-type",children:"External Type"})})," that represents an unresolvable data type from the Hive catalog."]})}),"\n",(0,r.jsx)(i.h3,{id:"table-properties",children:"Table properties"}),"\n",(0,r.jsx)(i.p,{children:"Table properties supply or set metadata for the underlying Hive tables.\nThe following table lists predefined table properties for a Hive table. Additionally, you can define your own key-value pair properties and transmit them to the underlying Hive database."}),"\n",(0,r.jsxs)(i.admonition,{type:"note",children:[(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"Reserved"}),": Fields that cannot be passed to the Gravitino server."]}),(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"Immutable"}),": Fields that cannot be modified once set."]})]}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Property Name"}),(0,r.jsx)(i.th,{children:"Description"}),(0,r.jsx)(i.th,{children:"Default Value"}),(0,r.jsx)(i.th,{children:"Required"}),(0,r.jsx)(i.th,{children:"Reserved"}),(0,r.jsx)(i.th,{children:"Immutable"}),(0,r.jsx)(i.th,{children:"Since Version"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"location"})}),(0,r.jsxs)(i.td,{children:["The location for table storage, such as ",(0,r.jsx)(i.code,{children:"/user/hive/warehouse/test_table"}),"."]}),(0,r.jsx)(i.td,{children:"HMS uses the database location as the parent directory by default."}),(0,r.jsx)(i.td,{children:"No"}),(0,r.jsx)(i.td,{children:"No"}),(0,r.jsx)(i.td,{children:"Yes"}),(0,r.jsx)(i.td,{children:"0.2.0"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"table-type"})}),(0,r.jsxs)(i.td,{children:["Type of the table. Valid values include ",(0,r.jsx)(i.code,{children:"MANAGED_TABLE"})," and ",(0,r.jsx)(i.code,{children:"EXTERNAL_TABLE"}),"."]}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"MANAGED_TABLE"})}),(0,r.jsx)(i.td,{children:"No"}),(0,r.jsx)(i.td,{children:"No"}),(0,r.jsx)(i.td,{children:"Yes"}),(0,r.jsx)(i.td,{children:"0.2.0"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"format"})}),(0,r.jsxs)(i.td,{children:["The table file format. Valid values include ",(0,r.jsx)(i.code,{children:"TEXTFILE"}),", ",(0,r.jsx)(i.code,{children:"SEQUENCEFILE"}),", ",(0,r.jsx)(i.code,{children:"RCFILE"}),", ",(0,r.jsx)(i.code,{children:"ORC"}),", ",(0,r.jsx)(i.code,{children:"PARQUET"}),", ",(0,r.jsx)(i.code,{children:"AVRO"}),", ",(0,r.jsx)(i.code,{children:"JSON"}),", ",(0,r.jsx)(i.code,{children:"CSV"}),", and ",(0,r.jsx)(i.code,{children:"REGEX"}),"."]}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"TEXTFILE"})}),(0,r.jsx)(i.td,{children:"No"}),(0,r.jsx)(i.td,{children:"No"}),(0,r.jsx)(i.td,{children:"Yes"}),(0,r.jsx)(i.td,{children:"0.2.0"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"input-format"})}),(0,r.jsxs)(i.td,{children:["The input format class for the table, such as ",(0,r.jsx)(i.code,{children:"org.apache.hadoop.hive.ql.io.orc.OrcInputFormat"}),"."]}),(0,r.jsxs)(i.td,{children:["The property ",(0,r.jsx)(i.code,{children:"format"})," sets the default value ",(0,r.jsx)(i.code,{children:"org.apache.hadoop.mapred.TextInputFormat"})," and can change it to a different default."]}),(0,r.jsx)(i.td,{children:"No"}),(0,r.jsx)(i.td,{children:"No"}),(0,r.jsx)(i.td,{children:"Yes"}),(0,r.jsx)(i.td,{children:"0.2.0"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"output-format"})}),(0,r.jsxs)(i.td,{children:["The output format class for the table, such as ",(0,r.jsx)(i.code,{children:"org.apache.hadoop.hive.ql.io.orc.OrcOutputFormat"}),"."]}),(0,r.jsxs)(i.td,{children:["The property ",(0,r.jsx)(i.code,{children:"format"})," sets the default value ",(0,r.jsx)(i.code,{children:"org.apache.hadoop.hive.ql.io.HiveIgnoreKeyTextOutputFormat"})," and can change it to a different default."]}),(0,r.jsx)(i.td,{children:"No"}),(0,r.jsx)(i.td,{children:"No"}),(0,r.jsx)(i.td,{children:"Yes"}),(0,r.jsx)(i.td,{children:"0.2.0"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"serde-lib"})}),(0,r.jsxs)(i.td,{children:["The serde library class for the table, such as ",(0,r.jsx)(i.code,{children:"org.apache.hadoop.hive.ql.io.orc.OrcSerde"}),"."]}),(0,r.jsxs)(i.td,{children:["The property ",(0,r.jsx)(i.code,{children:"format"})," sets the default value ",(0,r.jsx)(i.code,{children:"org.apache.hadoop.hive.serde2.lazy.LazySimpleSerDe"})," and can change it to a different default."]}),(0,r.jsx)(i.td,{children:"No"}),(0,r.jsx)(i.td,{children:"No"}),(0,r.jsx)(i.td,{children:"Yes"}),(0,r.jsx)(i.td,{children:"0.2.0"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"serde.parameter."})}),(0,r.jsxs)(i.td,{children:["The prefix of the serde parameter, such as ",(0,r.jsx)(i.code,{children:'"serde.parameter.orc.create.index" = "true"'}),", indicating ",(0,r.jsx)(i.code,{children:"ORC"})," serde lib to create row indexes"]}),(0,r.jsx)(i.td,{children:"(none)"}),(0,r.jsx)(i.td,{children:"No"}),(0,r.jsx)(i.td,{children:"No"}),(0,r.jsx)(i.td,{children:"Yes"}),(0,r.jsx)(i.td,{children:"0.2.0"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"serde-name"})}),(0,r.jsx)(i.td,{children:"The name of the serde"}),(0,r.jsx)(i.td,{children:"Table name by default."}),(0,r.jsx)(i.td,{children:"No"}),(0,r.jsx)(i.td,{children:"No"}),(0,r.jsx)(i.td,{children:"Yes"}),(0,r.jsx)(i.td,{children:"0.2.0"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"comment"})}),(0,r.jsx)(i.td,{children:"Used to store a table comment."}),(0,r.jsx)(i.td,{children:"(none)"}),(0,r.jsx)(i.td,{children:"No"}),(0,r.jsx)(i.td,{children:"Yes"}),(0,r.jsx)(i.td,{children:"No"}),(0,r.jsx)(i.td,{children:"0.2.0"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"numFiles"})}),(0,r.jsx)(i.td,{children:"Used to store the number of files in the table."}),(0,r.jsx)(i.td,{children:"(none)"}),(0,r.jsx)(i.td,{children:"No"}),(0,r.jsx)(i.td,{children:"Yes"}),(0,r.jsx)(i.td,{children:"No"}),(0,r.jsx)(i.td,{children:"0.2.0"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"totalSize"})}),(0,r.jsx)(i.td,{children:"Used to store the total size of the table."}),(0,r.jsx)(i.td,{children:"(none)"}),(0,r.jsx)(i.td,{children:"No"}),(0,r.jsx)(i.td,{children:"Yes"}),(0,r.jsx)(i.td,{children:"No"}),(0,r.jsx)(i.td,{children:"0.2.0"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"EXTERNAL"})}),(0,r.jsx)(i.td,{children:"Indicates whether the table is external."}),(0,r.jsx)(i.td,{children:"(none)"}),(0,r.jsx)(i.td,{children:"No"}),(0,r.jsx)(i.td,{children:"Yes"}),(0,r.jsx)(i.td,{children:"No"}),(0,r.jsx)(i.td,{children:"0.2.0"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"transient_lastDdlTime"})}),(0,r.jsx)(i.td,{children:"Used to store the last DDL time of the table."}),(0,r.jsx)(i.td,{children:"(none)"}),(0,r.jsx)(i.td,{children:"No"}),(0,r.jsx)(i.td,{children:"Yes"}),(0,r.jsx)(i.td,{children:"No"}),(0,r.jsx)(i.td,{children:"0.2.0"})]})]})]}),"\n",(0,r.jsx)(i.h3,{id:"table-indexes",children:"Table indexes"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Doesn't support table indexes."}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"table-operations",children:"Table operations"}),"\n",(0,r.jsxs)(i.p,{children:["Refer to ",(0,r.jsx)(i.a,{href:"/docs/0.8.0-incubating/manage-relational-metadata-using-gravitino#table-operations",children:"Manage Relational Metadata Using Gravitino"})," for more details."]}),"\n",(0,r.jsx)(i.h4,{id:"alter-operations",children:"Alter operations"}),"\n",(0,r.jsxs)(i.p,{children:["Gravitino has already defined a unified set of ",(0,r.jsx)(i.a,{href:"/docs/0.8.0-incubating/manage-relational-metadata-using-gravitino#alter-a-table",children:"metadata operation interfaces"}),", and almost all ",(0,r.jsx)(i.a,{href:"https://cwiki.apache.org/confluence/display/Hive/LanguageManual+DDL#LanguageManualDDL-AlterTable/Partition/Column",children:"Hive Alter operations"})," have corresponding table update requests which enable you to change the struct of an existing table.\nThe following table lists the mapping relationship between Hive Alter operations and Gravitino table update requests."]}),"\n",(0,r.jsx)(i.h5,{id:"alter-table",children:"Alter table"}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Hive Alter Operation"}),(0,r.jsx)(i.th,{children:"Gravitino Table Update Request"}),(0,r.jsx)(i.th,{children:"Since Version"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"Rename Table"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"Rename table"})}),(0,r.jsx)(i.td,{children:"0.2.0"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"Alter Table Properties"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"Set a table property"})}),(0,r.jsx)(i.td,{children:"0.2.0"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"Alter Table Comment"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"Update comment"})}),(0,r.jsx)(i.td,{children:"0.2.0"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"Alter SerDe Properties"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"Set a table property"})}),(0,r.jsx)(i.td,{children:"0.2.0"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"Remove SerDe Properties"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"Remove a table property"})}),(0,r.jsx)(i.td,{children:"0.2.0"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"Alter Table Storage Properties"})}),(0,r.jsx)(i.td,{children:"Unsupported"}),(0,r.jsx)(i.td,{children:"-"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"Alter Table Skewed or Stored as Directories"})}),(0,r.jsx)(i.td,{children:"Unsupported"}),(0,r.jsx)(i.td,{children:"-"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"Alter Table Constraints"})}),(0,r.jsx)(i.td,{children:"Unsupported"}),(0,r.jsx)(i.td,{children:"-"})]})]})]}),"\n",(0,r.jsx)(i.admonition,{type:"note",children:(0,r.jsxs)(i.p,{children:["As Gravitino has a separate interface for updating the comment of a table, the Hive catalog sets ",(0,r.jsx)(i.code,{children:"comment"})," as a reserved property for the table, preventing users from setting the comment property. Apache Hive can modify the comment property of the table."]})}),"\n",(0,r.jsx)(i.h5,{id:"alter-column",children:"Alter column"}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Hive Alter Operation"}),(0,r.jsx)(i.th,{children:"Gravitino Table Update Request"}),(0,r.jsx)(i.th,{children:"Since Version"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"Change Column Name"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"Rename a column"})}),(0,r.jsx)(i.td,{children:"0.2.0"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"Change Column Type"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"Update the type of a column"})}),(0,r.jsx)(i.td,{children:"0.2.0"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"Change Column Position"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"Update the position of a column"})}),(0,r.jsx)(i.td,{children:"0.2.0"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"Change Column Comment"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"Update the column comment"})}),(0,r.jsx)(i.td,{children:"0.2.0"})]})]})]}),"\n",(0,r.jsx)(i.h5,{id:"alter-partition",children:"Alter partition"}),"\n",(0,r.jsx)(i.admonition,{type:"note",children:(0,r.jsx)(i.p,{children:"Support for altering partitions is under development."})}),"\n",(0,r.jsx)(i.h2,{id:"hive-catalog-with-s3-storage",children:"Hive catalog with S3 storage"}),"\n",(0,r.jsxs)(i.p,{children:["To create a Hive catalog with S3 storage, you can refer to the ",(0,r.jsx)(i.a,{href:"/docs/0.8.0-incubating/hive-catalog",children:"Hive catalog with S3"})," documentation. No special configurations are required for the Hive catalog to work with S3 storage.\nThe only difference is the storage location of the files, which is in S3. You can use ",(0,r.jsx)(i.code,{children:"location"})," to specify the S3 path for the database or table."]})]})}function o(e={}){const{wrapper:i}={...(0,d.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}}}]);