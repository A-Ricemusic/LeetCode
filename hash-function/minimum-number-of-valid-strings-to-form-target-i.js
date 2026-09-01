/**
 * @param {string[]} words
 * @param {string} target
 * @return {number}
 */
var minValidStrings = function(words, target) {
    let count = 0;
    let i = 0;
    
    while (i < target.length) {
        let bestLen = 0;
        for (let w of words) {
            let len = 0;
            while (i + len < target.length && 
                   len < w.length && 
                   target[i + len] === w[len]) {
                len++;
            }
            bestLen = Math.max(bestLen, len);
        }
        if (bestLen === 0) return -1;
        i += bestLen;
        count++;
    }
    return count;
};