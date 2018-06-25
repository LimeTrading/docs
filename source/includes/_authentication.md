# Authentication

All requests are authenticated with tokens issued by common OAuth 2.0 compatible flow. In order to use the API, the application should be registered with us first to get the `client_id` and `client_secret`. Please contact us at support@just2trade.com in order to do that. We support two authorization flows suitable for different scenarios. The `password` type is short and simple to be used by users trading directly on their account. The `authorization_code` type is longer and more complicated but allows third parties to get authorized access to client accounts. For security reasons, the third party applications will need to add one or more callback urls to the whitelist on our side first.

Successful authentication issues a security token that needs to be specified with every authenticated request in the Authentication HTTP header: `Authentication: Bearer {token goes here}`

## Create username
A user must have an identity with Just2Trade in order to use Just2Trade services. The identity is authenticated by username and password created by this method. This does not open a trading account

```shell
curl
    -X POST
    --header 'Accept: application/json'
    --header 'Authorization: Basic {client_id}:{client_secret}'
    --header 'Content-Type: application/x-www-form-urlencoded'
    -d 'email={email}&first_name={first_name}&last_name={last_name}&username={username}&password={password}'
    'https://auth.just2trade.com/api/register'
```

&nbsp; | &nbsp;
---- | ----
client_id | Required. The client id issued to the service
client_secret | Required. The client secret issued to the service
email | Required.
first_name | Required.
last_name | Required.
username | Required.
password | Required. Password complexity requirements are enforced

Returns HTTP 200 OK if the identity is successfully created, HTTP 400 Bad Request with human readable error message in case of any validation errors

## Password Flow
Create an access token by logging in with a valid username and password. The access token is issued for 24 hours by default and prolonged with every method call. In the most common scenario this is the first method to be called at the application start. The POST parameters are:

```shell
curl
    -X POST
    --header 'Accept: application/json'
    --header 'Content-Type: application/x-www-form-urlencoded'
    -d 'grant_type=password&client_id={client_id}&client_secret={your_client_secret}&username={username}&password={password}'
    'https://auth.just2trade.com/connect/token'
```

> Response example

```json
{
  "scope": "email profile",
  "token_type": "Bearer",
  "access_token": "MjAwOTg1OWUtZTUwMy00YzY4LWEyZWQtODU0N2NkZTJiNDdlfDIwMTcxMDA3MTkyNDQzfHRlc3R8U2VyZ2V5fE1pbmtvdg==",
  "expires_in": 86400
}
```

&nbsp; | &nbsp;
---- | ----
grant_type | Required. This is the OAuth authorization flow to use. `password` in this case.
client_id | Required. The client id issued to the service
client_secret | Required. The client secret issued to the service
username | Required with `password` grant type.
password | Required with `password` grant type.

### Response
name | value
---- | ----
access_token | the access token
scope | the scopes this token grants access to
token_type | `Bearer` means that the access token should be put to the Authorization header of every web request
expires_in | the expiration lifetime in seconds


## Code Flow - Authorize
The user browser should be directed to the following authentication url. The user will see the Just2Trade login form to input the credentials.

```shell
curl
    -X GET
    'https://auth.just2trade.com/connect/authorize?response_type=code&client_id={{your_client_id}}&redirect_uri={{your_redirect_uri}}'
```

> After successful authentication the user is redirected to redirect_uri with HTTP code 302 and the authorization code:

```shell
    302 Found
    Location: {{your_redirect_uri}}?code={{code}}
```

### Request
parameter | description
---- | ----
response_type | Required. This is the OAuth authorization flow to use. In this case this is `code`.
client_id | Required. The client id issued to the service
redirect_uri | Required. The url to redirect the user after successful authentication. For security reasons, we do not allow just any url, we require this url to be registered first


## Code Flow - Access token
The next step is to exchange the authorization code to an access token which will be used to authenticate all API requests. By default the access token is issued for 24 hours and is prolonged with every usage.

```shell
curl
    -X POST
    --header 'Accept: application/json'
    --header 'Content-Type: application/x-www-form-urlencoded'
    -d 'grant_type=authorization_code&code={code}&client_id={client_id}&client_secret={your_client_secret}&redirect_uri={your_redirect_uri}'
    'https://auth.just2trade.com/connect/token'
```

> Response example

```json
{
  "scope": "email profile",
  "token_type": "Bearer",
  "access_token": "MjAwOTg1OWUtZTUwMy00YzY4LWEyZWQtODU0N2NkZTJiNDdlfDIwMTcxMDA3MTkyNDQzfHRlc3R8U2VyZ2V5fE1pbmtvdg==",
  "expires_in": 86400
}
```

### Request
parameter | description
---- | ----
grant_type | Required. This is the OAuth authorization flow to use. `authorization_code` in this case.
client_id | Required. The client id issued to the service
client_secret | Required. The client secret issued to the service
code | Required with `authorization_code` grant type. The authorization code received at the previous step. Please note the authorization code lifetime is short (5 minutes) so please be sure to exchange the code to a token immediately.
redirect_uri | Required with `authorization_code` grant type. The same url as on the previous request authorization step.

### Response
name | value
---- | ----
access_token | the access token
scope | the scopes this token grants access to
token_type | `Bearer` means that the access token should be put to the Authorization header of every web request
expires_in | the expiration lifetime in seconds


## User profile

```shell
curl
    -X GET
    --header 'Authorization: Bearer {token here}'
    'https://api.just2trade.com/userinfo'
```

> Response example

```json
{
    "id": "8f1e7eba-0000-0000-0000-2b67c9af83a5",
    "login": "login",
    "first_name" : "John",
    "last_name" : "Smith",
    "email": "login@email.com",
    "domestic": true,
    "accounts": [
        {
            "account_number": "12345678@vision",
            "account_name": "John Doe Individual",
            "trade_platform": "ETNA"
        },
        {
            "account_number": "11111111@cor",
            "account_name": "John Doe and Jane Doe Joint",
            "trade_platform": "ETNA"
        }
    ],
    "applications": [
        {
            "account_number": "",
            "status": "process"
        }
    ]
}
```

This retrieves the basic profile information including new accounts application status and the list of existing account numbers.
