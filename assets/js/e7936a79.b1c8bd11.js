"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[85732],{36353:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var s=t(13274),n=t(38389);const r={title:"Hadoop catalog",slug:"/hadoop-catalog",date:"2024-4-2",keyword:"hadoop catalog",license:"This software is licensed under the Apache License version 2."},l=void 0,o={id:"hadoop-catalog",title:"Hadoop catalog",description:"Introduction",source:"@site/docs/hadoop-catalog.md",sourceDirName:".",slug:"/hadoop-catalog",permalink:"/docs/next/hadoop-catalog",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/hadoop-catalog.md",tags:[],version:"current",lastUpdatedBy:"FANNG",lastUpdatedAt:1737701155e3,frontMatter:{title:"Hadoop catalog",slug:"/hadoop-catalog",date:"2024-4-2",keyword:"hadoop catalog",license:"This software is licensed under the Apache License version 2."},sidebar:"docs",previous:{title:"OceanBase catalog",permalink:"/docs/next/jdbc-oceanbase-catalog"},next:{title:"Kafka catalog",permalink:"/docs/next/kafka-catalog"}},d={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Catalog",id:"catalog",level:2},{value:"Catalog properties",id:"catalog-properties",level:3},{value:"HDFS fileset",id:"hdfs-fileset",level:4},{value:"S3 fileset",id:"s3-fileset",level:4},{value:"GCS fileset",id:"gcs-fileset",level:4},{value:"OSS fileset",id:"oss-fileset",level:4},{value:"How to custom your own HCFS file system fileset?",id:"how-to-custom-your-own-hcfs-file-system-fileset",level:4},{value:"Authentication for Hadoop Catalog",id:"authentication-for-hadoop-catalog",level:3},{value:"Catalog operations",id:"catalog-operations",level:3},{value:"Schema",id:"schema",level:2},{value:"Schema capabilities",id:"schema-capabilities",level:3},{value:"Schema properties",id:"schema-properties",level:3},{value:"Schema operations",id:"schema-operations",level:3},{value:"Fileset",id:"fileset",level:2},{value:"Fileset capabilities",id:"fileset-capabilities",level:3},{value:"Fileset properties",id:"fileset-properties",level:3},{value:"Fileset operations",id:"fileset-operations",level:3}];function a(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsxs)(i.p,{children:["Hadoop catalog is a fileset catalog that using Hadoop Compatible File System (HCFS) to manage\nthe storage location of the fileset. Currently, it supports local filesystem and HDFS. For\nobject storage like S3, GCS, and Azure Blob Storage, you can put the hadoop object store jar like\nhadoop-aws into the ",(0,s.jsx)(i.code,{children:"$GRAVITINO_HOME/catalogs/hadoop/libs"})," directory to enable the support.\nGravitino itself hasn't yet tested the object storage support, so if you have any issue,\nplease create an ",(0,s.jsx)(i.a,{href:"https://github.com/apache/gravitino/issues",children:"issue"}),"."]}),"\n",(0,s.jsxs)(i.p,{children:["Note that Gravitino uses Hadoop 3 dependencies to build Hadoop catalog. Theoretically, it should be\ncompatible with both Hadoop 2.x and 3.x, since Gravitino doesn't leverage any new features in\nHadoop 3. If there's any compatibility issue, please create an ",(0,s.jsx)(i.a,{href:"https://github.com/apache/gravitino/issues",children:"issue"}),"."]}),"\n",(0,s.jsx)(i.h2,{id:"catalog",children:"Catalog"}),"\n",(0,s.jsx)(i.h3,{id:"catalog-properties",children:"Catalog properties"}),"\n",(0,s.jsxs)(i.p,{children:["Besides the ",(0,s.jsx)(i.a,{href:"/docs/next/gravitino-server-config#gravitino-catalog-properties-configuration",children:"common catalog properties"}),", the Hadoop catalog has the following properties:"]}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Property Name"}),(0,s.jsx)(i.th,{children:"Description"}),(0,s.jsx)(i.th,{children:"Default Value"}),(0,s.jsx)(i.th,{children:"Required"}),(0,s.jsx)(i.th,{children:"Since Version"})]})}),(0,s.jsx)(i.tbody,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"location"})}),(0,s.jsx)(i.td,{children:"The storage location managed by Hadoop catalog."}),(0,s.jsx)(i.td,{children:"(none)"}),(0,s.jsx)(i.td,{children:"No"}),(0,s.jsx)(i.td,{children:"0.5.0"})]})})]}),"\n",(0,s.jsx)(i.p,{children:"Apart from the above properties, to access fileset like HDFS, S3, GCS, OSS or custom fileset, you need to configure the following extra properties."}),"\n",(0,s.jsx)(i.h4,{id:"hdfs-fileset",children:"HDFS fileset"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Property Name"}),(0,s.jsx)(i.th,{children:"Description"}),(0,s.jsx)(i.th,{children:"Default Value"}),(0,s.jsx)(i.th,{children:"Required"}),(0,s.jsx)(i.th,{children:"Since Version"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"authentication.impersonation-enable"})}),(0,s.jsx)(i.td,{children:"Whether to enable impersonation for the Hadoop catalog."}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"false"})}),(0,s.jsx)(i.td,{children:"No"}),(0,s.jsx)(i.td,{children:"0.5.1"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"authentication.type"})}),(0,s.jsxs)(i.td,{children:["The type of authentication for Hadoop catalog, currently we only support ",(0,s.jsx)(i.code,{children:"kerberos"}),", ",(0,s.jsx)(i.code,{children:"simple"}),"."]}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"simple"})}),(0,s.jsx)(i.td,{children:"No"}),(0,s.jsx)(i.td,{children:"0.5.1"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"authentication.kerberos.principal"})}),(0,s.jsx)(i.td,{children:"The principal of the Kerberos authentication"}),(0,s.jsx)(i.td,{children:"(none)"}),(0,s.jsxs)(i.td,{children:["required if the value of ",(0,s.jsx)(i.code,{children:"authentication.type"})," is Kerberos."]}),(0,s.jsx)(i.td,{children:"0.5.1"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"authentication.kerberos.keytab-uri"})}),(0,s.jsx)(i.td,{children:"The URI of The keytab for the Kerberos authentication."}),(0,s.jsx)(i.td,{children:"(none)"}),(0,s.jsxs)(i.td,{children:["required if the value of ",(0,s.jsx)(i.code,{children:"authentication.type"})," is Kerberos."]}),(0,s.jsx)(i.td,{children:"0.5.1"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"authentication.kerberos.check-interval-sec"})}),(0,s.jsx)(i.td,{children:"The check interval of Kerberos credential for Hadoop catalog."}),(0,s.jsx)(i.td,{children:"60"}),(0,s.jsx)(i.td,{children:"No"}),(0,s.jsx)(i.td,{children:"0.5.1"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"authentication.kerberos.keytab-fetch-timeout-sec"})}),(0,s.jsxs)(i.td,{children:["The fetch timeout of retrieving Kerberos keytab from ",(0,s.jsx)(i.code,{children:"authentication.kerberos.keytab-uri"}),"."]}),(0,s.jsx)(i.td,{children:"60"}),(0,s.jsx)(i.td,{children:"No"}),(0,s.jsx)(i.td,{children:"0.5.1"})]})]})]}),"\n",(0,s.jsx)(i.h4,{id:"s3-fileset",children:"S3 fileset"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Configuration item"}),(0,s.jsx)(i.th,{children:"Description"}),(0,s.jsx)(i.th,{children:"Default value"}),(0,s.jsx)(i.th,{children:"Required"}),(0,s.jsx)(i.th,{children:"Since version"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"filesystem-providers"})}),(0,s.jsxs)(i.td,{children:["The file system providers to add. Set it to ",(0,s.jsx)(i.code,{children:"s3"})," if it's a S3 fileset, or a comma separated string that contains ",(0,s.jsx)(i.code,{children:"s3"})," like ",(0,s.jsx)(i.code,{children:"gs,s3"})," to support multiple kinds of fileset including ",(0,s.jsx)(i.code,{children:"s3"}),"."]}),(0,s.jsx)(i.td,{children:"(none)"}),(0,s.jsx)(i.td,{children:"Yes"}),(0,s.jsx)(i.td,{children:"0.7.0-incubating"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"default-filesystem-provider"})}),(0,s.jsxs)(i.td,{children:["The name default filesystem providers of this Hadoop catalog if users do not specify the scheme in the URI. Default value is ",(0,s.jsx)(i.code,{children:"builtin-local"}),", for S3, if we set this value, we can omit the prefix 's3a://' in the location."]}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"builtin-local"})}),(0,s.jsx)(i.td,{children:"No"}),(0,s.jsx)(i.td,{children:"0.7.0-incubating"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"s3-endpoint"})}),(0,s.jsx)(i.td,{children:"The endpoint of the AWS S3."}),(0,s.jsx)(i.td,{children:"(none)"}),(0,s.jsx)(i.td,{children:"Yes if it's a S3 fileset."}),(0,s.jsx)(i.td,{children:"0.7.0-incubating"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"s3-access-key-id"})}),(0,s.jsx)(i.td,{children:"The access key of the AWS S3."}),(0,s.jsx)(i.td,{children:"(none)"}),(0,s.jsx)(i.td,{children:"Yes if it's a S3 fileset."}),(0,s.jsx)(i.td,{children:"0.7.0-incubating"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"s3-secret-access-key"})}),(0,s.jsx)(i.td,{children:"The secret key of the AWS S3."}),(0,s.jsx)(i.td,{children:"(none)"}),(0,s.jsx)(i.td,{children:"Yes if it's a S3 fileset."}),(0,s.jsx)(i.td,{children:"0.7.0-incubating"})]})]})]}),"\n",(0,s.jsxs)(i.p,{children:["At the same time, you need to place the corresponding bundle jar ",(0,s.jsx)(i.a,{href:"https://repo1.maven.org/maven2/org/apache/gravitino/aws-bundle/",children:(0,s.jsx)(i.code,{children:"gravitino-aws-bundle-${version}.jar"})})," in the directory ",(0,s.jsx)(i.code,{children:"${GRAVITINO_HOME}/catalogs/hadoop/libs"}),"."]}),"\n",(0,s.jsx)(i.h4,{id:"gcs-fileset",children:"GCS fileset"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Configuration item"}),(0,s.jsx)(i.th,{children:"Description"}),(0,s.jsx)(i.th,{children:"Default value"}),(0,s.jsx)(i.th,{children:"Required"}),(0,s.jsx)(i.th,{children:"Since version"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"filesystem-providers"})}),(0,s.jsxs)(i.td,{children:["The file system providers to add. Set it to ",(0,s.jsx)(i.code,{children:"gs"})," if it's a GCS fileset, a comma separated string that contains ",(0,s.jsx)(i.code,{children:"gs"})," like ",(0,s.jsx)(i.code,{children:"gs,s3"})," to support multiple kinds of fileset including ",(0,s.jsx)(i.code,{children:"gs"}),"."]}),(0,s.jsx)(i.td,{children:"(none)"}),(0,s.jsx)(i.td,{children:"Yes"}),(0,s.jsx)(i.td,{children:"0.7.0-incubating"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"default-filesystem-provider"})}),(0,s.jsxs)(i.td,{children:["The name default filesystem providers of this Hadoop catalog if users do not specify the scheme in the URI. Default value is ",(0,s.jsx)(i.code,{children:"builtin-local"}),", for GCS, if we set this value, we can omit the prefix 'gs://' in the location."]}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"builtin-local"})}),(0,s.jsx)(i.td,{children:"No"}),(0,s.jsx)(i.td,{children:"0.7.0-incubating"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"gcs-service-account-file"})}),(0,s.jsx)(i.td,{children:"The path of GCS service account JSON file."}),(0,s.jsx)(i.td,{children:"(none)"}),(0,s.jsx)(i.td,{children:"Yes if it's a GCS fileset."}),(0,s.jsx)(i.td,{children:"0.7.0-incubating"})]})]})]}),"\n",(0,s.jsxs)(i.p,{children:["In the meantime, you need to place the corresponding bundle jar ",(0,s.jsx)(i.a,{href:"https://repo1.maven.org/maven2/org/apache/gravitino/gcp-bundle/",children:(0,s.jsx)(i.code,{children:"gravitino-gcp-bundle-${version}.jar"})})," in the directory ",(0,s.jsx)(i.code,{children:"${GRAVITINO_HOME}/catalogs/hadoop/libs"}),"."]}),"\n",(0,s.jsx)(i.h4,{id:"oss-fileset",children:"OSS fileset"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Configuration item"}),(0,s.jsx)(i.th,{children:"Description"}),(0,s.jsx)(i.th,{children:"Default value"}),(0,s.jsx)(i.th,{children:"Required"}),(0,s.jsx)(i.th,{children:"Since version"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"filesystem-providers"})}),(0,s.jsxs)(i.td,{children:["The file system providers to add. Set it to ",(0,s.jsx)(i.code,{children:"oss"})," if it's a OSS fileset, or a comma separated string that contains ",(0,s.jsx)(i.code,{children:"oss"})," like ",(0,s.jsx)(i.code,{children:"oss,gs,s3"})," to support multiple kinds of fileset including ",(0,s.jsx)(i.code,{children:"oss"}),"."]}),(0,s.jsx)(i.td,{children:"(none)"}),(0,s.jsx)(i.td,{children:"Yes"}),(0,s.jsx)(i.td,{children:"0.7.0-incubating"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"default-filesystem-provider"})}),(0,s.jsxs)(i.td,{children:["The name default filesystem providers of this Hadoop catalog if users do not specify the scheme in the URI. Default value is ",(0,s.jsx)(i.code,{children:"builtin-local"}),", for OSS, if we set this value, we can omit the prefix 'oss://' in the location."]}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"builtin-local"})}),(0,s.jsx)(i.td,{children:"No"}),(0,s.jsx)(i.td,{children:"0.7.0-incubating"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"oss-endpoint"})}),(0,s.jsx)(i.td,{children:"The endpoint of the Aliyun OSS."}),(0,s.jsx)(i.td,{children:"(none)"}),(0,s.jsx)(i.td,{children:"Yes if it's a OSS fileset."}),(0,s.jsx)(i.td,{children:"0.7.0-incubating"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"oss-access-key-id"})}),(0,s.jsx)(i.td,{children:"The access key of the Aliyun OSS."}),(0,s.jsx)(i.td,{children:"(none)"}),(0,s.jsx)(i.td,{children:"Yes if it's a OSS fileset."}),(0,s.jsx)(i.td,{children:"0.7.0-incubating"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"oss-secret-access-key"})}),(0,s.jsx)(i.td,{children:"The secret key of the Aliyun OSS."}),(0,s.jsx)(i.td,{children:"(none)"}),(0,s.jsx)(i.td,{children:"Yes if it's a OSS fileset."}),(0,s.jsx)(i.td,{children:"0.7.0-incubating"})]})]})]}),"\n",(0,s.jsxs)(i.p,{children:["In the meantime, you need to place the corresponding bundle jar ",(0,s.jsx)(i.a,{href:"https://repo1.maven.org/maven2/org/apache/gravitino/aliyun-bundle/",children:(0,s.jsx)(i.code,{children:"gravitino-aliyun-bundle-${version}.jar"})})," in the directory ",(0,s.jsx)(i.code,{children:"${GRAVITINO_HOME}/catalogs/hadoop/libs"}),"."]}),"\n",(0,s.jsx)(i.admonition,{type:"note",children:(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Gravitino contains builtin file system providers for local file system(",(0,s.jsx)(i.code,{children:"builtin-local"}),") and HDFS(",(0,s.jsx)(i.code,{children:"builtin-hdfs"}),"), that is to say if ",(0,s.jsx)(i.code,{children:"filesystem-providers"})," is not set, Gravitino will still support local file system and HDFS. Apart from that, you can set the ",(0,s.jsx)(i.code,{children:"filesystem-providers"})," to support other file systems like S3, GCS, OSS or custom file system."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"default-filesystem-provider"})," is used to set the default file system provider for the Hadoop catalog. If the user does not specify the scheme in the URI, Gravitino will use the default file system provider to access the fileset. For example, if the default file system provider is set to ",(0,s.jsx)(i.code,{children:"builtin-local"}),", the user can omit the prefix ",(0,s.jsx)(i.code,{children:"file://"})," in the location."]}),"\n"]})}),"\n",(0,s.jsx)(i.h4,{id:"how-to-custom-your-own-hcfs-file-system-fileset",children:"How to custom your own HCFS file system fileset?"}),"\n",(0,s.jsxs)(i.p,{children:["Developers and users can custom their own HCFS file system fileset by implementing the ",(0,s.jsx)(i.code,{children:"FileSystemProvider"})," interface in the jar ",(0,s.jsx)(i.a,{href:"https://repo1.maven.org/maven2/org/apache/gravitino/catalog-hadoop/",children:"gravitino-catalog-hadoop"}),". The ",(0,s.jsx)(i.code,{children:"FileSystemProvider"})," interface is defined as follows:"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-java",children:"  \n  // Create a FileSystem instance by the properties you have set when creating the catalog. \n  FileSystem getFileSystem(@Nonnull Path path, @Nonnull Map<String, String> config)\n      throws IOException;\n  \n  // The schema name of the file system provider. 'file' for Local file system,\n  // 'hdfs' for HDFS, 's3a' for AWS S3, 'gs' for GCS, 'oss' for Aliyun OSS. \n  String scheme();\n\n  // Name of the file system provider. 'builtin-local' for Local file system, 'builtin-hdfs' for HDFS, \n  // 's3' for AWS S3, 'gcs' for GCS, 'oss' for Aliyun OSS.\n  // You need to set catalog properties `filesystem-providers` to support this file system.\n  String name();\n"})}),"\n",(0,s.jsxs)(i.p,{children:["In the meantime, ",(0,s.jsx)(i.code,{children:"FileSystemProvider"})," uses Java SPI to load the custom file system provider. You need to create a file named ",(0,s.jsx)(i.code,{children:"org.apache.gravitino.catalog.fs.FileSystemProvider"})," in the ",(0,s.jsx)(i.code,{children:"META-INF/services"})," directory of the jar file. The content of the file is the full class name of the custom file system provider.\nFor example, the content of ",(0,s.jsx)(i.code,{children:"S3FileSystemProvider"})," is as follows:\n",(0,s.jsx)(i.img,{alt:"img.png",src:t(44492).A+"",width:"1770",height:"921"})]}),"\n",(0,s.jsxs)(i.p,{children:["After implementing the ",(0,s.jsx)(i.code,{children:"FileSystemProvider"})," interface, you need to put the jar file into the ",(0,s.jsx)(i.code,{children:"$GRAVITINO_HOME/catalogs/hadoop/libs"})," directory. Then you can set the ",(0,s.jsx)(i.code,{children:"filesystem-providers"})," property to use your custom file system provider."]}),"\n",(0,s.jsx)(i.h3,{id:"authentication-for-hadoop-catalog",children:"Authentication for Hadoop Catalog"}),"\n",(0,s.jsx)(i.p,{children:"The Hadoop catalog supports multi-level authentication to control access, allowing different authentication settings for the catalog, schema, and fileset. The priority of authentication settings is as follows: catalog < schema < fileset. Specifically:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Catalog"}),": The default authentication is ",(0,s.jsx)(i.code,{children:"simple"}),"."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Schema"}),": Inherits the authentication setting from the catalog if not explicitly set. For more information about schema settings, please refer to ",(0,s.jsx)(i.a,{href:"#schema-properties",children:"Schema properties"}),"."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Fileset"}),": Inherits the authentication setting from the schema if not explicitly set. For more information about fileset settings, please refer to ",(0,s.jsx)(i.a,{href:"#fileset-properties",children:"Fileset properties"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["The default value of ",(0,s.jsx)(i.code,{children:"authentication.impersonation-enable"})," is false, and the default value for catalogs about this configuration is false, for\nschemas and filesets, the default value is inherited from the parent. Value set by the user will override the parent value, and the priority mechanism is the same as authentication."]}),"\n",(0,s.jsx)(i.h3,{id:"catalog-operations",children:"Catalog operations"}),"\n",(0,s.jsxs)(i.p,{children:["Refer to ",(0,s.jsx)(i.a,{href:"/docs/next/manage-fileset-metadata-using-gravitino#catalog-operations",children:"Catalog operations"})," for more details."]}),"\n",(0,s.jsx)(i.h2,{id:"schema",children:"Schema"}),"\n",(0,s.jsx)(i.h3,{id:"schema-capabilities",children:"Schema capabilities"}),"\n",(0,s.jsx)(i.p,{children:"The Hadoop catalog supports creating, updating, deleting, and listing schema."}),"\n",(0,s.jsx)(i.h3,{id:"schema-properties",children:"Schema properties"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Property name"}),(0,s.jsx)(i.th,{children:"Description"}),(0,s.jsx)(i.th,{children:"Default value"}),(0,s.jsx)(i.th,{children:"Required"}),(0,s.jsx)(i.th,{children:"Since Version"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"location"})}),(0,s.jsx)(i.td,{children:"The storage location managed by Hadoop schema."}),(0,s.jsx)(i.td,{children:"(none)"}),(0,s.jsx)(i.td,{children:"No"}),(0,s.jsx)(i.td,{children:"0.5.0"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"authentication.impersonation-enable"})}),(0,s.jsx)(i.td,{children:"Whether to enable impersonation for this schema of the Hadoop catalog."}),(0,s.jsx)(i.td,{children:"The parent(catalog) value"}),(0,s.jsx)(i.td,{children:"No"}),(0,s.jsx)(i.td,{children:"0.6.0-incubating"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"authentication.type"})}),(0,s.jsxs)(i.td,{children:["The type of authentication for this schema of Hadoop catalog , currently we only support ",(0,s.jsx)(i.code,{children:"kerberos"}),", ",(0,s.jsx)(i.code,{children:"simple"}),"."]}),(0,s.jsx)(i.td,{children:"The parent(catalog) value"}),(0,s.jsx)(i.td,{children:"No"}),(0,s.jsx)(i.td,{children:"0.6.0-incubating"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"authentication.kerberos.principal"})}),(0,s.jsx)(i.td,{children:"The principal of the Kerberos authentication for this schema."}),(0,s.jsx)(i.td,{children:"The parent(catalog) value"}),(0,s.jsx)(i.td,{children:"No"}),(0,s.jsx)(i.td,{children:"0.6.0-incubating"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"authentication.kerberos.keytab-uri"})}),(0,s.jsx)(i.td,{children:"The URI of The keytab for the Kerberos authentication for this scheam."}),(0,s.jsx)(i.td,{children:"The parent(catalog) value"}),(0,s.jsx)(i.td,{children:"No"}),(0,s.jsx)(i.td,{children:"0.6.0-incubating"})]})]})]}),"\n",(0,s.jsx)(i.h3,{id:"schema-operations",children:"Schema operations"}),"\n",(0,s.jsxs)(i.p,{children:["Refer to ",(0,s.jsx)(i.a,{href:"/docs/next/manage-fileset-metadata-using-gravitino#schema-operations",children:"Schema operation"})," for more details."]}),"\n",(0,s.jsx)(i.h2,{id:"fileset",children:"Fileset"}),"\n",(0,s.jsx)(i.h3,{id:"fileset-capabilities",children:"Fileset capabilities"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"The Hadoop catalog supports creating, updating, deleting, and listing filesets."}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"fileset-properties",children:"Fileset properties"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Property name"}),(0,s.jsx)(i.th,{children:"Description"}),(0,s.jsx)(i.th,{children:"Default value"}),(0,s.jsx)(i.th,{children:"Required"}),(0,s.jsx)(i.th,{children:"Since Version"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"authentication.impersonation-enable"})}),(0,s.jsx)(i.td,{children:"Whether to enable impersonation for the Hadoop catalog fileset."}),(0,s.jsx)(i.td,{children:"The parent(schema) value"}),(0,s.jsx)(i.td,{children:"No"}),(0,s.jsx)(i.td,{children:"0.6.0-incubating"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"authentication.type"})}),(0,s.jsxs)(i.td,{children:["The type of authentication for Hadoop catalog fileset, currently we only support ",(0,s.jsx)(i.code,{children:"kerberos"}),", ",(0,s.jsx)(i.code,{children:"simple"}),"."]}),(0,s.jsx)(i.td,{children:"The parent(schema) value"}),(0,s.jsx)(i.td,{children:"No"}),(0,s.jsx)(i.td,{children:"0.6.0-incubating"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"authentication.kerberos.principal"})}),(0,s.jsx)(i.td,{children:"The principal of the Kerberos authentication for the fileset."}),(0,s.jsx)(i.td,{children:"The parent(schema) value"}),(0,s.jsx)(i.td,{children:"No"}),(0,s.jsx)(i.td,{children:"0.6.0-incubating"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"authentication.kerberos.keytab-uri"})}),(0,s.jsx)(i.td,{children:"The URI of The keytab for the Kerberos authentication for the fileset."}),(0,s.jsx)(i.td,{children:"The parent(schema) value"}),(0,s.jsx)(i.td,{children:"No"}),(0,s.jsx)(i.td,{children:"0.6.0-incubating"})]})]})]}),"\n",(0,s.jsx)(i.h3,{id:"fileset-operations",children:"Fileset operations"}),"\n",(0,s.jsxs)(i.p,{children:["Refer to ",(0,s.jsx)(i.a,{href:"/docs/next/manage-fileset-metadata-using-gravitino#fileset-operations",children:"Fileset operations"})," for more details."]})]})}function h(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},44492:(e,i,t)=>{t.d(i,{A:()=>s});const s=t.p+"assets/images/custom-filesystem-provider-8a2b41ed39173dedb4328d9bf78be13c.png"}}]);