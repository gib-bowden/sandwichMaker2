(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
"use strict";

	const condis = {"ketchup": 0.50, "mayo": 0.75};
	let selectedCondis = []; 

	const getCondiNames = function() {
		return Object.keys(condis);
	};

	const getCondiPrice = function(name) {
		return condis[name];
	};

	const getSelectedCondis = function() {
		return selectedCondis;
	};

	const addCondi = function(name){
		selectedCondis.push(name);
	};

	const clearSelectedCondis = function() {
		selectedCondis = []; 
	};

	const getSelectedCondiCost = function() {
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
    
    const Condi = {
        getCondiNames,
        getCondiPrice,
        getSelectedCondis,
        addCondi, 
        clearSelectedCondis, 
        getSelectedCondiCost
    };

    module.export = Condi; 
},{}],4:[function(require,module,exports){
"use strict";

const Sandwich = require("./sandwich.js");


const populateBreads = () => {
    const breadContainer = document.getElementById("bread-container");
    const breadNames = Sandwich.Bread.getBreadNames(); 
	for (let name of breadNames.sort()) {
		breadContainer.innerHTML += `<option data-subtext="$${Sandwich.Bread.getBreadPrice(name).toFixed(2)}" value="${name}">${name}</option>`; 
	}
	$("#bread-container").on('changed.bs.select', (e) => {
		Sandwich.Bread.clearSelectedBreads();
		for (let option of e.target.selectedOptions) {
			Sandwich.Bread.addBread(option.value);
		}
	});
};

const populateMeats = () => {
    const meatNames = Sandwich.Meat.getMeatNames(); 
	const meatContainer = document.getElementById("meat-container");
	for (let name of meatNames.sort()) {
		meatContainer.innerHTML += `<option data-subtext="$${Sandwich.Meat.getMeatPrice(name).toFixed(2)}" value="${name}">${name}</option>`;
	}
	$("#meat-container").on('changed.bs.select', (e) => {
		Sandwich.Meat.clearSelectedMeats();
		for (let option of e.target.selectedOptions) {
			Sandwich.Meat.addMeat(option.value);
		}
	});
};

const populateCondis = () => {
    const condiNames = Sandwich.Condi.getCondiNames(); 
	const condiContainer = document.getElementById("condiment-container");
	for (let name of condiNames.sort()) {
		condiContainer.innerHTML += `<option data-subtext="$${Sandwich.Condi.getCondiPrice(name).toFixed(2)}" value="${name}">${name}</option>`;
	}
	$("#condiment-container").on('changed.bs.select', (e) => {
		Sandwich.Condi.clearSelectedCondis();
		for (let option of e.target.selectedOptions) {
			Sandwich.Condi.addCondi(option.value);
		}
	});
};

const populateCheeses = () => {
    const cheeseNames = Sandwich.Cheese.getCheeseNames(); 
	const cheeseContainer = document.getElementById("cheese-container");
	for (let name of cheeseNames.sort()) {
		cheeseContainer.innerHTML += `<option data-subtext="$${Sandwich.Cheese.getCheesePrice(name).toFixed(2)}" value="${name}">${name}</option>`;
	}
	$("#cheese-container").on('changed.bs.select', (e) => {
		Sandwich.Cheese.clearSelectedCheeses();
		for (let option of e.target.selectedOptions) {
			Sandwich.Cheese.addCheese(option.value);
		}
	});
};

const populateVeggies = () => {
    const veggieNames = Sandwich.Veggie.getVeggieNames(); 
	const veggieContainer = document.getElementById("veggie-container");
	for (let name of veggieNames.sort()) {
		veggieContainer.innerHTML += `<option data-subtext="$${Sandwich.Veggie.getVeggiePrice(name).toFixed(2)}" value="${name}">${name}</option>`;
	}
	$("#veggie-container").on('changed.bs.select', (e) => {
		Sandwich.Veggie.clearSelectedVeggies();
		for (let option of e.target.selectedOptions) {
			Sandwich.Veggie.addVeggie(option.value);
		}
	});
};

const calculateTotalCost = () => {	
	let breadCost = Sandwich.Bread.getSelectedBreadCost();
	let cheeseCost = Sandwich.Cheese.getSelectedCheeseCost();
	let condiCost = Sandwich.Condi.getSelectedCondiCost();
	let meatCost = Sandwich.Meat.getSelectedMeatCost();
	let veggieCost = Sandwich.Veggie.getSelectedVeggieCost();
	let totalCost = (breadCost + cheeseCost + condiCost + meatCost + veggieCost);
	document.getElementById("total-cost").innerHTML = `Sandwich Price: $${totalCost.toFixed(2)}`; 
	return totalCost;
};

const loadPage = () => {
	populateBreads();
	populateMeats();
	populateCondis();
	populateCheeses();
	populateVeggies();
};

window.addEventListener("load", loadPage);
document.getElementById("order-container").addEventListener("change", calculateTotalCost);




},{"./sandwich.js":6}],5:[function(require,module,exports){
"use strict";

	const meats = {"turkey": 0.50, "ham": 0.75};
	let selectedMeats = []; 

	const getMeatNames = () => {
		return Object.keys(meats);
	};

	const getMeatPrice = function(name) {
		return meats[name];
	};

	const getSelectedMeats = function() {
		return selectedMeats;
	};

	const addMeat = function(name){
		selectedMeats.push(name);
	};

	const clearSelectedMeats = function() {
		selectedMeats = []; 
	};

	const getSelectedMeatCost = function() {
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
    
    const Meat = {
        getMeatNames, 
        getMeatPrice, 
        getSelectedMeats, 
        addMeat, 
        clearSelectedMeats, 
        getSelectedMeatCost
    };

    module.export = Meat; 
},{}],6:[function(require,module,exports){
"use strict";


let Bread = require("./bread.js");
let  Cheese = require("./cheese.js"); 
const Meat = require("./meat.js");
const Condi = require("./condiments.js");
const Veggie = require("./veggies.js");

const Sandwich = {
    Bread,
    Cheese,
    Meat,
    Condi,
    Veggie
};

module.exports = Sandwich; 
},{"./bread.js":1,"./cheese.js":2,"./condiments.js":3,"./meat.js":5,"./veggies.js":7}],7:[function(require,module,exports){
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
},{}]},{},[4]);
