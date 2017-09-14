"use strict";


const Bread = require("./bread.js");
const Meat = require("./meat.js");
const Cheese = require("./cheese.js"); 
const Condi = require("./condiments.js");
const Veggie = require("./veggies.js");

const Sandwich = {
    Bread,
    Meat,
    Cheese,
    Condi,
    Veggie
};

module.exports = Sandwich; 