console.clear();

const reverseArray = (array, start) => {
  
  if(typeof(start) === "undefined") start = -1;

  if( ++start === array.length - 1 ) return array[start];
  
  return `${reverseArray(array, start)} ${array[start]}`;
}

const reverseWords = (message) => reverseArray(message.split(" "));


const test1 = "find you will pain only go you recordings security the into if";

console.log(reverseWords(test1));