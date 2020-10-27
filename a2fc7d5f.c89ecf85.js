(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),o=(n(0),n(125)),i={id:"10_nodes_management",title:"Nodes Management",sidebar_label:"Nodes Management"},s={unversionedId:"3_configuration_deployment/10_nodes_management",id:"3_configuration_deployment/10_nodes_management",isDocsHomePage:!1,title:"Nodes Management",description:"CassKop in duo with the Cassandra docker Image is responsible of the lifecycle of the Cassandra nodes.",source:"@site/docs/3_configuration_deployment/10_nodes_management.md",slug:"/3_configuration_deployment/10_nodes_management",permalink:"/casskop/docs/3_configuration_deployment/10_nodes_management",editUrl:"https://github.com/Orange-OpenSource/casskop/edit/master/website/docs/3_configuration_deployment/10_nodes_management.md",version:"current",sidebar_label:"Nodes Management",sidebar:"docs",previous:{title:"Advanced Configuration",permalink:"/casskop/docs/3_configuration_deployment/9_advanced_configuration"},next:{title:"CassandraCluster Status",permalink:"/casskop/docs/3_configuration_deployment/11_cassandra_cluster_status"}},c=[{value:"HealthChecks",id:"healthchecks",children:[]},{value:"Pod lifeCycle",id:"pod-lifecycle",children:[{value:"PreStop",id:"prestop",children:[]}]},{value:"Prometheus metrics export",id:"prometheus-metrics-export",children:[]}],l={rightToc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"CassKop in duo with the Cassandra docker Image is responsible of the lifecycle of the Cassandra nodes."),Object(o.b)("h2",{id:"healthchecks"},"HealthChecks"),Object(o.b)("p",null,"Healthchecks are periodical tests which verify Cassandra's health. When the healthcheck fails, Kubernetes can assume\nthat the application is not healthy and attempt to fix it. Kubernetes supports two types of Healthcheck probes : "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Liveness probes"),Object(o.b)("li",{parentName:"ul"},"Readiness probes.")),Object(o.b)("p",null,"You can find more details in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-probes/#configure-probes"}),"Kubernetes\ndocumentation"),"."),Object(o.b)("p",null,"Both ",Object(o.b)("inlineCode",{parentName:"p"},"livenessProbe")," and ",Object(o.b)("inlineCode",{parentName:"p"},"readinessProbe")," support two additional options:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"initialDelaySeconds"),": defines the initial delay before the probe is tried for the first time. Default is 15 seconds"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"timeoutSeconds"),": defines the timeout of the probe. CassKop uses 20 seconds."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"periodSeconds"),": the period to wait between each call to a probe: CassKop uses 40 seconds.")),Object(o.b)("p",null,"You are now able to override this default values using the following fields in to the ",Object(o.b)("inlineCode",{parentName:"p"},"CassandraCluster")," definition : "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"livenessInitialDelaySeconds"),": defines initial delay for the liveness probe of the main")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"livenessHealthCheckTimeout"),": defines health check timeout for the liveness probe of the main")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"livenessHealthCheckPeriod"),": defines health check period for the liveness probe of the main")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"livenessFailureThreshold"),": defines failure threshold for the liveness probe of the main")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"livenessSuccessThreshold"),": defines success threshold for the liveness probe of the main")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"readinessInitialDelaySeconds"),": defines initial delay for the readiness probe of the main")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"readinessHealthCheckTimeout"),": defines health check timeout for the readiness probe of the main")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"readinessHealthCheckPeriod"),": defines health check period for the readiness probe of the main")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"readinessFailureThreshold"),": defines failure threshold for the readiness probe of the main")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"readinessSuccessThreshold"),": defines success threshold for the readiness probe of the main"))),Object(o.b)("h2",{id:"pod-lifecycle"},"Pod lifeCycle"),Object(o.b)("p",null,"The Kubernetes Pods allows user to define specific hooks to be executed at some times"),Object(o.b)("h3",{id:"prestop"},"PreStop"),Object(o.b)("p",null,"CassKop uses the PreStop hook to execute some commands before the pod is going to be killed.\nIn first iteration we were executing a ",Object(o.b)("inlineCode",{parentName:"p"},"nodetool drain")," and it used to make some unpredictable behavior.\nAt the time of writing this document, there is no ",Object(o.b)("inlineCode",{parentName:"p"},"PreStop")," action executed. "),Object(o.b)("h2",{id:"prometheus-metrics-export"},"Prometheus metrics export"),Object(o.b)("p",null,"We currently use the CoreOS Prometheus Operator to export the Cassandra nodes metrics. We must create a serviceMonitor\nobject in the prometheus namespaces, pointing to the exporter-prometheus-service which is created by CassKop:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"$ cat samples/prometheus-cassandra-service-monitor.yaml\napiVersion: monitoring.coreos.com/v1\nkind: ServiceMonitor\nmetadata:\n  name: prometheus-cassandra-jmx\n  labels:\n    k8s-apps: cassandra-k8s-jmx\n    prometheus: kube-prometheus\n    component: cassandra\n    app: cassandra\nspec:\n  jobLabel: kube-prometheus-cassandra-k8s-jmx\n  selector:\n    matchLabels:\n      k8s-app: exporter-cassandra-jmx\n  namespaceSelector:\n      matchNames:\n      - cassandra\n      - cassandra-demo\n  endpoints:\n  - port: promjmx\n    interval: 15s\n")),Object(o.b)("p",null,"Actually the Cassandra nodes use the work of Oleg Glusahak ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/oleg-glushak/cassandra-prometheus-jmx"}),"https://github.com/oleg-glushak/cassandra-prometheus-jmx")," but\nthis may change in the futur."))}p.isMDXComponent=!0},125:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,m=d["".concat(i,".").concat(u)]||d[u]||b[u]||o;return n?r.a.createElement(m,s(s({ref:t},l),{},{components:n})):r.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);