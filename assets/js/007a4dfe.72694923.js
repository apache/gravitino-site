"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[6228],{91197:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>t,metadata:()=>s,toc:()=>l});var r=n(13274),a=n(43183);const t={title:"How to install Apache Gravitino",slug:"/how-to-install",license:"This software is licensed under the Apache License version 2."},o=void 0,s={id:"how-to-install",title:"How to install Apache Gravitino",description:"Install Apache Gravitino from scratch",source:"@site/docs/how-to-install.md",sourceDirName:".",slug:"/how-to-install",permalink:"/docs/next/how-to-install",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/how-to-install.md",tags:[],version:"current",lastUpdatedBy:"Qian Xia",lastUpdatedAt:1729496081e3,frontMatter:{title:"How to install Apache Gravitino",slug:"/how-to-install",license:"This software is licensed under the Apache License version 2."},sidebar:"docs",previous:{title:"Getting started",permalink:"/docs/next/getting-started"},next:{title:"Iceberg REST catalog service",permalink:"/docs/next/iceberg-rest-service"}},c={},l=[{value:"Install Apache Gravitino from scratch",id:"install-apache-gravitino-from-scratch",level:2},{value:"Get the Apache Gravitino binary distribution package",id:"get-the-apache-gravitino-binary-distribution-package",level:3},{value:"Initialize the RDBMS (Optional)",id:"initialize-the-rdbms-optional",level:4},{value:"Configure the Apache Gravitino server",id:"configure-the-apache-gravitino-server",level:4},{value:"Configure the Apache Gravitino server log",id:"configure-the-apache-gravitino-server-log",level:4},{value:"Configure the Apache Gravitino server environment",id:"configure-the-apache-gravitino-server-environment",level:4},{value:"Configure Apache Gravitino catalogs",id:"configure-apache-gravitino-catalogs",level:4},{value:"Start Apache Gravitino server",id:"start-apache-gravitino-server",level:4},{value:"Manage Gravitino Iceberg REST server in Gravitino package",id:"manage-gravitino-iceberg-rest-server-in-gravitino-package",level:4},{value:"Install Apache Gravitino using Docker",id:"install-apache-gravitino-using-docker",level:2},{value:"Get the Apache Gravitino Docker image",id:"get-the-apache-gravitino-docker-image",level:3},{value:"Install Apache Gravitino using Docker compose",id:"install-apache-gravitino-using-docker-compose",level:2}];function h(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h2,{id:"install-apache-gravitino-from-scratch",children:"Install Apache Gravitino from scratch"}),"\n",(0,r.jsx)(i.admonition,{type:"note",children:(0,r.jsxs)(i.p,{children:["Apache Gravitino supports running on Java 8, 11, and 17. Make sure you have Java installed and\n",(0,r.jsx)(i.code,{children:"JAVA_HOME"})," configured correctly. To confirm the Java version, run the\n",(0,r.jsx)(i.code,{children:"${JAVA_HOME}/bin/java -version"})," command."]})}),"\n",(0,r.jsx)(i.p,{children:"Gravitino package comprises both the Gravitino server and the Gravitino Iceberg REST server. You have the option to manage these servers independently or run them concurrently on a single server."}),"\n",(0,r.jsx)(i.h3,{id:"get-the-apache-gravitino-binary-distribution-package",children:"Get the Apache Gravitino binary distribution package"}),"\n",(0,r.jsxs)(i.p,{children:["Before installing Gravitino, make sure you have the Gravitino binary distribution package. You can\ndownload the latest Gravitino binary distribution package from ",(0,r.jsx)(i.a,{href:"https://github.com/apache/gravitino/releases",children:"GitHub"}),",\nor you can build it yourself by following the instructions in ",(0,r.jsx)(i.a,{href:"/docs/next/how-to-build",children:"How to Build Gravitino"}),"."]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["If you build Gravitino yourself using the ",(0,r.jsx)(i.code,{children:"./gradlew compileDistribution"})," command, you can find the\nGravitino binary distribution package in the ",(0,r.jsx)(i.code,{children:"distribution/package"})," directory."]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["If you build Gravitino yourself using the ",(0,r.jsx)(i.code,{children:"./gradlew assembleDistribution"})," command, you can get the\ncompressed Gravitino binary distribution package with the name ",(0,r.jsx)(i.code,{children:"gravitino-<version>-bin.tar.gz"})," in the\n",(0,r.jsx)(i.code,{children:"distribution"})," directory with sha256 checksum file ",(0,r.jsx)(i.code,{children:"gravitino-<version>-bin.tar.gz.sha256"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:"The Gravitino binary distribution package contains the following files:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-text",children:"|\u2500\u2500 ...\n\u2514\u2500\u2500 distribution/package\n    |\u2500\u2500 bin/\n    |   \u251c\u2500\u2500 gravitino.sh                        # Gravitino server Launching scripts.\n    |   \u2514\u2500\u2500 gravitino-iceberg-rest-server.sh    # Gravitino Iceberg REST server Launching scripts.\n    |\u2500\u2500 catalogs\n    |   \u2514\u2500\u2500 hadoop/                             # Apache Hadoop catalog dependencies and configurations.\n    |   \u2514\u2500\u2500 hive/                               # Apache Hive catalog dependencies and configurations.\n    |   \u2514\u2500\u2500 jdbc-doris/                         # JDBC doris catalog dependencies and configurations.\n    |   \u2514\u2500\u2500 jdbc-mysql/                         # JDBC MySQL catalog dependencies and configurations.\n    |   \u2514\u2500\u2500 jdbc-postgresql/                    # JDBC PostgreSQL catalog dependencies and configurations.\n    |   \u2514\u2500\u2500 kafka/                              # Apache Kafka PostgreSQL catalog dependencies and configurations.\n    |   \u2514\u2500\u2500 lakehouse-iceberg/                  # Apache Iceberg catalog dependencies and configurations.\n    |   \u2514\u2500\u2500 lakehouse-paimon/                   # Apache Paimon catalog dependencies and configurations.\n    |\u2500\u2500 conf/                                   # All configurations for Gravitino.\n    |   \u251c\u2500\u2500 gravitino.conf                      # Gravitino server and Gravitino Iceberg REST server configuration.\n    |   \u251c\u2500\u2500 gravitino-iceberg-rest-server.conf  # Gravitino server configuration.\n    |   \u251c\u2500\u2500 gravitino-env.sh                    # Environment variables, etc., JAVA_HOME, GRAVITINO_HOME, and more.\n    |   \u2514\u2500\u2500 log4j2.properties                   # log4j configuration for the Gravitino server and Gravitino Iceberg REST server.\n    |\u2500\u2500 libs/                                   # Gravitino server dependencies libraries.\n    |\u2500\u2500 logs/                                   # Gravitino server and Gravitino Iceberg REST server logs. Automatically created after the server starts.\n    |\u2500\u2500 data/                                   # Default directory for the Gravitino server to store data.\n    |\u2500\u2500 iceberg-rest-server/                    # Gravitino Iceberg REST server package and dependencies libraries.\n    \u2514\u2500\u2500 scripts/                                # Extra scripts for Gravitino.\n"})}),"\n",(0,r.jsx)(i.h4,{id:"initialize-the-rdbms-optional",children:"Initialize the RDBMS (Optional)"}),"\n",(0,r.jsxs)(i.p,{children:["If you want to use the relational backend storage, you need to initialize the RDBMS firstly. For\nthe details on how to initialize the RDBMS, please check ",(0,r.jsx)(i.a,{href:"/docs/next/how-to-use-relational-backend-storage",children:"How to use relational backend storage"}),"."]}),"\n",(0,r.jsx)(i.h4,{id:"configure-the-apache-gravitino-server",children:"Configure the Apache Gravitino server"}),"\n",(0,r.jsxs)(i.p,{children:["The Gravitino server configuration file is ",(0,r.jsx)(i.code,{children:"conf/gravitino.conf"}),". You can configure the Gravitino\nserver by modifying this file. Basic configurations are already added to this file. All the\nconfigurations are listed in ",(0,r.jsx)(i.a,{href:"/docs/next/gravitino-server-config",children:"Gravitino Server Configurations"}),"."]}),"\n",(0,r.jsx)(i.h4,{id:"configure-the-apache-gravitino-server-log",children:"Configure the Apache Gravitino server log"}),"\n",(0,r.jsxs)(i.p,{children:["The Gravitino server log configuration file is ",(0,r.jsx)(i.code,{children:"conf/log4j2.properties"}),". Gravitino uses Log4j2 as\nthe Logging system. You can ",(0,r.jsx)(i.a,{href:"https://logging.apache.org/log4j/2.x/",children:"Log4j2"})," to\ndo the log configuration."]}),"\n",(0,r.jsx)(i.h4,{id:"configure-the-apache-gravitino-server-environment",children:"Configure the Apache Gravitino server environment"}),"\n",(0,r.jsxs)(i.p,{children:["The Gravitino server environment configuration file is ",(0,r.jsx)(i.code,{children:"conf/gravitino-env.sh"}),". Gravitino exposes\nseveral environment variables. You can modify them in this file."]}),"\n",(0,r.jsx)(i.h4,{id:"configure-apache-gravitino-catalogs",children:"Configure Apache Gravitino catalogs"}),"\n",(0,r.jsxs)(i.p,{children:["Gravitino supports multiple catalogs. You can configure the catalog-level configurations by\nmodifying the related configuration file in the ",(0,r.jsx)(i.code,{children:"catalogs/<catalog-provider>/conf"})," directory. The\nconfigurations you set here apply to all the catalogs of the same type you create."]}),"\n",(0,r.jsxs)(i.p,{children:["For example, if you want to configure the Hive catalog, you can modify the file\n",(0,r.jsx)(i.code,{children:"catalogs/hive/conf/hive.conf"}),". The detailed configurations are listed in the specific catalog\ndocumentation."]}),"\n",(0,r.jsxs)(i.admonition,{type:"note",children:[(0,r.jsx)(i.p,{children:"Gravitino takes the catalog configurations in the following order:"}),(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsxs)(i.li,{children:["Catalog ",(0,r.jsx)(i.code,{children:"properties"})," specified in catalog creation API or REST API."]}),"\n",(0,r.jsx)(i.li,{children:"Catalog configurations specified in the catalog configuration file."}),"\n"]}),(0,r.jsxs)(i.p,{children:["The catalog ",(0,r.jsx)(i.code,{children:"properties"})," can override the catalog configurations specified in the configuration\nfile."]})]}),"\n",(0,r.jsxs)(i.p,{children:["Gravitino supports passing in catalog-specific configurations if you add ",(0,r.jsx)(i.code,{children:"gravitino.bypass."}),". For\nexample, if you want to pass in the HMS-specific configuration\n",(0,r.jsx)(i.code,{children:"hive.metastore.client.capability.check"})," to the underlying Hive client in the Hive catalog, add the ",(0,r.jsx)(i.code,{children:"gravitino.bypass."})," prefix to it."]}),"\n",(0,r.jsxs)(i.p,{children:["Also, Gravitino supports loading catalog specific configurations from external files. For example,\nyou can put your own ",(0,r.jsx)(i.code,{children:"hive-site.xml"})," file in the ",(0,r.jsx)(i.code,{children:"catalogs/hive/conf"})," directory, and Gravitino loads\nit automatically."]}),"\n",(0,r.jsx)(i.h4,{id:"start-apache-gravitino-server",children:"Start Apache Gravitino server"}),"\n",(0,r.jsx)(i.p,{children:"After configuring the Gravitino server, start the Gravitino server on daemon by running:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-shell",children:"./bin/gravitino.sh start\n"})}),"\n",(0,r.jsx)(i.p,{children:"Alternatively, to run the Gravitino server in frontend, please run:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-shell",children:"./bin/gravitino.sh run\n"})}),"\n",(0,r.jsxs)(i.p,{children:["You can access the Gravitino Web UI by typing ",(0,r.jsx)(i.a,{href:"http://localhost:8090",children:"http://localhost:8090"})," in your browser. or you\ncan run"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-shell",children:'curl -v -X GET -H "Accept: application/vnd.gravitino.v1+json" -H "Content-Type: application/json" http://localhost:8090/api/version\n'})}),"\n",(0,r.jsx)(i.p,{children:"to make sure Gravitino is running."}),"\n",(0,r.jsx)(i.admonition,{type:"info",children:(0,r.jsxs)(i.p,{children:["If you need to debug the Gravitino server, enable the ",(0,r.jsx)(i.code,{children:"GRAVITINO_DEBUG_OPTS"})," environment\nvariable in the ",(0,r.jsx)(i.code,{children:"conf/gravitino-env.sh"})," file. Then create a ",(0,r.jsx)(i.code,{children:"Remote JVM Debug"}),"\nconfiguration in ",(0,r.jsx)(i.code,{children:"IntelliJ IDEA"})," and debug ",(0,r.jsx)(i.code,{children:"gravitino.server.main"}),"."]})}),"\n",(0,r.jsx)(i.h4,{id:"manage-gravitino-iceberg-rest-server-in-gravitino-package",children:"Manage Gravitino Iceberg REST server in Gravitino package"}),"\n",(0,r.jsxs)(i.p,{children:["You can run the Iceberg REST server as either a standalone server or as an auxiliary service embedded in the Gravitino server. To start it as a standalone server, use the command ",(0,r.jsx)(i.code,{children:"./bin/gravitino-iceberg-rest-server.sh start"})," with configurations specified in ",(0,r.jsx)(i.code,{children:"./conf/gravitino-iceberg-rest-server.conf"}),". Alternatively, use ",(0,r.jsx)(i.code,{children:"./bin/gravitino.sh start"})," to launch a Gravitino server that integrates both the Iceberg REST service and the Gravitino service, with all configurations centralized in ",(0,r.jsx)(i.code,{children:"conf/gravitino.conf"}),"."]}),"\n",(0,r.jsxs)(i.p,{children:["For more detailed information about the Gravitino Iceberg REST server, please refer to ",(0,r.jsx)(i.a,{href:"/docs/next/iceberg-rest-service",children:"Iceberg REST server document"}),"."]}),"\n",(0,r.jsx)(i.h2,{id:"install-apache-gravitino-using-docker",children:"Install Apache Gravitino using Docker"}),"\n",(0,r.jsx)(i.h3,{id:"get-the-apache-gravitino-docker-image",children:"Get the Apache Gravitino Docker image"}),"\n",(0,r.jsxs)(i.p,{children:["Gravitino publishes the Docker image to ",(0,r.jsx)(i.a,{href:"https://hub.docker.com/r/apache/gravitino/tags",children:"Docker Hub"}),".\nRun the Gravitino Docker image by running:"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-shell",children:"docker run -d -i -p 8090:8090 apache/gravitino:<version>\n"})}),"\n",(0,r.jsxs)(i.p,{children:["Access the Gravitino Web UI by typing ",(0,r.jsx)(i.code,{children:"http://localhost:8090"})," in your browser, or you\ncan run"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-shell",children:'curl -v -X GET -H "Accept: application/vnd.gravitino.v1+json" -H "Content-Type: application/json" http://localhost:8090/api/version\n'})}),"\n",(0,r.jsx)(i.p,{children:"to make sure Gravitino is running."}),"\n",(0,r.jsx)(i.h2,{id:"install-apache-gravitino-using-docker-compose",children:"Install Apache Gravitino using Docker compose"}),"\n",(0,r.jsxs)(i.p,{children:["The published Gravitino Docker image only contains the Gravitino server with basic configurations. If\nyou want to experience the whole Gravitino system with other components, use the Docker\n",(0,r.jsx)(i.code,{children:"compose"})," file."]}),"\n",(0,r.jsxs)(i.p,{children:["For the details, review the\n",(0,r.jsx)(i.a,{href:"https://github.com/apache/gravitino-playground",children:"Gravitino playground repository"})," and\n",(0,r.jsx)(i.a,{href:"/docs/next/how-to-use-the-playground",children:"playground example"}),"."]}),"\n",(0,r.jsx)("img",{src:"https://analytics.apache.org/matomo.php?idsite=62&rec=1&bots=1&action_name=HowToInstall",alt:""})]})}function d(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}}}]);