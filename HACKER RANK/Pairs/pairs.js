function pairs(k, arr) {
    let seen = {};
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        seen[arr[i]] = true;
    }
    for (let i = 0; i < arr.length; i++) {
        if (seen[arr[i] + k]) {
            count++;
        }
    }
    return count;
}