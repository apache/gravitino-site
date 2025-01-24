"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[32286],{68771:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>c,default:()=>l,frontMatter:()=>s,metadata:()=>o,toc:()=>h});var i=t(13274),n=t(38389);const s={title:"Spark authentication with Gravitino server",slug:"/spark-connector/spark-authentication",keyword:"spark connector authentication oauth2 kerberos",license:"This software is licensed under the Apache License version 2."},c=void 0,o={id:"spark-connector/spark-authentication-with-gravitino",title:"Spark authentication with Gravitino server",description:"Overview",source:"@site/docs/spark-connector/spark-authentication-with-gravitino.md",sourceDirName:"spark-connector",slug:"/spark-connector/spark-authentication",permalink:"/docs/next/spark-connector/spark-authentication",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/spark-connector/spark-authentication-with-gravitino.md",tags:[],version:"current",lastUpdatedBy:"FANNG",lastUpdatedAt:1737701155e3,frontMatter:{title:"Spark authentication with Gravitino server",slug:"/spark-connector/spark-authentication",keyword:"spark connector authentication oauth2 kerberos",license:"This software is licensed under the Apache License version 2."},sidebar:"docs",previous:{title:"Iceberg",permalink:"/docs/next/spark-connector/spark-catalog-iceberg"},next:{title:"Overview",permalink:"/docs/next/flink-connector/flink-connector"}},d={},h=[{value:"Overview",id:"overview",level:2},{value:"Simple mode",id:"simple-mode",level:2},{value:"OAuth2 mode",id:"oauth2-mode",level:2},{value:"Kerberos mode",id:"kerberos-mode",level:2}];function a(e){const r={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(r.p,{children:["Spark connector supports ",(0,i.jsx)(r.code,{children:"simple"})," ",(0,i.jsx)(r.code,{children:"oauth2"})," and ",(0,i.jsx)(r.code,{children:"kerberos"})," authentication when accessing Gravitino server."]}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Property"}),(0,i.jsx)(r.th,{children:"Type"}),(0,i.jsx)(r.th,{children:"Default Value"}),(0,i.jsx)(r.th,{children:"Description"}),(0,i.jsx)(r.th,{children:"Required"}),(0,i.jsx)(r.th,{children:"Since Version"})]})}),(0,i.jsx)(r.tbody,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"spark.sql.gravitino.authType"}),(0,i.jsx)(r.td,{children:"string"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"simple"})}),(0,i.jsxs)(r.td,{children:["The authentication mechanisms when communicating with Gravitino server, supports ",(0,i.jsx)(r.code,{children:"simple"}),", ",(0,i.jsx)(r.code,{children:"oauth2"})," and ",(0,i.jsx)(r.code,{children:"kerberos"}),"."]}),(0,i.jsx)(r.td,{children:"No"}),(0,i.jsx)(r.td,{children:"0.7.0-incubating"})]})})]}),"\n",(0,i.jsx)(r.h2,{id:"simple-mode",children:"Simple mode"}),"\n",(0,i.jsx)(r.p,{children:"In the simple mode, the username originates from Spark, and is obtained using the following sequences:"}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:["The environment variable of ",(0,i.jsx)(r.code,{children:"SPARK_USER"})]}),"\n",(0,i.jsxs)(r.li,{children:["The environment variable of ",(0,i.jsx)(r.code,{children:"HADOOP_USER_NAME"})]}),"\n",(0,i.jsx)(r.li,{children:"The user login in the machine"}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"oauth2-mode",children:"OAuth2 mode"}),"\n",(0,i.jsx)(r.p,{children:"In the OAuth2 mode, you could use the following configuration to fetch an OAuth2 token to access Gravitino server."}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Property"}),(0,i.jsx)(r.th,{children:"Type"}),(0,i.jsx)(r.th,{children:"Default Value"}),(0,i.jsx)(r.th,{children:"Description"}),(0,i.jsx)(r.th,{children:"Required"}),(0,i.jsx)(r.th,{children:"Since Version"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"spark.sql.gravitino.oauth2.serverUri"}),(0,i.jsx)(r.td,{children:"string"}),(0,i.jsx)(r.td,{children:"None"}),(0,i.jsx)(r.td,{children:"The OAuth2 server uri address."}),(0,i.jsx)(r.td,{children:"Yes, for OAuth2 mode"}),(0,i.jsx)(r.td,{children:"0.7.0-incubating"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"spark.sql.gravitino.oauth2.tokenPath"}),(0,i.jsx)(r.td,{children:"string"}),(0,i.jsx)(r.td,{children:"None"}),(0,i.jsx)(r.td,{children:"The path of token interface in OAuth2 server."}),(0,i.jsx)(r.td,{children:"Yes, for OAuth2 mode"}),(0,i.jsx)(r.td,{children:"0.7.0-incubating"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"spark.sql.gravitino.oauth2.credential"}),(0,i.jsx)(r.td,{children:"string"}),(0,i.jsx)(r.td,{children:"None"}),(0,i.jsx)(r.td,{children:"The credential to request the OAuth2 token."}),(0,i.jsx)(r.td,{children:"Yes, for OAuth2 mode"}),(0,i.jsx)(r.td,{children:"0.7.0-incubating"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"spark.sql.gravitino.oauth2.scope"}),(0,i.jsx)(r.td,{children:"string"}),(0,i.jsx)(r.td,{children:"None"}),(0,i.jsx)(r.td,{children:"The scope to request the OAuth2 token."}),(0,i.jsx)(r.td,{children:"Yes, for OAuth2 mode"}),(0,i.jsx)(r.td,{children:"0.7.0-incubating"})]})]})]}),"\n",(0,i.jsx)(r.h2,{id:"kerberos-mode",children:"Kerberos mode"}),"\n",(0,i.jsxs)(r.p,{children:["In kerberos mode, you could use the Spark kerberos configuration to fetch a kerberos ticket to access Gravitino server, use ",(0,i.jsx)(r.code,{children:"spark.kerberos.principal"}),", ",(0,i.jsx)(r.code,{children:"spark.kerberos.keytab"})," to specify kerberos principal and keytab."]}),"\n",(0,i.jsxs)(r.p,{children:["The principal of Gravitino server is like ",(0,i.jsx)(r.code,{children:"HTTP/$host@$realm"}),", please keep the ",(0,i.jsx)(r.code,{children:"$host"})," consistent with the host in Gravitino server uri address.\nPlease make sure ",(0,i.jsx)(r.code,{children:"krb5.conf"})," is accessible by Spark, like by specifying the configuration ",(0,i.jsx)(r.code,{children:'spark.driver.extraJavaOptions="-Djava.security.krb5.conf=/xx/krb5.conf"'}),"."]})]})}function l(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}}}]);