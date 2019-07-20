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

$query = 'Select * from NewsHeadlines;';
$delete_query = 'Delete from NewsHeadlines where id=1;';
$drop = "drop table NewsHeadlines;"

$create_table_query = 'CREATE TABLE NewsHeadlines ('+
  'newsheadlines_id INT(6) UNSIGNED AUTO_INCREMENT, '+
  'title VARCHAR(30) NOT NULL, '+
  'abstract VARCHAR(400) NOT NULL, '+
  'preference_id VARCHAR(30) NOT NULL, '+
  'language VARCHAR(30) NOT NULL, '+
  'publication_date VARCHAR(30) NOT NULL, '+
  'author VARCHAR(30) NOT NULL, '+
  'PRIMARY KEY (newsheadlines_id))';


$add_query = 
'insert into NewsHeadlines (title, abstract, preference_id, language, publication_date, author) values ' +
'("World Trade Center Arts Project Finds New President", "Leslie Koch, who led Governors Island, will go to the Perelman Center, the final piece of the plan to revive the Lower Manhattan site.", 3, "German", "7/9/2019", "Trumaine Mangon"),' + 
'("Jack Viertel Stepping Down at Encores! After 20 Years as Leader", "A tenure that included 60 concert presentations of classic shows and led to several Broadway productions will conclude with “Thoroughly Modern Millie.”", 3, "Spanish", "6/22/2019", "Bordy Buesden"),' + 
'("‘Beautiful’ to Close at the End of Octobe", "The Carole King musical has grossed nearly $250 million since opening on Broadway in 2014.", 3, "English", "6/14/2019", "Tamara Fayerman");';


connection.query($add_query, function(err, rows, fields) {
  //console.log($query);
  if(err){
    console.log("An error ocurred performing the query.");
    console.log(err);
    return;
  }

  console.log("Query succesfully executed: ");
  console.log(rows);

});
