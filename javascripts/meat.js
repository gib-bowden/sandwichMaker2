"use strict";

const meats = {"turkey": 0.50, "ham": 0.75};
let selectedMeats = []; 

const getMeatNames = () => {
	return Object.keys(meats);
};

const getMeatPrice = (name) => {
	return meats[name];
};

const getSelectedMeats = () => {
	return selectedMeats;
};

const addMeat = (name) => {
	selectedMeats.push(name);
};

const clearSelectedMeats = () => {
	selectedMeats = []; 
};

const getSelectedMeatCost = () => {
	let cost; 
	if (selectedMeats.length !== 0) {
		const prices = selectedMeats.map((name) => {
			return meats[name];
		});
		cost = prices.reduce((sum, price) => {
			return sum + price ;
		});
	} else {
		cost = 0; 
	}
	return cost; 
};



    
 const meatObject = {
	getMeatNames,
	getMeatPrice,
	getSelectedMeats,
	addMeat,
	clearSelectedMeats,
	getSelectedMeatCost,
};

module.exports = meatObject; 