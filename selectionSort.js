'use strict';

const assert = require('assert');

const selectionSort = arr => {
	// loop trough the whole array
	for(let i=0; i < arr.length -1; i++){
		// assume the ith element is the minimum  
		let minPos = i;
		// loop from the next element after i
		for(let j = i + 1; j< arr.length; j++){
			// set the new minPos is another element < arr[minPos]
			if(arr[j] < arr[minPos]) minPos = j;
		}

		// swap the value if the minPos is different
		if(minPos !== i) {
			let tmp = arr[i];
			arr[i] = arr[minPos];
			arr[minPos] = tmp ;
		}
	}

	return arr;
}

assert.equal(selectionSort([9,5,6,2,1,4,0,3,8,7]).join(','), "0,1,2,3,4,5,6,7,8,9", 'The array is not correctly sorted');