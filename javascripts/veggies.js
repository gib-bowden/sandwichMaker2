"use strict";

var Sandwich = (function (oldSandwich){
	const veggies = {"lettuce": 0.50, "tomato": 0.75};
	let selectedVeggies = []; 

	oldSandwich.getVeggieNames = function() {
		return Object.keys(veggies);
	};

	oldSandwich.getVeggiePrice = function(name) {
		return veggies[name];
	};

	oldSandwich.getSelectedVeggies = function() {
		return selectedVeggies;
	};

	oldSandwich.addVeggie = function(name){
		selectedVeggies.push(name);
	};

	oldSandwich.clearSelectedVeggies = function() {
		selectedVeggies = []; 
	};

	oldSandwich.getSelectedVeggieCost = function() {
		let cost; 
		if (selectedVeggies.length !== 0) {
			const prices = selectedVeggies.map((name) => {
				return veggies[name];
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

let veggieNames = Sandwich.getVeggieNames(); 
let selectedVeggies = Sandwich.getSelectedVeggies();