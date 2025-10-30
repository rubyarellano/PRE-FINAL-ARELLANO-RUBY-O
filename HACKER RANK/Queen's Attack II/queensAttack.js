function queensAttack(n, k, r_q, c_q, obstacles) {
    let directions = [
        [1, 0],   
        [-1, 0],  
        [0, 1],   
        [0, -1],  
        [1, 1],   
        [1, -1],  
        [-1, 1],  
        [-1, -1]  
    ];

    let obstacleSet = new Set();
    for (let obs of obstacles) {
        obstacleSet.add(obs[0] + "," + obs[1]);
    }

    let attackable = 0;
    for (let [dr, dc] of directions) {
        let row = r_q + dr;
        let col = c_q + dc;

        while (row >= 1 && row <= n && col >= 1 && col <= n) {
            if (obstacleSet.has(row + "," + col)) {
                break;
            }
            attackable++;
            row += dr;
            col += dc;
        }
    }

    return attackable;
}