"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[630],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>k});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),s=p(n),k=r,N=s["".concat(d,".").concat(k)]||s[k]||u[k]||l;return n?a.createElement(N,i(i({ref:e},m),{},{components:n})):a.createElement(N,i({ref:e},m))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},9364:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={},i="Apply for new account",o={unversionedId:"application/index",id:"application/index",title:"Apply for new account",description:"Request example",source:"@site/docs/2-application/index.md",sourceDirName:"2-application",slug:"/application/",permalink:"/trader/application/",draft:!1,tags:[],version:"current",frontMatter:{}},d={},p=[{value:"Request",id:"request",level:2}],m={toc:p};function u(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"apply-for-new-account"},"Apply for new account"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"    -X POST\n    --header 'Content-Type: application/json'\n    --header 'Authorization: Bearer {token here}'\n    -d 'json goes here' 'https://api.lime.co/application'\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Request example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "personal":\n    {\n        "first_name": "John",\n        "middle_name": "A",\n        "last_name": "Doe",\n        "residential_address":\n        {\n            "street": "One Penn Plaza suite 1614",\n            "city": "New York",\n            "state": "NY",\n            "zip": "10119",\n            "country": "US"\n        },\n        "mobile_phone_country": "+1",\n        "mobile_phone": "5551234567",\n        "email_address": "email@email.com",\n        "marital_status": "married",\n        "mothers_maiden_name": "Doe",\n        "date_of_birth": "12/01/1985",\n        "ssn": "111-22-3333",\n        "citizenship_country": "US",\n        "id_type": "us_driving_license",\n        "id_number": "75 123123"\n    },\n    "employment":\n    {\n        "status": "employed",\n        "job_title": "Seaport Crane Operator",\n        "company": "Port Authority",\n        "nature": "Logistics",\n        "company_years": 8,\n        "employer_address":\n        {\n            "street": "89 South Street",\n            "city": "New York",\n            "state": "NY",\n            "zip": "10038",\n            "country": "US"           \n        }\n    },\n    "financial":\n    {\n        "number_of_dependents": 2,\n        "annual_income": "$75,000 - $199,999",\n        "net_worth": "$150,000 - $499,999",\n        "liquid_net_worth": "$50,000 - $149,999",\n        "tax_bracket": "31 - 35%",\n        "funding_source":\n        [\n            "earnings", "home_equity_line_of_credit"\n        ],\n        "funding_source_other": "line of credit"\n    },\n    "investment":\n    {\n        "knowledge": "limited",\n        "risk_tolerance": "moderate",\n        "liquidity_needs": "Important (1 - 5 Years)",\n        "objectives":\n        [\n            "capital_appreciation", "preservation_of_capital", "income", "speculation"\n        ],\n        "time_horizon": "1 to 5 Years",\n        "experience":\n        {\n            "stocks": "1 to 5 Years",\n            "options": "1 to 5 Years",\n            "short_sales": "1 to 5 Years",\n            "mutual_funds": "1 to 5 Years",\n            "margin": "1 to 5 Years"\n        }\n    },\n    "affiliations":\n    {\n        "employee_of_exchange": false,\n        "employee_of_brokerdealer": false,\n        "employee_of_regulator": false,\n        "employee_of_advisor": false,\n        "person_to_influence_securities": false,\n        "person_to_contribute_major_capital": false,\n        "senior_officer_of_financial_institution": false,\n        "senior_officer_of_public_company": false,\n        "director_of_public_company": false,\n        "major_shareholder_of_public_company": false,\n        "senior_officer_foreign": false,\n        "relationship_to_another_account": false,\n        "relationship_to_another_entity": false\n    },\n    "legal_issues":\n    {\n        "bankruptcy": false,\n        "legal_dispute": false,\n        "unpaid_balance": true,\n        "comment": "lannisters always pay their debts"\n    },\n    "agreements": {\n        "just2trade": true,\n        "vision": true,\n        "vision_margin": true,\n        "nyse": true,\n        "nasdaq": true,\n        "extended_hours": true,\n        "otc": true\n    },\n    "documents":\n    [\n        {\n            "type": "identity",\n            "file": "scan.jpg",\n            "content": " -- --- -- - -- base64 content goes here - - -- - - -- "\n        }\n    ]\n}\n')),(0,r.kt)("h2",{id:"request"},"Request"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"personal"),(0,r.kt)("td",{parentName:"tr",align:null},"Personal information section according to the structure described below")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"employment"),(0,r.kt)("td",{parentName:"tr",align:null},"Employment information section")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"financial"),(0,r.kt)("td",{parentName:"tr",align:null},"General financial information")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"investment"),(0,r.kt)("td",{parentName:"tr",align:null},"Investment experience questionnaire")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"affiliatons"),(0,r.kt)("td",{parentName:"tr",align:null},"Affiliations information required by law to prevent market manipulation. Set to true if you or any immediate family member (spouse, brother, sister, parent, child, mother-in-law, sister-in-law, brother-in-law, daugher-in-law, son-in-law), or other person who supports you or who you support to a material extent, or an additional account holder, is a person described here.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"legal_issues"),(0,r.kt)("td",{parentName:"tr",align:null},"Legal issues background")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"agreements"),(0,r.kt)("td",{parentName:"tr",align:null},"Agreements and signatures. Set to true if the corresponding document is read and agreed to.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"documents"),(0,r.kt)("td",{parentName:"tr",align:null},"Documents binaries encoded as base64")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Personal Information"),(0,r.kt)("th",{parentName:"tr",align:null},"\xa0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"first_name"),(0,r.kt)("td",{parentName:"tr",align:null},"First name as stated on the ID document")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"middle_name"),(0,r.kt)("td",{parentName:"tr",align:null},"Middle name if applicable")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"last_name"),(0,r.kt)("td",{parentName:"tr",align:null},"Last name as stated on the ID document")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"residential_address"),(0,r.kt)("td",{parentName:"tr",align:null},"Permanent address in the format of the ",(0,r.kt)("strong",{parentName:"td"},"Address Structure")," described below")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mobile_phone_country"),(0,r.kt)("td",{parentName:"tr",align:null},"Mobile phone country code, a mandatory plus sign and digits. For example, for US it is ",(0,r.kt)("inlineCode",{parentName:"td"},"+1"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mobile_phone"),(0,r.kt)("td",{parentName:"tr",align:null},"Mobile Phone, digits only, no dashes or brackets")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"email_address"),(0,r.kt)("td",{parentName:"tr",align:null},"Email Address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"marital_status"),(0,r.kt)("td",{parentName:"tr",align:null},"Marital status, one of the following: ",(0,r.kt)("inlineCode",{parentName:"td"},"single"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"married"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"divorced"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mothers_maiden_name"),(0,r.kt)("td",{parentName:"tr",align:null},"Mother's maiden name to be used as a security question")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"date_of_birth"),(0,r.kt)("td",{parentName:"tr",align:null},"Date of birth, US format ",(0,r.kt)("inlineCode",{parentName:"td"},"mm/dd/yyyy"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ssn"),(0,r.kt)("td",{parentName:"tr",align:null},"SSN or ITIN, required for US residents, digits only")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"citizenship_country"),(0,r.kt)("td",{parentName:"tr",align:null},"Country, two-symbol ISO code")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id_type"),(0,r.kt)("td",{parentName:"tr",align:null},"The type of ID document, the following values are supported: ",(0,r.kt)("inlineCode",{parentName:"td"},"passport"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"us_state_id"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"us_driving_license"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"us_green_card"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id_number"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of ID document")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Employment"),(0,r.kt)("th",{parentName:"tr",align:null},"\xa0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},"Employment status, one of the following values: ",(0,r.kt)("inlineCode",{parentName:"td"},"employed"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"self_employed"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"retired"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"not_employed"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"student"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"job_title"),(0,r.kt)("td",{parentName:"tr",align:null},"Job title")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"company"),(0,r.kt)("td",{parentName:"tr",align:null},"Company name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"company_years"),(0,r.kt)("td",{parentName:"tr",align:null},"Years with this company")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nature"),(0,r.kt)("td",{parentName:"tr",align:null},"Nature of the business")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"employer_address"),(0,r.kt)("td",{parentName:"tr",align:null},"The address in the format of the ",(0,r.kt)("strong",{parentName:"td"},"Address Structure")," described below")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Address"),(0,r.kt)("th",{parentName:"tr",align:null},"\xa0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"street"),(0,r.kt)("td",{parentName:"tr",align:null},"Street address including apartment number if applicable")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"city"),(0,r.kt)("td",{parentName:"tr",align:null},"City")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"state"),(0,r.kt)("td",{parentName:"tr",align:null},"State, two-symbol ISO code, required for United States")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"zip"),(0,r.kt)("td",{parentName:"tr",align:null},"Postal code")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"country"),(0,r.kt)("td",{parentName:"tr",align:null},"Country, two-symbol ISO code")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Financial"),(0,r.kt)("th",{parentName:"tr",align:null},"\xa0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"number_of_dependents"),(0,r.kt)("td",{parentName:"tr",align:null},"A qualifying child or relative for whom you can claim a tax exemption, including yourself.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"annual_income"),(0,r.kt)("td",{parentName:"tr",align:null},"Annual income, one of the following values ",(0,r.kt)("inlineCode",{parentName:"td"},"Under $25,000"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"$25,000 - $74,999"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"$75,000 - $199,999"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"$200,000 - $499,999"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"$500,000 - $999,999"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"$1,000,000+"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"net_worth"),(0,r.kt)("td",{parentName:"tr",align:null},"One of the following values ",(0,r.kt)("inlineCode",{parentName:"td"},"Under $50,000"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"$50,000 - $149,999"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"$150,000 - $499,999"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"$500,000 - $999,999"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"$1,000,000 - $4,999,999"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Over $5,000,000"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"liquid_net_worth"),(0,r.kt)("td",{parentName:"tr",align:null},"One of the following values ",(0,r.kt)("inlineCode",{parentName:"td"},"Under $50,000"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"$50,000 - $149,999"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"$150,000 - $499,999"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"$500,000 - $999,999"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"$1,000,000 - $4,999,999"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Over $5,000,000"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tax_bracket"),(0,r.kt)("td",{parentName:"tr",align:null},"One of the following values ",(0,r.kt)("inlineCode",{parentName:"td"},"0 - 15%"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"16 - 25%"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"26 - 30%"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"31 - 35%"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Over 35%"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"funding_source"),(0,r.kt)("td",{parentName:"tr",align:null},"An array with the following available values ",(0,r.kt)("inlineCode",{parentName:"td"},"earnings"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"pension"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"gift"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"sale_of_business_or_property"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"insurance"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"inhertiance"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"social_security_benefits"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"home_equity_line_of_credit"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"other"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"funding_source_other"),(0,r.kt)("td",{parentName:"tr",align:null},"Please explain if any other funding sources")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Investment"),(0,r.kt)("th",{parentName:"tr",align:null},"\xa0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"objectives"),(0,r.kt)("td",{parentName:"tr",align:null},"An array with all the following 4 values ordered by priority: ",(0,r.kt)("inlineCode",{parentName:"td"},"capital_appreciation"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"preservation_of_capital"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"income"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"speculation"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"risk_tolerance"),(0,r.kt)("td",{parentName:"tr",align:null},"One of the following values ",(0,r.kt)("inlineCode",{parentName:"td"},"low"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"moderate"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"aggressive"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"speculative"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"liquidity_needs"),(0,r.kt)("td",{parentName:"tr",align:null},"One of the following values ",(0,r.kt)("inlineCode",{parentName:"td"},"Very Important (Less Than 1 Year)"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Important (1 - 5 Years)"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Somewhat Important (5 - 15 Years)"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Does Not Matter (Over 15 Years)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"time_horizon"),(0,r.kt)("td",{parentName:"tr",align:null},"One of the following values ",(0,r.kt)("inlineCode",{parentName:"td"},"Less than 1 Year"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"1 to 5 Years"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"5 to 10 Years"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"10 to 15 Years"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Over 15 Years"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"knowledge"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"limited"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"good"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"excellent"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"experience"),(0,r.kt)("td",{parentName:"tr",align:null},"An object that describes experience in different investment areas. The following properties are available: ",(0,r.kt)("inlineCode",{parentName:"td"},"stocks"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"option"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"margin"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"short_sales"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"mutual_funds"),". Each property can have one of the following values: ",(0,r.kt)("inlineCode",{parentName:"td"},"None"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Less than 1 Year"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"1 to 5 Years"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"6 to 10 Years"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Over 10 Years"),".")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Affiliations"),(0,r.kt)("th",{parentName:"tr",align:null},"\xa0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"employee_of_exchange"),(0,r.kt)("td",{parentName:"tr",align:null},"A member of or employee of any securities, options or commodities Exchange or other Self-Regulatory Organization including a registered securities associations, registered clearing organization or the Municipal Securities Rulemaking Board")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"employee_of_brokerdealer"),(0,r.kt)("td",{parentName:"tr",align:null},"An employee of a broker/dealer or other member of the FINRA")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"employee_of_regulator"),(0,r.kt)("td",{parentName:"tr",align:null},"An employee of a state or federal securities regulator")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"employee_of_advisor"),(0,r.kt)("td",{parentName:"tr",align:null},"An employee of an investment advisor")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"person_to_influence_securities"),(0,r.kt)("td",{parentName:"tr",align:null},"A person in a position to influence or whose activities directly or indirectly involve, or are related to, the function of buying or selling securities")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"person_to_contribute_major_capital"),(0,r.kt)("td",{parentName:"tr",align:null},"A person who has contributed to the equity or capital of a broker/dealer, directly or indirectly, in an amount that exceeds 10% of the broker/dealer's equity or capital")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"senior_officer_of_financial_institution"),(0,r.kt)("td",{parentName:"tr",align:null},"A senior officer of a bank, savings, loan institution, insurance company, investment advisory firm or any other financial institution")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"senior_officer_of_public_company"),(0,r.kt)("td",{parentName:"tr",align:null},"An executive officer of a public company, whether US or non-US")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"director_of_public_company"),(0,r.kt)("td",{parentName:"tr",align:null},"A director of a public company, whether US or non-US")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"major_shareholder_of_public_company"),(0,r.kt)("td",{parentName:"tr",align:null},"A 10% shareholder of a public company, whether US or non-US")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"senior_officer_foreign"),(0,r.kt)("td",{parentName:"tr",align:null},"A current or former senior official of a foreign government or political party, or senior executive of a foreign goverment-owned commercial enterprise, or a family member or close associate of such person")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"relationship_to_another_account"),(0,r.kt)("td",{parentName:"tr",align:null},"Have relationship with another account at Lime Trading Corp that you control, have a beneficial interest in or with which you coordinate trading")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"relationship_to_another_entity"),(0,r.kt)("td",{parentName:"tr",align:null},"Have relationship with entity which has an account at Lime Trading Corp")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Legal Issues"),(0,r.kt)("th",{parentName:"tr",align:null},"\xa0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bankruptcy"),(0,r.kt)("td",{parentName:"tr",align:null},"Have you ever been the subject to a bankruptcy proceeding, receivership, or similar action")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"legal_dispute"),(0,r.kt)("td",{parentName:"tr",align:null},"Have you ever been in a legal dispute, arbitration, or reparations action related to a securities or commodities account")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"unpaid_balance"),(0,r.kt)("td",{parentName:"tr",align:null},"Have you ever closed an account with an unpaid balance at a securities or commodity firm")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"comment"),(0,r.kt)("td",{parentName:"tr",align:null},"Mandatory comment if any of the above is true")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Agreements"),(0,r.kt)("th",{parentName:"tr",align:null},"\xa0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"just2trade"),(0,r.kt)("td",{parentName:"tr",align:null},"Lime Trading Market Agreement")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"vision"),(0,r.kt)("td",{parentName:"tr",align:null},"Vision Account Agreement")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"vision_margin"),(0,r.kt)("td",{parentName:"tr",align:null},"Vision Margin Supplement")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nyse"),(0,r.kt)("td",{parentName:"tr",align:null},"NYSE Market Data Agreement")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nasdaq"),(0,r.kt)("td",{parentName:"tr",align:null},"NASDAQ Market Data Agreement")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"extended_hours"),(0,r.kt)("td",{parentName:"tr",align:null},"Extended Hours Trading Risk Agreement")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"otc"),(0,r.kt)("td",{parentName:"tr",align:null},"OTC Market Data Agreement")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Documents"),(0,r.kt)("th",{parentName:"tr",align:null},"\xa0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"Type of the document, only one type is supported: ",(0,r.kt)("inlineCode",{parentName:"td"},"identity"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"file"),(0,r.kt)("td",{parentName:"tr",align:null},"File name of the document, should include extenstion. For example, ",(0,r.kt)("inlineCode",{parentName:"td"},"scan.jpg"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"content"),(0,r.kt)("td",{parentName:"tr",align:null},"Base-64 encoded content of the file")))))}u.isMDXComponent=!0}}]);