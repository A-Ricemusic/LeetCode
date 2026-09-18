/**
 * @param {number[]} nums
 * @return {number}
    nums = [5,6,2,3,4]
    nums = [3,4,5,6,1]
    nums = [1,4,5,6,7]
 */
var findMin = function(nums) {

    let l = 0;
    let r = nums.length - 1;
    while (l <= r) {
        const m = Math.floor(l + (r - l) / 2) // (r + l) / 2
        const num = nums[m]
        const leftNum = m - 1 >= 0? nums[m - 1] : Infinity;
        const rightNum = m + 1 < nums.length? nums[m + 1] : Infinity;
        if (num < leftNum && num < rightNum) {
            return nums[m];
        }

        if (num > nums[0]) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }


    return -1;

    
};