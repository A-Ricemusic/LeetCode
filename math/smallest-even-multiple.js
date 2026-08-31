/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function(n) {
    const high = n * 2
    for (let i = n; i <= n * 2; i++) {
        if (i % n === 0 && i % 2 === 0) {
            return i
        }
    }
    
};