/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    nums.sort((a, b) => a - b);
    
    for (let i=1; i<nums.length; i+=2) {
        if (nums[i-1] !== nums[i]) return nums[i-1];
    }
    
    return nums[nums.length - 1];    
};