# Authentication

All requests are authenticated with tokens issued by common OAuth 2.0 compatible flow. In order to use the API, the third party service should register with us first to get the `client_id`, `client_secret` and set up the `redirect_uri`. The user logs in with Just2Trade login and password issuing a token that grants access to his account to the third party service. Our central authorization service is located at https://auth.just2trade.com

## Request authorization
The user browser should be directed to the following authentication url. The user will see the Just2Trade login form to input the credentials.

```shell
curl
    -X GET
    'https://auth.just2trade.com/connect/authorize?response_type=code&client_id={{your_client_id}}&client_secret={{your_client_secret}}&redirect_uri={{your_redirect_uri}}'
```

> After successful authentication the user is redirected to redirect_uri with HTTP code 302 and the authorization code:

```shell
    302 Found
    Location: {{your_redirect_uri}}?code={{code}}
```

### Request
parameter | description
---- | ----
response_type | Required. This is the OAuth authorization flow to use. We currently support only `code`.
client_id | Required. The client id issued to the service
client_secret | Required. The client secret issued to the service
redirect_uri | Required. The url to redirect the user after successful authentication. For security reasons, we do not allow just any url, we require this url to be registered first


## Access token
The next step is to exchange the authorization code to an access token which will be used to authenticate all API requests. By default the access token is issued for 24 hours and is renewed with every usage.

```shell
curl
    -X POST
    --header 'Accept: application/json'
    --header 'Content-Type: application/x-www-form-urlencoded'
    -d 'grant_type=authorization_code&code={{code}}&client_id={{client_id}}'
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
grant_type | Required. This is the OAuth authorization flow to use. We currently support only `authorization_code`.
client_id | Required. The client id issued to the service
code | Required. The authorization code recevied at the previous step. Please note the authorization code lifetime is short so please be sure to exchange the code to a token immediately.

### Response
name | value
---- | ----
access_token | the access token
scope | the scopes this token grants access to
token_type | `Bearer` means that the access token should be put to the Authorization header of every web request
expires_in | the expiration lifetime in seconds


## User profile
This retrieves the basic user information including the application status and the list of existing account numbers.

```shell
curl
    -X GET
    'https://api.just2trade.com/auth'
```

> Response example

```json
{
    "id": "8f1e7eba-0000-0000-0000-2b67c9af83a5",
    "login": "login",
    "email": "login@email.com",
    "domestic": true,
    "accounts": [
        {
            "account_number": "12345678@vision",
            "trade_platform": "ETNA"
        },
        {
            "account_number": "11111111@cor",
            "trade_platform": "ETNA"
        }
    ],
    "application": {
        "status": "process"
    }
}
```
