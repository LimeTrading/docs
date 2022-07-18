using LimeFinancial.Trading.Api;
using LimeFinancial.Trading.Api.Enums;
using LimeFinancial.Trading.Api.Interfaces;
using Microsoft.Extensions.Logging;

namespace Lime.ApiClient;

internal class Order
{
    public string? Symbol { get; set; }
    public int Quantity { get; set; }
    public long Price { get; set; }
}

internal class Callback : ICallback
{
    private readonly Dictionary<long, Order> _activeOrders;
    private readonly ILogger _logger;

    public Callback(ILogger logger, Dictionary<long, Order>? activeOrders)
    {
        _logger = logger;
        _activeOrders = activeOrders ?? new Dictionary<long, Order>();
    }

    public void OnUSOptionsOrderEcho(long eventId, long orderId, Side side, long price, int quantity,
        PositionEffect positionEffect, string route, USOptionsSymbol symbol)
    {
    }

    public void OnInternalError(string errorMessage, Exception ex)
    {
        _logger.LogError(ex, "Error message: " + errorMessage);
    }

    public void OnHeartBeat(long eventId)
    {
        _logger.LogInformation($"Heartbeat {eventId}");
    }

    public void OnReconnectStart()
    {
        throw new NotImplementedException();
    }

    public void OnReconnectSuccess()
    {
        throw new NotImplementedException();
    }

    public void OnReconnectFail()
    {
        throw new NotImplementedException();
    }

    public void OnConnect()
    {
        _logger.LogInformation("Connected");
    }

    public void OnDisconnect(string reason)
    {
        _logger.LogInformation("Disconnected " + reason);
    }

    public void OnOrderAck(long eventId, long orderId, long limeOrderId, AckOptions options)
    {
        _logger.LogInformation($"Ack received: {eventId}, order id: {orderId}, lime order id: {limeOrderId}");
    }

    public void OnOrderReject(long eventId, long orderId, string reason)
    {
        _logger.LogInformation($"Order rejected: {eventId}, order id: {orderId}, reject reason: {reason}");
        _activeOrders.Remove(orderId);
    }

    public void OnOrderEcho(long eventId, long orderId, Side side, long price, int quantity, string route,
        string symbol)
    {
    }

    public void OnReplaceAck(long eventId, long origOrderId, long orderId, long limeOrderId, AckOptions options)
    {
        _logger.LogInformation($"Replaced: {eventId}, order id: {orderId}");
        _activeOrders.Remove(origOrderId);
    }

    public void OnReplaceReject(long eventId, long origOrderId, long orderId, string reason)
    {
        _logger.LogInformation($"Replace rejected: {eventId}, order id: {orderId}, reject reason: {reason}");
        _activeOrders.Remove(orderId);
    }

    public void OnReplaceEcho(long eventId, long origOrderId, long orderId, long price, int quantity)
    {
    }

    public void OnCancelAck(long eventId, long orderId)
    {
        _logger.LogInformation($"Cancelled: {eventId}, order id: {orderId}");
        _activeOrders.Remove(orderId);
    }

    public void OnPartialCancelAck(long eventId, long orderId, int quantityLeft)
    {
        _logger.LogInformation($"Cancelled partially: {eventId}, order id: {orderId}");
    }

    public void OnCancelReject(long eventId, long orderId, string reason)
    {
        _logger.LogInformation($"Cancel rejected: {eventId}, order id: {orderId}, reason: {reason}");
    }

    public void OnFill(long eventId, long orderId, Side side, int liquidity, long fillPrice, int quantityFilled,
        int quantityLeft, DateTime transactTime, string symbol, FillOptions options)
    {
        _logger.LogInformation(
            $"Shares fill: {eventId}, order id: {orderId}, symbol: {symbol}, quantity filled: {quantityFilled}/{quantityLeft}, fill price {fillPrice}");
        if (quantityLeft == 0) _activeOrders.Remove(orderId);
    }

    public void OnBust(long eventId, long orderId, Side reversedSide, long bustedPrice, int quantityBusted,
        int quantityLeft,
        DateTime transactTime, string symbol, FillOptions options)
    {
        _logger.LogInformation($"Busted: {eventId}, order id: {orderId}, exec id: {options.ExecId}");
    }

    public void OnCorrect(long eventId, long orderId, Side side, long newFillPrice, int newFilledQuantity,
        int quantityLeft,
        DateTime transactTime, string symbol, FillOptions options)
    {
        _logger.LogInformation(
            $"Corrected: {eventId}, order id: {orderId}, exec id: {options.ExecId}, changing to {newFilledQuantity} @{newFillPrice}");
    }

    public void OnUSOptionsFill(long eventId, long orderId, Side side, int liquidity, long fillPrice,
        int quantityFilled,
        int quantityLeft, DateTime transactTime, USOptionsSymbol symbol, FillOptions options)
    {
        _logger.LogInformation(
            $"Options fill: {eventId}, order id: {orderId}, symbol: {symbol.ToString()}, quantity filled: {quantityFilled}/{quantityLeft}, fill price {fillPrice}");
        if (quantityLeft == 0) _activeOrders.Remove(orderId);
    }

    public void OnUSOptionsBust(long eventId, long orderId, Side reversedSide, long bustedPrice, int quantityBusted,
        int quantityLeft, DateTime transactTime, USOptionsSymbol symbol, FillOptions options)
    {
        _logger.LogInformation($"Busted: {eventId}, order id: {orderId}, exec id: {options.ExecId}");
    }

    public void OnUSOptionsCorrect(long eventId, long orderId, Side side, long newFillPrice, int newFilledQuantity,
        int quantityLeft, DateTime transactTime, USOptionsSymbol symbol, FillOptions options)
    {
        _logger.LogInformation(
            $"Corrected: {eventId}, order id: {orderId}, exec id: {options.ExecId}, changing to {newFilledQuantity} @{newFillPrice}");
    }
}