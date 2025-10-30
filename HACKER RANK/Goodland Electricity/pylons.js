
function pylons(k, arr) {
    let n = arr.length;
    let count = 0;
    let i = 0;

    while (i < n) {
        let loc = Math.min(i + k - 1, n - 1);
        while (loc >= i - k + 1 && arr[loc] === 0) {
            loc--;
        }

        if (loc < i - k + 1) {
            return -1;
        }

        count++; 
        i = loc + k; 
    }

    return count;
}
