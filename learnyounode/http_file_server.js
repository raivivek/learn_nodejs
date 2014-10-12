// Investigate the correct usage of net, and http modules

var http = require('http'),
    fs = require('fs'),
    port = process.argv[2],
    filePath = process.argv[3];

var server = http.createServer(function (req, res) {

    var fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);

});

server.listen(port);
