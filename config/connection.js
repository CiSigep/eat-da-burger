var mysql = require("mysql");
var path = require("path");

require("dotenv").config({ path: path.join(".", "config", ".env") } );

var connection = mysql.createConnection({
    host: process.env.DBHOST,
    port: process.env.DBPORT,
    user: process.env.DBUSER,
    password: process.env.DBPASS,
    database: process.env.DBDATABASE
});

connection.connect(err => {
    if(err) throw err;

    console.log("Connected");
});


module.exports = connection;
