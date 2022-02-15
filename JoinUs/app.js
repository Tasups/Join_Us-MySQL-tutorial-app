const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'join_us'
});

app.get("/", function(req, res){
	const q = 'SELECT COUNT(*) AS count FROM users';
	connection.query(q, function(err, result){
		if (err) throw err;
		const count = result[0].count;
		res.render("home", {count: count});
	  //res.send(`We have ${count} users in the database.`);
	})
});

app.post('/register', function(req, res){
	console.log("POST REQUEST SENT TO /REGISTER!", req.body.email);
});

app.get("/joke", function(req, res){
	const joke = "What do you call a dog that can do magic tricks? A Labracadabrador!";
	res.send(joke);
})

app.get("/random_num", function(req, res){
  let num = Math.floor(Math.random() * 10) + 1;
	console.log(num);
  res.send(`Your lucky number is ${num}!`);
});

app.listen(3000, function () {
console.log('App listening on port 3000!');
});