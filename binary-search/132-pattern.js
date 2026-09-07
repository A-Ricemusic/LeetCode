/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
    let stack = []
    for (let i = 0; i < nums.length; i++) {
        const ref = stack.at(-1)
        while (stack.length !== 0 && nums[i] < ref) {
            if (nums[i] > stack.at(-1)) return true;
            stack.pop();
        }

        stack.push(nums[i])
    }

    return false;
    
};