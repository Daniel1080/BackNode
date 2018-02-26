var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var mysql = require('mysql');

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/' , function(req, res){


	var task = req.body.task;
	var name = req.body.name;
	console.log(task);
	console.log(name);
	
	if(task == 1){RegUsr(req);}


});
app.get('/', function(req, res) {


res.send("Hello There");


});
app.listen(port);
console.log("Listening ");

function RegUsr(req){
var ok = false;

var con = mysql.createConnection({

	host: "127.0.0.1",
	user: "root",
	password: "000000",
	database: "sys"
});

con.connect(function(err) {
	if (err ) throw err;
	ok = true;
	console.log("Connected to DB!")
});

var userid = req.body.userid;
var user = req.body.user;
var name = req.body.name;
var email = req.body.email;
var pass = req.body.password;

var sql = "INSERT INTO users (userid, user, name, email, password) VALUES ('" + userid + "','" + user + "','" + "'" + name + "','" + email + "','" + password + "')";
con.query(sql, function(err, result) {
	if(err) throw err;
	console.log("Added User 1");
}); 


}


