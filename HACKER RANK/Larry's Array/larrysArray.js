function larrysArray(A) {
    let n = A.length;
    let inversions = 0;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (A[i] > A[j]) {
                inversions++;
            }
        }
    }
    return inversions % 2 === 0 ? "YES" : "NO";
}