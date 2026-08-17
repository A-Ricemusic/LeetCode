/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    function reverse(left: number, right: number): void {
        while (left < right) {
            let temp: number = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
            left++;
            right--;
        }
    }
    let n: number = nums.length;
    k = k % n;
    reverse(0,n - 1);
    reverse(0, k - 1);
    reverse(k,n - 1)
    
};