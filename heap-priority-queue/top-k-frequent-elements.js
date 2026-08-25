/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const hashMap = new Map()
    for (const num of nums) {
        hashMap.set(num, (hashMap.get(num) || 0) + 1)
    }


    const heap = new PriorityQueue((a,b) => a[0] - b[0])

    for (const [num, freq] of hashMap.entries()) {
        heap.enqueue([freq,num])
        if (heap.size() > k) {
            heap.dequeue()
        }
    }
    const res = []
    while (!heap.isEmpty()) {
        const [freq, num] = heap.dequeue()
        res.push(num)
    }

    return res;

    
};