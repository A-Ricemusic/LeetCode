/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    const res = []
    const path = []
    const nums = candidates

    const dfs = (i, sum) => {
        if (sum === target) {
            res.push([...path]);
            return
        }
        if (i >= nums.length) return
        
        dfs(i + 1, sum)
        path.push(nums[i])
        dfs(i + 1,sum + nums[i])
        path.pop()
    }

    dfs(0, 0)

    return res;
    
};