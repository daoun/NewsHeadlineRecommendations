// Get the mysql service
var mysql = require('mysql');

// Add the credentials to access your database
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

$query = "Select * from Employees;";

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
