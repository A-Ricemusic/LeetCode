/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}

 time: O(n);
 space: O(n);
 */
var pivotArray = function(nums, pivot) {
    const less = [];
    const eq = [];
    const greater = [];
    for (const num of nums) {
        if (num < pivot) {
            less.push(num)
        } else if (num > pivot) {
            greater.push(num)
        } else {
            eq.push(num)
        }
    }

    return [...less,...eq,...greater]
    
};