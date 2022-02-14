const mysql = require('mysql');
 const { faker } = require('@faker-js/faker');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'join_us'
});

// SELECTING DATA
// var q = 'SELECT * FROM users';

// connection.query(q, function (error, results, fields) {
//   if (error) throw error;
//   console.log(results[0].email);
// 	console.log(results[0].created_at);
// 	console.log(results[1].email);
// 	console.log(results[1].created_at);
// });

// connection.end();
//**********************************************************

//INSERTING DATA - while you can use similar syntax to the above, its not a good idea
var person = {email: faker.internet.email()};

connection.query("INSERT INTO users SET ?", person, function(err, result) {
  if (err) throw err;
  console.log(result);
});

connection.end();










