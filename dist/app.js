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
	selectType: "single",
	objectList, 
	selectedIngredients
};

module.exports = breadExport;
},{}],2:[function(require,module,exports){
"use strict";

const objectList = {
	"american": 0.10, 
	"swiss": 0.15
};

let selectedIngredients = []; 

const cheeseExport = {
	name: "cheese",
	selectType: "multi",
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
	name: "condiment",
	selectType: "multi",
	objectList, 
	selectedIngredients
};

module.exports = condiExport; 
},{}],4:[function(require,module,exports){
"use strict";

const Sandwich = require("./sandwich.js");

const populateIngredients = (ingredientType) => {
	const div = createIngredientDiv(ingredientType);
	const select = createIngredientSelect(ingredientType, div);
	selectEventListener(ingredientType); 
	createOptions(ingredientType, select); 

};

const createIngredientDiv = (ingredientType) => {
	const newDiv = document.createElement("div");
	newDiv.setAttribute("class", "select-container");
	newDiv.innerHTML = `${ingredientType.name} Options`;
	document.getElementById("order-container").appendChild(newDiv);
	return newDiv; 
};

const createIngredientSelect = (ingredientType, parentElement) => {
	const newSelect = document.createElement("select");
	let dataActionsAtt = document.createAttribute("data-actions-box");
	dataActionsAtt.value = "true";
	let multipleAtt = document.createAttribute("multiple");
	if (ingredientType.selectType === "multi") {
		newSelect.setAttribute("class", "selectpicker");
		newSelect.setAttributeNode(dataActionsAtt); 
		newSelect.setAttributeNode(multipleAtt); 
	} else {
		newSelect.setAttribute("class", "selectpicker show-tick");
	}
	newSelect.setAttribute("title", `Select your ${ingredientType.name}...`);
	newSelect.setAttribute("id", Sandwich.getIngredientTypeName(ingredientType));
	parentElement.appendChild(newSelect);
	return newSelect; 
};
	
const createOptions = (ingredientType, parentElement) => {
	const names = Sandwich.getIngredientNames(ingredientType); 
	for (let name of names.sort()) {
		let newOption = document.createElement("option");
		newOption.setAttribute("data-subtext", `$${Sandwich.getIngredientPrice(ingredientType, name).toFixed(2)}`);
		newOption.setAttribute("value", `${name}`);
		newOption.textContent = `${name}`;
		parentElement.appendChild(newOption);
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

const createPage = () => {
	Sandwich.ingredientTypes.forEach ((ingredientType) => {
		populateIngredients(ingredientType); 
	});
};

const calculateTotalCost = () => {
	let totalCost = 0; 	
	Sandwich.ingredientTypes.forEach((obj) => {
		totalCost += Sandwich.getSelectedIngredientCost(obj);
	});
	document.getElementById("total-cost").innerHTML = `Sandwich Price: $${totalCost.toFixed(2)}`; 
	return totalCost;
};

document.getElementById("order-container").addEventListener("change", calculateTotalCost);


createPage();
},{"./sandwich.js":6}],5:[function(require,module,exports){
"use strict";

const objectList = {
	"turkey": 0.50,
	"ham": 0.75
};

let selectedIngredients = []; 
   
 const meatExport = {
	name: "meat",
	selectType: "multi",
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
    ingredientTypes: [
        bread,
        meat,
        cheese,
        condi,
        veggie
    ],
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
	name: "veggie",
	selectType: "multi",
	objectList, 
	selectedIngredients
};

module.exports = veggieExport; 
},{}]},{},[4]);
