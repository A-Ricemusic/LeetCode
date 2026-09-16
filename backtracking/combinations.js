/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}

 time: O(k * 2^n)
 space: O(n)
 */
var combine = function(n, k) {
    const nums = [];
    let res = [];
    for (let i = 1; i <= n; i++) {
        nums.push(i);
    }

    const dfs = (i, path) => {
        if (path.length === k) {
            res.push([...path]) 
            return;
        }
        if (i >= n) return;
        if (path.length + (n - i) < k) return;
        dfs(i + 1, path);
        path.push(nums[i])
        dfs(i + 1, path)
        path.pop()

    }

    dfs(0,[]);
    return res;
};