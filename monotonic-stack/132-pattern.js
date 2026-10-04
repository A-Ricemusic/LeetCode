/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
    const n = nums.length;
    const minArray = new Array(n).fill(0);
    minArray[0] = nums[0];
    for (let i = 1; i < n; i++) {
        minArray[i] = Math.min(nums[i], minArray[i - 1]);
    }
    const stack = [];
    for (let i = n - 1; i >= 0; i--) {
        if (nums[i] <= minArray[i]) continue;
        while (stack.length !== 0 && stack.at(-1) <= minArray[i]) {
            stack.pop();
        }

        if (stack.length !== 0 && stack.at(-1) < nums[i]) return true;
        stack.push(nums[i]);
    };

    return false;
    
};