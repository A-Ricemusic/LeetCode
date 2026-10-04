/**
 * @param {number[][]} intervals
 * @return {number}
intervals = [[0,100],[15,30],[16,35],[30,60],[300,500]]
 res = 0
 heap = [[15,30],[16,35][0,100]] min hep based on end times;
 */
var minMeetingRooms = function(intervals) {

    intervals.sort((a,b) => a[0] - b[0]);
    const heap = new PriorityQueue((a,b) => a[1] - b[1])
    for (const [start, end] of intervals) {
        if (!heap.isEmpty() && start >= heap.front()[1]) {
            heap.dequeue();
        }
        heap.enqueue([start,end]);
    }
    return heap.size();
};