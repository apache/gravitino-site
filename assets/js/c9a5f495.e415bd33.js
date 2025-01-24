"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[36369],{45081:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>u});var n=a(13274),i=a(38389),r=a(75863),l=a(64323);const s={title:"Manage table partition using Apache Gravitino",slug:"/manage-table-partition-using-gravitino",date:new Date("2024-02-03T00:00:00.000Z"),keyword:"table partition management",license:"This software is licensed under the Apache License version 2."},o=void 0,d={id:"manage-table-partition-using-gravitino",title:"Manage table partition using Apache Gravitino",description:"Introduction",source:"@site/versioned_docs/version-0.8.0-incubating/manage-table-partition-using-gravitino.md",sourceDirName:".",slug:"/manage-table-partition-using-gravitino",permalink:"/docs/0.8.0-incubating/manage-table-partition-using-gravitino",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/manage-table-partition-using-gravitino.md",tags:[],version:"0.8.0-incubating",lastUpdatedBy:"FANNG",lastUpdatedAt:173771221e4,frontMatter:{title:"Manage table partition using Apache Gravitino",slug:"/manage-table-partition-using-gravitino",date:"2024-02-03T00:00:00.000Z",keyword:"table partition management",license:"This software is licensed under the Apache License version 2."},sidebar:"docs",previous:{title:"Manage relational metadata",permalink:"/docs/0.8.0-incubating/manage-relational-metadata-using-gravitino"},next:{title:"Table partitioning, bucketing, sort ordering and indexes",permalink:"/docs/0.8.0-incubating/table-partitioning-bucketing-sort-order-indexes"}},c={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Requirements and limitations",id:"requirements-and-limitations",level:3},{value:"Partition operations",id:"partition-operations",level:2},{value:"Add partition",id:"add-partition",level:3},{value:"Get a partition by name",id:"get-a-partition-by-name",level:3},{value:"List partition names under a partitioned table",id:"list-partition-names-under-a-partitioned-table",level:3},{value:"List partitions under a partitioned table",id:"list-partitions-under-a-partitioned-table",level:3},{value:"Drop a partition by name",id:"drop-a-partition-by-name",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsx)(t.p,{children:"Although many catalogs inherently manage partitions automatically, there are scenarios where manual partition management is necessary. Usage scenarios like managing the TTL (Time-To-Live) of partition data, gathering statistics on partition metadata, and optimizing queries through partition pruning. For these reasons, Apache Gravitino provides capabilities of partition management."}),"\n",(0,n.jsx)(t.h3,{id:"requirements-and-limitations",children:"Requirements and limitations"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Partition management is based on the partitioned table, so please ensure that you are operating on a partitioned table."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"The following table shows the partition operations supported across various catalogs in Gravitino:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Operation"}),(0,n.jsx)(t.th,{children:"Hive catalog"}),(0,n.jsx)(t.th,{children:"Iceberg catalog"}),(0,n.jsx)(t.th,{children:"Jdbc-Mysql catalog"}),(0,n.jsx)(t.th,{children:"Jdbc-PostgreSQL catalog"}),(0,n.jsx)(t.th,{children:"Jdbc-Doris catalog"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Add Partition"}),(0,n.jsx)(t.td,{children:"\u2714"}),(0,n.jsx)(t.td,{children:"\u2718"}),(0,n.jsx)(t.td,{children:"\u2718"}),(0,n.jsx)(t.td,{children:"\u2718"}),(0,n.jsx)(t.td,{children:"\u2714"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Get Partition by Name"}),(0,n.jsx)(t.td,{children:"\u2714"}),(0,n.jsx)(t.td,{children:"\u2718"}),(0,n.jsx)(t.td,{children:"\u2718"}),(0,n.jsx)(t.td,{children:"\u2718"}),(0,n.jsx)(t.td,{children:"\u2714"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"List Partition Names"}),(0,n.jsx)(t.td,{children:"\u2714"}),(0,n.jsx)(t.td,{children:"\u2718"}),(0,n.jsx)(t.td,{children:"\u2718"}),(0,n.jsx)(t.td,{children:"\u2718"}),(0,n.jsx)(t.td,{children:"\u2714"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"List Partitions"}),(0,n.jsx)(t.td,{children:"\u2714"}),(0,n.jsx)(t.td,{children:"\u2718"}),(0,n.jsx)(t.td,{children:"\u2718"}),(0,n.jsx)(t.td,{children:"\u2718"}),(0,n.jsx)(t.td,{children:"\u2714"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Drop Partition"}),(0,n.jsx)(t.td,{children:"\u2714"}),(0,n.jsx)(t.td,{children:"\u2718"}),(0,n.jsx)(t.td,{children:"\u2718"}),(0,n.jsx)(t.td,{children:"\u2718"}),(0,n.jsx)(t.td,{children:"\u2714"})]})]})]}),"\n",(0,n.jsx)(t.admonition,{title:"WELCOME FEEDBACK",type:"tip",children:(0,n.jsxs)(t.p,{children:["If you need additional partition management support for a specific catalog, please feel free to ",(0,n.jsx)(t.a,{href:"https://github.com/apache/gravitino/issues/new/choose",children:"create an issue"})," on the ",(0,n.jsx)(t.a,{href:"https://github.com/apache/gravitino",children:"Gravitino repository"}),"."]})}),"\n",(0,n.jsx)(t.h2,{id:"partition-operations",children:"Partition operations"}),"\n",(0,n.jsx)(t.h3,{id:"add-partition",children:"Add partition"}),"\n",(0,n.jsxs)(t.p,{children:["You must match the partition types you want to add with the table's ",(0,n.jsx)(t.a,{href:"/docs/0.8.0-incubating/table-partitioning-bucketing-sort-order-indexes#table-partitioning",children:"partitioning"})," types; Gravitino currently supports adding the following partition types:"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Partition Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"identity"}),(0,n.jsxs)(t.td,{children:["An identity partition represents a result of identity ",(0,n.jsx)(t.a,{href:"/docs/0.8.0-incubating/table-partitioning-bucketing-sort-order-indexes#table-partitioning",children:"partitioning"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"range"}),(0,n.jsxs)(t.td,{children:["A range partition represents a result of range ",(0,n.jsx)(t.a,{href:"/docs/0.8.0-incubating/table-partitioning-bucketing-sort-order-indexes#table-partitioning",children:"partitioning"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"list"}),(0,n.jsxs)(t.td,{children:["A list partition represents a result of list ",(0,n.jsx)(t.a,{href:"/docs/0.8.0-incubating/table-partitioning-bucketing-sort-order-indexes#table-partitioning",children:"partitioning"}),"."]})]})]})]}),"\n",(0,n.jsx)(t.p,{children:"For JSON examples:"}),"\n",(0,n.jsxs)(r.A,{groupId:"partitions",children:[(0,n.jsxs)(l.default,{value:"identity",label:"identity",children:[(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "type": "identity",\n  "name": "dt=2008-08-08/country=us",\n  "fieldNames": [\n    [\n      "dt"\n    ],\n    [\n      "country"\n    ]\n  ],\n  "values": [\n    {\n      "type": "literal",\n      "dataType": "date",\n      "value": "2008-08-08"\n    },\n    {\n      "type": "literal",\n      "dataType": "string",\n      "value": "us"\n    }\n  ]\n}\n'})}),(0,n.jsxs)(t.admonition,{type:"note",children:[(0,n.jsxs)(t.p,{children:["The values of the field ",(0,n.jsx)(t.code,{children:"values"})," must be the same ordering as the values of ",(0,n.jsx)(t.code,{children:"fieldNames"}),"."]}),(0,n.jsx)(t.p,{children:"When adding an identity partition to a partitioned Hive table, the specified partition name is ignored. This is because Hive generates the partition name based on field names and values."})]})]}),(0,n.jsx)(l.default,{value:"range",label:"range",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "type": "range",\n  "name": "p20200321",\n  "upper": {\n    "type": "literal",\n    "dataType": "date",\n    "value": "2020-03-21"\n  },\n  "lower": {\n    "type": "literal",\n    "dataType": "null",\n    "value": "null"\n  }\n}\n'})})}),(0,n.jsxs)(l.default,{value:"list",label:"list",children:[(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "type": "list",\n  "name": "p202204_California",\n  "lists": [\n    [\n      {\n        "type": "literal",\n        "dataType": "date",\n        "value": "2022-04-01"\n      },\n      {\n        "type": "literal",\n        "dataType": "string",\n        "value": "Los Angeles"\n      }\n    ],\n    [\n      {\n        "type": "literal",\n        "dataType": "date",\n        "value": "2022-04-01"\n      },\n      {\n        "type": "literal",\n        "dataType": "string",\n        "value": "San Francisco"\n      }\n    ]\n  ]\n}\n'})}),(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["Each list in the lists must have the same length. The values in each list must correspond to the field definitions in the list ",(0,n.jsx)(t.a,{href:"/docs/0.8.0-incubating/table-partitioning-bucketing-sort-order-indexes#table-partitioning",children:"partitioning"}),"."]})})]})]}),"\n",(0,n.jsx)(t.p,{children:"For Java examples:"}),"\n",(0,n.jsxs)(r.A,{groupId:"partitions",children:[(0,n.jsxs)(l.default,{value:"identity",label:"Identity",children:[(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:'Partition partition =\n        Partitions.identity(\n            "dt=2008-08-08/country=us",\n            new String[][] {{"dt"}, {"country"}},\n            new Literal[] {\n              Literals.dateLiteral(LocalDate.parse("2008-08-08")), Literals.stringLiteral("us")\n            },\n            Maps.newHashMap());\n'})}),(0,n.jsxs)(t.admonition,{type:"note",children:[(0,n.jsx)(t.p,{children:"The values are in the same order as the field names."}),(0,n.jsx)(t.p,{children:"When adding an identity partition to a partitioned Hive table, the specified partition name is ignored. This is because Hive generates the partition name based on field names and values."})]})]}),(0,n.jsx)(l.default,{value:"range",label:"Range",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:'Partition partition =\n        Partitions.range(\n            "p20200321",\n            Literals.dateLiteral(LocalDate.parse("2020-03-21")),\n            Literals.NULL,\n            Maps.newHashMap());\n'})})}),(0,n.jsxs)(l.default,{value:"list",label:"List",children:[(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:'Partition partition =\n        Partitions.list(\n            "p202204_California",\n            new Literal[][] {\n              {\n                Literals.dateLiteral(LocalDate.parse("2022-04-01")),\n                Literals.stringLiteral("Los Angeles")\n              },\n              {\n                Literals.dateLiteral(LocalDate.parse("2022-04-01")),\n                Literals.stringLiteral("San Francisco")\n              }\n            },\n            Maps.newHashMap());\n'})}),(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["Each list in the lists must have the same length. The values in each list must correspond to the field definitions in the list ",(0,n.jsx)(t.a,{href:"/docs/0.8.0-incubating/table-partitioning-bucketing-sort-order-indexes#table-partitioning",children:"partitioning"}),"."]})})]})]}),"\n",(0,n.jsxs)(t.p,{children:["You can add a partition to a partitioned table by sending a ",(0,n.jsx)(t.code,{children:"POST"})," request to the ",(0,n.jsx)(t.code,{children:"/api/metalakes/{metalake_name}/catalogs/{catalog_name}/schemas/{schema_name}/tables/{partitioned_table_name}/partitions"})," endpoint or by using the Gravitino Java client.\nThe following is an example of adding an identity partition to a Hive partitioned table:"]}),"\n",(0,n.jsxs)(r.A,{groupId:"language",queryString:!0,children:[(0,n.jsx)(l.default,{value:"shell",label:"Shell",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:'curl -X POST -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json" -d \'{\n  "partitions": [\n    {\n      "type": "identity",\n      "fieldNames": [\n        [\n          "dt"\n        ],\n        [\n          "country"\n        ]\n      ],\n      "values": [\n        {\n          "type": "literal",\n          "dataType": "date",\n          "value": "2008-08-08"\n        },\n        {\n          "type": "literal",\n          "dataType": "string",\n          "value": "us"\n        }\n      ]\n    }\n  ]\n}\' http://localhost:8090/api/metalakes/metalake/catalogs/catalog/schemas/schema/tables/table/partitions\n'})})}),(0,n.jsx)(l.default,{value:"java",label:"Java",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:'GravitinoClient gravitinoClient = GravitinoClient\n    .builder("http://127.0.0.1:8090")\n    .withMetalake("metalake")\n    .build();\n\n// Assume that you have a partitioned table named "metalake.catalog.schema.table".\nPartition addedPartition = \n    gravitinoClient\n        .loadCatalog("catalog")\n        .asTableCatalog()\n        .loadTable(NameIdentifier.of("schema", "table"))\n        .supportPartitions()\n        .addPartition(\n            Partitions.identity(\n              new String[][] {{"dt"}, {"country"}},\n              new Literal[] {\n              Literals.dateLiteral(LocalDate.parse("2008-08-08")), Literals.stringLiteral("us")},\n              Maps.newHashMap()));\n'})})})]}),"\n",(0,n.jsx)(t.h3,{id:"get-a-partition-by-name",children:"Get a partition by name"}),"\n",(0,n.jsxs)(t.p,{children:["You can get a partition by its name via sending a ",(0,n.jsx)(t.code,{children:"GET"})," request to the ",(0,n.jsx)(t.code,{children:"/api/metalakes/{metalake_name}/catalogs/{catalog_name}/schemas/{schema_name}/tables/{partitioned_table_name}/partitions/{partition_name}"})," endpoint or by using the Gravitino Java client.\nThe following is an example of getting a partition by its name:"]}),"\n",(0,n.jsxs)(r.A,{groupId:"language",queryString:!0,children:[(0,n.jsxs)(l.default,{value:"shell",label:"Shell",children:[(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:'curl -X GET -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json" \\\nhttp://localhost:8090/api/metalakes/metalake/catalogs/catalog/schemas/schema/tables/table/partitions/p20200321\n'})}),(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["If the partition name contains special characters, you should use ",(0,n.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Percent-encoding#Reserved_characters",children:"URL encoding"}),". For example, if the partition name is ",(0,n.jsx)(t.code,{children:"dt=2008-08-08/country=us"})," you should use ",(0,n.jsx)(t.code,{children:"dt%3D2008-08-08%2Fcountry%3Dus"})," in the URL."]})})]}),(0,n.jsx)(l.default,{value:"java",label:"Java",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:'GravitinoClient gravitinoClient = GravitinoClient\n    .builder("http://127.0.0.1:8090")\n    .withMetalake("metalake")\n    .build();\n\n// Assume that you have a partitioned table named "metalake.catalog.schema.table".\nPartition Partition = \n    gravitinoClient\n        .loadCatalog("catalog")\n        .asTableCatalog()\n        .loadTable(NameIdentifier.of("schema", "table"))\n        .supportPartitions()\n        .getPartition("partition_name");\n'})})})]}),"\n",(0,n.jsx)(t.h3,{id:"list-partition-names-under-a-partitioned-table",children:"List partition names under a partitioned table"}),"\n",(0,n.jsxs)(t.p,{children:["You can list all partition names under a partitioned table by sending a ",(0,n.jsx)(t.code,{children:"GET"})," request to the ",(0,n.jsx)(t.code,{children:"/api/metalakes/{metalake_name}/catalogs/{catalog_name}/schemas/{schema_name}/tables/{partitioned_table_name}/partitions"})," endpoint or by using the Gravitino Java client.\nThe following is an example of listing all the partition names under a partitioned table:"]}),"\n",(0,n.jsxs)(r.A,{groupId:"language",queryString:!0,children:[(0,n.jsx)(l.default,{value:"shell",label:"Shell",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:'curl -X GET -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json" \\\nhttp://localhost:8090/api/metalakes/metalake/catalogs/catalog/schemas/schema/tables/table/partitions\n'})})}),(0,n.jsx)(l.default,{value:"java",label:"Java",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:'GravitinoClient gravitinoClient = GravitinoClient\n    .builder("http://127.0.0.1:8090")\n    .withMetalake("metalake")\n    .build();\n\n// Assume that you have a partitioned table named "metalake.catalog.schema.table".\nString[] partitionNames = \n    gravitinoClient\n        .loadCatalog("catalog")\n        .asTableCatalog()\n        .loadTable(NameIdentifier.of("schema", "table"))\n        .supportPartitions()\n        .listPartitionNames();\n'})})})]}),"\n",(0,n.jsx)(t.h3,{id:"list-partitions-under-a-partitioned-table",children:"List partitions under a partitioned table"}),"\n",(0,n.jsxs)(t.p,{children:["If you want to get more detailed information about the partitions under a partitioned table, you can list all partitions under a partitioned table by sending a ",(0,n.jsx)(t.code,{children:"GET"})," request to the ",(0,n.jsx)(t.code,{children:"/api/metalakes/{metalake_name}/catalogs/{catalog_name}/schemas/{schema_name}/tables/{partitioned_table_name}/partitions"})," endpoint or by using the Gravitino Java client.\nThe following is an example of listing all the partitions under a partitioned table:"]}),"\n",(0,n.jsxs)(r.A,{groupId:"language",queryString:!0,children:[(0,n.jsx)(l.default,{value:"shell",label:"Shell",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:'curl -X GET -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json" \\\nhttp://localhost:8090/api/metalakes/metalake/catalogs/catalog/schemas/schema/tables/table/partitions?details=true\n'})})}),(0,n.jsx)(l.default,{value:"java",label:"Java",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:'// Assume that you have a partitioned table named "metalake.catalog.schema.table".\nPartition[] partitions =\n        gravitinoClient\n            .loadCatalog("catalog")\n            .asTableCatalog()\n            .loadTable(NameIdentifier.of("schema", "table"))\n            .supportPartitions()\n            .listPartitions();\n'})})})]}),"\n",(0,n.jsx)(t.h3,{id:"drop-a-partition-by-name",children:"Drop a partition by name"}),"\n",(0,n.jsxs)(t.p,{children:["You can drop a partition by its name via sending a ",(0,n.jsx)(t.code,{children:"DELETE"})," request to the ",(0,n.jsx)(t.code,{children:"/api/metalakes/{metalake_name}/catalogs/{catalog_name}/schemas/{schema_name}/tables/{partitioned_table_name}/partitions/{partition_name}"})," endpoint or by using the Gravitino Java client.\nThe following is an example of dropping a partition by its name:"]}),"\n",(0,n.jsxs)(r.A,{groupId:"language",queryString:!0,children:[(0,n.jsxs)(l.default,{value:"shell",label:"Shell",children:[(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:'curl -X DELETE -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json" \\\nhttp://localhost:8090/api/metalakes/metalake/catalogs/catalog/schemas/schema/tables/table/partitions/p20200321\n'})}),(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["If the partition name contains special characters, you should use ",(0,n.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Percent-encoding#Reserved_characters",children:"URL encoding"}),". For example, if the partition name is ",(0,n.jsx)(t.code,{children:"dt=2008-08-08/country=us"})," you should use ",(0,n.jsx)(t.code,{children:"dt%3D2008-08-08%2Fcountry%3Dus"})," in the URL."]})})]}),(0,n.jsx)(l.default,{value:"java",label:"Java",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:'GravitinoClient gravitinoClient = GravitinoClient\n    .builder("http://127.0.0.1:8090")\n    .withMetalake("metalake")\n    .build();\n\n// Assume that you have a partitioned table named "metalake.catalog.schema.table".\nPartition Partition = \n    gravitinoClient\n        .loadCatalog("catalog")\n        .asTableCatalog()\n        .loadTable(NameIdentifier.of("schema", "table"))\n        .supportPartitions()\n        .dropPartition("partition_name");\n'})})})]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},64323:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});a(79474);var n=a(13526);const i={tabItem:"tabItem_VZtU"};var r=a(13274);function l(e){let{children:t,hidden:a,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,n.A)(i.tabItem,l),hidden:a,children:t})}},75863:(e,t,a)=>{a.d(t,{A:()=>p});var n=a(79474),i=a(13526),r=a(67697),l=a(24382),s=a(22972);const o={tabList:"tabList_rarn",tabItem:"tabItem_Gmas"};var d=a(13274);function c(e){let{className:t,block:a,selectedValue:n,selectValue:l,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,r.a_)(),h=e=>{const t=e.currentTarget,a=c.indexOf(t),i=s[a].value;i!==n&&(u(t),l(i))},p=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return(0,d.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":a},t),children:s.map((e=>{let{value:t,label:a,attributes:r}=e;return(0,d.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>c.push(e),onKeyDown:p,onClick:h,...r,className:(0,i.A)("tabs__item",o.tabItem,r?.className,{"tabs__item--active":n===t}),children:a??t},t)}))})}function u(e){let{lazy:t,children:a,selectedValue:i}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===i));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,d.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function h(e){const t=(0,l.u)(e);return(0,d.jsxs)("div",{className:(0,i.A)("tabs-container",o.tabList),children:[(0,d.jsx)(c,{...t,...e}),(0,d.jsx)(u,{...t,...e})]})}function p(e){const t=(0,s.default)();return(0,d.jsx)(h,{...e,children:(0,l.v)(e.children)},String(t))}},24382:(e,t,a)=>{a.d(t,{u:()=>p,v:()=>d});var n=a(79474),i=a(20241),r=a(86976),l=a(71738),s=a(17891),o=a(67946);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function c(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:i}}=e;return{value:t,label:a,attributes:n,default:i}}))}(a);return function(e){const t=(0,s.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function u(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const r=(0,i.W6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function p(e){const{defaultValue:t,queryString:a=!1,groupId:i}=e,l=c(e),[s,d]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[p,g]=h({queryString:a,groupId:i}),[m,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,r]=(0,o.Dv)(a);return[i,(0,n.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:i}),j=(()=>{const e=p??m;return u({value:e,tabValues:l})?e:null})();(0,r.A)((()=>{j&&d(j)}),[j]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!u({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);d(e),g(e),b(e)}),[g,b,l]),tabValues:l}}},38389:(e,t,a)=>{a.d(t,{R:()=>l,x:()=>s});var n=a(79474);const i={},r=n.createContext(i);function l(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);