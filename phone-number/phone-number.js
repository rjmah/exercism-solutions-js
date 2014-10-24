var PhoneNumber = function(input) {
	var output = input.replace(/[^0-9]/g,"");
	if (output.length == 11 && output[0] == 1) {
		output = output.substr(1);
	}

	if (output.length != 10) {
		this.num = "0000000000";
		this.valid = false;
	} else {
		this.num = output;
		this.valid = true;
	}
};

PhoneNumber.prototype.number = function() {
	return this.num;
};

PhoneNumber.prototype.areaCode = function() {
	if (this.valid) {
		return this.num.substr(0,3);
	}
};

PhoneNumber.prototype.toString = function() {
	if (this.valid) {
		return "(" + this.num.substr(0,3) + ") " +
			this.num.substr(3,3) + "-" + this.num.substr(6,4);
	}
}

module.exports = PhoneNumber;