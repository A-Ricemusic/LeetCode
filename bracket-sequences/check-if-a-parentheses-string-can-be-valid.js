/**
 * @param {string} s
 * @param {string} locked
 * @return {boolean}
 */


var canBeValid = function(s, locked) {
    if (s.length % 2 === 1) return false; 

    let lockedStack = []
    let unlockedStack = []

    for (let i = 0; i < s.length; i++) {
        if (locked[i] === "0") {
            unlockedStack.push(i)
        }
        else if (s[i] === "(" && locked[i] === "1") {
            lockedStack.push(i)
        } else {
            if (lockedStack.length === 0 && unlockedStack.length === 0) {
                return false
            } else if (lockedStack.length > 0) {
                lockedStack.pop()
            } else {
                unlockedStack.pop()
            }
        }
    }

    while (lockedStack.length > 0 && unlockedStack.length > 0) {
        if (lockedStack.at(-1) > unlockedStack.at(-1)) {
            return false
        }
        lockedStack.pop()
        unlockedStack.pop()
    }

    return lockedStack.length === 0 && unlockedStack.length % 2 === 0

    
};