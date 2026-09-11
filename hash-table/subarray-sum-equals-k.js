/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    const hashMap = new Map();
    hashMap.set(0,1);
    let total = 0;
    let res = 0;

    for (const num of nums) {
        total += num;
        res += (hashMap.get(total - k) ?? 0);
        hashMap.set(total, (hashMap.het(total) ?? 0) + 1);
    }

    return res;
};