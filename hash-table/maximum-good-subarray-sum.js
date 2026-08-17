/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function(nums, k) {
    let res = -Infinity

    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            if (Math.abs(nums[i] - nums[j]) === k) {
                const sum = nums.slice(i, j + 1).reduce((a,c) => a + c, 0)
                res = Math.max(res, sum)
            }
        }
    }

    return res
    
};