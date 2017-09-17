"use strict"; 

const loadCategories = (onCategoryLoad, onError) => {
    const categoryLoader = new XMLHttpRequest();
    categoryLoader.addEventListener("error", onError);
    categoryLoader.addEventListener("load", onCategoryLoad);
    categoryLoader.open("GET", "../data/categories.json");
    categoryLoader.send();
};

module.exports = loadCategories; 