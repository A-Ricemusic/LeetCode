/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function(nums, k) {
    let hashMap = new Map();
    let total = 0;
    let res = 0;
    hashMap.set(0,1)

    for (const num of nums) {
        total += num
        let remain = total % k;
        if (remain < 0) {
        remain += k;
        }
        res += hashMap.get(remain) || 0
        hashMap.set(remain, (hashMap.get(remain) || 0) + 1) 
    }

    return res
    
};