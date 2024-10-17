"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[971],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(t),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1269:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=t(7462),a=(t(7294),t(3905));const o={},i="Getting started",c={unversionedId:"index",id:"index",title:"Getting started",description:"Lime C# SDK is a nuget package compatible with .Net Standard that allows you to send orders and receive order events as callbacks. The SDK uses async/await programming pattern, is friendly to dependency injection frameworks, introduces minimal footprint to latency. Install the package from nuget.org as nuget install LimeFinancial.Trading.Api.",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/csharp/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"csharpDirect",next:{title:"Connecting to Lime",permalink:"/csharp/connection"}},l={},s=[],p={toc:s};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started"},"Getting started"),(0,a.kt)("p",null,"Lime C# SDK is a nuget package compatible with .Net Standard that allows you to send orders and receive order events as callbacks. The SDK uses ",(0,a.kt)("inlineCode",{parentName:"p"},"async/await")," programming pattern, is friendly to dependency injection frameworks, introduces minimal footprint to latency. Install the package from nuget.org as ",(0,a.kt)("inlineCode",{parentName:"p"},"nuget install LimeFinancial.Trading.Api"),"."),(0,a.kt)("p",null,"Implement ",(0,a.kt)("inlineCode",{parentName:"p"},"ICallback")," interface that receives events from the trading server:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'public class MyEventProcessor : ICallback\n{\n    // other methods are omitted for simplicity\n\n    public void OnOrderAck(long eventId, long orderId, long limeOrderId, AckOptions options)\n    {\n        Console.WriteLine($"Accepted, order id: {orderId}, lime order id: {limeOrderId}");\n    }\n\n    public void OnCancelAck(long eventId, long orderId)\n    {\n        Console.WriteLine($"Cancelled, order id: {orderId}");\n    }\n}\n')),(0,a.kt)("p",null,"Connect to the trading server and send orders:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'// create the Client object passing a logger and connection parameters\nIClient client = new Client(callback, host, port, account, username, password, logger);\n\n// an instance of a class implementing ICallback that will receive order updates\nICallback callback = new MyEventProcessor();\n\n// establish the tcp connection and attempt to login\nawait client.ConnectAsync(0, false, false, CancellationToken.None);\n\n// create and order with id 123 to buy 50 shares of PAR at $40 (forty dollars zero cents) via ARCP route\nawait client.PlaceAsync(123, 50, 400000, Side.Buy, "PAR", "ARCP");\n\n// cancel the order known to server as 123\nawait client.CancelAsync(123);\n')))}d.isMDXComponent=!0}}]);