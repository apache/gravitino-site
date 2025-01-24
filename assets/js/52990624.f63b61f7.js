"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[66088],{76281:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>a});var r=t(13274),i=t(38389);const o={title:"Apache Gravitino Trino connector Configuration",slug:"/trino-connector/configuration",keyword:"gravitino connector trino",license:"This software is licensed under the Apache License version 2."},c=void 0,s={id:"trino-connector/configuration",title:"Apache Gravitino Trino connector Configuration",description:"| Property                         | Type    | Default Value               | Description                                                                                                                                                                                                                                                                                                         | Required | Since Version |",source:"@site/docs/trino-connector/configuration.md",sourceDirName:"trino-connector",slug:"/trino-connector/configuration",permalink:"/docs/next/trino-connector/configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/trino-connector/configuration.md",tags:[],version:"current",lastUpdatedBy:"FANNG",lastUpdatedAt:173771221e4,frontMatter:{title:"Apache Gravitino Trino connector Configuration",slug:"/trino-connector/configuration",keyword:"gravitino connector trino",license:"This software is licensed under the Apache License version 2."},sidebar:"docs",previous:{title:"Installation",permalink:"/docs/next/trino-connector/installation"},next:{title:"Introduction",permalink:"/docs/next/trino-connector/supported-catalog"}},d={},a=[];function l(e){const n={a:"a",code:"code",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Property"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Default Value"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Required"}),(0,r.jsx)(n.th,{children:"Since Version"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"connector.name"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"(none)"}),(0,r.jsxs)(n.td,{children:["The ",(0,r.jsx)(n.code,{children:"connector.name"})," defines the type of Trino connector, this value is always 'gravitino'."]}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:"0.2.0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"gravitino.metalake"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"(none)"}),(0,r.jsxs)(n.td,{children:["The ",(0,r.jsx)(n.code,{children:"gravitino.metalake"})," defines which metalake in Gravitino server the Trino connector uses. Trino connector should set it at start, the value of ",(0,r.jsx)(n.code,{children:"gravitino.metalake"})," needs to be a valid name, Trino connector can detect and load the metalake with catalogs, schemas and tables once created and keep in sync."]}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:"0.2.0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"gravitino.uri"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"http://localhost:8090",children:"http://localhost:8090"})}),(0,r.jsxs)(n.td,{children:["The ",(0,r.jsx)(n.code,{children:"gravitino.uri"})," defines the connection URL of the Gravitino server, the default value is ",(0,r.jsx)(n.code,{children:"http://localhost:8090"}),". Trino connector can detect and connect to Gravitino server once it is ready, no need to start Gravitino server beforehand."]}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"0.2.0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"trino.jdbc.user"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"admin"}),(0,r.jsx)(n.td,{children:"The jdbc user name of current Trino."}),(0,r.jsx)(n.td,{children:"NO"}),(0,r.jsx)(n.td,{children:"0.5.1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"trino.jdbc.password"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"(none)"}),(0,r.jsx)(n.td,{children:"The jdbc password of current Trino."}),(0,r.jsx)(n.td,{children:"NO"}),(0,r.jsx)(n.td,{children:"0.5.1"})]})]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},38389:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>s});var r=t(79474);const i={},o=r.createContext(i);function c(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);