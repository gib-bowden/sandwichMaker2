"use strict";

const objectList = {
	"ketchup": 0.50,
	"mayo": 0.75
};

let selectedIngredients = []; 

const condiExport = {
	name: "condiment",
	selectType: "multi",
	objectList, 
	selectedIngredients
};

module.exports = condiExport; 