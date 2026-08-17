/**
 * @param {number[][]} intervals
 * @return {number}
    res = 1
    [[2,4],[7,10]]
 [10]
 */
var minMeetingRooms = function(intervals) {
    const heap = new PriorityQueue((a,b) => a - b);
    let res = 0;
    intervals.sort((a,b) => a[0] - b[0]);

    for (const [start, end] of intervals) {
        if (heap.isEmpty()) {
            res++;
            heap.enqueue(end)
            continue;
        }

        if (start >= heap.front()) {
            heap.dequeue()
        } else {
            res++;
        }
        heap.enqueue(end)
    }

    return res;
};