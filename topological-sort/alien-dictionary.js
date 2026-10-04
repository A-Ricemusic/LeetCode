/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function(words) {
    const adj = new Map();
    const indegrees = new Map();

    for (const w of words) {
        for (const char of w) {
            adj.set(char, new Set())
            indegrees.set(char, 0);
        };
    };

    for (let i = 0; i < words.length - 1; i++) {
        const w1 = words[i];
        const w2 = words[i + 1];
        if (w1.length > w2.length && w1.startsWith(w2)) return "";
        for (let i = 0; i < Math.min(w1.length, w2.length); i++) {
            if (w1[i] !== w2[i]) {
                if (!adj.get(w1[i]).has(w2[i])) {
                    adj.get(w1[i]).add(w2[i]);
                    indegrees.set(w2[i], indegrees.get(w2[i]) + 1);
                };
                break
            };
        };
    };

    const q = new Queue();
    for (const k of indegrees.keys()) {
        if (indegrees.get(k) === 0) {
            q.enqueue(k);
        }
    };
    let res = []
    while (!q.isEmpty()) {
        const node = q.dequeue();
        res.push(node);
        for (const nei of adj.get(node)) {
            indegrees.set(nei, indegrees.get(nei) - 1);
            if (indegrees.get(nei) === 0) {
                q.enqueue(nei);
            }
        }
    }
    
    return res.length === indegrees.size ? res.join("") : "";
};