/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let res = [];
    let n = candidates.length;

    /* 
    [
        []
        dfs(0,0)
        dfs(1,0)
    ]
    
    
    */
    const dfs = (i, curr, sum) => {
        if (sum === target) {
            res.push([...curr])
            return 
        }
        if (i >= n || sum > target) return
        dfs(i + 1, curr, sum)
        curr.push(candidates[i])
        dfs(i, curr, sum + candidates[i])
        curr.pop()

    }


    dfs(0,[],0)
    return res;
    
};