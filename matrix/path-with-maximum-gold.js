/**
 * @param {number[][]} grid
 * @return {number}


  time: o((n*m)^2)
  space: o(n * m)
 */
var getMaximumGold = function(grid) {
    const visited = new Set();
    const rows = grid.length;
    const cols = grid[0].length;
    let res = 0;
    const dirs = [[1,0],[0,1],[-1,0],[0,-1]];

    const dfs = (r,c,amt) => {
        let curr = amt;
        for (const [dr,dc] of dirs) {
            const nr = dr + r;
            const nc = dc + c;
            if (nr < 0 || nr >= rows || nc < 0 || nc >= cols || grid[nr][nc] === 0) continue;
            const tmp = grid[nr][nc];
            grid[nr][nc] = 0;
            curr = Math.max(curr, dfs(nr,nc,tmp) + amt);
            grid[nr][nc] = tmp;

        }
        return curr;
    };

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] !== 0) {
                const tmp = grid[r][c]
                grid[r][c] = 0
                res = Math.max(res,dfs(r,c,tmp))
                grid[r][c] = tmp
            }
        }
    }


    return res;    
};