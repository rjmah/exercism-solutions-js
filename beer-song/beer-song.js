var Beer = {};

Beer.verse = function (input) {
	var next = input ? input-1 : 99;

	return formatBottles(input, true) + " of beer on the wall, " +
	formatBottles(input) + " of beer.\n" +
	//ternaries to deal with corner cases
	(input ?
		"Take " + (input == 1 ? "it" : "one" ) +" down and pass it around, " :
	 	"Go to the store and buy some more, ") +
	formatBottles(next) + " of beer on the wall.\n";

	function formatBottles(num, cap) {
		//special no bottle format
		if (!num) {
			//capitalize if start of verse
			return (cap ? "N" : "n") + "o more bottles";
		}
		//pluralize
		return num + " bottle" + (num != 1 ? "s" : "");
	}
};

Beer.sing = function (start, end) {
	end = end || 0;
	var output = "";
	for (var i=start; i>=end; i--) {
		output += this.verse(i);
		if (i!=end) {
			output += "\n";
		}
	}
	return output;
}

module.exports = Beer;