var generic = function(array, filter) {
	var result = [];
	for ( var i=0; i<array.length; i++ ) {
		var kept = filter(array[i]);
		if ( (kept && this.isKeep) || !(kept || this.isKeep) ) {
			result.push(array[i]);
		}
	}
	return result;
};

module.exports = {
	keep: function() {
		return generic.apply({isKeep:true}, arguments);
	},
	discard: function() {
		return generic.apply({isKeep:false}, arguments);
	}
};