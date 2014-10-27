var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
var backwards = alphabet.slice(0).reverse();

var cipher = {};


module.exports = {
	encode: function(text) {
		var code = [];
		var parsed = text.toLowerCase().replace(/[^0-9a-z]/g,"").split("");

		parsed.forEach(function(char) {
			code.push( backwards[alphabet.indexOf(char)] || char );
		});

		return code.join("").match(/.{1,5}/g).join(" ");
	}
}