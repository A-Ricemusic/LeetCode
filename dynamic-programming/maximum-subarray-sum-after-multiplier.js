/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}

 time: o(n)
 space: o(n)
 */
var maxSubarraySum = function(nums, k) {
    const c1 = [];
    const c2 = [];
    for (const num of nums) {
        c1.push(num * k);
        if (num < 0) {
            c2.push(Math.ceil(num / k));
        } else {
            c2.push(Math.floor(num / k));
        }
    }

    let count1 = c1[0];
    let count2 = c2[0];
    let res = Math.max(count1, count2);
    
    for (let i = 1; i < nums.length; i++) {
        count1 += c1[i];
        count2 += c2[i];
        res = Math.max(res, count1,count2)

        if (count1 < 0) {
            count1 = 0;
        };
        if (count2 < 0) {
            count2 = 0;
        };
    }

    return res;

    
};