function lilysHomework(arr) {
    function countSwaps(original, sorted) {
        let swaps = 0;
        let copy = [...original]; 
        let n = copy.length;

        for (let i = 0; i < n; i++) {
            if (copy[i] !== sorted[i]) {
                swaps++;

                let correctIndex = copy.indexOf(sorted[i]);

                let temp = copy[i];
                copy[i] = copy[correctIndex];
                copy[correctIndex] = temp;
            }
        }

        return swaps;
    }
    let sortedAsc = [...arr].sort((a, b) => a - b);
    let sortedDesc = [...arr].sort((a, b) => b - a);
    let ascSwaps = countSwaps(arr, sortedAsc);
    let descSwaps = countSwaps(arr, sortedDesc);

    return Math.min(ascSwaps, descSwaps);
}


