/**
 * @param {string} s
 * @return {number}"
 */
var minimumDeletions = function(s) {
    let res = 0
    let bCount = 0

    for (const c of s) {
        if (c === "a") {
            res = Math.min(res + 1, bCount);
        } else {
            bCount++;
        } 
    }

    return res;
    
};