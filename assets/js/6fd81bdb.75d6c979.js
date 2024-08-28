"use strict";(self.webpackChunkjhipster_website=self.webpackChunkjhipster_website||[]).push([[9084],{13201:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>h});var r=t(74848),n=t(28453);const i={title:"Release 3.3.0",slug:"/2016/05/13/jhipster-release-3.3.0.html",displayed_sidebar:"docsSidebar",sidebar_class_name:"hidden"},a="JHipster release 3.3.0",l={id:"releases/2016-05-13-jhipster-release-3.3.0",title:"Release 3.3.0",description:"What's new",source:"@site/docs/releases/2016-05-13-jhipster-release-3.3.0.mdx",sourceDirName:"releases",slug:"/2016/05/13/jhipster-release-3.3.0.html",permalink:"/2016/05/13/jhipster-release-3.3.0.html",draft:!1,unlisted:!1,editUrl:"https://github.com/jhipster/jhipster.github.io/tree/main/docs/releases/2016-05-13-jhipster-release-3.3.0.mdx",tags:[],version:"current",lastUpdatedAt:1722273601e3,frontMatter:{title:"Release 3.3.0",slug:"/2016/05/13/jhipster-release-3.3.0.html",displayed_sidebar:"docsSidebar",sidebar_class_name:"hidden"},sidebar:"docsSidebar",previous:{title:"Release 3.2.1",permalink:"/2016/05/08/jhipster-release-3.2.1.html"},next:{title:"Release 3.4.0",permalink:"/2016/05/27/jhipster-release-3.4.0.html"}},o={},h=[{value:"What&#39;s new",id:"whats-new",level:2},{value:"Closed tickets",id:"closed-tickets",level:2},{value:"How to upgrade",id:"how-to-upgrade",level:2},{value:"Help and bugs",id:"help-and-bugs",level:2}];function d(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"jhipster-release-330",children:"JHipster release 3.3.0"}),"\n",(0,r.jsx)(s.h2,{id:"whats-new",children:"What's new"}),"\n",(0,r.jsx)(s.p,{children:"This version is a library upgrade, as Spring Cloud Brixton is now officially stable. We have also upgraded to the latest Spring Boot and Spring Security versions."}),"\n",(0,r.jsx)(s.p,{children:"Important changes and bug fixes:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"A new JHipster Registry (v2.1.0) has been released, and adds a new dashboard when you open up the application."}),"\n",(0,r.jsxs)(s.li,{children:["MongoDB deployment was buggy, as there was an error in the Mongobee configuration ",(0,r.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues/3582",children:"#3582"})]}),"\n",(0,r.jsxs)(s.li,{children:["Spring Data Cassandra support has been removed, so we use directly the DataStax Driver. This has allowed us to upgrade the Driver to a more recent version, and be ready for Cassandra 3.0 ",(0,r.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/pull/3570",children:"#3570"})]}),"\n",(0,r.jsxs)(s.li,{children:["The mail health check is now disabled by default, as it was causing issues with the Registry and Cassandra ",(0,r.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues/3579",children:"#3579"})]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"closed-tickets",children:"Closed tickets"}),"\n",(0,r.jsxs)(s.p,{children:["As always, ",(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues?q=milestone%3A3.3.0+is%3Aclosed",children:"you can check all closed tickets here"})}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"how-to-upgrade",children:"How to upgrade"}),"\n",(0,r.jsx)(s.p,{children:"Update your version of JHipster with:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"npm update -g generator-jhipster\n"})}),"\n",(0,r.jsxs)(s.p,{children:["If you have an existing project, it will still use the JHipster version with which it was generated.\nTo upgrade your project, you must first delete its ",(0,r.jsx)(s.code,{children:"node_modules"})," folder and then run:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"yo jhipster\n"})}),"\n",(0,r.jsx)(s.p,{children:"You can also update your project and all its entities by running"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"yo jhipster --with-entities\n"})}),"\n",(0,r.jsxs)(s.p,{children:["You can also update your entities one-by-one by running again the entity sub-generator, for example if your entity is named ",(0,r.jsx)(s.em,{children:"Foo"})]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"yo jhipster:entity Foo\n"})}),"\n",(0,r.jsx)(s.h2,{id:"help-and-bugs",children:"Help and bugs"}),"\n",(0,r.jsx)(s.p,{children:"If you find any issue with this release, don't hesitate to:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Add a bug on our ",(0,r.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues?state=open",children:"bug tracker"})]}),"\n",(0,r.jsxs)(s.li,{children:["Post a question on ",(0,r.jsx)(s.a,{href:"http://stackoverflow.com/tags/jhipster/info",children:"Stack Overflow"})]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"If the issue you have is an urgent bug or security issue, please:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Contact ",(0,r.jsx)(s.a,{href:"https://twitter.com/jhipster",children:"@jhipster"})," on Twitter"]}),"\n"]})]})}function c(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>a,x:()=>l});var r=t(96540);const n={},i=r.createContext(n);function a(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);