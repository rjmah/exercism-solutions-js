var words = function(input) {
	wordsArr = input.split(/\s/);
	return wordsArr.reduce(function(obj, word){
		obj[word] = (obj[word] || 0) + 1;
		return obj;
	}, {});

};

module.exports = words;
