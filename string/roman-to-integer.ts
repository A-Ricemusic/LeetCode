function romanToInt(s: string): number {

    let romanNumeral: Record<string,number> = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };
    
    let left: number = 0;
    let n: number = s.length;
    let result: number = 0;
    while (left < n) {
        if (left + 1 < n && romanNumeral[s[left]] < romanNumeral[s[left + 1]]) {
            result += romanNumeral[s[left + 1]] - romanNumeral[s[left]];
            left += 2;

        } else {
            result += romanNumeral[s[left]]
            left++;
        }
    }
    return result;
};