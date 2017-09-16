"use strict";


const bread = require("./bread.js");
const meat = require("./meat.js");
const cheese = require("./cheese.js"); 
const condi = require("./condiments.js");
const veggie = require("./veggies.js");


const getIngredientTypeName = (ingredientType) => {
	return ingredientType.name;
};

const getIngredientNames = (ingredientType) => {
	return Object.keys(ingredientType.objectList);
};

const getIngredientPrice = (ingredientType, name) => {
	return ingredientType.objectList[name];
};

const getSelectedIngredients = (ingredientType) => {
	return ingredientType.selectedIngredients;
};

const addIngredient = (ingredientType, name) => {
	ingredientType.selectedIngredients.push(name);
};

const clearSelectedIngredients = (ingredientType) => {
	ingredientType.selectedIngredients = []; 
};

const getSelectedIngredientCost = (ingredientType) => {
	let cost; 
	if (ingredientType.selectedIngredients.length !== 0) {
		const prices = ingredientType.selectedIngredients.map((name) => {
			return getIngredientPrice(ingredientType, name);
		});
		cost = prices.reduce((sum, price) => {
			return sum + price;
		});
	} else {
		cost = 0; 
	}
	return cost; 
};

const Sandwich = {
    ingredientTypes: [
        bread,
        meat,
        cheese,
        condi,
        veggie
    ],
    getIngredientTypeName,
    getIngredientNames,
    getIngredientPrice,
    getSelectedIngredients,
    addIngredient,
    clearSelectedIngredients,
    getSelectedIngredientCost
};



module.exports = Sandwich; 