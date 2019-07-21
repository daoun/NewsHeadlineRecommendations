/*
var Employee = module.exports = function Util(id, firstName, lastName, gender, city, country, role, department){
	this.id = id;
	this.firstName = firstName;
	this.lastName = lastName;
	this.name = firstName + " " +lastName;
	this.gender = gender;
	this.city = city;
	this.country = country;
	this.location = city + ", " + country;
	this.role = role;
	this.department = department;
}

Employee.prototype.toString = function toString() {
	return "Employee "+ this.id + ": " + this.name + ", " + this.location + ", " + this.role + ", " + this.department;
};

*/

module.exports = {
	cleanText:function(text) {
	// clean it and return
	},
	preference: [
		"","Politics","Technology","Entertainment",
		"Fashion","Business","Science","Health",
		"Sports","Travel","Weather"
	],
	/*
	preferredJobs:[
		[],
		"Politics",[],
		"Technology",[],
		"Entertainment",[],
		"Fashion",[],
		"Business",[],
		"Science",[],
		"Health",[],
		"Sports",[],
		"Travel",[],
		"Weather"[]
		
		
	] */
	countries: [
		"United States","Canada","Mexico",
		"Brazil","Spain","Italy","France",
		"Germany","Switzerland","China",
		"South Korea","South Africa","Japan"
	],
	languagesSpoken: [
		["English"],
		["English", "French"],
		["English", "Spanish "],
		["English", "Portuguese"],
		["English", "Spanish "],
		["English", "Italian"],
		["English", "French,"],
		["English", "German"],
		["English", "French, Italian, German"],
		["English", "Chinese"],
		["English", "Korean"],
		["English"],
		["English", "Japanese"]
	]
	


}


