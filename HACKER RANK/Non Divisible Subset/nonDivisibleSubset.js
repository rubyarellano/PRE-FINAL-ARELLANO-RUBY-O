function nonDivisibleSubset(k, s) {
    let remainderCount = new Array(k).fill(0);
    for (let num of s) {
        remainderCount[num % k]++;
    }
    let result = Math.min(remainderCount[0], 1);

    for (let i = 1; i <= Math.floor(k / 2); i++) {
        if (i === k - i) {
            result += 1;
        } else {
            result += Math.max(remainderCount[i], remainderCount[k - i]);
        }
    }

    return result;
}
