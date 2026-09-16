/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function(points) {
    const minHeap = new PriorityQueue((a,b) => a[0] - b[0]);
    const visited = new Set();
    const n = points.length;
    minHeap.enqueue([0,0]);
    let res = 0;

    while (visited.size < n) {
        const [cost,pointIdx] = minHeap.dequeue();
        if (visited.has(pointIdx)) continue;
        visited.add(pointIdx);
        res += cost;
        for (let i = 0; i < n; i++) {
            if (visited.has(i)) continue;
            const dist = Math.abs(points[i][0] - points[pointIdx][0]) + Math.abs(points[i][1] - points[pointIdx][1]);
            minHeap.enqueue([dist, i])
        }
    }

    return res;
};