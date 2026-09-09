/**
 * @param {number[][]} obstacleGrid
 * @return {number}

 obstacleGrid = [
 [0,0,0],
 [0,1,0],
 [0,0,0]]

 [1,1,2]
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const grid = obstacleGrid
    const rows = obstacleGrid.length;
    const cols  = obstacleGrid[0].length;
    const dp = new Array(cols).fill(0)
    if (grid[0][0] === 1 || grid[rows - 1][cols - 1] === 1) return 0;
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (r === 0 && c === 0) {
                dp[0] = 1;
                continue;
            }
            if (grid[r][c] === 1) {
                dp[c] = 0;
                continue;
            } else if (c > 0) {
                dp[c] += dp[c - 1]
            }
        }
    }

    return dp[cols - 1]

    
};