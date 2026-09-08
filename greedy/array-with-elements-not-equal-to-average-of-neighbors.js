/**
 * @param {number[]} nums
 * @return {number[]} 
    nums = [1,2,3,4,2]
 */
var rearrangeArray = function(nums) {
    return nums.sort((a,b) => a - b);
};