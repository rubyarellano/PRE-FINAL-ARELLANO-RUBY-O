function getWays(n, c) {
    let ways = [];

    for (let i = 0; i <= n; i++) {
        ways[i] = 0;
    }
    ways[0] = 1;

    for (let coin = 0; coin < c.length; coin++) {
        for (let amount = c[coin]; amount <= n; amount++) {
            ways[amount] = ways[amount] + ways[amount - c[coin]];
        }
    }
    return ways[n];
}
