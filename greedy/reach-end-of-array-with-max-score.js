/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumScore = function(nums) {
    const n = nums.length;
    const dp = new Array(n).fill(0);
    let max = nums[0];
    let j = 0;
    res = 0
    for (let i = 1; i < n - 1; i++) {
        if (nums[i] > max) {
            res += (i - j) * max + dp[j]
            j = i
            max = nums[i]
        }
    }

    res += (n - 1 - j) * max + dp[j]
    

    return res

    
};