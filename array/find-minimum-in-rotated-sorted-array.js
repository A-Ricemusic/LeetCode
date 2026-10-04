/**
 * @param {number[]} nums
 * @return {number}
 nums = [3,4,5,1,2]
 l = 0, r = 4

 nums = [4,5,6,7,0,1,2]
 */
var findMin = function(nums) {
    let l = 0;
    let r = nums.length - 1
    while (l <= r) {
        const m = Math.floor(l + (r - l) / 2)
        const num = nums[m];
        const numLeft = m - 1 >= 0? nums[m - 1] : Infinity;
        const numRight = m + 1 < nums.length? nums[m + 1] : Infinity;
        if (num < numLeft && num < numRight) {
            return num;
        } 
        if (num < nums[r]) {
            r = m - 1
        } else {
            l = m + 1
        }

    }
    
};