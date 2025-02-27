"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[6777],{17014:(e,i,r)=>{r.d(i,{R:()=>d,x:()=>t});var n=r(79474);const s={},c=n.createContext(s);function d(e){const i=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function t(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(c.Provider,{value:i},e.children)}},41856:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>t,toc:()=>a});var n=r(13274),s=r(17014);const c={title:"Gravitino credential vending",slug:"/security/credential-vending",keyword:"security credential vending",license:"This software is licensed under the Apache License version 2."},d=void 0,t={id:"security/credential-vending",title:"Gravitino credential vending",description:"Background",source:"@site/versioned_docs/version-0.8.0-incubating/security/credential-vending.md",sourceDirName:"security",slug:"/security/credential-vending",permalink:"/docs/0.8.0-incubating/security/credential-vending",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/security/credential-vending.md",tags:[],version:"0.8.0-incubating",frontMatter:{title:"Gravitino credential vending",slug:"/security/credential-vending",keyword:"security credential vending",license:"This software is licensed under the Apache License version 2."},sidebar:"docs",previous:{title:"How to use HTTPS",permalink:"/docs/0.8.0-incubating/security/how-to-use-https"},next:{title:"Use Gravitino playground",permalink:"/docs/0.8.0-incubating/how-to-use-the-playground"}},l={},a=[{value:"Background",id:"background",level:2},{value:"Capabilities",id:"capabilities",level:3},{value:"General configurations",id:"general-configurations",level:2},{value:"Build-in credentials configurations",id:"build-in-credentials-configurations",level:2},{value:"S3 credentials",id:"s3-credentials",level:3},{value:"S3 secret key credential",id:"s3-secret-key-credential",level:4},{value:"S3 token credential",id:"s3-token-credential",level:4},{value:"OSS credentials",id:"oss-credentials",level:3},{value:"OSS secret key credential",id:"oss-secret-key-credential",level:4},{value:"OSS token credential",id:"oss-token-credential",level:4},{value:"ADLS credentials",id:"adls-credentials",level:3},{value:"Azure account key credential",id:"azure-account-key-credential",level:4},{value:"ADLS token credential",id:"adls-token-credential",level:4},{value:"GCS credentials",id:"gcs-credentials",level:3},{value:"GCS token credential",id:"gcs-token-credential",level:4},{value:"Custom credentials",id:"custom-credentials",level:2},{value:"Deployment",id:"deployment",level:2},{value:"Usage example",id:"usage-example",level:2},{value:"Credential vending for Iceberg REST server",id:"credential-vending-for-iceberg-rest-server",level:3}];function o(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h2,{id:"background",children:"Background"}),"\n",(0,n.jsx)(i.p,{children:"Gravitino credential vending is used to generate temporary or static credentials for accessing data. With credential vending, Gravitino provides an unified way to control the access to diverse data sources in different platforms."}),"\n",(0,n.jsx)(i.h3,{id:"capabilities",children:"Capabilities"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Supports Gravitino Iceberg REST server."}),"\n",(0,n.jsx)(i.li,{children:"Supports Gravitino server, only support Hadoop catalog."}),"\n",(0,n.jsxs)(i.li,{children:["Supports pluggable credentials with build-in credentials:","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["S3: ",(0,n.jsx)(i.code,{children:"S3TokenCredential"}),", ",(0,n.jsx)(i.code,{children:"S3SecretKeyCredential"})]}),"\n",(0,n.jsxs)(i.li,{children:["GCS: ",(0,n.jsx)(i.code,{children:"GCSTokenCredential"})]}),"\n",(0,n.jsxs)(i.li,{children:["ADLS: ",(0,n.jsx)(i.code,{children:"ADLSTokenCredential"}),", ",(0,n.jsx)(i.code,{children:"AzureAccountKeyCredential"})]}),"\n",(0,n.jsxs)(i.li,{children:["OSS: ",(0,n.jsx)(i.code,{children:"OSSTokenCredential"}),", ",(0,n.jsx)(i.code,{children:"OSSSecretKeyCredential"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.li,{children:"No support for Spark/Trino/Flink connector yet."}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"general-configurations",children:"General configurations"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Gravitino server catalog properties"}),(0,n.jsx)(i.th,{children:"Gravitino Iceberg REST server configurations"}),(0,n.jsx)(i.th,{children:"Description"}),(0,n.jsx)(i.th,{children:"Default value"}),(0,n.jsx)(i.th,{children:"Required"}),(0,n.jsx)(i.th,{children:"Since Version"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"credential-provider-type"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"gravitino.iceberg-rest.credential-provider-type"})}),(0,n.jsxs)(i.td,{children:["Deprecated, please use ",(0,n.jsx)(i.code,{children:"credential-providers"})," instead."]}),(0,n.jsx)(i.td,{children:"(none)"}),(0,n.jsx)(i.td,{children:"Yes"}),(0,n.jsx)(i.td,{children:"0.7.0-incubating"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"credential-providers"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"gravitino.iceberg-rest.credential-providers"})}),(0,n.jsx)(i.td,{children:"The credential provider types, separated by comma."}),(0,n.jsx)(i.td,{children:"(none)"}),(0,n.jsx)(i.td,{children:"Yes"}),(0,n.jsx)(i.td,{children:"0.8.0-incubating"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"credential-cache-expire-ratio"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"gravitino.iceberg-rest.credential-cache-expire-ratio"})}),(0,n.jsx)(i.td,{children:"Ratio of the credential's expiration time when Gravitino remove credential from the cache."}),(0,n.jsx)(i.td,{children:"0.15"}),(0,n.jsx)(i.td,{children:"No"}),(0,n.jsx)(i.td,{children:"0.8.0-incubating"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"credential-cache-max-size"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"gravitino.iceberg-rest.cache-max-size"})}),(0,n.jsx)(i.td,{children:"Max size for the credential cache."}),(0,n.jsx)(i.td,{children:"10000"}),(0,n.jsx)(i.td,{children:"No"}),(0,n.jsx)(i.td,{children:"0.8.0-incubating"})]})]})]}),"\n",(0,n.jsx)(i.h2,{id:"build-in-credentials-configurations",children:"Build-in credentials configurations"}),"\n",(0,n.jsx)(i.h3,{id:"s3-credentials",children:"S3 credentials"}),"\n",(0,n.jsx)(i.h4,{id:"s3-secret-key-credential",children:"S3 secret key credential"}),"\n",(0,n.jsx)(i.p,{children:"A credential with static S3 access key id and secret access key."}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Gravitino server catalog properties"}),(0,n.jsx)(i.th,{children:"Gravitino Iceberg REST server configurations"}),(0,n.jsx)(i.th,{children:"Description"}),(0,n.jsx)(i.th,{children:"Default value"}),(0,n.jsx)(i.th,{children:"Required"}),(0,n.jsx)(i.th,{children:"Since Version"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"credential-providers"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"gravitino.iceberg-rest.credential-providers"})}),(0,n.jsxs)(i.td,{children:[(0,n.jsx)(i.code,{children:"s3-secret-key"})," for S3 secret key credential provider."]}),(0,n.jsx)(i.td,{children:"(none)"}),(0,n.jsx)(i.td,{children:"Yes"}),(0,n.jsx)(i.td,{children:"0.8.0-incubating"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"s3-access-key-id"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"gravitino.iceberg-rest.s3-access-key-id"})}),(0,n.jsx)(i.td,{children:"The static access key ID used to access S3 data."}),(0,n.jsx)(i.td,{children:"(none)"}),(0,n.jsx)(i.td,{children:"Yes"}),(0,n.jsx)(i.td,{children:"0.6.0-incubating"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"s3-secret-access-key"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"gravitino.iceberg-rest.s3-secret-access-key"})}),(0,n.jsx)(i.td,{children:"The static secret access key used to access S3 data."}),(0,n.jsx)(i.td,{children:"(none)"}),(0,n.jsx)(i.td,{children:"Yes"}),(0,n.jsx)(i.td,{children:"0.6.0-incubating"})]})]})]}),"\n",(0,n.jsx)(i.h4,{id:"s3-token-credential",children:"S3 token credential"}),"\n",(0,n.jsxs)(i.p,{children:["An S3 token is a token credential with scoped privileges, by leveraging STS ",(0,n.jsx)(i.a,{href:"https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRole.html",children:"Assume Role"}),". To use an S3 token credential, you should create a role and grant it proper privileges."]}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Gravitino server catalog properties"}),(0,n.jsx)(i.th,{children:"Gravitino Iceberg REST server configurations"}),(0,n.jsx)(i.th,{children:"Description"}),(0,n.jsx)(i.th,{children:"Default value"}),(0,n.jsx)(i.th,{children:"Required"}),(0,n.jsx)(i.th,{children:"Since Version"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"credential-providers"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"gravitino.iceberg-rest.credential-providers"})}),(0,n.jsxs)(i.td,{children:[(0,n.jsx)(i.code,{children:"s3-token"})," for S3 token credential provider."]}),(0,n.jsx)(i.td,{children:"(none)"}),(0,n.jsx)(i.td,{children:"Yes"}),(0,n.jsx)(i.td,{children:"0.8.0-incubating"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"s3-access-key-id"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"gravitino.iceberg-rest.s3-access-key-id"})}),(0,n.jsx)(i.td,{children:"The static access key ID used to access S3 data."}),(0,n.jsx)(i.td,{children:"(none)"}),(0,n.jsx)(i.td,{children:"Yes"}),(0,n.jsx)(i.td,{children:"0.6.0-incubating"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"s3-secret-access-key"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"gravitino.iceberg-rest.s3-secret-access-key"})}),(0,n.jsx)(i.td,{children:"The static secret access key used to access S3 data."}),(0,n.jsx)(i.td,{children:"(none)"}),(0,n.jsx)(i.td,{children:"Yes"}),(0,n.jsx)(i.td,{children:"0.6.0-incubating"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"s3-role-arn"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"gravitino.iceberg-rest.s3-role-arn"})}),(0,n.jsx)(i.td,{children:"The ARN of the role to access the S3 data."}),(0,n.jsx)(i.td,{children:"(none)"}),(0,n.jsx)(i.td,{children:"Yes"}),(0,n.jsx)(i.td,{children:"0.7.0-incubating"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"s3-region"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"gravitino.iceberg-rest.s3-region"})}),(0,n.jsxs)(i.td,{children:["The region of the S3 service, like ",(0,n.jsx)(i.code,{children:"us-west-2"}),"."]}),(0,n.jsx)(i.td,{children:"(none)"}),(0,n.jsx)(i.td,{children:"No"}),(0,n.jsx)(i.td,{children:"0.6.0-incubating"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"s3-external-id"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"gravitino.iceberg-rest.s3-external-id"})}),(0,n.jsx)(i.td,{children:"The S3 external id to generate token."}),(0,n.jsx)(i.td,{children:"(none)"}),(0,n.jsx)(i.td,{children:"No"}),(0,n.jsx)(i.td,{children:"0.7.0-incubating"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"s3-token-expire-in-secs"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"gravitino.iceberg-rest.s3-token-expire-in-secs"})}),(0,n.jsx)(i.td,{children:"The S3 session token expire time in secs, it couldn't exceed the max session time of the assumed role."}),(0,n.jsx)(i.td,{children:"3600"}),(0,n.jsx)(i.td,{children:"No"}),(0,n.jsx)(i.td,{children:"0.7.0-incubating"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"s3-token-service-endpoint"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"gravitino.iceberg-rest.s3-token-service-endpoint"})}),(0,n.jsx)(i.td,{children:"An alternative endpoint of the S3 token service, This could be used with s3-compatible object storage service like MINIO that has a different STS endpoint."}),(0,n.jsx)(i.td,{children:"(none)"}),(0,n.jsx)(i.td,{children:"No"}),(0,n.jsx)(i.td,{children:"0.8.0-incubating"})]})]})]}),"\n",(0,n.jsx)(i.h3,{id:"oss-credentials",children:"OSS credentials"}),"\n",(0,n.jsx)(i.h4,{id:"oss-secret-key-credential",children:"OSS secret key credential"}),"\n",(0,n.jsx)(i.p,{children:"A credential with static OSS access key id and secret access key."}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Gravitino server catalog properties"}),(0,n.jsx)(i.th,{children:"Gravitino Iceberg REST server configurations"}),(0,n.jsx)(i.th,{children:"Description"}),(0,n.jsx)(i.th,{children:"Default value"}),(0,n.jsx)(i.th,{children:"Required"}),(0,n.jsx)(i.th,{children:"Since Version"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"credential-providers"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"gravitino.iceberg-rest.credential-providers"})}),(0,n.jsxs)(i.td,{children:[(0,n.jsx)(i.code,{children:"oss-secret-key"})," for OSS secret credential."]}),(0,n.jsx)(i.td,{children:"(none)"}),(0,n.jsx)(i.td,{children:"Yes"}),(0,n.jsx)(i.td,{children:"0.8.0-incubating"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"oss-access-key-id"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"gravitino.iceberg-rest.oss-access-key-id"})}),(0,n.jsx)(i.td,{children:"The static access key ID used to access OSS data."}),(0,n.jsx)(i.td,{children:"(none)"}),(0,n.jsx)(i.td,{children:"Yes"}),(0,n.jsx)(i.td,{children:"0.7.0-incubating"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"oss-secret-access-key"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"gravitino.iceberg-rest.oss-secret-access-key"})}),(0,n.jsx)(i.td,{children:"The static secret access key used to access OSS data."}),(0,n.jsx)(i.td,{children:"(none)"}),(0,n.jsx)(i.td,{children:"Yes"}),(0,n.jsx)(i.td,{children:"0.7.0-incubating"})]})]})]}),"\n",(0,n.jsx)(i.h4,{id:"oss-token-credential",children:"OSS token credential"}),"\n",(0,n.jsxs)(i.p,{children:["An OSS token is a token credential with scoped privileges, by leveraging STS ",(0,n.jsx)(i.a,{href:"https://www.alibabacloud.com/help/en/oss/developer-reference/use-temporary-access-credentials-provided-by-sts-to-access-oss",children:"Assume Role"}),". To use an OSS token credential, you should create a role and grant it proper privileges."]}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Gravitino server catalog properties"}),(0,n.jsx)(i.th,{children:"Gravitino Iceberg REST server configurations"}),(0,n.jsx)(i.th,{children:"Description"}),(0,n.jsx)(i.th,{children:"Default value"}),(0,n.jsx)(i.th,{children:"Required"}),(0,n.jsx)(i.th,{children:"Since Version"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"credential-providers"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"gravitino.iceberg-rest.credential-providers"})}),(0,n.jsxs)(i.td,{children:[(0,n.jsx)(i.code,{children:"oss-token"})," for s3 token credential."]}),(0,n.jsx)(i.td,{children:"(none)"}),(0,n.jsx)(i.td,{children:"Yes"}),(0,n.jsx)(i.td,{children:"0.8.0-incubating"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"oss-access-key-id"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"gravitino.iceberg-rest.oss-access-key-id"})}),(0,n.jsx)(i.td,{children:"The static access key ID used to access OSS data."}),(0,n.jsx)(i.td,{children:"(none)"}),(0,n.jsx)(i.td,{children:"Yes"}),(0,n.jsx)(i.td,{children:"0.7.0-incubating"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"oss-secret-access-key"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"gravitino.iceberg-rest.oss-secret-access-key"})}),(0,n.jsx)(i.td,{children:"The static secret access key used to access OSS data."}),(0,n.jsx)(i.td,{children:"(none)"}),(0,n.jsx)(i.td,{children:"Yes"}),(0,n.jsx)(i.td,{children:"0.7.0-incubating"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"oss-role-arn"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"gravitino.iceberg-rest.oss-role-arn"})}),(0,n.jsx)(i.td,{children:"The ARN of the role to access the OSS data."}),(0,n.jsx)(i.td,{children:"(none)"}),(0,n.jsx)(i.td,{children:"Yes"}),(0,n.jsx)(i.td,{children:"0.8.0-incubating"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"oss-region"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"gravitino.iceberg-rest.oss-region"})}),(0,n.jsxs)(i.td,{children:["The region of the OSS service, like ",(0,n.jsx)(i.code,{children:"oss-cn-hangzhou"}),", only used when ",(0,n.jsx)(i.code,{children:"credential-providers"})," is ",(0,n.jsx)(i.code,{children:"oss-token"}),"."]}),(0,n.jsx)(i.td,{children:"(none)"}),(0,n.jsx)(i.td,{children:"No"}),(0,n.jsx)(i.td,{children:"0.8.0-incubating"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"oss-external-id"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"gravitino.iceberg-rest.oss-external-id"})}),(0,n.jsx)(i.td,{children:"The OSS external id to generate token."}),(0,n.jsx)(i.td,{children:"(none)"}),(0,n.jsx)(i.td,{children:"No"}),(0,n.jsx)(i.td,{children:"0.8.0-incubating"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"oss-token-expire-in-secs"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"gravitino.iceberg-rest.oss-token-expire-in-secs"})}),(0,n.jsx)(i.td,{children:"The OSS security token expire time in secs."}),(0,n.jsx)(i.td,{children:"3600"}),(0,n.jsx)(i.td,{children:"No"}),(0,n.jsx)(i.td,{children:"0.8.0-incubating"})]})]})]}),"\n",(0,n.jsx)(i.h3,{id:"adls-credentials",children:"ADLS credentials"}),"\n",(0,n.jsx)(i.h4,{id:"azure-account-key-credential",children:"Azure account key credential"}),"\n",(0,n.jsx)(i.p,{children:"A credential with static Azure storage account name and key."}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Gravitino server catalog properties"}),(0,n.jsx)(i.th,{children:"Gravitino Iceberg REST server configurations"}),(0,n.jsx)(i.th,{children:"Description"}),(0,n.jsx)(i.th,{children:"Default value"}),(0,n.jsx)(i.th,{children:"Required"}),(0,n.jsx)(i.th,{children:"Since Version"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"credential-providers"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"gravitino.iceberg-rest.credential-providers"})}),(0,n.jsxs)(i.td,{children:[(0,n.jsx)(i.code,{children:"azure-account-key"})," for Azure account key credential."]}),(0,n.jsx)(i.td,{children:"(none)"}),(0,n.jsx)(i.td,{children:"Yes"}),(0,n.jsx)(i.td,{children:"0.8.0-incubating"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"azure-storage-account-name"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"gravitino.iceberg-rest.azure-storage-account-name"})}),(0,n.jsx)(i.td,{children:"The static storage account name used to access ADLS data."}),(0,n.jsx)(i.td,{children:"(none)"}),(0,n.jsx)(i.td,{children:"Yes"}),(0,n.jsx)(i.td,{children:"0.8.0-incubating"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"azure-storage-account-key"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"gravitino.iceberg-rest.azure-storage-account-key"})}),(0,n.jsx)(i.td,{children:"The static storage account key used to access ADLS data."}),(0,n.jsx)(i.td,{children:"(none)"}),(0,n.jsx)(i.td,{children:"Yes"}),(0,n.jsx)(i.td,{children:"0.8.0-incubating"})]})]})]}),"\n",(0,n.jsx)(i.h4,{id:"adls-token-credential",children:"ADLS token credential"}),"\n",(0,n.jsxs)(i.p,{children:["An ADLS token is a token credential with scoped privileges, by leveraging Azure ",(0,n.jsx)(i.a,{href:"https://learn.microsoft.com/en-us/rest/api/storageservices/create-user-delegation-sas",children:"User Delegation Sas"}),". To use an ADLS token credential, you should create a Microsoft Entra ID service principal and grant it proper privileges."]}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Gravitino server catalog properties"}),(0,n.jsx)(i.th,{children:"Gravitino Iceberg REST server configurations"}),(0,n.jsx)(i.th,{children:"Description"}),(0,n.jsx)(i.th,{children:"Default value"}),(0,n.jsx)(i.th,{children:"Required"}),(0,n.jsx)(i.th,{children:"Since Version"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"credential-providers"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"gravitino.iceberg-rest.credential-providers"})}),(0,n.jsxs)(i.td,{children:[(0,n.jsx)(i.code,{children:"adls-token"})," for ADLS token credential."]}),(0,n.jsx)(i.td,{children:"(none)"}),(0,n.jsx)(i.td,{children:"Yes"}),(0,n.jsx)(i.td,{children:"0.8.0-incubating"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"azure-storage-account-name"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"gravitino.iceberg-rest.azure-storage-account-name"})}),(0,n.jsx)(i.td,{children:"The static storage account name used to access ADLS data."}),(0,n.jsx)(i.td,{children:"(none)"}),(0,n.jsx)(i.td,{children:"Yes"}),(0,n.jsx)(i.td,{children:"0.8.0-incubating"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"azure-storage-account-key"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"gravitino.iceberg-rest.azure-storage-account-key"})}),(0,n.jsx)(i.td,{children:"The static storage account key used to access ADLS data."}),(0,n.jsx)(i.td,{children:"(none)"}),(0,n.jsx)(i.td,{children:"Yes"}),(0,n.jsx)(i.td,{children:"0.8.0-incubating"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"azure-tenant-id"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"gravitino.iceberg-rest.azure-tenant-id"})}),(0,n.jsx)(i.td,{children:"Azure Active Directory (AAD) tenant ID."}),(0,n.jsx)(i.td,{children:"(none)"}),(0,n.jsx)(i.td,{children:"Yes"}),(0,n.jsx)(i.td,{children:"0.8.0-incubating"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"azure-client-id"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"gravitino.iceberg-rest.azure-client-id"})}),(0,n.jsx)(i.td,{children:"Azure Active Directory (AAD) client ID used for authentication."}),(0,n.jsx)(i.td,{children:"(none)"}),(0,n.jsx)(i.td,{children:"Yes"}),(0,n.jsx)(i.td,{children:"0.8.0-incubating"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"azure-client-secret"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"gravitino.iceberg-rest.azure-client-secret"})}),(0,n.jsx)(i.td,{children:"Azure Active Directory (AAD) client secret used for authentication."}),(0,n.jsx)(i.td,{children:"(none)"}),(0,n.jsx)(i.td,{children:"Yes"}),(0,n.jsx)(i.td,{children:"0.8.0-incubating"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"adls-token-expire-in-secs"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"gravitino.iceberg-rest.adls-token-expire-in-secs"})}),(0,n.jsx)(i.td,{children:"The ADLS SAS token expire time in secs."}),(0,n.jsx)(i.td,{children:"3600"}),(0,n.jsx)(i.td,{children:"No"}),(0,n.jsx)(i.td,{children:"0.8.0-incubating"})]})]})]}),"\n",(0,n.jsx)(i.h3,{id:"gcs-credentials",children:"GCS credentials"}),"\n",(0,n.jsx)(i.h4,{id:"gcs-token-credential",children:"GCS token credential"}),"\n",(0,n.jsxs)(i.p,{children:["An GCS token is a token credential with scoped privileges, by leveraging GCS ",(0,n.jsx)(i.a,{href:"https://cloud.google.com/iam/docs/downscoping-short-lived-credentials",children:"Credential Access Boundaries"}),". To use an GCS token credential, you should create an GCS service account and grant it proper privileges."]}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Gravitino server catalog properties"}),(0,n.jsx)(i.th,{children:"Gravitino Iceberg REST server configurations"}),(0,n.jsx)(i.th,{children:"Description"}),(0,n.jsx)(i.th,{children:"Default value"}),(0,n.jsx)(i.th,{children:"Required"}),(0,n.jsx)(i.th,{children:"Since Version"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"credential-providers"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"gravitino.iceberg-rest.credential-providers"})}),(0,n.jsxs)(i.td,{children:[(0,n.jsx)(i.code,{children:"gcs-token"})," for GCS token credential."]}),(0,n.jsx)(i.td,{children:"(none)"}),(0,n.jsx)(i.td,{children:"Yes"}),(0,n.jsx)(i.td,{children:"0.8.0-incubating"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"gcs-credential-file-path"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"gravitino.iceberg-rest.gcs-credential-file-path"})}),(0,n.jsxs)(i.td,{children:["Deprecated, please use ",(0,n.jsx)(i.code,{children:"gcs-service-account-file"})," instead."]}),(0,n.jsx)(i.td,{children:"GCS Application default credential."}),(0,n.jsx)(i.td,{children:"No"}),(0,n.jsx)(i.td,{children:"0.7.0-incubating"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"gcs-service-account-file"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"gravitino.iceberg-rest.gcs-service-account-file"})}),(0,n.jsx)(i.td,{children:"The location of GCS credential file."}),(0,n.jsx)(i.td,{children:"GCS Application default credential."}),(0,n.jsx)(i.td,{children:"No"}),(0,n.jsx)(i.td,{children:"0.8.0-incubating"})]})]})]}),"\n",(0,n.jsx)(i.admonition,{type:"note",children:(0,n.jsxs)(i.p,{children:["For Gravitino Iceberg REST server, please ensure that the credential file can be accessed by the server. For example, if the server is running on a GCE machine, or you can set the environment variable as ",(0,n.jsx)(i.code,{children:"export GOOGLE_APPLICATION_CREDENTIALS=/xx/application_default_credentials.json"}),", even when the ",(0,n.jsx)(i.code,{children:"gcs-service-account-file"})," has already been configured."]})}),"\n",(0,n.jsx)(i.h2,{id:"custom-credentials",children:"Custom credentials"}),"\n",(0,n.jsxs)(i.p,{children:["Gravitino supports custom credentials, you can implement the ",(0,n.jsx)(i.code,{children:"org.apache.gravitino.credential.CredentialProvider"})," interface to support custom credentials, and place the corresponding jar to the classpath of Iceberg catalog server or Hadoop catalog."]}),"\n",(0,n.jsx)(i.h2,{id:"deployment",children:"Deployment"}),"\n",(0,n.jsx)(i.p,{children:"Besides setting credentials related configuration, please download Gravitino cloud bundle jar and place it in the classpath of Iceberg REST server or Hadoop catalog."}),"\n",(0,n.jsx)(i.p,{children:"For Hadoop catalog, please use Gravitino cloud bundle jar with Hadoop and cloud packages:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://mvnrepository.com/artifact/org.apache.gravitino/gravitino-aws-bundle",children:"Gravitino AWS bundle jar with Hadoop and cloud packages"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://mvnrepository.com/artifact/org.apache.gravitino/gravitino-aliyun-bundle",children:"Gravitino Aliyun bundle jar with Hadoop and cloud packages"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://mvnrepository.com/artifact/org.apache.gravitino/gravitino-gcp-bundle",children:"Gravitino GCP bundle jar with Hadoop and cloud packages"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://mvnrepository.com/artifact/org.apache.gravitino/gravitino-azure-bundle",children:"Gravitino Azure bundle jar with Hadoop and cloud packages"})}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"For Iceberg REST catalog server, please use Gravitino cloud bundle jar without Hadoop and cloud packages:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://mvnrepository.com/artifact/org.apache.gravitino/gravitino-aws",children:"Gravitino AWS bundle jar without Hadoop and cloud packages"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://mvnrepository.com/artifact/org.apache.gravitino/gravitino-aliyun",children:"Gravitino Aliyun bundle jar without Hadoop and cloud packages"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://mvnrepository.com/artifact/org.apache.gravitino/gravitino-gcp",children:"Gravitino GCP bundle jar without Hadoop and cloud packages"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://mvnrepository.com/artifact/org.apache.gravitino/gravitino-azure",children:"Gravitino Azure bundle jar without Hadoop and cloud packages"})}),"\n"]}),"\n",(0,n.jsx)(i.admonition,{type:"note",children:(0,n.jsxs)(i.p,{children:["For OSS, Iceberg doesn't provide Iceberg Aliyun bundle jar which contains OSS packages, you could provide the OSS jar by yourself or use ",(0,n.jsx)(i.a,{href:"https://mvnrepository.com/artifact/org.apache.gravitino/gravitino-aliyun-bundle",children:"Gravitino Aliyun bundle jar with Hadoop and cloud packages"}),", please refer to ",(0,n.jsx)(i.a,{href:"/docs/0.8.0-incubating/iceberg-rest-service#oss-configuration",children:"OSS configuration"})," for more details."]})}),"\n",(0,n.jsx)(i.p,{children:"The classpath of the server:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Iceberg REST server: the classpath differs in different deploy mode, please refer to ",(0,n.jsx)(i.a,{href:"/docs/0.8.0-incubating/iceberg-rest-service#server-management",children:"Server management"})," part."]}),"\n",(0,n.jsxs)(i.li,{children:["Hadoop catalog: ",(0,n.jsx)(i.code,{children:"catalogs/hadoop/libs/"})]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"usage-example",children:"Usage example"}),"\n",(0,n.jsx)(i.h3,{id:"credential-vending-for-iceberg-rest-server",children:"Credential vending for Iceberg REST server"}),"\n",(0,n.jsx)(i.p,{children:"Suppose the Iceberg table data is stored in S3, follow the steps below:"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:["Download the ",(0,n.jsx)(i.a,{href:"https://mvnrepository.com/artifact/org.apache.gravitino/gravitino-aws",children:"Gravitino AWS bundle jar without hadoop packages"}),", and place it to the classpath of Iceberg REST server."]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:"Add s3 token credential configurations."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{children:"gravitino.iceberg-rest.warehouse = s3://{bucket_name}/{warehouse_path}\ngravitino.iceberg-rest.io-impl= org.apache.iceberg.aws.s3.S3FileIO\ngravitino.iceberg-rest.credential-providers = s3-token\ngravitino.iceberg-rest.s3-access-key-id = xxx\ngravitino.iceberg-rest.s3-secret-access-key = xxx\ngravitino.iceberg-rest.s3-region = {region_name}\ngravitino.iceberg-rest.s3-role-arn = {role_arn}\n"})}),"\n",(0,n.jsxs)(i.ol,{start:"3",children:["\n",(0,n.jsx)(i.li,{children:"Exploring the Iceberg table with Spark client with credential vending enabled."}),"\n"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-shell",children:"./bin/spark-sql -v \\\n--packages org.apache.iceberg:iceberg-spark-runtime-3.4_2.12:1.3.1 \\\n--conf spark.jars={path}/iceberg-aws-bundle-1.5.2.jar \\\n--conf spark.sql.extensions=org.apache.iceberg.spark.extensions.IcebergSparkSessionExtensions \\\n--conf spark.sql.catalog.rest=org.apache.iceberg.spark.SparkCatalog  \\\n--conf spark.sql.catalog.rest.type=rest  \\\n--conf spark.sql.catalog.rest.uri=http://127.0.0.1:9001/iceberg/ \\\n--conf spark.sql.catalog.rest.header.X-Iceberg-Access-Delegation=vended-credentials\n"})})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}}}]);