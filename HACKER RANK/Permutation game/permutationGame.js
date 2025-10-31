function permutationGame(arr) {
    const memo = new Map();

    function isSorted(array) {
        for (let i = 1; i < array.length; i++) {
            if (array[i - 1] > array[i]) {
                return false;
            }
        }
        return true;
    }

    function grundy(array) {
        const key = array.join(',');
        if (memo.has(key)) return memo.get(key);
        if (isSorted(array)) {
            memo.set(key, 0);
            return 0;
        }
        const grundySet = new Set();
        for (let i = 0; i < array.length; i++) {
            const next = array.slice(0, i).concat(array.slice(i + 1));
            grundySet.add(grundy(next));
        }
        let mex = 0;
        while (grundySet.has(mex)) {
            mex++;
        }
        memo.set(key, mex);
        return mex;
    }
    return grundy(arr) !== 0 ? "Alice" : "Bob";
}
