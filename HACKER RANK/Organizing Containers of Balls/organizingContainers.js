function organizingContainers(container) {
    let n = container.length;

    let containerSums = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = 0; j < n; j++) {
            sum += container[i][j];
        }
        containerSums[i] = sum;
    }
    
    let typeSums = new Array(n).fill(0);
    for (let j = 0; j < n; j++) {
        let sum = 0;
        for (let i = 0; i < n; i++) {
            sum += container[i][j];
        }
        typeSums[j] = sum;
    }
    containerSums.sort((a, b) => a - b);
    typeSums.sort((a, b) => a - b);

    for (let i = 0; i < n; i++) {
        if (containerSums[i] !== typeSums[i]) {
            return "Impossible";
        }
    }

    return "Possible";
}
