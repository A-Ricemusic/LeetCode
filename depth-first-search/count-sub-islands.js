/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
var countSubIslands = function(grid1, grid2) {
    let res = 0
    const rows = grid1.length;
    const cols = grid1[0].length;
    const visited = new Set();
    const dirs = [[1,0], [0,1], [-1,0], [0,-1]]
    
    const dfs = (r,c) => {
        const key = `${r},${c}`
        if (r < 0 || r >= rows || c < 0 || c >= cols || visited.has(key) || grid2[r][c] === 0) return true;
        visited.add(key)
        let isSub = grid1[r][c] === 1
        for (const [dr,dc] of dirs) {
            if (!dfs(r + dr,c + dc)) {
                isSub = false;
            } 
        }

        return isSub
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const key = `${r},${c}`
            if (grid2[r][c] === 1 && !visited.has(key)) {
                if (dfs(r,c)) {
                    res++;
                }
            }
        }
    }

    return res;
};