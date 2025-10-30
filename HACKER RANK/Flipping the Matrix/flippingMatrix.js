function flippingMatrix(matrix) {
    let n = matrix.length / 2;
    let result = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {

            let topLeft = matrix[i][j];
            let topRight = matrix[i][2 * n - j - 1];
            let bottomLeft = matrix[2 * n - i - 1][j];
            let bottomRight = matrix[2 * n - i - 1][2 * n - j - 1];

            result += Math.max(topLeft, topRight, bottomLeft, bottomRight);
        }
    }

    return result;
}
