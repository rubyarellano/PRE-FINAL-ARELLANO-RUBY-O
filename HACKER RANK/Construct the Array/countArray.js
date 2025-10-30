function countArray(n, k, x) {
    const MOD = 1e9 + 7;

    let endWithX = (1 === x) ? 1 : 0;
    let endWithNotX = (1 === x) ? 0 : 1;

    for (let i = 2; i <= n; i++) {
        const newEndWithX = endWithNotX % MOD;
        const newEndWithNotX = ((endWithX * (k - 1)) + (endWithNotX * (k - 2))) % MOD;

        endWithX = newEndWithX;
        endWithNotX = newEndWithNotX;
    }

    return endWithX;
}