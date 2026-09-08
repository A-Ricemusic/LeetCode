/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    nums.sort((a,b) => a - b);
    for (let i = 1; i < nums.length - 1; i+=2) {
        [nums[i + 1], nums[i]] = [nums[i], nums[i + 1]]
    }

    return nums;
    
};