function minSubArrayLen(target: number, nums: number[]): number {
    let currentSum: number = 0;
    let j: number = 0;
    let result: number = Infinity

    for (let i = 0; i < nums.length; i++) {
        currentSum += nums[i];

        while (currentSum >= target) {
            result = Math.min(i - j + 1, result);
            currentSum -= nums[j];
            j++;
            
        }

    }
    if (result === Infinity) {
        return 0
    }

    return result;

    
};