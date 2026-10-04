/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    const n = coins.length;
    let dp = new Array(amount + 1).fill(0);
    dp[0] = 1;
    for (let i = n - 1; i >= 0; i--) {
        for (let j = 1; j <= amount; j++) {
            dp[j] += j - coins[i] >= 0? dp[j - coins[i]] : 0; 
        }
    }
    return dp[amount]
    
};