(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{142:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return p}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),o=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},O=function(e){var t=o(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),O=o(a),d=n,p=O["".concat(l,".").concat(d)]||O[d]||j[d]||b;return a?r.a.createElement(p,c(c({ref:t},s),{},{components:a})):r.a.createElement(p,c({ref:t},s))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,l=new Array(b);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var s=2;s<b;s++)l[s]=a[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},99:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return o}));var n=a(3),r=a(7),b=(a(0),a(142)),l={id:"1_cassandra_cluster",title:"Cassandra cluster",sidebar_label:"Cassandra cluster"},c={unversionedId:"6_references/1_cassandra_cluster",id:"6_references/1_cassandra_cluster",isDocsHomePage:!1,title:"Cassandra cluster",description:"CassandraCluster describes the desired state of the Cassandra cluster we want to setup through the operator.",source:"@site/docs/6_references/1_cassandra_cluster.md",slug:"/6_references/1_cassandra_cluster",permalink:"/casskop/docs/6_references/1_cassandra_cluster",editUrl:"https://github.com/Orange-OpenSource/casskop/edit/master/website/docs/6_references/1_cassandra_cluster.md",version:"current",sidebar_label:"Cassandra cluster",sidebar:"docs",previous:{title:"Uninstall Casskop",permalink:"/casskop/docs/5_operations/6_uninstall_casskop"},next:{title:"Topology",permalink:"/casskop/docs/6_references/2_topology"}},i=[{value:"CassandraCluster",id:"cassandracluster",children:[]},{value:"CassandraClusterSpec",id:"cassandraclusterspec",children:[]},{value:"PodPolicy",id:"podpolicy",children:[]},{value:"ServicePolicy",id:"servicepolicy",children:[]},{value:"StorageConfig",id:"storageconfig",children:[]}],s={rightToc:i};function o(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"CassandraCluster")," describes the desired state of the Cassandra cluster we want to setup through the operator."),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'apiVersion: "db.orange.com/v1alpha1"\nkind: "CassandraCluster"\nmetadata:\n  name: cassandra-demo\n  labels:\n    cluster: k8s.kaas\nspec:\n  cassandraImage: cassandra:3.11\n  bootstrapImage: orangeopensource/cassandra-bootstrap:0.1.4\n  configMapName: cassandra-configmap-v1\n  dataCapacity: "200Mi"\n  dataStorageClass: "local-storage"\n  imagepullpolicy: IfNotPresent  \n  hardAntiAffinity: false           # Do we ensure only 1 cassandra on each node ?\n  deletePVC: true\n  autoPilot: false\n  config:\n    jvm-options:\n      log_gc: "true"\n  autoUpdateSeedList: false\n  maxPodUnavailable: 1\n  runAsUser: 999\n  shareProcessNamespace: true\n  resources:         \n    limits:\n      cpu: \'1\'\n      memory: 2Gi\n  topology:\n    dc:\n      - name: dc1\n        nodesPerRacks: 1\n        rack:\n          - name: rack1\n          - name: rack2\n          - name: rack3\n')),Object(b.b)("h2",{id:"cassandracluster"},"CassandraCluster"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"metadata"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"https://godoc.org/k8s.io/apimachinery/pkg/apis/meta/v1#ObjectMeta"}),"ObjectMetadata")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"is metadata that all persisted resources must have, which includes all objects users must create."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"nil")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"spec"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/casskop/docs/6_references/1_cassandra_cluster#cassandraclusterspec"}),"CassandraClusterSpec")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"defines the desired state of CassandraCluster."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"nil")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"status"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/casskop/docs/6_references/3_cassandra_cluster_status#cassandraclusterstatus"}),"CassandraClusterStatus")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"defines the observed state of CassandraCluster."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"nil")))),Object(b.b)("h2",{id:"cassandraclusterspec"},"CassandraClusterSpec"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"nodesPerRacks"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int32"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Number of nodes to deploy for a Cassandra deployment in each Racks. If NodesPerRacks = 2 and there is 3 racks, the cluster will have 6 Cassandra Nodes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"cassandraImage"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Image + version to use for Cassandra"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"cassandra:3.11.6")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"configBuilderImage"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Image + version to use for configBuilder"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"datastax/cass-config-builder:1.0.4")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"imagepullpolicy"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"https://godoc.org/k8s.io/api/core/v1#PullPolicy"}),"PullPolicy")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Define the pull policy for C* docker image"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"https://godoc.org/k8s.io/api/core/v1#PullPolicy"}),"PullAlways"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bootstrapImage"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Image used for bootstrapping cluster (use the form : base:version)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"orangeopensource/cassandra-bootstrap:0.1.4")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"runAsUser"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int64"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Define the id of the user to run in the Cassandra image"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"999")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"fsGroup"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int64"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"FSGroup defines the GID owning volumes in the Cassandra image"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"config"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"map"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Configuration used by the config builder to generated cassandra.yaml and other configuration files"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"readOnlyRootFilesystem"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Make the pod as Readonly"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"resources"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#https://godoc.org/k8s.io/api/core/v1#ResourceRequirements"}),"Resources")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'Define the Requests & Limits resources spec of the "cassandra" container'),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"hardAntiAffinity"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"HardAntiAffinity defines if the PodAntiAffinity of the statefulset has to be hard (it's soft by default)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"pod"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#podpolicy"}),"PodPolicy")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"service"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#servicepolicy"}),"ServicePolicy")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"deletePVC"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Defines if the PVC must be deleted when the cluster is deleted"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"debug"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Is used to surcharge Cassandra pod command to not directly start cassandra but starts an infinite wait to allow user to connect a bash into the pod to make some diagnoses."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"shareProcessNamespace"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"When process namespace sharing is enabled, processes in a container are visible to all other containers in that pod. ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"https://kubernetes.io/docs/tasks/configure-pod-container/share-process-namespace/"}),"Check documentation for more informations")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"autoPilot"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Defines if the Operator can fly alone or if we need human action to trigger actions on specific Cassandra nodes. ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/casskop/docs/5_operations/2_pods_operations"}),"Check documentation for more informations")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"noCheckStsAreEqual"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"autoUpdateSeedList"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Defines if the Operator automatically update the SeedList according to new cluster CRD topology"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"maxPodUnavailable"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int32"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Number of MaxPodUnavailable used in the ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"https://kubernetes.io/docs/tasks/run-application/configure-pdb/#specifying-a-poddisruptionbudget"}),"PodDisruptionBudget")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"restartCountBeforePodDeletion"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int32"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"defines the number of restart allowed for a cassandra container allowed before deleting the pod  to force its restart from scratch. if set to 0 or omit, no action will be performed based on restart count. ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/casskop/docs/3_configuration_deployment/9_advanced_configuration#ip-cross-situation-detection"}),"Check documentation for more informations")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"unlockNextOperation"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Very special Flag to hack CassKop reconcile loop - use with really good Care"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"dataCapacity"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Define the Capacity for Persistent Volume Claims in the local storage. ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/casskop/docs/3_configuration_deployment/3_storage#configuration"}),"Check documentation for more informations")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"dataStorageClass"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Define StorageClass for Persistent Volume Claims in the local storage. ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/casskop/docs/3_configuration_deployment/3_storage#configuration"}),"Check documentation for more informations")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"storageConfigs"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[","  ","]",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#storageconfig"}),"StorageConfig")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Defines additional storage configurations. ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/casskop/docs/3_configuration_deployment/3_storage#additionnals-storages-configuration"}),"Check documentation for more informations")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"sidecarConfigs"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[","  ","]",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"https://godoc.org/k8s.io/api/core/v1#Container"}),"Container")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Defines additional sidecar configurations. ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/casskop/docs/3_configuration_deployment/5_sidecars"}),"Check documentation for more informations")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"configMapName"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Name of the ConfigMap for Cassandra configuration (cassandra.yaml). If this is empty, operator will uses default cassandra.yaml from the baseImage. If this is not empty, operator will uses the cassandra.yaml from the Configmap instead. ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/casskop/docs/3_configuration_deployment/2_cassandra_configuration#configuration-override-using-configmap"}),"Check documentation for more informations")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"imagePullSecret"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"https://godoc.org/k8s.io/api/core/v1#LocalObjectReference"}),"LocalObjectReference")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Name of the secret to uses to authenticate on Docker registries. If this is empty, operator do nothing. If this is not empty, propagate the imagePullSecrets to the statefulsets"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"imageJolokiaSecret"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"https://godoc.org/k8s.io/api/core/v1#LocalObjectReference"}),"LocalObjectReference")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"JMX Secret if Set is used to set JMX_USER and JMX_PASSWORD"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"topology"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/casskop/docs/6_references/2_topology#topology"}),"Topology")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"To create Cassandra DC and Racks and to target appropriate Kubernetes Nodes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"livenessInitialDelaySeconds"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int32"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Defines initial delay for the liveness probe of the main. ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#configure-probes"}),"Configure liveness Readiness startup probes")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"120")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"livenessHealthCheckTimeout"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int32"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Defines health check timeout for the liveness probe of the main. ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#configure-probes"}),"Configure liveness Readiness startup probes")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"20")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"livenessHealthCheckPeriod"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int32"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Defines health check period for the liveness probe of the main. ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#configure-probes"}),"Configure liveness Readiness startup probes")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"10")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"livenessFailureThreshold"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int32"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Defines failure threshold for the liveness probe of the main. ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#configure-probes"}),"Configure liveness Readiness startup probes")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"(value set by kubernetes cluster)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"livenessSuccessThreshold"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int32"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Defines success threshold for the liveness probe of the main. ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#configure-probes"}),"Configure liveness Readiness startup probes")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"(value set by kubernetes cluster)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"readinessInitialDelaySeconds"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int32"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Defines initial delay for the readiness probe of the main. ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#configure-probes"}),"Configure liveness Readiness startup probes")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"60")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"readinessHealthCheckTimeout"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int32"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Defines health check timeout for the readiness probe of the main. ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#configure-probes"}),"Configure liveness Readiness startup probes")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"10")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"readinessHealthCheckPeriod"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int32"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Defines health check period for the readiness probe of the main. ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#configure-probes"}),"Configure liveness Readiness startup probes")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"10")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"readinessFailureThreshold"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int32"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Defines failure threshold for the readiness probe of the main. ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#configure-probes"}),"Configure liveness Readiness startup probes")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"(value set by kubernetes cluster)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"readinessSuccessThreshold"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int32"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Defines success threshold for the readiness probe of the main. ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#configure-probes"}),"Configure liveness Readiness startup probes")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"(value set by kubernetes cluster)")))),Object(b.b)("h2",{id:"podpolicy"},"PodPolicy"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"annotations"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"map","[","string","]","string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Annotations specifies the annotations to attach to headless service the CassKop operator creates"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"tolerations"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"https://godoc.org/k8s.io/api/core/v1#Toleration"}),"Toleration")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Tolerations specifies the tolerations to attach to the pods the CassKop operator creates"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))),Object(b.b)("h2",{id:"servicepolicy"},"ServicePolicy"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"annotations"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"map","[","string","]","string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Annotations specifies the annotations to attach to headless service the CassKop operator creates"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))),Object(b.b)("h2",{id:"storageconfig"},"StorageConfig"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"name"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Name of the storage config, used to name PV to reuse into sidecars for example."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"mountPath"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Path where the volume will be mount into the main cassandra container inside the pod."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"pvcSpec"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"https://godoc.org/k8s.io/api/core/v1#PersistentVolumeClaimSpec"}),"PersistentVolumeClaimSpec")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Kubernetes PVC spec. ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-persistent-volume-storage/#create-a-persistentvolumeclaim"}),"create-a-persistentvolumeclaim"),"."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))))}o.isMDXComponent=!0}}]);