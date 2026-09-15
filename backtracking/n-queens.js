/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    const arr = Array.from({length: n}, () => new Array(n).fill("."));
    let res = []
    const cols = new Set();
    const posDiag = new Set(); // r + c
    const negDiag = new Set(); // r - c
    const dfs = (r) => {
        if (r >= n) {
            const result = []
            for (const row of arr) {
                result.push(row.join(""));
            }
            res.push(result)
        }

        for (let c = 0; c < n; c++) {
            if (cols.has(c) || posDiag.has(r + c) || negDiag.has(r - c)) continue;
            cols.add(c);
            posDiag.add(r + c);
            negDiag.add(r - c);
            arr[r][c] = "Q";
            dfs(r + 1);
            cols.delete(c);
            posDiag.delete(r + c);
            negDiag.delete(r - c);
            arr[r][c] = "."
        }

    };

    dfs(0);
    return res;

    
};