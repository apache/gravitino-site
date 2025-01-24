"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[5893],{57885:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>l,contentTitle:()=>c,default:()=>a,frontMatter:()=>d,metadata:()=>n,toc:()=>h});var i=r(13274),t=r(38389);const d={title:"How to use CORS",slug:"/security/how-to-use-cors",keyword:"security cors",license:"This software is licensed under the Apache License version 2."},c=void 0,n={id:"security/how-to-use-cors",title:"How to use CORS",description:"Cross-origin resource filter",source:"@site/versioned_docs/version-0.7.0-incubating/security/how-to-use-cors.md",sourceDirName:"security",slug:"/security/how-to-use-cors",permalink:"/docs/0.7.0-incubating/security/how-to-use-cors",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/security/how-to-use-cors.md",tags:[],version:"0.7.0-incubating",lastUpdatedBy:"FANNG",lastUpdatedAt:1737701155e3,frontMatter:{title:"How to use CORS",slug:"/security/how-to-use-cors",keyword:"security cors",license:"This software is licensed under the Apache License version 2."},sidebar:"docs",previous:{title:"How to authenticate",permalink:"/docs/0.7.0-incubating/security/how-to-authenticate"},next:{title:"How to use HTTPS",permalink:"/docs/0.7.0-incubating/security/how-to-use-https"}},l={},h=[{value:"Cross-origin resource filter",id:"cross-origin-resource-filter",level:2},{value:"Server configuration",id:"server-configuration",level:3},{value:"Apache Iceberg REST service&#39;s configuration",id:"apache-iceberg-rest-services-configuration",level:3}];function o(e){const s={code:"code",h2:"h2",h3:"h3",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h2,{id:"cross-origin-resource-filter",children:"Cross-origin resource filter"}),"\n",(0,i.jsx)(s.h3,{id:"server-configuration",children:"Server configuration"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Configuration item"}),(0,i.jsx)(s.th,{children:"Description"}),(0,i.jsx)(s.th,{children:"Default value"}),(0,i.jsx)(s.th,{children:"Required"}),(0,i.jsx)(s.th,{children:"Since version"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"gravitino.server.webserver.enableCorsFilter"})}),(0,i.jsx)(s.td,{children:"Enable cross-origin resource share filter."}),(0,i.jsx)(s.td,{children:"false"}),(0,i.jsx)(s.td,{children:"No"}),(0,i.jsx)(s.td,{children:"0.4.0"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"gravitino.server.webserver.allowedOrigins"})}),(0,i.jsx)(s.td,{children:"A comma separated list of allowed origins to access the resources. The default value is *, which means all origins."}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"*"})}),(0,i.jsx)(s.td,{children:"No"}),(0,i.jsx)(s.td,{children:"0.4.0"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"gravitino.server.webserver.allowedTimingOrigins"})}),(0,i.jsx)(s.td,{children:"A comma separated list of allowed origins to time the resource. The default value is the empty string, which means no origins."}),(0,i.jsx)(s.td,{children:"''(empty string)"}),(0,i.jsx)(s.td,{children:"No"}),(0,i.jsx)(s.td,{children:"0.4.0"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"gravitino.server.webserver.allowedMethods"})}),(0,i.jsx)(s.td,{children:"A comma separated list of allowed HTTP methods used when accessing the resources. The default values are GET, POST, HEAD, and DELETE."}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"GET,POST,HEAD,DELETE,PUT"})}),(0,i.jsx)(s.td,{children:"No"}),(0,i.jsx)(s.td,{children:"0.4.0"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"gravitino.server.webserver.allowedHeaders"})}),(0,i.jsx)(s.td,{children:"A comma separated list of allowed HTTP headers specified when accessing the resources. The default value is X-Requested-With,Content-Type,Accept,Origin. If the value is a single *, it accepts all headers."}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"X-Requested-With,Content-Type,Accept,Origin"})}),(0,i.jsx)(s.td,{children:"No"}),(0,i.jsx)(s.td,{children:"0.4.0"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"gravitino.server.webserver.preflightMaxAgeInSecs"})}),(0,i.jsx)(s.td,{children:"The number of seconds to cache preflight requests by the client. The default value is 1800 seconds or 30 minutes."}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"1800"})}),(0,i.jsx)(s.td,{children:"No"}),(0,i.jsx)(s.td,{children:"0.4.0"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"gravitino.server.webserver.allowCredentials"})}),(0,i.jsx)(s.td,{children:"A boolean indicating if the resource allows requests with credentials. The default value is true."}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"true"})}),(0,i.jsx)(s.td,{children:"No"}),(0,i.jsx)(s.td,{children:"0.4.0"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"gravitino.server.webserver.exposedHeaders"})}),(0,i.jsx)(s.td,{children:"A comma separated list of allowed HTTP headers exposed on the client. The default value is the empty list."}),(0,i.jsx)(s.td,{children:"''(empty string)"}),(0,i.jsx)(s.td,{children:"No"}),(0,i.jsx)(s.td,{children:"0.4.0"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"gravitino.server.webserver.chainPreflight"})}),(0,i.jsx)(s.td,{children:"If true chained preflight requests for normal handling (as an OPTION request). Otherwise, the filter responds to the preflight. The default is true."}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"true"})}),(0,i.jsx)(s.td,{children:"No"}),(0,i.jsx)(s.td,{children:"0.4.0"})]})]})]}),"\n",(0,i.jsx)(s.h3,{id:"apache-iceberg-rest-services-configuration",children:"Apache Iceberg REST service's configuration"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Configuration item"}),(0,i.jsx)(s.th,{children:"Description"}),(0,i.jsx)(s.th,{children:"Default value"}),(0,i.jsx)(s.th,{children:"Required"}),(0,i.jsx)(s.th,{children:"Since version"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"gravitino.iceberg-rest.enableCorsFilter"})}),(0,i.jsx)(s.td,{children:"Enable cross-origin resource share filter."}),(0,i.jsx)(s.td,{children:"false"}),(0,i.jsx)(s.td,{children:"No"}),(0,i.jsx)(s.td,{children:"0.4.0"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"gravitino.iceberg-rest.allowedOrigins"})}),(0,i.jsx)(s.td,{children:"A comma separated list of allowed origins that access the resources. The default value is *, which means all origins."}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"*"})}),(0,i.jsx)(s.td,{children:"No"}),(0,i.jsx)(s.td,{children:"0.4.0"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"gravitino.iceberg-rest.allowedTimingOrigins"})}),(0,i.jsx)(s.td,{children:"A comma separated list of allowed origins that time the resource. The default value is the empty string, which means no origins."}),(0,i.jsx)(s.td,{children:"''(empty string)"}),(0,i.jsx)(s.td,{children:"No"}),(0,i.jsx)(s.td,{children:"0.4.0"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"gravitino.iceberg-rest.allowedMethods"})}),(0,i.jsx)(s.td,{children:"A comma separated list of allowed HTTP methods used when accessing the resources. The default values are GET, POST, HEAD, and DELETE."}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"GET,POST,HEAD,DELETE,PUT"})}),(0,i.jsx)(s.td,{children:"No"}),(0,i.jsx)(s.td,{children:"0.4.0"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"gravitino.iceberg-rest.allowedHeaders"})}),(0,i.jsx)(s.td,{children:"A comma separated list of HTTP allowed headers specified when accessing the resources. The default value is X-Requested-With,Content-Type,Accept,Origin. If the value is a single *, it accepts all headers."}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"X-Requested-With,Content-Type,Accept,Origin"})}),(0,i.jsx)(s.td,{children:"No"}),(0,i.jsx)(s.td,{children:"0.4.0"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"gravitino.iceberg-rest.preflightMaxAgeInSecs"})}),(0,i.jsx)(s.td,{children:"The number of seconds to cache preflight requests by the client. The default value is 1800 seconds or 30 minutes."}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"1800"})}),(0,i.jsx)(s.td,{children:"No"}),(0,i.jsx)(s.td,{children:"0.4.0"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"gravitino.iceberg-rest.allowCredentials"})}),(0,i.jsx)(s.td,{children:"A boolean indicating if the resource allows requests with credentials. The default value is true."}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"true"})}),(0,i.jsx)(s.td,{children:"No"}),(0,i.jsx)(s.td,{children:"0.4.0"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"gravitino.iceberg-rest.exposedHeaders"})}),(0,i.jsx)(s.td,{children:"A comma separated list of allowed HTTP headers exposed on the client. The default value is the empty list."}),(0,i.jsx)(s.td,{children:"''(empty string)"}),(0,i.jsx)(s.td,{children:"No"}),(0,i.jsx)(s.td,{children:"0.4.0"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"gravitino.iceberg-rest.chainPreflight"})}),(0,i.jsx)(s.td,{children:"If true chained preflight requests for normal handling (as an OPTION request). Otherwise, the filter responds to the preflight. The default is true."}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"true"})}),(0,i.jsx)(s.td,{children:"No"}),(0,i.jsx)(s.td,{children:"0.4.0"})]})]})]})]})}function a(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}}}]);