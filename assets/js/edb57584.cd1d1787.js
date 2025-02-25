"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[19319],{17014:(e,a,n)=>{n.d(a,{R:()=>s,x:()=>r});var t=n(79474);const o={},i=t.createContext(o);function s(e){const a=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(i.Provider,{value:a},e.children)}},73591:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var t=n(13274),o=n(17014);const i={title:"Hadoop catalog with ADLS",slug:"/hadoop-catalog-with-adls",date:new Date("2025-01-03T00:00:00.000Z"),keyword:"Hadoop catalog ADLS",license:"This software is licensed under the Apache License version 2."},s=void 0,r={id:"hadoop-catalog-with-adls",title:"Hadoop catalog with ADLS",description:"This document describes how to configure a Hadoop catalog with ADLS (aka. Azure Blob Storage (ABS), or Azure Data Lake Storage (v2)).",source:"@site/docs/hadoop-catalog-with-adls.md",sourceDirName:".",slug:"/hadoop-catalog-with-adls",permalink:"/docs/next/hadoop-catalog-with-adls",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/hadoop-catalog-with-adls.md",tags:[],version:"current",lastUpdatedBy:"Justin Mclean",lastUpdatedAt:1740469354e3,frontMatter:{title:"Hadoop catalog with ADLS",slug:"/hadoop-catalog-with-adls",date:"2025-01-03T00:00:00.000Z",keyword:"Hadoop catalog ADLS",license:"This software is licensed under the Apache License version 2."},sidebar:"docs",previous:{title:"Hadoop catalog with oss",permalink:"/docs/next/hadoop-catalog-with-oss"},next:{title:"Kafka catalog",permalink:"/docs/next/kafka-catalog"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configurations for creating a Hadoop catalog with ADLS",id:"configurations-for-creating-a-hadoop-catalog-with-adls",level:2},{value:"Configuration for a ADLS Hadoop catalog",id:"configuration-for-a-adls-hadoop-catalog",level:3},{value:"Configurations for a schema",id:"configurations-for-a-schema",level:3},{value:"Configurations for a fileset",id:"configurations-for-a-fileset",level:3},{value:"Example of creating Hadoop catalog with ADLS",id:"example-of-creating-hadoop-catalog-with-adls",level:2},{value:"Step1: Create a Hadoop catalog with ADLS",id:"step1-create-a-hadoop-catalog-with-adls",level:3},{value:"Step2: Create a schema",id:"step2-create-a-schema",level:3},{value:"Step3: Create a fileset",id:"step3-create-a-fileset",level:3},{value:"Accessing a fileset with ADLS",id:"accessing-a-fileset-with-adls",level:2},{value:"Using the GVFS Java client to access the fileset",id:"using-the-gvfs-java-client-to-access-the-fileset",level:3},{value:"Using Spark to access the fileset",id:"using-spark-to-access-the-fileset",level:3},{value:"Accessing a fileset using the Hadoop fs command",id:"accessing-a-fileset-using-the-hadoop-fs-command",level:3},{value:"Using the GVFS Python client to access a fileset",id:"using-the-gvfs-python-client-to-access-a-fileset",level:3},{value:"Using fileset with pandas",id:"using-fileset-with-pandas",level:3},{value:"Fileset with credential vending",id:"fileset-with-credential-vending",level:2},{value:"How to create an ADLS Hadoop catalog with credential vending",id:"how-to-create-an-adls-hadoop-catalog-with-credential-vending",level:3},{value:"How to access ADLS fileset with credential vending",id:"how-to-access-adls-fileset-with-credential-vending",level:3}];function d(e){const a={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components},{TabItem:n,Tabs:i}=a;return n||p("TabItem",!0),i||p("Tabs",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.p,{children:"This document describes how to configure a Hadoop catalog with ADLS (aka. Azure Blob Storage (ABS), or Azure Data Lake Storage (v2))."}),"\n",(0,t.jsx)(a.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(a.p,{children:"To set up a Hadoop catalog with ADLS, follow these steps:"}),"\n",(0,t.jsxs)(a.ol,{children:["\n",(0,t.jsxs)(a.li,{children:["Download the ",(0,t.jsx)(a.a,{href:"https://mvnrepository.com/artifact/org.apache.gravitino/gravitino-azure-bundle",children:(0,t.jsx)(a.code,{children:"gravitino-azure-bundle-${gravitino-version}.jar"})})," file."]}),"\n",(0,t.jsxs)(a.li,{children:["Place the downloaded file into the Gravitino Hadoop catalog classpath at ",(0,t.jsx)(a.code,{children:"${GRAVITINO_HOME}/catalogs/hadoop/libs/"}),"."]}),"\n",(0,t.jsx)(a.li,{children:"Start the Gravitino server by running the following command:"}),"\n"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"$ ${GRAVITINO_HOME}/bin/gravitino-server.sh start\n"})}),"\n",(0,t.jsxs)(a.p,{children:["Once the server is up and running, you can proceed to configure the Hadoop catalog with ADLS. In the rest of this document we will use ",(0,t.jsx)(a.code,{children:"http://localhost:8090"})," as the Gravitino server URL, please replace it with your actual server URL."]}),"\n",(0,t.jsx)(a.h2,{id:"configurations-for-creating-a-hadoop-catalog-with-adls",children:"Configurations for creating a Hadoop catalog with ADLS"}),"\n",(0,t.jsx)(a.h3,{id:"configuration-for-a-adls-hadoop-catalog",children:"Configuration for a ADLS Hadoop catalog"}),"\n",(0,t.jsxs)(a.p,{children:["Apart from configurations mentioned in ",(0,t.jsx)(a.a,{href:"/docs/next/hadoop-catalog#catalog-properties",children:"Hadoop-catalog-catalog-configuration"}),", the following properties are required to configure a Hadoop catalog with ADLS:"]}),"\n",(0,t.jsxs)(a.table,{children:[(0,t.jsx)(a.thead,{children:(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.th,{children:"Configuration item"}),(0,t.jsx)(a.th,{children:"Description"}),(0,t.jsx)(a.th,{children:"Default value"}),(0,t.jsx)(a.th,{children:"Required"}),(0,t.jsx)(a.th,{children:"Since version"})]})}),(0,t.jsxs)(a.tbody,{children:[(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:(0,t.jsx)(a.code,{children:"filesystem-providers"})}),(0,t.jsxs)(a.td,{children:["The file system providers to add. Set it to ",(0,t.jsx)(a.code,{children:"abs"})," if it's a Azure Blob Storage fileset, or a comma separated string that contains ",(0,t.jsx)(a.code,{children:"abs"})," like ",(0,t.jsx)(a.code,{children:"oss,abs,s3"})," to support multiple kinds of fileset including ",(0,t.jsx)(a.code,{children:"abs"}),"."]}),(0,t.jsx)(a.td,{children:"(none)"}),(0,t.jsx)(a.td,{children:"Yes"}),(0,t.jsx)(a.td,{children:"0.8.0-incubating"})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:(0,t.jsx)(a.code,{children:"default-filesystem-provider"})}),(0,t.jsxs)(a.td,{children:["The name default filesystem providers of this Hadoop catalog if users do not specify the scheme in the URI. Default value is ",(0,t.jsx)(a.code,{children:"builtin-local"}),", for Azure Blob Storage, if we set this value, we can omit the prefix 'abfss://' in the location."]}),(0,t.jsx)(a.td,{children:(0,t.jsx)(a.code,{children:"builtin-local"})}),(0,t.jsx)(a.td,{children:"No"}),(0,t.jsx)(a.td,{children:"0.8.0-incubating"})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:(0,t.jsx)(a.code,{children:"azure-storage-account-name "})}),(0,t.jsx)(a.td,{children:"The account name of Azure Blob Storage."}),(0,t.jsx)(a.td,{children:"(none)"}),(0,t.jsx)(a.td,{children:"Yes"}),(0,t.jsx)(a.td,{children:"0.8.0-incubating"})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:(0,t.jsx)(a.code,{children:"azure-storage-account-key"})}),(0,t.jsx)(a.td,{children:"The account key of Azure Blob Storage."}),(0,t.jsx)(a.td,{children:"(none)"}),(0,t.jsx)(a.td,{children:"Yes"}),(0,t.jsx)(a.td,{children:"0.8.0-incubating"})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:(0,t.jsx)(a.code,{children:"credential-providers"})}),(0,t.jsxs)(a.td,{children:["The credential provider types, separated by comma, possible value can be ",(0,t.jsx)(a.code,{children:"adls-token"}),", ",(0,t.jsx)(a.code,{children:"azure-account-key"}),". As the default authentication type is using account name and account key as the above, this configuration can enable credential vending provided by Gravitino server and client will no longer need to provide authentication information like account_name/account_key to access ADLS by GVFS. Once it's set, more configuration items are needed to make it works, please see ",(0,t.jsx)(a.a,{href:"/docs/next/security/credential-vending#adls-credentials",children:"adls-credential-vending"})]}),(0,t.jsx)(a.td,{children:"(none)"}),(0,t.jsx)(a.td,{children:"No"}),(0,t.jsx)(a.td,{children:"0.8.0-incubating"})]})]})]}),"\n",(0,t.jsx)(a.h3,{id:"configurations-for-a-schema",children:"Configurations for a schema"}),"\n",(0,t.jsxs)(a.p,{children:["Refer to ",(0,t.jsx)(a.a,{href:"/docs/next/hadoop-catalog#schema-properties",children:"Schema configurations"})," for more details."]}),"\n",(0,t.jsx)(a.h3,{id:"configurations-for-a-fileset",children:"Configurations for a fileset"}),"\n",(0,t.jsxs)(a.p,{children:["Refer to ",(0,t.jsx)(a.a,{href:"/docs/next/hadoop-catalog#fileset-properties",children:"Fileset configurations"})," for more details."]}),"\n",(0,t.jsx)(a.h2,{id:"example-of-creating-hadoop-catalog-with-adls",children:"Example of creating Hadoop catalog with ADLS"}),"\n",(0,t.jsx)(a.p,{children:"This section demonstrates how to create the Hadoop catalog with ADLS in Gravitino, with a complete example."}),"\n",(0,t.jsx)(a.h3,{id:"step1-create-a-hadoop-catalog-with-adls",children:"Step1: Create a Hadoop catalog with ADLS"}),"\n",(0,t.jsx)(a.p,{children:"First, you need to create a Hadoop catalog with ADLS. The following example shows how to create a Hadoop catalog with ADLS:"}),"\n",(0,t.jsxs)(i,{groupId:"language",queryString:!0,children:[(0,t.jsx)(n,{value:"shell",label:"Shell",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-shell",children:'curl -X POST -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json" -d \'{\n  "name": "example_catalog",\n  "type": "FILESET",\n  "comment": "This is a ADLS fileset catalog",\n  "provider": "hadoop",\n  "properties": {\n    "location": "abfss://container@account-name.dfs.core.windows.net/path",\n    "azure-storage-account-name": "The account name of the Azure Blob Storage",\n    "azure-storage-account-key": "The account key of the Azure Blob Storage",\n    "filesystem-providers": "abs"\n  }\n}\' http://localhost:8090/api/metalakes/metalake/catalogs\n'})})}),(0,t.jsx)(n,{value:"java",label:"Java",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-java",children:'GravitinoClient gravitinoClient = GravitinoClient\n    .builder("http://localhost:8090")\n    .withMetalake("metalake")\n    .build();\n\nMap<String, String> adlsProperties = ImmutableMap.<String, String>builder()\n    .put("location", "abfss://container@account-name.dfs.core.windows.net/path")\n    .put("azure-storage-account-name", "azure storage account name")\n    .put("azure-storage-account-key", "azure storage account key")\n    .put("filesystem-providers", "abs")\n    .build();\n\nCatalog adlsCatalog = gravitinoClient.createCatalog("example_catalog",\n    Type.FILESET,\n    "hadoop", // provider, Gravitino only supports "hadoop" for now.\n    "This is a ADLS fileset catalog",\n    adlsProperties);\n// ...\n\n'})})}),(0,t.jsx)(n,{value:"python",label:"Python",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:'gravitino_client: GravitinoClient = GravitinoClient(uri="http://localhost:8090", metalake_name="metalake")\nadls_properties = {\n    "location": "abfss://container@account-name.dfs.core.windows.net/path",\n    "azure-storage-account-name": "azure storage account name",\n    "azure-storage-account-key": "azure storage account key",\n    "filesystem-providers": "abs"\n}\n\nadls_properties = gravitino_client.create_catalog(name="example_catalog",\n                                                  type=Catalog.Type.FILESET,\n                                                  provider="hadoop",\n                                                  comment="This is a ADLS fileset catalog",\n                                                  properties=adls_properties)\n'})})})]}),"\n",(0,t.jsx)(a.h3,{id:"step2-create-a-schema",children:"Step2: Create a schema"}),"\n",(0,t.jsx)(a.p,{children:"Once the catalog is created, you can create a schema. The following example shows how to create a schema:"}),"\n",(0,t.jsxs)(i,{groupId:"language",queryString:!0,children:[(0,t.jsx)(n,{value:"shell",label:"Shell",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-shell",children:'curl -X POST -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json" -d \'{\n  "name": "test_schema",\n  "comment": "This is a ADLS schema",\n  "properties": {\n    "location": "abfss://container@account-name.dfs.core.windows.net/path"\n  }\n}\' http://localhost:8090/api/metalakes/metalake/catalogs/test_catalog/schemas\n'})})}),(0,t.jsx)(n,{value:"java",label:"Java",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-java",children:'Catalog catalog = gravitinoClient.loadCatalog("test_catalog");\n\nSupportsSchemas supportsSchemas = catalog.asSchemas();\n\nMap<String, String> schemaProperties = ImmutableMap.<String, String>builder()\n    .put("location", "abfss://container@account-name.dfs.core.windows.net/path")\n    .build();\nSchema schema = supportsSchemas.createSchema("test_schema",\n    "This is a ADLS schema",\n    schemaProperties\n);\n// ...\n'})})}),(0,t.jsx)(n,{value:"python",label:"Python",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:'gravitino_client: GravitinoClient = GravitinoClient(uri="http://localhost:8090", metalake_name="metalake")\ncatalog: Catalog = gravitino_client.load_catalog(name="test_catalog")\ncatalog.as_schemas().create_schema(name="test_schema",\n                                   comment="This is a ADLS schema",\n                                   properties={"location": "abfss://container@account-name.dfs.core.windows.net/path"})\n'})})})]}),"\n",(0,t.jsx)(a.h3,{id:"step3-create-a-fileset",children:"Step3: Create a fileset"}),"\n",(0,t.jsx)(a.p,{children:"After creating the schema, you can create a fileset. The following example shows how to create a fileset:"}),"\n",(0,t.jsxs)(i,{groupId:"language",queryString:!0,children:[(0,t.jsx)(n,{value:"shell",label:"Shell",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-shell",children:'curl -X POST -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json" -d \'{\n  "name": "example_fileset",\n  "comment": "This is an example fileset",\n  "type": "MANAGED",\n  "storageLocation": "abfss://container@account-name.dfs.core.windows.net/path/example_fileset",\n  "properties": {\n    "k1": "v1"\n  }\n}\' http://localhost:8090/api/metalakes/metalake/catalogs/test_catalog/schemas/test_schema/filesets\n'})})}),(0,t.jsx)(n,{value:"java",label:"Java",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-java",children:'GravitinoClient gravitinoClient = GravitinoClient\n    .builder("http://localhost:8090")\n    .withMetalake("metalake")\n    .build();\n\nCatalog catalog = gravitinoClient.loadCatalog("test_catalog");\nFilesetCatalog filesetCatalog = catalog.asFilesetCatalog();\n\nMap<String, String> propertiesMap = ImmutableMap.<String, String>builder()\n        .put("k1", "v1")\n        .build();\n\nfilesetCatalog.createFileset(\n    NameIdentifier.of("test_schema", "example_fileset"),\n    "This is an example fileset",\n    Fileset.Type.MANAGED,\n    "abfss://container@account-name.dfs.core.windows.net/path/example_fileset",\n    propertiesMap,\n);\n'})})}),(0,t.jsx)(n,{value:"python",label:"Python",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:'gravitino_client: GravitinoClient = GravitinoClient(uri="http://localhost:8090", metalake_name="metalake")\n\ncatalog: Catalog = gravitino_client.load_catalog(name="test_catalog")\ncatalog.as_fileset_catalog().create_fileset(ident=NameIdentifier.of("test_schema", "example_fileset"),\n                                            type=Fileset.Type.MANAGED,\n                                            comment="This is an example fileset",\n                                            storage_location="abfss://container@account-name.dfs.core.windows.net/path/example_fileset",\n                                            properties={"k1": "v1"})\n'})})})]}),"\n",(0,t.jsx)(a.h2,{id:"accessing-a-fileset-with-adls",children:"Accessing a fileset with ADLS"}),"\n",(0,t.jsx)(a.h3,{id:"using-the-gvfs-java-client-to-access-the-fileset",children:"Using the GVFS Java client to access the fileset"}),"\n",(0,t.jsxs)(a.p,{children:["To access fileset with Azure Blob Storage(ADLS) using the GVFS Java client, based on the ",(0,t.jsx)(a.a,{href:"/docs/next/how-to-use-gvfs#configuration-1",children:"basic GVFS configurations"}),", you need to add the following configurations:"]}),"\n",(0,t.jsxs)(a.table,{children:[(0,t.jsx)(a.thead,{children:(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.th,{children:"Configuration item"}),(0,t.jsx)(a.th,{children:"Description"}),(0,t.jsx)(a.th,{children:"Default value"}),(0,t.jsx)(a.th,{children:"Required"}),(0,t.jsx)(a.th,{children:"Since version"})]})}),(0,t.jsxs)(a.tbody,{children:[(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:(0,t.jsx)(a.code,{children:"azure-storage-account-name"})}),(0,t.jsx)(a.td,{children:"The account name of Azure Blob Storage."}),(0,t.jsx)(a.td,{children:"(none)"}),(0,t.jsx)(a.td,{children:"Yes"}),(0,t.jsx)(a.td,{children:"0.8.0-incubating"})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:(0,t.jsx)(a.code,{children:"azure-storage-account-key"})}),(0,t.jsx)(a.td,{children:"The account key of Azure Blob Storage."}),(0,t.jsx)(a.td,{children:"(none)"}),(0,t.jsx)(a.td,{children:"Yes"}),(0,t.jsx)(a.td,{children:"0.8.0-incubating"})]})]})]}),"\n",(0,t.jsx)(a.admonition,{type:"note",children:(0,t.jsxs)(a.p,{children:["If the catalog has enabled ",(0,t.jsx)(a.a,{href:"/docs/next/security/credential-vending",children:"credential vending"}),", the properties above can be omitted. More details can be found in ",(0,t.jsx)(a.a,{href:"#fileset-with-credential-vending",children:"Fileset with credential vending"}),"."]})}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-java",children:'Configuration conf = new Configuration();\nconf.set("fs.AbstractFileSystem.gvfs.impl", "org.apache.gravitino.filesystem.hadoop.Gvfs");\nconf.set("fs.gvfs.impl", "org.apache.gravitino.filesystem.hadoop.GravitinoVirtualFileSystem");\nconf.set("fs.gravitino.server.uri", "http://localhost:8090");\nconf.set("fs.gravitino.client.metalake", "test_metalake");\nconf.set("azure-storage-account-name", "account_name_of_adls");\nconf.set("azure-storage-account-key", "account_key_of_adls");\nPath filesetPath = new Path("gvfs://fileset/test_catalog/test_schema/test_fileset/new_dir");\nFileSystem fs = filesetPath.getFileSystem(conf);\nfs.mkdirs(filesetPath);\n...\n'})}),"\n",(0,t.jsx)(a.p,{children:"Similar to Spark configurations, you need to add ADLS (bundle) jars to the classpath according to your environment."}),"\n",(0,t.jsxs)(a.p,{children:["If your wants to custom your hadoop version or there is already a hadoop version in your project, you can add the following dependencies to your ",(0,t.jsx)(a.code,{children:"pom.xml"}),":"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-xml",children:"  <dependency>\n    <groupId>org.apache.hadoop</groupId>\n    <artifactId>hadoop-common</artifactId>\n    <version>${HADOOP_VERSION}</version>\n  </dependency>\n\n  <dependency>\n    <groupId>org.apache.hadoop</groupId>\n    <artifactId>hadoop-azure</artifactId>\n    <version>${HADOOP_VERSION}</version>\n  </dependency>\n\n  <dependency>\n    <groupId>org.apache.gravitino</groupId>\n    <artifactId>filesystem-hadoop3-runtime</artifactId>\n    <version>${GRAVITINO_VERSION}</version>\n  </dependency>\n\n  <dependency>\n    <groupId>org.apache.gravitino</groupId>\n    <artifactId>gravitino-azure</artifactId>\n    <version>${GRAVITINO_VERSION}</version>\n  </dependency>\n"})}),"\n",(0,t.jsx)(a.p,{children:"Or use the bundle jar with Hadoop environment if there is no Hadoop environment:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-xml",children:"  <dependency>\n    <groupId>org.apache.gravitino</groupId>\n    <artifactId>gravitino-azure-bundle</artifactId>\n    <version>${GRAVITINO_VERSION}</version>\n  </dependency>\n\n  <dependency>\n    <groupId>org.apache.gravitino</groupId>\n    <artifactId>filesystem-hadoop3-runtime</artifactId>\n    <version>${GRAVITINO_VERSION}</version>\n  </dependency>\n"})}),"\n",(0,t.jsx)(a.h3,{id:"using-spark-to-access-the-fileset",children:"Using Spark to access the fileset"}),"\n",(0,t.jsxs)(a.p,{children:["The following code snippet shows how to use ",(0,t.jsx)(a.strong,{children:"PySpark 3.1.3 with Hadoop environment(Hadoop 3.2.0)"})," to access the fileset:"]}),"\n",(0,t.jsx)(a.p,{children:"Before running the following code, you need to install required packages:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"pip install pyspark==3.1.3\npip install apache-gravitino==${GRAVITINO_VERSION}\n"})}),"\n",(0,t.jsx)(a.p,{children:"Then you can run the following code:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:'from pyspark.sql import SparkSession\nimport os\n\ngravitino_url = "http://localhost:8090"\nmetalake_name = "test"\n\ncatalog_name = "your_adls_catalog"\nschema_name = "your_adls_schema"\nfileset_name = "your_adls_fileset"\n\nos.environ["PYSPARK_SUBMIT_ARGS"] = "--jars /path/to/gravitino-azure-{gravitino-version}.jar,/path/to/gravitino-filesystem-hadoop3-runtime-{gravitino-version}.jar,/path/to/hadoop-azure-3.2.0.jar,/path/to/azure-storage-7.0.0.jar,/path/to/wildfly-openssl-1.0.4.Final.jar --master local[1] pyspark-shell"\nspark = SparkSession.builder\n    .appName("adls_fileset_test")\n    .config("spark.hadoop.fs.AbstractFileSystem.gvfs.impl", "org.apache.gravitino.filesystem.hadoop.Gvfs")\n    .config("spark.hadoop.fs.gvfs.impl", "org.apache.gravitino.filesystem.hadoop.GravitinoVirtualFileSystem")\n    .config("spark.hadoop.fs.gravitino.server.uri", "http://localhost:8090")\n    .config("spark.hadoop.fs.gravitino.client.metalake", "test")\n    .config("spark.hadoop.azure-storage-account-name", "azure_account_name")\n    .config("spark.hadoop.azure-storage-account-key", "azure_account_name")\n    .config("spark.hadoop.fs.azure.skipUserGroupMetadataDuringInitialization", "true")\n    .config("spark.driver.memory", "2g")\n    .config("spark.driver.port", "2048")\n    .getOrCreate()\n\ndata = [("Alice", 25), ("Bob", 30), ("Cathy", 45)]\ncolumns = ["Name", "Age"]\nspark_df = spark.createDataFrame(data, schema=columns)\ngvfs_path = f"gvfs://fileset/{catalog_name}/{schema_name}/{fileset_name}/people"\n\nspark_df.coalesce(1).write\n    .mode("overwrite")\n    .option("header", "true")\n    .csv(gvfs_path)\n'})}),"\n",(0,t.jsxs)(a.p,{children:["If your Spark ",(0,t.jsx)(a.strong,{children:"without Hadoop environment"}),", you can use the following code snippet to access the fileset:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:'## Replace the following code snippet with the above code snippet with the same environment variables\n\nos.environ["PYSPARK_SUBMIT_ARGS"] = "--jars /path/to/gravitino-azure-bundle-{gravitino-version}.jar,/path/to/gravitino-filesystem-hadoop3-runtime-{gravitino-version}.jar --master local[1] pyspark-shell"\n'})}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.a,{href:"https://mvnrepository.com/artifact/org.apache.gravitino/gravitino-azure-bundle",children:(0,t.jsx)(a.code,{children:"gravitino-azure-bundle-${gravitino-version}.jar"})})," is the Gravitino ADLS jar with Hadoop environment(3.3.1) and ",(0,t.jsx)(a.code,{children:"hadoop-azure"})," jar."]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.a,{href:"https://mvnrepository.com/artifact/org.apache.gravitino/gravitino-azure",children:(0,t.jsx)(a.code,{children:"gravitino-azure-${gravitino-version}.jar"})})," is a condensed version of the Gravitino ADLS bundle jar without Hadoop environment and ",(0,t.jsx)(a.code,{children:"hadoop-azure"})," jar."]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.code,{children:"hadoop-azure-3.2.0.jar"})," and ",(0,t.jsx)(a.code,{children:"azure-storage-7.0.0.jar"})," can be found in the Hadoop distribution in the ",(0,t.jsx)(a.code,{children:"${HADOOP_HOME}/share/hadoop/tools/lib"})," directory."]}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:"Please choose the correct jar according to your environment."}),"\n",(0,t.jsx)(a.admonition,{type:"note",children:(0,t.jsx)(a.p,{children:"In some Spark versions, a Hadoop environment is necessary for the driver, adding the bundle jars with '--jars' may not work. If this is the case, you should add the jars to the spark CLASSPATH directly."})}),"\n",(0,t.jsx)(a.h3,{id:"accessing-a-fileset-using-the-hadoop-fs-command",children:"Accessing a fileset using the Hadoop fs command"}),"\n",(0,t.jsxs)(a.p,{children:["The following are examples of how to use the ",(0,t.jsx)(a.code,{children:"hadoop fs"})," command to access the fileset in Hadoop 3.1.3."]}),"\n",(0,t.jsxs)(a.ol,{children:["\n",(0,t.jsxs)(a.li,{children:["Adding the following contents to the ",(0,t.jsx)(a.code,{children:"${HADOOP_HOME}/etc/hadoop/core-site.xml"})," file:"]}),"\n"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-xml",children:"  <property>\n    <name>fs.AbstractFileSystem.gvfs.impl</name>\n    <value>org.apache.gravitino.filesystem.hadoop.Gvfs</value>\n  </property>\n\n  <property>\n    <name>fs.gvfs.impl</name>\n    <value>org.apache.gravitino.filesystem.hadoop.GravitinoVirtualFileSystem</value>\n  </property>\n\n  <property>\n    <name>fs.gravitino.server.uri</name>\n    <value>http://localhost:8090</value>\n  </property>\n\n  <property>\n    <name>fs.gravitino.client.metalake</name>\n    <value>test</value>\n  </property>\n\n  <property>\n    <name>azure-storage-account-name</name>\n    <value>account_name</value>\n  </property>\n  <property>\n    <name>azure-storage-account-key</name>\n    <value>account_key</value>\n  </property>\n"})}),"\n",(0,t.jsxs)(a.ol,{start:"2",children:["\n",(0,t.jsx)(a.li,{children:"Add the necessary jars to the Hadoop classpath."}),"\n"]}),"\n",(0,t.jsxs)(a.p,{children:["For ADLS, you need to add ",(0,t.jsx)(a.code,{children:"gravitino-filesystem-hadoop3-runtime-${gravitino-version}.jar"}),", ",(0,t.jsx)(a.code,{children:"gravitino-azure-${gravitino-version}.jar"})," and ",(0,t.jsx)(a.code,{children:"hadoop-azure-${hadoop-version}.jar"})," located at ",(0,t.jsx)(a.code,{children:"${HADOOP_HOME}/share/hadoop/tools/lib/"})," to the Hadoop classpath."]}),"\n",(0,t.jsxs)(a.ol,{start:"3",children:["\n",(0,t.jsx)(a.li,{children:"Run the following command to access the fileset:"}),"\n"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-shell",children:"./${HADOOP_HOME}/bin/hadoop dfs -ls gvfs://fileset/adls_catalog/adls_schema/adls_fileset\n./${HADOOP_HOME}/bin/hadoop dfs -put /path/to/local/file gvfs://fileset/adls_catalog/adls_schema/adls_fileset\n"})}),"\n",(0,t.jsx)(a.h3,{id:"using-the-gvfs-python-client-to-access-a-fileset",children:"Using the GVFS Python client to access a fileset"}),"\n",(0,t.jsxs)(a.p,{children:["In order to access fileset with Azure Blob storage (ADLS) using the GVFS Python client, apart from ",(0,t.jsx)(a.a,{href:"/docs/next/how-to-use-gvfs#configuration-1",children:"basic GVFS configurations"}),", you need to add the following configurations:"]}),"\n",(0,t.jsxs)(a.table,{children:[(0,t.jsx)(a.thead,{children:(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.th,{children:"Configuration item"}),(0,t.jsx)(a.th,{children:"Description"}),(0,t.jsx)(a.th,{children:"Default value"}),(0,t.jsx)(a.th,{children:"Required"}),(0,t.jsx)(a.th,{children:"Since version"})]})}),(0,t.jsxs)(a.tbody,{children:[(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:(0,t.jsx)(a.code,{children:"azure_storage_account_name"})}),(0,t.jsx)(a.td,{children:"The account name of Azure Blob Storage"}),(0,t.jsx)(a.td,{children:"(none)"}),(0,t.jsx)(a.td,{children:"Yes"}),(0,t.jsx)(a.td,{children:"0.8.0-incubating"})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:(0,t.jsx)(a.code,{children:"azure_storage_account_key"})}),(0,t.jsx)(a.td,{children:"The account key of Azure Blob Storage"}),(0,t.jsx)(a.td,{children:"(none)"}),(0,t.jsx)(a.td,{children:"Yes"}),(0,t.jsx)(a.td,{children:"0.8.0-incubating"})]})]})]}),"\n",(0,t.jsx)(a.admonition,{type:"note",children:(0,t.jsxs)(a.p,{children:["If the catalog has enabled ",(0,t.jsx)(a.a,{href:"/docs/next/security/credential-vending",children:"credential vending"}),", the properties above can be omitted."]})}),"\n",(0,t.jsxs)(a.p,{children:["Please install the ",(0,t.jsx)(a.code,{children:"gravitino"})," package before running the following code:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"pip install apache-gravitino==${GRAVITINO_VERSION}\n"})}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:'from gravitino import gvfs\noptions = {\n    "cache_size": 20,\n    "cache_expired_time": 3600,\n    "auth_type": "simple",\n    "azure_storage_account_name": "azure_account_name",\n    "azure_storage_account_key": "azure_account_key"\n}\nfs = gvfs.GravitinoVirtualFileSystem(server_uri="http://localhost:8090", metalake_name="test_metalake", options=options)\nfs.ls("gvfs://fileset/{adls_catalog}/{adls_schema}/{adls_fileset}/")\n'})}),"\n",(0,t.jsx)(a.h3,{id:"using-fileset-with-pandas",children:"Using fileset with pandas"}),"\n",(0,t.jsx)(a.p,{children:"The following are examples of how to use the pandas library to access the ADLS fileset"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:'import pandas as pd\n\nstorage_options = {\n    "server_uri": "http://localhost:8090", \n    "metalake_name": "test",\n    "options": {\n        "azure_storage_account_name": "azure_account_name",\n        "azure_storage_account_key": "azure_account_key"\n    }\n}\nds = pd.read_csv(f"gvfs://fileset/${catalog_name}/${schema_name}/${fileset_name}/people/part-00000-51d366e2-d5eb-448d-9109-32a96c8a14dc-c000.csv",\n                 storage_options=storage_options)\nds.head()\n'})}),"\n",(0,t.jsxs)(a.p,{children:["For other use cases, please refer to the ",(0,t.jsx)(a.a,{href:"/docs/next/how-to-use-gvfs",children:"Gravitino Virtual File System"})," document."]}),"\n",(0,t.jsx)(a.h2,{id:"fileset-with-credential-vending",children:"Fileset with credential vending"}),"\n",(0,t.jsxs)(a.p,{children:["Since 0.8.0-incubating, Gravitino supports credential vending for ADLS fileset. If the catalog has been ",(0,t.jsx)(a.a,{href:"/docs/next/security/credential-vending",children:"configured with credential"}),", you can access ADLS fileset without providing authentication information like ",(0,t.jsx)(a.code,{children:"azure-storage-account-name"})," and ",(0,t.jsx)(a.code,{children:"azure-storage-account-key"})," in the properties."]}),"\n",(0,t.jsx)(a.h3,{id:"how-to-create-an-adls-hadoop-catalog-with-credential-vending",children:"How to create an ADLS Hadoop catalog with credential vending"}),"\n",(0,t.jsxs)(a.p,{children:["Apart from configuration method in ",(0,t.jsx)(a.a,{href:"#configuration-for-a-adls-hadoop-catalog",children:"create-adls-hadoop-catalog"}),", properties needed by ",(0,t.jsx)(a.a,{href:"/docs/next/security/credential-vending#adls-credentials",children:"adls-credential"})," should also be set to enable credential vending for ADLS fileset. Take ",(0,t.jsx)(a.code,{children:"adls-token"})," credential provider for example:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-shell",children:'curl -X POST -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json" -d \'{\n  "name": "adls-catalog-with-token",\n  "type": "FILESET",\n  "comment": "This is a ADLS fileset catalog",\n  "provider": "hadoop",\n  "properties": {\n    "location": "abfss://container@account-name.dfs.core.windows.net/path",\n    "azure-storage-account-name": "The account name of the Azure Blob Storage",\n    "azure-storage-account-key": "The account key of the Azure Blob Storage",\n    "filesystem-providers": "abs",\n    "credential-providers": "adls-token",\n    "azure-tenant-id":"The Azure tenant id",\n    "azure-client-id":"The Azure client id",\n    "azure-client-secret":"The Azure client secret key"\n  }\n}\' http://localhost:8090/api/metalakes/metalake/catalogs\n'})}),"\n",(0,t.jsx)(a.h3,{id:"how-to-access-adls-fileset-with-credential-vending",children:"How to access ADLS fileset with credential vending"}),"\n",(0,t.jsx)(a.p,{children:"If the catalog has been configured with credential, you can access ADLS fileset without providing authentication information via GVFS Java/Python client and Spark. Let's see how to access ADLS fileset with credential:"}),"\n",(0,t.jsx)(a.p,{children:"GVFS Java client:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-java",children:'Configuration conf = new Configuration();\nconf.set("fs.AbstractFileSystem.gvfs.impl", "org.apache.gravitino.filesystem.hadoop.Gvfs");\nconf.set("fs.gvfs.impl", "org.apache.gravitino.filesystem.hadoop.GravitinoVirtualFileSystem");\nconf.set("fs.gravitino.server.uri", "http://localhost:8090");\nconf.set("fs.gravitino.client.metalake", "test_metalake");\n// No need to set azure-storage-account-name and azure-storage-account-name\nPath filesetPath = new Path("gvfs://fileset/adls_test_catalog/test_schema/test_fileset/new_dir");\nFileSystem fs = filesetPath.getFileSystem(conf);\nfs.mkdirs(filesetPath);\n...\n'})}),"\n",(0,t.jsx)(a.p,{children:"Spark:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:'spark = SparkSession.builder\n    .appName("adls_fielset_test")\n    .config("spark.hadoop.fs.AbstractFileSystem.gvfs.impl", "org.apache.gravitino.filesystem.hadoop.Gvfs")\n    .config("spark.hadoop.fs.gvfs.impl", "org.apache.gravitino.filesystem.hadoop.GravitinoVirtualFileSystem")\n    .config("spark.hadoop.fs.gravitino.server.uri", "http://localhost:8090")\n    .config("spark.hadoop.fs.gravitino.client.metalake", "test")\n    # No need to set azure-storage-account-name and azure-storage-account-name\n    .config("spark.driver.memory", "2g")\n    .config("spark.driver.port", "2048")\n    .getOrCreate()\n'})}),"\n",(0,t.jsx)(a.p,{children:"Python client and Hadoop command are similar to the above examples."})]})}function h(e={}){const{wrapper:a}={...(0,o.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}function p(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);