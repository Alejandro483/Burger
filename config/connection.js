var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 8081,
  user: "root",
  password: "a123456b",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
