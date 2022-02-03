# Accounts

## Streaming feed

```shell
wscat
    -H "Authorization: Bearer {token here}" -c wss://api.just2trade.com/accounts
```

> Command examples

```json
{ "action":"subscribeBalance","account":"12345678@vision" }
{ "action":"subscribePositions","account":"12345678@vision" }
{ "action":"subscribeOrders","account":"12345678@vision" }
{ "action":"subscribeTrades","account":"12345678@vision" }

{ "action":"unsubscribeBalance","account":"12345678@vision" }
{ "action":"unsubscribePositions","account":"12345678@vision" }
{ "action":"unsubscribeOrders","account":"12345678@vision" }
{ "action":"unsubscribeTrades","account":"12345678@vision" }
```

> Feed example

```json
{
    "t":"p",
    "data":[{
        "account":"12345678@vision",
        "positions":[
            {"symbol":"AAPL","average_open_price":135.2398,"current_price":174.5800,"quantity":50,"security_type":"common_stock"},
            {"symbol":"AMZN","average_open_price":2815.0761,"current_price":3008.8150,"quantity":2,"security_type":"common_stock"},
            {"symbol":"GOOGL","average_open_price":1422.3236,"current_price":2974.0100,"quantity":3,"security_type":"common_stock"},
            {"symbol":"INTC","average_open_price":50.0000,"current_price":49.1150,"quantity":20,"security_type":"common_stock"},
            {"symbol":"LYFT","average_open_price":76.5289,"current_price":38.6000,"quantity":50,"security_type":"common_stock"}
        ]
    }]
}
{
    "t":"b",
    "data":[{
        "account_number":"12345678@vision",
        "trade_platform":"transaq",
        "margin_type":"marginx2",
        "restriction":"none",
        "account_value_total":27009.0400,
        "cash":419.78,
        "margin_buying_power":27428.83,
        "non_margin_buying_power":13714.41,
        "position_market_value":26589.2550,
        "unsettled_cash":0,
        "cash_to_withdraw":13112.03
    }]
}
```

If authentication is denied the websocket connection is terminated immediately. The client should implement reconnection logic to maintain the opened connection. Subscription command for an account that has already been subscribed is ignored. Same behavior applies to Unsubscribe. Any recognized command will result an Error sent back to the subscriber. The following commands are supported:

parameter | description
---- | ----
action | Required. `subscribeTrades`, `subscribeBalance`, `subscribePositions`, `subscribeOrders`
account | Required. An account number

### Position

The server sends a full list of positions for all subscribed accounts on each update of any field value. Since during market hours the prices keep changing the update is going to be sent on each throttling period

field | description
---- | ----
t | Type `p`
data | An array of structures where `account` is an account number and `positions` is an array of **position** structures
symbol | security symbol
quantity | number of shares or option contracts
average_open_price | average historical cost basis
current_price | current price
security_type | the type of security, the most common values are `common_stock`, `preferred_stock`, `option`

### Balance

The server sends a full list of balance for all subscribed accounts on each update of any field value. Since during market hours the prices keep changing the update is going to be sent on each throttling period

field | description
---- | ----
t | Type `b`
data | An array of structures **balance** structures
account_number | the account number
trade_platform | the trading platform this account is traded on
margin_type | the margin type, possible values are `cash`, `marginx1`, `marginx2`, `daytrader`
restriction | restriction level effective on the account, possible values are `none` - no restrictions, `restricted` - opening transactions are not allowed but closing orders are accepted, `disabled` - no activity is allowed in the account, `closed` - the account is closed
restriction_reason | optional description explaining why the account is restricted
account_value_total | total account liquidation value
cash | account debit balance when negative, credit balance when positive
day_trading_buying_power | day trading buying power for marginable securities
margin_buying_power | the buying power for marginable securities
non_margin_buying_power | the buying power for non-marginable securities
position_market_value | sum of all positions current market values. The value is negative for short positions
unsettled_cash | unsettled cash for cash accounts
cash_to_withdraw | cash available to withdraw from the account

### Error

field | description
---- | ----
t | Type `e`
code | Error code
description | Error description

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
        "unsettled_cash": 0,
        "cash_to_withdraw": 7621.5
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
        "unsettled_cash": 0,
        "cash_to_withdraw": 0
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
cash_to_withdraw | cash available to withdraw from the account

## Get account positions

```shell
curl
    -X GET
    --header 'Authorization: Bearer {token here}'
    'https://api.just2trade.com/accounts/{account_number}/positions?date={date}'
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

Query parameters are:

name | description
---- | ----
account_number | Required. The account number
date | Optional. Date in the format of yyyy-MM-dd. If not specified, the method returns current intraday positions 

Returns an array of the following json structures:

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
    'https://api.just2trade.com/accounts/{account_number}/trades/{date}?limit={limit}&skip={skip}'
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
date | Required. The date yyyy-MM-dd
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

## Transactions journal

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
            "id": "1644455",
            "type": "MONEY:OUT:CHRG",
            "description": "CHRG MANDATORY REORG FEE REF:11111-222222,PUT PROSHARES",
            "date": "2018-06-30",
            "cash": {
                "gross_amount": -30.00,
                "net_amount": -30.00
            }
        },
        {
            "id": "1681283",
            "type": "INSTRUM:IN:EXP",
            "description": "EXP PUT SOLAREDGE TECHS A $25 EXP 06/15/18",
            "date": "2018-06-18",
            "asset": {
                "symbol": "SEDG  180615P00025000",
                "symbol_description": "SEDG Jun 2018 25 Put",
                "quantity": 8,
                "price": 0
            },
            "cash": {
                "gross_amount": 0,
                "net_amount": 0
            },
            "fees": []
        },
        {
            "id": "1681278",
            "type": "INSTRUM:IN:ASG",
            "description": "ASG CALL RUBICON PROJECT INC $2.50 EXP 06/15/18",
            "date": "2018-06-18",
            "asset": {
                "symbol": "RUBI  180615C00002500",
                "symbol_description": "RUBI Jun 2018 2.5 Call",
                "quantity": 20,
                "price": 0
            },
            "cash": {
                "gross_amount": 0,
                "net_amount": 0
            },
            "fees": []
        },
        {
            "id": "1681293",
            "type": "SALE:EXCH:ASG",
            "description": "ASG CALL RUBICON PROJECT INC $2.50 EXP 06/15/18",
            "date": "2018-06-18",
            "asset": {
                "symbol": "RUBI",
                "symbol_description": "THE RUBICON PROJECT Inc",
                "quantity": -2000,
                "price": 2.5
            },
            "cash": {
                "gross_amount": 5000,
                "net_amount": 4980
            },
            "fees": [
                { "name": "Broker fee", "amount": -20 }
            ]
        },
        {
            "id": "1677793",
            "type": "SELL-SHORT:EXCH:STD",
            "description": "Sell to Open 20 'NCMI Dec 2018 7.5 Call' @0.75",
            "date": "2018-06-15",
            "asset": {
                "symbol": "NCMI  181221C00007500",
                "symbol_description": "NCMI Dec 2018 7.5 Call",
                "quantity": -20,
                "price": 0.75
            },
            "cash": {
                "gross_amount": 1500,
                "net_amount": 1486.6845
            },
            "fees": [
                { "name": "Broker fee", "amount": -2.5 },
                { "name": "Broker fee", "amount": -9 },
                { "name": "TAF", "amount": -0.04 },
                { "name": "ORF", "amount": -0.756 },
                { "name": "OCC fee", "amount": -1 },
                { "name": "SEC fee", "amount": -0.0195 }
            ]
        },
    ],
    "count": 237
}
```

Query parameters are:

name | description
---- | ----
account_number | Required. The account number
start_date | Optional. The period start date in the format of yyyy-MM-dd
end_date | Optional, current date by default. The period end date in the format of yyyy-MM-dd
limit | Optional, 10 by default. The number of items to return on one page
skip | Optional, 0 by default. The number of items to skip


Returns an array of trasnactions and a counter of total transactions in the specified time period. Every transaction has the following structure:

name | description
---- | ----
id | internal transaction id. It is globally unique and it is not necessarily sequentually incremented
type | transaction type
description | human-readable transaction description
date | date in the format of yyyy-MM-dd
asset | a structure describing the asset side of the transaction
asset.symbol | symbol
asset.symbol_description | company name for stocks or human-readable name for options
asset.quantity | transaction quantity, can be positive or negative
asset.price | the price for each unit
cash | describes the cash side of the transaction
cash.gross_amount | dollar amount not including fees, can be positive or negative
cash.net_amount | net dollar amount including fees charged for the transaction, can be positive or negative
fees | array of fees charged by the current transaction. Every fee item has a `name` and `amount` properties
