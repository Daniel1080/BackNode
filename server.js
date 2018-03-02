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
	
	if(task == 1){RegUsr(req);
	res.write("Executing Reg");	
	}
	if (task == 2){AuthenticateUser(req);}


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


var user = req.body.user;
var name = req.body.name;
var email = req.body.email;
var pass = req.body.password;

var sql = "INSERT INTO users ( user, name, email, pass) VALUES ?";
var values = [[ user , name , email , pass]];
con.query(sql, [values], function(err, result) {
	if(err) throw err;
	console.log("Added User 1");
	con.end();
}); 


}

function AuthenticateUser(req){

	console.log("Executing Login Req");

	var RefinedResults;
	var dbUser;
	var dbPass;

	var con2 = mysql.createConnection({

		host: "127.0.0.1",
		user: "root",
		password: "000000",
		database: "sys"
	});
	
	con2.connect(function(err) {
		if (err ) throw err;
		ok = true;
		console.log("Connected to DB2!")
	});

var user = req.body.user;
var pass = req.body.pass;

console.log(user);
console.log(pass);




var sql22 = "SELECT * from sys.users where users.user = "+'"' + user + '"'
con2.query(sql22, function(err, result2) {
	if(err) throw err;
	console.log("User login query complete. ");
	RefinedResults = JSON.stringify(result2);
	console.log("Results are " + RefinedResults);
	checkResults(RefinedResults);
		
});


function checkResults(RefinedResults){

dbUser = RefinedResults.user;
dbPass = RefinedResults.pass;

console.log(RefinedResults + "Note these are outside query")

console.log("This is user from DB " + dbUser);
console.log("This is pass from DB " + dbPass);

}





}
