"use strict";(self.webpackChunkjhipster_website=self.webpackChunkjhipster_website||[]).push([[3889],{40865:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var t=i(74848),r=i(28453);const o={title:"Installing JHipster",slug:"/installation/",last_update:{date:new Date("2018-08-30T08:20:00.000Z")}},s=void 0,a={id:"environment/installation",title:"Installing JHipster",description:"Installation types",source:"@site/docs/environment/installation.mdx",sourceDirName:"environment",slug:"/installation/",permalink:"/installation/",draft:!1,unlisted:!1,editUrl:"https://github.com/jhipster/jhipster.github.io/tree/main/docs/environment/installation.mdx",tags:[],version:"current",lastUpdatedAt:15356172e5,frontMatter:{title:"Installing JHipster",slug:"/installation/",last_update:{date:"2018-08-30T08:20:00.000Z"}},sidebar:"docsSidebar",previous:{title:"Contributing companies",permalink:"/contributing-companies/"},next:{title:"Configuring a proxy",permalink:"/configuring-a-corporate-proxy/"}},l={},c=[{value:"Installation types",id:"installation-types",level:2},{value:"JHipster Online (for users wanting a simplified way to run JHipster)",id:"jhipster-online-for-users-wanting-a-simplified-way-to-run-jhipster",level:2},{value:"Local installation with NPM (recommended for normal users)",id:"local-installation-with-npm-recommended-for-normal-users",level:2},{value:"Quick setup",id:"quick-setup",level:3},{value:"Optional installations",id:"optional-installations",level:3},{value:"Additional information",id:"additional-information",level:3},{value:"Docker installation (for advanced users only)",id:"docker-installation-for-advanced-users-only",level:2},{value:"Information",id:"information",level:3},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Usage on Linux/Mac Windows (with Docker)",id:"usage-on-linuxmac-windows-with-docker",level:3},{value:"Pull the image",id:"pull-the-image",level:4},{value:"Run the image",id:"run-the-image",level:4},{value:"Check if the container is running",id:"check-if-the-container-is-running",level:4},{value:"Common operations",id:"common-operations",level:4},{value:"Accessing the container",id:"accessing-the-container",level:3},{value:"Your first project",id:"your-first-project",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"installation-types",children:"Installation types"}),"\n",(0,t.jsx)(n.p,{children:'We provide 3 ways of working with JHipster. If in doubt, choose our 2nd option, "Local installation with NPM":'}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://start.jhipster.tech/",children:"JHipster Online"})," is a way to generate an application without installing JHipster in the first place."]}),"\n",(0,t.jsx)(n.li,{children:'"Local installation with NPM" is the classical way of working with JHipster. Everything is installed on your machine, which can be a little complex to set up, but that\'s how most people usually work.'}),"\n",(0,t.jsxs)(n.li,{children:['The "',(0,t.jsx)(n.a,{href:"https://www.docker.io/",children:"Docker"}),'" container, which brings you a lightweight container with JHipster installed.']}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"jhipster-online-for-users-wanting-a-simplified-way-to-run-jhipster",children:"JHipster Online (for users wanting a simplified way to run JHipster)"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://start.jhipster.tech/",children:"JHipster Online"})," allows you to generate JHipster applications, without having to install JHipster."]}),"\n",(0,t.jsx)(n.p,{children:"This is intended for people trying JHipster for the first time, or who want to have a look at what JHipster provides."}),"\n",(0,t.jsx)(n.p,{children:'While it is easier to use, it is not the "full JHipster experience", and once your application is generated you will still need to follow most of the steps from the next section ("Local installation with NPM"), as you will still need Java (to run your application) and NPM (to manage your front-end code).'}),"\n",(0,t.jsx)(n.p,{children:"In the future, we expect JHipster Online to provide more features."}),"\n",(0,t.jsx)(n.h2,{id:"local-installation-with-npm-recommended-for-normal-users",children:"Local installation with NPM (recommended for normal users)"}),"\n",(0,t.jsx)(n.h3,{id:"quick-setup",children:"Quick setup"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Install Java 17 or 21 LTS. We recommend you use ",(0,t.jsx)(n.a,{href:"https://adoptium.net/temurin/releases/?version=21",children:"Eclipse Temurin builds"}),", as they are open source and free."]}),"\n",(0,t.jsxs)(n.li,{children:["Install Node.js from ",(0,t.jsx)(n.a,{href:"http://nodejs.org/",children:"the Node.js website"})," (please use an LTS 64-bit version, non-LTS versions are not supported)"]}),"\n",(0,t.jsxs)(n.li,{children:["Install JHipster: ",(0,t.jsx)(n.code,{children:"npm install -g generator-jhipster"})]}),"\n",(0,t.jsxs)(n.li,{children:["(optional) If you want to use a module or a blueprint (for instance from the ",(0,t.jsx)(n.a,{href:"/modules/marketplace/",children:"JHipster Marketplace"}),"), install ",(0,t.jsx)(n.a,{href:"https://yeoman.io/",children:"Yeoman"}),": ",(0,t.jsx)(n.code,{children:"npm install -g yo"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Now that JHipster is installed, your next step is to ",(0,t.jsx)(n.a,{href:"/creating-an-app/",children:"create an application"})]}),"\n",(0,t.jsx)(n.h3,{id:"optional-installations",children:"Optional installations"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Install a Java build tool.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Whether you choose to use ",(0,t.jsx)(n.a,{href:"http://maven.apache.org/",children:"Maven"})," or ",(0,t.jsx)(n.a,{href:"http://www.gradle.org/",children:"Gradle"}),", you normally don't have to install anything, as JHipster will automatically install the ",(0,t.jsx)(n.a,{href:"https://github.com/takari/maven-wrapper",children:"Maven Wrapper"})," or the ",(0,t.jsx)(n.a,{href:"http://gradle.org/docs/current/userguide/gradle_wrapper.html",children:"Gradle Wrapper"})," for you."]}),"\n",(0,t.jsxs)(n.li,{children:["If you don't want to use those wrappers, go to the official ",(0,t.jsx)(n.a,{href:"http://maven.apache.org/",children:"Maven website"})," or ",(0,t.jsx)(n.a,{href:"http://www.gradle.org/",children:"Gradle website"})," to do your own installation."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Install Git from ",(0,t.jsx)(n.a,{href:"http://git-scm.com/",children:"git-scm.com"}),". We recommend you also use a tool like ",(0,t.jsx)(n.a,{href:"http://www.sourcetreeapp.com/",children:"SourceTree"})," if you are starting with Git.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"JHipster will try to commit your project to Git, if it is installed."}),"\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.a,{href:"/upgrading-an-application/",children:"JHipster upgrade sub-generator"})," requires to have Git installed."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"additional-information",children:"Additional information"}),"\n",(0,t.jsxs)(n.p,{children:["JHipster uses ",(0,t.jsx)(n.a,{href:"http://yeoman.io/",children:"Yeoman"})," for code generation.\nTo find more information, tips and help, please have a look at ",(0,t.jsx)(n.a,{href:"http://yeoman.io/learning/index.html",children:'the Yeoman "getting starting" guide'})," before ",(0,t.jsx)(n.a,{href:"https://github.com/jhipster/generator-jhipster/issues?state=open",children:"submitting a bug"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The configuration will be stored in a generated ",(0,t.jsx)(n.code,{children:".yo-rc.json"})," file, so it is ",(0,t.jsx)(n.strong,{children:"strongly"})," recommended not to generate a JHipster project in your HOME directory. If you did it, you won't be able to generate another project in a sub directory. To solve it, delete the ",(0,t.jsx)(n.code,{children:".yo-rc.json"})," file."]}),"\n",(0,t.jsx)(n.h2,{id:"docker-installation-for-advanced-users-only",children:"Docker installation (for advanced users only)"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["This Docker image is for running the JHipster generator inside a container. It's completely different from the ",(0,t.jsx)(n.a,{href:"/docker-compose/",children:"Docker and Docker Compose configurations"})," that JHipster will generate, which goal is to run your generated application inside a container"]})}),"\n",(0,t.jsx)(n.h3,{id:"information",children:"Information"}),"\n",(0,t.jsxs)(n.p,{children:["JHipster has a specific ",(0,t.jsx)(n.a,{href:"https://github.com/jhipster/generator-jhipster/blob/main/Dockerfile",children:"Dockerfile"}),", which provides a ",(0,t.jsx)(n.a,{href:"https://www.docker.io/",children:"Docker"})," image."]}),"\n",(0,t.jsxs)(n.p,{children:['It makes a Docker "Automated build" that is available on: ',(0,t.jsx)(n.a,{href:"https://hub.docker.com/r/jhipster/jhipster/",children:"https://hub.docker.com/r/jhipster/jhipster/"})]}),"\n",(0,t.jsx)(n.p,{children:"This image will allow you to run JHipster inside Docker."}),"\n",(0,t.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"(Recommended) Docker Desktop:"})," the easiest way to build, run and test the dockerized apps. ",(0,t.jsx)(n.a,{href:"https://docs.docker.com/desktop/",children:"Docker Desktop"})," comes with graphical interface for managing containers/images/volumes, Docker developer tools, Kubernetes support and much more."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Docker Engine:"})," client-server application with command line interface (CLI). Follow the ",(0,t.jsx)(n.a,{href:"https://docs.docker.com/engine/install/",children:"Docker Engine"})," installation instructions"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"As the generated files are in your shared folder, they will not be deleted if you stop your Docker container. However, if you don't want Docker to keep downloading all the Maven and NPM dependencies every time you start the container, you should commit its state or mount a volume."}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:["Based on your OS, your ",(0,t.jsx)(n.code,{children:"DOCKER_HOST"})," will differ. On Linux, it will be your localhost.\nFor Mac/Windows, you will have to obtain the IP using following command: ",(0,t.jsx)(n.code,{children:"docker-machine ip default"})]})}),"\n",(0,t.jsxs)(n.p,{children:["On Linux, you might need to run the ",(0,t.jsx)(n.code,{children:"docker"})," command as root user if your user is not part of docker group. It's a good idea to add your user to docker group so that you can run docker commands as a non-root user. Follow the steps on ",(0,t.jsx)(n.a,{href:"http://askubuntu.com/a/477554",children:"http://askubuntu.com/a/477554"})," to do so."]}),"\n",(0,t.jsx)(n.h3,{id:"usage-on-linuxmac-windows-with-docker",children:"Usage on Linux/Mac Windows (with Docker)"}),"\n",(0,t.jsx)(n.h4,{id:"pull-the-image",children:"Pull the image"}),"\n",(0,t.jsx)(n.p,{children:"Pull the latest JHipster Docker image:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"docker image pull jhipster/jhipster\n"})}),"\n",(0,t.jsx)(n.p,{children:"Pull the development JHipster Docker image:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"docker image pull jhipster/jhipster:master\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You can see all tags ",(0,t.jsx)(n.a,{href:"https://hub.docker.com/r/jhipster/jhipster/tags/",children:"here"})]}),"\n",(0,t.jsx)(n.h4,{id:"run-the-image",children:"Run the image"}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsx)(n.p,{children:"If you are using Docker Machine on Mac or Windows, your Docker daemon has only limited access to your OS X or Windows file system. Docker Machine tries to auto-share your /Users (OS X) or C:\\Users&lt;username> (Windows) directory. So you have to create the project folder under these directory to avoid any volume mounting issues."})}),"\n",(0,t.jsx)(n.p,{children:'Create a "jhipster" folder in your home directory:'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"mkdir ~/jhipster\n"})}),"\n",(0,t.jsx)(n.p,{children:"Run the Docker image, with the following options:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'The Docker "/home/jhipster/app" folder is shared to the local "~/jhipster" folder'}),"\n",(0,t.jsx)(n.li,{children:"Forward all ports exposed by Docker (8080 for the Java application, 9000 for BrowserSync, 3001 for the BrowserSync UI)"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"docker container run --name jhipster -v ~/jhipster:/home/jhipster/app -v ~/.m2:/home/jhipster/.m2 -p 8080:8080 -p 9000:9000 -p 3001:3001 -d -t jhipster/jhipster\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"If you have already started the container once before, you do not need to run the above command, you can start/stop the existing container."})}),"\n",(0,t.jsx)(n.h4,{id:"check-if-the-container-is-running",children:"Check if the container is running"}),"\n",(0,t.jsx)(n.p,{children:"To check that your container is running, use the command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'docker container ps\n\nCONTAINER ID    IMAGE               COMMAND                 CREATED         STATUS          PORTS                                                       NAMES\n4ae16c0539a3    jhipster/jhipster   "tail -f /home/jhipst"  4 seconds ago   Up 3 seconds    0.0.0.0:9000-3001->9000-3001/tcp, 0.0.0.0:8080->8080/tcp    jhipster\n'})}),"\n",(0,t.jsx)(n.h4,{id:"common-operations",children:"Common operations"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["To stop the container run: ",(0,t.jsx)(n.code,{children:"docker container stop jhipster"})]}),"\n",(0,t.jsxs)(n.li,{children:["And to start again, run: ",(0,t.jsx)(n.code,{children:"docker container start jhipster"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"In case you update the Docker image (rebuild or pull from the Docker hub), it's better to remove the existing container, and run the container all over again. To do so, first stop the container, remove it and then run it again:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"docker container stop jhipster"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"docker container rm jhipster"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"docker image pull jhipster/jhipster"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"docker container run --name jhipster -v ~/jhipster:/home/jhipster/app -v ~/.m2:/home/jhipster/.m2 -p 8080:8080 -p 9000:9000 -p 3001:3001 -d -t jhipster/jhipster"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"accessing-the-container",children:"Accessing the container"}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:["On Windows, you need to run the Docker Quick Terminal as Administrator to be able to create symlinks during the ",(0,t.jsx)(n.code,{children:"npm install"})," step."]})}),"\n",(0,t.jsx)(n.p,{children:"The easiest way to log into the running container is by executing following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"docker container exec -it <container_name> bash\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If you copy-pasted the above command to run the container, notice that you have to specify ",(0,t.jsx)(n.code,{children:"jhipster"})," as the container name:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"docker container exec -it jhipster bash\n"})}),"\n",(0,t.jsx)(n.p,{children:'You will log in as the "jhipster" user.'}),"\n",(0,t.jsxs)(n.p,{children:['If you want to log in as "root", as the ',(0,t.jsx)(n.code,{children:"sudo"})," command isn't available in Ubuntu Xenial, you need to run:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"docker container exec -it --user root jhipster bash\n"})}),"\n",(0,t.jsx)(n.h3,{id:"your-first-project",children:"Your first project"}),"\n",(0,t.jsx)(n.p,{children:"You can then go to the /home/jhipster/app directory in your container, and start building your app inside Docker:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"cd /home/jhipster/app\n\njhipster\n"})}),"\n",(0,t.jsx)(n.p,{children:"Once your application is created, you can run all the normal gulp/bower/maven commands, for example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"./mvnw\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Congratulations! You've launched your JHipster app inside Docker!"})}),"\n",(0,t.jsx)(n.p,{children:"On your machine, you should be able to:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Access the running application at ",(0,t.jsx)(n.code,{children:"http://DOCKER_HOST:8080"})]}),"\n",(0,t.jsx)(n.li,{children:"Get all the generated files inside your shared folder"}),"\n"]}),"\n",(0,t.jsxs)(n.admonition,{type:"warning",children:[(0,t.jsxs)(n.p,{children:["By default, Docker is not installed inside the ",(0,t.jsx)(n.code,{children:"jhipster/jhipster"})," image."]}),(0,t.jsx)(n.p,{children:"So you won't be able to:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"use the docker-compose files"}),"\n",(0,t.jsxs)(n.li,{children:["build a Docker image with the docker daemon (Maven goal: ",(0,t.jsx)(n.code,{children:"jib:dockerBuild"})," or Gradle task: ",(0,t.jsx)(n.code,{children:"jibDockerBuild"}),")"]}),"\n"]}),(0,t.jsxs)(n.p,{children:["However, you will be able to use ",(0,t.jsx)(n.a,{href:"https://github.com/GoogleContainerTools/jib",children:"jib"}),"'s daemonless mode which can build\na docker image and push it to a registry without access to a docker daemon (Maven goal: ",(0,t.jsx)(n.code,{children:"jib:build"})," or Gradle task: ",(0,t.jsx)(n.code,{children:"jibBuild"}),").\nBut you will need to setup credentials to the docker registry as a pre-requisite of building the app.\nSee the ",(0,t.jsx)(n.a,{href:"https://github.com/GoogleContainerTools/jib/tree/master/jib-maven-plugin#configuration",children:"Jib plugin configuration documentations"})," for more details."]})]})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>a});var t=i(96540);const r={},o=t.createContext(r);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);