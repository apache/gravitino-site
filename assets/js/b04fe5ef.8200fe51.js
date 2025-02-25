"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[1e3],{17014:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>r});var t=a(79474);const s={},i=t.createContext(s);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:n},e.children)}},70524:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var t=a(13274),s=a(17014);const i={title:"How to use the playground",slug:"/how-to-use-the-playground",keyword:"playground",license:"This software is licensed under the Apache License version 2."},o=void 0,r={id:"how-to-use-the-playground",title:"How to use the playground",description:"Playground introduction",source:"@site/versioned_docs/version-0.6.1-incubating/how-to-use-the-playground.md",sourceDirName:".",slug:"/how-to-use-the-playground",permalink:"/docs/0.6.1-incubating/how-to-use-the-playground",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/how-to-use-the-playground.md",tags:[],version:"0.6.1-incubating",lastUpdatedBy:"Justin Mclean",lastUpdatedAt:1740469354e3,frontMatter:{title:"How to use the playground",slug:"/how-to-use-the-playground",keyword:"playground",license:"This software is licensed under the Apache License version 2."},sidebar:"docs",previous:{title:"How to use HTTPS",permalink:"/docs/0.6.1-incubating/security/how-to-use-https"},next:{title:"Manage metalake",permalink:"/docs/0.6.1-incubating/manage-metalake-using-gravitino"}},l={},c=[{value:"Playground introduction",id:"playground-introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"TCP ports used",id:"tcp-ports-used",level:2},{value:"Start playground",id:"start-playground",level:2},{value:"Launch all components of the playground",id:"launch-all-components-of-the-playground",level:3},{value:"Launch special component or components of playground",id:"launch-special-component-or-components-of-playground",level:3},{value:"Using Apache Gravitino with Trino SQL",id:"using-apache-gravitino-with-trino-sql",level:2},{value:"Using Trino CLI in Docker Container",id:"using-trino-cli-in-docker-container",level:3},{value:"Using Jupyter Notebook",id:"using-jupyter-notebook",level:2},{value:"Using Spark client",id:"using-spark-client",level:2},{value:"Example",id:"example",level:2},{value:"Simple Trino queries",id:"simple-trino-queries",level:3},{value:"Cross-catalog queries",id:"cross-catalog-queries",level:3},{value:"Using Spark and Trino",id:"using-spark-and-trino",level:3},{value:"Using Apache Iceberg REST service",id:"using-apache-iceberg-rest-service",level:3},{value:"Using Gravitino with LlamaIndex",id:"using-gravitino-with-llamaindex",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"playground-introduction",children:"Playground introduction"}),"\n",(0,t.jsxs)(n.p,{children:["The playground is a complete Apache Gravitino Docker runtime environment with ",(0,t.jsx)(n.code,{children:"Apache Hive"}),", ",(0,t.jsx)(n.code,{children:"HDFS"}),", ",(0,t.jsx)(n.code,{children:"Trino"}),", ",(0,t.jsx)(n.code,{children:"MySQL"}),", ",(0,t.jsx)(n.code,{children:"PostgreSQL"}),", ",(0,t.jsx)(n.code,{children:"Jupyter"}),", and a ",(0,t.jsx)(n.code,{children:"Apache Gravitino"})," server."]}),"\n",(0,t.jsxs)(n.p,{children:["Depending on your network and computer, startup time may take 3-5 minutes. Once the playground environment has started, you can open ",(0,t.jsx)(n.a,{href:"http://localhost:8090",children:"http://localhost:8090"})," in a browser to access the Gravitino Web UI."]}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(n.p,{children:"Install Git and Docker Compose."}),"\n",(0,t.jsx)(n.h2,{id:"tcp-ports-used",children:"TCP ports used"}),"\n",(0,t.jsx)(n.p,{children:"The playground runs several services. The TCP ports used may clash with existing services you run, such as MySQL or Postgres."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Docker container"}),(0,t.jsx)(n.th,{children:"Ports used"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"playground-gravitino"}),(0,t.jsx)(n.td,{children:"8090 9001"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"playground-hive"}),(0,t.jsx)(n.td,{children:"3307 19000 19083 60070"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"playground-mysql"}),(0,t.jsx)(n.td,{children:"13306"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"playground-postgresql"}),(0,t.jsx)(n.td,{children:"15342"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"playground-trino"}),(0,t.jsx)(n.td,{children:"18080"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"playground-jupyter"}),(0,t.jsx)(n.td,{children:"18888"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"start-playground",children:"Start playground"}),"\n",(0,t.jsx)(n.h3,{id:"launch-all-components-of-the-playground",children:"Launch all components of the playground"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"git clone git@github.com:apache/gravitino-playground.git\ncd gravitino-playground\n./launch-playground.sh\n"})}),"\n",(0,t.jsx)(n.h3,{id:"launch-special-component-or-components-of-playground",children:"Launch special component or components of playground"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"git clone git@github.com:apache/gravitino-playground.git\ncd gravitino-playground\n./launch-playground.sh hive|gravitino|trino|postgresql|mysql|spark|jupyter\n"})}),"\n",(0,t.jsx)(n.p,{children:"Note. Components have dependencies, so not launching all components may prevent you from experiencing the full functionality of the playground."}),"\n",(0,t.jsx)(n.h2,{id:"using-apache-gravitino-with-trino-sql",children:"Using Apache Gravitino with Trino SQL"}),"\n",(0,t.jsx)(n.h3,{id:"using-trino-cli-in-docker-container",children:"Using Trino CLI in Docker Container"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Login to the Gravitino playground Trino Docker container using the following command:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"docker exec -it playground-trino bash\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Open the Trino CLI in the container."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"trino@container_id:/$ trino\n"})}),"\n",(0,t.jsx)(n.h2,{id:"using-jupyter-notebook",children:"Using Jupyter Notebook"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Open the Jupyter Notebook in the browser at ",(0,t.jsx)(n.a,{href:"http://localhost:18888",children:"http://localhost:18888"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Open the ",(0,t.jsx)(n.code,{children:"gravitino-trino-example.ipynb"})," notebook."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Start the notebook and run the cells."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"using-spark-client",children:"Using Spark client"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Login to the Gravitino playground Spark Docker container using the following command:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"docker exec -it playground-spark bash\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Open the Spark SQL client in the container."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"spark@container_id:/$ cd /opt/spark && /bin/bash bin/spark-sql \n"})}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.h3,{id:"simple-trino-queries",children:"Simple Trino queries"}),"\n",(0,t.jsx)(n.p,{children:"You can use simple queries to test in the Trino CLI."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"SHOW CATALOGS;\n\nCREATE SCHEMA catalog_hive.company\n  WITH (location = 'hdfs://hive:9000/user/hive/warehouse/company.db');\n\nSHOW CREATE SCHEMA catalog_hive.company;\n\nCREATE TABLE catalog_hive.company.employees\n(\n  name varchar,\n  salary decimal(10,2)\n)\nWITH (\n  format = 'TEXTFILE'\n);\n\nINSERT INTO catalog_hive.company.employees (name, salary) VALUES ('Sam Evans', 55000);\n\nSELECT * FROM catalog_hive.company.employees;\n\nSHOW SCHEMAS from catalog_hive;\n\nDESCRIBE catalog_hive.company.employees;\n\nSHOW TABLES from catalog_hive.company;\n"})}),"\n",(0,t.jsx)(n.h3,{id:"cross-catalog-queries",children:"Cross-catalog queries"}),"\n",(0,t.jsx)(n.p,{children:"In a company, there may be different departments using different data stacks. In this example, the HR department uses Apache Hive to store its data, and the sales department uses PostgreSQL. You can run some interesting queries by joining the two departments' data together with Gravitino."}),"\n",(0,t.jsx)(n.p,{children:"To know which employee has the largest sales amount, run this SQL:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"SELECT given_name, family_name, job_title, sum(total_amount) AS total_sales\nFROM catalog_hive.sales.sales as s,\n  catalog_postgres.hr.employees AS e\nwhere s.employee_id = e.employee_id\nGROUP BY given_name, family_name, job_title\nORDER BY total_sales DESC\nLIMIT 1;\n"})}),"\n",(0,t.jsx)(n.p,{children:"To know the top customers who bought the most by state, run this SQL:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"SELECT customer_name, location, SUM(total_amount) AS total_spent\nFROM catalog_hive.sales.sales AS s,\n  catalog_hive.sales.stores AS l,\n  catalog_hive.sales.customers AS c\nWHERE s.store_id = l.store_id AND s.customer_id = c.customer_id\nGROUP BY location, customer_name\nORDER BY location, SUM(total_amount) DESC;\n"})}),"\n",(0,t.jsx)(n.p,{children:"To know the employee's average performance rating and total sales, run this SQL:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"SELECT e.employee_id, given_name, family_name, AVG(rating) AS average_rating, SUM(total_amount) AS total_sales\nFROM catalog_postgres.hr.employees AS e,\n  catalog_postgres.hr.employee_performance AS p,\n  catalog_hive.sales.sales AS s\nWHERE e.employee_id = p.employee_id AND p.employee_id = s.employee_id\nGROUP BY e.employee_id,  given_name, family_name;\n"})}),"\n",(0,t.jsx)(n.h3,{id:"using-spark-and-trino",children:"Using Spark and Trino"}),"\n",(0,t.jsx)(n.p,{children:"You might consider generating data with SparkSQL and then querying this data using Trino. Give it a try with Gravitino:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Login Spark container and execute the SQLs:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"// using Hive catalog to create Hive table\nUSE catalog_hive;\nCREATE DATABASE product;\nUSE product;\n\nCREATE TABLE IF NOT EXISTS employees (\n    id INT,\n    name STRING,\n    age INT\n)\nPARTITIONED BY (department STRING)\nSTORED AS PARQUET;\nDESC TABLE EXTENDED employees;\n\nINSERT OVERWRITE TABLE employees PARTITION(department='Engineering') VALUES (1, 'John Doe', 30), (2, 'Jane Smith', 28);\nINSERT OVERWRITE TABLE employees PARTITION(department='Marketing') VALUES (3, 'Mike Brown', 32);\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Login Trino container and execute SQLs:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM catalog_hive.product.employees WHERE department = 'Engineering';\n"})}),"\n",(0,t.jsx)(n.h3,{id:"using-apache-iceberg-rest-service",children:"Using Apache Iceberg REST service"}),"\n",(0,t.jsx)(n.p,{children:"Suppose you want to migrate your business from Hive to Iceberg. Some tables will use Hive, and the other tables will use Iceberg.\nGravitino provides an Iceberg REST catalog service. You can use Spark to access the REST catalog to write the table data.\nThen, you can use Trino to read the data from the Hive table and join it with the Iceberg table."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"spark-defaults.conf"})," is as follows (It's already configured in the playground):"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"spark.sql.extensions org.apache.iceberg.spark.extensions.IcebergSparkSessionExtensions\nspark.sql.catalog.catalog_rest org.apache.iceberg.spark.SparkCatalog\nspark.sql.catalog.catalog_rest.type rest\nspark.sql.catalog.catalog_rest.uri http://gravitino:9001/iceberg/\nspark.locality.wait.node 0\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Please note that ",(0,t.jsx)(n.code,{children:"catalog_rest"})," in SparkSQL and ",(0,t.jsx)(n.code,{children:"catalog_iceberg"})," in Gravitino and Trino share the same Iceberg JDBC backend, which implies that they can access the same dataset."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Login Spark container and execute the steps."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"docker exec -it playground-spark bash\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"spark@container_id:/$ cd /opt/spark && /bin/bash bin/spark-sql\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"use catalog_rest;\ncreate database sales;\nuse sales;\ncreate table customers (customer_id int, customer_name varchar(100), customer_email varchar(100));\ndescribe extended customers;\ninsert into customers (customer_id, customer_name, customer_email) values (11,'Rory Brown','rory@123.com');\ninsert into customers (customer_id, customer_name, customer_email) values (12,'Jerry Washington','jerry@dt.com');\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Login Trino container and execute the steps.\nYou can get all the customers from both the Hive and Iceberg tables."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"docker exec -it playground-trino bash\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"trino@container_id:/$ trino\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"select * from catalog_hive.sales.customers\nunion\nselect * from catalog_iceberg.sales.customers;\n"})}),"\n",(0,t.jsx)(n.h3,{id:"using-gravitino-with-llamaindex",children:"Using Gravitino with LlamaIndex"}),"\n",(0,t.jsx)(n.p,{children:"The Gravitino playground also provides a simple RAG demo with LlamaIndex. This demo will show you the\nability to use Gravitino to manage both tabular and non-tabular datasets, connecting to\nLlamaIndex as a unified data source, then use LlamaIndex and LLM to query both tabular and\nnon-tabular data with one natural language query."}),"\n",(0,t.jsxs)(n.p,{children:["The demo is located in the ",(0,t.jsx)(n.code,{children:"jupyter"})," folder, and you can open the ",(0,t.jsx)(n.code,{children:"gravitino_llama_index_demo.ipynb"}),"\ndemo via Jupyter Notebook by ",(0,t.jsx)(n.a,{href:"http://localhost:18888",children:"http://localhost:18888"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"The scenario of this demo is that basic structured city statistics data is stored in MySQL, and\ndetailed city introductions are stored in PDF files. The user wants to find answers about cities in the structured data and the PDF files."}),"\n",(0,t.jsx)(n.p,{children:"In this demo, you will use Gravitino to manage the MySQL table using a relational catalog, pdf\nfiles using a fileset catalog, treating Gravitino as a unified data source for LlamaIndex to build\nindexes on both tabular and non-tabular data. Then you will use LLM to query the data using natural\nlanguage queries."}),"\n",(0,t.jsxs)(n.p,{children:["Note: to run this demo, you need to set ",(0,t.jsx)(n.code,{children:"OPENAI_API_KEY"})," in the ",(0,t.jsx)(n.code,{children:"gravitino_llama_index_demo.ipynb"}),",\nlike below, ",(0,t.jsx)(n.code,{children:"OPENAI_API_BASE"})," is optional."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import os\n\nos.environ["OPENAI_API_KEY"] = ""\nos.environ["OPENAI_API_BASE"] = ""\n'})}),"\n",(0,t.jsx)("img",{src:"https://analytics.apache.org/matomo.php?idsite=62&rec=1&bots=1&action_name=HowtoUsePlayground",alt:""})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}}}]);