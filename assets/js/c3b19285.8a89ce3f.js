"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[36042],{4986:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var t=o(13274),i=o(38389);const r={title:"Apache Gravitino Trino connector development",slug:"/trino-connector/development",keyword:"gravitino connector development",license:"This software is licensed under the Apache License version 2."},c=void 0,a={id:"trino-connector/development",title:"Apache Gravitino Trino connector development",description:"This document is to guide users through the development of the Apache Gravitino Trino connector for Trino locally.",source:"@site/docs/trino-connector/development.md",sourceDirName:"trino-connector",slug:"/trino-connector/development",permalink:"/docs/next/trino-connector/development",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/trino-connector/development.md",tags:[],version:"current",lastUpdatedBy:"FANNG",lastUpdatedAt:173770816e4,frontMatter:{title:"Apache Gravitino Trino connector development",slug:"/trino-connector/development",keyword:"gravitino connector development",license:"This software is licensed under the Apache License version 2."},sidebar:"docs",previous:{title:"Supported SQL",permalink:"/docs/next/trino-connector/sql-support"},next:{title:"Overview",permalink:"/docs/next/spark-connector/spark-connector"}},s={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Development environment",id:"development-environment",level:2},{value:"IDEA",id:"idea",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"This document is to guide users through the development of the Apache Gravitino Trino connector for Trino locally."}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(n.p,{children:"Before you start developing the Gravitino Trino connector, you need to have the following prerequisites:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["You need to start the Gravitino server locally, for more information, please refer to the ",(0,t.jsx)(n.a,{href:"/docs/next/how-to-install",children:"start Gravitino server"})]}),"\n",(0,t.jsxs)(n.li,{children:["Create a catalog in the Gravitino server, for more information, please refer to the ",(0,t.jsx)(n.a,{href:"/docs/next/manage-relational-metadata-using-gravitino",children:"Gravitino metadata management"}),". Assuming we have just created a MySQL catalog using the following command:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-curl",children:'curl -X POST -H "Content-Type: application/json" -d \'{"name":"test","comment":"comment","properties":{}}\' http://localhost:8090/api/metalakes\n\ncurl -X POST -H "Content-Type: application/json" -d \'{"name":"mysql_catalog3","type":"RELATIONAL","comment":"comment","provider":"jdbc-mysql", "properties":{\n  "jdbc-url": "jdbc:mysql://127.0.0.1:3306?useSSL=false&allowPublicKeyRetrieval=true",\n  "jdbc-user": "root",\n  "jdbc-password": "123456",\n  "jdbc-driver": "com.mysql.cj.jdbc.Driver"\n}}\' http://localhost:8090/api/metalakes/test/catalogs\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Please change the above ",(0,t.jsx)(n.code,{children:"localhost"}),", ",(0,t.jsx)(n.code,{children:"port"})," and the names of metalake and catalogs accordingly."]})}),"\n",(0,t.jsx)(n.h2,{id:"development-environment",children:"Development environment"}),"\n",(0,t.jsx)(n.p,{children:"To develop the Gravitino Trino connector locally, you need to do the following steps:"}),"\n",(0,t.jsx)(n.h3,{id:"idea",children:"IDEA"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Clone the Trino repository from the ",(0,t.jsx)(n.a,{href:"https://github.com/trinodb/trino",children:"GitHub"})," repository. The released version Trino-435 is the least version that Gravitino supports."]}),"\n",(0,t.jsx)(n.li,{children:"Open the Trino project in your IDEA."}),"\n",(0,t.jsxs)(n.li,{children:["Create a new module for the Gravitino Trino connector in the Trino project as the following picture (we will use the name ",(0,t.jsx)(n.code,{children:"trino-gravitino"})," as the module name in the following steps). ",(0,t.jsx)(n.img,{alt:"trino-gravitino",src:o(44388).A+"",width:"1122",height:"1966"})]}),"\n",(0,t.jsxs)(n.li,{children:["Add a soft link to the Gravitino Trino connector module in the Trino project. Assuming the src java main directory of the Gravitino Trino connector in project Gravitino is ",(0,t.jsx)(n.code,{children:"gravitino/path/to/gravitino-trino-connector/src/main/java"}),", and the src java main directory of trino-gravitino in the Trino project is ",(0,t.jsx)(n.code,{children:"trino/path/to/trino-gravitino/src/main/java"}),", you can use the following command to create a soft link:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"ln -s gravitino/path/to/trino-connector/src/main/java trino/path/to/trino-gravitino/src/main/java\n"})}),"\n",(0,t.jsxs)(n.p,{children:["then you can see the ",(0,t.jsx)(n.code,{children:"gravitino-trino-connecor"})," source files and directories in the ",(0,t.jsx)(n.code,{children:"trino-gravitino"})," module as follows:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"trino-gravitino-structure",src:o(60589).A+"",width:"1548",height:"1594"})}),"\n",(0,t.jsxs)(n.ol,{start:"5",children:["\n",(0,t.jsxs)(n.li,{children:["Add ",(0,t.jsx)(n.code,{children:"<module>plugin/trino-gravitino</module>"})," to ",(0,t.jsx)(n.code,{children:"trino/pom.xml"})," and change the ",(0,t.jsx)(n.code,{children:"pom.xml"})," file in the ",(0,t.jsx)(n.code,{children:"trino-gravitino"})," module accordingly. This is an example content of the ",(0,t.jsx)(n.code,{children:"pom.xml"})," file in the ",(0,t.jsx)(n.code,{children:"trino-gravitino"})," module. Ensure that the version of trino-root is identical to the version of trino."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:'<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n    <modelVersion>4.0.0</modelVersion>\n    <parent>\n        <groupId>io.trino</groupId>\n        <artifactId>trino-root</artifactId>\n        <version>435</version>\n        <relativePath>../../pom.xml</relativePath>\n    </parent>\n\n    <artifactId>trino-gravitino</artifactId>\n    <packaging>trino-plugin</packaging>\n    <description>Trino - Gravitino Connector</description>\n\n    <properties>\n        <air.main.basedir>${project.parent.basedir}</air.main.basedir>\n    </properties>\n\n    <dependencies>\n\n        \x3c!--\n            You can switch to the snapshot version as you like,  for example,\n            if you want to use the jar of latest main branch,\n            you can execute the following command to install Gravitino `client-java-runtime` jar locally.\n            ./gradlew publishToMavenLocal\n        --\x3e\n        <dependency>\n            <groupId>org.apache.gravitino</groupId>\n            <artifactId>catalog-common</artifactId>\n            <version><GRAVITINO_VERSION></version>\n            <exclusions>\n                <exclusion>\n                    <groupId>io.dropwizard.metrics</groupId>\n                    <artifactId>metrics-core</artifactId>\n                </exclusion>\n                <exclusion>\n                    <groupId>io.netty</groupId>\n                    <artifactId>netty</artifactId>\n                </exclusion>\n                <exclusion>\n                    <groupId>org.apache.logging.log4j</groupId>\n                    <artifactId>log4j-core</artifactId>\n                </exclusion>\n            </exclusions>\n        </dependency>\n\n        <dependency>\n            <groupId>org.apache.gravitino</groupId>\n            <artifactId>client-java-runtime</artifactId>\n            <version><GRAVITINO_VERSION></version>\n        </dependency>\n\n        <dependency>\n            <groupId>io.airlift</groupId>\n            <artifactId>json</artifactId>\n        </dependency>\n\n        <dependency>\n            <groupId>io.airlift.resolver</groupId>\n            <artifactId>resolver</artifactId>\n            <version>1.6</version>\n        </dependency>\n\n        <dependency>\n            <groupId>io.trino</groupId>\n            <artifactId>trino-client</artifactId>\n        </dependency>\n\n        <dependency>\n            <groupId>io.trino</groupId>\n            <artifactId>trino-jdbc</artifactId>\n        </dependency>\n\n        <dependency>\n            <groupId>joda-time</groupId>\n            <artifactId>joda-time</artifactId>\n        </dependency>\n\n        <dependency>\n            <groupId>org.apache.commons</groupId>\n            <artifactId>commons-collections4</artifactId>\n            <version>4.4</version>\n        </dependency>\n\n        <dependency>\n            <groupId>org.apache.commons</groupId>\n            <artifactId>commons-lang3</artifactId>\n        </dependency>\n\n        <dependency>\n            <groupId>org.codehaus.plexus</groupId>\n            <artifactId>plexus-xml</artifactId>\n            <version>4.0.2</version>\n        </dependency>\n\n        <dependency>\n            <groupId>org.slf4j</groupId>\n            <artifactId>slf4j-api</artifactId>\n            <version>2.0.9</version>\n        </dependency>\n\n        <dependency>\n            <groupId>org.apache.logging.log4j</groupId>\n            <artifactId>log4j-slf4j2-impl</artifactId>\n            <version>2.22.0</version>\n        </dependency>\n\n        <dependency>\n            <groupId>org.apache.logging.log4j</groupId>\n            <artifactId>log4j-api</artifactId>\n            <version>2.22.0</version>\n        </dependency>\n\n        <dependency>\n            <groupId>org.apache.logging.log4j</groupId>\n            <artifactId>log4j-core</artifactId>\n            <version>2.22.0</version>\n        </dependency>\n\n        <dependency>\n            <groupId>com.fasterxml.jackson.core</groupId>\n            <artifactId>jackson-annotations</artifactId>\n            <scope>provided</scope>\n        </dependency>\n\n        <dependency>\n            <groupId>io.opentelemetry</groupId>\n            <artifactId>opentelemetry-api</artifactId>\n            <scope>provided</scope>\n        </dependency>\n\n        <dependency>\n            <groupId>io.trino</groupId>\n            <artifactId>trino-spi</artifactId>\n            <scope>provided</scope>\n        </dependency>\n\n    </dependencies>\n\n</project>\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"6",children:["\n",(0,t.jsxs)(n.li,{children:["Try to compile module ",(0,t.jsx)(n.code,{children:"trino-gravitino"})," to see if there are any errors."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"# build the whole trino project\n./mvnw -pl '!core/trino-server-rpm' package -DskipTests -Dair.check.skip-all=true\n\n\n# build the trino-gravitino module if we change the code in the trino-gravitino module\n./mvnw clean -pl 'plugin/trino-gravitino' package -DskipTests -Dcheckstyle.skip -Dair.check.skip-checkstyle=true -DskipTests -Dair.check.skip-all=true\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["If a compile error occurs due to ",(0,t.jsx)(n.code,{children:"The following artifacts could not be resolved: org.apache.gravitino:xxx:jar"}),", which can be resolved by executing ",(0,t.jsx)(n.code,{children:"./gradlew publishToMavenLocal"})," in gravitino beforehand."]})}),"\n",(0,t.jsxs)(n.ol,{start:"7",children:["\n",(0,t.jsxs)(n.li,{children:["Set up the configuration for the Gravitino Trino connector in the Trino project. You can do as the following picture shows:\n",(0,t.jsx)(n.img,{src:o(66471).A+"",width:"1780",height:"1704"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The corresponding configuration files are here:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Gravitino properties file: ",(0,t.jsx)(n.code,{children:"gravitino.properties"})]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-properties",children:"# the connector name is always 'gravitino'\nconnector.name=gravitino\n\n# uri of the gravitino server, you need to change it according to your environment\ngravitino.uri=http://localhost:8090\n\n# The name of the metalake to which the connector is connected, you need to change it according to your environment\ngravitino.metalake=test\n\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Trino configuration file: ",(0,t.jsx)(n.code,{children:"config.properties"})]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-properties",children:"#\n# WARNING\n# ^^^^^^^\n# This configuration file is for development only and should NOT be used\n# in production. For example configuration, see the Trino documentation.\n# sample nodeId to provide consistency across test runs\nnode.id=ffffffff-ffff-ffff-ffff-ffffffffffff\nnode.environment=test\nnode.internal-address=localhost\nexperimental.concurrent-startup=true\n\n# Default port is 8080, We change it to 8180\nhttp-server.http.port=8180\n\ndiscovery.uri=http://localhost:8180\n\nexchange.http-client.max-connections=1000\nexchange.http-client.max-connections-per-server=1000\nexchange.http-client.connect-timeout=1m\nexchange.http-client.idle-timeout=1m\n\nscheduler.http-client.max-connections=1000\nscheduler.http-client.max-connections-per-server=1000\nscheduler.http-client.connect-timeout=1m\nscheduler.http-client.idle-timeout=1m\n\nquery.client.timeout=5m\nquery.min-expire-age=30m\n\n# We removed several catalogs that won't be used in Gravitino\nplugin.bundles=\\\n  ../../plugin/trino-iceberg/pom.xml,\\\n  ../../plugin/trino-hive/pom.xml,\\\n  ../../plugin/trino-local-file/pom.xml, \\\n  ../../plugin/trino-mysql/pom.xml,\\\n  ../../plugin/trino-postgresql/pom.xml, \\\n  ../../plugin/trino-exchange-filesystem/pom.xml, \\\n  ../../plugin/trino-gravitino/pom.xml\n\nnode-scheduler.include-coordinator=true\n\n# Note: The Gravitino Trino connector olny supports with The dynamic catalog manager\ncatalog.management=dynamic\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Remove the file ",(0,t.jsx)(n.code,{children:"/etc/catalogs/xxx.properties"})," if the corresponding ",(0,t.jsx)(n.code,{children:"plugin/trino-xxx/pom.xml"})," is not recorded in the ",(0,t.jsx)(n.code,{children:"/etc/config.properties"}),". For the hive plugin, please use  ",(0,t.jsx)(n.code,{children:"plugin/trino-hive/pom.xml"})," after release version 435. Others should use ",(0,t.jsx)(n.code,{children:"plugin/trino-hive-hadoop2/pom.xml"}),"."]})}),"\n",(0,t.jsxs)(n.ol,{start:"8",children:["\n",(0,t.jsxs)(n.li,{children:["Start the Trino server and connect to the Gravitino server.\n",(0,t.jsx)(n.img,{src:o(95518).A+"",width:"3580",height:"1840"})]}),"\n",(0,t.jsxs)(n.li,{children:["If ",(0,t.jsx)(n.code,{children:"DevelopmentServer"})," has started successfully, you can connect to the Trino server using the ",(0,t.jsx)(n.code,{children:"trino-cli"})," and run the following command to see if the Gravitino Trino connector is available:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"java -jar trino-cli-429-executable.jar --server localhost:8180\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"trino-cli-429-executable.jar"})," is the Trino CLI jar file, you can download it from the ",(0,t.jsx)(n.a,{href:"https://trino.io/docs/current/client/cli.html",children:"Trino release page"}),". ",(0,t.jsx)(n.strong,{children:"Users can use the version of the Trino CLI jar file according to the version of the Trino server."})]})}),"\n",(0,t.jsxs)(n.ol,{start:"10",children:["\n",(0,t.jsxs)(n.li,{children:["If nothing goes wrong, you can start developing the Gravitino Trino connector in the Gravitino project and debug it in the Trino project.\n",(0,t.jsx)(n.img,{src:o(47123).A+"",width:"2166",height:"1826"})]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},66471:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/add-config-765b07ab770c6c9c88b9f8ec5d2dc47e.jpg"},60589:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/add-link-c7b089e6448a727b99e6ff3376597c07.jpg"},44388:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/create-gravitino-trino-connector-60dd9c98e9c4781a17548a6ef88ccc97.jpg"},47123:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/show-catalogs-50f69274b4f7d4ff9626c29a935262b1.jpg"},95518:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/start-trino-a90a37602974d85083a57dcab8c8ba7b.jpg"}}]);