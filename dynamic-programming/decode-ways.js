/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    const n = s.length;
    const dp = new Array(n).fill(-1)

    const dfs = (i) => {
        if (i >= n) return 1;
        if (s[i] === "0") return 0;
        if (dp[i] !== -1) return dp[i]
        let choice1 = dfs(i + 1);
        let choice2 = 0;
        if (i + 2 <= n && parseInt(s.substring(i, i + 2)) <= 26) {
            choice2 = dfs(i + 2);
        }
        const res = choice1 + choice2;
        dp[i] = res
        return res
    }


    return dfs(0)
    
};