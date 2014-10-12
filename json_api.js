var http = require('http'),
    path = require('path'),
    port = process.argv[2];

var server = http.createServer(function (req, res) {
    if (req.method === 'GET') {
        var queryParams = require('url').parse(req.url, true);
        var timeReceived = new Date(queryParams.query.iso);
        //
        // Use simple regex here
        if (path.basename(queryParams.pathname) === 'parsetime') {
            var parsedResponse = {
                "hour": timeReceived.getHours(),
                "minute": timeReceived.getMinutes(),
                "second": timeReceived.getSeconds()
            }
        }
        else {
            var parsedResponse = {
                "unixtime": timeReceived.getTime()
            }
        }

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(parsedResponse));
        res.end();
    }
    else {
        console.error("Server responds only to GET requests.")
    }
});

server.listen(port);
