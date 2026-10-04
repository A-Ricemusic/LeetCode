/**
 * @param {number[]} nums
 * @return {number[]}
 [2,4,7,6,9,5,3,1,8]
 
 */
var rearrangeArray = function(nums) {
    nums.sort((a,b) => a - b);
    for (let i = 1; i < nums.length; i+=2) {
        [nums[i], nums[i - 1]] = [nums[i - 1], nums[i]]
    }

    return nums
    
};