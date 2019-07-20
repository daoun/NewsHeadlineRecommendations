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

	console.log(Util.preference[1]);
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

async function getEmployeesFromDB(){
	return new Promise(async resolve => {
		
		$query = 'select * from Employees;';
		await connection.query($query, function(err, rows, fields) {
			if(err){
				console.log("An error ocurred performing the query.");
				console.log(err);
				return;
			}

			// get employees from database and store in array of Employees
			let employees = [];
			for(var element of rows){
				//console.log(element);
				console.log(element.job_title + ", " + element.department);
				
				/*if(element.job_title.toLowerCase().indexOf("engineer") > -1 || element.department.toLowerCase().indexOf("engineer") > -1 ){
					console.log(element.id);
				} */
				employees.push(new Employee(element.employee_id, element.firstName, element.lastName, element.gender, element.city, element.country, element.job_title, element.department));
			}
			resolve(employees);
			
		});
	}) 
}

function getRecommendations(headlines, employees){


	return [];
}


Recommend.prototype.matchNewsToEmployees = async function matchNewsToEmployees(month, date, year) {
	
	let recommends = []

	// get array of employees from database
	let employees = await getEmployeesFromDB();
	console.log("employees length="+ employees.length);

	// get news headlines by given date, and store in recommends array 
	// which holds the news headline and array of recommended employees
	let pub_date = month + "/" + date + "/" + ((year < 100) ? year + 2000 : year);
	let headlines = await getNewsFromDB(pub_date);
	
	// iterate through headlines and match recommendations to employee
	for(var element of headlines){
		//var headline = new NewsHeadline(element.id, element.title, element.abstract, element.preference_id, element.language, element.publication_date, element.author);
		//console.log(element);
		var recs = getRecommendations(element, employees);
		recommends.push({"headline": element, "employees" :recs});

		
	}
	console.log("recommends length="+ recommends.length);

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

