"use strict";(self.webpackChunkjhipster_website=self.webpackChunkjhipster_website||[]).push([[9552],{24533:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var s=n(74848),i=n(28453);const r={title:"Running tests",slug:"/running-tests/",last_update:{date:new Date("2019-04-19T00:00:00.000Z")}},a=void 0,o={id:"tests-and-qa/running-tests",title:"Running tests",description:"Introduction",source:"@site/docs/tests-and-qa/running-tests.mdx",sourceDirName:"tests-and-qa",slug:"/running-tests/",permalink:"/running-tests/",draft:!1,unlisted:!1,editUrl:"https://github.com/jhipster/jhipster.github.io/tree/main/docs/tests-and-qa/running-tests.mdx",tags:[],version:"current",lastUpdatedAt:1555632e6,frontMatter:{title:"Running tests",slug:"/running-tests/",last_update:{date:"2019-04-19T00:00:00.000Z"}},sidebar:"docsSidebar",previous:{title:"Using TLS and HTTP/2",permalink:"/tls/"},next:{title:"Code quality",permalink:"/code-quality/"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Integration tests",id:"integration-tests",level:2},{value:"UI tests",id:"ui-tests",level:2},{value:"Jest",id:"jest",level:3},{value:"Cypress/Protractor",id:"cypressprotractor",level:3},{value:"Architecture tests",id:"architecture-tests",level:2},{value:"Performance tests",id:"performance-tests",level:2},{value:"Using Maven to run Gatling",id:"using-maven-to-run-gatling",level:3},{value:"Using Gradle to run Gatling",id:"using-gradle-to-run-gatling",level:3},{value:"Behaviour-driven development (BDD)",id:"behaviour-driven-development-bdd",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(t.p,{children:"JHipster comes with an extensive set of tests, and each generated application has:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Unit tests using ",(0,s.jsx)(t.a,{href:"https://junit.org/junit5/",children:"JUnit 5"}),"."]}),"\n",(0,s.jsx)(t.li,{children:"Integration tests using the Spring Test Context framework."}),"\n",(0,s.jsxs)(t.li,{children:["UI tests with ",(0,s.jsx)(t.a,{href:"https://facebook.github.io/jest/",children:"Jest"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Architecture tests with ",(0,s.jsx)(t.a,{href:"https://www.archunit.org/",children:"ArchUnit"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Optionally, JHipster can also generate:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Performance tests with ",(0,s.jsx)(t.a,{href:"http://gatling.io/",children:"Gatling"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Behaviour-driven tests with ",(0,s.jsx)(t.a,{href:"https://cucumber.io/",children:"Cucumber"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Angular/React/Vue integration tests with ",(0,s.jsx)(t.a,{href:"https://www.cypress.io/",children:"Cypress"})," or ",(0,s.jsx)(t.a,{href:"https://angular.github.io/protractor/#/",children:"Protractor"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"We have two goals in generating those tests:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Help every JHipster user to follow best practices, as we believe tests are a very useful part of every application"}),"\n",(0,s.jsxs)(t.li,{children:["Validate that what is being generated is correct. So even if you don't plan to use those tests at all, doing ",(0,s.jsx)(t.code,{children:"./mvnw clean verify"})," and ",(0,s.jsx)(t.code,{children:"npm test"})," after generating your application is a good way of knowing if everything is fine. You are then free to ignore those tests if you think that testing is a waste of time!"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["All those tests will be generated in the standard Maven ",(0,s.jsx)(t.code,{children:"src/test"})," folder."]}),"\n",(0,s.jsx)(t.h2,{id:"integration-tests",children:"Integration tests"}),"\n",(0,s.jsxs)(t.p,{children:["Integration tests are done with the Spring Test Context framework, and are located in the ",(0,s.jsx)(t.code,{children:"src/test/java"})," folder. JHipster will launch a specific Spring test context, which will be re-used along all tests, as:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Your Spring beans should be stateless and thread-safe, and thus can be re-used across your different tests suites."}),"\n",(0,s.jsx)(t.li,{children:"Launching only one Spring context for all tests is a lot faster than launching a new Spring context for each test."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"This Spring test context will use a specific test database to run its tests:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["If you use an SQL database, JHipster will launch an in-memory H2 instance in order to use a temporary database for its integration tests. Alternatively, by using the ",(0,s.jsx)(t.code,{children:"testcontainers"})," profile, JHipster will launch a containerized version of the production database using ",(0,s.jsx)(t.a,{href:"https://www.testcontainers.org/modules/databases/",children:"Testcontainers"}),". Either way, Liquibase will be run automatically, and will generate the database schema."]}),"\n",(0,s.jsxs)(t.li,{children:["If you use Cassandra, JHipster will launch a containerized version of Cassandra with Docker using ",(0,s.jsx)(t.a,{href:"https://www.testcontainers.org",children:"Testcontainers"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["If you use MongoDB, JHipster will launch an in-memory MongoDB instance using ",(0,s.jsx)(t.a,{href:"https://github.com/flapdoodle-oss/de.flapdoodle.embed.mongo",children:"de.flapdoodle.embed.mongo"}),"."]}),"\n",(0,s.jsx)(t.li,{children:"If you use Elasticsearch, JHipster will launch an in-memory Elasticsearch instance using Spring Data Elasticsearch."}),"\n",(0,s.jsxs)(t.li,{children:["If you use Couchbase, JHipster will launch a containerized version of Couchbase with Docker using ",(0,s.jsx)(t.a,{href:"https://github.com/differentway/testcontainers-java-module-couchbase",children:"Couchbase Testcontainers"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["If you use Neo4j, JHipster will launch a containerized version of Neo4j with Docker using ",(0,s.jsx)(t.a,{href:"https://www.testcontainers.org/modules/databases/neo4j/",children:"Neo4j Testcontainers"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Those tests can be run directly in your IDE, by right-clicking on each test class, or by running ",(0,s.jsx)(t.code,{children:"./mvnw clean verify"})," (or ",(0,s.jsx)(t.code,{children:"./gradlew test integrationTest"})," if you use Gradle)."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Limitations:"})," if the generated entities have validation enabled, JHipster is not enable to generate the correct values depending on the validation rules. Those rules can be so complex, for example if a Regex pattern is used, that this not possible. In this case, the tests will fail validation, and the default values used in the test will need to changed manually, so they can pass the validation rules."]}),"\n",(0,s.jsx)(t.h2,{id:"ui-tests",children:"UI tests"}),"\n",(0,s.jsx)(t.p,{children:"UI tests come in two flavors with JHipster: unit tests with Jest, and integration tests with Protractor. Only Jest is provided by default, but if you want to have a good test coverage of your application, we recommend that you use both tools together."}),"\n",(0,s.jsx)(t.h3,{id:"jest",children:"Jest"}),"\n",(0,s.jsxs)(t.p,{children:["UI unit tests are located in the ",(0,s.jsx)(t.code,{children:"src/test/javascript/spec"})," folder. They use ",(0,s.jsx)(t.a,{href:"https://facebook.github.io/jest/",children:"Jest"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Those tests will mock up the access to the application's REST endpoints, so you can test your UI layer without having to launch the Java back-end."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Those tests can be run using ",(0,s.jsx)(t.code,{children:"npm test"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Tip: if you want to focus on a single test change the module description from ",(0,s.jsx)(t.code,{children:"describe('...', function() {"})," to ",(0,s.jsx)(t.code,{children:"fdescribe('...', function() {"})," and Jest will run this test only."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"cypressprotractor",children:"Cypress/Protractor"}),"\n",(0,s.jsxs)(t.p,{children:["UI integration tests are done with ",(0,s.jsx)(t.a,{href:"https://www.cypress.io/",children:"Cypress"})," or ",(0,s.jsx)(t.a,{href:"https://angular.github.io/protractor/#/",children:"Protractor"}),", and are located in the ",(0,s.jsx)(t.code,{children:"src/test/javascript/e2e"})," folder."]}),"\n",(0,s.jsx)(t.p,{children:"Those tests will launch a Web browser and use the application like a real user would do, so you need to have a real application running, with its database set-up."}),"\n",(0,s.jsxs)(t.p,{children:["Those tests can be run using ",(0,s.jsx)(t.code,{children:"npm run e2e"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"architecture-tests",children:"Architecture tests"}),"\n",(0,s.jsxs)(t.p,{children:["Architecture tests, which enforce certain constrainsts and best practices are done with ",(0,s.jsx)(t.a,{href:"https://www.archunit.org/",children:"ArchUnit"}),".\nYou can write your own rules to check custom constraints for your architecture at build time following the ",(0,s.jsx)(t.a,{href:"https://www.archunit.org/userguide/html/000_Index.html",children:"official documentation"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"performance-tests",children:"Performance tests"}),"\n",(0,s.jsxs)(t.p,{children:["Performance tests are done with ",(0,s.jsx)(t.a,{href:"http://gatling.io/",children:"Gatling"}),", and are located in the ",(0,s.jsx)(t.code,{children:"src/test/java/gatling/simulations"})," folder. They are generated for each entity, and allow to test each of them with a lot of concurrent requests."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Warning!"})," At the moment, those tests do not take into account the validation rules you may have enforced on your entities. Also tests for creating entities that have a required relationship with another entity will fail out of the box. You will anyway need to change those tests, according to your business rules, so here are few tips to improve your tests:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["On your running application, go to the ",(0,s.jsx)(t.code,{children:"Administration > Logs"})," screen, and put ",(0,s.jsx)(t.code,{children:"org.springframework"})," in ",(0,s.jsx)(t.code,{children:"debug"})," mode. You will see the validation errors, for example."]}),"\n",(0,s.jsxs)(t.li,{children:["Use the application normally and open the Chrome ",(0,s.jsx)(t.code,{children:"console log"}),": you will be able to see the REST requests with all their parameters, including the HTTP headers."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"For running Gatling tests on a microservice application, you have to:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Run a registry"}),"\n",(0,s.jsx)(t.li,{children:"Run a gateway"}),"\n",(0,s.jsx)(t.li,{children:"Run the microservice application"}),"\n",(0,s.jsx)(t.li,{children:"Then, you can run Gatling tests"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"using-maven-to-run-gatling",children:"Using Maven to run Gatling"}),"\n",(0,s.jsxs)(t.p,{children:["You can execute all Gatling tests with ",(0,s.jsx)(t.code,{children:"./mvnw gatling:test"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"using-gradle-to-run-gatling",children:"Using Gradle to run Gatling"}),"\n",(0,s.jsxs)(t.p,{children:["You can execute all Gatling tests with ",(0,s.jsx)(t.code,{children:"./gradlew gatlingRun"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"behaviour-driven-development-bdd",children:"Behaviour-driven development (BDD)"}),"\n",(0,s.jsxs)(t.p,{children:["Behaviour-driven development (BDD) is available using ",(0,s.jsx)(t.a,{href:"https://cucumber.io/",children:"Cucumber"}),", with its ",(0,s.jsx)(t.a,{href:"https://github.com/cucumber/cucumber-jvm",children:"JVM implementation"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.cucumber.io/gherkin/reference/",children:"Gherkin"})," features will have to be written in your ",(0,s.jsx)(t.code,{children:"src/test/features"})," directory."]})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var s=n(96540);const i={},r=s.createContext(i);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);