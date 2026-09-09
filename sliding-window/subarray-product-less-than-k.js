/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 res = 1
 p = 10
  [10,5,2,6]
 */
var numSubarrayProductLessThanK = function(nums, k) {
    let res = 0;
    let l = 0
    let product = 1;
    for (let r = 0; r < nums.length; r++) {
        product *= nums[r];
        while (l <= r && product >= k) {
            product /= nums[l];
            l++;
        }
        if (product < k) {
            res += r - l + 1;
        }
    }

    return res;
    
};