function findErrorNums(nums: number[]): number[] {
    let n: number = nums.length;
    let expectedSum: number = (n * (n + 1)) / 2;

    let actualSum: number = 0;
    let duplicate: number = 0;
    let seen = new Set<number>();
    for (let num of nums) {
        if (seen.has(num)) {
            duplicate = num;
        } else {
            seen.add(num);
        }
        actualSum += num;
    }

    let missing: number = expectedSum - actualSum + duplicate;
    return [duplicate,missing];
    
};