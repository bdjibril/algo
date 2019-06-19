'use strict';

const assert = require('assert');

const xOrAll = (chCode, str) => {
  for(let i = 0; i< str.length; i++){
    chCode ^= str.charCodeAt(i);
  }
  return chCode;
}

const extraChar = (string1, string2) => {
  let chCode = 0;
  return String.fromCharCode(xOrAll(xOrAll(chCode,string1), string2));
}

const result = extraChar("alpha","alphab");
const result2 = extraChar("The open Web presents incredible opportunities for developers","The open Web presents ^incredible opportunities for developers");

assert.equal(result, "b", `the extraChar is incorrect : ${result}  Expected : b`);

assert.equal(result2, "^", `the extraChar is incorrect : ${result2}  Expected : ^`);
