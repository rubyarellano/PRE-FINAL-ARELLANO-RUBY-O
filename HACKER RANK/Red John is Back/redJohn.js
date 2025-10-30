function redJohn(n) {
    let ways = new Array(n + 1).fill(0);

    for (let i = 0; i <= n; i++) {
        if (i < 4) {
            ways[i] = 1; 
        } else {
            ways[i] = ways[i - 1] + ways[i - 4];
        }
    }

    let totalWays = ways[n]; 

    return countPrimes(totalWays);
}

function countPrimes(num) {
    if (num < 2) return 0;

    let isPrime = new Array(num + 1).fill(true);
    isPrime[0] = false;
    isPrime[1] = false;

    for (let i = 2; i * i <= num; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= num; j += i) {
                isPrime[j] = false;
            }
        }
    }

    let count = 0;
    for (let i = 2; i <= num; i++) {
        if (isPrime[i]) count++;
    }

    return count;
}

