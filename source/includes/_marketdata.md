# Market data

## Get current quote

```shell
curl
    -X GET
    --header 'Accept: application/json'
    --header 'Authorization: Bearer token'
    'https://api.just2trade.com/marketdata/quote?symbol=AAPL'
```

> The above command returns JSON structured like this:

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
<aside class="notice">The stock symbols use Nasdaq CMS convention. Option symbols are encoded as OCC. The date is the unix timestamp.</aside>