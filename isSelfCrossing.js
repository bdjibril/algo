const isSelfCrossing = x => {
  
  if(x.length < 4) return false;
  
  for(let i = x.length - 1; i >= 3; i--){
    if(x[i] >= x[i-2] && x[i-1] <= x[i-3]){
      return true;
    }
    if(i>3 && x[i-1] == x[i-3] && (x[i] + x[i-4]) >= x[i-2] ){
        return true;
    }
    if(i>4 && (x[i] + x[i-4]) >= x[i-2] && (x[i-1] + x[i-5]) >= x[i-3] && x[i-2] >= x[i-4] && x[i-3] >= x[i-1] ){
        return true;
    }
  }
  
  return false;
  
};

const test1 = [2,1,1,2];
const test2 = [1,2,3,4];
const test3 = [1,1,2,2,1,1]
const test4 = [3,3,3,2,1,1];
const test5 = [1,1,2,2,3,3,4,4,10,4,4,3,3,2,2,1,1];

console.log(test1, isSelfCrossing(test1));
console.log(test2, isSelfCrossing(test2));
console.log(test3, isSelfCrossing(test3));
console.log(test4, isSelfCrossing(test4));
console.log(test5, isSelfCrossing(test5));