
//Import Express
var express = require('express');

//create the router
var router = express.Router();

//Import burger.js
var burger = require('../models/burger.js');

//GET route - read the bugers in the database
router.get('/', function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

//POST route to create a new burger
router.post('/api/burgers', function (req, res) {
    burger.create([
        "burger_name"
    ], [
        req.body.name
    ], function (result) {
        res.json({ id: result.insertId });
    });
});

//PUT route to update burger to devoured
router.put('/api/burgers/:id', function (req, res) {
    var condition = 'id =' + req.params.id;

    console.log('condition', condition);

    burger.update({
        devoured: req.body.devoured
    }, condition, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});






module.exports = router;