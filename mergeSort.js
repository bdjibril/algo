'use strict';

const assert = require('assert');

const mergeArrays = (arr1, arr2) => {
	let mergedArr = [];
	let pos1 = 0;
	let pos2 = 0;

	while(pos1 < arr1.length && pos2 < arr2.length){
		if(arr1[pos1] < arr2[pos2]){
			mergedArr.push(arr1[pos1]);
			pos1++;
		}
		else{
			mergedArr.push(arr2[pos2]);
			pos2++;
		}
	}
	while(pos1 < arr1.length){
		mergedArr.push(arr1[pos1]);
		pos1++;
	}
	while(pos2 < arr2.length){
		mergedArr.push(arr2[pos2]);
		pos2++;
	}

	return mergedArr;
};

const mergeSort = arr => {

	// base case
	if(arr.length === 1) return arr;

	let mid = Math.floor(arr.length / 2);

	// make first aray 
	let firstArr = [];
	for(let i = 0; i < mid; i++) firstArr.push(arr[i]);
	// make second array
	let secArr = [];
	for(let j = mid ; j < arr.length; j++) secArr.push(arr[j]);
	
	// mergeSort the first array
	let sortedFirstArr = mergeSort(firstArr);
	// mergeSort the second array
	let sortedSecondArr = mergeSort(secArr);
	
	// return the merged copy of both arrays

	return mergeArrays(sortedFirstArr, sortedSecondArr);
};

const result = mergeSort([9,5,6,2,1,4,0,3,8,7]).join(',');

assert.equal(result, "0,1,2,3,4,5,6,7,8,9", `The array is not correctly sorted ${result}`);