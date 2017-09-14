"use strict";

var Sandwich = (function (oldSandwich){
	const bread = {"Brioche": 0.50, "Baguette": 0.50, "Sourdough": 0.50, "Wrap": 0.50, "Naked": 1.00};
	let selectedBreads = []; 

	oldSandwich.getBreadNames = function() {
		return Object.keys(bread);
	};

	oldSandwich.getBreadPrice = function(name) {
		return bread[name];
	};

	oldSandwich.getSelectedBreads = function() {
		return selectedBreads;
	};

	oldSandwich.addBread = function(name){
		selectedBreads.push(name);
	};

	oldSandwich.clearSelectedBreads = function() {
		selectedBreads = []; 
	};

	oldSandwich.getSelectedBreadCost = function() {
		let cost; 
		if (selectedBreads.length !== 0) {
			const prices = selectedBreads.map((name) => {
				return bread[name];
			});
			cost = prices.reduce((sum, price) => {
				return sum + price;
			});
		} else {
			cost = 0; 
		}
		return cost; 
	};

	return oldSandwich;

})(Sandwich || {});

const breadNames = Sandwich.getBreadNames();