function timeInWords(h, m) {
    let words = [
        "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
        "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen",
        "seventeen", "eighteen", "nineteen", "twenty", "twenty one", "twenty two",
        "twenty three", "twenty four", "twenty five", "twenty six", "twenty seven",
        "twenty eight", "twenty nine"
    ];

    if (m === 0) {
        return words[h] + " o' clock";
    }
    else if (m === 15) {
        return "quarter past " + words[h];
    }
    else if (m === 30) {
        return "half past " + words[h];
    }
    else if (m === 45) {
        let nextHour = h === 12 ? 1 : h + 1;
        return "quarter to " + words[nextHour];
    }
    else if (m < 30) {
        let minuteWord = (m === 1) ? " minute" : " minutes";
        return words[m] + minuteWord + " past " + words[h];
    }
    else {
        let remaining = 60 - m;
        let nextHour = h === 12 ? 1 : h + 1;
        let minuteWord = (remaining === 1) ? " minute" : " minutes";
        return words[remaining] + minuteWord + " to " + words[nextHour];
    }
}