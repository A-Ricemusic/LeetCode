/**
 * @param {number} n
 * @param {number[]} speed
 * @param {number[]} efficiency
 * @param {number} k
 * @return {number}
  n = 6, speed = [2,10,3,1,5,8], efficiency = [5,4,3,9,7,2], k = 2
  [[5,2], [4,10],[3,3], [9,1], [7,5], [2,8]] e,s
  let res = 60
  k = 2
  [5,10]
  sum = 15
  [[9,1],[7,5] [5,2],[4,10],[3,3],[2,8]] e,s
 */
var maxPerformance = function(n, speed, efficiency, k) {
    const MOD = 1000000007n
    const e_s_array= [];
    for (let i = 0; i < n; i++) {
        e_s_array.push([efficiency[i], speed[i]])
    }
    e_s_array.sort((a,b) => b[0] - a[0]);
    let res = 0n;
    let currSum = 0n;
    const heap = new PriorityQueue((a,b) => a - b);
    for (const [e,s] of e_s_array) {
        currSum += BigInt(s);
        heap.enqueue(s);
        if (heap.size() > k) {
            currSum -= BigInt(heap.dequeue());
        }
        if (currSum * BigInt(e) > res) {
            res = currSum * BigInt(e)
        }
    }
    return Number(res % MOD)

};