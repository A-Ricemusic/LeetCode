/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}

 m = number of task
 n = wait time
 k: distinct task which is at most 26
 time: O(m + (n * m))
 space: O(1)
 */
var leastInterval = function(tasks, n) {
    const hashMap = new Map(); //O(26)
    const heap = new PriorityQueue((a,b) => b[1] - a[1]);// O(26) space
    const q = []; //O(26) space
    let head = 0;
    let t = 0;
    //time: O(m)
    for (const task of tasks) {
        hashMap.set(task, (hashMap.get(task) ?? 0) + 1);
    };

    //time: O(klog(k)) => O(26log(26))
    for (const [k,v] of hashMap.entries()) {
        heap.enqueue([0,v]);
    };
   // in the worst case: time: O(n * mlog(k)) => O(n * mlog(26)) => O(n * m)
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