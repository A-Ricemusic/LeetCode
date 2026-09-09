/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 
 

 */
var fractionToDecimal = function(numerator, denominator) {
    if (numerator === 0) return "0";
    let fraction = [];
    if ((numerator < 0) ^ (denominator < 0)) {
        fraction.push("-");
    }
    let dividend = Math.abs(numerator);
    let divisor = Math.abs(denominator);
    fraction.push(Math.floor(dividend / divisor).toString())
    let remainder = dividend % divisor;

    if (remainder === 0) {
        return fraction.join("");
    }
    fraction.push(".");
    const hashMap = new Map();
    while (remainder !== 0 ) {
        if (hashMap.has(remainder)) {
            fraction.splice(hashMap.get(remainder), 0, "(");
            fraction.push(")");
            break;
        }
        hashMap.set(remainder, fraction.length);
        remainder *= 10;
        fraction.push(Math.floor(remainder / divisor).toString());
        remainder %= divisor;
    }

    return fraction.join("");
    

    
};