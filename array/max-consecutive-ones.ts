function findMaxConsecutiveOnes(nums: number[]): number {
    let maxCount: number = 0;
    let currentCount: number = 0;
    let n: number = nums.length;
    for (let i = 0; i < n; i++) {
        if (nums[i] === 1) {
            currentCount++;
            maxCount = Math.max(currentCount,maxCount);
        } else {
            currentCount = 0
        }
    }
    return maxCount;
    
};