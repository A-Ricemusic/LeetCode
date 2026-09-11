/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 time: o(n * m)
 space: o(n * m)
  0 1 2 3 4 5 6 7 8 9 10 11
 [0,1,1,I,I,I,I,I,I,I,I,I]
 */
var coinChange = function(coins, amount) {
    const dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;

    for (let i = 1; i <= amount; i++) {
        let minCoins = Infinity;
        for (const coin of coins) {
            if (i - coins < 0) continue;
            minCoins = Math.min(dp[i - coins], minCoins);
        }
        dp[i] = minCoins + 1
    }

    return dp[amount] === Infinity? -1 : dp[amount]
    
};