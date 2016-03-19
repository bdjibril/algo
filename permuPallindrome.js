'use strict';

const assert = require('assert');

const xOrAll = (chCode, str) => {
  for(let i = 0; i< str.length; i++){
    chCode ^= str.charCodeAt(i);
  }
  return chCode;
}

const permuPalindrome = (str) => {
  let chCode = 0;
  const res = xOrAll(chCode,str);
  if(res === 0) return true;

  let count = 0;
  for(let i = 0; i < str.length; i++){
  	console.log(str,res, str.charCodeAt(i));
    if(res === str.charCodeAt(i)){
    	
    	count++;
    }
  }
  console.log("count", count);
  if((count | 1) === count) return true;

  return false;
}

const result = permuPalindrome("civic");
const result2 = permuPalindrome("ivicc");
const result3 = permuPalindrome("civil");
const result4 = permuPalindrome("togozik");

assert.equal(result, true, `the test for pallindrome is incorrect : ${result}  Expected : true`);

assert.equal(result2, true, `the test for pallindrome is incorrect : ${result2}  Expected : true`);

assert.equal(result3, false, `the test for pallindrome is incorrect : ${result3}  Expected : false`);

assert.equal(result4, false, `the test for pallindrome is incorrect : ${result4}  Expected : false`);