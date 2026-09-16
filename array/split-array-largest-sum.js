/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 nums = [7,2,5,10,8]
 l = 10
 r = 32

 */
var splitArray = function(nums, k) {
    let l = Math.max(...nums);
    let r = nums.reduce((a,c) => a + c, 0);
    let res = r;
    while (l <= r) {
        const m = Math.floor(l + (r - l) / 2);
        let count = 1;
        let currSum = 0;
        for (const num of nums) {
            if (currSum + num > m) {
                currSum = num;
                count++;
            } else {
                currSum += num;
            }
        }
        if (count > k) {
            l = m + 1;
        } else {
            res = m;
            r = m - 1;
        }
    }

    return res;
    
};