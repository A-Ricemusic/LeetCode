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
        const end1 = intervals[i][1]
        const end2 = res[res.length - 1][1]
        if (start <= end2 && end1 > end2) {
            res[res.length - 1][1] = end1
            
        }
        if (start > end2) {
            res.push(intervals[i])
        }
    }

    return res;
    
};