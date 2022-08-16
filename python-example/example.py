import lime_trading_api as lb
from argparse import ArgumentParser
import time
import sys
from decimal import *
from colorama import init, Fore

#Example usage: python3 example.py -host <hostname> -a <account> -u <user> -p <password>
class Listener(lb.Listener):
    def __init__(self):
        lb.Listener.__init__(self)
        self.logged_in = False
        self.accepted_orders = {}
        self.filled_orders = {}
        self.replaced_orders = {}
        self.canceled_orders = {}
        self.rejected_orders = {}
        self.cancel_rejected_orders = {}
        self.cancel_replace_rejected_orders = {}

    def on_login_accepted(self, event_id):
        self.logged_in = True

    def on_login_failed(self, reason):
        print(f"{Fore.RED} [ERROR]{Fore.RESET} Login failed! Reason = {reason}")
    
    def on_connection_busy(self) -> None:
        print(f"{Fore.RED} [ERROR]{Fore.RESET} Connection busy!")

    def on_order_accept(self, order_id, lime_order_id, attributes, event_id):
        # print("Order %d accepted!" % order_id)
        self.accepted_orders[order_id] = attributes
        # print(f"AckAttr structure for order {order_id}:", end="\033[K\n");
        # print(str(attributes), end="\033[K\n")
    
    def on_order_fill(self, order_id, fill_info, event_id):
        # print("Order %d Filled!" % order_id)
        self.filled_orders[order_id] = fill_info
        # print(f"FillInfo structure for order {order_id}:", end="\033[K\n");
        # print(str(fill_info), end="\033[K\n")

    def on_order_replace(self, order_id, replace_order_id, lime_replace_order_id, attributes, event_id):
        # print("Order %d Replaced!" % order_id)
        self.replaced_orders[replace_order_id] = (order_id, attributes)
    
    def on_order_cancel(self, order_id, event_id):
        # print("Order %d Canceled!" % order_id)
        self.canceled_orders[order_id] = order_id
    
    def on_order_reject(self, order_id: int, reason: str, event_id: int) -> None:
        print("Order {} Rejected! Reason = {}".format(order_id, reason))
        self.rejected_orders[order_id] = reason
    
    def on_order_cancel_reject(self, order_id, reason, event_id):
        # print("Order {} Rejected! Reason = {}".format(order_id, reason))
        self.cancel_rejected_orders[order_id] = reason
    
    def on_order_cancel_replace_reject(self, order_id: int, replace_order_id: int, reason: str, event_id: int) -> None:
        print("CR order {} on order id {} Rejected! Reason = {}".format(order_id, replace_order_id, reason))
        self.cancel_replace_rejected_orders[order_id] = (replace_order_id, reason)

def waitForCallback(condition) -> bool:
    timeout = time.time() + 5 # 5 second timeouts
    while True:
        if (time.time() > timeout):
            return False
        if condition():
            return True

def printStart(message):
    # the escape sequence magic clears the rest of the line and returns carriage
    print(f"         {message}...", end="\033[K\r", flush=True)

def printSuccess(message):
    # the escape sequence magic clears the rest of the line and starts new line
    print(f"{Fore.GREEN} [PASS] {Fore.RESET} {message}", end="\033[K\n")

def printError(message):
    # the escape sequence magic clears the rest of the line and starts new line
    print(f"{Fore.RED} [ERROR]{Fore.RESET} {message}", end="\033[K\n")


def testBuyLimitAndFullFill(api: lb.TradingApi, order_id) -> bool:
    """
    Buy limit order and receive full fill
    """

    printStart("BuyToCover limit order and receive full fill")
    api.place_order(order_id = order_id, symbol = "AAPL", quantity = 100, price = Decimal('153.21'), side = lb.Side.BuyToCover, route = "ARCP")

    if not waitForCallback(lambda : order_id in listener.accepted_orders):
        printError(f"Order id {order_id} was not accepted!")
        return False

    if not waitForCallback(lambda : order_id in listener.filled_orders):
        printError(f"Order id {order_id} was not filled!")
        return False

    printSuccess(f"Buy limit order and receive full fill")

    # print(f"FillInfo structure for order {order_id}:", end="\033[K\n");
    # print(str(listener.filled_orders[order_id]), end="\033[K\n")

    return True

def testBuyMarketAndFullFill(api: lb.TradingApi, order_id) -> bool:
    """
    Buy market order and receive full fill
    """

    printStart("Buy market order and receive full fill")
    api.place_order(order_id = order_id, symbol = "AAPL", quantity = 100, price = lb.MARKET_PRICE, side = lb.Side.Buy, route = "ARCP")

    if not waitForCallback(lambda : order_id in listener.accepted_orders):
        printError(f"Order id {order_id} was not accepted!")
        return False

    if not waitForCallback(lambda : order_id in listener.filled_orders):
        printError(f"Order id {order_id} was not filled!")
        return False

    printSuccess(f"Buy market order and receive full fill")
    return True

def testSellLimitAndFullFill(api: lb.TradingApi, order_id) -> bool:
    """
    Sell limit order and receive full fill
    """

    printStart("Sell limit order and receive full fill")
    api.place_order(order_id = order_id, symbol = "AAPL", quantity = 100, price = Decimal('153.21'), side = lb.Side.Sell, route = "ARCP")

    if not waitForCallback(lambda : order_id in listener.accepted_orders):
        printError(f"Order id {order_id} was not accepted!")
        return False

    if not waitForCallback(lambda : order_id in listener.filled_orders):
        printError(f"Order id {order_id} was not filled!")
        return False

    printSuccess(f"Sell limit order and receive full fill")
    return True

def testSellMarketAndFullFill(api: lb.TradingApi, order_id) -> bool:
    """
    Sell market order and receive full fill
    """

    printStart("Sell market order and receive full fill")
    api.place_order(order_id = order_id, symbol = "AAPL", quantity = 100, price = lb.MARKET_PRICE, side = lb.Side.Sell, route = "ARCP")

    if not waitForCallback(lambda : order_id in listener.accepted_orders):
        printError(f"Order id {order_id} was not accepted!")
        return False

    if not waitForCallback(lambda : order_id in listener.filled_orders):
        printError(f"Order id {order_id} was not filled!")
        return False

    printSuccess(f"Sell market order and receive full fill")
    return True

def testBuyReplaceCancel(api: lb.TradingApi, order_id, replace_order_id) -> bool:
    """
    Buy, replace and cancel an order
    """

    printStart("Sending buy limit")
    api.place_order(order_id = order_id, symbol = "MSFT", quantity = 100, price = 240, side = lb.Side.Buy, route = "ARCP")
    if not waitForCallback(lambda : order_id in listener.accepted_orders):
        printError(f"Order id {order_id} was not accepted!")
        return False
        
    printStart("Replacing quantity and price")
    api.cancel_replace_order(order_id, replace_order_id, quantity = 200, price = 240)
    if not waitForCallback(lambda : replace_order_id in listener.replaced_orders):
        printError(f"Order id {replace_order_id} did not replace order id {order_id}")
        return False
    
    printStart("Cancelling")
    api.cancel_order(replace_order_id)
    if not waitForCallback(lambda : replace_order_id in listener.canceled_orders):
        printError(f"Order id {replace_order_id} was not cancelled!")
        return False

    printSuccess("Buy, replace and cancel an order")

    # print(f"AckAttr structure for order {order_id}:", end="\033[K\n")
    # print(str(listener.accepted_orders[order_id]), end="\033[K\n")

    # print(f"AckAttr structure for order {replace_order_id}:", end="\033[K\n")
    # print(str(listener.replaced_orders[replace_order_id]), end="\033[K\n")

    # print(f"AckAttr structure for order {replace_order_id}:", end="\033[K\n")
    # print(str(listener.canceled_orders[replace_order_id]), end="\033[K\n")

    return True

def testBuyMarketPartialFillAndCancel(api: lb.TradingApi, order_id) -> bool:
    """
    Buy at market, receive partial fill and cancel the rest
    """

    printStart("Buy market order")
    api.place_order(order_id = order_id, symbol = "PAR", quantity = 1000, price = lb.MARKET_PRICE, side = lb.Side.Buy, route = "ARCP")

    if not waitForCallback(lambda : order_id in listener.accepted_orders):
        printError(f"Order id {order_id} was not accepted!")
        return False

    if not waitForCallback(lambda : order_id in listener.filled_orders):
        printError(f"Order id {order_id} was not filled!")
        return False

    printStart("Cancelling")
    api.cancel_order(order_id)
    if not waitForCallback(lambda : order_id in listener.canceled_orders):
        printError(f"Order id {order_id} was not cancelled!")
        return False

    printSuccess(f"Buy at market, receive partial fill and cancel the rest")
    return True

def testAlgoOrder(api: lb.TradingApi, order_id) -> bool:
    """
   Send algo order
    """

    printStart("Buy and route to algo")
    api.place_algo_order(order_id = order_id, symbol = "CURV", quantity = 1, price = Decimal('6.31'), side = lb.Side.Buy, route = "LARE", strategy = "LSR")

    if not waitForCallback(lambda : order_id in listener.accepted_orders):
        printError(f"Order id {order_id} was not accepted!")
        return False

    printSuccess(f"Buy and route to algo")
    return True

def testCancelAll(api: lb.TradingApi) -> bool:
    printStart(f"Cancelling all open orders")
    if api.cancel_all_open_orders() != api.CallStatus.Success:
        printSuccess(f"Cancel all open orders call failed")
        return False

    if not waitForCallback(lambda : len(listener.filled_orders) + len(listener.canceled_orders) >= len(listener.accepted_orders)):
        printError(f"Some orders left open")
        return False

    printSuccess(f"Cancelling all open orders")
    return True


if __name__  == "__main__":
    init()

    parser = ArgumentParser(description="Python trading API example")
    parser.add_argument("-host", dest="host", required=True, help="Trading Server host name", type=str)
    parser.add_argument("-a", dest="account", required=True, help="Account name", type=str)
    parser.add_argument("-u", dest="user", required=True, help="Username", type=str)
    parser.add_argument("-p", dest="password", required=True, help="Password", type=str)
    args = parser.parse_args()
    host, account, user, password = args.host, args.account, args.user, args.password

    # Successful login process
    printStart("Logging in")
    listener = Listener()
    api = lb.TradingApi(listener, account, user, password, 0, host, True)
    
    if not waitForCallback(lambda : listener.logged_in):
        printError("Login failed")
        raise Exception("Login failed")
    else:
        printSuccess("Logged in")

    testBuyLimitAndFullFill(api, 0)
    testBuyMarketAndFullFill(api, 1)
    testSellLimitAndFullFill(api, 2)
    testSellMarketAndFullFill(api, 3)
    testBuyReplaceCancel(api, 4, 5)
    testBuyMarketPartialFillAndCancel(api, 6)
    testAlgoOrder(api, 7)
    testCancelAll(api)
    
    # Close connections
    listener.close()
    api.close()
    
