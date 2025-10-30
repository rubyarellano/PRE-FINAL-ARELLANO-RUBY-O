function cost(B) {
    let n = B.length;
    let low = 0; 
    let high = 0; 
    for (let i = 1; i < n; i++) {
        
        let newLow = Math.max(low, high + Math.abs(B[i - 1] - 1));
        let newHigh = Math.max(high + Math.abs(B[i] - B[i - 1]), low + Math.abs(B[i] - 1));

        low = newLow;
        high = newHigh;
    }
    return Math.max(low, high);
}

