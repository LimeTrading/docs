// See https://aka.ms/new-console-template for more information
/*
 * [v] cancel on disconnect behaviour
 * [v] receiving all messages happened while disconnected - need to pass a non-zero lastEventId
 * [v] maintain active orders list
 * [v] replace success
 * [v] replace reject
 */


using System.Globalization;
using Lime.ApiClient;
using LimeFinancial.Trading.Api;
using LimeFinancial.Trading.Api.Enums;
using LimeFinancial.Trading.Api.Interfaces;
using Microsoft.Extensions.Logging;

ILoggerFactory factory = LoggerFactory.Create(builder =>
    builder.AddSimpleConsole(options =>
    {
        options.IncludeScopes = true;
        options.SingleLine = true;
        options.TimestampFormat = "hh:mm:ss.ffffff";
    }).SetMinimumLevel(LogLevel.Trace));
var logger = factory.CreateLogger<Client>();

var activeOrders = new Dictionary<long, Order>();
var callback = new Callback(logger, activeOrders);

IClient client = new Client(callback, Config.Host, Config.Port, Config.Account, Config.UserName, Config.Password, logger);
await client.ConnectAsync(0, false, false, CancellationToken.None);

PrintHelp();

while (true)
{
    var cmd = Console.ReadLine();
    if (String.IsNullOrWhiteSpace(cmd)) continue;

    var key = cmd[0];
    if (key.ToString() == "q")
        break;

    switch(key.ToString())
    {
        case "h":
            PrintHelp();
            break;
        case "s":
            PrintStats();
            break;
        case "1":
        {
            var orderId = GenerateOrderId();
            activeOrders[orderId] = new Order { Price = 400000, Quantity = 50, Symbol = "PAR" };
            await client.PlaceAsync(orderId, 50, 400000, Side.Buy, "PAR", "ARCP");
            break;
        }
        case "11":
        {
            var orderId = GenerateOrderId();
            activeOrders[orderId] = new Order { Price = 400000, Quantity = 50, Symbol = "PAR" };
            await client.PlaceUSOptionsAsync(orderId, 50, 400000, Side.Buy, PositionEffect.Open, USOptionsSymbol.Call("PAR", DateTime.Now.AddDays(1), 170000), "ARCP");
            break;
        }
        case "2":
        {
            var orderId = GenerateOrderId();
            activeOrders[orderId] = new Order { Quantity = 50, Symbol = "AA" };
            await client.PlaceAsync(orderId, 60, 0, Side.Buy, "AA", "ARCP");
            break;
        }

        case "3":
        {
            var orderId = GenerateOrderId();
            activeOrders[orderId] = new Order { Price = 400000, Quantity = 50, Symbol = "BAC" };
            await client.PlaceAsync(orderId, 50, 400000, Side.Buy, "BAC", "ARCP");
            break;
        }
        case "4":
        {
            var orderId = GenerateOrderId();
            await Task.Delay(1);
            activeOrders[orderId] = new Order { Price = 400000, Quantity = 50, Symbol = "BUST" };
            await client.PlaceAsync(orderId, 50, 400000, Side.Buy, "BUST", "ARCP");
            
            var orderIdP = GenerateOrderId();
            await Task.Delay(1);
            activeOrders[orderIdP] = new Order { Price = 10000, Quantity = 50, Symbol = "CORRECTP" };
            await client.PlaceAsync(orderIdP, 50, 10000, Side.Buy, "CORRECTP", "ARCP");
            
            var orderIdQ = GenerateOrderId();
            activeOrders[orderIdQ] = new Order { Price = 400000, Quantity = 50, Symbol = "CORRECTQ" };
            await client.PlaceAsync(orderIdQ, 50, 400000, Side.Buy, "CORRECTQ", "ARCP");
            break;
        }
        case "44":
        {
            var orderId = GenerateOrderId();
            await Task.Delay(1);
            activeOrders[orderId] = new Order { Price = 400000, Quantity = 50, Symbol = "BUST" };
            await client.PlaceUSOptionsAsync(orderId, 50, 400000, Side.Buy, PositionEffect.Open, USOptionsSymbol.Call("BUST", DateTime.Today.AddDays(1), 160000),  "ARCP");

            var orderIdP = GenerateOrderId();
            await Task.Delay(1);
            activeOrders[orderIdP] = new Order { Price = 400000, Quantity = 50, Symbol = "CORRECTP" };
            await client.PlaceUSOptionsAsync(orderIdP, 50, 400000, Side.Buy, PositionEffect.Open, USOptionsSymbol.Call("CORRECTP", DateTime.Today.AddDays(1), 160000), "ARCP");
            
            var orderIdQ = GenerateOrderId();
            activeOrders[orderIdQ] = new Order { Price = 400000, Quantity = 50, Symbol = "CORRECTQ" };
            await client.PlaceUSOptionsAsync(orderIdQ, 50, 400000, Side.Buy, PositionEffect.Open, USOptionsSymbol.Call("CORRECTQ", DateTime.Today.AddDays(1), 160000), "ARCP");
            break;
        }
        case "8":
        {
            var arr = cmd.Split(' ');
            if (arr.Length <= 1) break;
            if (!long.TryParse(arr[1], out long id)) break;
            if (activeOrders.ContainsKey(id))
            {
                var orderId = GenerateOrderId();
                activeOrders[orderId] = new Order { Price = activeOrders[id].Price - 100, Quantity = activeOrders[id].Quantity, Symbol = activeOrders[id].Symbol };
                await client.ReplaceAsync(id, orderId, activeOrders[id].Quantity, activeOrders[id].Price - 100);
            }
            break;
        }
        case "9":
        {
            var arr = cmd.Split(' ');
            if (arr.Length > 1)
            {
                if (long.TryParse(arr[1], out long id))
                {
                    await client.CancelAsync(id);
                }
            }
            break;
        }
        case "0":
            await client.CancelAllAsync();
            break;
    }
};

await client.DisconnectAsync(CancellationToken.None);

long GenerateOrderId()
{
    return (long)(DateTime.Now - new DateTime(1970, 1, 1)).TotalMilliseconds;
}

void PrintHelp()
{
    Console.WriteLine("Press q to stop");
    Console.WriteLine("Press h to print this help");
    Console.WriteLine("Press s to print client status");
    Console.WriteLine("Press 1 to send 50 shares of PAR (automatic partial fill), press 11 to send 50 option contracts of PAR (automatic partial fill)");
    Console.WriteLine("Press 2 to send 60 shares of AA (automatic full fill)");
    Console.WriteLine("Press 3 to send 50 shares of BAC (no fill)");
    Console.WriteLine("Press 4 to send 50 shares of BUST, 50 shares of CORRECTP and 50 shares of CORRECTQ");
    Console.WriteLine("Press 44 to send options of BUST, CORRECTP and CORRECTQ");
    Console.WriteLine("Press 8 [order id] to replace specified order reducing price by 0.01");
    Console.WriteLine("Press 9 [order id] to cancel specified order");
    Console.WriteLine("Press 0 to cancel all open orders");
}

void PrintStats()
{
    Console.WriteLine($"Session status: {client.IsConnected}, last known event id: {client.LastEventId}");
}