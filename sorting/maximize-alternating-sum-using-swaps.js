/**
 * @param {number[]} nums
 * @param {number[][]} swaps
 * @return {number}
    nums = [1,2,3], swaps = [[0,2],[1,2]]
 */
var maxAlternatingSum = function(nums, swaps) {
    const n = nums.length;
    const par = new Array(n).fill(0);
    const rank = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        par[i] = i;
    };

    const find = (x) => {
        let p = par[x]
        while (par[p] !== p) {
            par[p] = par[par[p]]
            p = par[p]
        }
        return p
    }

    const union = (x,y) => {
        let p1 = find(x);
        let p2 = find(y);
        if (p1 === p2) return false;
        if(rank[p1] > rank[p2]) {
            par[p2] = p1;
        } else if(rank[p1] < rank[p2]) {
            par[p1] = p2;
        } else {
            par[p1] = p2
            rank[p2]++;
        }
        return true;
    };
    /*
    nums = [1,2,3], swaps = [[0,2],[1,2]] 
    par = [2,2,2], rank = [0,0,2]
    group = {
        2: [0,1,2]
    }
    
    
    */

    for (const [x,y] of swaps) {
        union(x,y)
    }

    const groups = new Map();

    for (let i = 0; i < n; i++) {
        const root = find(i)
        if (!groups.has(root)) groups.set(root, [])
        groups.get(root).push(i)
    }
    let res = 0
    for (const comp of groups.values()) {
        let even = 0;
        const values = []
        for (const idx of comp) {
            if (idx % 2 === 0) even++;
            values.push(nums[idx])
        }
        values.sort((a,b) => a - b);
        const split = values.length - even;

        for (let i = 0; i < split; i++) {
            res -= values[i];
        }

        for (let i = split; i < values.length; i++) {
            res += values[i];
        }
    }

    return res;
  
};