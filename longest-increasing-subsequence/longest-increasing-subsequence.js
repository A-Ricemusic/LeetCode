/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const memo = new Map()
    const dfs = (i, prev) => {
        if (i >= nums.length) return 0;
        const state = `${i},${prev}`
        if (memo.has(state)) return memo.get(i)
        const c1 = prev < nums[i]? dfs(i + 1,nums[i]) + 1: 0
        const c2 = dfs(i + 1, prev)
        const res = Math.max(c1,c2)
        memo.set(i,res)
        return res

    }
    return dfs(0, -Infinity)
    
};