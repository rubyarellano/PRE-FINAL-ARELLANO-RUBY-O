function climbingLeaderboard(ranked, player) {
    let uniqueScores = [...new Set(ranked)].sort((a, b) => b - a);
    let result = [];
    let index = uniqueScores.length - 1; 
    for (let i = 0; i < player.length; i++) {
        let score = player[i];
        while (index >= 0 && score >= uniqueScores[index]) {
            index--;
        }
        result.push(index + 2); 
    }

    return result;
}

