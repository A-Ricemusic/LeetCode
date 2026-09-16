/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
    const minHeap = new PriorityQueue((a,b) => a[0] - b[0]);
    const adj = Array.from({length: n + 1}, () => []);
    const visited = new Set();
    for (const [u,v,w] of times) {
        adj[u].push([w,v]);
    };

    minHeap.enqueue([0,k])

    while (!minHeap.isEmpty()) {
        const [w1,n1] = minHeap.dequeue();
        if (visited.has(n1)) continue;
        visited.add(n1);
        if (visited.size === n) return w1; 
        for (const [w2,n2] of adj[n1]) {
            if (visited.has(n2)) continue;
            minHeap.enqueue([w1 + w2,n2]);
        }
    }

    return -1;       
};