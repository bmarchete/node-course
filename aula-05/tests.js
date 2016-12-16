var assert = require('assert');
var math = require('./math');


assert(math.add(1,2) === 3);
assert(math.sub(1,2) === -1);
assert(math.mult(1,2) === 2);

console.log("all tests ok");
