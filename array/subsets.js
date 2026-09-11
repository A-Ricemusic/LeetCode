/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const res = [];
    const curr = [];

    const dfs = (i) => {
        if (i >= nums.length) {
            res.push([...curr]);
            return;
        }
        dfs(i + 1)
        curr.push(nums[i])
        dfs(i + 1)
        curr.pop()
    }

    dfs(0)
    return res;
    
};