function almostSorted(arr) {
    let n = arr.length;
    let sorted = [...arr].sort((a, b) => a - b);
    let diff = [];

    for (let i = 0; i < n; i++) {
        if (arr[i] !== sorted[i]) {
            diff.push(i);
        }
    }

    if (diff.length === 0) return "yes";

    if (diff.length === 2) {
        return `yes\nswap ${diff[0] + 1} ${diff[1] + 1}`;
    }

    let i = diff[0];
    let j = diff[diff.length - 1];
    let reversed = [...arr];
    let sub = reversed.slice(i, j + 1).reverse();
    reversed.splice(i, j - i + 1, ...sub);

    if (reversed.join(",") === sorted.join(",")) {
        return `yes\nreverse ${i + 1} ${j + 1}`;
    }

    return "no";
}