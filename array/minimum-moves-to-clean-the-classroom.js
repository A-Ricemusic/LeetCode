/**
 * @param {string[]} classroom
 * @param {number} energy
 * @return {number}
 */
var minMoves = function(classroom, energy) {
    for (let i = 0; i < classroom.length; i++) {
        const row = classroom[i].split("");
        classroom[i] = row;
    }
    const grid = classroom
    const rows = grid.length;
    const cols = grid[0].length;
    let res = Infinity;
    let litterCount = 0
    let start = [0,0]
    let dirs = [[1,0], [0,1], [-1,0], [0,-1]];

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === "S") {
                start[0] = r
                start[1] = c
            } else if (grid[r][c] === "L") {
                litterCount++;
            }
        }
    }

    const q = [[start[0], start[1], energy,0, new Set()]] // r,c,energy,moves,litterSet
    let head = 0
    const visited = new Set();

    while (q.length - head > 0) {
        let [r,c,e,moves,litterSet] = q[head++];
        if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === "X") continue;
        
        const newLitterSet = new Set(litterSet);

        if (grid[r][c] === "L") {
            newLitterSet.add(`${r},${c}`);
        } else if (grid[r][c] === "R") {
            e = energy;
        };

        if (newLitterSet.size === litterCount) return moves;
        if (e === 0) continue;
        
        const litterKey = [...newLitterSet].sort().join(",");

        const stateKey = `${r},${c},${e},${litterKey}`;

        if (visited.has(stateKey)) {
            continue;
        }

        visited.add(stateKey);

        for (const [dr,dc] of dirs) {
            q.push([r + dr,c + dc, e - 1,moves + 1,newLitterSet])
        }

    }

    return -1


    
};