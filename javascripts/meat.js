// "use strict";

// var Sandwich = (function (oldSandwich){
// 	const meats = {"turkey": 0.50, "ham": 0.75};
// 	let selectedMeats = []; 

// 	oldSandwich.getMeatNames = function() {
// 		return Object.keys(meats);
// 	};

// 	oldSandwich.getMeatPrice = function(name) {
// 		return meats[name];
// 	};

// 	oldSandwich.getSelectedMeats = function() {
// 		return selectedMeats;
// 	};

// 	oldSandwich.addMeat = function(name){
// 		selectedMeats.push(name);
// 	};

// 	oldSandwich.clearSelectedMeats = function() {
// 		selectedMeats = []; 
// 	};

// 	oldSandwich.getSelectedMeatCost = function() {
// 		let cost; 
// 		if (selectedMeats.length !== 0) {
// 			const prices = selectedMeats.map((name) => {
// 				return meats[name];
// 			});
// 			cost = prices.reduce((sum, price) => {
// 				return sum + price ;
// 			});
// 		} else {
// 			cost = 0; 
// 		}
// 		return cost; 
// 	};
	
// 	return oldSandwich;

// })(Sandwich || {});

// let meatNames = Sandwich.getMeatNames(); 