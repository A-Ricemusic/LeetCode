function maxArea(height: number[]): number {
    let left: number = 0;
    let right: number = height.length - 1;
    let currentArea: number = 0;
    let maxArea: number = 0;

    while (left < right) {
        currentArea = (right - left) * Math.min(height[left], height[right]);
        maxArea = Math.max(currentArea,maxArea);
        if (height[left] < height[right]) {
            left++;
        } else {
            right --;
        }
    }
    return maxArea
    
};