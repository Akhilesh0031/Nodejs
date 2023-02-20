var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1000",
  database: "db"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
 
});
module.exports = con;