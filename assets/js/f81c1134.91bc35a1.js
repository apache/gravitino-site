"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[48130],{77735:e=>{e.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"gravitino-0-7-0-release-notes","metadata":{"permalink":"/blog/gravitino-0-7-0-release-notes","editUrl":"https://github.com/apache/gravitino-site/tree/main/blog/2024-11-14-gravitino-0-7-0-release-notes.mdx","source":"@site/blog/2024-11-14-gravitino-0-7-0-release-notes.mdx","title":"Apache Gravitino 0.7.0 - strengthen the cloud support for Apache Gravitino\u2122 (incubating)","description":"Apache Gravitino 0.7.0 is the second major release after entering the ASF. In this release, the community","date":"2024-11-14T00:00:00.000Z","tags":[{"inline":true,"label":"apache","permalink":"/blog/tags/apache"},{"inline":true,"label":"gravitino","permalink":"/blog/tags/gravitino"},{"inline":true,"label":"metadata","permalink":"/blog/tags/metadata"},{"inline":true,"label":"multicloud","permalink":"/blog/tags/multicloud"}],"readingTime":5.665,"hasTruncateMarker":false,"authors":[{"name":"Jerry Shao","title":"PPMC Member","url":"https://github.com/jerryshao/","imageURL":"https://github.com/jerryshao.png","key":"jerryshao"}],"frontMatter":{"title":"Apache Gravitino 0.7.0 - strengthen the cloud support for Apache Gravitino\u2122 (incubating)","slug":"gravitino-0-7-0-release-notes","authors":["jerryshao"],"tags":["apache","gravitino","metadata","multicloud"]},"unlisted":false,"nextItem":{"title":"Apache Gravitino 0.6.1 release for Apache Gravitino\u2122 (incubating)","permalink":"/blog/gravitino-0-6-1-release-notes"}},"content":"Apache Gravitino 0.7.0 is the second major release after entering the ASF. In this release, the community\\nmainly focused on strengthening cloud support to make Gravitino work better in cloud environments.\\n\\nThis release blog will briefly introduce the new features related to cloud support and other\\nsignificant features and improvements. Please keep reading to learn more about what the community has worked on.\\n\\n## Cloud storage support for Gravitino\\n\\nAs more and more users run their data stacks in the cloud and use cloud object storage, cloud\\nstorage support has become an imperative requirement. In this release, the community has mainly focused on\\nadding cloud storage support for Gravitino to make sure Gravitino itself and its connectors/sources\\ncan work smoothly with cloud storage.\\n\\nIn this release:\\n\\n* Gravitino Iceberg REST catalog server now supports different cloud storage services, including AWS S3,\\n  Google GCS, Aliyun OSS. Users can simply configure it to make it work.\\n* Gravitino Fileset catalog now supports managing files (objects) stored in S3, GCS, and OSS.\\n  Gravitino provides both server-side pluggable framework and client-side Java / Python GVFS\\n  (Gravitino Virtual File System) SDK. Users can easily use their existing tools with the\\n  Gravitino provided bundled packages to access the data in the cloud. Also,\\n  Gravitino provides a pluggable framework for users to implement their own storage support.\\n* Gravitino\u2019s Hive, Paimon, and Iceberg catalogs also adds and verifies the support with\\n  different cloud storage.\\n* Gravitino\u2019s Spark and Trino connectors also verifies cloud storage support.\\n\\nOverall, with the 0.7.0 release, Gravitino generally supports working with different cloud storage services.\\nTo know more, you can check our issue [#4396](https://github.com/apache/gravitino/issues/4396). Also,\\nwe\u2019re continuing to add more cloud storage support in future releases. Please stay tuned.\\n\\n## Credential vending support in Gravitino\\n\\nBesides cloud storage support, credential vending support is also vital for Gravitino,\\nespecially to work with cloud storage. The traditional way of using AKSK is not convenient or safe.\\nWith credential vending technology, the Gravitino server will help users get temporary tokens for\\nauthentication, significantly simplifying the client-side configurations and centralizing authentications.\\n\\nGravitino 0.7.0 introduces a framework to support Credential vending and also adds S3 and GCS\\ntoken support. This framework is integrated into Gravitino\'s Iceberg REST catalog service. So\\nusers can smoothly access Iceberg tables on S3 and GCS with authentication.\\n\\nThis is just the first step of credential vending, and we will add more integrations with Gravitino,\\nlike fileset support, connector support, etc, in the next release.\\n\\nFor the details of credential vending, please check the issue [#4398](https://github.com/apache/gravitino/issues/4398)\\nand the [design document](https://docs.google.com/document/d/1fovK0ylSmI45ynrCPcnRZqzyPDn7DRNb_ExdbjVPq0k/edit?tab=t.0#heading=h.1cts6muko2j1).\\n\\n## Unified access control improvements\\n\\nGravitino 0.6.0 introduced the alpha version of unified access control with Apache Ranger\\nsupport ([here](https://gravitino.apache.org/blog/gravitino-0-6-0-release-notes#introducing-the-unified-rbac-model-for-gravitino)),\\nbut this feature still needs improvement. In version 0.7.0, we added many improvements and bug fixes to make this end-to-end access control workable. Now, with the release of\\n0.7.0, the Gravitino unified access control works well with Spark and Ranger to secure end-to-end table access. To see what we have fixed, please check out our issue [#4615](https://github.com/apache/gravitino/issues/4615).\\nYou can also try our [playground](https://github.com/apache/gravitino-playground) to try out the\\nunified access control feature.\\n\\n## Centralized audit log support\\n\\nThanks to the community, Gravitino now supports centralized audit logs. With this feature enabled,\\nusers can get the audit information in a centralized place, whether they\u2019re accessing tables or filesets from various sources.\\n\\nGravitino\u2019s audit log framework also supports different plugin formatters and writers, and users\\ncan implement their own log format and output destinations.\\n\\nPlease see the issues [#4887](https://github.com/apache/gravitino/issues/4887)\\nand [#4021](https://github.com/apache/gravitino/issues/4021) to know more about Gravitino\u2019s\\ncentralized audit log.\\n\\n## New data sources support\\n\\nAs a unified data catalog, the community always aims to add more data sources. In\\nthis version, Gravitino adds two new data sources. One is [Apache Hudi](https://hudi.apache.org/),\\nthe other is [OceanBase](https://github.com/oceanbase/oceanbase). You can now use Gravitino to\\nmanipulate Hudi and Oceanbase metadata in a unified manner.\\n\\n## Various core features\\n\\nApart from the features listed above, this version also improves a lot at its core, here are several important features:\\n\\n* Add PostgreSQL support for storage backend [#4101](https://github.com/apache/gravitino/issues/4101).\\n  Gravitino already supports using MySQL, H2 as its backend metadata storage. In 0.7.0, the\\n  community adds the PostgreSQL support to enlarge its adoption.\\n* Unify the catalog and metalake drop behavior [#5031](https://github.com/apache/gravitino/issues/5031).\\n  In the previous version, we didn\u2019t enforce the behavior of catalog and metadata drop operations.\\n  In this version, we redefine its behavior and make it much safer.\\n* Manage columns in Gravitino [#4493](https://github.com/apache/gravitino/issues/4493).\\n  In 0.7.0, we introduce the column entity in Gravitino, which Gravitino can manage.\\n  With this feature introduced, Gravitino can now support tagging on columns, and in future, it\\n  will support column-level operations.\\n* Add an event listener for Iceberg REST catalog server [#5204](https://github.com/apache/gravitino/issues/5204)\\n  and support pre-event for event listener [#5112](https://github.com/apache/gravitino/issues/5112).\\n\\n## Other notable enhancements\\n\\n### Gravitino core\\n\\n* Supporting storing column metadata in Gravitino [#4493](https://github.com/apache/gravitino/issues/4493).\\n* Support pre-event for Gravitino [#5049](https://github.com/apache/gravitino/issues/5049).\\n* Unify drop metalake and catalog behavior [#5031](https://github.com/apache/gravitino/issues/5031).\\n* Add credential vending support in Gravitino [#4398](https://github.com/apache/gravitino/issues/4398).\\n* Support audit log in Gravitino [#4887](https://github.com/apache/gravitino/issues/4887).\\n* Shrink the package size of Gravitino [#4513](https://github.com/apache/gravitino/issues/4513).\\n\\n### Iceberg REST catalog server\\n\\n* Add credential vending for Iceberg REST server. [#4993](https://github.com/apache/gravitino/issues/4993).\\n* Add an event listener for Iceberg REST server [#5204](https://github.com/apache/gravitino/issues/5204).\\n* Support pre-event for event listener [#5112](https://github.com/apache/gravitino/issues/5112).\\n\\n### Catalog related\\n\\n* Add OSS support for fileset catalog [#5173](https://github.com/apache/gravitino/issues/5173).\\n* Add GCS support for fileset catalog [#5074](https://github.com/apache/gravitino/issues/5074).\\n* Add S3 support for fileset catalog [#3379](https://github.com/apache/gravitino/issues/3379).\\n* Add pluggable storage support for fileset catalog [#5019](https://github.com/apache/gravitino/issues/5019).\\n* Add S3 support for Paimon catalog [#4938](https://github.com/apache/gravitino/issues/4938).\\n* Add catalog support for Hudi [#4306](https://github.com/apache/gravitino/issues/4306).\\n* Add catalog support for OceanBase[#4848](https://github.com/apache/gravitino/issues/4848).\\n\\n### API and client\\n\\n* Add S3 fileset support for Python GVFS client  [#5188](https://github.com/apache/gravitino/issues/5188).\\n* Add GCS fileset support for Python GVFS client [#5139](https://github.com/apache/gravitino/issues/5139).\\n* Add OSS fileset support for Python GVFS client [#5221](https://github.com/apache/gravitino/issues/5221).\\n* Supports unified auditing of Fileset metadata and data operations [#4021](https://github.com/apache/gravitino/issues/4021).\\n* Support OAuth2 in Python GVFS [#3758](https://github.com/apache/gravitino/issues/3758).\\n\\n### UI\\n\\n* Add UI support for operating fileset [#5167](https://github.com/apache/gravitino/issues/5167).\\n* Add UI support for operating schema [#5140](https://github.com/apache/gravitino/issues/5140).\\n\\nAll the resolved issues targeting the 0.7.0 release can be seen at https://github.com/apache/gravitino/issues?q=is%3Aissue+is%3Aclosed+label%3A0.7.0+.\\n\\n## Overall\\n\\nApache Gravitino 0.7.0 is the second ASF release. This version adds a bunch of new features. We thank the Gravitino community for their continued support and valuable\\ncontributions. Thanks to our users\' feedback, we can continue to innovate and build,\\nso thanks to all those reading this!\\n\\nTo further explore the Gravitino 0.7.0 release, please check [the documentation](https://gravitino.apache.org/docs/0.7.0-incubating).\\nYour feedback is invaluable to the community and the project.\\n\\n## Credits\\n\\nThis release acknowledges the hard work and dedication of all contributors who have helped make this release possible.\\n\\n[@FANNG1](https://github.com/FANNG1)\\n[@LauraXia123](https://github.com/LauraXia123)\\n[@LindaSummer](https://github.com/LindaSummer)\\n[@LiuQhahah](https://github.com/LiuQhahah)\\n[@Naresh-kumar-Thodupunoori](https://github.com/Naresh-kumar-Thodupunoori)\\n[@SeanAverS](https://github.com/SeanAverS)\\n[@caican00](https://github.com/caican00)\\n[@coolderli](https://github.com/coolderli)\\n[@diqiu50](https://github.com/diqiu50)\\n[@featherchen](https://github.com/featherchen)\\n[@hanwxx](https://github.com/hanwxx)\\n[@jerqi](https://github.com/jerqi)\\n[@jerryshao](https://github.com/jerryshao)\\n[@jingjia88](https://github.com/jingjia88)\\n[@justinmclean](https://github.com/justinmclean)\\n[@koonchen](https://github.com/koonchen)\\n[@lsyulong](https://github.com/lsyulong)\\n[@lw-yang](https://github.com/lw-yang)\\n[@mchades](https://github.com/mchades)\\n[@noidname01](https://github.com/noidname01)\\n[@puchengy](https://github.com/puchengy)\\n[@shaofengshi](https://github.com/shaofengshi)\\n[@theoryxu](https://github.com/theoryxu)\\n[@xiaozcy](https://github.com/xiaozcy)\\n[@xloya](https://github.com/xloya)\\n[@xunliu](https://github.com/xunliu)\\n[@yangyuxia](https://github.com/yangyuxia)\\n[@yaoderek](https://github.com/yaoderek)\\n[@yuanoOo](https://github.com/yuanoOo)\\n[@yuqi1129](https://github.com/yuqi1129)"},{"id":"gravitino-0-6-1-release-notes","metadata":{"permalink":"/blog/gravitino-0-6-1-release-notes","editUrl":"https://github.com/apache/gravitino-site/tree/main/blog/2024-10-21-gravitino-0-6-1-release-notes.mdx","source":"@site/blog/2024-10-21-gravitino-0-6-1-release-notes.mdx","title":"Apache Gravitino 0.6.1 release for Apache Gravitino\u2122 (incubating)","description":"We are pleased to announce the stable release of Gravitino 0.6.1-incubating, based on branch-0.6.","date":"2024-10-21T00:00:00.000Z","tags":[{"inline":true,"label":"apache","permalink":"/blog/tags/apache"},{"inline":true,"label":"gravitino","permalink":"/blog/tags/gravitino"},{"inline":true,"label":"metadata","permalink":"/blog/tags/metadata"},{"inline":true,"label":"multicloud","permalink":"/blog/tags/multicloud"}],"readingTime":2.085,"hasTruncateMarker":false,"authors":[{"name":"Minghuang Li","title":"PPMC Member","url":"https://github.com/mchades/","imageURL":"https://github.com/mchades.png","key":"Minghuang Li"}],"frontMatter":{"title":"Apache Gravitino 0.6.1 release for Apache Gravitino\u2122 (incubating)","slug":"gravitino-0-6-1-release-notes","authors":["Minghuang Li"],"tags":["apache","gravitino","metadata","multicloud"]},"unlisted":false,"prevItem":{"title":"Apache Gravitino 0.7.0 - strengthen the cloud support for Apache Gravitino\u2122 (incubating)","permalink":"/blog/gravitino-0-7-0-release-notes"},"nextItem":{"title":"Apache Gravitino 0.6.0 - First ASF release for Apache Gravitino\u2122 (incubating)","permalink":"/blog/gravitino-0-6-0-release-notes"}},"content":"We are pleased to announce the stable release of Gravitino 0.6.1-incubating, based on branch-0.6.\\nThis release brings a suite of new features and enhancements, particularly focusing on the unified\\naccess control system. Additionally, it includes various bug fixes and optimizations across other \\ncomponents.\\n\\n## Security\\n\\n- Supports list users [#3348](https://github.com/apache/gravitino/issues/3348)\\n- Supports list roles [#3346](https://github.com/apache/gravitino/issues/3346)\\n- Supports list roles by object [#4886](https://github.com/apache/gravitino/issues/4886)\\n- Supports list group [#4873](https://github.com/apache/gravitino/issues/4873)\\n- Supports grant or revoke privileges for a role [#4903](https://github.com/apache/gravitino/issues/4903)\\n- Improved security with additional checks for privilege APIs [#5054](https://github.com/apache/gravitino/issues/5054) [#5070](https://github.com/apache/gravitino/issues/5070)\\n- Fix Hive metastore authentication failed when creating a role [#4960](https://github.com/apache/gravitino/issues/4960)\\n- Remove role local cache [#4246](https://github.com/apache/gravitino/issues/4246)\\n- Addressed a response error in Ranger when calling the Ranger CREATE_GROUP API [#4975](https://github.com/apache/gravitino/issues/4975)\\n\\n## Gravitino Core\\n\\n- Fixed an issue with updating comments in metalake or catalog operations [#4845](https://github.com/apache/gravitino/issues/4845)\\n- Introduced a basic framework to support multiple JDBC backends [#4832](https://github.com/apache/gravitino/issues/4832) [#4868](https://github.com/apache/gravitino/issues/4868)\\n- Fixed a cleanup bug occurring after failed catalog creation attempts [#5082](https://github.com/apache/gravitino/issues/5082)\\n\\n## Tag\\n\\n- Transitioned Tag REST APIs to Object path for improved management [#5000](https://github.com/apache/gravitino/issues/5000)\\n\\n## Catalogs\\n\\n### Iceberg\\n\\n- Use unified logic to transform catalog backend name to handle the renaming of catalog [#4718](https://github.com/apache/gravitino/issues/4718)\\n\\n### Doris\\n\\n- Fix the missing distribution information when loading Doris tables [#4988](https://github.com/apache/gravitino/issues/4988)\\n\\n## Trino Connector\\n\\n- Corrected the default precision settings for Time and Timestamp column types in the Iceberg catalog [#4743](https://github.com/apache/gravitino/issues/4743)\\n\\n## UI\\n\\n- Supports creating Paimon catalog [#4742](https://github.com/apache/gravitino/issues/4742)\\n- Improved user experience by showing an expand arrow when reloading tree nodes [#5042](https://github.com/apache/gravitino/issues/5042)\\n\\n## Build and Others\\n\\n- Fix the env of openAPI lint plugin [#4876](https://github.com/apache/gravitino/issues/4876)\\n- Addressed an Out Of Memory (OOM) issue during Trino connector tests [#4871](https://github.com/apache/gravitino/issues/4871)\\n- Resolved a test failure in testCheckLinkDocs for the web module [#4914](https://github.com/apache/gravitino/issues/4914)\\n- Increase the Python timeout minutes to 45 minutes [#5038](https://github.com/apache/gravitino/issues/5038)\\n- Ensured that TestHiveTableOperations can be run independently [#4851](https://github.com/apache/gravitino/issues/4851)\\n- Added LICENSE and NOTICE files for the Iceberg REST binary to comply with licensing requirements [#5010](https://github.com/apache/gravitino/issues/5010)\\n\\n## Limitations and Known Issues\\n\\n- Please be aware that the Ranger authorization plugin within the unified access control system may exhibit some limitations and known issues. For detailed information, refer to issue [#5115](https://github.com/apache/gravitino/issues/5115).\\n\\n## Credits\\n\\nWe would like to thank the following contributors for their valuable contributions to this release:\\n\\n[@diqiu50](https://github.com/diqiu50)\\n[@FANNG1](https://github.com/FANNG1)\\n[@jerqi](https://github.com/jerqi)\\n[@jerryshao](https://github.com/jerryshao)\\n[@justinmclean](https://github.com/justinmclean)\\n[@LauraXia123](https://github.com/LauraXia123)\\n[@LindaSummer](https://github.com/LindaSummer)\\n[@LiuQhahah](https://github.com/LiuQhahah)\\n[@lsyulong](https://github.com/lsyulong)\\n[@lw-yang](https://github.com/lw-yang)\\n[@mchades](https://github.com/mchades)\\n[@tyoushinya](https://github.com/tyoushinya)\\n[@yangyuxia](https://github.com/yangyuxia)\\n[@yuqi1129](https://github.com/yuqi1129)\\n\\n<sub>Apache, Apache Iceberg, Apache Hive, Apache Fink, Apache Paimon and Apache Gravitino are either\\nregistered trademarks or trademarks of the Apache Software Foundation in the United States \\nand/or other countries.</sub>"},{"id":"gravitino-0-6-0-release-notes","metadata":{"permalink":"/blog/gravitino-0-6-0-release-notes","editUrl":"https://github.com/apache/gravitino-site/tree/main/blog/2024-09-09-gravitino-0-6-0-release-notes.mdx","source":"@site/blog/2024-09-09-gravitino-0-6-0-release-notes.mdx","title":"Apache Gravitino 0.6.0 - First ASF release for Apache Gravitino\u2122 (incubating)","description":"This blog post will briefly introduce the new features and significant improvements. Keep reading to","date":"2024-09-09T00:00:00.000Z","tags":[{"inline":true,"label":"apache","permalink":"/blog/tags/apache"},{"inline":true,"label":"gravitino","permalink":"/blog/tags/gravitino"},{"inline":true,"label":"metadata","permalink":"/blog/tags/metadata"},{"inline":true,"label":"multicloud","permalink":"/blog/tags/multicloud"}],"readingTime":6.065,"hasTruncateMarker":false,"authors":[{"name":"Jerry Shao","title":"PPMC Member","url":"https://github.com/jerryshao/","imageURL":"https://github.com/jerryshao.png","key":"jerryshao"}],"frontMatter":{"title":"Apache Gravitino 0.6.0 - First ASF release for Apache Gravitino\u2122 (incubating)","slug":"gravitino-0-6-0-release-notes","authors":["jerryshao"],"tags":["apache","gravitino","metadata","multicloud"]},"unlisted":false,"prevItem":{"title":"Apache Gravitino 0.6.1 release for Apache Gravitino\u2122 (incubating)","permalink":"/blog/gravitino-0-6-1-release-notes"},"nextItem":{"title":"Gravitino is an Open Source Data and AI Multi-Cloud Solution","permalink":"/blog/gravitino-open-source"}},"content":"This blog post will briefly introduce the new features and significant improvements. Keep reading to\\nlearn what the community has worked on and understand Gravitino\u2019s use cases.\\n\\n## Introducing the unified RBAC model for Gravitino\\n\\nAccess control is a crucial feature for the enterprise use of a data catalog, providing users with\\nunified and centralized authorization and authentication capabilities. This release introduces a\\nrole-based access control (RBAC) model in Gravitino to authorize different securable objects in a\\nunified manner.\\n\\nWe use `Privilege`, `SecurableObject`, `Role`, `User`, and `Group` to define the permissions.\\n\\n![RBAC model](./assets/rbac-img1.png)\\n\\n**Privilege**\\n\\nPrivilege defines the types of operations on different metadata objects, and is used to allow or\\ndeny a specific type of operation on a metadata object.\\n\\n**SecurableObject**\\n\\nSecurableObject binds multiple operation-specific types of privileges to a single metadata object.\\n\\n**Role**\\n\\nA Role is a collection of SecurableObjects, and a role represents multiple operation type\\npermissions on multiple metadata objects.\\n\\n**User**\\nUsers are granted one or multiple roles, and users have different operating privileges depending \\non their roles.\\n\\n**Group**\\n\\nTo make it easier to grant a single permission to multiple users, we can add users to a group,\\nand then grant one or more roles to that user group. This process allows all users belonging to\\nthat user group to have the permissions in those roles.\\n\\nMore importantly, the privileges authorized by the user in Gravitino will be pushed down to\\nthe underlying permission system. Currently, we support push permissions to Apache Ranger,\\nothers like IAM are under development.\\n\\n![Authorization flow](./assets/rbac-img2.png)\\n\\nFor more information about how our RBAC works, please check out our [design document](https://docs.google.com/document/d/11MF1PTN5UTKJf3WLuHqhCikQzJoLxaXM_AEDZpXhO2I/edit?usp=sharing).\\nTo enable and use access control in Gravitino, please refer to the [user document](https://gravitino.apache.org/docs/0.6.0-incubating/security/access-control).\\n\\nOur implementation of unified access control capability is still in the alpha stage, and we\u2019re\\nstriving to add more features and make it stable as soon as possible, so please stay tuned.\\n\\n## Separation of the Iceberg REST catalog service\\n\\nApache Iceberg is a first-class citizen, and Gravitino has provided an embedded Iceberg REST catalog\\nservice since version 0.3. We have seen the increased demands and adoption of Iceberg REST catalog\\nservice as a standalone server. So, in version 0.6.0, we refactored the whole architecture and\\nmodularized the Iceberg REST catalog service as a standalone service, allowing it to be deployed\\nwith or without the Gravitino server. Besides the refactoring, we also bumped the supported version\\nto Iceberg 1.5.2, added support for S3 cloud storage, and now support the `registerTable` interface.\\n\\nIceberg REST catalog support is crucial to Gravitino, and modularization is just the first step.\\nIn future releases, we will add more features like cloud storage support and integrating Gravitino\u2019s\\nRBAC model, credential vending, etc.\\n\\nTo use the Gravitino Iceberg REST catalog service, please check our [user document](https://gravitino.apache.org/docs/0.6.0-incubating/iceberg-rest-service).\\nThe umbrella issue is [#4058](https://github.com/apache/gravitino/issues/4058).\\n\\n## Tagging support\\n\\nTagging on metadata objects is useful for data discovery, classification, and data governance.\\nIt can also be leveraged by query engines to provide tag-based access control. In Gravitino 0.6.0,\\nwe introduce tag support users can add tags on metadata objects like `CATALOG`, `SCHEMA`, `TABLE`,\\n`FILESET`, and `TOPIC`. To know how our tag system is designed, please check out the \\n[design document](https://docs.google.com/document/d/1zkQWla8OMIPY61HqKUivpf43cTteNvcd2w_oA32yAfg/edit#heading=h.26ac49mb3u1q)\\nand issue [#3344](https://github.com/apache/gravitino/issues/3344). To use \\ntags in both REST API and Java SDK, please see [how to manage tags](https://gravitino.apache.org/docs/0.6.0-incubating/manage-tags-in-gravitino).\\n\\n## Apache Flink Gravitino connector\\n\\nAs an open data catalog, we want to be able to support all query engines. Therefore, alongside Trino\\nand Apache Spark, we have added Apache Flink as our newest supported query engine.\\n\\nIn 0.6.0, we added a new Flink Gravitino connector [#1354](https://github.com/apache/gravitino/issues/1354)\\nand supported querying Hive tables using Flink with Gravitino. Hive support is just our first step,\\nwe will continue to add more table support.\\n\\nTo know how to use the Flink Gravitino connector, please refer to our [documentation](https://gravitino.apache.org/docs/0.6.0-incubating/flink-connector/flink-connector).\\n\\n## Apache Paimon table management in Gravitino\\n\\nApache Paimon has become quite popular this year, and many companies use Paimon to build their\\nstreaming warehouse or lakehouse. To manage all the lakehouse tables in a unified manner, Gravitino\\nhas added Paimon table management in 0.6.0 [#1129](https://github.com/apache/gravitino/issues/1129).\\nUsers can use our unified API to manage Paimon tables as well as other tables.\\nTo know more about how to manage Paimon tables, please refer to [Lakehouse Paimon Catalog document](https://gravitino.apache.org/docs/0.6.0-incubating/lakehouse-paimon-catalog).\\n\\n## Add Python GVFS support for fileset\\n\\nIn Gravitino 0.5, we added a Java Hadoop Compatible Filesystem (HCFS) support (GVFS) for fileset\\nread/write in Gravitino. The provided Java GVFS can be used by query engines like Apache Spark to\\nread/write data from files or folders. Although this works well in big data, AI development is\\nlargely dominated by Python, which can create an obstacle and hinder users from using Fileset with AI frameworks.\\n\\nIn 0.6.0, we followed the Python fsspec to provide a Python GVFS package that can be used by popular\\nPython frameworks like Apache Arrow, Pandas, Ray, LlamaIndex, and more. You can check \\nout [Python GVFS document](https://gravitino.apache.org/docs/0.6.0-incubating/how-to-use-gvfs#2-managing-files-of-fileset-with-python-gvfs) for more information.\\n\\n## Notable enhancements\\n\\n### Gravitino core\\n\\n* Support catalog reload after a property is altered [#2267](https://github.com/apache/gravitino/issues/2267).\\n* Deprecate KV store and add H2 support as embedded storage backend [#3968](https://github.com/apache/gravitino/issues/3968).\\n\\n### Catalog relate\\n\\n* Add API test catalog connection [#4107](https://github.com/apache/gravitino/issues/4107). \\n* Improve the type system to support unknown types [#3427](https://github.com/apache/gravitino/issues/3427). \\n* Add Kerberos support for fileset Hadoop catalog [#3462](https://github.com/apache/gravitino/issues/3462). \\n* Add S3 support for Iceberg [#4264](https://github.com/apache/gravitino/issues/4264). \\n* Support cloud and region property when creating catalog [#3966](https://github.com/apache/gravitino/issues/3966). \\n* Support multiple Kerberos authentication for Hive catalog [#3906](https://github.com/apache/gravitino/issues/3906). \\n* Unify the behavior of purge for all the catalogs [#3685](https://github.com/apache/gravitino/issues/3685).\\n\\n### API and client\\n\\n* Refactor Java and Python API for better user experience [#3626](https://github.com/apache/gravitino/issues/3626).\\n* Add missing error handlers in Python client [#4225](https://github.com/apache/gravitino/issues/4225).\\n\\nAll the resolved issues targeting the 0.6.0 release can be seen at https://github.com/apache/gravitino/issues?page=12&q=is%3Aissue+is%3Aclosed+label%3A0.6.0.\\n\\n## Overall\\n\\nApache Gravitino 0.6.0 is the first ASF release, we would like to show appreciation to the Gravitino\\ncommunity for their continued support and valuable contributions. Thanks to the feedback of our users,\\nwe are able to continue to innovate and build, so thanks to all those reading this!\\n\\nTo explore Gravitino 0.6.0 release, please check [the documentation](https://gravitino.apache.org/docs/0.6.0-incubating).\\nYour feedback is invaluable to the community and the project.\\n\\n## Credits\\nThis release acknowledges the hard work and dedication of all contributors who have helped make this\\nrelease possible.\\n\\n[@1996fanrui](https://github.com/1996fanrui)\\n[@BSSsunny](https://github.com/BSSsunny)\\n[@FANNG1](https://github.com/FANNG1)\\n[@IamSaker](https://github.com/IamSaker)\\n[@JinsYin](https://github.com/JinsYin)\\n[@JosefinaOller](https://github.com/JosefinaOller)\\n[@LanceHsun](https://github.com/LanceHsun)\\n[@LauraXia123](https://github.com/LauraXia123)\\n[@Leonidas963](https://github.com/Leonidas963)\\n[@LindaSummer](https://github.com/LindaSummer)\\n[@MukarramHaq](https://github.com/MukarramHaq)\\n[@Naresh-kumar-Thodupunoori](https://github.com/Naresh-kumar-Thodupunoori)\\n[@Nishtha-Jain-1119](https://github.com/Nishtha-Jain-1119)\\n[@SteNicholas](https://github.com/SteNicholas)\\n[@TEOTEO520](https://github.com/TEOTEO520)\\n[@Vishesh-Paliwal](https://github.com/Vishesh-Paliwal)\\n[@ashwin1596](https://github.com/ashwin1596)\\n[@bknbkn](https://github.com/bknbkn)\\n[@caican00](https://github.com/caican00)\\n[@ch3yne](https://github.com/ch3yne)\\n[@charliecheng630](https://github.com/charliecheng630)\\n[@coolderli](https://github.com/coolderli)\\n[@danhuawang](https://github.com/danhuawang)\\n[@diqiu50](https://github.com/diqiu50)\\n[@featherchen](https://github.com/featherchen)\\n[@hanwxx](https://github.com/hanwxx)\\n[@ian910297](https://github.com/ian910297)\\n[@jenish-thapa](https://github.com/jenish-thapa)\\n[@jerqi](https://github.com/jerqi)\\n[@jerryshao](https://github.com/jerryshao)\\n[@jingjia88](https://github.com/jingjia88)\\n[@jtao1](https://github.com/jtao1)\\n[@justinmclean](https://github.com/justinmclean)\\n[@kalencaya](https://github.com/kalencaya)\\n[@khmgobe](https://github.com/khmgobe)\\n[@kiratkumar47](https://github.com/kiratkumar47)\\n[@kohantikanath](https://github.com/kohantikanath)\\n[@kristopherkane](https://github.com/kristopherkane)\\n[@lsyulong](https://github.com/lsyulong)\\n[@lw-yang](https://github.com/lw-yang)\\n[@mchades](https://github.com/mchades)\\n[@mygrsun](https://github.com/mygrsun)\\n[@noidname01](https://github.com/noidname01)\\n[@pan3793](https://github.com/pan3793)\\n[@pravo23](https://github.com/pravo23)\\n[@qqqttt123](https://github.com/qqqttt123)\\n[@rich7420](https://github.com/rich7420)\\n[@rohit-satya](https://github.com/rohit-satya)\\n[@shaofengshi](https://github.com/shaofengshi)\\n[@theoryxu](https://github.com/theoryxu)\\n[@totalo](https://github.com/totalo)\\n[@unknowntpo](https://github.com/unknowntpo)\\n[@xiaozcy](https://github.com/xiaozcy)\\n[@xloya](https://github.com/xloya)\\n[@xunliu](https://github.com/xunliu)\\n[@yijhenlin](https://github.com/yijhenlin)\\n[@yuqi1129](https://github.com/yuqi1129)\\n[@zhoukangcn](https://github.com/zhoukangcn)\\n[@zivali](https://github.com/zivali)\\n\\nApache Gravitino is an effort undergoing incubation at The Apache Software Foundation (ASF),\\nsponsored by ASF Incubator. Incubation is required of all newly accepted projects until a further\\nreview indicates that the infrastructure, communications, and decision making process have\\nstabilized in a manner consistent with other successful ASF projects. While incubation status is not\\nnecessarily a reflection of the completeness or stability of the code, it does indicate that the\\nproject has yet to be fully endorsed by the ASF.\\n\\n<sub>Apache, Apache Iceberg, Apache Hive, Apache Fink, Apache Paimon and Apache Gravitino are either\\nregistered trademarks or trademarks of the Apache Software Foundation in the United States \\nand/or other countries.</sub>"},{"id":"gravitino-open-source","metadata":{"permalink":"/blog/gravitino-open-source","editUrl":"https://github.com/apache/gravitino-site/tree/main/blog/2024-07-05-gravitino.mdx","source":"@site/blog/2024-07-05-gravitino.mdx","title":"Gravitino is an Open Source Data and AI Multi-Cloud Solution","description":"In the ever-evolving landscape of data and artificial intelligence, innovation is the key driver of progress. Gravitino is an open source, next-generation data and AI platform. Gravitino aims to unify all aspects of your data, analytics, and AI in one seamless accessible platform.","date":"2024-07-05T00:00:00.000Z","tags":[{"inline":true,"label":"apache","permalink":"/blog/tags/apache"},{"inline":true,"label":"gravitino","permalink":"/blog/tags/gravitino"},{"inline":true,"label":"metadata","permalink":"/blog/tags/metadata"},{"inline":true,"label":"multicloud","permalink":"/blog/tags/multicloud"}],"readingTime":3.06,"hasTruncateMarker":false,"authors":[{"name":"Justin Mclean","title":"PPMC Member","url":"https://github.com/justinmclean/","imageURL":"https://github.com/justinmclean.png","key":"jmclean"}],"frontMatter":{"title":"Gravitino is an Open Source Data and AI Multi-Cloud Solution","slug":"gravitino-open-source","authors":["jmclean"],"tags":["apache","gravitino","metadata","multicloud"]},"unlisted":false,"prevItem":{"title":"Apache Gravitino 0.6.0 - First ASF release for Apache Gravitino\u2122 (incubating)","permalink":"/blog/gravitino-0-6-0-release-notes"}},"content":"In the ever-evolving landscape of data and artificial intelligence, innovation is the key driver of progress. Gravitino is an open source, next-generation data and AI platform. Gravitino aims to unify all aspects of your data, analytics, and AI in one seamless accessible platform.\\n\\n## The power of open source\\nOpen source embodies collaboration, transparency, and community-driven development. Making Gravitino open source and as an incubating project of the Apache Software Foundation extends an invitation to developers worldwide to participate in shaping the future of multi-cloud data management and analytics.\\n\\n## Unified data, analytics, and AI fabric\\nGravitino isn\'t just a tool; it\'s a fabric that weaves together all your data, analytics, and AI into a single, unified platform. Regardless of where your data resides, be it in various public or private cloud environments, different vendors or different regions, Gravitino provides a solution and delivers optimal performance and cost efficiency.\\n\\n## Operational Simplicity\\nGravitino offers a unified perspective of all your data and AI models, ensuring seamless access to all your data. Gravitino empowers users with operational simplicity, allowing them to focus on deriving insights rather than managing complex data infrastructure.\\n\\n## Developer experience\\nFor developers, Gravitino enables a unified ANSI standard-compatible SQL interface, making data handling ETL-free and codeless. Its REST interface, coupled with a built-in SQL optimizer and intelligent query execution, ensures an efficient developer experience. Gravitino empowers developers to focus on innovation rather than grappling with the intricacies of data handling.\\n\\n## Performance and cost efficiency\\nGravitino aims to take data management to the next level by eliminating unnecessary data transmission, providing the best performance for data queries on multi-cloud environments. With global data acceleration, Gravitino enables faster and more cost-effective data analysis. This performance boost ensures that organizations can derive insights quicker and more efficiently.\\n\\n## Data source connection, data virtualization, federated computing\\nGravitino comes equipped with enterprise-ready connectors for seamless access to cloud data lakes with a focus on high performance. It offers a unified experience for data in remote regions through data virtualization, progress on intelligent acceleration, and allows effortless data analysis and training across different data sources, breaking down traditional silos.\\n\\n## Why Gravitino?\\n\\n### Breaking down data silos\\nGravitino tackles the age-old challenge of data silos by providing a unified metadata management and federated analytics engine. This allows for direct data analysis from various cloud and SaaS services without the need for time-consuming ETL processes.\\n\\n### Query federation and in-situ analysis\\nGravitino is creating a world where users can access data from diverse systems within a single query, eliminating the need for complex data replication and transformation processes.\\n\\n### Open source commitment\\nGravitino\'s journey isn\'t just about software; it\'s about community-driven development. Actively engaged in open source development under the Apache License, a business-friendly permissive license, join the developer community to be part of this exciting journey.\\n\\n### The future of multi-cloud data management\\nIn the era of data-driven decision-making, Gravitino emerges as a beacon of innovation and collaboration. Embracing open source, the belief in the power of community-driven development to shape the future of data and AI is evident. Gravitino isn\'t just a platform; it represents a movement toward a more connected, efficient, and accessible data landscape. Join the journey to redefine the possibilities of data management and analytics with Gravitino, the next-generation data and AI fabric.\\n\\nDiscover the power of Gravitino, an open source platform reshaping multi-cloud data and AI. Join the community and redefine the possibilities of data management. Get started on GitHub!, on GitHub you also find documentation and a Docker playground to help get you started, you can also join the community slack channel to discuss ideas and seek help."}]}}')}}]);