/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
    const hashMap = new Map()
    let l = 0;
    let res = 0;
    const n = s.length;
    for (let r = 0; r < n; r++) {
        hashMap.set(s[r], (hashMap.get(s[r]) ?? 0) + 1);
        while (hashMap.size === 3) {
            res += n - r;
            hashMap.set(s[l], (hashMap.get(s[l]) ?? 0) - 1);
            if (hashMap.get(s[l]) === 0) {
                hashMap.delete(s[l]);
            }
            l++;
        }
    }


    return res;
    
};