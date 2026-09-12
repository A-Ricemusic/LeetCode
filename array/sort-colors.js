/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    const arr = [0,0,0]
    for (const num of nums) {
        arr[num]++;
    }

    for (let i = 0; i < nums.length; i++) {
        if (arr[0] !== 0) {
            nums[i] = 0
            arr[0]--;
        } else if (arr[1] !== 0) {
            nums[i] = 1;
            arr[1]--;
        } else {
            nums[i] = 2
            arr[2]--;
        }
    }
    
};