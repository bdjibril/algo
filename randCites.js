'use strict';

const assert = require('assert');

const getRand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

/*
node = 
{
	offset,
	value,
	left,
	right
}
*/

const findNode = (node, r) => {

	if(r === node.offset){
		return node.value;
	} else if (r < node.offset){
		if(!node.left || node.left.offset < r) {
			return node.value;
		} else {
			return findNode(node.left, r)
		}
	} else {
		// node.right should never be null because of the way we insert (R should be in the pssible range)
		return findNode(node.right, r);
	}
};

// test nodes

const tokyo = {
	offset: 45,
	value: 'Tokyo'
};

const paris = {
	offset: 10,
	value: 'Paris'
};

const newYork = {
	offset: 25,
	value: 'New York',
	left: paris,
	right: tokyo
};

const assertHelper = (expectedResult, fn, args) => {
	const result = fn.apply(null, args);
	assert.equal(result, expectedResult, `The expected result for ${fn.name} with ${JSON.stringify(args)} should be: ${expectedResult}. Actual value: ${JSON.stringify(result)}`);
};

assertHelper('Paris', findNode, [newYork, 7]);
assertHelper('Paris', findNode, [newYork, 10]);
assertHelper('Tokyo', findNode, [newYork, 32]);
assertHelper('Tokyo', findNode, [newYork, 45]);
assertHelper('New York', findNode, [newYork, 17]);

[1,1,1,1,1,1].forEach(() => {
	const rand = getRand(1, 45);
	console.log(`Rand is: ${rand}, City is: ${findNode(newYork,rand)}`);
});
