/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 i = 1
 j = 1
 s = "a"
 t = "ab"
 if char are same i + 1, j + 1
  dfs(i + 1, j), dfs(i,j + 1), dfs(i + 1,j + 1)

 */
var isOneEditDistance = function(s, t,curr) {
    const memo = new Map()
    const n = s.length;
    const m = t.length;
    const dfs = (i,j) => {
        if (i >= n) {
            return m - j === 1;
        }
        if (j >= m) {
            return n - i === 1;
        }
        const state = `${i},${j}`;
        if (memo.has(state)) return memo.get(state);
        if (curr > 1) {
            memo.set(state, false);
            return false;
        }
        let res
        if (s[i] === t[j]) {
            res = dfs(i + 1,j + 1,curr)
        } else {
            res = dfs(i + 1,j,curr + 1) || dfs(i,j + 1,curr + 1) || dfs(i + 1,j + 1,curr + 1)
        }
        memo.set(state, res)
        return res;
    }

    return dfs(0,0,0)
    
};