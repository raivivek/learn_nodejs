var http = require('http'),
    bl = require('bl');
    urls = process.argv.slice(2);

var finalString = [];

var count = 0;
for (var i = 0; i < urls.length; ++i) {
    // Just got bit by closures, which made me go through the concepts of
    // closures, and anonymous functions.
    (function(i) {
        http.get(urls[i], function (response) {
            response.pipe(bl(function (err, data) {
                if (err)
                    return console.error(err);

                finalString[i] = data.toString();
                count++;
                if (count == 3) {
                    printResults();
                }
            }));
        });
    })(i);
}

function printResults () {
    for (var i = 0; i < urls.length; ++i) {
        console.log(finalString[i]);
    }
}
