function legoBlocks(n, m) {
    const MOD = 1e9 + 7;

    const singleRow = new Array(m + 1).fill(0);
    singleRow[0] = 1;
    for (let i = 1; i <= m; i++) {
        for (let block of [1, 2, 3, 4]) {
            if (i - block >= 0) {
                singleRow[i] = (singleRow[i] + singleRow[i - block]) % MOD;
            }
        }
    }

    const totalWays = singleRow.map(val => BigInt(val) ** BigInt(n) % BigInt(MOD));

    const solid = new Array(m + 1).fill(0);
    solid[0] = 1;
    for (let i = 1; i <= m; i++) {
        solid[i] = totalWays[i];
        for (let j = 1; j < i; j++) {
            solid[i] = (solid[i] - (solid[j] * totalWays[i - j]) % BigInt(MOD) + BigInt(MOD)) % BigInt(MOD);
        }
    }

    return Number(solid[m]);
}