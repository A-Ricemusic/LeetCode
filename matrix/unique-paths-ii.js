/**
 * @param {number[][]} obstacleGrid
 * @return {number}

 grid = [
 [0,1,0],
 [0,0,0],
 [0,0,0]
 ]

 dp = [
 [1,0,0],
 [1,1,1],
 [1,2,3]
 ]

 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const grid = obstacleGrid
    const rows = obstacleGrid.length;
    const cols  = obstacleGrid[0].length;
    const dp = Array.from({length: rows}, () => new Array(cols).fill(0));
    if (grid[0][0] === 1 || grid[rows - 1][cols - 1] === 1) return 0;

    dp[0][0] = 1;
    for (let c = 1; c < cols; c++) {
        if (grid[0][c] === 1) continue;
        dp[0][c] = dp[0][c - 1]
    }
    for (let r = 1; r < rows; r++) {
        if (grid[r][0] === 1) continue;
        dp[r][0] = dp[r - 1][0]
    }

    for (let r = 1; r < rows; r++) {
        for (let c = 1; c < cols; c++) {
            if (grid[r][c] === 1) continue;
            dp[r][c] = dp[r - 1][c] + dp[r][c - 1]
        }
    }

    return dp[rows - 1][cols - 1]

    
};