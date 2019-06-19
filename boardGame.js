'use strict';

const getRand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const boardGame = (width, height) => {

	if(width < 3 || height < 3){
		const err = "The board should be at least of size 3x3";
		throw(err);
	}

	let board = [];

	// Setup game first move

	// getRandom direction(horizontal or vertical)
	const vertical = (getRand(0,1))?true:false;

	// handle vertical game
	if(vertical){
		// pick a random starting point (i, j)
		let sV = getRand(0, height - 3);
		let sH = getRand(0, width - 1);

		console.log("sV : " + sV);
		console.log("sH : " + sH);

		// getRandom shape
		const shape = getRand(1,4);

		console.log("shape : " + shape);

		// fill in the starting position
		board[sV] = board[sV] || [];
		board[sV][sH] = shape;

		board[sV + 1] = board[sV + 1] || [];
		board[sV + 1][sH] = shape;

		// fill in the one move
		
		// if there is space at the top and bottom
		if(sV > 0 && sV <= height -3 ){
			// get a random position
		}
		// if we only have space at the top
		//   if we have space at both left right
		//   if we only have space at left
		//   if we only have space at right
		// if we only space at the bottom
		//   if we only have space at left
		//   if we only have space at right

	} else {
		// pick a random starting point (i, j)
		let sV = getRand(0, height - 1);
		let sH = getRand(0, width - 3);

		console.log("sV : " + sV);
		console.log("sH : " + sH);

		// getRandom shape
		const shape = getRand(1,4);

		console.log("shape : " + shape);

		// fill in the starting position
		board[sV] = board[sV] || [];
		board[sV][sH] = shape;
		board[sV][sH+1] = shape;

	}

	// handle horizontal starting

	// fill in all the other blanks
	 
	// Print the board for testing
	for(let i = 0; i < height; i++){
		let els = []
		for(let j = 0; j < width; j++){
			els.push((board[i] && board[i][j])?`| ${board[i][j]} `:'|---');
		}
		console.log(els.join('') + "|\n");
	}
	

}

boardGame(6,6);

console.log(getRand(0,1));

/*
j
-   -   -   - i
-   -   -   -
-   -   -   -
-   -   -   -
-   -   -   -
*/