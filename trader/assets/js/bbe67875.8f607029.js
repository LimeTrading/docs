"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[253],{3905:(t,n,e)=>{e.d(n,{Zo:()=>u,kt:()=>m});var a=e(7294);function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function o(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function l(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?o(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function i(t,n){if(null==t)return{};var e,a,r=function(t,n){if(null==t)return{};var e,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)e=o[a],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)e=o[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var s=a.createContext({}),p=function(t){var n=a.useContext(s),e=n;return t&&(e="function"==typeof t?t(n):l(l({},n),t)),e},u=function(t){var n=p(t.components);return a.createElement(s.Provider,{value:n},t.children)},c={inlineCode:"code",wrapper:function(t){var n=t.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(t,n){var e=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),d=p(e),m=r,y=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return e?a.createElement(y,l(l({ref:n},u),{},{components:e})):a.createElement(y,l({ref:n},u))}));function m(t,n){var e=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var o=e.length,l=new Array(o);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=t,i.mdxType="string"==typeof t?t:r,l[1]=i;for(var p=2;p<o;p++)l[p]=e[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,e)}d.displayName="MDXCreateElement"},7083:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=e(7462),r=(e(7294),e(3905));const o={},l="Transactions journal",i={unversionedId:"accounts/transactions-journal",id:"accounts/transactions-journal",title:"Transactions journal",description:"Response example",source:"@site/docs/3-accounts/5-transactions-journal.md",sourceDirName:"3-accounts",slug:"/accounts/transactions-journal",permalink:"/trader/accounts/transactions-journal",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"limeTraderSidebar",previous:{title:"Get account routes",permalink:"/trader/accounts/get-account-routes"},next:{title:"Place an order",permalink:"/trader/trading/"}},s={},p=[],u={toc:p};function c(t){let{components:n,...e}=t;return(0,r.kt)("wrapper",(0,a.Z)({},u,e,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"transactions-journal"},"Transactions journal"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"    -X GET\n    --header 'Authorization: Bearer {token here}'\n    'https://api.lime.co/accounts/{account_number}/transactions?start_date={start_date}&end_date={end_date}&limit={limit}&skip={skip}'\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Response example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "transactions":\n    [\n        {\n            "id": "1644455",\n            "type": "MONEY:OUT:CHRG",\n            "description": "CHRG MANDATORY REORG FEE REF:11111-222222,PUT PROSHARES",\n            "date": "2018-06-30",\n            "cash": {\n                "gross_amount": -30.00,\n                "net_amount": -30.00\n            }\n        },\n        {\n            "id": "1681283",\n            "type": "INSTRUM:IN:EXP",\n            "description": "EXP PUT SOLAREDGE TECHS A $25 EXP 06/15/18",\n            "date": "2018-06-18",\n            "asset": {\n                "symbol": "SEDG  180615P00025000",\n                "symbol_description": "SEDG Jun 2018 25 Put",\n                "quantity": 8,\n                "price": 0\n            },\n            "cash": {\n                "gross_amount": 0,\n                "net_amount": 0\n            },\n            "fees": []\n        },\n        {\n            "id": "1681278",\n            "type": "INSTRUM:IN:ASG",\n            "description": "ASG CALL RUBICON PROJECT INC $2.50 EXP 06/15/18",\n            "date": "2018-06-18",\n            "asset": {\n                "symbol": "RUBI  180615C00002500",\n                "symbol_description": "RUBI Jun 2018 2.5 Call",\n                "quantity": 20,\n                "price": 0\n            },\n            "cash": {\n                "gross_amount": 0,\n                "net_amount": 0\n            },\n            "fees": []\n        },\n        {\n            "id": "1681293",\n            "type": "SALE:EXCH:ASG",\n            "description": "ASG CALL RUBICON PROJECT INC $2.50 EXP 06/15/18",\n            "date": "2018-06-18",\n            "asset": {\n                "symbol": "RUBI",\n                "symbol_description": "THE RUBICON PROJECT Inc",\n                "quantity": -2000,\n                "price": 2.5\n            },\n            "cash": {\n                "gross_amount": 5000,\n                "net_amount": 4980\n            },\n            "fees": [\n                { "name": "Broker fee", "amount": -20 }\n            ]\n        },\n        {\n            "id": "1677793",\n            "type": "SELL-SHORT:EXCH:STD",\n            "description": "Sell to Open 20 \'NCMI Dec 2018 7.5 Call\' @0.75",\n            "date": "2018-06-15",\n            "asset": {\n                "symbol": "NCMI  181221C00007500",\n                "symbol_description": "NCMI Dec 2018 7.5 Call",\n                "quantity": -20,\n                "price": 0.75\n            },\n            "cash": {\n                "gross_amount": 1500,\n                "net_amount": 1486.6845\n            },\n            "fees": [\n                { "name": "Broker fee", "amount": -2.5 },\n                { "name": "Broker fee", "amount": -9 },\n                { "name": "TAF", "amount": -0.04 },\n                { "name": "ORF", "amount": -0.756 },\n                { "name": "OCC fee", "amount": -1 },\n                { "name": "SEC fee", "amount": -0.0195 }\n            ]\n        },\n    ],\n    "count": 237\n}\n')),(0,r.kt)("p",null,"Query parameters are:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"account_number"),(0,r.kt)("td",{parentName:"tr",align:null},"Required. The account number")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"start_date"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. The period start date in the format of yyyy-MM-dd")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"end_date"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional, current date by default. The period end date in the format of yyyy-MM-dd")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"limit"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional, 10 by default. The number of items to return on one page")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"skip"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional, 0 by default. The number of items to skip")))),(0,r.kt)("p",null,"Returns an array of trasnactions and a counter of total transactions in the specified time period. Every transaction has the following structure:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"internal transaction id. It is globally unique and it is not necessarily sequentually incremented")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"transaction type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"description"),(0,r.kt)("td",{parentName:"tr",align:null},"human-readable transaction description")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"date"),(0,r.kt)("td",{parentName:"tr",align:null},"date in the format of yyyy-MM-dd")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"asset"),(0,r.kt)("td",{parentName:"tr",align:null},"a structure describing the asset side of the transaction")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"asset.symbol"),(0,r.kt)("td",{parentName:"tr",align:null},"symbol")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"asset.symbol_description"),(0,r.kt)("td",{parentName:"tr",align:null},"company name for stocks or human-readable name for options")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"asset.quantity"),(0,r.kt)("td",{parentName:"tr",align:null},"transaction quantity, can be positive or negative")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"asset.price"),(0,r.kt)("td",{parentName:"tr",align:null},"the price for each unit")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cash"),(0,r.kt)("td",{parentName:"tr",align:null},"describes the cash side of the transaction")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cash.gross_amount"),(0,r.kt)("td",{parentName:"tr",align:null},"dollar amount not including fees, can be positive or negative")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cash.net_amount"),(0,r.kt)("td",{parentName:"tr",align:null},"net dollar amount including fees charged for the transaction, can be positive or negative")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fees"),(0,r.kt)("td",{parentName:"tr",align:null},"array of fees charged by the current transaction. Every fee item has a ",(0,r.kt)("inlineCode",{parentName:"td"},"name")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"amount")," properties")))))}c.isMDXComponent=!0}}]);