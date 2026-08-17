function majorityElement(nums: number[]): number {

    let count: number = 0;
    let can: number | null = null;

    for (let num of nums) {
        if (count === 0) {
            can = num
        }
        if (num === can) {
            count++;
        } else {
            count--;
        }
    }

    return can as number
    
};