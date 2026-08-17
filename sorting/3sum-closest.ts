function threeSumClosest(nums: number[], target: number): number {
    nums.sort((a,b) => a - b);
    let n: number = nums.length;
    let closetSum: number = Infinity;
    let closetDistance: number = Infinity;

    for (let i = 0; i < n; i++) {

        let left: number = i + 1;
        let right: number = n - 1;
        if (closetSum === target) {
            break;
        }

        while (left < right) {
            let currentSum: number = nums[i] + nums[left] + nums[right];
            let currentDistance: number = Math.abs(target - currentSum);

            if (currentDistance < closetDistance) {
                closetDistance = currentDistance;
                closetSum = currentSum;
            }
            if (currentSum > target) {
                right--;
            } else if (currentSum < target) {
                left++;
            } else {
                break
            }
        }
    }
    return closetSum
};



/*

[-4,-1,1,2]

cSum = -4 + -1 + 2 = -3

cDis = 4





*/