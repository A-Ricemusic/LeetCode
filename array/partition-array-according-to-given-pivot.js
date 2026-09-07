/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}

 less = [9,5,3]
 greater = [12,14]
 pivot = [10,10]
 nums = [9,12,5,10,14,3,10]

 */
var pivotArray = function(nums, pivot) {
    const less = [];
    const greater = [];
    const pivots = [];
    for (const num of nums) {
        if (num < pivot) {
            less.push(num);
        } else if (num > pivot) {
            greater.push(num);
        } else {
            pivots.push(num);
        }
    }

    return [...less, ...pivots, ...greater]

    
};