var anagram = function(input) {
	if (typeof input != 'string' && !input.trim().length) {
		throw new Error('input must be a non empty string');
	}
	//create new instance if constructor was incorrectly called without new
	if ( !(this instanceof anagram) ) {
    	return new anagram(input);
	}
	this.input = input;
};

anagram.prototype.matches = function() {
	var input = this.input;
	var output = [];

	//grab array argument or array of arguments
	var matchTests = Array.isArray(arguments[0]) ?
		arguments[0] : Array.prototype.slice.call(arguments);

	matchTests.forEach(function(matchTest) {
		if (typeof matchTest != 'string') {
			throw new Error('potential match must be a string');
		}
		input_lower = input.toLowerCase();
		matchTest_lower = matchTest.toLowerCase();
		var same = arrayEquals(input_lower, matchTest_lower);
		if ( !same && arrayEquals( splitSort(input_lower), splitSort(matchTest_lower) ) ) {
			output.push(matchTest);
		}
	});

	return output;
	//takes a string and returns a sorted array of all the characters
	function splitSort(word) {
		return word.split("").sort();
	}

	//compares two arrays for sameness
	function arrayEquals(a, b) {
		if (a.length != b.length) {
			return false;
		}
		for (var i=0; i<a.length; i++) {
			if (a[i] !== b[i]) {
				return false;
			}
		}
		return true;
	}
};
module.exports = anagram;