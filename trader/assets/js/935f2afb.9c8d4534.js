"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[197],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"limeTraderSidebar":[{"type":"link","label":"Introduction","href":"/trader/","docId":"index"},{"type":"category","label":"Authentication","items":[{"type":"link","label":"Basics","href":"/trader/authentication/","docId":"authentication/index"},{"type":"link","label":"Password flow","href":"/trader/authentication/password-flow","docId":"authentication/password-flow"},{"type":"link","label":"Code flow","href":"/trader/authentication/code-flow","docId":"authentication/code-flow"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Accounts","items":[{"type":"link","label":"Get accounts balances","href":"/trader/accounts/","docId":"accounts/index"},{"type":"link","label":"Streaming feed","href":"/trader/accounts/streaming-feed","docId":"accounts/streaming-feed"},{"type":"link","label":"Get account positions","href":"/trader/accounts/get-account-positions","docId":"accounts/get-account-positions"},{"type":"link","label":"Get account trades","href":"/trader/accounts/get-account-trades","docId":"accounts/get-account-trades"},{"type":"link","label":"Get account routes","href":"/trader/accounts/get-account-routes","docId":"accounts/get-account-routes"},{"type":"link","label":"Transactions journal","href":"/trader/accounts/transactions-journal","docId":"accounts/transactions-journal"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Trading","items":[{"type":"link","label":"Place an order","href":"/trader/trading/","docId":"trading/index"},{"type":"link","label":"Validate an order","href":"/trader/trading/validate-order","docId":"trading/validate-order"},{"type":"link","label":"Get order details","href":"/trader/trading/get-order-details","docId":"trading/get-order-details"},{"type":"link","label":"Get order details by client order id","href":"/trader/trading/get-order-details-by-client-order-id","docId":"trading/get-order-details-by-client-order-id"},{"type":"link","label":"Get active orders","href":"/trader/trading/get-active-orders","docId":"trading/get-active-orders"},{"type":"link","label":"Cancel an order","href":"/trader/trading/cancel-order","docId":"trading/cancel-order"},{"type":"link","label":"Estimate fee charges","href":"/trader/trading/estimate-fee-charges","docId":"trading/estimate-fee-charges"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Market data","items":[{"type":"link","label":"Get current quote","href":"/trader/market-data/get-current-quote","docId":"market-data/get-current-quote"},{"type":"link","label":"Get current quotes array","href":"/trader/market-data/get-current-quote-array","docId":"market-data/get-current-quote-array"},{"type":"link","label":"Get quotes history","href":"/trader/market-data/get-quotes-history","docId":"market-data/get-quotes-history"},{"type":"link","label":"Get trading schedule","href":"/trader/market-data/get-trading-schedule","docId":"market-data/get-trading-schedule"},{"type":"link","label":"Lookup securities","href":"/trader/market-data/lookup-securities","docId":"market-data/lookup-securities"},{"type":"link","label":"Get time and sales","href":"/trader/market-data/get-time-and-sales","docId":"market-data/get-time-and-sales"},{"type":"link","label":"Get option series","href":"/trader/market-data/get-option-series","docId":"market-data/get-option-series"},{"type":"link","label":"Get option chain","href":"/trader/market-data/get-option-chain","docId":"market-data/get-option-chain"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Errors","items":[{"type":"link","label":"Error handling","href":"/trader/errors/","docId":"errors/index"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Appendix","items":[{"type":"link","label":"CQS symbols","href":"/trader/appendix/CQS-symbols","docId":"appendix/CQS-symbols"},{"type":"link","label":"OCC symbols","href":"/trader/appendix/OCC-symbols","docId":"appendix/OCC-symbols"}],"collapsed":true,"collapsible":true}]},"docs":{"accounts/get-account-holder-info":{"id":"accounts/get-account-holder-info","title":"Get account holder info","description":"Response example"},"accounts/get-account-positions":{"id":"accounts/get-account-positions","title":"Get account positions","description":"Response example","sidebar":"limeTraderSidebar"},"accounts/get-account-routes":{"id":"accounts/get-account-routes","title":"Get account routes","description":"Response example","sidebar":"limeTraderSidebar"},"accounts/get-account-trades":{"id":"accounts/get-account-trades","title":"Get account trades","description":"Response example","sidebar":"limeTraderSidebar"},"accounts/index":{"id":"accounts/index","title":"Get accounts balances","description":"Response example","sidebar":"limeTraderSidebar"},"accounts/streaming-feed":{"id":"accounts/streaming-feed","title":"Streaming feed","description":"Command examples","sidebar":"limeTraderSidebar"},"accounts/transactions-journal":{"id":"accounts/transactions-journal","title":"Transactions journal","description":"Response example","sidebar":"limeTraderSidebar"},"appendix/CQS-symbols":{"id":"appendix/CQS-symbols","title":"CQS symbols","description":"The CQS convention is used to code stocks and ETFs.","sidebar":"limeTraderSidebar"},"appendix/OCC-symbols":{"id":"appendix/OCC-symbols","title":"OCC symbols","description":"For example, symbol AAPL  171103C00155000 is translated to a call on AAPL expiring on November 3rd 2017, with its strike price of $155.00","sidebar":"limeTraderSidebar"},"application/index":{"id":"application/index","title":"Apply for new account","description":"Request example"},"authentication/code-flow":{"id":"authentication/code-flow","title":"Code flow - authorize","description":"The user browser should be directed to the following authentication url. The user will see the Lime Trading login form to input the credentials.","sidebar":"limeTraderSidebar"},"authentication/create-username":{"id":"authentication/create-username","title":"Create username","description":"A user must have an identity with Lime Trading in order to use Lime Trading services. The identity is authenticated by username and password created by this endpoint. This does not open a trading account."},"authentication/index":{"id":"authentication/index","title":"Authentication","description":"All requests are authenticated with tokens issued by common OAuth 2.0 compatible flow. In order to use the API, the application should be registered with us first to get your api key. Please login to your portal at https://myaccount.lime.co to get one. You will receive an clientid and a clientsecret. We support two authorization flows suitable for different scenarios. The password type is short and simple to be used by users trading directly on their account. The authorization_code type is longer and more complicated but allows third parties to get authorized access to client accounts. For security reasons, the third party applications will need to add one or more callback urls to the whitelist on our side first.","sidebar":"limeTraderSidebar"},"authentication/password-flow":{"id":"authentication/password-flow","title":"Password flow","description":"Create an access token by logging in with a valid username and password. The access token expires at 3","sidebar":"limeTraderSidebar"},"authentication/user-profile":{"id":"authentication/user-profile","title":"User profile","description":"Response example"},"errors/index":{"id":"errors/index","title":"Error handling","description":"We use standard HTTP codes to indicate the result of a request. Generally speaking, codes in 2xx range indicate successful call, codes 4xx indicate that the request failed with the information provided (authentication not accepted, parameters formatted incorrectly, a trade is not accepted) and codes 5xx indicate internal server errors with no further explanation. The standard codes are clearly not enough, that is why the API can also respond with a json object with the following optional fields:","sidebar":"limeTraderSidebar"},"index":{"id":"index","title":"Introduction","description":"We believe that modern financial mechanics is a problem of IT and code, not finance. We seek for elegance of integrations by eliminating the unnecessary complexity of financial infrastructure. Our API calls are based on REST concepts and can be made with any language that supports standard HTTP. Trading is made easier, just plain JSON and POST.","sidebar":"limeTraderSidebar"},"markdown-hint/index":{"id":"markdown-hint/index","title":"Table to list","description":"Request"},"market-data/get-current-quote":{"id":"market-data/get-current-quote","title":"Get current quote","description":"Returns the following structure:","sidebar":"limeTraderSidebar"},"market-data/get-current-quote-array":{"id":"market-data/get-current-quote-array","title":"Get current quotes array","description":"Returns an array of quotes:","sidebar":"limeTraderSidebar"},"market-data/get-option-chain":{"id":"market-data/get-option-chain","title":"Get option chain","description":"Response example","sidebar":"limeTraderSidebar"},"market-data/get-option-series":{"id":"market-data/get-option-series","title":"Get option series","description":"Response example","sidebar":"limeTraderSidebar"},"market-data/get-quotes-history":{"id":"market-data/get-quotes-history","title":"Get quotes history","description":"Returns an array of candles:","sidebar":"limeTraderSidebar"},"market-data/get-time-and-sales":{"id":"market-data/get-time-and-sales","title":"Get time and sales","description":"Not live yet","sidebar":"limeTraderSidebar"},"market-data/get-trading-schedule":{"id":"market-data/get-trading-schedule","title":"Get trading schedule","description":"Response example:","sidebar":"limeTraderSidebar"},"market-data/lookup-securities":{"id":"market-data/lookup-securities","title":"Lookup securities","description":"Response","sidebar":"limeTraderSidebar"},"trading/cancel-order":{"id":"trading/cancel-order","title":"Cancel an order","description":"Response example","sidebar":"limeTraderSidebar"},"trading/estimate-fee-charges":{"id":"trading/estimate-fee-charges","title":"Estimate fee charges","description":"Response example","sidebar":"limeTraderSidebar"},"trading/get-active-orders":{"id":"trading/get-active-orders","title":"Get active orders","description":"Response example","sidebar":"limeTraderSidebar"},"trading/get-order-details":{"id":"trading/get-order-details","title":"Get order details","description":"Single order response example","sidebar":"limeTraderSidebar"},"trading/get-order-details-by-client-order-id":{"id":"trading/get-order-details-by-client-order-id","title":"Get order details by client order id","description":"Response example","sidebar":"limeTraderSidebar"},"trading/index":{"id":"trading/index","title":"Place an order","description":"Single order request example","sidebar":"limeTraderSidebar"},"trading/validate-order":{"id":"trading/validate-order","title":"Validate an order","description":"Request example","sidebar":"limeTraderSidebar"}}}')}}]);