/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number[][]}
 */
var findMissingRanges = function(nums, lower, upper) {
    const res = []
    if (nums.length === 0) {
        res.push([lower,upper])
    }
    for (let i = 0; i < nums.length; i++) {
        let num1 = 0;
        let num2 = 0;
        if (i === 0) {
            num1 = lower
            num2 = nums[i] - 1
            if (num2 >= num1) {
                res.push([num1,num2])
            }
        }

        if (i === nums.length - 1) {
            num1 = nums[i] + 1;
            num2 = upper;
            if (num2 >= num1) {
                res.push([num1,num2])
            }
            continue
        }


        num1= nums[i] + 1
        num2 = nums[i + 1] - 1
        if (num2 >= num1) {
            res.push([num1,num2])
        }
    }
    return res
};