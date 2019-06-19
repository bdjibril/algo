'use strict';

const assert = require('assert');

function LinkedListNode(value) {
    this.value = value;
    this.next = null;
}

const containsCycle = (node) => {

	let valuesSet = new Set;

	let currentNode = node;

	while(currentNode !== null){

		if(valuesSet.has(currentNode.value)){
			return true;
		}

		valuesSet.add(currentNode.value);
		currentNode = currentNode.next;
	}

	return false;
};


const containsCycleOptimizedSpace = (node) => {

	let currentNodeSlow = node;
	let currentNodeFast = node;

	while(currentNodeFast !== null){

		if(currentNodeSlow.value === currentNodeFast.value){
			return true;
		}

		currentNodeSlow = currentNodeSlow.next;
		currentNodeFast = currentNodeFast.next;
		if(currentNodeFast.next !== null) currentNodeFast = currentNodeFast.next;
	}

	return false;
};


var a = new LinkedListNode('A');
var b = new LinkedListNode('B');
var c = new LinkedListNode('C');
var d = new LinkedListNode('A');

a.next = b;
b.next = c;
c.next = d;
d.next = b;

assert.equal(containsCycle(a), true, 'The linked list should containsCycle');
assert.equal(containsCycleOptimizedSpace(a), true, 'The linked list should containsCycleOptimizedSpace');
