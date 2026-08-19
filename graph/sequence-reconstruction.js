/**
 * @param {number[]} nums
 * @param {number[][]} sequences
 * @return {boolean}
 */
var sequenceReconstruction = function(nums, sequences) {
    const adj = new Map()
    const indegrees = new Map()
    for (const seq of sequences) {
        
        for (const node of seq) {
            if (!adj.has(node)) {
                adj.set(node, []);
                indegrees.set(node, 0);
            }
        }

        for (let i = 0; i < seq.length - 1; i++) {
            const u = seq[i];
            const v = seq[i + 1];
            
            adj.get(u).push(v);
            indegrees.set(v, indegrees.get(v) + 1);
        }
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