/*
1. Two Sum
Easy

11153

381

Favorite

Share
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
Accepted
1,922,112
Submissions
4,338,883

*/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var allNums = new Set(nums);
    for(var i=0; i < nums.length; i++){
        if(allNums.has(target - nums[i]) && target !== 2*nums[i]){
            return [Math.min(i,nums.indexOf(target - nums[i])), Math.max(i,nums.indexOf(target - nums[i]))];
        }
    }
};