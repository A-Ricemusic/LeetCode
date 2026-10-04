/**
 * @param {number[]} nums
 * @return {number}
 nums = [1,2,1,0,5,6,4]
 l = 0;
 r = nums.length - 1
 */
var findPeakElement = function(nums) {
    let l = 0;
    let r = nums.length - 1;

    while (l <= r) {
        const m = Math.floor(l + (r - l) / 2);
        const num = nums[m];
        const numLeft = m - 1 < 0? -Infinity : nums[m - 1];
        const numRight = m + 1 >= nums.length? -Infinity: nums[m + 1];
        if (num > numLeft && num > numRight) {
            return m;
        } else if (num > numLeft && num < numRight) {
            l = m + 1
        } else {
            r = m - 1
        }
    } 

    return -1;
};