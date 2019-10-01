var PORT = 49999;
var BROADCAST_ADDR = "192.168.1.255";
var dgram = require('dgram'); 
var server = dgram.createSocket("udp4"); 

server.bind(function() {
    server.setBroadcast(true);
    setInterval(broadcastNew, 6024);
});

function broadcastNew() {
    var message = new Buffer("&Routine=4&SSID=Intelliconn Booth&Password=incontrol16");
    server.send(message, 0, message.length, PORT, BROADCAST_ADDR, function() {
        console.log("Sent '" + message + "'");
    });
}