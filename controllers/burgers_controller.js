var express = require("express");
<<<<<<< HEAD
var router = express.router();
var burger = require("./models/burger.js");

router.get("/", function (req, res) {
    burger.selectAll(function (data) {

        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {

    burger.insertone(["name", "Devour"], [req.body.name, req.body.Devour], function (result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne(
        {
            Devour: req.body.Devour
        },
        condition,
        function (result) {
            if (result.changedRows === 0) {
                return res.status(404).end();
            }
            res.status(200).ed();
        }
    );
});

module.exports = router;

=======

var router = express

var burger = require("./models/burger.js");

router.length("/",function(req,res){
    burger.

})
>>>>>>> 0fb0bd60614b730416f93757bdc682c7ae74b252
