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
		//console.log("connection successful");
	}
});

var Recommend = module.exports = function Recommend(){
}

/**
 * matches newsheadlines (from specified date) to employees
 * 
 * Returns list of recommendations which contains object of headline and 
 * 			employee list by employee_id )
 */
Recommend.prototype.matchNewsToEmployees = async function matchNewsToEmployees(month, date, year) {
	return new Promise(async resolve => {
		let recommends = []

		// get list of employees by preferences (object)
		let preferences = await getPreferenceToEmployeeListDB();


		// get array of newsheadlines by given date
		let pub_date = month + "/" + date + "/" + ((year < 100) ? year + 2000 : year);
		let headlines = await getNewsFromDB(pub_date);
		

		// iterate through headlines and match recommendations to employee
		for(var h = 0; h < headlines.length; h++){
			var headline = headlines[h];
			recommends.push(
				{"headline": headline, "employees" : preferences[headline.preference_id]}
			);
		}
		resolve( recommends );
	});
};


/**
 * gets newsheadline by date from the NewsHeadlines table
 * 
 * Returns list of NewsHeadline
 */
async function getNewsFromDB(date){
	return new Promise(async resolve => {
		
		const query = 'select * from NewsHeadlines where publication_date="' + date + '";';
	
		await connection.query(query, function(err, rows, fields) {
			if(err){
				console.log("An error ocurred performing the query.");
				console.log(err);
				return;
			}

			// get news headlines from database and store in array of NewsHeadlines
			let news = [];
			
			for(var element of rows){
				news.push(
					new NewsHeadline(
						element.newsheadlines_id, element.title, element.abstract, element.preference_id, 
						element.language, element.publication_date, element.author
					)
				);
			}
			resolve(news);
		});
	}) 
}


/**
 * gets preferences of all employees
 * 
 * Returns an object (key - preference id, value - list of Employees)
 */
async function getPreferenceToEmployeeListDB(){
	return new Promise(async resolve => {
		
		const query = 'select * from EmployeeNewsPreferences;';
		
		await connection.query(query, function(err, rows2, fields) {
			if(err){
				console.log("An error ocurred performing the query.");
				console.log(err);
				return;
			}
			
			// organize into object according to preference_id
			let preferences = {};
			rows2.forEach(function(pref){
				if(preferences[pref.preference_id] == undefined){
					preferences[pref.preference_id] =  [];
					preferences[pref.preference_id].push(pref.employee_id);
				} else {
					preferences[pref.preference_id].push(pref.employee_id);
				}
			});
			resolve(preferences);
		});

	}) 
}


