var dir = process.argv[2],
    fileExt = process.argv[3];

var myModule = require('./mymodule.js');
myModule(dir, fileExt, function (err, list) {
    if (err) {
        console.log('Error: ' + err);
    }
    list.forEach(function (item) {
        console.log(item);
    });
});
