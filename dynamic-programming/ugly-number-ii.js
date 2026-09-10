/**
 * @param {number} n
 * @return {number}
 1 => 2, 3, 5

 */


var nthUglyNumber = function(n) {
    let minHeap = new PriorityQueue((a,b) => a - b);
    const visited = new Set([1]);
    const factors = [2,3,5];
    minHeap.enqueue(1)
    for (let i = 0; i < n; i++) {
        const num = minHeap.dequeue();
        if (i === n - 1) {
            return num
        }

        for (const f of factors) {
            const newNum = num * f
            if (!visited.has(newNum)) {
                visited.add(newNum);
                minHeap.enqueue(newNum)
            }
        }
    }

    
};