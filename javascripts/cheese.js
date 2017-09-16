"use strict";

const objectList = {
	"american": 0.10, 
	"swiss": 0.15
};

let selectedIngredients = []; 

const cheeseExport = {
	name: "cheese",
	selectType: "multi",
	objectList, 
	selectedIngredients
};
    
module.exports = cheeseExport; 