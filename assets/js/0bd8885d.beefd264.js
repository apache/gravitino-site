"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[53102],{1445:(a,e,t)=>{t.r(e),t.d(e,{default:()=>o});t(79474);var n=t(13526);const l={tabItem:"tabItem_JtVc"};var i=t(13274);function o(a){let{children:e,hidden:t,className:o}=a;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(l.tabItem,o),hidden:t,children:e})}},17014:(a,e,t)=>{t.d(e,{R:()=>o,x:()=>s});var n=t(79474);const l={},i=n.createContext(l);function o(a){const e=n.useContext(i);return n.useMemo((function(){return"function"==typeof a?a(e):{...e,...a}}),[e,a])}function s(a){let e;return e=a.disableParentContext?"function"==typeof a.components?a.components(l):a.components||l:o(a.components),n.createElement(i.Provider,{value:e},a.children)}},29151:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>h});var n=t(13274),l=t(17014),i=t(48521),o=t(1445);const s={title:"Manage massaging metadata using Apache Gravitino",slug:"/manage-massaging-metadata-using-gravitino",date:"2024-4-22",keyword:"Gravitino massaging metadata manage",license:"This software is licensed under the Apache License version 2."},r=void 0,c={id:"manage-messaging-metadata-using-gravitino",title:"Manage massaging metadata using Apache Gravitino",description:"This page introduces how to manage messaging metadata using Apache Gravitino. Messaging metadata refers to",source:"@site/versioned_docs/version-0.7.0-incubating/manage-messaging-metadata-using-gravitino.md",sourceDirName:".",slug:"/manage-massaging-metadata-using-gravitino",permalink:"/docs/0.7.0-incubating/manage-massaging-metadata-using-gravitino",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/manage-messaging-metadata-using-gravitino.md",tags:[],version:"0.7.0-incubating",lastUpdatedBy:"Justin Mclean",lastUpdatedAt:1740469354e3,frontMatter:{title:"Manage massaging metadata using Apache Gravitino",slug:"/manage-massaging-metadata-using-gravitino",date:"2024-4-22",keyword:"Gravitino massaging metadata manage",license:"This software is licensed under the Apache License version 2."},sidebar:"docs",previous:{title:"Use Gravitino Virtual File System with Filesets",permalink:"/docs/0.7.0-incubating/how-to-use-gvfs"},next:{title:"Manage tags in Gravitino",permalink:"/docs/0.7.0-incubating/manage-tags-in-gravitino"}},d={},h=[{value:"Catalog operations",id:"catalog-operations",level:2},{value:"Create a catalog",id:"create-a-catalog",level:3},{value:"Load a catalog",id:"load-a-catalog",level:3},{value:"Alter a catalog",id:"alter-a-catalog",level:3},{value:"Drop a catalog",id:"drop-a-catalog",level:3},{value:"List all catalogs in a metalake",id:"list-all-catalogs-in-a-metalake",level:3},{value:"List all catalogs&#39; information in a metalake",id:"list-all-catalogs-information-in-a-metalake",level:3},{value:"Schema operations",id:"schema-operations",level:2},{value:"Create a schema",id:"create-a-schema",level:3},{value:"Load a schema",id:"load-a-schema",level:3},{value:"Alter a schema",id:"alter-a-schema",level:3},{value:"Drop a schema",id:"drop-a-schema",level:3},{value:"List all schemas under a catalog",id:"list-all-schemas-under-a-catalog",level:3},{value:"Topic operations",id:"topic-operations",level:2},{value:"Create a topic",id:"create-a-topic",level:3},{value:"Alter a topic",id:"alter-a-topic",level:3},{value:"Drop a topic",id:"drop-a-topic",level:3},{value:"List all topics under a schema",id:"list-all-topics-under-a-schema",level:3}];function g(a){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...a.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.p,{children:"This page introduces how to manage messaging metadata using Apache Gravitino. Messaging metadata refers to\nthe topic metadata of the messaging system such as Apache Kafka, Apache Pulsar, Apache RocketMQ, etc.\nThrough Gravitino, you can create, update, delete, and list topics via unified RESTful APIs or Java client."}),"\n",(0,n.jsx)(e.p,{children:"To use messaging catalog, please make sure that:"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:["Gravitino server has started, and the host and port is ",(0,n.jsx)(e.a,{href:"http://localhost:8090",children:"http://localhost:8090"}),"."]}),"\n",(0,n.jsxs)(e.li,{children:["A metalake has been created and ",(0,n.jsx)(e.a,{href:"/docs/0.7.0-incubating/manage-metalake-using-gravitino#enable-a-metalake",children:"enabled"}),"."]}),"\n"]}),"\n",(0,n.jsx)(e.h2,{id:"catalog-operations",children:"Catalog operations"}),"\n",(0,n.jsx)(e.h3,{id:"create-a-catalog",children:"Create a catalog"}),"\n",(0,n.jsx)(e.admonition,{type:"tip",children:(0,n.jsxs)(e.p,{children:["For a messaging catalog, you must specify the ",(0,n.jsx)(e.code,{children:"type"})," as ",(0,n.jsx)(e.code,{children:"messaging"})," when creating a catalog."]})}),"\n",(0,n.jsxs)(e.p,{children:["You can create a catalog by sending a ",(0,n.jsx)(e.code,{children:"POST"})," request to the ",(0,n.jsx)(e.code,{children:"/api/metalakes/{metalake_name}/catalogs"}),"\nendpoint or just use the Gravitino Java client. The following is an example of creating a messaging catalog:"]}),"\n",(0,n.jsxs)(i.A,{groupId:"language",queryString:!0,children:[(0,n.jsx)(o.default,{value:"shell",label:"Shell",children:(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-shell",children:'curl -X POST -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json" -d \'{\n  "name": "catalog",\n  "type": "MESSAGING",\n  "comment": "comment",\n  "provider": "kafka",\n  "properties": {\n    "bootstrap.servers": "localhost:9092",\n  }\n}\' http://localhost:8090/api/metalakes/metalake/catalogs\n'})})}),(0,n.jsx)(o.default,{value:"java",label:"Java",children:(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-java",children:'GravitinoClient gravitinoClient = GravitinoClient\n    .builder("http://127.0.0.1:8090")\n    .withMetalake("metalake")\n    .build();\n\nMap<String, String> properties = ImmutableMap.<String, String>builder()\n    // You should replace the following with your own Kafka bootstrap servers that Gravitino can connect to.\n    .put("bootstrap.servers", "localhost:9092")\n    .build();\n\nCatalog catalog = gravitinoClient.createCatalog("catalog",\n    Type.MESSAGING,\n    "kafka", // provider, Gravitino only supports "kafka" for now.\n    "This is a Kafka catalog",\n    properties);\n// ...\n'})})})]}),"\n",(0,n.jsx)(e.p,{children:"Currently, Gravitino supports the following catalog providers:"}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{children:"Catalog provider"}),(0,n.jsx)(e.th,{children:"Catalog property"})]})}),(0,n.jsx)(e.tbody,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.code,{children:"kafka"})}),(0,n.jsx)(e.td,{children:(0,n.jsx)(e.a,{href:"/docs/0.7.0-incubating/kafka-catalog#catalog-properties",children:"Kafka catalog property"})})]})})]}),"\n",(0,n.jsx)(e.h3,{id:"load-a-catalog",children:"Load a catalog"}),"\n",(0,n.jsxs)(e.p,{children:["Refer to ",(0,n.jsx)(e.a,{href:"/docs/0.7.0-incubating/manage-relational-metadata-using-gravitino#load-a-catalog",children:"Load a catalog"}),"\nin relational catalog for more details. For a messaging catalog, the load operation is the same."]}),"\n",(0,n.jsx)(e.h3,{id:"alter-a-catalog",children:"Alter a catalog"}),"\n",(0,n.jsxs)(e.p,{children:["Refer to ",(0,n.jsx)(e.a,{href:"/docs/0.7.0-incubating/manage-relational-metadata-using-gravitino#alter-a-catalog",children:"Alter a catalog"}),"\nin relational catalog for more details. For a messaging catalog, the alter operation is the same."]}),"\n",(0,n.jsx)(e.h3,{id:"drop-a-catalog",children:"Drop a catalog"}),"\n",(0,n.jsxs)(e.p,{children:["Refer to ",(0,n.jsx)(e.a,{href:"/docs/0.7.0-incubating/manage-relational-metadata-using-gravitino#drop-a-catalog",children:"Drop a catalog"}),"\nin relational catalog for more details. For a messaging catalog, the drop operation is the same."]}),"\n",(0,n.jsx)(e.h3,{id:"list-all-catalogs-in-a-metalake",children:"List all catalogs in a metalake"}),"\n",(0,n.jsxs)(e.p,{children:["Please refer to ",(0,n.jsx)(e.a,{href:"/docs/0.7.0-incubating/manage-relational-metadata-using-gravitino#list-all-catalogs-in-a-metalake",children:"List all catalogs in a metalake"}),"\nin relational catalog for more details. For a messaging catalog, the list operation is the same."]}),"\n",(0,n.jsx)(e.h3,{id:"list-all-catalogs-information-in-a-metalake",children:"List all catalogs' information in a metalake"}),"\n",(0,n.jsxs)(e.p,{children:["Please refer to ",(0,n.jsx)(e.a,{href:"/docs/0.7.0-incubating/manage-relational-metadata-using-gravitino#list-all-catalogs-information-in-a-metalake",children:"List all catalogs' information in a metalake"}),"\nin relational catalog for more details. For a messaging catalog, the list operation is the same."]}),"\n",(0,n.jsx)(e.h2,{id:"schema-operations",children:"Schema operations"}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.code,{children:"Schema"}),' is a logical grouping of topics in a messaging catalog, if the messaging system does not support topics grouping,\nschema operations are not supported but a "default" schema will be automatically created to include all topics']}),"\n",(0,n.jsx)(e.admonition,{title:"note",type:"caution",children:(0,n.jsx)(e.p,{children:"Gravitino currently only supports the Kafka catalog. Since Kafka does not support topic grouping, only list and load operations are supported for schema."})}),"\n",(0,n.jsx)(e.h3,{id:"create-a-schema",children:"Create a schema"}),"\n",(0,n.jsxs)(e.p,{children:["Please refer to ",(0,n.jsx)(e.a,{href:"/docs/0.7.0-incubating/manage-relational-metadata-using-gravitino#create-a-schema",children:"Create a schema"}),"\nin relational catalog for more details. For a messaging catalog, the create operation is the same."]}),"\n",(0,n.jsx)(e.h3,{id:"load-a-schema",children:"Load a schema"}),"\n",(0,n.jsxs)(e.p,{children:["Please refer to ",(0,n.jsx)(e.a,{href:"/docs/0.7.0-incubating/manage-relational-metadata-using-gravitino#load-a-schema",children:"Load a schema"}),"\nin relational catalog for more details. For a messaging catalog, the load operation is the same."]}),"\n",(0,n.jsx)(e.h3,{id:"alter-a-schema",children:"Alter a schema"}),"\n",(0,n.jsxs)(e.p,{children:["Please refer to ",(0,n.jsx)(e.a,{href:"/docs/0.7.0-incubating/manage-relational-metadata-using-gravitino#alter-a-schema",children:"Alter a schema"}),"\nin relational catalog for more details. For a messaging catalog, the alter operation is the same."]}),"\n",(0,n.jsx)(e.h3,{id:"drop-a-schema",children:"Drop a schema"}),"\n",(0,n.jsxs)(e.p,{children:["Please refer to ",(0,n.jsx)(e.a,{href:"/docs/0.7.0-incubating/manage-relational-metadata-using-gravitino#drop-a-schema",children:"Drop a schema"}),"\nin relational catalog for more details. For a messaging catalog, the drop operation is the same."]}),"\n",(0,n.jsx)(e.h3,{id:"list-all-schemas-under-a-catalog",children:"List all schemas under a catalog"}),"\n",(0,n.jsxs)(e.p,{children:["Please refer to ",(0,n.jsx)(e.a,{href:"/docs/0.7.0-incubating/manage-relational-metadata-using-gravitino#list-all-schemas-under-a-catalog",children:"List all schemas under a catalog"}),"\nin relational catalog for more details. For a messaging catalog, the list operation is the same."]}),"\n",(0,n.jsx)(e.h2,{id:"topic-operations",children:"Topic operations"}),"\n",(0,n.jsx)(e.admonition,{type:"tip",children:(0,n.jsx)(e.p,{children:"Users should create a metalake, a catalog and a schema, then ensure that the metalake and catalog are enabled before operating topics."})}),"\n",(0,n.jsx)(e.h3,{id:"create-a-topic",children:"Create a topic"}),"\n",(0,n.jsxs)(e.p,{children:["You can create a topic by sending a ",(0,n.jsx)(e.code,{children:"POST"})," request to the ",(0,n.jsx)(e.code,{children:"/api/metalakes/{metalake_name}/catalogs/{catalog_name}/schemas/{schema_name}/topics"}),"\nendpoint or just use the Gravitino Java client. The following is an example of creating a topic:"]}),"\n",(0,n.jsxs)(i.A,{groupId:"language",queryString:!0,children:[(0,n.jsx)(o.default,{value:"shell",label:"Shell",children:(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-shell",children:'curl -X POST -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json" -d \'{\n  "name": "example_topic",\n  "comment": "This is an example topic",\n  "properties": {\n    "partition-count": "3",\n    "replication-factor": 1\n  }\n}\' http://localhost:8090/api/metalakes/metalake/catalogs/catalog/schemas/default/topics\n'})})}),(0,n.jsx)(o.default,{value:"java",label:"Java",children:(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-java",children:'GravitinoClient gravitinoClient = GravitinoClient\n    .builder("http://127.0.0.1:8090")\n    .withMetalake("metalake")\n    .build();\n\nCatalog catalog = gravitinoClient.loadCatalog("catalog");\nTopicCatalog topicCatalog = catalog.asTopicCatalog();\n\nMap<String, String> propertiesMap = ImmutableMap.<String, String>builder()\n        .put("partition-count": "3")\n        .put("replication-factor": "1")\n        .build();\n\ntopicCatalog.createTopic(\n  NameIdentifier.of("default", "example_topic"),\n  "This is an example topic",\n  null, // The message schema of the topic object. Always null because it\'s not supported yet.\n  propertiesMap,\n);\n'})})})]}),"\n",(0,n.jsx)(e.h3,{id:"alter-a-topic",children:"Alter a topic"}),"\n",(0,n.jsxs)(e.p,{children:["You can modify a topic by sending a ",(0,n.jsx)(e.code,{children:"PUT"})," request to the ",(0,n.jsx)(e.code,{children:"/api/metalakes/{metalake_name}/catalogs/{catalog_name}/schemas/{schema_name}/topics/{topic_name}"}),"\nendpoint or just use the Gravitino Java client. The following is an example of altering a topic:"]}),"\n",(0,n.jsxs)(i.A,{groupId:"language",queryString:!0,children:[(0,n.jsx)(o.default,{value:"shell",label:"Shell",children:(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-shell",children:'curl -X PUT -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json" -d \'{\n  "updates": [\n    {\n      "@type": "removeProperty",\n      "property": "key2"\n    }, {\n      "@type": "setProperty",\n      "property": "key3",\n      "value": "value3"\n    }\n  ]\n}\' http://localhost:8090/api/metalakes/metalake/catalogs/catalog/schemas/default/topics/topic\n'})})}),(0,n.jsx)(o.default,{value:"java",label:"Java",children:(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-java",children:'// ...\n// Assuming you have just created a Kafka catalog named `catalog`\nCatalog catalog = gravitinoClient.loadCatalog("catalog");\n\nTopicCatalog topicCatalog = catalog.asTopicCatalog();\n\nTopic t = topicCatalog.alterTopic(NameIdentifier.of("default", "topic"),\n    TopicChange.removeProperty("key2"), TopicChange.setProperty("key3", "value3"));\n// ...\n'})})})]}),"\n",(0,n.jsx)(e.p,{children:"Currently, Gravitino supports the following changes to a topic:"}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{children:"Supported modification"}),(0,n.jsx)(e.th,{children:"JSON"}),(0,n.jsx)(e.th,{children:"Java"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Update a comment"}),(0,n.jsx)(e.td,{children:(0,n.jsx)(e.code,{children:'{"@type":"updateComment","newComment":"new_comment"}'})}),(0,n.jsx)(e.td,{children:(0,n.jsx)(e.code,{children:'TopicChange.updateComment("new_comment")'})})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Set a topic property"}),(0,n.jsx)(e.td,{children:(0,n.jsx)(e.code,{children:'{"@type":"setProperty","property":"key1","value":"value1"}'})}),(0,n.jsx)(e.td,{children:(0,n.jsx)(e.code,{children:'TopicChange.setProperty("key1", "value1")'})})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Remove a topic property"}),(0,n.jsx)(e.td,{children:(0,n.jsx)(e.code,{children:'{"@type":"removeProperty","property":"key1"}'})}),(0,n.jsx)(e.td,{children:(0,n.jsx)(e.code,{children:'TopicChange.removeProperty("key1")'})})]})]})]}),"\n",(0,n.jsx)(e.h3,{id:"drop-a-topic",children:"Drop a topic"}),"\n",(0,n.jsxs)(e.p,{children:["You can remove a topic by sending a ",(0,n.jsx)(e.code,{children:"DELETE"})," request to the ",(0,n.jsx)(e.code,{children:"/api/metalakes/{metalake_name} /catalogs/{catalog_name}/schemas/{schema_name}/topics/{topic_name}"})," endpoint or by using the\nGravitino Java client. The following is an example of dropping a topic:"]}),"\n",(0,n.jsxs)(i.A,{groupId:"language",queryString:!0,children:[(0,n.jsx)(o.default,{value:"shell",label:"Shell",children:(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-shell",children:'curl -X DELETE -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json" \\\nhttp://localhost:8090/api/metalakes/metalake/catalogs/catalog/schemas/default/topics/topic\n'})})}),(0,n.jsx)(o.default,{value:"java",label:"Java",children:(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-java",children:'// ...\n// Assuming you have just created a Kafka catalog named `catalog`\nCatalog catalog = gravitinoClient.loadCatalog("catalog");\n\nTopicCatalog topicCatalog = catalog.asTopicCatalog();\n\n// Drop a topic\ntopicCatalog.dropTopic(NameIdentifier.of("default", "topic"));\n// ...\n'})})})]}),"\n",(0,n.jsx)(e.h3,{id:"list-all-topics-under-a-schema",children:"List all topics under a schema"}),"\n",(0,n.jsxs)(e.p,{children:["You can list all topics in a schema by sending a ",(0,n.jsx)(e.code,{children:"GET"})," request to the ",(0,n.jsx)(e.code,{children:"/api/metalakes/ {metalake_name}/catalogs/{catalog_name}/schemas/{schema_name}/topics"})," endpoint or by using the\nGravitino Java client. The following is an example of listing all the topics in a schema:"]}),"\n",(0,n.jsxs)(i.A,{groupId:"language",queryString:!0,children:[(0,n.jsx)(o.default,{value:"shell",label:"Shell",children:(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-shell",children:'curl -X GET -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json" \\\nhttp://localhost:8090/api/metalakes/metalake/catalogs/catalog/schemas/schema/topics\n'})})}),(0,n.jsx)(o.default,{value:"java",label:"Java",children:(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-java",children:'// ...\nCatalog catalog = gravitinoClient.loadCatalog("catalog");\n\nTopicCatalog topicCatalog = catalog.asTopicCatalog();\nNameIdentifier[] identifiers =\n    topicCatalog.listTopics(Namespace.of("default"));\n// ...\n'})})})]})]})}function p(a={}){const{wrapper:e}={...(0,l.R)(),...a.components};return e?(0,n.jsx)(e,{...a,children:(0,n.jsx)(g,{...a})}):g(a)}},48521:(a,e,t)=>{t.d(e,{A:()=>p});var n=t(79474),l=t(13526),i=t(34560),o=t(69671),s=t(49573);const r={tabList:"tabList_B_Yg",tabItem:"tabItem_UqCM"};var c=t(13274);function d(a){let{className:e,block:t,selectedValue:n,selectValue:o,tabValues:s}=a;const d=[],{blockElementScrollPositionUntilNextRender:h}=(0,i.a_)(),g=a=>{const e=a.currentTarget,t=d.indexOf(e),l=s[t].value;l!==n&&(h(e),o(l))},p=a=>{let e=null;switch(a.key){case"Enter":g(a);break;case"ArrowRight":{const t=d.indexOf(a.currentTarget)+1;e=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(a.currentTarget)-1;e=d[t]??d[d.length-1];break}}e?.focus()};return(0,c.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":t},e),children:s.map((a=>{let{value:e,label:t,attributes:i}=a;return(0,c.jsx)("li",{role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,ref:a=>d.push(a),onKeyDown:p,onClick:g,...i,className:(0,l.A)("tabs__item",r.tabItem,i?.className,{"tabs__item--active":n===e}),children:t??e},e)}))})}function h(a){let{lazy:e,children:t,selectedValue:l}=a;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const a=i.find((a=>a.props.value===l));return a?(0,n.cloneElement)(a,{className:"margin-top--md"}):null}return(0,c.jsx)("div",{className:"margin-top--md",children:i.map(((a,e)=>(0,n.cloneElement)(a,{key:e,hidden:a.props.value!==l})))})}function g(a){const e=(0,o.u)(a);return(0,c.jsxs)("div",{className:(0,l.A)("tabs-container",r.tabList),children:[(0,c.jsx)(d,{...e,...a}),(0,c.jsx)(h,{...e,...a})]})}function p(a){const e=(0,s.default)();return(0,c.jsx)(g,{...a,children:(0,o.v)(a.children)},String(e))}},69671:(a,e,t)=>{t.d(e,{u:()=>p,v:()=>c});var n=t(79474),l=t(20241),i=t(33255),o=t(25869),s=t(55522),r=t(38118);function c(a){return n.Children.toArray(a).filter((a=>"\n"!==a)).map((a=>{if(!a||(0,n.isValidElement)(a)&&function(a){const{props:e}=a;return!!e&&"object"==typeof e&&"value"in e}(a))return a;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof a.type?a.type:a.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(a){const{values:e,children:t}=a;return(0,n.useMemo)((()=>{const a=e??function(a){return c(a).map((a=>{let{props:{value:e,label:t,attributes:n,default:l}}=a;return{value:e,label:t,attributes:n,default:l}}))}(t);return function(a){const e=(0,s.X)(a,((a,e)=>a.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((a=>a.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(a),a}),[e,t])}function h(a){let{value:e,tabValues:t}=a;return t.some((a=>a.value===e))}function g(a){let{queryString:e=!1,groupId:t}=a;const i=(0,l.W6)(),s=function(a){let{queryString:e=!1,groupId:t}=a;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:e,groupId:t});return[(0,o.aZ)(s),(0,n.useCallback)((a=>{if(!s)return;const e=new URLSearchParams(i.location.search);e.set(s,a),i.replace({...i.location,search:e.toString()})}),[s,i])]}function p(a){const{defaultValue:e,queryString:t=!1,groupId:l}=a,o=d(a),[s,c]=(0,n.useState)((()=>function(a){let{defaultValue:e,tabValues:t}=a;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!h({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((a=>a.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const n=t.find((a=>a.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:e,tabValues:o}))),[p,u]=g({queryString:t,groupId:l}),[m,v]=function(a){let{groupId:e}=a;const t=function(a){return a?`docusaurus.tab.${a}`:null}(e),[l,i]=(0,r.Dv)(t);return[l,(0,n.useCallback)((a=>{t&&i.set(a)}),[t,i])]}({groupId:l}),f=(()=>{const a=p??m;return h({value:a,tabValues:o})?a:null})();(0,i.A)((()=>{f&&c(f)}),[f]);return{selectedValue:s,selectValue:(0,n.useCallback)((a=>{if(!h({value:a,tabValues:o}))throw new Error(`Can't select invalid tab value=${a}`);c(a),u(a),v(a)}),[u,v,o]),tabValues:o}}}}]);