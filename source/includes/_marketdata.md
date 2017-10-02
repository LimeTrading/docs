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
  "ask": 154.2,
  "ask_size": 3,
  "bid": 154.05,
  "bid_size": 1,
  "last": 154.1,
  "last_size": 10,
  "volume": 14894,
  "date": 1506715200,
  "high": 0,
  "low": 0,
  "open": 0,
  "close": 154.12,
  "week52_high": 164.94,
  "week52_low": 104.08,
  "change": 0.55,
  "change_pc": 0,
  "open_interest": 0
}
```
The query retrieves current realtime quote for the specified symbol.

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
The query returns candles aggregated by specified period. The supported periods are: `minute`, `hour`, `day`, `week`, `month`, `quarter`, `year`. The historical data is not available for options.