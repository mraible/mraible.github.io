"use strict";(self.webpackChunkjhipster_website=self.webpackChunkjhipster_website||[]).push([[4862],{54295:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=s(74848),t=s(28453);const a={title:"Add Querydsl support",slug:"/tips/003_tip_add_querydsl_support.html",last_update:{date:new Date("2017-04-27T08:40:00.000Z")}},i=void 0,o={id:"tips/tip_add_querydsl_support",title:"Add Querydsl support",description:"Tip submitted by @omrzljak, updated by @arnaud-deprez",source:"@site/docs/tips/003_tip_add_querydsl_support.mdx",sourceDirName:"tips",slug:"/tips/003_tip_add_querydsl_support.html",permalink:"/tips/003_tip_add_querydsl_support.html",draft:!1,unlisted:!1,editUrl:"https://github.com/jhipster/jhipster.github.io/tree/main/docs/tips/003_tip_add_querydsl_support.mdx",tags:[],version:"current",lastUpdatedAt:14932824e5,sidebarPosition:3,frontMatter:{title:"Add Querydsl support",slug:"/tips/003_tip_add_querydsl_support.html",last_update:{date:"2017-04-27T08:40:00.000Z"}},sidebar:"docsSidebar",previous:{title:"Using Docker containers as localhost on Mac/Windows",permalink:"/tips/020_tip_using_docker_containers_as_localhost_on_mac_and_windows.html"},next:{title:"Protecting Kibana with Apache (Basic Authentication)",permalink:"/tips/023_tip_protecting_kibana_with_apache_basic_authent.html"}},d={},l=[{value:"Generated Predicate classes",id:"generated-predicate-classes",level:2},{value:"Gradle plugin",id:"gradle-plugin",level:2},{value:"Maven plugin",id:"maven-plugin",level:2},{value:"Changes",id:"changes",level:2},{value:"build.gradle",id:"buildgradle",level:3},{value:"Change Repository classes",id:"change-repository-classes",level:2},{value:"Web support",id:"web-support",level:2},{value:"Write type safe queries",id:"write-type-safe-queries",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["Tip submitted by ",(0,r.jsx)(n.a,{href:"https://github.com/omrzljak",children:"@omrzljak"}),", updated by ",(0,r.jsx)(n.a,{href:"https://github.com/arnaud-deprez",children:"@arnaud-deprez"})]})}),"\n",(0,r.jsxs)(n.p,{children:["In some cases Spring Data ",(0,r.jsx)(n.a,{href:"http://docs.spring.io/spring-data/mongodb/docs/current/reference/html/#mongodb.repositories.queries",children:"query possibilities"})," are not enough to make your queries. You can use ",(0,r.jsx)(n.code,{children:"@Query"})," annotation and ",(0,r.jsx)(n.a,{href:"http://docs.spring.io/spring-data/mongodb/docs/current/reference/html/#mongodb.repositories.queries.json-based",children:"write your own"}),". Some of us like to write type safe queries like ",(0,r.jsx)(n.a,{href:"http://www.Querydsl.com/",children:"Querydsl"})," provides."]}),"\n",(0,r.jsx)(n.h2,{id:"generated-predicate-classes",children:"Generated Predicate classes"}),"\n",(0,r.jsx)(n.p,{children:"An important part of Querydsl are generated domain classes for queries so called Predicate. In case of spring-data-mongodb these are generated by the Java annotation post processing tool."}),"\n",(0,r.jsx)(n.h2,{id:"gradle-plugin",children:"Gradle plugin"}),"\n",(0,r.jsx)(n.p,{children:"There is also Gradle plugin for Querydsl which supports configuration for spring-data-mongodb."}),"\n",(0,r.jsx)(n.h2,{id:"maven-plugin",children:"Maven plugin"}),"\n",(0,r.jsxs)(n.p,{children:["There is also a plugin for Maven. Maven configuration is fully described in the chapter ",(0,r.jsx)(n.a,{href:"http://www.querydsl.com/static/querydsl/latest/reference/html/ch02.html#d0e132",children:"Maven integration"})," of the documentation.  You also need to perform the steps below."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Do not include the ",(0,r.jsx)(n.code,{children:"org.slf4j"})," dependency because it is included in Spring Boot."]})}),"\n",(0,r.jsx)(n.h2,{id:"changes",children:"Changes"}),"\n",(0,r.jsx)(n.h3,{id:"buildgradle",children:"build.gradle"}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.code,{children:"build.gradle"}),", add the dependency to ",(0,r.jsx)(n.code,{children:"Querydsl plugin"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-groovy",children:"buildscript {\n    repositories {\n        jcenter()\n    }\n    dependencies {\n        classpath \"gradle.plugin.com.ewerk.gradle.plugins:querydsl-plugin:1.0.9\"\n    }\n}\n\napply from: 'gradle/querydsl.gradle'\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Define the ",(0,r.jsx)(n.code,{children:"Querydsl version"})," to use in your ",(0,r.jsx)(n.code,{children:"gradle.properties"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-properties",children:"querydsl_version=4.1.4\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Then create a the file ",(0,r.jsx)(n.code,{children:"gradle/querydsl.gradle"})," with"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-groovy",children:'apply plugin: "com.ewerk.gradle.plugins.querydsl"\n\nsourceSets {\n    main {\n        java {\n            srcDir "$buildDir/generated/source/apt/main"\n        }\n    }\n}\n\nquerydsl {\n    // we use mongodb\n    springDataMongo = true\n    querydslSourcesDir = "$buildDir/generated/source/apt/main"\n}\n\ndependencies {\n    compile "com.querydsl:querydsl-mongodb:${querydsl_version}"\n    compileOnly "com.querydsl:querydsl-apt:${querydsl_version}"\n}\n'})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["We use MongoDB but Querydsl plugin supports also ",(0,r.jsx)(n.a,{href:"https://github.com/ewerk/gradle-plugins/tree/master/Querydsl-plugin",children:"more options"}),"."]})}),"\n",(0,r.jsxs)(n.p,{children:["If you run ",(0,r.jsx)(n.code,{children:"gradle build"})," you will see output like this\n",(0,r.jsx)(n.code,{children:"Note: Generating net.jogat.names.domain.QName for [net.jogat.names.domain.Name]"})]}),"\n",(0,r.jsx)(n.p,{children:"For every domain class which is annotated with @Document Querydsl plugin will generate one Predicate class."}),"\n",(0,r.jsx)(n.h2,{id:"change-repository-classes",children:"Change Repository classes"}),"\n",(0,r.jsxs)(n.p,{children:["If you have a domain class for example ",(0,r.jsx)(n.code,{children:"Name"}),", then you have also a ",(0,r.jsx)(n.code,{children:"NameRepository"})," class. You have to change every Repository class to extend from ",(0,r.jsx)(n.code,{children:"QueryDslPredicateExecutor"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"public interface NameRepository extends MongoRepository<Name, String>, QueryDslPredicateExecutor<Name> {}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This will extend your repository class with extra methods supporting Querydsl (",(0,r.jsx)(n.a,{href:"http://docs.spring.io/spring-data/mongodb/docs/current/reference/html/#mongodb.repositories.queries.type-safe",children:"see"})," )"]}),"\n",(0,r.jsx)(n.h2,{id:"web-support",children:"Web support"}),"\n",(0,r.jsxs)(n.p,{children:["To extend the rest controller for support parameterized request, you have to add ",(0,r.jsx)(n.code,{children:"com.mysema.query.types.Predicate"})," annotated with ",(0,r.jsx)(n.code,{children:"org.springframework.data.querydsl.binding.QuerydslPredicate"})," to the method parameters:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'@RestController\n@RequestMapping("/api")\nclass NameResource {\n\n    private final NameRepository nameRepository;\n    \n    public NameResource(NameRepository nameRepository) {\n        this.nameRepository = nameRepository;\n    }\n\n    @RequestMapping(value = "/names",\n        method = RequestMethod.GET,\n        produces = MediaType.APPLICATION_JSON_VALUE)\n    @Timed\n    public ResponseEntity<List<Name>> getAllNames(@QuerydslPredicate(root = Name.class) Predicate predicate,\n                                                    Pageable pageable) {\n        log.debug("REST request to get a page of Name");\n        Page<Name> page = nameRepository.findAll(predicate, pageable);\n        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page, "/api/names");\n        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);\n    }\n    ...\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Also in ",(0,r.jsx)(n.code,{children:"NameResourceIntTest"})," you have to support ",(0,r.jsx)(n.code,{children:"QuerydslPredicateArgumentResolver"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"public class NameResourceIntTest {\n    ...\n    @Autowired\n    private NameRepository nameRepository;\n    @Autowired\n    private QuerydslPredicateArgumentResolver querydslPredicateArgumentResolver;\n\n    @PostConstruct\n    public void setup() {\n        MockitoAnnotations.initMocks(this);\n        NameResource nameResource = new nameResource(nameRepository);\n        this.restNameMockMvc = MockMvcBuilders.standaloneSetup(nameResource)\n            .setCustomArgumentResolvers(pageableArgumentResolver, querydslPredicateArgumentResolver)\n            .setMessageConverters(jacksonMessageConverter).build();\n    }\n    ...\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["More details can be found in ",(0,r.jsx)(n.a,{href:"http://docs.spring.io/spring-data/mongodb/docs/current/reference/html/#core.web.type-safe",children:"the documentation"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"write-type-safe-queries",children:"Write type safe queries"}),"\n",(0,r.jsx)(n.p,{children:"Gradle or maven plugins have generated class QName which can be used for writing queries for Name.class. Here is Java example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'QName name = QName.name;\n\n// count all names whose list "categorie" contains string "TOP_EVER"\nnameRepository.count(name.categories.contains("TOP_EVER"));\n'})})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>o});var r=s(96540);const t={},a=r.createContext(t);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);