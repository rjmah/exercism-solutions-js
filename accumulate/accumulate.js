module.exports = function (array, accumulator) {
	var result = [];
	array.forEach(function(item) {
		result.push(accumulator(item));
	});
	return result;
};