/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubArrayLen = function(nums, k) {
    const hashMap = new Map()
    let total = 0
    let res = 0
    for (let i = 0; i < nums.length; i++) {
        total += nums[i]
        if (total === k) {
            res = i + 1;
        }
        const key = total - k
        if (hashMap.has(key)) {
            res = Math.max(res, i - hashMap.get(key))
        }
        if (!hashMap.has(total)) {
            hashMap.set(total, i)
        }

    }

    return res
    
};