/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var minKnightMoves = function(x, y) {
    const q = [[0,0]];
    let head = 0;
    const dirs = [[2,1], [2,-1], [-2,1], [-2,-1], [1,-2], [1,2], [-1,-2], [-1,2]]
    let res = 0

    while (q.length - head > 0) {
        const size = q.length - head
        for (let i = 0; i < size; i++) {
            const [x1,y1] = q[head++];
            if (x1 === x && y1 === y) return res;
            for (const [dx, dy] of dirs) {
                const nx = x1 + dx
                const ny = y1 + dy
                q.push([nx,ny])
            }
        }
        res++;
    }
    
};