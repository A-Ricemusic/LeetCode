/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var longestCommonPrefix = function(arr1, arr2) {
    const prefix = new Set()

    for (let val of arr1) {
        while (val > 0 && !prefix.has(val)) {
            prefix.add(val)
            val = Math.floor(val / 10)
        }
    }

    let res = 0

    for (let val of arr2) {
        while (val > 0 && !prefix.has(val)) {
            val = Math.floor(val / 10);
        }
        if (val > 0) {
            res = Math.max(res, String(val).length)
        }
    }

    return res;
    
};