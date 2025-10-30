function counterGame(n) {
    let isLouiseTurn = true;

    while (n > 1) {
        if ((n & (n - 1)) === 0) {
            n = n / 2;
        } else {

            let power = 1;
            while (power * 2 < n) {
                power *= 2;
            }
            n = n - power;
        }
        isLouiseTurn = !isLouiseTurn;
    }
    return isLouiseTurn ? "Richard" : "Louise";
}

