/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
var furthestBuilding = function(heights, bricks, ladders) {
    const heap = new PriorityQueue((a,b) => a - b);
    for (let i = 0; i < heights.length - 1; i++) {
        const dist = heights[i + 1] - heights[i];
        if (dist <= 0) continue;
        heap.enqueue(dist);
        if (heap.size() > ladders) {
            bricks -= heap.dequeue();
        }
        if (bricks < 0) return i;
    }

    return heights.length - 1;
    
};