function isValid(s: string): boolean {
    let stack: string[] = [];
    let validParentheses: Record<string, string> = {
        "(": ")",
        "[": "]",
        "{": "}"
    }

    for (let i: number = 0; i < s.length; i++) {
        let currentChar: string = s[i]
        if (currentChar in validParentheses) {
            stack.push(currentChar);
        }
        else {
            if (stack.length === 0) {
                return false;
            }
            let charFromStack: string | undefined = stack.pop();
            if (validParentheses[charFromStack] !== currentChar ){
                return false;
            } 
        }
    }
    return stack.length === 0;
};