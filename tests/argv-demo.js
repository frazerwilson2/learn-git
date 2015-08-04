// console log out node output
process.argv.forEach(function(value, index, args) {
	console.log('process.argv[' + index + '] = ' + value);
});

// logging current file and directory
console.log('currently executing file is ' + __filename);
console.log('it is located in ' + __dirname);


// output source code in console
var fs = require('fs');

fs.readFile(__filename, {
	encoding: 'utf8'
}, function(error, data) {
	if(error) {
		return console.error(error.message);
	}
	console.log(data);
});