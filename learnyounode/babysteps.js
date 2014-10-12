var args = process.argv,
    values = args.slice(2).map(function (num) {
        return parseInt(num);
    });

//console.log(values);

var sum = 0;
for (var i = 0; i < values.length; ++i) {
    sum += values[i];
}

console.log(sum);
