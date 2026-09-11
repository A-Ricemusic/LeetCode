/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    const memo= new Map();
    const dfs = (i, sum) => {
        if (i >= nums.length) {
            return sum === target? 1 : 0
        }
        const state = `${i},${sum}`;
        if (memo.has(state)) return memo.get(state);
        const c1 = dfs(i + 1, sum + nums[i])
        const c2 = dfs(i + 1, sum - nums[i])
        const res = c1 + c2;
        memo.set(state, res);
        return res;
    };

    return dfs(0,0);
};