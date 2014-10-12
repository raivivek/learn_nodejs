var fs = require('fs'),
    dirPath = process.argv[2],
    filterExt = process.argv[3];

/* Can also use nodejs's core path module to deal with file extensions.
 * >> var path = require('path');
 * >> console.log(path.extname('index.html'));
 * '.html'
 * >> path.basename('/foo/bar/baz/asdf/quux.html')
 * 'quux.html'
 */
var filterFiles = fs.readdir(dirPath, function (err, list) {
    for (var i = 0; i < list.length; ++i) {
        file = list[i].split('.');
        if (file[1] === filterExt) {
            console.log(list[i]);
        }
    }
});
