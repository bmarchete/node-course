
var math = require('./math');

console.log(math);

let op = process.argv[2];
let a = Number(process.argv[3]);
let b = Number(process.argv[4]);

var result = math[op](a,b);

console.log(result);
