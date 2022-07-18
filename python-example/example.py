import lime_trading_api as lb
from argparse import ArgumentParser
import time
import sys

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
        print("logged in!")
        self.logged_in = True


    def on_login_failed(self, reason):
        print("Login failed! reason = {}".format(reason))
    
    def on_connection_busy(self) -> None:
        print("Connection Busy!")

    def on_order_accept(self, order_id, lime_order_id, attributes, event_id):
        print("order %d accepted!" % order_id)
        self.accepted_orders[order_id] = attributes
    
    def on_order_fill(self, order_id, fill_info, event_id):
        print("order %d Filled!" % order_id)
        self.filled_orders[order_id] = fill_info

    def on_order_replace(self, order_id, replace_order_id, lime_replace_order_id, attributes, event_id):
        print("order %d Replaced!" % order_id)
        self.replaced_orders[replace_order_id] = (order_id, attributes)
    
    def on_order_cancel(self, order_id, event_id):
        print("order %d Canceled!" % order_id)
        self.canceled_orders[order_id] = order_id
    
    def on_order_reject(self, order_id: int, reason: str, event_id: int) -> None:
        print("order {} Rejected! Reason = {}".format(order_id, reason))
        self.rejected_orders[order_id] = reason
    
    def on_order_cancel_reject(self, order_id, reason, event_id):
        print("order {} Rejected! Reason = {}".format(order_id, reason))
        self.cancel_rejected_orders[order_id] = reason
    
    def on_order_cancel_replace_reject(self, order_id: int, replace_order_id: int, reason: str, event_id: int) -> None:
        print("CR order {} on order id {} Rejected! Reason = {}".format(order_id, replace_order_id, reason))
        self.cancel_replace_rejected_orders[order_id] = (replace_order_id, reason)




def waitForCallback(condition) -> bool:
    timeout = time.time() + 2 # 1 second timeouts
    while True:
        if (time.time() > timeout):
            return False
        if condition():
            return True

if __name__  == "__main__":
    parser = ArgumentParser(description="Python Trading API US Equities Example")
    parser.add_argument("-host", dest="host", required=True, help="Trading Server host name", type=str)
    parser.add_argument("-a", dest="account", required=True, help="Account name", type=str)
    parser.add_argument("-u", dest="user", required=True, help="Username", type=str)
    parser.add_argument("-p", dest="password", required=True, help="Password", type=str)
    args=parser.parse_args()
    host, account, user, password = args.host, args.account, args.user, args.password
    
    symbol = "MSFT" #Orders using this symbol will stay open when using test server
    fill_symbol = "AAPL" #Orders using this symbol will auto fill when using test server
    limit_price = 277.79
    example_quantity = 100
    route = "ARCP"
    order_id = 1
    
    listener = Listener()    
    
    api = lb.TradingApi(listener,
                        account   = account,
                        user      = user,
                        password  = password,
                        event_id  = 0,
                        host_name = host,
                        cancel_all_on_disconnect = True)
    
    if not waitForCallback(lambda : listener.logged_in):
        raise Exception("Api failed to login")
    
    #Regular Limit Order Buy, FILL
    print("\n\nExample 1: Regular Limit Order Buy, FILL \n\n")
    api.place_order(order_id = order_id,
                    symbol = fill_symbol,
                    quantity = example_quantity,
                    price = limit_price,
                    side = lb.Side.Buy,
                    route = route)
    
    if not waitForCallback(lambda : order_id in listener.accepted_orders):
        print("order_id: {} was not accepted!".format(order_id))
        
    if not waitForCallback(lambda : order_id in listener.filled_orders):
        print("order_id: {} was not filled!".format(order_id))
    
    
    print("Order Ack Attributes:")
    print(listener.accepted_orders[order_id])
    print("Order Fill Attributes:")
    print(listener.filled_orders[order_id])
    order_id += 1
    
    #Regular Market order buy, FILL
    print("\n\nExample 2: Regular Market Order Buy, FILL \n\n")
    api.place_order(order_id = order_id,
                    symbol = fill_symbol,
                    quantity = example_quantity,
                    price = lb.MARKET_PRICE,
                    side = lb.Side.Buy,
                    route = route)
    
    if not waitForCallback(lambda : order_id in listener.accepted_orders):
        print("order_id: {} was not accepted!".format(order_id))
        
    if not waitForCallback(lambda : order_id in listener.filled_orders):
        print("order_id: {} was not filled!".format(order_id))
    
    order_id += 1
    
    
    #Regular Limit Order Sell, FILL
    print("\n\nExample 2: Regular Limit Order Sell, FILL \n")
    api.place_order(order_id = order_id,
                    symbol = fill_symbol,
                    quantity = example_quantity,
                    price = limit_price,
                    side = lb.Side.Buy,
                    route = route)
    
    if not waitForCallback(lambda : order_id in listener.accepted_orders):
        print("order_id: {} was not accepted!".format(order_id))
        
    if not waitForCallback(lambda : order_id in listener.filled_orders):
        print("order_id: {} was not filled!".format(order_id))
    
    order_id += 1
    
    
    
    #Regular Limit Order buy, Cancel Replace, Cancel
    print("\n\nExample 3: Regular Limit Order Buy, Cancel Replace, Cancel \n\n")
    #Limit Order buy - Open
    api.place_order(order_id = order_id,
                    symbol = symbol,
                    quantity = example_quantity,
                    price = limit_price,
                    side = lb.Side.Buy,
                    route = route)
    
    if not waitForCallback(lambda : order_id in listener.accepted_orders):
        print("order_id: {} was not accepted!".format(order_id))
        
    order_id += 1
        
    #Cancel replace previous order, change price and quantity
    api.cancel_replace_order(order_id = order_id - 1,
                             replace_order_id=order_id,
                             quantity = 200,
                             price = 300)
    
    
    if not waitForCallback(lambda : order_id in listener.replaced_orders):
        print("order id -> {} did not replace order id {}".format(order_id, order_id-1))
    
    
    #Cancel
    api.cancel_order(order_id = order_id)
    
    if not waitForCallback(lambda : order_id in listener.canceled_orders):
        print("order id {} was not cancelled!".format(order_id))
    
    order_id += 1
    
    #Regular limit, IOC - Cancelled
    props = lb.OrderProperties()
    props.time_in_force = lb.TimeInForce.Ioc
    api.place_order(order_id = order_id,
                    symbol = symbol,
                    quantity = example_quantity,
                    price = limit_price,
                    side = lb.Side.Buy,
                    route = route,
                    properties = props)
    
    if not waitForCallback(lambda : order_id in listener.accepted_orders):
        print("order_id: {} was not accepted!".format(order_id))
        
    
    if not waitForCallback(lambda : order_id in listener.canceled_orders):
        print("order id {} was not cancelled!".format(order_id))
    
    #Not using with statements to create listener and api objects so we close
    listener.close()
    api.close()
    
     
    
    
    
