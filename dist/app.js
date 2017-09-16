(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

const objectList = {
	"Brioche": 0.50, 
	"Baguette": 0.50, 
	"Sourdough": 0.50, 
	"Wrap": 0.50, 
	"Naked": 1.00,
};

let selectedIngredients = []; 


const breadExport = {
	name: "bread",
	objectList, 
	selectedIngredients
};

module.exports = breadExport; 


console.log(breadExport); 
},{}],2:[function(require,module,exports){
"use strict";

const objectList = {
	"american": 0.10, 
	"swiss": 0.15
};

let selectedIngredients = []; 

const cheeseExport = {
	objectList, 
	selectedIngredients
};
    
module.exports = cheeseExport; 
},{}],3:[function(require,module,exports){
"use strict";

const objectList = {
	"ketchup": 0.50,
	"mayo": 0.75
};

let selectedIngredients = []; 

const condiExport = {
	objectList, 
	selectedIngredients
};

module.exports = condiExport; 
},{}],4:[function(require,module,exports){
"use strict";

const Sandwich = require("./sandwich.js");

let breads = Sandwich.ingredientTypes.bread;

console.log("breadNames", Sandwich.getIngredientNames(breads));
console.log("breadPrice", Sandwich.getIngredientPrice(breads, "Brioche"));
console.log("breadSelections", Sandwich.getSelectedIngredients(breads));
console.log("addIngredient", Sandwich.addIngredient(breads, "Brioche"));
console.log("getSelectedIngredientCost", Sandwich.getSelectedIngredientCost(breads));
console.log("clearSelectedIngredients", Sandwich.clearSelectedIngredients(breads));


console.log("this should get me something", Sandwich.getIngredientTypeName(breads)); 



const populateIngredients = (ingredientType) => {
	const newDiv = document.createElement("div");
	newDiv.setAttribute("class", "select-container");

	const newSelect = document.createElement("select");
	newSelect.setAttribute("class", `selectpicker show-tick`);
	newSelect.setAttribute("id", Sandwich.getIngredientTypeName(ingredientType));

	document.getElementById("order-container").appendChild(newDiv);
	newDiv.appendChild(newSelect);

	selectEventListener(ingredientType); 

	const names = Sandwich.getIngredientNames(ingredientType); 
	for (let name of names.sort()) {
		let newOption = document.createElement("option");
		newOption.setAttribute("data-subtext", `$${Sandwich.getIngredientPrice(ingredientType, name).toFixed(2)}`);
		newOption.setAttribute("value", `${name}`);
		newOption.textContent = `${name}`;
		newSelect.appendChild(newOption);
	} 
};
	
const selectEventListener = (ingredientType) => {
	$("#order-container").on('changed.bs.select', `select#${Sandwich.getIngredientTypeName(ingredientType)}`, (e) => {
		console.log(e);
		Sandwich.clearSelectedIngredients(ingredientType);
		for (let option of e.target.selectedOptions) {
			Sandwich.addIngredient(ingredientType, option.value);
		}
	});
};

const createPage = (obj) => {
	for (let item in obj) {
		  populateIngredients(item); 
	  }
};

createPage(Sandwich.ingredientTypes);

console.log("hello", Sandwich.ingredientTypes);

// createPage(Sandwich.ingredientTypes); 

// const populateMeats = () => {
// 	const meatContainer = document.getElementById("meat-container");
// 	const meatNames = Sandwich.Meat.getMeatNames();
// 	for (let name of meatNames.sort()) {
// 		meatContainer.innerHTML += `<option data-subtext="$${Sandwich.Meat.getMeatPrice(name).toFixed(2)}" value="${name}">${name}</option>`;
// 	}
// 	$("#meat-container").on('changed.bs.select', (e) => {
// 		Sandwich.Meat.clearSelectedMeats();
// 		for (let option of e.target.selectedOptions) {
// 			Sandwich.Meat.addMeat(option.value);
// 		}
// 	});
// };

// const populateCondis = () => {
//     const condiNames = Sandwich.Condi.getCondiNames(); 
// 	const condiContainer = document.getElementById("condiment-container");
// 	for (let name of condiNames.sort()) {
// 		condiContainer.innerHTML += `<option data-subtext="$${Sandwich.Condi.getCondiPrice(name).toFixed(2)}" value="${name}">${name}</option>`;
// 	}
// 	$("#condiment-container").on('changed.bs.select', (e) => {
// 		Sandwich.Condi.clearSelectedCondis();
// 		for (let option of e.target.selectedOptions) {
// 			Sandwich.Condi.addCondi(option.value);
// 		}
// 	});
// };

// const populateCheeses = () => {
//     const cheeseNames = Sandwich.Cheese.getCheeseNames(); 
// 	const cheeseContainer = document.getElementById("cheese-container");
// 	for (let name of cheeseNames.sort()) {
// 		cheeseContainer.innerHTML += `<option data-subtext="$${Sandwich.Cheese.getCheesePrice(name).toFixed(2)}" value="${name}">${name}</option>`;
// 	}
// 	$("#cheese-container").on('changed.bs.select', (e) => {
// 		Sandwich.Cheese.clearSelectedCheeses();
// 		for (let option of e.target.selectedOptions) {
// 			Sandwich.Cheese.addCheese(option.value);
// 		}
// 	});
// };

// const populateVeggies = () => {
//     const veggieNames = Sandwich.Veggie.getVeggieNames(); 
// 	const veggieContainer = document.getElementById("veggie-container");
// 	for (let name of veggieNames.sort()) {
// 		veggieContainer.innerHTML += `<option data-subtext="$${Sandwich.Veggie.getVeggiePrice(name).toFixed(2)}" value="${name}">${name}</option>`;
// 	}
// 	$("#veggie-container").on('changed.bs.select', (e) => {
// 		Sandwich.Veggie.clearSelectedVeggies();
// 		for (let option of e.target.selectedOptions) {
// 			Sandwich.Veggie.addVeggie(option.value);
// 		}
// 	});
// };

// const calculateTotalCost = () => {	
// 	let breadCost = Sandwich.Bread.getSelectedBreadCost();
// 	let cheeseCost = Sandwich.Cheese.getSelectedCheeseCost();
// 	let condiCost = Sandwich.Condi.getSelectedCondiCost();
// 	let meatCost = Sandwich.Meat.getSelectedMeatCost();
// 	let veggieCost = Sandwich.Veggie.getSelectedVeggieCost();
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

// console.log(module);
},{"./sandwich.js":6}],5:[function(require,module,exports){
"use strict";

const objectList = {
	"turkey": 0.50,
	"ham": 0.75
};

let selectedIngredients = []; 
   
 const meatExport = {
	objectList, 
	selectedIngredients
};

module.exports = meatExport; 
},{}],6:[function(require,module,exports){
"use strict";


const bread = require("./bread.js");
const meat = require("./meat.js");
const cheese = require("./cheese.js"); 
const condi = require("./condiments.js");
const veggie = require("./veggies.js");


const getIngredientTypeName = (ingredientType) => {
	return ingredientType.name;
};

const getIngredientNames = (ingredientType) => {
	return Object.keys(ingredientType.objectList);
};

const getIngredientPrice = (ingredientType, name) => {
	return ingredientType.objectList[name];
};

const getSelectedIngredients = (ingredientType) => {
	return ingredientType.selectedIngredients;
};

const addIngredient = (ingredientType, name) => {
	ingredientType.selectedIngredients.push(name);
};

const clearSelectedIngredients = (ingredientType) => {
	ingredientType.selectedIngredients = []; 
};

const getSelectedIngredientCost = (ingredientType) => {
	let cost; 
	if (ingredientType.selectedIngredients.length !== 0) {
		const prices = ingredientType.selectedIngredients.map((name) => {
			return getIngredientPrice(ingredientType, name);
		});
		cost = prices.reduce((sum, price) => {
			return sum + price;
		});
	} else {
		cost = 0; 
	}
	return cost; 
};

const Sandwich = {
    ingredientTypes: {
        bread,
        meat,
        cheese,
        condi,
        veggie
    },
    getIngredientTypeName,
    getIngredientNames,
    getIngredientPrice,
    getSelectedIngredients,
    addIngredient,
    clearSelectedIngredients,
    getSelectedIngredientCost
};



module.exports = Sandwich; 
},{"./bread.js":1,"./cheese.js":2,"./condiments.js":3,"./meat.js":5,"./veggies.js":7}],7:[function(require,module,exports){
"use strict";

const objectList = {
	"lettuce": 0.50,
	"tomato": 0.75
};

let selectedIngredients = []; 

const veggieExport = {
	objectList, 
	selectedIngredients
};

module.exports = veggieExport; 
},{}]},{},[4]);
