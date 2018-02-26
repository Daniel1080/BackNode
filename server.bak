var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/' , function(req, res){


	var task = req.body.task;
	var name = req.body.name;
	console.log(task);
	console.log(name);
	Reg(req);
	res.send(task + '  ' + '   ' + name );


});
app.get('/', function(req, res) {


res.send("Hello There");


});
app.listen(port);
console.log("Listening ");

function Reg(req){

console.log(req.body.name);


}
