function getMinimumCost(k, c) {
    c.sort((a, b) => b - a);

    let totalCost = 0;
    let previousPurchases = new Array(k).fill(0); 

    for (let i = 0; i < c.length; i++) {
    
        let friendIndex = i % k;

        totalCost += (previousPurchases[friendIndex] + 1) * c[i];

        previousPurchases[friendIndex]++;
    }

    return totalCost;
}
