/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function(points) {
    const visited = new Set();
    const n = points.length;
    const minDist = new Array(n).fill(Infinity);
    let res = 0;
    minDist[0] = 0;

    while (visited.size < n) {
        let currNode = -1;
        const min = Math.min(...minDist)
        currNode = minDist.findIndex(num => num === min);
        res += min;
        visited.add(currNode)
        minDist[currNode] = Infinity;
        for (let i = 0; i < n; i++) {
            if (visited.has(i)) continue;
            const dist = Math.abs(points[currNode][0] - points[i][0]) + Math.abs(points[currNode][1] - points[i][1]);
            minDist[i] = Math.min(minDist[i], dist)
        }
    }

    return res;
};