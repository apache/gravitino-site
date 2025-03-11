"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[32286],{5842:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>l,frontMatter:()=>s,metadata:()=>c,toc:()=>h});var r=n(13274),i=n(17014);const s={title:"Spark authentication with Gravitino server",slug:"/spark-connector/spark-authentication",keyword:"spark connector authentication oauth2 kerberos",license:"This software is licensed under the Apache License version 2."},o=void 0,c={id:"spark-connector/spark-authentication-with-gravitino",title:"Spark authentication with Gravitino server",description:"Overview",source:"@site/docs/spark-connector/spark-authentication-with-gravitino.md",sourceDirName:"spark-connector",slug:"/spark-connector/spark-authentication",permalink:"/docs/next/spark-connector/spark-authentication",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/spark-connector/spark-authentication-with-gravitino.md",tags:[],version:"current",frontMatter:{title:"Spark authentication with Gravitino server",slug:"/spark-connector/spark-authentication",keyword:"spark connector authentication oauth2 kerberos",license:"This software is licensed under the Apache License version 2."},sidebar:"docs",previous:{title:"Paimon",permalink:"/docs/next/spark-connector/spark-catalog-paimon"},next:{title:"Overview",permalink:"/docs/next/flink-connector/flink-connector"}},d={},h=[{value:"Overview",id:"overview",level:2},{value:"Simple mode",id:"simple-mode",level:2},{value:"OAuth2 mode",id:"oauth2-mode",level:2},{value:"Kerberos mode",id:"kerberos-mode",level:2}];function a(e){const t={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsxs)(t.p,{children:["Spark connector supports ",(0,r.jsx)(t.code,{children:"simple"})," ",(0,r.jsx)(t.code,{children:"oauth2"})," and ",(0,r.jsx)(t.code,{children:"kerberos"})," authentication when accessing Gravitino server."]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Property"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Default Value"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Required"}),(0,r.jsx)(t.th,{children:"Since Version"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"spark.sql.gravitino.authType"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"simple"})}),(0,r.jsxs)(t.td,{children:["The authentication mechanisms when communicating with Gravitino server, supports ",(0,r.jsx)(t.code,{children:"simple"}),", ",(0,r.jsx)(t.code,{children:"oauth2"})," and ",(0,r.jsx)(t.code,{children:"kerberos"}),"."]}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"0.7.0-incubating"})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"simple-mode",children:"Simple mode"}),"\n",(0,r.jsx)(t.p,{children:"In the simple mode, the username originates from Spark, and is obtained using the following sequences:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["The environment variable of ",(0,r.jsx)(t.code,{children:"SPARK_USER"})]}),"\n",(0,r.jsxs)(t.li,{children:["The environment variable of ",(0,r.jsx)(t.code,{children:"HADOOP_USER_NAME"})]}),"\n",(0,r.jsx)(t.li,{children:"The user login in the machine"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"oauth2-mode",children:"OAuth2 mode"}),"\n",(0,r.jsx)(t.p,{children:"In the OAuth2 mode, you could use the following configuration to fetch an OAuth2 token to access Gravitino server."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Property"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Default Value"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Required"}),(0,r.jsx)(t.th,{children:"Since Version"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"spark.sql.gravitino.oauth2.serverUri"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"The OAuth2 server uri address."}),(0,r.jsx)(t.td,{children:"Yes, for OAuth2 mode"}),(0,r.jsx)(t.td,{children:"0.7.0-incubating"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"spark.sql.gravitino.oauth2.tokenPath"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"The path of token interface in OAuth2 server."}),(0,r.jsx)(t.td,{children:"Yes, for OAuth2 mode"}),(0,r.jsx)(t.td,{children:"0.7.0-incubating"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"spark.sql.gravitino.oauth2.credential"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"The credential to request the OAuth2 token."}),(0,r.jsx)(t.td,{children:"Yes, for OAuth2 mode"}),(0,r.jsx)(t.td,{children:"0.7.0-incubating"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"spark.sql.gravitino.oauth2.scope"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"The scope to request the OAuth2 token."}),(0,r.jsx)(t.td,{children:"Yes, for OAuth2 mode"}),(0,r.jsx)(t.td,{children:"0.7.0-incubating"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"kerberos-mode",children:"Kerberos mode"}),"\n",(0,r.jsxs)(t.p,{children:["In kerberos mode, you could use the Spark kerberos configuration to fetch a kerberos ticket to access Gravitino server, use ",(0,r.jsx)(t.code,{children:"spark.kerberos.principal"}),", ",(0,r.jsx)(t.code,{children:"spark.kerberos.keytab"})," to specify kerberos principal and keytab."]}),"\n",(0,r.jsxs)(t.p,{children:["The principal of Gravitino server is like ",(0,r.jsx)(t.code,{children:"HTTP/$host@$realm"}),", please keep the ",(0,r.jsx)(t.code,{children:"$host"})," consistent with the host in Gravitino server uri address.\nPlease make sure ",(0,r.jsx)(t.code,{children:"krb5.conf"})," is accessible by Spark, like by specifying the configuration ",(0,r.jsx)(t.code,{children:'spark.driver.extraJavaOptions="-Djava.security.krb5.conf=/xx/krb5.conf"'}),"."]})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},17014:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var r=n(79474);const i={},s=r.createContext(i);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);