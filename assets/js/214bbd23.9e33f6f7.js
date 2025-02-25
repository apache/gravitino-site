"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[16429],{17014:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var o=t(79474);const r={},i=o.createContext(r);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:n},e.children)}},77228:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var o=t(13274),r=t(17014);const i={title:"Apache Gravitino Trino connector requirements",slug:"/trino-connector/requirements",keyword:"gravitino connector trino",license:"This software is licensed under the Apache License version 2."},s=void 0,c={id:"trino-connector/requirements",title:"Apache Gravitino Trino connector requirements",description:"To install and deploy the Apache Gravitino Trino connector, The following environmental setup is necessary:",source:"@site/versioned_docs/version-0.8.0-incubating/trino-connector/requirements.md",sourceDirName:"trino-connector",slug:"/trino-connector/requirements",permalink:"/docs/0.8.0-incubating/trino-connector/requirements",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/trino-connector/requirements.md",tags:[],version:"0.8.0-incubating",lastUpdatedBy:"Justin Mclean",lastUpdatedAt:1740469354e3,frontMatter:{title:"Apache Gravitino Trino connector requirements",slug:"/trino-connector/requirements",keyword:"gravitino connector trino",license:"This software is licensed under the Apache License version 2."},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/0.8.0-incubating/trino-connector/trino-connector"},next:{title:"Installation",permalink:"/docs/0.8.0-incubating/trino-connector/installation"}},a={},l=[];function u(e){const n={code:"code",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"To install and deploy the Apache Gravitino Trino connector, The following environmental setup is necessary:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Trino server version should be between Trino-server-435 and Trino-server-439.\nOther versions of Trino have not undergone thorough testing."}),"\n",(0,o.jsx)(n.li,{children:"Ensure that all nodes running Trino can access the Gravitino server's port, which defaults to 8090."}),"\n",(0,o.jsx)(n.li,{children:"Ensure that all nodes running Trino can access the real catalogs resources, such as Hive, Iceberg, MySQL, PostgreSQL, etc."}),"\n",(0,o.jsx)(n.li,{children:"Ensure that you have installed the following connectors in Trino: Hive, Iceberg, MySQL, PostgreSQL."}),"\n",(0,o.jsxs)(n.li,{children:["Ensure that you have set the ",(0,o.jsx)(n.code,{children:"catalog.management"})," to ",(0,o.jsx)(n.code,{children:"dynamic"})," in the Trino coordinator configuration."]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}}}]);