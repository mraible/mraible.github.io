"use strict";(self.webpackChunkjhipster_website=self.webpackChunkjhipster_website||[]).push([[4965],{50766:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=t(74848),n=t(28453);const i={title:"Release 6.3.1",slug:"/2019/09/20/jhipster-release-6.3.1.html",displayed_sidebar:"docsSidebar",sidebar_class_name:"hidden"},a="JHipster release v6.3.1",l={id:"releases/2019-09-20-jhipster-release-6.3.1",title:"Release 6.3.1",description:"Warning, this release fixes an important security vulnerabilities:",source:"@site/docs/releases/2019-09-20-jhipster-release-6.3.1.mdx",sourceDirName:"releases",slug:"/2019/09/20/jhipster-release-6.3.1.html",permalink:"/2019/09/20/jhipster-release-6.3.1.html",draft:!1,unlisted:!1,editUrl:"https://github.com/jhipster/jhipster.github.io/tree/main/docs/releases/2019-09-20-jhipster-release-6.3.1.mdx",tags:[],version:"current",lastUpdatedAt:1722273601e3,frontMatter:{title:"Release 6.3.1",slug:"/2019/09/20/jhipster-release-6.3.1.html",displayed_sidebar:"docsSidebar",sidebar_class_name:"hidden"},sidebar:"docsSidebar",previous:{title:"Release 6.3.0",permalink:"/2019/09/13/jhipster-release-6.3.0.html"},next:{title:"Release 6.4.0",permalink:"/2019/10/10/jhipster-release-6.4.0.html"}},o={},d=[{value:"Closed tickets and merged pull requests",id:"closed-tickets-and-merged-pull-requests",level:2},{value:"How to upgrade",id:"how-to-upgrade",level:2},{value:"Help and bugs",id:"help-and-bugs",level:2}];function h(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"jhipster-release-v631",children:"JHipster release v6.3.1"}),"\n",(0,r.jsxs)(s.p,{children:["Warning, this release fixes an ",(0,r.jsx)(s.strong,{children:"important security vulnerabilities"}),":"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Our previous release had an important security vulnerability, please read ",(0,r.jsx)(s.a,{href:"/2019/09/13/jhipster-release-6.3.0/",children:"the v6.3.0 release notes"})," for more information. It was announced that this vulnerability was only for users using JWT authentication: the issue is in fact wider, and affects people using session-based authentication and UAA authentication. Only people using OAuth2 authentication (with services like Keycloak or Okta) are safe. This was already fixed in the previous release, so there is nothing specific for this in this release."]}),"\n",(0,r.jsxs)(s.li,{children:["We have a ",(0,r.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/security/advisories/GHSA-mc84-xr9p-938r",children:"new vulnerability that affects Gradle users"}),". The generated configuration file contained one Maven repository configured with HTTP, and not HTTPS, which could lead to man-in-the-middle attacks when doing a build. You will find all information in the security advisory, but to make a long story short: you should use HTTPS both in your Maven and Gradle build files."]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"What's new in this release"})}),"\n",(0,r.jsxs)(s.p,{children:["This release closes ",(0,r.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues?q=milestone%3A6.3.1+is%3Aclosed",children:"48 tickets and pull requests"}),". It's a patch release, so those are mostly library upgrades, bug fixes, as well as a number of smaller feature enhancements."]}),"\n",(0,r.jsx)(s.h2,{id:"closed-tickets-and-merged-pull-requests",children:"Closed tickets and merged pull requests"}),"\n",(0,r.jsxs)(s.p,{children:["As always, ",(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues?q=milestone%3A6.3.1+is%3Aclosed",children:"you can check all closed tickets and merged pull requests here"})}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"how-to-upgrade",children:"How to upgrade"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Automatic upgrade"})}),"\n",(0,r.jsxs)(s.p,{children:["For an automatic upgrade, use the ",(0,r.jsx)(s.a,{href:"/upgrading-an-application/",children:"JHipster upgrade sub-generator"})," on an existing application:"]}),"\n",(0,r.jsx)(s.p,{children:"Upgrade your version of JHipster:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"npm update -g generator-jhipster\n"})}),"\n",(0,r.jsx)(s.p,{children:"And then run the upgrade sub-generator:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"jhipster upgrade\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Manual upgrades"})}),"\n",(0,r.jsx)(s.p,{children:"For a manual upgrade, first upgrade your version of JHipster with:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"npm update -g generator-jhipster\n"})}),"\n",(0,r.jsxs)(s.p,{children:["If you have an existing project, it will still use the JHipster version with which it was generated.\nTo upgrade your project, you must first delete its ",(0,r.jsx)(s.code,{children:"node_modules"})," folder and then run:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"jhipster\n"})}),"\n",(0,r.jsx)(s.p,{children:"You can also update your project and all its entities by running"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"jhipster --with-entities\n"})}),"\n",(0,r.jsxs)(s.p,{children:["You can also update your entities one-by-one by running again the entity sub-generator, for example if your entity is named ",(0,r.jsx)(s.em,{children:"Foo"})]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"jhipster entity Foo\n"})}),"\n",(0,r.jsx)(s.h2,{id:"help-and-bugs",children:"Help and bugs"}),"\n",(0,r.jsx)(s.p,{children:"If you find any issue with this release, don't hesitate to:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Add a bug on our ",(0,r.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues?state=open",children:"bug tracker"})]}),"\n",(0,r.jsxs)(s.li,{children:["Post a question on ",(0,r.jsx)(s.a,{href:"http://stackoverflow.com/tags/jhipster/info",children:"Stack Overflow"})]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"If the issue you have is an urgent bug or security issue, please:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Contact ",(0,r.jsx)(s.a,{href:"https://twitter.com/jhipster",children:"@jhipster"})," on Twitter"]}),"\n"]})]})}function c(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>a,x:()=>l});var r=t(96540);const n={},i=r.createContext(n);function a(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);