var PORT = 6024;

var dgram = require('dgram');
var client = dgram.createSocket('udp4');

client.on('listening', function () {
    var address = client.address();
    console.log('UDP Server listening on ' + address.address + ":" + address.port);
    client.setBroadcast(true);

});

client.on('message', function (message, remote) {
    console.log(remote.address + ':' + remote.port +' - ' + message);

});

client.bind(PORT);