"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[3036],{1445:(e,a,l)=>{l.r(a),l.d(a,{default:()=>i});l(79474);var n=l(13526);const t={tabItem:"tabItem_JtVc"};var o=l(13274);function i(e){let{children:a,hidden:l,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,n.A)(t.tabItem,i),hidden:l,children:a})}},17014:(e,a,l)=>{l.d(a,{R:()=>i,x:()=>s});var n=l(79474);const t={},o=n.createContext(t);function i(e){const a=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(o.Provider,{value:a},e.children)}},47838:(e,a,l)=>{l.r(a),l.d(a,{assets:()=>c,contentTitle:()=>r,default:()=>g,frontMatter:()=>s,metadata:()=>d,toc:()=>m});var n=l(13274),t=l(17014),o=l(48521),i=l(1445);const s={title:"Manage model metadata using Gravitino",slug:"/manage-model-metadata-using-gravitino",date:new Date("2024-12-26T00:00:00.000Z"),keyword:"Gravitino model metadata manage",license:"This software is licensed under the Apache License version 2."},r=void 0,d={id:"manage-model-metadata-using-gravitino",title:"Manage model metadata using Gravitino",description:"This page introduces how to manage model metadata in Apache Gravitino. Gravitino model catalog",source:"@site/docs/manage-model-metadata-using-gravitino.md",sourceDirName:".",slug:"/manage-model-metadata-using-gravitino",permalink:"/docs/next/manage-model-metadata-using-gravitino",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/manage-model-metadata-using-gravitino.md",tags:[],version:"current",lastUpdatedBy:"Justin Mclean",lastUpdatedAt:1740469354e3,frontMatter:{title:"Manage model metadata using Gravitino",slug:"/manage-model-metadata-using-gravitino",date:"2024-12-26T00:00:00.000Z",keyword:"Gravitino model metadata manage",license:"This software is licensed under the Apache License version 2."},sidebar:"docs",previous:{title:"Manage messaging metadata",permalink:"/docs/next/manage-massaging-metadata-using-gravitino"},next:{title:"Manage tags in Gravitino",permalink:"/docs/next/manage-tags-in-gravitino"}},c={},m=[{value:"Catalog operations",id:"catalog-operations",level:2},{value:"Create a catalog",id:"create-a-catalog",level:3},{value:"Load a catalog",id:"load-a-catalog",level:3},{value:"Alter a catalog",id:"alter-a-catalog",level:3},{value:"Drop a catalog",id:"drop-a-catalog",level:3},{value:"List all catalogs in a metalake",id:"list-all-catalogs-in-a-metalake",level:3},{value:"List all catalogs&#39; information in a metalake",id:"list-all-catalogs-information-in-a-metalake",level:3},{value:"Schema operations",id:"schema-operations",level:2},{value:"Create a schema",id:"create-a-schema",level:3},{value:"Load a schema",id:"load-a-schema",level:3},{value:"Alter a schema",id:"alter-a-schema",level:3},{value:"Drop a schema",id:"drop-a-schema",level:3},{value:"List all schemas under a catalog",id:"list-all-schemas-under-a-catalog",level:3},{value:"Model operations",id:"model-operations",level:2},{value:"Register a model",id:"register-a-model",level:3},{value:"Get a model",id:"get-a-model",level:3},{value:"Delete a model",id:"delete-a-model",level:3},{value:"List models",id:"list-models",level:3},{value:"ModelVersion operations",id:"modelversion-operations",level:2},{value:"Link a ModelVersion",id:"link-a-modelversion",level:3},{value:"Get a ModelVersion",id:"get-a-modelversion",level:3},{value:"Get a ModelVersion by alias",id:"get-a-modelversion-by-alias",level:3},{value:"Delete a ModelVersion",id:"delete-a-modelversion",level:3},{value:"Delete a ModelVersion by alias",id:"delete-a-modelversion-by-alias",level:3},{value:"List ModelVersions",id:"list-modelversions",level:3}];function h(e){const a={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:"This page introduces how to manage model metadata in Apache Gravitino. Gravitino model catalog\nis a kind of model registry, which provides the ability to manage machine learning models'\nversioned metadata. It follows the typical Gravitino 3-level namespace (catalog, schema, and\nmodel) and supports managing the versions for each model."}),"\n",(0,n.jsx)(a.p,{children:"Currently, it supports model and model version registering, listing, loading, and deleting."}),"\n",(0,n.jsx)(a.p,{children:"To use the model catalog, please make sure that:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["The Gravitino server has started, and is serving at, e.g. ",(0,n.jsx)(a.a,{href:"http://localhost:8090",children:"http://localhost:8090"}),"."]}),"\n",(0,n.jsxs)(a.li,{children:["A metalake has been created and ",(0,n.jsx)(a.a,{href:"/docs/next/manage-metalake-using-gravitino#enable-a-metalake",children:"enabled"})]}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"catalog-operations",children:"Catalog operations"}),"\n",(0,n.jsx)(a.h3,{id:"create-a-catalog",children:"Create a catalog"}),"\n",(0,n.jsx)(a.admonition,{type:"info",children:(0,n.jsxs)(a.p,{children:["For a model catalog, you must specify the catalog ",(0,n.jsx)(a.code,{children:"type"})," as ",(0,n.jsx)(a.code,{children:"MODEL"})," when creating the catalog.\nPlease also be aware that the ",(0,n.jsx)(a.code,{children:"provider"})," is not required for a model catalog."]})}),"\n",(0,n.jsxs)(a.p,{children:["You can create a catalog by sending a ",(0,n.jsx)(a.code,{children:"POST"})," request to the ",(0,n.jsx)(a.code,{children:"/api/metalakes/{metalake_name}/catalogs"}),"\nendpoint or just use the Gravitino Java/Python client. The following is an example of creating a\ncatalog:"]}),"\n",(0,n.jsxs)(o.A,{groupId:"language",queryString:!0,children:[(0,n.jsx)(i.default,{value:"shell",label:"Shell",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-shell",children:'curl -X POST -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json" -d \'{\n  "name": "model_catalog",\n  "type": "MODEL",\n  "comment": "This is a model catalog",\n  "properties": {\n    "k1": "v1"\n  }\n}\' http://localhost:8090/api/metalakes/example/catalogs\n'})})}),(0,n.jsx)(i.default,{value:"java",label:"Java",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:'GravitinoClient gravitinoClient = GravitinoClient\n    .builder("http://localhost:8090")\n    .withMetalake("example")\n    .build();\n\nMap<String, String> properties = ImmutableMap.<String, String>builder()\n    .put("k1", "v1")\n    .build();\n\nCatalog catalog = gravitinoClient.createCatalog(\n    "model_catalog",\n    Type.MODEL,\n    "This is a model catalog",\n    properties);\n'})})}),(0,n.jsx)(i.default,{value:"python",label:"Python",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-python",children:'gravitino_client: GravitinoClient = GravitinoClient(uri="http://localhost:8090", metalake_name="example")\ncatalog = gravitino_client.create_catalog(name="model_catalog",\n                                          type=Catalog.Type.MODEL,\n                                          provider=None,\n                                          comment="This is a model catalog",\n                                          properties={"k1": "v1"})\n'})})})]}),"\n",(0,n.jsx)(a.h3,{id:"load-a-catalog",children:"Load a catalog"}),"\n",(0,n.jsxs)(a.p,{children:["Refer to ",(0,n.jsx)(a.a,{href:"/docs/next/manage-relational-metadata-using-gravitino#load-a-catalog",children:"Load a catalog"}),"\nin relational catalog for more details. For a model catalog, the load operation is the same."]}),"\n",(0,n.jsx)(a.h3,{id:"alter-a-catalog",children:"Alter a catalog"}),"\n",(0,n.jsxs)(a.p,{children:["Refer to ",(0,n.jsx)(a.a,{href:"/docs/next/manage-relational-metadata-using-gravitino#alter-a-catalog",children:"Alter a catalog"}),"\nin relational catalog for more details. For a model catalog, the alter operation is the same."]}),"\n",(0,n.jsx)(a.h3,{id:"drop-a-catalog",children:"Drop a catalog"}),"\n",(0,n.jsxs)(a.p,{children:["Refer to ",(0,n.jsx)(a.a,{href:"/docs/next/manage-relational-metadata-using-gravitino#drop-a-catalog",children:"Drop a catalog"}),"\nin relational catalog for more details. For a model catalog, the drop operation is the same."]}),"\n",(0,n.jsx)(a.h3,{id:"list-all-catalogs-in-a-metalake",children:"List all catalogs in a metalake"}),"\n",(0,n.jsxs)(a.p,{children:["Please refer to ",(0,n.jsx)(a.a,{href:"/docs/next/manage-relational-metadata-using-gravitino#list-all-catalogs-in-a-metalake",children:"List all catalogs in a metalake"}),"\nin relational catalog for more details. For a model catalog, the list operation is the same."]}),"\n",(0,n.jsx)(a.h3,{id:"list-all-catalogs-information-in-a-metalake",children:"List all catalogs' information in a metalake"}),"\n",(0,n.jsxs)(a.p,{children:["Please refer to ",(0,n.jsx)(a.a,{href:"/docs/next/manage-relational-metadata-using-gravitino#list-all-catalogs-information-in-a-metalake",children:"List all catalogs' information in a metalake"}),"\nin relational catalog for more details. For a model catalog, the list operation is the same."]}),"\n",(0,n.jsx)(a.h2,{id:"schema-operations",children:"Schema operations"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.code,{children:"Schema"})," is a virtual namespace in a model catalog, which is used to organize the models. It\nis similar to the concept of ",(0,n.jsx)(a.code,{children:"schema"})," in the relational catalog."]}),"\n",(0,n.jsx)(a.admonition,{type:"tip",children:(0,n.jsx)(a.p,{children:"Users should create a metalake and a catalog before creating a schema."})}),"\n",(0,n.jsx)(a.h3,{id:"create-a-schema",children:"Create a schema"}),"\n",(0,n.jsxs)(a.p,{children:["You can create a schema by sending a ",(0,n.jsx)(a.code,{children:"POST"})," request to the ",(0,n.jsx)(a.code,{children:"/api/metalakes/{metalake_name}/catalogs/{catalog_name}/schemas"}),"\nendpoint or just use the Gravitino Java/Python client. The following is an example of creating a\nschema:"]}),"\n",(0,n.jsxs)(o.A,{groupId:"language",queryString:!0,children:[(0,n.jsx)(i.default,{value:"shell",label:"Shell",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-shell",children:'curl -X POST -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json" -d \'{\n  "name": "model_schema",\n  "comment": "This is a model schema",\n  "properties": {\n    "k1": "v1"\n  }\n}\' http://localhost:8090/api/metalakes/example/catalogs/model_catalog/schemas\n'})})}),(0,n.jsx)(i.default,{value:"java",label:"Java",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:'GravitinoClient gravitinoClient = GravitinoClient\n    .builder("http://localhost:8090")\n    .withMetalake("example")\n    .build();\n\nCatalog catalog = gravitinoClient.loadCatalog("model_catalog");\n\nSupportsSchemas supportsSchemas = catalog.asSchemas();\n\nMap<String, String> schemaProperties = ImmutableMap.<String, String>builder()\n    .put("k1", "v1")\n    .build();\nSchema schema = supportsSchemas.createSchema(\n    "model_schema",\n    "This is a schema",\n    schemaProperties);\n// ...\n'})})}),(0,n.jsx)(i.default,{value:"python",label:"Python",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-python",children:'gravitino_client: GravitinoClient = GravitinoClient(uri="http://localhost:8090", metalake_name="example")\n\ncatalog: Catalog = gravitino_client.load_catalog(name="model_catalog")\ncatalog.as_schemas().create_schema(name="model_schema",\n                                   comment="This is a schema",\n                                   properties={"k1": "v1"})\n'})})})]}),"\n",(0,n.jsx)(a.h3,{id:"load-a-schema",children:"Load a schema"}),"\n",(0,n.jsxs)(a.p,{children:["Please refer to ",(0,n.jsx)(a.a,{href:"/docs/next/manage-relational-metadata-using-gravitino#load-a-schema",children:"Load a schema"}),"\nin relational catalog for more details. For a model catalog, the schema load operation is the\nsame."]}),"\n",(0,n.jsx)(a.h3,{id:"alter-a-schema",children:"Alter a schema"}),"\n",(0,n.jsxs)(a.p,{children:["Please refer to ",(0,n.jsx)(a.a,{href:"/docs/next/manage-relational-metadata-using-gravitino#alter-a-schema",children:"Alter a schema"}),"\nin relational catalog for more details. For a model catalog, the schema alter operation is the\nsame."]}),"\n",(0,n.jsx)(a.h3,{id:"drop-a-schema",children:"Drop a schema"}),"\n",(0,n.jsxs)(a.p,{children:["Please refer to ",(0,n.jsx)(a.a,{href:"/docs/next/manage-relational-metadata-using-gravitino#drop-a-schema",children:"Drop a schema"}),"\nin relational catalog for more details. For a model catalog, the schema drop operation is the\nsame."]}),"\n",(0,n.jsxs)(a.p,{children:["Note that the drop operation will delete all the model metadata under this schema if ",(0,n.jsx)(a.code,{children:"cascade"}),"\nset to ",(0,n.jsx)(a.code,{children:"true"}),"."]}),"\n",(0,n.jsx)(a.h3,{id:"list-all-schemas-under-a-catalog",children:"List all schemas under a catalog"}),"\n",(0,n.jsxs)(a.p,{children:["Please refer to ",(0,n.jsx)(a.a,{href:"/docs/next/manage-relational-metadata-using-gravitino#list-all-schemas-under-a-catalog",children:"List all schemas under a catalog"}),"\nin relational catalog for more details. For a model catalog, the schema list operation is the\nsame."]}),"\n",(0,n.jsx)(a.h2,{id:"model-operations",children:"Model operations"}),"\n",(0,n.jsx)(a.admonition,{type:"tip",children:(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"Users should create a metalake, a catalog, and a schema before creating a model."}),"\n"]})}),"\n",(0,n.jsx)(a.h3,{id:"register-a-model",children:"Register a model"}),"\n",(0,n.jsxs)(a.p,{children:["You can register a model by sending a ",(0,n.jsx)(a.code,{children:"POST"})," request to the ",(0,n.jsx)(a.code,{children:"/api/metalakes/{metalake_name} /catalogs/{catalog_name}/schemas/{schema_name}/models"})," endpoint or just use the Gravitino\nJava/Python client. The following is an example of creating a model:"]}),"\n",(0,n.jsxs)(o.A,{groupId:"language",queryString:!0,children:[(0,n.jsx)(i.default,{value:"shell",label:"Shell",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-shell",children:'curl -X POST -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json" -d \'{\n  "name": "example_model",\n  "comment": "This is an example model",\n  "properties": {\n    "k1": "v1"\n  }\n}\' http://localhost:8090/api/metalakes/example/catalogs/model_catalog/schemas/model_schema/models\n'})})}),(0,n.jsx)(i.default,{value:"java",label:"Java",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:'GravitinoClient gravitinoClient = GravitinoClient\n    .builder("http://localhost:8090")\n    .withMetalake("example")\n    .build();\n\nCatalog catalog = gravitinoClient.loadCatalog("model_catalog");\nMap<String, String> propertiesMap = ImmutableMap.<String, String>builder()\n        .put("k1", "v1")\n        .build();\n\nModel model = catalog.asModelCatalog().registerModel(\n    NameIdentifier.of("model_schema", "example_model"),\n    "This is an example model",\n    propertiesMap);\n'})})}),(0,n.jsx)(i.default,{value:"python",label:"Python",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-python",children:'gravitino_client: GravitinoClient = GravitinoClient(uri="http://localhost:8090", metalake_name="example")\n\ncatalog: Catalog = gravitino_client.load_catalog(name="model_catalog")\nmodel: Model = catalog.as_model_catalog().register_model(ident=NameIdentifier.of("model_schema", "example_model"),\n                                                         comment="This is an example model",\n                                                         properties={"k1": "v1"})\n'})})})]}),"\n",(0,n.jsx)(a.h3,{id:"get-a-model",children:"Get a model"}),"\n",(0,n.jsxs)(a.p,{children:["You can get a model by sending a ",(0,n.jsx)(a.code,{children:"GET"})," request to the ",(0,n.jsx)(a.code,{children:"/api/metalakes/{metalake_name} /catalogs/{catalog_name}/schemas/{schema_name}/models/{model_name}"})," endpoint or by using the\nGravitino Java/Python client. The following is an example of getting a model:"]}),"\n",(0,n.jsxs)(o.A,{groupId:"language",queryString:!0,children:[(0,n.jsx)(i.default,{value:"shell",label:"Shell",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-shell",children:'curl -X GET -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json" \\\nhttp://localhost:8090/api/metalakes/example/catalogs/model_catalog/schemas/model_schema/models/example_model\n'})})}),(0,n.jsx)(i.default,{value:"java",label:"Java",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:'// ...\nCatalog catalog = gravitinoClient.loadCatalog("model_catalog");\nModel model = catalog.asModelCatalog().getModel(NameIdentifier.of("model_schema", "example_model"));\n// ...\n'})})}),(0,n.jsx)(i.default,{value:"python",label:"Python",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-python",children:'gravitino_client: GravitinoClient = GravitinoClient(uri="http://localhost:8090", metalake_name="example")\n\ncatalog: Catalog = gravitino_client.load_catalog(name="model_catalog")\nmodel: Model = catalog.as_model_catalog().get_model(ident=NameIdentifier.of("model_schema", "example_model"))\n'})})})]}),"\n",(0,n.jsx)(a.h3,{id:"delete-a-model",children:"Delete a model"}),"\n",(0,n.jsxs)(a.p,{children:["You can delete a model by sending a ",(0,n.jsx)(a.code,{children:"DELETE"})," request to the ",(0,n.jsx)(a.code,{children:"/api/metalakes/{metalake_name} /catalogs/{catalog_name}/schemas/{schema_name}/models/{model_name}"})," endpoint or by using the\nGravitino Java/Python client. The following is an example of deleting a model:"]}),"\n",(0,n.jsxs)(o.A,{groupId:"language",queryString:!0,children:[(0,n.jsx)(i.default,{value:"shell",label:"Shell",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-shell",children:'curl -X DELETE -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json" \\\nhttp://localhost:8090/api/metalakes/example/catalogs/model_catalog/schemas/model_schema/models/example_model\n'})})}),(0,n.jsx)(i.default,{value:"java",label:"Java",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:'// ...\nCatalog catalog = gravitinoClient.loadCatalog("model_catalog");\ncatalog.asModelCatalog().deleteModel(NameIdentifier.of("model_schema", "example_model"));\n// ...\n'})})}),(0,n.jsx)(i.default,{value:"python",label:"Python",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-python",children:'gravitino_client: GravitinoClient = GravitinoClient(uri="http://localhost:8090", metalake_name="example")\n\ncatalog: Catalog = gravitino_client.load_catalog(name="model_catalog")\ncatalog.as_model_catalog().delete_model(NameIdentifier.of("model_schema", "example_model"))\n'})})})]}),"\n",(0,n.jsx)(a.p,{children:"Note that the delete operation will delete all the model versions under this model."}),"\n",(0,n.jsx)(a.h3,{id:"list-models",children:"List models"}),"\n",(0,n.jsxs)(a.p,{children:["You can list all the models in a schema by sending a ",(0,n.jsx)(a.code,{children:"GET"})," request to the ",(0,n.jsx)(a.code,{children:"/api/metalakes/ {metalake_name}/catalogs/{catalog_name}/schemas/{schema_name}/models"})," endpoint or by using the\nGravitino Java/Python client. The following is an example of listing all the models in a schema:"]}),"\n",(0,n.jsxs)(o.A,{groupId:"language",queryString:!0,children:[(0,n.jsx)(i.default,{value:"shell",label:"Shell",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-shell",children:'curl -X GET -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json" \\\nhttp://localhost:8090/api/metalakes/example/catalogs/model_catalog/schemas/model_schema/models\n'})})}),(0,n.jsx)(i.default,{value:"java",label:"Java",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:'// ...\nCatalog catalog = gravitinoClient.loadCatalog("model_catalog");\nNameIdentifier[] identifiers = catalog.asModelCatalog().listModels(Namespace.of("model_schema"));\n// ...\n'})})}),(0,n.jsx)(i.default,{value:"python",label:"Python",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-python",children:'gravitino_client: GravitinoClient = GravitinoClient(uri="http://localhost:8090", metalake_name="example")\n\ncatalog: Catalog = gravitino_client.load_catalog(name="model_catalog")\nmodel_list = catalog.as_model_catalog().list_models(namespace=Namespace.of("model_schema")))\n'})})})]}),"\n",(0,n.jsx)(a.h2,{id:"modelversion-operations",children:"ModelVersion operations"}),"\n",(0,n.jsx)(a.admonition,{type:"tip",children:(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"Users should create a metalake, a catalog, a schema, and a model before link a model version\nto the model."}),"\n"]})}),"\n",(0,n.jsx)(a.h3,{id:"link-a-modelversion",children:"Link a ModelVersion"}),"\n",(0,n.jsxs)(a.p,{children:["You can link a ModelVersion by sending a ",(0,n.jsx)(a.code,{children:"POST"})," request to the ",(0,n.jsx)(a.code,{children:"/api/metalakes/{metalake_name} /catalogs/{catalog_name}/schemas/{schema_name}/models/{model_name}/versions"})," endpoint or by using\nthe Gravitino Java/Python client. The following is an example of linking a ModelVersion:"]}),"\n",(0,n.jsxs)(o.A,{groupId:"language",queryString:!0,children:[(0,n.jsx)(i.default,{value:"shell",label:"Shell",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-shell",children:'curl -X POST -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json" -d \'{\n  "uri": "path/to/model",\n  "aliases": ["alias1", "alias2"],\n  "comment": "This is version 0",\n  "properties": {\n    "k1": "v1"\n  }\n}\' http://localhost:8090/api/metalakes/example/catalogs/model_catalog/schemas/model_schema/models/example_model/versions\n'})})}),(0,n.jsx)(i.default,{value:"java",label:"Java",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:'// ...\nCatalog catalog = gravitinoClient.loadCatalog("model_catalog");\ncatalog.asModelCatalog().linkModelVersion(\n    NameIdentifier.of("model_schema", "example_model"),\n    "path/to/model",\n    new String[] {"alias1", "alias2"},\n    "This is version 0",\n    ImmutableMap.of("k1", "v1"));\n'})})}),(0,n.jsx)(i.default,{value:"python",label:"Python",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-python",children:'gravitino_client: GravitinoClient = GravitinoClient(uri="http://localhost:8090", metalake_name="example")\n\ncatalog: Catalog = gravitino_client.load_catalog(name="model_catalog")\ncatalog.as_model_catalog().link_model_version(model_ident=NameIdentifier.of("model_schema", "example_model"),\n                                              uri="path/to/model",\n                                              aliases=["alias1", "alias2"],\n                                              comment="This is version 0",\n                                              properties={"k1": "v1"})\n'})})})]}),"\n",(0,n.jsx)(a.p,{children:"The comment and properties of ModelVersion can be different from the model."}),"\n",(0,n.jsx)(a.h3,{id:"get-a-modelversion",children:"Get a ModelVersion"}),"\n",(0,n.jsxs)(a.p,{children:["You can get a ModelVersion by sending a ",(0,n.jsx)(a.code,{children:"GET"})," request to the ",(0,n.jsx)(a.code,{children:"/api/metalakes/{metalake_name} /catalogs/{catalog_name}/schemas/{schema_name}/models/{model_name}/versions/{version_number}"}),"\nendpoint or by using the Gravitino Java/Python client. The following is an example of getting\na ModelVersion:"]}),"\n",(0,n.jsxs)(o.A,{groupId:"language",queryString:!0,children:[(0,n.jsx)(i.default,{value:"shell",label:"Shell",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-shell",children:'curl -X GET -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json" \\\nhttp://localhost:8090/api/metalakes/example/catalogs/model_catalog/schemas/model_schema/models/example_model/versions/0\n'})})}),(0,n.jsx)(i.default,{value:"java",label:"Java",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:'// ...\nCatalog catalog = gravitinoClient.loadCatalog("model_catalog");\ncatalog.asModelCatalog().getModelVersion(NameIdentifier.of("model_schema", "example_model"), 0);\n// ...\n'})})}),(0,n.jsx)(i.default,{value:"python",label:"Python",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-python",children:'gravitino_client: GravitinoClient = GravitinoClient(uri="http://localhost:8090", metalake_name="example")\n\ncatalog: Catalog = gravitino_client.load_catalog(name="model_catalog")\ncatalog.as_model_catalog().get_model_version(model_ident=NameIdentifier.of("model_schema", "example_model"), version=0)\n'})})})]}),"\n",(0,n.jsx)(a.h3,{id:"get-a-modelversion-by-alias",children:"Get a ModelVersion by alias"}),"\n",(0,n.jsxs)(a.p,{children:["You can also get a ModelVersion by sending a ",(0,n.jsx)(a.code,{children:"GET"})," request to the ",(0,n.jsx)(a.code,{children:"/api/metalakes/{metalake_name} /catalogs/{catalog_name}/schemas/{schema_name}/models/{model_name}/aliases/{alias}"})," endpoint or\nby using the Gravitino Java/Python client. The following is an example of getting a ModelVersion\nby alias:"]}),"\n",(0,n.jsxs)(o.A,{groupId:"language",queryString:!0,children:[(0,n.jsx)(i.default,{value:"shell",label:"Shell",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-shell",children:'curl -X GET -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json" \\\nhttp://localhost:8090/api/metalakes/example/catalogs/model_catalog/schemas/model_schema/models/example_model/aliases/alias1\n'})})}),(0,n.jsx)(i.default,{value:"java",label:"Java",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:'// ...\nCatalog catalog = gravitinoClient.loadCatalog("model_catalog");\nModelVersion modelVersion = catalog.asModelCatalog().getModelVersion(NameIdentifier.of("model_schema", "example_model"), "alias1");\n// ...\n'})})}),(0,n.jsx)(i.default,{value:"python",label:"Python",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-python",children:'gravitino_client: GravitinoClient = GravitinoClient(uri="http://localhost:8090", metalake_name="example")\n\ncatalog: Catalog = gravitino_client.load_catalog(name="model_catalog")\nmodel_version: ModelVersion = catalog.as_model_catalog().get_model_version_by_alias(model_ident=NameIdentifier.of("model_schema", "example_model"), alias="alias1")\n'})})})]}),"\n",(0,n.jsx)(a.h3,{id:"delete-a-modelversion",children:"Delete a ModelVersion"}),"\n",(0,n.jsxs)(a.p,{children:["You can delete a ModelVersion by sending a ",(0,n.jsx)(a.code,{children:"DELETE"})," request to the ",(0,n.jsx)(a.code,{children:"/api/metalakes/{metalake_name} /catalogs/{catalog_name}/schemas/{schema_name}/models/{model_name}/versions/{version_number}"}),"\nendpoint or by using the Gravitino Java/Python client. The following is an example of deleting\na ModelVersion:"]}),"\n",(0,n.jsxs)(o.A,{groupId:"language",queryString:!0,children:[(0,n.jsx)(i.default,{value:"shell",label:"Shell",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-shell",children:'curl -X DELETE -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json" \\\nhttp://localhost:8090/api/metalakes/example/catalogs/model_catalog/schemas/model_schema/models/example_model/versions/0\n'})})}),(0,n.jsx)(i.default,{value:"java",label:"Java",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:'// ...\nCatalog catalog = gravitinoClient.loadCatalog("model_catalog");\ncatalog.asModelCatalog().deleteModelVersion(NameIdentifier.of("model_schema", "example_model"), 0);\n// ...\n'})})}),(0,n.jsx)(i.default,{value:"python",label:"Python",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-python",children:'gravitino_client: GravitinoClient = GravitinoClient(uri="http://localhost:8090", metalake_name="example")\n\ncatalog: Catalog = gravitino_client.load_catalog(name="model_catalog")\ncatalog.as_model_catalog().delete_model_version(model_ident=NameIdentifier.of("model_schema", "example_model"), version=0)\n'})})})]}),"\n",(0,n.jsx)(a.h3,{id:"delete-a-modelversion-by-alias",children:"Delete a ModelVersion by alias"}),"\n",(0,n.jsxs)(a.p,{children:["You can also delete a ModelVersion by sending a ",(0,n.jsx)(a.code,{children:"DELETE"})," request to the ",(0,n.jsx)(a.code,{children:"/api/metalakes/ {metalake_name}/catalogs/{catalog_name}/schemas/{schema_name}/models/{model_name}/aliases/{alias}"})," endpoint or\nby using the Gravitino Java/Python client. The following is an example of deleting a ModelVersion\nby alias:"]}),"\n",(0,n.jsxs)(o.A,{groupId:"language",queryString:!0,children:[(0,n.jsx)(i.default,{value:"shell",label:"Shell",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-shell",children:'curl -X DELETE -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json" \\\nhttp://localhost:8090/api/metalakes/example/catalogs/model_catalog/schemas/model_schema/models/example_model/aliases/alias1\n'})})}),(0,n.jsx)(i.default,{value:"java",label:"Java",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:'// ...\nCatalog catalog = gravitinoClient.loadCatalog("model_catalog");\ncatalog.asModelCatalog().deleteModelVersion(NameIdentifier.of("model_schema", "example_model"), "alias1");\n// ...\n'})})}),(0,n.jsx)(i.default,{value:"python",label:"Python",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-python",children:'gravitino_client: GravitinoClient = GravitinoClient(uri="http://localhost:8090", metalake_name="example")\n\ncatalog: Catalog = gravitino_client.load_catalog(name="model_catalog")\ncatalog.as_model_catalog().delete_model_version_by_alias(model_ident=NameIdentifier.of("model_schema", "example_model"), alias="alias1")\n'})})})]}),"\n",(0,n.jsx)(a.h3,{id:"list-modelversions",children:"List ModelVersions"}),"\n",(0,n.jsxs)(a.p,{children:["You can list all the ModelVersions in a model by sending a ",(0,n.jsx)(a.code,{children:"GET"})," request to the ",(0,n.jsx)(a.code,{children:"/api/metalakes/ {metalake_name}/catalogs/{catalog_name}/schemas/{schema_name}/models/{model_name}/versions"})," endpoint\nor by using the Gravitino Java/Python client. The following is an example of listing all the\nModelVersions in a model:"]}),"\n",(0,n.jsxs)(o.A,{groupId:"language",queryString:!0,children:[(0,n.jsx)(i.default,{value:"shell",label:"Shell",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-shell",children:'curl -X GET -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json" \\\nhttp://localhost:8090/api/metalakes/example/catalogs/model_catalog/schemas/model_schema/models/example_model/versions\n'})})}),(0,n.jsx)(i.default,{value:"java",label:"Java",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:'// ...\nCatalog catalog = gravitinoClient.loadCatalog("model_catalog");\nint[] modelVersions = catalog.asModelCatalog().listModelVersions(NameIdentifier.of("model_schema", "example_model"));\n// ...\n'})})}),(0,n.jsx)(i.default,{value:"python",label:"Python",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-python",children:'gravitino_client: GravitinoClient = GravitinoClient(uri="http://localhost:8090", metalake_name="example")\n\ncatalog: Catalog = gravitino_client.load_catalog(name="model_catalog")\nmodel_versions: List[int] = catalog.as_model_catalog().list_model_versions(model_ident=NameIdentifier.of("model_schema", "example_model"))\n'})})})]})]})}function g(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},48521:(e,a,l)=>{l.d(a,{A:()=>g});var n=l(79474),t=l(13526),o=l(34560),i=l(69671),s=l(49573);const r={tabList:"tabList_B_Yg",tabItem:"tabItem_UqCM"};var d=l(13274);function c(e){let{className:a,block:l,selectedValue:n,selectValue:i,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:m}=(0,o.a_)(),h=e=>{const a=e.currentTarget,l=c.indexOf(a),t=s[l].value;t!==n&&(m(a),i(t))},g=e=>{let a=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const l=c.indexOf(e.currentTarget)+1;a=c[l]??c[0];break}case"ArrowLeft":{const l=c.indexOf(e.currentTarget)-1;a=c[l]??c[c.length-1];break}}a?.focus()};return(0,d.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":l},a),children:s.map((e=>{let{value:a,label:l,attributes:o}=e;return(0,d.jsx)("li",{role:"tab",tabIndex:n===a?0:-1,"aria-selected":n===a,ref:e=>c.push(e),onKeyDown:g,onClick:h,...o,className:(0,t.A)("tabs__item",r.tabItem,o?.className,{"tabs__item--active":n===a}),children:l??a},a)}))})}function m(e){let{lazy:a,children:l,selectedValue:t}=e;const o=(Array.isArray(l)?l:[l]).filter(Boolean);if(a){const e=o.find((e=>e.props.value===t));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,d.jsx)("div",{className:"margin-top--md",children:o.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==t})))})}function h(e){const a=(0,i.u)(e);return(0,d.jsxs)("div",{className:(0,t.A)("tabs-container",r.tabList),children:[(0,d.jsx)(c,{...a,...e}),(0,d.jsx)(m,{...a,...e})]})}function g(e){const a=(0,s.default)();return(0,d.jsx)(h,{...e,children:(0,i.v)(e.children)},String(a))}},69671:(e,a,l)=>{l.d(a,{u:()=>g,v:()=>d});var n=l(79474),t=l(20241),o=l(33255),i=l(25869),s=l(55522),r=l(38118);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function c(e){const{values:a,children:l}=e;return(0,n.useMemo)((()=>{const e=a??function(e){return d(e).map((e=>{let{props:{value:a,label:l,attributes:n,default:t}}=e;return{value:a,label:l,attributes:n,default:t}}))}(l);return function(e){const a=(0,s.X)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,l])}function m(e){let{value:a,tabValues:l}=e;return l.some((e=>e.value===a))}function h(e){let{queryString:a=!1,groupId:l}=e;const o=(0,t.W6)(),s=function(e){let{queryString:a=!1,groupId:l}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!l)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return l??null}({queryString:a,groupId:l});return[(0,i.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const a=new URLSearchParams(o.location.search);a.set(s,e),o.replace({...o.location,search:a.toString()})}),[s,o])]}function g(e){const{defaultValue:a,queryString:l=!1,groupId:t}=e,i=c(e),[s,d]=(0,n.useState)((()=>function(e){let{defaultValue:a,tabValues:l}=e;if(0===l.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!m({value:a,tabValues:l}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${l.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=l.find((e=>e.default))??l[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:i}))),[g,u]=h({queryString:l,groupId:t}),[p,v]=function(e){let{groupId:a}=e;const l=function(e){return e?`docusaurus.tab.${e}`:null}(a),[t,o]=(0,r.Dv)(l);return[t,(0,n.useCallback)((e=>{l&&o.set(e)}),[l,o])]}({groupId:t}),x=(()=>{const e=g??p;return m({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{x&&d(x)}),[x]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);d(e),u(e),v(e)}),[u,v,i]),tabValues:i}}}}]);