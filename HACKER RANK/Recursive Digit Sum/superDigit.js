function superDigit(n, k) {
    let sum = 0;
    for (let i = 0; i < n.length; i++) {
        sum += parseInt(n[i]);
    }
    sum = sum * k;

    let numStr = sum.toString();

    while (numStr.length > 1) {
        let tempSum = 0;
        for (let i = 0; i < numStr.length; i++) {
            tempSum += parseInt(numStr[i]);
        }
        numStr = tempSum.toString();
    }
    return parseInt(numStr);
}
