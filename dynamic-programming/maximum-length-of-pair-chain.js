/**
 * @param {number[][]} pairs
 * @return {number}
    pairs = [[1,2],[2,3],[3,4],[5,8],[6,7],[8,9],[10,16]];

    res = 5
    lastVal = 16
    pairs = [[1,2],[2,3],[3,4],[6,7],[5,8],[8,9],[10,16]];


 */
var findLongestChain = function(pairs) {
    const n = pairs.length;
    pairs.sort((a,b) => a[1] - b[1]);
    let res = 1;
    let lastVal = pairs[0][1]
    for (let i = 1; i < n; i++) {
        const [s,e] = pairs[i];
        if (s > lastVal) {
            lastVal = e;
            res++;
        }
    }
    return res;
};