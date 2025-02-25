"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[1480],{17014:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>a});var s=i(79474);const n={},o=s.createContext(n);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(o.Provider,{value:t},e.children)}},32519:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/custom-filesystem-provider-8a2b41ed39173dedb4328d9bf78be13c.png"},84934:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var s=i(13274),n=i(17014);const o={title:"Hadoop catalog",slug:"/hadoop-catalog",date:"2024-4-2",keyword:"hadoop catalog",license:"This software is licensed under the Apache License version 2."},r=void 0,a={id:"hadoop-catalog",title:"Hadoop catalog",description:"Introduction",source:"@site/versioned_docs/version-0.8.0-incubating/hadoop-catalog.md",sourceDirName:".",slug:"/hadoop-catalog",permalink:"/docs/0.8.0-incubating/hadoop-catalog",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/hadoop-catalog.md",tags:[],version:"0.8.0-incubating",lastUpdatedBy:"Justin Mclean",lastUpdatedAt:1740469354e3,frontMatter:{title:"Hadoop catalog",slug:"/hadoop-catalog",date:"2024-4-2",keyword:"hadoop catalog",license:"This software is licensed under the Apache License version 2."},sidebar:"docs",previous:{title:"Hadoop catalog index",permalink:"/docs/0.8.0-incubating/hadoop-catalog-index"},next:{title:"Hadoop catalog with s3",permalink:"/docs/0.8.0-incubating/hadoop-catalog-with-s3"}},l={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Catalog",id:"catalog",level:2},{value:"Catalog properties",id:"catalog-properties",level:3},{value:"HDFS fileset",id:"hdfs-fileset",level:3},{value:"Hadoop catalog with Cloud Storage",id:"hadoop-catalog-with-cloud-storage",level:3},{value:"How to custom your own HCFS file system fileset?",id:"how-to-custom-your-own-hcfs-file-system-fileset",level:3},{value:"Authentication for Hadoop Catalog",id:"authentication-for-hadoop-catalog",level:3},{value:"Catalog operations",id:"catalog-operations",level:3},{value:"Schema",id:"schema",level:2},{value:"Schema capabilities",id:"schema-capabilities",level:3},{value:"Schema properties",id:"schema-properties",level:3},{value:"Schema operations",id:"schema-operations",level:3},{value:"Fileset",id:"fileset",level:2},{value:"Fileset capabilities",id:"fileset-capabilities",level:3},{value:"Fileset properties",id:"fileset-properties",level:3},{value:"Fileset operations",id:"fileset-operations",level:3}];function c(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsxs)(t.p,{children:["Hadoop catalog is a fileset catalog that using Hadoop Compatible File System (HCFS) to manage\nthe storage location of the fileset. Currently, it supports the local filesystem and HDFS. Since 0.7.0-incubating, Gravitino supports ",(0,s.jsx)(t.a,{href:"/docs/0.8.0-incubating/hadoop-catalog-with-s3",children:"S3"}),", ",(0,s.jsx)(t.a,{href:"/docs/0.8.0-incubating/hadoop-catalog-with-gcs",children:"GCS"}),", ",(0,s.jsx)(t.a,{href:"/docs/0.8.0-incubating/hadoop-catalog-with-oss",children:"OSS"})," and ",(0,s.jsx)(t.a,{href:"/docs/0.8.0-incubating/hadoop-catalog-with-adls",children:"Azure Blob Storage"})," through Hadoop catalog."]}),"\n",(0,s.jsx)(t.p,{children:"The rest of this document will use HDFS or local file as an example to illustrate how to use the Hadoop catalog. For S3, GCS, OSS and Azure Blob Storage, the configuration is similar to HDFS, please refer to the corresponding document for more details."}),"\n",(0,s.jsxs)(t.p,{children:["Note that Gravitino uses Hadoop 3 dependencies to build Hadoop catalog. Theoretically, it should be\ncompatible with both Hadoop 2.x and 3.x, since Gravitino doesn't leverage any new features in\nHadoop 3. If there's any compatibility issue, please create an ",(0,s.jsx)(t.a,{href:"https://github.com/apache/gravitino/issues",children:"issue"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"catalog",children:"Catalog"}),"\n",(0,s.jsx)(t.h3,{id:"catalog-properties",children:"Catalog properties"}),"\n",(0,s.jsxs)(t.p,{children:["Besides the ",(0,s.jsx)(t.a,{href:"/docs/0.8.0-incubating/gravitino-server-config#apache-gravitino-catalog-properties-configuration",children:"common catalog properties"}),", the Hadoop catalog has the following properties:"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Property Name"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default Value"}),(0,s.jsx)(t.th,{children:"Required"}),(0,s.jsx)(t.th,{children:"Since Version"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"location"})}),(0,s.jsx)(t.td,{children:"The storage location managed by Hadoop catalog."}),(0,s.jsx)(t.td,{children:"(none)"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"0.5.0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"default-filesystem-provider"})}),(0,s.jsxs)(t.td,{children:["The default filesystem provider of this Hadoop catalog if users do not specify the scheme in the URI. Candidate values are 'builtin-local', 'builtin-hdfs', 's3', 'gcs', 'abs' and 'oss'. Default value is ",(0,s.jsx)(t.code,{children:"builtin-local"}),". For S3, if we set this value to 's3', we can omit the prefix 's3a://' in the location."]}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"builtin-local"})}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"0.7.0-incubating"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"filesystem-providers"})}),(0,s.jsxs)(t.td,{children:["The file system providers to add. Users needs to set this configuration to support cloud storage or custom HCFS. For instance, set it to ",(0,s.jsx)(t.code,{children:"s3"})," or a comma separated string that contains ",(0,s.jsx)(t.code,{children:"s3"})," like ",(0,s.jsx)(t.code,{children:"gs,s3"})," to support multiple kinds of fileset including ",(0,s.jsx)(t.code,{children:"s3"}),"."]}),(0,s.jsx)(t.td,{children:"(none)"}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsx)(t.td,{children:"0.7.0-incubating"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"credential-providers"})}),(0,s.jsx)(t.td,{children:"The credential provider types, separated by comma."}),(0,s.jsx)(t.td,{children:"(none)"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"0.8.0-incubating"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"filesystem-conn-timeout-secs"})}),(0,s.jsx)(t.td,{children:"The timeout of getting the file system using Hadoop FileSystem client instance. Time unit: seconds."}),(0,s.jsx)(t.td,{children:"6"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"0.8.0-incubating"})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:["Please refer to ",(0,s.jsx)(t.a,{href:"/docs/0.8.0-incubating/security/credential-vending",children:"Credential vending"})," for more details about credential vending."]}),"\n",(0,s.jsx)(t.h3,{id:"hdfs-fileset",children:"HDFS fileset"}),"\n",(0,s.jsx)(t.p,{children:"Apart from the above properties, to access fileset like HDFS fileset, you need to configure the following extra properties."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Property Name"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default Value"}),(0,s.jsx)(t.th,{children:"Required"}),(0,s.jsx)(t.th,{children:"Since Version"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"authentication.impersonation-enable"})}),(0,s.jsx)(t.td,{children:"Whether to enable impersonation for the Hadoop catalog."}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"false"})}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"0.5.1"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"authentication.type"})}),(0,s.jsxs)(t.td,{children:["The type of authentication for Hadoop catalog, currently we only support ",(0,s.jsx)(t.code,{children:"kerberos"}),", ",(0,s.jsx)(t.code,{children:"simple"}),"."]}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"simple"})}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"0.5.1"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"authentication.kerberos.principal"})}),(0,s.jsx)(t.td,{children:"The principal of the Kerberos authentication"}),(0,s.jsx)(t.td,{children:"(none)"}),(0,s.jsxs)(t.td,{children:["required if the value of ",(0,s.jsx)(t.code,{children:"authentication.type"})," is Kerberos."]}),(0,s.jsx)(t.td,{children:"0.5.1"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"authentication.kerberos.keytab-uri"})}),(0,s.jsx)(t.td,{children:"The URI of The keytab for the Kerberos authentication."}),(0,s.jsx)(t.td,{children:"(none)"}),(0,s.jsxs)(t.td,{children:["required if the value of ",(0,s.jsx)(t.code,{children:"authentication.type"})," is Kerberos."]}),(0,s.jsx)(t.td,{children:"0.5.1"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"authentication.kerberos.check-interval-sec"})}),(0,s.jsx)(t.td,{children:"The check interval of Kerberos credential for Hadoop catalog."}),(0,s.jsx)(t.td,{children:"60"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"0.5.1"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"authentication.kerberos.keytab-fetch-timeout-sec"})}),(0,s.jsxs)(t.td,{children:["The fetch timeout of retrieving Kerberos keytab from ",(0,s.jsx)(t.code,{children:"authentication.kerberos.keytab-uri"}),"."]}),(0,s.jsx)(t.td,{children:"60"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"0.5.1"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"hadoop-catalog-with-cloud-storage",children:"Hadoop catalog with Cloud Storage"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["For S3, please refer to ",(0,s.jsx)(t.a,{href:"/docs/0.8.0-incubating/hadoop-catalog-with-s3",children:"Hadoop-catalog-with-s3"})," for more details."]}),"\n",(0,s.jsxs)(t.li,{children:["For GCS, please refer to ",(0,s.jsx)(t.a,{href:"/docs/0.8.0-incubating/hadoop-catalog-with-gcs",children:"Hadoop-catalog-with-gcs"})," for more details."]}),"\n",(0,s.jsxs)(t.li,{children:["For OSS, please refer to ",(0,s.jsx)(t.a,{href:"/docs/0.8.0-incubating/hadoop-catalog-with-oss",children:"Hadoop-catalog-with-oss"})," for more details."]}),"\n",(0,s.jsxs)(t.li,{children:["For Azure Blob Storage, please refer to ",(0,s.jsx)(t.a,{href:"/docs/0.8.0-incubating/hadoop-catalog-with-adls",children:"Hadoop-catalog-with-adls"})," for more details."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"how-to-custom-your-own-hcfs-file-system-fileset",children:"How to custom your own HCFS file system fileset?"}),"\n",(0,s.jsxs)(t.p,{children:["Developers and users can custom their own HCFS file system fileset by implementing the ",(0,s.jsx)(t.code,{children:"FileSystemProvider"})," interface in the jar ",(0,s.jsx)(t.a,{href:"https://repo1.maven.org/maven2/org/apache/gravitino/catalog-hadoop/",children:"gravitino-catalog-hadoop"}),". The ",(0,s.jsx)(t.code,{children:"FileSystemProvider"})," interface is defined as follows:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:"  \n  // Create a FileSystem instance by the properties you have set when creating the catalog. \n  FileSystem getFileSystem(@Nonnull Path path, @Nonnull Map<String, String> config)\n      throws IOException;\n  \n  // The schema name of the file system provider. 'file' for Local file system,\n  // 'hdfs' for HDFS, 's3a' for AWS S3, 'gs' for GCS, 'oss' for Aliyun OSS. \n  String scheme();\n\n  // Name of the file system provider. 'builtin-local' for Local file system, 'builtin-hdfs' for HDFS, \n  // 's3' for AWS S3, 'gcs' for GCS, 'oss' for Aliyun OSS.\n  // You need to set catalog properties `filesystem-providers` to support this file system.\n  String name();\n"})}),"\n",(0,s.jsxs)(t.p,{children:["In the meantime, ",(0,s.jsx)(t.code,{children:"FileSystemProvider"})," uses Java SPI to load the custom file system provider. You need to create a file named ",(0,s.jsx)(t.code,{children:"org.apache.gravitino.catalog.fs.FileSystemProvider"})," in the ",(0,s.jsx)(t.code,{children:"META-INF/services"})," directory of the jar file. The content of the file is the full class name of the custom file system provider.\nFor example, the content of ",(0,s.jsx)(t.code,{children:"S3FileSystemProvider"})," is as follows:\n",(0,s.jsx)(t.img,{alt:"img.png",src:i(32519).A+"",width:"1770",height:"921"})]}),"\n",(0,s.jsxs)(t.p,{children:["After implementing the ",(0,s.jsx)(t.code,{children:"FileSystemProvider"})," interface, you need to put the jar file into the ",(0,s.jsx)(t.code,{children:"$GRAVITINO_HOME/catalogs/hadoop/libs"})," directory. Then you can set the ",(0,s.jsx)(t.code,{children:"filesystem-providers"})," property to use your custom file system provider."]}),"\n",(0,s.jsx)(t.h3,{id:"authentication-for-hadoop-catalog",children:"Authentication for Hadoop Catalog"}),"\n",(0,s.jsx)(t.p,{children:"The Hadoop catalog supports multi-level authentication to control access, allowing different authentication settings for the catalog, schema, and fileset. The priority of authentication settings is as follows: catalog < schema < fileset. Specifically:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Catalog"}),": The default authentication is ",(0,s.jsx)(t.code,{children:"simple"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Schema"}),": Inherits the authentication setting from the catalog if not explicitly set. For more information about schema settings, please refer to ",(0,s.jsx)(t.a,{href:"#schema-properties",children:"Schema properties"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Fileset"}),": Inherits the authentication setting from the schema if not explicitly set. For more information about fileset settings, please refer to ",(0,s.jsx)(t.a,{href:"#fileset-properties",children:"Fileset properties"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["The default value of ",(0,s.jsx)(t.code,{children:"authentication.impersonation-enable"})," is false, and the default value for catalogs about this configuration is false, for\nschemas and filesets, the default value is inherited from the parent. Value set by the user will override the parent value, and the priority mechanism is the same as authentication."]}),"\n",(0,s.jsx)(t.h3,{id:"catalog-operations",children:"Catalog operations"}),"\n",(0,s.jsxs)(t.p,{children:["Refer to ",(0,s.jsx)(t.a,{href:"/docs/0.8.0-incubating/manage-fileset-metadata-using-gravitino#catalog-operations",children:"Catalog operations"})," for more details."]}),"\n",(0,s.jsx)(t.h2,{id:"schema",children:"Schema"}),"\n",(0,s.jsx)(t.h3,{id:"schema-capabilities",children:"Schema capabilities"}),"\n",(0,s.jsx)(t.p,{children:"The Hadoop catalog supports creating, updating, deleting, and listing schema."}),"\n",(0,s.jsx)(t.h3,{id:"schema-properties",children:"Schema properties"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Property name"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default value"}),(0,s.jsx)(t.th,{children:"Required"}),(0,s.jsx)(t.th,{children:"Since Version"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"location"})}),(0,s.jsx)(t.td,{children:"The storage location managed by Hadoop schema."}),(0,s.jsx)(t.td,{children:"(none)"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"0.5.0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"authentication.impersonation-enable"})}),(0,s.jsx)(t.td,{children:"Whether to enable impersonation for this schema of the Hadoop catalog."}),(0,s.jsx)(t.td,{children:"The parent(catalog) value"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"0.6.0-incubating"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"authentication.type"})}),(0,s.jsxs)(t.td,{children:["The type of authentication for this schema of Hadoop catalog , currently we only support ",(0,s.jsx)(t.code,{children:"kerberos"}),", ",(0,s.jsx)(t.code,{children:"simple"}),"."]}),(0,s.jsx)(t.td,{children:"The parent(catalog) value"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"0.6.0-incubating"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"authentication.kerberos.principal"})}),(0,s.jsx)(t.td,{children:"The principal of the Kerberos authentication for this schema."}),(0,s.jsx)(t.td,{children:"The parent(catalog) value"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"0.6.0-incubating"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"authentication.kerberos.keytab-uri"})}),(0,s.jsx)(t.td,{children:"The URI of The keytab for the Kerberos authentication for this schema."}),(0,s.jsx)(t.td,{children:"The parent(catalog) value"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"0.6.0-incubating"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"credential-providers"})}),(0,s.jsx)(t.td,{children:"The credential provider types, separated by comma."}),(0,s.jsx)(t.td,{children:"(none)"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"0.8.0-incubating"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"schema-operations",children:"Schema operations"}),"\n",(0,s.jsxs)(t.p,{children:["Refer to ",(0,s.jsx)(t.a,{href:"/docs/0.8.0-incubating/manage-fileset-metadata-using-gravitino#schema-operations",children:"Schema operation"})," for more details."]}),"\n",(0,s.jsx)(t.h2,{id:"fileset",children:"Fileset"}),"\n",(0,s.jsx)(t.h3,{id:"fileset-capabilities",children:"Fileset capabilities"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"The Hadoop catalog supports creating, updating, deleting, and listing filesets."}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"fileset-properties",children:"Fileset properties"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Property name"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default value"}),(0,s.jsx)(t.th,{children:"Required"}),(0,s.jsx)(t.th,{children:"Since Version"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"authentication.impersonation-enable"})}),(0,s.jsx)(t.td,{children:"Whether to enable impersonation for the Hadoop catalog fileset."}),(0,s.jsx)(t.td,{children:"The parent(schema) value"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"0.6.0-incubating"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"authentication.type"})}),(0,s.jsxs)(t.td,{children:["The type of authentication for Hadoop catalog fileset, currently we only support ",(0,s.jsx)(t.code,{children:"kerberos"}),", ",(0,s.jsx)(t.code,{children:"simple"}),"."]}),(0,s.jsx)(t.td,{children:"The parent(schema) value"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"0.6.0-incubating"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"authentication.kerberos.principal"})}),(0,s.jsx)(t.td,{children:"The principal of the Kerberos authentication for the fileset."}),(0,s.jsx)(t.td,{children:"The parent(schema) value"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"0.6.0-incubating"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"authentication.kerberos.keytab-uri"})}),(0,s.jsx)(t.td,{children:"The URI of The keytab for the Kerberos authentication for the fileset."}),(0,s.jsx)(t.td,{children:"The parent(schema) value"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"0.6.0-incubating"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"credential-providers"})}),(0,s.jsx)(t.td,{children:"The credential provider types, separated by comma."}),(0,s.jsx)(t.td,{children:"(none)"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"0.8.0-incubating"})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:["Credential providers can be specified in several places, as listed below. Gravitino checks the ",(0,s.jsx)(t.code,{children:"credential-providers"})," setting in the following order of precedence:"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Fileset properties"}),"\n",(0,s.jsx)(t.li,{children:"Schema properties"}),"\n",(0,s.jsx)(t.li,{children:"Catalog properties"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"fileset-operations",children:"Fileset operations"}),"\n",(0,s.jsxs)(t.p,{children:["Refer to ",(0,s.jsx)(t.a,{href:"/docs/0.8.0-incubating/manage-fileset-metadata-using-gravitino#fileset-operations",children:"Fileset operations"})," for more details."]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}}}]);