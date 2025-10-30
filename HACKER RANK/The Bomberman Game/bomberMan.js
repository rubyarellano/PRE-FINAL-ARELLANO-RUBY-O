function bomberMan(n, grid) {
    let R = grid.length;
    let C = grid[0].length;

    if (n === 1) return grid;

    if (n % 2 === 0) {
        return Array(R).fill("O".repeat(C));
    }

    function explode(inputGrid) {
        let newGrid = Array.from({ length: R }, () => Array(C).fill("O"));

        for (let i = 0; i < R; i++) {
            for (let j = 0; j < C; j++) {
                if (inputGrid[i][j] === "O") {
                    newGrid[i][j] = ".";
                    if (i > 0) newGrid[i - 1][j] = ".";
                    if (i < R - 1) newGrid[i + 1][j] = ".";
                    if (j > 0) newGrid[i][j - 1] = ".";
                    if (j < C - 1) newGrid[i][j + 1] = ".";
                }
            }
        }
        return newGrid.map(row => row.join(""));
    }
    let afterFirstExplosion = explode(grid);
    let afterSecondExplosion = explode(afterFirstExplosion);

    return (n % 4 === 3) ? afterFirstExplosion : afterSecondExplosion;
}
