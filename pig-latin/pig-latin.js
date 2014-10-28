module.exports = {
	translate: function(english) {
		var vowels = "aeiou";
		var blends = ["bl","br","ch","cl","cr","dr","fl","fr","gl","gr","pl",
			"pr","qu","sc","sh","sk","sl","sm","sn","sp","st","sw","th","tr",
			"tw","wh","wr","sch","scr","shr","sph","spl","spr","squ","str","thr"];
		var latin = english;
		for (var i=3; i>0; i--) {
			if ( blends.indexOf(english.substr(0,i)) !== -1 ||
				i===1 && vowels.indexOf(english.substr(0,1)) === -1 ) {
				latin = english.substr(i) + english.substr(0,i);
				break;
			}
		}
		return latin + "ay";
	}
}
