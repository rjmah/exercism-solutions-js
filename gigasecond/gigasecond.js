Gigasecond = function (date) {
	var dateTime = new Date( date.getTime() + Math.pow(10,12) );
	this.anniversary = new Date(dateTime.getFullYear(), dateTime.getMonth(), dateTime.getDate());
};

Gigasecond.prototype.date = function() {
	return this.anniversary;
};

module.exports = Gigasecond;