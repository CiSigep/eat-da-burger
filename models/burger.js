var orm = require("../config/orm");

var burger = {
    getAll: callback => {
        orm.selectAll("burgers", ["*"], callback);
    },
    addBurger: (name, callback) => {
        orm.insertOne("burgers", ["burger_name", "devoured"], [name, false], callback);
    },
    updateBurger: (id, values, callback) => {
        orm.updateOne("burgers", values, { id: id }, callback);
    }

}

module.exports = burger;