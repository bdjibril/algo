/*

Given an array arr of N integers. Find the contiguous sub-array with maximum sum.

Input:
The first line of input contains an integer T denoting the number of test cases. The description of T test cases follows. The first line of each test case contains a single integer N denoting the size of array. The second line contains N space-separated integers A1, A2, ..., AN denoting the elements of the array.

Output:
Print the maximum sum of the contiguous sub-array in a separate line for each test case.

Constraints:
1 ≤ T ≤ 110
1 ≤ N ≤ 106
-107 ≤ A[i] <= 107

Example:
Input
2
5
1 2 3 -2 5
4
-1 -2 -3 -4
Output
9
-1

*/

function maxSubArray(arr){
    var maxEndingHere = arr[0];
    var maxSoFar = arr[0];
    for(var i=1; i < arr.length; i++ ){
        maxEndingHere = maxSoFar + arr[i];
        if(maxSoFar < maxEndingHere) maxSoFar = maxEndingHere;
    }
    return maxSoFar;
}

console.log(maxSubArray([1, 2, 3, -2, 5]))
console.log(maxSubArray([-1, -2, -3, -4]))
console.log(maxSubArray([-1]))
