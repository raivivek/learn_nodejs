var http = require('http'),
    url = process.argv[2];

http.get(url, function (response) {
    var stream = '';
    response.setEncoding('utf8');
    response.on('data', function (data) {
        stream += data;
    });

    response.on('end', function (err) {
        if (err) {
            return console.error
        }
        console.log(stream.length);
        console.log(stream);
    });
})
