/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var countIslands = function(grid, k) {
    const visited = new Set();
    const rows = grid.length;
    const cols = grid[0].length;
    const dirs = [[1,0],[0,1],[-1,0],[0,-1]];


    const dfs = (r,c) => {
        const key = `${r},${c}`;
        if (r < 0 || r >= rows || c < 0 || c >= cols || visited.has(key) || grid[r][c] === 0) return 0;
        visited.add(key);
        let amt  = grid[r][c];
        for (const [dr,dc] of dirs) {
            amt += dfs(r + dr, c + dc)
        }

        return amt;
    };




    let res = 0;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] !== 0 && !visited.has(`${r},${c}`)) {
                const amt = dfs(r,c)
                if (amt % k === 0) {
                    res++;
                }
            }
        }
    }

    return res;
    
};