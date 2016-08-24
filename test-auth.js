// test-auth.js - Code downloaded from http://pastebin.com/bqjgf6ZR
// Just run "$node test-auth" from root app folder.

// Require WebSocket module
var WebSocket = require("ws");

// Open WebSocket with BlinkTrade Testnet
var ws = new WebSocket("wss://api.testnet.blinktrade.com/trade/");

// TestReqID for Heartbeat (MsgType: "1") message
var testReqID;
// Heartbeat interval (25s)
var heartbeatInterval = 25000;

// UserReqID for Login (MsgType: "BE") message
var userReqID;


ws.on("open", function() {
    console.log("WebSocket BlinkTrade Connection OPEN")

    // Login as soon as it open WebSocket
    userReqID = "Login_"+parseInt(Math.random()*10000);

    var msg = {
        MsgType:   "BE",
        UserReqID: userReqID,

        // BrokerID = 5 for Testnet
        BrokerID:  5,
        
        // API Key
        Username: "mQb4YVDFWjdLZ835DeFuNdslZD2AG5LE64z6DnCDwxU",
        
        // API Secret
        Password: "RMnUyfzFDwBrOm7",
        
        UserReqTyp: "1",
        /**
         * A browser/app fingerprint is required
         * I just put anything here for testing
         */ 
        FingerPrint: "b959a35c7f3f5e9315c99b5a25c2bbda"
    }

    console.log("Trying to login...")
    ws.send(JSON.stringify(msg));
});

ws.on("close", function() {
    console.log("WebSocket BlinkTrade Connection CLOSE")
});

ws.on("error", function(e) {
    console.log("WebSocket BlinkTrade Connection ERROR");
});

ws.on("message", function(data) {

    /**
     * Send a Heartbeat message
     */
    function heartbeat() {
        testReqID = "Heartbeat_"+parseInt(Math.random()*10000);

        var msg = {
            MsgType: "1",
            TestReqID: testReqID,
            SendTime: (new Date()).getTime()
        };

        console.log("Sending heartbeat..." + testReqID)
        ws.send(JSON.stringify(msg));
    }

    // Check if response data is a string
    if (typeof data !== "string")
        return;

    // Parse data received
    var body = JSON.parse(data);

    // Take action based on MsgType
    switch (body.MsgType) {

        // Login response
        case "BF":

            // Set heartbeat every 25s
            if (body.UserReqID == userReqID) {
                console.log("Logged in!")
                heartbeat();
                setInterval(heartbeat, heartbeatInterval)
            }
            break;

        // Heartbeat response
        case "0":

            if (body.TestReqID == testReqID) {
                console.log("Heartbeat "+testReqID+" answer received! "+ (new Date));
            }
            break;

        default:
            break;
    }

});