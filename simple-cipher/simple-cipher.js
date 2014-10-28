module.exports = Cipher;

var alphabet = "abcdefghijklmnopqrstuvwxyz";

function Cipher(user_key) {
	if (user_key === "" || user_key && (typeof user_key !== "string" || user_key.match(/[^a-z]/g))) {
		throw new Error("Bad key");
	}
	this.key = user_key || randLetters(100);
}

Cipher.prototype.encode = function(msg) {
	this.is_encrypted = false;
	return generic.bind(this)(msg);
};

Cipher.prototype.decode = function(msg) {
	this.is_encrypted = true;
	return generic.bind(this)(msg);
}

function randLetters(length) {
	var rand = "";
	for (var i=0; i<length; i++) {
		rand += alphabet[Math.floor(Math.random() * 26)];
	}
	return rand;
}

function generic(msg) {
	var result = "";
	for (var i=0; i<msg.length; i++) {
		var shift_by = (this.is_encrypted ? -1 : 1) * alphabet.indexOf(this.key[i]);
		var new_index = (26 + alphabet.indexOf(msg[i]) + shift_by) % 26;
		result += alphabet[new_index];
	}
	return result;
}
