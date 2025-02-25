"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[90108],{2424:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/test-fail-pr-c884fe0841a2f6c9f35c4163a4627f5f.png"},6516:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/test-fail-summary-36db2e4901f9906fb10edaa4c5cf705e.png"},17014:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>d});var i=n(79474);const s={},o=i.createContext(s);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}},41749:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var i=n(13274),s=n(17014);const o={title:"How to test Apache Gravitino",slug:"/how-to-test",license:"This software is licensed under the Apache License version 2."},r=void 0,d={id:"how-to-test",title:"How to test Apache Gravitino",description:"Apache Gravitino has two types of tests:",source:"@site/versioned_docs/version-0.6.1-incubating/how-to-test.md",sourceDirName:".",slug:"/how-to-test",permalink:"/docs/0.6.1-incubating/how-to-test",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/how-to-test.md",tags:[],version:"0.6.1-incubating",lastUpdatedBy:"Justin Mclean",lastUpdatedAt:1740469354e3,frontMatter:{title:"How to test Apache Gravitino",slug:"/how-to-test",license:"This software is licensed under the Apache License version 2."},sidebar:"docs",previous:{title:"How to build",permalink:"/docs/0.6.1-incubating/how-to-build"},next:{title:"How to sign and verify",permalink:"/docs/0.6.1-incubating/how-to-sign-releases"}},a={},l=[{value:"Run the unit tests",id:"run-the-unit-tests",level:2},{value:"Run the integration tests",id:"run-the-integration-tests",level:2},{value:"Run the integration tests in embedded mode",id:"run-the-integration-tests-in-embedded-mode",level:3},{value:"Deploy the Apache Gravitino server and run the integration tests in deploy mode",id:"deploy-the-apache-gravitino-server-and-run-the-integration-tests-in-deploy-mode",level:3},{value:"Skip tests",id:"skip-tests",level:2},{value:"Configuring parameters for integration tests",id:"configuring-parameters-for-integration-tests",level:2},{value:"<code>DISPLAY_WEBPAGE_IN_TESTING</code>",id:"display_webpage_in_testing",level:3},{value:"Docker test environment",id:"docker-test-environment",level:2},{value:"Running all the integration tests",id:"running-all-the-integration-tests",level:2},{value:"How to debug Apache Gravitino server and integration tests in embedded mode",id:"how-to-debug-apache-gravitino-server-and-integration-tests-in-embedded-mode",level:2},{value:"How to debug Apache Gravitino server and integration tests in deploy mode",id:"how-to-debug-apache-gravitino-server-and-integration-tests-in-deploy-mode",level:2},{value:"Running on GitHub actions",id:"running-on-github-actions",level:2},{value:"Test failure and test log",id:"test-failure-and-test-log",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Apache Gravitino has two types of tests:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Unit tests, focus on the functionalities of the specific class, module, or component."}),"\n",(0,i.jsx)(t.li,{children:"Integration tests, end-to-end tests that cover the whole system."}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{title:"before test",type:"note",children:(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"If you want to run the complete integration test suites, you need to install Docker in your\nenvironment."}),"\n",(0,i.jsxs)(t.li,{children:["Refer to ",(0,i.jsx)(t.a,{href:"/docs/0.6.1-incubating/how-to-build",children:"How to build Gravitino"})," to make sure you have\na build environment ready."]}),"\n",(0,i.jsxs)(t.li,{children:["You can use ",(0,i.jsx)(t.a,{href:"https://orbstack.dev/",children:"OrbStack"})," to replace Docker Desktop\non macOS. OrbStack automatically configures the network between the Docker containers."]}),"\n",(0,i.jsxs)(t.li,{children:["If you are using Docker Desktop for macOS, launch the\n",(0,i.jsx)(t.a,{href:"https://github.com/wenjunxiao/mac-docker-connector",children:"mac-docker-connector"})," before running the tests.\nRead ",(0,i.jsx)(t.code,{children:"$GRAVITINO_HOME/dev/docker/tools/README.md"})," and\n",(0,i.jsx)(t.code,{children:"$GRAVITINO_HOME/dev/docker/tools/mac-docker-connector.sh"})," for more details."]}),"\n"]})}),"\n",(0,i.jsx)(t.h2,{id:"run-the-unit-tests",children:"Run the unit tests"}),"\n",(0,i.jsx)(t.p,{children:"To run the unit tests, run the following command:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"\n./gradlew test -PskipITs\n"})}),"\n",(0,i.jsx)(t.p,{children:"This command runs all the unit tests and skips the integration tests."}),"\n",(0,i.jsx)(t.h2,{id:"run-the-integration-tests",children:"Run the integration tests"}),"\n",(0,i.jsxs)(t.p,{children:["Gravitino has two modes to run the integration tests, the default ",(0,i.jsx)(t.code,{children:"embedded"})," mode and ",(0,i.jsx)(t.code,{children:"deploy"})," mode."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["In ",(0,i.jsx)(t.code,{children:"embedded"})," mode, the integration test starts an embedded ",(0,i.jsx)(t.code,{children:"MiniGravitino"})," server\nwithin the same process as the integration test to run the integration tests."]}),"\n",(0,i.jsxs)(t.li,{children:["In ",(0,i.jsx)(t.code,{children:"deploy"})," mode, you have to build (",(0,i.jsx)(t.code,{children:"./gradlew compileDistribution"}),") a Gravitino binary package beforehand. The\nintegration test launches and connects to the local Gravitino server to run the integration\ntests."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"run-the-integration-tests-in-embedded-mode",children:"Run the integration tests in embedded mode"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Run the ",(0,i.jsx)(t.code,{children:"./gradlew build -x test"})," command to build the Gravitino project."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Use the ",(0,i.jsx)(t.code,{children:"./gradlew test [--rerun-tasks] -PskipTests -PtestMode=embedded"})," commands to run the\nintegration tests."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["Running the ",(0,i.jsx)(t.code,{children:"./gradlew build"})," command triggers the build and runs the integration tests in embedded mode."]})}),"\n",(0,i.jsx)(t.h3,{id:"deploy-the-apache-gravitino-server-and-run-the-integration-tests-in-deploy-mode",children:"Deploy the Apache Gravitino server and run the integration tests in deploy mode"}),"\n",(0,i.jsx)(t.p,{children:"To deploy the Gravitino server locally to run the integration tests, follow these steps:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Run the ",(0,i.jsx)(t.code,{children:"./gradlew build -x test"})," command to build the Gravitino project."]}),"\n",(0,i.jsxs)(t.li,{children:["Use the ",(0,i.jsx)(t.code,{children:"./gradlew compileDistribution"})," command to compile and package the Gravitino project\nin the ",(0,i.jsx)(t.code,{children:"distribution"})," directory."]}),"\n",(0,i.jsxs)(t.li,{children:["Use the ",(0,i.jsx)(t.code,{children:"./gradlew test [--rerun-tasks] -PskipTests -PtestMode=deploy"})," command to run the\nintegration tests in the ",(0,i.jsx)(t.code,{children:"distribution"})," directory."]}),"\n",(0,i.jsxs)(t.li,{children:["Use the ",(0,i.jsx)(t.code,{children:"bash integration-test/trino-test-tools/trino_test.sh"})," command to run all the\nTrino test sets in the ",(0,i.jsx)(t.code,{children:"integration-test/src/test/resources/trino-ci-testset/testsets"})," directory."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"skip-tests",children:"Skip tests"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Skip unit tests by using the ",(0,i.jsx)(t.code,{children:"./gradlew build -PskipTests"})," command."]}),"\n",(0,i.jsxs)(t.li,{children:["Skip integration tests by using the ",(0,i.jsx)(t.code,{children:"./gradlew build -PskipITs"})," command."]}),"\n",(0,i.jsxs)(t.li,{children:["Skip web frontend integration tests by using the ",(0,i.jsx)(t.code,{children:"./gradlew build -PskipWebITs"})," command."]}),"\n",(0,i.jsxs)(t.li,{children:["Skip both unit tests and integration tests by using the ",(0,i.jsx)(t.code,{children:"./gradlew build -x test"})," or ",(0,i.jsx)(t.code,{children:"./gradlew build -PskipTests -PskipITs"})," commands."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"configuring-parameters-for-integration-tests",children:"Configuring parameters for integration tests"}),"\n",(0,i.jsx)(t.h3,{id:"display_webpage_in_testing",children:(0,i.jsx)(t.code,{children:"DISPLAY_WEBPAGE_IN_TESTING"})}),"\n",(0,i.jsxs)(t.p,{children:["By default, the Gravitino web frontend page will not pop up when running integration tests.\nIf you wish to display the web frontend page during integrations test, you can set the ",(0,i.jsx)(t.code,{children:"DISPLAY_WEBPAGE_IN_TESTING"})," environment variable in ",(0,i.jsx)(t.code,{children:"setIntegrationTestEnvironment"})," in file build.gradle.kts.\nFor example:\n",(0,i.jsx)(t.code,{children:'param.environment("DISPLAY_WEBPAGE_IN_TESTING", true)'})]}),"\n",(0,i.jsx)(t.h2,{id:"docker-test-environment",children:"Docker test environment"}),"\n",(0,i.jsx)(t.p,{children:"Some integration test cases depend on the Gravitino CI Docker image."}),"\n",(0,i.jsxs)(t.p,{children:["If an integration test relies on the specific Gravitino CI Docker image,\nset the ",(0,i.jsx)(t.code,{children:"@tag(gravitino-docker-test)"})," annotation in the test class.\nFor example, the ",(0,i.jsx)(t.code,{children:"integration-test/src/test/.../CatalogHiveIT.java"})," test needs to connect to\nthe ",(0,i.jsx)(t.code,{children:"apache/gravitino-ci:hive-{hive-version}"})," Docker container for testing the Hive data source.\nTherefore, it should have the following ",(0,i.jsx)(t.code,{children:"@tag"})," annotation:",(0,i.jsx)(t.code,{children:"@tag(gravitino-docker-test)"}),". This annotation\nhelps identify the specific Docker container required for the integration test."]}),"\n",(0,i.jsx)(t.p,{children:"For example:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:'@Tag("gravitino-docker-test")\npublic class CatalogHiveIT extends AbstractIT {\n...\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"running-all-the-integration-tests",children:"Running all the integration tests"}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Make sure that the ",(0,i.jsx)(t.code,{children:"Docker server"})," is running before running all the\nintegration tests. Otherwise, it only runs the integration tests without the ",(0,i.jsx)(t.code,{children:"gravitino-docker-test"})," tag."]}),"\n",(0,i.jsxs)(t.li,{children:["On macOS, be sure to run the ",(0,i.jsx)(t.code,{children:"${GRAVITINO_HOME}/dev/docker/tools/mac-docker-connector.sh"}),"\nscript before running the integration tests; or make sure that\n",(0,i.jsx)(t.a,{href:"https://orbstack.dev/",children:"OrbStack"})," is running."]}),"\n"]})}),"\n",(0,i.jsx)(t.p,{children:"When integration tests run, they check the whole environment and output the status of the\nrequired environment, for example:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:"------------------ Check Docker environment ---------------------\nDocker server status ............................................ [running]\nmac-docker-connector status ..................................... [stop]\nOrbStack status ................................................. [yes]\nUsing Gravitino IT Docker container to run all integration tests. [deploy test]\n-----------------------------------------------------------------\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Complete integration tests only run when all the required environments are met. Otherwise,\nonly parts of them without the ",(0,i.jsx)(t.code,{children:"gravitino-docker-test"})," tag run."]}),"\n",(0,i.jsx)(t.h2,{id:"how-to-debug-apache-gravitino-server-and-integration-tests-in-embedded-mode",children:"How to debug Apache Gravitino server and integration tests in embedded mode"}),"\n",(0,i.jsxs)(t.p,{children:["By default, the integration tests run in the embedded mode, in which ",(0,i.jsx)(t.code,{children:"MiniGravitino"})," starts in the\nsame process. Debugging ",(0,i.jsx)(t.code,{children:"MiniGravitino"})," is simple and easy, you can modify any code in the\nGravitino project and set breakpoints anywhere."]}),"\n",(0,i.jsx)(t.h2,{id:"how-to-debug-apache-gravitino-server-and-integration-tests-in-deploy-mode",children:"How to debug Apache Gravitino server and integration tests in deploy mode"}),"\n",(0,i.jsx)(t.p,{children:"This mode is closer to the actual environment, but more complex to debug. To debug the Gravitino server code, follow these steps:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Run the ",(0,i.jsx)(t.code,{children:"./gradlew build -x test"})," command to build the Gravitino project."]}),"\n",(0,i.jsxs)(t.li,{children:["Use the ",(0,i.jsx)(t.code,{children:"./gradlew compileDistribution"})," command to republish the packaged project in the ",(0,i.jsx)(t.code,{children:"distribution"})," directory."]}),"\n",(0,i.jsx)(t.li,{children:"If you are only debugging integration test codes, You don't have to do any setup to debug directly."}),"\n",(0,i.jsxs)(t.li,{children:["If you need to debug Gravitino server codes, follow these steps:","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Enable the ",(0,i.jsx)(t.code,{children:"GRAVITINO_DEBUG_OPTS"})," environment variable in the\n",(0,i.jsx)(t.code,{children:"distribution/package/conf/gravitino-env.sh"})," file to enable remote JVM debugging."]}),"\n",(0,i.jsxs)(t.li,{children:["Manually start the Gravitino server using the ",(0,i.jsx)(t.code,{children:"./distribution/package/bin/gravitino.sh start"})," command."]}),"\n",(0,i.jsxs)(t.li,{children:["Select the ",(0,i.jsx)(t.code,{children:"gravitino.server.main"})," module classpath in the ",(0,i.jsx)(t.code,{children:"Remote JVM Debug"})," to attach the\nGravitino server process and debug it."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"running-on-github-actions",children:"Running on GitHub actions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"GitHub Actions automatically run integration tests in the embedded and deploy modes when you\nsubmit a pull request."}),"\n",(0,i.jsxs)(t.li,{children:["View the test results in the ",(0,i.jsx)(t.code,{children:"Actions"})," tab of the pull request page."]}),"\n",(0,i.jsxs)(t.li,{children:["Run the integration tests in several steps:","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"The Gravitino integration tests pull the CI Docker image from the Docker Hub repository. This step typically takes around 15 seconds."}),"\n",(0,i.jsxs)(t.li,{children:["The Gravitino project compiles and packages in the ",(0,i.jsx)(t.code,{children:"distribution"})," directory using the ",(0,i.jsx)(t.code,{children:"./gradlew compileDistribution"})," command."]}),"\n",(0,i.jsxs)(t.li,{children:["Run the ",(0,i.jsx)(t.code,{children:"./gradlew test -PtestMode=[embedded|deploy]"})," command."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"test-failure-and-test-log",children:"Test failure and test log"}),"\n",(0,i.jsxs)(t.p,{children:["If a test fails, you can retrieve valuable information from the logs and test reports. Test reports are in the ",(0,i.jsx)(t.code,{children:"./build/reports"})," directory. The integration test logs are in the ",(0,i.jsx)(t.code,{children:"./integrate-test/build"})," directory. In deploy mode, Gravitino server logs are in the ",(0,i.jsx)(t.code,{children:"./distribution/package/logs/"})," directory."]}),"\n",(0,i.jsx)(t.p,{children:"In the event of a test failure within the GitHub workflow, the system generates archived logs and test reports. To obtain the archive, follow these steps:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Click the ",(0,i.jsx)(t.code,{children:"detail"})," link associated with the failed integration test in the pull request. This redirects you to the job page."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"pr page Image",src:n(2424).A+"",width:"1708",height:"350"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["On the job page, locate the ",(0,i.jsx)(t.code,{children:"Summary"})," button on the left-hand side and click it to access the workflow summary page."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"job page Image",src:n(71869).A+"",width:"1508",height:"476"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Look for the Artifacts item on the summary page and download the archive from there."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"summary page Image",src:n(6516).A+"",width:"1740",height:"862"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["You can also add the tag ",(0,i.jsx)(t.code,{children:"upload log"})," to your PR to upload the logs to the PR page. in this case, no matter the CI pipeline status, the logs will be uploaded to the PR page.\n",(0,i.jsx)(t.img,{alt:"upload log",src:n(92661).A+"",width:"1184",height:"873"})]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},71869:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/test-fail-job-6e459da3b3b1b522911b46ddb08e5a5b.png"},92661:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/upload-log-tag-56ea48b57ad34b04ca9cefd63f4aaefa.png"}}]);