School = function() {
	this.db = {};
};

School.prototype.roster = function () {
	return this.db;
};

School.prototype.add = function (name, grade) {
	this.db[grade] = this.db[grade]  || [];
	this.db[grade].push(name);
	this.db[grade].sort();
};

School.prototype.grade = function (grade) {
	return  this.db[grade] || [];
};

module.exports = School;