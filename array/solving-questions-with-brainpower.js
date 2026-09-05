/**
 * @param {number[][]} questions
 * @return {number}
 questions[i] = [pointsi, brainpoweri]
 questions = [[3, 2], [4, 3], [4, 4], [2, 5]]

    dfs(0) => max(dfs(1),dfs(3) + 3) => max(4,5) => 5;
    dfs(1) => max(dfs(2), 4 + dfs(5)) => max(4,4) => 4;
    dfs(2) => max(dfs(3),4 + dfs(7)) => max(2,4) => 4;
    dfs(3) => max(dfs(4), 2 + dfs(9)) => max(0, 2) => 2;


    time: 2^n => 2 * n => o(n)
    space: o(n) + o(n) => o(2n) => o(n)

 */
var mostPoints = function(questions) {
    const memo = new Map();
    const n = questions.length;
    const dfs = (i) => {
        if (i >= n) return 0;
        if (memo.has(i)) return memo.get(i);
        const points = questions[i][0];
        const brainPower = questions[i][1];
        let res = Math.max(dfs(i + 1), points + dfs(i + brainPower + 1));
        memo.set(i, res)
        return res;
    };

    return dfs(0) 
    
};