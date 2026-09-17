/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}

 time: 
 */
var leastInterval = function(tasks, n) {
    const hashMap = new Map();
    const heap = new PriorityQueue((a,b) => b[1] - a[1]);
    const q = [];
    let head = 0;
    let t = 0;
    for (const task of tasks) {
        hashMap.set(task, (hashMap.get(task) ?? 0) + 1);
    };

    for (const [k,v] of hashMap.entries()) {
        heap.enqueue([0,v]);
    };

    while (q.length - head > 0 || !heap.isEmpty()) {
        while (q.length - head > 0 && t > q[head][0]) {
            const arr = q[head++];
            heap.enqueue(arr)
        }

        if (heap.isEmpty()) {
            t++;
            continue;
        }
        const [_,freq] = heap.dequeue()
        if (freq - 1 > 0) {
            q.push([t + n, freq - 1]);
        }
        t++;
    }

    return t;
};