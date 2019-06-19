'use strict';

let fibMap = [];

const fibonacci = (n) => {

	if(n <= 1 ) return n;

	const fib = fibMap[n] || fibonacci(n-1) + fibonacci(n-2);

	if(!fibMap[n]) fibMap[n] = fib;

	return fib;
}

// TODO implement the iterative aproach

const testValue = process.argv[2] || 7;

console.log(fibonacci(testValue));