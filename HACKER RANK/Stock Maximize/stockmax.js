function stockmax(prices) {
    let n = prices.length;
    let maxProfit = 0;
    let maxFuturePrice = 0;

    for (let i = n - 1; i >= 0; i--) {
        if (prices[i] > maxFuturePrice) {
            maxFuturePrice = prices[i]; 
        }
        maxProfit += maxFuturePrice - prices[i]; 
    }

    return maxProfit;
}

