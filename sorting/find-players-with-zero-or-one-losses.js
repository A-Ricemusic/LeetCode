/**
 * @param {number[][]} matches
 * @return {number[][]}
 matches = [[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]
 output: [[],[]];

 {
 1: 0
 2: 0
 3: 2
 4: 1
 5: 1
 6: 2
 7: 1
 8: 1
 9: 2
 10: 0
 
 }

 
 */
var findWinners = function(matches) {
    const hashMap = new Map();
    for (const [winner, loser] of matches) {
        if (!hashMap.has(winner)) {
            hashMap.set(winner, 0);
        }
        hashMap.set(loser, (hashMap.get(loser) || 0) + 1);
    }
    let res = [[],[]]
    const arr = [...hashMap.entries()].sort((a,b) => a[0] - b[0]);
    for (const [plr, freq] of arr) {
        if (freq === 0) {
            res[0].push(plr)
        } else if (freq === 1) {
            res[1].push(plr)
        }
    }

    return res;
    
};