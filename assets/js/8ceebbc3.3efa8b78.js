"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[6292],{43286:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>l,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var s=a(13274),n=a(43183);const i={title:"How to upgrade Apache Gravitino",slug:"/how-to-upgrade",license:"This software is licensed under the Apache License version 2."},r=void 0,o={id:"how-to-upgrade",title:"How to upgrade Apache Gravitino",description:"Introduction",source:"@site/versioned_docs/version-0.6.1-incubating/how-to-upgrade.md",sourceDirName:".",slug:"/how-to-upgrade",permalink:"/docs/0.6.1-incubating/how-to-upgrade",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/how-to-upgrade.md",tags:[],version:"0.6.1-incubating",lastUpdatedBy:"mchades",lastUpdatedAt:1729484604e3,frontMatter:{title:"How to upgrade Apache Gravitino",slug:"/how-to-upgrade",license:"This software is licensed under the Apache License version 2."},sidebar:"docs",previous:{title:"Docker image details",permalink:"/docs/0.6.1-incubating/docker-image-details"},next:{title:"Apache Gravitino Glossary",permalink:"/docs/0.6.1-incubating/glossary"}},d={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Upgrade Steps",id:"upgrade-steps",level:2},{value:"Step 1: Shutdown your Gravitino instance",id:"step-1-shutdown-your-gravitino-instance",level:3},{value:"Step 2: Backup your Gravitino instance",id:"step-2-backup-your-gravitino-instance",level:3},{value:"MySQL",id:"mysql",level:4},{value:"H2",id:"h2",level:4},{value:"Step 3: Dump your Gravitino database",id:"step-3-dump-your-gravitino-database",level:3},{value:"MySQL",id:"mysql-1",level:4},{value:"H2",id:"h2-1",level:4},{value:"Step 4: Determine differences between your schema and the official schema",id:"step-4-determine-differences-between-your-schema-and-the-official-schema",level:3},{value:"Step 5: Apply the upgrade scripts",id:"step-5-apply-the-upgrade-scripts",level:3},{value:"MySQL",id:"mysql-2",level:4},{value:"H2",id:"h2-2",level:4},{value:"Step 6: Verify the upgrade",id:"step-6-verify-the-upgrade",level:3}];function h(e){const t={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(t.p,{children:"This document describes how to upgrade the schema of backed\nGravitino instance from one release version of Gravitino to another\nrelease version of Gravitino. For example, by following the steps listed\nbelow it is possible to upgrade a Gravitino 0.6.0 schema to a\nGravitino 0.7.0 schema. Before attempting this project we\nstrongly recommend that you read through all of the steps in this\ndocument and familiarize yourself with the required tools."}),"\n",(0,s.jsx)(t.h2,{id:"upgrade-steps",children:"Upgrade Steps"}),"\n",(0,s.jsx)(t.h3,{id:"step-1-shutdown-your-gravitino-instance",children:"Step 1: Shutdown your Gravitino instance"}),"\n",(0,s.jsx)(t.p,{children:"Shutdown your Gravitino instance and restrict access to the\nApache Gravitino's database. It is very important that no one else\naccesses or modifies the contents of database while you are\nperforming the schema upgrade."}),"\n",(0,s.jsx)(t.h3,{id:"step-2-backup-your-gravitino-instance",children:"Step 2: Backup your Gravitino instance"}),"\n",(0,s.jsx)(t.p,{children:"Create a backup of your database. This will allow\nyou to revert any changes made during the upgrade process if\nsomething goes wrong."}),"\n",(0,s.jsx)(t.h4,{id:"mysql",children:"MySQL"}),"\n",(0,s.jsx)(t.p,{children:"For MySQL, you can use the following command to backup your database:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"mysqldump --opt <db_name> > backup.sql\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Note that you may also need to specify a hostname and username\nusing the ",(0,s.jsx)(t.code,{children:"--host"})," and ",(0,s.jsx)(t.code,{children:"--user"})," command line switches."]}),"\n",(0,s.jsx)(t.h4,{id:"h2",children:"H2"}),"\n",(0,s.jsx)(t.p,{children:"The easiest way of accomplishing this task is\nby creating a copy of the directory containing your database."}),"\n",(0,s.jsx)(t.h3,{id:"step-3-dump-your-gravitino-database",children:"Step 3: Dump your Gravitino database"}),"\n",(0,s.jsx)(t.p,{children:"Dump your Gravitino database schema to a file"}),"\n",(0,s.jsx)(t.h4,{id:"mysql-1",children:"MySQL"}),"\n",(0,s.jsx)(t.p,{children:"You can use the mysqldump utility to dump the database schema to a file:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"mysqldump --skip-add-drop-table --no-data <db_name> > schema-x.y.z-mysql.sql\n"})}),"\n",(0,s.jsx)(t.h4,{id:"h2-1",children:"H2"}),"\n",(0,s.jsxs)(t.p,{children:["For H2, you can use the ",(0,s.jsx)(t.code,{children:"Script"})," tool to dump the database schema to a file:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:'wget https://repo1.maven.org/maven2/com/h2database/h2/1.4.200/h2-1.4.200.jar\njava -cp h2-1.4.200.jar org.h2.tools.Script -url "jdbc:h2:file:<db_file>;DB_CLOSE_DELAY=-1;MODE=MYSQL" -user <user> -password <password> -script backup.sql\n'})}),"\n",(0,s.jsx)(t.p,{children:"Note that you may need to specify your h2 file path, username and password"}),"\n",(0,s.jsx)(t.h3,{id:"step-4-determine-differences-between-your-schema-and-the-official-schema",children:"Step 4: Determine differences between your schema and the official schema"}),"\n",(0,s.jsxs)(t.p,{children:["The schema upgrade scripts assume that the schema you are upgrading\nclosely matches the official schema for your particular version of\nGravitino. The files in this directory with names like\n",(0,s.jsx)(t.code,{children:"schema-x.y.z-<type>.sql"})," contain dumps of the official schemas\ncorresponding to each of the released versions of Gravitino. You can\ndetermine differences between your schema and the official schema\nby comparing the contents of the official dump with the schema dump\nyou created in the previous step. Some differences are acceptable and will not interfere\nwith the upgrade process, but others need to be resolved manually\nor the upgrade scripts will fail to complete."]}),"\n",(0,s.jsx)(t.h3,{id:"step-5-apply-the-upgrade-scripts",children:"Step 5: Apply the upgrade scripts"}),"\n",(0,s.jsxs)(t.p,{children:["You are now ready to run the schema upgrade scripts. If you are\nupgrading from Gravitino 0.6.0 to Gravitino 0.7.0 you need to run the\n",(0,s.jsx)(t.code,{children:"upgrade-0.6.0-to-0.7.0-<type>.sql"})," script, but if you are upgrading\nfrom 0.6.0 to 0.8.0 you will need to run the 0.6.0 to 0.7.0 upgrade\nscript followed by the 0.7.0 to 0.8.0 upgrade script."]}),"\n",(0,s.jsx)(t.h4,{id:"mysql-2",children:"MySQL"}),"\n",(0,s.jsx)(t.p,{children:"Assuming you are upgrading the version of Gravitino server from 0.6.0 to 0.8.0"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"mysql --verbose\nmysql> use <db_name>;\nDatabase changed\nmysql> source upgrade-0.6.0-to-0.7.0-mysql.sql\nmysql> source upgrade-0.7.0-to-0.8.0-mysql.sql\n"})}),"\n",(0,s.jsx)(t.h4,{id:"h2-2",children:"H2"}),"\n",(0,s.jsxs)(t.p,{children:["For H2, you can use the ",(0,s.jsx)(t.code,{children:"RunScript"})," tool to apply the upgrade script:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:'java -cp h2-1.4.200.jar org.h2.tools.RunScript -url "jdbc:h2:file:<db_file>;DB_CLOSE_DELAY=-1;MODE=MYSQL" -user <user> -password <password> -script upgrade-0.6.0-to-0.7.0-h2.sql\njava -cp h2-1.4.200.jar org.h2.tools.RunScript -url "jdbc:h2:file:<db_file>;DB_CLOSE_DELAY=-1;MODE=MYSQL" -user <user> -password <password> -script upgrade-0.7.0-to-0.8.0-h2.sql\n'})}),"\n",(0,s.jsx)(t.p,{children:"These scripts should run to completion without any errors. If you\ndo encounter errors you need to analyze the cause and attempt to\ntrace it back to one of the preceding steps."}),"\n",(0,s.jsx)(t.h3,{id:"step-6-verify-the-upgrade",children:"Step 6: Verify the upgrade"}),"\n",(0,s.jsxs)(t.p,{children:["The final step of the upgrade process is validating your freshly\nupgraded schema against the official schema for your particular\nversion of Gravitino. This is accomplished by repeating steps (3) and\n(4), but this time comparing against the official version of the\nupgraded schema, e.g. if you upgraded the schema to Gravitino 0.8.0 then\nyou will want to compare your schema dump against the contents of\n",(0,s.jsx)(t.code,{children:"schema-0.8.0-<type>.sql"})]}),"\n",(0,s.jsx)("img",{src:"https://analytics.apache.org/matomo.php?idsite=62&rec=1&bots=1&action_name=HowToUpgrade",alt:""})]})}function l(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}}}]);