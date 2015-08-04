var mongoose = require('mongoose');
var dbUrl = 'mongodb://testguy:testguy@ds055762.mongolab.com:55762/heroku_n6gzhrmz';

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