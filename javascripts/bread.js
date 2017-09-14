"use strict";

	const breads = {"Brioche": 0.50, "Baguette": 0.50, "Sourdough": 0.50, "Wrap": 0.50, "Naked": 1.00};
	let selectedBreads = []; 

	const getBreadNames = () => {
		return Object.keys(breads);
	};

	const getBreadPrice = (name) => {
		return breads[name];
	};

	const getSelectedBreads = function() {
		return selectedBreads;
	};

	const addBread = (name) => {
		selectedBreads.push(name);
	};

	const clearSelectedBreads = () => {
		selectedBreads = []; 
	};

	const getSelectedBreadCost = () => {
		let cost; 
		if (selectedBreads.length !== 0) {
			const prices = selectedBreads.map((name) => {
				return breads[name];
			});
			cost = prices.reduce((sum, price) => {
				return sum + price;
			});
		} else {
			cost = 0; 
		}
		return cost; 
	};




const Bread = {
	getBreadNames, 
	getBreadPrice, 
	getSelectedBreads, 
	addBread, 
	clearSelectedBreads, 
	getSelectedBreadCost
};

module.exports = Bread; 
