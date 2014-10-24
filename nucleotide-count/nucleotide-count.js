var Dna = function(input) {
	//create new instance if constructor was incorrectly called without new
	if ( !(this instanceof Dna) ) {
    	return new Dna(input);
	}
	if (typeof input != "undefined" && typeof input != "string") {
		throw new Error('input must be a string');
	}
	this.input = input || "";
	if (this.input.search(/[^ATCG]/) != -1) {
		throw new Error('invalidate DNA string');
	}
};

Dna.prototype.count = function (nucleo) {
	var re = new RegExp(nucleo,"g");
	var match = this.input.match(re);
	return match ? match.length : 0;
}

Dna.prototype.histogram = function() {
	var self = this;
	return ['A', 'T', 'C', 'G'].reduce(function(obj, nucleo) {
		obj[nucleo] = self.count(nucleo);
		return obj;
	}, {});
};
module.exports = Dna;