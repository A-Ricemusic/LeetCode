function maxSum(nums: number[], k: number): number {
    const MOD = BigInt(1e9 + 7);
    const bitCounts: number[] = new Array(32).fill(0);
    
    // Count bits at each position
    for (const num of nums) {
        for (let i = 0; i < 32; i++) {
            if ((num >> i) & 1) {
                bitCounts[i]++;
            }
        }
    }

    let totalSumSq = 0n;

    // Build k largest numbers
    for (let i = 0; i < k; i++) {
        let currentNum = 0n;
        for (let bit = 0; bit < 32; bit++) {
            if (bitCounts[bit] > 0) {
                // Add this power of 2 to our number
                currentNum |= 1n << BigInt(bit);
                bitCounts[bit]--; // Use up this bit
            }
        }
        totalSumSq = (totalSumSq + currentNum * currentNum) % MOD;
    }

    return Number(totalSumSq);
}