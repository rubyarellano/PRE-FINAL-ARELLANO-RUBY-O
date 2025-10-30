function unboundedKnapsack(k, arr) {
    const dp = new Array(k + 1).fill(0);

    for (let i = 0; i < arr.length; i++) {
        for (let j = arr[i]; j <= k; j++) {
            dp[j] = Math.max(dp[j], dp[j - arr[i]] + arr[i]);
        }
    }

    return dp[k];
}
