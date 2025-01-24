"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[92087],{49179:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>o});var s=i(13274),n=i(38389);const t={title:"Iceberg REST catalog service",slug:"/iceberg-rest-service",keywords:["Iceberg REST catalog"],license:"This software is licensed under the Apache License version 2."},c=void 0,d={id:"iceberg-rest-service",title:"Iceberg REST catalog service",description:"Background",source:"@site/versioned_docs/version-0.6.0-incubating/iceberg-rest-service.md",sourceDirName:".",slug:"/iceberg-rest-service",permalink:"/docs/0.6.0-incubating/iceberg-rest-service",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/iceberg-rest-service.md",tags:[],version:"0.6.0-incubating",lastUpdatedBy:"FANNG",lastUpdatedAt:1737701155e3,frontMatter:{title:"Iceberg REST catalog service",slug:"/iceberg-rest-service",keywords:["Iceberg REST catalog"],license:"This software is licensed under the Apache License version 2."},sidebar:"docs",previous:{title:"How to install Gravitino",permalink:"/docs/0.6.0-incubating/how-to-install"},next:{title:"Web UI",permalink:"/docs/0.6.0-incubating/webui"}},a={},o=[{value:"Background",id:"background",level:2},{value:"Capabilities",id:"capabilities",level:3},{value:"Server management",id:"server-management",level:2},{value:"Apache Gravitino Iceberg REST catalog server configuration",id:"apache-gravitino-iceberg-rest-catalog-server-configuration",level:2},{value:"Configuration to enable Iceberg REST service in Gravitino server.",id:"configuration-to-enable-iceberg-rest-service-in-gravitino-server",level:3},{value:"HTTP server configuration",id:"http-server-configuration",level:3},{value:"Security",id:"security",level:3},{value:"Storage",id:"storage",level:3},{value:"S3 configuration",id:"s3-configuration",level:4},{value:"HDFS configuration",id:"hdfs-configuration",level:4},{value:"Catalog backend configuration",id:"catalog-backend-configuration",level:3},{value:"Hive backend configuration",id:"hive-backend-configuration",level:4},{value:"JDBC backend configuration",id:"jdbc-backend-configuration",level:4},{value:"Other Apache Iceberg catalog properties",id:"other-apache-iceberg-catalog-properties",level:3},{value:"Apache Iceberg metrics store configuration",id:"apache-iceberg-metrics-store-configuration",level:3},{value:"Starting the Iceberg REST server",id:"starting-the-iceberg-rest-server",level:2},{value:"Exploring the Apache Gravitino Iceberg REST catalog service with Apache Spark",id:"exploring-the-apache-gravitino-iceberg-rest-catalog-service-with-apache-spark",level:2},{value:"Deploying Apache Spark with Apache Iceberg support",id:"deploying-apache-spark-with-apache-iceberg-support",level:3},{value:"Starting the Apache Spark client with the Apache Iceberg REST catalog",id:"starting-the-apache-spark-client-with-the-apache-iceberg-rest-catalog",level:3},{value:"Exploring Apache Iceberg with Apache Spark SQL",id:"exploring-apache-iceberg-with-apache-spark-sql",level:3},{value:"Docker instructions",id:"docker-instructions",level:2}];function l(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h2,{id:"background",children:"Background"}),"\n",(0,s.jsxs)(r.p,{children:["The Apache Gravitino Iceberg REST Server follows the ",(0,s.jsx)(r.a,{href:"https://github.com/apache/iceberg/blob/main/open-api/rest-catalog-open-api.yaml",children:"Apache Iceberg REST API specification"})," and acts as an Iceberg REST catalog server."]}),"\n",(0,s.jsx)(r.h3,{id:"capabilities",children:"Capabilities"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Supports the Apache Iceberg REST API defined in Iceberg 1.5, and supports all namespace and table interfaces. The following interfaces are not implemented yet:","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"token"}),"\n",(0,s.jsx)(r.li,{children:"view"}),"\n",(0,s.jsx)(r.li,{children:"multi table transaction"}),"\n",(0,s.jsx)(r.li,{children:"pagination"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["Works as a catalog proxy, supporting ",(0,s.jsx)(r.code,{children:"Hive"})," and ",(0,s.jsx)(r.code,{children:"JDBC"})," as catalog backend."]}),"\n",(0,s.jsx)(r.li,{children:"Supports HDFS and S3 storage."}),"\n",(0,s.jsx)(r.li,{children:"Supports OAuth2 and HTTPS."}),"\n",(0,s.jsx)(r.li,{children:"Provides a pluggable metrics store interface to store and delete Iceberg metrics."}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"server-management",children:"Server management"}),"\n",(0,s.jsx)(r.p,{children:"There are three deployment scenarios for Gravitino Iceberg REST server:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"A standalone server in a standalone Gravitino Iceberg REST server package."}),"\n",(0,s.jsx)(r.li,{children:"A standalone server in the Gravitino server package."}),"\n",(0,s.jsx)(r.li,{children:"An auxiliary service embedded in the Gravitino server."}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["For detailed instructions on how to build and install the Gravitino server package, please refer to ",(0,s.jsx)(r.a,{href:"/docs/0.6.0-incubating/how-to-build",children:"How to build"})," and ",(0,s.jsx)(r.a,{href:"/docs/0.6.0-incubating/how-to-install",children:"How to install"}),". To build the Gravitino Iceberg REST server package, use the command ",(0,s.jsx)(r.code,{children:"./gradlew compileIcebergRESTServer -x test"}),". Alternatively, to create the corresponding compressed package in the distribution directory, use ",(0,s.jsx)(r.code,{children:"./gradlew assembleIcebergRESTServer -x test"}),". The Gravitino Iceberg REST server package includes the following files:"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-text",children:"|\u2500\u2500 ...\n\u2514\u2500\u2500 distribution/gravitino-iceberg-rest-server\n    |\u2500\u2500 bin/\n    |   \u2514\u2500\u2500 gravitino-iceberg-rest-server.sh    # Gravitino Iceberg REST server Launching scripts.\n    |\u2500\u2500 conf/                                   # All configurations for Gravitino Iceberg REST server.\n    |   \u251c\u2500\u2500 gravitino-iceberg-rest-server.conf  # Gravitino Iceberg REST server configuration.\n    |   \u251c\u2500\u2500 gravitino-env.sh                    # Environment variables, etc., JAVA_HOME, GRAVITINO_HOME, and more.\n    |   \u2514\u2500\u2500 log4j2.properties                   # log4j configuration for the Gravitino Iceberg REST server.\n    |   \u2514\u2500\u2500 hdfs-site.xml & core-site.xml       # HDFS configuration files.\n    |\u2500\u2500 libs/                                   # Gravitino Iceberg REST server dependencies libraries.\n    |\u2500\u2500 logs/                                   # Gravitino Iceberg REST server logs. Automatically created after the server starts.\n"})}),"\n",(0,s.jsx)(r.h2,{id:"apache-gravitino-iceberg-rest-catalog-server-configuration",children:"Apache Gravitino Iceberg REST catalog server configuration"}),"\n",(0,s.jsxs)(r.p,{children:["There are distinct configuration files for standalone and auxiliary server: ",(0,s.jsx)(r.code,{children:"gravitino-iceberg-rest-server.conf"})," is used for the standalone server, while ",(0,s.jsx)(r.code,{children:"gravitino.conf"})," is for the auxiliary server. Although the configuration files differ, the configuration items remain the same."]}),"\n",(0,s.jsxs)(r.p,{children:["Starting with version ",(0,s.jsx)(r.code,{children:"0.6.0"}),", the prefix ",(0,s.jsx)(r.code,{children:"gravitino.auxService.iceberg-rest."})," for auxiliary server configurations has been deprecated. If both ",(0,s.jsx)(r.code,{children:"gravitino.auxService.iceberg-rest.key"})," and ",(0,s.jsx)(r.code,{children:"gravitino.iceberg-rest.key"})," are present, the latter will take precedence. The configurations listed below use the ",(0,s.jsx)(r.code,{children:"gravitino.iceberg-rest."})," prefix."]}),"\n",(0,s.jsx)(r.h3,{id:"configuration-to-enable-iceberg-rest-service-in-gravitino-server",children:"Configuration to enable Iceberg REST service in Gravitino server."}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Configuration item"}),(0,s.jsx)(r.th,{children:"Description"}),(0,s.jsx)(r.th,{children:"Default value"}),(0,s.jsx)(r.th,{children:"Required"}),(0,s.jsx)(r.th,{children:"Since Version"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"gravitino.auxService.names"})}),(0,s.jsxs)(r.td,{children:["The auxiliary service name of the Gravitino Iceberg REST catalog service. Use ",(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"iceberg-rest"})}),"."]}),(0,s.jsx)(r.td,{children:"(none)"}),(0,s.jsx)(r.td,{children:"Yes"}),(0,s.jsx)(r.td,{children:"0.2.0"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"gravitino.iceberg-rest.classpath"})}),(0,s.jsxs)(r.td,{children:["The classpath of the Gravitino Iceberg REST catalog service; includes the directory containing jars and configuration. It supports both absolute and relative paths, for example, ",(0,s.jsx)(r.code,{children:"iceberg-rest-server/libs, iceberg-rest-server/conf"})]}),(0,s.jsx)(r.td,{children:"(none)"}),(0,s.jsx)(r.td,{children:"Yes"}),(0,s.jsx)(r.td,{children:"0.2.0"})]})]})]}),"\n",(0,s.jsxs)(r.p,{children:["Please note that, it only takes affect in ",(0,s.jsx)(r.code,{children:"gravitino.conf"}),", you don't need to specify the above configurations if start as a standalone server."]}),"\n",(0,s.jsx)(r.h3,{id:"http-server-configuration",children:"HTTP server configuration"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Configuration item"}),(0,s.jsx)(r.th,{children:"Description"}),(0,s.jsx)(r.th,{children:"Default value"}),(0,s.jsx)(r.th,{children:"Required"}),(0,s.jsx)(r.th,{children:"Since Version"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"gravitino.iceberg-rest.host"})}),(0,s.jsx)(r.td,{children:"The host of the Gravitino Iceberg REST catalog service."}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"0.0.0.0"})}),(0,s.jsx)(r.td,{children:"No"}),(0,s.jsx)(r.td,{children:"0.2.0"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"gravitino.iceberg-rest.httpPort"})}),(0,s.jsx)(r.td,{children:"The port of the Gravitino Iceberg REST catalog service."}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"9001"})}),(0,s.jsx)(r.td,{children:"No"}),(0,s.jsx)(r.td,{children:"0.2.0"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"gravitino.iceberg-rest.minThreads"})}),(0,s.jsxs)(r.td,{children:["The minimum number of threads in the thread pool used by the Jetty web server. ",(0,s.jsx)(r.code,{children:"minThreads"})," is 8 if the value is less than 8."]}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Math.max(Math.min(Runtime.getRuntime().availableProcessors() * 2, 100), 8)"})}),(0,s.jsx)(r.td,{children:"No"}),(0,s.jsx)(r.td,{children:"0.2.0"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"gravitino.iceberg-rest.maxThreads"})}),(0,s.jsxs)(r.td,{children:["The maximum number of threads in the thread pool used by the Jetty web server. ",(0,s.jsx)(r.code,{children:"maxThreads"})," is 8 if the value is less than 8, and ",(0,s.jsx)(r.code,{children:"maxThreads"})," must be greater than or equal to ",(0,s.jsx)(r.code,{children:"minThreads"}),"."]}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Math.max(Runtime.getRuntime().availableProcessors() * 4, 400)"})}),(0,s.jsx)(r.td,{children:"No"}),(0,s.jsx)(r.td,{children:"0.2.0"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"gravitino.iceberg-rest.threadPoolWorkQueueSize"})}),(0,s.jsx)(r.td,{children:"The size of the queue in the thread pool used by Gravitino Iceberg REST catalog service."}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"100"})}),(0,s.jsx)(r.td,{children:"No"}),(0,s.jsx)(r.td,{children:"0.2.0"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"gravitino.iceberg-rest.stopTimeout"})}),(0,s.jsxs)(r.td,{children:["The amount of time in ms for the Gravitino Iceberg REST catalog service to stop gracefully. For more information, see ",(0,s.jsx)(r.code,{children:"org.eclipse.jetty.server.Server#setStopTimeout"}),"."]}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"30000"})}),(0,s.jsx)(r.td,{children:"No"}),(0,s.jsx)(r.td,{children:"0.2.0"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"gravitino.iceberg-rest.idleTimeout"})}),(0,s.jsx)(r.td,{children:"The timeout in ms of idle connections."}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"30000"})}),(0,s.jsx)(r.td,{children:"No"}),(0,s.jsx)(r.td,{children:"0.2.0"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"gravitino.iceberg-rest.requestHeaderSize"})}),(0,s.jsx)(r.td,{children:"The maximum size of an HTTP request."}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"131072"})}),(0,s.jsx)(r.td,{children:"No"}),(0,s.jsx)(r.td,{children:"0.2.0"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"gravitino.iceberg-rest.responseHeaderSize"})}),(0,s.jsx)(r.td,{children:"The maximum size of an HTTP response."}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"131072"})}),(0,s.jsx)(r.td,{children:"No"}),(0,s.jsx)(r.td,{children:"0.2.0"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"gravitino.iceberg-rest.customFilters"})}),(0,s.jsx)(r.td,{children:"Comma-separated list of filter class names to apply to the APIs."}),(0,s.jsx)(r.td,{children:"(none)"}),(0,s.jsx)(r.td,{children:"No"}),(0,s.jsx)(r.td,{children:"0.4.0"})]})]})]}),"\n",(0,s.jsxs)(r.p,{children:["The filter in ",(0,s.jsx)(r.code,{children:"customFilters"})," should be a standard javax servlet filter.\nYou can also specify filter parameters by setting configuration entries in the style ",(0,s.jsx)(r.code,{children:"gravitino.iceberg-rest.<class name of filter>.param.<param name>=<value>"}),"."]}),"\n",(0,s.jsx)(r.h3,{id:"security",children:"Security"}),"\n",(0,s.jsxs)(r.p,{children:["Gravitino Iceberg REST server supports OAuth2 and HTTPS, please refer to ",(0,s.jsx)(r.a,{href:"/docs/0.6.0-incubating/security/security",children:"Security"})," for more details."]}),"\n",(0,s.jsx)(r.h3,{id:"storage",children:"Storage"}),"\n",(0,s.jsx)(r.p,{children:"Gravitino Iceberg REST server supports S3 and HDFS for storage."}),"\n",(0,s.jsx)(r.h4,{id:"s3-configuration",children:"S3 configuration"}),"\n",(0,s.jsx)(r.p,{children:"Gravitino Iceberg REST service supports using static access-key-id and secret-access-key to access S3 data."}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Configuration item"}),(0,s.jsx)(r.th,{children:"Description"}),(0,s.jsx)(r.th,{children:"Default value"}),(0,s.jsx)(r.th,{children:"Required"}),(0,s.jsx)(r.th,{children:"Since Version"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"gravitino.iceberg-rest.io-impl"})}),(0,s.jsxs)(r.td,{children:["The IO implementation for ",(0,s.jsx)(r.code,{children:"FileIO"})," in Iceberg, use ",(0,s.jsx)(r.code,{children:"org.apache.iceberg.aws.s3.S3FileIO"})," for S3."]}),(0,s.jsx)(r.td,{children:"(none)"}),(0,s.jsx)(r.td,{children:"No"}),(0,s.jsx)(r.td,{children:"0.6.0"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"gravitino.iceberg-rest.s3-access-key-id"})}),(0,s.jsx)(r.td,{children:"The static access key ID used to access S3 data."}),(0,s.jsx)(r.td,{children:"(none)"}),(0,s.jsx)(r.td,{children:"No"}),(0,s.jsx)(r.td,{children:"0.6.0"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"gravitino.iceberg-rest.s3-secret-access-key"})}),(0,s.jsx)(r.td,{children:"The static secret access key used to access S3 data."}),(0,s.jsx)(r.td,{children:"(none)"}),(0,s.jsx)(r.td,{children:"No"}),(0,s.jsx)(r.td,{children:"0.6.0"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"gravitino.iceberg-rest.s3-endpoint"})}),(0,s.jsx)(r.td,{children:"An alternative endpoint of the S3 service, This could be used for S3FileIO with any s3-compatible object storage service that has a different endpoint, or access a private S3 endpoint in a virtual private cloud."}),(0,s.jsx)(r.td,{children:"(none)"}),(0,s.jsx)(r.td,{children:"No"}),(0,s.jsx)(r.td,{children:"0.6.0"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"gravitino.iceberg-rest.s3-region"})}),(0,s.jsxs)(r.td,{children:["The region of the S3 service, like ",(0,s.jsx)(r.code,{children:"us-west-2"}),"."]}),(0,s.jsx)(r.td,{children:"(none)"}),(0,s.jsx)(r.td,{children:"No"}),(0,s.jsx)(r.td,{children:"0.6.0"})]})]})]}),"\n",(0,s.jsxs)(r.p,{children:["For other Iceberg s3 properties not managed by Gravitino like ",(0,s.jsx)(r.code,{children:"s3.sse.type"}),", you could config it directly by ",(0,s.jsx)(r.code,{children:"gravitino.iceberg-rest.s3.sse.type"}),"."]}),"\n",(0,s.jsx)(r.admonition,{type:"info",children:(0,s.jsxs)(r.p,{children:["To configure the JDBC catalog backend, set the ",(0,s.jsx)(r.code,{children:"gravitino.iceberg-rest.warehouse"})," parameter to ",(0,s.jsx)(r.code,{children:"s3://{bucket_name}/${prefix_name}"}),". For the Hive catalog backend, set ",(0,s.jsx)(r.code,{children:"gravitino.iceberg-rest.warehouse"})," to ",(0,s.jsx)(r.code,{children:"s3a://{bucket_name}/${prefix_name}"}),". Additionally, download the ",(0,s.jsx)(r.a,{href:"https://mvnrepository.com/artifact/org.apache.iceberg/iceberg-aws-bundle",children:"Iceberg AWS bundle"})," and place it in the classpath of Iceberg REST server."]})}),"\n",(0,s.jsx)(r.h4,{id:"hdfs-configuration",children:"HDFS configuration"}),"\n",(0,s.jsxs)(r.p,{children:["You should place HDFS configuration file to the classpath of the Iceberg REST server, ",(0,s.jsx)(r.code,{children:"iceberg-rest-server/conf"})," for Gravitino server package, ",(0,s.jsx)(r.code,{children:"conf"})," for standalone Gravitino Iceberg REST server package. When writing to HDFS, the Gravitino Iceberg REST catalog service can only operate as the specified HDFS user and doesn't support proxying to other HDFS users. See ",(0,s.jsx)(r.a,{href:"/docs/0.6.0-incubating/gravitino-server-config#how-to-access-apache-hadoop",children:"How to access Apache Hadoop"})," for more details."]}),"\n",(0,s.jsx)(r.admonition,{type:"info",children:(0,s.jsx)(r.p,{children:"Builds with Hadoop 2.10.x. There may be compatibility issues when accessing Hadoop 3.x clusters."})}),"\n",(0,s.jsx)(r.h3,{id:"catalog-backend-configuration",children:"Catalog backend configuration"}),"\n",(0,s.jsx)(r.admonition,{type:"info",children:(0,s.jsx)(r.p,{children:"The Gravitino Iceberg REST catalog service uses the memory catalog backend by default. You can specify a Hive or JDBC catalog backend for production environment."})}),"\n",(0,s.jsx)(r.h4,{id:"hive-backend-configuration",children:"Hive backend configuration"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Configuration item"}),(0,s.jsx)(r.th,{children:"Description"}),(0,s.jsx)(r.th,{children:"Default value"}),(0,s.jsx)(r.th,{children:"Required"}),(0,s.jsx)(r.th,{children:"Since Version"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"gravitino.iceberg-rest.catalog-backend"})}),(0,s.jsxs)(r.td,{children:["The Catalog backend of the Gravitino Iceberg REST catalog service. Use the value ",(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"hive"})})," for a Hive catalog."]}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"memory"})}),(0,s.jsx)(r.td,{children:"Yes"}),(0,s.jsx)(r.td,{children:"0.2.0"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"gravitino.iceberg-rest.uri"})}),(0,s.jsxs)(r.td,{children:["The Hive metadata address, such as ",(0,s.jsx)(r.code,{children:"thrift://127.0.0.1:9083"}),"."]}),(0,s.jsx)(r.td,{children:"(none)"}),(0,s.jsx)(r.td,{children:"Yes"}),(0,s.jsx)(r.td,{children:"0.2.0"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"gravitino.iceberg-rest.warehouse"})}),(0,s.jsxs)(r.td,{children:["The warehouse directory of the Hive catalog, such as ",(0,s.jsx)(r.code,{children:"/user/hive/warehouse-hive/"}),"."]}),(0,s.jsx)(r.td,{children:"(none)"}),(0,s.jsx)(r.td,{children:"Yes"}),(0,s.jsx)(r.td,{children:"0.2.0"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"gravitino.iceberg-rest.catalog-backend-name"})}),(0,s.jsx)(r.td,{children:"The catalog backend name passed to underlying Iceberg catalog backend. Catalog name in JDBC backend is used to isolate namespace and tables."}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.code,{children:"hive"})," for Hive backend, ",(0,s.jsx)(r.code,{children:"jdbc"})," for JDBC backend, ",(0,s.jsx)(r.code,{children:"memory"})," for memory backend"]}),(0,s.jsx)(r.td,{children:"No"}),(0,s.jsx)(r.td,{children:"0.5.2"})]})]})]}),"\n",(0,s.jsx)(r.h4,{id:"jdbc-backend-configuration",children:"JDBC backend configuration"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Configuration item"}),(0,s.jsx)(r.th,{children:"Description"}),(0,s.jsx)(r.th,{children:"Default value"}),(0,s.jsx)(r.th,{children:"Required"}),(0,s.jsx)(r.th,{children:"Since Version"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"gravitino.iceberg-rest.catalog-backend"})}),(0,s.jsxs)(r.td,{children:["The Catalog backend of the Gravitino Iceberg REST catalog service. Use the value ",(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"jdbc"})})," for a JDBC catalog."]}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"memory"})}),(0,s.jsx)(r.td,{children:"Yes"}),(0,s.jsx)(r.td,{children:"0.2.0"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"gravitino.iceberg-rest.uri"})}),(0,s.jsxs)(r.td,{children:["The JDBC connection address, such as ",(0,s.jsx)(r.code,{children:"jdbc:postgresql://127.0.0.1:5432"})," for Postgres, or ",(0,s.jsx)(r.code,{children:"jdbc:mysql://127.0.0.1:3306/"})," for mysql."]}),(0,s.jsx)(r.td,{children:"(none)"}),(0,s.jsx)(r.td,{children:"Yes"}),(0,s.jsx)(r.td,{children:"0.2.0"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"gravitino.iceberg-rest.warehouse "})}),(0,s.jsxs)(r.td,{children:["The warehouse directory of JDBC catalog. Set the HDFS prefix if using HDFS, such as ",(0,s.jsx)(r.code,{children:"hdfs://127.0.0.1:9000/user/hive/warehouse-jdbc"})]}),(0,s.jsx)(r.td,{children:"(none)"}),(0,s.jsx)(r.td,{children:"Yes"}),(0,s.jsx)(r.td,{children:"0.2.0"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"gravitino.iceberg-rest.catalog-backend-name"})}),(0,s.jsx)(r.td,{children:"The catalog name passed to underlying Iceberg catalog backend. Catalog name in JDBC backend is used to isolate namespace and tables."}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.code,{children:"jdbc"})," for JDBC backend"]}),(0,s.jsx)(r.td,{children:"No"}),(0,s.jsx)(r.td,{children:"0.5.2"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"gravitino.iceberg-rest.jdbc.user"})}),(0,s.jsx)(r.td,{children:"The username of the JDBC connection."}),(0,s.jsx)(r.td,{children:"(none)"}),(0,s.jsx)(r.td,{children:"Yes"}),(0,s.jsx)(r.td,{children:"0.2.0"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"gravitino.iceberg-rest.jdbc.password"})}),(0,s.jsx)(r.td,{children:"The password of the JDBC connection."}),(0,s.jsx)(r.td,{children:"(none)"}),(0,s.jsx)(r.td,{children:"Yes"}),(0,s.jsx)(r.td,{children:"0.2.0"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"gravitino.iceberg-rest.jdbc-initialize"})}),(0,s.jsx)(r.td,{children:"Whether to initialize the meta tables when creating the JDBC catalog."}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"true"})}),(0,s.jsx)(r.td,{children:"No"}),(0,s.jsx)(r.td,{children:"0.2.0"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"gravitino.iceberg-rest.jdbc-driver"})}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.code,{children:"com.mysql.jdbc.Driver"})," or ",(0,s.jsx)(r.code,{children:"com.mysql.cj.jdbc.Driver"})," for MySQL, ",(0,s.jsx)(r.code,{children:"org.postgresql.Driver"})," for PostgreSQL."]}),(0,s.jsx)(r.td,{children:"(none)"}),(0,s.jsx)(r.td,{children:"Yes"}),(0,s.jsx)(r.td,{children:"0.3.0"})]})]})]}),"\n",(0,s.jsxs)(r.p,{children:["If you have a JDBC Iceberg catalog prior, you must set ",(0,s.jsx)(r.code,{children:"catalog-backend-name"})," to keep consistent with your Jdbc Iceberg catalog name to operate the prior namespace and tables."]}),"\n",(0,s.jsx)(r.admonition,{type:"caution",children:(0,s.jsxs)(r.p,{children:["You must download the corresponding JDBC driver to the ",(0,s.jsx)(r.code,{children:"iceberg-rest-server/libs"})," directory."]})}),"\n",(0,s.jsx)(r.h3,{id:"other-apache-iceberg-catalog-properties",children:"Other Apache Iceberg catalog properties"}),"\n",(0,s.jsxs)(r.p,{children:["You can add other properties defined in ",(0,s.jsx)(r.a,{href:"https://iceberg.apache.org/docs/1.5.2/configuration/#catalog-properties",children:"Iceberg catalog properties"}),".\nThe ",(0,s.jsx)(r.code,{children:"clients"})," property for example:"]}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Configuration item"}),(0,s.jsx)(r.th,{children:"Description"}),(0,s.jsx)(r.th,{children:"Default value"}),(0,s.jsx)(r.th,{children:"Required"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"gravitino.iceberg-rest.clients"})}),(0,s.jsx)(r.td,{children:"The client pool size of the catalog."}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"2"})}),(0,s.jsx)(r.td,{children:"No"})]})})]}),"\n",(0,s.jsx)(r.admonition,{type:"info",children:(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"catalog-impl"})," has no effect."]})}),"\n",(0,s.jsx)(r.h3,{id:"apache-iceberg-metrics-store-configuration",children:"Apache Iceberg metrics store configuration"}),"\n",(0,s.jsxs)(r.p,{children:["Gravitino provides a pluggable metrics store interface to store and delete Iceberg metrics. You can develop a class that implements ",(0,s.jsx)(r.code,{children:"org.apache.gravitino.iceberg.service.metrics.IcebergMetricsStore"})," and add the corresponding jar file to the Iceberg REST service classpath directory."]}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Configuration item"}),(0,s.jsx)(r.th,{children:"Description"}),(0,s.jsx)(r.th,{children:"Default value"}),(0,s.jsx)(r.th,{children:"Required"}),(0,s.jsx)(r.th,{children:"Since Version"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"gravitino.iceberg-rest.metricsStore"})}),(0,s.jsx)(r.td,{children:"The Iceberg metrics storage class name."}),(0,s.jsx)(r.td,{children:"(none)"}),(0,s.jsx)(r.td,{children:"No"}),(0,s.jsx)(r.td,{children:"0.4.0"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"gravitino.iceberg-rest.metricsStoreRetainDays"})}),(0,s.jsx)(r.td,{children:"The days to retain Iceberg metrics in store, the value not greater than 0 means retain forever."}),(0,s.jsx)(r.td,{children:"-1"}),(0,s.jsx)(r.td,{children:"No"}),(0,s.jsx)(r.td,{children:"0.4.0"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"gravitino.iceberg-rest.metricsQueueCapacity"})}),(0,s.jsx)(r.td,{children:"The size of queue to store metrics temporally before storing to the persistent storage. Metrics will be dropped when queue is full."}),(0,s.jsx)(r.td,{children:"1000"}),(0,s.jsx)(r.td,{children:"No"}),(0,s.jsx)(r.td,{children:"0.4.0"})]})]})]}),"\n",(0,s.jsx)(r.h2,{id:"starting-the-iceberg-rest-server",children:"Starting the Iceberg REST server"}),"\n",(0,s.jsx)(r.p,{children:"To start as an auxiliary service with Gravitino server:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"./bin/gravitino.sh start \n"})}),"\n",(0,s.jsx)(r.p,{children:"To start a standalone Gravitino Iceberg REST catalog server:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"./bin/gravitino-iceberg-rest-server.sh start\n"})}),"\n",(0,s.jsx)(r.p,{children:"To verify whether the service has started:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"curl  http://127.0.0.1:9001/iceberg/v1/config\n"})}),"\n",(0,s.jsxs)(r.p,{children:["Normally you will see the output like ",(0,s.jsx)(r.code,{children:'{"defaults":{},"overrides":{}}%'}),"."]}),"\n",(0,s.jsx)(r.h2,{id:"exploring-the-apache-gravitino-iceberg-rest-catalog-service-with-apache-spark",children:"Exploring the Apache Gravitino Iceberg REST catalog service with Apache Spark"}),"\n",(0,s.jsx)(r.h3,{id:"deploying-apache-spark-with-apache-iceberg-support",children:"Deploying Apache Spark with Apache Iceberg support"}),"\n",(0,s.jsxs)(r.p,{children:["Follow the ",(0,s.jsx)(r.a,{href:"https://iceberg.apache.org/docs/1.5.2/spark-getting-started/",children:"Spark Iceberg start guide"})," to set up Apache Spark's and Apache Iceberg's environment."]}),"\n",(0,s.jsx)(r.h3,{id:"starting-the-apache-spark-client-with-the-apache-iceberg-rest-catalog",children:"Starting the Apache Spark client with the Apache Iceberg REST catalog"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Configuration item"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"spark.sql.catalog.${catalog-name}.type"})}),(0,s.jsxs)(r.td,{children:["The Spark catalog type; should set to ",(0,s.jsx)(r.code,{children:"rest"}),"."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"spark.sql.catalog.${catalog-name}.uri"})}),(0,s.jsxs)(r.td,{children:["Spark Iceberg REST catalog URI, such as ",(0,s.jsx)(r.code,{children:"http://127.0.0.1:9001/iceberg/"}),"."]})]})]})]}),"\n",(0,s.jsxs)(r.p,{children:["For example, we can configure Spark catalog options to use Gravitino Iceberg REST catalog with the catalog name ",(0,s.jsx)(r.code,{children:"rest"}),"."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"./bin/spark-sql -v \\\n--packages org.apache.iceberg:iceberg-spark-runtime-3.4_2.12:1.3.1 \\\n--conf spark.sql.extensions=org.apache.iceberg.spark.extensions.IcebergSparkSessionExtensions \\\n--conf spark.sql.catalog.rest=org.apache.iceberg.spark.SparkCatalog  \\\n--conf spark.sql.catalog.rest.type=rest  \\\n--conf spark.sql.catalog.rest.uri=http://127.0.0.1:9001/iceberg/\n"})}),"\n",(0,s.jsxs)(r.p,{children:["You may need to adjust the Iceberg Spark runtime jar file name according to the real version number in your environment. If you want to access the data stored in S3, you need to download ",(0,s.jsx)(r.a,{href:"https://mvnrepository.com/artifact/org.apache.iceberg/iceberg-aws-bundle",children:"Iceberg AWS bundle"})," jar and place it in the classpath of Spark, no extra config is needed because S3 related properties is transferred from Iceberg REST server to Iceberg REST client automaticly."]}),"\n",(0,s.jsx)(r.h3,{id:"exploring-apache-iceberg-with-apache-spark-sql",children:"Exploring Apache Iceberg with Apache Spark SQL"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-sql",children:"// First change to use the `rest` catalog\nUSE rest;\nCREATE DATABASE IF NOT EXISTS dml;\nCREATE TABLE dml.test (id bigint COMMENT 'unique id') using iceberg;\nDESCRIBE TABLE EXTENDED dml.test;\nINSERT INTO dml.test VALUES (1), (2);\nSELECT * FROM dml.test;\n"})}),"\n",(0,s.jsx)(r.h2,{id:"docker-instructions",children:"Docker instructions"}),"\n",(0,s.jsx)(r.p,{children:"You could run Gravitino Iceberg REST server though docker container:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"docker run -d -p 9001:9001 apache/gravitino-iceberg-rest:0.6.0\n"})}),"\n",(0,s.jsx)(r.p,{children:"Or build it manually to add custom logics:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"sh ./dev/docker/build-docker.sh --platform linux/arm64 --type iceberg-rest-server --image apache/gravitino-iceberg-rest --tag 0.6.0\n"})}),"\n",(0,s.jsxs)(r.p,{children:["You could try Spark with Gravitino REST catalog service in our ",(0,s.jsx)(r.a,{href:"/docs/0.6.0-incubating/how-to-use-the-playground#using-apache-iceberg-rest-service",children:"playground"}),"."]})]})}function h(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}}}]);