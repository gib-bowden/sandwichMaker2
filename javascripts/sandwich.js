"use strict";


const data = require("./data.js");


let selectedIngredients = []; 
let ingredientsArr = []; 

const setIngredients = (arr) => {
 ingredientsArr = arr;
 console.log("ingreidents from set ingredients function", ingredientsArr);
};

const getSelectedIngredients = () => {
	return selectedIngredients;
};

const addIngredient = (selectedIngredient) => {
	ingredientsArr.forEach((ingredient) => {
		if (selectedIngredient === ingredient.name) {
			selectedIngredients.push(ingredient); 
		}
	});
};

const removeIngredient = (selectedIngredient) => {
	selectedIngredients.forEach((ingredient, index) => {
		if (selectedIngredient === ingredient.name) {
			selectedIngredients.splice(index, 1);
			removeIngredient(selectedIngredient);
		}
	});
};

const getSandwichPrice = () => {
	let cost; 
	if (selectedIngredients.length !== 0) {
		const prices = selectedIngredients.map((ingredient) => {
			return ingredient.price;
		});
		cost = prices.reduce((sum, price) => {
			return sum + price;
		});
	} else {
		cost = 0; 
	}
	return cost.toFixed(2); 
};

const listUniqueCategorySelections = () => {
	var selectedCategories = selectedIngredients.map((item) => {return item.categoryName;});
	return selectedCategories.filter((item, index, arr) => {return arr.indexOf(item) === index;});
};

const Sandwich = {
	getSelectedIngredients,
	addIngredient,
	removeIngredient,
	getSandwichPrice, 
	setIngredients,
	listUniqueCategorySelections,
	ingredientsArr
};


module.exports = Sandwich; 