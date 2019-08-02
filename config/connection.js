var mysql = require("mysql");

var connection;

if(process.env.NODE_ENV === "development"){ // Use .env only locally
    var path = require("path");

    require("dotenv").config({ path: path.join(".", "config", ".env") } );
}

// JAWSDB connection
if(process.env.JAWSDB_URL)
    connection = mysql.createConnection(process.env.JAWSDB_URL);
else // Other Connections
    connection = mysql.createConnection({
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
