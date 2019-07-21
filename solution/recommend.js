const Employee = require('./employee');
const NewsHeadline = require('./newsheadline');
const Util = require('./util');
const mysql = require('mysql');

var connection = mysql.createConnection({
	host	: 'voicecommand.cno5r5dyegie.us-east-1.rds.amazonaws.com',
	user	: 'daoun',
	password: 'welcome123',
	database: 'command',
	timeout : 60000
});
connection.connect(function(err) {
	// in case of error
	if(err){
		console.log(err);
		console.log(err.fatal);
	} else {
		console.log("connection successful");
	}
});

var Recommend = module.exports = function Recommend(){

	//console.log(Util.preference[1]);
}

async function getNewsFromDB(date){
	return new Promise(async resolve => {
		
		$query = 'select * from NewsHeadlines where publication_date="' + date + '";';
	
		await connection.query($query, function(err, rows, fields) {
			if(err){
				console.log("An error ocurred performing the query.");
				console.log(err);
				return;
			}

			// get news headlines from database and store in array of NewsHeadlines
			let recommends = [];
			
			for(var element of rows){
				recommends.push(new NewsHeadline(element.id, element.title, element.abstract, element.preference_id, element.language, element.publication_date, element.author));
			}
			resolve(recommends);
		});
	}) 
}

async function getEmployeeNewsPreferences(id){
	return new Promise(async resolve => {
		
		$query = 'select * from EmployeeNewsPreferences where employee_id=' + id + ';';
		//console.log($query);
		await connection.query($query, function(err, rows2, fields) {
			if(err){
				console.log("An error ocurred performing the query.");
				console.log(err);
				return;
			}
			// get employees from database and store in array of Employees
			let pref = [];
			for(var ele2 of rows2){
				pref.push(ele2.preference_id);
			}
			resolve(pref);
					
		});

	}) 
}

async function getEmployeesFromDB(){
	return new Promise(async resolve => {
		
		$query = 'select * from Employees;';
		await connection.query($query, async function(err, rows, fields) {
			if(err){
				console.log("An error ocurred performing the query.");
				console.log(err);
				return;
			}

			// get employees from database and store in array of Employees
			let employees = [];
			
			/* Get info for all employees
			for(var element of rows){
				//console.log(element);
				var pref = await getEmployeeNewsPreferences(element.id)

				employees.push(
					new Employee(
						element.id, element.first_name, element.last_name, 
						element.gender, element.city, element.country, 
						element.job_title, element.department,pref
					)
				);
			} 
			*/

			for(var i = 0; i <1000; i++){
				var element = rows[i];
				var pref = await getEmployeeNewsPreferences(element.id)

				employees.push(
					new Employee(element.id, element.first_name, element.last_name, 
						element.gender, element.city, element.country, 
						element.job_title, element.department,pref
					)
				);
			}

			//console.log(employees.length);
			//console.log(employees[0]);
			resolve(employees);
			
		});
	}) 
}

function getRecommendations(headline, employees){
	var recommendationList = [];
	while
	if(headline.preference_id == )
	return recommendationList;
}


Recommend.prototype.matchNewsToEmployees = async function matchNewsToEmployees(month, date, year) {
	
	let recommends = []

	// get array of employees from database
	var start = Date.now();
	let employees = await getEmployeesFromDB();
	var end = Date.now();

	console.log("time passed=" + (end-start));
	//console.log("employees length="+ employees.length);

	// get news headlines by given date, and store in recommends array 
	// which holds the news headline and array of recommended employees
	let pub_date = month + "/" + date + "/" + ((year < 100) ? year + 2000 : year);
	let headlines = await getNewsFromDB(pub_date);
	
	// iterate through headlines and match recommendations to employee
	for(var element of headlines){
		
		var recs = getRecommendations(element, employees);
		recommends.push(
			{"headline": element, "employees" :[]}
		);

		
	}
	//console.log("recommends length="+ recommends.length);

	return {"employees": employees, "recommendations": recommends};
};



/*
$query = 'select * from NewsHeadlines where publication_date="7/14/2019";';
connection.query($query, function(err, rows, fields) {
	//console.log($query);
	if(err){
		console.log("An error ocurred performing the query.");
		console.log(err);
		return;
	}

	console.log("Query succesfully executed: ");
	console.log("length=" + rows.length);

	console.log(rows[0].title);

}); 
*/



/*

const employee = new Employee(1, "Christine", "Oh", "Female", "Ridgewood", "United States", "Software Engineer", "Engineering");

console.log(employee.name);


const news = new NewsHeadline(2, "title", "abstract", 2, "English", "2/4/2019", "author");

console.log(news.toString());
console.log(news.date());
//console.log(new Date(2019, 2, 12));
*/

