"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[99872],{57083:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var a=i(13274),n=i(38389);const s={title:"Hadoop catalog",slug:"/hadoop-catalog",date:"2024-4-2",keyword:"hadoop catalog",license:"This software is licensed under the Apache License version 2."},o=void 0,r={id:"hadoop-catalog",title:"Hadoop catalog",description:"Introduction",source:"@site/versioned_docs/version-0.6.1-incubating/hadoop-catalog.md",sourceDirName:".",slug:"/hadoop-catalog",permalink:"/docs/0.6.1-incubating/hadoop-catalog",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/hadoop-catalog.md",tags:[],version:"0.6.1-incubating",lastUpdatedBy:"FANNG",lastUpdatedAt:1737701155e3,frontMatter:{title:"Hadoop catalog",slug:"/hadoop-catalog",date:"2024-4-2",keyword:"hadoop catalog",license:"This software is licensed under the Apache License version 2."},sidebar:"docs",previous:{title:"Paimon catalog",permalink:"/docs/0.6.1-incubating/lakehouse-paimon-catalog"},next:{title:"Kafka catalog",permalink:"/docs/0.6.1-incubating/kafka-catalog"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Catalog",id:"catalog",level:2},{value:"Catalog properties",id:"catalog-properties",level:3},{value:"Authentication for Hadoop Catalog",id:"authentication-for-hadoop-catalog",level:3},{value:"Catalog operations",id:"catalog-operations",level:3},{value:"Schema",id:"schema",level:2},{value:"Schema capabilities",id:"schema-capabilities",level:3},{value:"Schema properties",id:"schema-properties",level:3},{value:"Schema operations",id:"schema-operations",level:3},{value:"Fileset",id:"fileset",level:2},{value:"Fileset capabilities",id:"fileset-capabilities",level:3},{value:"Fileset properties",id:"fileset-properties",level:3},{value:"Fileset operations",id:"fileset-operations",level:3}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,a.jsxs)(t.p,{children:["Hadoop catalog is a fileset catalog that using Hadoop Compatible File System (HCFS) to manage\nthe storage location of the fileset. Currently, it supports local filesystem and HDFS. For\nobject storage like S3, GCS, and Azure Blob Storage, you can put the hadoop object store jar like\nhadoop-aws into the ",(0,a.jsx)(t.code,{children:"$GRAVITINO_HOME/catalogs/hadoop/libs"})," directory to enable the support.\nGravitino itself hasn't yet tested the object storage support, so if you have any issue,\nplease create an ",(0,a.jsx)(t.a,{href:"https://github.com/apache/gravitino/issues",children:"issue"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["Note that Gravitino uses Hadoop 3 dependencies to build Hadoop catalog. Theoretically, it should be\ncompatible with both Hadoop 2.x and 3.x, since Gravitino doesn't leverage any new features in\nHadoop 3. If there's any compatibility issue, please create an ",(0,a.jsx)(t.a,{href:"https://github.com/apache/gravitino/issues",children:"issue"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"catalog",children:"Catalog"}),"\n",(0,a.jsx)(t.h3,{id:"catalog-properties",children:"Catalog properties"}),"\n",(0,a.jsxs)(t.p,{children:["Besides the ",(0,a.jsx)(t.a,{href:"/docs/0.6.1-incubating/gravitino-server-config#gravitino-catalog-properties-configuration",children:"common catalog properties"}),", the Hadoop catalog has the following properties:"]}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Property Name"}),(0,a.jsx)(t.th,{children:"Description"}),(0,a.jsx)(t.th,{children:"Default Value"}),(0,a.jsx)(t.th,{children:"Required"}),(0,a.jsx)(t.th,{children:"Since Version"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"location"})}),(0,a.jsx)(t.td,{children:"The storage location managed by Hadoop catalog."}),(0,a.jsx)(t.td,{children:"(none)"}),(0,a.jsx)(t.td,{children:"No"}),(0,a.jsx)(t.td,{children:"0.5.0"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"authentication.impersonation-enable"})}),(0,a.jsx)(t.td,{children:"Whether to enable impersonation for the Hadoop catalog."}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"false"})}),(0,a.jsx)(t.td,{children:"No"}),(0,a.jsx)(t.td,{children:"0.5.1"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"authentication.type"})}),(0,a.jsxs)(t.td,{children:["The type of authentication for Hadoop catalog, currently we only support ",(0,a.jsx)(t.code,{children:"kerberos"}),", ",(0,a.jsx)(t.code,{children:"simple"}),"."]}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"simple"})}),(0,a.jsx)(t.td,{children:"No"}),(0,a.jsx)(t.td,{children:"0.5.1"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"authentication.kerberos.principal"})}),(0,a.jsx)(t.td,{children:"The principal of the Kerberos authentication"}),(0,a.jsx)(t.td,{children:"(none)"}),(0,a.jsxs)(t.td,{children:["required if the value of ",(0,a.jsx)(t.code,{children:"authentication.type"})," is Kerberos."]}),(0,a.jsx)(t.td,{children:"0.5.1"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"authentication.kerberos.keytab-uri"})}),(0,a.jsx)(t.td,{children:"The URI of The keytab for the Kerberos authentication."}),(0,a.jsx)(t.td,{children:"(none)"}),(0,a.jsxs)(t.td,{children:["required if the value of ",(0,a.jsx)(t.code,{children:"authentication.type"})," is Kerberos."]}),(0,a.jsx)(t.td,{children:"0.5.1"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"authentication.kerberos.check-interval-sec"})}),(0,a.jsx)(t.td,{children:"The check interval of Kerberos credential for Hadoop catalog."}),(0,a.jsx)(t.td,{children:"60"}),(0,a.jsx)(t.td,{children:"No"}),(0,a.jsx)(t.td,{children:"0.5.1"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"authentication.kerberos.keytab-fetch-timeout-sec"})}),(0,a.jsxs)(t.td,{children:["The fetch timeout of retrieving Kerberos keytab from ",(0,a.jsx)(t.code,{children:"authentication.kerberos.keytab-uri"}),"."]}),(0,a.jsx)(t.td,{children:"60"}),(0,a.jsx)(t.td,{children:"No"}),(0,a.jsx)(t.td,{children:"0.5.1"})]})]})]}),"\n",(0,a.jsx)(t.h3,{id:"authentication-for-hadoop-catalog",children:"Authentication for Hadoop Catalog"}),"\n",(0,a.jsx)(t.p,{children:"The Hadoop catalog supports multi-level authentication to control access, allowing different authentication settings for the catalog, schema, and fileset. The priority of authentication settings is as follows: catalog < schema < fileset. Specifically:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Catalog"}),": The default authentication is ",(0,a.jsx)(t.code,{children:"simple"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Schema"}),": Inherits the authentication setting from the catalog if not explicitly set. For more information about schema settings, please refer to ",(0,a.jsx)(t.a,{href:"#schema-properties",children:"Schema properties"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Fileset"}),": Inherits the authentication setting from the schema if not explicitly set. For more information about fileset settings, please refer to ",(0,a.jsx)(t.a,{href:"#fileset-properties",children:"Fileset properties"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["The default value of ",(0,a.jsx)(t.code,{children:"authentication.impersonation-enable"})," is false, and the default value for catalogs about this configuration is false, for\nschemas and filesets, the default value is inherited from the parent. Value set by the user will override the parent value, and the priority mechanism is the same as authentication."]}),"\n",(0,a.jsx)(t.h3,{id:"catalog-operations",children:"Catalog operations"}),"\n",(0,a.jsxs)(t.p,{children:["Refer to ",(0,a.jsx)(t.a,{href:"/docs/0.6.1-incubating/manage-fileset-metadata-using-gravitino#catalog-operations",children:"Catalog operations"})," for more details."]}),"\n",(0,a.jsx)(t.h2,{id:"schema",children:"Schema"}),"\n",(0,a.jsx)(t.h3,{id:"schema-capabilities",children:"Schema capabilities"}),"\n",(0,a.jsx)(t.p,{children:"The Hadoop catalog supports creating, updating, deleting, and listing schema."}),"\n",(0,a.jsx)(t.h3,{id:"schema-properties",children:"Schema properties"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Property name"}),(0,a.jsx)(t.th,{children:"Description"}),(0,a.jsx)(t.th,{children:"Default value"}),(0,a.jsx)(t.th,{children:"Required"}),(0,a.jsx)(t.th,{children:"Since Version"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"location"})}),(0,a.jsx)(t.td,{children:"The storage location managed by Hadoop schema."}),(0,a.jsx)(t.td,{children:"(none)"}),(0,a.jsx)(t.td,{children:"No"}),(0,a.jsx)(t.td,{children:"0.5.0"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"authentication.impersonation-enable"})}),(0,a.jsx)(t.td,{children:"Whether to enable impersonation for this schema of the Hadoop catalog."}),(0,a.jsx)(t.td,{children:"The parent(catalog) value"}),(0,a.jsx)(t.td,{children:"No"}),(0,a.jsx)(t.td,{children:"0.6.0-incubating"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"authentication.type"})}),(0,a.jsxs)(t.td,{children:["The type of authentication for this schema of Hadoop catalog , currently we only support ",(0,a.jsx)(t.code,{children:"kerberos"}),", ",(0,a.jsx)(t.code,{children:"simple"}),"."]}),(0,a.jsx)(t.td,{children:"The parent(catalog) value"}),(0,a.jsx)(t.td,{children:"No"}),(0,a.jsx)(t.td,{children:"0.6.0-incubating"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"authentication.kerberos.principal"})}),(0,a.jsx)(t.td,{children:"The principal of the Kerberos authentication for this schema."}),(0,a.jsx)(t.td,{children:"The parent(catalog) value"}),(0,a.jsx)(t.td,{children:"No"}),(0,a.jsx)(t.td,{children:"0.6.0-incubating"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"authentication.kerberos.keytab-uri"})}),(0,a.jsx)(t.td,{children:"The URI of The keytab for the Kerberos authentication for this scheam."}),(0,a.jsx)(t.td,{children:"The parent(catalog) value"}),(0,a.jsx)(t.td,{children:"No"}),(0,a.jsx)(t.td,{children:"0.6.0-incubating"})]})]})]}),"\n",(0,a.jsx)(t.h3,{id:"schema-operations",children:"Schema operations"}),"\n",(0,a.jsxs)(t.p,{children:["Refer to ",(0,a.jsx)(t.a,{href:"/docs/0.6.1-incubating/manage-fileset-metadata-using-gravitino#schema-operations",children:"Schema operation"})," for more details."]}),"\n",(0,a.jsx)(t.h2,{id:"fileset",children:"Fileset"}),"\n",(0,a.jsx)(t.h3,{id:"fileset-capabilities",children:"Fileset capabilities"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"The Hadoop catalog supports creating, updating, deleting, and listing filesets."}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"fileset-properties",children:"Fileset properties"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Property name"}),(0,a.jsx)(t.th,{children:"Description"}),(0,a.jsx)(t.th,{children:"Default value"}),(0,a.jsx)(t.th,{children:"Required"}),(0,a.jsx)(t.th,{children:"Since Version"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"authentication.impersonation-enable"})}),(0,a.jsx)(t.td,{children:"Whether to enable impersonation for the Hadoop catalog fileset."}),(0,a.jsx)(t.td,{children:"The parent(schema) value"}),(0,a.jsx)(t.td,{children:"No"}),(0,a.jsx)(t.td,{children:"0.6.0"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"authentication.type"})}),(0,a.jsxs)(t.td,{children:["The type of authentication for Hadoop catalog fileset, currently we only support ",(0,a.jsx)(t.code,{children:"kerberos"}),", ",(0,a.jsx)(t.code,{children:"simple"}),"."]}),(0,a.jsx)(t.td,{children:"The parent(schema) value"}),(0,a.jsx)(t.td,{children:"No"}),(0,a.jsx)(t.td,{children:"0.6.0"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"authentication.kerberos.principal"})}),(0,a.jsx)(t.td,{children:"The principal of the Kerberos authentication for the fileset."}),(0,a.jsx)(t.td,{children:"The parent(schema) value"}),(0,a.jsx)(t.td,{children:"No"}),(0,a.jsx)(t.td,{children:"0.6.0"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"authentication.kerberos.keytab-uri"})}),(0,a.jsx)(t.td,{children:"The URI of The keytab for the Kerberos authentication for the fileset."}),(0,a.jsx)(t.td,{children:"The parent(schema) value"}),(0,a.jsx)(t.td,{children:"No"}),(0,a.jsx)(t.td,{children:"0.6.0"})]})]})]}),"\n",(0,a.jsx)(t.h3,{id:"fileset-operations",children:"Fileset operations"}),"\n",(0,a.jsxs)(t.p,{children:["Refer to ",(0,a.jsx)(t.a,{href:"/docs/0.6.1-incubating/manage-fileset-metadata-using-gravitino#fileset-operations",children:"Fileset operations"})," for more details."]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}}}]);