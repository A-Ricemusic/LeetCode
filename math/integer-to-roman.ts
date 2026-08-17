function intToRoman(num: number): string {
    let romanNumerals: Record<string, number> = {
        "M": 1000,
        "CM": 900,
        "D": 500,
        "CD": 400,
        "C": 100,
        "XC": 90,
        "L": 50,
        "XL": 40,
        "X": 10,
        "IX": 9,
        "V": 5,
        "IV": 4,
        "I": 1
    }
    let result: string[] = []

    for (let char in romanNumerals) {
        let current: number = Math.floor(num / romanNumerals[char]);
        if (current === 0) {
            continue;
        } else {
            for (let j = 0; j < current; j++) { 
                result.push(char);
            }
            num %= romanNumerals[char]
        }
    }
    return result.join("");
    
};