/**
 * @param {number[]} nums
 * @return {number[][]}
 [1,2,4,5,6,6,7]
 []
 */
var subsetsWithDup = function(nums) {
    const res = [];
    const path = [];
    nums.sort((a,b) => a - b);
    const dfs = (i) => {
        if (i >= nums.length) {
            res.push([...path])
            return 
        }
        path.push(nums[i])
        dfs(i + 1)
        path.pop()
        let idx = i + 1
        while (idx < nums.length && nums[idx] === nums[idx - 1]) {
            idx++;
        }
        dfs(idx)
    }

    dfs(0)

    return res;
    
};