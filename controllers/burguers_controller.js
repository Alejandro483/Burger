var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burger: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burger", function(req, res) {
  burger.insertOne(["burger_name"], [req.body.burer_name],

   function(result) {
    res.redirect("/");
  });
});

router.put("/api/burger/:id", function(req, res) {
  
  burger.updateOne(
    {devoured: true}, req.params.id, function(data){
      res.status(200).end();
    })
  });
module.exports = router;
