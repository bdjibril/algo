/*

Given an array of distinct integers. The task is to count all the triplets such that sum of two elements equals the third element.

Input:
The first line of input contains an integer T denoting the number of test cases. Then T test cases follow. Each test case consists of two lines. First line of each test case contains an Integer N denoting size of array and the second line contains N space separated elements.

Output:
For each test case, print the count of all triplets, in new line. If no such triplets can form, print "-1".

Constraints:
1 <= T <= 100
3 <= N <= 105
1 <= A[i] <= 106

Example:
Input:
2
4
1 5 3 2
3
3 2 7
Output:
2
-1

Explanation:
Testcase 1: There are 2 triplets: 1 + 2 = 3 and 3 +2 = 5

** For More Input/Output Examples Use 'Expected Output' option **

*/

function findTheTriplets(arr){
    // First sort the array
    arr.sort((a, b) => (a-b));

    // [ 1, 2, 3, 5 ]

    var triplets = [];

    var num = arr.length -1

    while(num >= 2){
        var upper = num -1;
        var lower = 0;


        while(upper >= 0 && lower <= num - 1){

            if(arr[upper] + arr[lower] === arr[num]){
                triplets.push([arr[upper], arr[lower], arr[num]])
                break;
            } else if(arr[upper] + arr[lower] < arr[num]){
                lower++;
            } else {
                upper--;
            }
        }

        num--;

    }

    return triplets;
}


console.log(findTheTriplets([1, 5, 3, 2]));