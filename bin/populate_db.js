var async = require('async');
var mongoose = require('mongoose');
require(process.cwd() + '/lib/connection');
var Employee = mongoose.model('Employee');
var Team = mongoose.model('Team');

var data = {
	employees: [
	{
		id: '1000003',
		name: {
			first: 'Colin',
			last: 'Ihrig'
		},
		image: 'images/employees/1000003.png',
		address: {
			lines: ['11 Wall Street'],
			city: 'New York',
			state: 'NY',
			zip: 10118
		}
	},
	{
		id: '1000021',
		name: {
			first: 'Frazer',
			last: 'Wilson'
		},
		image: 'images/employees/1000021.png',
		address: {
			lines: ['8 Oakfield Road'],
			city: 'London',
			state: 'LD',
			zip: 10119
		}
	},
	{
		id: '1000022',
		name: {
			first: 'Anna',
			last: 'Cox'
		},
		image: 'images/employees/1000022.png',
		address: {
			lines: ['8 Oakfield Road'],
			city: 'London',
			state: 'LD',
			zip: 10120
		}
	},
	{
		id: '1000025',
		name: {
			first: 'Russel',
			last: 'Brand'
		},
		image: 'images/employees/1000025.png',
		address: {
			lines: ['15 The Road'],
			city: 'New York',
			state: 'NY',
			zip: 10125
		}
	},
	{
		id: '1000030',
		name: {
			first: 'Colin',
			last: 'Collingson'
		},
		image: 'images/employees/1000030.png',
		address: {
			lines: ['12 Wall Street'],
			city: 'New York',
			state: 'NY',
			zip: 10126
		}
	},
	{
		id: '1000031',
		name: {
			first: 'Finn',
			last: 'Balor'
		},
		image: 'images/employees/1000031.png',
		address: {
			lines: ['52 Dela Plaza'],
			city: 'California',
			state: 'LA',
			zip: 10134
		}
	}
],
teams: [
	{
		name: 'Software and Services Group'
	},
	{
		name: 'Project Development'
	}
]
};

var deleteEmployees = function(callback) {
	console.info('Deleting employees');
	Employee.remove({}, function(error, response) {
		if (error) {
			console.error('Error deleting employees: ' + error);
		}

		console.info('Done deleting employees');
		callback();
	});
};

var addEmployees = function(callback) {
	console.info('Adding employees');
	Employee.create(data.employees, function(error) {
		if (error) {
			console.error('Error: ' + error);
		}

		console.info('Done adding employees');
		callback();
	});
};

var deleteTeams = function(callback) {
	console.info('Deleting teams');
	Team.remove({}, function(error, response) {
		if (error) {
			console.error('Error deleting teams: ' + error);
		}

	console.info('Done deleting teams');
	callback();
	});
};

var addTeams = function(callback) {
	console.info('Adding teams');
	Team.create(data.teams, function(error, team1) {
		if (error) {
			console.error('Error: ' + error);
		} else {
			data.team_id = team1._id;
		}

		console.info('Done adding teams');
		callback();
	});
};

var updateEmployeeTeams = function(callback) {
	console.info('Updating employee teams');
	var team = data.teams[0];

	// set everyone to be on the same team to start
	Employee.update({}, {
		team: data.team_id
	}, {
		multi: true
	}, function(error, numberAffected, response) {
		if (error) {
			console.error('Error updating Employee team: ' + error);
		}

		console.info('Done updating emplyee teams');
		callback();
	});
};

async.series([
	deleteEmployees,
	deleteTeams,
	addEmployees,
	addTeams,
	updateEmployeeTeams
	], function(error, results) {
		if (error) {
			console.error('Error: ' + error);
		}

		mongoose.connection.close();
		console.log('Done');
	});