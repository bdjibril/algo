'use strict'

const computeMaxProfit  = (stockPriceArray) => {
	let minPrice = stockPriceArray[0];
	let maxProfit = Number.NEGATIVE_INFINITY;

	for(let i = 1 ; i < stockPriceArray.length; i++){
		let currentPrice = stockPriceArray[i];
    
    	// Potential Profit at current Price
		let potentialProfit = currentPrice - minPrice;

		// Min Price
		minPrice = Math.min(minPrice, currentPrice);

		maxProfit = Math.max(maxProfit, potentialProfit);

	}

	return maxProfit;
}

console.log(computeMaxProfit([5,7,3,5,8,9,6,11]));

console.log(computeMaxProfit([10,9,6,5,3,2]));

console.log(computeMaxProfit([2,2,2,2,2,2,2,2,2]));