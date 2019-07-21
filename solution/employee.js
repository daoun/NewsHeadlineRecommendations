var Employee = module.exports = function Employee(id, firstName, lastName, gender, city, country, role, department, preferences){
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
	this.newspreferences = preferences;
}

Employee.prototype.toString = function toString() {
	return "Employee "+ this.id + ": " + this.name + ", " + this.location + ", " + this.role + ", " + this.department;
};


