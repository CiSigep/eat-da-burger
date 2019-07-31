var connection = require("./connection");

var BASE_FUNCTION = (callback) => {
    return function(err, results) {
        if(err) throw err;

        callback(results);
    }
};


var orm = {
    selectAll:(table, columns, callback) => {
        connection.query("SELECT ?? FROM ??", [columns, table], BASE_FUNCTION(callback));
    },

    updateOne: (table, values, conditions, callback) => {
        connection.query("UPDATE ?? SET ? WHERE ?", [table, values, conditions], BASE_FUNCTION(callback));
    },

    insertOne: (table, columns, values, callback) => {
        connection.query("INSERT INTO ??(??) values (?)", [table, columns, values], BASE_FUNCTION(callback));
    }
};


module.exports = orm;