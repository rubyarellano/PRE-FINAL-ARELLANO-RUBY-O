function gridlandMetro(n, m, k, track) {
    let rows = {};

    for (let i = 0; i < k; i++) {
        let [r, c1, c2] = track[i];

        if (!rows[r]) {
            rows[r] = [];
        }

        rows[r].push([c1, c2]);
    }

    let occupied = 0;

    for (let row in rows) {
        let intervals = rows[row].sort((a, b) => a[0] - b[0]);
        let start = intervals[0][0];
        let end = intervals[0][1];

        for (let i = 1; i < intervals.length; i++) {
            let [s, e] = intervals[i];

            if (s <= end) {
                end = Math.max(end, e);
            } else {
                occupied += (end - start + 1);
                start = s;
                end = e;
            }
        }
        occupied += (end - start + 1);
    }

    let totalCells = n * m;
    let unoccupied = totalCells - occupied;

    return unoccupied;
}