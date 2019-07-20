$create_table_query = 'CREATE TABLE Employees ('+
  'id INT(6) UNSIGNED AUTO_INCREMENT, '+
  'first_name VARCHAR(30) NOT NULL, '+
  'last_name VARCHAR(30) NOT NULL, ' +
  'gender VARCHAR(30) NOT NULL, ' +
  'job_title VARCHAR(30) NOT NULL, ' +
  'department VARCHAR(30) NOT NULL, ' +
  'city VARCHAR(30) NOT NULL, ' +
  'country VARCHAR(30) NOT NULL, ' +
  'PRIMARY KEY (id))';

$query = 'Select * from Employees where first_name="Jonis";';
$delete_query = 'Delete from Employees where id=5002;';
$drop = "drop table NewsHeadlines;"


$add_query = 
'insert into Employees (first_name, last_name, gender, job_title, department, city, country) values ' + 
'("Jonis", "McCrie", "Female", "Executive Secretary", "Legal", "Pamiers", "France"),' +
'("Hedwig", "Enderlein", "Female", "Research Associate", "Training", "Peicheng", "China");';




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




$create_table_query = 'CREATE TABLE Preferences ('+
  'preference_id INT(6) UNSIGNED AUTO_INCREMENT, '+
  'preference VARCHAR(30) NOT NULL, '+
  'PRIMARY KEY (preference_id))';


$add_query = 
'insert into Preferences (preference) values ' + 
'("Politics"),' +
'("Technology"),' +
'("Entertainment"),' +
'("Fashion"),' +
'("Business"),' +
'("Science"),' +
'("Health"),' +
'("Sports"),' +
'("Travel"),' +
'("Weather");';


1'("Politics"),' 
2'("Technology"),' 
3'("Entertainment"),' 
4'("Fashion"),' 
5'("Business"),' 
6'("Science"),' 
7'("Health"),' 
8'("Sports"),' 
9'("Travel"),' 
10'("Weather")' 

