/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}



exampe 2:
i = 5                  j = 3
 pushed = [1,2,3,4,5], popped = [4,3,5,1,2]
 stack = [1,2]


  example 1:
 i = 5                 j = 5
 pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
 stack = []
 */
var validateStackSequences = function(pushed, popped) {
    const stack = [];
    let i = 0;
    let j = 0;
    const n = pushed.length;
    while (i < n || j < n) {
        while ((stack.length === 0 || stack.at(-1) !== popped[j])) {
            if (i >= n) return false;
            stack.push(pushed[i]);
            i++;
        };
        while (stack.length !== 0 && stack.at(-1) === popped[j]) {
            stack.pop();
            j++;
        }
    }
    return i === n && j === n && stack.length === 0
};