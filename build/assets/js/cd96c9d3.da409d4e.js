"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[976],{3905:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>f});var a=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var i=a.createContext({}),u=function(e){var t=a.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},s=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(o),m=n,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||r;return o?a.createElement(f,l(l({ref:t},s),{},{components:o})):a.createElement(f,l({ref:t},s))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,l=new Array(r);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:n,l[1]=c;for(var u=2;u<r;u++)l[u]=o[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},80665:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>u});var a=o(87462),n=(o(67294),o(3905));const r={layout:"post",title:"Apache CloudStack CloudMonkey v6.2.0 Release",slug:"apache-cloudstack-cloudmonkey-v6-2"},l="Apache CloudStack CloudMonkey v6.2.0 Release",c={permalink:"/blog/apache-cloudstack-cloudmonkey-v6-2",editUrl:"https://github.com/apache/cloudstack-www/tree/main/blog/blog/2021-10-05-apache-cloudstack-cloudmonkey-v6-2.md",source:"@site/blog/2021-10-05-apache-cloudstack-cloudmonkey-v6-2.md",title:"Apache CloudStack CloudMonkey v6.2.0 Release",description:"Apache CloudStack, proven as one of the most scalable, free, and open source cloud computing operating system for large scale private, public, and hybrid clouds, today announced the availability of the latest release of Apache CloudMonkey v6.2.0, the latest version of the turnkey enterprise Cloud orchestration platform's command line interface tool.",date:"2021-10-05T00:00:00.000Z",formattedDate:"October 5, 2021",tags:[],hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"Apache CloudStack CloudMonkey v6.2.0 Release",slug:"apache-cloudstack-cloudmonkey-v6-2"},prevItem:{title:"CloudStack Collaboration Conference 2021- November 8-12, 2021",permalink:"/blog/cloudstack-collaboration-conference-2021-november"},nextItem:{title:"Apache CloudStack LTS Maintenance Release 4.15.2.0",permalink:"/blog/apache-cloudstack-lts-maintenance-release2"}},i={authorsImageUrls:[]},u=[{value:"Downloads and Documentation",id:"downloads-and-documentation",level:2}],s={toc:u},p="wrapper";function d(e){let{components:t,...o}=e;return(0,n.kt)(p,(0,a.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Apache CloudStack, proven as one of the most scalable, free, and open source cloud computing operating system for large scale private, public, and hybrid clouds, today announced the availability of the latest release of Apache CloudMonkey v6.2.0, the latest version of the turnkey enterprise Cloud orchestration platform's command line interface tool."),(0,n.kt)("p",null,"Apache CloudMonkey v6.2.0 is the latest maintenance release since the previous v6.1.0 release in July 2020. CloudMonkey v6.2.0 can be used both as an interactive shell and as a command-line tool that simplifies CloudStack configuration and management."),(0,n.kt)("p",null,"The release includes the following changes:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"- New option to change default cmk config file\n- Validation of arguments with limited set of options, while\n")),(0,n.kt)("p",null,"setting cloudmonkey configuration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'- Verify user access to cloudmonkey configuration file\n- Allow sync command to be used as a verb for CloudStack API calls\n- Print response with newlines when output format chosen is "text"\n- Map "default" output type to "json"\n- Add autocompletion as an optional configuration\n- Display output in human-readable format\n- Show meaningful metadata for id autocompletion for some APIs\n')),(0,n.kt)("h2",{id:"downloads-and-documentation"},"Downloads and Documentation"),(0,n.kt)("p",null,"The official source code for CloudMonkey v6.2.0 can be downloaded from\n",(0,n.kt)("a",{parentName:"p",href:"https://cloudstack.apache.org/downloads.html"},"https://cloudstack.apache.org/downloads.html")),(0,n.kt)("p",null,"The community-maintained builds are available at the project's Github release page at\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/cloudstack-cloudmonkey/releases/tag/6.2.0"},"https://github.com/apache/cloudstack-cloudmonkey/releases/tag/6.2.0")),(0,n.kt)("p",null,"CloudMonkey's usage details are documented at\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/cloudstack-cloudmonkey/wiki"},"https://github.com/apache/cloudstack-cloudmonkey/wiki")))}d.isMDXComponent=!0}}]);