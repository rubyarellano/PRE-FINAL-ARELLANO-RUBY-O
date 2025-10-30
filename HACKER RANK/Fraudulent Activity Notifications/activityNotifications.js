function activityNotifications(expenditure, d) {
    let notifications = 0;
    let freq = new Array(201).fill(0);

    for (let i = 0; i < d; i++) {
        freq[expenditure[i]]++;
    }

    function getMedian(freq, d) {
        let count = 0;

        if (d % 2 === 1) {
            let mid = Math.floor(d / 2) + 1;
            for (let i = 0; i < freq.length; i++) {
                count += freq[i];
                if (count >= mid) return i;
            }
        } else {

            let mid1 = Math.floor(d / 2);
            let mid2 = mid1 + 1;
            let first = null, second = null;

            for (let i = 0; i < freq.length; i++) {
                count += freq[i];
                if (first === null && count >= mid1) first = i;
                if (count >= mid2) {
                    second = i;
                    break;
                }
            }

            return (first + second) / 2;
        }
    }
    for (let i = d; i < expenditure.length; i++) {
        let median = getMedian(freq, d);

        if (expenditure[i] >= 2 * median) {
            notifications++;
        }
        freq[expenditure[i - d]]--;
        freq[expenditure[i]]++;
    }

    return notifications;
}
