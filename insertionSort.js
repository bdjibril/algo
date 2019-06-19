'use strict';

const assert = require('assert');

const insertionSort = arr => {

	let k = 0;

	while(k < arr.length){

		let swapPos = k;

		let val = arr[k];

		while(arr[swapPos - 1] > arr[k] && swapPos > 0){
			swapPos--;
		}

		// shift all the elements first
		for(let i= k-1; i >= swapPos; i --){
			arr[i+1] = arr[i];
		}

		// move the value of k to the swap position (
		arr[swapPos] = val;

		k++;
	}

	return arr;
}

const result = insertionSort([9,5,6,2,1,4,0,3,8,7]).join(',');

assert.equal(result, "0,1,2,3,4,5,6,7,8,9", `The array is not correctly sorted ${result}`);