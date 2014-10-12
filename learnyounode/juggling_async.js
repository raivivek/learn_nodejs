var http = require('http'),
    bl = require('bl');
    urls = process.argv.slice(2);

var finalString = [];

var count = 0;
for (var i = 0; i < urls.length; ++i) {
    // Just got bit by closures, which made me go through the concepts of
    // closures, and anonymous functions.
    // What happens is that when the code below is not contained in an
    // anonymous function, and fired immedietly, a closure is created - Which
    // means that the local variables available to the callback function (like
    // `var i`) are _saved_. Now, the for loop executes quickly, while the
    // callbacks get fired when the server response is complete. At that time,
    // when the inner function tries to access the local variable `i`, it sees
    // the saved copy which has a value of `url.length` (since the loop has
    // already completed by then). This causes each callback to assign
    // `finalString[url.length] = data.toString()` repeatedly, thus
    // `finalString[url.length]` having the response from last callback, and
    // other values as undefined. To check this, remove the anonymous call, and
    // uncomment the code as instructed below.
    // The anonymous function mitigates this by making the current copy of
    // variable `i` local (aka saves) to callback's scope.
    (function(i) {
        http.get(urls[i], function (response) {
            response.pipe(bl(function (err, data) {
                if (err)
                    return console.error(err);

                finalString[i] = data.toString();
                count++;
                // Uncomment the code below to understand what is explained in
                // the comments.
                //console.log(i, finalString[i]);
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
