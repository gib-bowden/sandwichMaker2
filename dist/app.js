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
const Sandwich = require("./sandwich");

let ingredientArr = [];

const errorFunction = () => {
    console.log("You broke me");
};

// let setCombinedArr = (arr) => {
//   arr.forEach((item) => {
//     combinedArr.push(item); 
//   });
// }; 

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

  console.log("ingredients from combine array", ingredientArr);
  //combinedArr = ingredientArr; //why doesn't this update the outside variable????!!!!!!!
  Sandwich.setIngredients(ingredientArr);
  buildDom(ingredientArr, categoryArr);
};

///console.log("why isnt this working?", combinedArr); //why doesn't this work??! 

const initializer = () => {
  loadIngredients(whenIngredientsLoad, errorFunction);
};

module.exports = {
    initializer, 
};
},{"./categories":1,"./dom":3,"./ingredients":4,"./sandwich":6}],3:[function(require,module,exports){
"use strict";

const Sandwich = require("./sandwich.js");
const data = require("./data.js");

const buildDom = (ingredients, categories) => {
    categories.forEach((category) =>{        
        const div = createCategoryDiv(category);
        addCategoryDivEventListener(div);
        ingredients.forEach((ingredient) => {
            if (category.id === ingredient.categoryId) {
                createOption(ingredient, div);
            }
        });
    });
};

const createCategoryDiv = (category) => {
	const newDiv = document.createElement("div");
    newDiv.setAttribute("id", `${category.name}-container`);
	newDiv.innerText = `${category.name} Options`;
    document.getElementById("order-container").appendChild(newDiv);
    let selectType = category.isMultiSelect ? "checkbox" : "radio";
    newDiv.innerHTML += `<div class=${selectType}><label><input type="${selectType}" name="${category.name}-${selectType}" value="None">None</label></div>`; //add none option for each category

	return newDiv; 
};

const addCategoryDivEventListener = (element) => {
    const totalCostHTML = document.getElementById("total-cost");
	element.addEventListener("change", (e) => {
        if (e.target.type === "radio") {
            clearSiblingRadios(e.target);
            Sandwich.addIngredient(e.target.value);
            totalCostHTML.innerHTML = Sandwich.getSandwichPrice(); 
            addSelectedCategories();
        }
        else if (e.target.checked === true) {
            (e.target.value === "None") ? clearSiblingCheckboxes(e.target) : clearNoneCheckbox(e.target); 
            Sandwich.addIngredient(e.target.value);
            totalCostHTML.innerHTML = Sandwich.getSandwichPrice(); 
            addSelectedCategories();
        } else {
            Sandwich.removeIngredient(e.target.value); 
            totalCostHTML.innerHTML = Sandwich.getSandwichPrice();
            addSelectedCategories(); 
        }
    });
};


const createOption = (ingredient, parentElement) => {
    let cls; let nm; 
    if (ingredient.isMultiSelect) {
        cls = "checkbox";
        nm = `${ingredient.categoryName}-checkbox`; 
    } else {
        cls = "radio";
        nm = `${ingredient.categoryName}-radio`; 
    }
    let newDiv = document.createElement("div");
    newDiv.setAttribute("class", cls);
    parentElement.appendChild(newDiv);
    let newLabel = document.createElement("label");
    newLabel.innerHTML = `<input type=${cls} name=${nm} value="${ingredient.name}">${ingredient.name} - $${ingredient.price.toFixed(2)}`;
    newDiv.appendChild(newLabel);
};

const addSelectedCategories = () => {
    let categories = Sandwich.listUniqueCategorySelections(); 
    const finalOrderContainer = document.getElementById("selections-container");
    finalOrderContainer.innerHTML = "";
    categories.forEach((category) => {
        let newDiv = document.createElement("div");
        newDiv.setAttribute("class", `selected-category-container`);
        newDiv.setAttribute("id", `selected-${category}`);
        newDiv.innerHTML = `${category}`; 
        finalOrderContainer.appendChild(newDiv);     
    });
    addSelectionsToCategories(); 
};

const addSelectionsToCategories = ()  => {
    const finalOrderContainer = document.getElementById("selections-container");
    let selectedIngredients = Sandwich.getSelectedIngredients();
    let categoryDivs = finalOrderContainer.childNodes;     
    for (let div of categoryDivs) {
        let categoryName = div.id.split("-")[1];
        selectedIngredients.forEach((ingredient) => {
            if (categoryName === ingredient.categoryName) {
                div.innerHTML += `<p>${ingredient.name}</p>`; 
            }
        });
    }
};

const clearSiblingRadios = (selectedOption) => {
    let sameNamedOptions = document.getElementsByName(selectedOption.name); 
    sameNamedOptions.forEach((option) => {
        if (option.checked === false) {
            Sandwich.removeIngredient(option.value);
        }
    });
}; 

const clearSiblingCheckboxes = (selectedOption) => {
    let sameNamedOptions = document.getElementsByName(selectedOption.name); 
    sameNamedOptions.forEach((option) => {
        if (option.value !== selectedOption.value) {
            Sandwich.removeIngredient(option.value);
            option.checked = false; 
        }
    });
}; 

const clearNoneCheckbox = (selectedOption) => {
    let sameNamedOptions = document.getElementsByName(selectedOption.name); 
    sameNamedOptions.forEach((option) => {
        if (option.value === "None") {
            Sandwich.removeIngredient(option.value);
            option.checked = false; 
        }
    });
};

module.exports = buildDom;
},{"./data.js":2,"./sandwich.js":6}],4:[function(require,module,exports){
"use strict"; 

const loadIngredients = (onIngredientLoad, onError) => {
    const ingredientLoader = new XMLHttpRequest();
    ingredientLoader.addEventListener("error", onError);
    ingredientLoader.addEventListener("load", onIngredientLoad);
    ingredientLoader.open("GET", "../data/ingredients.json");
    ingredientLoader.send();
};

module.exports = loadIngredients; 
},{}],5:[function(require,module,exports){
"use strict";

const data = require("./data.js");

data.initializer();
},{"./data.js":2}],6:[function(require,module,exports){
"use strict";

const data = require("./data.js");

let selectedIngredients = []; 
let ingredientsArr = []; 

const setIngredients = (arr) => {
 ingredientsArr = arr;
 console.log("ingreidents from set ingredients function", ingredientsArr);
};

const getSelectedIngredients = () => {
	return selectedIngredients;
};

const addIngredient = (selectedIngredient) => {
	ingredientsArr.forEach((ingredient) => {
		if (selectedIngredient === ingredient.name) {
			selectedIngredients.push(ingredient); 
		}
	});
};

const removeIngredient = (selectedIngredient) => {
	selectedIngredients.forEach((ingredient, index) => {
		if (selectedIngredient === ingredient.name) {
			selectedIngredients.splice(index, 1);
			removeIngredient(selectedIngredient);
		}
	});
};

const getSandwichPrice = () => {
	let cost; 
	if (selectedIngredients.length !== 0) {
		const prices = selectedIngredients.map((ingredient) => {
			return ingredient.price;
		});
		cost = prices.reduce((sum, price) => {
			return sum + price;
		});
	} else {
		cost = 0; 
	}
	return cost.toFixed(2); 
};

const listUniqueCategorySelections = () => {
	var selectedCategories = selectedIngredients.map((item) => {return item.categoryName;});
	return selectedCategories.filter((item, index, arr) => {return arr.indexOf(item) === index;});
};

const Sandwich = {
	getSelectedIngredients,
	addIngredient,
	removeIngredient,
	getSandwichPrice, 
	setIngredients,
	listUniqueCategorySelections,
	ingredientsArr
};

module.exports = Sandwich; 
},{"./data.js":2}]},{},[5]);
