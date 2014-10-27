var Robot = function () {
	this.reset();
};

Robot.prototype.reset = function () {
	this.name = "";
	this.name += randomLetter();
	this.name += randomLetter();
	this.name += randomNumber();
	this.name += randomNumber();
	this.name += randomNumber();
};

function randomLetter() {
	var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	return letters.substr(Math.floor(Math.random() * letters.length),1);
}

function randomNumber() {
	return Math.floor(Math.random() * 10);
}
module.exports = Robot;