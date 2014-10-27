module.exports = {
	for: function(natural) {
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
}