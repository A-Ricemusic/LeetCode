/**
 * @param {number[]} nums
 * @return {number}

 */
var lengthOfLIS = function(nums) {
    const tails = [];
    // [0,1,3]
    for (const num of nums) {
        let l = 0;
        let r = tails.length;
        while (l < r) {
            const m = Math.floor((l + r) / 2);
            if (tails[m] < num) {
                l = m + 1
            } else {
                r = m;
            }
        }
        if (l >= tails.length) {
            tails.push(num)
        } else {
            tails[l] = num
        }
    }
        return tails.length


};