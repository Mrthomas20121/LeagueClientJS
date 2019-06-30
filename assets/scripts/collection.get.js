const mysql = require('mysql');

let connection = mysql.createConnection({
  host:'localhost', // using localhost for test purpose
  user:'leagueClient',
  password:'dgjklsems', 
  database:'league_of_legends'
});
let escape = connection.escape;

connection.connect((err) => {
  if(err) throw err;
});
connection.query(escape(`select * from collection where user = ${user}`), (error, results, fields) => {
  // do something with the query
});
