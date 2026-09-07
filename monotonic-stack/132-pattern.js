/**
 * @param {number[]} nums
 * @return {boolean}
 nums[i] = 2
 [1]
 nums = [3,1,4,2]

 
 */
var find132pattern = function(nums) {
    let stack = []
    for (let i = 0; i < ums.length; i++) {
        while (stack.length !== 0 && nums[i] < stack.at(-1)) {
            if (nums[i] > stack.at(-1)) return true;
            stack.pop();
        }

        stack.push(nums[i])
    }

    return false;
    
};