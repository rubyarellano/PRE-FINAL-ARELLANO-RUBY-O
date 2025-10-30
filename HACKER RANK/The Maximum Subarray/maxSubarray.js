function maxSubarray(arr) {
    let maxSubsequence = 0;
    let allNegative = true;
    let maxElement = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            maxSubsequence += arr[i];
            allNegative = false;
        }
        if (arr[i] > maxElement) {
            maxElement = arr[i];
        }
    }

    if (allNegative) maxSubsequence = maxElement;

    let maxEndingHere = arr[0];
    let maxSoFar = arr[0];

    for (let i = 1; i < arr.length; i++) {
        maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }

    return [maxSoFar, maxSubsequence];
}