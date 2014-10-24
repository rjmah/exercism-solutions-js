Hamming = {};
Hamming.compute = function(a, b) {
	//input check
	if (typeof a != 'string' || typeof b!= 'string') {
		throw new Error('inputs must be strings');
	}
	if (a.length != b.length) {
		throw new Error('inputs must be of same length');
	}

	var hammingDistance = 0;
	for (var i=0; i<a.length; i++) {
		if(a[i] != b[i]) {
			hammingDistance += 1;
		}
	}
	return hammingDistance;

};

module.exports = Hamming;
