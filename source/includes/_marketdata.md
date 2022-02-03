# Market data

All data is 15 min delayed.

## Streaming feed

```shell
wscat
    -H "Authorization: Bearer {token here}" -c wss://api.just2trade.com/marketdata
```

> Command examples

```json
{ "action":"subscribe","symbols":["AAPL","MSFT","GOOG"] }

{ "action":"unsubscribe","symbols":["AAPL","MSFT","GOOG"] }
```

> Feed example

```json
{"t":"a","s":"AAPL","ls":210,"lm":"EDGX","a":268.81,"as":5,"b":268.68,"bs":11,"l":268.68,"high":270.07,"low":265.86,"open":268.6,"close":268.48,"change":1.560000,"change_pc":0.58,"d":1576018013,"v":21118864}
{"t":"a","s":"MSFT","ls":670,"lm":"FINR","a":151.23,"as":1,"b":151.15,"bs":2,"l":151.21,"high":151.89,"low":150.765,"open":151.29,"close":151.13,"change":-0.230000,"change_pc":-0.15,"d":1576011600,"v":15483417}
{"t":"a","s":"GOOG","ls":1068,"lm":"FINR","a":1345.75,"as":2,"b":1343.51,"bs":1,"l":1344.66,"high":1349.975,"low":1336.04,"open":1341.5,"close":1344.66,"change":1.100000,"change_pc":0.08,"d":1576011600,"v":1054746}
{"t":"t","s":"AAPL","ls":298,"lm":"EDGX","l":268.79,"d":1576018263}
{"t":"t","s":"AAPL","ls":200,"lm":"EDGX","l":268.8,"d":1576018325}
```

If authentication is denied the websocket connection is terminated immediately. The client should implement reconnection logic to maintain the opened connection. The following commands are supported:

parameter | description
---- | ----
action | Required. `subscribe` or `unsubscribe`
symbols | An array of symbols

Subscription command for a symbol that has already been subscribed is ignored. Same behavior applies to Unsubscribe.

### Trade

field | description
---- | ----
t | Type `t`
s | Symbol
ls | Last Size. Trade quantity
lm | Last Market. Trade market center
l | Last. Trade Price
d | Date. Timestamp in unix format

### Aggregate

The server sends a snapshot of current quote data as the first message after successful subscription. All subsequent `aggregate` messages contain only fields changed since last update.

field | description
---- | ----
t | Type `a`
s | Symbol
ls | Last Size. Trade quantity
l | Last. Trade price
a | Ask
as | Ask Size
b | Bid
bs | Bid Size
o | Open price
h | High
low | Low price
c | Close price
ch | Change
chpc | Change percent
d | Date. Timestamp in unix format

### Error

field | description
---- | ----
t | Type `e`
code | Error code
description | Error description


## Get current quote

```shell
curl
    -X GET
    --header 'Accept: application/json'
    --header 'Authorization: Bearer {token here}'
    'https://api.just2trade.com/marketdata/quote?symbol=AAPL'
```

> Returns the following structure:

```json
{
  "symbol": "AAPL",
  "ask": 154.61,
  "ask_size": 5,
  "bid": 154.6,
  "bid_size": 14,
  "last": 154.61,
  "last_size": 100,
  "volume": 9461271,
  "date": 1507049383,
  "high": 155.09,
  "low": 153.91,
  "open": 154.01,
  "close": 153.81,
  "week52_high": 164.94,
  "week52_low": 104.08,
  "change": 0.52,
  "change_pc": 0,
  "open_interest": 0
}
```
The query retrieves current quote for the specified symbol.

### Request
parameter | description
---- | ----
symbol | Required. The security symbol

### Response
The data depends on current time of day.

## Get current quotes array

```shell
curl
    -X POST
    --header 'Content-Type: application/json'
    --header 'Accept: application/json'
    --header 'Authorization: Bearer {token here}'
  -d '["GOOG", "AAPL", "MSFT"]'
  'https://api.just2trade.com/marketdata/quotes'
```

> Returns an array of quotes:

```json
[
    {
        "symbol": "GOOG",
        ...
    },
    {
        "symbol": "AAPL",
        ...
    },
    {
        "symbol": "MSFT",
        ...
    }
]
```
The query retrieves current quotes for all symbols specified on the request array


## Get quotes history

```shell
curl
    -X GET
    --header 'Accept: application/json'
    --header 'Authorization: Bearer {token here}'
    'https://api.just2trade.com/marketdata/history?symbol=AAPL&period=day&from=1483228800&to=1483488000'
```

> Returns an array of candles:

```json
[
  {
    "timestamp": 1483074000,
    "period": "day",
    "open": 116.65,
    "high": 117.2,
    "low": 115.43,
    "close": 115.82,
    "volume": 24541183
  },
  {
    "timestamp": 1483419600,
    "period": "day",
    "open": 115.8,
    "high": 116.33,
    "low": 114.76,
    "close": 116.15,
    "volume": 24719541
  }
]
```
The query returns candle structures aggregated by specified period

### Request
parameter | description
---- | ----
symbol | Required. The security symbol, stocks in Nasdaq CMS convention. Options are not supported
period | Required. The supported periods are: `minute`, `minute_5`, `minute_15`, `minute_30`, `hour`, `day`, `week`, `month`, `quarter`, `year`
from | Required. Start of the period, unix timestamp
to | Required. End of the period, unix timestamp



## *Get trading schedule - not live yet*

```shell
curl
    -X GET
    --header 'Accept: application/json'
    --header 'Authorization: Bearer {token here}'
    'https://api.just2trade.com/marketdata/schedule'
```

> Response example:

```json
{
    "session": "regular_market"
}
```

Returns trading session info depending on current date and time:

name | description
---- | ----
session | One of the following values: `pre_market`, `regular_market`, `after_market`, `closed`.


## Lookup securities

```shell
curl
    -X GET
    --header 'Accept: application/json'
    --header 'Authorization: Bearer {token here}'
    'https://api.just2trade.com/securities?query=ba&limit=4'
```

> Response

```json
{
    "securities": [
        {
            "symbol": "BA",
            "description": "BOEING COMPANY"
        },
        {
            "symbol": "BAC",
            "description": "BANK OF AMERICA CORPORATION"
        },
        {
            "symbol": "BAX",
            "description": "BAXTER INTERNATIONAL Inc"
        },
        {
            "symbol": "BAP",
            "description": "CREDICORP Ltd"
        }
    ],
    "count": 2492
}
```

Searches the securities reference by the specified criteria. The criteria can be a symbol, part of a symbol or part of a company name. Query parameters are:

name | description
---- | ----
query | Required. The search criteria.
limit | Optional, 10 by default. The number of items to return on one page


## *Get time and sales - not live yet*

```shell
curl
    -X GET
    --header 'Accept: application/json'
    --header 'Authorization: Bearer {token here}'
    'https://api.just2trade.com/marketdata/trades?symbol=IBM&limit=4&from=1513362185&to=1513362190'
```

> Response example:

```json
{
    "trades": [
        {
            "timestamp": 1513362190,
            "quantity": 100,
            "price": 152.44,
            "market": "BOS"
        },
        {
            "timestamp": 1513362190,
            "quantity": 100,
            "price": 152.44,
            "market": "EDGA"
        },
        {
            "timestamp": 1513362188,
            "quantity": 22,
            "price": 152.4699,
            "market": "NDD"
        },
        {
            "timestamp": 1513362185,
            "quantity": 100,
            "price": 152.45,
            "market": "NASDAQ"
        }
    ],
    "count": 12
}
```

<aside class="warning">
Early preview documentation, not available live yet
</aside>

Retrieves the time and sales history, ordered by descending timestamp. Query parameters are:

name | description
---- | ----
symbol | Required. The security symbol, stocks in Nasdaq CMS convention. Options are not supported
from | Required. Start of the period, unix timestamp
to | Required. End of the period, unix timestamp
limit | Optional, 10 by default. The number of items to return on one page
skip | Optional, 0 by default. The number of items to skip


## Get option series

```shell
curl
    -X GET
    --header 'Accept: application/json'
    --header 'Authorization: Bearer {token here}'
    'https://api.just2trade.com/securities/VXX/options/series'
```

> Response

```json
[
    "VXX",
    "VXX1",
    "VXX2"
]
```

Returns an array of option series by the specified underlying security's symbol. Contains at least one element which is the default series. Option Series is a specific set of calls or puts on the same underlying security, with the same strike price and expiration date. For the most part there is just one series name that matches the symbol but in some cases related to corporate actions on the underlying security additional series are issued.

## Get option expirations

```shell
curl
    -X GET
    --header 'Accept: application/json'
    --header 'Authorization: Bearer {token here}'
    'https://api.just2trade.com/securities/{symbol}/options/expirations?series={series}'
```

> Response

```json
[
    "2017-11-17",
    "2017-11-24",
    "2017-12-01",
    "2017-12-15",
    "2018-01-19",
    "2018-02-16",
    "2018-04-20",
    "2018-06-15",
    "2018-09-21",
    "2019-01-18"
]
```

Returns an array of all available option expiration dates formatted as yyyy-mm-dd. Parameters are:

name | description
---- | ----
symbol | Required. The root symbol.
series | Optional. By default the series is the same as the the root symbol

## Get option chain

```shell
curl
    -X GET
    --header 'Accept: application/json'
    --header 'Authorization: Bearer {token here}'
    'https://api.just2trade.com/securities/{symbol}/options?expiration={expiration}&series={series}'
```

> Response example

```json
[
    {
        "symbol": "VXX2  171117C00008000",
        "type": "call",
        "strike": 8
    },
    {
        "symbol": "VXX2  171117P00008000",
        "type": "put",
        "strike": 8
    },
    {
        "symbol": "VXX2  171117C00009000",
        "type": "call",
        "strike": 9
    },
    ...
]
```

Returns an array of option contracts by the specified expiration date and series. Parameters are:

name | description
---- | ----
symbol | Required. The root symbol.
expiration | Required. Contract expiration date, formatted as yyyy-mm-dd
series | Optional. By default the series is the same as the the root symbol
