// "use strict";

// var Sandwich = (function (oldSandwich){
// 	const cheeses = {"american": 0.10, "swiss": 0.15};
// 	let selectedCheeses = []; 

// 	oldSandwich.getCheeseNames = function() {
// 		return Object.keys(cheeses);
// 	};

// 	oldSandwich.getCheesePrice = function(name) {
// 		return cheeses[name];
// 	};

// 	oldSandwich.getSelectedCheeses = function() {
// 		return selectedCheeses;
// 	};

// 	oldSandwich.addCheese = function(name){
// 		selectedCheeses.push(name);
// 	};

// 	oldSandwich.clearSelectedCheeses = function() {
// 		selectedCheeses = []; 
// 	};

// 	oldSandwich.getSelectedCheeseCost = function() {
// 		let cost; 
// 		if (selectedCheeses.length !== 0) {
// 			const prices = selectedCheeses.map((name) => {
// 				return cheeses[name];
// 			});
// 			cost = prices.reduce((sum, price) => {
// 				return sum + price;
// 			});
// 		} else {
// 			cost = 0; 
// 		}
// 		return cost; 
// 	};
// 
// 	return oldSandwich;

// })(Sandwich || {});

// const cheeseNames = Sandwich.getCheeseNames();