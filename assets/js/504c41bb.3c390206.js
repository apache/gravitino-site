"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[39350],{54740:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var a=i(13274),o=i(38389);const s={title:"Kafka catalog",slug:"/kafka-catalog",date:"2024-4-22",keyword:"kafka catalog",license:"This software is licensed under the Apache License version 2."},n=void 0,r={id:"kafka-catalog",title:"Kafka catalog",description:"Introduction",source:"@site/docs/kafka-catalog.md",sourceDirName:".",slug:"/kafka-catalog",permalink:"/docs/next/kafka-catalog",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/kafka-catalog.md",tags:[],version:"current",lastUpdatedBy:"FANNG",lastUpdatedAt:173770816e4,frontMatter:{title:"Kafka catalog",slug:"/kafka-catalog",date:"2024-4-22",keyword:"kafka catalog",license:"This software is licensed under the Apache License version 2."},sidebar:"docs",previous:{title:"Hadoop catalog with adls",permalink:"/docs/next/hadoop-catalog-with-adls"},next:{title:"Model catalog",permalink:"/docs/next/model-catalog"}},c={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Catalog",id:"catalog",level:2},{value:"Catalog properties",id:"catalog-properties",level:3},{value:"Catalog operations",id:"catalog-operations",level:3},{value:"Schema",id:"schema",level:2},{value:"Schema capabilities",id:"schema-capabilities",level:3},{value:"Schema properties",id:"schema-properties",level:3},{value:"Schema operations",id:"schema-operations",level:3},{value:"Topic",id:"topic",level:2},{value:"Topic capabilities",id:"topic-capabilities",level:3},{value:"Topic properties",id:"topic-properties",level:3},{value:"Topic operations",id:"topic-operations",level:3}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,a.jsx)(t.p,{children:"Kafka catalog is a messaging catalog that offers the ability to manage Apache Kafka topics' metadata.\nOne Kafka catalog corresponds to one Kafka cluster."}),"\n",(0,a.jsx)(t.h2,{id:"catalog",children:"Catalog"}),"\n",(0,a.jsx)(t.h3,{id:"catalog-properties",children:"Catalog properties"}),"\n",(0,a.jsxs)(t.p,{children:["Besides the ",(0,a.jsx)(t.a,{href:"/docs/next/gravitino-server-config#apache-gravitino-catalog-properties-configuration",children:"common catalog properties"}),", the Kafka catalog has the following properties:"]}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Property Name"}),(0,a.jsx)(t.th,{children:"Description"}),(0,a.jsx)(t.th,{children:"Default Value"}),(0,a.jsx)(t.th,{children:"Required"}),(0,a.jsx)(t.th,{children:"Since Version"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"bootstrap.servers"})}),(0,a.jsx)(t.td,{children:"The Kafka broker(s) to connect to, allowing for multiple brokers by comma-separating them."}),(0,a.jsx)(t.td,{children:"(none)"}),(0,a.jsx)(t.td,{children:"Yes"}),(0,a.jsx)(t.td,{children:"0.5.0"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"gravitino.bypass."})}),(0,a.jsxs)(t.td,{children:["Property name with this prefix passed down to the underlying Kafka Admin client for use. (refer to ",(0,a.jsx)(t.a,{href:"https://kafka.apache.org/34/documentation.html#adminclientconfigs",children:"Kafka Admin Configs"})," for more details)"]}),(0,a.jsx)(t.td,{children:"(none)"}),(0,a.jsx)(t.td,{children:"No"}),(0,a.jsx)(t.td,{children:"0.5.0"})]})]})]}),"\n",(0,a.jsx)(t.h3,{id:"catalog-operations",children:"Catalog operations"}),"\n",(0,a.jsxs)(t.p,{children:["Refer to ",(0,a.jsx)(t.a,{href:"/docs/next/manage-massaging-metadata-using-gravitino#catalog-operations",children:"Catalog operations"})," for more details."]}),"\n",(0,a.jsx)(t.h2,{id:"schema",children:"Schema"}),"\n",(0,a.jsx)(t.p,{children:'A "default" schema, which includes all the topics in the Kafka cluster, will be automatically created when catalog is created.'}),"\n",(0,a.jsx)(t.h3,{id:"schema-capabilities",children:"Schema capabilities"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:'Since the "default" schema is read-only, it only supports loading and listing schema.'}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"schema-properties",children:"Schema properties"}),"\n",(0,a.jsx)(t.p,{children:"None."}),"\n",(0,a.jsx)(t.h3,{id:"schema-operations",children:"Schema operations"}),"\n",(0,a.jsxs)(t.p,{children:["Refer to ",(0,a.jsx)(t.a,{href:"/docs/next/manage-massaging-metadata-using-gravitino#schema-operations",children:"Schema operation"})," for more details."]}),"\n",(0,a.jsx)(t.h2,{id:"topic",children:"Topic"}),"\n",(0,a.jsx)(t.h3,{id:"topic-capabilities",children:"Topic capabilities"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"The Kafka catalog supports creating, updating, deleting, and listing topics."}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"topic-properties",children:"Topic properties"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Property name"}),(0,a.jsx)(t.th,{children:"Description"}),(0,a.jsx)(t.th,{children:"Default value"}),(0,a.jsx)(t.th,{children:"Required"}),(0,a.jsx)(t.th,{children:"Since Version"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"partition-count"})}),(0,a.jsx)(t.td,{children:"The number of partitions for the topic."}),(0,a.jsxs)(t.td,{children:["if not specified, will use the ",(0,a.jsx)(t.code,{children:"num.partition"})," property in the broker."]}),(0,a.jsx)(t.td,{children:"No"}),(0,a.jsx)(t.td,{children:"0.5.0"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"replication-factor"})}),(0,a.jsx)(t.td,{children:"The number of replications for the topic"}),(0,a.jsxs)(t.td,{children:["if not specified, will use the ",(0,a.jsx)(t.code,{children:"default.replication.factor"})," property in the broker."]}),(0,a.jsx)(t.td,{children:"No"}),(0,a.jsx)(t.td,{children:"0.5.0"})]})]})]}),"\n",(0,a.jsxs)(t.p,{children:["You can pass other topic configurations to the topic properties. Refer to ",(0,a.jsx)(t.a,{href:"https://kafka.apache.org/34/documentation.html#topicconfigs",children:"Topic Configs"})," for more details."]}),"\n",(0,a.jsx)(t.h3,{id:"topic-operations",children:"Topic operations"}),"\n",(0,a.jsxs)(t.p,{children:["Refer to ",(0,a.jsx)(t.a,{href:"/docs/next/manage-massaging-metadata-using-gravitino#topic-operations",children:"Topic operation"})," for more details."]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}}}]);