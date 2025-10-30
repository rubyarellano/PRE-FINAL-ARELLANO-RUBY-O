function powerSum(X, N) {
    
    function helper(target, num) {
        
        if (target === 0) return 1;
        if (target < 0) return 0; 
        let count = 0;
     
        for (let i = num; Math.pow(i, N) <= target; i++) {
            count += helper(target - Math.pow(i, N), i + 1);
        }
        return count;
    }

    return helper(X, 1); 
}
