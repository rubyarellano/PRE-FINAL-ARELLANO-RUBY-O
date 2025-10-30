function extraLongFactorials(n) {
    let result = 1n; 

    for (let i = 1n; i <= BigInt(n); i++) {
        result = result * i;
    }

    console.log(result.toString());
}

