"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[52970],{17014:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>c});var s=r(79474);const n={},i=s.createContext(n);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(i.Provider,{value:t},e.children)}},93786:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>a,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var s=r(13274),n=r(17014);const i={title:"How to use HTTPS",slug:"/security/how-to-use-https",keyword:"security HTTPS protocol",license:"This software is licensed under the Apache License version 2."},o=void 0,c={id:"security/how-to-use-https",title:"How to use HTTPS",description:"HTTPS",source:"@site/versioned_docs/version-0.6.0-incubating/security/how-to-use-https.md",sourceDirName:"security",slug:"/security/how-to-use-https",permalink:"/docs/0.6.0-incubating/security/how-to-use-https",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/security/how-to-use-https.md",tags:[],version:"0.6.0-incubating",lastUpdatedBy:"Justin Mclean",lastUpdatedAt:1740469354e3,frontMatter:{title:"How to use HTTPS",slug:"/security/how-to-use-https",keyword:"security HTTPS protocol",license:"This software is licensed under the Apache License version 2."},sidebar:"docs",previous:{title:"How to use CORS",permalink:"/docs/0.6.0-incubating/security/how-to-use-cors"},next:{title:"Use Gravitino playground",permalink:"/docs/0.6.0-incubating/how-to-use-the-playground"}},d={},l=[{value:"HTTPS",id:"https",level:2},{value:"Apache Gravitino server&#39;s configuration",id:"apache-gravitino-servers-configuration",level:3},{value:"Apache Iceberg REST service&#39;s configuration",id:"apache-iceberg-rest-services-configuration",level:3},{value:"Example",id:"example",level:3}];function h(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"https",children:"HTTPS"}),"\n",(0,s.jsx)(t.p,{children:"For users choosing OAuth 2.0 as the authentication method, it is recommended to use HTTPS instead of HTTP. HTTPS encrypts the request headers, offering better protection against smuggling attacks."}),"\n",(0,s.jsx)(t.p,{children:"Note that Gravitino cannot simultaneously support both HTTP and HTTPS within a single server instance. If HTTPS is enabled, Gravitino will no longer provide HTTP service."}),"\n",(0,s.jsx)(t.p,{children:"Currently, both the Gravitino server and Iceberg REST service can configure and support HTTPS."}),"\n",(0,s.jsx)(t.h3,{id:"apache-gravitino-servers-configuration",children:"Apache Gravitino server's configuration"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Configuration item"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default value"}),(0,s.jsx)(t.th,{children:"Required"}),(0,s.jsx)(t.th,{children:"Since version"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"gravitino.server.webserver.enableHttps"})}),(0,s.jsx)(t.td,{children:"Enables HTTPS."}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"false"})}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"0.3.0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"gravitino.server.webserver.httpsPort"})}),(0,s.jsx)(t.td,{children:"The HTTPS port number of the Jetty web server."}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"8433"})}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"0.3.0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"gravitino.server.webserver.keyStorePath"})}),(0,s.jsx)(t.td,{children:"Path to the key store file."}),(0,s.jsx)(t.td,{children:"(none)"}),(0,s.jsx)(t.td,{children:"Yes if use HTTPS"}),(0,s.jsx)(t.td,{children:"0.3.0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"gravitino.server.webserver.keyStorePassword"})}),(0,s.jsx)(t.td,{children:"Password to the key store."}),(0,s.jsx)(t.td,{children:"(none)"}),(0,s.jsx)(t.td,{children:"Yes if use HTTPS"}),(0,s.jsx)(t.td,{children:"0.3.0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"gravitino.server.webserver.keyStoreType"})}),(0,s.jsx)(t.td,{children:"The type to the key store."}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"JKS"})}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"0.3.0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"gravitino.server.webserver.managerPassword"})}),(0,s.jsx)(t.td,{children:"Manager password to the key store."}),(0,s.jsx)(t.td,{children:"(none)"}),(0,s.jsx)(t.td,{children:"Yes if use HTTPS"}),(0,s.jsx)(t.td,{children:"0.3.0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"gravitino.server.webserver.tlsProtocol"})}),(0,s.jsx)(t.td,{children:"TLS protocol to use. The JVM must support the TLS protocol to use."}),(0,s.jsx)(t.td,{children:"(none)"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"0.3.0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"gravitino.server.webserver.enableCipherAlgorithms"})}),(0,s.jsx)(t.td,{children:"The collection of enabled cipher algorithms."}),(0,s.jsx)(t.td,{children:"'' (empty string)"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"0.3.0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"gravitino.server.webserver.enableClientAuth"})}),(0,s.jsx)(t.td,{children:"Enables the authentication of the client."}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"false"})}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"0.3.0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"gravitino.server.webserver.trustStorePath"})}),(0,s.jsx)(t.td,{children:"Path to the trust store file."}),(0,s.jsx)(t.td,{children:"(none)"}),(0,s.jsx)(t.td,{children:"Yes if use HTTPS and the authentication of client"}),(0,s.jsx)(t.td,{children:"0.3.0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"gravitino.server.webserver.trustStorePassword"})}),(0,s.jsx)(t.td,{children:"Password to the trust store."}),(0,s.jsx)(t.td,{children:"(none)"}),(0,s.jsx)(t.td,{children:"Yes if use HTTPS and the authentication of client"}),(0,s.jsx)(t.td,{children:"0.3.0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"gravitino.server.webserver.trustStoreType"})}),(0,s.jsx)(t.td,{children:"The type to the trust store."}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"JKS"})}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"0.3.0"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"apache-iceberg-rest-services-configuration",children:"Apache Iceberg REST service's configuration"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Configuration item"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default value"}),(0,s.jsx)(t.th,{children:"Required"}),(0,s.jsx)(t.th,{children:"Since version"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"gravitino.iceberg-rest.enableHttps"})}),(0,s.jsx)(t.td,{children:"Enables HTTPS."}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"false"})}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"0.3.0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"gravitino.iceberg-rest.httpsPort"})}),(0,s.jsx)(t.td,{children:"The HTTPS port number of the Jetty web server."}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"9433"})}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"0.3.0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"gravitino.iceberg-rest.keyStorePath"})}),(0,s.jsx)(t.td,{children:"Path to the key store file."}),(0,s.jsx)(t.td,{children:"(none)"}),(0,s.jsx)(t.td,{children:"Yes if use HTTPS"}),(0,s.jsx)(t.td,{children:"0.3.0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"gravitino.iceberg-rest.keyStorePassword"})}),(0,s.jsx)(t.td,{children:"Password to the key store."}),(0,s.jsx)(t.td,{children:"(none)"}),(0,s.jsx)(t.td,{children:"Yes if use HTTPS"}),(0,s.jsx)(t.td,{children:"0.3.0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"gravitino.iceberg-rest.keyStoreType"})}),(0,s.jsx)(t.td,{children:"The type to the key store."}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"JKS"})}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"0.3.0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"gravitino.iceberg-rest.managerPassword"})}),(0,s.jsx)(t.td,{children:"Manager password to the key store."}),(0,s.jsx)(t.td,{children:"(none)"}),(0,s.jsx)(t.td,{children:"Yes if use HTTPS"}),(0,s.jsx)(t.td,{children:"0.3.0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"gravitino.iceberg-rest.tlsProtocol"})}),(0,s.jsx)(t.td,{children:"TLS protocol to use. The JVM must support the TLS protocol to use."}),(0,s.jsx)(t.td,{children:"(none)"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"0.3.0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"gravitino.iceberg-rest.enableCipherAlgorithms"})}),(0,s.jsx)(t.td,{children:"The collection of enabled cipher algorithms."}),(0,s.jsx)(t.td,{children:"'' (empty string)"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"0.3.0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"gravitino.iceberg-rest.enableClientAuth"})}),(0,s.jsx)(t.td,{children:"Enables the authentication of the client."}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"false"})}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"0.3.0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"gravitino.iceberg-rest.trustStorePath"})}),(0,s.jsx)(t.td,{children:"Path to the trust store file."}),(0,s.jsx)(t.td,{children:"(none)"}),(0,s.jsx)(t.td,{children:"Yes if use HTTPS and the authentication of client"}),(0,s.jsx)(t.td,{children:"0.3.0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"gravitino.iceberg-rest.trustStorePassword"})}),(0,s.jsx)(t.td,{children:"Password to the trust store."}),(0,s.jsx)(t.td,{children:"(none)"}),(0,s.jsx)(t.td,{children:"Yes if use HTTPS and the authentication of client"}),(0,s.jsx)(t.td,{children:"0.3.0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"gravitino.iceberg-rest.trustStoreType"})}),(0,s.jsx)(t.td,{children:"The type to the trust store."}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"JKS"})}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"0.3.0"})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:['Refer to the "Additional JSSE Standard Names" section of the ',(0,s.jsx)(t.a,{href:"https://docs.oracle.com/javase/8/docs/technotes/guides/security/StandardNames.html#jssenames",children:"Java security guide"})," for the list of protocols related to tlsProtocol. You can find the list of ",(0,s.jsx)(t.code,{children:"tlsProtocol"})," values for Java 8 in this document."]}),"\n",(0,s.jsxs)(t.p,{children:['Refer to the "Additional JSSE Standard Names" section of the ',(0,s.jsx)(t.a,{href:"https://docs.oracle.com/javase/8/docs/technotes/guides/security/StandardNames.html#ciphersuites",children:"Java security guide"})," for the list of protocols related to tlsProtocol. You can find the list of ",(0,s.jsx)(t.code,{children:"enableCipherAlgorithms"})," values for Java 8 in this document."]}),"\n",(0,s.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.p,{children:"You can follow the steps to set up an HTTPS server."}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Prerequisite","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"You need to install the JDK8, wget, and set the environment JAVA_HOME."}),"\n",(0,s.jsxs)(t.li,{children:["If you want to use the command ",(0,s.jsx)(t.code,{children:"curl"})," to request the Gravitino server, you should install openSSL."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.li,{children:"Generate the key store"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:'cd $JAVA_HOME\nbin/keytool -genkeypair  -alias localhost \\\n-keyalg RSA -keysize 4096 -keypass localhost \\\n-sigalg SHA256withRSA \\\n-keystore localhost.jks -storetype JKS -storepass localhost \\\n-dname "cn=localhost,ou=localhost,o=localhost,l=beijing,st=beijing,c=cn" \\\n-validity 36500\n'})}),"\n",(0,s.jsxs)(t.ol,{start:"3",children:["\n",(0,s.jsx)(t.li,{children:"Generate the certificate"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"bin/keytool -export -alias localhost -keystore localhost.jks -file  localhost.crt -storepass localhost\n"})}),"\n",(0,s.jsxs)(t.ol,{start:"4",children:["\n",(0,s.jsx)(t.li,{children:"Import the certificate"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"bin/keytool -import -alias localhost -keystore jre/lib/security/cacerts -file localhost.crt -storepass changeit -noprompt\n"})}),"\n",(0,s.jsxs)(t.ol,{start:"5",children:["\n",(0,s.jsxs)(t.li,{children:["You can refer to the ",(0,s.jsx)(t.a,{href:"/docs/0.6.0-incubating/gravitino-server-config",children:"Configurations"})," and append the configuration to the conf/gravitino.conf.\nConfiguration doesn't support resolving environment variables, so you should replace ",(0,s.jsx)(t.code,{children:"${JAVA_HOME}"})," with the actual value.\nThen, You can start the Gravitino server."]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-text",children:"gravitino.server.webserver.host = localhost\ngravitino.server.webserver.enableHttps = true\ngravitino.server.webserver.keyStorePath = ${JAVA_HOME}/localhost.jks\ngravitino.server.webserver.keyStorePassword = localhost\ngravitino.server.webserver.managerPassword = localhost\n"})}),"\n",(0,s.jsxs)(t.ol,{start:"6",children:["\n",(0,s.jsx)(t.li,{children:"Request the Gravitino server"}),"\n"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"If you use Java, you can copy the code below to a file named Main.java"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:'import org.apache.gravitino.client.GravitinoClient;\nimport org.apache.gravitino.client.GravitinoVersion;\n\npublic class Main {\n    public static void main(String[] args) {\n        String uri = "https://localhost:8433";\n        GravitinoClient client = GravitinoClient.builder(uri).withMetalake("metalake").build();\n        GravitinoVersion gravitinoVersion = client.getVersion();\n        System.out.println(gravitinoVersion);\n    }\n}\n'})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["If you want to use the command ",(0,s.jsx)(t.code,{children:"curl"}),", you can follow the commands:"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:'openssl x509 -inform der -in $JAVA_HOME/localhost.crt -out certificate.pem\ncurl -v -X GET --cacert ./certificate.pem -H "Accept: application/vnd.gravitino.v1+json" -H "Content-Type: application/json" https://localhost:8433/api/version\n'})})]})}function a(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}}}]);