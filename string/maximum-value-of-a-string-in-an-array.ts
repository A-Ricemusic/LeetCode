function maximumValue(strs: string[]): number {
    let maxValue: number = 0;
    let num: number = 0;

    for (let str of strs) {
        if (isOnlyDigits(str)) {
          num = parseInt(str, 10);  
        } else {
            num = str.length
        }
        maxValue = Math.max(maxValue, num)
    }
    return maxValue;
};


function isOnlyDigits(str: string): boolean  {
    for (let char of str) {
        if (char < '0' || char > '9') {
            return false
        }
    }
    return true;
}