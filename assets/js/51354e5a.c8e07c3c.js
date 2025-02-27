"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[50554],{1445:(e,n,t)=>{t.r(n),t.d(n,{default:()=>a});t(79474);var r=t(13526);const i={tabItem:"tabItem_JtVc"};var s=t(13274);function a(e){let{children:n,hidden:t,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,a),hidden:t,children:n})}},17014:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var r=t(79474);const i={},s=r.createContext(i);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:n},e.children)}},19472:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>x,frontMatter:()=>l,metadata:()=>o,toc:()=>h});var r=t(13274),i=t(17014),s=t(48521),a=t(1445);const l={title:"Table partitioning, distribution and sort ordering and indexes",slug:"/table-partitioning-distribution-sort-order-indexes",date:new Date("2023-12-25T00:00:00.000Z"),keyword:"Table Partition Bucket Distribute Sort By",license:"This software is licensed under the Apache License version 2.",last_update:{date:new Date("2024-02-02T00:00:00.000Z"),author:"Clearvive"}},d=void 0,o={id:"table-partitioning-distribution-sort-order-indexes",title:"Table partitioning, distribution and sort ordering and indexes",description:"Table partitioning",source:"@site/versioned_docs/version-0.8.0-incubating/table-partitioning-distribution-sort-order-indexes.md",sourceDirName:".",slug:"/table-partitioning-distribution-sort-order-indexes",permalink:"/docs/0.8.0-incubating/table-partitioning-distribution-sort-order-indexes",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/table-partitioning-distribution-sort-order-indexes.md",tags:[],version:"0.8.0-incubating",frontMatter:{title:"Table partitioning, distribution and sort ordering and indexes",slug:"/table-partitioning-distribution-sort-order-indexes",date:"2023-12-25T00:00:00.000Z",keyword:"Table Partition Bucket Distribute Sort By",license:"This software is licensed under the Apache License version 2.",last_update:{date:"2024-02-02T00:00:00.000Z",author:"Clearvive"}}},c={},h=[{value:"Table partitioning",id:"table-partitioning",level:2},{value:"Table distribution",id:"table-distribution",level:2},{value:"Sort ordering",id:"sort-ordering",level:2},{value:"Indexes",id:"indexes",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"table-partitioning",children:"Table partitioning"}),"\n",(0,r.jsx)(n.p,{children:"To create a partitioned table, you should provide the following two components to construct a valid partitioned table."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Partitioning strategy. It defines how Gravitino distributes table data across partitions. Currently, Gravitino supports the following partitioning strategies."}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"score"}),", ",(0,r.jsx)(n.code,{children:"createTime"}),", and ",(0,r.jsx)(n.code,{children:"city"})," appearing in the table below refer to the field names in a table."]})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Partitioning strategy"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"JSON example"}),(0,r.jsx)(n.th,{children:"Java example"}),(0,r.jsx)(n.th,{children:"Equivalent SQL semantics"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"identity"})}),(0,r.jsx)(n.td,{children:"Source value, unmodified."}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:'{"strategy":"identity","fieldName":["score"]}'})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:'Transforms.identity("score")'})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"PARTITION BY score"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"hour"})}),(0,r.jsx)(n.td,{children:"Extract a timestamp hour, as hours from '1970-01-01 00:00:00'."}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:'{"strategy":"hour","fieldName":["createTime"]}'})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:'Transforms.hour("createTime")'})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"PARTITION BY hour(createTime)"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"day"})}),(0,r.jsx)(n.td,{children:"Extract a date or timestamp day, as days from '1970-01-01'."}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:'{"strategy":"day","fieldName":["createTime"]}'})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:'Transforms.day("createTime")'})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"PARTITION BY day(createTime)"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"month"})}),(0,r.jsx)(n.td,{children:"Extract a date or timestamp month, as months from '1970-01-01'"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:'{"strategy":"month","fieldName":["createTime"]}'})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:'Transforms.month("createTime")'})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"PARTITION BY month(createTime)"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"year"})}),(0,r.jsx)(n.td,{children:"Extract a date or timestamp year, as years from 1970."}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:'{"strategy":"year","fieldName":["createTime"]}'})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:'Transforms.year("createTime")'})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"PARTITION BY year(createTime)"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"bucket[N]"})}),(0,r.jsx)(n.td,{children:"Hash of value, mod N."}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:'{"strategy":"bucket","numBuckets":10,"fieldNames":[["score"]]}'})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:'Transforms.bucket(10, "score")'})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"PARTITION BY bucket(10, score)"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"truncate[W]"})}),(0,r.jsx)(n.td,{children:"Value truncated to width W."}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:'{"strategy":"truncate","width":20,"fieldName":["score"]}'})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:'Transforms.truncate(20, "score")'})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"PARTITION BY truncate(20, score)"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"list"})}),(0,r.jsx)(n.td,{children:"Partition the table by a list value."}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:'{"strategy":"list","fieldNames":[["createTime"],["city"]]}'})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:'Transforms.list(new String[] {"createTime", "city"})'})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"PARTITION BY list(createTime, city)"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"range"})}),(0,r.jsx)(n.td,{children:"Partition the table by a range value."}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:'{"strategy":"range","fieldName":["createTime"]}'})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:'Transforms.range("createTime")'})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"PARTITION BY range(createTime)"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"function"})}),(0,r.jsx)(n.td,{children:"Partition the table by function expression."}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:'{"strategy":"function","funcName":"toYYYYMM","funcArgs":[{"type":"field","fieldName":["VisitDate"]}]}'})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:'Transforms.apply("toYYYYMM", new Expression[]{NamedReference.field("VisitDate")})'})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"PARTITION BY toYYYYMM(VisitDate)"})})]})]})]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["For function partitioning, you should provide the function name and the function arguments. The function arguments must be an ",(0,r.jsx)(n.a,{href:"/docs/0.8.0-incubating/expression",children:"expression"}),"."]})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Field names: It defines which fields Gravitino uses to partition the table."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In some cases, you require other information. For example, if the partitioning strategy is ",(0,r.jsx)(n.code,{children:"bucket"}),", you should provide the number of buckets; if the partitioning strategy is ",(0,r.jsx)(n.code,{children:"truncate"}),", you should provide the width of the truncate."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Once a partitioned table is created, you can ",(0,r.jsx)(n.a,{href:"/docs/0.8.0-incubating/manage-table-partition-using-gravitino",children:"manage its partitions using Gravitino"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"table-distribution",children:"Table distribution"}),"\n",(0,r.jsx)(n.p,{children:"To create a distribution(bucketed) table, you should use the following three components to construct a valid bucketed table."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Strategy. It defines how Gravitino distributes table data across partitions."}),"\n"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Distribution strategy"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"JSON"}),(0,r.jsx)(n.th,{children:"Java"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"hash"}),(0,r.jsx)(n.td,{children:"Distribution table using hash. Gravitino distributes table data into buckets based on the hash value of the key."}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"hash"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Strategy.HASH"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"range"}),(0,r.jsx)(n.td,{children:"Distribution table using range. Gravitino distributes table data into buckets based on a specified range or interval of values."}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"range"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Strategy.RANGE"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"even"}),(0,r.jsxs)(n.td,{children:["Distribution table using even. Gravitino distributes table data, ensuring an equal distribution of data. Currently we use ",(0,r.jsx)(n.code,{children:"even"})," to implementation Doris ",(0,r.jsx)(n.code,{children:"random"})," distribution"]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"even"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Strategy.EVEN"})})]})]})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"number. It defines how many buckets you use to distribution the table."}),"\n",(0,r.jsxs)(n.li,{children:["funcArgs. It defines the arguments of the strategy, the argument must be an ",(0,r.jsx)(n.a,{href:"/docs/0.8.0-incubating/expression",children:"expression"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(s.A,{groupId:"language",queryString:!0,children:[(0,r.jsx)(a.default,{value:"Json",label:"Json",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "strategy": "hash",\n  "number": 4,\n  "funcArgs": [\n    {\n      "type": "field",\n      "fieldName": ["score"]\n    }\n  ]\n}\n'})})}),(0,r.jsx)(a.default,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'Distributions.of(Strategy.HASH, 4, NamedReference.field("score"));\n'})})})]}),"\n",(0,r.jsx)(n.h2,{id:"sort-ordering",children:"Sort ordering"}),"\n",(0,r.jsx)(n.p,{children:"To define a sorted order table, you should use the following three components to construct a valid sorted order table."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Direction. It defines in which direction Gravitino sorts the table. The default value is ",(0,r.jsx)(n.code,{children:"ascending"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Direction"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"JSON"}),(0,r.jsx)(n.th,{children:"Java"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ascending"}),(0,r.jsx)(n.td,{children:"Sorted by a field or a function ascending."}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"asc"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"SortDirection.ASCENDING"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"descending"}),(0,r.jsx)(n.td,{children:"Sorted by a field or a function descending."}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"desc"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"SortDirection.DESCENDING"})})]})]})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Null ordering. It describes how to handle null values when ordering"}),"\n"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Null ordering Type"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"JSON"}),(0,r.jsx)(n.th,{children:"Java"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"null_first"}),(0,r.jsx)(n.td,{children:"Puts the null value in the first place."}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"nulls_first"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"NullOrdering.NULLS_FIRST"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"null_last"}),(0,r.jsx)(n.td,{children:"Puts the null value in the last place."}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"nulls_last"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"NullOrdering.NULLS_LAST"})})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Note: If the direction value is ",(0,r.jsx)(n.code,{children:"ascending"}),", the default ordering value is ",(0,r.jsx)(n.code,{children:"nulls_first"})," and if the direction value is ",(0,r.jsx)(n.code,{children:"descending"}),", the default ordering value is ",(0,r.jsx)(n.code,{children:"nulls_last"}),"."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["sortTerm. It shows which field or function Gravitino uses to sort the table, must be an ",(0,r.jsx)(n.a,{href:"/docs/0.8.0-incubating/expression",children:"expression"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(s.A,{groupId:"language",queryString:!0,children:[(0,r.jsx)(a.default,{value:"Json",label:"Json",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:' {\n  "direction": "asc",\n  "nullOrder": "NULLS_LAST",\n  "sortTerm":  {\n    "type": "field",\n    "fieldName": ["score"]\n  }\n}\n'})})}),(0,r.jsx)(a.default,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'SortOrders.of(NamedReference.field("score"), SortDirection.ASCENDING, NullOrdering.NULLS_LAST);\n'})})})]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Not all catalogs may support those features"}),". Please refer to the related document for more details."]})}),"\n",(0,r.jsx)(n.p,{children:"The following is an example of creating a partitioned, bucketed table, and sorted order table:"}),"\n",(0,r.jsxs)(s.A,{groupId:"language",queryString:!0,children:[(0,r.jsx)(a.default,{value:"shell",label:"Shell",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'curl -X POST -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json" -d \'{\n  "name": "table",\n  "columns": [\n    {\n      "name": "id",\n      "type": "integer",\n      "nullable": true,\n      "comment": "Id of the user"\n    },\n    {\n      "name": "name",\n      "type": "varchar(2000)",\n      "nullable": true,\n      "comment": "Name of the user"\n    },\n    {\n      "name": "age",\n      "type": "short",\n      "nullable": true,\n      "comment": "Age of the user"\n    },\n    {\n      "name": "score",\n      "type": "double",\n      "nullable": true,\n      "comment": "Score of the user"\n    }\n  ],\n  "comment": "Create a new Table",\n  "properties": {\n    "format": "ORC"\n  },\n  "partitioning": [\n    {\n      "strategy": "identity",\n      "fieldName": ["score"]\n    }\n  ],\n  "distribution": {\n    "strategy": "hash",\n    "number": 4,\n    "funcArgs": [\n      {\n        "type": "field",\n        "fieldName": ["score"]\n      }\n    ]\n  },\n  "sortOrders": [\n    {\n      "direction": "asc",\n      "nullOrder": "NULLS_LAST",\n      "sortTerm":  {\n        "type": "field",\n        "fieldName": ["name"]\n      }\n    }\n  ]\n}\' http://localhost:8090/api/metalakes/metalake/catalogs/catalog/schemas/schema/tables\n'})})}),(0,r.jsx)(a.default,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'tableCatalog.createTable(\n    NameIdentifier.of("schema", "table"),\n    new Column[] {\n      Column.of("id", Types.IntegerType.get(), "Id of the user", true, false, null),\n      Column.of("name", Types.VarCharType.of(2000), "Name of the user", true, false, null),\n      Column.of("age", Types.ShortType.get(), "Age of the user", true, false, null),\n      Column.of("score", Types.DoubleType.get(), "Score of the user", false, false, null)\n    },\n    "Create a new Table",\n    tablePropertiesMap,\n    new Transform[] {\n    // Partition by id\n      Transforms.identity("score")\n    },\n    // CLUSTERED BY id\n    Distributions.of(Strategy.HASH, 4, NamedReference.field("id")),\n    // SORTED BY name asc\n    new SortOrder[] {\n      SortOrders.of(\n        NamedReference.field("age"), SortDirection.ASCENDING, NullOrdering.NULLS_LAST),\n    });\n'})})})]}),"\n",(0,r.jsx)(n.h2,{id:"indexes",children:"Indexes"}),"\n",(0,r.jsx)(n.p,{children:"To define an indexed table, you should utilize the following three components to construct a valid indexed table."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"IndexType. Represents the type of index, such as primary key or unique key."}),"\n"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"IndexType"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"JSON"}),(0,r.jsx)(n.th,{children:"Java"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"PRIMARY_KEY"}),(0,r.jsx)(n.td,{children:"The PRIMARY KEY is a column or set of columns that uniquely identifies each row in a table. It enforces uniqueness and ensures that no two rows have the same values in the specified columns. Additionally, the PRIMARY KEY constraint automatically creates a unique index on the specified columns."}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"PRIMARY_KEY"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"IndexType.PRIMARY_KEY"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"UNIQUE_KEY"}),(0,r.jsx)(n.td,{children:"The UNIQUE KEY constraint ensures that all values in a specified column or set of columns are unique across the entire table. Unlike the PRIMARY KEY constraint, a table can have multiple UNIQUE KEY constraints, allowing for unique values in multiple columns or sets of columns."}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"UNIQUE_KEY"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"IndexType.UNIQUE_KEY"})})]})]})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Name. It defines the name of the index."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"FieldNames. It defines which table fields Gravitino uses to index the table."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.A,{groupId:"language",queryString:!0,children:[(0,r.jsx)(a.default,{value:"Json",label:"Json",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:' {\n  "indexType": "PRIMARY_KEY",\n  "name": "PRIMARY",\n  "fieldNames": [["col_1"],["col_2"]]\n}\n'})})}),(0,r.jsx)(a.default,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'Indexes.of(IndexType.PRIMARY_KEY, "PRIMARY", new String[][]{{"col_1"}, {"col_2"}});\n'})})})]}),"\n",(0,r.jsx)(n.p,{children:"The following is an example of creating an index table:"}),"\n",(0,r.jsxs)(s.A,{groupId:"language",queryString:!0,children:[(0,r.jsx)(a.default,{value:"shell",label:"Shell",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'curl -X POST -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json" -d \'{\n  "name": "table",\n  "columns": [\n    {\n      "name": "id",\n      "type": "integer",\n      "nullable": true,\n      "comment": "Id of the user"\n    },\n    {\n      "name": "name",\n      "type": "varchar(2000)",\n      "nullable": true,\n      "comment": "Name of the user"\n    },\n    {\n      "name": "age",\n      "type": "short",\n      "nullable": true,\n      "comment": "Age of the user"\n    },\n    {\n      "name": "score",\n      "type": "double",\n      "nullable": true,\n      "comment": "Score of the user"\n    }\n  ],\n  "comment": "Create a new Table",\n  "indexes": [\n    {\n      "indexType": "PRIMARY_KEY",\n      "name": "PRIMARY",\n      "fieldNames": [["id"]]\n    },\n    {\n      "indexType": "UNIQUE_KEY",\n      "name": "name_age_score_uk",\n      "fieldNames": [["name"],["age"],["score]]\n    }\n  ]\n}\' http://localhost:8090/api/metalakes/metalake/catalogs/catalog/schemas/schema/tables\n'})})}),(0,r.jsx)(a.default,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'tableCatalog.createTable(\n    NameIdentifier.of("schema", "table"),\n    new Column[] {\n      Column.of("id", Types.IntegerType.get(), "Id of the user", false, true, null),\n      Column.of("name", Types.VarCharType.of(1000), "Name of the user", true, false, null),\n      Column.of("age", Types.ShortType.get(), "Age of the user", true, false, null),\n      Column.of("score", Types.DoubleType.get(), "Score of the user", true, false, null)\n    },\n    "Create a new Table",\n    tablePropertiesMap,\n    Transforms.EMPTY_TRANSFORM,\n    Distributions.NONE,\n    new SortOrder[0],\n    new Index[] {\n      Indexes.of(IndexType.PRIMARY_KEY, "PRIMARY", new String[][]{{"id"}}),\n      Indexes.of(IndexType.UNIQUE_KEY, "name_age_score_uk", new String[][]{{"name"}, {"age"}, {"score"}})\n    });\n'})})})]})]})}function x(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},48521:(e,n,t)=>{t.d(n,{A:()=>x});var r=t(79474),i=t(13526),s=t(34560),a=t(69671),l=t(49573);const d={tabList:"tabList_B_Yg",tabItem:"tabItem_UqCM"};var o=t(13274);function c(e){let{className:n,block:t,selectedValue:r,selectValue:a,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:h}=(0,s.a_)(),u=e=>{const n=e.currentTarget,t=c.indexOf(n),i=l[t].value;i!==r&&(h(n),a(i))},x=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,o.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,o.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:x,onClick:u,...s,className:(0,i.A)("tabs__item",d.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function h(e){let{lazy:n,children:t,selectedValue:i}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,o.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function u(e){const n=(0,a.u)(e);return(0,o.jsxs)("div",{className:(0,i.A)("tabs-container",d.tabList),children:[(0,o.jsx)(c,{...n,...e}),(0,o.jsx)(h,{...n,...e})]})}function x(e){const n=(0,l.default)();return(0,o.jsx)(u,{...e,children:(0,a.v)(e.children)},String(n))}},69671:(e,n,t)=>{t.d(n,{u:()=>x,v:()=>o});var r=t(79474),i=t(20241),s=t(33255),a=t(25869),l=t(55522),d=t(38118);function o(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function c(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return o(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:i}}=e;return{value:n,label:t,attributes:r,default:i}}))}(t);return function(e){const n=(0,l.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function u(e){let{queryString:n=!1,groupId:t}=e;const s=(0,i.W6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,a.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(s.location.search);n.set(l,e),s.replace({...s.location,search:n.toString()})}),[l,s])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,a=c(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[x,j]=u({queryString:t,groupId:i}),[m,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,s]=(0,d.Dv)(t);return[i,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:i}),p=(()=>{const e=x??m;return h({value:e,tabValues:a})?e:null})();(0,s.A)((()=>{p&&o(p)}),[p]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),j(e),f(e)}),[j,f,a]),tabValues:a}}}}]);