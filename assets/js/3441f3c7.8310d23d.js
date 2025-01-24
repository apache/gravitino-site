"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[2604],{85112:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>h,toc:()=>c});var t=n(13274),a=n(38389);const s={title:"Apache Gravitino 0.8.0 - strengthen the AI support for Apache Gravitino\u2122 (incubating)",slug:"gravitino-0-8-0-release-notes",authors:["FANNG"],tags:["apache","gravitino","metadata","multicloud","model","fuse","credential-vending"]},r=void 0,h={permalink:"/blog/gravitino-0-8-0-release-notes",editUrl:"https://github.com/apache/gravitino-site/tree/main/blog/2025-01-24-gravitino-0-8-0-release-notes.mdx",source:"@site/blog/2025-01-24-gravitino-0-8-0-release-notes.mdx",title:"Apache Gravitino 0.8.0 - strengthen the AI support for Apache Gravitino\u2122 (incubating)",description:"Apache Gravitino 0.8.0 is the third major release after entering the ASF. In this release, the community provides several exciting features like model catalog, Fuse for Fileset, credential vending for Fileset, Flink Iceberg and Paimon connector, Spark Paimon connector, and security enforcement.",date:"2025-01-24T00:00:00.000Z",tags:[{inline:!0,label:"apache",permalink:"/blog/tags/apache"},{inline:!0,label:"gravitino",permalink:"/blog/tags/gravitino"},{inline:!0,label:"metadata",permalink:"/blog/tags/metadata"},{inline:!0,label:"multicloud",permalink:"/blog/tags/multicloud"},{inline:!0,label:"model",permalink:"/blog/tags/model"},{inline:!0,label:"fuse",permalink:"/blog/tags/fuse"},{inline:!0,label:"credential-vending",permalink:"/blog/tags/credential-vending"}],readingTime:5.07,hasTruncateMarker:!1,authors:[{name:"Xiaojing Fang",title:"PPMC Member",url:"https://github.com/fanng1/",imageURL:"https://github.com/fanng1.png",key:"FANNG"}],frontMatter:{title:"Apache Gravitino 0.8.0 - strengthen the AI support for Apache Gravitino\u2122 (incubating)",slug:"gravitino-0-8-0-release-notes",authors:["FANNG"],tags:["apache","gravitino","metadata","multicloud","model","fuse","credential-vending"]},unlisted:!1,nextItem:{title:"Apache Gravitino Website Analytics",permalink:"/blog/website-analytics-2024"}},o={authorsImageUrls:[void 0]},c=[{value:"Model Catalog",id:"model-catalog",level:2},{value:"Credential vending",id:"credential-vending",level:2},{value:"Fuse for Fileset",id:"fuse-for-fileset",level:2},{value:"Lakehouse Federation",id:"lakehouse-federation",level:2},{value:"Security enforcement",id:"security-enforcement",level:2},{value:"Other notable enhancements",id:"other-notable-enhancements",level:2},{value:"Iceberg REST server",id:"iceberg-rest-server",level:3},{value:"Core",id:"core",level:3},{value:"Gravitino Client",id:"gravitino-client",level:3},{value:"BUG FIX",id:"bug-fix",level:2},{value:"Overall",id:"overall",level:2},{value:"Credits",id:"credits",level:2}];function l(e){const i={a:"a",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.p,{children:"Apache Gravitino 0.8.0 is the third major release after entering the ASF. In this release, the community provides several exciting features like model catalog, Fuse for Fileset, credential vending for Fileset, Flink Iceberg and Paimon connector, Spark Paimon connector, and security enforcement."}),"\n",(0,t.jsx)(i.p,{children:"This release blog will briefly introduce the new significant features and improvements. Please keep reading to learn more about what the community has worked on."}),"\n",(0,t.jsx)(i.h2,{id:"model-catalog",children:"Model Catalog"}),"\n",(0,t.jsx)(i.p,{children:"Besides table and messaging metadata, Gravitino supports model metadata management in version 0.8. Gravitino allows a model to have multiple versions, and users can choose the best version. 0.8 provides basic functionality, and more features will be provided in the future, such as tagging models and better integration with machine learning workflows, to help users better manage models and extract more value from data and models."}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Support model versioning metadata ",(0,t.jsx)(i.a,{href:"https://github.com/apache/gravitino/issues/4783",children:"#4783"}),"."]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"credential-vending",children:"Credential vending"}),"\n",(0,t.jsx)(i.p,{children:"Credential vending is a fundamental function in the cloud. In version 0.7, credential vending was supported for the Iceberg REST server. In version 0.8, we offer support for the Gravitino server and integrate it with Fileset. Based on Credential vending, Fileset can be used more securely and conveniently. The Gravitino server will centrally manage the security key and issue a temporary token, which is only valid for the Fileset that needs to be accessed by the request, making it more secure and eliminating the need for the user side to provide information such as AKSK."}),"\n",(0,t.jsx)(i.p,{children:"In addition to the support for GCS and S3, version 0.8 also has built-in support for OSS and ADLS credential vending, and can support other storage in a pluggable manner."}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Support credential vending for fileset client ",(0,t.jsx)(i.a,{href:"https://github.com/apache/gravitino/issues/5677",children:"#5677"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:["Support credential vending for Gravitino ",(0,t.jsx)(i.a,{href:"https://github.com/apache/gravitino/issues/4398",children:"#4398"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:["Support Aliyun OSS credential provider ",(0,t.jsx)(i.a,{href:"https://github.com/apache/gravitino/issues/5625",children:"#5625"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:["Support ADLS credential provider ",(0,t.jsx)(i.a,{href:"https://github.com/apache/gravitino/issues/5624",children:"#5624"}),"."]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"fuse-for-fileset",children:"Fuse for Fileset"}),"\n",(0,t.jsx)(i.p,{children:"With the widespread use of Fileset in AI scenarios, how to improve usability and reduce user usage costs has become a major issue. In AI scenarios, users tend to access remote data in the way of local disks. Fuse for fileset is designed based on this, enabling users to access data managed by Fileset as if they were using local disks. Currently, basic alpha functionality is provided, which allows access to S3 data managed by Fileset. In subsequent versions, metadata caching functionality and support for more storage will be provided. Fuse for fileset is developed in Rust for performance considerations, and everyone is welcome to join the development."}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Implement GVFS fuse to access Gravitino fileset in the POSIX Protocol ",(0,t.jsx)(i.a,{href:"https://github.com/apache/gravitino/issues/5504",children:"#5504"}),"."]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"lakehouse-federation",children:"Lakehouse Federation"}),"\n",(0,t.jsx)(i.p,{children:"Gravitino provides a variety of catalogs, such as Apache Hive, Apache Iceberg, Apache Hudi, and Apache Paimon, etc. How can it be better connected to the surrounding ecosystem to facilitate user use? This iteration provides Flink Paimon connector, Flink Iceberg connector, and Spark Paimon connector to access data from Paimon and Iceberg. More connectors will be supported in the future. Let's look forward to it."}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Support Iceberg catalog in Flink connector ",(0,t.jsx)(i.a,{href:"https://github.com/apache/gravitino/issues/3515",children:"#3515"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:["Support Paimon catalog in Flink connector ",(0,t.jsx)(i.a,{href:"https://github.com/apache/gravitino/issues/5194",children:"#5194"})," ",(0,t.jsx)(i.a,{href:"https://github.com/apache/gravitino/issues/5193",children:"#5193"})," ",(0,t.jsx)(i.a,{href:"https://github.com/apache/gravitino/issues/5192",children:"#5192"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:["Support Paimon catalog in Spark connector ",(0,t.jsx)(i.a,{href:"https://github.com/apache/gravitino/pull/5722",children:"#5722"}),"."]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"security-enforcement",children:"Security enforcement"}),"\n",(0,t.jsx)(i.p,{children:"As a metadata management system, security is of the utmost importance. In this iteration, we managing security policies in chain authorization, and support the push-down of SQL security policies and path-based security policies. Additionally, the privilege policies of Iceberg and Paimon tables can be pushed down to Ranger. Based on Gravitino's security policies, a solid foundation is provided for your business development."}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Chain authorization multiple underlying data source ",(0,t.jsx)(i.a,{href:"https://github.com/apache/gravitino/issues/5774",children:"#5774"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:["SQL based  authorization plugin  ",(0,t.jsx)(i.a,{href:"https://github.com/apache/gravitino/issues/5530",children:"#5530"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:["Add path-based authorization securable object and user-group mapping interface ",(0,t.jsx)(i.a,{href:"https://github.com/apache/gravitino/issues/5966",children:"#5966"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:["Use chain authorization to support Hive and HDFS authorization ",(0,t.jsx)(i.a,{href:"https://github.com/apache/gravitino/issues/5956",children:"#5956"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:["Ranger Authorization HDFS Plugin ",(0,t.jsx)(i.a,{href:"https://github.com/apache/gravitino/issues/5731",children:"#5731"}),"."]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"other-notable-enhancements",children:"Other notable enhancements"}),"\n",(0,t.jsx)(i.h3,{id:"iceberg-rest-server",children:"Iceberg REST server"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Generate credential according to the data path and metadata path ",(0,t.jsx)(i.a,{href:"https://github.com/apache/gravitino/issues/5648",children:"#5648"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:["Integrate audit log framework for Iceberg REST server ",(0,t.jsx)(i.a,{href:"https://github.com/apache/gravitino/issues/5556",children:"#5556"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:["Add schema and view event for Iceberg REST server ",(0,t.jsx)(i.a,{href:"https://github.com/apache/gravitino/issues/5438",children:"#5438"})," ",(0,t.jsx)(i.a,{href:"https://github.com/apache/gravitino/issues/5437",children:"#5437"}),".\nAdd HTTP header to Iceberg event ",(0,t.jsx)(i.a,{href:"https://github.com/apache/gravitino/issues/5518",children:"#5518"}),"."]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"core",children:"Core"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Optimization tree lock when drop and load Table/Schema  ",(0,t.jsx)(i.a,{href:"https://github.com/apache/gravitino/issues/6044",children:"#6044"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:["Support ADLS storage for Gravitino Iceberg catalog and Spark connector ",(0,t.jsx)(i.a,{href:"https://github.com/apache/gravitino/issues/5954",children:"#5954"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:["Support pre-event for Gravitino server ",(0,t.jsx)(i.a,{href:"https://github.com/apache/gravitino/issues/5317",children:"#5317"}),"."]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"gravitino-client",children:"Gravitino Client"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Add CLI interface for Gravitino ",(0,t.jsx)(i.a,{href:"https://github.com/apache/gravitino/issues/4943",children:"#4943"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:["Support Python client for table operations ",(0,t.jsx)(i.a,{href:"https://github.com/apache/gravitino/issues/5198",children:"#5198"}),"."]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"bug-fix",children:"BUG FIX"}),"\n",(0,t.jsx)(i.p,{children:"Version 0.8 has fixed a large number of bugs, especially in terms of security and fileset usage. Some are listed below."}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Can't load filesystem 'gs' when use spark to access Gravitino GCS bundles ",(0,t.jsx)(i.a,{href:"https://github.com/apache/gravitino/issues/5609",children:"#5609"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:["Invalid token issue happened in GVFS when Spark job long running ",(0,t.jsx)(i.a,{href:"https://github.com/apache/gravitino/issues/5596",children:"#5596"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:["Trino, hive catalog: COMMNET COLUMN with ' ' or NULL has ArrayIndexOutOfBoundsException error, ",(0,t.jsx)(i.a,{href:"https://github.com/apache/gravitino/issues/5533",children:"#5533"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:["Correct the behaviors when creating Iceberg table with none distribution ",(0,t.jsx)(i.a,{href:"https://github.com/apache/gravitino/issues/6196",children:"#6196"})]}),"\n",(0,t.jsxs)(i.li,{children:["Updable to create fileset with minio ",(0,t.jsx)(i.a,{href:"https://github.com/apache/gravitino/issues/6156",children:"#6156"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:["Grant privileges to a role, duplicated privilege name with different condition shouldn\u2019t be allowed to grant ",(0,t.jsx)(i.a,{href:"https://github.com/apache/gravitino/issues/6116",children:"#6116"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:["The owner of the catalog is incorrect when using Basic Auth and Password is empty ",(0,t.jsx)(i.a,{href:"https://github.com/apache/gravitino/issues/5968",children:"#5968"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:["Grant a metalake level privilege won't take effect ",(0,t.jsx)(i.a,{href:"https://github.com/apache/gravitino/issues/5892",children:"#5892"}),"."]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"overall",children:"Overall"}),"\n",(0,t.jsx)(i.p,{children:"Apache Gravitino 0.8.0 is the third ASF release. This version adds a bunch of new features. We thank the Gravitino community for their continued support and valuable contributions. Thanks to our users' feedback, we can continue to innovate and build,\nso thanks to all those reading this!"}),"\n",(0,t.jsxs)(i.p,{children:["To further explore the Gravitino 0.8.0 release, please check ",(0,t.jsx)(i.a,{href:"https://gravitino.apache.org/docs/0.8.0-incubating",children:"the documentation"}),".\nYour feedback is invaluable to the community and the project."]}),"\n",(0,t.jsx)(i.h2,{id:"credits",children:"Credits"}),"\n",(0,t.jsx)(i.p,{children:"This release acknowledges the hard work and dedication of all contributors who have helped make this release possible."}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"https://github.com/Abyss-lord",children:"@Abyss-lord"}),"\n",(0,t.jsx)(i.a,{href:"https://github.com/Aireed",children:"@Aireed"}),"\n",(0,t.jsx)(i.a,{href:"https://github.com/FANNG1",children:"@FANNG1"}),"\n",(0,t.jsx)(i.a,{href:"https://github.com/LauraXia123",children:"@LauraXia123"}),"\n",(0,t.jsx)(i.a,{href:"https://github.com/LindaSummer",children:"@LindaSummer"}),"\n",(0,t.jsx)(i.a,{href:"https://github.com/LiuQhahah",children:"@LiuQhahah"}),"\n",(0,t.jsx)(i.a,{href:"https://github.com/SophieTech88",children:"@SophieTech88"}),"\n",(0,t.jsx)(i.a,{href:"https://github.com/TungYuChiang",children:"@TungYuChiang"}),"\n",(0,t.jsx)(i.a,{href:"https://github.com/caican00",children:"@caican00"}),"\n",(0,t.jsx)(i.a,{href:"https://github.com/chenyuan99",children:"@chenyuan99"}),"\n",(0,t.jsx)(i.a,{href:"https://github.com/cool9850311",children:"@cool9850311"}),"\n",(0,t.jsx)(i.a,{href:"https://github.com/danhuawang",children:"@danhuawang"}),"\n",(0,t.jsx)(i.a,{href:"https://github.com/deeshantk",children:"@deeshantk"}),"\n",(0,t.jsx)(i.a,{href:"https://github.com/diqiu50",children:"@diqiu50"}),"\n",(0,t.jsx)(i.a,{href:"https://github.com/featherchen",children:"@featherchen"}),"\n",(0,t.jsx)(i.a,{href:"https://github.com/frankvicky",children:"@frankvicky"}),"\n",(0,t.jsx)(i.a,{href:"https://github.com/fsalhi2",children:"@fsalhi2"}),"\n",(0,t.jsx)(i.a,{href:"https://github.com/hdygxsj",children:"@hdygxsj"}),"\n",(0,t.jsx)(i.a,{href:"https://github.com/hienduyph",children:"@hienduyph"}),"\n",(0,t.jsx)(i.a,{href:"https://github.com/jerqi",children:"@jerqi"}),"\n",(0,t.jsx)(i.a,{href:"https://github.com/jerryshao",children:"@jerryshao"}),"\n",(0,t.jsx)(i.a,{href:"https://github.com/justinmclean",children:"@justinmclean"}),"\n",(0,t.jsx)(i.a,{href:"https://github.com/liangyouze",children:"@liangyouze"}),"\n",(0,t.jsx)(i.a,{href:"https://github.com/liuchunhao",children:"@liuchunhao"}),"\n",(0,t.jsx)(i.a,{href:"https://github.com/luoshipeng",children:"@luoshipeng"}),"\n",(0,t.jsx)(i.a,{href:"https://github.com/mchades",children:"@mchades"}),"\n",(0,t.jsx)(i.a,{href:"https://github.com/orenccl",children:"@orenccl"}),"\n",(0,t.jsx)(i.a,{href:"https://github.com/pithecuse527",children:"@pithecuse527"}),"\n",(0,t.jsx)(i.a,{href:"https://github.com/rud9192",children:"@rud9192"}),"\n",(0,t.jsx)(i.a,{href:"https://github.com/sunxiaojian",children:"@sunxiaojian"}),"\n",(0,t.jsx)(i.a,{href:"https://github.com/theoryxu",children:"@theoryxu"}),"\n",(0,t.jsx)(i.a,{href:"https://github.com/waukin",children:"@waukin"}),"\n",(0,t.jsx)(i.a,{href:"https://github.com/xloya",children:"@xloya"}),"\n",(0,t.jsx)(i.a,{href:"https://github.com/xunliu",children:"@xunliu"}),"\n",(0,t.jsx)(i.a,{href:"https://github.com/yuqi1129",children:"@yuqi1129"})]}),"\n",(0,t.jsx)("sub",{children:"Apache, Apache Fink, Apache Hive, Apache Hudi, Apache Iceberg, Apache Ranger, Apache Spark, Apache Paimon and Apache Gravitino are either registered trademarks or trademarks of the Apache Software Foundation in the United States and/or other countries."})]})}function d(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},38389:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>h});var t=n(79474);const a={},s=t.createContext(a);function r(e){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function h(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);