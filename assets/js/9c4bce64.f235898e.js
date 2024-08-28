"use strict";(self.webpackChunkjhipster_website=self.webpackChunkjhipster_website||[]).push([[1543],{8330:(e,i,o)=>{o.r(i),o.d(i,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>c,toc:()=>d});var r=o(74848),t=o(28453);const n={title:"Microservices in production",slug:"/microservices-in-production/",last_update:{date:new Date("2020-09-11T00:00:00.000Z")}},s=void 0,c={id:"microservices/microservices-in-production",title:"Microservices in production",description:"Microservices are a specific kind of JHipster applications. Please refer to our main Using JHipster in production documentation for more information on doing a production build, optimizing it and securing it.",source:"@site/docs/microservices/microservices-in-production.mdx",sourceDirName:"microservices",slug:"/microservices-in-production/",permalink:"/microservices-in-production/",draft:!1,unlisted:!1,editUrl:"https://github.com/jhipster/jhipster.github.io/tree/main/docs/microservices/microservices-in-production.mdx",tags:[],version:"current",lastUpdatedAt:15997824e5,frontMatter:{title:"Microservices in production",slug:"/microservices-in-production/",last_update:{date:"2020-09-11T00:00:00.000Z"}},sidebar:"docsSidebar",previous:{title:"Creating microservices",permalink:"/creating-microservices/"},next:{title:"JHipster Control Center",permalink:"/jhipster-control-center/"}},a={},d=[{value:"Microservices monitoring",id:"microservices-monitoring",level:2},{value:"Using Docker Compose to develop and deploy",id:"using-docker-compose-to-develop-and-deploy",level:2},{value:"Going to production with Cloud Foundry",id:"going-to-production-with-cloud-foundry",level:2},{value:"Going to production with Heroku",id:"going-to-production-with-heroku",level:2}];function l(e){const i={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i.p,{children:["Microservices are a specific kind of JHipster applications. Please refer to our main ",(0,r.jsx)(i.a,{href:"/production",children:"Using JHipster in production documentation"})," for more information on doing a production build, optimizing it and securing it."]}),"\n",(0,r.jsx)(i.h2,{id:"microservices-monitoring",children:"Microservices monitoring"}),"\n",(0,r.jsxs)(i.p,{children:["If using JHipster Registry, please refer to our ",(0,r.jsx)(i.a,{href:"/jhipster-registry",children:"JHipster Registry documentation"})," for learning which runtime dashboards are available, and how to use them."]}),"\n",(0,r.jsxs)(i.p,{children:["Our ",(0,r.jsx)(i.a,{href:"/monitoring",children:"monitoring documentation"})," is also very important, to learn specific information on using:"]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"ELK to collect the logs of your microservices"}),"\n",(0,r.jsx)(i.li,{children:"Prometheus to collect the metrics of your microservices"}),"\n",(0,r.jsx)(i.li,{children:"Zipkin to trace HTTP requests throughout your services"}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"using-docker-compose-to-develop-and-deploy",children:"Using Docker Compose to develop and deploy"}),"\n",(0,r.jsx)(i.p,{children:"Working on a microservices architecture means you will need several different services and databases working together, and in that context Docker Compose is a great tool to manage your development, testing and production environments."}),"\n",(0,r.jsxs)(i.p,{children:["A specific section on microservices is included in our ",(0,r.jsx)(i.a,{href:"/docker-compose#microservices",children:"Docker Compose documentation"}),", and we highly recommend that you get familiar with it when working on a microservices architecture."]}),"\n",(0,r.jsxs)(i.p,{children:["As Docker Swarm uses the same API as Docker Machine, deploying your microservices architecture in the cloud is exactly the same as deploying it on your local machine. Follow our ",(0,r.jsx)(i.a,{href:"/docker-compose",children:"Docker Compose documentation"})," to learn more about using Docker Compose with JHipster."]}),"\n",(0,r.jsx)(i.h2,{id:"going-to-production-with-cloud-foundry",children:"Going to production with Cloud Foundry"}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.a,{href:"/cloudfoundry",children:"Cloud Foundry sub-generator"})," works the same with a microservices architecture, the main difference is that you have more applications to deploy:"]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Use the ",(0,r.jsx)(i.a,{href:"/cloudfoundry",children:"Cloud Foundry sub-generator"})," to deploy first the JHipster Registry (which is a normal JHipster application)."]}),"\n",(0,r.jsxs)(i.li,{children:["Note the URL on which your JHipster Registry is deployed. Your applications must all point to that URL:","\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["In the ",(0,r.jsx)(i.code,{children:"bootstrap-prod.yml"})," file, the ",(0,r.jsx)(i.code,{children:"spring.cloud.config.uri"})," must point to ",(0,r.jsx)(i.code,{children:"http(s)://<your_jhipster_registry_url>/config/"})]}),"\n",(0,r.jsxs)(i.li,{children:["In the ",(0,r.jsx)(i.code,{children:"application-prod.yml"})," file, the ",(0,r.jsx)(i.code,{children:"eureka.client.serviceUrl.defaultZone"})," must point to ",(0,r.jsx)(i.code,{children:"http(s)://<your_jhipster_registry_url>/eureka/"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.li,{children:"Deploy your gateway(s) and microservices"}),"\n",(0,r.jsx)(i.li,{children:"Scale your applications as usual with Cloud Foundry"}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:"One important point to remember is that the JHipster Registry isn't secured by default, and that the microservices are not supposed to be accessible from the outside world, as users are supposed to use the gateway(s) to access your application."}),"\n",(0,r.jsx)(i.p,{children:"Two solutions are available to solve this issue:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Secure your Cloud Foundry using specific routes."}),"\n",(0,r.jsx)(i.li,{children:"Keep everything public, but use HTTPS everywhere, and secure your JHipster Registry using Spring Security's basic authentication support"}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"going-to-production-with-heroku",children:"Going to production with Heroku"}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.a,{href:"/heroku",children:"Heroku sub-generator"})," works nearly the same with a microservices architecture, the main difference is that you have more applications to deploy:"]}),"\n",(0,r.jsx)(i.p,{children:"Deploy a JHipster Registry directly with one click:"}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.a,{href:"https://dashboard.heroku.com/new?&template=https%3A%2F%2Fgithub.com%2Fjhipster%2Fjhipster-registry",children:(0,r.jsx)(i.img,{src:"https://camo.githubusercontent.com/c0824806f5221ebb7d25e559568582dd39dd1170/68747470733a2f2f7777772e6865726f6b7563646e2e636f6d2f6465706c6f792f627574746f6e2e706e67",alt:"Deploy to Heroku"})})}),"\n",(0,r.jsxs)(i.p,{children:["Please follow the ",(0,r.jsx)(i.a,{href:"/heroku",children:"Heroku sub-generator documentation"})," in order to understand how to secure your JHipster Registry."]}),"\n",(0,r.jsxs)(i.p,{children:["Note the URL on which your JHipster Registry is deployed. Your applications must all point to that URL in their ",(0,r.jsx)(i.code,{children:"application-prod.yml"})," file. Change that configuration to be:"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-yaml",children:"eureka:\n    instance:\n        hostname: https://admin:[password]@[appname].herokuapp.com\n        prefer-ip-address: false\n"})}),"\n",(0,r.jsx)(i.p,{children:"You can now deploy and scale the gateway(s) and microservices. The Heroku sub-generator will ask you a new question, to know the URL of your JHipster Registry: this will allow your applications to fetch their configuration on the Spring Cloud Config server."})]})}function u(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,i,o)=>{o.d(i,{R:()=>s,x:()=>c});var r=o(96540);const t={},n=r.createContext(t);function s(e){const i=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(n.Provider,{value:i},e.children)}}}]);