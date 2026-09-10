/**
 * @param {number[][]} grid
 * @return {number}
grid = [[1,1],
        [0,0]]
 }

 {
 
 }
 */
var largestIsland = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const zeroList = [];
    const visited = new Set();
    let islandCount = 0;
    let hashMap = new Map();
    let res = 0;
    const dirs = [[1,0], [0,1], [-1,0], [0,-1]];


    const dfs = (r,c,path) => {
        const key = `${r},${c}`;
        if (r < 0 || r >= rows || c < 0 || c >= cols || visited.has(`${r},${c}`) || grid[r][c] === 0) {
            return 0;
        };

        path.push(key);
        visited.add(key);
        let res = 1;
        for (const [dr,dc] of dirs) {
            res += dfs(r + dr,c + dc, path)
        }

        return res;
    };
    
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 1) {
                if (visited.has(`${r},${c}`)) continue;
                const path = [];
                const area = dfs(r,c,path);
                for (const node of path) {
                    hashMap.set(node, [area, islandCount])
                }
                islandCount += 1
                res = Math.max(res, area)
            } else {
                zeroList.push([r,c])
            }
        };
    };

    for (const [r,c] of zeroList) {
        const mySet = new Set();
        let curr = 1;
        const [a1, is1] = hashMap.get(`${r + 1},${c}`) ?? [0,-1];
        const [a2, is2] = hashMap.get(`${r - 1},${c}`) ?? [0,-1];
        const [a3, is3] = hashMap.get(`${r},${c + 1}`) ?? [0,-1];
        const [a4, is4] = hashMap.get(`${r},${c - 1}`) ?? [0,-1];
        if (!mySet.has(is1)) {
            curr += a1
            mySet.add(is1)
        }
        if (!mySet.has(is2)) {
            curr += a2
            mySet.add(is2)
        }
         if (!mySet.has(is3)) {
            curr += a3
            mySet.add(is3)
        }
        if (!mySet.has(is4)) {
            curr += a4
            mySet.add(is4)
        }
        res = Math.max(curr, res);
    }

    return res;
    
};