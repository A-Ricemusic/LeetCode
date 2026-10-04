/**
 * @param {number[][]} wall
 * @return {number}
 n = number of rows
 m = number of elements in each row
 k = number of ditinct cracks
 time: O(n * m)
 space:O(k)
 */
var leastBricks = function(wall) {
    const map = new Map();
    const rows = wall.length;
    let maxCracks = 0
    for (const r of wall) {
        let currSum = 0;
        for (let i = 0; i < r.length - 1; i++) {
            currSum += r[i]
            map.set(currSum, (map.get(currSum) ?? 0) + 1);
            maxCracks = Math.max(maxCracks, map.get(currSum))
        }
    }

    return rows - maxCracks; 
    
};