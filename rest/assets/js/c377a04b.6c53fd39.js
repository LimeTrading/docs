"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[971],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1269:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={},i="Lime Direct REST API for stocks and options DMA trading",c={unversionedId:"index",id:"index",title:"Lime Direct REST API for stocks and options DMA trading",description:"Lime offers a simple, easy to use REST API to enable users to trade equities and options with a variety of venues.",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/rest/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"limeDirectRESTSidebar",next:{title:"Authentication",permalink:"/rest/authentication/"}},s={},l=[{value:"API Documentation",id:"api-documentation",level:3}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"lime-direct-rest-api-for-stocks-and-options-dma-trading"},"Lime Direct REST API for stocks and options DMA trading"),(0,a.kt)("p",null,"Lime offers a simple, easy to use REST API to enable users to trade equities and options with a variety of venues."),(0,a.kt)("h3",{id:"api-documentation"},"API Documentation"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Authentication API"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Account API"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Trading API"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Obtain an OAuth token using your client information to access our REST API. See ",(0,a.kt)("a",{parentName:"td",href:"https://docs.lime.co/rest/authentication"},"Authentication API")," documentation."),(0,a.kt)("td",{parentName:"tr",align:"left"},"Access account information such as buying power. See ",(0,a.kt)("a",{parentName:"td",href:"https://docs.lime.co/rest/accounts"},"Account API")," documentation."),(0,a.kt)("td",{parentName:"tr",align:"left"},"Stock and options trading for algorithmic and prop traders. Supports sending new orders, cancel, mass cancel and replace. See ",(0,a.kt)("a",{parentName:"td",href:"https://docs.lime.co/rest/trading"},"Trading API")," documentation.")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Before you can start using our REST API you will need to be onboarded as a new Lime client. Contact our Technical Support team at ",(0,a.kt)("a",{parentName:"p",href:"mailto:support@lime.co"},"support@lime.co")," for help.")))}u.isMDXComponent=!0}}]);