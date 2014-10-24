var Bob = function() {};

Bob.prototype.hey = function(input) {
	// yelling
	if (input.toUpperCase() == input && input.toLowerCase() != input) {
		return 'Whoa, chill out!';
	}
	// question
	if (input.substr(-1) == '?') {
		return 'Sure.';
	}
	// silence
	if (!input.trim()) {
		return 'Fine. Be that way!';
	}
	// anything else
	return "Whatever."
};

module.exports = Bob;
