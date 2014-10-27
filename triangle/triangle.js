Triangle = function() {
	this.args = arguments;
};

Triangle.prototype.kind = function() {
	var s1 = this.args[0],
	s2 = this.args[1],
	s3 = this.args[2];

	if (s1 <= 0 || s2 <= 0 || s3 <= 0) {
		throw new Error('sides must be greater than zero.');
	}
	if ((s1 + s2) <= s3 || (s1 + s3) <= s2 || (s2 + s3) <= s1 ) {
		throw new Error('sides violated triangle inequality law');
	}

	if (s1 == s2 && s2 == s3) {
		return "equilateral";
	}
	if (s1 == s2 || s2 == s3 || s1 == s3) {
		return "isosceles";
	}
	if (s1 != s2 && s2 != s3 || s1 != s3) {
		return "scalene";
	}
};

module.exports = Triangle;