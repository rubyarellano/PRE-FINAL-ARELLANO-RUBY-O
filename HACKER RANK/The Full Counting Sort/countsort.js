function countSort(arr) {
    let n = arr.length;

    let maxKey = 0;
    for (let [key] of arr) {
        maxKey = Math.max(maxKey, parseInt(key));
    }

    let buckets = Array.from({ length: maxKey + 1 }, () => []);

    for (let i = 0; i < n; i++) {
        let [key, value] = arr[i];
        key = parseInt(key);
        if (i < n / 2) {
            buckets[key].push("-");
        } else {
            buckets[key].push(value);
        }
    }
    let result = [];
    for (let bucket of buckets) {
        for (let val of bucket) {
            result.push(val);
        }
    }

    return result.join(" ");
}
