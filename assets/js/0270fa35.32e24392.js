"use strict";(self.webpackChunkjhipster_website=self.webpackChunkjhipster_website||[]).push([[2531],{91701:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>p});var i=t(74848),o=t(28453);const a={title:"Common application properties",slug:"/common-application-properties/",last_update:{date:new Date("2018-03-18T18:20:00.000Z")}},s=void 0,r={id:"development/common-application-properties",title:"Common application properties",description:"JHipster generates a Spring Boot application, and can be configured using the standard Spring Boot properties mechanism.",source:"@site/docs/development/common-application-properties.mdx",sourceDirName:"development",slug:"/common-application-properties/",permalink:"/common-application-properties/",draft:!1,unlisted:!1,editUrl:"https://github.com/jhipster/jhipster.github.io/tree/main/docs/development/common-application-properties.mdx",tags:[],version:"current",lastUpdatedAt:15213972e5,frontMatter:{title:"Common application properties",slug:"/common-application-properties/",last_update:{date:"2018-03-18T18:20:00.000Z"}},sidebar:"docsSidebar",previous:{title:"Managing profiles",permalink:"/profiles/"},next:{title:"Common ports",permalink:"/common-ports/"}},c={},p=[{value:"Spring Boot standard application properties",id:"spring-boot-standard-application-properties",level:2},{value:"JHipster application properties",id:"jhipster-application-properties",level:2},{value:"Application-specific properties",id:"application-specific-properties",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"JHipster generates a Spring Boot application, and can be configured using the standard Spring Boot properties mechanism."}),"\n",(0,i.jsxs)(n.p,{children:["Those properties are configured at generation-time by JHipster, and often have different values in development and production modes: learn more about this in our ",(0,i.jsx)(n.a,{href:"/profiles",children:"Profiles documentation"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"spring-boot-standard-application-properties",children:"Spring Boot standard application properties"}),"\n",(0,i.jsxs)(n.p,{children:["Like any Spring Boot application, JHipster allows you to configure any standard ",(0,i.jsx)(n.a,{href:"http://docs.spring.io/spring-boot/docs/current/reference/html/common-application-properties.html",children:"Spring Boot application property"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"jhipster-application-properties",children:"JHipster application properties"}),"\n",(0,i.jsxs)(n.p,{children:["JHipster provides specific application properties, which come from the ",(0,i.jsx)(n.a,{href:"https://github.com/jhipster/jhipster",children:"JHipster server-side library"}),". Those properties are standard for all JHipster projects, but some of them only work depending on what you selected when you built your application: for example the ",(0,i.jsx)(n.code,{children:"jhipster.cache.hazelcast"})," key only works if you selected Hazelcast as your 2nd-level Hibernate cache."]}),"\n",(0,i.jsxs)(n.p,{children:["Those properties are configured using the ",(0,i.jsx)(n.code,{children:"io.github.jhipster.config.JHipsterProperties"})," class."]}),"\n",(0,i.jsx)(n.p,{children:"Here is a documentation for those properties:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'jhipster:\n\n    # Thread pool that will be used for asynchronous method calls in JHipster\n    async:\n        core-pool-size: 2 # Initial pool size\n        max-pool-size: 50 # Maximum pool size\n        queue-capacity: 10000 # Queue capacity of the pool\n\n    # Specific configuration for JHipster gateways\n    # See https://www.jhipster.tech/api-gateway/ for more information on JHipster gateways\n    gateway:\n        rate-limiting:\n            enabled: false # Rate limiting is disabled by default\n            limit: 100_000L # By default we allow 100,000 API calls\n            duration-in-seconds: 3_600 # By default the rate limiting is reinitialized every hour\n        authorized-microservices-endpoints: # Access Control Policy, if left empty for a route, all endpoints will be accessible\n            app1: /api # recommended prod configuration, it allows the access to all API calls from the "app1" microservice\n\n    # HTTP configuration\n    http:\n        cache: # Used by io.github.jhipster.web.filter.CachingHttpHeadersFilter\n            timeToLiveInDays: 1461 # Static assets are cached for 4 years by default\n\n    # Hibernate 2nd level cache, used by CacheConfiguration\n    cache:\n        hazelcast: # Hazelcast configuration\n            time-to-live-seconds: 3600 # By default objects stay 1 hour in the cache\n            backup-count: 1 # Number of objects backups\n            # Configure the Hazelcast management center\n            # Full reference is available at: http://docs.hazelcast.org/docs/management-center/3.9/manual/html/Deploying_and_Starting.html\n            management-center:\n                enabled: false # Hazelcast management center is disabled by default\n                update-interval: 3 # Updates are sent to the Hazelcast management center every 3 seconds by default\n                # Default URL for Hazelcast management center when using JHipster\'s Docker Compose configuration\n                # See src/main/docker/hazelcast-management-center.yml\n                # Warning, the default port is 8180 as port 8080 is already used by JHipster\n                url: http://localhost:8180/mancenter\n        ehcache: # Ehcache configuration\n            time-to-live-seconds: 3600 # By default objects stay 1 hour in the cache\n            max-entries: 100 # Number of objects in each cache entry\n        caffeine: # Caffeine configuration\n            time-to-live-seconds: 3600 # By default objects stay 1 hour in the cache\n            max-entries: 100 # Number of objects in each cache entry    \n        infinispan: #Infinispan configuration\n            config-file: default-configs/default-jgroups-tcp.xml\n            # local app cache\n            local:\n                time-to-live-seconds: 60 # By default objects stay 1 hour (in minutes) in the cache\n                max-entries: 100 # Number of objects in each cache entry\n            #distributed app cache\n            distributed:\n                time-to-live-seconds: 60 # By default objects stay 1 hour (in minutes) in the cache\n                max-entries: 100 # Number of objects in each cache entry\n                instance-count: 1\n            #replicated app cache\n            replicated:\n                time-to-live-seconds: 60 # By default objects stay 1 hour (in minutes) in the cache\n                max-entries: 100 # Number of objects in each cache entry\n        # Memcached configuration\n        # Uses the Xmemcached library, see https://github.com/killme2008/xmemcached\n        memcached:\n            # Disabled by default in dev mode, as it does not work with Spring Boot devtools\n            enabled: true\n            servers: localhost:11211 # Comma or whitespace separated list of servers\' addresses\n            expiration: 300 # Expiration time (in seconds) for the cache\n            use-binary-protocol: true # Binary protocol is recommended for performance (and security)\n            authentication: # if authentication is required you can set it with these parameters. Disabled by default\n                enabled: false,\n                # username: unset by default\n                # password: unset by default\n        redis: # Redis configuration\n            expiration: 3600 # By default objects stay 1 hour (in seconds) in the cache\n            server: redis://localhost:6379 # Server address\n            cluster: false\n            connectionPoolSize: 64,\n            connectionMinimumIdleSize: 24,\n            subscriptionConnectionPoolSize: 50,\n            subscriptionConnectionMinimumIdleSize: 1\n\n    # E-mail properties\n    mail:\n        enabled: false # If e-mail sending is enabled. The standard `spring.mail` keys will need to be configured\n        from: jhipster@localhost # The default "from" address for e-mails\n        base-url: http://127.0.0.1:8080 # URL to the application, used inside e-mails\n\n    # Spring Security specific configuration\n    security:\n        remember-me: # JHipster secure implementation of the remember-me mechanism, for session-based authentication\n            # security key (this key should be unique for your application, and kept secret)\n            key: 0b32a651e6a65d5731e869dc136fb301b0a8c0e4\n        authentication:\n            jwt: # JHipster specific JWT implementation\n                # The secret token should be encoded using Base64 (you can type `echo \'secret-key\'|base64` on your command line).\n                # If both properties are configured, the `secret` property has a higher priority than the `base64-secret` property.\n                secret: # JWT secret key in clear text (not recommended)\n                base64-secret:  # JWT secret key encoded in Base64 (recommended)\n                token-validity-in-seconds: 86400 # Token is valid 24 hours\n                token-validity-in-seconds-for-remember-me: 2592000 # Remember me token is valid 30 days\n\n    # Swagger configuration\n    swagger:\n        default-include-pattern: /api/.*\n        title: JHipster API\n        description: JHipster API documentation\n        version: 0.0.1\n        terms-of-service-url:\n        contact-name:\n        contact-url:\n        contact-email:\n        license:\n        license-url:\n        host:\n        protocols:\n\n    # DropWizard Metrics configuration, used by MetricsConfiguration\n    metrics:\n        jmx: # Export metrics as JMX beans\n            enabled: true # JMX is enabled by default\n        # Send metrics to a Graphite server\n        # Use the "graphite" Maven profile to have the Graphite dependencies\n        graphite:\n            enabled: false # Graphite is disabled by default\n            host: localhost\n            port: 2003\n            prefix: jhipster\n        # Send metrics to a Prometheus server\n        prometheus:\n            enabled: false # Prometheus is disabled by default\n            endpoint: /prometheusMetrics\n        logs: # Reports Dropwizard metrics in the logs\n            enabled: false\n            reportFrequency: 60 # frequency of reports in seconds\n\n    # Logging configuration, used by LoggingConfiguration\n    logging:\n        logstash: # Forward logs to Logstash over a socket\n            enabled: false # Logstash is disabled by default\n            host: localhost # Logstash server URL\n            port: 5000 # Logstash server port\n            queue-size: 512 # Queue for buffering logs\n        spectator-metrics: # Reports Netflix Spectator metrics in the logs\n            enabled: false # Spectator is disabled by default\n\n    # By default cross-origin resource sharing (CORS) is enabled in "dev" mode for\n    # monoliths and gateways.\n    # It is disabled by default in "prod" mode for security reasons, and for microservices\n    # (as you are supposed to use a gateway to access them).\n    # This configures a standard org.springframework.web.cors.CorsConfiguration\n    # Note that "exposed-headers" is mandatory for JWT-based security, which uses\n    # the "Authorization" header, and which is not a default exposed header.\n    cors:\n        allowed-origins: "*"\n        allowed-methods: "*"\n        allowed-headers: "*"\n        exposed-headers: "Authorization"\n        allow-credentials: true\n        max-age: 1800\n\n    # Ribbon displayed on the top left-hand side of JHipster applications\n    ribbon:\n        # Comma-separated list of profiles that display a ribbon\n        display-on-active-profiles: dev\n'})}),"\n",(0,i.jsx)(n.h2,{id:"application-specific-properties",children:"Application-specific properties"}),"\n",(0,i.jsx)(n.p,{children:"Your generated application can also have its own Spring Boot properties. This is highly recommended, as it allows type-safe configuration of the application, as well as auto-completion and documentation within an IDE."}),"\n",(0,i.jsxs)(n.p,{children:["JHipster has generated a ",(0,i.jsx)(n.code,{children:"ApplicationProperties"})," class in the ",(0,i.jsx)(n.code,{children:"config"})," package, which is already preconfigured, and it is already documented at the bottom the ",(0,i.jsx)(n.code,{children:"application.yml"}),", ",(0,i.jsx)(n.code,{children:"application-dev.yml"})," and ",(0,i.jsx)(n.code,{children:"application-prod.yml"})," files. All you need to do is code your own specific properties."]})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var i=t(96540);const o={},a=i.createContext(o);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);