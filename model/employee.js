var Employee = module.exports = function Employee(id, firstName, lastName, gender, city, country, role, department){
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


/*export default (id, firstName, lastName, gender, city, country, role, department) => {
	let _id = id;
	let _firstName = firstName;
	let _lastName = lastName;
	let _name = _firstName + " " + _lastName;
	let _gender = gender;
	let _city = city;
	let _country = country;
	let _location = _city + ", " + _country;
	let _role = role;
	let _department = department;

	return {
		get id(){
			return _id;
		},
		get firstName(){
			return _firstName;
		},
		get lastName(){
			return _lastName;
		},
		get name(){
			return _name;
		}
		get gender(){
			return _gender;
		}
		get city(){
			return _city;
		}
		get country(){
			return _country;
		}
		get location(){
			return _location;
		},
		get role(){
			return _role;
		},
		get department(){
			return _department;
		},
		get toString(){
			return "Employee "+ _id + ": " + _name + ", " + _location + ", " + _role + ", " + _department;
		}
	};


}*/

