/**
 * @param {number[]} nums
 * @return {boolean}
 [3,5,0,3,4]
 currMin = 3
 [[5,3]]
 

 */
var find132pattern = function(nums) {
    let stack = [];
    let currMin = nums[0];
    for (let i = 1; i < nums.length; i++) {
        while (stack.length !== 0 && stack.at(-1)[0] <= nums[i]) {
            stack.pop()
        }
        if (stack.length !== 0 && stack.at(-1)[1] < nums[i]) return true;
        stack.push([nums[i], currMin])
        currMin = Math.min(currMin, nums[i]);
    }
    return false;
    
};