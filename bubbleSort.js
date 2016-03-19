'use strict';

const assert = require('assert');

const bubbleSort = arr => {

	let numPassLeft = arr.length
	let switchFlag = true;

	while(switchFlag && numPassLeft){

		switchFlag = false;

		for(let i=0; i < numPassLeft - 1; i++){
			// we swap if the next element is the minimum
			if(arr[i] > arr[i+1]){
				switchFlag = true;
				let tmp = arr[i];
				arr[i] = arr[i+1];
				arr[i+1] = tmp ;
			}
		}

		// decrement the number of passes left
		numPassLeft--;
	};

	return arr;
}

const result = bubbleSort([9,5,6,2,1,4,0,3,8,7]).join(',');

assert.equal(result, "0,1,2,3,4,5,6,7,8,9", `The array is not correctly sorted ${result}`);