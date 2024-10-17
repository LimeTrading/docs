"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[765],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>c});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),s=p(n),c=r,k=s["".concat(d,".").concat(c)]||s[c]||m[c]||l;return n?a.createElement(k,i(i({ref:e},u),{},{components:n})):a.createElement(k,i({ref:e},u))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},7240:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={},i="Streaming feed",o={unversionedId:"accounts/streaming-feed",id:"accounts/streaming-feed",title:"Streaming feed",description:"Command examples",source:"@site/docs/3-accounts/3-streaming-feed.md",sourceDirName:"3-accounts",slug:"/accounts/streaming-feed",permalink:"/trader/accounts/streaming-feed",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"limeTraderSidebar",previous:{title:"Get accounts balances",permalink:"/trader/accounts/"},next:{title:"Get account positions",permalink:"/trader/accounts/get-account-positions"}},d={},p=[{value:"Request",id:"request",level:2},{value:"Response",id:"response",level:2},{value:"Position",id:"position",level:3},{value:"Balance",id:"balance",level:3},{value:"Order",id:"order",level:3},{value:"Trade",id:"trade",level:3},{value:"Error",id:"error",level:3}],u={toc:p};function m(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"streaming-feed"},"Streaming feed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'wscat\n    -H "Authorization: Bearer {token here}" -c wss://api.lime.co/accounts\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Command examples")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{ "action":"subscribeBalance","account":"12345678@vision" }\n{ "action":"subscribePositions","account":"12345678@vision" }\n{ "action":"subscribeOrders","account":"12345678@vision" }\n{ "action":"subscribeTrades","account":"12345678@vision" }\n\n{ "action":"unsubscribeBalance","account":"12345678@vision" }\n{ "action":"unsubscribePositions","account":"12345678@vision" }\n{ "action":"unsubscribeOrders","account":"12345678@vision" }\n{ "action":"unsubscribeTrades","account":"12345678@vision" }\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Feed example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "t":"p",\n    "data":[{\n        "account":"12345678@vision",\n        "positions":[{\n            "symbol":"AAPL",\n            "average_open_price":176.8450,\n            "current_price":187.0050,\n            "quantity":2,\n            "security_type":"common_stock"\n        },\n        {\n            "symbol":"AMC",\n            "average_open_price":8.2800,\n            "current_price":8.0650,\n            "quantity":10,\n            "security_type":"common_stock"\n        },\n        {\n            "symbol":"TSLA",\n            "average_open_price":233.4900,\n            "current_price":233.5412,\n            "quantity":-3,\n            "security_type":"common_stock"\n        }]\n    }]\n}\n{\n    "t":"b",\n    "data":[{\n        "account_number":"12345678@vision",\n        "trade_platform":"transaq",\n        "margin_type":"marginx2",\n        "restriction":"none",\n        "account_value_total":27009.0400,\n        "cash":419.78,\n        "margin_buying_power":27428.83,\n        "non_margin_buying_power":13714.41,\n        "position_market_value":26589.2550,\n        "unsettled_cash":0,\n        "cash_to_withdraw":13112.03\n    }]\n}\n{\n    "t":"o",\n    "data":[{\n        "account_number":"12345678@vision",\n        "client_id":"4596252142",\n        "client_order_id": "01HWYX297HG2J9V607VSY4GQ3S",\n        "exchange":"Zero Commission",\n        "quantity":1,\n        "executed_quantity":0,\n        "order_status":"new",\n        "price":378,\n        "stop_price":0,\n        "time_in_force":"day",\n        "order_type":"limit",\n        "order_side":"buy",\n        "symbol":"MA",\n        "executed_price":0,\n        "tag":"order #11"\n    }]\n}\n{\n    "t":"o",\n    "data":[{\n        "account_number":"12345678@vision",\n        "client_id":"4596252142",\n        "client_order_id": "01HX6NRN9A6E5N18QACA85BW4T",\n        "exchange":"auto",\n        "quantity":1,\n        "executed_quantity":1,\n        "order_status":"filled",\n        "price":378,\n        "stop_price":0,\n        "time_in_force":"day",\n        "order_type":"limit",\n        "order_side":"buy",\n        "symbol":"MA",\n        "executed_price":377.6392,\n        "executed_timestamp":1644258422,\n        "tag":""\n    }]\n}\n{\n    "t":"t",\n    "data":[{\n        "account_number":"12345678@vision",\n        "symbol":"MA",\n        "timestamp":1644258422,\n        "quantity":1,\n        "price":377.6392,\n        "amount":377.6392,\n        "side":"buy",\n        "trade_id":"24447436121"\n    }]\n}\n')),(0,r.kt)("p",null,"If authentication is denied the websocket connection is terminated immediately. The client should implement reconnection logic to maintain the opened connection. The server will disconnect after some inactivity period. Subscription command for an account that has already been subscribed is ignored. Same behavior applies to Unsubscribe. Any recognized command will result an Error sent back to the subscriber. "),(0,r.kt)("h2",{id:"request"},"Request"),(0,r.kt)("p",null,"The following commands are supported:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"action"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required. Possible values are ",(0,r.kt)("inlineCode",{parentName:"td"},"subscribeTrades"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"subscribeBalance"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"subscribePositions"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"subscribeOrders"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"account"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required. The account number")))),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("h3",{id:"position"},"Position"),(0,r.kt)("p",null,"The server sends a full list of positions for all subscribed accounts on each update of any field value. Since during market hours the prices keep changing the update is going to be sent on each throttling period"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"t"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Type ",(0,r.kt)("inlineCode",{parentName:"td"},"p"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"An array of structures where ",(0,r.kt)("inlineCode",{parentName:"td"},"account")," is an account number and ",(0,r.kt)("inlineCode",{parentName:"td"},"positions")," is an array of ",(0,r.kt)("strong",{parentName:"td"},"position")," structures")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"symbol"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The security symbol")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"quantity"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"Signed number of shares or option contracts")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"average_open_price"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"Average historical cost basis")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"current_price"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"Current price")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"security_type"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Asset type. Possible values are ",(0,r.kt)("inlineCode",{parentName:"td"},"common_stock"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"preferred_stock"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"option"))))),(0,r.kt)("h3",{id:"balance"},"Balance"),(0,r.kt)("p",null,"The server sends a full list of balance for all subscribed accounts on each update of any field value. Since during market hours the prices keep changing the update is going to be sent on each throttling period"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"t"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Type ",(0,r.kt)("inlineCode",{parentName:"td"},"b"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"An array of ",(0,r.kt)("strong",{parentName:"td"},"balance")," structures")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"account_number"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The account number")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"trade_platform"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The trading platform this account is traded on")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"margin_type"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The margin type, possible values are ",(0,r.kt)("inlineCode",{parentName:"td"},"cash"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"marginx1"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"marginx2"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"daytrader"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"restriction"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Restriction level effective on the account, possible values are ",(0,r.kt)("inlineCode",{parentName:"td"},"none")," - no restrictions, ",(0,r.kt)("inlineCode",{parentName:"td"},"restricted")," - opening transactions are not allowed but closing orders are accepted, ",(0,r.kt)("inlineCode",{parentName:"td"},"disabled")," - no activity is allowed in the account, ",(0,r.kt)("inlineCode",{parentName:"td"},"closed")," - the account is closed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"restriction_reason"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional description explaining why the account is restricted")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"account_value_total"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"Total account liquidation value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cash"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"Account debit balance when negative, credit balance when positive")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"day_trading_buying_power"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"Day trading buying power for marginable securities")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"margin_buying_power"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"The buying power for marginable securities")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"non_margin_buying_power"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"The buying power for non-marginable securities")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"position_market_value"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"Sum of all positions current market values. The value is negative for short positions")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"unsettled_cash"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"Unsettled cash for cash accounts")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cash_to_withdraw"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"Cash available to withdraw from the account")))),(0,r.kt)("h3",{id:"order"},"Order"),(0,r.kt)("p",null,"The server sends a notification when an order changes status. After initial connection, the server sends a list of all orders in current status on current trading day."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"t"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Type ",(0,r.kt)("inlineCode",{parentName:"td"},"o"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"An array of ",(0,r.kt)("strong",{parentName:"td"},"order")," structures")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"account_number"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The account number")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"client_id"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The order id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"client_order_id"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The client order id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"exchange"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The routing instructions")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"quantity"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"Positive integer, number of shares, options contracts or multi-leg orders")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"executed_quantity"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"Positive number of shares or contracts executed by this time")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"order_status"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The order status. Possible values are ",(0,r.kt)("inlineCode",{parentName:"td"},"pending_new"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"new"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"partially_filled"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"filled"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"replaced"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"done_for_day"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"pending_cancel"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"canceled"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"rejected"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"suspended"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"price"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"Limit price if applicable")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stop_price"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"Stop price is applicable")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"time_in_force"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Order duration instructions. Possible values are ",(0,r.kt)("inlineCode",{parentName:"td"},"day")," - regular hours, ",(0,r.kt)("inlineCode",{parentName:"td"},"ext")," - extended hours, ",(0,r.kt)("inlineCode",{parentName:"td"},"on-open")," - opening auction, ",(0,r.kt)("inlineCode",{parentName:"td"},"on-close")," - closing auction, ",(0,r.kt)("inlineCode",{parentName:"td"},"ioc")," - immediate or cancel, ",(0,r.kt)("inlineCode",{parentName:"td"},"fok")," - fill or kill")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"order_type"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The order type. Possible values are ",(0,r.kt)("inlineCode",{parentName:"td"},"limit"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"market"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"order_side"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Side of the order. Possible values are ",(0,r.kt)("inlineCode",{parentName:"td"},"buy"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"sell"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"symbol"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The security symbol")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"executed_price"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"The average price of execution, only populated when an order has been executed, partially or fully")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"executed_timestamp"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"Unix time stamp of the last execution, only populated when an order has been executed, partially or fully")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tag"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Order tag if specified")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"legs"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"Array of legs in a multi-leg order")))),(0,r.kt)("p",null,"Legs array element:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"symbol"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Leg security symbol")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"quantity"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"Positive integer, leg ratio quantity")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"side"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Side of the leg. Available values are ",(0,r.kt)("inlineCode",{parentName:"td"},"buy")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"sell"))))),(0,r.kt)("h3",{id:"trade"},"Trade"),(0,r.kt)("p",null,"The server sends a notification when a trade executes. After initial connection, the server sends a list of all trades on current trading day."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"t"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Type ",(0,r.kt)("inlineCode",{parentName:"td"},"t"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"An array of ",(0,r.kt)("strong",{parentName:"td"},"trade")," structures")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"account_number"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The account number")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"symbol"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The security symbol")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timestamp"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"Unix time stamp of the trade")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"quantity"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of shares or option contracts, negative for sells, positive for buys")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"price"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"The trade price")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"amount"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"The trade amount, which is the quantity multiplied by the lot size and price")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"side"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The trade side. Possible values are ",(0,r.kt)("inlineCode",{parentName:"td"},"buy")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"sell"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"trade_id"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The trade id")))),(0,r.kt)("h3",{id:"error"},"Error"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"t"),(0,r.kt)("td",{parentName:"tr",align:null},"Type ",(0,r.kt)("inlineCode",{parentName:"td"},"e"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"code"),(0,r.kt)("td",{parentName:"tr",align:null},"Error code")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"description"),(0,r.kt)("td",{parentName:"tr",align:null},"Error description")))))}m.isMDXComponent=!0}}]);