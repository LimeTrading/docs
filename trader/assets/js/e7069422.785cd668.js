"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[384],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5114:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>f,default:()=>w,frontMatter:()=>v,metadata:()=>g,toc:()=>N});var a=n(7462),r=n(7294),l=n(3905),o=n(6010),i=n(2389),s=n(7392),u=n(7094),p=n(2466);const c="tabList__CuJ",d="tabItem_LNqP";function m(e){var t,n;const{lazy:l,block:i,defaultValue:m,values:h,groupId:b,className:k}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=h?h:v.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),g=(0,s.l)(f,((e,t)=>e.value===t.value));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===m?m:null!=(t=null!=m?m:null==(n=v.find((e=>e.props.default)))?void 0:n.props.value)?t:v[0].props.value;if(null!==y&&!f.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+f.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:T}=(0,u.U)(),[w,O]=(0,r.useState)(y),x=[],{blockElementScrollPositionUntilNextRender:E}=(0,p.o5)();if(null!=b){const e=N[b];null!=e&&e!==w&&f.some((t=>t.value===e))&&O(e)}const j=e=>{const t=e.currentTarget,n=x.indexOf(t),a=f[n].value;a!==w&&(E(t),O(a),null!=b&&T(b,String(a)))},q=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=x.indexOf(e.currentTarget)+1;n=null!=(a=x[t])?a:x[0];break}case"ArrowLeft":{var r;const t=x.indexOf(e.currentTarget)-1;n=null!=(r=x[t])?r:x[x.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},k)},f.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>x.push(e),onKeyDown:q,onFocus:j,onClick:j},l,{className:(0,o.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(v.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function h(e){const t=(0,i.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}const b="tabItem_Ymn6";function k(e){let{children:t,hidden:n,className:a}=e;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(b,a),hidden:n},t)}const v={},f="Table to list",g={unversionedId:"markdown-hint/index",id:"markdown-hint/index",title:"Table to list",description:"Request",source:"@site/docs/markdown-hint/index.md",sourceDirName:"markdown-hint",slug:"/markdown-hint/",permalink:"/trader/markdown-hint/",draft:!1,tags:[],version:"current",frontMatter:{}},y={},N=[{value:"Request",id:"request",level:2},{value:"Request",id:"request-1",level:2},{value:"Admonitions",id:"admonitions",level:2},{value:"Multi-language support code blocks",id:"multi-language-support-code-blocks",level:2}],T={toc:N};function w(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},T,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"table-to-list"},"Table to list"),(0,l.kt)("h2",{id:"request"},"Request"),(0,l.kt)("props",null,"grant_type"),(0,l.kt)("p",null,"Required. This is the OAuth authorization flow to use. ",(0,l.kt)("inlineCode",{parentName:"p"},"authorization_code")," in this case."),(0,l.kt)("props",null,"client_id"),(0,l.kt)("p",null,"Required. The client id issued to the service"),(0,l.kt)("props",null,"client_secret"),(0,l.kt)("p",null,"Required. The client id issued to the service"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="src/docs/9-example/index.md"',title:'"src/docs/9-example/index.md"'},"<props>grant_type</props>\n\nRequired. This is the OAuth authorization flow to use. `authorization_code` in this case.\n\n<props>client_id</props>\n\nRequired. The client id issued to the service\n\n<props>client_secret</props>\n\nRequired. The client id issued to the service\n")),(0,l.kt)("admonition",{type:"warning"},(0,l.kt)("p",{parentName:"admonition"},"This is a warning")),(0,l.kt)("h2",{id:"request-1"},"Request"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"grant_type"),(0,l.kt)("td",{parentName:"tr",align:null},"Required. This is the OAuth authorization flow to use. ",(0,l.kt)("inlineCode",{parentName:"td"},"authorization_code")," in this case.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"client_id"),(0,l.kt)("td",{parentName:"tr",align:null},"Required. The client id issued to the service")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"client_secret"),(0,l.kt)("td",{parentName:"tr",align:null},"Required. The client secret issued to the service")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"code"),(0,l.kt)("td",{parentName:"tr",align:null},"Required with ",(0,l.kt)("inlineCode",{parentName:"td"},"authorization_code")," grant type. The authorization code received at the previous step. Please note the authorization code lifetime is short (5 minutes) so please be")))),(0,l.kt)("h2",{id:"admonitions"},"Admonitions"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"This is a note")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"This is a tip")),(0,l.kt)("admonition",{type:"important"},(0,l.kt)("p",{parentName:"admonition"},"This is important")),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"This is a caution")),(0,l.kt)("admonition",{type:"warning"},(0,l.kt)("p",{parentName:"admonition"},"This is a warning")),(0,l.kt)("h2",{id:"multi-language-support-code-blocks"},"Multi-language support code blocks"),(0,l.kt)(h,{mdxType:"Tabs"},(0,l.kt)(k,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function helloWorld() {\n  console.log('Hello, world!');\n}\n"))),(0,l.kt)(k,{value:"py",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'def hello_world():\n  print("Hello, world!")\n'))),(0,l.kt)(k,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'class HelloWorld {\n  public static void main(String args[]) {\n    System.out.println("Hello, World");\n  }\n}\n'))),(0,l.kt)(k,{value:"C++",label:"C++",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},'int main() {\n    std::cout << "Hello World!";\n    return 0;\n}\n')))))}w.isMDXComponent=!0}}]);