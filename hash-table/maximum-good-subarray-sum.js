/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function(nums, k) {
    const hashMap = new Map();
    let prefixSum = 0;
    let res = -Infinity;

    for (const num of nums) {
        const target1 = num - k;
        const target2 = num + k;

        if (hashMap.has(target1)) {
            res = Math.max(res, prefixSum + num - hashMap.get(target1))

        }

        if (hashMap.has(target2)) {
            res = Math.max(res, prefixSum + num - hashMap.get(target2))
        }

        if (!hashMap.has(num) || prefixSum < hashMap.get(num)) {
            hashMap.set(num, prefixSum)
        }
        prefixSum += num
    }

    return res === -Infinity? 0 : res

};