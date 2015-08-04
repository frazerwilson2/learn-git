'use strict';
var app = angular.module('app', ['ngRoute', 'ngResource'])
.constant('config', {
	states: ['AL','AK']
});

app.config(['$routeProvider', function($routeProvider) {
	//define routes
}]);

app.factory('EmployeeService', ['$resource', function($resource) {
	// factory
}]);

app.factory('TeamService', ['$resource', function($resource) {
	// factory
}]);

app.directive('imageFallback', function() {
	
}).directive('editInLine', function ($compile) {

});

app.controller('EmployeesCtrl', ['$scope', 'EmployeeService' function($scope, service) {
	service.query(function(data, headers) {
		$scope.employees = data;
	}, _handleError);
}]);

app.controller('EmployeeCtrl', ['$scope', '$routeParams', 'EmployeeService', 'TeamService', '$q', 'config', '$route', function ($scope, $routeParams, employee, team, $q, config, $route) {
	$scope.address = {};
	
}])