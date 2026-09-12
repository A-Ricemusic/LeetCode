/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
  coins = [1,2,5] amt = 3
  dfs(0,0) => dfs(0,1), dfs(1,0)
  dfs(0,1) => dfs(0,2), dfs(1,1)
  dfs(0,2) => dfs(0,3), dfs(1,2)
 */
var change = function(amount, coins) {
    const memo = new Map();
    const dfs = (i, amt) => {
        if (i >= coins.length) return amt === amount? 1: 0
        if (amt > amount) return 0;
        const state = `${i},${amt}`
        if (memo.has(state)) return memo.get(state)
        const c1 = dfs(i + 1, amt)
        const c2 = dfs(i, amt + coins[i])
        const res = c1 + c2
        memo.set(state, res);
        return res;
    }


    return dfs(0,0)
    
};