function fibonacciModified(t1, t2, n) {
    let sequence = [t1, t2];

    for (let i = 2; i < n; i++) {

        let next = sequence[i - 2] + sequence[i - 1] * sequence[i - 1];
        sequence.push(next);
    }
    return sequence[n - 1];
}
