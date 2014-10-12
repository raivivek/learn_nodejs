var net = require('net'),
    strftime_IT = require('strftime'),
    port = process.argv[2];

var server = net.createServer(function (socket) {
    var date = strftime_IT('%Y-%m-%d %H:%M\n');
    socket.write(date);
    socket.end();
});

server.listen(port);
