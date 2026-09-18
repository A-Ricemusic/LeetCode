/**
 * @param {number[]} nums
 * @return {number}



 */
var maxProduct = function(nums) {
    let currMax = nums[0];
    let currMin = nums[0];
    let res = nums[0];

    for (let i = 1; i < nums.length; i++) {
        const tmp = currMax
        currMax = Math.max(nums[i], currMax * nums[i], currMin * nums[i]);
        currMin = Math.min(nums[i], currMin * nums[i], tmp * nums[i]);
        res = Math.max(res, currMax);
    }

    return res
};