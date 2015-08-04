//require npm & custom module
var colors = require('colors');
var m = require('mmm');

console.log('time after first require ' + m.now);
console.log('Hello World'.green);
console.log(m.add(3,5));
console.log(m.multiply(4,5));
console.log(m.factoral(4));

setTimeout(function () {
	m = require('mmm');
	console.log('Time after second require ' + m.now);
}, 500);
