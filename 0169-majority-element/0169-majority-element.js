/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const obj = {};
    nums.forEach((x) => {
        if (!obj[x]) obj[x] = 1;
        else obj[x] = obj[x] + 1;
    })
    
    const arr = Object.entries(obj);
    arr.sort((a, b) => b[1] - a[1]);
    
    return arr[0][0];
};