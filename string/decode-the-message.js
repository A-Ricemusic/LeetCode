/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
    const arr = new Array(26).fill("");
    let  i = 0;
    for (const char of key) {
        if (char === " ") continue;
        const idx = char.charCodeAt(0) - "a".charCodeAt(0);
        const code = String.fromCharCode(("a".charCodeAt(0) + i));
        if (arr[idx] === "") {
            arr[idx] = code;
            i++;
        }
    }
    const res = [];
    for (const char of message) {
        if (char === " ") {
            res.push(char);
            continue;
        }; 
        const idx = char.charCodeAt(0) - "a".charCodeAt(0);
        res.push(arr[idx])
    }

    return res.join("")
    
};