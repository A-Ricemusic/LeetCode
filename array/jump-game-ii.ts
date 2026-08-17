function jump(nums: number[]): number {
    let left: number = 0;
    let right: number = 0;
    let n: number = nums.length;
    let jumps: number = 0;

    while (right < n - 1) {
        let farthest: number = 0;
        for (let i = left; i < right + 1; i++) {
            let currentJump: number = i + nums[i];
            farthest = Math.max(farthest,currentJump)
        }
        right = farthest;
        left++;
        jumps++;
    }
    return jumps;
    
};