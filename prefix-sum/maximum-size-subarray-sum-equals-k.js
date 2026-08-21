/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}

 */
var maxSubArrayLen = function(nums, k) {
    let res = 0
    const hashMap = new Map()
    let total = 0

    for (let i = 0; i < nums.length; i++) {
        total += nums[i]
        if (total === k) {
            res = i + 1
        }
        if (hashMap.has(total - k)) {
            res = Math.max(res, i - hashMap.get(total - k))
        }
        hashMap.set(total, i)
    }


    return res
    
};