"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[93412],{14151:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/publish-docker-image-cacc75c5bae25ffea862416f927112d7.png"},16969:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>o,default:()=>d,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var s=n(13274),r=n(17014);const t={title:"Publish Docker images",slug:"/publish-docker-images",keyword:"docker",license:"This software is licensed under the Apache License version 2."},o=void 0,c={id:"publish-docker-images",title:"Publish Docker images",description:"Introduction",source:"@site/versioned_docs/version-0.8.0-incubating/publish-docker-images.md",sourceDirName:".",slug:"/publish-docker-images",permalink:"/docs/0.8.0-incubating/publish-docker-images",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/publish-docker-images.md",tags:[],version:"0.8.0-incubating",frontMatter:{title:"Publish Docker images",slug:"/publish-docker-images",keyword:"docker",license:"This software is licensed under the Apache License version 2."},sidebar:"docs",previous:{title:"How to sign and verify",permalink:"/docs/0.8.0-incubating/how-to-sign-releases"},next:{title:"Docker image details",permalink:"/docs/0.8.0-incubating/docker-image-details"}},a={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Publish Docker images to Docker Hub",id:"publish-docker-images-to-docker-hub",level:2},{value:"More details of Apache Gravitino Docker images",id:"more-details-of-apache-gravitino-docker-images",level:2}];function h(e){const i={a:"a",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsxs)(i.p,{children:["The Apache Gravitino project provides a set of Docker images to facilitate the publishing, development, and testing of the Gravitino project.\n",(0,s.jsx)(i.a,{href:"https://hub.docker.com/u/apache",children:"Apache Docker Hub"})," repository publishes the official Gravitino Docker images."]}),"\n",(0,s.jsx)(i.h2,{id:"publish-docker-images-to-docker-hub",children:"Publish Docker images to Docker Hub"}),"\n",(0,s.jsx)(i.p,{children:"You can use GitHub actions to publish Docker images to the Docker Hub repository."}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["Open the ",(0,s.jsx)(i.a,{href:"https://github.com/apache/gravitino/actions/workflows/docker-image.yml",children:"Docker publish link"})]}),"\n",(0,s.jsxs)(i.li,{children:["Click the ",(0,s.jsx)(i.code,{children:"Run workflow"})," button."]}),"\n",(0,s.jsxs)(i.li,{children:["Select the branch you want to build","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Selecting the main branch results in publishing the Docker image with the specified tag and the latest tag."}),"\n",(0,s.jsx)(i.li,{children:"Selecting another branch, results are publishing the Docker image with the specified tag."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["Choose the image you want to build","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"apache/gravitino-ci:hive"}),"."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"apache/gravitino-ci:trino"}),"."]}),"\n",(0,s.jsx)(i.li,{children:"Future plans include support for other data sources."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["Input the ",(0,s.jsx)(i.code,{children:"tag name"}),", for example: ",(0,s.jsx)(i.code,{children:"0.1.0"}),", Then build and push the Docker image name. Currently, the Docker image name is in the format:","\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"apache/gravitino-ci:{image-type}-0.1.0"})," if this is a trino CI image, image-type is ",(0,s.jsx)(i.code,{children:"trino"}),", ",(0,s.jsx)(i.code,{children:"hive"}),", ",(0,s.jsx)(i.code,{children:"kerberos-hive"}),", ",(0,s.jsx)(i.code,{children:"doris"}),", ",(0,s.jsx)(i.code,{children:"ranger"}),"."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"apache/gravitino-playground:{image-type}-0.1.0"})," if this is a playground image, image-type is ",(0,s.jsx)(i.code,{children:"trino"}),", ",(0,s.jsx)(i.code,{children:"hive"}),", ",(0,s.jsx)(i.code,{children:"ranger"}),"."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"apache/gravitino:0.1.0"})," if this is a gravitino server image."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"apache/gravitino-iceberg-rest:0.1.0"})," if this is an iceberg-rest server image."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["You must enter the correct ",(0,s.jsx)(i.code,{children:"docker user name"}),"and ",(0,s.jsx)(i.code,{children:"publish docker token"})," before you can execute run ",(0,s.jsx)(i.code,{children:"Publish Docker Image"})," workflow."]}),"\n",(0,s.jsxs)(i.li,{children:["If you want to update the latest tag, select the box for ",(0,s.jsx)(i.code,{children:"Whether to update the latest tag"}),"."]}),"\n",(0,s.jsxs)(i.li,{children:["Wait for the workflow to complete. You can see a new Docker image shown in the ",(0,s.jsx)(i.a,{href:"https://hub.docker.com/u/apache",children:"Apache Docker Hub"})," repository."]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Publish Docker image",src:n(14151).A+"",width:"672",height:"888"})}),"\n",(0,s.jsx)(i.h2,{id:"more-details-of-apache-gravitino-docker-images",children:"More details of Apache Gravitino Docker images"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"/docs/0.8.0-incubating/docker-image-details",children:"Gravitino Docker images"})}),"\n"]})]})}function d(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},17014:(e,i,n)=>{n.d(i,{R:()=>o,x:()=>c});var s=n(79474);const r={},t=s.createContext(r);function o(e){const i=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(t.Provider,{value:i},e.children)}}}]);