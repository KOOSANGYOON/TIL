var fs = require('fs');
var data = fs.readFileSync('test.txt', 'utf8');

var array = [];
array = data.split("\n");
var result = 0;

for(var i = 0; i < array.length - 1; i++) {
	result += parseInt(array[i]);
}



console.log(result);
console.log("End...");
