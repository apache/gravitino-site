"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[61704],{17014:(e,t,a)=>{a.d(t,{R:()=>r,x:()=>o});var n=a(79474);const i={},s=n.createContext(i);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(s.Provider,{value:t},e.children)}},53128:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/gravitino-architecture-4d81bbc7f5ae20b65a3831aae287b8bd.png"},60574:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var n=a(13274),i=a(17014);const s={title:"Overview",slug:"/overview",license:"This software is licensed under the Apache License version 2."},r=void 0,o={id:"overview",title:"Overview",description:"Introduction",source:"@site/versioned_docs/version-0.8.0-incubating/overview.md",sourceDirName:".",slug:"/overview",permalink:"/docs/0.8.0-incubating/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/overview.md",tags:[],version:"0.8.0-incubating",lastUpdatedBy:"Justin Mclean",lastUpdatedAt:1740469354e3,frontMatter:{title:"Overview",slug:"/overview",license:"This software is licensed under the Apache License version 2."},sidebar:"docs",previous:{title:"What's Apache Gravitino?",permalink:"/docs/0.8.0-incubating/"},next:{title:"Getting started",permalink:"/docs/0.8.0-incubating/getting-started"}},c={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Features",id:"features",level:2},{value:"Unified metadata management and governance",id:"unified-metadata-management-and-governance",level:3},{value:"Direct metadata management",id:"direct-metadata-management",level:3},{value:"Geo-distribution support (WIP)",id:"geo-distribution-support-wip",level:3},{value:"Multi-engine support",id:"multi-engine-support",level:3},{value:"AI asset management",id:"ai-asset-management",level:3},{value:"Terminology",id:"terminology",level:2},{value:"The metadata object of Apache Gravitino",id:"the-metadata-object-of-apache-gravitino",level:3}];function l(e){const t={a:"a",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsx)(t.p,{children:"Apache Gravitino is a high-performance, geo-distributed, and federated metadata lake. It manages the\nmetadata directly in different sources, types, and regions. It also provides users with unified metadata access for data and AI assets."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Gravitino Architecture",src:a(53128).A+"",width:"1376",height:"674"})}),"\n",(0,n.jsx)(t.p,{children:"Gravitino aims to provide several key features:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"SSOT (Single Source of Truth) for multi-regional data with geo-distributed architecture support."}),"\n",(0,n.jsx)(t.li,{children:"Unified Data + AI asset management for both users and engines."}),"\n",(0,n.jsx)(t.li,{children:"Security in one place, centralize the security for different sources."}),"\n",(0,n.jsx)(t.li,{children:"Built-in data management + data access management."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"architecture",children:"Architecture"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Gravitino Model and Arch",src:a(60725).A+"",width:"2731",height:"1636"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Functionality Layer"}),": Gravitino provides an API for users to manage and govern the\nmetadata, including standard metadata creation, update, and delete operations. In the meantime, it also provides the ability to govern the metadata in a unified way, including access control, discovery, and others."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Interface Layer"}),": Gravitino provides a standard REST API as the interface layer for users. Future support includes Thrift and JDBC interfaces."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Core Object Model"}),": Gravitino defines a generic metadata model to represent the metadata in different sources and types and manages them in a unified way."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Connection Layer"}),": In the connection layer, Gravitino provides a set of connectors to connect to different metadata sources, including Apache Hive, MySQL, PostgreSQL, and others. It also allows connecting and managing heterogeneous metadata other than Tabular data."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"features",children:"Features"}),"\n",(0,n.jsx)(t.h3,{id:"unified-metadata-management-and-governance",children:"Unified metadata management and governance"}),"\n",(0,n.jsx)(t.p,{children:"Gravitino abstracts the unified metadata models and APIs for different kinds of metadata sources.\nFor example, relational metadata models for tabular data, like Hive, MySQL, PostgreSQL, etc.\nFile metadata model for all the unstructured data, like HDFS, S3, and others."}),"\n",(0,n.jsx)(t.p,{children:"Besides the unified metadata models, Gravitino also provides a unified metadata governance layer\nto manage the metadata in a unified way, including access control, auditing, discovery and\nothers."}),"\n",(0,n.jsx)(t.h3,{id:"direct-metadata-management",children:"Direct metadata management"}),"\n",(0,n.jsx)(t.p,{children:"Unlike traditional metadata management systems, which need to collect the metadata\nactively or passively from underlying systems, Gravitino manages these systems directly.\nIt provides a set of connectors to connect to different metadata sources.\nThe changes in Gravitino directly reflect in the underlying systems, and vice versa."}),"\n",(0,n.jsx)(t.h3,{id:"geo-distribution-support-wip",children:"Geo-distribution support (WIP)"}),"\n",(0,n.jsx)(t.p,{children:"Gravitino supports geo-distribution deployment, which means different instances of Gravitino\ncan deploy in different regions or clouds, and they can connect to get\nthe metadata from each other. With this, users can get a global view of metadata across the\nregions or clouds."}),"\n",(0,n.jsx)(t.h3,{id:"multi-engine-support",children:"Multi-engine support"}),"\n",(0,n.jsxs)(t.p,{children:["Gravitino supports different query engines to access the metadata. Currently, it supports\n",(0,n.jsx)(t.a,{href:"https://trino.io/",children:"Trino"}),", users can use Trino to query the metadata and data without needing to\nchange the existing SQL dialects."]}),"\n",(0,n.jsxs)(t.p,{children:["In the meantime, other query engine support is on the roadmap, including\n",(0,n.jsx)(t.a,{href:"https://spark.apache.org/",children:"Apache Spark"}),", ",(0,n.jsx)(t.a,{href:"https://flink.apache.org/",children:"Apache Flink"})," and others."]}),"\n",(0,n.jsx)(t.h3,{id:"ai-asset-management",children:"AI asset management"}),"\n",(0,n.jsx)(t.p,{children:"The goal of Gravitino is to unify the data management in both data and AI assets, including raw files, models, etc."}),"\n",(0,n.jsx)(t.h2,{id:"terminology",children:"Terminology"}),"\n",(0,n.jsx)(t.h3,{id:"the-metadata-object-of-apache-gravitino",children:"The metadata object of Apache Gravitino"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Metalake"}),": The container/tenant for metadata. Typically, one group has one metalake\nto manage all the metadata in it. Each metalake exposes a three-level namespace (catalog.schema.\ntable) to organize the data."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Catalog"}),": A catalog is a collection of metadata from a specific metadata source.\nEach catalog has a related connector to connect to the specific metadata source."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Schema"}),": Schema is the second level namespace to group a collection of metadata, schema can\nrefer to the database/schema in the relational metadata sources, such as Apache Hive, MySQL,\nPostgreSQL, and others. Schema can also refer to the logic namespace for the fileset and model\ncatalog."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Table"}),": The lowest level in the object hierarchy for catalogs that support relational\nmetadata sources. You can create Tables in specific schemas in the catalogs."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Fileset"}),": The fileset metadata object refers to a collection of files and directories in\nthe file system. The fileset metadata object is used to manage the logic metadata for the files."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Model"}),": The model metadata object represents the metadata in the specific catalogs that\nsupport model management."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Topic"}),": The topic metadata object represents the metadata in the specific catalogs that\nsupport managing the topic for a message queue system, such as Kafka."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},60725:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/gravitino-model-arch-16094b35af05823f97bcb8a7fdd9d83c.png"}}]);