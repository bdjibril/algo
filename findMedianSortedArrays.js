/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    var
        min1 = 0,
        max1 = nums1.length - 1,
        min2 = 0,
        max2 = nums2.length - 1,
        min = Math.min(nums1[min1] || Infinity, nums2[min2] || Infinity),
        max = Math.max(nums1[max1] || -Infinity, nums2[max2] || -Infinity),
        remainingMoves = nums1.length + nums2.length;

    while (remainingMoves > 1) {

        if (nums2[min2] === undefined || nums1[min1] < nums2[min2]) {
            min = nums1[min1]
            min1++;
            remainingMoves--
        } else if (nums1[min1] === undefined || nums2[min2] <= nums1[min1]) {
            min = nums2[min2]
            min2++;
            remainingMoves--
        }

        if (nums2[max2] === undefined || nums1[max1] > nums2[max2]) {
            max = nums1[max1];
            max1--;
            remainingMoves--
        } else if (nums1[max1] === undefined || nums2[max2] >= nums1[max1]) {
            max = nums2[max2];
            max2--;
            remainingMoves--
        }
    }

    if (min === max) return min;

    if (remainingMoves === 0) {
        return (min + max) / 2
    } else {
        if (min1 === max1) {
            return nums1[min1]
        } else {
            return nums2[min2]
        }
    }

};


console.log(findMedianSortedArrays([1, 3], [2])) // 2
console.log(findMedianSortedArrays([1, 2], [3, 4])) // 2.5
console.log(findMedianSortedArrays([], [1])) // 1
console.log(findMedianSortedArrays([], [2, 3])) // 2.5
console.log(findMedianSortedArrays([3], [-2, -1])) //-1
console.log(findMedianSortedArrays([1, 3], [-2, -1])) // 0
console.log(findMedianSortedArrays([-3], [-1, 3])) // -1
console.log(findMedianSortedArrays([2, 2, 2, 2], [2, 2, 2])) // 2