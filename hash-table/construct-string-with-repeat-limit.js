/**
 * @param {string} s
 * @param {number} repeatLimit
 * @return {string}
  s = "cczazcc
  zzcccca
  {
  z: 2
  c: 4
  a: 1
  }
 */
var repeatLimitedString = function(s, repeatLimit) {
    const hashMap = new Map();
    for (const char of s) {
        hashMap.set(char, (hashMap.get(char) || 0) + 1);
    }
    const maxHeap = new PriorityQueue((a,b) => b[0] - a[0]) // [asc2, freq, char]
    for (const [char, freq] of hashMap.entries()) {
        maxHeap.enqueue([char.charCodeAt(0), freq, char, 0])
    }
    const res = [];
    let lastChar = "";
    while (!maxHeap.isEmpty()) {
        let [asc, freq, char] = maxHeap.dequeue();
        const use = Math.min(freq,repeatLimit);
        for (let i = 0; i < use; i++) {
            res.push(char);
        };
        freq -= use
        if (freq === 0) continue;
        if (maxHeap.isEmpty()) break;
        let [asc2,freq2,char2] = maxHeap.dequeue();
        res.push(char2)
        freq2--;
        if (freq2 !== 0) {
            maxHeap.enqueue([asc2,freq2,char2])
        }
        maxHeap.enqueue([asc,freq,char])
    }

    return res.join("")

    
};