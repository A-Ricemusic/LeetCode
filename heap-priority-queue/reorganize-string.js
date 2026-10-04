/**
 * @param {string} s
 * @return {string}

 

 */
var reorganizeString = function(s) {
    const freqMap = new Map();

    for (const char of s) {
        freqMap.set(char, (freqMap.get(char) || 0) + 1);
    }
    const heap = new PriorityQueue((a,b) => b[0] - a[0]);
    for (const [char,cnt] of freqMap.entries()) {
        heap.enqueue([cnt, char]);
    }

    const res = [];
    let prev = [];
    while (!heap.isEmpty()) {
        const [cnt,char] = heap.dequeue();
        res.push(char);
        if (prev.length !== 0) {
            heap.enqueue(prev);
        }
        if (cnt - 1 > 0) {
            prev = [cnt - 1, char];
        } else {
            prev = []
        }
    }


    return res.length === s.length? res.join("") : "";

    
};