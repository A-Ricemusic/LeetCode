/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function(grid) {
    const visited = new Set();
    const rows = grid.length;
    const cols = grid[0].length;
    let res = 0;
    const dirs = [[1,0],[0,1],[-1,0],[0,-1]];

    const dfs = (r,c) => {
        if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === 0) return 0;
        let amt =  grid[r][c]; // 6
        let curr = grid[r][c];
        for (const [dr,dc] of dirs) {
            const nr = dr + r;
            const nc = dc + c;
            const state = `${nr},${nc}`
            if (!visited.has(state)) {
                visited.add(state);
                curr = Math.max(curr, dfs(nr,nc) + amt);
                visited.delete(state);
            }
        }
        return curr;
    };

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] !== 0) {
                visited.add(`${r},${c}`)
                res = Math.max(res,dfs(r,c))
                visited.delete(`${r},${c}`)
            }
        }
    }


    return res;    
};