/**
 * @param {number[]} nums
 * @return {boolean}

  nums = [3,2,5,10,7,2,4]
  currMax = 3
  currMin = 2

 */
var find132pattern = function(nums) {
    let currMin = nums[0];
    let currMax = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > currMin) {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[j] < nums[i] && nums[j] > currMin) return true;
            }
        }
        currMin = Math.min(currMin, nums[i]);
        currMax = Math.max(currMax, nums[i])
    }

    return false;
    
};