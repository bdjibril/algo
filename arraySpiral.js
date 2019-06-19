'use strict'

const arraySpiral = (array) => {
  const directions = {
    up : 'UP',
    right : 'RIGHT',
    down : 'DOWN',
    left : 'LEFT'
  }

  let top = 0;
  let right = array[0].length - 1;

  let bottom = array.length - 1;
  let left = 0;

  // Start with the up direction
  let direction = directions.up;

  while(top <= bottom && left <= right){

    // If direction is UP
    // Then loop trough the left part and set the direction to RIGHT and move the left one col
    if(direction = directions.up){
      for(let i = bottom; i >= top; i--) {
        console.log(array[i][left])
      }
      direction = directions.right;
      left++;
    }

    // If direction is RIGHT
    // Then loop trough the top part and set the direction to DOWN and move the top one row
    if(direction = directions.right){
      for(let i = left; i <= right; i++) {
        console.log(array[top][i])
      }
      direction = directions.down;
      top++;
    }

    // If direction is DOWN
    // Then loop trough the right part and set the direction to LEFT and move the right one col--
    if(direction = directions.down){
      for(let i = top; i <= bottom; i++) {
        console.log(array[i][right])
      }
      direction = directions.left;
      right--;
    }

    // If direction is LEFT
    // Then loop trough the bottom part and set the direction to UP and move the bottom one row--
    if(direction = directions.left){
      for(let i = right; i >= left; i--) {
        console.log(array[bottom][i])
      }
      direction = directions.left;
      bottom--;
    }

  }

  //console.log(top,right, bottom, left);

}

// Example : 
 let array  = 
  [[5,6,7,8,9],
   [4,19,20,21,10],
   [3,18,25,22,11],
   [2,17,24,23,12],
   [1,16,15,14,13]]

arraySpiral(array);

// Example : 
 let array2  = 
  [[3,4,5,6,7],
   [2,13,14,15,8],
   [1,12,11,10,9]]

arraySpiral(array2);

// Example : 
 let array3  = 
  [[2,3],
   [1,4]]

arraySpiral(array3);


