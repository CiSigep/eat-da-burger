var orm = require("../config/orm");

var burger = {
    getAll: callback => {
        orm.selectAll("burgers", ["*"], callback);
    },
    getNotDevoured: callback => {
        orm.select("burgers", ["*"], { devoured: false }, callback);
    },
    getDevoured: callback => {
        orm.select("burgers", ["*"], { devoured: true }, callback);
    },
    addBurger: (name, callback) => {
        orm.save("burgers",["burger_type", "devoured"], [name, false], callback);
    },
    updateBurger: (id, values, callback) => {
        orm.update("burgers", values, { id: id }, callback);
    }

}

module.exports = burger;