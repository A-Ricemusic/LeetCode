/**
 * @param {string[]} classroom
 * @param {number} energy
 * @return {number}

 */
var minMoves = function(classroom, energy) {
    const dx = [0,1,0,-1]
    const dy = [1,0,-1,0]
    const n = classroom.length;
    const m = classroom[0].length;
    const id = Array.from({length: n}, () => new Array(m).fill(0))
    let sx = 0;
    let sy = 0;
    let count = 0;
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < m; c++) {
            if (classroom[r][c] === "S") {
                sx = r;
                sy = c;
            } else if (classroom[r][c] === "L") {
                id[r][c] = 1 << count
                count++;
            }
        }
    }

    const full = 1 << count;
    const bestEnergy = Array.from({length: n},() => Array.from({length: m}, () => new Array(full).fill(-1)));
    bestEnergy[sx][sy][0] = energy;
    const q = [{x: sx, y: sy, mask: 0, e: energy, steps: 0}]
    let head = 0;
    while (q.length - head > 0) {
        const t = q[head++];
        if (t.mask === full - 1) return t.steps;
        if (t.e === 0) continue;

        for (let d = 0; d < 4; d++) {
            const nx = t.x + dx[d];
            const ny = t.y + dy[d];
            if (nx < 0 || nx >= n || ny < 0 || ny >= m || classroom[nx][ny] === "X") continue;
            const ne = classroom[nx][ny] === "R"? energy : t.e - 1
            const nmask = t.mask | id[nx][ny]
            if (ne > bestEnergy[nx][ny][nmask]) {
                bestEnergy[nx][ny][nmask] = ne;
                q.push({
                    x: nx,
                    y: ny,
                    mask: nmask,
                    e: ne,
                    steps: t.steps + 1,
                })
            }
        }
    }

    return -1;
    
};