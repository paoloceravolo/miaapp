exports.index = function(req, res){

var data = require('../public/javascripts/data.json');
var book3 = [];
for (i=0; i < 3; i++){
	book3.push(data.data.book[i]);
	};

var book6 = [];
for (i=3; i < 6; i++){
	book6.push(data.data.book[i]);
	};

  res.render('index', 
  	{title: data.data.author.name,
  	bio: data.data.author.shortBio + ", " + data.data.author.birth,
  	book3: book3,
  	book6: book6});
}