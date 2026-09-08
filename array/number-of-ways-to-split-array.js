/**
 * @param {number[]} nums
 * @return {number}

time: o(n)
space: o(n)
 */
var waysToSplitArray = function(nums) {
    const n = nums.length 
    const total = nums.reduce((a,c) => a + c, 0);
    let sum = 0;
    let res = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        sum += nums[i];
        right = total - sum;
        if (sum >= right) {
            res++;
        }
    }
    return res;
    
};