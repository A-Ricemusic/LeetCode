/**
 * @param {string} s
 * @return {number}
    {
        b: 2
        c: 1
    }
    l = 0
    r = 2
    res = 3
 "bcbbbcba"
 */
var maximumLengthSubstring = function(s) {
    const hashMap = new Map()
    let l = 0;
    let res = 0;
    for (let r = 0; r < s.length;  r++) {
        if (!hashMap.has(s[r])) {
            hashMap.set(s[r], 0);
        }
        const count1 = hashMap.get(s[r])
        hashMap.set(s[r], count1 + 1)
        while (hashMap.get(s[r]) > 2) {
            const count2 = hashMap.get(s[l])
            hashMap.set(s[l], count2 - 1)
            l++;
        }
        res = Math.max(res, r - l + 1)
    }
    return res;
};