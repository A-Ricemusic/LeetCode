/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var smallestRange = function(nums) {
    const n = nums.length;
    let left = nums[0][0];
    let right = nums[0][0];
    let minHeap = new PriorityQueue((a,b) => a[0] - b[0]);
    for (let i = 0; i < n; i++) {
        const l = nums[i];
        left = Math.min(l[0], left);
        right = Math.max(l[0], right);
        minHeap.enqueue([l[0], i, 0])
    }
    let res = [left,right]

    while (true) {
        let [minNum, i, idx] = minHeap.dequeue()
        const nextIdx = idx + 1
        if (nextIdx === nums[i].length) break;
        minHeap.enqueue([nums[i][nextIdx],i,nextIdx])
        left = minHeap.front()[0]
        right = Math.max(right,nums[i][nextIdx])
        if (right - left < res[1] - res[0] || (right - left === res[1] - res[0] && left < res[0])) {
            res = [left,right]
        }
    }

    return res
    
    
};