(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict"; 

const loadCategories = (onCategoryLoad, onError) => {
    const categoryLoader = new XMLHttpRequest();
    categoryLoader.addEventListener("error", onError);
    categoryLoader.addEventListener("load", onCategoryLoad);
    categoryLoader.open("GET", "../data/categories.json");
    categoryLoader.send();
};

module.exports = loadCategories; 
},{}],2:[function(require,module,exports){
"use strict";
const buildDom = require("./dom");
const loadIngredients = require("./ingredients");
const loadCategories = require("./categories");

let ingredientArr = [];

const errorFunction = () => {
    console.log("You broke me");
};

const whenIngredientsLoad = function () {
    ingredientArr = JSON.parse(this.responseText).ingredients;
    loadCategories(whenCategoriesLoad, errorFunction);
};

const whenCategoriesLoad = function () {
  let categoryArr = JSON.parse(this.responseText).categories;
  combineArrays(categoryArr);
};

const combineArrays = (categoryArr) => {
    categoryArr.forEach((category) => {
    ingredientArr.forEach((ingredient) => {
      if (ingredient.categoryId === category.id) {
        ingredient.categoryName = category.name;
        ingredient.isMultiSelect = category.isMultiSelect;
      }
    });
  });

  console.log("ingredients", ingredientArr);
  buildDom(ingredientArr, categoryArr);
};

//set up "initializer" -load gifs
const initializer = () => {
  loadIngredients(whenIngredientsLoad, errorFunction);
};

const getIngredients = () => {
  return ingredientArr;
};

module.exports = {
    initializer, 
    getIngredients
};

initializer(); 

},{"./categories":1,"./dom":3,"./ingredients":4}],3:[function(require,module,exports){
"use strict";

const buildDom = (ingredients, categories) => {
    categories.forEach((category) =>{        
        const div = createIngredientDiv(category);
        const select = createIngredientSelect(category, div);
        addSelectEventListener(category);
        ingredients.forEach((ingredient) => {
            if (category.id === ingredient.categoryId) {
                createOption(ingredient, select);
            }
        });
    });
};

const createIngredientDiv = (category) => {
	const newDiv = document.createElement("div");
	newDiv.setAttribute("class", "select-container");
	newDiv.innerHTML = `${category.name} Options`;
	document.getElementById("order-container").appendChild(newDiv);
	return newDiv; 
};

const createIngredientSelect = (category, parentElement) => {
    const newSelect = document.createElement("select");
    let dataActionsAtt = document.createAttribute("data-actions-box");
    dataActionsAtt.value = "true";
    let multipleAtt = document.createAttribute("multiple");
    if (category.isMultiSelect === true) {
        newSelect.setAttribute("class", "selectpicker");
        newSelect.setAttributeNode(dataActionsAtt); 
        newSelect.setAttributeNode(multipleAtt); 
    } else {
        newSelect.setAttribute("class", "selectpicker show-tick");
    }
    newSelect.setAttribute("title", `Select your ${category.name}...`);
    newSelect.setAttribute("id", `${category.name}`);
    parentElement.appendChild(newSelect);
    return newSelect; 
};

const addSelectEventListener = (category) => {
	$("#order-container").on('changed.bs.select', `select#${category.name}`, (e) => {
		console.log(e);
		// Sandwich.clearSelectedIngredients(category.id);
		// for (let option of e.target.selectedOptions) {
		// 	Sandwich.addIngredient(ingredientType, option.value);
		// }
	});
};


const createOption = (ingredient, parentElement) => {
    let newOption = document.createElement("option");
    newOption.setAttribute("data-subtext", `$${ingredient.price.toFixed(2)}`);
    newOption.setAttribute("value", `${ingredient.name}`);
    newOption.textContent = `${ingredient.name}`;
    parentElement.appendChild(newOption);
};

module.exports = buildDom;
},{}],4:[function(require,module,exports){
"use strict"; 

const loadIngredients = (onIngredientLoad, onError) => {
    const ingredientLoader = new XMLHttpRequest();
    ingredientLoader.addEventListener("error", onError);
    ingredientLoader.addEventListener("load", onIngredientLoad);
    ingredientLoader.open("GET", "../data/ingredients.json");
    ingredientLoader.send();
};

module.exports = loadIngredients; 
},{}]},{},[2]);
