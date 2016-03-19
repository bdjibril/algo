'use strict'

console.log("eggDrop");

const eggDrop = (secretBreakFloor, maxFloors) => {
  maxFloors = maxFloors || 100;
  debugger;
  // Get first Egg break floor
  let previousFloor = 0;
  let currentFloor = 2;
  let totalDrops = 0;
  while(currentFloor < secretBreakFloor){
    previousFloor = currentFloor;
    currentFloor *= 2;
    totalDrops++;
  }
  debugger;
  
  maxFloors = (currentFloor < maxFloors)?currentFloor:maxFloors;
  
  // First Egg Broke do the second egg step by step
  for(let i=previousFloor; i <= maxFloors ; i++){
    debugger;
    totalDrops++;
    if(i == secretBreakFloor){
      return totalDrops;
    }
  }
  
};

console.log(eggDrop(25,100));