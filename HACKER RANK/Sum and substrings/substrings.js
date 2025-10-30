function substrings(n) {
    let digits = n.split("").map(Number);
    let length = digits.length;
    let total = 0;
    let mod = 1000000007;
    let dp = new Array(length).fill(0);

    dp[0] = digits[0];
    total = dp[0];

    for (let i = 1; i < length; i++) {
        dp[i] = (dp[i - 1] * 10 + (i + 1) * digits[i]) % mod;
        total = (total + dp[i]) % mod;
    }

    return total;
}
