function removeElement(nums: number[], val: number): number {
    let p1: number = 0;
    let p2: number = 0;
    while (p2 < nums.length) {
        if (nums[p1] !== val) {
            p1++;
            p2++
        } else{
            if (nums[p2] !== val) {
                let j : number = nums[p1]
                nums[p1] = nums[p2]
                nums[p2] = j
                p1++;
                p2++
            } else {
                p2++;
            }
        }
    }
    return p1;
    
};