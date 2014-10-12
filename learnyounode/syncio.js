var fs = require('fs'),
    fileName = process.argv[2];

var readData = fs.readFileSync(fileName, encoding = 'utf8');
var newLines = readData.split('\n').length - 1;

console.log(newLines);
