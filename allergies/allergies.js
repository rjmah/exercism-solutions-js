var allergens = [
	'eggs',
	'peanuts',
	'shellfish',
	'strawberries',
	'tomatoes',
	'chocolate',
	'pollen',
	'cats'
];

Allergies = function(score) {
	this.score = score;
};

Allergies.prototype.list = function() {
	var a_list = [];
	allergens.forEach( function (allergen) {
		if ( this.allergicTo(allergen) ) {
			a_list.push(allergen);
		}
	}.bind(this) );
	return a_list;
};

Allergies.prototype.allergicTo = function(allergen) {
	return Boolean( Math.pow(2, allergens.indexOf(allergen) ) & this.score);
}

module.exports = Allergies;