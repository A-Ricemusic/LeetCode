/**
 * @param {number[][]} intervals
 * @return {number}

 intervals = [[0,2],[1,3],[2,4],[3,5],[4,6]]

 res = 0
 last = 100
 */
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0]);
    let last = intervals[0][1];
    let res = 0;
    for (let i = 1; i < intervals.length; i++) {
        const [start,end] = intervals[i];
        if (start < last) {
            res++;
            last = Math.min(end, last)
        } else {
            last = end
        }

        
    }

    return res;
    
};