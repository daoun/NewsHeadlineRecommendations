var NewsHeadline = module.exports = function NewsHeadline(id, title, abstract, preference_id, language, publication_date, author){
	this.id = id;
	this.title = title;
	this.abstract = abstract;
	this.preference_id = preference_id;
	this.language = language;
	this.publication_date = publication_date;
	this.author = author;
}

NewsHeadline.prototype.toString = function toString() {
	return "Headline "+ this.id + ": " + this.title + ", " + this.language + ", " + this.author + ", " + this.publication_date;
};

NewsHeadline.prototype.date = function date() {
	// format 7/14/2019
	const dates = this.publication_date.split('/');
	console.log(dates);
	return new Date(parseInt(dates[2]), parseInt(dates[0])-1, parseInt(dates[1]));
};
