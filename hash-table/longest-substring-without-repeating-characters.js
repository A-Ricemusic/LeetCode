/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const hashMap = new Map()
    let l = 0;
    let res = 0;

    for (let r = 0; r < s.length; r++) {
        hashMap.set(s[r], (hashMap.get(s[r]) || 0) + 1)
        while (hashMap.has(s[r]) && hashMap.get(s[r]) >= 2) {
            hashMap.set(s[l], (hashMap.get(s[l]) || 0) - 1)
            if (hashMap.get[s[l]] === 0) {
                hashMap.delete(s[l])
            }
            l++; 
        }
        res = Math.max(res, r - l + 1)
    }

    return res;
    
};