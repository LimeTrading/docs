# Trading


## Validate an order

```shell
curl -X POST
  --header 'Content-Type: application/json'
  --header 'Accept: application/json'
  --header 'Authorization: Bearer token'
  -d '{ \ 
   "account_number": "12345678@vision", \ 
   "symbol": "string", \ 
   "quantity": 1, \ 
   "price": 21.0, \ 
   "stop_price": 0, \ 
   "time_in_force": "day", \ 
   "order_type": "limit", \ 
   "side": "buy", \ 
   "comment": "string", \ 
   "exchange": "string" \ 
 }' 'https://api.just2trade.com/orders/validate'
```

> Request example

```json
{
  "account_number": "12345678@vision",
  "symbol": "BAC",
  "quantity": 1,
  "price": 21.0,
  "stop_price": 0,
  "time_in_force": "day",
  "order_type": "limit",
  "side": "buy",
  "comment": "any comment",
  "exchange": "Auto"
}
```

> Response example

```json
{
  "is_valid": false,
  "validation_message": "You cannot sell more shares than your effective long position (effective long position = long position less open sell orders) using one order ticket. Please check your pending order(s) for potential outstanding duplicate order(s). Industry regulations require that two order tickets be submitted: one to sell your effective long position and one to sell your desired short position."
}
```

The method verifies an order and responds with the validation message if the order can not be placed at the moment.

### Parameters
parameter | description
---- | ----
account_number | Required. The account number in the format of `123456578@vision`
symbol | Required. The security symbol, stocks in Nasdaq CMS convention, options in OCC
quantity | Required. The positive decimal, number of shares or contracts
price | Required positive decimal if the `order_type` is `limit` or `stopLimit`
stop_price | Required positive decimal if the `order_type` is `stop` or `stopLimit`
time_in_force | Optional, `day` by default. Specifies how long the order remains in effect. Possible values are `day`, `goodTillCancel`, `goodTillCrossing`
order_type | Optional, `market` by default. Possible values are `market`, `limit`, `stop`, `stopLimit`, `marketOnClose`, `limitOnClose`
side | Optional, `buy` by default. Available values are `buy`, `sell`, `sellShort`, `buyToCover`. `buy` opens long position, `sell` closes the position, `sellShort` opens short position, `buyToCover` closes the short position. You can use only `buy` and `sell` so that the system will detemine the proper side according to the current position, but you are still required to place two orders to revert the position from long to short and the other way around.
comment | Optional, any string
exchange | Optional, `auto` by default. The routing instructions for order execution. The actual values are dynamic and depend on the account settings. Some of the possible values are `nasdaq` or `nyse`

### Response

The method returns the following json structure:

parameter | description
---- | ----
is_valid | `true` or `false`
validation_message | Optional reject reason


## Place an order



## Get order details
```shell
curl -X GET
  --header 'Accept: application/json'
  --header 'Authorization: Bearer token'
  'https://api.just2trade.com/orders/20171003209384646'
```

> Response example

```json
{
  "client_id": "20171003209384646",
  "exchange": "Auto",
  "quantity": 1,
  "executed_quantity": 0,
  "order_status": "new",
  "price": 20,
  "stop_price": 0,
  "time_in_force": "day",
  "order_type": "limit",
  "order_side": "buy",
  "symbol": "BAC"
}
```

Get the order details by the specified order id

### Request
parameter | description
---- | ----
id | Required. The order id