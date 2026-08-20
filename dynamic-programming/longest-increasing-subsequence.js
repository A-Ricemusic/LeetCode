/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const sub = [nums[0]];

    /* 
        nums = [10,9,2,5,3,7,2,18]
        sub = [2,3,7]
        i = 2
    
    */

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > sub[sub.length - 1]) {
            sub.push(nums[i]);
        } else {
            let l = 0
            let r = sub.length - 1
            while (l < r) {
                const m = Math.floor(l + (r - l) / 2)
                if (sub[m] < nums[i]) {
                    l = m + 1
                } else {
                    r = m
                }
            }
            sub[l] = nums[i]
        }
    }

    return sub.length;
};