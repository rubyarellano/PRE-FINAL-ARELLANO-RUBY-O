function gamingArray(arr) {
    let maxSoFar = 0;
    let moves = 0;

    for (let i = 0; i < arr.length; i++) {
        
        if (arr[i] > maxSoFar) {
            maxSoFar = arr[i];
            moves++;
        }
    }
    if (moves % 2 === 1) {
        return "BOB";
    } else {
        return "ANDY";
    }
}
