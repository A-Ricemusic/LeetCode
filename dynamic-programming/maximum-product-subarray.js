/**
 * @param {number[]} nums
 * @return {number}

 nums = [-2,0,2,2,4,6]

 curr = 8
 currMax = 8
 currMin = 4
 globalMax = 4


 */
var maxProduct = function(nums) {
    let curr = nums[0];
    let currMax = nums[0];
    let currMin = nums[0];
    let res = nums[0];

    for (let i = 1; i < nums.length; i++) {
        curr *= nums[i]
        currMax = Math.max(nums[i], curr);
        currMin = Math.min(nums[i], curr);
        res = Math.max(res, currMax);
        if (curr === 0) {
            curr = 1;
        }
    }

    return res
};