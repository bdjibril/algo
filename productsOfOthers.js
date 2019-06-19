'use strict'

const productOfOthers = (array) => {

	let productsOfAllIntsBeforeIndex = [];
	let productsOfAllIntsAfterIndex = [];

	let prodSoFar = 1;
	for(let i = 0; i < array.length; i++){
		productsOfAllIntsBeforeIndex[i] = prodSoFar;
		prodSoFar *= array[i];
	}

	prodSoFar = 1;
	for(let i = array.length - 1; i >= 0 ; i--){
		productsOfAllIntsAfterIndex[i] = prodSoFar;
		prodSoFar *= array[i];
	}

	let productArray = [];

	for(let i = 0; i < array.length; i++){
		productArray[i] = productsOfAllIntsBeforeIndex[i] * productsOfAllIntsAfterIndex[i];
	}

	return productArray;
}


console.log(productOfOthers([1, 7, 3, 4]));
