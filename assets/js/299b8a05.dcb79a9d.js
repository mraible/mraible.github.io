"use strict";(self.webpackChunkjhipster_website=self.webpackChunkjhipster_website||[]).push([[9785],{55001:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var t=i(74848),s=i(28453);const a={title:"Creating an entity",slug:"/creating-an-entity/",last_update:{date:new Date("2018-09-04T00:00:00.000Z")}},o=void 0,r={id:"core-tasks/creating-an-entity",title:"Creating an entity",description:"**Please check our video tutorial on creating a new JHipster application!**",source:"@site/docs/core-tasks/creating-an-entity.mdx",sourceDirName:"core-tasks",slug:"/creating-an-entity/",permalink:"/creating-an-entity/",draft:!1,unlisted:!1,editUrl:"https://github.com/jhipster/jhipster.github.io/tree/main/docs/core-tasks/creating-an-entity.mdx",tags:[],version:"current",lastUpdatedAt:15360192e5,frontMatter:{title:"Creating an entity",slug:"/creating-an-entity/",last_update:{date:"2018-09-04T00:00:00.000Z"}},sidebar:"docsSidebar",previous:{title:"Creating an application",permalink:"/creating-an-app/"},next:{title:" Creating DTOs",permalink:"/using-dtos/"}},l={},d=[{value:"Introduction",id:"introduction",level:2},{value:"JHipster UML and JDL Studio",id:"jhipster-uml-and-jdl-studio",level:2},{value:"Entity fields",id:"entity-fields",level:2},{value:"Field types",id:"field-types",level:2},{value:"Validation",id:"validation",level:2},{value:"Entity relationships",id:"entity-relationships",level:2},{value:"Generating a separate service class for your business logic",id:"generating-a-separate-service-class-for-your-business-logic",level:2},{value:"Data Transfer Objects (DTOs)",id:"data-transfer-objects-dtos",level:2},{value:"Filtering",id:"filtering",level:2},{value:"Pagination",id:"pagination",level:2},{value:"Updating an existing entity",id:"updating-an-existing-entity",level:2},{value:"Tutorial",id:"tutorial",level:2},{value:"Generate the &quot;Author&quot; entity",id:"generate-the-author-entity",level:3},{value:"Generate the &quot;Book&quot; entity",id:"generate-the-book-entity",level:3},{value:"Check the generated code",id:"check-the-generated-code",level:3},{value:"Improve the generated code",id:"improve-the-generated-code",level:3},{value:"You&#39;re done!",id:"youre-done",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:(0,t.jsxs)(n.strong,{children:["Please check our ",(0,t.jsx)(n.a,{href:"/video-tutorial",children:"video tutorial"})," on creating a new JHipster application!"]})})}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:['If you want to have "live reload" of your JavaScript/TypeScript code, you will need to run ',(0,t.jsx)(n.code,{children:"npm start"}),". You can go to the ",(0,t.jsx)(n.a,{href:"/development/",children:"Using JHipster in development"})," page for more information."]})}),"\n",(0,t.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsxs)(n.p,{children:["Once you have created your application, you will want to create ",(0,t.jsx)(n.em,{children:"entities"}),". For example, you might want to create an ",(0,t.jsx)(n.em,{children:"Author"})," and a ",(0,t.jsx)(n.em,{children:"Book"})," entity. For each entity, you will need:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"A database table"}),"\n",(0,t.jsx)(n.li,{children:"A Liquibase change set"}),"\n",(0,t.jsx)(n.li,{children:"A JPA Entity"}),"\n",(0,t.jsx)(n.li,{children:"A Spring Data JPA Repository"}),"\n",(0,t.jsx)(n.li,{children:"A Spring MVC REST Controller, which has the basic CRUD operations"}),"\n",(0,t.jsx)(n.li,{children:"An Angular router, a component and a service"}),"\n",(0,t.jsx)(n.li,{children:"An HTML view"}),"\n",(0,t.jsx)(n.li,{children:"Integration tests, to validate everything works as expected"}),"\n",(0,t.jsx)(n.li,{children:"Performance tests, to see if everything works smoothly"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"If you have several entities, you will likely want to have relationships between them. For this, you will need:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"A database foreign key"}),"\n",(0,t.jsx)(n.li,{children:"Specific JavaScript and HTML code for managing this relationship"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:['The "entity" sub-generator will create all the necessary files, and provide a CRUD front-end for each entity (see ',(0,t.jsx)(n.a,{href:"/using-angular/",children:"Angular project structure"})," and ",(0,t.jsx)(n.a,{href:"/using-react/",children:"React project structure"}),"). The sub generator can be invoked by running ",(0,t.jsx)(n.code,{children:"jhipster entity <entityName> --[options]"}),". Reference for those options can be found by typing ",(0,t.jsx)(n.code,{children:"jhipster entity --help"})]}),"\n",(0,t.jsx)(n.p,{children:"Below are the supported options."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"--table-name <table_name>"})," - By default JHipster will generate a table name based on your entity name, if you would like to have a different table name you can do so by passing this option."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"--angular-suffix <suffix>"})," - If you want all your Angular routes to have a custom suffix you can pass that using this option."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"--client-root-folder <folder-name>"})," - Use a root folder name for entities on the client side. By default it's empty for monoliths and the name of the microservice for gateways."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"--regenerate"})," - This will regenerate an existing entity without asking any questions."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"--skip-server"})," - This will skip the server-side code and will generate only the client-side code."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"--skip-client"})," - This will skip the client-side code and will generate only the server-side code."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"--skip-db-changelog"})," - This will skip generation of database changelog (using Liquibase for SQL databases)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"--db"})," - Specify the database when skipping server side generation, has no effect otherwise."]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:["Don't choose a short name for your entity (see ",(0,t.jsx)("a",{href:"https://github.com/jhipster/generator-jhipster/issues/8446",target:"_blank",rel:"noopener",children:"this ticket"}),")."]})}),"\n",(0,t.jsx)(n.h2,{id:"jhipster-uml-and-jdl-studio",children:"JHipster UML and JDL Studio"}),"\n",(0,t.jsx)(n.p,{children:"This page describes how to create entities with JHipster using the standard command-line interface. If you want to create many entities, you might prefer to use a graphical tool."}),"\n",(0,t.jsx)(n.p,{children:"In that case, two options are available:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/jhipster-uml/",children:"JHipster UML"}),", which allows you to use an UML editor."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://start.jhipster.tech/jdl-studio/",children:"JDL Studio"}),", our online tool to create entities and relationships using our domain-specific language ",(0,t.jsx)(n.a,{href:"/jdl/intro/",children:"JDL"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"If you used the JDL Studio:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["You can generate entities from a JDL file using the ",(0,t.jsx)(n.code,{children:"jdl"})," sub-generator, by running ",(0,t.jsx)(n.code,{children:"jhipster jdl your-jdl-file.jh"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If you do not want to regenerate your entities, while importing a JDL, you can use the ",(0,t.jsx)(n.code,{children:"--json-only"})," flag to skip entity creation part and create only the json files in ",(0,t.jsx)(n.code,{children:".jhipster"})," folder."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"jhipster jdl ./my-jdl-file.jdl --json-only\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["By default ",(0,t.jsx)(n.code,{children:"jdl"})," regenerates only entities which have changed, if you want all your entities to be regenerated then pass in the ",(0,t.jsx)(n.code,{children:"--force"}),"  flag. Please note that this will overwrite all your local changes to the entity files"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"jhipster jdl ./my-jdl-file.jdl --force\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["If you want to use JHipster UML instead of the ",(0,t.jsx)(n.code,{children:"jdl"})," sub-generator, you need to install it by running ",(0,t.jsx)(n.code,{children:"npm install -g jhipster-uml"}),", and then run ",(0,t.jsx)(n.code,{children:"jhipster-uml yourFileName.jh"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"entity-fields",children:"Entity fields"}),"\n",(0,t.jsx)(n.p,{children:"For each entity, you can add as many fields as you want. You will need to input the field names and their types, and JHipster will generate for you all the required code and configuration, from the Angular HTML view to the Liquibase changelog."}),"\n",(0,t.jsx)(n.p,{children:"Those fields cannot contain reserved keywords in the technologies you are using. For example, if you use MySQL:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"You cannot use Java reserved keywords (as your code will not compile)"}),"\n",(0,t.jsx)(n.li,{children:"You cannot use MySQL reserved keywords (as your database schema update will fail)"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"field-types",children:"Field types"}),"\n",(0,t.jsxs)(n.p,{children:["JHipster supports many field types. This support depends on your database backend, so we use Java types to describe them: a Java ",(0,t.jsx)(n.code,{children:"String"})," will be stored differently in Oracle or Cassandra, and it is one of JHipster's strengths to generate the correct database access code for you."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"String"}),": A Java String. Its default size depends on the underlying backend (if you use JPA, it's 255 by default), but you can change it using the validation rules (putting a ",(0,t.jsx)(n.code,{children:"max"})," size of 1024, for example)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Integer"}),": A Java Integer."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Long"}),": A Java Long."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Float"}),": A Java Float."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Double"}),": A Java Double."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"BigDecimal"}),": A ",(0,t.jsx)(n.a,{href:"https://docs.oracle.com/javase/8/docs/api/java/math/BigDecimal.html",children:"java.math.BigDecimal"})," object, used when you want exact mathematic calculations (often used for financial operations)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"LocalDate"}),": A ",(0,t.jsx)(n.a,{href:"https://docs.oracle.com/javase/8/docs/api/java/time/LocalDate.html",children:"java.time.LocalDate"})," object, used to correctly manage dates in Java."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Instant"}),": A ",(0,t.jsx)(n.a,{href:"https://docs.oracle.com/javase/8/docs/api/java/time/Instant.html",children:"java.time.Instant"})," object, used to represent a timestamp, an instantaneous point on the time-line."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ZonedDateTime"}),": A ",(0,t.jsx)(n.a,{href:"https://docs.oracle.com/javase/8/docs/api/java/time/ZonedDateTime.html",children:"java.time.ZonedDateTime"})," object, used to represent a local date-time in a given timezone (typically a calendar appointment). Note that time zones are neither supported by the REST nor by the persistence layers so you should most probably use ",(0,t.jsx)(n.code,{children:"Instant"})," instead."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Duration"}),": A ",(0,t.jsx)(n.a,{href:"https://docs.oracle.com/javase/8/docs/api/java/time/Duration.html",children:"java.time.Duration"})," object, used to represent an amount of time."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"UUID"}),": A ",(0,t.jsx)(n.a,{href:"https://docs.oracle.com/javase/8/docs/api/java/util/UUID.html",children:"java.util.UUID"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Boolean"}),": A Java Boolean."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Enumeration"}),": A Java Enumeration object. When this type is selected, the sub-generator will ask you what values you want in your enumeration, and it will create a specific ",(0,t.jsx)(n.code,{children:"enum"})," class to store them."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Blob"}),": A Blob object, used to store some binary data. When this type is selected, the sub-generator will ask you if you want to store generic binary data, an image object, or a CLOB (long text). Images will be handled specifically on the Angular side, so they can be displayed to the end-user."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"validation",children:"Validation"}),"\n",(0,t.jsx)(n.p,{children:"Validation can be set up for each field. Depending on the field type, different validation options will be available."}),"\n",(0,t.jsx)(n.p,{children:"Validation will be automatically generated on:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"the HTML views, using the Angular or React or Vue validation mechanism"}),"\n",(0,t.jsxs)(n.li,{children:["the Java domain objects, using ",(0,t.jsx)(n.a,{href:"http://beanvalidation.org/",children:"Bean Validation"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Bean validation will then be used to automatically validate domain objects when they are used in:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Spring MVC REST controllers (using the ",(0,t.jsx)(n.code,{children:"@Valid"})," annotation)"]}),"\n",(0,t.jsx)(n.li,{children:"Hibernate/JPA (entities are automatically validated before being saved)"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Validation information will also be used to generate more precise database column metadata:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Required fields will be marked non-nullable"}),"\n",(0,t.jsx)(n.li,{children:"Unique fields will create a unique constraint"}),"\n",(0,t.jsx)(n.li,{children:"Fields which have a maximum length will have the same column length"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Validation has a few limitations:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"We don't support all validation options from Angular, React and Bean Validation, as we only support those which are common to both client and server APIs"}),"\n",(0,t.jsx)(n.li,{children:"Regular Expression patterns don't work the same in JavaScript and in Java, so if you configure one, you might need to tweak one of the generated patterns"}),"\n",(0,t.jsx)(n.li,{children:"JHipster generates unit tests that work for generic entities, without knowing your validation rules: it is possible that the generated tests do not pass the validation rules. In that case, you will need to update the sample values used in your unit tests, so that they pass the validation rules."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"entity-relationships",children:"Entity relationships"}),"\n",(0,t.jsxs)(n.p,{children:["Entity relationships are only available for SQL databases. It is a fairly complex subject, which has its own documentation page: ",(0,t.jsx)(n.a,{href:"/managing-relationships/",children:"Managing relationships"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"generating-a-separate-service-class-for-your-business-logic",children:"Generating a separate service class for your business logic"}),"\n",(0,t.jsx)(n.p,{children:"Having a separate service class allows to have more complex logic compared to using a Spring REST Controller directly. Having a service layer (with or without an interface) will allow you to use DTOs (see next section)."}),"\n",(0,t.jsxs)(n.p,{children:["This is the same logic as using the ",(0,t.jsx)(n.a,{href:"/creating-a-spring-service/",children:"Spring service sub-generator"}),", so we recommend to read its documentation to have more information."]}),"\n",(0,t.jsx)(n.h2,{id:"data-transfer-objects-dtos",children:"Data Transfer Objects (DTOs)"}),"\n",(0,t.jsxs)(n.p,{children:["By default JHipster entities do not use DTOs, but they are available as an option, if you choose to have a service layer (see previous section). Here is the documentation: ",(0,t.jsx)(n.a,{href:"/using-dtos/",children:"Using DTOs"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"filtering",children:"Filtering"}),"\n",(0,t.jsxs)(n.p,{children:["Optionally, entities stored in SQL databases can be filtered using JPA. Here is the documentation: ",(0,t.jsx)(n.a,{href:"/entities-filtering/",children:"Filtering your entities"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"pagination",children:"Pagination"}),"\n",(0,t.jsxs)(n.p,{children:["Please note that pagination is not available if you created your application with ",(0,t.jsx)(n.a,{href:"/using-cassandra/",children:"Cassandra"}),". This will be added in a future release."]}),"\n",(0,t.jsxs)(n.p,{children:["Pagination uses ",(0,t.jsx)(n.a,{href:"http://tools.ietf.org/html/rfc5988",children:"the Link header"}),", as in the ",(0,t.jsx)(n.a,{href:"https://developer.github.com/v3/#pagination",children:"GitHub API"}),". JHipster provides a custom implementation of this specification on both the server (Spring MVC REST) and client (Angular/React) sides."]}),"\n",(0,t.jsx)(n.p,{children:"When the entity is generated, JHipster provides 4 pagination options:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"No pagination (in that case, the back-end won't be paginated)"}),"\n",(0,t.jsxs)(n.li,{children:["A complete pagination system, based on ",(0,t.jsx)(n.a,{href:"https://getbootstrap.com/docs/4.3/components/pagination/",children:"the Bootstrap pagination component"})]}),"\n",(0,t.jsxs)(n.li,{children:["An infinite scroll system, based on ",(0,t.jsx)(n.a,{href:"http://sroze.github.io/ngInfiniteScroll/",children:"the infinite scroll directive"})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"updating-an-existing-entity",children:"Updating an existing entity"}),"\n",(0,t.jsxs)(n.p,{children:["The entity configuration is saved in a specific ",(0,t.jsx)(n.code,{children:".json"})," file, in the ",(0,t.jsx)(n.code,{children:".jhipster"})," directory. So if you run the sub-generator again, using an existing entity name, you can update or regenerate the entity."]}),"\n",(0,t.jsx)(n.p,{children:"When you run the entity sub-generator for an existing entity, you will be asked a question 'Do you want to update the entity? This will replace the existing files for this entity, all your custom code will be overwritten' with following options:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Yes, re generate the entity"})," - This will regenerate your entity. Tip: This can be forced by passing a ",(0,t.jsx)(n.code,{children:"--regenerate"})," flag when running the sub-generator"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Yes, add more fields and relationships"})," - This will give you questions to add more fields and relationships"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Yes, remove fields and relationships"})," - This will give you questions to remove existing fields and relationships from the entity"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"No, exit"})," - This will exist the sub-generator without changing anything"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"You might want to update your entity for the following reasons:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"You want to add/remove fields and relationships to an existing entity"}),"\n",(0,t.jsx)(n.li,{children:"You want to reset your entity code to its original state"}),"\n",(0,t.jsx)(n.li,{children:"You have updated JHipster, and would like to have your entity generated with the new templates"}),"\n",(0,t.jsxs)(n.li,{children:["You have modified the ",(0,t.jsx)(n.code,{children:".json"})," configuration file (the format is quite close to the questions asked by the generator, so it's not very complicated), so you can have a new version of your entity"]}),"\n",(0,t.jsxs)(n.li,{children:["You have copy/pasted the ",(0,t.jsx)(n.code,{children:".json"})," file, and want a new entity that is very close to the copied entity"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["To regenerate all your entities at once, you can use the following commands (remove the ",(0,t.jsx)(n.code,{children:"--force"})," to have questions asked when files have changed)."]})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Linux & Mac: ",(0,t.jsx)(n.code,{children:"for f in `ls .jhipster`; do jhipster entity ${f%.*} --force ; done"})]}),"\n",(0,t.jsxs)(n.li,{children:["Windows: ",(0,t.jsx)(n.code,{children:"for %f in (.jhipster/*) do jhipster entity %~nf --force"})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"tutorial",children:"Tutorial"}),"\n",(0,t.jsx)(n.p,{children:"This is a short tutorial on creating two entities (a Author and a Book) which have a one-to-many relationship."}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:['If you want to have "live reload" of your JavaScript/TypeScript code, you will need run ',(0,t.jsx)(n.code,{children:"npm start"}),". You can go to the ",(0,t.jsx)(n.a,{href:"/development/",children:"Using JHipster in development"})," page for more information."]})}),"\n",(0,t.jsx)(n.h3,{id:"generate-the-author-entity",children:'Generate the "Author" entity'}),"\n",(0,t.jsx)(n.p,{children:"As we want to have a one-to-many relationship between Authors and Books (one author can write many books), we need to create the Author first. At the database level, JHipster will then be able to add a foreign key on the Book table, linking to the Author table."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"jhipster entity author"})}),"\n",(0,t.jsx)(n.p,{children:"Answer the next questions concerning the fields of this entity, the author has:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'a "name" of type "String"'}),"\n",(0,t.jsx)(n.li,{children:'a "birthDate" of type "LocalDate"'}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Then answer the questions concerning the relationships, the author has:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'A one-to-many relationship with the "book" entity (which doesn\'t exist yet)'}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"generate-the-book-entity",children:'Generate the "Book" entity'}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"jhipster entity book"})}),"\n",(0,t.jsx)(n.p,{children:"Answer the next questions concerning the fields of this entity, the book has:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'a "title", of type "String"'}),"\n",(0,t.jsx)(n.li,{children:'a "description", of type "String"'}),"\n",(0,t.jsx)(n.li,{children:'a "publicationDate", of type "LocalDate"'}),"\n",(0,t.jsx)(n.li,{children:'a "price", of type "BigDecimal"'}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Then answer the questions concerning the relationships, the book:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'Has many-to-one relationship with the "author" entity'}),"\n",(0,t.jsx)(n.li,{children:'And this relationship uses the "name" field (from the Author entity) to be displayed'}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"check-the-generated-code",children:"Check the generated code"}),"\n",(0,t.jsxs)(n.p,{children:["Run the generated test suite, with ",(0,t.jsx)(n.code,{children:"mvn test"}),", which will test the Author entity and the Book entity."]}),"\n",(0,t.jsxs)(n.p,{children:["Launch the application (for example with ",(0,t.jsx)(n.code,{children:"mvn"}),'), log in and select the "Author" and "Book" entities in the "entities" menu.']}),"\n",(0,t.jsx)(n.p,{children:"Check the database tables, to see if your data is correctly inserted."}),"\n",(0,t.jsx)(n.h3,{id:"improve-the-generated-code",children:"Improve the generated code"}),"\n",(0,t.jsx)(n.p,{children:"The generated files contain all the basic CRUD operations, and don't need to be modified if you don't need more than CRUD operations."}),"\n",(0,t.jsxs)(n.p,{children:["If you want to modify the generated code or the database schema, you should follow our ",(0,t.jsx)(n.a,{href:"/development/",children:"development guide"})]}),"\n",(0,t.jsxs)(n.p,{children:["If you want some more complex business behaviors, you might need to add a Spring ",(0,t.jsx)(n.code,{children:"@Service"})," class, using the ",(0,t.jsx)(n.a,{href:"/creating-a-service/",children:"service sub-generator"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"youre-done",children:"You're done!"}),"\n",(0,t.jsx)(n.p,{children:"Your generated CRUD page should look like this:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(6707).A+"",width:"800",height:"471"})})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},6707:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/screenshot_5-f4455202069c5c9c2d5018c5d047d7b4.png"},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>r});var t=i(96540);const s={},a=t.createContext(s);function o(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);