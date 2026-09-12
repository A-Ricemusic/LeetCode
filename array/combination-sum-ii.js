/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}

 candidates = [10,1,2,7,6,1,5]
 [1,1,1,5,6,7,10]
 [2,5,2,1,2]
 [1,2,2,2,5]

 dfs(0,0) => dfs(1,0), dfs(1,1)
 dfs(1,0) => dfs(2,0)
 */
var combinationSum2 = function(candidates, target) {
    const res = [];
    const path = [];
    const nums = candidates;
    nums.sort((a,b) => a - b);

    const dfs = (i, sum) => {
        if (sum === target) {
            res.push([...path]);
            return
        }
        if (i >= nums.length || sum > target) return;
        path.push(nums[i]);
        dfs(i + 1, sum + nums[i]);
        path.pop(); 
        let idx = i + 1;
        while (idx < nums.length && nums[idx] === nums[idx - 1]) {
            idx++;
        }
        
        dfs(idx, sum);
    }

    dfs(0, 0)
    return res;
    
};