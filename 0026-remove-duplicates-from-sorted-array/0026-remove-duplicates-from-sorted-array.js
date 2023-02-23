/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const set = [...new Set(nums)];
    let i = 0;
    
    while (nums.length !== set.length) {
        if (nums[i] === nums[i+1]) {
            nums.splice(i+1, 1); // #deletedCount
        }
        else i++;
    }
    
    return nums.length;
};