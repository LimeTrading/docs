# Accounts

## Get accounts balances

```shell
curl
    -X GET
    --header 'Authorization: Bearer {token here}'
    'https://api.just2trade.com/accounts'
```

> Response example

```json
[
    {
        "account_number": "12345678@vision",
        "trade_platform": "ETNA",
        "margin_type": "marginx2",
        "restriction": "none",
        "daytrades_count": 0,
        "account_value_total": 9880.6806,
        "cash": 5283.44,
        "day_trading_buying_power": 0,
        "margin_buying_power": 15243,
        "non_margin_buying_power": 7621.5,
        "position_market_value": 4597.2406,
        "unsettled_cash": 0
    },
    {
        "account_number": "11111111@cor",
        "trade_platform": "ETNA",
        "margin_type": "daytrader",
        "restriction": "restricted",
        "restriction_reason": "please fund the account",
        "daytrades_count": 0,
        "account_value_total": 0,
        "cash": 0,
        "day_trading_buying_power": 0,
        "margin_buying_power": 0,
        "non_margin_buying_power": 0,
        "position_market_value": 0,
        "unsettled_cash": 0
    }
]
```

Get balance information for all user accounts as an array of the following json structures:

name | description
---- | ----
account_number | the account number
trade_platform | the trading platform this account is traded on
margin_type | the margin type, possible values are `cash`, `marginx1`, `marginx2`, `daytrader`
restriction | restriction level effective on the account, possible values are `none` - no restrictions, `restricted` - opening transactions are not allowed but closing orders are accepted, `disabled` - no activity is allowed in the account, `closed` - the account is closed
restriction_reason | optional description explaining why the account is restricted
daytrades_count | day trades counter
account_value_total | total account liquidation value
cash | account debit balance when negative, credit balance when positive
day_trading_buying_power | day trading buying power for marginable securities
margin_buying_power | the buying power for marginable securities
non_margin_buying_power | the buying power for non-marginable securities
position_market_value | sum of all positions current market values. The value is negative for short positions
unsettled_cash | unsettled cash for cash accounts

## Get account positions

```shell
curl
    -X GET
    --header 'Authorization: Bearer {token here}'
    'https://api.just2trade.com/accounts/{account_number}/positions'
```

```json
[
    {
        "symbol": "KEYS",
        "quantity": 90,
        "average_open_price": 26.061,
        "current_price": 42.17,
        "security_type": "common_stock"
    },
    {
        "symbol": "GRNH",
        "quantity": 1,
        "average_open_price": 0.0975,
        "current_price": 0.040600000000000004,
        "security_type": "common_stock"
    },
    {
        "symbol": "TWTR",
        "quantity": 13,
        "average_open_price": 17.74043,
        "current_price": 17.38,
        "security_type": "common_stock"
    },
    {
        "symbol": "RAD",
        "quantity": 1,
        "average_open_price": 2.37,
        "current_price": 1.87,
        "security_type": "common_stock"
    }
]
```

Get specified account positions as an array of the following json structures:

name | description
---- | ----
symbol | security symbol
quantity | number of shares or option contracts
average_open_price | average historical cost basis
current_price | current price
security_type | the type of security, the most common values are `common_stock`, `preferred_stock`, `option`

## Get account trades

```shell
curl
    -X GET
    --header 'Authorization: Bearer {token here}'
    'https://api.just2trade.com/accounts/{account_number}/trades/{mode}?limit={limit}&skip={skip}'
```

> Response example

```json
{
    "trades": [
        {
            "symbol": "AAPL",
            "timestamp": 1507735400,
            "quantity": 40,
            "price": 156.6699,
            "amount": 6266.8,
            "side": "buy"
        },
        {
            "symbol": "BAC",
            "timestamp": 1506680904,
            "quantity": -1,
            "price": 25.43,
            "amount": -25.43,
            "side": "sell_short"
        },
        {
            "symbol": "BAC",
            "timestamp": 1506680852,
            "quantity": 1,
            "price": 25.49,
            "amount": 25.49,
            "side": "buy_to_cover"
        }
    ],
    "count": 237
}
```

Get the trades history on the specified account, ordered by descending timestamp. Query parameters are:

name | description
---- | ----
account_number | Required. The account number
mode | Optional. Possible options are `close`, `current` or empty by default. `close` denotes the historical mode to return the trades by the end of the previous trading day, `current` shows the intraday activity, empty combines both
limit | Optional, 10 by default. The number of items to return on one page
skip | Optional, 0 by default. The number of items to skip

### Response

Returns an array of trades and a counter of total trades matching the criteria. Every trade has the following structure:

name | description
---- | ----
symbol | security symbol
timestamp | unix time stamp of the trade
quantity | number of shares or option contracts, negative for sells, positive for buys
price | the trade price
amount | the trade amount, which is the quantity multiplied by the lot size and price,
side | `buy`, `sell`, `sell_short` or `buy_to_cover`

## *Get account holder info - not live yet*

```shell
curl
    -X GET
    --header 'Authorization: Bearer {token here}'
    'https://api.just2trade.com/accounts/{account_number}/holders'
```

> Response example

```json
{
    "account_type": "Joint WROS",
    "account_name": "John Doe and Jane Doe Joint WROS"
    "holders":
    [
        {
            "name": "John Doe",
            "primary": true,
            "address": "One Penn Plaza suite 1614, New York, NY, 10119",
            "phone": "111-22-3333",
            "email_address": "email@email.com"
        },
        {
            "name": "Jane Doe",
            "primary": false,
            "address": "One Penn Plaza suite 1614, New York, NY, 10119",
            "phone": "111-22-3333",
            "email_address": "email@email.com"
        }
    ]
}
```

Returns non-trading account information, including holders contact info

## *Transactions journal - not live yet*

```shell
curl
    -X GET
    --header 'Authorization: Bearer {token here}'
    'https://api.just2trade.com/accounts/{account_number}/transactions?start_date={start_date}&end_date={end_date}&limit={limit}&skip={skip}'
```

> Response example

```json
{
    "transactions":
    [
        {
            "id": "1650655",
            "type": "SELL-SHORT:EXCH:STD",
            "description": "Sell to Open 1 TSLA Jul 2018 145 Put @0.36",
            "date": "2018-05-31",
            "trade":
            {
                "symbol": "TSLA 180720P00145000",
                "symbol_description": "TSLA Jul 2018 145 Put",
                "quantity": 1,
                "price": 0.36
            },
            "gross_amount": 36,
            "net_amount": 34.45,
            "fees":
            [
                { "name": "Broker", "amount": -1.45 },
                { "name": "ORF", "amount": -0.04 },
                { "name": "OCC", "amount": -0.05 },
                { "name": "SEC", "amount": -0.01 }
            ]
        },
        {
            "id": "1644233",
            "type": "INSTRUM:IN:EXP",
            "description": "Option Expired AMD May 2018 8.5 Put",
            "date": "2018-05-29",
            "gross_amount": 0,
            "net_amount": 0
        },
        {
            "id": "1644455",
            "type": "MONEY:OUT:CHRG",
            "description": "CHRG MANDATORY REORG FEE REF:260494-112670 4474721,,PUT PROSHARES",
            "date": "2018-05-29",
            "gross_amount": -30,
            "net_amount": -30
        },
        {
            "id": "1632569",
            "type": "BUY-BTC:EXCH:STD",
            "description": "Buy to Close FB May 2018 137 Put",
            "date": "2018-05-22",
            "trade":
            {
                "symbol": "FB 180525P00137000",
                "symbol_description": "FB May 2018 137 Put",
                "quantity": 1,
                "price": 0.01
            },
            "gross_amount": -1,
            "net_amount": -2.54,
            "fees":
            [
                { "name": "Broker", "amount": -1.45 },
                { "name": "ORF", "amount": -0.04 },
                { "name": "OCC", "amount": -0.05 }
            ]
        }
    ],
    "count": 237
}
```

Returns all account activity. Query parameters are:

name | description
---- | ----
account_number | Required. The account number
start_date | Required. The period start date in the format of yyyy-MM-dd
end_date | Required. The period end date in the format of yyyy-MM-dd
limit | Optional, 10 by default. The number of items to return on one page
skip | Optional, 0 by default. The number of items to skip
