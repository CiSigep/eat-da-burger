var connection = require("./connection");

var BASE_SELECT = "SELECT ?? FROM ??";
var BASE_FUNCTION = (callback) => {
    return function(err, results) {
        if(err) throw err;

        callback(results);
    }
};


var orm = {
    selectAll:(table, columns, callback) => {
        connection.query(BASE_SELECT, [columns, table], BASE_FUNCTION(callback));
    },

    select: (table, columns, conditions, callback) => {
        var query = BASE_SELECT + " WHERE ?";

        connection.query(query, [columns, table, conditions], BASE_FUNCTION(callback));
    },

    update: (table, values, conditions, callback) => {
        var query = "UPDATE ?? SET ? WHERE ?";

        connection.query(query, [table, values, conditions], BASE_FUNCTION(callback));
    },

    save: (table, columns, values, callback) => {
        var query = "INSERT INTO ??(??) values (?)";

        connection.query(query, [table, columns, values], BASE_FUNCTION(callback));
    }
};


module.exports = orm;