/**
 * @param {number[]} nums
 * @return {number}
    nums = [5,6,7,8,2,3,4]
    nums = [3,4,5,6,1]
    nums = [1,4,5,6,7]

     0 1 2 3 4 5 6
    [5,6,7,8,9,3,4]


    0 1 2 3 4 5 6
    [5,6,7,8,9,10,11]

    0 1 2 3 4 5 6
    [7,8,2,3,4,5,6]


     [10,6,7,2,4]
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

        if (nums[m] > nums[r]) {
            l = m + 1
        } else {
            r = m - 1
        }

    }


    return -1;

    
};