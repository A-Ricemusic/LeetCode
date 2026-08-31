/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
    const hashMap = new Map();
    let l = 0;
    let res = 0;

    /* 
    s = "eceba", k = 2
    l = 2
    r = 3
    res = 3
    {
    e: 1
    b: 1
    }
    */
    for (let r = 0; r < s.length; r++) {
        hashMap.set(s[r], (hashMap.get(s[r]) || 0) + 1);
        while (hashMap.size > k) {
            hashMap.set(s[l], hashMap.get(s[l]) - 1);
            if (hashMap.get(s[l]) === 0) hashMap.delete(s[l]);
            l++;
        };
        res = Math.max(res, r - l + 1);
    }


    return res;   
    
};