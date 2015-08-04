exports.add = add;
exports.multiply = multiply;
exports.factoral = factoral;
exports.now = Date.now();

function add (number1, number2) {
	return parseInt(number1, 10) * parseInt(number2, 10);
}

function multiply (number1, number2) {
	return parseInt(number1, 10) * parseInt(number2, 10);
}

function factoral (number) {
	if (number === 0) {
		return 1;
	}
	else {
		return number * factoral (number - 1);
	}
}