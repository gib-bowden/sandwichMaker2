"use strict";

var Sandwich = (function (oldSandwich){
	const condis = {"ketchup": 0.50, "mayo": 0.75};
	let selectedCondis = []; 

	oldSandwich.getCondiNames = function() {
		return Object.keys(condis);
	};

	oldSandwich.getCondiPrice = function(name) {
		return condis[name];
	};

	oldSandwich.getSelectedCondis = function() {
		return selectedCondis;
	};

	oldSandwich.addCondi = function(name){
		selectedCondis.push(name);
	};

	oldSandwich.clearSelectedCondis = function() {
		selectedCondis = []; 
	};

	oldSandwich.getSelectedCondiCost = function() {
		let cost; 
		if (selectedCondis.length !== 0) {
			const prices = selectedCondis.map((name) => {
				return condis[name];
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

const condiNames = Sandwich.getCondiNames(); 