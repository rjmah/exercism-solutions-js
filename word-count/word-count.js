var words = function(input) {
	wordsArr = input.split(/\s/);
	return wordsArr.reduce(function(obj, word){
		if (word in obj) {
			obj[word] += 1;
		} else {
			obj[word] = 1;
		}
		return obj;
	}, {});

};

module.exports = words;
