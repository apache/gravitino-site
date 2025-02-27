"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[1650],{17014:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>a});var i=r(79474);const s={},n=i.createContext(s);function o(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(n.Provider,{value:t},e.children)}},61399:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>a,toc:()=>d});var i=r(13274),s=r(17014);const n={title:"Apache Gravitino metrics",slug:"/metrics",keywords:["metrics"],license:"This software is licensed under the Apache License version 2."},o=void 0,a={id:"metrics",title:"Apache Gravitino metrics",description:"Introduction",source:"@site/versioned_docs/version-0.6.1-incubating/metrics.md",sourceDirName:".",slug:"/metrics",permalink:"/docs/0.6.1-incubating/metrics",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/metrics.md",tags:[],version:"0.6.1-incubating",frontMatter:{title:"Apache Gravitino metrics",slug:"/metrics",keywords:["metrics"],license:"This software is licensed under the Apache License version 2."},sidebar:"docs",previous:{title:"Configurations",permalink:"/docs/0.6.1-incubating/gravitino-server-config"},next:{title:"How to use relational backend storage",permalink:"/docs/0.6.1-incubating/how-to-use-relational-backend-storage"}},c={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Metrics source",id:"metrics-source",level:3},{value:"HTTP server metrics",id:"http-server-metrics",level:4},{value:"JVM metrics",id:"jvm-metrics",level:4}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsxs)(t.p,{children:["Apache Gravitino Metrics builds upon the ",(0,i.jsx)(t.a,{href:"https://metrics.dropwizard.io/",children:"Dropwizard Metrics"}),". It exports these metrics through both JMX and an HTTP server, supporting JSON and Prometheus formats. You can retrieve them via HTTP requests, as illustrated below:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"// Use Gravitino Server address or Iceberg REST server address to replace 127.0.0.1:8090\n// Get metrics in JSON format\ncurl http://127.0.0.1:8090/metrics\n// Get metrics in Prometheus format\ncurl http://127.0.0.1:8090/prometheus/metrics\n"})}),"\n",(0,i.jsx)(t.h3,{id:"metrics-source",children:"Metrics source"}),"\n",(0,i.jsx)(t.h4,{id:"http-server-metrics",children:"HTTP server metrics"}),"\n",(0,i.jsxs)(t.p,{children:["HTTP server metrics encompass the histogram of HTTP request processing time and the number of HTTP response codes, categorized by different HTTP interfaces such as ",(0,i.jsx)(t.code,{children:"create-table"})," and ",(0,i.jsx)(t.code,{children:"load-table"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["For instance, you can get Prometheus metrics for ",(0,i.jsx)(t.code,{children:"create-table"})," operation in the Gravitino server as follows:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:'gravitino_server_1xx_responses_total{operation="create-table",} 0.0\ngravitino_server_4xx_responses_total{operation="create-table",} 0.0\ngravitino_server_5xx_responses_total{operation="create-table",} 0.0\ngravitino_server_2xx_responses_total{operation="create-table",} 0.0\ngravitino_server_3xx_responses_total{operation="create-table",} 0.0\ngravitino_server_http_request_duration_seconds_count{operation="create-table",} 0.0\ngravitino_server_http_request_duration_seconds{operation="create-table",quantile="0.5",} 0.0\ngravitino_server_http_request_duration_seconds{operation="create-table",quantile="0.75",} 0.0\ngravitino_server_http_request_duration_seconds{operation="create-table",quantile="0.95",} 0.0\ngravitino_server_http_request_duration_seconds{operation="create-table",quantile="0.98",} 0.0\ngravitino_server_http_request_duration_seconds{operation="create-table",quantile="0.99",} 0.0\ngravitino_server_http_request_duration_seconds{operation="create-table",quantile="0.999",} 0.0\n'})}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["Metrics with the ",(0,i.jsx)(t.code,{children:"gravitino-server"})," prefix pertain to the Gravitino server, while those with the ",(0,i.jsx)(t.code,{children:"iceberg-rest-server"})," prefix are for the Gravitino Iceberg REST server."]})}),"\n",(0,i.jsx)(t.h4,{id:"jvm-metrics",children:"JVM metrics"}),"\n",(0,i.jsxs)(t.p,{children:["JVM metrics source uses ",(0,i.jsx)(t.a,{href:"https://metrics.dropwizard.io/4.2.0/manual/jvm.html",children:"JVM instrumentation"})," with BufferPoolMetricSet, GarbageCollectorMetricSet, and MemoryUsageGaugeSet.\nThese metrics start with the ",(0,i.jsx)(t.code,{children:"jvm"})," prefix, like ",(0,i.jsx)(t.code,{children:"jvm.heap.used"})," in JSON format, ",(0,i.jsx)(t.code,{children:"jvm_head_used"})," in Prometheus format."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}}}]);