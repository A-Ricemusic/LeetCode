/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 [1,3,6,10,15,21]
 */
var maximumSubarraySum = function(nums, k) {
    let res = -Infinity
    const prefixSum = []
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
        total += nums[i]
        prefixSum.push(total)
    }

    console.log(prefixSum)
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (Math.abs(nums[i] - nums[j]) === k) {
                if (i - 1 < 0) {
                    res = Math.max(res, prefixSum[j])
                } else {
                    res = Math.max(res, prefixSum[j] - prefixSum[i - 1])
                }
                
            }
        }
    }
    return res === -Infinity? 0 : res
    
};