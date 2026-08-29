/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const arr = s.split(" ")
    const res = []
    for (const word of arr) {
        const arr2 = word.split("")
        let l = 0;
        let r = arr2.length - 1;
        arr2.reverse();
        res.push([...arr2].join(""))
    }

    return res.join(" ")
    
};