"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[14972],{17014:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var i=n(79474);const s={},r=i.createContext(s);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:t},e.children)}},53968:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var i=n(13274),s=n(17014);const r={title:"How to use relational backend storage",slug:"/how-to-use-relational-backend-storage",license:"This software is licensed under the Apache License version 2."},a=void 0,o={id:"how-to-use-relational-backend-storage",title:"How to use relational backend storage",description:"Introduction",source:"@site/versioned_docs/version-0.8.0-incubating/how-to-use-relational-backend-storage.md",sourceDirName:".",slug:"/how-to-use-relational-backend-storage",permalink:"/docs/0.8.0-incubating/how-to-use-relational-backend-storage",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/how-to-use-relational-backend-storage.md",tags:[],version:"0.8.0-incubating",lastUpdatedBy:"Justin Mclean",lastUpdatedAt:1740469354e3,frontMatter:{title:"How to use relational backend storage",slug:"/how-to-use-relational-backend-storage",license:"This software is licensed under the Apache License version 2."},sidebar:"docs",previous:{title:"Metrics",permalink:"/docs/0.8.0-incubating/metrics"},next:{title:"Overview",permalink:"/docs/0.8.0-incubating/security/security"}},c={},l=[{value:"Introduction",id:"introduction",level:2},{value:"What kind of backend storage is supported",id:"what-kind-of-backend-storage-is-supported",level:3},{value:"How to use H2",id:"how-to-use-h2",level:2},{value:"How to use MySQL",id:"how-to-use-mysql",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Step 1: Get the initialization script",id:"step-1-get-the-initialization-script",level:3},{value:"Step 2: Initialize the database",id:"step-2-initialize-the-database",level:3},{value:"Step 3: Place the MySQL connector Jar",id:"step-3-place-the-mysql-connector-jar",level:3},{value:"Step 4: Set up the Apache Gravitino server configs",id:"step-4-set-up-the-apache-gravitino-server-configs",level:3},{value:"Step 5: Start the server",id:"step-5-start-the-server",level:3},{value:"How to use PostgreSQL",id:"how-to-use-postgresql",level:2},{value:"Prerequisites",id:"prerequisites-1",level:3},{value:"Step 1: Get the initialization script",id:"step-1-get-the-initialization-script-1",level:3},{value:"Step 2: Initialize the database",id:"step-2-initialize-the-database-1",level:3},{value:"Step 3: Place the PostgreSQL connector Jar",id:"step-3-place-the-postgresql-connector-jar",level:3},{value:"Step 4: Set up the Apache Gravitino server configs",id:"step-4-set-up-the-apache-gravitino-server-configs-1",level:3},{value:"Step 5: Start the server",id:"step-5-start-the-server-1",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsxs)(t.p,{children:["Before the version ",(0,i.jsx)(t.code,{children:"0.6.0-incubating"}),", Apache Gravitino supports KV and Relational backend storage to store metadata.\nSince 0.6.0-incubating, Gravitino only supports using RDBMS as relational backend storage to store metadata. This doc will guide you on how to use the\nrelational backend storage in Gravitino."]}),"\n",(0,i.jsx)(t.p,{children:"Relational backend storage mainly aims to the users who are accustomed to using RDBMS to\nstore data or lack available a KV storage, and want to use Gravitino."}),"\n",(0,i.jsx)(t.p,{children:"With relational backend storage, you can quickly deploy Gravitino in a production environment and\ntake advantage of relational storage to manage metadata."}),"\n",(0,i.jsx)(t.h3,{id:"what-kind-of-backend-storage-is-supported",children:"What kind of backend storage is supported"}),"\n",(0,i.jsxs)(t.p,{children:["Currently, relational backend storage supports the ",(0,i.jsx)(t.code,{children:"JDBCBackend"}),", and ",(0,i.jsx)(t.code,{children:"H2"}),", ",(0,i.jsx)(t.code,{children:"MySQL"})," and ",(0,i.jsx)(t.code,{children:"PostgreSQL"})," are supported currently for ",(0,i.jsx)(t.code,{children:"JDBCBackend"}),", ",(0,i.jsx)(t.code,{children:"H2"})," is the\ndefault storage for ",(0,i.jsx)(t.code,{children:"JDBCBackend"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"how-to-use-h2",children:"How to use H2"}),"\n",(0,i.jsxs)(t.p,{children:["As mentioned above, ",(0,i.jsx)(t.code,{children:"H2"})," is the default storage for ",(0,i.jsx)(t.code,{children:"JDBCBackend"}),", so you can use ",(0,i.jsx)(t.code,{children:"H2"})," directly without any additional configuration."]}),"\n",(0,i.jsx)(t.h2,{id:"how-to-use-mysql",children:"How to use MySQL"}),"\n",(0,i.jsx)(t.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"MySQL 5.7 or 8.0."}),"\n",(0,i.jsx)(t.li,{children:"Gravitino distribution package."}),"\n",(0,i.jsx)(t.li,{children:"MySQL connector Jar (Should be compatible with the version of MySQL instance)."}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"step-1-get-the-initialization-script",children:"Step 1: Get the initialization script"}),"\n",(0,i.jsxs)(t.p,{children:["You need to ",(0,i.jsx)(t.code,{children:"download"})," and ",(0,i.jsx)(t.code,{children:"unzip"})," the distribution package firstly, please see\n",(0,i.jsx)(t.a,{href:"/docs/0.8.0-incubating/how-to-install",children:"How to install Gravitino"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"Then you can get the initialization script in the directory:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:"${GRAVITINO_HOME}/scripts/mysql/\n"})}),"\n",(0,i.jsxs)(t.p,{children:["The script name is like ",(0,i.jsx)(t.code,{children:"schema-{version}-mysql.sql"}),", and the ",(0,i.jsx)(t.code,{children:"version"})," depends on your Gravitino version.\nFor example, if your Gravitino version is ",(0,i.jsx)(t.code,{children:"0.6.0-incubating"}),", then you can choose the ",(0,i.jsx)(t.strong,{children:"latest version"})," script.\nIf you used a legacy script, you can use ",(0,i.jsx)(t.code,{children:"upgrade-{old version}-to-{new version}-mysql.sql"})," to upgrade the schema."]}),"\n",(0,i.jsx)(t.h3,{id:"step-2-initialize-the-database",children:"Step 2: Initialize the database"}),"\n",(0,i.jsx)(t.p,{children:"Please create a database in MySQL in advance, and execute the initialization script obtained above in the database."}),"\n",(0,i.jsx)(t.h3,{id:"step-3-place-the-mysql-connector-jar",children:"Step 3: Place the MySQL connector Jar"}),"\n",(0,i.jsxs)(t.p,{children:["You should ",(0,i.jsx)(t.strong,{children:"download"})," the MySQL connector Jar for the corresponding version of MySQL you use\n(You can download it from the ",(0,i.jsx)(t.a,{href:"https://repo1.maven.org/maven2/mysql/mysql-connector-java/",children:"maven-central-repo"}),"),\nwhich is name like ",(0,i.jsx)(t.code,{children:"mysql-connector-java-{version}.jar"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"Then please place it in the distribution package directory:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:"${GRAVITINO_HOME}/libs/\n"})}),"\n",(0,i.jsx)(t.h3,{id:"step-4-set-up-the-apache-gravitino-server-configs",children:"Step 4: Set up the Apache Gravitino server configs"}),"\n",(0,i.jsxs)(t.p,{children:["Find the server configuration file which name is ",(0,i.jsx)(t.code,{children:"gravitino.conf"})," in the distribution package directory:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:"${GRAVITINO_HOME}/conf/\n"})}),"\n",(0,i.jsx)(t.p,{children:"Then set up the following server configs:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:"gravitino.entity.store = relational\ngravitino.entity.store.relational = JDBCBackend\ngravitino.entity.store.relational.jdbcUrl = ${your_jdbc_url}\ngravitino.entity.store.relational.jdbcDriver = ${your_driver_name}\ngravitino.entity.store.relational.jdbcUser = ${your_username}\ngravitino.entity.store.relational.jdbcPassword = ${your_password}\n"})}),"\n",(0,i.jsx)(t.h3,{id:"step-5-start-the-server",children:"Step 5: Start the server"}),"\n",(0,i.jsx)(t.p,{children:"Finally, you can run the script in the distribution package directory to start the server:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"./${GRAVITINO_HOME}/bin/gravitino.sh start\n"})}),"\n",(0,i.jsx)(t.h2,{id:"how-to-use-postgresql",children:"How to use PostgreSQL"}),"\n",(0,i.jsx)(t.h3,{id:"prerequisites-1",children:"Prerequisites"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"PostgreSQL 12 ~ 16. For other versions, the community has not tested fully and may not be compatible."}),"\n",(0,i.jsxs)(t.li,{children:["Gravitino distribution package with version ",(0,i.jsx)(t.code,{children:"0.7.0"})," or above."]}),"\n",(0,i.jsx)(t.li,{children:"PostgreSQL connector Jar (Should be compatible with the version of PostgreSQL instance)."}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"step-1-get-the-initialization-script-1",children:"Step 1: Get the initialization script"}),"\n",(0,i.jsxs)(t.p,{children:["You need to ",(0,i.jsx)(t.code,{children:"download"})," and ",(0,i.jsx)(t.code,{children:"unzip"})," the distribution package firstly, please see\n",(0,i.jsx)(t.a,{href:"/docs/0.8.0-incubating/how-to-install",children:"How to install Gravitino"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"Then you can get the initialization script in the directory:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:"${GRAVITINO_HOME}/scripts/postgresql/\n"})}),"\n",(0,i.jsxs)(t.p,{children:["The script name is like ",(0,i.jsx)(t.code,{children:"schema-{version}-postgresql.sql"}),", and the ",(0,i.jsx)(t.code,{children:"version"})," depends on your Gravitino version.\nFor example, if your Gravitino version is the latest release version, then you can choose the ",(0,i.jsx)(t.strong,{children:"latest version"})," script.\nIf you used a legacy script, you can use ",(0,i.jsx)(t.code,{children:"upgrade-{old version}-to-{new version}-postgresql.sql"})," to upgrade the schema."]}),"\n",(0,i.jsx)(t.h3,{id:"step-2-initialize-the-database-1",children:"Step 2: Initialize the database"}),"\n",(0,i.jsx)(t.p,{children:"Please create a database and schema in PostgreSQL in advance, and execute the initialization script obtained above in the database."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-postgresql",children:"psql --username=postgres --password \npassword:\n\ncreate database your_database;\n\\c your_database\ncreate schema your_schema;\nset search_path to your_schema;\n\\i schema-{version}-postgresql.sql\n"})}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"Database and schema are required parameters in the Gravitino PostgreSQL JDBC URL, Users should\ncreate them in advance and set the database and schema in the JDBC URL."})}),"\n",(0,i.jsx)(t.h3,{id:"step-3-place-the-postgresql-connector-jar",children:"Step 3: Place the PostgreSQL connector Jar"}),"\n",(0,i.jsxs)(t.p,{children:["You should ",(0,i.jsx)(t.strong,{children:"download"})," the PostgreSQL connector Jar for the corresponding version of PostgreSQL you use\n(You can download it from the ",(0,i.jsx)(t.a,{href:"https://jdbc.postgresql.org/download/postgresql-42.7.0.jar",children:"PostgreSQL-driver-jar"}),"),\nwhich is name like ",(0,i.jsx)(t.code,{children:"postgresql-{version}.jar"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"Then please place it in the distribution package directory:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:"${GRAVITINO_HOME}/libs/\n"})}),"\n",(0,i.jsx)(t.h3,{id:"step-4-set-up-the-apache-gravitino-server-configs-1",children:"Step 4: Set up the Apache Gravitino server configs"}),"\n",(0,i.jsxs)(t.p,{children:["Find the server configuration file which name is ",(0,i.jsx)(t.code,{children:"gravitino.conf"})," in the distribution package directory:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:"${GRAVITINO_HOME}/conf/\n"})}),"\n",(0,i.jsx)(t.p,{children:"Then set up the following server configs:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:"gravitino.entity.store = relational\ngravitino.entity.store.relational = JDBCBackend\n\n## JDBC URL such as: jdbc:postgresql://localhost:5432/your_database?currentSchema=your_schema\ngravitino.entity.store.relational.jdbcUrl = ${your_jdbc_url}\n\n## JDBC driver name such as: org.postgresql.Driver\ngravitino.entity.store.relational.jdbcDriver = ${your_driver_name}\n\ngravitino.entity.store.relational.jdbcUser = ${your_username}\ngravitino.entity.store.relational.jdbcPassword = ${your_password}\n"})}),"\n",(0,i.jsx)(t.h3,{id:"step-5-start-the-server-1",children:"Step 5: Start the server"}),"\n",(0,i.jsx)(t.p,{children:"Please see the above steps in the MySQL section."})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);