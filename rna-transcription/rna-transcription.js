var toRna = function (input) {
	var map = {
		C: 'G',
		G: 'C',
		A: 'U',
		T: 'A'
	};

	var output = "";
	for (var i=0; i<input.length; i++) {
		output += map[input[i]];
	}
	return output;
};

module.exports = toRna;