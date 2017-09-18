"use strict";

const data = require("./data.js");

data.initializer(); 


// const populateIngredients = (ingredientType) => {
// 	const div = createIngredientDiv(ingredientType);
// 	const select = createIngredientSelect(ingredientType, div);
// 	selectEventListener(ingredientType); 
// 	createOptions(ingredientType, select); 

// };

// const createIngredientDiv = (ingredientType) => {
// 	const newDiv = document.createElement("div");
// 	newDiv.setAttribute("class", "select-container");
// 	newDiv.innerHTML = `${ingredientType.name} Options`;
// 	document.getElementById("order-container").appendChild(newDiv);
// 	return newDiv; 
// };

// const createIngredientSelect = (ingredientType, parentElement) => {
// 	const newSelect = document.createElement("select");
// 	let dataActionsAtt = document.createAttribute("data-actions-box");
// 	dataActionsAtt.value = "true";
// 	let multipleAtt = document.createAttribute("multiple");
// 	if (ingredientType.selectType === "multi") {
// 		newSelect.setAttribute("class", "selectpicker");
// 		newSelect.setAttributeNode(dataActionsAtt); 
// 		newSelect.setAttributeNode(multipleAtt); 
// 	} else {
// 		newSelect.setAttribute("class", "selectpicker show-tick");
// 	}
// 	newSelect.setAttribute("title", `Select your ${ingredientType.name}...`);
// 	newSelect.setAttribute("id", Sandwich.getIngredientTypeName(ingredientType));
// 	parentElement.appendChild(newSelect);
// 	return newSelect; 
// };
	
// const createOptions = (ingredientType, parentElement) => {
// 	const names = Sandwich.getIngredientNames(ingredientType); 
// 	for (let name of names.sort()) {
// 		let newOption = document.createElement("option");
// 		newOption.setAttribute("data-subtext", `$${Sandwich.getIngredientPrice(ingredientType, name).toFixed(2)}`);
// 		newOption.setAttribute("value", `${name}`);
// 		newOption.textContent = `${name}`;
// 		parentElement.appendChild(newOption);
// 	} 
// };

// const selectEventListener = (ingredientType) => {
// 	$("#order-container").on('changed.bs.select', `select#${Sandwich.getIngredientTypeName(ingredientType)}`, (e) => {
// 		console.log(e);
// 		Sandwich.clearSelectedIngredients(ingredientType);
// 		for (let option of e.target.selectedOptions) {
// 			Sandwich.addIngredient(ingredientType, option.value);
// 		}
// 	});
// };

// const createPage = () => {
// 	Sandwich.ingredientTypes.forEach ((ingredientType) => {
// 		populateIngredients(ingredientType); 
// 	});
// };

// const calculateTotalCost = () => {
// 	let totalCost = 0; 	
// 	Sandwich.ingredientTypes.forEach((obj) => {
// 		totalCost += Sandwich.getSelectedIngredientCost(obj);
// 	});
// 	document.getElementById("total-cost").innerHTML = `Sandwich Price: $${totalCost.toFixed(2)}`; 
// 	return totalCost;
// };

// document.getElementById("order-container").addEventListener("change", calculateTotalCost);


// createPage();