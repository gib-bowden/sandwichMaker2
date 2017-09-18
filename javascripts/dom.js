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