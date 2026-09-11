/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 amount = 11 
 [10,1]
  [[9,1], [6,1], [9,2], [8,2], [5,2]]
 */
var coinChange = function(coins, amount) {
    const q = [[amount, 0]];
    const visited = new Set()
    let head = 0;
    while (q.length - head > 0) {
        const [amt, numOfCoins] = q[head++];
        if (visited.has(amt)) continue;
        visited.add(amt);
        if (amt === 0) return numOfCoins;
        if (amt < 0) continue;
        for (const coin of coins) {
            q.push([amt - coin,numOfCoins + 1])
        }
    }

    return -1

    
};