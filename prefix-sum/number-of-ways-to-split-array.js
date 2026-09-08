/**
 * @param {number[]} nums
 * @return {number}

 nums = [10,4,-8,7]
 n = 4
 i = 0
 */
var waysToSplitArray = function(nums) {
    const n = nums.length 
    const total = nums.reduce((a,c) => a + c, 0);
    const dfs = (i, sum) => {
        if (i >= n - 1) return 0;
        const left = sum + nums[i]
        const right = total - left;
        const count = left >= right? 1 : 0;
        const res = dfs(i + 1, sum + nums[i]) + count;
        return res;
    };

    return dfs(0,0)

    
};