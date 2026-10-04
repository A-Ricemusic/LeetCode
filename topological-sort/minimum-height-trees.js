/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
    if (n === 1) return [0];
    const adj = new Map();
    const indegrees = new Array(n).fill(0);

    for (const [u,v] of edges) {
        if (!adj.has(u)) {
            adj.set(u, [])
        }
        if (!adj.has(v)) {
            adj.set(v, [])
        }
        adj.get(u).push(v);
        adj.get(v).push(u);
        indegrees[u]++;
        indegrees[v]++;
    }

    const q = new Queue();
    for (let i = 0; i < n; i++) {
        if (indegrees[i] === 1) {
            q.enqueue(i);
        }
    };

    let remain = n

    while (remain > 2) {
        const size = q.size();
        remain -= size;
        for (let i = 0; i < size; i++) {
            const node = q.dequeue();
            for (const nei of adj.get(node)) {
                indegrees[nei]--;
                if (indegrees[nei] === 1) {
                    q.enqueue(nei);
                }
            }
        }
    }

    return q.toArray();
    
};