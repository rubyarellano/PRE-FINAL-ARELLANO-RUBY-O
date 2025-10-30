function candies(n, arr) {
    let candies = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        if (arr[i] > arr[i - 1]) {
            candies[i] = candies[i - 1] + 1;
        }
    }
    for (let i = n - 2; i >= 0; i--) {
        if (arr[i] > arr[i + 1] && candies[i] <= candies[i + 1]) {
            candies[i] = candies[i + 1] + 1;
        }
    }

    let total = 0;
    for (let i = 0; i < n; i++) {
        total += candies[i];
    }

    return total;
}
