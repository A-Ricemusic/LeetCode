/**
 * @param {number[][]} grid
 * @return {number}
 */
var gridGame = function(grid) {
    const N = grid[0].length;
    let preRow1 = [...grid[0]];
    let preRow2 = [...grid[1]];

    for (let i = 1; i < N; i++) {
        preRow1[i] += preRow1[i - 1];
        preRow2[i] += preRow2[i - 1];
    };

    let res = Infinity
    for (let i = 0; i < N; i++) {
        const top = preRow1[N - 1] - preRow1[i];
        const bottom = i > 0? preRow2[i - 1] : 0;
        const secondRobot = Math.max(top, bottom);
        res = Math.min(res, secondRobot)
    }

    return res;
    
};