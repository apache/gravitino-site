"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[50536],{47108:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var t=n(13274),i=n(38389);const s={title:"Hadoop catalog with GCS",slug:"/hadoop-catalog-with-gcs",date:new Date("2024-01-03T00:00:00.000Z"),keyword:"Hadoop catalog GCS",license:"This software is licensed under the Apache License version 2."},o=void 0,c={id:"hadoop-catalog-with-gcs",title:"Hadoop catalog with GCS",description:"This document describes how to configure a Hadoop catalog with GCS.",source:"@site/docs/hadoop-catalog-with-gcs.md",sourceDirName:".",slug:"/hadoop-catalog-with-gcs",permalink:"/docs/next/hadoop-catalog-with-gcs",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/hadoop-catalog-with-gcs.md",tags:[],version:"current",lastUpdatedBy:"FANNG",lastUpdatedAt:173770816e4,frontMatter:{title:"Hadoop catalog with GCS",slug:"/hadoop-catalog-with-gcs",date:"2024-01-03T00:00:00.000Z",keyword:"Hadoop catalog GCS",license:"This software is licensed under the Apache License version 2."},sidebar:"docs",previous:{title:"Hadoop catalog with s3",permalink:"/docs/next/hadoop-catalog-with-s3"},next:{title:"Hadoop catalog with oss",permalink:"/docs/next/hadoop-catalog-with-oss"}},r={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configurations for creating a Hadoop catalog with GCS",id:"configurations-for-creating-a-hadoop-catalog-with-gcs",level:2},{value:"Configurations for a GCS Hadoop catalog",id:"configurations-for-a-gcs-hadoop-catalog",level:3},{value:"Configurations for a schema",id:"configurations-for-a-schema",level:3},{value:"Configurations for a fileset",id:"configurations-for-a-fileset",level:3},{value:"Example of creating Hadoop catalog with GCS",id:"example-of-creating-hadoop-catalog-with-gcs",level:2},{value:"Step1: Create a Hadoop catalog with GCS",id:"step1-create-a-hadoop-catalog-with-gcs",level:3},{value:"Step2: Create a schema",id:"step2-create-a-schema",level:3},{value:"Step3: Create a fileset",id:"step3-create-a-fileset",level:3},{value:"Accessing a fileset with GCS",id:"accessing-a-fileset-with-gcs",level:2},{value:"Using the GVFS Java client to access the fileset",id:"using-the-gvfs-java-client-to-access-the-fileset",level:3},{value:"Using Spark to access the fileset",id:"using-spark-to-access-the-fileset",level:3},{value:"Accessing a fileset using the Hadoop fs command",id:"accessing-a-fileset-using-the-hadoop-fs-command",level:3},{value:"Using the GVFS Python client to access a fileset",id:"using-the-gvfs-python-client-to-access-a-fileset",level:3},{value:"Using fileset with pandas",id:"using-fileset-with-pandas",level:3},{value:"Fileset with credential vending",id:"fileset-with-credential-vending",level:2},{value:"How to create a GCS Hadoop catalog with credential vending",id:"how-to-create-a-gcs-hadoop-catalog-with-credential-vending",level:3},{value:"How to access GCS fileset with credential vending",id:"how-to-access-gcs-fileset-with-credential-vending",level:3}];function d(e){const a={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{TabItem:n,Tabs:s}=a;return n||p("TabItem",!0),s||p("Tabs",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.p,{children:"This document describes how to configure a Hadoop catalog with GCS."}),"\n",(0,t.jsx)(a.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(a.p,{children:"To set up a Hadoop catalog with OSS, follow these steps:"}),"\n",(0,t.jsxs)(a.ol,{children:["\n",(0,t.jsxs)(a.li,{children:["Download the ",(0,t.jsx)(a.a,{href:"https://mvnrepository.com/artifact/org.apache.gravitino/gravitino-gcp-bundle",children:(0,t.jsx)(a.code,{children:"gravitino-gcp-bundle-${gravitino-version}.jar"})})," file."]}),"\n",(0,t.jsxs)(a.li,{children:["Place the downloaded file into the Gravitino Hadoop catalog classpath at ",(0,t.jsx)(a.code,{children:"${GRAVITINO_HOME}/catalogs/hadoop/libs/"}),"."]}),"\n",(0,t.jsx)(a.li,{children:"Start the Gravitino server by running the following command:"}),"\n"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"$ ${GRAVITINO_HOME}/bin/gravitino-server.sh start\n"})}),"\n",(0,t.jsxs)(a.p,{children:["Once the server is up and running, you can proceed to configure the Hadoop catalog with GCS. In the rest of this document we will use ",(0,t.jsx)(a.code,{children:"http://localhost:8090"})," as the Gravitino server URL, please replace it with your actual server URL."]}),"\n",(0,t.jsx)(a.h2,{id:"configurations-for-creating-a-hadoop-catalog-with-gcs",children:"Configurations for creating a Hadoop catalog with GCS"}),"\n",(0,t.jsx)(a.h3,{id:"configurations-for-a-gcs-hadoop-catalog",children:"Configurations for a GCS Hadoop catalog"}),"\n",(0,t.jsxs)(a.p,{children:["Apart from configurations mentioned in ",(0,t.jsx)(a.a,{href:"/docs/next/hadoop-catalog#catalog-properties",children:"Hadoop-catalog-catalog-configuration"}),", the following properties are required to configure a Hadoop catalog with GCS:"]}),"\n",(0,t.jsxs)(a.table,{children:[(0,t.jsx)(a.thead,{children:(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.th,{children:"Configuration item"}),(0,t.jsx)(a.th,{children:"Description"}),(0,t.jsx)(a.th,{children:"Default value"}),(0,t.jsx)(a.th,{children:"Required"}),(0,t.jsx)(a.th,{children:"Since version"})]})}),(0,t.jsxs)(a.tbody,{children:[(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:(0,t.jsx)(a.code,{children:"filesystem-providers"})}),(0,t.jsxs)(a.td,{children:["The file system providers to add. Set it to ",(0,t.jsx)(a.code,{children:"gcs"})," if it's a GCS fileset, a comma separated string that contains ",(0,t.jsx)(a.code,{children:"gcs"})," like ",(0,t.jsx)(a.code,{children:"gcs,s3"})," to support multiple kinds of fileset including ",(0,t.jsx)(a.code,{children:"gcs"}),"."]}),(0,t.jsx)(a.td,{children:"(none)"}),(0,t.jsx)(a.td,{children:"Yes"}),(0,t.jsx)(a.td,{children:"0.7.0-incubating"})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:(0,t.jsx)(a.code,{children:"default-filesystem-provider"})}),(0,t.jsxs)(a.td,{children:["The name default filesystem providers of this Hadoop catalog if users do not specify the scheme in the URI. Default value is ",(0,t.jsx)(a.code,{children:"builtin-local"}),", for GCS, if we set this value, we can omit the prefix 'gs://' in the location."]}),(0,t.jsx)(a.td,{children:(0,t.jsx)(a.code,{children:"builtin-local"})}),(0,t.jsx)(a.td,{children:"No"}),(0,t.jsx)(a.td,{children:"0.7.0-incubating"})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:(0,t.jsx)(a.code,{children:"gcs-service-account-file"})}),(0,t.jsx)(a.td,{children:"The path of GCS service account JSON file."}),(0,t.jsx)(a.td,{children:"(none)"}),(0,t.jsx)(a.td,{children:"Yes"}),(0,t.jsx)(a.td,{children:"0.7.0-incubating"})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:(0,t.jsx)(a.code,{children:"credential-providers"})}),(0,t.jsxs)(a.td,{children:["The credential provider types, separated by comma, possible value can be ",(0,t.jsx)(a.code,{children:"gcs-token"}),". As the default authentication type is using service account as the above, this configuration can enable credential vending provided by Gravitino server and client will no longer need to provide authentication information like service account to access GCS by GVFS. Once it's set, more configuration items are needed to make it works, please see ",(0,t.jsx)(a.a,{href:"/docs/next/security/credential-vending#gcs-credentials",children:"gcs-credential-vending"})]}),(0,t.jsx)(a.td,{children:"(none)"}),(0,t.jsx)(a.td,{children:"No"}),(0,t.jsx)(a.td,{children:"0.8.0-incubating"})]})]})]}),"\n",(0,t.jsx)(a.h3,{id:"configurations-for-a-schema",children:"Configurations for a schema"}),"\n",(0,t.jsxs)(a.p,{children:["Refer to ",(0,t.jsx)(a.a,{href:"/docs/next/hadoop-catalog#schema-properties",children:"Schema configurations"})," for more details."]}),"\n",(0,t.jsx)(a.h3,{id:"configurations-for-a-fileset",children:"Configurations for a fileset"}),"\n",(0,t.jsxs)(a.p,{children:["Refer to ",(0,t.jsx)(a.a,{href:"/docs/next/hadoop-catalog#fileset-properties",children:"Fileset configurations"})," for more details."]}),"\n",(0,t.jsx)(a.h2,{id:"example-of-creating-hadoop-catalog-with-gcs",children:"Example of creating Hadoop catalog with GCS"}),"\n",(0,t.jsx)(a.p,{children:"This section will show you how to use the Hadoop catalog with GCS in Gravitino, including detailed examples."}),"\n",(0,t.jsx)(a.h3,{id:"step1-create-a-hadoop-catalog-with-gcs",children:"Step1: Create a Hadoop catalog with GCS"}),"\n",(0,t.jsx)(a.p,{children:"First, you need to create a Hadoop catalog with GCS. The following example shows how to create a Hadoop catalog with GCS:"}),"\n",(0,t.jsxs)(s,{groupId:"language",queryString:!0,children:[(0,t.jsx)(n,{value:"shell",label:"Shell",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-shell",children:'curl -X POST -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json" -d \'{\n  "name": "test_catalog",\n  "type": "FILESET",\n  "comment": "This is a GCS fileset catalog",\n  "provider": "hadoop",\n  "properties": {\n    "location": "gs://bucket/root",\n    "gcs-service-account-file": "path_of_gcs_service_account_file",\n    "filesystem-providers": "gcs"\n  }\n}\' http://localhost:8090/api/metalakes/metalake/catalogs\n'})})}),(0,t.jsx)(n,{value:"java",label:"Java",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-java",children:'GravitinoClient gravitinoClient = GravitinoClient\n    .builder("http://localhost:8090")\n    .withMetalake("metalake")\n    .build();\n\nMap<String, String> gcsProperties = ImmutableMap.<String, String>builder()\n    .put("location", "gs://bucket/root")\n    .put("gcs-service-account-file", "path_of_gcs_service_account_file")\n    .put("filesystem-providers", "gcs")\n    .build();\n\nCatalog gcsCatalog = gravitinoClient.createCatalog("test_catalog", \n    Type.FILESET,\n    "hadoop", // provider, Gravitino only supports "hadoop" for now.\n    "This is a GCS fileset catalog",\n    gcsProperties);\n// ...\n\n'})})}),(0,t.jsx)(n,{value:"python",label:"Python",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:'gravitino_client: GravitinoClient = GravitinoClient(uri="http://localhost:8090", metalake_name="metalake")\ngcs_properties = {\n    "location": "gs://bucket/root",\n    "gcs-service-account-file": "path_of_gcs_service_account_file",\n    "filesystem-providers": "gcs"\n}\n\ngcs_properties = gravitino_client.create_catalog(name="test_catalog",\n                                                 type=Catalog.Type.FILESET,\n                                                 provider="hadoop",\n                                                 comment="This is a GCS fileset catalog",\n                                                 properties=gcs_properties)\n'})})})]}),"\n",(0,t.jsx)(a.h3,{id:"step2-create-a-schema",children:"Step2: Create a schema"}),"\n",(0,t.jsx)(a.p,{children:"Once you have created a Hadoop catalog with GCS, you can create a schema. The following example shows how to create a schema:"}),"\n",(0,t.jsxs)(s,{groupId:"language",queryString:!0,children:[(0,t.jsx)(n,{value:"shell",label:"Shell",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-shell",children:'curl -X POST -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json" -d \'{\n  "name": "test_schema",\n  "comment": "This is a GCS schema",\n  "properties": {\n    "location": "gs://bucket/root/schema"\n  }\n}\' http://localhost:8090/api/metalakes/metalake/catalogs/test_catalog/schemas\n'})})}),(0,t.jsx)(n,{value:"java",label:"Java",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-java",children:'Catalog catalog = gravitinoClient.loadCatalog("test_catalog");\n\nSupportsSchemas supportsSchemas = catalog.asSchemas();\n\nMap<String, String> schemaProperties = ImmutableMap.<String, String>builder()\n    .put("location", "gs://bucket/root/schema")\n    .build();\nSchema schema = supportsSchemas.createSchema("test_schema",\n    "This is a GCS schema",\n    schemaProperties\n);\n// ...\n'})})}),(0,t.jsx)(n,{value:"python",label:"Python",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:'gravitino_client: GravitinoClient = GravitinoClient(uri="http://localhost:8090", metalake_name="metalake")\ncatalog: Catalog = gravitino_client.load_catalog(name="test_catalog")\ncatalog.as_schemas().create_schema(name="test_schema",\n                                   comment="This is a GCS schema",\n                                   properties={"location": "gs://bucket/root/schema"})\n'})})})]}),"\n",(0,t.jsx)(a.h3,{id:"step3-create-a-fileset",children:"Step3: Create a fileset"}),"\n",(0,t.jsx)(a.p,{children:"After creating a schema, you can create a fileset. The following example shows how to create a fileset:"}),"\n",(0,t.jsxs)(s,{groupId:"language",queryString:!0,children:[(0,t.jsx)(n,{value:"shell",label:"Shell",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-shell",children:'curl -X POST -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json" -d \'{\n  "name": "example_fileset",\n  "comment": "This is an example fileset",\n  "type": "MANAGED",\n  "storageLocation": "gs://bucket/root/schema/example_fileset",\n  "properties": {\n    "k1": "v1"\n  }\n}\' http://localhost:8090/api/metalakes/metalake/catalogs/test_catalog/schemas/test_schema/filesets\n'})})}),(0,t.jsx)(n,{value:"java",label:"Java",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-java",children:'GravitinoClient gravitinoClient = GravitinoClient\n    .builder("http://localhost:8090")\n    .withMetalake("metalake")\n    .build();\n\nCatalog catalog = gravitinoClient.loadCatalog("test_catalog");\nFilesetCatalog filesetCatalog = catalog.asFilesetCatalog();\n\nMap<String, String> propertiesMap = ImmutableMap.<String, String>builder()\n        .put("k1", "v1")\n        .build();\n\nfilesetCatalog.createFileset(\n    NameIdentifier.of("test_schema", "example_fileset"),\n    "This is an example fileset",\n    Fileset.Type.MANAGED,\n    "gs://bucket/root/schema/example_fileset",\n    propertiesMap,\n);\n'})})}),(0,t.jsx)(n,{value:"python",label:"Python",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:'gravitino_client: GravitinoClient = GravitinoClient(uri="http://localhost:8090", metalake_name="metalake")\n\ncatalog: Catalog = gravitino_client.load_catalog(name="test_catalog")\ncatalog.as_fileset_catalog().create_fileset(ident=NameIdentifier.of("test_schema", "example_fileset"),\n                                            type=Fileset.Type.MANAGED,\n                                            comment="This is an example fileset",\n                                            storage_location="gs://bucket/root/schema/example_fileset",\n                                            properties={"k1": "v1"})\n'})})})]}),"\n",(0,t.jsx)(a.h2,{id:"accessing-a-fileset-with-gcs",children:"Accessing a fileset with GCS"}),"\n",(0,t.jsx)(a.h3,{id:"using-the-gvfs-java-client-to-access-the-fileset",children:"Using the GVFS Java client to access the fileset"}),"\n",(0,t.jsxs)(a.p,{children:["To access fileset with GCS using the GVFS Java client, based on the ",(0,t.jsx)(a.a,{href:"/docs/next/how-to-use-gvfs#configuration-1",children:"basic GVFS configurations"}),", you need to add the following configurations:"]}),"\n",(0,t.jsxs)(a.table,{children:[(0,t.jsx)(a.thead,{children:(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.th,{children:"Configuration item"}),(0,t.jsx)(a.th,{children:"Description"}),(0,t.jsx)(a.th,{children:"Default value"}),(0,t.jsx)(a.th,{children:"Required"}),(0,t.jsx)(a.th,{children:"Since version"})]})}),(0,t.jsx)(a.tbody,{children:(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:(0,t.jsx)(a.code,{children:"gcs-service-account-file"})}),(0,t.jsx)(a.td,{children:"The path of GCS service account JSON file."}),(0,t.jsx)(a.td,{children:"(none)"}),(0,t.jsx)(a.td,{children:"Yes"}),(0,t.jsx)(a.td,{children:"0.7.0-incubating"})]})})]}),"\n",(0,t.jsx)(a.admonition,{type:"note",children:(0,t.jsxs)(a.p,{children:["If the catalog has enabled ",(0,t.jsx)(a.a,{href:"/docs/next/security/credential-vending",children:"credential vending"}),", the properties above can be omitted. More details can be found in ",(0,t.jsx)(a.a,{href:"#fileset-with-credential-vending",children:"Fileset with credential vending"}),"."]})}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-java",children:'Configuration conf = new Configuration();\nconf.set("fs.AbstractFileSystem.gvfs.impl", "org.apache.gravitino.filesystem.hadoop.Gvfs");\nconf.set("fs.gvfs.impl", "org.apache.gravitino.filesystem.hadoop.GravitinoVirtualFileSystem");\nconf.set("fs.gravitino.server.uri", "http://localhost:8090");\nconf.set("fs.gravitino.client.metalake", "test_metalake");\nconf.set("gcs-service-account-file", "/path/your-service-account-file.json");\nPath filesetPath = new Path("gvfs://fileset/test_catalog/test_schema/test_fileset/new_dir");\nFileSystem fs = filesetPath.getFileSystem(conf);\nfs.mkdirs(filesetPath);\n...\n'})}),"\n",(0,t.jsxs)(a.p,{children:["Similar to Spark configurations, you need to add GCS (bundle) jars to the classpath according to your environment.\nIf your wants to custom your hadoop version or there is already a hadoop version in your project, you can add the following dependencies to your ",(0,t.jsx)(a.code,{children:"pom.xml"}),":"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-xml",children:"  <dependency>\n    <groupId>org.apache.hadoop</groupId>\n    <artifactId>hadoop-common</artifactId>\n    <version>${HADOOP_VERSION}</version>\n  </dependency>\n  <dependency>\n    <groupId>com.google.cloud.bigdataoss</groupId>\n    <artifactId>gcs-connector</artifactId>\n    <version>${GCS_CONNECTOR_VERSION}</version>\n  </dependency>\n  <dependency>\n    <groupId>org.apache.gravitino</groupId>\n    <artifactId>filesystem-hadoop3-runtime</artifactId>\n    <version>${GRAVITINO_VERSION}</version>\n  </dependency>\n\n  <dependency>\n    <groupId>org.apache.gravitino</groupId>\n    <artifactId>gravitino-gcp</artifactId>\n    <version>${GRAVITINO_VERSION}</version>\n  </dependency>\n"})}),"\n",(0,t.jsx)(a.p,{children:"Or use the bundle jar with Hadoop environment if there is no Hadoop environment:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-xml",children:"  <dependency>\n    <groupId>org.apache.gravitino</groupId>\n    <artifactId>gravitino-gcp-bundle</artifactId>\n    <version>${GRAVITINO_VERSION}</version>\n  </dependency>\n\n  <dependency>\n    <groupId>org.apache.gravitino</groupId>\n    <artifactId>filesystem-hadoop3-runtime</artifactId>\n    <version>${GRAVITINO_VERSION}</version>\n  </dependency>\n"})}),"\n",(0,t.jsx)(a.h3,{id:"using-spark-to-access-the-fileset",children:"Using Spark to access the fileset"}),"\n",(0,t.jsxs)(a.p,{children:["The following code snippet shows how to use ",(0,t.jsx)(a.strong,{children:"PySpark 3.1.3 with Hadoop environment(Hadoop 3.2.0)"})," to access the fileset:"]}),"\n",(0,t.jsx)(a.p,{children:"Before running the following code, you need to install required packages:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"pip install pyspark==3.1.3\npip install apache-gravitino==${GRAVITINO_VERSION}\n"})}),"\n",(0,t.jsx)(a.p,{children:"Then you can run the following code:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:'from pyspark.sql import SparkSession\nimport os\n\ngravitino_url = "http://localhost:8090"\nmetalake_name = "test"\n\ncatalog_name = "your_gcs_catalog"\nschema_name = "your_gcs_schema"\nfileset_name = "your_gcs_fileset"\n\nos.environ["PYSPARK_SUBMIT_ARGS"] = "--jars /path/to/gravitino-gcp-{gravitino-version}.jar,/path/to/gravitino-filesystem-hadoop3-runtime-{gravitino-version}.jar,/path/to/gcs-connector-hadoop3-2.2.22-shaded.jar --master local[1] pyspark-shell"\nspark = SparkSession.builder\n    .appName("gcs_fielset_test")\n    .config("spark.hadoop.fs.AbstractFileSystem.gvfs.impl", "org.apache.gravitino.filesystem.hadoop.Gvfs")\n    .config("spark.hadoop.fs.gvfs.impl", "org.apache.gravitino.filesystem.hadoop.GravitinoVirtualFileSystem")\n    .config("spark.hadoop.fs.gravitino.server.uri", "http://localhost:8090")\n    .config("spark.hadoop.fs.gravitino.client.metalake", "test_metalake")\n    .config("spark.hadoop.gcs-service-account-file", "/path/to/gcs-service-account-file.json")\n    .config("spark.driver.memory", "2g")\n    .config("spark.driver.port", "2048")\n    .getOrCreate()\n\ndata = [("Alice", 25), ("Bob", 30), ("Cathy", 45)]\ncolumns = ["Name", "Age"]\nspark_df = spark.createDataFrame(data, schema=columns)\ngvfs_path = f"gvfs://fileset/{catalog_name}/{schema_name}/{fileset_name}/people"\n\nspark_df.coalesce(1).write\n    .mode("overwrite")\n    .option("header", "true")\n    .csv(gvfs_path)\n'})}),"\n",(0,t.jsxs)(a.p,{children:["If your Spark ",(0,t.jsx)(a.strong,{children:"without Hadoop environment"}),", you can use the following code snippet to access the fileset:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:'## Replace the following code snippet with the above code snippet with the same environment variables\n\nos.environ["PYSPARK_SUBMIT_ARGS"] = "--jars /path/to/gravitino-gcp-bundle-{gravitino-version}.jar,/path/to/gravitino-filesystem-hadoop3-runtime-{gravitino-version}.jar, --master local[1] pyspark-shell"\n'})}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.a,{href:"https://mvnrepository.com/artifact/org.apache.gravitino/gravitino-gcp-bundle",children:(0,t.jsx)(a.code,{children:"gravitino-gcp-bundle-${gravitino-version}.jar"})})," is the Gravitino GCP jar with Hadoop environment(3.3.1) and ",(0,t.jsx)(a.code,{children:"gcs-connector"}),"."]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.a,{href:"https://mvnrepository.com/artifact/org.apache.gravitino/gravitino-gcp",children:(0,t.jsx)(a.code,{children:"gravitino-gcp-${gravitino-version}.jar"})})," is a condensed version of the Gravitino GCP bundle jar without Hadoop environment and ",(0,t.jsx)(a.a,{href:"https://github.com/GoogleCloudDataproc/hadoop-connectors/releases/download/v2.2.22/gcs-connector-hadoop3-2.2.22-shaded.jar",children:(0,t.jsx)(a.code,{children:"gcs-connector"})})]}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:"Please choose the correct jar according to your environment."}),"\n",(0,t.jsx)(a.admonition,{type:"note",children:(0,t.jsx)(a.p,{children:"In some Spark versions, a Hadoop environment is needed by the driver, adding the bundle jars with '--jars' may not work. If this is the case, you should add the jars to the spark CLASSPATH directly."})}),"\n",(0,t.jsx)(a.h3,{id:"accessing-a-fileset-using-the-hadoop-fs-command",children:"Accessing a fileset using the Hadoop fs command"}),"\n",(0,t.jsxs)(a.p,{children:["The following are examples of how to use the ",(0,t.jsx)(a.code,{children:"hadoop fs"})," command to access the fileset in Hadoop 3.1.3."]}),"\n",(0,t.jsxs)(a.ol,{children:["\n",(0,t.jsxs)(a.li,{children:["Adding the following contents to the ",(0,t.jsx)(a.code,{children:"${HADOOP_HOME}/etc/hadoop/core-site.xml"})," file:"]}),"\n"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-xml",children:"  <property>\n    <name>fs.AbstractFileSystem.gvfs.impl</name>\n    <value>org.apache.gravitino.filesystem.hadoop.Gvfs</value>\n  </property>\n\n  <property>\n    <name>fs.gvfs.impl</name>\n    <value>org.apache.gravitino.filesystem.hadoop.GravitinoVirtualFileSystem</value>\n  </property>\n\n  <property>\n    <name>fs.gravitino.server.uri</name>\n    <value>http://localhost:8090</value>\n  </property>\n\n  <property>\n    <name>fs.gravitino.client.metalake</name>\n    <value>test</value>\n  </property>\n\n  <property>\n    <name>gcs-service-account-file</name>\n    <value>/path/your-service-account-file.json</value>\n  </property>\n"})}),"\n",(0,t.jsxs)(a.ol,{start:"2",children:["\n",(0,t.jsx)(a.li,{children:"Add the necessary jars to the Hadoop classpath."}),"\n"]}),"\n",(0,t.jsxs)(a.p,{children:["For GCS, you need to add ",(0,t.jsx)(a.code,{children:"gravitino-filesystem-hadoop3-runtime-${gravitino-version}.jar"}),", ",(0,t.jsx)(a.code,{children:"gravitino-gcp-${gravitino-version}.jar"})," and ",(0,t.jsx)(a.a,{href:"https://github.com/GoogleCloudDataproc/hadoop-connectors/releases/download/v2.2.22/gcs-connector-hadoop3-2.2.22-shaded.jar",children:(0,t.jsx)(a.code,{children:"gcs-connector-hadoop3-2.2.22-shaded.jar"})})," to Hadoop classpath."]}),"\n",(0,t.jsxs)(a.ol,{start:"3",children:["\n",(0,t.jsx)(a.li,{children:"Run the following command to access the fileset:"}),"\n"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-shell",children:"./${HADOOP_HOME}/bin/hadoop dfs -ls gvfs://fileset/gcs_catalog/gcs_schema/gcs_example\n./${HADOOP_HOME}/bin/hadoop dfs -put /path/to/local/file gvfs://fileset/gcs_catalog/gcs_schema/gcs_example\n"})}),"\n",(0,t.jsx)(a.h3,{id:"using-the-gvfs-python-client-to-access-a-fileset",children:"Using the GVFS Python client to access a fileset"}),"\n",(0,t.jsxs)(a.p,{children:["In order to access fileset with GCS using the GVFS Python client, apart from ",(0,t.jsx)(a.a,{href:"/docs/next/how-to-use-gvfs#configuration-1",children:"basic GVFS configurations"}),", you need to add the following configurations:"]}),"\n",(0,t.jsxs)(a.table,{children:[(0,t.jsx)(a.thead,{children:(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.th,{children:"Configuration item"}),(0,t.jsx)(a.th,{children:"Description"}),(0,t.jsx)(a.th,{children:"Default value"}),(0,t.jsx)(a.th,{children:"Required"}),(0,t.jsx)(a.th,{children:"Since version"})]})}),(0,t.jsx)(a.tbody,{children:(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:(0,t.jsx)(a.code,{children:"gcs_service_account_file"})}),(0,t.jsx)(a.td,{children:"The path of GCS service account JSON file."}),(0,t.jsx)(a.td,{children:"(none)"}),(0,t.jsx)(a.td,{children:"Yes"}),(0,t.jsx)(a.td,{children:"0.7.0-incubating"})]})})]}),"\n",(0,t.jsx)(a.admonition,{type:"note",children:(0,t.jsxs)(a.p,{children:["If the catalog has enabled ",(0,t.jsx)(a.a,{href:"/docs/next/security/credential-vending",children:"credential vending"}),", the properties above can be omitted."]})}),"\n",(0,t.jsxs)(a.p,{children:["Please install the ",(0,t.jsx)(a.code,{children:"gravitino"})," package before running the following code:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"pip install apache-gravitino==${GRAVITINO_VERSION}\n"})}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:'from gravitino import gvfs\noptions = {\n    "cache_size": 20,\n    "cache_expired_time": 3600,\n    "auth_type": "simple",\n    "gcs_service_account_file": "path_of_gcs_service_account_file.json",\n}\nfs = gvfs.GravitinoVirtualFileSystem(server_uri="http://localhost:8090", metalake_name="test_metalake", options=options)\nfs.ls("gvfs://fileset/{catalog_name}/{schema_name}/{fileset_name}/")\n'})}),"\n",(0,t.jsx)(a.h3,{id:"using-fileset-with-pandas",children:"Using fileset with pandas"}),"\n",(0,t.jsx)(a.p,{children:"The following are examples of how to use the pandas library to access the GCS fileset"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:'import pandas as pd\n\nstorage_options = {\n    "server_uri": "http://localhost:8090", \n    "metalake_name": "test",\n    "options": {\n        "gcs_service_account_file": "path_of_gcs_service_account_file.json",\n    }\n}\nds = pd.read_csv(f"gvfs://fileset/${catalog_name}/${schema_name}/${fileset_name}/people/part-00000-51d366e2-d5eb-448d-9109-32a96c8a14dc-c000.csv",\n                 storage_options=storage_options)\nds.head()\n'})}),"\n",(0,t.jsxs)(a.p,{children:["For other use cases, please refer to the ",(0,t.jsx)(a.a,{href:"/docs/next/how-to-use-gvfs",children:"Gravitino Virtual File System"})," document."]}),"\n",(0,t.jsx)(a.h2,{id:"fileset-with-credential-vending",children:"Fileset with credential vending"}),"\n",(0,t.jsxs)(a.p,{children:["Since 0.8.0-incubating, Gravitino supports credential vending for GCS fileset. If the catalog has been ",(0,t.jsx)(a.a,{href:"/docs/next/security/credential-vending",children:"configured with credential"}),", you can access GCS fileset without providing authentication information like ",(0,t.jsx)(a.code,{children:"gcs-service-account-file"})," in the properties."]}),"\n",(0,t.jsx)(a.h3,{id:"how-to-create-a-gcs-hadoop-catalog-with-credential-vending",children:"How to create a GCS Hadoop catalog with credential vending"}),"\n",(0,t.jsxs)(a.p,{children:["Apart from configuration method in ",(0,t.jsx)(a.a,{href:"#configurations-for-a-gcs-hadoop-catalog",children:"create-gcs-hadoop-catalog"}),", properties needed by ",(0,t.jsx)(a.a,{href:"/docs/next/security/credential-vending#gcs-credentials",children:"gcs-credential"})," should also be set to enable credential vending for GCS fileset. Take ",(0,t.jsx)(a.code,{children:"gcs-token"})," credential provider for example:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-shell",children:'curl -X POST -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json" -d \'{\n  "name": "gcs-catalog-with-token",\n  "type": "FILESET",\n  "comment": "This is a GCS fileset catalog",\n  "provider": "hadoop",\n  "properties": {\n    "location": "gs://bucket/root",\n    "gcs-service-account-file": "path_of_gcs_service_account_file",\n    "filesystem-providers": "gcs",\n    "credential-providers": "gcs-token"\n  }\n}\' http://localhost:8090/api/metalakes/metalake/catalogs\n'})}),"\n",(0,t.jsx)(a.h3,{id:"how-to-access-gcs-fileset-with-credential-vending",children:"How to access GCS fileset with credential vending"}),"\n",(0,t.jsx)(a.p,{children:"If the catalog has been configured with credential, you can access GCS fileset without providing authentication information via GVFS Java/Python client and Spark. Let's see how to access GCS fileset with credential:"}),"\n",(0,t.jsx)(a.p,{children:"GVFS Java client:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-java",children:'Configuration conf = new Configuration();\nconf.set("fs.AbstractFileSystem.gvfs.impl", "org.apache.gravitino.filesystem.hadoop.Gvfs");\nconf.set("fs.gvfs.impl", "org.apache.gravitino.filesystem.hadoop.GravitinoVirtualFileSystem");\nconf.set("fs.gravitino.server.uri", "http://localhost:8090");\nconf.set("fs.gravitino.client.metalake", "test_metalake");\n// No need to set gcs-service-account-file\nPath filesetPath = new Path("gvfs://fileset/gcs_test_catalog/test_schema/test_fileset/new_dir");\nFileSystem fs = filesetPath.getFileSystem(conf);\nfs.mkdirs(filesetPath);\n...\n'})}),"\n",(0,t.jsx)(a.p,{children:"Spark:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:'spark = SparkSession.builder\n    .appName("gcs_fileset_test")\n    .config("spark.hadoop.fs.AbstractFileSystem.gvfs.impl", "org.apache.gravitino.filesystem.hadoop.Gvfs")\n    .config("spark.hadoop.fs.gvfs.impl", "org.apache.gravitino.filesystem.hadoop.GravitinoVirtualFileSystem")\n    .config("spark.hadoop.fs.gravitino.server.uri", "http://localhost:8090")\n    .config("spark.hadoop.fs.gravitino.client.metalake", "test")\n    # No need to set gcs-service-account-file\n    .config("spark.driver.memory", "2g")\n    .config("spark.driver.port", "2048")\n    .getOrCreate()\n'})}),"\n",(0,t.jsx)(a.p,{children:"Python client and Hadoop command are similar to the above examples."})]})}function h(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}function p(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);