'use strict';

const rpt = (array, start, end) => {

  // Base case
  if(start == end) return end;

  let middle = Math.floor((start + end)/2);
  
  if(array[start] >= array[middle]){
    //if(start == middle) return middle;
    return rpt(array, start, middle);
  }
  else if(array[middle + 1] >= array[end]){
    //if(middle + 1 == end) return end;
    return rpt(array, middle + 1, end);
  }
  else {
    return 0;
  }
  
};

const rotationPoint = (array) => {
  return rpt(array, 0, array.length -1);
};


const rp = rotationPoint([    
    "ptolemaic",
    "retrograde",
    "supplant",
    "undulate",
    "xenoepist",
    "asymptote", // <-- rotates here!
    "babka",
    "banoffee",
    "engender",
    "karpatka",
    "othellolagkage"
]);

console.log(rp);