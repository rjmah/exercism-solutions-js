var song = {};

song.verse = function (input) {
	var animals = ["fly", "spider", "bird", "cat", "dog", "goat", "cow", "horse"];
	var exclamations = {
		spider: "It wriggled and jiggled and tickled inside her.",
		bird: 	"How absurd to swallow a bird!",
		cat: 	"Imagine that, to swallow a cat!",
		dog: 	"What a hog, to swallow a dog!",
		goat: 	"Just opened her throat and swallowed a goat!",
		cow: 	"I don't know how she swallowed a cow!"
	};
	var output = "I know an old lady who swallowed a ";
	if (input == 8) {
		return output += "horse.\nShe's dead, of course!\n";
	}
	for (var i=input-1;i>=0;i--) {
		(function(j){
			if(j == input-1) {
				output += animals[j] + ".\n";
				if (animals[j] in exclamations) {
					output += exclamations[animals[j]] + "\n";
				}
			}
			if (input > 1 && j!=0) {
				var spiderAdd = animals[j-1] == "spider" ? exclamations["spider"].replace("It"," that").replace(".","") : "";
				output += "She swallowed the " + animals[j] + " to catch the " + animals[j-1] + spiderAdd + ".\n"
			}
		})(i);
	}
	output += "I don't know why she swallowed the fly. Perhaps she'll die.\n";
	return output;
};

song.verses = function (firstVerse, lastVerse) {
	var output = "";
	for (var i=firstVerse;i<=lastVerse;i++) {
		output += song.verse(i)+"\n";
	}
	return output;
};

module.exports = song;