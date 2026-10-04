/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    const pacMap = new Map(); 
    const altMap = new Map();
    const grid = heights
    const rows = grid.length;
    const cols = grid[0].length;
    const dirs = [[1,0], [0,1], [-1,0], [0,-1]];
    
    const dfs = (r,c,map) => {
        if (map.has(`${r},${c}`)) return
        map.set(`${r},${c}`,[r,c]);
        for (const [dr,dc] of dirs) {
            const nr = r + dr;
            const nc = c + dc;
            const state = `${nr},${nc}`;
            if (nr < 0 || nr >= rows || nc < 0 || nc >= cols || map.has(state)) continue;
            const curr = grid[r][c];
            const nxt = grid[nr][nc];
            if (nxt >= curr) {
                dfs(nr,nc,map);
            }
        }
    }


    for (let c = 0; c < cols; c++) {
        dfs(0,c, pacMap);
        dfs(rows - 1,c,altMap);
    }
    for (let r = 0; r < rows; r++) {
        dfs(r,0,pacMap);
        dfs(r, cols - 1, altMap);
    }

    const res = [];
    for (const k of altMap.keys()) {
        if (pacMap.has(k)) {
            res.push(pacMap.get(k))
        }
    }

    return res;
};