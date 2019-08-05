/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length <= 1) return nums.length;
    var numSet = new Set(nums);
    var max = 1;
    

    //console.log(numSet)
    
    for(var i = 0; i < nums.length; i++){
        if(!numSet.has(nums[i]-1)  && numSet.has(nums[i])) {
            ct = 1;
            var num = nums[i];
            
            while(numSet.has(nums[i]+1)){
                //console.log(num)
                ct++;
                num++;
            }
            
            max = (max>ct)?max:ct;
        }
    }
    
    return max;
    
};


/*
{
left:
right:
}
*/