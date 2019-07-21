// Get the mysql service
var mysql = require('mysql');
var fs = require("fs");

var contents = fs.readFileSync("config.json");
var cred = JSON.parse(contents);

// Add the credentials to access your database
var connection = mysql.createConnection(cred);

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

$query = 'Select * from NewsHeadlines where publication_date="6/2/2019";';

connection.query($query, function(err, rows, fields) {
  console.log($query);
  if(err){
    console.log("An error ocurred performing the query.");
    console.log(err);
    return;
  }

  console.log("Query succesfully executed: ");
  console.log(rows);

});
