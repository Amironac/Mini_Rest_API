const express = require("express");
const router = express.Router();

const Model = require("../model/model");

// Load the homepage
router.get("/", (req,res) => res.render("index"));
// Load the forma
router.get("/forma", (req,res) => res.render("forma"));

router.post("/add" , (req,res) => {
    let { email, password } = req.body;
   

    Model.create({
        Email: email,
        Password: password
    })
    .then(() => res.redirect("/forma"))
    .catch(err =>console.log(err));
})

module.exports = router;