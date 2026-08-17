function trap(height: number[]): number {
    let n: number = height.length;
    let left: number = 0;
    let right: number = n - 1;
    let maxL: number = height[left];
    let maxR: number = height[right];
    let result: number = 0;

    while (left < right) {
        if (maxL <= maxR) {
            left++;
            let current: number = maxL - height[left];
            if (current > 0) {
                result += current;
            }
            maxL = Math.max(maxL, height[left])
        } else {
            right--;
            let current: number = maxR - height[right];
            if (current > 0) {
                result += current;
            }
            maxR = Math.max(maxR, height[right])
        }
    }

    return result;
    
};