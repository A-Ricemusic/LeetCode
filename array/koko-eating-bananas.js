/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let l = 1;
    let r = Math.max(...piles);
    let res = r;
    while (l <= r) {
        const m = Math.floor(l + (r - l) / 2);
        let t = 0;
        for (const p of piles) {
            t += Math.ceil(p / m)
            if (t > h) break;
        }
        if (t <= h) {
            res = m;
            r = m - 1;
        } else {
            l = m + 1;
        }
    }

    return res;    
};