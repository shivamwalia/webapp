var express = require('express');
var app = express();

var port =3001;
app.use(express.static(__dirname + '/'));
app.listen(port);

console.log('server stated at '+ port);

app.post('/api/login',function(req,res){

	var results = [{
	title:"java",
	teacher:"shivam",
	level:"beginner"
},{
	title:"c++",
	teacher:"shivam",
	level:"beginner"
},{
	title:"c#",
	teacher:"shivam",
	level:"beginner"}
,{
	title:"python",
	teacher:"shivam",
	level:"beginner"
},{
	title:"swift",
	teacher:"shivam",
	level:"beginner"
}];

res.json(results);

})