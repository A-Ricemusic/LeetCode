/**
 * @param {number[]} nums
 * @return {number}

 nums = [7,1,3,5]
        [7,7,10,0]
 */

 var houseRob = function(nums) {
    const n = nums.length;
    const dp = new Array(n).fill(0);
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);
    for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
    }
    return dp[nums.length - 1]
}

var rob = function(nums) {
    if (nums.length === 1) {
        return nums[0];
    };
    if (nums.length === 2) {
        return 0
    };
    const res1 = houseRob(nums.slice(0, nums.length - 1));
    const res2 = houseRob(nums.slice(1, nums.length));

    return Math.max(res1, res2);
};

