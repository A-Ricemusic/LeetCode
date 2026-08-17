function productExceptSelf(nums: number[]): number[] {
    let n : number = nums.length
    let answer: number[] = new Array(n).fill(1)
    for (let i = 1; i < n; i++) {
        answer[i] = nums[i - 1] * answer[i - 1]
    }

    let right: number = 1
    for (let i = n - 2; i >= 0; i--) {
        right *= nums[i + 1];
        answer[i] *= right;
    }
    return answer
    
};