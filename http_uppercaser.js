var http = require('http'),
    port = process.argv[2];

var server = http.createServer(function(req, res) {
    req.setEncoding('utf8');
    // We can also pipe the entire request stream to response
    // stream while suitably modifying the stream in between.
    // The code below however, is just for clarity of different
    // events occuring with the server and how they can be used.
    if (req.method === 'POST') {
        req.on('data', function (data) {
            res.write(data.toUpperCase(), 'utf8');
        });
        req.on('end', function() {
            res.end();
        });
    }
});

server.listen(port);
