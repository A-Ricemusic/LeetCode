/**
 * @param {number[][]} edges
 * @return {number[]}

 time: o(n)
 space: o(n)
 */
var findRedundantConnection = function(edges) {
    const n = edges.length;
    const par = new Array(n + 1).fill(0);
    const rank = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        par[i] = i;
    }


    const find = (x) => {
        let p = par[x];
        while (par[p] !== p) {
            par[p] = par[par[p]]
            p = par[p];
        }

        return p;
    }


    const union = (x,y) => {
        const p1 = find(x); 
        const p2 = find(y); 
        if (p1 === p2) return false;
        if (rank[p1] < rank[p2]) {
            par[p1] = p2; 
        } else if (rank[p2] < rank[p1])  {
            par[p2] = p1
        } else {
            par[p1] = p2;
            rank[p2]++;
        }

        return true;
    }

    for (const [x,y] of edges) {
        if (!union(x,y)) {
            return [x,y]
        }
    }

    return []
};