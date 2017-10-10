# Market data
<aside class="notice">The stock symbols use Nasdaq CMS convention. Option symbols are encoded as OCC. The date is the unix timestamp.</aside>

## Get current quote

```shell
curl
    -X GET
    --header 'Accept: application/json'
    --header 'Authorization: Bearer token'
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
The query retrieves current realtime quote for the specified symbol.

### Request
parameter | description
---- | ----
symbol | Required. The security symbol

### Response
The data depends on current time of day.


## Get quotes history

```shell
curl
    -X GET
    --header 'Accept: application/json'
    --header 'Authorization: Bearer token'
    'https://api.just2trade.com/marketdata/history?symbol=AAPL&period=day&from=1483228800&to=1483488000
```

> Returns an array of candles:

```json
[
  {
    "timestamp": 1483074000,
    "period": "Day",
    "open": 116.65,
    "high": 117.2,
    "low": 115.43,
    "close": 115.82,
    "volume": 24541183
  },
  {
    "timestamp": 1483419600,
    "period": "Day",
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
period | Required. The supported periods are: `minute`, `hour`, `day`, `week`, `month`, `quarter`, `year`
from | Required. Start of the period, unix timestamp
to | Required. End of the period, unix timestamp
