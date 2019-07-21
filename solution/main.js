const Recommend = require('./recommend');

let rec = new Recommend();

async function getResult(){
	let result = await rec.matchNewsToEmployees(7,1,2019);
	//console.log("result", result.recommendations);

	result.forEach(function(rec){
		var str = "news_id="+rec.headline.id+ ", pref_id=" +rec.headline.preference_id + ": [";
		rec.employees.forEach(function(emp){
			str = str + emp +",";
		})
		str+="]";
		console.log(str);
	});
}

getResult();
