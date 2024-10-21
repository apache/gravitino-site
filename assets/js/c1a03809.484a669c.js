"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[4248],{65915:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var a=t(13274),n=t(43183);const o={title:"Kafka catalog",slug:"/kafka-catalog",date:"2024-4-22",keyword:"kafka catalog",license:"This software is licensed under the Apache License version 2."},s=void 0,r={id:"kafka-catalog",title:"Kafka catalog",description:"Introduction",source:"@site/versioned_docs/version-0.6.1-incubating/kafka-catalog.md",sourceDirName:".",slug:"/kafka-catalog",permalink:"/docs/0.6.1-incubating/kafka-catalog",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/kafka-catalog.md",tags:[],version:"0.6.1-incubating",lastUpdatedBy:"Qian Xia",lastUpdatedAt:1729496081e3,frontMatter:{title:"Kafka catalog",slug:"/kafka-catalog",date:"2024-4-22",keyword:"kafka catalog",license:"This software is licensed under the Apache License version 2."},sidebar:"docs",previous:{title:"Hadoop catalog",permalink:"/docs/0.6.1-incubating/hadoop-catalog"},next:{title:"Index",permalink:"/docs/0.6.1-incubating/trino-connector/index"}},c={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Catalog",id:"catalog",level:2},{value:"Catalog properties",id:"catalog-properties",level:3},{value:"Catalog operations",id:"catalog-operations",level:3},{value:"Schema",id:"schema",level:2},{value:"Schema capabilities",id:"schema-capabilities",level:3},{value:"Schema properties",id:"schema-properties",level:3},{value:"Schema operations",id:"schema-operations",level:3},{value:"Topic",id:"topic",level:2},{value:"Topic capabilities",id:"topic-capabilities",level:3},{value:"Topic properties",id:"topic-properties",level:3},{value:"Topic operations",id:"topic-operations",level:3}];function d(e){const i={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.h2,{id:"introduction",children:"Introduction"}),"\n",(0,a.jsx)(i.p,{children:"Kafka catalog is a messaging catalog that offers the ability to manage Apache Kafka topics' metadata.\nOne Kafka catalog corresponds to one Kafka cluster."}),"\n",(0,a.jsx)(i.h2,{id:"catalog",children:"Catalog"}),"\n",(0,a.jsx)(i.h3,{id:"catalog-properties",children:"Catalog properties"}),"\n",(0,a.jsxs)(i.p,{children:["Besides the ",(0,a.jsx)(i.a,{href:"/docs/0.6.1-incubating/gravitino-server-config#gravitino-catalog-properties-configuration",children:"common catalog properties"}),", the Kafka catalog has the following properties:"]}),"\n",(0,a.jsxs)(i.table,{children:[(0,a.jsx)(i.thead,{children:(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.th,{children:"Property Name"}),(0,a.jsx)(i.th,{children:"Description"}),(0,a.jsx)(i.th,{children:"Default Value"}),(0,a.jsx)(i.th,{children:"Required"}),(0,a.jsx)(i.th,{children:"Since Version"})]})}),(0,a.jsxs)(i.tbody,{children:[(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:(0,a.jsx)(i.code,{children:"bootstrap.servers"})}),(0,a.jsx)(i.td,{children:"The Kafka broker(s) to connect to, allowing for multiple brokers by comma-separating them."}),(0,a.jsx)(i.td,{children:"(none)"}),(0,a.jsx)(i.td,{children:"Yes"}),(0,a.jsx)(i.td,{children:"0.5.0"})]}),(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:(0,a.jsx)(i.code,{children:"gravitino.bypass."})}),(0,a.jsxs)(i.td,{children:["Property name with this prefix passed down to the underlying Kafka Admin client for use. (refer to ",(0,a.jsx)(i.a,{href:"https://kafka.apache.org/34/documentation.html#adminclientconfigs",children:"Kafka Admin Configs"})," for more details)"]}),(0,a.jsx)(i.td,{children:"(none)"}),(0,a.jsx)(i.td,{children:"No"}),(0,a.jsx)(i.td,{children:"0.5.0"})]})]})]}),"\n",(0,a.jsx)(i.h3,{id:"catalog-operations",children:"Catalog operations"}),"\n",(0,a.jsxs)(i.p,{children:["Refer to ",(0,a.jsx)(i.a,{href:"/docs/0.6.1-incubating/manage-massaging-metadata-using-gravitino#catalog-operations",children:"Catalog operations"})," for more details."]}),"\n",(0,a.jsx)(i.h2,{id:"schema",children:"Schema"}),"\n",(0,a.jsx)(i.p,{children:'A "default" schema, which includes all the topics in the Kafka cluster, will be automatically created when catalog is created.'}),"\n",(0,a.jsx)(i.h3,{id:"schema-capabilities",children:"Schema capabilities"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:'Since the "default" schema is read-only, it only supports loading and listing schema.'}),"\n"]}),"\n",(0,a.jsx)(i.h3,{id:"schema-properties",children:"Schema properties"}),"\n",(0,a.jsx)(i.p,{children:"None."}),"\n",(0,a.jsx)(i.h3,{id:"schema-operations",children:"Schema operations"}),"\n",(0,a.jsxs)(i.p,{children:["Refer to ",(0,a.jsx)(i.a,{href:"/docs/0.6.1-incubating/manage-massaging-metadata-using-gravitino#schema-operations",children:"Schema operation"})," for more details."]}),"\n",(0,a.jsx)(i.h2,{id:"topic",children:"Topic"}),"\n",(0,a.jsx)(i.h3,{id:"topic-capabilities",children:"Topic capabilities"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"The Kafka catalog supports creating, updating, deleting, and listing topics."}),"\n"]}),"\n",(0,a.jsx)(i.h3,{id:"topic-properties",children:"Topic properties"}),"\n",(0,a.jsxs)(i.table,{children:[(0,a.jsx)(i.thead,{children:(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.th,{children:"Property name"}),(0,a.jsx)(i.th,{children:"Description"}),(0,a.jsx)(i.th,{children:"Default value"}),(0,a.jsx)(i.th,{children:"Required"}),(0,a.jsx)(i.th,{children:"Since Version"})]})}),(0,a.jsxs)(i.tbody,{children:[(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:(0,a.jsx)(i.code,{children:"partition-count"})}),(0,a.jsx)(i.td,{children:"The number of partitions for the topic."}),(0,a.jsxs)(i.td,{children:["if not specified, will use the ",(0,a.jsx)(i.code,{children:"num.partition"})," property in the broker."]}),(0,a.jsx)(i.td,{children:"No"}),(0,a.jsx)(i.td,{children:"0.5.0"})]}),(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:(0,a.jsx)(i.code,{children:"replication-factor"})}),(0,a.jsx)(i.td,{children:"The number of replications for the topic"}),(0,a.jsxs)(i.td,{children:["if not specified, will use the ",(0,a.jsx)(i.code,{children:"default.replication.factor"})," property in the broker."]}),(0,a.jsx)(i.td,{children:"No"}),(0,a.jsx)(i.td,{children:"0.5.0"})]})]})]}),"\n",(0,a.jsxs)(i.p,{children:["You can pass other topic configurations to the topic properties. Refer to ",(0,a.jsx)(i.a,{href:"https://kafka.apache.org/34/documentation.html#topicconfigs",children:"Topic Configs"})," for more details."]}),"\n",(0,a.jsx)(i.h3,{id:"topic-operations",children:"Topic operations"}),"\n",(0,a.jsxs)(i.p,{children:["Refer to ",(0,a.jsx)(i.a,{href:"/docs/0.6.1-incubating/manage-massaging-metadata-using-gravitino#topic-operations",children:"Topic operation"})," for more details."]})]})}function h(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}}}]);