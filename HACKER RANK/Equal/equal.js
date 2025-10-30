function equal(arr) {
    let min = Math.min(...arr);
    let answer = Infinity;

    for (let base = 0; base < 5; base++) {
        let operations = 0;
        for (let i = 0; i < arr.length; i++) {
            let diff = arr[i] - (min - base);

            operations += Math.floor(diff / 5);
            diff %= 5;
            operations += Math.floor(diff / 2);
            diff %= 2;
            operations += diff;
        }
        if (operations < answer) {
            answer = operations;
        }
    }

    return answer; 
}
