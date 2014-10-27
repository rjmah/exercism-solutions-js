at = function(h, m) {
	//create new instance if constructor was incorrectly called without new
	if ( !(this instanceof at) ) {
    	return new at(h, m);
	}
	this.h = h;
	this.m = m || 0;
};

//helper functions
var leftZero = function(num) {
	if (!num) return "00";
	return (num < 10 ? "0" : "") + num;
};

var mod = function(base, modulo) {
	return (base % modulo + modulo) % modulo;
};

//prototype methods
at.prototype.toString = function() {
	return leftZero(this.h) + ":" + leftZero(this.m);
};

at.prototype.plus = function(m) {
	var mNew = this.m + m;
	var hNew = (this.h + Math.floor(mNew / 60));
	this.h = mod(hNew,24);
	this.m = mod(mNew,60);
	return this.toString();
};

at.prototype.minus = function(m) {
	return this.plus(-m);
};

at.prototype.equals = function(clock2) {
	return this.toString() == clock2.toString();
};


module.exports = {at: at};
