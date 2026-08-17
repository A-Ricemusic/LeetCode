/**
 * @param {string} s
 * @return {string}
 */
var smallestPalindrome = function(s) {
    let l = 1;
    let r = s.length - 2
    s = s.split("")
    while (l < r) {
        let i = l
        let j = r
        
        while (i > 0 && s[i].charCodeAt(0) < s[i - 1].charCodeAt(0)) {
            let tmp = s[i]
            s[i] = s[i - 1]
            s[i - 1] = tmp
            tmp = s[j]
            s[j] = s[j + 1]
            s[j + 1] = tmp
            i--;
            j++;
        }
        l++;
        r--;
    }

    return s.join("")
    
};