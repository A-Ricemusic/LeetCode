function myAtoi(s: string): number {
    s = s.trimStart();
    
    let validCharacter: Record<string, number> = {
        "0": 0, "1": 1, "2": 2, "3": 3, "4": 4,
        "5": 5, "6": 6, "7": 7, "8": 8, "9": 9,
    };
    
    let isNegative: boolean = false;
    let currentNumber: number = 0;
    let startIndex: number = 0;

    if (s[0] === "-") {
        isNegative = true;
        startIndex = 1;
    } else if (s[0] === "+") {
        startIndex = 1;
    }

    for (let i = startIndex; i < s.length; i++) {
        if (s[i] in validCharacter) {
            currentNumber = currentNumber * 10 + validCharacter[s[i]];
        } else {
            break;
        }
    }    
     
    if (isNegative) {
        currentNumber = -1 * currentNumber;
    } 

    if (currentNumber < -(2 ** 31)) {
        return -(2 ** 31);
    } else if (currentNumber > (2 ** 31) - 1) {
        return (2 ** 31) - 1;
    } else {
        return currentNumber;
    }
}