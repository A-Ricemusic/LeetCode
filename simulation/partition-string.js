/**
 * @param {string} s
 * @return {string[]}
 
n = length of string
m = amt of segments
 time: o(n)
 space: o(n) 
 */
var partitionString = function(s) {
    const root = {};
    const res = [];
    let node = root;
    let start = 0;
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (!(char in node)) {
            node[char] = {};
            res.push(s.slice(start, i + 1));
            start = i + 1;
            node = root;
        } else {
            node = node[char]
        }
    }

    return res;
    
};