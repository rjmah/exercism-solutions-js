
var Luhn = function(num) {
	this.checkDigit = num % 10;

	this.addends = algo(num);

	this.checksum = this.addends.reduce(accum);

	this.valid = !(this.checksum % 10);
};

Luhn.create = function(num) {
	var addends = algo(num, true);

	var checkDigit = (10 - addends.reduce(accum) % 10) % 10;

	return num * 10 + checkDigit;
};

function accum(num, sum) {
	return sum + num;
}

function algo(num, startFirst) {
	var digits = String(num).split("").reverse().map(Number);
	var newDigits = [];
	digits.forEach(function(digit, index) {
		if (startFirst) index++
		if (index % 2) {
			digit = digit * 2;
			if (digit >= 10) {
				digit -= 9;
			}
		}
		newDigits.push(digit);
	});
	return newDigits.reverse();
}

module.exports = Luhn;