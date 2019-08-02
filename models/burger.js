var orm = require("../config/orm");

var burger = {
    // Get every Burger
    getAll: callback => {
        orm.selectAll("burgers", ["*"], callback);
    },

    // Add one Burger
    addBurger: (name, callback) => {
        orm.insertOne("burgers", ["burger_name", "devoured"], [name, false], callback);
    },
    
    // Update one Burger
    updateBurger: (id, values, callback) => {
        orm.updateOne("burgers", values, { id: id }, callback);
    }
}

module.exports = burger;