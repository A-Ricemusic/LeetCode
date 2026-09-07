/**
 * @param {number[][]} wall
 * @return {number}



 */
var leastBricks = function(wall) {
    const hashMap = new Map();
    const len = wall[0].reduce((a,c) => a + c, 0);
    for (let i = 1; i < len; i++) {
        hashMap.set(i,0);
    }

    for (const row of wall) {
        let gap = 0;
        for (let i = 0; i < row.length - 1; i++) {
            gap += row[i];
            hashMap.set(gap, hashMap.get(gap) + 1);
        }
    }
    let maxGap = 0
    for (const [_,val] of hashMap.entries()) {
        maxGap = Math.max(val, maxGap)
    }

    return  wall.length - maxGap
    
};