'use strict';

const canWatch2Movies = (fLength, moviesLengths) => {
	let moviesSet  = [];
	for(let i=0; i < moviesLengths.length; i++){
		if(moviesSet[fLength - moviesLengths[i]]) return true;

		moviesSet[moviesLengths[i]] = moviesLengths[i];
	}

	return false;
}

console.log(canWatch2Movies(30, [1,17,5,20,15,12]));