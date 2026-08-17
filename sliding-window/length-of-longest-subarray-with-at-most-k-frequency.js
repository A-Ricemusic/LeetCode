/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function(nums, k) {
    let res = 0;
    let l = 0;
    const hashMap = new Map()
    for (let r = 0; r < nums.length; r++) {
        hashMap.set(nums[r], (hashMap.get(nums[r]) || 0) + 1)
        
        while (hashMap.get(nums[r]) > k) {
            hashMap.set(nums[l], hashMap.get(nums[l]) - 1);
            l++;
        }
        res = Math.max(res, r - l + 1)
    }

    return res;
};