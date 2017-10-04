# Errors

We use standard HTTP codes to indicate the result of a request. Generally speaking, codes in `2xx` range indicate successful call, codes `4xx` indicate that the request failed with the information provided (authentication not accepted, parameters formatted incorrectly, a trade is not accepted) and codes `5xx` indicate internal server errors with no further explanation. The standard codes are clearly not enough, that is why the API can also respond with a json object with the following optional fields:

parameter | description
---- | ----
code | `not_found`, `validation_error`
message | the error description

### HTTP Status Codes
code | description
---- | ----
200 OK | all good
400 BAD REQUEST | the request is not accepted most likely due to formatting issues
401 | authentication denied, access token is incorrect or revoked
404 NOT FOUND | the requested resource is not found
500 SERVER ERROR | internal server error, something on our end