'use strict';

function LinkedListNode(value) {
    this.value = value;
    this.next = null;
}

var a = new LinkedListNode('A');
var b = new LinkedListNode('B');
var c = new LinkedListNode('C');

a.next = b;
b.next = c;

const deleteNode = (node) => {

	if(node.next === null){
		throw new Error("Can't delete the last node with this method!");
	}
	else {
		node.value = node.next.value;
		node.next= node.next.next;
    }

};

const traverseList = (leadNode) => {
	let display = '';
	let currentNode  = leadNode;
	while(currentNode !== null){
		display += (`${currentNode.value}` + ((currentNode.next === null)? '' : ' -> '));
		currentNode = currentNode.next;
	}
	console.log(display);
} 


deleteNode(b);
traverseList(a);
deleteNode(a);
traverseList(a);