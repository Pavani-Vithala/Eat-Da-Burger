var mysql = require("mysql");

var connection = mysql.createConnection({
host:"localhost",
port:3306,
User:"root",
password: "password",
database:"burgers_db"
});

connection.connect(function(err){
if(err){
console.error("error connecting:" + err.stack);
return;
}
console.log("Connected as id: " + connection.threadid);
});

module.export = connection;