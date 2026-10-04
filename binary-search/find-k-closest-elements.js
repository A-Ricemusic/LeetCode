/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}

 arr = [1,2,3,4,8,10], k = 4, x = 5

   4 > 

 */
var findClosestElements = function(arr, k, x) {
    let l = 0;
    let r = arr.length - k
    while (l < r) {
        const m = Math.floor(l + (r - l) / 2);
        if (x - arr[m] > arr[m + k] - x) {
            l = m + 1
        } else {
            r = m
        }
    }

    return arr.slice(l,l + k)
    
};