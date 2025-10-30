function sansaXor(arr) {
    let n = arr.length;
    let result = 0;

    if (n % 2 === 1) {
        for (let i = 0; i < n; i += 2) {
            result ^= arr[i];
        }
    }

    return result;
}
