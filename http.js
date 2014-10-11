var http = require('http'),
    url = process.argv[2];

// Don't need proxy settings since localhost address is used.
//var options = {
    //host: "https://10.3.100.207",
    //port: 8080,
    //path: url,
    //headers: {
        //Host: url
    //}
//};

http.get(url, function (response) {
    response.setEncoding('utf8');
    response.on('data', function (data) {
        console.log(data);
    });
    response.on('error', console.error);
});
