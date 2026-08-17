function longestValidParentheses(s: string): number {

    if (s.length === 0 ) {
        return 0;
    }

    let left: number = 0
    let right: number = 0;
    let max: number = 0;

    for (let char of s) {
        if (char === "(") {
            left++;
        } else {
            right++;
        }
        if (left === right) {
            max = Math.max(max, left * 2)
        } else if (right > left) {
            left = 0;
            right = 0;
        }
    }

    left = 0;
    right = 0;

    for (let i = s.length; i >=0; i--) {
        if (s[i] === ")") {
            right++;
        } else {
            left++;
        }
        if (left === right) {
            max = Math.max(max, left * 2)
        } else if (left > right) {
            left = 0;
            right = 0;
        }
    }

    return max
    
};