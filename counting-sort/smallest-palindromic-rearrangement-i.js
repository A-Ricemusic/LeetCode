/**
 * @param {string} s
 * @return {string}
 */
var smallestPalindrome = function(s) {
    const part = Math.floor(s.length / 2)
    const base = s.substring(0,part).split("").sort()
    const mid = s.length % 2 === 1? s[part] : ""
    return base.join("") + mid + base.reverse().join("")
    
};