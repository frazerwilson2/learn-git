var mongoose = require('mongoose');
var dbUrl = 'mongodb://XXX';

mongoose.connect(dbUrl);

// Close the Mongoose connection on Control_C
process.on('SIGINT', function () {
	mongoose.connection.close(function () {
		console.log('Mongoose default connection disconnected');
		process.exit(0);
	});
});

require('../models/employee');
require('../models/team');
