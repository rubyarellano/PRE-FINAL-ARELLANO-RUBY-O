function gridSearch(G, P) {
    let R = G.length;   
    let C = G[0].length; 
    let r = P.length;  
    let c = P[0].length; 

    for (let i = 0; i <= R - r; i++) {
        for (let j = 0; j <= C - c; j++) {
            let found = true;

            for (let x = 0; x < r; x++) {
                let partOfG = G[i + x].substring(j, j + c);
                if (partOfG !== P[x]) {
                    found = false;
                    break;
                }
            }
            if (found) {
                return "YES";
            }
        }
    }

    return "NO";
}
