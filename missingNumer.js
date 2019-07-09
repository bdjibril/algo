/*

Given an array C of size N-1 and given that there are numbers from 1 to N with one element missing, the missing number is to be found.

Input:
The first line of input contains an integer T denoting the number of test cases. For each test case first line contains N(size of array). The subsequent line contains N-1 array elements.

Output:
Print the missing number in array.

Constraints:
1 ≤ T ≤ 200
1 ≤ N ≤ 107
1 ≤ C[i] ≤ 107

Example:
Input:
2
5
1 2 3 5
10
1 2 3 4 5 6 7 8 10

Output:
4
9

*/

function missingNumberGauss(n, arr){
    var totalSum = n*(n + 1) / 2;
    var arrSum = 0;
    arr.forEach(element => {
        arrSum += element;
    });

    return totalSum - arrSum;
}

console.log(missingNumberGauss(5, [1, 2, 3, 5])) // 4
console.log(missingNumberGauss(10, [1, 2, 3, 4, 5, 6, 7, 8, 10])) // 9


function missingNumberXor(n, arr){
    var xor = 1;
    for(var i = 2; i <= n; i++){
        xor ^= i;
    }
    arr.forEach(element => {
        xor ^= element
    });

    return xor;
}


console.log(missingNumberXor(5, [1, 2, 3, 5])) // 4
console.log(missingNumberXor(10, [1, 2, 3, 4, 5, 6, 7, 8, 10])) // 9