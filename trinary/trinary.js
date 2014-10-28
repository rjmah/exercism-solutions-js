module.exports = Trinary;

var base = 3;

function Trinary(input) {
	this.input_rev = input.split('').reverse();
};

Trinary.prototype.toDecimal = function() {
	var regex_valid_chars = new RegExp("[^0-" + (base - 1) + "]", "g");
	return this.input_rev.reduce(function(dec, digit, index){
		if (!digit.match(regex_valid_chars)) {
			dec += Number(digit) * Math.pow(base, index);
		}
		return dec;
	}, 0);
};