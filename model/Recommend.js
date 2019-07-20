const Employee = require('./employee');
const NewsHeadline = require('./newsheadline');
const mysql = require('mysql');



var connection = mysql.createConnection({
  host     : 'voicecommand.cno5r5dyegie.us-east-1.rds.amazonaws.com',
  user     : 'daoun',
  password : 'welcome123',
  database : 'command',
  timeout: 60000
});

// connect to mysql
connection.connect(function(err) {
  // in case of error
  if(err){
    console.log(err);
    console.log(err.fatal);
  } else {
    console.log("connection successful");
  }
});

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


/*

const employee = new Employee(1, "Christine", "Oh", "Female", "Ridgewood", "United States", "Software Engineer", "Engineering");

console.log(employee.name);


const news = new NewsHeadline(2, "title", "abstract", 2, "English", "2/4/2019", "author");

console.log(news.toString());
console.log(news.date());
//console.log(new Date(2019, 2, 12));
*/


