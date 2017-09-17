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