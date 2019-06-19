'use strict';

const numberOfDisks = process.argv[2] || 4;

let count = 0;
const TOH = (n, a, b, c) => {
  
  if(n > 0){
    TOH(n-1, a, c, b);
    console.log(`Move ${++count} from ${a} to ${c}`);
    TOH(n-1, b, a, c);
  }
  
};

TOH(numberOfDisks, 'A', 'B', 'C');