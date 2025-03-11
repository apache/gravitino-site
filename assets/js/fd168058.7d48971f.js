"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[41299],{17014:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>c});var t=s(79474);const a={},i=t.createContext(a);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(i.Provider,{value:n},e.children)}},35662:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var t=s(13274),a=s(17014);const i={title:"Hadoop catalog with OSS",slug:"/hadoop-catalog-with-oss",date:new Date("2025-01-03T00:00:00.000Z"),keyword:"Hadoop catalog OSS",license:"This software is licensed under the Apache License version 2."},o=void 0,c={id:"hadoop-catalog-with-oss",title:"Hadoop catalog with OSS",description:"This document explains how to configure a Hadoop catalog with Aliyun OSS (Object Storage Service) in Gravitino.",source:"@site/versioned_docs/version-0.8.0-incubating/hadoop-catalog-with-oss.md",sourceDirName:".",slug:"/hadoop-catalog-with-oss",permalink:"/docs/0.8.0-incubating/hadoop-catalog-with-oss",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/hadoop-catalog-with-oss.md",tags:[],version:"0.8.0-incubating",frontMatter:{title:"Hadoop catalog with OSS",slug:"/hadoop-catalog-with-oss",date:"2025-01-03T00:00:00.000Z",keyword:"Hadoop catalog OSS",license:"This software is licensed under the Apache License version 2."},sidebar:"docs",previous:{title:"Hadoop catalog with gcs",permalink:"/docs/0.8.0-incubating/hadoop-catalog-with-gcs"},next:{title:"Hadoop catalog with adls",permalink:"/docs/0.8.0-incubating/hadoop-catalog-with-adls"}},r={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configurations for creating a Hadoop catalog with OSS",id:"configurations-for-creating-a-hadoop-catalog-with-oss",level:2},{value:"Configuration for an OSS Hadoop catalog",id:"configuration-for-an-oss-hadoop-catalog",level:3},{value:"Configurations for a schema",id:"configurations-for-a-schema",level:3},{value:"Configurations for a fileset",id:"configurations-for-a-fileset",level:3},{value:"Example of creating Hadoop catalog/schema/fileset with OSS",id:"example-of-creating-hadoop-catalogschemafileset-with-oss",level:2},{value:"Step1: Create a Hadoop catalog with OSS",id:"step1-create-a-hadoop-catalog-with-oss",level:3},{value:"Step 2: Create a Schema",id:"step-2-create-a-schema",level:3},{value:"Step3: Create a fileset",id:"step3-create-a-fileset",level:3},{value:"Accessing a fileset with OSS",id:"accessing-a-fileset-with-oss",level:2},{value:"Using the GVFS Java client to access the fileset",id:"using-the-gvfs-java-client-to-access-the-fileset",level:3},{value:"Using Spark to access the fileset",id:"using-spark-to-access-the-fileset",level:3},{value:"Accessing a fileset using the Hadoop fs command",id:"accessing-a-fileset-using-the-hadoop-fs-command",level:3},{value:"Using the GVFS Python client to access a fileset",id:"using-the-gvfs-python-client-to-access-a-fileset",level:3},{value:"Using fileset with pandas",id:"using-fileset-with-pandas",level:3},{value:"Fileset with credential vending",id:"fileset-with-credential-vending",level:2},{value:"How to create an OSS Hadoop catalog with credential vending",id:"how-to-create-an-oss-hadoop-catalog-with-credential-vending",level:3},{value:"How to access OSS fileset with credential vending",id:"how-to-access-oss-fileset-with-credential-vending",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components},{TabItem:s,Tabs:i}=n;return s||p("TabItem",!0),i||p("Tabs",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"This document explains how to configure a Hadoop catalog with Aliyun OSS (Object Storage Service) in Gravitino."}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(n.p,{children:"To set up a Hadoop catalog with OSS, follow these steps:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Download the ",(0,t.jsx)(n.a,{href:"https://mvnrepository.com/artifact/org.apache.gravitino/gravitino-aliyun-bundle",children:(0,t.jsx)(n.code,{children:"gravitino-aliyun-bundle-${gravitino-version}.jar"})})," file."]}),"\n",(0,t.jsxs)(n.li,{children:["Place the downloaded file into the Gravitino Hadoop catalog classpath at ",(0,t.jsx)(n.code,{children:"${GRAVITINO_HOME}/catalogs/hadoop/libs/"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Start the Gravitino server by running the following command:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ ${GRAVITINO_HOME}/bin/gravitino-server.sh start\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Once the server is up and running, you can proceed to configure the Hadoop catalog with OSS. In the rest of this document we will use ",(0,t.jsx)(n.code,{children:"http://localhost:8090"})," as the Gravitino server URL, please replace it with your actual server URL."]}),"\n",(0,t.jsx)(n.h2,{id:"configurations-for-creating-a-hadoop-catalog-with-oss",children:"Configurations for creating a Hadoop catalog with OSS"}),"\n",(0,t.jsx)(n.h3,{id:"configuration-for-an-oss-hadoop-catalog",children:"Configuration for an OSS Hadoop catalog"}),"\n",(0,t.jsxs)(n.p,{children:["In addition to the basic configurations mentioned in ",(0,t.jsx)(n.a,{href:"/docs/0.8.0-incubating/hadoop-catalog#catalog-properties",children:"Hadoop-catalog-catalog-configuration"}),", the following properties are required to configure a Hadoop catalog with OSS:"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Configuration item"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Default value"}),(0,t.jsx)(n.th,{children:"Required"}),(0,t.jsx)(n.th,{children:"Since version"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"filesystem-providers"})}),(0,t.jsxs)(n.td,{children:["The file system providers to add. Set it to ",(0,t.jsx)(n.code,{children:"oss"})," if it's a OSS fileset, or a comma separated string that contains ",(0,t.jsx)(n.code,{children:"oss"})," like ",(0,t.jsx)(n.code,{children:"oss,gs,s3"})," to support multiple kinds of fileset including ",(0,t.jsx)(n.code,{children:"oss"}),"."]}),(0,t.jsx)(n.td,{children:"(none)"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"0.7.0-incubating"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"default-filesystem-provider"})}),(0,t.jsxs)(n.td,{children:["The name default filesystem providers of this Hadoop catalog if users do not specify the scheme in the URI. Default value is ",(0,t.jsx)(n.code,{children:"builtin-local"}),", for OSS, if we set this value, we can omit the prefix 'oss://' in the location."]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"builtin-local"})}),(0,t.jsx)(n.td,{children:"No"}),(0,t.jsx)(n.td,{children:"0.7.0-incubating"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"oss-endpoint"})}),(0,t.jsx)(n.td,{children:"The endpoint of the Aliyun OSS."}),(0,t.jsx)(n.td,{children:"(none)"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"0.7.0-incubating"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"oss-access-key-id"})}),(0,t.jsx)(n.td,{children:"The access key of the Aliyun OSS."}),(0,t.jsx)(n.td,{children:"(none)"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"0.7.0-incubating"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"oss-secret-access-key"})}),(0,t.jsx)(n.td,{children:"The secret key of the Aliyun OSS."}),(0,t.jsx)(n.td,{children:"(none)"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"0.7.0-incubating"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"credential-providers"})}),(0,t.jsxs)(n.td,{children:["The credential provider types, separated by comma, possible value can be ",(0,t.jsx)(n.code,{children:"oss-token"}),", ",(0,t.jsx)(n.code,{children:"oss-secret-key"}),". As the default authentication type is using AKSK as the above, this configuration can enable credential vending provided by Gravitino server and client will no longer need to provide authentication information like AKSK to access OSS by GVFS. Once it's set, more configuration items are needed to make it works, please see ",(0,t.jsx)(n.a,{href:"/docs/0.8.0-incubating/security/credential-vending#oss-credentials",children:"oss-credential-vending"})]}),(0,t.jsx)(n.td,{children:"(none)"}),(0,t.jsx)(n.td,{children:"No"}),(0,t.jsx)(n.td,{children:"0.8.0-incubating"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"configurations-for-a-schema",children:"Configurations for a schema"}),"\n",(0,t.jsxs)(n.p,{children:["To create a schema, refer to ",(0,t.jsx)(n.a,{href:"/docs/0.8.0-incubating/hadoop-catalog#schema-properties",children:"Schema configurations"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"configurations-for-a-fileset",children:"Configurations for a fileset"}),"\n",(0,t.jsxs)(n.p,{children:["For instructions on how to create a fileset, refer to ",(0,t.jsx)(n.a,{href:"/docs/0.8.0-incubating/hadoop-catalog#fileset-properties",children:"Fileset configurations"})," for more details."]}),"\n",(0,t.jsx)(n.h2,{id:"example-of-creating-hadoop-catalogschemafileset-with-oss",children:"Example of creating Hadoop catalog/schema/fileset with OSS"}),"\n",(0,t.jsx)(n.p,{children:"This section will show you how to use the Hadoop catalog with OSS in Gravitino, including detailed examples."}),"\n",(0,t.jsx)(n.h3,{id:"step1-create-a-hadoop-catalog-with-oss",children:"Step1: Create a Hadoop catalog with OSS"}),"\n",(0,t.jsx)(n.p,{children:"First, you need to create a Hadoop catalog for OSS. The following examples demonstrate how to create a Hadoop catalog with OSS:"}),"\n",(0,t.jsxs)(i,{groupId:"language",queryString:!0,children:[(0,t.jsx)(s,{value:"shell",label:"Shell",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'curl -X POST -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json" -d \'{\n  "name": "test_catalog",\n  "type": "FILESET",\n  "comment": "This is a OSS fileset catalog",\n  "provider": "hadoop",\n  "properties": {\n    "location": "oss://bucket/root",\n    "oss-access-key-id": "access_key",\n    "oss-secret-access-key": "secret_key",\n    "oss-endpoint": "http://oss-cn-hangzhou.aliyuncs.com",\n    "filesystem-providers": "oss"\n  }\n}\' http://localhost:8090/api/metalakes/metalake/catalogs\n'})})}),(0,t.jsx)(s,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'GravitinoClient gravitinoClient = GravitinoClient\n    .builder("http://localhost:8090")\n    .withMetalake("metalake")\n    .build();\n\nMap<String, String> ossProperties = ImmutableMap.<String, String>builder()\n    .put("location", "oss://bucket/root")\n    .put("oss-access-key-id", "access_key")\n    .put("oss-secret-access-key", "secret_key")\n    .put("oss-endpoint", "http://oss-cn-hangzhou.aliyuncs.com")\n    .put("filesystem-providers", "oss")\n    .build();\n\nCatalog ossCatalog = gravitinoClient.createCatalog("test_catalog",\n    Type.FILESET,\n    "hadoop", // provider, Gravitino only supports "hadoop" for now.\n    "This is a OSS fileset catalog",\n    ossProperties);\n// ...\n\n'})})}),(0,t.jsx)(s,{value:"python",label:"Python",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'gravitino_client: GravitinoClient = GravitinoClient(uri="http://localhost:8090", metalake_name="metalake")\noss_properties = {\n    "location": "oss://bucket/root",\n    "oss-access-key-id": "access_key"\n    "oss-secret-access-key": "secret_key",\n    "oss-endpoint": "ossProperties",\n    "filesystem-providers": "oss"\n}\n\noss_catalog = gravitino_client.create_catalog(name="test_catalog",\n                                              type=Catalog.Type.FILESET,\n                                              provider="hadoop",\n                                              comment="This is a OSS fileset catalog",\n                                              properties=oss_properties)\n'})})})]}),"\n",(0,t.jsx)(n.h3,{id:"step-2-create-a-schema",children:"Step 2: Create a Schema"}),"\n",(0,t.jsx)(n.p,{children:"Once the Hadoop catalog with OSS is created, you can create a schema inside that catalog. Below are examples of how to do this:"}),"\n",(0,t.jsxs)(i,{groupId:"language",queryString:!0,children:[(0,t.jsx)(s,{value:"shell",label:"Shell",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'curl -X POST -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json" -d \'{\n  "name": "test_schema",\n  "comment": "This is a OSS schema",\n  "properties": {\n    "location": "oss://bucket/root/schema"\n  }\n}\' http://localhost:8090/api/metalakes/metalake/catalogs/test_catalog/schemas\n'})})}),(0,t.jsx)(s,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'Catalog catalog = gravitinoClient.loadCatalog("test_catalog");\n\nSupportsSchemas supportsSchemas = catalog.asSchemas();\n\nMap<String, String> schemaProperties = ImmutableMap.<String, String>builder()\n    .put("location", "oss://bucket/root/schema")\n    .build();\nSchema schema = supportsSchemas.createSchema("test_schema",\n    "This is a OSS schema",\n    schemaProperties\n);\n// ...\n'})})}),(0,t.jsx)(s,{value:"python",label:"Python",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'gravitino_client: GravitinoClient = GravitinoClient(uri="http://localhost:8090", metalake_name="metalake")\ncatalog: Catalog = gravitino_client.load_catalog(name="test_catalog")\ncatalog.as_schemas().create_schema(name="test_schema",\n                                   comment="This is a OSS schema",\n                                   properties={"location": "oss://bucket/root/schema"})\n'})})})]}),"\n",(0,t.jsx)(n.h3,{id:"step3-create-a-fileset",children:"Step3: Create a fileset"}),"\n",(0,t.jsx)(n.p,{children:"Now that the schema is created, you can create a fileset inside it. Here\u2019s how:"}),"\n",(0,t.jsxs)(i,{groupId:"language",queryString:!0,children:[(0,t.jsx)(s,{value:"shell",label:"Shell",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'curl -X POST -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json" -d \'{\n  "name": "example_fileset",\n  "comment": "This is an example fileset",\n  "type": "MANAGED",\n  "storageLocation": "oss://bucket/root/schema/example_fileset",\n  "properties": {\n    "k1": "v1"\n  }\n}\' http://localhost:8090/api/metalakes/metalake/catalogs/test_catalog/schemas/test_schema/filesets\n'})})}),(0,t.jsx)(s,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'GravitinoClient gravitinoClient = GravitinoClient\n    .builder("http://localhost:8090")\n    .withMetalake("metalake")\n    .build();\n\nCatalog catalog = gravitinoClient.loadCatalog("test_catalog");\nFilesetCatalog filesetCatalog = catalog.asFilesetCatalog();\n\nMap<String, String> propertiesMap = ImmutableMap.<String, String>builder()\n        .put("k1", "v1")\n        .build();\n\nfilesetCatalog.createFileset(\n    NameIdentifier.of("test_schema", "example_fileset"),\n    "This is an example fileset",\n    Fileset.Type.MANAGED,\n    "oss://bucket/root/schema/example_fileset",\n    propertiesMap,\n);\n'})})}),(0,t.jsx)(s,{value:"python",label:"Python",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'gravitino_client: GravitinoClient = GravitinoClient(uri="http://localhost:8090", metalake_name="metalake")\n\ncatalog: Catalog = gravitino_client.load_catalog(name="test_catalog")\ncatalog.as_fileset_catalog().create_fileset(ident=NameIdentifier.of("test_schema", "example_fileset"),\n                                            type=Fileset.Type.MANAGED,\n                                            comment="This is an example fileset",\n                                            storage_location="oss://bucket/root/schema/example_fileset",\n                                            properties={"k1": "v1"})\n'})})})]}),"\n",(0,t.jsx)(n.h2,{id:"accessing-a-fileset-with-oss",children:"Accessing a fileset with OSS"}),"\n",(0,t.jsx)(n.h3,{id:"using-the-gvfs-java-client-to-access-the-fileset",children:"Using the GVFS Java client to access the fileset"}),"\n",(0,t.jsxs)(n.p,{children:["To access fileset with OSS using the GVFS Java client, based on the ",(0,t.jsx)(n.a,{href:"/docs/0.8.0-incubating/how-to-use-gvfs#configuration-1",children:"basic GVFS configurations"}),", you need to add the following configurations:"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Configuration item"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Default value"}),(0,t.jsx)(n.th,{children:"Required"}),(0,t.jsx)(n.th,{children:"Since version"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"oss-endpoint"})}),(0,t.jsx)(n.td,{children:"The endpoint of the Aliyun OSS."}),(0,t.jsx)(n.td,{children:"(none)"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"0.7.0-incubating"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"oss-access-key-id"})}),(0,t.jsx)(n.td,{children:"The access key of the Aliyun OSS."}),(0,t.jsx)(n.td,{children:"(none)"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"0.7.0-incubating"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"oss-secret-access-key"})}),(0,t.jsx)(n.td,{children:"The secret key of the Aliyun OSS."}),(0,t.jsx)(n.td,{children:"(none)"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"0.7.0-incubating"})]})]})]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["If the catalog has enabled ",(0,t.jsx)(n.a,{href:"/docs/0.8.0-incubating/security/credential-vending",children:"credential vending"}),", the properties above can be omitted. More details can be found in ",(0,t.jsx)(n.a,{href:"#fileset-with-credential-vending",children:"Fileset with credential vending"}),"."]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'Configuration conf = new Configuration();\nconf.set("fs.AbstractFileSystem.gvfs.impl", "org.apache.gravitino.filesystem.hadoop.Gvfs");\nconf.set("fs.gvfs.impl", "org.apache.gravitino.filesystem.hadoop.GravitinoVirtualFileSystem");\nconf.set("fs.gravitino.server.uri", "http://localhost:8090");\nconf.set("fs.gravitino.client.metalake", "test_metalake");\nconf.set("oss-endpoint", "http://localhost:8090");\nconf.set("oss-access-key-id", "minio");\nconf.set("oss-secret-access-key", "minio123"); \nPath filesetPath = new Path("gvfs://fileset/test_catalog/test_schema/test_fileset/new_dir");\nFileSystem fs = filesetPath.getFileSystem(conf);\nfs.mkdirs(filesetPath);\n...\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Similar to Spark configurations, you need to add OSS (bundle) jars to the classpath according to your environment.\nIf your wants to custom your hadoop version or there is already a hadoop version in your project, you can add the following dependencies to your ",(0,t.jsx)(n.code,{children:"pom.xml"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:"  <dependency>\n    <groupId>org.apache.hadoop</groupId>\n    <artifactId>hadoop-common</artifactId>\n    <version>${HADOOP_VERSION}</version>\n  </dependency>\n\n  <dependency>\n    <groupId>org.apache.hadoop</groupId>\n    <artifactId>hadoop-aliyun</artifactId>\n    <version>${HADOOP_VERSION}</version>\n  </dependency>\n\n  <dependency>\n    <groupId>org.apache.gravitino</groupId>\n    <artifactId>filesystem-hadoop3-runtime</artifactId>\n    <version>${GRAVITINO_VERSION}</version>\n  </dependency>\n\n  <dependency>\n    <groupId>org.apache.gravitino</groupId>\n    <artifactId>gravitino-aliyun</artifactId>\n    <version>${GRAVITINO_VERSION}</version>\n  </dependency>\n"})}),"\n",(0,t.jsx)(n.p,{children:"Or use the bundle jar with Hadoop environment if there is no Hadoop environment:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:"  <dependency>\n    <groupId>org.apache.gravitino</groupId>\n    <artifactId>gravitino-aliyun-bundle</artifactId>\n    <version>${GRAVITINO_VERSION}</version>\n  </dependency>\n\n  <dependency>\n    <groupId>org.apache.gravitino</groupId>\n    <artifactId>filesystem-hadoop3-runtime</artifactId>\n    <version>${GRAVITINO_VERSION}</version>\n  </dependency>\n"})}),"\n",(0,t.jsx)(n.h3,{id:"using-spark-to-access-the-fileset",children:"Using Spark to access the fileset"}),"\n",(0,t.jsxs)(n.p,{children:["The following code snippet shows how to use ",(0,t.jsx)(n.strong,{children:"PySpark 3.1.3 with Hadoop environment(Hadoop 3.2.0)"})," to access the fileset:"]}),"\n",(0,t.jsx)(n.p,{children:"Before running the following code, you need to install required packages:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pip install pyspark==3.1.3\npip install apache-gravitino==${GRAVITINO_VERSION}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Then you can run the following code:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'from pyspark.sql import SparkSession\nimport os\n\ngravitino_url = "http://localhost:8090"\nmetalake_name = "test"\n\ncatalog_name = "your_oss_catalog"\nschema_name = "your_oss_schema"\nfileset_name = "your_oss_fileset"\n\nos.environ["PYSPARK_SUBMIT_ARGS"] = "--jars /path/to/gravitino-aliyun-{gravitino-version}.jar,/path/to/gravitino-filesystem-hadoop3-runtime-{gravitino-version}.jar,/path/to/aliyun-sdk-oss-2.8.3.jar,/path/to/hadoop-aliyun-3.2.0.jar,/path/to/jdom-1.1.jar --master local[1] pyspark-shell"\nspark = SparkSession.builder\n    .appName("oss_fileset_test")\n    .config("spark.hadoop.fs.AbstractFileSystem.gvfs.impl", "org.apache.gravitino.filesystem.hadoop.Gvfs")\n    .config("spark.hadoop.fs.gvfs.impl", "org.apache.gravitino.filesystem.hadoop.GravitinoVirtualFileSystem")\n    .config("spark.hadoop.fs.gravitino.server.uri", "${_URL}")\n    .config("spark.hadoop.fs.gravitino.client.metalake", "test")\n    .config("spark.hadoop.oss-access-key-id", os.environ["OSS_ACCESS_KEY_ID"])\n    .config("spark.hadoop.oss-secret-access-key", os.environ["OSS_SECRET_ACCESS_KEY"])\n    .config("spark.hadoop.oss-endpoint", "http://oss-cn-hangzhou.aliyuncs.com")\n    .config("spark.driver.memory", "2g")\n    .config("spark.driver.port", "2048")\n    .getOrCreate()\n\ndata = [("Alice", 25), ("Bob", 30), ("Cathy", 45)]\ncolumns = ["Name", "Age"]\nspark_df = spark.createDataFrame(data, schema=columns)\ngvfs_path = f"gvfs://fileset/{catalog_name}/{schema_name}/{fileset_name}/people"\n\nspark_df.coalesce(1).write\n    .mode("overwrite")\n    .option("header", "true")\n    .csv(gvfs_path)\n'})}),"\n",(0,t.jsxs)(n.p,{children:["If your Spark ",(0,t.jsx)(n.strong,{children:"without Hadoop environment"}),", you can use the following code snippet to access the fileset:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'## Replace the following code snippet with the above code snippet with the same environment variables\n\nos.environ["PYSPARK_SUBMIT_ARGS"] = "--jars /path/to/gravitino-aliyun-bundle-{gravitino-version}.jar,/path/to/gravitino-filesystem-hadoop3-runtime-{gravitino-version}.jar, --master local[1] pyspark-shell"\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://mvnrepository.com/artifact/org.apache.gravitino/gravitino-aliyun-bundle",children:(0,t.jsx)(n.code,{children:"gravitino-aliyun-bundle-${gravitino-version}.jar"})})," is the Gravitino Aliyun jar with Hadoop environment(3.3.1) and ",(0,t.jsx)(n.code,{children:"hadoop-oss"})," jar."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://mvnrepository.com/artifact/org.apache.gravitino/gravitino-aliyun",children:(0,t.jsx)(n.code,{children:"gravitino-aliyun-${gravitino-version}.jar"})})," is a condensed version of the Gravitino Aliyun bundle jar without Hadoop environment and ",(0,t.jsx)(n.code,{children:"hadoop-aliyun"})," jar.\n-",(0,t.jsx)(n.code,{children:"hadoop-aliyun-3.2.0.jar"})," and ",(0,t.jsx)(n.code,{children:"aliyun-sdk-oss-2.8.3.jar"})," can be found in the Hadoop distribution in the ",(0,t.jsx)(n.code,{children:"${HADOOP_HOME}/share/hadoop/tools/lib"})," directory."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Please choose the correct jar according to your environment."}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"In some Spark versions, a Hadoop environment is needed by the driver, adding the bundle jars with '--jars' may not work. If this is the case, you should add the jars to the spark CLASSPATH directly."})}),"\n",(0,t.jsx)(n.h3,{id:"accessing-a-fileset-using-the-hadoop-fs-command",children:"Accessing a fileset using the Hadoop fs command"}),"\n",(0,t.jsxs)(n.p,{children:["The following are examples of how to use the ",(0,t.jsx)(n.code,{children:"hadoop fs"})," command to access the fileset in Hadoop 3.1.3."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Adding the following contents to the ",(0,t.jsx)(n.code,{children:"${HADOOP_HOME}/etc/hadoop/core-site.xml"})," file:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:"  <property>\n    <name>fs.AbstractFileSystem.gvfs.impl</name>\n    <value>org.apache.gravitino.filesystem.hadoop.Gvfs</value>\n  </property>\n\n  <property>\n    <name>fs.gvfs.impl</name>\n    <value>org.apache.gravitino.filesystem.hadoop.GravitinoVirtualFileSystem</value>\n  </property>\n\n  <property>\n    <name>fs.gravitino.server.uri</name>\n    <value>http://localhost:8090</value>\n  </property>\n\n  <property>\n    <name>fs.gravitino.client.metalake</name>\n    <value>test</value>\n  </property>\n\n  <property>\n    <name>oss-endpoint</name>\n    <value>http://oss-cn-hangzhou.aliyuncs.com</value>\n  </property>\n\n  <property>\n    <name>oss-access-key-id</name>\n    <value>access-key</value>\n  </property>\n  \n  <property>\n  <name>oss-secret-access-key</name>\n    <value>secret-key</value>\n  </property>\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Add the necessary jars to the Hadoop classpath."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["For OSS, you need to add ",(0,t.jsx)(n.code,{children:"gravitino-filesystem-hadoop3-runtime-${gravitino-version}.jar"}),", ",(0,t.jsx)(n.code,{children:"gravitino-aliyun-${gravitino-version}.jar"})," and ",(0,t.jsx)(n.code,{children:"hadoop-aliyun-${hadoop-version}.jar"})," located at ",(0,t.jsx)(n.code,{children:"${HADOOP_HOME}/share/hadoop/tools/lib/"})," to Hadoop classpath."]}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"Run the following command to access the fileset:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"./${HADOOP_HOME}/bin/hadoop dfs -ls gvfs://fileset/oss_catalog/oss_schema/oss_fileset\n./${HADOOP_HOME}/bin/hadoop dfs -put /path/to/local/file gvfs://fileset/oss_catalog/schema/oss_fileset\n"})}),"\n",(0,t.jsx)(n.h3,{id:"using-the-gvfs-python-client-to-access-a-fileset",children:"Using the GVFS Python client to access a fileset"}),"\n",(0,t.jsxs)(n.p,{children:["In order to access fileset with OSS using the GVFS Python client, apart from ",(0,t.jsx)(n.a,{href:"/docs/0.8.0-incubating/how-to-use-gvfs#configuration-1",children:"basic GVFS configurations"}),", you need to add the following configurations:"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Configuration item"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Default value"}),(0,t.jsx)(n.th,{children:"Required"}),(0,t.jsx)(n.th,{children:"Since version"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"oss_endpoint"})}),(0,t.jsx)(n.td,{children:"The endpoint of the Aliyun OSS."}),(0,t.jsx)(n.td,{children:"(none)"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"0.7.0-incubating"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"oss_access_key_id"})}),(0,t.jsx)(n.td,{children:"The access key of the Aliyun OSS."}),(0,t.jsx)(n.td,{children:"(none)"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"0.7.0-incubating"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"oss_secret_access_key"})}),(0,t.jsx)(n.td,{children:"The secret key of the Aliyun OSS."}),(0,t.jsx)(n.td,{children:"(none)"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"0.7.0-incubating"})]})]})]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["If the catalog has enabled ",(0,t.jsx)(n.a,{href:"/docs/0.8.0-incubating/security/credential-vending",children:"credential vending"}),", the properties above can be omitted."]})}),"\n",(0,t.jsxs)(n.p,{children:["Please install the ",(0,t.jsx)(n.code,{children:"gravitino"})," package before running the following code:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pip install apache-gravitino==${GRAVITINO_VERSION}\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'from gravitino import gvfs\noptions = {\n    "cache_size": 20,\n    "cache_expired_time": 3600,\n    "auth_type": "simple",\n    "oss_endpoint": "http://localhost:8090",\n    "oss_access_key_id": "minio",\n    "oss_secret_access_key": "minio123"\n}\nfs = gvfs.GravitinoVirtualFileSystem(server_uri="http://localhost:8090", metalake_name="test_metalake", options=options)\n\nfs.ls("gvfs://fileset/{catalog_name}/{schema_name}/{fileset_name}/")\n'})}),"\n",(0,t.jsx)(n.h3,{id:"using-fileset-with-pandas",children:"Using fileset with pandas"}),"\n",(0,t.jsx)(n.p,{children:"The following are examples of how to use the pandas library to access the OSS fileset"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import pandas as pd\n\nstorage_options = {\n    "server_uri": "http://localhost:8090", \n    "metalake_name": "test",\n    "options": {\n        "oss_access_key_id": "access_key",\n        "oss_secret_access_key": "secret_key",\n        "oss_endpoint": "http://oss-cn-hangzhou.aliyuncs.com"\n    }\n}\nds = pd.read_csv(f"gvfs://fileset/${catalog_name}/${schema_name}/${fileset_name}/people/part-00000-51d366e2-d5eb-448d-9109-32a96c8a14dc-c000.csv",\n                 storage_options=storage_options)\nds.head()\n'})}),"\n",(0,t.jsxs)(n.p,{children:["For other use cases, please refer to the ",(0,t.jsx)(n.a,{href:"/docs/0.8.0-incubating/how-to-use-gvfs",children:"Gravitino Virtual File System"})," document."]}),"\n",(0,t.jsx)(n.h2,{id:"fileset-with-credential-vending",children:"Fileset with credential vending"}),"\n",(0,t.jsxs)(n.p,{children:["Since 0.8.0-incubating, Gravitino supports credential vending for OSS fileset. If the catalog has been ",(0,t.jsx)(n.a,{href:"/docs/0.8.0-incubating/security/credential-vending",children:"configured with credential"}),", you can access OSS fileset without providing authentication information like ",(0,t.jsx)(n.code,{children:"oss-access-key-id"})," and ",(0,t.jsx)(n.code,{children:"oss-secret-access-key"})," in the properties."]}),"\n",(0,t.jsx)(n.h3,{id:"how-to-create-an-oss-hadoop-catalog-with-credential-vending",children:"How to create an OSS Hadoop catalog with credential vending"}),"\n",(0,t.jsxs)(n.p,{children:["Apart from configuration method in ",(0,t.jsx)(n.a,{href:"#configuration-for-an-oss-hadoop-catalog",children:"create-oss-hadoop-catalog"}),", properties needed by ",(0,t.jsx)(n.a,{href:"/docs/0.8.0-incubating/security/credential-vending#oss-credentials",children:"oss-credential"})," should also be set to enable credential vending for OSS fileset. Take ",(0,t.jsx)(n.code,{children:"oss-token"})," credential provider for example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'curl -X POST -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json" -d \'{\n  "name": "oss-catalog-with-token",\n  "type": "FILESET",\n  "comment": "This is a OSS fileset catalog",\n  "provider": "hadoop",\n  "properties": {\n    "location": "oss://bucket/root",\n    "oss-access-key-id": "access_key",\n    "oss-secret-access-key": "secret_key",\n    "oss-endpoint": "http://oss-cn-hangzhou.aliyuncs.com",\n    "filesystem-providers": "oss",\n    "credential-providers": "oss-token",\n    "oss-region":"oss-cn-hangzhou",\n    "oss-role-arn":"The ARN of the role to access the OSS data"\n  }\n}\' http://localhost:8090/api/metalakes/metalake/catalogs\n'})}),"\n",(0,t.jsx)(n.h3,{id:"how-to-access-oss-fileset-with-credential-vending",children:"How to access OSS fileset with credential vending"}),"\n",(0,t.jsx)(n.p,{children:"If the catalog has been configured with credential, you can access OSS fileset without providing authentication information via GVFS Java/Python client and Spark. Let's see how to access OSS fileset with credential:"}),"\n",(0,t.jsx)(n.p,{children:"GVFS Java client:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'Configuration conf = new Configuration();\nconf.set("fs.AbstractFileSystem.gvfs.impl", "org.apache.gravitino.filesystem.hadoop.Gvfs");\nconf.set("fs.gvfs.impl", "org.apache.gravitino.filesystem.hadoop.GravitinoVirtualFileSystem");\nconf.set("fs.gravitino.server.uri", "http://localhost:8090");\nconf.set("fs.gravitino.client.metalake", "test_metalake");\n// No need to set oss-access-key-id and oss-secret-access-key\nPath filesetPath = new Path("gvfs://fileset/oss_test_catalog/test_schema/test_fileset/new_dir");\nFileSystem fs = filesetPath.getFileSystem(conf);\nfs.mkdirs(filesetPath);\n...\n'})}),"\n",(0,t.jsx)(n.p,{children:"Spark:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'spark = SparkSession.builder\n    .appName("oss_fileset_test")\n    .config("spark.hadoop.fs.AbstractFileSystem.gvfs.impl", "org.apache.gravitino.filesystem.hadoop.Gvfs")\n    .config("spark.hadoop.fs.gvfs.impl", "org.apache.gravitino.filesystem.hadoop.GravitinoVirtualFileSystem")\n    .config("spark.hadoop.fs.gravitino.server.uri", "http://localhost:8090")\n    .config("spark.hadoop.fs.gravitino.client.metalake", "test")\n    # No need to set oss-access-key-id and oss-secret-access-key\n    .config("spark.driver.memory", "2g")\n    .config("spark.driver.port", "2048")\n    .getOrCreate()\n'})}),"\n",(0,t.jsx)(n.p,{children:"Python client and Hadoop command are similar to the above examples."})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}function p(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);