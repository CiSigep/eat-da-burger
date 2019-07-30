var express = require("express");

var router = express.Router();

var burger = require("../models/burger");

router.post("/api/burgers", (req, res) => {
    var newBurger = req.body;

    burger.addBurger(newBurger.name, (results) => {
        res.json({id: results.insertId});
    });
});

router.put("/api/burgers/:id", (req, res) => {
    var burgerUpdates = req.body;

    burger.updateBurger(req.params.id, burgerUpdates, (results) => {
        res.json(burgerUpdates);
    })
});

module.exports = router;