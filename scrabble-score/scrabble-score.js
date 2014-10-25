module.exports = function (word) {
	var key = {
		a: 1, e: 1, i: 1, l: 1, n: 1, o: 1, r: 1, s: 1, t: 1, u: 1,
		d: 2, g: 2,
		b: 3, c: 3, m: 3, p: 3,
		f: 4, h: 4, v: 4, w: 4, y: 4,
		k: 5,
		j: 6, x: 6,
		q: 10, z: 10
	};
	if (!word) { return 0; }
	if (typeof word != "string") {
		throw new Error('score input must be a string');
	}
	var i = 0;
	var score = 0;
	while (i<word.length) {
		score += key[word[i].toLowerCase()];
		++i;
	}
	return score;
};

