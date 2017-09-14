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

// const populateBreads = () => {
// 	const breadContainer = document.getElementById("bread-container");
// 	for (let name of breadNames.sort()) {
// 		breadContainer.innerHTML += `<option data-subtext="$${Sandwich.getBreadPrice(name).toFixed(2)}" value="${name}">${name}</option>`; 
// 	}
// 	$("#bread-container").on('changed.bs.select', (e) => {
// 		Sandwich.clearSelectedBreads();
// 		for (let option of e.target.selectedOptions) {
// 			Sandwich.addBread(option.value);
// 		}
// 	});
// };

// const populateMeats = () => {
// 	const meatContainer = document.getElementById("meat-container");
// 	for (let name of meatNames.sort()) {
// 		meatContainer.innerHTML += `<option data-subtext="$${Sandwich.getMeatPrice(name).toFixed(2)}" value="${name}">${name}</option>`;
// 	}
// 	$("#meat-container").on('changed.bs.select', (e) => {
// 		Sandwich.clearSelectedMeats();
// 		for (let option of e.target.selectedOptions) {
// 			Sandwich.addMeat(option.value);
// 		}
// 	});
// };

// const populateCondis = () => {
// 	const condiContainer = document.getElementById("condiment-container");
// 	for (let name of condiNames.sort()) {
// 		condiContainer.innerHTML += `<option data-subtext="$${Sandwich.getCondiPrice(name).toFixed(2)}" value="${name}">${name}</option>`;
// 	}
// 	$("#condiment-container").on('changed.bs.select', (e) => {
// 		Sandwich.clearSelectedCondis();
// 		for (let option of e.target.selectedOptions) {
// 			Sandwich.addCondi(option.value);
// 		}
// 	});
// };

// const populateCheeses = () => {
// 	const cheeseContainer = document.getElementById("cheese-container");
// 	for (let name of cheeseNames.sort()) {
// 		cheeseContainer.innerHTML += `<option data-subtext="$${Sandwich.getCheesePrice(name).toFixed(2)}" value="${name}">${name}</option>`;
// 	}
// 	$("#cheese-container").on('changed.bs.select', (e) => {
// 		Sandwich.clearSelectedCheeses();
// 		for (let option of e.target.selectedOptions) {
// 			Sandwich.addCheese(option.value);
// 		}
// 	});
// };

// const populateVeggies = () => {
// 	const veggieContainer = document.getElementById("veggie-container");
// 	for (let name of veggieNames.sort()) {
// 		veggieContainer.innerHTML += `<option data-subtext="$${Sandwich.getVeggiePrice(name).toFixed(2)}" value="${name}">${name}</option>`;
// 	}
// 	$("#veggie-container").on('changed.bs.select', (e) => {
// 		Sandwich.clearSelectedVeggies();
// 		for (let option of e.target.selectedOptions) {
// 			Sandwich.addVeggie(option.value);
// 		}
// 	});
// };

// const calculateTotalCost = () => {	
// 	let breadCost = Sandwich.getSelectedBreadCost();
// 	let cheeseCost = Sandwich.getSelectedCheeseCost();
// 	let condiCost = Sandwich.getSelectedCondiCost();
// 	let meatCost = Sandwich.getSelectedMeatCost();
// 	let veggieCost = Sandwich.getSelectedVeggieCost();
// 	let totalCost = (breadCost + cheeseCost + condiCost + meatCost + veggieCost);
// 	document.getElementById("total-cost").innerHTML = `Sandwich Price: $${totalCost.toFixed(2)}`; 
// 	return totalCost;
// };

// const loadPage = () => {
// 	populateBreads();
// 	populateMeats();
// 	populateCondis();
// 	populateCheeses();
// 	populateVeggies();
// };

// window.addEventListener("load", loadPage);
// document.getElementById("order-container").addEventListener("change", calculateTotalCost);


const bread = require("./bread.js");

console.log(bread.getBreadNames());
console.log(bread.getBreadPrice("Brioche")); 


},{"./bread.js":1}]},{},[2]);
