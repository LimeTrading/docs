/*
 * This Java source file was generated by the Gradle 'init' task.
 */
package client;

import java.util.Scanner;

import org.apache.commons.cli.*;

import limebrokerage.trading.api.Client;
import limebrokerage.trading.api.PositionEffect;
import limebrokerage.trading.api.Side;
import limebrokerage.trading.api.Client.NotConnectedException;

public class App {
    private static void printHelp() {
        System.out.println("Help:");
        System.out.println("--------------");
        System.out.println("place: place a new order");
        System.out.println("place us option: place a new us option");
        System.out.println("place algo: place a new algo order");
        System.out.println("place us options algo: place a new us options algo order");
        System.out.println("replace: replace existing order");
        System.out.println("replace us options: replace existing us option");
        System.out.println("replace algo: replace existing algo order");
        System.out.println("replace us options algo: replace existing us option algo order");
        System.out.println("cancel: cancel an order");
        System.out.println("partial cancel: partially cancel an order");
        System.out.println("cancel all: cancel all orders for this account");
    }

    private static Scanner keyboard = new Scanner(System.in);

    private static String prompt(String msg, String type) {
        System.out.printf("%s [%s] >>> ", msg, type);
        return keyboard.nextLine();
    }

    public static void main(String[] args) {
        Options opts = new Options();

        Option host = new Option("H", "host", true, "host ip");
        host.setRequired(true);
        opts.addOption(host);

        Option port = new Option("P", "port", true, "port to connect to");
        port.setRequired(true);
        opts.addOption(port);

        Option account = new Option("a", "account", true, "account to login with");
        account.setRequired(true);
        opts.addOption(account);

        Option username = new Option("u", "username", true, "username");
        username.setRequired(true);
        opts.addOption(username);

        Option password = new Option("p", "password", true, "password");
        password.setRequired(true);
        opts.addOption(password);

        HelpFormatter formatter = new HelpFormatter();
        CommandLine cmd = null;//not a good practice, it serves it purpose

        try {
            CommandLineParser parser = new DefaultParser();
            cmd = parser.parse(opts, args);
        } catch (org.apache.commons.cli.ParseException e) {
            // System.out.println(e.getMessage());
            formatter.printHelp("example", opts);
            System.exit(1);
            return;
        }


        MyCallback callback = new MyCallback();
        // Initalize client using command line arguments
        // https://docs.lime.co/Java/index.html
        Client c = new Client(callback,
                              cmd.getOptionValue("host"),
                              Integer.parseInt(cmd.getOptionValue("port")),
                              cmd.getOptionValue("account"),
                              cmd.getOptionValue("username"),
                              cmd.getOptionValue("password"),
                              0,
                              true
                             );
        System.out.println("Client ready, press enter to continue");
        keyboard.nextLine();

        while (true) {
            String command = prompt("Command", "");

            try {
                switch (command) {
                    case "place" -> {
                        Long orderId = Long.parseLong(prompt("Order ID", "number"));
                        int quantity = Integer.parseInt(prompt("Quantity", "number"));
                        Long price = Long.parseLong(prompt("Price", "number"));
                        Side side = Side.valueOf(prompt("Side", "string").toUpperCase());
                        String symbol = prompt("Symbol", "string");
                        String route = prompt("Route", "string");

                        // https://docs.lime.co/Java/limebrokerage/trading/api/Client.html#place
                        c.place(orderId, quantity, price, side, symbol, route);
                        System.out.println("Order placed");
                    }

                    case "place us option" -> {
                        Long orderId = Long.parseLong(prompt("Order ID", "number"));
                        int quantity = Integer.parseInt(prompt("Quantity", "number"));
                        Long price = Long.parseLong(prompt("Price", "number"));
                        Side side = Side.valueOf(prompt("Side", "string").toUpperCase());
                        PositionEffect effect = PositionEffect.valueOf(prompt("Position effect", "string").toUpperCase());
                        String route = prompt("Route", "string");

                        // https://docs.lime.co/Java/limebrokerage/trading/api/Client.html#placeUSOptions
                        c.placeUSOptions(orderId, quantity, price, side, effect, null, route);
                        System.out.println("Us option placed");
                    }
                    case "place algo" -> {
                        Long orderId = Long.parseLong(prompt("Order ID", "number"));
                        int quantity = Integer.parseInt(prompt("Quantity", "number"));
                        Long price = Long.parseLong(prompt("Price", "number"));
                        Side side = Side.valueOf(prompt("Side", "string").toUpperCase());
                        String symbol = prompt("Symbol", "string");
                        String route = prompt("Route", "string");
                        String stragety = prompt("Strategy", "string");

                        // https://docs.lime.co/Java/limebrokerage/trading/api/Client.html#placeAlgo
                        c.placeAlgo(orderId, quantity, price, side, symbol, route, stragety);
                        System.out.println("Algo order placed");
                    }
                    case "place us options algo" -> {
                        Long orderId = Long.parseLong(prompt("Order ID", "number"));
                        int quantity = Integer.parseInt(prompt("Quantity", "number"));
                        Long price = Long.parseLong(prompt("Price", "number"));
                        Side side = Side.valueOf(prompt("Side", "string").toUpperCase());
                        PositionEffect effect = PositionEffect.valueOf(prompt("Position effect", "string").toUpperCase());
                        String route = prompt("Route", "string");
                        String stragety = prompt("Strategy", "string");

                        // https://docs.lime.co/Java/limebrokerage/trading/api/Client.html#placeUSOptionsAlgo
                        c.placeUSOptionsAlgo(orderId, quantity, price, side, effect, null, route, stragety);
                        System.out.println("Us option algo order placed");
                    }
                    case "replace" -> {
                        Long originalOrderId = Long.parseLong(prompt("Original order ID", "number"));
                        Long orderId = Long.parseLong(prompt("New order ID", "number"));
                        int newQuantity = Integer.parseInt(prompt("New quantity", "number"));
                        int newPrice = Integer.parseInt(prompt("New price", "number"));

                        // https://docs.lime.co/Java/limebrokerage/trading/api/Client.html#replace
                        c.replace(originalOrderId, orderId, newQuantity, newPrice);
                        System.out.println("Order replaced");
                    }
                    case "replace us options" -> {
                        Long originalOrderId = Long.parseLong(prompt("Original order ID", "number"));
                        Long orderId = Long.parseLong(prompt("New order ID", "number"));
                        int newQuantity = Integer.parseInt(prompt("New quantity", "number"));
                        int newPrice = Integer.parseInt(prompt("New price", "number"));

                        // https://docs.lime.co/Java/limebrokerage/trading/api/Client.html#replaceUSOptions
                        c.replaceUSOptions(originalOrderId, orderId, newQuantity, newPrice);
                        System.out.println("Us option replaced");
                    }
                    case "replace algo" -> {
                        Long originalOrderId = Long.parseLong(prompt("Original order ID", "number"));
                        Long orderId = Long.parseLong(prompt("New order ID", "number"));
                        int newQuantity = Integer.parseInt(prompt("New quantity", "number"));
                        int newPrice = Integer.parseInt(prompt("New price", "number"));

                        // https://docs.lime.co/Java/limebrokerage/trading/api/Client.html#replaceAlgo
                        c.replaceAlgo(originalOrderId, orderId, newQuantity, newPrice);
                        System.out.println("Algo replaced");
                    }
                    case "replace us options algo" -> {
                        Long originalOrderId = Long.parseLong(prompt("Original order ID", "number"));
                        Long orderId = Long.parseLong(prompt("New order ID", "number"));
                        int newQuantity = Integer.parseInt(prompt("New quantity", "number"));
                        int newPrice = Integer.parseInt(prompt("New price", "number"));

                        // https://docs.lime.co/Java/limebrokerage/trading/api/Client.html#replaceUSOptionsAlgo
                        c.replaceUSOptionsAlgo(originalOrderId, orderId, newQuantity, newPrice);
                        System.out.println("Us option algo replaced");
                    }
                    case "cancel" -> {
                        Long orderId = Long.parseLong(prompt("New order ID", "number"));

                        // https://docs.lime.co/Java/limebrokerage/trading/api/Client.html#cancel(long)
                        c.cancel(orderId);
                        System.out.println("Order cancelled");
                    }
                    case "partial cancel" -> {
                        Long orderId = Long.parseLong(prompt("New order ID", "number"));
                        int quantityLeft = Integer.parseInt(prompt("Quantity left", "number"));

                        // https://docs.lime.co/Java/limebrokerage/trading/api/Client.html#partialCancel(long,%20int)
                        c.partialCancel(orderId, quantityLeft);
                        System.out.println("Order cancelled");
                    }
                    case "cancel all" -> {
                        // https://docs.lime.co/Java/limebrokerage/trading/api/Client.html#cancelAll()
                        c.cancelAll();
                        System.out.println("All orders cancelled for this account");
                    }
                    default -> {
                        System.out.println("Command not found");
                        printHelp();
                    }
                }
            } catch(NotConnectedException e) {
                e.printStackTrace();
                System.exit(1);
            }
        }
    }
}