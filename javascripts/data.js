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
