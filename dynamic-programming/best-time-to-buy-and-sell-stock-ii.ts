function maxProfit(prices: number[]): number {
    let totalProfit: number = 0;
    let buy: number = prices[0];

    for (let i = 1; i < prices.length; i++) {
        if (buy >= prices[i]) {
            buy = prices[i]
        } else {
            totalProfit += prices[i] - buy
            buy = prices[i]
        }
    }
    return totalProfit;
    
};