/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    const hashMap = new Map();
    const heap = new PriorityQueue((a,b) => a[0] === b[0]? b[1] - a[1] : a[0] - b[0]);
    const q = [];
    let head = 0;
    let t = 0;
    for (const task of tasks) {
        hashMap.set(task, (hashMap.get(task) ?? 0) + 1);
    };

    for (const [k,v] of hashMap.entries()) {
        q.push([0,v]);
    };

    while (q.length - head > 0 || !heap.isEmpty()) {
        while (!heap.isEmpty() && t >= heap.front()[0]) {
            const arr = heap.dequeue();
            q.push(arr);
        }

        if (q.length - head === 0) {
            t++;
            continue;
        }

        const [_,freq] = q[head++];
        if (freq - 1 > 0) {
            heap.enqueue([t + n + 1, freq - 1])
        }
        t++;
    }

    return t;
};