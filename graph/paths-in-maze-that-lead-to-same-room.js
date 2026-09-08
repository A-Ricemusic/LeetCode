/**
 * @param {number} n
 * @param {number[][]} corridors
 * @return {number}
 time: o(n)
 space: o(n)
 */
var numberOfPaths = function(n, corridors) {
    const adj = Array.from({length: n + 1}, () => new Set());
    for (const [x,y] of corridors) {
        adj[x].add(y);
        adj[y].add(x);
    };

    const dfs = (start, curr,len) => {
        if (len === 2) {
            return adj[curr].has(start)? 1 : 0
        }
        
        let res = 0;
        for (const child of adj[curr]) {
            if (child <= curr) continue;
            res += dfs(start, child, len + 1);

        }
        return res;
    };


    let final = 0;
    for (let i = 1; i <=n; i++) {
        final += dfs(i,i,0)
    }
    return final;
};