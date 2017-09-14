"use strict";

	const meats = {"turkey": 0.50, "ham": 0.75};
	let selectedMeats = []; 

	const getMeatNames = () => {
		return Object.keys(meats);
	};

	const getMeatPrice = function(name) {
		return meats[name];
	};

	const getSelectedMeats = function() {
		return selectedMeats;
	};

	const addMeat = function(name){
		selectedMeats.push(name);
	};

	const clearSelectedMeats = function() {
		selectedMeats = []; 
	};

	const getSelectedMeatCost = function() {
		let cost; 
		if (selectedMeats.length !== 0) {
			const prices = selectedMeats.map((name) => {
				return meats[name];
			});
			cost = prices.reduce((sum, price) => {
				return sum + price ;
			});
		} else {
			cost = 0; 
		}
		return cost; 
	};
    
    const Meat = {
        getMeatNames, 
        getMeatPrice, 
        getSelectedMeats, 
        addMeat, 
        clearSelectedMeats, 
        getSelectedMeatCost
    };

    module.export = Meat; 