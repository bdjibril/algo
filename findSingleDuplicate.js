'use strict';

const findSingleDuplicate = (deliveryIds) => {
	let duplicate = 0;
	deliveryIds.forEach( id => duplicate ^= id );

	return duplicate;
};

let test1 = [1,2,3,4,5,6,3,4,2,1,6];

console.log(findSingleDuplicate(test1));