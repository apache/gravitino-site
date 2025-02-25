"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[5902],{871:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>a});var t=r(13274),i=r(17014);const s={title:"Apache Gravitino Spark connector",slug:"/spark-connector/spark-connector",keyword:"spark connector federation query",license:"This software is licensed under the Apache License version 2."},c=void 0,d={id:"spark-connector/spark-connector",title:"Apache Gravitino Spark connector",description:"Overview",source:"@site/docs/spark-connector/spark-connector.md",sourceDirName:"spark-connector",slug:"/spark-connector/spark-connector",permalink:"/docs/next/spark-connector/spark-connector",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/spark-connector/spark-connector.md",tags:[],version:"current",lastUpdatedBy:"Justin Mclean",lastUpdatedAt:1740469354e3,frontMatter:{title:"Apache Gravitino Spark connector",slug:"/spark-connector/spark-connector",keyword:"spark connector federation query",license:"This software is licensed under the Apache License version 2."},sidebar:"docs",previous:{title:"Development",permalink:"/docs/next/trino-connector/development"},next:{title:"Hive",permalink:"/docs/next/spark-connector/spark-catalog-hive"}},o={},a=[{value:"Overview",id:"overview",level:2},{value:"Capabilities",id:"capabilities",level:2},{value:"Requirement",id:"requirement",level:2},{value:"How to use it",id:"how-to-use-it",level:2},{value:"Datatype mapping",id:"datatype-mapping",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(n.p,{children:"The Apache Gravitino Spark connector leverages the Spark DataSourceV2 interface to facilitate the management of diverse catalogs under Gravitino. This capability allows users to perform federation queries, accessing data from various catalogs through a unified interface and consistent access control."}),"\n",(0,t.jsx)(n.h2,{id:"capabilities",children:"Capabilities"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Supports ",(0,t.jsx)(n.a,{href:"/docs/next/spark-connector/spark-catalog-hive",children:"Hive catalog"}),", ",(0,t.jsx)(n.a,{href:"/docs/next/spark-connector/spark-catalog-iceberg",children:"Iceberg catalog"})," and ",(0,t.jsx)(n.a,{href:"/docs/next/spark-connector/spark-catalog-paimon",children:"Paimon catalog"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Supports federation query."}),"\n",(0,t.jsx)(n.li,{children:"Supports most DDL and DML SQLs."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"requirement",children:"Requirement"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Spark 3.3 or 3.4 or 3.5"}),"\n",(0,t.jsx)(n.li,{children:"Scala 2.12 or 2.13"}),"\n",(0,t.jsx)(n.li,{children:"JDK 8 or 11 or 17"}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"Gravitino Spark connector doesn't support Scala 2.13 for Spark3.3."})}),"\n",(0,t.jsx)(n.h2,{id:"how-to-use-it",children:"How to use it"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/docs/next/how-to-build",children:"Build"})," or download the package (",(0,t.jsx)(n.a,{href:"https://mvnrepository.com/artifact/org.apache.gravitino/gravitino-spark-connector-runtime-3.3",children:"gravitino-spark-connector-runtime-3.3"}),", ",(0,t.jsx)(n.a,{href:"https://mvnrepository.com/artifact/org.apache.gravitino/gravitino-spark-connector-runtime-3.4",children:"gravitino-spark-connector-runtime-3.4"}),", ",(0,t.jsx)(n.a,{href:"https://mvnrepository.com/artifact/org.apache.gravitino/gravitino-spark-connector-runtime-3.5",children:"gravitino-spark-connector-runtime-3.5"}),"), and place it to the classpath of Spark."]}),"\n",(0,t.jsx)(n.li,{children:"Configure the Spark session to use the Gravitino spark connector."}),"\n"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Default Value"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Required"}),(0,t.jsx)(n.th,{children:"Since Version"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"spark.plugins"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"(none)"}),(0,t.jsxs)(n.td,{children:["Gravitino spark plugin name, ",(0,t.jsx)(n.code,{children:"org.apache.gravitino.spark.connector.plugin.GravitinoSparkPlugin"})]}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"0.5.0"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"spark.sql.gravitino.metalake"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"(none)"}),(0,t.jsx)(n.td,{children:"The metalake name that spark connector used to request to Gravitino."}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"0.5.0"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"spark.sql.gravitino.uri"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"(none)"}),(0,t.jsx)(n.td,{children:"The uri of Gravitino server address."}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"0.5.0"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"spark.sql.gravitino.enableIcebergSupport"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"false"})}),(0,t.jsxs)(n.td,{children:["Set to ",(0,t.jsx)(n.code,{children:"true"})," to use Iceberg catalog."]}),(0,t.jsx)(n.td,{children:"No"}),(0,t.jsx)(n.td,{children:"0.5.1"})]})]})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'./bin/spark-sql -v \\\n--conf spark.plugins="org.apache.gravitino.spark.connector.plugin.GravitinoSparkPlugin" \\\n--conf spark.sql.gravitino.uri=http://127.0.0.1:8090 \\\n--conf spark.sql.gravitino.metalake=test \\\n--conf spark.sql.gravitino.enableIcebergSupport=true \\\n--conf spark.sql.warehouse.dir=hdfs://127.0.0.1:9000/user/hive/warehouse-hive\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://iceberg.apache.org/releases/",children:"Download"})," corresponding runtime jars and place it to the classpath of Spark if using Iceberg catalog."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Execute the Spark SQL query."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Suppose there are two catalogs in the metalake ",(0,t.jsx)(n.code,{children:"test"}),", ",(0,t.jsx)(n.code,{children:"hive"})," for Hive catalog and ",(0,t.jsx)(n.code,{children:"iceberg"})," for Iceberg catalog."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"// use hive catalog\nUSE hive;\nCREATE DATABASE db;\nUSE db;\nCREATE TABLE hive_students (id INT, name STRING);\nINSERT INTO hive_students VALUES (1, 'Alice'), (2, 'Bob');\n\n// use Iceberg catalog\nUSE iceberg;\nUSE db;\nCREATE TABLE IF NOT EXISTS iceberg_scores (id INT, score INT) USING iceberg;\nINSERT INTO iceberg_scores VALUES (1, 95), (2, 88);\n\n// execute federation query between hive table and iceberg table\nSELECT hs.name, is.score FROM hive.db.hive_students hs JOIN iceberg_scores is ON hs.id = is.id;\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["The command ",(0,t.jsx)(n.code,{children:"SHOW CATALOGS"})," will only display the Spark default catalog, named spark_catalog, due to limitations within the Spark catalog manager. It does not list the catalogs present in the metalake. However, after explicitly using the ",(0,t.jsx)(n.code,{children:"USE"})," command with a specific catalog name, that catalog name then becomes visible in the output of ",(0,t.jsx)(n.code,{children:"SHOW CATALOGS"}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"datatype-mapping",children:"Datatype mapping"}),"\n",(0,t.jsx)(n.p,{children:"Gravitino spark connector support the following datatype mapping between Spark and Gravitino."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Spark Data Type"}),(0,t.jsx)(n.th,{children:"Gravitino Data Type"}),(0,t.jsx)(n.th,{children:"Since Version"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"BooleanType"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"boolean"})}),(0,t.jsx)(n.td,{children:"0.5.0"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ByteType"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"byte"})}),(0,t.jsx)(n.td,{children:"0.5.0"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ShortType"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"short"})}),(0,t.jsx)(n.td,{children:"0.5.0"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"IntegerType"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"integer"})}),(0,t.jsx)(n.td,{children:"0.5.0"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"LongType"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"long"})}),(0,t.jsx)(n.td,{children:"0.5.0"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"FloatType"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"float"})}),(0,t.jsx)(n.td,{children:"0.5.0"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"DoubleType"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"double"})}),(0,t.jsx)(n.td,{children:"0.5.0"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"DecimalType"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"decimal"})}),(0,t.jsx)(n.td,{children:"0.5.0"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"StringType"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:"0.5.0"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"CharType"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"char"})}),(0,t.jsx)(n.td,{children:"0.5.0"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"VarcharType"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"varchar"})}),(0,t.jsx)(n.td,{children:"0.5.0"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"TimestampType"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"timestamp with time zone"})}),(0,t.jsx)(n.td,{children:"0.5.0"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"TimestampNTZType"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"timestamp without time zone"})}),(0,t.jsx)(n.td,{children:"0.5.0"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"DateType"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"date"})}),(0,t.jsx)(n.td,{children:"0.5.0"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"BinaryType"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"binary"})}),(0,t.jsx)(n.td,{children:"0.5.0"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ArrayType"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"array"})}),(0,t.jsx)(n.td,{children:"0.5.0"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"MapType"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"map"})}),(0,t.jsx)(n.td,{children:"0.5.0"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"StructType"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"struct"})}),(0,t.jsx)(n.td,{children:"0.5.0"})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},17014:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>d});var t=r(79474);const i={},s=t.createContext(i);function c(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);