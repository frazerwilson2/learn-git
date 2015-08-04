// write data to a file
var fs = require('fs');
var data = 'Some file data';

fs.writeFile(__dirname + '/foo.txt', data, function(error) {
	if (error) {
		return console.error(error.message);
	}
});