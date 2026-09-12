/**
 * @param {string} s
 * @return {string[]}
 visited = ["a","b","bc","c"]
 curr = "cc"
 s = "abbccccd"

 lopp {
    curr += s[i]
    curr not in vis
        vis.add(curr)
        curr = ""
 }
 */
var partitionString = function(s) {
    const visited = new Set();
    let curr = "";
    for (const char of s) {
        curr += char
        if (!visited.has(curr)) {
            visited.add(curr);
            curr = ""
        }
    }

    return [...visited]
    
};