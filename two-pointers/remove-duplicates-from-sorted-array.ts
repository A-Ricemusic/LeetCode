function removeDuplicates(nums: number[]): number {

    if (nums.length === 1) {
        return 1;
    }

    let reader: number = 1;
    let writer: number = 1;
    let n: number = nums.length;
    while (reader < n) {
        if (nums[reader] !== nums[reader - 1]) {
            nums[writer] = nums[reader];
            writer++;
            reader++;
        } else {
            reader++;
        }
    }
    return writer;
    
};