const mysql = require('mysql');
 const { faker } = require('@faker-js/faker');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'join_us'
});

// SELECTING DATA
var q = 'SELECT * FROM users AS earliest_date ORDER BY created_at LIMIT 1';

connection.query(q, function (error, result, fields) {
  if (error) throw error;
	console.log(result)
});

connection.end();
//**********************************************************

//INSERTING DATA - while you can use similar syntax to the above, its not a good idea
// var person = {
// 	email: faker.internet.email(),
// 	created_at: faker.date.past()
// };

// connection.query("INSERT INTO users SET ?", person, function(err, result) {
//   if (err) throw err;
//   console.log(result);
// });

// connection.end();

//INSERTING DATA multiple entries -- requires an array with arrays ** this shows 500 *
// const data = [];

// for(let i = 0; i < 500; i++) {
// 	data.push([faker.internet.email(), faker.date.past()])	
// };

// var q = 'INSERT INTO users (email, created_at) VALUES ?';

// connection.query(q, [data], function(err, result) {
//   console.log(err);
// 	console.log(result);
// });

// connection.end();













