/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function(x, y, z) {
    const abs1 = Math.abs(z - x);
    const abs2 = Math.abs(z - y);
    if (abs1 < abs2) {
        return 1
    } else if (abs1 > abs2) {
        return 2;
    } else {
        return 0;
    }
    
};