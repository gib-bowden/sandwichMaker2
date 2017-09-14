"use strict";

	const condis = {"ketchup": 0.50, "mayo": 0.75};
	let selectedCondis = []; 

	const getCondiNames = function() {
		return Object.keys(condis);
	};

	const getCondiPrice = function(name) {
		return condis[name];
	};

	const getSelectedCondis = function() {
		return selectedCondis;
	};

	const addCondi = function(name){
		selectedCondis.push(name);
	};

	const clearSelectedCondis = function() {
		selectedCondis = []; 
	};

	const getSelectedCondiCost = function() {
		let cost; 
		if (selectedCondis.length !== 0) {
			const prices = selectedCondis.map((name) => {
				return condis[name];
			});
			cost = prices.reduce((sum, price) => {
				return sum + price;
			});
		} else {
			cost = 0; 
		}
		return cost;
    };
    
    const Condi = {
        getCondiNames,
        getCondiPrice,
        getSelectedCondis,
        addCondi, 
        clearSelectedCondis, 
        getSelectedCondiCost
    };

    module.export = Condi; 