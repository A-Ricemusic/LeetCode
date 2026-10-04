/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function(heights) {
    const grid = heights;
    const rows = grid.length;
    const cols = grid[0].length;
    const heap = new PriorityQueue((a,b) => a[0] - b[0]);
    const visited = new Set();
    const dirs = [[1,0], [0,1], [-1,0], [0,-1]];
    heap.enqueue([0,0,0]) // [w,r,c]

    while (!heap.isEmpty()) {
        const [w1,r,c] = heap.dequeue();
        if (r === rows - 1 && c === cols - 1) return w1;
        if (visited.has(`${r},${c}`)) continue;
        visited.add(`${r},${c}`);
        for (const [dr, dc] of dirs) {
            const nr = r + dr;
            const nc = c + dc;
            const state = `${nr},${nc}`;
            if (nr < 0 || nr >= rows || nc < 0 || nc >= cols || visited.has(state)) continue;
            const w2 = Math.abs(grid[r][c] - grid[nr][nc])
            heap.enqueue([Math.max(w1,w2), nr, nc]);
        }
    }


    return -1;
    
};