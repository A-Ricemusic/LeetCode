/**
 * @param {string} s
 * @return {string}
 */
var smallestPalindrome = function(s) {
    const part = Math.floor(s.length / 2);
    const base = s.substring(0, part).split("").toSorted();
    const mid = s.length % 2 ===1 ? s[part] : "";
    const reversed = base.toReversed();

    return base.join("") + mid + reversed.join("")
};