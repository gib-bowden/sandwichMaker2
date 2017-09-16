"use strict";

const objectList = {
	"lettuce": 0.50,
	"tomato": 0.75
};

let selectedIngredients = []; 

const veggieExport = {
	name: "veggie",
	selectType: "multi",
	objectList, 
	selectedIngredients
};

module.exports = veggieExport; 