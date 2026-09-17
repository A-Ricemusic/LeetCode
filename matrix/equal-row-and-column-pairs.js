/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    const rows = new Map();
    const cols = new Map();

    for (let r = 0; r < n; r++) {
        let arr = [];
        for (let c = 0; c < n; c++) {
            const str = String(grid[r][c]);
            arr.push(str);
        }
        const key = arr.join(",")
        rows.set(key, (rows.get(key) ?? 0) + 1);
    }

    for (let c = 0; c < n; c++) {
        let arr = [];
        for (let r = 0; r < n; r++) {
            const str = String(grid[r][c]);
            arr.push(str)
        }
        const key = arr.join(",")
        cols.set(key, (cols.get(key) ?? 0) + 1);
    }
    let res = 0;

    for (const k of rows.keys()) {
        const val1 = rows.get(k);
        const val2 = cols.get(k) ?? 0;
        res += (val1 * val2);
    }

    return res;
    
};