/**
 * @param {number[][]} grid
 * @return {number}
 */
var findMaxFish = function(grid) {
    let res = 0;
    const rows = grid.length;
    const cols = grid[0].length;
    const visited = new Set();
    const dirs = [[1,0], [0,1], [-1,0], [0,-1]];

    const dfs = (r,c) => {
        const key = `${r},${c}`
        if (r < 0 || r >= rows || c < 0 || c >= cols || visited.has(key)|| grid[r][c] === 0) return 0;
        let res = grid[r][c];
        visited.add(key)
        for (const [dr,dc] of dirs) {
            res += dfs(r + dr, c + dc)
        }
        return res

    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const key = `${r},${c}`
            if (grid[r][c] !== 0 && !visited.has(key)) {
                res = Math.max(dfs(r,c), res)
            }
        }
    }
    return res;
};