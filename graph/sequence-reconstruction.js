/**
 * @param {number[]} nums
 * @param {number[][]} sequences
 * @return {boolean}
 */
var sequenceReconstruction = function(nums, sequences) {
    const adj = new Map()
    const indegrees = new Map()
    for (const [u,v] of sequences) {
        if (!adj.has(u)) {
            adj.set(u, []);
        };
        if (!adj.has(v)) {
            adj.set(v, [])
        };
        
        adj.get(u).push(v);
        if (!indegrees.has(u)) {
            indegrees.set(u,0)
        }
        indegrees.set(v, (indegrees.get(v) || 0) + 1);
    }

    const q = [];
    let head = 0;

    for (const k of indegrees.keys()) {
        if (indegrees.get(k) === 0) {
            q.push(k)
        }
    }
    if (q.length - head > 1) return false;

    let res = []

    
    while (q.length - head > 0) {
        const n1 = q[head++]
        res.push(n1)
        for (const n2 of adj.get(n1)) {
            indegrees.set(n2, indegrees.get(n2) - 1)
            if (indegrees.get(n2) === 0) {
                q.push(n2)
            }
        }
        if (q.length - head > 1) return false;
    }

    if (res.length !== nums.length) return false;
    for (let i = 0; i < res.length; i++) {
        if (res[i] !== nums[i]) return false;
    }

    return true;
    
};