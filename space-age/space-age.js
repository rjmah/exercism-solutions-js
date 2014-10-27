SpaceAge = function(seconds) {
	this.seconds = seconds;
};

var periods = {
	"Earth": 		1,
	"Mercury": 	0.2408467,
	"Venus": 		0.61519726,
	"Mars": 		1.8808158,
	"Jupiter": 	11.862615,
	"Saturn": 	29.447498,
	"Uranus": 	84.016846,
	"Neptune": 	164.79132
};

for (planet in periods) {
	(function(planet){
		var period = periods[planet];
		SpaceAge.prototype["on" + planet] = function() {
			return Math.round(this.seconds / 31557600 / periods[planet] * 100)/100;
		}
	})(planet);
}

module.exports = SpaceAge;