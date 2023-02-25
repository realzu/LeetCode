/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    const indexValue = nums.indexOf(target);
    if (indexValue !== -1) {
        return indexValue;
    } else {
        for (let i=0; i<nums.length; i++) {
            if (nums[i] > target) return i;
        }
    }
    return nums.length;
};