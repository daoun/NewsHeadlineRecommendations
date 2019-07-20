class Employee {
	/**
	 * United States, Canada, Mexico, Brazil, Spain, Italy, France, Germany,
	 * Switzerland, China, South Korea, South Africa, Japan
	 */

	constructor(id, firstName, lastName, location, role, department){
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.location = location;
		this.role = role;
		this.department = department;
		this.preferences = [];
	}

/*	public int getID() {
		return id;
	}
	public void setID(int iD) {
		id = iD;
	}

	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}

	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}

	public String getDepartment() {
		return department;
	}
	public void setDepartment(String department) {
		this.department = department;
	}

	public List<String> getPreferences(int index) {
		return preferences.get(index);
	}
	public void setPreferences(List<String> preferences) {
		this.preferences = preferences;
	}
	public void addPreferences(String preference){
		this.preferences.add(preference);
	}
*/


}

module.exports = {
  Employee
};
