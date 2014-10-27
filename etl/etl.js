module.exports = function (bad) {
	var good = {};
	for (point in bad) {
		bad[point].forEach(function(letter){
			good[letter.toLowerCase()] = parseInt(point);
		})
	}
	return good;
};