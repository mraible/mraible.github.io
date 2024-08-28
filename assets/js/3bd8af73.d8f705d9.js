"use strict";(self.webpackChunkjhipster_website=self.webpackChunkjhipster_website||[]).push([[4295],{37236:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>h,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var r=t(74848),n=t(28453);const i={title:"Release 6.10.5",slug:"/2020/11/07/jhipster-release-6.10.5.html",displayed_sidebar:"docsSidebar",sidebar_class_name:"hidden"},l="JHipster release v6.10.5",a={id:"releases/2020-11-07-jhipster-release-6.10.5",title:"Release 6.10.5",description:"Warning, this release fixes an important security vulnerabilities.",source:"@site/docs/releases/2020-11-07-jhipster-release-6.10.5.mdx",sourceDirName:"releases",slug:"/2020/11/07/jhipster-release-6.10.5.html",permalink:"/2020/11/07/jhipster-release-6.10.5.html",draft:!1,unlisted:!1,editUrl:"https://github.com/jhipster/jhipster.github.io/tree/main/docs/releases/2020-11-07-jhipster-release-6.10.5.mdx",tags:[],version:"current",lastUpdatedAt:1722273601e3,frontMatter:{title:"Release 6.10.5",slug:"/2020/11/07/jhipster-release-6.10.5.html",displayed_sidebar:"docsSidebar",sidebar_class_name:"hidden"},sidebar:"docsSidebar",previous:{title:"Release 6.10.4",permalink:"/2020/10/18/jhipster-release-6.10.4.html"},next:{title:"Release 7.0.0-beta.0",permalink:"/2020/12/21/jhipster-release-7.0.0-beta.0.html"}},h={},d=[{value:"Closed tickets and merged pull requests",id:"closed-tickets-and-merged-pull-requests",level:2},{value:"How to upgrade",id:"how-to-upgrade",level:2},{value:"Help and bugs",id:"help-and-bugs",level:2}];function o(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"jhipster-release-v6105",children:"JHipster release v6.10.5"}),"\n",(0,r.jsxs)(s.p,{children:["Warning, this release fixes an ",(0,r.jsx)(s.strong,{children:"important security vulnerabilities"}),".\nSee this ",(0,r.jsx)(s.a,{href:"https://nvd.nist.gov/vuln/detail/CVE-2020-10687",children:"link"})," for details."]}),"\n",(0,r.jsx)(s.p,{children:"This is a patch release which contains these fixes:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Update Undertow to fix CVE-2020-10687 - ",(0,r.jsx)(s.a,{href:"https://github.com/jhipster/jhipster/pull/906",children:"#906"})," ",(0,r.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/pull/12956",children:"#12956"})]}),"\n",(0,r.jsxs)(s.li,{children:["Fix ExtendWith annotation for Redis cache - ",(0,r.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues/12817",children:"#12817"})]}),"\n",(0,r.jsxs)(s.li,{children:["Change jdl command to use main branch - ",(0,r.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/pull/12961",children:"#12961"})]}),"\n",(0,r.jsxs)(s.li,{children:["Exclude translation of DataAccessException when there's no database - ",(0,r.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/pull/12830",children:"#12830"})," ",(0,r.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/pull/12829",children:"#12829"})]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"closed-tickets-and-merged-pull-requests",children:"Closed tickets and merged pull requests"}),"\n",(0,r.jsxs)(s.p,{children:["As always, ",(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues?q=milestone%3A6.10.5+is%3Aclosed",children:"you can check all closed tickets and merged pull requests here"})}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"how-to-upgrade",children:"How to upgrade"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Automatic upgrade"})}),"\n",(0,r.jsxs)(s.p,{children:["For an automatic upgrade, use the ",(0,r.jsx)(s.a,{href:"/upgrading-an-application/",children:"JHipster upgrade sub-generator"})," on an existing application:"]}),"\n",(0,r.jsx)(s.p,{children:"Upgrade your version of JHipster:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"npm update -g generator-jhipster\n"})}),"\n",(0,r.jsx)(s.p,{children:"And then run the upgrade sub-generator:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"jhipster upgrade\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Manual upgrades"})}),"\n",(0,r.jsx)(s.p,{children:"For a manual upgrade, first upgrade your version of JHipster with:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"npm update -g generator-jhipster\n"})}),"\n",(0,r.jsxs)(s.p,{children:["If you have an existing project, it will still use the JHipster version with which it was generated.\nTo upgrade your project, you must first delete its ",(0,r.jsx)(s.code,{children:"node_modules"})," folder and then run:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"jhipster\n"})}),"\n",(0,r.jsx)(s.p,{children:"You can also update your project and all its entities by running"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"jhipster --with-entities\n"})}),"\n",(0,r.jsxs)(s.p,{children:["You can also update your entities one-by-one by running again the entity sub-generator, for example if your entity is named ",(0,r.jsx)(s.em,{children:"Foo"})]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"jhipster entity Foo\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Tips"})}),"\n",(0,r.jsxs)(s.p,{children:["To generate your project with all Java classes already formatted using ",(0,r.jsx)(s.a,{href:"https://github.com/jhipster/prettier-java",children:"prettier-java"}),", you should use:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"jhipster --prettier-java\n"})}),"\n",(0,r.jsx)(s.h2,{id:"help-and-bugs",children:"Help and bugs"}),"\n",(0,r.jsx)(s.p,{children:"If you find any issue with this release, don't hesitate to:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Add a bug on our ",(0,r.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues?state=open",children:"bug tracker"})]}),"\n",(0,r.jsxs)(s.li,{children:["Post a question on ",(0,r.jsx)(s.a,{href:"http://stackoverflow.com/tags/jhipster/info",children:"Stack Overflow"})]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"If the issue you have is an urgent bug or security issue, please:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Contact ",(0,r.jsx)(s.a,{href:"https://twitter.com/jhipster",children:"@jhipster"})," on Twitter"]}),"\n"]})]})}function c(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>l,x:()=>a});var r=t(96540);const n={},i=r.createContext(n);function l(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);