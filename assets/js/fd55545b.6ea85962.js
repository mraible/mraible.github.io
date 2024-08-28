"use strict";(self.webpackChunkjhipster_website=self.webpackChunkjhipster_website||[]).push([[7669],{41611:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>h});var t=s(74848),n=s(28453);const i={title:"Release 4.0.0",slug:"/2017/02/02/jhipster-release-4.0.0.html",displayed_sidebar:"docsSidebar",sidebar_class_name:"hidden"},a="JHipster release 4.0.0",o={id:"releases/2017-02-02-jhipster-release-4.0.0",title:"Release 4.0.0",description:"This new major release is a huge step forward, after nearly one year of very hard work.",source:"@site/docs/releases/2017-02-02-jhipster-release-4.0.0.mdx",sourceDirName:"releases",slug:"/2017/02/02/jhipster-release-4.0.0.html",permalink:"/2017/02/02/jhipster-release-4.0.0.html",draft:!1,unlisted:!1,editUrl:"https://github.com/jhipster/jhipster.github.io/tree/main/docs/releases/2017-02-02-jhipster-release-4.0.0.mdx",tags:[],version:"current",lastUpdatedAt:1722273601e3,frontMatter:{title:"Release 4.0.0",slug:"/2017/02/02/jhipster-release-4.0.0.html",displayed_sidebar:"docsSidebar",sidebar_class_name:"hidden"},sidebar:"docsSidebar",previous:{title:"Release 3.12.2",permalink:"/2016/12/19/jhipster-release-3.12.2.html"},next:{title:"Release 4.0.1",permalink:"/2017/02/04/jhipster-release-4.0.1.html"}},l={},h=[{value:"Summary",id:"summary",level:2},{value:"Angular 2 support",id:"angular-2-support",level:2},{value:"Migration to Yarn",id:"migration-to-yarn",level:2},{value:"Migration to Webpack",id:"migration-to-webpack",level:2},{value:"JHipster server-side library and NG JHipster library",id:"jhipster-server-side-library-and-ng-jhipster-library",level:2},{value:"Constructor-based injection",id:"constructor-based-injection",level:2},{value:"&quot;AAA&quot; ranking on Sonar",id:"aaa-ranking-on-sonar",level:2},{value:"What&#39;s next?",id:"whats-next",level:2},{value:"Closed tickets and merged pull requests",id:"closed-tickets-and-merged-pull-requests",level:2},{value:"How to upgrade",id:"how-to-upgrade",level:2},{value:"Help and bugs",id:"help-and-bugs",level:2}];function d(e){const r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"jhipster-release-400",children:"JHipster release 4.0.0"}),"\n",(0,t.jsx)(r.p,{children:"This new major release is a huge step forward, after nearly one year of very hard work."}),"\n",(0,t.jsxs)(r.p,{children:["This would never have been possible without our wonderful ",(0,t.jsx)(r.a,{href:"/team/",children:"core dev team"})," and our incredible number of ",(0,t.jsx)(r.a,{href:"https://github.com/jhipster/generator-jhipster/graphs/contributors",children:"contributors"}),"! Thank you so much, everyone!"]}),"\n",(0,t.jsx)(r.h2,{id:"summary",children:"Summary"}),"\n",(0,t.jsx)(r.p,{children:"JHipster now support both AngularJS 1 and Angular 2.x, making it:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:'The only available "full stack" generator for Angular 2.x'}),"\n",(0,t.jsxs)(r.li,{children:["The only generator that creates non-trivial Angular 2.x code, in particular using our ",(0,t.jsx)(r.a,{href:"https://start.jhipster.tech/jdl-studio/",children:"JDL Studio"})]}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"We have also removed a lot of our previous pain points, so that generation is easier, faster, and safer."}),"\n",(0,t.jsx)(r.h2,{id:"angular-2-support",children:"Angular 2 support"}),"\n",(0,t.jsx)(r.p,{children:"This is the main big news, we now support Angular 2.x! To be more precise:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"AngularJS 1 is still our default option: you can use it perfectly fine with JHipster. This is our battle-tested, widely-use code, so if you want something very stable, that's your best option."}),"\n",(0,t.jsx)(r.li,{children:'Angular 2 is now marked "beta", even if we already know lots of projects are using it successfully. We have very little known bugs and very few limitations, so you can start using it on your project. The main issue is that this code is very new, so we expect to release a lot of patch releases in the next weeks, so you must be ready to update your project a few times.'}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"migration-to-yarn",children:"Migration to Yarn"}),"\n",(0,t.jsxs)(r.p,{children:["While we still support NPM, our migration to ",(0,t.jsx)(r.a,{href:"https://github.com/yarnpkg/yarn",children:"Yarn"})," has been very successful: builds are much faster, and we have much less download issues. So we recommend everyone switches to Yarn, and we might drop official NPM at some point in the future."]}),"\n",(0,t.jsx)(r.p,{children:"If you use Angular 2 (our previous point), we have also replaced Bower by Yarn. That means we only have one package manager, which is much more performant and gives much better quality."}),"\n",(0,t.jsx)(r.h2,{id:"migration-to-webpack",children:"Migration to Webpack"}),"\n",(0,t.jsxs)(r.p,{children:["With Angular 2, we migrated from Gulp to ",(0,t.jsx)(r.a,{href:"https://webpack.github.io/",children:"Webpack"}),"."]}),"\n",(0,t.jsx)(r.p,{children:"Webpack is much more efficient for working with Angular 2, and it can also be run directly from Yarn. No need to install Gulp anymore!"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Yes, if you use Angular 2 + Yarn + Webpack, we removed all the installation pain points of JHipster 3.x !!!"})}),"\n",(0,t.jsx)(r.h2,{id:"jhipster-server-side-library-and-ng-jhipster-library",children:"JHipster server-side library and NG JHipster library"}),"\n",(0,t.jsx)(r.p,{children:"One of the usual complaints with JHipster is that we generated too much code. So with JHipster 4 we introduce 2 new libraries:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["The ",(0,t.jsx)(r.a,{href:"https://github.com/jhipster/jhipster",children:"JHipster server-side library"})," contains \"utility\" classes that were previously generated. You can still extend or override them if you don't like their default implementation, in those (unlikely) use cases where those classes don't suit you."]}),"\n",(0,t.jsxs)(r.li,{children:["The ",(0,t.jsx)(r.a,{href:"https://github.com/jhipster/ng-jhipster",children:"NG JHipster library"}),' contains the same kind of "utility" code that was previously generated, but for Angular 2.x.']}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"As a result, the generated code should be much simpler, and easier to understand."}),"\n",(0,t.jsx)(r.h2,{id:"constructor-based-injection",children:"Constructor-based injection"}),"\n",(0,t.jsx)(r.p,{children:"JHipster is a complete upgrade of Spring libraries, with some major refactoring. The most important one is our switch from field-based injection to constructor-based injection."}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Constructor-based injection is considered cleaner by many people, in particular as it eases testing"}),"\n",(0,t.jsx)(r.li,{children:"JHipster now has constructor-based injection both in Spring and in Angular, making the code more homogeneous"}),"\n",(0,t.jsxs)(r.li,{children:["This removes the need for the ",(0,t.jsx)(r.code,{children:"@Inject"})," annotations, so we have deleted the ",(0,t.jsx)(r.code,{children:"javax.inject"})," dependency from the project"]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"aaa-ranking-on-sonar",children:'"AAA" ranking on Sonar'}),"\n",(0,t.jsx)(r.p,{children:'As a result of a lot of refactoring (including the previous point on constructor-based injection), we are happy to announce that our sample generated project has the highest "AAA" mark on Sonar.'}),"\n",(0,t.jsxs)(r.p,{children:["The official Sonar report ",(0,t.jsx)(r.a,{href:"https://sonarqube.com/dashboard/?id=1054756",children:"can be viewed here"}),", and is automatically generated after each commit on our master branch."]}),"\n",(0,t.jsx)(r.p,{children:'This means that a JHipster-generated project is of much higher quality than most "hand-crafted" projects!'}),"\n",(0,t.jsx)(r.h2,{id:"whats-next",children:"What's next?"}),"\n",(0,t.jsxs)(r.p,{children:["As this is a 4.0.0 release, with a lot of changes, we expect to release regularly patch versions. Be sure to follow ",(0,t.jsx)(r.a,{href:"https://twitter.com/jhipster",children:"@jhipster"})," to be notified of those new versions!"]}),"\n",(0,t.jsxs)(r.p,{children:["Our documentation is not totally updated, as it is very big. If you see any issue, don't hesitate to create a ticket, and maybe even send a pull request, on our ",(0,t.jsx)(r.a,{href:"https://github.com/jhipster/jhipster.github.io",children:"documentation repository"}),"."]}),"\n",(0,t.jsx)(r.h2,{id:"closed-tickets-and-merged-pull-requests",children:"Closed tickets and merged pull requests"}),"\n",(0,t.jsxs)(r.p,{children:["As always, ",(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"https://github.com/jhipster/generator-jhipster/issues?q=milestone%3A4.0.0+is%3Aclosed",children:"you can check all closed tickets and merged pull requests here"})}),"."]}),"\n",(0,t.jsx)(r.h2,{id:"how-to-upgrade",children:"How to upgrade"}),"\n",(0,t.jsxs)(r.p,{children:["As this is a major upgrade, expect quite a lot of merges if you use our ",(0,t.jsx)(r.a,{href:"/upgrading-an-application/",children:"JHipster upgrade sub-generator"})," on an existing application."]}),"\n",(0,t.jsx)(r.p,{children:"Of course, it will work a lot better if you stay on AngularJS 1! Otherwise you will need to migrate your whole front-end manually."}),"\n",(0,t.jsxs)(r.p,{children:["To use our ",(0,t.jsx)(r.a,{href:"/upgrading-an-application/",children:"JHipster upgrade sub-generator"}),", run:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"yo jhipster:upgrade\n"})}),"\n",(0,t.jsx)(r.p,{children:"For a manual upgrade, first upgrade your version of JHipster with:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"npm update -g generator-jhipster\n"})}),"\n",(0,t.jsxs)(r.p,{children:["If you have an existing project, it will still use the JHipster version with which it was generated.\nTo upgrade your project, you must first delete its ",(0,t.jsx)(r.code,{children:"node_modules"})," folder and then run:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"yo jhipster\n"})}),"\n",(0,t.jsx)(r.p,{children:"You can also update your project and all its entities by running"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"yo jhipster --with-entities\n"})}),"\n",(0,t.jsxs)(r.p,{children:["You can also update your entities one-by-one by running again the entity sub-generator, for example if your entity is named ",(0,t.jsx)(r.em,{children:"Foo"})]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"yo jhipster:entity Foo\n"})}),"\n",(0,t.jsx)(r.h2,{id:"help-and-bugs",children:"Help and bugs"}),"\n",(0,t.jsx)(r.p,{children:"If you find any issue with this release, don't hesitate to:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["Add a bug on our ",(0,t.jsx)(r.a,{href:"https://github.com/jhipster/generator-jhipster/issues?state=open",children:"bug tracker"})]}),"\n",(0,t.jsxs)(r.li,{children:["Post a question on ",(0,t.jsx)(r.a,{href:"http://stackoverflow.com/tags/jhipster/info",children:"Stack Overflow"})]}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"If the issue you have is an urgent bug or security issue, please:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["Contact ",(0,t.jsx)(r.a,{href:"https://twitter.com/jhipster",children:"@jhipster"})," on Twitter"]}),"\n"]})]})}function c(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,r,s)=>{s.d(r,{R:()=>a,x:()=>o});var t=s(96540);const n={},i=t.createContext(n);function a(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);