/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}


 */
var splitArray = function(nums, k) {
    const n = nums.length;
    const memo = new Map();

    const dfs = (i,m) => {

        if (i === n) {
            return m === 0? 0 : Infinity;
        }
        if (m === 0) return Infinity;
        const state = `${i},${m}`;
        if (memo.has(state)) return memo.get(state);
        let currSum = 0;
        let res = Infinity;
        for (let j = i; j <= n - m; j++) {
            currSum += nums[j];
            res = Math.min(res, Math.max(currSum, dfs(j + 1,m - 1)));
            if (currSum > res) {
                break;
            }
        }
        memo.set(state, res);

        return res;
    }



    return dfs(0,k);
    
};