/**
 * @param {number[]} nums
 * @return {number[]} 
    nums = [1,2,5,9]
    res = [1,9,2,5]
    arr1 = [1,2,5]
    arr2 = [9]
 */
var rearrangeArray = function(nums) {
    nums.sort((a, b) => a - b);

    for (let i = 1; i < nums.length - 1; i += 2) {
        [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
    }

    return nums;
};