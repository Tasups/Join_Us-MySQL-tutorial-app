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

// HOME PAGE***************************************************************
app.get("/", function(req, res){
	const q = 'SELECT COUNT(*) AS count FROM users';
	connection.query(q, function(err, result){
		if (err) throw err;
		const count = result[0].count;
		res.render("home", {count: count});
	  //res.send(`We have ${count} users in the database.`);
	})
});

// SUBMISSION ACTION AND SEND, MUST CHANGE TO RENDER VIA EJS PROTOCOLS ****
app.post('/register', function(req, res){
	const person = {
		email: req.body.email
	};
	connection.query('INSERT INTO users SET ?', person, function(err, result){
		if(err) throw err;
		res.send("Thanks for signing up!")
	})
});

app.listen(3000, function () {
console.log('App listening on port 3000!');
});