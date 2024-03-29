# News Headline Recommendations

Retrieve list of Employees that matches the News Headline for the given date.

The employees are matched according to the preferences that have decided.

## How to run
From the `solution` directory, run

```
node main.js [date]
```
NOTE: News publication date range from 6/1/2019 to 7/20/2019.


## Database 

### Tables

**NewsHeadlines** (Stores the news headlines)
- newsheadlines_id (PRIMARY KEY)
- title
- abstract
- preference_id
- language
- publication_date
- author

**Employees** (Stores the employee's information)
- id (PRIMARY KEY)
- first_name 
- last_name 
- gender 
- job_title 
- department 
- city 
- country 

**Preferences** (Stores news preference options such as Technology, Business, Politics, etc.)
- preference_id (PRIMARY KEY)
- preference

**EmployeeNewsPreferences** (Stores the which preferences the employee chose)
- employee_id
- preference_id


### Where the data came from
Retrieved news headlines from:
	https://archive.nytimes.com/www.nytimes.com/services/xml/rss/index.html

Generated Random Employee information from:
	https://mockaroo.com/schemas/download




Data stored in AWS RDS MySQL.
