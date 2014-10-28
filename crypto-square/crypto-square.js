Crypto = function(message) {
	this.message = message;
};

Crypto.prototype.normalizePlaintext = function() {
	return this.message.toLowerCase().replace(/[^0-9a-z]/g,"");
};

Crypto.prototype.size = function() {
	return Math.ceil(Math.sqrt(this.normalizePlaintext().length));
};

Crypto.prototype.plaintextSegments = function() {
	var re = new RegExp(".{1," + this.size() + "}", "g");
	return this.normalizePlaintext().match(re);
};

Crypto.prototype.ciphertext = function() {
	var size = this.size();
	var encoded = new Array(size+1).join(".").split(".");
	var plain = this.plaintextSegments();
	for (var y=0; y<size; y++) {
		for (var x=0; x<size; x++) {
			if (plain[y] && plain[y][x]) {
				encoded[x] += plain[y][x];
			}
		}
	}
	return encoded.join("");
};

Crypto.prototype.normalizeCiphertext = function() {
	var re = new RegExp(".{1," + this.size() + "}", "g");
	return this.ciphertext().match(re).join(" ");
};

module.exports = Crypto;