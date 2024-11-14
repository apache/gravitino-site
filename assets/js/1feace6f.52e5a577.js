"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[42784],{1393:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>h,contentTitle:()=>o,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var t=n(13274),r=n(8438);const a={title:"Authorization Push-down",slug:"/security/authorization-push-down",keyword:"security",license:"This software is licensed under the Apache License version 2."},o=void 0,s={id:"security/authorization-pushdown",title:"Authorization Push-down",description:"Authorization Push-down",source:"@site/versioned_docs/version-0.7.0-incubating/security/authorization-pushdown.md",sourceDirName:"security",slug:"/security/authorization-push-down",permalink:"/docs/0.7.0-incubating/security/authorization-push-down",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/security/authorization-pushdown.md",tags:[],version:"0.7.0-incubating",lastUpdatedBy:"Qian Xia",lastUpdatedAt:1731578623e3,frontMatter:{title:"Authorization Push-down",slug:"/security/authorization-push-down",keyword:"security",license:"This software is licensed under the Apache License version 2."}},h={},d=[{value:"Authorization Push-down",id:"authorization-push-down",level:2},{value:"Authorization Hive with Ranger properties",id:"authorization-hive-with-ranger-properties",level:3},{value:"Example of using the Authorization Ranger Hive Plugin",id:"example-of-using-the-authorization-ranger-hive-plugin",level:4}];function c(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h2,{id:"authorization-push-down",children:"Authorization Push-down"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"authorization push down",src:n(87761).A+"",width:"2016",height:"1790"})}),"\n",(0,t.jsx)(i.p,{children:"Gravitino offers a set of authorization frameworks that integrate with various underlying data source permission systems, such as MySQL's native permission management and Apache Ranger for big data. These frameworks align with Gravitino's own authorization model and methodology.\nGravitino manages different data sources through Catalogs, and when a user performs an authorization operation on data within a Catalog, Gravitino invokes the Authorization Plugin module for that Catalog.\nThis module translates Gravitino's authorization model into the permission rules of the underlying data source. The permissions are then enforced by the underlying permission system via the respective client, such as JDBC or the Apache Ranger client."}),"\n",(0,t.jsx)(i.h3,{id:"authorization-hive-with-ranger-properties",children:"Authorization Hive with Ranger properties"}),"\n",(0,t.jsxs)(i.p,{children:["In order to use the Authorization Ranger Hive Plugin, you need to configure the following properties and ",(0,t.jsx)(i.a,{href:"/docs/0.7.0-incubating/apache-hive-catalog#catalog-properties",children:"Apache Hive catalog properties"}),":"]}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Property Name"}),(0,t.jsx)(i.th,{children:"Description"}),(0,t.jsx)(i.th,{children:"Default Value"}),(0,t.jsx)(i.th,{children:"Required"}),(0,t.jsx)(i.th,{children:"Since Version"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"authorization-provider"})}),(0,t.jsxs)(i.td,{children:["Providers to use to implement authorization plugin such as ",(0,t.jsx)(i.code,{children:"ranger"}),"."]}),(0,t.jsx)(i.td,{children:"(none)"}),(0,t.jsx)(i.td,{children:"No"}),(0,t.jsx)(i.td,{children:"0.6.0-incubating"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"authorization.ranger.admin.url"})}),(0,t.jsx)(i.td,{children:"The Apache Ranger web URIs."}),(0,t.jsx)(i.td,{children:"(none)"}),(0,t.jsx)(i.td,{children:"No"}),(0,t.jsx)(i.td,{children:"0.6.0-incubating"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"authorization.ranger.auth.type"})}),(0,t.jsxs)(i.td,{children:["The Apache Ranger authentication type ",(0,t.jsx)(i.code,{children:"simple"})," or ",(0,t.jsx)(i.code,{children:"kerberos"}),"."]}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"simple"})}),(0,t.jsx)(i.td,{children:"No"}),(0,t.jsx)(i.td,{children:"0.6.0-incubating"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"authorization.ranger.username"})}),(0,t.jsx)(i.td,{children:"The Apache Ranger admin web login username (auth type=simple), or kerberos principal(auth type=kerberos), Need have Ranger administrator permission."}),(0,t.jsx)(i.td,{children:"(none)"}),(0,t.jsx)(i.td,{children:"No"}),(0,t.jsx)(i.td,{children:"0.6.0-incubating"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"authorization.ranger.password"})}),(0,t.jsx)(i.td,{children:"The Apache Ranger admin web login user password (auth type=simple), or path of the keytab file(auth type=kerberos)"}),(0,t.jsx)(i.td,{children:"(none)"}),(0,t.jsx)(i.td,{children:"No"}),(0,t.jsx)(i.td,{children:"0.6.0-incubating"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"authorization.ranger.service.name"})}),(0,t.jsx)(i.td,{children:"The Apache Ranger service name."}),(0,t.jsx)(i.td,{children:"(none)"}),(0,t.jsx)(i.td,{children:"No"}),(0,t.jsx)(i.td,{children:"0.6.0-incubating"})]})]})]}),"\n",(0,t.jsxs)(i.p,{children:["Once you have used the correct configuration, you can perform authorization operations by calling Gravitino ",(0,t.jsx)(i.a,{href:"https://gravitino.apache.org/docs/latest/api/rest/grant-roles-to-a-user",children:"authorization RESTful API"}),"."]}),"\n",(0,t.jsx)(i.h4,{id:"example-of-using-the-authorization-ranger-hive-plugin",children:"Example of using the Authorization Ranger Hive Plugin"}),"\n",(0,t.jsxs)(i.p,{children:["Suppose you have an Apache Hive service in your datacenter and have created a ",(0,t.jsx)(i.code,{children:"hiveRepo"})," in Apache Ranger to manage its permissions.\nThe Ranger service is accessible at ",(0,t.jsx)(i.code,{children:"172.0.0.100:6080"}),", with the username ",(0,t.jsx)(i.code,{children:"Jack"})," and the password ",(0,t.jsx)(i.code,{children:"PWD123"}),".\nTo add this Hive service to Gravitino using the Hive catalog, you'll need to configure the following parameters."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-properties",children:"authorization-provider=ranger\nauthorization.ranger.admin.url=172.0.0.100:6080\nauthorization.ranger.auth.type=simple\nauthorization.ranger.username=Jack\nauthorization.ranger.password=PWD123\nauthorization.ranger.service.name=hiveRepo\n"})}),"\n",(0,t.jsx)(i.admonition,{type:"caution",children:(0,t.jsx)(i.p,{children:"Gravitino 0.6.0 only supports the authorization Apache Ranger Hive service and more data source authorization is under development."})})]})}function l(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},87761:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/authorization-pushdown-4ed3aad2fcf51c080732e0eb55586380.png"}}]);