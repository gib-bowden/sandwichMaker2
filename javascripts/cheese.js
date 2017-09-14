"use strict";

	const cheeses = {"american": 0.10, "swiss": 0.15};
	let selectedCheeses = []; 

	const getCheeseNames = function() {
		return Object.keys(cheeses);
	};

	const getCheesePrice = function(name) {
		return cheeses[name];
	};

	const getSelectedCheeses = function() {
		return selectedCheeses;
	};

	const addCheese = function(name){
		selectedCheeses.push(name);
	};

	const clearSelectedCheeses = function() {
		selectedCheeses = []; 
	};

	const getSelectedCheeseCost = function() {
		let cost; 
		if (selectedCheeses.length !== 0) {
			const prices = selectedCheeses.map((name) => {
				return cheeses[name];
			});
			cost = prices.reduce((sum, price) => {
				return sum + price;
			});
		} else {
			cost = 0; 
		}
		return cost; 
	};

    const Cheese = {
        getCheeseNames, 
        getCheesePrice, 
        getSelectedCheeses, 
        addCheese, 
        clearSelectedCheeses, 
        getSelectedCheeseCost
    };
    
    module.exports = Cheese; 