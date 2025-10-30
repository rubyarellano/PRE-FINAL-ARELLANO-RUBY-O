function andProduct(a, b) {
    let shift = 0;
    while (a !== b) {
        a = a >> 1;
        b = b >> 1;
        shift++;
    }
    return a << shift;
}

