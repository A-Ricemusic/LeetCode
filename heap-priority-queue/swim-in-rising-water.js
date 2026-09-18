/**
 * @param {number[][]} grid
 * @return {number}

 [[3,2],[
   [0,1]]
 */
var swimInWater = function(grid) {
    const visited = new Set();
    const rows = grid.length;
    const cols = grid.length;
    const heap = new PriorityQueue((a,b) => a[0] - b[0]); // [w,r,c]
    heap.enqueue([grid[0][0],0,0]);
    const dirs = [[1,0], [0,1], [-1,0], [0,-1]];
    while (!heap.isEmpty()) {
        const [w1,r,c] = heap.dequeue();
        const state = `${r},${c}`
        if (visited.has(state)) continue;
        visited.add(state);
        if (r === rows - 1 && c === cols - 1) {
            return w1;
        };
        for (const [dr,dc] of dirs) {
            const nr = r + dr;
            const nc = c + dc;
            if (nr < 0 || nr >= rows || nc < 0 || nc >= cols || visited.has(`${nr},${nc}`)) continue;
            const w2 = grid[nr][nc]
            heap.enqueue([Math.max(w1,w2), nr, nc]) 
        }
    }

    return -1;
};