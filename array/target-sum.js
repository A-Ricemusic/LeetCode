/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 n = length of nums
 m = amount of sum combinations
     0  1. 2. 3. 4 5 6 7 8 9 10
    -5,-4,-3,-2,-1,0,1,2,3,4,5
  0 [0,0,  0, 0, 1,0,1,0,0,0,0]
  1 [0,0,  0, 1, 0,2,0,1,0,0,0]
  2 [0,0,  1, 0, 3,0,3,0,1,0,0]
  3 [0,1,  0, 3, 0,6,0,4,0,1,0]
  4 [1,0,  4, 0, 9,0,10,0,5,0,1]
 */
var findTargetSumWays = function(nums, target) {
    const sum = nums.reduce((a,c) => a + c, 0)
    const totalSum = (sum * 2) + 1;
    const dp = Array.from({length: nums.length}, () => new Array(totalSum).fill(0));
    dp[0][sum + nums[0]] = 1;
    dp[0][sum - nums[0]] = 1;
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < totalSum; j++) {
            if (j === 0) {
                dp[i][j] = dp[i - 1][j + nums[i]];
            } else if (j === totalSum - 1) {
                dp[i][j] = dp[i - 1][j - nums[i]];
            } else {
                dp[i][j] = dp[i - 1][j - nums[i]] + dp[i - 1][j + nums[i]];
            }
        }
    }

    return sum + target >= totalSum? 0 : dp[nums.length - 1][sum + target]
};