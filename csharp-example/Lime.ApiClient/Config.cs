namespace Lime.ApiClient;

/*
        Primary IP: 10.200.128.122
        Port:7001
        SendercompID: ETSTEST1-EQT (use as Account)
        TargetcompID: LIME
        Username: ETSTEST1
        Password: testing

        Primary IP: 74.120.50.27
        Port:7001
        SendercompID: ETSTEST2_OPT-EQT (use as Account)
        TargetcompID: LIME
        Username: ETSTEST2
        no password

        • Orders with a symbol that has the letters “AA” in them will be automatically filled.
        • Orders with a symbol not starting with the letters “AA” will remain open and you would be able to cancel replace if you like.
        • Orders with a symbol that has the letters “BUST” in them will be automatically filled and then the fill will be automatically busted.
        • Orders with a symbol that has the letters “CORRECTP” in them will be automatically filled and then corrected with the price of the fill being corrected to +0.01 of the fill price.
        • Orders with a symbol that has the letters “CORRECTQ” in them will be automatically filled and then corrected with the size of the fill being corrected to -10 of the fill size.
        • Orders with a symbol that has the letters “PAR” in them will be partially filled. One fill, the rest stays open.
        • Max quantity of an order is 50 shares, if an order is greater than that the order is rejected.
 * 
    */

internal static class Config
{
    public static string Host => "10.200.128.122";
    //public static string Host => "74.120.50.27"; //ts3-test4-jc
    public static int Port => 7001;
    public static string Account => "ETSTEST1-EQT";
    //public static string Account => "ETSTEST2_OPT-EQT";
    public static string UserName => "ETSTEST1";
    //public static string UserName => "ETSTEST2";
    public static string Password => "testing";
    //public static string Password => "";
}