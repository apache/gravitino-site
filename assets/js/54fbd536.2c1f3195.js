"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[43634],{17014:(n,e,i)=>{i.d(e,{R:()=>c,x:()=>s});var o=i(79474);const r={},t=o.createContext(r);function c(n){const e=o.useContext(t);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),o.createElement(t.Provider,{value:e},n.children)}},84197:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>d});var o=i(13274),r=i(17014);const t={title:"Apache Gravitino connector Trino cascading query",slug:"/trino-connector/trino-cascading-query",keyword:"gravitino connector trino",license:"This software is licensed under the Apache License version 2."},c="Background",s={id:"trino-connector/trino-cascading-query",title:"Apache Gravitino connector Trino cascading query",description:"With the Apache Gravitino Trino connector and the Gravitino Trino cascading connector, you can implement cascading queries in Trino.",source:"@site/versioned_docs/version-0.8.0-incubating/trino-connector/trino-cascading-query.md",sourceDirName:"trino-connector",slug:"/trino-connector/trino-cascading-query",permalink:"/docs/0.8.0-incubating/trino-connector/trino-cascading-query",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/trino-connector/trino-cascading-query.md",tags:[],version:"0.8.0-incubating",lastUpdatedBy:"Justin Mclean",lastUpdatedAt:1740469354e3,frontMatter:{title:"Apache Gravitino connector Trino cascading query",slug:"/trino-connector/trino-cascading-query",keyword:"gravitino connector trino",license:"This software is licensed under the Apache License version 2."}},a={},d=[{value:"Deploying Trino",id:"deploying-trino-1",level:2},{value:"Deploying Trino in Containers",id:"deploying-trino-in-containers",level:2},{value:"Configuring Trino",id:"configuring-trino",level:2},{value:"Creating Catalogs",id:"creating-catalogs",level:2},{value:"Adding Data",id:"adding-data",level:2},{value:"Query Verification",id:"query-verification",level:2}];function l(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"background",children:"Background"}),"\n",(0,o.jsxs)(e.p,{children:["With the ",(0,o.jsx)(e.code,{children:"Apache Gravitino Trino connector"})," and the ",(0,o.jsx)(e.a,{href:"https://github.com/datastrato/trino-cascading-connector",children:(0,o.jsx)(e.code,{children:"Gravitino Trino cascading connector"})}),", you can implement cascading queries in Trino.\nThese connectors allow you to treat other Trino clusters as data sources for the current Trino cluster,\nenabling queries across catalogs in different Trino clusters."]}),"\n",(0,o.jsx)(e.p,{children:"This mechanism prioritizes executing queries in the Trino cluster located in the same region as the data,\nbased on the data distribution in the catalogs. By doing so, it significantly reduces the amount of data\ntransferred over the network, addressing the performance issues commonly found in traditional federated query engines\nwhere large volumes of data need to be transmitted across networks."}),"\n",(0,o.jsx)(e.h1,{id:"deploying-trino",children:"Deploying Trino"}),"\n",(0,o.jsx)(e.h2,{id:"deploying-trino-1",children:"Deploying Trino"}),"\n",(0,o.jsxs)(e.p,{children:["To set up the Trino cascading query environment, you should first deploy at least two Trino environments.\nNext, install the ",(0,o.jsx)(e.code,{children:"Apache Gravitino Trino connector"})," plugin and ",(0,o.jsx)(e.code,{children:"Gravitino Trino cascading connector"})," plugin into Trino.\nFor detailed steps, please refer to the ",(0,o.jsx)(e.a,{href:"/docs/0.8.0-incubating/trino-connector/installation",children:"Deploying Trino documentation"}),"."]}),"\n",(0,o.jsx)(e.p,{children:"Follow these steps:"}),"\n",(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.a,{href:"https://github.com/apache/gravitino/releases",children:"Download"})," the ",(0,o.jsx)(e.code,{children:"Apache Gravitino Trino connector"})," tarball and unpack it.\nThe tarball contains a single top-level directory named ",(0,o.jsx)(e.code,{children:"gravitino-trino-connector-<version>"}),". Rename this directory to ",(0,o.jsx)(e.code,{children:"gravitino"}),"."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.a,{href:"https://github.com/datastrato/trino-cascading-connector/releases",children:"Download"})," the ",(0,o.jsx)(e.code,{children:"Gravitino Trino cascading connector"})," tarball and unpack it.\nThis tarball also contains a single top-level directory named ",(0,o.jsx)(e.code,{children:"gravitino-trino-cascading-connector-<version>"}),". Rename this directory to ",(0,o.jsx)(e.code,{children:"trino"}),"."]}),"\n",(0,o.jsxs)(e.li,{children:["Copy both connector directories to Trino's plugin directory.\nTypically, this directory is located at ",(0,o.jsx)(e.code,{children:"Trino-server-<version>/plugin"})," and contains other catalogs used by Trino."]}),"\n"]}),"\n",(0,o.jsxs)(e.p,{children:["Ensure that the ",(0,o.jsx)(e.code,{children:"plugin"})," directory includes the ",(0,o.jsx)(e.code,{children:"gravitino"})," and ",(0,o.jsx)(e.code,{children:"trino"})," subdirectories.\nVerify the network connectivity between the machines hosting the two Trino clusters, identified as ",(0,o.jsx)(e.code,{children:"c1-trino"})," and ",(0,o.jsx)(e.code,{children:"c2-trino"}),"."]}),"\n",(0,o.jsx)(e.h2,{id:"deploying-trino-in-containers",children:"Deploying Trino in Containers"}),"\n",(0,o.jsxs)(e.p,{children:["Download the ",(0,o.jsx)(e.code,{children:"Apache Gravitino Trino connector"})," tarball and ",(0,o.jsx)(e.code,{children:"Gravitino Trino cascading connector"})," tarball, then unpack them.\nAfter unpacking, you will find the directories named ",(0,o.jsx)(e.code,{children:"gravitino-trino-connector-<version>"}),"\nand ",(0,o.jsx)(e.code,{children:"gravitino-trino-cascading-connector-<version>"}),"."]}),"\n",(0,o.jsxs)(e.p,{children:["To start Trino on the host ",(0,o.jsx)(e.code,{children:"c1-trino"})," and mount the plugins, execute the following command:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:"docker run --name c1-trino -d -p 8080:8080 <image-name> -v `gravitino-trino-connector-<version>`:/usr/lib/trino/plugin/gravitino \\\n-v `gravitino-trino-cascading-connector-<version>`:/usr/lib/trino/plugin/trino\n\n"})}),"\n",(0,o.jsxs)(e.p,{children:["Similarly, to start Trino on the host ",(0,o.jsx)(e.code,{children:"c2-trino"})," and mount the plugins, use:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:"docker run --name c2-trino -d -p 8080:8080 <image-name> -v `gravitino-trino-connector-<version>`:/usr/lib/trino/plugin/gravitino \\\n-v `gravitino-trino-cascading-connector-<version>`:/usr/lib/trino/plugin/trino\n"})}),"\n",(0,o.jsxs)(e.p,{children:["After starting the Trino containers, ensure the configuration directory ",(0,o.jsx)(e.code,{children:"/etc/trino"})," is correctly set up.\nAlso, verify that the Trino containers on ",(0,o.jsx)(e.code,{children:"c1-trino"})," and ",(0,o.jsx)(e.code,{children:"c2-trino"})," can communicate with each other over the network."]}),"\n",(0,o.jsx)(e.h2,{id:"configuring-trino",children:"Configuring Trino"}),"\n",(0,o.jsxs)(e.p,{children:["For detailed instructions on configuring Trino, please refer to the ",(0,o.jsx)(e.a,{href:"https://trino.io/docs/current/installation/deployment.html#configuring-trino",children:"Trino documentation"}),".\nAfter completing the basic configuration, proceed to configure the Gravitino connector.\nCreate a ",(0,o.jsx)(e.code,{children:"gravitino.properties"})," file in the ",(0,o.jsx)(e.code,{children:"etc/catalog"})," directory on the ",(0,o.jsx)(e.code,{children:"c1-trino"})," host with the following contents:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-text",children:"connector.name = gravitino\ngravitino.uri = http://GRAVITINO_HOST_IP:GRAVITINO_HOST_PORT\ngravitino.metalake = GRAVITINO_METALAKE_NAME\ngravitino.cloud.region-code=c1\n"})}),"\n",(0,o.jsxs)(e.p,{children:["The property ",(0,o.jsx)(e.code,{children:"gravitino.cloud.region-code=c1"})," specifies that the ",(0,o.jsx)(e.code,{children:"c1-trino"})," host is in the ",(0,o.jsx)(e.code,{children:"c1"})," region,\nwhich will handle queries for catalogs in the ",(0,o.jsx)(e.code,{children:"c1"})," region. For handling queries in the ",(0,o.jsx)(e.code,{children:"c2"})," region,\nthey will be delegated to the ",(0,o.jsx)(e.code,{children:"c2-trino"})," host."]}),"\n",(0,o.jsxs)(e.p,{children:["Similarly, on the ",(0,o.jsx)(e.code,{children:"c2-trino"})," host, create a ",(0,o.jsx)(e.code,{children:"gravitino.properties"})," file in the ",(0,o.jsx)(e.code,{children:"etc/catalog directory"}),":"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-test",children:"connector.name = gravitino\ngravitino.uri = http://GRAVITINO_HOST_IP:GRAVITINO_HOST_PORT\ngravitino.metalake = GRAVITINO_METALAKE_NAME\ngravitino.cloud.region-code=c2\n"})}),"\n",(0,o.jsxs)(e.p,{children:["The ",(0,o.jsx)(e.code,{children:"gravitino.cloud.region-code=c2"})," indicates that the ",(0,o.jsx)(e.code,{children:"c2-trino"})," host is designated for the ",(0,o.jsx)(e.code,{children:"c2"})," region,\nthus queries for catalogs in this region will execute on c2-trino."]}),"\n",(0,o.jsxs)(e.p,{children:["Ensure that the ",(0,o.jsx)(e.code,{children:"gravitino.uri"})," setting on both ",(0,o.jsx)(e.code,{children:"c1-trino"})," and ",(0,o.jsx)(e.code,{children:"c2-trino"})," points to the same Gravitino server.\nVerify that the server is operational and properly connected. Restart Trino after making any configuration changes."]}),"\n",(0,o.jsx)(e.h2,{id:"creating-catalogs",children:"Creating Catalogs"}),"\n",(0,o.jsxs)(e.p,{children:["To verify federated queries, create catalogs.\nBelow is an example using the ",(0,o.jsx)(e.code,{children:"gt_mysql"})," catalog in the ",(0,o.jsx)(e.code,{children:"c2"})," region, configured for federated querying from ",(0,o.jsx)(e.code,{children:"c1-trino"}),".\nExecute the following command in the ",(0,o.jsx)(e.code,{children:"c1-trino"})," CLI to create the catalog:"]}),"\n",(0,o.jsxs)(e.p,{children:["To verify federated queries, start by creating catalogs. Below is an example of configuring the ",(0,o.jsx)(e.code,{children:"gt_mysql"})," catalog\nin the ",(0,o.jsx)(e.code,{children:"c2"})," region for federated querying from ",(0,o.jsx)(e.code,{children:"c1-trino"}),".\nExecute the following command in the ",(0,o.jsx)(e.code,{children:"c1-trino"})," CLI to create the catalog:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-sql",children:"CALL gravitino.system.create_catalog(\n    'gt_mysql',\n    'jdbc-mysql',\n    MAP(\n        ARRAY['jdbc-url', 'jdbc-user', 'jdbc-password', 'jdbc-driver', 'cloud.region-code', 'cloud.trino.connection-url', 'cloud.trino.connection-user', 'cloud.trino.connection-password'],\n        ARRAY['${mysql_uri}/?useSSL=false', 'trino', 'ds123', 'com.mysql.cj.jdbc.Driver', 'c2', 'jdbc:trino://c2-trino:8080', 'admin', '']\n    )\n);\n"})}),"\n",(0,o.jsx)(e.p,{children:"Where:"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"cloud.region-code"})," specifies that the ",(0,o.jsx)(e.code,{children:"gt_mysql"})," catalog is in the ",(0,o.jsx)(e.code,{children:"c2"})," region."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"cloud.trino.connection-url"})," specifies the Trino JDBC connection URL for the Trino in ",(0,o.jsx)(e.code,{children:"c2"})," region."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"cloud.trino.connection-user"})," specifies the Trino JDBC user for the Trino in ",(0,o.jsx)(e.code,{children:"c2"})," region."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"cloud.trino.connection-password"})," specifies the Trino JDBC user password for the Trino in ",(0,o.jsx)(e.code,{children:"c2"})," region."]}),"\n"]}),"\n",(0,o.jsxs)(e.p,{children:["This configuration enables ",(0,o.jsx)(e.code,{children:"c1-trino"})," to access ",(0,o.jsx)(e.code,{children:"c2-trino"})," through the specified Trino JDBC connection information.\nAfter successfully creating the catalog, use the Trino CLI on both ",(0,o.jsx)(e.code,{children:"c1-trino"})," and ",(0,o.jsx)(e.code,{children:"c2-trino"})," to view the catalogs."]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-sql",children:"SHOW CATALOGS;\n"})}),"\n",(0,o.jsx)(e.h2,{id:"adding-data",children:"Adding Data"}),"\n",(0,o.jsxs)(e.p,{children:["After creating the catalog, the next step is to add data to verify queries. Since the ",(0,o.jsx)(e.code,{children:"Gravitino Trino cascading connector"}),"\ndoes not support data writing directly, execute the following commands using the ",(0,o.jsx)(e.code,{children:"c2-trino"})," CLI to set up your data environment:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-sql",children:"CREATE SCHEMA gt_mysql.gt_db1;\n\nCREATE TABLE gt_mysql.gt_db1.tb01 (\n    name VARCHAR(255),\n    salary INT\n);\n\nINSERT INTO gt_mysql.gt_db1.tb01(name, salary) VALUES ('sam', 11);\nINSERT INTO gt_mysql.gt_db1.tb01(name, salary) VALUES ('jerry', 13);\nINSERT INTO gt_mysql.gt_db1.tb01(name, salary) VALUES ('bob', 14), ('tom', 12);\n"})}),"\n",(0,o.jsx)(e.h2,{id:"query-verification",children:"Query Verification"}),"\n",(0,o.jsxs)(e.p,{children:["After successfully inserting the data, execute the following query using the ",(0,o.jsx)(e.code,{children:"c1-trino"})," CLI:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-sql",children:"SELECT * FROM gt_mysql.gt_db1.tb01 ORDER BY name;\n"})}),"\n",(0,o.jsxs)(e.p,{children:["Verify the query results using the ",(0,o.jsx)(e.code,{children:"c2-trino"})," CLI:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-sql",children:"SELECT * FROM gt_mysql.gt_db1.tb01 ORDER BY name;\n"})}),"\n",(0,o.jsxs)(e.p,{children:["The output of the ",(0,o.jsx)(e.code,{children:"c1-trino"})," CLI is the same as ",(0,o.jsx)(e.code,{children:"c2-trino"}),"."]})]})}function h(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(l,{...n})}):l(n)}}}]);