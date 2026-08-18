/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    const res = [];
    intervals.sort((a,b) => a[0] - b[0]);
    res.push(intervals[0])
    for (let i = 1; i < intervals.length; i++) {
        const start = intervals[i][0]
        const end = intervals[i][1]
        if (start <= res[res.length - 1][1]) {
            res[res.length - 1][1] = end
        } else {
            res.push(intervals[i])
        }
    }

    return res;
    
};