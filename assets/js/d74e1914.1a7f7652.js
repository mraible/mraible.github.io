"use strict";(self.webpackChunkjhipster_website=self.webpackChunkjhipster_website||[]).push([[1364],{16625:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var s=r(74848),n=r(28453);const i={title:"Release 4.8.0",slug:"/2017/09/12/jhipster-release-4.8.0.html",displayed_sidebar:"docsSidebar",sidebar_class_name:"hidden"},a="JHipster release 4.8.0",o={id:"releases/2017-09-12-jhipster-release-4.8.0",title:"Release 4.8.0",description:"What's new",source:"@site/docs/releases/2017-09-12-jhipster-release-4.8.0.mdx",sourceDirName:"releases",slug:"/2017/09/12/jhipster-release-4.8.0.html",permalink:"/2017/09/12/jhipster-release-4.8.0.html",draft:!1,unlisted:!1,editUrl:"https://github.com/jhipster/jhipster.github.io/tree/main/docs/releases/2017-09-12-jhipster-release-4.8.0.mdx",tags:[],version:"current",lastUpdatedAt:1722273601e3,frontMatter:{title:"Release 4.8.0",slug:"/2017/09/12/jhipster-release-4.8.0.html",displayed_sidebar:"docsSidebar",sidebar_class_name:"hidden"},sidebar:"docsSidebar",previous:{title:"Release 4.7.0",permalink:"/2017/08/23/jhipster-release-4.7.0.html"},next:{title:"Release 4.8.1",permalink:"/2017/09/13/jhipster-release-4.8.1.html"}},h={},l=[{value:"What&#39;s new",id:"whats-new",level:2},{value:"Closed tickets and merged pull requests",id:"closed-tickets-and-merged-pull-requests",level:2},{value:"How to upgrade",id:"how-to-upgrade",level:2},{value:"Help and bugs",id:"help-and-bugs",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"jhipster-release-480",children:"JHipster release 4.8.0"}),"\n",(0,s.jsx)(t.h2,{id:"whats-new",children:"What's new"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["The exception handling mechanism has been totally refactored to follow ",(0,s.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7807",children:"RFC 7807"}),", using ",(0,s.jsx)(t.a,{href:"https://github.com/zalando/problem-spring-web",children:"Zalando's problem-spring-web library"}),". Default error pages are also available on this site, see ",(0,s.jsx)(t.a,{href:"/problem/problem-with-message/",children:'"Error - problem with a message"'}),", ",(0,s.jsx)(t.a,{href:"/problem/parameterized/",children:'"Error - parameterized"'})," and ",(0,s.jsx)(t.a,{href:"/problem/constraint-violation/",children:'"Error: constraint violation"'}),". Those error pages can be customized in each application's ",(0,s.jsx)(t.code,{children:"ErrorConstants"})," class. See ticket ",(0,s.jsx)(t.a,{href:"https://github.com/jhipster/generator-jhipster/pull/6328",children:"#6328"})," for more detailed information."]}),"\n",(0,s.jsxs)(t.li,{children:["There is now a Spring Cache configuration to store Spring Security users. See ticket ",(0,s.jsx)(t.a,{href:"https://github.com/jhipster/generator-jhipster/issues/6105",children:"#6105"})," for some background information. This will improve the performance of all applications using an Hibernate L2 cache (as the user is loaded by its login, and not its ID, the Hibernate L2 cache doesn't work), but can lead to a few errors if you customized this part of the code. If you encounter a ",(0,s.jsx)(t.code,{children:"LazyInitializationException"}),", this is because you get a ",(0,s.jsx)(t.code,{children:"User"})," instance from  Spring Cache, and not from Hibernate, hence it is not an Hibernate managed object anymore (you can solve this by re-attaching the object, or by disabling the Spring Cache configuration and going back to the older configuration)."]}),"\n",(0,s.jsxs)(t.li,{children:["New features and better documentation to separate the front-end and the back-end parts of a JHipster application. See ticket ",(0,s.jsx)(t.a,{href:"https://github.com/jhipster/generator-jhipster/issues/5754",children:"#5754"})," and the ",(0,s.jsx)(t.a,{href:"/separating-front-end-and-api/",children:'"Separating the front-end and the API server" documentation'}),". And don't forget you can improve the documentation by doing a PR on ",(0,s.jsx)(t.a,{href:"https://github.com/jhipster/jhipster.github.io",children:"jhipster/jhipster.github.io"}),"!"]}),"\n",(0,s.jsxs)(t.li,{children:["Use the new Spotify ",(0,s.jsx)(t.code,{children:"dockerfile-maven-plugin"}),", see ticket ",(0,s.jsx)(t.a,{href:"https://github.com/jhipster/generator-jhipster/issues/6194",children:"#6194"}),". The main issue you will encounter is that the Maven plugin is ",(0,s.jsx)(t.code,{children:"dockerfile"})," and not ",(0,s.jsx)(t.code,{children:"docker"})," anymore - for example, you will now build your Docker image by running ",(0,s.jsx)(t.code,{children:"./mvnw package -Pprod dockerfile:build"}),". The documentation, as well as our ",(0,s.jsx)(t.a,{href:"https://github.com/jhipster/jhipster-oh-my-zsh-plugin",children:"oh-my-zsh plugin"}),", have been updated."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"In total, 72 tickets and PR have been closed, so there are also many minor issues which have been fixed."}),"\n",(0,s.jsx)(t.h2,{id:"closed-tickets-and-merged-pull-requests",children:"Closed tickets and merged pull requests"}),"\n",(0,s.jsxs)(t.p,{children:["As always, ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.a,{href:"https://github.com/jhipster/generator-jhipster/issues?q=milestone%3A4.8.0+is%3Aclosed",children:"you can check all closed tickets and merged pull requests here"})}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"how-to-upgrade",children:"How to upgrade"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Automatic upgrade"})}),"\n",(0,s.jsxs)(t.p,{children:["WARNING ",(0,s.jsx)(t.a,{href:"https://github.com/jhipster/generator-jhipster/pull/5966",children:"this has been fixed recently"}),", so if you have trouble with this:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:'You can still do a "manual upgrade" (see below)'}),"\n",(0,s.jsxs)(t.li,{children:["If you find anything helpful for us, please send us comments on ticket ",(0,s.jsx)(t.a,{href:"https://github.com/jhipster/generator-jhipster/issues/5883",children:"#5883"})]}),"\n",(0,s.jsx)(t.li,{children:"If you have time and want to help, don't hesitate to contribute on this part!"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["For an automatic upgrade, use the ",(0,s.jsx)(t.a,{href:"/upgrading-an-application/",children:"JHipster upgrade sub-generator"})," on an existing application:"]}),"\n",(0,s.jsx)(t.p,{children:"Upgrade your version of JHipster:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"yarn global upgrade generator-jhipster\n"})}),"\n",(0,s.jsx)(t.p,{children:"And then run the upgrade sub-generator:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"jhipster upgrade\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Manual upgrades"})}),"\n",(0,s.jsx)(t.p,{children:"For a manual upgrade, first upgrade your version of JHipster with:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"yarn global upgrade generator-jhipster\n"})}),"\n",(0,s.jsxs)(t.p,{children:["If you have an existing project, it will still use the JHipster version with which it was generated.\nTo upgrade your project, you must first delete its ",(0,s.jsx)(t.code,{children:"node_modules"})," folder and then run:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"jhipster\n"})}),"\n",(0,s.jsx)(t.p,{children:"You can also update your project and all its entities by running"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"jhipster --with-entities\n"})}),"\n",(0,s.jsxs)(t.p,{children:["You can also update your entities one-by-one by running again the entity sub-generator, for example if your entity is named ",(0,s.jsx)(t.em,{children:"Foo"})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"jhipster entity Foo\n"})}),"\n",(0,s.jsx)(t.h2,{id:"help-and-bugs",children:"Help and bugs"}),"\n",(0,s.jsx)(t.p,{children:"If you find any issue with this release, don't hesitate to:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Add a bug on our ",(0,s.jsx)(t.a,{href:"https://github.com/jhipster/generator-jhipster/issues?state=open",children:"bug tracker"})]}),"\n",(0,s.jsxs)(t.li,{children:["Post a question on ",(0,s.jsx)(t.a,{href:"http://stackoverflow.com/tags/jhipster/info",children:"Stack Overflow"})]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"If the issue you have is an urgent bug or security issue, please:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Contact ",(0,s.jsx)(t.a,{href:"https://twitter.com/jhipster",children:"@jhipster"})," on Twitter"]}),"\n"]})]})}function c(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>o});var s=r(96540);const n={},i=s.createContext(n);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);