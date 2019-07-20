const fs = require('fs');

var languages = ["English", "French", "Spanish", "Italian", "German", "Portuguese", "Chinese", "Korean", "Japanese"];
var dates = [
    "6/1/2019", "6/2/2019", "6/3/2019", "6/4/2019", "6/5/2019", "6/6/2019", "6/7/2019", "6/8/2019", "6/9/2019", "6/10/2019", 
    "6/11/2019", "6/12/2019", "6/13/2019", "6/14/2019", "6/15/2019", "6/16/2019", "6/17/2019", "6/18/2019", "6/19/2019", "6/20/2019", 
    "6/21/2019", "6/22/2019", "6/23/2019", "6/24/2019", "6/25/2019", "6/26/2019", "6/27/2019", "6/28/2019", "6/29/2019", "6/30/2019", 
    "7/1/2019", "7/2/2019", "7/3/2019", "7/4/2019", "7/5/2019", "7/6/2019", "7/7/2019", "7/8/2019", "7/9/2019", "7/10/2019", 
    "7/11/2019", "7/12/2019", "7/13/2019", "7/14/2019", "7/15/2019", "7/16/2019", "7/17/2019", "7/18/2019", "7/19/2019", "7/20/2019"
];

var authors = ["Trumaine Mangon", "Bordy Buesden", "Baron Sprasen", "Sheelah Paoletti", "Meier Yaneev", "Reena Sissons", "Cyndi Rontree", 
"Garwood Carlisso", "Gerardo Hitscher", "Danella Burfoot", "Jules Harly", "Fredra Meachem", "Ermina Kick", "Silvia Barter", "Rozella Jepp", 
"Noach Firmager", "Wilfrid Skillington", "Langston Reisenberg", "Tobi Clewlowe", "Gisele Smitherman", "Howie Sima", "Letisha Bawles", 
"Corny Tolliday", "Tamara Fayerman", "Bondie Graal", "Sebastian Emslie", "Nap Sooper", "Pippa Stailey", "Lucia Burchill", "Tymothy Satford",
"Bruno Jiggle", "Dorisa Langrish", "Anjela Baddoe", "Carolynn Linning", "Matteo Dawidowicz", "Teddie Ranshaw", "Nanon Scotchbourouge", 
"Herbie Poulglais", "Codie Bulfield", "Sollie Panichelli", "Salvidor Males", "Guinna Gosneye", "Fifine Carles", "Billye Nanninini", 
"Magda Atmore", "Mabelle Gore", "Pren Denisyev", "Marrilee Tuddenham", "Caspar Fritchly", "Ganny Markovich"];

/*
$create_table_query = 'CREATE TABLE NewsHeadlines ('+
  'newsheadlines_id INT(6) UNSIGNED AUTO_INCREMENT, '+
  'title VARCHAR(30) NOT NULL, '+
  'abstract VARCHAR(30) NOT NULL, '+
  'preference_id VARCHAR(30) NOT NULL, '+
  'language VARCHAR(30) NOT NULL, '+
  'publication_date VARCHAR(30) NOT NULL, '+
  'author VARCHAR(30) NOT NULL, '+
  'PRIMARY KEY (newsheadlines_id))';
)
*/
function genLanguage(){
    var index = Math.floor(Math.random() * languages.length);
    //console.log(index);
    return languages[index];

}
function genDate(){
    var index = Math.floor(Math.random() * dates.length);
    return dates[index];
}
function genAuthor(){
    var index = Math.floor(Math.random() * authors.length);
    return authors[index];
}

fs.readFile('news.txt', (err, data) => { 
    if (err) throw err; 
  
    //console.log(data.toString().substring(0,100)); 

    var news = data.toString();
    
    var titleStart = news.indexOf("<title>");
    var titleEnd = news.indexOf("</title>");
    
    var desStart = news.indexOf("<description>");
    var desEnd = news.indexOf("</description>");

    

    


    while(titleStart != -1){

        var title = news.substring(titleStart + 7, titleEnd-1);
        if(title.substring(0,1) == '\n'){
            //console.log("yes")
            title = title.substring(1);
        }
        var abstract = news.substring(desStart +13, desEnd-1)
        if(abstract.substring(0,1) == '\n'){
            //console.log("yes")
            abstract = abstract.substring(1);
        }

        var data = '\'(\"' + title + '\"' + ', \"' + abstract + '\", ';
        data = data + 3 + ', ';
        data = data + '\"' + genLanguage()  + '\", ';
        data = data + '\"' + genDate()  + '\", ';
        data = data + '\"' + genAuthor()  + '\"),\' + \n';
        
        console.log(data);

        fs.appendFile('parsedNews.txt', data, (err) => { 
            if (err) throw err; 

        });

        news = news.substring(desEnd+14);

        
        titleStart = news.indexOf("<title>");
        titleEnd = news.indexOf("</title>");
        
        desStart = news.indexOf("<description>");
        desEnd = news.indexOf("</description>");

        
    } 


}) 



/*

let data = "Learning how to write in a file."
  
// Write data in 'Output.txt' . 
fs.writeFile('peeledNews.txt', data, (err) => { 
      
    // In case of a error throw err. 
    if (err) throw err; 
}) 

*/