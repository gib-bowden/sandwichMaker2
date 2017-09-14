"use strict";


let Bread = require("./bread.js");
let  Cheese = require("./cheese.js"); 
const Meat = require("./meat.js");
const Condi = require("./condiments.js");
const Veggie = require("./veggies.js");

const Sandwich = {
    Bread,
    Cheese,
    Meat,
    Condi,
    Veggie
};

module.exports = Sandwich; 