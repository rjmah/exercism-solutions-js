module.exports = function (year) {
	return Boolean(!(year % 400) || year % 100 && !(year % 4));
};