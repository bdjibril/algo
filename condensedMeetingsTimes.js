// Helper to clear
console.clear && console.clear();

const condenseMeetingTimes = (meetings) => {
  
  let min = 0;
  let max = 0;
  let all = [];
  
  // finding min and max
  meetings.forEach((meeting) => {
    if(min > meeting[0]){
      min = meeting[0];
    }
    if(max < meeting[1]){
      max = meeting[1];
    }
    
    for(let i = meeting[0]; i <= meeting[1]; i++ ){
      all[i] = (i === meeting[0] && all[i])? '->' : (i<meeting[1])? '->' : ( all[i] === '->' )? '->' : '|' ;
    }
    
  });
  
  
  // showing a graphical representation
  console.log(all);
  
  // create an array where we will push all the ranges
  let start = true;
  let range = [];
  for(let i = 0; i < all.length; i++ ){
    
    if(start && all[i] === '->'){
      range.push(i);
      start = !start;
    }
    else if(!start && all[i] === '|'){
      range.push(i);
      start = !start;
    }
  }
  
  // insert pairs in the condensed 
  let condensed = [];
  for(let i = 0; i < range.length ; i+=2 ){
    condensed.push([range[i] + min, range[i+1] + min]);
  }
  
  
  return condensed;
  
}

const test1 = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]];
const test2 = [[1, 2], [2, 3]];
const test3 = [[1, 5], [2, 3]];
const test4 = [[1, 3], [2, 3], [4, 5], [7, 10]];

const start = (new Date).getTime();

console.log(condenseMeetingTimes(test1));
console.log(condenseMeetingTimes(test2));
console.log(condenseMeetingTimes(test3));
console.log(condenseMeetingTimes(test4));

const len = (new Date).getTime() - start;
console.log(`Took ${len} milliseconds` );

