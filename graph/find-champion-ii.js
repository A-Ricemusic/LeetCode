/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var findChampion = function(n, edges) {
    let indegrees = new Array(n).fill(0)

    for (const [u,v] of edges) {
        indegrees[v]++;
    }
    let res = -1
    let count = 0;
    for (let i = 0; i < n; i++) {
        if (indegrees[i] === 0) {
            res = i
            count++;
        }
    }

    return count > 1 || count === 0? -1 : res
    
};