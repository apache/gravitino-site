"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[31999],{17014:(e,a,t)=>{t.d(a,{R:()=>s,x:()=>o});var l=t(79474);const n={},i=l.createContext(n);function s(e){const a=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),l.createElement(i.Provider,{value:a},e.children)}},48578:(e,a,t)=>{t.d(a,{A:()=>g});var l=t(79474),n=t(13526),i=t(5505),s=t(54638),o=t(49352);const r={tabList:"tabList_Bgbz",tabItem:"tabItem_O29R"};var c=t(13274);function d(e){let{className:a,block:t,selectedValue:l,selectValue:s,tabValues:o}=e;const d=[],{blockElementScrollPositionUntilNextRender:h}=(0,i.a_)(),p=e=>{const a=e.currentTarget,t=d.indexOf(a),n=o[t].value;n!==l&&(h(a),s(n))},g=e=>{let a=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;a=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;a=d[t]??d[d.length-1];break}}a?.focus()};return(0,c.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":t},a),children:o.map((e=>{let{value:a,label:t,attributes:i}=e;return(0,c.jsx)("li",{role:"tab",tabIndex:l===a?0:-1,"aria-selected":l===a,ref:e=>d.push(e),onKeyDown:g,onClick:p,...i,className:(0,n.A)("tabs__item",r.tabItem,i?.className,{"tabs__item--active":l===a}),children:t??a},a)}))})}function h(e){let{lazy:a,children:t,selectedValue:n}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=i.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return(0,c.jsx)("div",{className:"margin-top--md",children:i.map(((e,a)=>(0,l.cloneElement)(e,{key:a,hidden:e.props.value!==n})))})}function p(e){const a=(0,s.u)(e);return(0,c.jsxs)("div",{className:(0,n.A)("tabs-container",r.tabList),children:[(0,c.jsx)(d,{...a,...e}),(0,c.jsx)(h,{...a,...e})]})}function g(e){const a=(0,o.default)();return(0,c.jsx)(p,{...e,children:(0,s.v)(e.children)},String(a))}},54638:(e,a,t)=>{t.d(a,{u:()=>g,v:()=>c});var l=t(79474),n=t(20241),i=t(97052),s=t(5290),o=t(37651),r=t(88679);function c(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:a,children:t}=e;return(0,l.useMemo)((()=>{const e=a??function(e){return c(e).map((e=>{let{props:{value:a,label:t,attributes:l,default:n}}=e;return{value:a,label:t,attributes:l,default:n}}))}(t);return function(e){const a=(0,o.X)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function h(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function p(e){let{queryString:a=!1,groupId:t}=e;const i=(0,n.W6)(),o=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,s.aZ)(o),(0,l.useCallback)((e=>{if(!o)return;const a=new URLSearchParams(i.location.search);a.set(o,e),i.replace({...i.location,search:a.toString()})}),[o,i])]}function g(e){const{defaultValue:a,queryString:t=!1,groupId:n}=e,s=d(e),[o,c]=(0,l.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!h({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const l=t.find((e=>e.default))??t[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:a,tabValues:s}))),[g,m]=p({queryString:t,groupId:n}),[u,f]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[n,i]=(0,r.Dv)(t);return[n,(0,l.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:n}),j=(()=>{const e=g??u;return h({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{j&&c(j)}),[j]);return{selectedValue:o,selectValue:(0,l.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),m(e),f(e)}),[m,f,s]),tabValues:s}}},71337:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>r,default:()=>g,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var l=t(13274),n=t(17014),i=t(48578),s=t(86572);const o={title:"Manage fileset metadata using Gravitino",slug:"/manage-fileset-metadata-using-gravitino",date:"2024-4-2",keyword:"Gravitino fileset metadata manage",license:"This software is licensed under the Apache License version 2."},r=void 0,c={id:"manage-fileset-metadata-using-gravitino",title:"Manage fileset metadata using Gravitino",description:"This page introduces how to manage fileset metadata in Apache Gravitino. Filesets",source:"@site/versioned_docs/version-0.8.0-incubating/manage-fileset-metadata-using-gravitino.md",sourceDirName:".",slug:"/manage-fileset-metadata-using-gravitino",permalink:"/docs/0.8.0-incubating/manage-fileset-metadata-using-gravitino",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/manage-fileset-metadata-using-gravitino.md",tags:[],version:"0.8.0-incubating",frontMatter:{title:"Manage fileset metadata using Gravitino",slug:"/manage-fileset-metadata-using-gravitino",date:"2024-4-2",keyword:"Gravitino fileset metadata manage",license:"This software is licensed under the Apache License version 2."},sidebar:"docs",previous:{title:"Expression system",permalink:"/docs/0.8.0-incubating/expression"},next:{title:"Use Gravitino Virtual File System with Filesets",permalink:"/docs/0.8.0-incubating/how-to-use-gvfs"}},d={},h=[{value:"Catalog operations",id:"catalog-operations",level:2},{value:"Create a catalog",id:"create-a-catalog",level:3},{value:"Load a catalog",id:"load-a-catalog",level:3},{value:"Alter a catalog",id:"alter-a-catalog",level:3},{value:"Drop a catalog",id:"drop-a-catalog",level:3},{value:"List all catalogs in a metalake",id:"list-all-catalogs-in-a-metalake",level:3},{value:"List all catalogs&#39; information in a metalake",id:"list-all-catalogs-information-in-a-metalake",level:3},{value:"Schema operations",id:"schema-operations",level:2},{value:"Create a schema",id:"create-a-schema",level:3},{value:"Load a schema",id:"load-a-schema",level:3},{value:"Alter a schema",id:"alter-a-schema",level:3},{value:"Drop a schema",id:"drop-a-schema",level:3},{value:"List all schemas under a catalog",id:"list-all-schemas-under-a-catalog",level:3},{value:"Fileset operations",id:"fileset-operations",level:2},{value:"Create a fileset",id:"create-a-fileset",level:3},{value:"Alter a fileset",id:"alter-a-fileset",level:3},{value:"Drop a fileset",id:"drop-a-fileset",level:3},{value:"List filesets",id:"list-filesets",level:3}];function p(e){const a={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.p,{children:"This page introduces how to manage fileset metadata in Apache Gravitino. Filesets\nare a collection of files and directories. Users can leverage\nfilesets to manage non-tabular data like training datasets and other raw data."}),"\n",(0,l.jsxs)(a.p,{children:["Typically, a fileset is mapped to a directory on a file system like HDFS, S3, ADLS, GCS, etc.\nWith the fileset managed by Gravitino, the non-tabular data can be managed as assets together with\ntabular data in Gravitino in a unified way. The following operations will use HDFS as an example, for other\nHCFS like S3, OSS, GCS, etc, please refer to the corresponding operations ",(0,l.jsx)(a.a,{href:"/docs/0.8.0-incubating/hadoop-catalog-with-s3",children:"hadoop-with-s3"}),", ",(0,l.jsx)(a.a,{href:"/docs/0.8.0-incubating/hadoop-catalog-with-oss",children:"hadoop-with-oss"}),", ",(0,l.jsx)(a.a,{href:"/docs/0.8.0-incubating/hadoop-catalog-with-gcs",children:"hadoop-with-gcs"})," and\n",(0,l.jsx)(a.a,{href:"/docs/0.8.0-incubating/hadoop-catalog-with-adls",children:"hadoop-with-adls"}),"."]}),"\n",(0,l.jsx)(a.p,{children:"After a fileset is created, users can easily access, manage the files/directories through\nthe fileset's identifier, without needing to know the physical path of the managed dataset. Also, with\nunified access control mechanism, filesets can be managed via the same role based access\ncontrol mechanism without needing to set access controls across different storage systems."}),"\n",(0,l.jsx)(a.p,{children:"To use fileset, please make sure that:"}),"\n",(0,l.jsxs)(a.ul,{children:["\n",(0,l.jsxs)(a.li,{children:["Gravitino server has started, and the host and port is ",(0,l.jsx)(a.a,{href:"http://localhost:8090",children:"http://localhost:8090"}),"."]}),"\n",(0,l.jsxs)(a.li,{children:["A metalake has been created and ",(0,l.jsx)(a.a,{href:"/docs/0.8.0-incubating/manage-metalake-using-gravitino#enable-a-metalake",children:"enabled"})]}),"\n"]}),"\n",(0,l.jsx)(a.h2,{id:"catalog-operations",children:"Catalog operations"}),"\n",(0,l.jsx)(a.h3,{id:"create-a-catalog",children:"Create a catalog"}),"\n",(0,l.jsx)(a.admonition,{type:"tip",children:(0,l.jsxs)(a.p,{children:["For a fileset catalog, you must specify the catalog ",(0,l.jsx)(a.code,{children:"type"})," as ",(0,l.jsx)(a.code,{children:"FILESET"})," when creating the catalog."]})}),"\n",(0,l.jsxs)(a.p,{children:["You can create a catalog by sending a ",(0,l.jsx)(a.code,{children:"POST"})," request to the ",(0,l.jsx)(a.code,{children:"/api/metalakes/{metalake_name}/catalogs"}),"\nendpoint or just use the Gravitino Java client. The following is an example of creating a catalog:"]}),"\n",(0,l.jsxs)(i.A,{groupId:"language",queryString:!0,children:[(0,l.jsx)(s.default,{value:"shell",label:"Shell",children:(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-shell",children:'curl -X POST -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json" -d \'{\n  "name": "catalog",\n  "type": "FILESET",\n  "comment": "comment",\n  "provider": "hadoop",\n  "properties": {\n    "location": "file:///tmp/root"\n  }\n}\' http://localhost:8090/api/metalakes/metalake/catalogs\n\n'})})}),(0,l.jsx)(s.default,{value:"java",label:"Java",children:(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-java",children:'GravitinoClient gravitinoClient = GravitinoClient\n    .builder("http://localhost:8090")\n    .withMetalake("metalake")\n    .build();\n\nMap<String, String> properties = ImmutableMap.<String, String>builder()\n    .put("location", "file:///tmp/root")\n    // Property "location" is optional. If specified, a managed fileset without\n    // a storage location will be stored under this location.\n    .build();\n\nCatalog catalog = gravitinoClient.createCatalog("catalog",\n    Type.FILESET,\n    "hadoop", // provider, Gravitino only supports "hadoop" for now.\n    "This is a Hadoop fileset catalog",\n    properties);\n// ...\n\n'})})}),(0,l.jsx)(s.default,{value:"python",label:"Python",children:(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-python",children:'gravitino_client: GravitinoClient = GravitinoClient(uri="http://localhost:8090", metalake_name="metalake")\ncatalog = gravitino_client.create_catalog(name="catalog",\n                                          type=Catalog.Type.FILESET,\n                                          provider="hadoop", \n                                          comment="This is a Hadoop fileset catalog",\n                                          properties={"location": "/tmp/test1"})\n'})})})]}),"\n",(0,l.jsx)(a.p,{children:"Currently, Gravitino supports the following catalog providers:"}),"\n",(0,l.jsxs)(a.table,{children:[(0,l.jsx)(a.thead,{children:(0,l.jsxs)(a.tr,{children:[(0,l.jsx)(a.th,{children:"Catalog provider"}),(0,l.jsx)(a.th,{children:"Catalog property"})]})}),(0,l.jsx)(a.tbody,{children:(0,l.jsxs)(a.tr,{children:[(0,l.jsx)(a.td,{children:(0,l.jsx)(a.code,{children:"hadoop"})}),(0,l.jsx)(a.td,{children:(0,l.jsx)(a.a,{href:"/docs/0.8.0-incubating/hadoop-catalog#catalog-properties",children:"Hadoop catalog property"})})]})})]}),"\n",(0,l.jsx)(a.h3,{id:"load-a-catalog",children:"Load a catalog"}),"\n",(0,l.jsxs)(a.p,{children:["Refer to ",(0,l.jsx)(a.a,{href:"/docs/0.8.0-incubating/manage-relational-metadata-using-gravitino#load-a-catalog",children:"Load a catalog"}),"\nin relational catalog for more details. For a fileset catalog, the load operation is the same."]}),"\n",(0,l.jsx)(a.h3,{id:"alter-a-catalog",children:"Alter a catalog"}),"\n",(0,l.jsxs)(a.p,{children:["Refer to ",(0,l.jsx)(a.a,{href:"/docs/0.8.0-incubating/manage-relational-metadata-using-gravitino#alter-a-catalog",children:"Alter a catalog"}),"\nin relational catalog for more details. For a fileset catalog, the alter operation is the same."]}),"\n",(0,l.jsx)(a.h3,{id:"drop-a-catalog",children:"Drop a catalog"}),"\n",(0,l.jsxs)(a.p,{children:["Refer to ",(0,l.jsx)(a.a,{href:"/docs/0.8.0-incubating/manage-relational-metadata-using-gravitino#drop-a-catalog",children:"Drop a catalog"}),"\nin relational catalog for more details. For a fileset catalog, the drop operation is the same."]}),"\n",(0,l.jsx)(a.admonition,{type:"note",children:(0,l.jsx)(a.p,{children:"Currently, Gravitino doesn't support dropping a catalog with schemas and filesets under it. You have\nto drop all the schemas and filesets under the catalog before dropping the catalog."})}),"\n",(0,l.jsx)(a.h3,{id:"list-all-catalogs-in-a-metalake",children:"List all catalogs in a metalake"}),"\n",(0,l.jsxs)(a.p,{children:["Please refer to ",(0,l.jsx)(a.a,{href:"/docs/0.8.0-incubating/manage-relational-metadata-using-gravitino#list-all-catalogs-in-a-metalake",children:"List all catalogs in a metalake"}),"\nin relational catalog for more details. For a fileset catalog, the list operation is the same."]}),"\n",(0,l.jsx)(a.h3,{id:"list-all-catalogs-information-in-a-metalake",children:"List all catalogs' information in a metalake"}),"\n",(0,l.jsxs)(a.p,{children:["Please refer to ",(0,l.jsx)(a.a,{href:"/docs/0.8.0-incubating/manage-relational-metadata-using-gravitino#list-all-catalogs-information-in-a-metalake",children:"List all catalogs' information in a metalake"}),"\nin relational catalog for more details. For a fileset catalog, the list operation is the same."]}),"\n",(0,l.jsx)(a.h2,{id:"schema-operations",children:"Schema operations"}),"\n",(0,l.jsxs)(a.p,{children:[(0,l.jsx)(a.code,{children:"Schema"})," is a virtual namespace in a fileset catalog, which is used to organize the fileset. It\nis similar to the concept of ",(0,l.jsx)(a.code,{children:"schema"})," in relational catalog."]}),"\n",(0,l.jsx)(a.admonition,{type:"tip",children:(0,l.jsx)(a.p,{children:"Users should create a metalake and a catalog before creating a schema."})}),"\n",(0,l.jsx)(a.h3,{id:"create-a-schema",children:"Create a schema"}),"\n",(0,l.jsxs)(a.p,{children:["You can create a schema by sending a ",(0,l.jsx)(a.code,{children:"POST"})," request to the ",(0,l.jsx)(a.code,{children:"/api/metalakes/{metalake_name}/catalogs/{catalog_name}/schemas"}),"\nendpoint or just use the Gravitino Java client. The following is an example of creating a schema:"]}),"\n",(0,l.jsxs)(i.A,{groupId:"language",queryString:!0,children:[(0,l.jsx)(s.default,{value:"shell",label:"Shell",children:(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-shell",children:'curl -X POST -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json" -d \'{\n  "name": "schema",\n  "comment": "comment",\n  "properties": {\n    "location": "file:///tmp/root/schema"\n  }\n}\' http://localhost:8090/api/metalakes/metalake/catalogs/catalog/schemas\n'})})}),(0,l.jsx)(s.default,{value:"java",label:"Java",children:(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-java",children:'GravitinoClient gravitinoClient = GravitinoClient\n    .builder("http://localhost:8090")\n    .withMetalake("metalake")\n    .build();\n\n// Assuming you have just created a Hadoop catalog named `catalog`\nCatalog catalog = gravitinoClient.loadCatalog("catalog");\n\nSupportsSchemas supportsSchemas = catalog.asSchemas();\n\nMap<String, String> schemaProperties = ImmutableMap.<String, String>builder()\n    // Property "location" is optional, if specified all the managed fileset without\n    // specifying storage location will be stored under this location.\n    .put("location", "file:///tmp/root/schema")\n    .build();\nSchema schema = supportsSchemas.createSchema("schema",\n    "This is a schema",\n    schemaProperties\n);\n// ...\n'})})}),(0,l.jsx)(s.default,{value:"python",label:"Python",children:(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-python",children:'gravitino_client: GravitinoClient = GravitinoClient(uri="http://localhost:8090", metalake_name="metalake")\n\ncatalog: Catalog = gravitino_client.load_catalog(name="catalog")\ncatalog.as_schemas().create_schema(name="schema", \n                                   comment="This is a schema",\n                                   properties={"location": "/tmp/root/schema"})\n'})})})]}),"\n",(0,l.jsx)(a.p,{children:"Currently, Gravitino supports the following schema property:"}),"\n",(0,l.jsxs)(a.table,{children:[(0,l.jsx)(a.thead,{children:(0,l.jsxs)(a.tr,{children:[(0,l.jsx)(a.th,{children:"Catalog provider"}),(0,l.jsx)(a.th,{children:"Schema property"})]})}),(0,l.jsx)(a.tbody,{children:(0,l.jsxs)(a.tr,{children:[(0,l.jsx)(a.td,{children:(0,l.jsx)(a.code,{children:"hadoop"})}),(0,l.jsx)(a.td,{children:(0,l.jsx)(a.a,{href:"/docs/0.8.0-incubating/hadoop-catalog#schema-properties",children:"Hadoop schema property"})})]})})]}),"\n",(0,l.jsx)(a.h3,{id:"load-a-schema",children:"Load a schema"}),"\n",(0,l.jsxs)(a.p,{children:["Please refer to ",(0,l.jsx)(a.a,{href:"/docs/0.8.0-incubating/manage-relational-metadata-using-gravitino#load-a-schema",children:"Load a schema"}),"\nin relational catalog for more details. For a fileset catalog, the schema load operation is the\nsame."]}),"\n",(0,l.jsx)(a.h3,{id:"alter-a-schema",children:"Alter a schema"}),"\n",(0,l.jsxs)(a.p,{children:["Please refer to ",(0,l.jsx)(a.a,{href:"/docs/0.8.0-incubating/manage-relational-metadata-using-gravitino#alter-a-schema",children:"Alter a schema"}),"\nin relational catalog for more details. For a fileset catalog, the schema alter operation is the\nsame."]}),"\n",(0,l.jsx)(a.h3,{id:"drop-a-schema",children:"Drop a schema"}),"\n",(0,l.jsxs)(a.p,{children:["Please refer to ",(0,l.jsx)(a.a,{href:"/docs/0.8.0-incubating/manage-relational-metadata-using-gravitino#drop-a-schema",children:"Drop a schema"}),"\nin relational catalog for more details. For a fileset catalog, the schema drop operation is the\nsame."]}),"\n",(0,l.jsxs)(a.p,{children:["Note that the drop operation will delete all the fileset metadata under this schema if ",(0,l.jsx)(a.code,{children:"cascade"}),"\nset to ",(0,l.jsx)(a.code,{children:"true"}),". Besides, for ",(0,l.jsx)(a.code,{children:"MANAGED"})," fileset, this drop operation will also ",(0,l.jsx)(a.strong,{children:"remove"})," all the\nfiles/directories of this fileset; for ",(0,l.jsx)(a.code,{children:"EXTERNAL"})," fileset, this drop operation will only delete\nthe metadata of this fileset."]}),"\n",(0,l.jsx)(a.h3,{id:"list-all-schemas-under-a-catalog",children:"List all schemas under a catalog"}),"\n",(0,l.jsxs)(a.p,{children:["Please refer to ",(0,l.jsx)(a.a,{href:"/docs/0.8.0-incubating/manage-relational-metadata-using-gravitino#list-all-schemas-under-a-catalog",children:"List all schemas under a catalog"}),"\nin relational catalog for more details. For a fileset catalog, the schema list operation is the\nsame."]}),"\n",(0,l.jsx)(a.h2,{id:"fileset-operations",children:"Fileset operations"}),"\n",(0,l.jsx)(a.admonition,{type:"tip",children:(0,l.jsxs)(a.ul,{children:["\n",(0,l.jsx)(a.li,{children:"Users should create a metalake, a catalog, and a schema before creating a fileset."}),"\n",(0,l.jsx)(a.li,{children:"Currently, Gravitino only supports managing Hadoop Compatible File System (HCFS) locations."}),"\n"]})}),"\n",(0,l.jsx)(a.h3,{id:"create-a-fileset",children:"Create a fileset"}),"\n",(0,l.jsxs)(a.p,{children:["You can create a fileset by sending a ",(0,l.jsx)(a.code,{children:"POST"})," request to the ",(0,l.jsx)(a.code,{children:"/api/metalakes/{metalake_name} /catalogs/{catalog_name}/schemas/{schema_name}/filesets"})," endpoint or just use the Gravitino Java\nclient. The following is an example of creating a fileset:"]}),"\n",(0,l.jsxs)(i.A,{groupId:"language",queryString:!0,children:[(0,l.jsx)(s.default,{value:"shell",label:"Shell",children:(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-shell",children:'curl -X POST -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json" -d \'{\n  "name": "example_fileset",\n  "comment": "This is an example fileset",\n  "type": "MANAGED",\n  "storageLocation": "file:///tmp/root/schema/example_fileset",\n  "properties": {\n    "k1": "v1"\n  }\n}\' http://localhost:8090/api/metalakes/metalake/catalogs/catalog/schemas/schema/filesets\n'})})}),(0,l.jsx)(s.default,{value:"java",label:"Java",children:(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-java",children:'GravitinoClient gravitinoClient = GravitinoClient\n    .builder("http://localhost:8090")\n    .withMetalake("metalake")\n    .build();\n\nCatalog catalog = gravitinoClient.loadCatalog("catalog");\nFilesetCatalog filesetCatalog = catalog.asFilesetCatalog();\n\nMap<String, String> propertiesMap = ImmutableMap.<String, String>builder()\n        .put("k1", "v1")\n        .build();\n\nfilesetCatalog.createFileset(\n  NameIdentifier.of("schema", "example_fileset"),\n  "This is an example fileset",\n  Fileset.Type.MANAGED,\n  "file:///tmp/root/schema/example_fileset",\n  propertiesMap,\n);\n'})})}),(0,l.jsx)(s.default,{value:"python",label:"Python",children:(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-python",children:'gravitino_client: GravitinoClient = GravitinoClient(uri="http://localhost:8090", metalake_name="metalake")\n\ncatalog: Catalog = gravitino_client.load_catalog(name="catalog")\ncatalog.as_fileset_catalog().create_fileset(ident=NameIdentifier.of("schema", "example_fileset"),\n                                            type=Fileset.Type.MANAGED,\n                                            comment="This is an example fileset",\n                                            storage_location="/tmp/root/schema/example_fileset",\n                                            properties={"k1": "v1"})\n'})})})]}),"\n",(0,l.jsxs)(a.p,{children:["Currently, Gravitino supports two ",(0,l.jsx)(a.strong,{children:"types"})," of filesets:"]}),"\n",(0,l.jsxs)(a.ul,{children:["\n",(0,l.jsxs)(a.li,{children:[(0,l.jsx)(a.code,{children:"MANAGED"}),": The storage location of the fileset is managed by Gravitino when specified as\n",(0,l.jsx)(a.code,{children:"MANAGED"}),", the physical location of the fileset will be deleted when this fileset is dropped."]}),"\n",(0,l.jsxs)(a.li,{children:[(0,l.jsx)(a.code,{children:"EXTERNAL"}),": The storage location of the fileset is ",(0,l.jsx)(a.strong,{children:"not"})," managed by Gravitino, when\nspecified as ",(0,l.jsx)(a.code,{children:"EXTERNAL"}),", the files of the fileset will ",(0,l.jsx)(a.strong,{children:"not"})," be deleted when\nthe fileset is dropped."]}),"\n"]}),"\n",(0,l.jsx)(a.p,{children:(0,l.jsx)(a.strong,{children:"storageLocation"})}),"\n",(0,l.jsxs)(a.p,{children:["The ",(0,l.jsx)(a.code,{children:"storageLocation"})," is the physical location of the fileset. Users can specify this location\nwhen creating a fileset, or follow the rules of the catalog/schema location if not specified."]}),"\n",(0,l.jsxs)(a.p,{children:["The value of ",(0,l.jsx)(a.code,{children:"storageLocation"})," depends on the configuration settings of the catalog:"]}),"\n",(0,l.jsxs)(a.ul,{children:["\n",(0,l.jsxs)(a.li,{children:["If this is a local fileset catalog, the ",(0,l.jsx)(a.code,{children:"storageLocation"})," should be in the format of ",(0,l.jsx)(a.code,{children:"file:///path/to/fileset"}),"."]}),"\n",(0,l.jsxs)(a.li,{children:["If this is a HDFS fileset catalog, the ",(0,l.jsx)(a.code,{children:"storageLocation"})," should be in the format of ",(0,l.jsx)(a.code,{children:"hdfs://namenode:port/path/to/fileset"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(a.p,{children:["For a ",(0,l.jsx)(a.code,{children:"MANAGED"})," fileset, the storage location is:"]}),"\n",(0,l.jsxs)(a.ol,{children:["\n",(0,l.jsx)(a.li,{children:"The one specified by the user during the fileset creation."}),"\n",(0,l.jsxs)(a.li,{children:["When the catalog property ",(0,l.jsx)(a.code,{children:"location"})," is specified but the schema property ",(0,l.jsx)(a.code,{children:"location"})," isn't specified,\nthe storage location is ",(0,l.jsx)(a.code,{children:"catalog location/schema name/fileset name"}),"."]}),"\n",(0,l.jsxs)(a.li,{children:["When the catalog property ",(0,l.jsx)(a.code,{children:"location"})," isn't specified but the schema property ",(0,l.jsx)(a.code,{children:"location"})," is specified,\nthe storage location is ",(0,l.jsx)(a.code,{children:"schema location/fileset name"}),"."]}),"\n",(0,l.jsxs)(a.li,{children:["When both the catalog property ",(0,l.jsx)(a.code,{children:"location"})," and the schema property ",(0,l.jsx)(a.code,{children:"location"})," are specified, the storage\nlocation is ",(0,l.jsx)(a.code,{children:"schema location/fileset name"}),"."]}),"\n",(0,l.jsxs)(a.li,{children:["When both the catalog property ",(0,l.jsx)(a.code,{children:"location"})," and schema property ",(0,l.jsx)(a.code,{children:"location"})," isn't specified, the user\nshould specify the ",(0,l.jsx)(a.code,{children:"storageLocation"})," in the fileset creation."]}),"\n"]}),"\n",(0,l.jsxs)(a.p,{children:["For ",(0,l.jsx)(a.code,{children:"EXTERNAL"})," fileset, users should specify ",(0,l.jsx)(a.code,{children:"storageLocation"})," during the fileset creation,\notherwise, Gravitino will throw an exception."]}),"\n",(0,l.jsx)(a.h3,{id:"alter-a-fileset",children:"Alter a fileset"}),"\n",(0,l.jsxs)(a.p,{children:["You can modify a fileset by sending a ",(0,l.jsx)(a.code,{children:"PUT"})," request to the ",(0,l.jsx)(a.code,{children:"/api/metalakes/{metalake_name} /catalogs/{catalog_name}/schemas/{schema_name}/filesets/{fileset_name}"})," endpoint or just use the\nGravitino Java client. The following is an example of modifying a fileset:"]}),"\n",(0,l.jsxs)(i.A,{groupId:"language",queryString:!0,children:[(0,l.jsx)(s.default,{value:"shell",label:"Shell",children:(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-shell",children:'curl -X PUT -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json" -d \'{\n  "updates": [\n    {\n      "@type": "removeProperty",\n      "property": "key2"\n    }, {\n      "@type": "setProperty",\n      "property": "key3",\n      "value": "value3"\n    }\n  ]\n}\' http://localhost:8090/api/metalakes/metalake/catalogs/catalog/schemas/schema/filesets/fileset\n'})})}),(0,l.jsx)(s.default,{value:"java",label:"Java",children:(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-java",children:'// ...\n// Assuming you have just created a Fileset catalog named `catalog`\nCatalog catalog = gravitinoClient.loadCatalog("catalog");\n\nFilesetCatalog filesetCatalog = catalog.asFilesetCatalog();\n\nFileset f = filesetCatalog.alterFileset(NameIdentifier.of("schema", "fileset"),\n    FilesetChange.rename("fileset_renamed"), FilesetChange.updateComment("xxx"));\n// ...\n'})})}),(0,l.jsx)(s.default,{value:"python",label:"Python",children:(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-python",children:'gravitino_client: GravitinoClient = GravitinoClient(uri="http://localhost:8090", metalake_name="metalake")\n\ncatalog: Catalog = gravitino_client.load_catalog(name="catalog")\nchanges = (\n   FilesetChange.remove_property("fileset_properties_key1"),\n   FilesetChange.set_property("fileset_properties_key2", "fileset_propertie_new_value"),\n)\nfileset_new = catalog.as_fileset_catalog().alter_fileset(NameIdentifier.of("schema", "fileset"), \n                                                         *changes)\n'})})})]}),"\n",(0,l.jsx)(a.p,{children:"Currently, Gravitino supports the following changes to a fileset:"}),"\n",(0,l.jsxs)(a.table,{children:[(0,l.jsx)(a.thead,{children:(0,l.jsxs)(a.tr,{children:[(0,l.jsx)(a.th,{children:"Supported modification"}),(0,l.jsx)(a.th,{children:"JSON"}),(0,l.jsx)(a.th,{children:"Java"})]})}),(0,l.jsxs)(a.tbody,{children:[(0,l.jsxs)(a.tr,{children:[(0,l.jsx)(a.td,{children:"Rename a fileset"}),(0,l.jsx)(a.td,{children:(0,l.jsx)(a.code,{children:'{"@type":"rename","newName":"fileset_renamed"}'})}),(0,l.jsx)(a.td,{children:(0,l.jsx)(a.code,{children:'FilesetChange.rename("fileset_renamed")'})})]}),(0,l.jsxs)(a.tr,{children:[(0,l.jsx)(a.td,{children:"Update a comment"}),(0,l.jsx)(a.td,{children:(0,l.jsx)(a.code,{children:'{"@type":"updateComment","newComment":"new_comment"}'})}),(0,l.jsx)(a.td,{children:(0,l.jsx)(a.code,{children:'FilesetChange.updateComment("new_comment")'})})]}),(0,l.jsxs)(a.tr,{children:[(0,l.jsx)(a.td,{children:"Set a fileset property"}),(0,l.jsx)(a.td,{children:(0,l.jsx)(a.code,{children:'{"@type":"setProperty","property":"key1","value":"value1"}'})}),(0,l.jsx)(a.td,{children:(0,l.jsx)(a.code,{children:'FilesetChange.setProperty("key1", "value1")'})})]}),(0,l.jsxs)(a.tr,{children:[(0,l.jsx)(a.td,{children:"Remove a fileset property"}),(0,l.jsx)(a.td,{children:(0,l.jsx)(a.code,{children:'{"@type":"removeProperty","property":"key1"}'})}),(0,l.jsx)(a.td,{children:(0,l.jsx)(a.code,{children:'FilesetChange.removeProperty("key1")'})})]}),(0,l.jsxs)(a.tr,{children:[(0,l.jsx)(a.td,{children:"Remove comment (deprecated)"}),(0,l.jsx)(a.td,{children:(0,l.jsx)(a.code,{children:'{"@type":"removeComment"}'})}),(0,l.jsx)(a.td,{children:(0,l.jsx)(a.code,{children:"FilesetChange.removeComment()"})})]})]})]}),"\n",(0,l.jsx)(a.h3,{id:"drop-a-fileset",children:"Drop a fileset"}),"\n",(0,l.jsxs)(a.p,{children:["You can remove a fileset by sending a ",(0,l.jsx)(a.code,{children:"DELETE"})," request to the ",(0,l.jsx)(a.code,{children:"/api/metalakes/{metalake_name} /catalogs/{catalog_name}/schemas/{schema_name}/filesets/{fileset_name}"})," endpoint or by using the\nGravitino Java client. The following is an example of dropping a fileset:"]}),"\n",(0,l.jsxs)(i.A,{groupId:"language",queryString:!0,children:[(0,l.jsx)(s.default,{value:"shell",label:"Shell",children:(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-shell",children:'curl -X DELETE -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json" \\\nhttp://localhost:8090/api/metalakes/metalake/catalogs/catalog/schemas/schema/filesets/fileset\n'})})}),(0,l.jsx)(s.default,{value:"java",label:"Java",children:(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-java",children:'// ...\n// Assuming you have just created a Fileset catalog named `catalog`\nCatalog catalog = gravitinoClient.loadCatalog("catalog");\n\nFilesetCatalog filesetCatalog = catalog.asFilesetCatalog();\n\n// Drop a fileset\nfilesetCatalog.dropFileset(NameIdentifier.of("schema", "fileset"));\n// ...\n'})})}),(0,l.jsx)(s.default,{value:"python",label:"Python",children:(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-python",children:'gravitino_client: GravitinoClient = GravitinoClient(uri="http://localhost:8090", metalake_name="metalake")\n\ncatalog: Catalog = gravitino_client.load_catalog(name="catalog")\ncatalog.as_fileset_catalog().drop_fileset(ident=NameIdentifier.of("schema", "fileset"))\n'})})})]}),"\n",(0,l.jsxs)(a.p,{children:["For a ",(0,l.jsx)(a.code,{children:"MANAGED"})," fileset, the physical location of the fileset will be deleted when this fileset is\ndropped. For ",(0,l.jsx)(a.code,{children:"EXTERNAL"})," fileset, only the metadata of the fileset will be removed."]}),"\n",(0,l.jsx)(a.h3,{id:"list-filesets",children:"List filesets"}),"\n",(0,l.jsxs)(a.p,{children:["You can list all filesets in a schema by sending a ",(0,l.jsx)(a.code,{children:"GET"})," request to the ",(0,l.jsx)(a.code,{children:"/api/metalakes/ {metalake_name}/catalogs/{catalog_name}/schemas/{schema_name}/filesets"})," endpoint or by using the\nGravitino Java client. The following is an example of listing all the filesets in a schema:"]}),"\n",(0,l.jsxs)(i.A,{groupId:"language",queryString:!0,children:[(0,l.jsx)(s.default,{value:"shell",label:"Shell",children:(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-shell",children:'curl -X GET -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json" \\\nhttp://localhost:8090/api/metalakes/metalake/catalogs/catalog/schemas/schema/filesets\n'})})}),(0,l.jsx)(s.default,{value:"java",label:"Java",children:(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-java",children:'// ...\nCatalog catalog = gravitinoClient.loadCatalog("catalog");\n\nFilesetCatalog filesetCatalog = catalog.asFilesetCatalog();\nNameIdentifier[] identifiers =\n    filesetCatalog.listFilesets(Namespace.of("schema"));\n// ...\n'})})}),(0,l.jsx)(s.default,{value:"python",label:"Python",children:(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-python",children:'gravitino_client: GravitinoClient = GravitinoClient(uri="http://localhost:8090", metalake_name="metalake")\n\ncatalog: Catalog = gravitino_client.load_catalog(name="catalog")\nfileset_list: List[NameIdentifier] = catalog.as_fileset_catalog().list_filesets(namespace=Namespace.of("schema")))\n'})})})]})]})}function g(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,l.jsx)(a,{...e,children:(0,l.jsx)(p,{...e})}):p(e)}},86572:(e,a,t)=>{t.r(a),t.d(a,{default:()=>s});t(79474);var l=t(13526);const n={tabItem:"tabItem_VJ4w"};var i=t(13274);function s(e){let{children:a,hidden:t,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,l.A)(n.tabItem,s),hidden:t,children:a})}}}]);