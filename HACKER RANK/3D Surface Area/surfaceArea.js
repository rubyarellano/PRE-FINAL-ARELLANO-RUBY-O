function surfaceArea(A) {
    let H = A.length;    
    let W = A[0].length;  
    let area = 0;

    for (let i = 0; i < H; i++) {
        for (let j = 0; j < W; j++) {
            let height = A[i][j];
            if (height > 0) {
                area += 2;

                let up = (i > 0) ? A[i - 1][j] : 0;
                area += Math.max(0, height - up);

                let down = (i < H - 1) ? A[i + 1][j] : 0;
                area += Math.max(0, height - down);

                let left = (j > 0) ? A[i][j - 1] : 0;
                area += Math.max(0, height - left);

                let right = (j < W - 1) ? A[i][j + 1] : 0;
                area += Math.max(0, height - right);
            }
        }
    }

    return area;
}
