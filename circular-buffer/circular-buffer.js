CircularBuffer = function(length) {
	if ( !(this instanceof CircularBuffer) ) {
		return new CircularBuffer(length);
	}
	this.first = 0;
	this.last = 0;

	this.length = length;
	this.filled = 0;

	this.buffer = new Array(length);
};

CircularBuffer.prototype.read = function () {
	if (!this.filled) {
		throw new Error(BufferEmptyException());
	}
	this.filled--;

	var output = this.buffer[this.first];
	this.first = (this.first + 1) % this.length;
	return output;
};


//decide not to abstract data push to buffer, since prototype
//pattern doesn't allow private functions
CircularBuffer.prototype.write = function (data) {
	if (this.filled == this.length) {
		throw new Error(BufferFullException());
	}
	if (data != undefined) {
		this.buffer[this.last] = data;
		this.last = (this.last + 1) % this.length;
		this.filled++;
	}
};

CircularBuffer.prototype.forceWrite = function (data) {
	if (this.filled != this.length) {
		this.write(data);
	} else {
		if (data != undefined) {
			this.buffer[this.last] = data;
			this.last = (this.last + 1) % this.length;
			this.first = (this.first + 1) % this.length;
		}
	}
};

CircularBuffer.prototype.clear = function () {
	this.filled = 0;
	this.first = this.last;
};

BufferEmptyException = function() {
};

BufferFullException = function() {
};

module.exports = {
	circularBuffer: CircularBuffer,
	bufferEmptyException: BufferEmptyException,
	bufferFullException: BufferFullException
};