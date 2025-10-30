function sherlockAndAnagrams(s) {
    let totalPairs = 0;

    for (let length = 1; length < s.length; length++) {
        let patterns = {}; 

        for (let i = 0; i + length <= s.length; i++) {
            let sub = s.substring(i, i + length);
            let sortedSub = sub.split('').sort().join('');

            if (patterns[sortedSub]) {
                totalPairs += patterns[sortedSub]; 
                patterns[sortedSub]++;             
            } else {
                patterns[sortedSub] = 1;          
            }
        }
    }

    return totalPairs;
}
