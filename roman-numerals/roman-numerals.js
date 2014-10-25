module.exports = function(dec){
	// reverse decimal number so our place indices
	// can expand to the right
	var str = String(dec).split("").reverse().join("");
	var roman = "";

	var key = [
		{oneStr: "I", fiveStr: "V"},
		{oneStr: "X", fiveStr: "L"},
		{oneStr: "C", fiveStr: "D"},
		{oneStr: "M"}
	];

	for (var i=0; i<str.length; i++) {
		var oneStr = key[i].oneStr;
		var fiveStr = key[i].fiveStr;
		var ten = (i + 1 >= key.length) ? "" : key[i+1].oneStr;

		if (str[i] == "9") {
			roman = oneStr + ten + roman;
		} else if (str[i] !== "0") {
			roman = digitToRoman(parseInt(str[i]), oneStr, fiveStr) + roman;
		}
	}
	return roman;
};

function digitToRoman(num, oneStr, fiveStr) {
	if (num <= 3) {
		return multiplyStr(oneStr,num);
	}

	var diff = num - 5;
	var modStr = multiplyStr(oneStr, diff);

	return diff < 0 ? modStr + fiveStr : fiveStr + modStr;
}

function multiplyStr(str, n) {
	return new Array(Math.abs(n) + 1).join(str);
}