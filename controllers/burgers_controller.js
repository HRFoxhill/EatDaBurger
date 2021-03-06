var express = require("express"); // import express module
var router = express.Router(); // create instance of an express router


// ===========================================================================
// The controller will recieve requests from the View (User Website)
//  The controller will handle those requests by calling the appropriate Model
// ===========================================================================

// Import burger model to use its database functions.
var burgerModel = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
// -----------------------------------------------------------------

// handle a get request from root to get all entries 
router.get("/", function (req, res) {

  // call burger model function to get all columns from the burger table
  burgerModel.all(function (data) {
    var burgerObj = {
      burger: data
    };
    console.log(burgerObj);

    // use array of objects from the database query to load index.handlebars
    res.render("index", burgerObj);
  });
});

router.get("/api/burger", function (req, res) {

  // call burger model function to get all columns from the burger table
  burgerModel.all(function (data) {
    var allBurgers = data;

    console.log(allBurgers);
res.json(data);
    // use array of objects from the database query to load index.handlebars
  });
});

// handle a post request for a specific entry 
router.post("/api/burger", function (req, res) {

  DEBUG:
  console.log("Controller got: ");
  console.log("--- Name:  " + req.body.burger_name);
  console.log("--- Eaten: " + req.body.devoured);

  // call burger model function to create a new entry into the database
  burgerModel.create(["burger_name", "devoured"],
    [req.body.burger_name, req.body.devoured],
    function (result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
});

router.put("/api/burger/:id", function (req, res) {
  var putBurger = "id = " + req.params.id;

  console.log("Burger Put:", putBurger);

  // use burger model function to update an entry in database with new info in specific columns
  burgerModel.update({ devoured: req.body.devoured }, putBurger, function (result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// handle a delete request for a specific entry
router.delete("/api/burger/:id", function (req, res) {

  // get the id of the entry from the request parameters
  var putBurger = "id = " + req.params.id;

  // use burger model function to delete an entry in the database
  burgerModel.delete(putBurger, function (result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


// ---------------------------------------------------------------------------

// Export routes for server.js to use.
module.exports = router;