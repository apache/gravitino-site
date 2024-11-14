"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[94229],{49942:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=i(13274),a=i(8438);const o={title:"Getting started with Apache Gravitino",slug:"/getting-started",license:"This software is licensed under the Apache License version 2."},s=void 0,l={id:"getting-started",title:"Getting started with Apache Gravitino",description:"There are several options for getting started with Apache Gravitino. Installing and configuring Hive and Trino can be a little complex, so if you are unfamiliar with the technologies it would be best to use Docker.",source:"@site/versioned_docs/version-0.7.0-incubating/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/docs/0.7.0-incubating/getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/getting-started.md",tags:[],version:"0.7.0-incubating",lastUpdatedBy:"Qian Xia",lastUpdatedAt:1731578623e3,frontMatter:{title:"Getting started with Apache Gravitino",slug:"/getting-started",license:"This software is licensed under the Apache License version 2."},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/0.7.0-incubating/overview"},next:{title:"How to install Gravitino",permalink:"/docs/0.7.0-incubating/how-to-install"}},r={},c=[{value:"Index",id:"index",level:3},{value:"Getting started on Amazon Web Services",id:"getting-started-on-amazon-web-services",level:2},{value:"Getting started on Google Cloud Platform",id:"getting-started-on-google-cloud-platform",level:2},{value:"Getting started locally",id:"getting-started-locally",level:2},{value:"Installing Apache Hive on AWS or Google Cloud Platform",id:"installing-apache-hive-on-aws-or-google-cloud-platform",level:2},{value:"Installing Apache Hive locally",id:"installing-apache-hive-locally",level:2},{value:"Installing Apache Gravitino playground on AWS or Google Cloud Platform",id:"installing-apache-gravitino-playground-on-aws-or-google-cloud-platform",level:2},{value:"Installing Apache Gravitino playground locally",id:"installing-apache-gravitino-playground-locally",level:2},{value:"Using REST to interact with Apache Gravitino",id:"using-rest-to-interact-with-apache-gravitino",level:2},{value:"Accessing Apache Gravitino on AWS externally",id:"accessing-apache-gravitino-on-aws-externally",level:2},{value:"Next steps",id:"next-steps",level:2}];function d(e){const n={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"There are several options for getting started with Apache Gravitino. Installing and configuring Hive and Trino can be a little complex, so if you are unfamiliar with the technologies it would be best to use Docker."}),"\n",(0,t.jsx)(n.p,{children:"If you want to download and install Gravitino:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["on AWS, see ",(0,t.jsx)(n.a,{href:"#getting-started-on-amazon-web-services",children:"Getting started on Amazon Web Services"})]}),"\n",(0,t.jsxs)(n.li,{children:["Google Cloud Platform, see ",(0,t.jsx)(n.a,{href:"#getting-started-on-google-cloud-platform",children:"Getting started on Google Cloud Platform"})]}),"\n",(0,t.jsxs)(n.li,{children:["locally, see ",(0,t.jsx)(n.a,{href:"#getting-started-locally",children:"Getting started locally"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"If you have your own Apache Gravitino setup and want to use Apache Hive:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["on AWS or Google Cloud Platform, see ",(0,t.jsx)(n.a,{href:"#installing-apache-hive-on-aws-or-google-cloud-platform",children:"Installing Apache Hive on AWS or Google Cloud Platform"})]}),"\n",(0,t.jsxs)(n.li,{children:["locally, see ",(0,t.jsx)(n.a,{href:"#installing-apache-hive-locally",children:"Installing Apache Hive locally"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"If you prefer to get started quickly and use Docker for Gravitino, Apache Hive, Trino, and others:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["on AWS or Google Cloud Platform, see ",(0,t.jsx)(n.a,{href:"#installing-apache-gravitino-playground-on-aws-or-google-cloud-platform",children:"Installing Gravitino playground on AWS or Google Cloud Platform"})]}),"\n",(0,t.jsxs)(n.li,{children:["locally, see ",(0,t.jsx)(n.a,{href:"#installing-apache-gravitino-playground-locally",children:"Installing Gravitino playground locally"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["If you are using AWS and want to access the instance remotely, be sure to read ",(0,t.jsx)(n.a,{href:"#accessing-apache-gravitino-on-aws-externally",children:"Accessing Gravitino on AWS externally"})]}),"\n",(0,t.jsx)(n.h3,{id:"index",children:"Index"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Installation methods"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Explore different installation methods, from using Docker to setting up Gravitino on cloud platforms or locally."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Java Development Kit (JDK)"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Ensure you have the required Java Development Kit (JDK) installed to run Gravitino successfully."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Configuring and starting Gravitino"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Learn how to configure Gravitino, install it from binary releases or Docker images, and start the Gravitino server."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Getting started on AWS and GCP"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Detailed steps for setting up Gravitino on Amazon Web Services (AWS) and Google Cloud Platform (GCP), including instance setup, Java installation, and Gravitino deployment."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Getting started locally"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Instructions for using Gravitino locally on macOS or Linux, covering JDK installation and Gravitino setup."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Integrating with Apache Hive"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Information on installing and configuring Apache Hive on AWS, GCP, and locally. Docker container options for quick setup are also provided."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Gravitino Playground"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Explore a bundled Docker image for a Gravitino playground, incorporating tools like Apache Hive, Apache Hadoop, Trino, MySQL, and PostgreSQL."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Using REST to interact with Gravitino"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Examples of interacting with Gravitino via REST commands, demonstrating how to create and modify metadata."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Accessing Gravitino on AWS externally"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Guidelines for accessing Gravitino externally when deployed on AWS, including necessary configurations and considerations."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Next steps"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Concluding thoughts and suggested next steps for users who have completed the setup."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"getting-started-on-amazon-web-services",children:"Getting started on Amazon Web Services"}),"\n",(0,t.jsx)(n.p,{children:"To begin using Gravitino on AWS, follow these steps:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In the AWS console, launch a new instance. Select ",(0,t.jsx)(n.code,{children:"Ubuntu"})," as the operating system and ",(0,t.jsx)(n.code,{children:"t2.xlarge"})," as the instance type. Create a key pair named ",(0,t.jsx)(n.em,{children:"Gravitino.pem"})," for SSH access and download it. Allow HTTP and HTTPS traffic if you want to connect to the instance remotely. Set the Elastic Block Store storage to 20GiB. Leave all other settings at their defaults. Other operating systems and instance types may work, but they have yet to be fully tested."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Start the instance and connect to it via SSH using the downloaded .pem file:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"ssh ubuntu@<IP_address> -i ~/Downloads/Gravitino.pem\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note"}),": you may need to adjust the permissions on your .pem file using ",(0,t.jsx)(n.code,{children:"chmod 400"})," to enable SSH connections."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Update the Ubuntu OS to ensure it's up-to-date:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"sudo apt update\nsudo apt upgrade\n"})}),"\n",(0,t.jsx)(n.p,{children:"You may need to reboot the instance for all changes to take effect."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Install the required Java Development Kit. Gravitino supports running on Java 8,\n11 and 17, so you can install any of them:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"sudo apt install openjdk-<version>-jdk-headless\n"})}),"\n",(0,t.jsx)(n.p,{children:"Verify the Java version with:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"java -version\n"})}),"\n",(0,t.jsx)(n.p,{children:"You should see information about the OpenJDK version."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Install Gravitino on the instance:"}),"\n",(0,t.jsxs)(n.p,{children:["You can install Gravitino from the binary release package or Docker image. Follow\n",(0,t.jsx)(n.a,{href:"/docs/0.7.0-incubating/how-to-install",children:"how-to-install"})," to install Gravitino."]}),"\n",(0,t.jsxs)(n.p,{children:["Or you can install Gravitino from scratch. Follow ",(0,t.jsx)(n.a,{href:"/docs/0.7.0-incubating/how-to-build",children:"how-to-build"})," and ",(0,t.jsx)(n.a,{href:"/docs/0.7.0-incubating/how-to-install",children:"how-to-install"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Start Gravitino using the gravitino.sh script:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"<path-to-gravitino>/bin/gravitino.sh start\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"getting-started-on-google-cloud-platform",children:"Getting started on Google Cloud Platform"}),"\n",(0,t.jsx)(n.p,{children:"To begin using Gravitino on GCP, follow these steps:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In the Google Cloud console, launch a new instance. Select ",(0,t.jsx)(n.code,{children:"e2-standard-4"})," as the instance type and 20 GB for the boot disk size. Allow HTTP and HTTPS traffic if you want to connect to the instance remotely. Leave all other settings as their defaults. Other operating systems and instance types may work, but they have yet to be fully tested."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Start the instance and connect to it via the SSH-in-browser tool."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Update the Debian OS to ensure it's up-to-date:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"sudo apt update\nsudo apt upgrade\n"})}),"\n",(0,t.jsx)(n.p,{children:"You may need to reboot the instance for all changes to take effect."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Install the required Java Development Kit. Gravitino supports running on Java 8,\n11 and 17, so you can install any of them:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'wget -O - https://apt.corretto.aws/corretto.key | sudo gpg --dearmor -o /usr/share/keyrings/corretto-keyring.gpg && echo "deb [signed-by=/usr/share/keyrings/corretto-keyring.gpg] https://apt.corretto.aws stable main" | sudo tee /etc/apt/sources.list.d/corretto.list\nsudo apt-get update\nsudo apt-get install -y java-<version>-amazon-corretto-jdk\n'})}),"\n",(0,t.jsx)(n.p,{children:"Verify the Java version with:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"java -version\n"})}),"\n",(0,t.jsx)(n.p,{children:"You should see information about the OpenJDK version."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Install Gravitino on the instance:"}),"\n",(0,t.jsxs)(n.p,{children:["You can install Gravitino from the binary release package or Docker image. Follow\n",(0,t.jsx)(n.a,{href:"./how-to-install",children:"how-to-install"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Or you can install Gravitino from scratch. Follow ",(0,t.jsx)(n.a,{href:"/docs/0.7.0-incubating/how-to-build",children:"how-to-build"})," and ",(0,t.jsx)(n.a,{href:"/docs/0.7.0-incubating/how-to-install",children:"how-to-install"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Start Gravitino using the gravitino.sh script:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"<path-to-gravitino>/bin/gravitino.sh start\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"getting-started-locally",children:"Getting started locally"}),"\n",(0,t.jsx)(n.p,{children:"To use Gravitino locally on macOS or Linux, follow these similar steps:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Install the required Java Development Kit. Gravitino supports running on Java 8, so\n11 and 17, you can install any of them. Using ",(0,t.jsx)(n.a,{href:"https://sdkman.io/",children:"sdkman"}),", for example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"sdk install java <version>\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You can also use different package managers to install JDK, for example,\n",(0,t.jsx)(n.a,{href:"https://brew.sh/",children:"Homebrew"})," on macOS, ",(0,t.jsx)(n.code,{children:"apt"})," on Ubuntu/Debian, and ",(0,t.jsx)(n.code,{children:"yum"})," on CentOS/RedHat."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Install Gravitino:"}),"\n",(0,t.jsxs)(n.p,{children:["You can install Gravitino from the binary release package or Docker image, please follow the\n",(0,t.jsx)(n.a,{href:"/docs/0.7.0-incubating/how-to-install",children:"how-to-install"})," to install Gravitino."]}),"\n",(0,t.jsxs)(n.p,{children:["Or, you can install Gravitino from scratch, follow ",(0,t.jsx)(n.a,{href:"/docs/0.7.0-incubating/how-to-build",children:"how-to-build"})," and ",(0,t.jsx)(n.a,{href:"/docs/0.7.0-incubating/how-to-install",children:"how-to-install"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Start Gravitino using the gravitino.sh script:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"<path-to-gravitino>/bin/gravitino.sh start\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"installing-apache-hive-on-aws-or-google-cloud-platform",children:"Installing Apache Hive on AWS or Google Cloud Platform"}),"\n",(0,t.jsx)(n.p,{children:"If you already have Apache Hive and Apache Hadoop in your environment, you can ignore this section\nand use them with Gravitino."}),"\n",(0,t.jsxs)(n.p,{children:["To install Apache Hive and Hadoop on AWS or Google Cloud Platform manually, follow ",(0,t.jsx)(n.a,{href:"https://cwiki.apache.org/confluence/display/Hive/",children:"Apache Hive"})," and\n",(0,t.jsx)(n.a,{href:"https://hadoop.apache.org/docs/stable/hadoop-project-dist/hadoop-common/SingleCluster.html",children:"Hadoop"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Installing and configuring Hive can be a little complex. If you don't already have Hive set up and running you can use the Docker container Datastrato provides to get Gravitino up and running."}),"\n",(0,t.jsxs)(n.p,{children:["Follow these instructions for setting up ",(0,t.jsx)(n.a,{href:"https://docs.docker.com/engine/install/ubuntu/",children:"Docker on Ubuntu"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"sudo docker run --name gravitino-container -d -p 9000:9000 -p 8088:8088 -p 50010:50010 -p 50070:50070 -p 50075:50075 -p 10000:10000 -p 10002:10002 -p 8888:8888 -p 9083:9083 -p 8022:22 apache/gravitino-playground:hive:2.7.3\n"})}),"\n",(0,t.jsx)(n.p,{children:"Once Docker is installed, you can start the container with the command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"sudo docker start gravitino-container\n"})}),"\n",(0,t.jsx)(n.h2,{id:"installing-apache-hive-locally",children:"Installing Apache Hive locally"}),"\n",(0,t.jsxs)(n.p,{children:["The same steps for installing Hive on AWS or Google Cloud Platform apply when installing it locally. Follow ",(0,t.jsx)(n.a,{href:"#installing-apache-hive-on-aws-or-google-cloud-platform",children:"Installing Apache Hive on AWS or Google Cloud Platform"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"installing-apache-gravitino-playground-on-aws-or-google-cloud-platform",children:"Installing Apache Gravitino playground on AWS or Google Cloud Platform"}),"\n",(0,t.jsx)(n.p,{children:"Gravitino provides a bundle of Docker images to launch a Gravitino playground, which\nincludes Apache Hive, Apache Hadoop, Trino, MySQL, PostgreSQL, and Gravitino. You can use\nDocker Compose to start them all."}),"\n",(0,t.jsx)(n.p,{children:"Installing Docker and Docker Compose is a requirement for using the playground."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"sudo apt install docker docker-compose\nsudo gpasswd -a $USER docker\nnewgrp docker\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You can install and run all the programs as Docker containers by using the\n",(0,t.jsx)(n.a,{href:"https://github.com/apache/gravitino-playground",children:"gravitino-playground"}),". For details about\nhow to run the playground, see ",(0,t.jsx)(n.a,{href:"/docs/0.7.0-incubating/how-to-use-the-playground",children:"how-to-use-the-playground"})]}),"\n",(0,t.jsx)(n.h2,{id:"installing-apache-gravitino-playground-locally",children:"Installing Apache Gravitino playground locally"}),"\n",(0,t.jsxs)(n.p,{children:["The same steps for installing the playground on AWS or Google Cloud Platform apply when installing it locally. Follow ",(0,t.jsx)(n.a,{href:"#installing-apache-gravitino-playground-on-aws-or-google-cloud-platform",children:"Installing Gravitino playground on AWS or Google Cloud Platform"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"using-rest-to-interact-with-apache-gravitino",children:"Using REST to interact with Apache Gravitino"}),"\n",(0,t.jsxs)(n.p,{children:["After starting the Gravitino distribution, issue REST commands to create and modify metadata. While you are using ",(0,t.jsx)(n.code,{children:"localhost"})," in these examples, run these commands remotely via a hostname or IP address once you establish correct access."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Create a Metalake:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'curl -X POST -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json" \\\n-d \'{"name":"metalake","comment":"Test metalake"}\' http://localhost:8090/api/metalakes\n'})}),"\n",(0,t.jsx)(n.p,{children:"Verify the MetaLake's creation:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'curl -X GET -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json" \\\nhttp://localhost:8090/api/metalakes\n\ncurl -X GET -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json" \\\nhttp://localhost:8090/api/metalakes/metalake\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Note that if you request a Metalake that doesn't exist, you get a ",(0,t.jsx)(n.em,{children:"NoSuchMetalakeException"})," error."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'curl -X GET -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json" \\\nhttp://localhost:8090/api/metalakes/none\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Create a catalog in Hive:"}),"\n",(0,t.jsx)(n.p,{children:"First, list the current catalogs to verify that no catalogs exist."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'curl -X GET -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json" \\\nhttp://localhost:8090/api/metalakes/metalake/catalogs\n'})}),"\n",(0,t.jsx)(n.p,{children:"Create a new Hive catalog."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'curl -X POST -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json" \\\n-d \'{"name":"test","comment":"Test catalog", "type":"RELATIONAL", "provider":"hive", "properties":{"metastore.uris":"thrift://localhost:9083"}}\' \\\nhttp://localhost:8090/api/metalakes/metalake/catalogs\n'})}),"\n",(0,t.jsx)(n.p,{children:"Verify creation of the catalog."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'curl -X GET -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json" \\\nhttp://localhost:8090/api/metalakes/metalake/catalogs\n'})}),"\n",(0,t.jsx)(n.p,{children:"Note that the metastore.uris property is used for the Hive catalog and needs updating if you change your configuration."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"accessing-apache-gravitino-on-aws-externally",children:"Accessing Apache Gravitino on AWS externally"}),"\n",(0,t.jsx)(n.p,{children:"When you deploy Gravitino on AWS, accessing it externally requires some additional configuration due to how AWS networking works."}),"\n",(0,t.jsx)(n.p,{children:"AWS assigns your instance a public IP address, but Gravitino can't bind to that address. To resolve this, you must find the internal IP address assigned to your AWS instance. You can locate the private IP address in the AWS console, or by running the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"ip a\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Once you have identified the internal address, edit the Gravitino configuration to bind to that\naddress. Open the file ",(0,t.jsx)(n.code,{children:"<path-to-gravitino>/conf/gravitino.conf"})," and modify the ",(0,t.jsx)(n.code,{children:"gravitino.server. webserver.host"})," parameter from ",(0,t.jsx)(n.code,{children:"127.0.0.1"})," to your AWS instance's private IP4 address; or you can use '0.0.0.0'. '0.0.0.0' in this context means the host's IP address. Restart the Gravitino server for the change to take effect."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"<path-to-gravitino>/bin/gravitino.sh restart\n"})}),"\n",(0,t.jsx)(n.p,{children:"You'll also need to open port 8090 in the security group of your AWS instance to access Gravitino. To access Hive you need to open port 10000 in the security group."}),"\n",(0,t.jsx)(n.p,{children:"After completing these steps, you should be able to access the Gravitino REST interface from either the command line or a web browser on your local computer. You can also connect to Hive via DBeaver or any other database IDE."}),"\n",(0,t.jsx)(n.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Explore documentation:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Delve deeper into the Gravitino documentation for advanced features and configuration options."}),"\n",(0,t.jsxs)(n.li,{children:["Check out ",(0,t.jsx)(n.a,{href:"https://gravitino.apache.org/docs/latest",children:"https://gravitino.apache.org/docs/latest"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Community engagement:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Join the Gravitino community forums to connect with other users, share experiences, and seek assistance if needed."}),"\n",(0,t.jsxs)(n.li,{children:["Check out our GitHub repository: ",(0,t.jsx)(n.a,{href:"https://github.com/apache/gravitino",children:"https://github.com/apache/gravitino"})]}),"\n",(0,t.jsxs)(n.li,{children:["Check out our Slack channel in ASF Slack: ",(0,t.jsx)(n.a,{href:"https://the-asf.slack.com",children:"https://the-asf.slack.com"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Read our blogs:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Check out: ",(0,t.jsx)(n.a,{href:"https://gravitino.apache.org/blog",children:"https://gravitino.apache.org/blog"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Continuous updates:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Stay informed about Gravitino updates and new releases to benefit from the latest features, optimizations, and security",(0,t.jsx)(n.br,{}),"\n","enhancements."]}),"\n",(0,t.jsxs)(n.li,{children:["Check out our Website: ",(0,t.jsx)(n.a,{href:"https://gravitino.apache.org",children:"https://gravitino.apache.org"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This document is just the beginning. You're welcome to customize your Gravitino setup based on your requirements and to explore the vast possibilities this powerful tool offers. If you encounter any issues or have questions, you can always connect with the Gravitino community for assistance."}),"\n",(0,t.jsx)("img",{src:"https://analytics.apache.org/matomo.php?idsite=62&rec=1&bots=1&action_name=GettingStarted",alt:""})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}}}]);