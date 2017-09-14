"use strict";

	const veggies = {"lettuce": 0.50, "tomato": 0.75};
	let selectedVeggies = []; 

	const getVeggieNames = function() {
		return Object.keys(veggies);
	};

	const getVeggiePrice = function(name) {
		return veggies[name];
	};

	const getSelectedVeggies = function() {
		return selectedVeggies;
	};

	const addVeggie = function(name){
		selectedVeggies.push(name);
	};

	const clearSelectedVeggies = function() {
		selectedVeggies = []; 
	};

	const getSelectedVeggieCost = function() {
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
    
    const Veggie = {
        getVeggieNames, 
        getVeggiePrice, 
        getSelectedVeggies, 
        addVeggie, 
        clearSelectedVeggies, 
        getSelectedVeggieCost
    };

    module.export = Veggie; 