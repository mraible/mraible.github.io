"use strict";(self.webpackChunkjhipster_website=self.webpackChunkjhipster_website||[]).push([[4373],{12177:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>h,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var r=t(74848),n=t(28453);const i={title:"Release 4.5.6",slug:"/2017/06/23/jhipster-release-4.5.6.html",displayed_sidebar:"docsSidebar",sidebar_class_name:"hidden"},a="JHipster release 4.5.6",l={id:"releases/2017-06-23-jhipster-release-4.5.6",title:"Release 4.5.6",description:"What's new",source:"@site/docs/releases/2017-06-23-jhipster-release-4.5.6.mdx",sourceDirName:"releases",slug:"/2017/06/23/jhipster-release-4.5.6.html",permalink:"/2017/06/23/jhipster-release-4.5.6.html",draft:!1,unlisted:!1,editUrl:"https://github.com/jhipster/jhipster.github.io/tree/main/docs/releases/2017-06-23-jhipster-release-4.5.6.mdx",tags:[],version:"current",lastUpdatedAt:1722273601e3,frontMatter:{title:"Release 4.5.6",slug:"/2017/06/23/jhipster-release-4.5.6.html",displayed_sidebar:"docsSidebar",sidebar_class_name:"hidden"},sidebar:"docsSidebar",previous:{title:"Release 4.5.5",permalink:"/2017/06/19/jhipster-release-4.5.5.html"},next:{title:"Release 4.6.0",permalink:"/2017/07/06/jhipster-release-4.6.0.html"}},h={},o=[{value:"What&#39;s new",id:"whats-new",level:2},{value:"Closed tickets and merged pull requests",id:"closed-tickets-and-merged-pull-requests",level:2},{value:"How to upgrade",id:"how-to-upgrade",level:2},{value:"Help and bugs",id:"help-and-bugs",level:2}];function d(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"jhipster-release-456",children:"JHipster release 4.5.6"}),"\n",(0,r.jsx)(s.h2,{id:"whats-new",children:"What's new"}),"\n",(0,r.jsx)(s.p,{children:"This is the sixth patch release for JHipster v4.5.0."}),"\n",(0,r.jsxs)(s.p,{children:["This patch release that was triggered by ",(0,r.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/commit/bdc77898d184c2ad9a1b1d4acc8acf40aadc0431#commitcomment-22724306",children:"this comment"}),", as the previous release had an issue for all MongoDB and Cassandra entities, which made the Angular 4 code fail to compile (if you are on 4.5.5, don't worry and look at the comment, this is really a trivial fix)."]}),"\n",(0,r.jsx)(s.p,{children:"This release also comes with some really awesome new features:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["After months of being stuck, our ",(0,r.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/pull/5966",children:"Upgrade sub-generator is fixed!"}),". Many thanks to ",(0,r.jsx)(s.a,{href:"https://github.com/tientq",children:"Tien Tran"})," who fixed this! Of course there are many use cases when upgrading, and this is still very new, so feedback is ",(0,r.jsx)(s.strong,{children:"highly welcome"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:["Infinispan support for both Hibernate 2nd-level cache and Spring Cache abstraction - see ",(0,r.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues/5874",children:"#5874"})," - many thanks to ",(0,r.jsx)(s.a,{href:"https://twitter.com/srinivasavasu",children:"@srinivasavasu"})," from Red Hat! This is still in ",(0,r.jsx)(s.strong,{children:"BETA"})," and should be more tested, but you can already try it and send us your feedback."]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"closed-tickets-and-merged-pull-requests",children:"Closed tickets and merged pull requests"}),"\n",(0,r.jsxs)(s.p,{children:["As always, ",(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues?q=milestone%3A4.5.6+is%3Aclosed",children:"you can check all closed tickets and merged pull requests here"})}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"how-to-upgrade",children:"How to upgrade"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Automatic upgrade"})}),"\n",(0,r.jsxs)(s.p,{children:["WARNING ",(0,r.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/pull/5966",children:"this has been fixed very recently"}),", so if you have trouble with this:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:'You can still do a "manual upgrade" (see below)'}),"\n",(0,r.jsxs)(s.li,{children:["If you find anything helpful for us, please send us comments on ticket ",(0,r.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues/5883",children:"#5883"})]}),"\n",(0,r.jsx)(s.li,{children:"If you have time and want to help, don't hesitate to contribute on this part!"}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["For an automatic upgrade, use the ",(0,r.jsx)(s.a,{href:"/upgrading-an-application/",children:"JHipster upgrade sub-generator"})," on an existing application:"]}),"\n",(0,r.jsx)(s.p,{children:"Upgrade your version of JHipster:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"yarn global upgrade generator-jhipster\n"})}),"\n",(0,r.jsx)(s.p,{children:"And then run the upgrade sub-generator:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"jhipster upgrade\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Manual upgrades"})}),"\n",(0,r.jsx)(s.p,{children:"For a manual upgrade, first upgrade your version of JHipster with:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"yarn global upgrade generator-jhipster\n"})}),"\n",(0,r.jsxs)(s.p,{children:["If you have an existing project, it will still use the JHipster version with which it was generated.\nTo upgrade your project, you must first delete its ",(0,r.jsx)(s.code,{children:"node_modules"})," folder and then run:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"jhipster\n"})}),"\n",(0,r.jsx)(s.p,{children:"You can also update your project and all its entities by running"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"jhipster --with-entities\n"})}),"\n",(0,r.jsxs)(s.p,{children:["You can also update your entities one-by-one by running again the entity sub-generator, for example if your entity is named ",(0,r.jsx)(s.em,{children:"Foo"})]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"jhipster entity Foo\n"})}),"\n",(0,r.jsx)(s.h2,{id:"help-and-bugs",children:"Help and bugs"}),"\n",(0,r.jsx)(s.p,{children:"If you find any issue with this release, don't hesitate to:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Add a bug on our ",(0,r.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues?state=open",children:"bug tracker"})]}),"\n",(0,r.jsxs)(s.li,{children:["Post a question on ",(0,r.jsx)(s.a,{href:"http://stackoverflow.com/tags/jhipster/info",children:"Stack Overflow"})]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"If the issue you have is an urgent bug or security issue, please:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Contact ",(0,r.jsx)(s.a,{href:"https://twitter.com/jhipster",children:"@jhipster"})," on Twitter"]}),"\n"]})]})}function c(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>a,x:()=>l});var r=t(96540);const n={},i=r.createContext(n);function a(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);