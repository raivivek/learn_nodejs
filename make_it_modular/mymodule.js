var fs = require('fs');

module.exports = function(dirName, fileExt, callback) {
    var files = fs.readdir(dirName, function(err, data) {
        if (err)
            return callback(err);
        data = data.filter(function (file) {
            return file.split('.')[1] === fileExt ? true : false;
        });
        callback(null, data);
    });
}
