function maxProfit(prices: number[]): number {
    let maxProfit: number = 0;
    let buy = prices[0]
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < buy) {
            buy = prices[i];
        } else {
            maxProfit = Math.max(maxProfit, prices[i] - buy)
        }
    }
    return maxProfit
    
};