/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function(nums, k) {
    const memo = new Map();
    const n = nums.length;
    const dfs = (i,subCount) => {
        if (i >= n && subCount === 0) return 0;
        if (subCount <= 0|| i >= n) return Infinity;
        const state = `${i},${subCount}`;
        if (memo.has(state)) return memo.get(state);
        let res = Infinity;
        let currSum = 0;
        for (let j = i; j <= n - subCount; j++) {
            currSum += nums[j];
            res = Math.min(res, Math.max(currSum, dfs(j + 1, subCount - 1)));
            if (currSum > res) break
        }

        memo.set(state, res);
        return res;

    }

    return dfs(0, k);
    
};