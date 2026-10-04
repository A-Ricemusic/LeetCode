/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
  arr = [1,1,1,0,0.....] = 1,1,1,0000
  curr = [0,0,0,0,0,0]
 */
var findAnagrams = function(s, p) {
    const arr = new Array(26).fill(0);
    for (const char of p) {
        arr[char.charCodeAt(0) - "a".charCodeAt(0)]++;
    }
    const key1 = arr.join(",");
    let l = 0;
    const curr = new Array(26).fill(0);
    let res = [];
    for (let r = 0; r < s.length; r++) {
        curr[s[r].charCodeAt(0) - "a".charCodeAt(0)]++;
        if (r - l + 1 > p.length) {
            curr[s[l].charCodeAt(0) - "a".charCodeAt(0)]--;
            l++;
        }
        const key2 = curr.join(",");
        if (key1 === key2) {
            res.push(l);
        }
    }

    return res;
    
};