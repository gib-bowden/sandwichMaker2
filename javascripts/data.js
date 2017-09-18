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