Raindrops = function() {

};

Raindrops.prototype.convert = function(input) {
	var result = "";

	var p_factors = getPrimeFactors(input);

	var map = {
		3: "Pling",
		5: "Plang",
		7: "Plong"
	}

	var result = "";
	for(factor in map) {
		if (p_factors.indexOf(parseInt(factor)) !== -1) {
			result += map[factor];
		}
	}
	return result || String(input);
}


function getPrimeFactors(natural) {
	var p_factors = [];
	while ( natural > 1 ) {
		for ( var i=2; i<=natural; i++ ) {
			if ( !(natural % i) ) {
				p_factors.push(i);
				natural = natural / i;
				break;
			}
		}
	}
	return p_factors;
}
module.exports = Raindrops;