/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    const heap = new PriorityQueue((a,b) => a - b)
    for (const num of nums) {
        heap.enqueue(num)
    }
    const res = []
    for (let i = 0; i < nums.length; i++) {
        res.push(heap.dequeue())
    }

    return res
    
};