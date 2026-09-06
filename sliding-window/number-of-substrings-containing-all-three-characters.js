/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
    let l = 0;
    let hashMap = new Map();
    let match = 0;
    let res = 0;
    let len = s.length;
    hashMap.set("a", 0);
    hashMap.set("b",0);
    hashMap.set("c",0);

    
    for (let r = 0; r < s.length; r++) {
        hashMap.set(s[r], hashMap.get(s[r]) + 1);
        if (hashMap.get(s[r]) === 1) {
            match++;
        }

        while (match === 3) {
            hashMap.set(s[l], hashMap.get(s[l]) - 1);
            if (hashMap.get(s[l]) === 0) {
                match--;
            }
            l++;
            res += len - r;
        }
    }
    return res;
};