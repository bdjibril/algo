/*

Given an unsorted array A of size N of non-negative integers, find a continuous sub-array which adds to a given number S.

Input:
The first line of input contains an integer T denoting the number of test cases. Then T test cases follow. Each test case consists of two lines. The first line of each test case is N and S, where N is the size of array and S is the sum. The second line of each test case contains N space separated integers denoting the array elements.

Output:
For each testcase, in a new line, print the starting and ending positions(1 indexing) of first such occuring subarray from the left if sum equals to subarray, else print -1.

Constraints:
1 <= T <= 100
1 <= N <= 107
1 <= Ai <= 1010

Example:
Input:
2
5 12
1 2 3 7 5
10 15
1 2 3 4 5 6 7 8 9 10
Output:
2 4
1 5

25

1 2 3 7 33 21 2 2 5
*/

function subArray(arr, sum){
  var currSum = arr[0];
  var start = 0;
  var end = 0;
  
  while(end < arr.length){
    if(currSum === sum) return [start, end];
    if(currSum < sum){
      if(end !== arr.length -1) currSum += arr[end + 1]
      end++;
    }
    else {
      currSum -= arr[start];
      start++;
    }
  }

  return null;

}

console.log(subArray([1, 2, 3, 7, 33, 21, 2, 2, 5], 25)) // [5,7]
console.log(subArray([1, 2, 3, 7, 33, 21, 2, 2, 5], 33)) // [4,4]
console.log(subArray([1, 2, 3, 7, 33, 21, 2, 2, 5], 2)) // [1,1]
console.log(subArray([1, 2, 3, 7, 33, 21, 2, 2, 5], 76)) // [0,8]
console.log(subArray([1, 2, 3, 7, 33, 21, 2, 2, 5], 100)) // null