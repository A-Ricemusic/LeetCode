/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 res = [L,e,e,t,c,o,d,e," ",H,e,l,p,s," ","M",e," ",L]
 s = "LeetcodeHelpsMeLearn", spaces = [8,13,15]

 */
var addSpaces = function(s, spaces) {
    let res = [];
    let j = 0;
    for (let i = 0; i < s.length; i++) {
        if (j < spaces.length && i === spaces[j]) {
            res.push(" ");
            j++;
        }
        res.push(s[i])
    }

    return res.join("")
};