"use strict"; 

const loadIngredients = (onIngredientLoad, onError) => {
    const ingredientLoader = new XMLHttpRequest();
    ingredientLoader.addEventListener("error", onError);
    ingredientLoader.addEventListener("load", onIngredientLoad);
    ingredientLoader.open("GET", "../data/ingredients.json");
    ingredientLoader.send();
};

module.exports = loadIngredients; 