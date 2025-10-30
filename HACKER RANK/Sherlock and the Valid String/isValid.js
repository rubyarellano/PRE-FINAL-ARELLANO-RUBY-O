function isValid(s) {
    let freq = {};

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (freq[char]) {
            freq[char]++;
        } else {
            freq[char] = 1;
        }
    }

    let counts = Object.values(freq);
    let freqCount = {};

    for (let i = 0; i < counts.length; i++) {
        let val = counts[i];
        if (freqCount[val]) {
            freqCount[val]++;
        } else {
            freqCount[val] = 1;
        }
    }

    let keys = Object.keys(freqCount).map(Number);

    if (keys.length === 1) {
        return "YES";
    }
    if (keys.length > 2) {
        return "NO";
    }
    let [f1, f2] = keys;

    if ((freqCount[f1] === 1 && f1 === 1) || (freqCount[f2] === 1 && f2 === 1)) {
        return "YES";
    }
    if ((freqCount[f1] === 1 && f1 - f2 === 1) || (freqCount[f2] === 1 && f2 - f1 === 1)) {
        return "YES";
    }

    return "NO";
}
