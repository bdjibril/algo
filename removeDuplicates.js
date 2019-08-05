/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (nums.length < 2) return nums.length;
    for (var i = 0; i < nums.length; i++) {
        // binf search the last duplicate
        var start = i + 1;
        var end = nums.length - 1;
        var found = -1;

        while (start <= end && found === -1) {

            var mid = start + Math.floor((end - start) / 2);

            console.log({start, mid, end, value:nums[i]})

            // find idx
            if (nums[mid] === nums[i] && (mid === (nums.length - 1) || nums[mid + 1] !== nums[mid])) {
                found = mid;
            }

            // idx on left
            else if (nums[mid] > nums[i]) {
                end = mid - 1;
            }

            // idx on right
            else if (nums[mid] === nums[i] && nums[mid + 1] === nums[i]) {
                start = mid + 1;
            }

        }


        if (found !== -1) {
            nums.splice(i, found - i)
        }

    }

    console.log(nums)

    return nums.length;
};

// console.log(removeDuplicates([1,1,2]));
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));