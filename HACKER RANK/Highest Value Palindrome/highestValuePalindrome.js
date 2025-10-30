function highestValuePalindrome(s, n, k) {
    let arr = s.split('');
    let changed = new Array(n).fill(false);
    let left = 0;
    let right = n - 1;

    while (left < right) {
        if (arr[left] !== arr[right]) {
            if (arr[left] > arr[right]) {
                arr[right] = arr[left];
            } else {
                arr[left] = arr[right];
            }
            changed[left] = changed[right] = true;
            k--;
        }
        left++;
        right--;
    }

    if (k < 0) return "-1";

    left = 0;
    right = n - 1;

    while (left <= right) {
        if (arr[left] !== '9') {
            if (left === right && k > 0) {
                arr[left] = '9';
                k--;
            } else if (arr[left] === arr[right]) {
                if (k >= 2) {
                    arr[left] = arr[right] = '9';
                    k -= 2;
                }
            } else if (changed[left] || changed[right]) {
                if (k >= 1) {
                    arr[left] = arr[right] = '9';
                    k--;
                }
            }
        }
        left++;
        right--;
    }

    return arr.join('');
}
