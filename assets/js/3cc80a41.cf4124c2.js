"use strict";(self.webpackChunkjhipster_website=self.webpackChunkjhipster_website||[]).push([[7100],{86833:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>l});var i=s(74848),a=s(28453);const t={title:"Using Cassandra",slug:"/using-cassandra/",last_update:{date:new Date("2015-02-24T00:00:00.000Z")}},r=void 0,o={id:"options/using-cassandra",title:"Using Cassandra",description:"Cassandra is one of the supported databases that can be selected when your application is being generated.",source:"@site/docs/options/using-cassandra.mdx",sourceDirName:"options",slug:"/using-cassandra/",permalink:"/using-cassandra/",draft:!1,unlisted:!1,editUrl:"https://github.com/jhipster/jhipster.github.io/tree/main/docs/options/using-cassandra.mdx",tags:[],version:"current",lastUpdatedAt:1424736e6,frontMatter:{title:"Using Cassandra",slug:"/using-cassandra/",last_update:{date:"2015-02-24T00:00:00.000Z"}},sidebar:"docsSidebar",previous:{title:"Using Neo4j",permalink:"/using-neo4j/"},next:{title:"Using Kafka",permalink:"/using-kafka/"}},c={},l=[{value:"Migration tool",id:"migration-tool",level:2},{value:"Running the tool",id:"running-the-tool",level:3},{value:"With Docker:",id:"with-docker",level:4},{value:"Manually:",id:"manually",level:4},{value:"Prerequisites:",id:"prerequisites",level:5},{value:"Cassandra and Docker on non-linux OSs",id:"cassandra-and-docker-on-non-linux-oss",level:2},{value:"Cassandra nodes:",id:"cassandra-nodes",level:4}];function d(e){const n={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Cassandra is one of the supported databases that can be selected when your application is being generated."}),"\n",(0,i.jsx)(n.p,{children:"This generator has one limitation:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"It does not support OAuth2 authentication (we need to implement a Cassandra back-end to Spring Security's OAuth2 server)"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"When Cassandra is selected:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Spring Data Reactive for Apache Cassandra is used"}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.a,{href:"/creating-an-entity/",children:"entity sub-generator"})," will not ask you for entity relationships, as you can't have relationships with a NoSQL database (at least not in the way you have relationships with JPA)"]}),"\n",(0,i.jsx)(n.li,{children:"The generated entities only support one partition key, which is the ID. Future versions will provide composite primary keys and clustering keys"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"migration-tool",children:"Migration tool"}),"\n",(0,i.jsxs)(n.p,{children:["Similar to ",(0,i.jsx)(n.a,{href:"http://www.liquibase.org/",children:"Liquibase"}),", JHipster provide a tool to apply your CQL migration scripts, with some restrictions:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The tool is not run by the application itself when it is started but inside a Docker container or manually"}),"\n",(0,i.jsxs)(n.li,{children:["All CQL scripts must follow the pattern ",(0,i.jsx)(n.code,{children:"{timestamp}_{description}.cql"})," and be placed in the changelog directory: ",(0,i.jsx)(n.code,{children:"src/main/resources/config/cql/changelog/"})]}),"\n",(0,i.jsx)(n.li,{children:"All non already applied scripts located in the changelog directory are applied in alphabetical order (ie: following the timestamp)"}),"\n",(0,i.jsx)(n.li,{children:"Because Cassandra is not a transactional database, if an error happen before inserting the metadata in the table used by the tool there is a risk to have your CQL migration script run multiple times"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Some information on the tool:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["After generating an entity, its CQL file will be generated in ",(0,i.jsx)(n.code,{children:"src/main/resources/config/cql/changelog/"})," in the same way we generate Liquibase changelogs for JPA"]}),"\n",(0,i.jsxs)(n.li,{children:["For running tests, all the CQL scripts in the ",(0,i.jsx)(n.code,{children:"src/main/resources/config/cql/changelog/"})," directory are automatically applied to the in memory cluster","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Meaning you have nothing to do but to drop your script in the changelog directory to have it applied for the tests"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["The tool uses its own cassandra table ",(0,i.jsx)(n.code,{children:"schema_version"})," to store the metadata info"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The tool will apply the migration scripts from ",(0,i.jsx)(n.code,{children:"src/main/resources/config/cql/"})," in the following order:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"create-keyspace.cql"})," - create the keyspace and the ",(0,i.jsx)(n.code,{children:"schema_version"})," table to store the migration metadata"]}),"\n",(0,i.jsxs)(n.li,{children:["all ",(0,i.jsx)(n.code,{children:"cql/changelog/\\*.cql"})," files in alphabetical order"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"running-the-tool",children:"Running the tool"}),"\n",(0,i.jsx)(n.p,{children:"Depending if you are using Docker or not, you have several options to run the migration tool."}),"\n",(0,i.jsx)(n.h4,{id:"with-docker",children:"With Docker:"}),"\n",(0,i.jsxs)(n.p,{children:["If you have started the Cassandra cluster with docker-compose, using the generated ",(0,i.jsx)(n.code,{children:"app.yml"})," or ",(0,i.jsx)(n.code,{children:"cassandra.yml"})," compose files, the tool has already been run and all cql scripts applied."]}),"\n",(0,i.jsxs)(n.p,{children:["After adding a CQL script in the changelog directory, you can relaunch the docker-service responsible to run the migration service again without stopping the cluster:",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"docker-compose -f src/main/docker/cassandra.yml up <app>-cassandra-migration"})]}),"\n",(0,i.jsx)(n.h4,{id:"manually",children:"Manually:"}),"\n",(0,i.jsx)(n.p,{children:"With some prerequisites, you can run the tool manually. It could be useful to familiarize you with the tool to later include it to your deployment pipeline."}),"\n",(0,i.jsx)(n.h5,{id:"prerequisites",children:"Prerequisites:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Add the Cassandra contact point environment variable, typically locally: ",(0,i.jsx)(n.code,{children:"export CASSANDRA_CONTACT_POINT=`127.0.0.1` "})]}),"\n",(0,i.jsx)(n.li,{children:"Install a recent (>4) bash version and md5sum with your favorite package manager"}),"\n",(0,i.jsx)(n.li,{children:"Have CQLSH in your classpath"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["To run the tool use this command: ",(0,i.jsx)(n.code,{children:"src/main/docker/cassandra/scripts/autoMigrate.sh src/main/resources/config/cql/changelog/"})]}),"\n",(0,i.jsxs)(n.p,{children:["By default, the ",(0,i.jsx)(n.code,{children:"src/main/resources/config/create-keyspace.cql"})," script is used to create the keyspace if necessary.\nYou can override it with a second argument: ",(0,i.jsx)(n.code,{children:"src/main/docker/cassandra/scripts/autoMigrate.sh src/main/resources/config/cql/changelog/ create-keyspace-prod.cql"})]}),"\n",(0,i.jsxs)(n.p,{children:["If you only want to run a specific script against your cluster use: ",(0,i.jsx)(n.code,{children:"src/main/docker/cassandra/scripts/execute-cql.sh src/main/resources/config/cql/changelog/<your script>.cql"})]}),"\n",(0,i.jsx)(n.h2,{id:"cassandra-and-docker-on-non-linux-oss",children:"Cassandra and Docker on non-linux OSs"}),"\n",(0,i.jsxs)(n.p,{children:["On Mac OSx and Windows, Docker containers are not hosted directly but on a VirtualBox VM.",(0,i.jsx)(n.br,{}),"\n","Those, you can not access them in localhost but have to hit the VirtualBox IP."]}),"\n",(0,i.jsxs)(n.p,{children:["You can override the Cassandra contact point (localhost by default) with this environment variable: ",(0,i.jsx)(n.code,{children:"export SPRING_DATA_CASSANDRA_CONTACTPOINTS=`docker-machine ip default` "})]}),"\n",(0,i.jsx)(n.h4,{id:"cassandra-nodes",children:"Cassandra nodes:"}),"\n",(0,i.jsxs)(n.p,{children:["Because Cassandra nodes are also hosted in the Virtual machine, the Cassandra Java driver will receive an error when trying to contact them after receiving their address from the contact point.",(0,i.jsx)(n.br,{}),"\n","To workaround this, you can add a routing rule to your routing table, ",(0,i.jsx)(n.a,{href:"http://krasserm.github.io/2015/07/13/chaos-testing-with-docker-and-cassandra/#port-mapping",children:"(source)"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Assuming the containers running the Cassandra nodes have IP address 172.18.0.x:",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"sudo route -n add 172.18.0.0/16 `docker-machine ip default` "})]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>o});var i=s(96540);const a={},t=i.createContext(a);function r(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);