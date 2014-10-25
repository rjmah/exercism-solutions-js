Binary = function(binary) {
	this.binary = binary;
};

Binary.prototype.toDecimal = function() {
	var result = 0;

	this.binary.split('').reverse().forEach(function(bit, index){
		if (bit === '1') result += Math.pow(2,index);
	});

	return result;
};

module.exports = Binary;