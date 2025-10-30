function twoPluses(grid) {
    let R = grid.length;
    let C = grid[0].length;
    let G = grid.map(row => row.split(""));

    function getCells(i, j, k) {
        let cells = [[i, j]];
        for (let d = 1; d <= k; d++) {
            cells.push([i + d, j]);   
            cells.push([i - d, j]);   
            cells.push([i, j + d]);   
            cells.push([i, j - d]);   
        }
        return cells;
    }
    function canPlace(i, j, k) {
        if (G[i][j] !== "G") return false;
        for (let d = 1; d <= k; d++) {
            if (
                i + d >= R || i - d < 0 ||
                j + d >= C || j - d < 0 ||
                G[i + d][j] !== "G" ||
                G[i - d][j] !== "G" ||
                G[i][j + d] !== "G" ||
                G[i][j - d] !== "G"
            ) {
                return false;
            }
        }
        return true;
    }

    let pluses = [];
    for (let i = 0; i < R; i++) {
        for (let j = 0; j < C; j++) {
            let k = 0;
            while (canPlace(i, j, k)) {
                pluses.push({
                    i, j, k,
                    area: 1 + 4 * k,
                    cells: getCells(i, j, k)
                });
                k++;
            }
        }
    }
    let maxProduct = 0;
    for (let p1 = 0; p1 < pluses.length; p1++) {
        for (let p2 = p1 + 1; p2 < pluses.length; p2++) {
            let plus1 = pluses[p1];
            let plus2 = pluses[p2];

            let overlap = plus1.cells.some(c1 =>
                plus2.cells.some(c2 => c1[0] === c2[0] && c1[1] === c2[1])
            );

            if (!overlap) {
                let product = plus1.area * plus2.area;
                maxProduct = Math.max(maxProduct, product);
            }
        }
    }

    return maxProduct;
}

