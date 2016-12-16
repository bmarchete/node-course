//this is a node internal module
//permits read some file

var f = require('fs');
var file = f.readFileSync("teste.txt", "utf-8");


console.log(file);
