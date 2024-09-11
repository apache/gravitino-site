"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[2821],{55204:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var i=n(13274),a=n(78140);const s={title:"How to use relational backend storage",slug:"/how-to-use-relational-backend-storage",license:"This software is licensed under the Apache License version 2."},r=void 0,o={id:"how-to-use-relational-backend-storage",title:"How to use relational backend storage",description:"Introduction",source:"@site/docs/how-to-use-relational-backend-storage.md",sourceDirName:".",slug:"/how-to-use-relational-backend-storage",permalink:"/docs/next/how-to-use-relational-backend-storage",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/how-to-use-relational-backend-storage.md",tags:[],version:"current",lastUpdatedBy:"Qian Xia",lastUpdatedAt:1726031142e3,frontMatter:{title:"How to use relational backend storage",slug:"/how-to-use-relational-backend-storage",license:"This software is licensed under the Apache License version 2."},sidebar:"docs",previous:{title:"Metrics",permalink:"/docs/next/metrics"},next:{title:"Overview",permalink:"/docs/next/security/security"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"What kind of backend storage is supported",id:"what-kind-of-backend-storage-is-supported",level:3},{value:"How to use MySQL",id:"how-to-use-mysql",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Step 1: Get the initialization script",id:"step-1-get-the-initialization-script",level:3},{value:"Step 2: Initialize the database",id:"step-2-initialize-the-database",level:3},{value:"Step 3: Place the MySQL connector Jar",id:"step-3-place-the-mysql-connector-jar",level:3},{value:"Step 4: Set up the Apache Gravitino server configs",id:"step-4-set-up-the-apache-gravitino-server-configs",level:3},{value:"Step 5: Start the server",id:"step-5-start-the-server",level:3},{value:"How to use H2",id:"how-to-use-h2",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsxs)(t.p,{children:["Before the version ",(0,i.jsx)(t.code,{children:"0.6.0"}),", Apache Gravitino supports KV and Relational backend storage to store metadata.\nSince 0.6.0, Gravitino only supports using RDBMS as relational backend storage to store metadata. This doc will guide you on how to use the\nrelational backend storage in Gravitino."]}),"\n",(0,i.jsx)(t.p,{children:"Relational backend storage mainly aims to the users who are accustomed to using RDBMS to\nstore data or lack available a KV storage, and want to use Gravitino."}),"\n",(0,i.jsx)(t.p,{children:"With relational backend storage, you can quickly deploy Gravitino in a production environment and\ntake advantage of relational storage to manage metadata."}),"\n",(0,i.jsx)(t.h3,{id:"what-kind-of-backend-storage-is-supported",children:"What kind of backend storage is supported"}),"\n",(0,i.jsxs)(t.p,{children:["Currently, relational backend storage supports the ",(0,i.jsx)(t.code,{children:"JDBCBackend"}),", and ",(0,i.jsx)(t.code,{children:"MySQL"})," and ",(0,i.jsx)(t.code,{children:"H2"})," are supported currently for ",(0,i.jsx)(t.code,{children:"JDBCBackend"}),", ",(0,i.jsx)(t.code,{children:"H2"})," is the\ndefault storage for ",(0,i.jsx)(t.code,{children:"JDBCBackend"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"how-to-use-mysql",children:"How to use MySQL"}),"\n",(0,i.jsx)(t.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"MySQL 5.7 or 8.0."}),"\n",(0,i.jsx)(t.li,{children:"Gravitino distribution package."}),"\n",(0,i.jsx)(t.li,{children:"MySQL connector Jar (Should be compatible with the version of MySQL instance)."}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"step-1-get-the-initialization-script",children:"Step 1: Get the initialization script"}),"\n",(0,i.jsxs)(t.p,{children:["You need to ",(0,i.jsx)(t.code,{children:"download"})," and ",(0,i.jsx)(t.code,{children:"unzip"})," the distribution package firstly, please see\n",(0,i.jsx)(t.a,{href:"/docs/next/how-to-install",children:"How to install Gravitino"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"Then you can get the initialization script in the directory:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:"${GRAVITINO_HOME}/scripts/mysql/\n"})}),"\n",(0,i.jsxs)(t.p,{children:["The script name is like ",(0,i.jsx)(t.code,{children:"schema-{version}-mysql.sql"}),", and the ",(0,i.jsx)(t.code,{children:"version"})," depends on your Gravitino version.\nFor example, if your Gravitino version is ",(0,i.jsx)(t.code,{children:"0.6.0"}),", then you can choose the ",(0,i.jsx)(t.strong,{children:"latest version"})," script.\nIf you used a legacy script, you can use ",(0,i.jsx)(t.code,{children:"upgrade-{old version}-to-{new version}-mysql.sql"})," to upgrade the schema."]}),"\n",(0,i.jsx)(t.h3,{id:"step-2-initialize-the-database",children:"Step 2: Initialize the database"}),"\n",(0,i.jsx)(t.p,{children:"Please create a database in MySQL in advance, and execute the initialization script obtained above in the database."}),"\n",(0,i.jsx)(t.h3,{id:"step-3-place-the-mysql-connector-jar",children:"Step 3: Place the MySQL connector Jar"}),"\n",(0,i.jsxs)(t.p,{children:["You should ",(0,i.jsx)(t.strong,{children:"download"})," the MySQL connector Jar for the corresponding version of MySQL you use\n(You can download it from the ",(0,i.jsx)(t.a,{href:"https://repo1.maven.org/maven2/mysql/mysql-connector-java/",children:"maven-central-repo"}),"),\nwhich is name like ",(0,i.jsx)(t.code,{children:"mysql-connector-java-{version}.jar"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"Then please place it in the distribution package directory:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:"${GRAVITINO_HOME}/libs/\n"})}),"\n",(0,i.jsx)(t.h3,{id:"step-4-set-up-the-apache-gravitino-server-configs",children:"Step 4: Set up the Apache Gravitino server configs"}),"\n",(0,i.jsxs)(t.p,{children:["Find the server configuration file which name is ",(0,i.jsx)(t.code,{children:"gravitino.conf"})," in the distribution package directory:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:"${GRAVITINO_HOME}/conf/\n"})}),"\n",(0,i.jsx)(t.p,{children:"Then set up the following server configs:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:"gravitino.entity.store = relational\ngravitino.entity.store.relational = JDBCBackend\ngravitino.entity.store.relational.jdbcUrl = ${your_jdbc_url}\ngravitino.entity.store.relational.jdbcDriver = ${your_driver_name}\ngravitino.entity.store.relational.jdbcUser = ${your_username}\ngravitino.entity.store.relational.jdbcPassword = ${your_password}\n"})}),"\n",(0,i.jsx)(t.h3,{id:"step-5-start-the-server",children:"Step 5: Start the server"}),"\n",(0,i.jsx)(t.p,{children:"Finally, you can run the script in the distribution package directory to start the server:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"./${GRAVITINO_HOME}/bin/gravitino.sh start\n"})}),"\n",(0,i.jsx)(t.h2,{id:"how-to-use-h2",children:"How to use H2"}),"\n",(0,i.jsxs)(t.p,{children:["As mentioned above, ",(0,i.jsx)(t.code,{children:"H2"})," is the default storage for ",(0,i.jsx)(t.code,{children:"JDBCBackend"}),", so you can use ",(0,i.jsx)(t.code,{children:"H2"})," directly without any additional configuration."]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);