var express = require("express");
var validator = require("validator");

var router = express.Router();

var burger = require("../models/burger");

// Get all burgers and render the page to our user.
router.get("*", (req, res) => {
    burger.getAll((err, results) => {
        if (err) {
            console.log(err);
            return res.status(500).end();
        }

        res.render("index", { burgers: results });
    });
});

// Add a new burger from the users request.
router.post("/api/burgers", (req, res) => {
    var newBurger = req.body;

    // Validate our inputs before adding them to the database.
    var empty = validator.isEmpty(newBurger.name);
    var isAlphaNum = validator.isAlphanumeric(newBurger.name);

    if (empty) {
        res.status(400).json({ validation: "Please enter a burger name." });
    }
    else if (!isAlphaNum) {
        res.status(400).json({ validation: "Your burger name contains invalid characters." })
    }
    else
        burger.addBurger(newBurger.name, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).end();
            }

            res.status(201).json({ id: results.insertId });
        });
});

// Update a burger from the users request
router.put("/api/burgers/:id", (req, res) => {
    var burgerUpdates = req.body;

    burger.updateBurger(req.params.id, { devoured: burgerUpdates.devoured }, (err, results) => {
        if (err) {
            console.log(err);
            return res.status(500).end();
        }

        res.json(burgerUpdates);
    });
});

module.exports = router;