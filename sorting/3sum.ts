function threeSum(nums: number[]): number[][] {
    let res: number[][] = [];
    nums.sort((a,b) => a - b);
    let n: number = nums.length;

    for (let i = 0; i < n; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        let left: number = i + 1;
        let right: number = n - 1;
        let currentSum: number = nums[i];
        while (left < right) {
            currentSum = nums[i] + nums[left] + nums[right];
            if (currentSum > 0) {
                right--;
            } else if (currentSum < 0) {
                left++;
            } else {
                res.push([nums[i],nums[left], nums[right]]);
                left++;
                while (nums[left] === nums[left - 1] && left < right) {
                    left++;
                }
            }
        }
    }
    return res;
    
};