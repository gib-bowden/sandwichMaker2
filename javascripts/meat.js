"use strict";

const objectList = {
	"turkey": 0.50,
	"ham": 0.75
};

let selectedIngredients = []; 
   
 const meatExport = {
	name: "meat",
	selectType: "multi",
	objectList, 
	selectedIngredients
};

module.exports = meatExport; 