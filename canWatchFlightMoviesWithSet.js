'use strict';

const canWatch2Movies = (fLength, moviesLengths) => {
	let moviesSet  = new Set;
	for(let i=0; i < moviesLengths.length; i++){
		if(moviesSet.has(fLength - moviesLengths[i])) return true;

		moviesSet.add(moviesLengths[i]);
	}

	return false;
}

console.log(canWatch2Movies(30, [1,10,5,20,15,12]));