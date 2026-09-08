/**
 * @param {number} n
 * @param {number[][]} corridors
 * @return {number}
 time: o(n)
 space: o(n)
 dfs(1,1,0,[1]) => dfs(1,2,1,[])
 */
var numberOfPaths = function(n, corridors) {
    const adj = Array.from({length: n + 1}, () => []);
    const visited = new Set();
    for (const [x,y] of corridors) {
        adj[x].push(y);
        adj[y].push(x);
    };

    const dfs = (start, curr,len,path) => {
        if (start === curr && len === 3) {
            const key = [...path].sort((a,b) => a - b).join(",")
            if (!visited.has(key)) {
                visited.add(key);
                return 1;
            }
            return 0;
        }
        if (len >= 3) return 0;
        let res = 0;
        for (const child of adj[curr]) {
            path.push(curr);
            res += dfs(start, child, len + 1,path);
            path.pop()
        }
        return res;
    };


    let final = 0;
    for (let i = 1; i <=n; i++) {
        final += dfs(i,i,0,[])
    }

    return final;

    
};