"use strict";

const Sandwich = require("./sandwich.js");

let breads = Sandwich.ingredientTypes.bread;

console.log("breadNames", Sandwich.getIngredientNames(breads));
console.log("breadPrice", Sandwich.getIngredientPrice(breads, "Brioche"));
console.log("breadSelections", Sandwich.getSelectedIngredients(breads));
console.log("addIngredient", Sandwich.addIngredient(breads, "Brioche"));
console.log("getSelectedIngredientCost", Sandwich.getSelectedIngredientCost(breads));
console.log("clearSelectedIngredients", Sandwich.clearSelectedIngredients(breads));


console.log("this should get me something", Sandwich.getIngredientTypeName(breads)); 



const populateIngredients = (ingredientType) => {
	const newDiv = document.createElement("div");
	newDiv.setAttribute("class", "select-container");

	const newSelect = document.createElement("select");
	newSelect.setAttribute("class", `selectpicker show-tick`);
	newSelect.setAttribute("id", Sandwich.getIngredientTypeName(ingredientType));

	document.getElementById("order-container").appendChild(newDiv);
	newDiv.appendChild(newSelect);

	selectEventListener(ingredientType); 

	const names = Sandwich.getIngredientNames(ingredientType); 
	for (let name of names.sort()) {
		let newOption = document.createElement("option");
		newOption.setAttribute("data-subtext", `$${Sandwich.getIngredientPrice(ingredientType, name).toFixed(2)}`);
		newOption.setAttribute("value", `${name}`);
		newOption.textContent = `${name}`;
		newSelect.appendChild(newOption);
	} 
};
	
const selectEventListener = (ingredientType) => {
	$("#order-container").on('changed.bs.select', `select#${Sandwich.getIngredientTypeName(ingredientType)}`, (e) => {
		console.log(e);
		Sandwich.clearSelectedIngredients(ingredientType);
		for (let option of e.target.selectedOptions) {
			Sandwich.addIngredient(ingredientType, option.value);
		}
	});
};

const createPage = (obj) => {
	for (let item in obj) {
		  populateIngredients(item); 
	  }
};

createPage(Sandwich.ingredientTypes);

console.log("hello", Sandwich.ingredientTypes);

// createPage(Sandwich.ingredientTypes); 

// const populateMeats = () => {
// 	const meatContainer = document.getElementById("meat-container");
// 	const meatNames = Sandwich.Meat.getMeatNames();
// 	for (let name of meatNames.sort()) {
// 		meatContainer.innerHTML += `<option data-subtext="$${Sandwich.Meat.getMeatPrice(name).toFixed(2)}" value="${name}">${name}</option>`;
// 	}
// 	$("#meat-container").on('changed.bs.select', (e) => {
// 		Sandwich.Meat.clearSelectedMeats();
// 		for (let option of e.target.selectedOptions) {
// 			Sandwich.Meat.addMeat(option.value);
// 		}
// 	});
// };

// const populateCondis = () => {
//     const condiNames = Sandwich.Condi.getCondiNames(); 
// 	const condiContainer = document.getElementById("condiment-container");
// 	for (let name of condiNames.sort()) {
// 		condiContainer.innerHTML += `<option data-subtext="$${Sandwich.Condi.getCondiPrice(name).toFixed(2)}" value="${name}">${name}</option>`;
// 	}
// 	$("#condiment-container").on('changed.bs.select', (e) => {
// 		Sandwich.Condi.clearSelectedCondis();
// 		for (let option of e.target.selectedOptions) {
// 			Sandwich.Condi.addCondi(option.value);
// 		}
// 	});
// };

// const populateCheeses = () => {
//     const cheeseNames = Sandwich.Cheese.getCheeseNames(); 
// 	const cheeseContainer = document.getElementById("cheese-container");
// 	for (let name of cheeseNames.sort()) {
// 		cheeseContainer.innerHTML += `<option data-subtext="$${Sandwich.Cheese.getCheesePrice(name).toFixed(2)}" value="${name}">${name}</option>`;
// 	}
// 	$("#cheese-container").on('changed.bs.select', (e) => {
// 		Sandwich.Cheese.clearSelectedCheeses();
// 		for (let option of e.target.selectedOptions) {
// 			Sandwich.Cheese.addCheese(option.value);
// 		}
// 	});
// };

// const populateVeggies = () => {
//     const veggieNames = Sandwich.Veggie.getVeggieNames(); 
// 	const veggieContainer = document.getElementById("veggie-container");
// 	for (let name of veggieNames.sort()) {
// 		veggieContainer.innerHTML += `<option data-subtext="$${Sandwich.Veggie.getVeggiePrice(name).toFixed(2)}" value="${name}">${name}</option>`;
// 	}
// 	$("#veggie-container").on('changed.bs.select', (e) => {
// 		Sandwich.Veggie.clearSelectedVeggies();
// 		for (let option of e.target.selectedOptions) {
// 			Sandwich.Veggie.addVeggie(option.value);
// 		}
// 	});
// };

// const calculateTotalCost = () => {	
// 	let breadCost = Sandwich.Bread.getSelectedBreadCost();
// 	let cheeseCost = Sandwich.Cheese.getSelectedCheeseCost();
// 	let condiCost = Sandwich.Condi.getSelectedCondiCost();
// 	let meatCost = Sandwich.Meat.getSelectedMeatCost();
// 	let veggieCost = Sandwich.Veggie.getSelectedVeggieCost();
// 	let totalCost = (breadCost + cheeseCost + condiCost + meatCost + veggieCost);
// 	document.getElementById("total-cost").innerHTML = `Sandwich Price: $${totalCost.toFixed(2)}`; 
// 	return totalCost;
// };

// const loadPage = () => {
// 	populateBreads();
// 	populateMeats();
// 	populateCondis();
// 	populateCheeses();
// 	populateVeggies();
// };

// window.addEventListener("load", loadPage);
// document.getElementById("order-container").addEventListener("change", calculateTotalCost);

// console.log(module);