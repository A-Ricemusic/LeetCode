/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minChanges = function(nums, k) {
    const MAX_XOR = 1024;

     // Build k groups based on index % k
    const groups = Array.from({ length: k }, () => new Map());

    for (let i = 0; i < nums.length; i++) {
        const g = i % k;
        const freq = groups[g];

        freq.set(
            nums[i],
            (freq.get(nums[i]) || 0) + 1
        );
    }

    let dp = new Array(MAX_XOR).fill(Infinity);
    dp[0] = 0;

    for (let g = 0; g < k; g++) {
        const freq = groups[g];

        let size = 0;
        for (const count of freq.values()) {
            size += count;
        }

        // Case: change the entire group to some value.
        // Since that value can be anything 0..1023,
        // we can reach any XOR state for cost `size`.
        const minPrev = Math.min(...dp);
        const next = new Array(MAX_XOR).fill(minPrev + size);

        // Case: choose a value already present in the group.
        // We save `count` changes by keeping those occurrences.
        for (let xor = 0; xor < MAX_XOR; xor++) {
            for (const [num, count] of freq) {
                const newXor = xor ^ num;
                const cost = size - count;

                next[newXor] = Math.min(
                    next[newXor],
                    dp[xor] + cost
                );
            }
        }

        dp = next;
    }

    

    return dp[0]
    

};