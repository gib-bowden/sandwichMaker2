"use strict";

const populateBreads = () => {
	const breadContainer = document.getElementById("bread-container");
	for (let name of breadNames.sort()) {
		breadContainer.innerHTML += `<option data-subtext="$${Sandwich.getBreadPrice(name).toFixed(2)}" value="${name}">${name}</option>`; 
	}
	$("#bread-container").on('changed.bs.select', (e) => {
		Sandwich.clearSelectedBreads();
		for (let option of e.target.selectedOptions) {
			Sandwich.addBread(option.value);
		}
	});
};

const populateMeats = () => {
	const meatContainer = document.getElementById("meat-container");
	for (let name of meatNames.sort()) {
		meatContainer.innerHTML += `<option data-subtext="$${Sandwich.getMeatPrice(name).toFixed(2)}" value="${name}">${name}</option>`;
	}
	$("#meat-container").on('changed.bs.select', (e) => {
		Sandwich.clearSelectedMeats();
		for (let option of e.target.selectedOptions) {
			Sandwich.addMeat(option.value);
		}
	});
};

const populateCondis = () => {
	const condiContainer = document.getElementById("condiment-container");
	for (let name of condiNames.sort()) {
		condiContainer.innerHTML += `<option data-subtext="$${Sandwich.getCondiPrice(name).toFixed(2)}" value="${name}">${name}</option>`;
	}
	$("#condiment-container").on('changed.bs.select', (e) => {
		Sandwich.clearSelectedCondis();
		for (let option of e.target.selectedOptions) {
			Sandwich.addCondi(option.value);
		}
	});
};

const populateCheeses = () => {
	const cheeseContainer = document.getElementById("cheese-container");
	for (let name of cheeseNames.sort()) {
		cheeseContainer.innerHTML += `<option data-subtext="$${Sandwich.getCheesePrice(name).toFixed(2)}" value="${name}">${name}</option>`;
	}
	$("#cheese-container").on('changed.bs.select', (e) => {
		Sandwich.clearSelectedCheeses();
		for (let option of e.target.selectedOptions) {
			Sandwich.addCheese(option.value);
		}
	});
};

const populateVeggies = () => {
	const veggieContainer = document.getElementById("veggie-container");
	for (let name of veggieNames.sort()) {
		veggieContainer.innerHTML += `<option data-subtext="$${Sandwich.getVeggiePrice(name).toFixed(2)}" value="${name}">${name}</option>`;
	}
	$("#veggie-container").on('changed.bs.select', (e) => {
		Sandwich.clearSelectedVeggies();
		for (let option of e.target.selectedOptions) {
			Sandwich.addVeggie(option.value);
		}
	});
};

const calculateTotalCost = () => {	
	let breadCost = Sandwich.getSelectedBreadCost();
	let cheeseCost = Sandwich.getSelectedCheeseCost();
	let condiCost = Sandwich.getSelectedCondiCost();
	let meatCost = Sandwich.getSelectedMeatCost();
	let veggieCost = Sandwich.getSelectedVeggieCost();
	let totalCost = (breadCost + cheeseCost + condiCost + meatCost + veggieCost);
	document.getElementById("total-cost").innerHTML = `Sandwich Price: $${totalCost.toFixed(2)}`; 
	return totalCost;
};

const loadPage = () => {
	populateBreads();
	populateMeats();
	populateCondis();
	populateCheeses();
	populateVeggies();
};

window.addEventListener("load", loadPage);
document.getElementById("order-container").addEventListener("change", calculateTotalCost);