const NewsRecommend = require('./recommend');

let rec = new NewsRecommend();


async function getResult(){
	const date = getDateArg();
	if(date.length == 0){
		console.log("Please specify the date. Ex. 7/1/2019");
		return;
	}

	let result = await rec.matchNewsToEmployees(parseInt(date[0]), parseInt(date[1]), parseInt(date[2]));
	
	// print out result
	result.forEach(function(rec){
		var str = "news_id="+rec.headline.id+ ", pref_id=" +rec.headline.preference_id + ": [";
		rec.employees.forEach(function(emp){
			str = str + emp +",";
		})
		str+="]";
		console.log(str);
	}); 
	process.exit();
}
	
function getDateArg(){
	
	if(process.argv.length <= 2){
		return [];
	} else {
		process.argv[2]
		const date = process.argv[2].split('/');
		return date;
	}
}


getResult();
