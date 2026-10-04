/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
    let l = Math.max(...weights);
    let r = weights.reduce((a,b) => a + b, 0);
    let res = r;

    while (l <= r) {
        const m = Math.floor(l + (r - l) / 2);
        let cnt = 1;
        let curr = 0;
        for (const w of weights) {
            curr += w
            if (curr > m) {
                curr = w;
                cnt += 1;
            }
        }

        if (cnt <= days) {
            res = m;
            r = m - 1
        } else {
            l = m + 1
        }
    }

    return res;
};