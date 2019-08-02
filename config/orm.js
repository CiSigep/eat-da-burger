var connection = require("./connection");


var orm = {
    // Select all from a single table
    selectAll:(table, columns, callback) => {
        connection.query("SELECT ?? FROM ??", [columns, table], callback);
    },

    // Update one item
    updateOne: (table, values, conditions, callback) => {
        connection.query("UPDATE ?? SET ? WHERE ?", [table, values, conditions], callback);
    },

    // Insert one item
    insertOne: (table, columns, values, callback) => {
        connection.query("INSERT INTO ??(??) values (?)", [table, columns, values], callback);
    }
};


module.exports = orm;