/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumScore = function(nums) {
    const n = nums.length;
    let max = nums[0];
    let j = 0;
    let res = 0
    for (let i = 1; i < n - 1; i++) {
        if (nums[i] > max) {
            res += (i - j) * max 
            j = i
            max = nums[i]
        }
    }

    res += (n - 1 - j) * max 
    return res
};