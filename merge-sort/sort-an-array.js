/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    quickSort(nums,0, nums.length - 1)
    return nums
    
};



var quickSort = function(nums,s,e) {
    if (e - s + 1 <= 1) return;
    const pivot = e
    let l = s
    for (let i = s; i < e; i++) {
        if (nums[i] <= nums[pivot]) {
            [nums[i], nums[l]] = [nums[l], nums[i]];
            l++
        }

    }
    [nums[pivot], nums[l]] = [nums[l], nums[pivot]]

    quickSort(nums, s , l - 1)
    quickSort(nums, l + 1, e)

} 