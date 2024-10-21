"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[3361],{84323:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=i(13274),t=i(43183);const o={title:"Apache Gravitino overview",slug:"/",license:"This software is licensed under the Apache License version 2."},r=void 0,s={id:"index",title:"Apache Gravitino overview",description:"What's Apache Gravitino?",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/docs/next/",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/index.md",tags:[],version:"current",lastUpdatedBy:"mchades",lastUpdatedAt:1729484604e3,frontMatter:{title:"Apache Gravitino overview",slug:"/",license:"This software is licensed under the Apache License version 2."},sidebar:"docs",next:{title:"Overview",permalink:"/docs/next/overview"}},c={},l=[{value:"What&#39;s Apache Gravitino?",id:"whats-apache-gravitino",level:2},{value:"Downloading",id:"downloading",level:2},{value:"Getting started",id:"getting-started",level:2},{value:"How to use Apache Gravitino",id:"how-to-use-apache-gravitino",level:2},{value:"Apache Gravitino playground",id:"apache-gravitino-playground",level:2},{value:"Where to go from here",id:"where-to-go-from-here",level:2},{value:"Catalogs",id:"catalogs",level:3},{value:"Governance",id:"governance",level:3},{value:"Gravitino Iceberg REST catalog service",id:"gravitino-iceberg-rest-catalog-service",level:3},{value:"Connectors",id:"connectors",level:3},{value:"Trino connector",id:"trino-connector",level:4},{value:"Spark connector",id:"spark-connector",level:4},{value:"Flink connector",id:"flink-connector",level:4},{value:"Server administration",id:"server-administration",level:3},{value:"Security",id:"security",level:3},{value:"Programming guides",id:"programming-guides",level:3},{value:"Development guides",id:"development-guides",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"whats-apache-gravitino",children:"What's Apache Gravitino?"}),"\n",(0,a.jsx)(n.p,{children:"Apache Gravitino is a high-performance, geo-distributed, and federated metadata lake. It manages the\nmetadata directly in different sources, types, and regions. It also provides users with unified\nmetadata access for data and AI assets."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/next/overview",children:"Learn more"}),"\u2192"]}),"\n",(0,a.jsx)(n.h2,{id:"downloading",children:"Downloading"}),"\n",(0,a.jsxs)(n.p,{children:["You can get Gravitino from the ",(0,a.jsx)(n.a,{href:"https://gravitino.apache.org/downloads",children:"download page"}),",\nor you can build Gravitino from source code. See ",(0,a.jsx)(n.a,{href:"/docs/next/how-to-build",children:"How to build Gravitino"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Gravitino runs on both Linux and macOS platforms, and it requires the installation of Java 8, Java 11, or Java 17. Gravitino trino-connector runs with\nTrino, and requires Java 17. This should include JVMs on x86_64 and\nARM64. It's easy to run locally on one machine, all you need is to have ",(0,a.jsx)(n.code,{children:"java"})," installed on\nyour system ",(0,a.jsx)(n.code,{children:"PATH"}),", or the ",(0,a.jsx)(n.code,{children:"JAVA_HOME"})," environment variable pointing to a Java installation."]}),"\n",(0,a.jsxs)(n.p,{children:["See ",(0,a.jsx)(n.a,{href:"/docs/next/how-to-install",children:"How to install Gravitino"})," to learn how to install the Gravitino server."]}),"\n",(0,a.jsxs)(n.p,{children:["Gravitino provides Docker images on ",(0,a.jsx)(n.a,{href:"https://hub.docker.com/u/apache",children:"Docker Hub"}),".\nPull the image and run it. For details of the Gravitino Docker image, see\n",(0,a.jsx)(n.a,{href:"/docs/next/docker-image-details",children:"Docker image details"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Gravitino also provides a playground to experience the whole Gravitino system with other components.\nSee the ",(0,a.jsx)(n.a,{href:"https://github.com/apache/gravitino-playground",children:"Gravitino playground repository"}),"\nand ",(0,a.jsx)(n.a,{href:"/docs/next/how-to-use-the-playground",children:"How to use the playground"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"getting-started",children:"Getting started"}),"\n",(0,a.jsxs)(n.p,{children:["To get started with Gravitino, see ",(0,a.jsx)(n.a,{href:"/docs/next/getting-started",children:"Getting started"})," for the details."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/docs/next/getting-started#getting-started-locally",children:"Getting started locally"}),": a quick guide to starting\nand using Gravitino locally."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/docs/next/getting-started#getting-started-on-amazon-web-services",children:"Running on Amazon Web Services"}),": a\nquick guide to starting and using Gravitino on AWS."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/docs/next/getting-started#getting-started-on-google-cloud-platform",children:"Running on Google Cloud Platform"}),":\na quick guide to starting and using Gravitino on GCP."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"how-to-use-apache-gravitino",children:"How to use Apache Gravitino"}),"\n",(0,a.jsx)(n.p,{children:"Gravitino provides two SDKs to manage metadata from different catalogs in a unified way: the\nREST API and the Java SDK. You can use either to manage metadata. See"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/docs/next/manage-metalake-using-gravitino",children:"Manage metalake using Gravitino"})," to learn how to manage\nmetalakes."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/docs/next/manage-relational-metadata-using-gravitino",children:"Manage relational metadata using Gravitino"}),"\nto learn how to manage relational metadata."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/docs/next/manage-fileset-metadata-using-gravitino",children:"Manage fileset metadata using Gravitino"})," to learn\nhow to manage fileset metadata."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/docs/next/manage-massaging-metadata-using-gravitino",children:"Manage messaging metadata using Gravitino"})," to learn how to manage\nmessaging metadata."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Also, you can find the complete REST API definition in\n",(0,a.jsx)(n.a,{href:"./api/rest/gravitino-rest-api",children:"Gravitino Open API"}),",\nJava SDK definition in ",(0,a.jsx)(n.a,{href:"pathname:///docs/0.6.1-incubating/api/java/index.html",children:"Gravitino Java doc"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Gravitino provides a web UI to manage the metadata. Visit the web UI in the browser via ",(0,a.jsx)(n.code,{children:"http://<ip-address>:8090"}),". See ",(0,a.jsx)(n.a,{href:"/docs/next/webui",children:"Gravitino web UI"})," for details."]}),"\n",(0,a.jsx)(n.p,{children:"Gravitino currently supports the following catalogs:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Relational catalogs:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/docs/next/lakehouse-iceberg-catalog",children:(0,a.jsx)(n.strong,{children:"Iceberg catalog"})})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/docs/next/lakehouse-paimon-catalog",children:(0,a.jsx)(n.strong,{children:"Paimon catalog"})})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/docs/next/apache-hive-catalog",children:(0,a.jsx)(n.strong,{children:"Hive catalog"})})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/docs/next/jdbc-mysql-catalog",children:(0,a.jsx)(n.strong,{children:"MySQL catalog"})})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/docs/next/jdbc-postgresql-catalog",children:(0,a.jsx)(n.strong,{children:"PostgreSQL catalog"})})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/docs/next/jdbc-doris-catalog",children:(0,a.jsx)(n.strong,{children:"Doris catalog"})})}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Fileset catalogs:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/docs/next/hadoop-catalog",children:(0,a.jsx)(n.strong,{children:"Hadoop catalog"})})}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Messaging catalogs:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/docs/next/kafka-catalog",children:(0,a.jsx)(n.strong,{children:"Kafka catalog"})})}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"apache-gravitino-playground",children:"Apache Gravitino playground"}),"\n",(0,a.jsxs)(n.p,{children:["To experience Gravitino with other components easily, Gravitino provides a playground to run. It\nintegrates Apache Hadoop, Apache Hive, Trino, MySQL, PostgreSQL, and Gravitino together as a\ncomplete environment. To experience all the features, see\n",(0,a.jsx)(n.a,{href:"/docs/next/getting-started",children:"Getting started"})," and ",(0,a.jsx)(n.a,{href:"/docs/next/how-to-use-the-playground",children:"How to use the Gravitino playground"}),"."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/docs/next/getting-started#installing-apache-gravitino-playground-on-aws-or-google-cloud-platform",children:"Install Gravitino playground on AWS or GCP"}),":\na quick guide to starting and using the Gravitino playground on AWS or GCP."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/docs/next/getting-started#installing-apache-gravitino-playground-locally",children:"Install Gravitino playground locally"}),":\na quick guide to starting and using the Gravitino playground locally."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/docs/next/how-to-use-the-playground",children:"How to use the Gravitino playground"}),": provides an example of how\nto use Gravitino and other components together."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"where-to-go-from-here",children:"Where to go from here"}),"\n",(0,a.jsx)(n.h3,{id:"catalogs",children:"Catalogs"}),"\n",(0,a.jsx)(n.p,{children:"Gravitino supports different catalogs to manage the metadata in different sources. Please see:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/docs/next/lakehouse-iceberg-catalog",children:"Iceberg catalog"}),": a complete guide to using Gravitino to manage Apache Iceberg data."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/docs/next/lakehouse-paimon-catalog",children:"Paimon catalog"}),": a complete guide to using Gravitino to manage Apache Paimon data."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/docs/next/apache-hive-catalog",children:"Hive catalog"}),": a complete guide to using Gravitino to manage Apache Hive data."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/docs/next/jdbc-mysql-catalog",children:"MySQL catalog"}),": a complete guide to using Gravitino to manage MySQL data."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/docs/next/jdbc-postgresql-catalog",children:"PostgreSQL catalog"}),": a complete guide to using Gravitino to manage PostgreSQL data."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/docs/next/jdbc-doris-catalog",children:"Doris catalog"}),": a complete guide to using Gravitino to manage Doris data."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/docs/next/hadoop-catalog",children:"Hadoop catalog"}),": a complete guide to using Gravitino to manage fileset\nusing Hadoop Compatible File System (HCFS)."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/docs/next/kafka-catalog",children:"Kafka catalog"}),": a complete guide to using Gravitino to manage Kafka topics metadata."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"governance",children:"Governance"}),"\n",(0,a.jsx)(n.p,{children:"Gravitino provides governance features to manage metadata in a unified way. See:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/docs/next/manage-tags-in-gravitino",children:"Manage tags in Gravitino"}),": a complete guide to using Gravitino\nto manage tags."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"gravitino-iceberg-rest-catalog-service",children:"Gravitino Iceberg REST catalog service"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/docs/next/iceberg-rest-service",children:"Iceberg REST catalog service"}),": a complete guide to using Gravitino as an Apache Iceberg REST catalog service."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"connectors",children:"Connectors"}),"\n",(0,a.jsx)(n.h4,{id:"trino-connector",children:"Trino connector"}),"\n",(0,a.jsx)(n.p,{children:"Gravitino provides a Trino connector to manage Trino metadata in a unified way. To use the Trino connector, see:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/docs/next/trino-connector/index",children:"How to use Gravitino Trino connector"}),": a complete guide to using the Gravitino Trino connector."]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"spark-connector",children:"Spark connector"}),"\n",(0,a.jsx)(n.p,{children:"Gravitino provides a Spark connector to manage metadata in a unified way. To use the Spark connector, see:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/docs/next/spark-connector/spark-connector",children:"Gravitino Spark connector"}),": a complete guide to using the Gravitino Spark connector."]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"flink-connector",children:"Flink connector"}),"\n",(0,a.jsx)(n.p,{children:"Gravitino provides a Flink connector to manage metadata in a unified way. To use the Flink connector, see:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/docs/next/flink-connector/flink-connector",children:"Gravitino Flink connector"}),": a complete guide to using the Gravitino Flink connector."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"server-administration",children:"Server administration"}),"\n",(0,a.jsx)(n.p,{children:"Gravitino provides several ways to configure and manage the Gravitino server. See:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/docs/next/metrics",children:"Gravitino metrics"}),": provides metrics configurations and detailed a metrics list\nof the Gravitino server."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"security",children:"Security"}),"\n",(0,a.jsx)(n.p,{children:"Gravitino provides security configurations for Gravitino, including HTTPS, authentication and access control configurations."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/docs/next/security/how-to-use-https",children:"HTTPS"}),": provides HTTPS configurations."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/docs/next/security/how-to-authenticate",children:"Authentication"}),": provides authentication configurations including simple, OAuth, Kerberos."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/docs/next/security/access-control",children:"Access Control"}),": provides access control configurations."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/docs/next/security/how-to-use-cors",children:"CORS"}),": provides CORS configurations."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"programming-guides",children:"Programming guides"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"./api/rest/gravitino-rest-api",children:"Gravitino Open API"}),": provides the complete Open API definition of Gravitino."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"pathname:///docs/0.6.1-incubating/api/java/index.html",children:"Gravitino Java doc"}),": provides the Javadoc for the Gravitino API."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"development-guides",children:"Development guides"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/docs/next/how-to-build",children:"How to build Gravitino"}),": a complete guide to building Gravitino from\nsource."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/docs/next/how-to-test",children:"How to test Gravitino"}),": a complete guide to running Gravitino unit and\nintegration tests."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/docs/next/how-to-sign-releases",children:"How to sign and verify Gravitino releases"}),": a guide to signing and verifying\na Gravitino release."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/docs/next/publish-docker-images",children:"Publish Docker images"}),": a guide to publishing Gravitino Docker images;\nalso lists the change logs of Gravitino CI Docker images and release images."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/docs/next/how-to-upgrade",children:"How to upgrade Gravitino"}),": a guide to upgrading the schema of Gravitino storage backend from one release version to another."]}),"\n"]}),"\n",(0,a.jsx)("img",{src:"https://analytics.apache.org/matomo.php?idsite=62&rec=1&bots=1&action_name=Overview",alt:""})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}}}]);