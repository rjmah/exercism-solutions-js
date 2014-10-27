Grains = function () {
	this.squares = [0];
	this.sum = 0;
	for (var i=0; i<64; i++) {
		var s = Math.pow(2,i);
		this.squares.push(s);
		this.sum += s;
	}
};

Grains.prototype.square = function(num) {
	return this.squares[num];
};

Grains.prototype.total = function() {
	return this.sum;
};

module.exports = Grains;