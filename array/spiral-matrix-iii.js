/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 top = r - 1
 bottom = r + 1
 right = c + 1
 left = c - 1
 */
var spiralMatrixIII = function(rows, cols, rStart, cStart) {
    let dirs = [[0,1],[1,0],[0,-1],[-1,0]];
    const res = [];
    let r = rStart;
    let c = cStart;
    let steps = 1;
    let i = 0;
    while (res.length < rows * cols) {
        for (let k = 0; k < 2; k++) {
            for (let j = 0; j < steps; j++) {
                const [dr,dc] = dirs[i]
                if (r >= 0 && r < rows && c >= 0 && c < cols) {
                    res.push([r,c])
                }
                r = r + dr;
                c = c + dc;
            }
            i = (i + 1) % 4;
        }
        
        steps += 1;
    }
    return res
};