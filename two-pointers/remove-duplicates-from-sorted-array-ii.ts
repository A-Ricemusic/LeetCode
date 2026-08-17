function removeDuplicates(nums: number[]): number {
    let reader: number = 0;
    let writer: number = 0;
    let n: number = nums.length;

    while (reader < n) {
        let count: number = 1;
        while ((reader + 1) < n && nums[reader] === nums[reader + 1]) {
            count++;
            reader++;
        }
        for (let i = 0; i < Math.min(2, count); i++) {
            nums[writer] = nums[reader];
            writer++;
        }
        reader++;
    }
    return writer;

    
};