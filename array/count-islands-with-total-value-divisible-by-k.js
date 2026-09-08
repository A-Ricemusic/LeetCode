/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 time: o(n * m)
 space: o(n * m)
 */
var countIslands = function(grid, k) {
    const rows = grid.length;
    const cols = grid[0].length;
    const dirs = [[1,0],[0,1],[-1,0],[0,-1]];


    const dfs = (r,c) => {
        if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === 0) return 0;
        let amt  = grid[r][c];
        grid[r][c] = 0;
        for (const [dr,dc] of dirs) {
            amt += dfs(r + dr, c + dc)
        }

        return amt;
    };




    let res = 0;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] !== 0) {
                const amt = dfs(r,c)
                if (amt % k === 0) {
                    res++;
                }
            }
        }
    }

    return res;
    
};