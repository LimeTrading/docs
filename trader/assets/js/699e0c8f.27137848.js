"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[755],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=d(n),k=r,c=s["".concat(p,".").concat(k)]||s[k]||u[k]||l;return n?a.createElement(c,i(i({ref:t},m),{},{components:n})):a.createElement(c,i({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},8443:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const l={},i="Get quotes history",o={unversionedId:"market-data/get-quotes-history",id:"market-data/get-quotes-history",title:"Get quotes history",description:"Returns an array of candles:",source:"@site/docs/5-market-data/3-get-quotes-history.md",sourceDirName:"5-market-data",slug:"/market-data/get-quotes-history",permalink:"/trader/market-data/get-quotes-history",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"limeTraderSidebar",previous:{title:"Get current quotes array",permalink:"/trader/market-data/get-current-quote-array"},next:{title:"Get trading schedule",permalink:"/trader/market-data/get-trading-schedule"}},p={},d=[{value:"Request",id:"request",level:2},{value:"Response",id:"response",level:2}],m={toc:d};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"get-quotes-history"},"Get quotes history"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"    -X GET\n    --header 'Accept: application/json'\n    --header 'Authorization: Bearer {token here}'\n    'https://api.lime.co/marketdata/history?symbol=AAPL&period=day&from=1483228800&to=1483488000'\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Returns an array of candles:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "timestamp": 1483074000,\n    "period": "day",\n    "open": 116.65,\n    "high": 117.2,\n    "low": 115.43,\n    "close": 115.82,\n    "volume": 24541183\n  },\n  {\n    "timestamp": 1483419600,\n    "period": "day",\n    "open": 115.8,\n    "high": 116.33,\n    "low": 114.76,\n    "close": 116.15,\n    "volume": 24719541\n  }\n]\n')),(0,r.kt)("p",null,"The query returns candle structures aggregated by specified period."),(0,r.kt)("p",null,"If you have an active OPRA data subscription, it is necessary to activate your API token in the Cabinet under ",(0,r.kt)("inlineCode",{parentName:"p"},"My Profile")," -> ",(0,r.kt)("inlineCode",{parentName:"p"},"API Keys")," to access market data. OPRA market data will be available for one trading session. On the following day, it will be required to reactivate the API token."),(0,r.kt)("h2",{id:"request"},"Request"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"symbol"),(0,r.kt)("td",{parentName:"tr",align:null},"Required. The security symbol, stocks in Nasdaq CMS convention, options in OCC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"period"),(0,r.kt)("td",{parentName:"tr",align:null},"Required. The supported periods are: ",(0,r.kt)("inlineCode",{parentName:"td"},"minute"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"minute_5"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"minute_15"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"minute_30"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"hour"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"day"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"week"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"month"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"quarter"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"year"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"from"),(0,r.kt)("td",{parentName:"tr",align:null},"Required. Start of the period, unix timestamp")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"to"),(0,r.kt)("td",{parentName:"tr",align:null},"Required. End of the period, unix timestamp")))),(0,r.kt)("br",null),(0,r.kt)("p",null,"The valid time range depends on the ",(0,r.kt)("inlineCode",{parentName:"p"},"period")," value:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"minute")," - 1 week"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"minute_5"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"minute_15"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"minute_30"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"hour")," - 1 month"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"day")," - 1 year"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"week"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"month"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"quarter"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"year")," - 5 years")),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timestamp"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"Unix timestamp of a data point")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"period"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Specified period")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"open"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"Open price")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"high"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"High price")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"low"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"Low price")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"close"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"Close price")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"volume"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"Volume")))))}u.isMDXComponent=!0}}]);